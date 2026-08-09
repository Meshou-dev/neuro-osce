window.OSCE = {
  brand: "Saudi Board of Neurology · Final Clinical Examination · Part II",
  stations: [
    {
      id:"s1", n:1,
      present:"Sudden right-sided weakness and slurred speech",
      card:"You are the on-call neurology registrar in the Emergency Department at 03:10. A 68-year-old man is brought in by his family with sudden right-sided weakness and slurred speech that began about 90 minutes ago.",
      task:"Assess and manage this patient. You have 10 minutes. The examiner will guide the station and provide information only when you request it.",
      dx:"Acute ischaemic stroke (left MCA) · thrombolysis / thrombectomy",
      show:[
        {id:"hx", label:"History / collateral", html:'<ul class="findlist"><li>Last seen well 90 minutes ago; found unable to lift the right arm and speaking unclearly.</li><li>Past history: hypertension, type 2 diabetes, atrial fibrillation — not on anticoagulation.</li><li>No recent surgery, trauma or bleeding; on no anticoagulants; independent at baseline.</li></ul>'},
        {id:"vitals", label:"Vital signs", html:'<div class="vitals"><div class="vital warn2"><div class="lab">BP</div><div class="num">182/98</div></div><div class="vital"><div class="lab">HR</div><div class="num">98 irr</div></div><div class="vital"><div class="lab">RR</div><div class="num">16</div></div><div class="vital"><div class="lab">SpO₂</div><div class="num">97%</div></div><div class="vital"><div class="lab">Temp</div><div class="num">36.8</div></div><div class="vital"><div class="lab">Glucose</div><div class="num">8.1</div></div></div>'},
        {id:"exam", label:"Examination findings", html:'<ul class="findlist"><li>Alert, GCS 15.</li><li>Slurred speech with word-finding difficulty.</li><li>Eyes deviated to the left; does not respond to objects on the right side.</li><li>Right facial droop.</li><li>Right arm 1/5, right leg 2/5.</li><li>Reduced sensation and inattention on the right.</li></ul>'},
        {id:"bloods", label:"Bloods & ECG", html:'<div class="datagrid"><div class="datapill"><b>Glucose</b>8.1 mmol/L</div><div class="datapill"><b>Platelets</b>246 ×10⁹/L</div><div class="datapill"><b>INR</b>1.0</div><div class="datapill"><b>aPTT</b>Normal</div><div class="datapill"><b>Creatinine</b>84 µmol/L</div><div class="datapill"><b>ECG</b>Irregularly irregular</div></div>'},
        {id:"ct", label:"Non-contrast CT head", img:"osce-images/stroke-ct.jpg", cap:"Non-contrast CT head — axial"},
        {id:"cta", label:"CT angiogram", img:"osce-images/stroke-cta-left.jpg", cap:"CT angiogram — intracranial arteries"}
      ],
      domains:[
        {name:"Data-Gathering Skills", items:[
          {q:"What must you establish on history?", model:"Time last-known-well (90 min); thrombolysis contraindication screen — recent surgery/trauma, MI, bleeding/anticoagulation, prior stroke or ICH; hypoglycaemia symptoms.", max:2},
          {q:"Interpret the examination and localise.", model:"Left (dominant) MCA territory — right face/arm>leg weakness, expressive dysphasia, left gaze deviation, right hemianopia/inattention; AF → likely cardioembolic. (NIHSS ≈ 18.)", max:2},
          {q:"What investigations, and in what order?", model:"POC glucose; non-contrast CT first (exclude bleed); CT angiography for large-vessel occlusion; CBC/platelets, coagulation/INR, U&E, ECG. Don't delay lysis for labs.", max:2}
        ]},
        {name:"Reasoning & Analytical Skills", items:[
          {q:"Interpret the CT and CTA.", model:"NCCT: hyperdense left MCA sign, no haemorrhage, early loss of grey–white differentiation left MCA territory. CTA: occlusion of the left M1 segment (large-vessel occlusion).", max:2},
          {q:"Is he a thrombolysis candidate? Agent and dose?", model:"Yes — within 4.5 h, no haemorrhage, no contraindication. Alteplase 0.9 mg/kg (max 90 mg) or tenecteplase 0.25 mg/kg (max 25 mg).", max:2},
          {q:"Main contraindications to thrombolysis?", model:"Absolute: ICH, active bleeding, uncontrollable BP >185/110, platelets <100, INR >1.7/therapeutic anticoagulation, ischaemic stroke or serious head trauma <3 months. Relative: recent surgery (~10–14 d), GI/GU bleed, DOAC <48 h. Hypoglycaemia = correct and reassess.", max:2}
        ]},
        {name:"Decision-Making Skills", items:[
          {q:"BP 182/98 — manage around thrombolysis.", model:"Must be <185/110 before lysis (acceptable now; treat if it rises — labetalol/nicardipine); keep <180/105 for 24 h after. If not reperfusing, permissive hypertension, treat only >220/120.", max:2},
          {q:"CTA shows M1 occlusion — what now?", model:"Refer for mechanical thrombectomy (proximal LVO). ≤6 h; up to 24 h in selected mismatch (DAWN/DEFUSE-3); selected large-core also now benefit. Bridging thrombolysis if eligible; don't delay transfer.", max:2},
          {q:"Severe headache + drop in GCS during infusion; and lip swelling?", model:"Stop infusion; urgent CT; CBC/coagulation/fibrinogen; reverse (cryoprecipitate ± platelets/TXA) + neurosurgery. Oro-lingual angio-oedema: secure airway, IV methylprednisolone + antihistamine ± adrenaline.", max:2},
          {q:"Post-thrombolysis care and secondary prevention.", model:"Stroke-unit/monitored 24 h; NPO then swallow screen; IV saline (no dextrose); aspirin after 24 h + repeat CT first; IPC from admission, pharmacological VTE prophylaxis after 24 h; anticoagulate for AF by infarct size; statin.", max:2}
        ]},
        {name:"Professional Attitude", items:[
          {q:"Consent the family for thrombolysis.", model:"Clear, empathetic, time-critical explanation — ~6% symptomatic haemorrhage risk vs meaningful benefit; shared decision; document.", max:2}
        ]}
      ]
    },

    {
      id:"s2", n:2,
      present:"Progressive breathlessness and difficulty swallowing",
      card:"You are the medical registrar in the Emergency Department resuscitation area. A 34-year-old woman presents with three days of worsening breathlessness, nasal-sounding speech and difficulty swallowing. She can no longer lie flat.",
      task:"Assess and manage this patient. You have 10 minutes. The examiner will guide the station and provide information only when you request it.",
      dx:"Myasthenic crisis · neuromuscular respiratory failure",
      show:[
        {id:"hx", label:"History / collateral", html:'<ul class="findlist"><li>Known myasthenia gravis, on pyridostigmine.</li><li>Chest infection last week — started on azithromycin by a clinic.</li><li>Weakness fatigable, worse towards the evening; no chest pain; no other new drugs.</li></ul>'},
        {id:"vitals", label:"Vital signs", html:'<div class="vitals"><div class="vital warn2"><div class="lab">RR</div><div class="num">28</div></div><div class="vital flag"><div class="lab">SpO₂</div><div class="num">92%</div></div><div class="vital warn2"><div class="lab">HR</div><div class="num">112</div></div><div class="vital"><div class="lab">BP</div><div class="num">138/84</div></div><div class="vital"><div class="lab">Temp</div><div class="num">37.4</div></div><div class="vital warn2"><div class="lab">Breath count</div><div class="num">12</div></div></div>'},
        {id:"exam", label:"Examination findings", html:'<ul class="findlist"><li>Bilateral drooping eyelids, worse on sustained upgaze.</li><li>Nasal speech, weak cough, pooled secretions, poor swallow.</li><li>Weak neck flexion; proximal fatigable limb weakness; reflexes preserved; no sensory loss.</li><li>Using accessory muscles; cannot complete a sentence in one breath.</li></ul>'},
        {id:"ptosis", label:"Clinical photograph", img:"osce-images/mg-ptosis.jpg", cap:"Clinical photograph — eyes"},
        {id:"resp", label:"Bedside respiratory tests", html:'<div class="datagrid"><div class="datapill"><b>FVC</b>0.9 L</div><div class="datapill"><b>NIF / MIP</b>−22 cmH₂O</div><div class="datapill"><b>Single-breath count</b>12</div><div class="datapill"><b>Cough</b>Weak, wet</div></div>'},
        {id:"abg", label:"ABG & bloods", html:'<div class="datagrid"><div class="datapill"><b>ABG (air)</b>pH 7.34 · pCO₂ 6.9 kPa · pO₂ 9.1</div><div class="datapill"><b>CBC / CRP</b>Mild leucocytosis, CRP 40</div><div class="datapill"><b>Chest X-ray</b>Right basal infiltrate</div><div class="datapill"><b>Pupils</b>Normal; no fasciculations</div></div>'}
      ],
      domains:[
        {name:"Data-Gathering Skills", items:[
          {q:"Diagnosis and what makes it a crisis?", model:"Myasthenic crisis — MG exacerbation causing respiratory failure or inability to protect the airway; bulbar + respiratory weakness are the danger signs.", max:2},
          {q:"How do you assess respiratory status at the bedside?", model:"Serial FVC and NIF/MIP, single-breath count, cough strength, neck-flexion strength, orthopnoea, sentence length.", max:2},
          {q:"Why not rely on SpO₂ / ABG?", model:"In neuromuscular failure the SpO₂ falls and the CO₂ rises only late — a normal saturation with FVC 0.9 L is a patient about to arrest. The trend of FVC/NIF matters.", max:2}
        ]},
        {name:"Reasoning & Analytical Skills", items:[
          {q:"What precipitated this, and what to screen for?", model:"Infection (pneumonia) + a precipitating drug (the macrolide). Also surgery, pregnancy, tapering immunosuppression, thyroid. Avoid: aminoglycosides, fluoroquinolones, macrolides, β-blockers, IV magnesium, procainamide, quinine, checkpoint inhibitors.", max:2},
          {q:"Distinguish from cholinergic crisis.", model:"Cholinergic = over-treatment → muscarinic excess (SLUDGE, miosis, bradycardia, sweating) plus nicotinic (fasciculations, weakness). Here: normal pupils, no fasciculations, clear precipitant → myasthenic.", max:2}
        ]},
        {name:"Decision-Making Skills", items:[
          {q:"When would you secure the airway?", model:"20·30·40 guide (FVC <20 mL/kg ≈ <1 L, NIF weaker than −30, MEP <40) or a falling trend — not an automatic trigger; also intubate for bulbar failure. This patient needs intubation: bulbar failure, secretions, weak cough, rising CO₂.", max:2},
          {q:"Outline definitive management.", model:"ICU; airway/ventilatory support; treat pneumonia and stop the offending drug; IVIG 2 g/kg over 2–5 days or plasma exchange; steroids to follow (beware transient worsening).", max:2},
          {q:"Pyridostigmine peri-intubation?", model:"Hold it when intubated (reduces secretions, avoids cholinergic confusion); restart later.", max:2}
        ]},
        {name:"Professional Attitude", items:[
          {q:"Communication & escalation.", model:"Early, clear escalation to ICU/anaesthesia; explains to patient/family; structured hand-over.", max:2}
        ]}
      ]
    },

    {
      id:"s3", n:3,
      present:"Painful loss of vision in one eye",
      card:"You are the on-call neurology registrar in the Emergency Department. A 27-year-old woman presents with four days of progressive blurring and dimming of vision in her left eye, with pain that is worse on eye movement and colours that look “washed out”.",
      task:"Assess and manage this patient. You have 10 minutes. The examiner will guide the station and provide information only when you request it.",
      dx:"Optic neuritis · first presentation of MS",
      show:[
        {id:"hx", label:"History / collateral", html:'<ul class="findlist"><li>Six months ago: transient numbness of the right leg for about two weeks — not reported at the time.</li><li>Otherwise well; no regular medications; no bladder or bowel symptoms; non-smoker.</li></ul>'},
        {id:"base", label:"Baseline / acuity", html:'<div class="vitals"><div class="vital"><div class="lab">BP</div><div class="num">118/72</div></div><div class="vital"><div class="lab">HR</div><div class="num">76</div></div><div class="vital"><div class="lab">Temp</div><div class="num">36.9</div></div><div class="vital"><div class="lab">Left VA</div><div class="num">6/24</div></div><div class="vital"><div class="lab">Right VA</div><div class="num">6/6</div></div></div>'},
        {id:"exam", label:"Eye examination", html:'<ul class="findlist"><li>Reduced acuity in the left eye (6/24).</li><li>Reduced colour vision on the left; red looks washed out.</li><li>On the swinging-light test the left pupil dilates when the light is moved to it.</li><li>Loss of central vision on the left; pain on eye movement.</li><li>Fundus: normal optic disc.</li></ul>'},
        {id:"orbit", label:"MRI orbits", html:'<ul class="findlist"><li>MRI orbits (fat-saturated): the left optic nerve is mildly swollen with high T2 signal, and enhances after contrast.</li></ul>'},
        {id:"mri", label:"MRI brain", img:"osce-images/ms-brain-mri-axial-flair.png", cap:"MRI brain — axial FLAIR"}
      ],
      domains:[
        {name:"Data-Gathering Skills", items:[
          {q:"Key confirmatory signs and the diagnosis?", model:"Left optic neuritis — subacute painful monocular loss (worse on eye movement), RAPD, red/colour desaturation, central scotoma; fundus often normal.", max:2},
          {q:"Demonstrate how you elicit a RAPD.", model:"Swinging-flashlight test in a dim room — when the light swings to the affected eye, both pupils paradoxically dilate (reduced afferent input).", max:2},
          {q:"What investigations?", model:"MRI brain + orbits with gadolinium; acuity/colour/fields ± OCT; bloods to exclude mimics; if atypical → AQP4/MOG antibodies; consider LP for oligoclonal bands.", max:2}
        ]},
        {name:"Reasoning & Analytical Skills", items:[
          {q:"Interpret the MRI and link to MS.", model:"Left optic nerve T2 change/enhancement; brain shows periventricular ovoid lesions → dissemination in space. With the earlier episode and a gadolinium study, establish dissemination in time; apply McDonald criteria (2024 revision now counts the optic nerve as a region); CSF oligoclonal bands can substitute for DIT.", max:2},
          {q:"Atypical features suggesting NMOSD/MOGAD?", model:"Severe or bilateral loss, very poor recovery, marked/persistent pain, simultaneous/recurrent. AQP4: chiasmal/posterior, severe residual. MOGAD: bilateral longitudinal anterior nerve, disc swelling, perineural enhancement. Send AQP4/MOG.", max:2},
          {q:"Prognosis of optic neuritis?", model:"Most recover good vision over weeks; a common first demyelinating event, raising MS risk (stratified by baseline MRI lesions).", max:2}
        ]},
        {name:"Decision-Making Skills", items:[
          {q:"Acute treatment?", model:"IV methylprednisolone 1 g/day for 3–5 days (± short oral taper) — speeds recovery. Avoid standard-dose oral prednisone alone (ONTT: higher recurrence). PLEX if severe/steroid-refractory.", max:2},
          {q:"Ongoing plan?", model:"Refer to MS/neuro-ophthalmology; discuss disease-modifying therapy; counsel and safety-net; monitor recovery.", max:2}
        ]},
        {name:"Professional Attitude", items:[
          {q:"Counsel a young patient facing possible MS.", model:"Honest, staged, hopeful information; checks understanding; avoids premature labelling before criteria met; arranges support and follow-up.", max:2}
        ]}
      ]
    },

    {
      id:"s4", n:4,
      present:"Prolonged, ongoing convulsion",
      card:"You are the medical registrar leading the resuscitation. A 24-year-old man has just arrived by ambulance and is convulsing — generalised tonic–clonic activity that, according to the paramedics, has been continuous for at least 8 minutes.",
      task:"Manage this patient. You have 10 minutes. The examiner will guide the station and provide information only when you request it.",
      dx:"Convulsive status epilepticus",
      show:[
        {id:"hx", label:"Collateral history", html:'<ul class="findlist"><li>Known epilepsy; ran out of his medication a few days ago.</li><li>Paramedics gave one dose of a benzodiazepine ~4 minutes ago with no effect.</li><li>No trauma reported; no fever; no other collateral available.</li></ul>'},
        {id:"vitals", label:"On arrival (still seizing)", html:'<div class="vitals"><div class="vital flag"><div class="lab">State</div><div class="num">Seizing</div></div><div class="vital warn2"><div class="lab">SpO₂</div><div class="num">89%</div></div><div class="vital warn2"><div class="lab">HR</div><div class="num">126</div></div><div class="vital"><div class="lab">BP</div><div class="num">148/90</div></div><div class="vital warn2"><div class="lab">Temp</div><div class="num">37.9</div></div><div class="vital"><div class="lab">Glucose</div><div class="num">?</div></div></div>'},
        {id:"labs", label:"Point-of-care & bloods", html:'<div class="datagrid"><div class="datapill"><b>Capillary glucose</b>6.4 mmol/L</div><div class="datapill"><b>Na⁺</b>137 mmol/L</div><div class="datapill"><b>Ca²⁺ / Mg²⁺</b>Normal</div><div class="datapill"><b>AED level</b>Sub-therapeutic</div><div class="datapill"><b>Tox / alcohol</b>Pending</div><div class="datapill"><b>ABG</b>Mixed acidosis, lactate ↑</div></div>'},
        {id:"eeg", label:"EEG (in ICU)", img:"osce-images/status-eeg-alt-seizure-onset.png", cap:"EEG — multi-channel recording"}
      ],
      domains:[
        {name:"Data-Gathering Skills", items:[
          {q:"Define status epilepticus.", model:"≥5 minutes of continuous seizure, or ≥2 seizures without recovery of consciousness in between (operational, convulsive).", max:2},
          {q:"Walk through your first five minutes.", model:"ABC, high-flow O₂, airway adjuncts/suction, two IV cannulae, monitoring; capillary glucose (thiamine before glucose if malnourished/alcohol — never delay dextrose for confirmed hypoglycaemia); give first-line benzodiazepine immediately and in parallel; send bloods; time the seizure.", max:2}
        ]},
        {name:"Reasoning & Analytical Skills", items:[
          {q:"Causes to exclude, and how?", model:"Here AED non-adherence. Also hypoglycaemia, hyponatraemia, hypocalcaemia, CNS infection, stroke/haemorrhage, trauma, toxins/alcohol withdrawal, eclampsia. Work-up: glucose/electrolytes, AED levels, tox, CT head, LP if infection suspected, EEG; empiric aciclovir/antibiotics if meningoencephalitis likely.", max:2},
          {q:"Why is timing important; commonest error?", model:"Longer seizures are harder to stop and cause injury — escalate by the clock. Commonest error: under-dosing benzodiazepines and not moving to second-line.", max:2}
        ]},
        {name:"Decision-Making Skills", items:[
          {q:"First-line drug, route and dose?", model:"A benzodiazepine — lorazepam 0.1 mg/kg IV (max 4 mg/dose, may repeat once), or IM midazolam 10 mg if no IV, or diazepam 0.15–0.2 mg/kg IV (max 10 mg).", max:2},
          {q:"Still fitting after benzodiazepines — next?", model:"Second-line IV ASM at full loading dose — levetiracetam 60 mg/kg (max 4.5 g), valproate 40 mg/kg (max 3 g), or fosphenytoin 20 mg PE/kg (max 1.5 g PE). ESETT: broadly equivalent.", max:2},
          {q:"It is now refractory — plan?", model:"RSI + continuous anaesthetic infusion (midazolam, propofol, or pentobarbital); ICU with continuous EEG to confirm suppression / detect non-convulsive status.", max:2},
          {q:"Interpret the EEG and its role.", model:"Generalised epileptiform discharges; after paralysis/anaesthesia, cEEG detects ongoing non-convulsive status and titrates to seizure (or burst) suppression.", max:2}
        ]},
        {name:"Professional Attitude", items:[
          {q:"Team leadership & communication.", model:"Clear team roles, closed-loop instructions, early ICU/anaesthesia call, family update once stable.", max:2}
        ]}
      ]
    }
  ]
};
