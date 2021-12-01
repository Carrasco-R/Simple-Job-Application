window.onload = function () {
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
  crimeDateInput.setAttribute("name", "crimeDate");
  crimeDateInput.setAttribute("id", "crimeDate");

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
  crimeDescInput.setAttribute("name", "crimeDesc");
  crimeDescInput.setAttribute("id", "crimeDesc");

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
  crimeClassOpt1Input.setAttribute("name", "crimeClass");
  crimeClassOpt1Input.setAttribute("value", "misdemeanor");
  crimeClassOpt1Label.appendChild(crimeClassOpt1Input);
  crimeClassOpt1Label.innerHTML += "Misdemeanor";

  let crimeClassOpt2Label = document.createElement("label");
  let crimeClassOpt2Input = document.createElement("input");
  crimeClassOpt2Input.setAttribute("type", "radio");
  crimeClassOpt2Input.setAttribute("name", "crimeClass");
  crimeClassOpt2Input.setAttribute("value", "felony");
  crimeClassOpt2Label.appendChild(crimeClassOpt2Input);
  crimeClassOpt2Label.innerHTML += "Felony";

  let crimeClassOptDef = document.createElement("input");
  crimeClassOptDef.setAttribute("style", "display: none");
  crimeClassOptDef.setAttribute("type", "radio");
  crimeClassOptDef.setAttribute("name", "crimeClass");
  crimeClassOptDef.setAttribute("value", "untouched");
  crimeClassOptDef.setAttribute("checked", "checked");

  crimeClassContainer.appendChild(crimeClassLabel);
  crimeClassContainer.appendChild(crimeClassOpt1Label);
  crimeClassContainer.appendChild(crimeClassOpt2Label);
  crimeClassContainer.appendChild(crimeClassOptDef);

  // =========================== sentence type container ===========================
  let crimeSentenceTypeContainer = document.createElement("div");
  crimeSentenceTypeContainer.setAttribute("class", "span-12 radio-field");

  // =========================== sentence duration container ===========================
  let crimeSentenceDurationContainer = document.createElement("div");
  crimeSentenceDurationContainer.setAttribute("class", "span-3");

  crimeContainer.appendChild(crimeDateContainer);
  crimeContainer.appendChild(spacer);
  crimeContainer.appendChild(crimeDescContainer);
  crimeContainer.appendChild(crimeClassContainer);
  crimeContainer.appendChild(crimeSentenceTypeContainer);
  crimeContainer.appendChild(crimeSentenceDurationContainer);

  console.log(crimeContainer);

  crimeTable.appendChild(crimeContainer);

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
