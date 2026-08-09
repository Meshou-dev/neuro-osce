window.OSCE = {
  brand: "Neurology: structured-oral teaching stations modelled on the Saudi Board (SCFHS) format",
  note: "Teaching structured-oral (SOE) stations: 4 of the real exam's 8. The scoring band is for practice feedback only, not official standard-setting.",
  stations: [
    {
      id:"s1", n:1,
      present:"Sudden right-sided weakness and slurred speech",
      dx:"Acute ischaemic stroke (left MCA) · thrombolysis / thrombectomy",
      card:'<p style="font-size:16px;line-height:1.75;margin:0 0 14px">You are the on-call neurology resident in the Emergency Department at 03:10. A 68-year-old man is brought by his family with sudden right-sided weakness and slurred speech. Symptoms began about 90 minutes ago; he was last seen well 90 minutes ago. Background: hypertension, type 2 diabetes and atrial fibrillation; not anticoagulated. Independent at baseline.</p>'
        +'<div class="kicker">On examination</div><ul class="findlist"><li>Alert, GCS 15; expressive dysphasia with dysarthria.</li><li>Eyes deviated to the left; right homonymous hemianopia and inattention on the right.</li><li>Right facial droop; right arm 1/5, right leg 2/5; reduced sensation on the right.</li><li>NIHSS approximately 18.</li></ul>'
        +'<div class="kicker" style="margin-top:12px">Vital signs</div><div class="vitals"><div class="vital"><div class="lab">BP</div><div class="num">182/98</div></div><div class="vital"><div class="lab">HR</div><div class="num">98 irr</div></div><div class="vital"><div class="lab">RR</div><div class="num">16</div></div><div class="vital"><div class="lab">SpO₂</div><div class="num">97%</div></div><div class="vital"><div class="lab">Temp</div><div class="num">36.8</div></div><div class="vital"><div class="lab">Glucose</div><div class="num">8.1</div></div></div>',
      task:"You are now considering acute stroke management. Assess and manage this patient. You have 10 minutes; ask the examiner for any investigations you would like.",
      show:[
        {id:"bloods", label:"Bloods & ECG", html:'<div class="datagrid"><div class="datapill"><b>Hb</b>141 g/L</div><div class="datapill"><b>WCC</b>8.2 ×10⁹/L</div><div class="datapill"><b>Platelets</b>246 ×10⁹/L</div><div class="datapill"><b>Na / K</b>139 / 4.2 mmol/L</div><div class="datapill"><b>Creatinine</b>84 µmol/L</div><div class="datapill"><b>INR / aPTT</b>1.0 / normal</div><div class="datapill"><b>Glucose</b>8.1 mmol/L</div><div class="datapill"><b>ECG</b>Atrial fibrillation</div></div>'},
        {id:"ct", label:"Non-contrast CT head", img:"osce-images/stroke-ct.jpg", cap:"Non-contrast CT head: axial"},
        {id:"cta", label:"CT angiogram", img:"osce-images/stroke-cta-left.jpg", cap:"CT angiogram: intracranial arteries"},
        {id:"hx", label:"Further history (on request)", html:'<div class="datagrid"><div class="datapill"><b>Contraindication screen</b>No recent surgery, trauma or bleeding; no prior stroke or ICH; not anticoagulated; no recent MI</div></div>'}
      ],
      items:[
        {domain:"Data-Gathering", q:"What would you confirm before thrombolysis, and what are the contraindications?", model:"Confirm exact time last-known-well (90 min) and exclude hypoglycaemia. Then screen contraindications. Absolute: ICH, active bleeding, uncontrolled BP >185/110, platelets <100, INR >1.7 or therapeutic anticoagulation, ischaemic stroke or serious head trauma <3 months. Relative: recent surgery (~10–14 d), GI/GU bleed, DOAC <48 h.", max:2},
        {domain:"Reasoning", q:"Localise the lesion and give the likely mechanism.", model:"Left (dominant) MCA territory: right face/arm>leg weakness, expressive dysphasia, left gaze deviation and right hemianopia/inattention. AF makes cardioembolism likely. NIHSS ≈ 18. Caveats: weighted to LOC; higher scores in dominant-hemisphere strokes; old deficits are over-scored.", max:2},
        {domain:"Decision-Making", q:"What investigations, and in what order?", model:"POC glucose (done). Non-contrast CT first to exclude haemorrhage, then CT angiography for large-vessel occlusion. Send CBC/platelets, coagulation/INR, U&E and ECG. Don't delay lysis for labs.", max:2},
        {domain:"Reasoning", q:"Interpret the CT and the CT angiogram.", model:"NCCT: hyperdense left MCA sign, no haemorrhage, early loss of grey–white differentiation left MCA territory. CTA: occlusion of the left M1 segment (large-vessel occlusion).", max:2},
        {domain:"Decision-Making", q:"Is he a candidate for thrombolysis? Give agent, dose, and how you manage the BP around it.", model:"Yes: within 4.5 h, no haemorrhage and no contraindication. Alteplase 0.9 mg/kg (max 90 mg) or tenecteplase 0.25 mg/kg (max 25 mg). Keep BP <185/110 before lysis (acceptable now; if it rises, labetalol/nicardipine) and <180/105 for 24 h after.", max:2},
        {domain:"Decision-Making", q:"The CTA shows an M1 occlusion: what now?", model:"Refer for mechanical thrombectomy (proximal LVO): ≤6 h, or up to 24 h in selected mismatch (DAWN/DEFUSE-3). Selected large-core patients also benefit. Give bridging thrombolysis if eligible; don't delay transfer.", max:2},
        {domain:"Professional Attitude", q:"Consent the patient/family for thrombolysis.", model:"Explain clearly and empathetically that treatment is time-critical. Discuss the ~6% symptomatic haemorrhage risk and the benefit of treatment. Agree the decision with the patient/family and document it.", max:2},
        {domain:"Decision-Making", q:"He is admitted to a general ICU (we have no stroke unit). How do you monitor and support him for the first 24 hours?", model:"Set up a post-thrombolysis protocol yourself, since there is no stroke unit. Neuro obs (GCS and a focal-deficit check) with BP and vitals every 15 min for 2 h, then every 30 min for 6 h, then hourly to 24 h. Keep BP below 180/105 for 24 h and treat breaches with IV labetalol or nicardipine. Continuous cardiac monitoring for AF. Repeat a non-contrast CT at 24 h before any antithrombotic, and an immediate CT for any fall in GCS, new severe headache or vomiting (haemorrhagic transformation). Supportive care: nurse head-up if tolerated, NPO until a swallow screen, IV normal saline with no dextrose, keep glucose about 7.8 to 10 mmol/L, treat fever to maintain normothermia, and avoid arterial or central lines, NG tubes, urinary catheters and any antiplatelet or anticoagulant for the first 24 h.", max:2},
        {domain:"Decision-Making", q:"Ongoing care and secondary prevention.", model:"After the 24 h CT and if there is no bleed, start aspirin. IPC from admission, with pharmacological VTE prophylaxis after 24 h. Anticoagulate for AF, timing by infarct size (earlier for small infarcts, delayed for large). Statin and vascular risk-factor control. Early swallow assessment, mobilisation and rehabilitation.", max:2}
      ]
    },

    {
      id:"s2", n:2,
      present:"Progressive breathlessness and difficulty swallowing",
      dx:"Myasthenic crisis · neuromuscular respiratory failure",
      card:'<p style="font-size:16px;line-height:1.75;margin:0 0 14px">You are the medical resident in the Emergency Department resuscitation area. A 34-year-old woman with known myasthenia gravis (on pyridostigmine) has had worsening breathlessness for three days. She now has nasal-sounding speech, difficulty swallowing and cannot lie flat. She had a chest infection last week and was started on azithromycin. No chest pain.</p>'
        +'<div class="kicker">On examination</div><ul class="findlist"><li>Bilateral drooping eyelids, worse on sustained upgaze.</li><li>Nasal speech, weak cough, pooled secretions, poor swallow.</li><li>Weak neck flexion; proximal fatigable limb weakness; reflexes preserved; no sensory loss.</li><li>Pupils normal; no fasciculations.</li><li>Using accessory muscles; cannot complete a sentence in one breath.</li></ul>'
        +'<div class="kicker" style="margin-top:12px">Vital signs</div><div class="vitals"><div class="vital"><div class="lab">RR</div><div class="num">28</div></div><div class="vital"><div class="lab">SpO₂</div><div class="num">92%</div></div><div class="vital"><div class="lab">HR</div><div class="num">112</div></div><div class="vital"><div class="lab">BP</div><div class="num">138/84</div></div><div class="vital"><div class="lab">Temp</div><div class="num">37.4</div></div><div class="vital"><div class="lab">Breath count</div><div class="num">12</div></div></div>',
      task:"Recognise and manage this patient. You have 10 minutes; ask the examiner for any bedside tests or investigations you would like.",
      show:[
        {id:"ptosis", label:"Clinical photograph", img:"osce-images/mg-ptosis.jpg", cap:"Clinical photograph: eyes"},
        {id:"resp", label:"Bedside respiratory tests", html:'<div class="datagrid"><div class="datapill"><b>FVC</b>0.9 L</div><div class="datapill"><b>MIP (NIF)</b>−22 cmH₂O</div><div class="datapill"><b>MEP</b>+30 cmH₂O</div><div class="datapill"><b>Single-breath count</b>12</div><div class="datapill"><b>Cough</b>Weak, wet</div></div>'},
        {id:"abg", label:"ABG & bloods", html:'<div class="datagrid"><div class="datapill"><b>ABG (air)</b>pH 7.34 · pCO₂ 52 mmHg · pO₂ 68 mmHg · HCO₃ 24</div><div class="datapill"><b>CBC / CRP</b>Mild leucocytosis, CRP 40</div><div class="datapill"><b>Chest X-ray</b>Right basal infiltrate</div></div>'}
      ],
      items:[
        {domain:"Data-Gathering", q:"What is the diagnosis, and which findings make this a crisis?", model:"Myasthenic crisis: an MG exacerbation causing (impending) respiratory failure or inability to protect the airway. Danger signs to read off the obs and exam: tachypnoea (RR 28), falling saturations (92%), a single-breath count of 12, weak cough and bulbar weakness.", max:2},
        {domain:"Data-Gathering", q:"How do you assess respiratory status at the bedside?", model:"Track serial FVC and MIP/NIF (maximal inspiratory pressure). Also assess single-breath count, cough and neck-flexion strength, orthopnoea and sentence length.", max:2},
        {domain:"Reasoning", q:"Why not rely on the SpO₂ / ABG?", model:"SpO₂ falls and CO₂ rises late in neuromuscular failure; FVC/NIF deteriorate earlier. This patient already shows failure: FVC 0.9 L, NIF −22, rising CO₂ (52 mmHg) and SpO₂ 92%.", max:2},
        {domain:"Decision-Making", q:"When would you secure the airway?", model:"The 20·30·40 guide: FVC < 20 mL/kg (≈ < 1 L), MIP/NIF failing to reach −30 cmH₂O (magnitude < 30), MEP < 40 cmH₂O, or a falling trend. These are guides, not automatic triggers. Bulbar failure alone warrants intubation. Here: FVC 0.9 L (< 1 L), MIP −22 cmH₂O, MEP +30 cmH₂O, weak wet cough, bulbar failure and rising CO₂.", max:2},
        {domain:"Reasoning", q:"What precipitated this, and what to screen for?", model:"Precipitants here: pneumonia and the macrolide. Also surgery, pregnancy, tapering immunosuppression, thyroid. Avoid: aminoglycosides, fluoroquinolones, macrolides, β-blockers, IV magnesium, procainamide, quinine, checkpoint inhibitors.", max:2},
        {domain:"Reasoning", q:"Distinguish from a cholinergic crisis.", model:"Cholinergic crisis: over-treatment with muscarinic excess (SLUDGE, miosis, bradycardia, sweating) plus nicotinic features (fasciculations, weakness). Here there are normal pupils, no fasciculations and a clear precipitant, favouring myasthenic crisis.", max:2},
        {domain:"Decision-Making", q:"Outline definitive management.", model:"ICU for airway/ventilatory support. Treat pneumonia and stop the offending drug. IVIG 2 g/kg over 2–5 days or plasma exchange; steroids to follow (beware transient worsening).", max:2},
        {domain:"Decision-Making", q:"Pyridostigmine peri-intubation?", model:"Hold it when intubated (reduces secretions, avoids cholinergic confusion); restart later.", max:2},
        {domain:"Professional Attitude", q:"Communication and escalation.", model:"Call ICU/anaesthesia early. Give a clear explanation to the patient/family and a structured hand-over.", max:2}
      ]
    },

    {
      id:"s3", n:3,
      present:"Painful loss of vision in one eye",
      dx:"Optic neuritis · first demyelinating event (possible MS, not yet confirmed)",
      card:'<p style="font-size:16px;line-height:1.75;margin:0 0 14px">You are the on-call neurology resident in the Emergency Department. A 27-year-old woman has had progressive blurring and dimming of vision in her left eye for four days. Eye movement is painful and colours look “washed out”. Otherwise well. No regular medications; non-smoker.</p>'
        +'<div class="kicker">On examination</div><ul class="findlist"><li>Left visual acuity 6/24 (right 6/6); reduced colour vision on the left, red washed out.</li><li>On the swinging-light test the left pupil dilates when the light is moved to it.</li><li>Loss of central vision on the left; pain on eye movement.</li><li>Fundus: normal optic disc.</li></ul>'
        +'<div class="kicker" style="margin-top:12px">Vital signs</div><div class="vitals"><div class="vital"><div class="lab">BP</div><div class="num">118/72</div></div><div class="vital"><div class="lab">HR</div><div class="num">76</div></div><div class="vital"><div class="lab">Temp</div><div class="num">36.9</div></div></div>',
      task:"Assess and manage this patient. You have 10 minutes; ask the examiner for any investigations you would like.",
      show:[
        {id:"orbit", label:"MRI orbits", img:"osce-images/orbit-optic-neuritis-coronal-t2fs-left.jpg", cap:"MRI orbits: coronal T2 fat-saturated"},
        {id:"mri", label:"MRI brain", img:"osce-images/ms-sagittal-dawson.jpg", cap:"MRI brain: sagittal FLAIR"}
      ],
      items:[
        {domain:"Data-Gathering", q:"Key confirmatory signs and the diagnosis?", model:"Left optic neuritis: subacute painful monocular loss (worse on eye movement), RAPD, red/colour desaturation and central scotoma. A normal fundus is common.", max:2},
        {domain:"Data-Gathering", q:"How do you elicit a RAPD?", model:"Swinging-flashlight test in a dim room. When the light swings to the affected eye, both pupils paradoxically dilate because afferent input is reduced.", max:2},
        {domain:"Decision-Making", q:"What investigations?", model:"MRI brain + orbits with gadolinium. Acuity/colour/fields ± OCT; bloods to exclude mimics. If atypical, send AQP4/MOG antibodies. Consider LP for oligoclonal bands.", max:2},
        {domain:"Reasoning", q:"Interpret the MRI and its link to MS.", model:"MRI orbits: the left optic nerve is swollen and hyperintense on T2 with its CSF ring effaced, while the normal right nerve keeps its bright CSF ring. Brain shows periventricular ovoid lesions (Dawson's fingers) radiating from the callososeptal interface, showing dissemination in space. This is a first demyelinating event. MS is not yet confirmed. Dissemination in time would be established by a gadolinium study (enhancing plus non-enhancing lesions), a documented earlier episode, or CSF oligoclonal bands (McDonald 2017/2024; optic nerve now counts as a region).", max:2},
        {domain:"Reasoning", q:"Atypical features suggesting NMOSD / MOGAD?", model:"Severe or bilateral loss, very poor recovery, marked/persistent pain, simultaneous/recurrent. AQP4: chiasmal/posterior, severe residual. MOGAD: bilateral longitudinal anterior nerve, disc swelling, perineural enhancement. Send AQP4/MOG.", max:2},
        {domain:"Decision-Making", q:"Acute treatment?", model:"IV methylprednisolone 1 g/day for 3–5 days (± short oral taper). This speeds recovery. Avoid standard-dose oral prednisone alone (ONTT: higher recurrence). PLEX if severe/steroid-refractory.", max:2},
        {domain:"Reasoning", q:"Prognosis?", model:"Most recover good vision over weeks. Optic neuritis is a common first demyelinating event; subsequent MS risk depends on baseline MRI lesion load.", max:2},
        {domain:"Professional Attitude", q:"Counsel this young patient about a possible MS diagnosis.", model:"Be honest and hopeful; give the information in stages. Explain that this is a first event and MS is not yet confirmed. Check understanding. Arrange MS-clinic follow-up and support. Do not label her prematurely.", max:2}
      ]
    },

    {
      id:"s4", n:4,
      present:"Prolonged, ongoing convulsion",
      dx:"Convulsive status epilepticus",
      card:'<p style="font-size:16px;line-height:1.75;margin:0 0 14px">You are the medical resident leading the resuscitation. A 24-year-old man with known epilepsy is brought in by ambulance with generalised tonic-clonic convulsions. The paramedics report continuous seizure activity for at least 8 minutes. He ran out of his medication a few days ago. The paramedics gave <b>IV lorazepam 2 mg</b> about 4 minutes ago with no effect. No trauma or fever reported.</p>'
        +'<div class="kicker">On arrival (still seizing)</div><div class="vitals"><div class="vital"><div class="lab">State</div><div class="num">Seizing</div></div><div class="vital"><div class="lab">SpO₂</div><div class="num">89%</div></div><div class="vital"><div class="lab">HR</div><div class="num">126</div></div><div class="vital"><div class="lab">BP</div><div class="num">148/90</div></div><div class="vital"><div class="lab">Temp</div><div class="num">37.9</div></div><div class="vital"><div class="lab">Glucose</div><div class="num">?</div></div></div>',
      task:"Manage this patient now. You have 10 minutes; ask the examiner for results as you need them.",
      show:[
        {id:"labs", label:"Point-of-care & bloods", html:'<div class="datagrid"><div class="datapill"><b>Capillary glucose</b>6.4 mmol/L</div><div class="datapill"><b>Na</b>137 mmol/L</div><div class="datapill"><b>Ca / Mg</b>Normal</div><div class="datapill"><b>AED level</b>Sub-therapeutic</div><div class="datapill"><b>Tox / alcohol</b>Pending</div><div class="datapill"><b>ABG</b>Mixed acidosis, lactate raised</div></div>'},
        {id:"eeg", label:"EEG", img:"osce-images/status-eeg-alt-seizure-onset.png", cap:"EEG: multi-channel recording"}
      ],
      items:[
        {domain:"Data-Gathering", q:"Define status epilepticus.", model:"Operational definition of convulsive status epilepticus: ≥5 minutes of continuous seizure, or ≥2 seizures without recovery of consciousness in between.", max:2},
        {domain:"Decision-Making", q:"Walk through your first five minutes.", model:"ABC: high-flow O₂, airway adjuncts/suction, two IV cannulae and monitoring. Check capillary glucose. Give thiamine before glucose if malnourished/alcohol, but never delay dextrose for confirmed hypoglycaemia. Give an adequate first-line benzodiazepine immediately; the pre-hospital 2 mg lorazepam was sub-therapeutic. Send bloods and time the seizure.", max:2},
        {domain:"Decision-Making", q:"Was the pre-hospital benzodiazepine adequate, and what would you give now (drug, route, dose)?", model:"Use a benzodiazepine: lorazepam 0.1 mg/kg IV (max 4 mg/dose, may repeat once), IM midazolam 10 mg if no IV, or diazepam 0.15–0.2 mg/kg IV (max 10 mg). The pre-hospital 2 mg was under-dosed.", max:2},
        {domain:"Reasoning", q:"Why is timing important; commonest error?", model:"Longer seizures are harder to stop and cause injury. Escalate by the clock. Commonest error: under-dosing benzodiazepines and failing to move to second-line.", max:2},
        {domain:"Decision-Making", q:"Still fitting after an adequate benzodiazepine: next?", model:"Second-line IV ASM at full loading dose: levetiracetam 60 mg/kg (max 4.5 g), valproate 40 mg/kg (max 3 g), or fosphenytoin 20 mg PE/kg (max 1.5 g PE). ESETT: no clear efficacy difference among the three.", max:2},
        {domain:"Decision-Making", q:"It is now refractory: plan?", model:"RSI, then continuous anaesthetic infusion: midazolam, propofol or pentobarbital. ICU with continuous EEG to confirm suppression and detect non-convulsive status.", max:2},
        {domain:"Reasoning", q:"Causes to exclude, and how?", model:"Likely cause here: AED non-adherence. Exclude hypoglycaemia, hyponatraemia, hypocalcaemia, CNS infection, stroke/haemorrhage, trauma, toxins/alcohol withdrawal and eclampsia. Check glucose/electrolytes, AED levels and tox; CT head, LP if infection is suspected, and EEG. Give empiric aciclovir/antibiotics if meningoencephalitis is likely.", max:2},
        {domain:"Reasoning", q:"Interpret the EEG and its role.", model:"Generalised epileptiform discharges. After paralysis/anaesthesia, cEEG detects ongoing non-convulsive status and guides treatment to seizure or burst suppression.", max:2},
        {domain:"Professional Attitude", q:"Team leadership and communication.", model:"Assign team roles and use closed-loop instructions. Call ICU/anaesthesia early; update the family once stable.", max:2}
      ]
    }
  ]
};
