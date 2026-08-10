/* Cross-device sync for the OSCE console/display.
   Relays state over a public MQTT-over-WebSocket broker so the examiner's
   Console (one machine) drives the candidate's Display (another machine).
   Only the station index, timer and reveal ids travel over the wire.
   Same-browser BroadcastChannel/localStorage still works as a fallback. */
(function(){
  var BROKER = "wss://broker.emqx.io:8084/mqtt";
  var BASE   = "neuro-osce/";

  function qsRoom(){
    try{ var r=new URLSearchParams(location.search).get('room');
      return r ? r.toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,8) : null;
    }catch(e){ return null; }
  }
  function gen(){ var c="ABCDEFGHJKMNPQRSTUVWXYZ23456789", s=""; for(var i=0;i<4;i++) s+=c.charAt(Math.floor(Math.random()*c.length)); return s; }
  function resolveRoom(create){
    var r=qsRoom();
    if(r) return r;
    if(create){
      try{ r=localStorage.getItem('osce-room'); }catch(e){}
      if(!r){ r=gen(); try{ localStorage.setItem('osce-room',r); }catch(e){} }
      return r;
    }
    return null;
  }

  window.OSCESync = function(opts){
    opts = opts || {};
    var room = resolveRoom(!!opts.create);
    var api = { room: room, connected:false, publish:function(){} };
    function status(s){ if(opts.onStatus) opts.onStatus(s, room); }
    if(!room){ status('noroom'); return api; }
    if(typeof mqtt === 'undefined'){ status('nolib'); return api; }

    var topic = BASE + room + '/state';
    var client;
    try{
      client = mqtt.connect(BROKER, { clientId:'osce_'+Math.random().toString(16).slice(2,10), clean:true, reconnectPeriod:2500, connectTimeout:8000, keepalive:30 });
    }catch(e){ status('error'); return api; }

    status('connecting');
    client.on('connect', function(){ api.connected=true; status('connected'); if(opts.subscribe) client.subscribe(topic, {qos:0}); if(opts.onOpen) opts.onOpen(api); });
    client.on('reconnect', function(){ status('connecting'); });
    client.on('close',   function(){ api.connected=false; status('offline'); });
    client.on('offline', function(){ api.connected=false; status('offline'); });
    client.on('error',   function(){ status('error'); });
    client.on('message', function(t, payload){ if(opts.onState){ try{ opts.onState(JSON.parse(payload.toString())); }catch(e){} } });

    api.publish = function(state){ if(!api.connected) return; try{ client.publish(topic, JSON.stringify(state), {qos:0, retain:true}); }catch(e){} };
    return api;
  };
})();
