window.onload = function () {
  const counters = {
    education: 0,
    crime: 0,
    reference: 0,
    workExperience: 0,
  };

  function addCrime(counter) {
    let crimeTable = document.getElementById("crime-table");

    // =========================== crime container ===========================
    let crimeContainer = document.createElement("div");
    crimeContainer.setAttribute("class", "field-grid crime");

    // =========================== date container ===========================
    let crimeDateContainer = document.createElement("div");
    crimeDateContainer.setAttribute("class", "span-4");

    // label
    let crimeDateLabel = document.createElement("label");
    crimeDateLabel.setAttribute("for", `crimeDate${counter}`);
    crimeDateLabel.innerHTML = "Date";

    // input
    let crimeDateInput = document.createElement("input");
    crimeDateInput.setAttribute("type", "date");
    crimeDateInput.setAttribute("name", `crimeDate${counter}`);
    crimeDateInput.setAttribute("id", `crimeDate${counter}`);

    crimeDateContainer.appendChild(crimeDateLabel);
    crimeDateContainer.appendChild(crimeDateInput);

    // =========================== spacer ===========================
    let spacer = document.createElement("div");
    spacer.setAttribute("class", "span-10");

    // =========================== description container ===========================
    let crimeDescContainer = document.createElement("div");
    crimeDescContainer.setAttribute("class", "span-6");

    // label
    let crimeDescLabel = document.createElement("label");
    crimeDescLabel.setAttribute("for", `crimeDesc${counter}`);
    crimeDescLabel.innerHTML = "Description";

    // input
    let crimeDescInput = document.createElement("input");
    crimeDescInput.setAttribute("type", "text");
    crimeDescInput.setAttribute("name", `crimeDesc${counter}`);
    crimeDescInput.setAttribute("id", `crimeDesc${counter}`);

    crimeDescContainer.appendChild(crimeDescLabel);
    crimeDescContainer.appendChild(crimeDescInput);

    // =========================== classification container ===========================
    let crimeClassContainer = document.createElement("div");
    crimeClassContainer.setAttribute("class", "span-12 radio-field");

    let crimeClassLabel = document.createElement("div");
    crimeClassLabel.setAttribute("class", "label");
    crimeClassLabel.innerText = "Crime Classification";

    let crimeClassOpt1Label = document.createElement("label");
    let crimeClassOpt1Input = document.createElement("input");
    crimeClassOpt1Input.setAttribute("type", "radio");
    crimeClassOpt1Input.setAttribute("name", `crimeClass${counter}`);
    crimeClassOpt1Input.setAttribute("value", "misdemeanor");
    crimeClassOpt1Label.appendChild(crimeClassOpt1Input);
    crimeClassOpt1Label.innerHTML += "Misdemeanor";

    let crimeClassOpt2Label = document.createElement("label");
    let crimeClassOpt2Input = document.createElement("input");
    crimeClassOpt2Input.setAttribute("type", "radio");
    crimeClassOpt2Input.setAttribute("name", `crimeClass${counter}`);
    crimeClassOpt2Input.setAttribute("value", "felony");
    crimeClassOpt2Label.appendChild(crimeClassOpt2Input);
    crimeClassOpt2Label.innerHTML += "Felony";

    let crimeClassOptDef = document.createElement("input");
    crimeClassOptDef.setAttribute("style", "display: none");
    crimeClassOptDef.setAttribute("type", "radio");
    crimeClassOptDef.setAttribute("name", `crimeClass${counter}`);
    crimeClassOptDef.setAttribute("value", "untouched");
    crimeClassOptDef.setAttribute("checked", "checked");

    crimeClassContainer.appendChild(crimeClassLabel);
    crimeClassContainer.appendChild(crimeClassOpt1Label);
    crimeClassContainer.appendChild(crimeClassOpt2Label);
    crimeClassContainer.appendChild(crimeClassOptDef);

    // =========================== sentence type container ===========================
    let crimeSentenceTypeContainer = document.createElement("div");
    crimeSentenceTypeContainer.setAttribute("class", "span-12 radio-field");

    let crimeSentenceTypeLabel = document.createElement("div");
    crimeSentenceTypeLabel.setAttribute("class", "label");
    crimeSentenceTypeLabel.innerText = "Sentence Type";

    let crimeSentenceTypeOpt1Label = document.createElement("label");
    let crimeSentenceTypeOpt1Input = document.createElement("input");
    crimeSentenceTypeOpt1Input.setAttribute("type", "radio");
    crimeSentenceTypeOpt1Input.setAttribute("name", `crimeSentenceType${counter}`);
    crimeSentenceTypeOpt1Input.setAttribute("value", "confinement");
    crimeSentenceTypeOpt1Label.appendChild(crimeSentenceTypeOpt1Input);
    crimeSentenceTypeOpt1Label.innerHTML += "Confinement";

    let crimeSentenceTypeOpt2Label = document.createElement("label");
    let crimeSentenceTypeOpt2Input = document.createElement("input");
    crimeSentenceTypeOpt2Input.setAttribute("type", "radio");
    crimeSentenceTypeOpt2Input.setAttribute("name", `crimeSentenceType${counter}`);
    crimeSentenceTypeOpt2Input.setAttribute("value", "probation");
    crimeSentenceTypeOpt2Label.appendChild(crimeSentenceTypeOpt2Input);
    crimeSentenceTypeOpt2Label.innerHTML += "Probation";

    let crimeSentenceTypeOpt3Label = document.createElement("label");
    let crimeSentenceTypeOpt3Input = document.createElement("input");
    crimeSentenceTypeOpt3Input.setAttribute("type", "radio");
    crimeSentenceTypeOpt3Input.setAttribute("name", `crimeSentenceType${counter}`);
    crimeSentenceTypeOpt3Input.setAttribute("value", "communitySrvc");
    crimeSentenceTypeOpt3Label.appendChild(crimeSentenceTypeOpt3Input);
    crimeSentenceTypeOpt3Label.innerHTML += "Community Service";

    let crimeSentenceTypeOptDef = document.createElement("input");
    crimeSentenceTypeOptDef.setAttribute("style", "display: none");
    crimeSentenceTypeOptDef.setAttribute("type", "radio");
    crimeSentenceTypeOptDef.setAttribute("name", `crimeSentenceType${counter}`);
    crimeSentenceTypeOptDef.setAttribute("value", "untouched");
    crimeSentenceTypeOptDef.setAttribute("checked", "checked");

    crimeSentenceTypeContainer.appendChild(crimeSentenceTypeLabel);
    crimeSentenceTypeContainer.appendChild(crimeSentenceTypeOpt1Label);
    crimeSentenceTypeContainer.appendChild(crimeSentenceTypeOpt2Label);
    crimeSentenceTypeContainer.appendChild(crimeSentenceTypeOpt3Label);
    crimeSentenceTypeContainer.appendChild(crimeSentenceTypeOptDef);

    // =========================== sentence duration container ===========================
    let crimeSentenceDurationContainer = document.createElement("div");
    crimeSentenceDurationContainer.setAttribute("class", "span-3");

    // label
    let crimeSentenceDurationLabel = document.createElement("label");
    crimeSentenceDurationLabel.setAttribute("for", `crimeSentenceDuration${counter}`);
    crimeSentenceDurationLabel.innerHTML = "Sentence Duration (Year/Months)";

    // input
    let crimeSentenceDurationInput = document.createElement("input");
    crimeSentenceDurationInput.setAttribute("type", "number");
    crimeSentenceDurationInput.setAttribute("name", `crimeSentenceDuration${counter}`);
    crimeSentenceDurationInput.setAttribute("id", `crimeSentenceDuration${counter}`);

    crimeSentenceDurationContainer.appendChild(crimeSentenceDurationLabel);
    crimeSentenceDurationContainer.appendChild(crimeSentenceDurationInput);

    crimeContainer.appendChild(crimeDateContainer);
    crimeContainer.appendChild(spacer);
    crimeContainer.appendChild(crimeDescContainer);
    crimeContainer.appendChild(crimeClassContainer);
    crimeContainer.appendChild(crimeSentenceTypeContainer);
    crimeContainer.appendChild(crimeSentenceDurationContainer);

    crimeTable.appendChild(crimeContainer);
  }

  function addReference(counter) {
    let references = document.getElementById("references");
    // =========================== reference container ===========================
    let referenceContainer = document.createElement("div");
    referenceContainer.setAttribute("class", "field-grid reference");

    // =========================== name container ===========================
    let referenceNameContainer = document.createElement("div");
    referenceNameContainer.setAttribute("class", "span-6");

    // label
    let referenceNameLabel = document.createElement("label");
    referenceNameLabel.setAttribute("for", `referenceName${counter}`);
    referenceNameLabel.innerHTML = "Name";

    // input
    let referenceNameInput = document.createElement("input");
    referenceNameInput.setAttribute("type", "text");
    referenceNameInput.setAttribute("name", `referenceName${counter}`);
    referenceNameInput.setAttribute("id", `referenceName${counter}`);

    referenceNameContainer.appendChild(referenceNameLabel);
    referenceNameContainer.appendChild(referenceNameInput);

    // =========================== title container ===========================
    let referenceTitleContainer = document.createElement("div");
    referenceTitleContainer.setAttribute("class", "span-6");

    // label
    let referenceTitleLabel = document.createElement("label");
    referenceTitleLabel.setAttribute("for", `referenceTitle${counter}`);
    referenceTitleLabel.innerHTML = "Title";

    // input
    let referenceTitleInput = document.createElement("input");
    referenceTitleInput.setAttribute("type", "text");
    referenceTitleInput.setAttribute("name", `referenceTitle${counter}`);
    referenceTitleInput.setAttribute("id", `referenceTitle${counter}`);

    referenceTitleContainer.appendChild(referenceTitleLabel);
    referenceTitleContainer.appendChild(referenceTitleInput);

    // =========================== company container ===========================
    let referenceCompanyContainer = document.createElement("div");
    referenceCompanyContainer.setAttribute("class", "span-6");

    // label
    let referenceCompanyLabel = document.createElement("label");
    referenceCompanyLabel.setAttribute("for", `referenceCompany${counter}`);
    referenceCompanyLabel.innerHTML = "Company";

    // input
    let referenceCompanyInput = document.createElement("input");
    referenceCompanyInput.setAttribute("type", "text");
    referenceCompanyInput.setAttribute("name", `referenceCompany${counter}`);
    referenceCompanyInput.setAttribute("id", `referenceCompany${counter}`);

    referenceCompanyContainer.appendChild(referenceCompanyLabel);
    referenceCompanyContainer.appendChild(referenceCompanyInput);

    // =========================== address container ===========================
    let referenceAddressContainer = document.createElement("div");
    referenceAddressContainer.setAttribute("class", "span-6");

    // label
    let referenceAddressLabel = document.createElement("label");
    referenceAddressLabel.setAttribute("for", `referenceAddress${counter}`);
    referenceAddressLabel.innerHTML = "Address";

    // input
    let referenceAddressInput = document.createElement("input");
    referenceAddressInput.setAttribute("type", "text");
    referenceAddressInput.setAttribute("name", `referenceAddress${counter}`);
    referenceAddressInput.setAttribute("id", `referenceAddress${counter}`);

    referenceAddressContainer.appendChild(referenceAddressLabel);
    referenceAddressContainer.appendChild(referenceAddressInput);

    // =========================== telephone container ===========================
    let referenceTelephoneContainer = document.createElement("div");
    referenceTelephoneContainer.setAttribute("class", "span-6");

    // label
    let referenceTelephoneLabel = document.createElement("label");
    referenceTelephoneLabel.setAttribute("for", `referenceTelephone${counter}`);
    referenceTelephoneLabel.innerHTML = "Telephone";

    // input
    let referenceTelephoneInput = document.createElement("input");
    referenceTelephoneInput.setAttribute("type", "text");
    referenceTelephoneInput.setAttribute("name", `referenceTelephone${counter}`);
    referenceTelephoneInput.setAttribute("id", `referenceTelephone${counter}`);

    referenceTelephoneContainer.appendChild(referenceTelephoneLabel);
    referenceTelephoneContainer.appendChild(referenceTelephoneInput);

    // =========================== email container ===========================
    let referenceEMailContainer = document.createElement("div");
    referenceEMailContainer.setAttribute("class", "span-6");

    // label
    let referenceEMailLabel = document.createElement("label");
    referenceEMailLabel.setAttribute("for", `referenceEMail${counter}`);
    referenceEMailLabel.innerHTML = "EMail";

    // input
    let referenceEMailInput = document.createElement("input");
    referenceEMailInput.setAttribute("type", "text");
    referenceEMailInput.setAttribute("name", `referenceEMail${counter}`);
    referenceEMailInput.setAttribute("id", `referenceEMail${counter}`);

    referenceEMailContainer.appendChild(referenceEMailLabel);
    referenceEMailContainer.appendChild(referenceEMailInput);

    // =========================== spacers ===========================
    let spacer1 = document.createElement("div");
    spacer1.setAttribute("class", "span-6");
    let spacer2 = document.createElement("div");
    spacer2.setAttribute("class", "span-6");
    let spacer3 = document.createElement("div");
    spacer3.setAttribute("class", "span-6");
    let spacer4 = document.createElement("div");
    spacer4.setAttribute("class", "span-6");
    let spacer5 = document.createElement("div");
    spacer5.setAttribute("class", "span-6");

    referenceContainer.appendChild(referenceNameContainer);
    referenceContainer.appendChild(spacer1);
    referenceContainer.appendChild(referenceTitleContainer);
    referenceContainer.appendChild(spacer2);
    referenceContainer.appendChild(referenceCompanyContainer);
    referenceContainer.appendChild(spacer3);
    referenceContainer.appendChild(referenceAddressContainer);
    referenceContainer.appendChild(spacer4);
    referenceContainer.appendChild(referenceTelephoneContainer);
    referenceContainer.appendChild(spacer5);
    referenceContainer.appendChild(referenceEMailContainer);
    references.appendChild(referenceContainer);
  }

  function addEducationItem(counter) {
    let educationalBackground = document.getElementById("educationalBackground");
    // =========================== reference container ===========================
    let educationContainer = document.createElement("div");
    educationContainer.setAttribute("class", "field-grid educationItem");

    // =========================== institution name container ===========================
    let educationInstitutionContainer = document.createElement("div");
    educationInstitutionContainer.setAttribute("class", "span-5");

    // label
    let educationInstitutionLabel = document.createElement("label");
    educationInstitutionLabel.setAttribute("for", `educationInstitution${counter}`);
    educationInstitutionLabel.innerHTML = "Institution";
    // input
    let educationInstitutionInput = document.createElement("input");
    educationInstitutionInput.setAttribute("type", "text");
    educationInstitutionInput.setAttribute("name", `educationInstitution${counter}`);
    educationInstitutionInput.setAttribute("id", `educationInstitution${counter}`);

    educationInstitutionContainer.appendChild(educationInstitutionLabel);
    educationInstitutionContainer.appendChild(educationInstitutionInput);

    // =========================== institution type container ===========================
    let educationInstitutionTypeContainer = document.createElement("div");
    educationInstitutionTypeContainer.setAttribute("class", "span-3");

    // label
    let educationInstitutionTypeLabel = document.createElement("label");
    educationInstitutionTypeLabel.setAttribute("for", `educationInstitutionType${counter}`);
    educationInstitutionTypeLabel.innerHTML = "Type";
    // select
    let educationInstitutionTypeSelect = document.createElement("select");
    educationInstitutionTypeSelect.setAttribute("name", `educationInstitutionType${counter}`);
    educationInstitutionTypeSelect.setAttribute("id", `educationInstitutionType${counter}`);
    // options
    let educationInstitutionTypeOptDef = document.createElement("option");

    let educationInstitutionTypeOpt1 = document.createElement("option");
    educationInstitutionTypeOpt1.setAttribute("value", "highSchool");
    educationInstitutionTypeOpt1.innerHTML += "High School";

    let educationInstitutionTypeOpt2 = document.createElement("option");
    educationInstitutionTypeOpt2.setAttribute("value", "underGrad");
    educationInstitutionTypeOpt2.innerHTML += "Undergraduate";

    let educationInstitutionTypeOpt3 = document.createElement("option");
    educationInstitutionTypeOpt3.setAttribute("value", "grad");
    educationInstitutionTypeOpt3.innerHTML += "Graduate";

    let educationInstitutionTypeOpt4 = document.createElement("option");
    educationInstitutionTypeOpt4.setAttribute("value", "postGrad");
    educationInstitutionTypeOpt4.innerHTML += "Post-Graduate";

    let educationInstitutionTypeOpt5 = document.createElement("option");
    educationInstitutionTypeOpt5.setAttribute("value", "professional");
    educationInstitutionTypeOpt5.innerHTML += "Professional";

    educationInstitutionTypeSelect.appendChild(educationInstitutionTypeOptDef);
    educationInstitutionTypeSelect.appendChild(educationInstitutionTypeOpt1);
    educationInstitutionTypeSelect.appendChild(educationInstitutionTypeOpt2);
    educationInstitutionTypeSelect.appendChild(educationInstitutionTypeOpt3);
    educationInstitutionTypeSelect.appendChild(educationInstitutionTypeOpt4);
    educationInstitutionTypeSelect.appendChild(educationInstitutionTypeOpt5);

    educationInstitutionTypeContainer.appendChild(educationInstitutionTypeLabel);
    educationInstitutionTypeContainer.appendChild(educationInstitutionTypeSelect);

    // =========================== city container ===========================
    let educationCityStateContainer = document.createElement("div");
    educationCityStateContainer.setAttribute("class", "span-5");

    // label
    let educationCityStateLabel = document.createElement("label");
    educationCityStateLabel.setAttribute("for", `educationCityState${counter}`);
    educationCityStateLabel.innerHTML = "City/State";
    // input
    let educationCityStateInput = document.createElement("input");
    educationCityStateInput.setAttribute("type", "text");
    educationCityStateInput.setAttribute("name", `educationCityState${counter}`);
    educationCityStateInput.setAttribute("id", `educationCityState${counter}`);

    educationCityStateContainer.appendChild(educationCityStateLabel);
    educationCityStateContainer.appendChild(educationCityStateInput);

    // =========================== Major/Degree/Certificate container ===========================
    let educationMajorContainer = document.createElement("div");
    educationMajorContainer.setAttribute("class", "span-5");

    // label
    let educationMajorLabel = document.createElement("label");
    educationMajorLabel.setAttribute("for", `educationMajor${counter}`);
    educationMajorLabel.innerHTML = "Major/Degree/Certificate";
    // input
    let educationMajorInput = document.createElement("input");
    educationMajorInput.setAttribute("type", "text");
    educationMajorInput.setAttribute("name", `educationMajor${counter}`);
    educationMajorInput.setAttribute("id", `educationMajor${counter}`);

    educationMajorContainer.appendChild(educationMajorLabel);
    educationMajorContainer.appendChild(educationMajorInput);

    // =========================== grad date container ===========================
    let educationGradDateContainer = document.createElement("div");
    educationGradDateContainer.setAttribute("class", "span-3");

    // label
    let educationGradDateLabel = document.createElement("label");
    educationGradDateLabel.setAttribute("for", `educationGradDate${counter}`);
    educationGradDateLabel.innerHTML = "Graduation Date";
    // input
    let educationGradDateInput = document.createElement("input");
    educationGradDateInput.setAttribute("type", "date");
    educationGradDateInput.setAttribute("name", `educationGradDate${counter}`);
    educationGradDateInput.setAttribute("id", `educationGradDate${counter}`);

    educationGradDateContainer.appendChild(educationGradDateLabel);
    educationGradDateContainer.appendChild(educationGradDateInput);

    // =========================== spacers ===========================
    let spacer1 = document.createElement("div");
    spacer1.setAttribute("class", "span-4");
    let spacer2 = document.createElement("div");
    spacer2.setAttribute("class", "span-7");

    educationContainer.appendChild(educationInstitutionContainer);
    educationContainer.appendChild(educationInstitutionTypeContainer);
    educationContainer.appendChild(spacer1);
    educationContainer.appendChild(educationCityStateContainer);
    educationContainer.appendChild(spacer2);
    educationContainer.appendChild(educationMajorContainer);
    educationContainer.appendChild(educationGradDateContainer);

    educationalBackground.appendChild(educationContainer);
  }

  function addWorkExperience(counter) {
    let workExperiences = document.getElementById("work-experiences");
    // =========================== experience container ===========================
    let experience = document.createElement("div");
    experience.setAttribute("class", "field-grid experience");

    // =========================== employer name container ===========================
    let experienceEmployerContainer = document.createElement("div");
    experienceEmployerContainer.setAttribute("class", "span-3");

    // label
    let experienceEmployerLabel = document.createElement("label");
    experienceEmployerLabel.setAttribute("for", `experienceEmployer${counter}`);
    experienceEmployerLabel.innerHTML = "Employer ";
    // input
    let experienceEmployerInput = document.createElement("input");
    experienceEmployerInput.setAttribute("type", "text");
    experienceEmployerInput.setAttribute("name", `experienceEmployer${counter}`);
    experienceEmployerInput.setAttribute("id", `experienceEmployer${counter}`);

    experienceEmployerContainer.appendChild(experienceEmployerLabel);
    experienceEmployerContainer.appendChild(experienceEmployerInput);

    experience.appendChild(experienceEmployerContainer);

    // =========================== supervisor name container ===========================
    let experienceSupervisorContainer = document.createElement("div");
    experienceSupervisorContainer.setAttribute("class", "span-3");

    // label
    let experienceSupervisorLabel = document.createElement("label");
    experienceSupervisorLabel.setAttribute("for", `experienceSupervisor${counter}`);
    experienceSupervisorLabel.innerHTML = "Supervisor";
    // input
    let experienceSupervisorInput = document.createElement("input");
    experienceSupervisorInput.setAttribute("type", "text");
    experienceSupervisorInput.setAttribute("name", `experienceSupervisor${counter}`);
    experienceSupervisorInput.setAttribute("id", `experienceSupervisor${counter}`);

    experienceSupervisorContainer.appendChild(experienceSupervisorLabel);
    experienceSupervisorContainer.appendChild(experienceSupervisorInput);

    // =========================== employer phone container ===========================
    let experienceEmployerPhoneContainer = document.createElement("div");
    experienceEmployerPhoneContainer.setAttribute("class", "span-3");

    // label
    let experienceEmployerPhoneLabel = document.createElement("label");
    experienceEmployerPhoneLabel.setAttribute("for", `experienceEmployerPhone${counter}`);
    experienceEmployerPhoneLabel.innerHTML = "Employer Phone Number";
    // input
    let experienceEmployerPhoneInput = document.createElement("input");
    experienceEmployerPhoneInput.setAttribute("type", "text");
    experienceEmployerPhoneInput.setAttribute("name", `experienceEmployerPhone${counter}`);
    experienceEmployerPhoneInput.setAttribute("id", `experienceEmployerPhone${counter}`);

    experienceEmployerPhoneContainer.appendChild(experienceEmployerPhoneLabel);
    experienceEmployerPhoneContainer.appendChild(experienceEmployerPhoneInput);

    // =========================== employer email container ===========================
    let experienceEmployerEMailContainer = document.createElement("div");
    experienceEmployerEMailContainer.setAttribute("class", "span-3");

    // label
    let experienceEmployerEMailLabel = document.createElement("label");
    experienceEmployerEMailLabel.setAttribute("for", `experienceEmployerEMail${counter}`);
    experienceEmployerEMailLabel.innerHTML = "Employer E-Mail";
    // input
    let experienceEmployerEMailInput = document.createElement("input");
    experienceEmployerEMailInput.setAttribute("type", "text");
    experienceEmployerEMailInput.setAttribute("name", `experienceEmployerEMail${counter}`);
    experienceEmployerEMailInput.setAttribute("id", `experienceEmployerEMail${counter}`);

    experienceEmployerEMailContainer.appendChild(experienceEmployerEMailLabel);
    experienceEmployerEMailContainer.appendChild(experienceEmployerEMailInput);

    // =========================== address container ===========================
    let experienceAddressContainer = document.createElement("div");
    experienceAddressContainer.setAttribute("class", "span-6");

    // label
    let experienceAddressLabel = document.createElement("label");
    experienceAddressLabel.setAttribute("for", `experienceAddress${counter}`);
    experienceAddressLabel.innerHTML = "Employer Address";
    // input
    let experienceAddressInput = document.createElement("input");
    experienceAddressInput.setAttribute("type", "text");
    experienceAddressInput.setAttribute("name", `experienceAddress${counter}`);
    experienceAddressInput.setAttribute("id", `experienceAddress${counter}`);

    experienceAddressContainer.appendChild(experienceAddressLabel);
    experienceAddressContainer.appendChild(experienceAddressInput);

    // =========================== may we contact container ===========================
    let experienceContactPermissionContainer = document.createElement("div");
    experienceContactPermissionContainer.setAttribute("class", "span-12 radio-field");

    let experienceContactPermissionLabel = document.createElement("div");
    experienceContactPermissionLabel.setAttribute("class", "label");
    experienceContactPermissionLabel.innerText = "Crime Classification";

    let experienceContactPermissionOpt1Label = document.createElement("label");
    let experienceContactPermissionOpt1Input = document.createElement("input");
    experienceContactPermissionOpt1Input.setAttribute("type", "radio");
    experienceContactPermissionOpt1Input.setAttribute("name", `experienceContactPermission${counter}`);
    experienceContactPermissionOpt1Input.setAttribute("value", "yes");
    experienceContactPermissionOpt1Label.appendChild(experienceContactPermissionOpt1Input);
    experienceContactPermissionOpt1Label.innerHTML += "Misdemeanor";

    let experienceContactPermissionOpt2Label = document.createElement("label");
    let experienceContactPermissionOpt2Input = document.createElement("input");
    experienceContactPermissionOpt2Input.setAttribute("type", "radio");
    experienceContactPermissionOpt2Input.setAttribute("name", `experienceContactPermission${counter}`);
    experienceContactPermissionOpt2Input.setAttribute("value", "no");
    experienceContactPermissionOpt2Label.appendChild(experienceContactPermissionOpt2Input);
    experienceContactPermissionOpt2Label.innerHTML += "Felony";

    let experienceContactPermissionOptDef = document.createElement("input");
    experienceContactPermissionOptDef.setAttribute("style", "display: none");
    experienceContactPermissionOptDef.setAttribute("type", "radio");
    experienceContactPermissionOptDef.setAttribute("name", `experienceContactPermission${counter}`);
    experienceContactPermissionOptDef.setAttribute("value", "untouched");
    experienceContactPermissionOptDef.setAttribute("checked", "checked");

    experienceContactPermissionContainer.appendChild(experienceContactPermissionLabel);
    experienceContactPermissionContainer.appendChild(experienceContactPermissionOpt1Label);
    experienceContactPermissionContainer.appendChild(experienceContactPermissionOpt2Label);
    experienceContactPermissionContainer.appendChild(experienceContactPermissionOptDef);

    // =========================== spacers ===========================
    let spacer1 = document.createElement("div");
    spacer1.setAttribute("class", "span-6");
    let spacer2 = document.createElement("div");
    spacer1.setAttribute("class", "span-6");

    // =========================== append ===========================
    experience.appendChild(experienceEmployerContainer);
    experience.appendChild(experienceSupervisorContainer);
    experience.appendChild(spacer1);
    experience.appendChild(experienceEmployerPhoneContainer);
    experience.appendChild(experienceEmployerEMailContainer);

    experience.appendChild(spacer2);
    experience.appendChild(experienceAddressContainer);

    workExperiences.appendChild(experience);
  }
  addWorkExperience(counters.workExperience);

  let addEducationItemButton = document.getElementById("addEducationItem");
  addEducationItemButton.addEventListener("click", function (e) {
    e.preventDefault();
    addEducationItem(counters.education);
    counters.education += 1;
  });

  let addCrimeButton = document.getElementById("addCrime");
  addCrimeButton.addEventListener("click", function (e) {
    e.preventDefault();
    addCrime(counters.crime);
    counters.crime += 1;
  });

  let addReferenceButton = document.getElementById("addReference");
  addReferenceButton.addEventListener("click", function (e) {
    e.preventDefault();
    addReference(counters.reference);
    counters.reference += 1;
  });

  let form = document.getElementById("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(this);
    for (const input of data.entries()) {
      console.log(input[0] + ": " + input[1]);
    }
  });
};

function validateForm() {}
