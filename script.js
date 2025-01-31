// Get the dropdowns and buttons
//Basic Room
const basicFacilityDropdown = document.getElementById('basic-facility-dropdown');
const basicSpaceDropdown = document.getElementById('basic-space-dropdown');
const basicBuildBtn = document.getElementById('basic-build-btn');
const basicRoomList = document.querySelector('.bastion-log');

//Special Room
const specialFacilityDropdown = document.getElementById('special-facility-dropdown');
const specialSpaceDropdown = document.getElementById('special-space-dropdown');
const specialBuildBtn = document.getElementById('special-build-btn');

//Additional Room
const additionalBuildBtn = document.getElementById('additional-build-btn');
const additionalDropdown = document.getElementById('additional-facility-dropdown');

//Bastion Events
const bastionLogEvents = document.querySelector('.bastion-log');

//Construction space
const constructionDiv = document.querySelector('.construction');

//Action space
const actionDiv = document.querySelector('.bastion-turn');
const actionLoadBtn = document.getElementById('bastion-load-btn');
const actionAddBtn = document.getElementById('add-order-btn');
const actionDropdown = document.getElementById('bastion-facility');

//Bastion turn controls
const startBastionTurn = document.getElementById('bastion-start-btn');
const stopBastionTurn = document.getElementById('bastion-stop-btn');
const bastLevelDropDown = document.getElementById('bast-level-dropdown');
const bastfacilDropDown = document.getElementById('bastion-facility-dropdown');
const bastorderDropDown = document.getElementById('order-dropdown');
const bastmaintainBtn = document.getElementById('maintain-order-btn');

// Add event listener for building a facility
basicBuildBtn.addEventListener('click', () => {
  const selectedFacility = basicFacilityDropdown.options[basicFacilityDropdown.selectedIndex].value;
  const selectedSpace = basicSpaceDropdown.options[basicSpaceDropdown.selectedIndex].value;

    // Update the basic log element
    //const roomListElement = document.createElement('li');
    //roomListElement.textContent = `${selectedFacility} (${selectedSpace})`;
    //basicRoomList.appendChild(roomListElement);
    
    // Add the new facility to the bastion log events element
    const bastionLogEvent = document.createElement('li');
    bastionLogEvent.textContent = `Adding ${selectedFacility} (${selectedSpace})`;
    
    // Create a remove button
    const bastionRemoveBtn = document.createElement('button');
    bastionRemoveBtn.textContent = 'Remove';
    bastionRemoveBtn.addEventListener('click', () => {
      bastionLogEvent.remove();
    });
    
    bastionLogEvent.appendChild(bastionRemoveBtn);
    bastionLogEvents.appendChild(bastionLogEvent);
  });

additionalBuildBtn.addEventListener('click', () => {
  const selectedFacility = additionalDropdown.options[additionalDropdown.selectedIndex].value;

  // Add the facility to the basic room list element
  //const roomListElement = document.createElement('li');
  //roomListElement.textContent = `Adding ${selectedFacility}`;
  //basicRoomList.appendChild(roomListElement);
  
  // Add the new facility to the bastion log events element
  const bastionLogEvent = document.createElement('li');
  bastionLogEvent.textContent = `Adding ${selectedFacility}`;

  // Create a remove button
  const bastionRemoveBtn = document.createElement('button');
  bastionRemoveBtn.textContent = 'Remove';
  bastionRemoveBtn.addEventListener('click', () => {
    bastionLogEvent.remove();
  });
    
  bastionLogEvent.appendChild(bastionRemoveBtn);
  bastionLogEvents.appendChild(bastionLogEvent);
});

document.getElementById("load-btn").addEventListener("click", loadSpecialFacilities);

function loadSpecialFacilities() {
  // remove existing options from the select element
  while (document.getElementById("special-facility-dropdown").options.length > 0) {
    document.getElementById("special-facility-dropdown").remove(0);
  }
  const level = document.getElementById("level-dropdown").value;
  let specialFacilities = [];

  switch (level) {
    case "5":
      specialFacilities = ["Arcane Study", "Armory","Barrack","Garden","Library","Sanctuary","Smithy","Storehouse","Workshop"];
      break;
    case "9":
      specialFacilities = ["Gaming Hall", "Greenhouse", "Laboratory", "Sacristy","Scriptorium","Stable","Teleportation Circle","Theater","Training Area","Trophy Room"];
      break;
    case "13":
      specialFacilities = ["Archive", "Meditation Chamber", "Menagerie", "Observatory", "Pub","Reliquary",];
      break;
    case "17":
      specialFacilities = ["Demiplane", "Guildhall", "Sanctum", "War Room"];
      break;
  }

  const facilityListElement = document.getElementById("special-facility-list");
  for (const facility of specialFacilities) {
    const option = document.createElement("option");
    option.textContent = facility;
    option.value = facility; // add a value attribute to the option
    document.getElementById("special-facility-dropdown").options.add(option);
  }

   
}

specialBuildBtn.addEventListener('click', () => {
    const selectedFacility = specialFacilityDropdown.options[specialFacilityDropdown.selectedIndex].value;
    const selectedSpace = specialSpaceDropdown.options[specialSpaceDropdown.selectedIndex].value;

    // Add the facility to the basic room list element
  const roomListElement = document.createElement('li');
  roomListElement.textContent = `${selectedFacility}`;
  //basicRoomList.appendChild(roomListElement);
  
  // Add the new facility to the bastion log events element
  const bastionLogEvent = document.createElement('li');
  bastionLogEvent.textContent = `Adding ${selectedFacility} (${selectedSpace})`;

  // Create a remove button
  const bastionRemoveBtn = document.createElement('button');
  bastionRemoveBtn.textContent = 'Remove';
  bastionRemoveBtn.addEventListener('click', () => {
      bastionLogEvent.remove();
  });
    
  bastionLogEvent.appendChild(bastionRemoveBtn);
  bastionLogEvents.appendChild(bastionLogEvent);
  
  });


startBastionTurn.addEventListener('click', () => {
  constructionDiv.hidden = true;
  actionDiv.hidden = false;

});

stopBastionTurn.addEventListener('click', () => {
  constructionDiv.hidden = false;
  actionDiv.hidden = true;
  bastLevelDropDown.hidden = false;
  bastfacilDropDown.hidden = false;
  bastorderDropDown.hidden = false;
  const logElement = document.querySelector('.bastion-log');
if (logElement) {
    const childList = Array.from(logElement.children);
    childList.forEach(li => logElement.removeChild(li));
} else {
    console.error('Could not find .bastion-log element');
}
});

actionLoadBtn.addEventListener('click', () => {
  // remove existing options from the select element
  while (document.getElementById("bastion-facility-dropdown").options.length > 0) {
    document.getElementById("bastion-facility-dropdown").remove(0);
  }
  const level = document.getElementById("bast-level-dropdown").value;
  let specialFacilities = [];

  switch (level) {
    case "5":
      specialFacilities = ["Arcane Study", "Armory","Barrack","Garden","Library","Sanctuary","Smithy","Storehouse","Workshop"];
      break;
    case "9":
      specialFacilities = ["Gaming Hall", "Greenhouse", "Laboratory", "Sacristy","Scriptorium","Stable","Teleportation Circle","Theater","Training Area","Trophy Room"];
      break;
    case "13":
      specialFacilities = ["Archive", "Meditation Chamber", "Menagerie", "Observatory", "Pub","Reliquary",];
      break;
    case "17":
      specialFacilities = ["Demiplane", "Guildhall", "Sanctum", "War Room"];
      break;
  }

  const facilityListElement = document.getElementById("bastion-facility-list");
  for (const facility of specialFacilities) {
    const option = document.createElement("option");
    option.textContent = facility;
    option.value = facility; // add a value attribute to the option
    document.getElementById("bastion-facility-dropdown").options.add(option);
  }

});

actionAddBtn.addEventListener('click', () => {
  const selectedFacility = bastfacilDropDown.options[bastfacilDropDown.selectedIndex].value;
  const selectedOrder = bastorderDropDown.options[bastorderDropDown.selectedIndex].value;

  // Add the new facility to the bastion log events element
  const bastionLogEvent = document.createElement('li');
  bastionLogEvent.textContent = `${selectedFacility} (${selectedOrder})`;

  // Create a remove button
  const bastionRemoveBtn = document.createElement('button');
  bastionRemoveBtn.textContent = 'Remove';
  bastionRemoveBtn.addEventListener('click', () => {
    bastionLogEvent.remove();
  });
    
  bastionLogEvent.appendChild(bastionRemoveBtn);
  bastionLogEvents.appendChild(bastionLogEvent);

});

bastmaintainBtn.addEventListener('click', () => {

  bastLevelDropDown.hidden = true;
  bastfacilDropDown.hidden = true;
  bastorderDropDown.hidden = true;

  // Add the new facility to the bastion log events element
  const bastionLogEvent = document.createElement('li');
  bastionLogEvent.textContent = `Maintain Order Issued`;
  bastionLogEvents.appendChild(bastionLogEvent);

  
});

window.onload = function() {
  actionDiv.hidden = true;
};
