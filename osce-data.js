window.OSCE = {
  brand: "Neurology · structured-oral teaching stations · modelled on the Saudi Board (SCFHS) format",
  note: "Teaching structured-oral (SOE) stations — 4 of the real exam's 8. Scoring band is practice feedback only, not official standard-setting.",
  stations: [
    {
      id:"s1", n:1,
      present:"Sudden right-sided weakness and slurred speech",
      dx:"Acute ischaemic stroke (left MCA) · thrombolysis / thrombectomy",
      card:'<p style="font-size:16px;line-height:1.75;margin:0 0 14px">You are the on-call neurology registrar in the Emergency Department at 03:10. A 68-year-old man is brought by his family with sudden right-sided weakness and slurred speech that began about 90 minutes ago (last seen well 90 minutes ago). Background: hypertension, type 2 diabetes, and atrial fibrillation not on anticoagulation; no recent surgery, trauma, bleeding or anticoagulant use; independent at baseline.</p>'
        +'<div class="kicker">On examination</div><ul class="findlist"><li>Alert, GCS 15; expressive dysphasia with dysarthria.</li><li>Eyes deviated to the left; right homonymous hemianopia and inattention on the right.</li><li>Right facial droop; right arm 1/5, right leg 2/5; reduced sensation on the right.</li><li>NIHSS approximately 18.</li></ul>'
        +'<div class="kicker" style="margin-top:12px">Vital signs</div><div class="vitals"><div class="vital"><div class="lab">BP</div><div class="num">182/98</div></div><div class="vital"><div class="lab">HR</div><div class="num">98 irr</div></div><div class="vital"><div class="lab">RR</div><div class="num">16</div></div><div class="vital"><div class="lab">SpO₂</div><div class="num">97%</div></div><div class="vital"><div class="lab">Temp</div><div class="num">36.8</div></div><div class="vital"><div class="lab">Glucose</div><div class="num">8.1</div></div></div>',
      task:"You are now considering acute stroke management. Assess and manage this patient. You have 10 minutes; ask the examiner for any investigations you would like.",
      show:[
        {id:"bloods", label:"Bloods & ECG", html:'<div class="datagrid"><div class="datapill"><b>Hb</b>141 g/L</div><div class="datapill"><b>WCC</b>8.2 ×10⁹/L</div><div class="datapill"><b>Platelets</b>246 ×10⁹/L</div><div class="datapill"><b>Na / K</b>139 / 4.2 mmol/L</div><div class="datapill"><b>Creatinine</b>84 µmol/L</div><div class="datapill"><b>INR / aPTT</b>1.0 / normal</div><div class="datapill"><b>Glucose</b>8.1 mmol/L</div><div class="datapill"><b>ECG</b>Atrial fibrillation</div></div>'},
        {id:"ct", label:"Non-contrast CT head", img:"osce-images/stroke-ct.jpg", cap:"Non-contrast CT head — axial"},
        {id:"cta", label:"CT angiogram", img:"osce-images/stroke-cta-left.jpg", cap:"CT angiogram — intracranial arteries"}
      ],
      items:[
        {domain:"Data-Gathering", q:"What further points would you confirm on history before reperfusion?", model:"Exact time last-known-well (90 min); thrombolysis contraindication screen — recent surgery/trauma, MI, bleeding/anticoagulation, prior stroke or ICH; exclude hypoglycaemia.", max:2},
        {domain:"Reasoning", q:"Localise the lesion and give the likely mechanism.", model:"Left (dominant) MCA territory — right face/arm>leg weakness, expressive dysphasia, left gaze deviation, right hemianopia/inattention; AF → likely cardioembolic. NIHSS ≈ 18 (weighted to LOC, scores higher in dominant-hemisphere strokes, over-scores old deficits).", max:2},
        {domain:"Decision-Making", q:"What investigations, and in what order?", model:"POC glucose (done); non-contrast CT first to exclude haemorrhage; CT angiography for large-vessel occlusion; CBC/platelets, coagulation/INR, U&E, ECG. Don't delay lysis for labs.", max:2},
        {domain:"Reasoning", q:"Interpret the CT and the CT angiogram.", model:"NCCT: hyperdense left MCA sign, no haemorrhage, early loss of grey–white differentiation left MCA territory. CTA: occlusion of the left M1 segment (large-vessel occlusion).", max:2},
        {domain:"Decision-Making", q:"Is he a thrombolysis candidate? Agent and dose?", model:"Yes — within 4.5 h, no haemorrhage, no contraindication. Alteplase 0.9 mg/kg (max 90 mg) or tenecteplase 0.25 mg/kg (max 25 mg).", max:2},
        {domain:"Reasoning", q:"Main contraindications to thrombolysis?", model:"Absolute: ICH, active bleeding, uncontrollable BP >185/110, platelets <100, INR >1.7/therapeutic anticoagulation, ischaemic stroke or serious head trauma <3 months. Relative: recent surgery (~10–14 d), GI/GU bleed, DOAC <48 h. Hypoglycaemia = correct and reassess.", max:2},
        {domain:"Decision-Making", q:"BP is 182/98 — manage it around thrombolysis.", model:"<185/110 before lysis (acceptable now; treat if it rises — labetalol/nicardipine); keep <180/105 for 24 h after. If not reperfusing, permissive hypertension, treat only >220/120.", max:2},
        {domain:"Decision-Making", q:"The CTA shows an M1 occlusion — what now?", model:"Refer for mechanical thrombectomy (proximal LVO). ≤6 h; up to 24 h in selected mismatch (DAWN/DEFUSE-3); selected large-core also benefit. Bridging thrombolysis if eligible; don't delay transfer.", max:2},
        {domain:"Professional Attitude", q:"Consent the patient/family for thrombolysis.", model:"Clear, empathetic, time-critical explanation — ~6% symptomatic haemorrhage risk vs meaningful benefit; shared decision; document.", max:2},
        {domain:"Decision-Making", q:"During the infusion: severe headache and a drop in GCS; then lip swelling.", model:"Stop the infusion; urgent non-contrast CT; CBC/coagulation/fibrinogen; reverse (cryoprecipitate ± platelets/TXA) + neurosurgery. Oro-lingual angio-oedema: secure airway, IV methylprednisolone + antihistamine ± adrenaline.", max:2},
        {domain:"Decision-Making", q:"Post-thrombolysis care and secondary prevention.", model:"Stroke-unit/monitored 24 h; NPO then swallow screen; IV saline (no dextrose); aspirin after 24 h + repeat CT first; IPC from admission, pharmacological VTE prophylaxis after 24 h; anticoagulate for AF by infarct size; statin.", max:2}
      ]
    },

    {
      id:"s2", n:2,
      present:"Progressive breathlessness and difficulty swallowing",
      dx:"Myasthenic crisis · neuromuscular respiratory failure",
      card:'<p style="font-size:16px;line-height:1.75;margin:0 0 14px">You are the medical registrar in the Emergency Department resuscitation area. A 34-year-old woman with known myasthenia gravis (on pyridostigmine) presents with three days of worsening breathlessness, nasal-sounding speech and difficulty swallowing; she can no longer lie flat. She had a chest infection last week and was started on azithromycin. No chest pain.</p>'
        +'<div class="kicker">On examination</div><ul class="findlist"><li>Bilateral drooping eyelids, worse on sustained upgaze.</li><li>Nasal speech, weak cough, pooled secretions, poor swallow.</li><li>Weak neck flexion; proximal fatigable limb weakness; reflexes preserved; no sensory loss.</li><li>Using accessory muscles; cannot complete a sentence in one breath.</li></ul>'
        +'<div class="kicker" style="margin-top:12px">Vital signs</div><div class="vitals"><div class="vital"><div class="lab">RR</div><div class="num">28</div></div><div class="vital"><div class="lab">SpO₂</div><div class="num">92%</div></div><div class="vital"><div class="lab">HR</div><div class="num">112</div></div><div class="vital"><div class="lab">BP</div><div class="num">138/84</div></div><div class="vital"><div class="lab">Temp</div><div class="num">37.4</div></div><div class="vital"><div class="lab">Breath count</div><div class="num">12</div></div></div>',
      task:"Recognise and manage this patient. You have 10 minutes; ask the examiner for any bedside tests or investigations you would like.",
      show:[
        {id:"ptosis", label:"Clinical photograph", img:"osce-images/mg-ptosis.jpg", cap:"Clinical photograph — eyes"},
        {id:"resp", label:"Bedside respiratory tests", html:'<div class="datagrid"><div class="datapill"><b>FVC</b>0.9 L</div><div class="datapill"><b>MIP (NIF)</b>−22 cmH₂O</div><div class="datapill"><b>MEP</b>+30 cmH₂O</div><div class="datapill"><b>Single-breath count</b>12</div><div class="datapill"><b>Cough</b>Weak, wet</div></div>'},
        {id:"abg", label:"ABG & bloods", html:'<div class="datagrid"><div class="datapill"><b>ABG (air)</b>pH 7.34 · pCO₂ 52 mmHg · pO₂ 68 mmHg · HCO₃ 24</div><div class="datapill"><b>CBC / CRP</b>Mild leucocytosis, CRP 40</div><div class="datapill"><b>Chest X-ray</b>Right basal infiltrate</div><div class="datapill"><b>Pupils</b>Normal; no fasciculations</div></div>'}
      ],
      items:[
        {domain:"Data-Gathering", q:"Diagnosis, and what in the observations makes it a crisis?", model:"Myasthenic crisis — an MG exacerbation causing (impending) respiratory failure or inability to protect the airway. Danger signs to read off the obs and exam: tachypnoea (RR 28), falling saturations (92%), single-breath count of 12, weak cough and bulbar weakness.", max:2},
        {domain:"Data-Gathering", q:"How do you assess respiratory status at the bedside?", model:"Serial FVC and MIP/NIF (maximal inspiratory pressure), single-breath count, cough strength, neck-flexion strength, orthopnoea, sentence length.", max:2},
        {domain:"Reasoning", q:"Why not rely on the SpO₂ / ABG?", model:"In neuromuscular failure the saturation falls and the CO₂ rises only late — the FVC/NIF trend leads. This patient already shows failure: FVC 0.9 L, NIF −22, rising CO₂ (52 mmHg), SpO₂ 92%.", max:2},
        {domain:"Decision-Making", q:"When would you secure the airway?", model:"The 20·30·40 guide: FVC < 20 mL/kg (≈ < 1 L), MIP/NIF failing to reach −30 cmH₂O (magnitude < 30), MEP < 40 cmH₂O — or a falling trend. These support the airway decision; they are not automatic triggers, and bulbar failure alone warrants intubation. This patient qualifies: FVC 0.9 L (< 1 L), MIP −22 cmH₂O, MEP +30 cmH₂O, weak wet cough, bulbar failure and rising CO₂.", max:2},
        {domain:"Reasoning", q:"What precipitated this, and what to screen for?", model:"Infection (pneumonia) + a precipitating drug (the macrolide). Also surgery, pregnancy, tapering immunosuppression, thyroid. Avoid: aminoglycosides, fluoroquinolones, macrolides, β-blockers, IV magnesium, procainamide, quinine, checkpoint inhibitors.", max:2},
        {domain:"Reasoning", q:"Distinguish from a cholinergic crisis.", model:"Cholinergic = over-treatment → muscarinic excess (SLUDGE, miosis, bradycardia, sweating) plus nicotinic (fasciculations, weakness). Here: normal pupils, no fasciculations, clear precipitant → myasthenic.", max:2},
        {domain:"Decision-Making", q:"Outline definitive management.", model:"ICU; airway/ventilatory support; treat pneumonia and stop the offending drug; IVIG 2 g/kg over 2–5 days or plasma exchange; steroids to follow (beware transient worsening).", max:2},
        {domain:"Decision-Making", q:"Pyridostigmine peri-intubation?", model:"Hold it when intubated (reduces secretions, avoids cholinergic confusion); restart later.", max:2},
        {domain:"Professional Attitude", q:"Communication and escalation.", model:"Early, clear escalation to ICU/anaesthesia; explains to patient/family; structured hand-over.", max:2}
      ]
    },

    {
      id:"s3", n:3,
      present:"Painful loss of vision in one eye",
      dx:"Optic neuritis · first demyelinating event (possible MS — not yet confirmed)",
      card:'<p style="font-size:16px;line-height:1.75;margin:0 0 14px">You are the on-call neurology registrar in the Emergency Department. A 27-year-old woman presents with four days of progressive blurring and dimming of vision in her left eye, with pain that is worse on eye movement and colours that look “washed out”. Six months ago she had transient numbness of the right leg for about two weeks, which she did not report. Otherwise well; no regular medications; non-smoker.</p>'
        +'<div class="kicker">On examination</div><ul class="findlist"><li>Left visual acuity 6/24 (right 6/6); reduced colour vision on the left, red washed out.</li><li>On the swinging-light test the left pupil dilates when the light is moved to it (left RAPD).</li><li>Loss of central vision on the left; pain on eye movement.</li><li>Fundus: normal optic disc.</li></ul>'
        +'<div class="kicker" style="margin-top:12px">Vital signs</div><div class="vitals"><div class="vital"><div class="lab">BP</div><div class="num">118/72</div></div><div class="vital"><div class="lab">HR</div><div class="num">76</div></div><div class="vital"><div class="lab">Temp</div><div class="num">36.9</div></div></div>',
      task:"Assess and manage this patient. You have 10 minutes; ask the examiner for any investigations you would like.",
      show:[
        {id:"orbit", label:"MRI orbits", html:'<ul class="findlist"><li>MRI orbits (fat-saturated): the left optic nerve is mildly swollen with high T2 signal, and enhances after contrast.</li></ul>'},
        {id:"mri", label:"MRI brain", img:"osce-images/ms-brain-mri-axial-flair.png", cap:"MRI brain — axial FLAIR"}
      ],
      items:[
        {domain:"Data-Gathering", q:"Key confirmatory signs and the diagnosis?", model:"Left optic neuritis — subacute painful monocular loss (worse on eye movement), RAPD, red/colour desaturation, central scotoma; fundus often normal.", max:2},
        {domain:"Data-Gathering", q:"How do you elicit a RAPD?", model:"Swinging-flashlight test in a dim room — when the light swings to the affected eye, both pupils paradoxically dilate (reduced afferent input).", max:2},
        {domain:"Decision-Making", q:"What investigations?", model:"MRI brain + orbits with gadolinium; acuity/colour/fields ± OCT; bloods to exclude mimics; if atypical → AQP4/MOG antibodies; consider LP for oligoclonal bands.", max:2},
        {domain:"Reasoning", q:"Interpret the MRI and its link to MS.", model:"Left optic nerve T2 change/enhancement; brain shows periventricular ovoid lesions → dissemination in space. This is a first demyelinating event — MS is NOT yet confirmed: a gadolinium study (enhancing plus non-enhancing lesions), a documented earlier episode, or CSF oligoclonal bands would establish dissemination in time (McDonald 2017/2024; optic nerve now counts as a region).", max:2},
        {domain:"Reasoning", q:"Atypical features suggesting NMOSD / MOGAD?", model:"Severe or bilateral loss, very poor recovery, marked/persistent pain, simultaneous/recurrent. AQP4: chiasmal/posterior, severe residual. MOGAD: bilateral longitudinal anterior nerve, disc swelling, perineural enhancement. Send AQP4/MOG.", max:2},
        {domain:"Decision-Making", q:"Acute treatment?", model:"IV methylprednisolone 1 g/day for 3–5 days (± short oral taper) — speeds recovery. Avoid standard-dose oral prednisone alone (ONTT: higher recurrence). PLEX if severe/steroid-refractory.", max:2},
        {domain:"Reasoning", q:"Prognosis?", model:"Most recover good vision over weeks; a common first demyelinating event, raising MS risk stratified by baseline MRI lesion load.", max:2},
        {domain:"Professional Attitude", q:"Counsel this young patient about a possible MS diagnosis.", model:"Honest, staged, hopeful; explains this is a first event and MS is not yet confirmed; checks understanding; arranges MS-clinic follow-up and support; avoids premature labelling.", max:2}
      ]
    },

    {
      id:"s4", n:4,
      present:"Prolonged, ongoing convulsion",
      dx:"Convulsive status epilepticus",
      card:'<p style="font-size:16px;line-height:1.75;margin:0 0 14px">You are the medical registrar leading the resuscitation. A 24-year-old man with known epilepsy is brought in by ambulance and is convulsing — generalised tonic–clonic activity that, according to the paramedics, has been continuous for at least 8 minutes. He ran out of his medication a few days ago. The paramedics gave <b>IV lorazepam 2 mg</b> about 4 minutes ago with no effect. No trauma or fever reported.</p>'
        +'<div class="kicker">On arrival (still seizing)</div><div class="vitals"><div class="vital"><div class="lab">State</div><div class="num">Seizing</div></div><div class="vital"><div class="lab">SpO₂</div><div class="num">89%</div></div><div class="vital"><div class="lab">HR</div><div class="num">126</div></div><div class="vital"><div class="lab">BP</div><div class="num">148/90</div></div><div class="vital"><div class="lab">Temp</div><div class="num">37.9</div></div><div class="vital"><div class="lab">Glucose</div><div class="num">?</div></div></div>',
      task:"Manage this patient now. You have 10 minutes; ask the examiner for results as you need them.",
      show:[
        {id:"labs", label:"Point-of-care & bloods", html:'<div class="datagrid"><div class="datapill"><b>Capillary glucose</b>6.4 mmol/L</div><div class="datapill"><b>Na</b>137 mmol/L</div><div class="datapill"><b>Ca / Mg</b>Normal</div><div class="datapill"><b>AED level</b>Sub-therapeutic</div><div class="datapill"><b>Tox / alcohol</b>Pending</div><div class="datapill"><b>ABG</b>Mixed acidosis, lactate raised</div></div>'},
        {id:"eeg", label:"EEG (in ICU)", img:"osce-images/status-eeg-alt-seizure-onset.png", cap:"EEG — multi-channel recording"}
      ],
      items:[
        {domain:"Data-Gathering", q:"Define status epilepticus.", model:"≥5 minutes of continuous seizure, or ≥2 seizures without recovery of consciousness in between (operational, convulsive).", max:2},
        {domain:"Decision-Making", q:"Walk through your first five minutes.", model:"ABC, high-flow O₂, airway adjuncts/suction, two IV cannulae, monitoring; capillary glucose (thiamine before glucose if malnourished/alcohol — never delay dextrose for confirmed hypoglycaemia); give an adequate first-line benzodiazepine immediately (the pre-hospital 2 mg lorazepam was sub-therapeutic); send bloods; time the seizure.", max:2},
        {domain:"Decision-Making", q:"First-line drug, route and dose?", model:"A benzodiazepine — lorazepam 0.1 mg/kg IV (max 4 mg/dose, may repeat once), or IM midazolam 10 mg if no IV, or diazepam 0.15–0.2 mg/kg IV (max 10 mg). The pre-hospital 2 mg was under-dosed.", max:2},
        {domain:"Reasoning", q:"Why is timing important; commonest error?", model:"Longer seizures are harder to stop and cause injury — escalate by the clock. Commonest error: under-dosing benzodiazepines and not moving to second-line.", max:2},
        {domain:"Decision-Making", q:"Still fitting after an adequate benzodiazepine — next?", model:"Second-line IV ASM at full loading dose — levetiracetam 60 mg/kg (max 4.5 g), valproate 40 mg/kg (max 3 g), or fosphenytoin 20 mg PE/kg (max 1.5 g PE). ESETT: broadly equivalent.", max:2},
        {domain:"Decision-Making", q:"It is now refractory — plan?", model:"RSI + continuous anaesthetic infusion (midazolam, propofol, or pentobarbital); ICU with continuous EEG to confirm suppression / detect non-convulsive status.", max:2},
        {domain:"Reasoning", q:"Causes to exclude, and how?", model:"Here AED non-adherence. Also hypoglycaemia, hyponatraemia, hypocalcaemia, CNS infection, stroke/haemorrhage, trauma, toxins/alcohol withdrawal, eclampsia. Work-up: glucose/electrolytes, AED levels, tox, CT head, LP if infection suspected, EEG; empiric aciclovir/antibiotics if meningoencephalitis likely.", max:2},
        {domain:"Reasoning", q:"Interpret the EEG and its role.", model:"Generalised epileptiform discharges; after paralysis/anaesthesia, cEEG detects ongoing non-convulsive status and titrates to seizure (or burst) suppression.", max:2},
        {domain:"Professional Attitude", q:"Team leadership and communication.", model:"Clear team roles, closed-loop instructions, early ICU/anaesthesia call, family update once stable.", max:2}
      ]
    }
  ]
};
