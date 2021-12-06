window.onload = function () {
  const counters = {
    education: -1,
    crime: -1,
    reference: -1,
    workExperience: -1,
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
    crimeDateLabel.setAttribute("for", `crimeDate.${counter}`);
    crimeDateLabel.innerHTML = "Date";

    // input
    let crimeDateInput = document.createElement("input");
    crimeDateInput.setAttribute("type", "date");
    crimeDateInput.setAttribute("name", `crimeDate.${counter}`);
    crimeDateInput.setAttribute("id", `crimeDate.${counter}`);

    // ERROR MESSAGE
    let crimeDateError = document.createElement("div");
    crimeDateError.setAttribute("class", "error");
    crimeDateError.setAttribute("id", `error-crimeDate.${counter}`);
    crimeDateError.innerHTML = "&nbsp;";

    crimeDateContainer.appendChild(crimeDateLabel);
    crimeDateContainer.appendChild(crimeDateInput);
    crimeDateContainer.appendChild(crimeDateError);

    // =========================== spacer ===========================
    let spacer = document.createElement("div");
    spacer.setAttribute("class", "span-10");

    // =========================== description container ===========================
    let crimeDescContainer = document.createElement("div");
    crimeDescContainer.setAttribute("class", "span-6");

    // label
    let crimeDescLabel = document.createElement("label");
    crimeDescLabel.setAttribute("for", `crimeDesc.${counter}`);
    crimeDescLabel.innerHTML = "Description";

    // input
    let crimeDescInput = document.createElement("input");
    crimeDescInput.setAttribute("type", "text");
    crimeDescInput.setAttribute("name", `crimeDesc.${counter}`);
    crimeDescInput.setAttribute("id", `crimeDesc.${counter}`);

    crimeDescContainer.appendChild(crimeDescLabel);
    crimeDescContainer.appendChild(crimeDescInput);

    // ERROR MESSAGE
    let crimeDescError = document.createElement("div");
    crimeDescError.setAttribute("class", "error");
    crimeDescError.setAttribute("id", `error-crimeDesc.${counter}`);
    crimeDescError.innerHTML = "&nbsp;";
    crimeDescContainer.appendChild(crimeDescError);

    // =========================== classification container ===========================
    let crimeClassContainer = document.createElement("div");
    crimeClassContainer.setAttribute("class", "span-12 radio-field");

    let crimeClassLabel = document.createElement("div");
    crimeClassLabel.setAttribute("class", "label");
    crimeClassLabel.innerText = "Crime Classification";

    let crimeClassOpt1Label = document.createElement("label");
    let crimeClassOpt1Input = document.createElement("input");
    crimeClassOpt1Input.setAttribute("type", "radio");
    crimeClassOpt1Input.setAttribute("name", `crimeClass.${counter}`);
    crimeClassOpt1Input.setAttribute("value", "misdemeanor");
    crimeClassOpt1Label.appendChild(crimeClassOpt1Input);
    crimeClassOpt1Label.innerHTML += "Misdemeanor";

    let crimeClassOpt2Label = document.createElement("label");
    let crimeClassOpt2Input = document.createElement("input");
    crimeClassOpt2Input.setAttribute("type", "radio");
    crimeClassOpt2Input.setAttribute("name", `crimeClass.${counter}`);
    crimeClassOpt2Input.setAttribute("value", "felony");
    crimeClassOpt2Label.appendChild(crimeClassOpt2Input);
    crimeClassOpt2Label.innerHTML += "Felony";

    let crimeClassOptDef = document.createElement("input");
    crimeClassOptDef.setAttribute("style", "display: none");
    crimeClassOptDef.setAttribute("type", "radio");
    crimeClassOptDef.setAttribute("name", `crimeClass.${counter}`);
    crimeClassOptDef.setAttribute("value", "untouched");
    crimeClassOptDef.setAttribute("checked", "checked");

    crimeClassContainer.appendChild(crimeClassLabel);
    crimeClassContainer.appendChild(crimeClassOpt1Label);
    crimeClassContainer.appendChild(crimeClassOpt2Label);
    crimeClassContainer.appendChild(crimeClassOptDef);

    // ERROR MESSAGE
    let crimeClassError = document.createElement("div");
    crimeClassError.setAttribute("class", "error");
    crimeClassError.setAttribute("id", `error-crimeClass.${counter}`);
    crimeClassError.innerHTML = "&nbsp;";
    crimeClassContainer.appendChild(crimeClassError);

    // =========================== sentence type container ===========================
    let crimeSentenceTypeContainer = document.createElement("div");
    crimeSentenceTypeContainer.setAttribute("class", "span-12 radio-field");

    let crimeSentenceTypeLabel = document.createElement("div");
    crimeSentenceTypeLabel.setAttribute("class", "label");
    crimeSentenceTypeLabel.innerText = "Sentence Type";

    let crimeSentenceTypeOpt1Label = document.createElement("label");
    let crimeSentenceTypeOpt1Input = document.createElement("input");
    crimeSentenceTypeOpt1Input.setAttribute("type", "radio");
    crimeSentenceTypeOpt1Input.setAttribute("name", `crimeSentenceType.${counter}`);
    crimeSentenceTypeOpt1Input.setAttribute("value", "confinement");
    crimeSentenceTypeOpt1Label.appendChild(crimeSentenceTypeOpt1Input);
    crimeSentenceTypeOpt1Label.innerHTML += "Confinement";

    let crimeSentenceTypeOpt2Label = document.createElement("label");
    let crimeSentenceTypeOpt2Input = document.createElement("input");
    crimeSentenceTypeOpt2Input.setAttribute("type", "radio");
    crimeSentenceTypeOpt2Input.setAttribute("name", `crimeSentenceType.${counter}`);
    crimeSentenceTypeOpt2Input.setAttribute("value", "probation");
    crimeSentenceTypeOpt2Label.appendChild(crimeSentenceTypeOpt2Input);
    crimeSentenceTypeOpt2Label.innerHTML += "Probation";

    let crimeSentenceTypeOpt3Label = document.createElement("label");
    let crimeSentenceTypeOpt3Input = document.createElement("input");
    crimeSentenceTypeOpt3Input.setAttribute("type", "radio");
    crimeSentenceTypeOpt3Input.setAttribute("name", `crimeSentenceType.${counter}`);
    crimeSentenceTypeOpt3Input.setAttribute("value", "communitySrvc");
    crimeSentenceTypeOpt3Label.appendChild(crimeSentenceTypeOpt3Input);
    crimeSentenceTypeOpt3Label.innerHTML += "Community Service";

    let crimeSentenceTypeOptDef = document.createElement("input");
    crimeSentenceTypeOptDef.setAttribute("style", "display: none");
    crimeSentenceTypeOptDef.setAttribute("type", "radio");
    crimeSentenceTypeOptDef.setAttribute("name", `crimeSentenceType.${counter}`);
    crimeSentenceTypeOptDef.setAttribute("value", "untouched");
    crimeSentenceTypeOptDef.setAttribute("checked", "checked");

    crimeSentenceTypeContainer.appendChild(crimeSentenceTypeLabel);
    crimeSentenceTypeContainer.appendChild(crimeSentenceTypeOpt1Label);
    crimeSentenceTypeContainer.appendChild(crimeSentenceTypeOpt2Label);
    crimeSentenceTypeContainer.appendChild(crimeSentenceTypeOpt3Label);
    crimeSentenceTypeContainer.appendChild(crimeSentenceTypeOptDef);

    // ERROR MESSAGE
    let crimeSentenceTypeError = document.createElement("div");
    crimeSentenceTypeError.setAttribute("class", "error");
    crimeSentenceTypeError.setAttribute("id", `error-crimeSentenceType.${counter}`);
    crimeSentenceTypeError.innerHTML = "&nbsp;";
    crimeSentenceTypeContainer.appendChild(crimeSentenceTypeError);

    // =========================== sentence duration container ===========================
    let crimeSentenceDurationContainer = document.createElement("div");
    crimeSentenceDurationContainer.setAttribute("class", "span-3");

    // label
    let crimeSentenceDurationLabel = document.createElement("label");
    crimeSentenceDurationLabel.setAttribute("for", `crimeSentenceDuration.${counter}`);
    crimeSentenceDurationLabel.innerHTML = "Sentence Duration (Year/Months)";

    // input
    let crimeSentenceDurationInput = document.createElement("input");
    crimeSentenceDurationInput.setAttribute("type", "number");
    crimeSentenceDurationInput.setAttribute("name", `crimeSentenceDuration.${counter}`);
    crimeSentenceDurationInput.setAttribute("id", `crimeSentenceDuration.${counter}`);

    crimeSentenceDurationContainer.appendChild(crimeSentenceDurationLabel);
    crimeSentenceDurationContainer.appendChild(crimeSentenceDurationInput);

    // ERROR MESSAGE
    let crimeSentenceDurationError = document.createElement("div");
    crimeSentenceDurationError.setAttribute("class", "error");
    crimeSentenceDurationError.setAttribute("id", `error-crimeSentenceDuration.${counter}`);
    crimeSentenceDurationError.innerHTML = "&nbsp;";
    crimeSentenceDurationContainer.appendChild(crimeSentenceDurationError);

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
    referenceNameLabel.setAttribute("for", `referenceName.${counter}`);
    referenceNameLabel.innerHTML = "Name";

    // input
    let referenceNameInput = document.createElement("input");
    referenceNameInput.setAttribute("type", "text");
    referenceNameInput.setAttribute("name", `referenceName.${counter}`);
    referenceNameInput.setAttribute("id", `referenceName.${counter}`);

    referenceNameContainer.appendChild(referenceNameLabel);
    referenceNameContainer.appendChild(referenceNameInput);

    // ERROR MESSAGE
    let referenceNameError = document.createElement("div");
    referenceNameError.setAttribute("class", "error");
    referenceNameError.setAttribute("id", `error-referenceName.${counter}`);
    referenceNameError.innerHTML = "&nbsp;";
    referenceNameContainer.appendChild(referenceNameError);

    // =========================== title container ===========================
    let referenceTitleContainer = document.createElement("div");
    referenceTitleContainer.setAttribute("class", "span-6");

    // label
    let referenceTitleLabel = document.createElement("label");
    referenceTitleLabel.setAttribute("for", `referenceTitle.${counter}`);
    referenceTitleLabel.innerHTML = "Title";

    // input
    let referenceTitleInput = document.createElement("input");
    referenceTitleInput.setAttribute("type", "text");
    referenceTitleInput.setAttribute("name", `referenceTitle.${counter}`);
    referenceTitleInput.setAttribute("id", `referenceTitle.${counter}`);

    referenceTitleContainer.appendChild(referenceTitleLabel);
    referenceTitleContainer.appendChild(referenceTitleInput);

    // ERROR MESSAGE
    let referenceTitleError = document.createElement("div");
    referenceTitleError.setAttribute("class", "error");
    referenceTitleError.setAttribute("id", `error-referenceTitle.${counter}`);
    referenceTitleError.innerHTML = "&nbsp;";
    referenceTitleContainer.appendChild(referenceTitleError);

    // =========================== company container ===========================
    let referenceCompanyContainer = document.createElement("div");
    referenceCompanyContainer.setAttribute("class", "span-6");

    // label
    let referenceCompanyLabel = document.createElement("label");
    referenceCompanyLabel.setAttribute("for", `referenceCompany.${counter}`);
    referenceCompanyLabel.innerHTML = "Company";

    // input
    let referenceCompanyInput = document.createElement("input");
    referenceCompanyInput.setAttribute("type", "text");
    referenceCompanyInput.setAttribute("name", `referenceCompany.${counter}`);
    referenceCompanyInput.setAttribute("id", `referenceCompany.${counter}`);

    referenceCompanyContainer.appendChild(referenceCompanyLabel);
    referenceCompanyContainer.appendChild(referenceCompanyInput);

    // ERROR MESSAGE
    let referenceCompanyError = document.createElement("div");
    referenceCompanyError.setAttribute("class", "error");
    referenceCompanyError.setAttribute("id", `error-referenceCompany.${counter}`);
    referenceCompanyError.innerHTML = "&nbsp;";
    referenceCompanyContainer.appendChild(referenceCompanyError);

    // =========================== address container ===========================
    let referenceAddressContainer = document.createElement("div");
    referenceAddressContainer.setAttribute("class", "span-6");

    // label
    let referenceAddressLabel = document.createElement("label");
    referenceAddressLabel.setAttribute("for", `referenceAddress.${counter}`);
    referenceAddressLabel.innerHTML = "Address";

    // input
    let referenceAddressInput = document.createElement("input");
    referenceAddressInput.setAttribute("type", "text");
    referenceAddressInput.setAttribute("name", `referenceAddress.${counter}`);
    referenceAddressInput.setAttribute("id", `referenceAddress.${counter}`);

    referenceAddressContainer.appendChild(referenceAddressLabel);
    referenceAddressContainer.appendChild(referenceAddressInput);

    // ERROR MESSAGE
    let referenceAddressError = document.createElement("div");
    referenceAddressError.setAttribute("class", "error");
    referenceAddressError.setAttribute("id", `error-referenceAddress.${counter}`);
    referenceAddressError.innerHTML = "&nbsp;";
    referenceAddressContainer.appendChild(referenceAddressError);

    // =========================== telephone container ===========================
    let referenceTelephoneContainer = document.createElement("div");
    referenceTelephoneContainer.setAttribute("class", "span-6");

    // label
    let referenceTelephoneLabel = document.createElement("label");
    referenceTelephoneLabel.setAttribute("for", `referenceTelephone.${counter}`);
    referenceTelephoneLabel.innerHTML = "Telephone";

    // input
    let referenceTelephoneInput = document.createElement("input");
    referenceTelephoneInput.setAttribute("type", "text");
    referenceTelephoneInput.setAttribute("name", `referenceTelephone.${counter}`);
    referenceTelephoneInput.setAttribute("id", `referenceTelephone.${counter}`);

    referenceTelephoneContainer.appendChild(referenceTelephoneLabel);
    referenceTelephoneContainer.appendChild(referenceTelephoneInput);

    // ERROR MESSAGE
    let referenceTelephoneError = document.createElement("div");
    referenceTelephoneError.setAttribute("class", "error");
    referenceTelephoneError.setAttribute("id", `error-referenceTelephone.${counter}`);
    referenceTelephoneError.innerHTML = "&nbsp;";
    referenceTelephoneContainer.appendChild(referenceTelephoneError);

    // =========================== email container ===========================
    let referenceEMailContainer = document.createElement("div");
    referenceEMailContainer.setAttribute("class", "span-6");

    // label
    let referenceEMailLabel = document.createElement("label");
    referenceEMailLabel.setAttribute("for", `referenceEMail.${counter}`);
    referenceEMailLabel.innerHTML = "EMail";

    // input
    let referenceEMailInput = document.createElement("input");
    referenceEMailInput.setAttribute("type", "text");
    referenceEMailInput.setAttribute("name", `referenceEMail.${counter}`);
    referenceEMailInput.setAttribute("id", `referenceEMail.${counter}`);

    referenceEMailContainer.appendChild(referenceEMailLabel);
    referenceEMailContainer.appendChild(referenceEMailInput);

    // ERROR MESSAGE
    let referenceEMailError = document.createElement("div");
    referenceEMailError.setAttribute("class", "error");
    referenceEMailError.setAttribute("id", `error-referenceEMail.${counter}`);
    referenceEMailError.innerHTML = "&nbsp;";
    referenceEMailContainer.appendChild(referenceEMailError);

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
    educationInstitutionLabel.setAttribute("for", `educationInstitution.${counter}`);
    educationInstitutionLabel.innerHTML = "Institution";
    // input
    let educationInstitutionInput = document.createElement("input");
    educationInstitutionInput.setAttribute("type", "text");
    educationInstitutionInput.setAttribute("name", `educationInstitution.${counter}`);
    educationInstitutionInput.setAttribute("id", `educationInstitution.${counter}`);

    educationInstitutionContainer.appendChild(educationInstitutionLabel);
    educationInstitutionContainer.appendChild(educationInstitutionInput);

    // ERROR MESSAGE
    let educationInstitutionError = document.createElement("div");
    educationInstitutionError.setAttribute("class", "error");
    educationInstitutionError.setAttribute("id", `error-educationInstitution.${counter}`);
    educationInstitutionError.innerHTML = "&nbsp;";
    educationInstitutionContainer.appendChild(educationInstitutionError);

    // =========================== institution type container ===========================
    let educationInstitutionTypeContainer = document.createElement("div");
    educationInstitutionTypeContainer.setAttribute("class", "span-3");

    // label
    let educationInstitutionTypeLabel = document.createElement("label");
    educationInstitutionTypeLabel.setAttribute("for", `educationInstitutionType.${counter}`);
    educationInstitutionTypeLabel.innerHTML = "Type";
    // select
    let educationInstitutionTypeSelect = document.createElement("select");
    educationInstitutionTypeSelect.setAttribute("name", `educationInstitutionType.${counter}`);
    educationInstitutionTypeSelect.setAttribute("id", `educationInstitutionType.${counter}`);
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

    // ERROR MESSAGE
    let educationInstitutionTypeError = document.createElement("div");
    educationInstitutionTypeError.setAttribute("class", "error");
    educationInstitutionTypeError.setAttribute("id", `error-educationInstitutionType.${counter}`);
    educationInstitutionTypeError.innerHTML = "&nbsp;";
    educationInstitutionTypeContainer.appendChild(educationInstitutionTypeError);

    // =========================== city container ===========================
    let educationCityStateContainer = document.createElement("div");
    educationCityStateContainer.setAttribute("class", "span-5");

    // label
    let educationCityStateLabel = document.createElement("label");
    educationCityStateLabel.setAttribute("for", `educationCityState.${counter}`);
    educationCityStateLabel.innerHTML = "City/State";
    // input
    let educationCityStateInput = document.createElement("input");
    educationCityStateInput.setAttribute("type", "text");
    educationCityStateInput.setAttribute("name", `educationCityState.${counter}`);
    educationCityStateInput.setAttribute("id", `educationCityState.${counter}`);

    educationCityStateContainer.appendChild(educationCityStateLabel);
    educationCityStateContainer.appendChild(educationCityStateInput);

    // ERROR MESSAGE
    let educationCityStateError = document.createElement("div");
    educationCityStateError.setAttribute("class", "error");
    educationCityStateError.setAttribute("id", `error-educationCityState.${counter}`);
    educationCityStateError.innerHTML = "&nbsp;";
    educationCityStateContainer.appendChild(educationCityStateError);

    // =========================== Major/Degree/Certificate container ===========================
    let educationMajorContainer = document.createElement("div");
    educationMajorContainer.setAttribute("class", "span-5");

    // label
    let educationMajorLabel = document.createElement("label");
    educationMajorLabel.setAttribute("for", `educationMajor.${counter}`);
    educationMajorLabel.innerHTML = "Major/Degree/Certificate";
    // input
    let educationMajorInput = document.createElement("input");
    educationMajorInput.setAttribute("type", "text");
    educationMajorInput.setAttribute("name", `educationMajor.${counter}`);
    educationMajorInput.setAttribute("id", `educationMajor.${counter}`);

    educationMajorContainer.appendChild(educationMajorLabel);
    educationMajorContainer.appendChild(educationMajorInput);

    // ERROR MESSAGE
    let educationMajorError = document.createElement("div");
    educationMajorError.setAttribute("class", "error");
    educationMajorError.setAttribute("id", `error-educationMajor.${counter}`);
    educationMajorError.innerHTML = "&nbsp;";
    educationMajorContainer.appendChild(educationMajorError);

    // =========================== grad date container ===========================
    let educationGradDateContainer = document.createElement("div");
    educationGradDateContainer.setAttribute("class", "span-3");

    // label
    let educationGradDateLabel = document.createElement("label");
    educationGradDateLabel.setAttribute("for", `educationGradDate.${counter}`);
    educationGradDateLabel.innerHTML = "Graduation Date";
    // input
    let educationGradDateInput = document.createElement("input");
    educationGradDateInput.setAttribute("type", "date");
    educationGradDateInput.setAttribute("name", `educationGradDate.${counter}`);
    educationGradDateInput.setAttribute("id", `educationGradDate.${counter}`);

    educationGradDateContainer.appendChild(educationGradDateLabel);
    educationGradDateContainer.appendChild(educationGradDateInput);

    // ERROR MESSAGE
    let educationGradDateError = document.createElement("div");
    educationGradDateError.setAttribute("class", "error");
    educationGradDateError.setAttribute("id", `error-educationGradDate.${counter}`);
    educationGradDateError.innerHTML = "&nbsp;";
    educationGradDateContainer.appendChild(educationGradDateError);

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
    experienceEmployerLabel.setAttribute("for", `experienceEmployer.${counter}`);
    experienceEmployerLabel.innerHTML = "Employer ";
    // input
    let experienceEmployerInput = document.createElement("input");
    experienceEmployerInput.setAttribute("type", "text");
    experienceEmployerInput.setAttribute("name", `experienceEmployer.${counter}`);
    experienceEmployerInput.setAttribute("id", `experienceEmployer.${counter}`);

    experienceEmployerContainer.appendChild(experienceEmployerLabel);
    experienceEmployerContainer.appendChild(experienceEmployerInput);
    // ERROR MESSAGE
    let experienceEmployerError = document.createElement("div");
    experienceEmployerError.setAttribute("class", "error");
    experienceEmployerError.setAttribute("id", `error-experienceEmployer.${counter}`);
    experienceEmployerError.innerHTML = "&nbsp;";
    experienceEmployerContainer.appendChild(experienceEmployerError);

    experience.appendChild(experienceEmployerContainer);

    // =========================== supervisor name container ===========================
    let experienceSupervisorContainer = document.createElement("div");
    experienceSupervisorContainer.setAttribute("class", "span-3");

    // label
    let experienceSupervisorLabel = document.createElement("label");
    experienceSupervisorLabel.setAttribute("for", `experienceSupervisor.${counter}`);
    experienceSupervisorLabel.innerHTML = "Supervisor";
    // input
    let experienceSupervisorInput = document.createElement("input");
    experienceSupervisorInput.setAttribute("type", "text");
    experienceSupervisorInput.setAttribute("name", `experienceSupervisor.${counter}`);
    experienceSupervisorInput.setAttribute("id", `experienceSupervisor.${counter}`);

    experienceSupervisorContainer.appendChild(experienceSupervisorLabel);
    experienceSupervisorContainer.appendChild(experienceSupervisorInput);

    // ERROR MESSAGE
    let experienceSupervisorError = document.createElement("div");
    experienceSupervisorError.setAttribute("class", "error");
    experienceSupervisorError.setAttribute("id", `error-experienceSupervisor.${counter}`);
    experienceSupervisorError.innerHTML = "&nbsp;";
    experienceSupervisorContainer.appendChild(experienceSupervisorError);

    // =========================== employer phone container ===========================
    let experienceEmployerPhoneContainer = document.createElement("div");
    experienceEmployerPhoneContainer.setAttribute("class", "span-3");

    // label
    let experienceEmployerPhoneLabel = document.createElement("label");
    experienceEmployerPhoneLabel.setAttribute("for", `experienceEmployerPhone.${counter}`);
    experienceEmployerPhoneLabel.innerHTML = "Employer Phone Number";
    // input
    let experienceEmployerPhoneInput = document.createElement("input");
    experienceEmployerPhoneInput.setAttribute("type", "text");
    experienceEmployerPhoneInput.setAttribute("name", `experienceEmployerPhone.${counter}`);
    experienceEmployerPhoneInput.setAttribute("id", `experienceEmployerPhone.${counter}`);

    experienceEmployerPhoneContainer.appendChild(experienceEmployerPhoneLabel);
    experienceEmployerPhoneContainer.appendChild(experienceEmployerPhoneInput);

    // ERROR MESSAGE
    let experienceEmployerPhoneError = document.createElement("div");
    experienceEmployerPhoneError.setAttribute("class", "error");
    experienceEmployerPhoneError.setAttribute("id", `error-experienceEmployerPhone.${counter}`);
    experienceEmployerPhoneError.innerHTML = "&nbsp;";
    experienceEmployerPhoneContainer.appendChild(experienceEmployerPhoneError);

    // =========================== employer email container ===========================
    let experienceEmployerEMailContainer = document.createElement("div");
    experienceEmployerEMailContainer.setAttribute("class", "span-3");

    // label
    let experienceEmployerEMailLabel = document.createElement("label");
    experienceEmployerEMailLabel.setAttribute("for", `experienceEmployerEMail.${counter}`);
    experienceEmployerEMailLabel.innerHTML = "Employer E-Mail";
    // input
    let experienceEmployerEMailInput = document.createElement("input");
    experienceEmployerEMailInput.setAttribute("type", "text");
    experienceEmployerEMailInput.setAttribute("name", `experienceEmployerEMail.${counter}`);
    experienceEmployerEMailInput.setAttribute("id", `experienceEmployerEMail.${counter}`);

    experienceEmployerEMailContainer.appendChild(experienceEmployerEMailLabel);
    experienceEmployerEMailContainer.appendChild(experienceEmployerEMailInput);

    // ERROR MESSAGE
    let experienceEmployerEMailError = document.createElement("div");
    experienceEmployerEMailError.setAttribute("class", "error");
    experienceEmployerEMailError.setAttribute("id", `error-experienceEmployerEMail.${counter}`);
    experienceEmployerEMailError.innerHTML = "&nbsp;";
    experienceEmployerEMailContainer.appendChild(experienceEmployerEMailError);

    // =========================== address container ===========================
    let experienceAddressContainer = document.createElement("div");
    experienceAddressContainer.setAttribute("class", "span-6");

    // label
    let experienceAddressLabel = document.createElement("label");
    experienceAddressLabel.setAttribute("for", `experienceAddress.${counter}`);
    experienceAddressLabel.innerHTML = "Employer Address";
    // input
    let experienceAddressInput = document.createElement("input");
    experienceAddressInput.setAttribute("type", "text");
    experienceAddressInput.setAttribute("name", `experienceAddress.${counter}`);
    experienceAddressInput.setAttribute("id", `experienceAddress.${counter}`);

    experienceAddressContainer.appendChild(experienceAddressLabel);
    experienceAddressContainer.appendChild(experienceAddressInput);

    // ERROR MESSAGE
    let experienceAddressError = document.createElement("div");
    experienceAddressError.setAttribute("class", "error");
    experienceAddressError.setAttribute("id", `error-experienceAddress.${counter}`);
    experienceAddressError.innerHTML = "&nbsp;";
    experienceAddressContainer.appendChild(experienceAddressError);

    // =========================== may we contact container ===========================
    let experienceContactPermissionContainer = document.createElement("div");
    experienceContactPermissionContainer.setAttribute("class", "span-12 radio-field");

    let experienceContactPermissionLabel = document.createElement("div");
    experienceContactPermissionLabel.setAttribute("class", "label");
    experienceContactPermissionLabel.innerText = "May we contact this employer?";

    let experienceContactPermissionOpt1Label = document.createElement("label");
    let experienceContactPermissionOpt1Input = document.createElement("input");
    experienceContactPermissionOpt1Input.setAttribute("type", "radio");
    experienceContactPermissionOpt1Input.setAttribute("name", `experienceContactPermission.${counter}`);
    experienceContactPermissionOpt1Input.setAttribute("value", "yes");
    experienceContactPermissionOpt1Label.appendChild(experienceContactPermissionOpt1Input);
    experienceContactPermissionOpt1Label.innerHTML += "Yes";

    let experienceContactPermissionOpt2Label = document.createElement("label");
    let experienceContactPermissionOpt2Input = document.createElement("input");
    experienceContactPermissionOpt2Input.setAttribute("type", "radio");
    experienceContactPermissionOpt2Input.setAttribute("name", `experienceContactPermission.${counter}`);
    experienceContactPermissionOpt2Input.setAttribute("value", "no");
    experienceContactPermissionOpt2Label.appendChild(experienceContactPermissionOpt2Input);
    experienceContactPermissionOpt2Label.innerHTML += "No";

    let experienceContactPermissionOptDef = document.createElement("input");
    experienceContactPermissionOptDef.setAttribute("style", "display: none");
    experienceContactPermissionOptDef.setAttribute("type", "radio");
    experienceContactPermissionOptDef.setAttribute("name", `experienceContactPermission.${counter}`);
    experienceContactPermissionOptDef.setAttribute("value", "untouched");
    experienceContactPermissionOptDef.setAttribute("checked", "checked");

    experienceContactPermissionContainer.appendChild(experienceContactPermissionLabel);
    experienceContactPermissionContainer.appendChild(experienceContactPermissionOpt1Label);
    experienceContactPermissionContainer.appendChild(experienceContactPermissionOpt2Label);
    experienceContactPermissionContainer.appendChild(experienceContactPermissionOptDef);

    // ERROR MESSAGE
    let experienceContactPermissionError = document.createElement("div");
    experienceContactPermissionError.setAttribute("class", "error");
    experienceContactPermissionError.setAttribute("id", `error-experienceContactPermission.${counter}`);
    experienceContactPermissionError.innerHTML = "&nbsp;";
    experienceContactPermissionContainer.appendChild(experienceContactPermissionError);

    // =========================== job title container ===========================
    let experiencePositionTitleContainer = document.createElement("div");
    experiencePositionTitleContainer.setAttribute("class", "span-6");

    // label
    let experiencePositionTitleLabel = document.createElement("label");
    experiencePositionTitleLabel.setAttribute("for", `experiencePositionTitle.${counter}`);
    experiencePositionTitleLabel.innerHTML = "Job Title";
    // input
    let experiencePositionTitleInput = document.createElement("input");
    experiencePositionTitleInput.setAttribute("type", "text");
    experiencePositionTitleInput.setAttribute("name", `experiencePositionTitle.${counter}`);
    experiencePositionTitleInput.setAttribute("id", `experiencePositionTitle.${counter}`);

    experiencePositionTitleContainer.appendChild(experiencePositionTitleLabel);
    experiencePositionTitleContainer.appendChild(experiencePositionTitleInput);

    // ERROR MESSAGE
    let experiencePositionTitleError = document.createElement("div");
    experiencePositionTitleError.setAttribute("class", "error");
    experiencePositionTitleError.setAttribute("id", `error-experiencePositionTitle.${counter}`);
    experiencePositionTitleError.innerHTML = "&nbsp;";
    experiencePositionTitleContainer.appendChild(experiencePositionTitleError);

    // =========================== employment start container ===========================
    let experienceEmploymentStartContainer = document.createElement("div");
    experienceEmploymentStartContainer.setAttribute("class", "span-3");

    // label
    let experienceEmploymentStartLabel = document.createElement("label");
    experienceEmploymentStartLabel.setAttribute("for", `experienceEmploymentStart.${counter}`);
    experienceEmploymentStartLabel.innerHTML = "Employment Start";
    // input
    let experienceEmploymentStartInput = document.createElement("input");
    experienceEmploymentStartInput.setAttribute("type", "date");
    experienceEmploymentStartInput.setAttribute("name", `experienceEmploymentStart.${counter}`);
    experienceEmploymentStartInput.setAttribute("id", `experienceEmploymentStart.${counter}`);

    experienceEmploymentStartContainer.appendChild(experienceEmploymentStartLabel);
    experienceEmploymentStartContainer.appendChild(experienceEmploymentStartInput);

    // ERROR MESSAGE
    let experienceEmploymentStartError = document.createElement("div");
    experienceEmploymentStartError.setAttribute("class", "error");
    experienceEmploymentStartError.setAttribute("id", `error-experienceEmploymentStart.${counter}`);
    experienceEmploymentStartError.innerHTML = "&nbsp;";
    experienceEmploymentStartContainer.appendChild(experienceEmploymentStartError);

    // =========================== employment end container ===========================
    let experienceEmploymentEndContainer = document.createElement("div");
    experienceEmploymentEndContainer.setAttribute("class", "span-3");

    // label
    let experienceEmploymentEndLabel = document.createElement("label");
    experienceEmploymentEndLabel.setAttribute("for", `experienceEmploymentEnd.${counter}`);
    experienceEmploymentEndLabel.innerHTML = "Employment End";
    // input
    let experienceEmploymentEndInput = document.createElement("input");
    experienceEmploymentEndInput.setAttribute("type", "date");
    experienceEmploymentEndInput.setAttribute("name", `experienceEmploymentEnd.${counter}`);
    experienceEmploymentEndInput.setAttribute("id", `experienceEmploymentEnd.${counter}`);

    experienceEmploymentEndContainer.appendChild(experienceEmploymentEndLabel);
    experienceEmploymentEndContainer.appendChild(experienceEmploymentEndInput);

    // ERROR MESSAGE
    let experienceEmploymentEndError = document.createElement("div");
    experienceEmploymentEndError.setAttribute("class", "error");
    experienceEmploymentEndError.setAttribute("id", `error-experienceEmploymentEnd.${counter}`);
    experienceEmploymentEndError.innerHTML = "&nbsp;";
    experienceEmploymentEndContainer.appendChild(experienceEmploymentEndError);

    // =========================== pay/salary start container ===========================
    let experienceCompensationStartContainer = document.createElement("div");
    experienceCompensationStartContainer.setAttribute("class", "span-3");

    // label
    let experienceCompensationStartLabel = document.createElement("label");
    experienceCompensationStartLabel.setAttribute("for", `experienceCompensationStart.${counter}`);
    experienceCompensationStartLabel.innerHTML = "Starting Compensation";
    // input
    let experienceCompensationStartInput = document.createElement("input");
    experienceCompensationStartInput.setAttribute("type", "number");
    experienceCompensationStartInput.setAttribute("name", `experienceCompensationStart.${counter}`);
    experienceCompensationStartInput.setAttribute("id", `experienceCompensationStart.${counter}`);

    experienceCompensationStartContainer.appendChild(experienceCompensationStartLabel);
    experienceCompensationStartContainer.appendChild(experienceCompensationStartInput);

    // ERROR MESSAGE
    let experienceCompensationStartError = document.createElement("div");
    experienceCompensationStartError.setAttribute("class", "error");
    experienceCompensationStartError.setAttribute("id", `error-experienceCompensationStart.${counter}`);
    experienceCompensationStartError.innerHTML = "&nbsp;";
    experienceCompensationStartContainer.appendChild(experienceCompensationStartError);

    // =========================== pay/salary end container ===========================
    let experienceCompensationEndContainer = document.createElement("div");
    experienceCompensationEndContainer.setAttribute("class", "span-3");

    // label
    let experienceCompensationEndLabel = document.createElement("label");
    experienceCompensationEndLabel.setAttribute("for", `experienceCompensationEnd.${counter}`);
    experienceCompensationEndLabel.innerHTML = "Ending Compensation";
    // input
    let experienceCompensationEndInput = document.createElement("input");
    experienceCompensationEndInput.setAttribute("type", "number");
    experienceCompensationEndInput.setAttribute("name", `experienceCompensationEnd.${counter}`);
    experienceCompensationEndInput.setAttribute("id", `experienceCompensationEnd.${counter}`);

    experienceCompensationEndContainer.appendChild(experienceCompensationEndLabel);
    experienceCompensationEndContainer.appendChild(experienceCompensationEndInput);

    // ERROR MESSAGE
    let experienceCompensationEndError = document.createElement("div");
    experienceCompensationEndError.setAttribute("class", "error");
    experienceCompensationEndError.setAttribute("id", `error-experienceCompensationEnd.${counter}`);
    experienceCompensationEndError.innerHTML = "&nbsp;";
    experienceCompensationEndContainer.appendChild(experienceCompensationEndError);

    // =========================== duties textarea container ===========================
    let experienceDutiesContainer = document.createElement("div");
    experienceDutiesContainer.setAttribute("class", "span-6");

    // label
    let experienceDutiesLabel = document.createElement("label");
    experienceDutiesLabel.setAttribute("for", `experienceDuties.${counter}`);
    experienceDutiesLabel.innerHTML = "Duties";
    // input
    let experienceDutiesTextArea = document.createElement("textarea");
    experienceDutiesTextArea.setAttribute("style", "font-size: 16pt; width: 100%; border-radius: 5px");
    experienceDutiesTextArea.setAttribute("name", `experienceDuties.${counter}`);
    experienceDutiesTextArea.setAttribute("id", `experienceDuties.${counter}`);
    experienceDutiesTextArea.setAttribute("rows", "8");
    experienceDutiesTextArea.setAttribute("placeholder", "List duties performed, skills used, and advancements and promotions earned");

    experienceDutiesContainer.appendChild(experienceDutiesLabel);
    experienceDutiesContainer.appendChild(experienceDutiesTextArea);

    // ERROR MESSAGE
    let experienceDutiesError = document.createElement("div");
    experienceDutiesError.setAttribute("class", "error");
    experienceDutiesError.setAttribute("id", `error-experienceDuties.${counter}`);
    experienceDutiesError.innerHTML = "&nbsp;";
    experienceDutiesContainer.appendChild(experienceDutiesError);

    // =========================== reason for leaving end container ===========================
    let experienceReasonForLeavingContainer = document.createElement("div");
    experienceReasonForLeavingContainer.setAttribute("class", "span-6");

    // label
    let experienceReasonForLeavingLabel = document.createElement("label");
    experienceReasonForLeavingLabel.setAttribute("for", `experienceReasonForLeaving.${counter}`);
    experienceReasonForLeavingLabel.innerHTML = "Reason for leaving";
    // input
    let experienceReasonForLeavingInput = document.createElement("input");
    experienceReasonForLeavingInput.setAttribute("type", "text");
    experienceReasonForLeavingInput.setAttribute("name", `experienceReasonForLeaving.${counter}`);
    experienceReasonForLeavingInput.setAttribute("id", `experienceReasonForLeaving.${counter}`);

    experienceReasonForLeavingContainer.appendChild(experienceReasonForLeavingLabel);
    experienceReasonForLeavingContainer.appendChild(experienceReasonForLeavingInput);

    // ERROR MESSAGE
    let experienceReasonForLeavingError = document.createElement("div");
    experienceReasonForLeavingError.setAttribute("class", "error");
    experienceReasonForLeavingError.setAttribute("id", `error-experienceReasonForLeaving.${counter}`);
    experienceReasonForLeavingError.innerHTML = "&nbsp;";
    experienceReasonForLeavingContainer.appendChild(experienceReasonForLeavingError);

    // =========================== headers ===========================
    let employerHeading = document.createElement("h3");
    employerHeading.setAttribute("class", "span-12");
    employerHeading.innerHTML = "Employer";
    let positionHeading = document.createElement("h3");
    positionHeading.setAttribute("class", "span-12");
    positionHeading.innerHTML = "Position";
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
    let spacer6 = document.createElement("div");
    spacer6.setAttribute("class", "span-6");
    // =========================== append ===========================
    experience.appendChild(employerHeading);
    experience.appendChild(experienceEmployerContainer);
    experience.appendChild(experienceSupervisorContainer);
    experience.appendChild(spacer1);
    experience.appendChild(experienceEmployerPhoneContainer);
    experience.appendChild(experienceEmployerEMailContainer);
    experience.appendChild(spacer2);
    experience.appendChild(experienceAddressContainer);
    experience.appendChild(experienceContactPermissionContainer);

    experience.appendChild(positionHeading);
    experience.appendChild(experiencePositionTitleContainer);
    experience.appendChild(spacer3);
    experience.appendChild(experienceEmploymentStartContainer);
    experience.appendChild(experienceEmploymentEndContainer);
    experience.appendChild(spacer4);
    experience.appendChild(experienceCompensationStartContainer);
    experience.appendChild(experienceCompensationEndContainer);
    experience.appendChild(spacer5);
    experience.appendChild(experienceDutiesContainer);
    experience.appendChild(spacer6);
    experience.appendChild(experienceReasonForLeavingContainer);

    workExperiences.appendChild(experience);
  }

  let addWorkExpButton = document.getElementById("addWorkExp");
  addWorkExpButton.addEventListener("click", function (e) {
    e.preventDefault();
    addWorkExperience(++counters.workExperience);
  });

  let addEducationItemButton = document.getElementById("addEducationItem");
  addEducationItemButton.addEventListener("click", function (e) {
    e.preventDefault();
    addEducationItem(++counters.education);
  });

  let addCrimeButton = document.getElementById("addCrime");
  addCrimeButton.addEventListener("click", function (e) {
    e.preventDefault();
    addCrime(++counters.crime);
  });

  let addReferenceButton = document.getElementById("addReference");
  addReferenceButton.addEventListener("click", function (e) {
    e.preventDefault();
    addReference(++counters.reference);
  });

  let form = document.getElementById("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(this);
    validateForm(data, counters);
  });
};

const options = {
  race: ["white", "blackAfrAm", "amrIndAlskNtv", "asian", "hawiPaciIsld", "latino", "other"],
  availability: ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"],
  gender: ["male", "female", "other"],
  employmentDesired: ["full-time", "part-time"],
  crimeClass: ["misdemeanor", "felony"],
  sentenceType: ["confinement", "probation", "communitySrvc"],
  institutionType: ["highSchool", "underGrad", "grad", "postGrad", "professional"],
  states: [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ],
};

function validateForm(data, counters) {
  let foundErrors = false;
  let errorNotification = document.getElementById("error-notification");
  errorNotification.setAttribute("style", "display:none");

  const validationMap = {
    firstName: textValidation.small,
    lastName: textValidation.small,
    middleName: textValidation.small,
    email: validateEmail,
    telephone: validatePhoneNumber,
    mobilephone: validatePhoneNumber,
    over18: validateRadio,
    street: textValidation.large,
    city: textValidation.large,
    state: validateOptions(options.states),
    zip: validateZip,
    ssn: validateSSN,
    // gender: validateOptions(options.gender),
    position: textValidation.medium,
    employmentDesired: validateOptions(options.employmentDesired),
    // availability: todo
    availableNights: validateRadio,
    dateAvailable: validateDate,
    hoursAvailable: validateNumberField(1, 2),
    reliableTransportation: validateRadio,
    pastConviction: validateRadio,
    accidentsPast3Years: validateNumberField(0, 2),
    violationsPast3Years: validateNumberField(0, 2),
    stoppedForDUI: validateRadio,
    stoppedForDistractedDriving: validateRadio,
    highestEducation: textValidation.large,
    acceptedTerms: validateRadio,
  };

  const reactiveValidationMap = {
    crimeDate: validateDate,
    crimeDesc: textValidation.large,
    crimeClass: validateOptions(options.crimeClass),
    crimeSentenceType: validateOptions(options.sentenceType),
    crimeSentenceDuration: validateNumberField(0, 3),
    referenceName: textValidation.medium,
    referenceTitle: textValidation.medium,
    referenceCompany: textValidation.medium,
    referenceAddress: textValidation.large,
    referenceTelephone: validatePhoneNumber,
    referenceEMail: validateEmail,
    educationInstitution: textValidation.large,
    educationInstitutionType: validateOptions(options.institutionType),
    educationCityState: textValidation.large,
    educationMajor: textValidation.large,
    educationGradDate: validateDate,
    experienceEmployer: textValidation.medium,
    experienceSupervisor: textValidation.small,
    experienceEmployerPhone: validatePhoneNumber,
    experienceEmployerEMail: validateEmail,
    experienceAddress: validateEmail,
    experienceContactPermission: validateRadio,
    experiencePositionTitle: textValidation.large,
    experienceEmploymentStart: validateDate,
    experienceEmploymentEnd: validateDate,
    experienceCompensationStart: validateNumberField(0, 9),
    experienceCompensationEnd: validateNumberField(0, 9),
    experienceDuties: textValidation.xl,
    experienceReasonForLeaving: textValidation.large,
  };

  const reactiveKeys = {
    crime: ["crimeDate", "crimeDesc", "crimeClass", "crimeSentenceType", "crimeSentenceDuration"],
    // education: ,
    reference: ["referenceName", "referenceTitle", "referenceCompany", "referenceAddress", "referenceTelephone", "referenceEMail"],
    education: ["educationInstitution", "educationInstitutionType", "educationCityState", "educationMajor", "educationGradDate"],
    workExperience: [
      "experienceEmployer",
      "experienceSupervisor",
      "experienceEmployerPhone",
      "experienceEmployerEMail",
      "experienceAddress",
      "experienceContactPermission",
      "experiencePositionTitle",
      "experienceEmploymentStart",
      "experienceEmploymentEnd",
      "experienceCompensationStart",
      "experienceCompensationEnd",
      "experienceDuties",
      "experienceReasonForLeaving",
    ],
  };

  // reset errors
  Object.keys(validationMap).forEach((key) => {
    document.getElementById(`error-${key}`).innerHTML = "&nbsp;";
  });
  // reactive inputs
  Object.entries(reactiveKeys).forEach(([reactiveKey, keys]) => {
    for (let i = 0; i <= counters[reactiveKey]; i++)
      keys.forEach((key) => {
        document.getElementById(`error-${key}.${i}`).innerHTML = "&nbsp;";
      });
  });

  let raceFound = false;
  let availabilityFound = false;
  document.getElementById("error-race").innerHTML = "&nbsp;";
  document.getElementById("error-availability").innerHTML = "&nbsp;";

  for (const [key, value] of data.entries()) {
    console.log({ key, value });
    if (key == "race") {
      raceFound = true;
    } else if (key == "availability") {
      availabilityFound = true;
    }

    if (key.includes(".")) {
      const [propertyKey, index] = key.split(".");
      // console.log(key.split("."));
      // console.log({ propertyKey, index, value });
      const fn = reactiveValidationMap[propertyKey];
      if (fn) {
        const message = fn(value, propertyKey);
        if (message) {
          foundErrors = true;
          console.log("here");
          console.log(foundErrors);
          document.getElementById(`error-${propertyKey}.${index}`).innerHTML = message;
        }
      }
    } else {
      const fn = validationMap[key];
      if (fn) {
        const message = fn(value, key);
        if (message) {
          document.getElementById(`error-${key}`).innerHTML = message;
          foundErrors = true;
        }
      }
    }
  }
  if (raceFound == false) {
    document.getElementById("error-race").innerHTML = "Required";
  }
  if (availabilityFound == false) {
    document.getElementById("error-availability").innerHTML = "Required";
  }
  if (foundErrors == true || raceFound == false || availabilityFound == false) {
    errorNotification.innerHTML = "Please review your application and fix any field errors";
    errorNotification.setAttribute("style", "display:block");
    window.scrollTo(0, 0);
  } else {
    document.location.pathname = "/thanks.html";
  }
}

function validateOptions(options) {
  return function (value, key) {
    let errorString = null;
    if (!options.includes(value)) {
      errorString = "Required";
    }
    return errorString;
  };
}

const textValidation = {
  small: validateText(30),
  medium: validateText(50),
  large: validateText(150),
  xl: validateText(500),
};

function validateText(maxLength) {
  return function (value) {
    let erorrString = null;
    if (isEmpty(value)) {
      erorrString = "Required!";
    } else if (!validateLength(value, 0, maxLength)) {
      erorrString = `Must be within 0-${maxLength} characters`;
    }
    return erorrString;
  };
}
function validateDate(value) {
  const { year, monthIndex, day } = extractDate(value);
  if (Number.isNaN(year)) {
    return "Please enter a valid date";
  } else if (!(day >= 1 && day <= 31)) {
    return "Please enter a valid day";
  } else if (!(monthIndex >= 0 && monthIndex <= 11)) {
    return "Please enter a valid month";
  }
}
function extractDate(value) {
  const [endYYYY, startMM, startDD] = [4, 5, 8]; // YYYY/MM/DD
  const year = Number.parseInt(value.slice(0, endYYYY));
  const monthIndex = Number.parseInt(value.slice(startMM, startDD - 1)) - 1; // zero-based month
  const day = Number.parseInt(value.slice(startDD));
  const date = new Date(year, monthIndex, day);
  date.setHours(0, 0, 0, 0);
  return { date, year, monthIndex, day };
}
function validateRadio(value) {
  let errorString = null;
  if (value !== "yes" && value !== "no") {
    errorString = "Must be Yes or No";
  }
  return errorString;
}

function validateNumberField(minLength, maxLength) {
  return function validateWeeklyHours(value) {
    let erorrString = null;
    if (!validateLength(value, minLength, maxLength)) {
      erorrString = `Must be ${minLength}-${maxLength} digits`;
    } else if (!isNum) {
      erorrString = "This field must be a number";
    }
    return erorrString;
  };
}
function validatePhoneNumber(value) {
  let erorrString = null;
  if (!validateLength(value, 0, 11)) {
    erorrString = "Must be valid phone number";
  } else if (!isNum) {
    erorrString = "This field must be a number";
  }
  return erorrString;
}

function validateSSN(value) {
  let erorrString = null;
  if (isEmpty(value)) {
    erorrString = "Required!";
  } else if (!validateLength(value, 9, 9)) {
    erorrString = "Must be 9 digits";
  } else if (!isNum) {
    erorrString = "This field must be a number";
  }
  return erorrString;
}
function validateEmail(value) {
  let erorrString = null;
  if (isEmpty(value)) {
    erorrString = "Email is required!";
  } else if (!validateEmailString(value)) {
    erorrString = "Please fix your email: letters, numbers, underscores, periods, dashes, and one '@' are allowed. ";
  }
  return erorrString;
}
function validateEmailString(email) {
  let re = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(email);
  // http://zparacha.com/validate-email-address-using-javascript-regular-expression
}
function validateZip(value) {
  let erorrString = null;
  if (isEmpty(value)) {
    erorrString = "Zip code is required!";
  } else if (!validateZipString(value)) {
    erorrString = "Must be 5 digits or include a '-' if 9 digits";
  } else if (!isNum) {
    erorrString = "This field must be a number";
  }
  return erorrString;
}
function validateZipString(zip) {
  // let isValidZip = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
  let isValidZip = /^([0-9]{5})+(-([0-9]{4}))?$/;

  return isValidZip.test(zip);
}
function validateLength(value, minLength, maxLength) {
  let length;
  if (typeof value == "number") {
    length = value.toString().length;
  } else if (typeof value == "string") {
    length = value.length;
  }
  return length <= maxLength && length >= minLength ? true : false;
}

function validateNumRange(value, min, max) {
  return value >= min && value <= max ? true : false;
}

function isEmpty(value) {
  return value.length == 0 ? true : false;
}

function isNum(value) {
  return typeof Number.parseInt(value) == "number" ? true : false;
}
