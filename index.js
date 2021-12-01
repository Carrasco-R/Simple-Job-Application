window.onload = function () {
  const counters = {
    education: 0,
    crime: 0,
    references: 0,
    workExperience: 0,
  };
  let addCrimeButton = document.getElementById("addCrime");
  addCrimeButton.addEventListener("click", function (e) {
    e.preventDefault();
    addCrime(counters.crime);
    counters.crime += 1;
  });

  function addCrime(counter) {
    let crimeTable = document.getElementById("crime-table");
    // console.log(crimeTable);

    // =========================== crime container ===========================
    let crimeContainer = document.createElement("div");
    crimeContainer.setAttribute("class", "field-grid crime");

    // =========================== date container ===========================
    let crimeDateContainer = document.createElement("div");
    crimeDateContainer.setAttribute("class", "span-4");

    // label
    let crimeDateLabel = document.createElement("label");
    crimeDateLabel.setAttribute("for", "crimeDate");
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
    crimeDescLabel.setAttribute("for", "crimeDesc");
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
    crimeSentenceDurationLabel.setAttribute("for", "crimeSentenceDuration");
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

    console.log(crimeContainer);
    crimeTable.appendChild(crimeContainer);
  }

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
