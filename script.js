// Bastion Rules Data
const bastionRules = {
  basicFacilities: {
    'Bedroom': { cramped: {days: 1, cost: 100}, roomy: {days: 4, cost: 400}, vast: {days: 9, cost: 900}},
    'Dining Room': { cramped: {days: 1, cost: 100}, roomy: {days: 4, cost: 400}, vast: {days: 9, cost: 900}},
    'Parlor': { cramped: {days: 1, cost: 100}, roomy: {days: 4, cost: 400}, vast: {days: 9, cost: 900}},
    'Courtyard': { cramped: {days: 1, cost: 100}, roomy: {days: 4, cost: 400}, vast: {days: 9, cost: 900}},
    'Kitchen': { cramped: {days: 2, cost: 200}, roomy: {days: 5, cost: 500}, vast: {days: 10, cost: 1000}},
    'Storage': { cramped: {days: 1, cost: 100}, roomy: {days: 4, cost: 400}, vast: {days: 9, cost: 900}}
  },
  additionalFacilities: {
    'Closets': {days: 1, cost: 50},
    'Corridors': {days: 2, cost: 200},
    'Ramps': {days: 1, cost: 100},
    'Staircases': {days: 2, cost: 200},
    'Doors': {days: 1, cost: 100},
    'Windows': {days: 1, cost: 50},
    'Defensive Walls': {days: 10, cost: 2000}
  },
  specialFacilities: {
    5: {
      'Arcane Study': { cramped: {days: 3, cost: 1500}, roomy: {days: 6, cost: 3000}, vast: {days: 12, cost: 6000}},
      'Armory': { cramped: {days: 3, cost: 1500}, roomy: {days: 6, cost: 3000}, vast: {days: 12, cost: 6000}},
      'Barrack': { cramped: {days: 3, cost: 1500}, roomy: {days: 6, cost: 3000}, vast: {days: 12, cost: 6000}},
      'Garden': { cramped: {days: 3, cost: 1500}, roomy: {days: 6, cost: 3000}, vast: {days: 12, cost: 6000}},
      'Library': { cramped: {days: 3, cost: 1500}, roomy: {days: 6, cost: 3000}, vast: {days: 12, cost: 6000}},
      'Sanctuary': { cramped: {days: 3, cost: 1500}, roomy: {days: 6, cost: 3000}, vast: {days: 12, cost: 6000}},
      'Smithy': { cramped: {days: 3, cost: 1500}, roomy: {days: 6, cost: 3000}, vast: {days: 12, cost: 6000}},
      'Storehouse': { cramped: {days: 3, cost: 1500}, roomy: {days: 6, cost: 3000}, vast: {days: 12, cost: 6000}},
      'Workshop': { cramped: {days: 3, cost: 1500}, roomy: {days: 6, cost: 3000}, vast: {days: 12, cost: 6000}}
    },
    9: {
      'Gaming Hall': { cramped: {days: 4, cost: 2000}, roomy: {days: 7, cost: 4000}, vast: {days: 13, cost: 8000}},
      'Greenhouse': { cramped: {days: 4, cost: 2000}, roomy: {days: 7, cost: 4000}, vast: {days: 13, cost: 8000}},
      'Laboratory': { cramped: {days: 4, cost: 2000}, roomy: {days: 7, cost: 4000}, vast: {days: 13, cost: 8000}},
      'Sacristy': { cramped: {days: 4, cost: 2000}, roomy: {days: 7, cost: 4000}, vast: {days: 13, cost: 8000}},
      'Scriptorium': { cramped: {days: 4, cost: 2000}, roomy: {days: 7, cost: 4000}, vast: {days: 13, cost: 8000}},
      'Stable': { cramped: {days: 4, cost: 2000}, roomy: {days: 7, cost: 4000}, vast: {days: 13, cost: 8000}},
      'Teleportation Circle': { cramped: {days: 4, cost: 2000}, roomy: {days: 7, cost: 4000}, vast: {days: 13, cost: 8000}},
      'Theater': { cramped: {days: 4, cost: 2000}, roomy: {days: 7, cost: 4000}, vast: {days: 13, cost: 8000}},
      'Training Area': { cramped: {days: 4, cost: 2000}, roomy: {days: 7, cost: 4000}, vast: {days: 13, cost: 8000}},
      'Trophy Room': { cramped: {days: 4, cost: 2000}, roomy: {days: 7, cost: 4000}, vast: {days: 13, cost: 8000}}
    },
    13: {
      'Archive': { cramped: {days: 5, cost: 2500}, roomy: {days: 8, cost: 5000}, vast: {days: 14, cost: 10000}},
      'Meditation Chamber': { cramped: {days: 5, cost: 2500}, roomy: {days: 8, cost: 5000}, vast: {days: 14, cost: 10000}},
      'Menagerie': { cramped: {days: 5, cost: 2500}, roomy: {days: 8, cost: 5000}, vast: {days: 14, cost: 10000}},
      'Observatory': { cramped: {days: 5, cost: 2500}, roomy: {days: 8, cost: 5000}, vast: {days: 14, cost: 10000}},
      'Pub': { cramped: {days: 5, cost: 2500}, roomy: {days: 8, cost: 5000}, vast: {days: 14, cost: 10000}},
      'Reliquary': { cramped: {days: 5, cost: 2500}, roomy: {days: 8, cost: 5000}, vast: {days: 14, cost: 10000}}
    },
    17: {
      'Demiplane': { cramped: {days: 6, cost: 3000}, roomy: {days: 9, cost: 6000}, vast: {days: 15, cost: 12000}},
      'Guildhall': { cramped: {days: 6, cost: 3000}, roomy: {days: 9, cost: 6000}, vast: {days: 15, cost: 12000}},
      'Sanctum': { cramped: {days: 6, cost: 3000}, roomy: {days: 9, cost: 6000}, vast: {days: 15, cost: 12000}},
      'War Room': { cramped: {days: 6, cost: 3000}, roomy: {days: 9, cost: 6000}, vast: {days: 15, cost: 12000}}
    }
  },
  maintainTable: [
    "The bastion and the surrounding territory experience a minor, temporary boon.",
    "The bastion's owner gains a new valuable contact.",
    "The bastion improves, becoming more resistant to disease and plague.",
    "The bastion experiences unusual natural phenomena with no harmful effects.",
    "The bastion is the focus of adventurers seeking employment.",
    "A non-hostile magical phenomenon occurs within or around the bastion.",
    "The territory surrounding the bastion experiences an event that drives numerous monsters or beasts to move away from the area.",
    "A random encounter that would normally occur in the territory doesn't happen.",
    "The bastion experiences unusually good weather for its climate.",
    "A new settlement appears in the surrounding territory and becomes a trading partner.",
    "A prominent NPC (such as a warlord or wizard) becomes friendly or favorable toward the bastion's owner.",
    "The bastion finds itself with some unexpected good fortune (such as discovering precious metals or gems)."
  ]
};

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
  const spaceKey = selectedSpace.split(' ')[0].toLowerCase();
  
  const ruleData = bastionRules.basicFacilities[selectedFacility][spaceKey];
  const days = ruleData.days;
  const cost = ruleData.cost;

    // Add the new facility to the bastion log events element
    const bastionLogEvent = document.createElement('li');
    const date = new Date().toLocaleString();
    bastionLogEvent.textContent = `[${date}] Adding ${selectedFacility} (${selectedSpace}) - ${days} days, ${cost} gp`;
    
    // Create a remove button
    const bastionRemoveBtn = document.createElement('button');
    bastionRemoveBtn.textContent = 'Remove';
    bastionRemoveBtn.addEventListener('click', () => {
      bastionLogEvent.remove();
    });
    
    bastionLogEvent.appendChild(bastionRemoveBtn);
    bastionLogEvents.appendChild(bastionLogEvent);
    
    saveLog();
  });

additionalBuildBtn.addEventListener('click', () => {
  const selectedFacility = additionalDropdown.options[additionalDropdown.selectedIndex].value;
  const ruleData = bastionRules.additionalFacilities[selectedFacility];
  const days = ruleData.days;
  const cost = ruleData.cost;

  // Add the new facility to the bastion log events element
  const bastionLogEvent = document.createElement('li');
  const date = new Date().toLocaleString();
  bastionLogEvent.textContent = `[${date}] Adding ${selectedFacility} - ${days} days, ${cost} gp`;

  // Create a remove button
  const bastionRemoveBtn = document.createElement('button');
  bastionRemoveBtn.textContent = 'Remove';
  bastionRemoveBtn.addEventListener('click', () => {
    bastionLogEvent.remove();
  });
    
  bastionLogEvent.appendChild(bastionRemoveBtn);
  bastionLogEvents.appendChild(bastionLogEvent);
  
  saveLog();
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
    const level = document.getElementById("level-dropdown").value;
    const spaceKey = selectedSpace.split(' ')[0].toLowerCase();
    
    const ruleData = bastionRules.specialFacilities[level][selectedFacility][spaceKey];
    const days = ruleData.days;
    const cost = ruleData.cost;
  
  // Add the new facility to the bastion log events element
  const bastionLogEvent = document.createElement('li');
  const date = new Date().toLocaleString();
  bastionLogEvent.textContent = `[${date}] Adding ${selectedFacility} (${selectedSpace}) - ${days} days, ${cost} gp`;

  // Create a remove button
  const bastionRemoveBtn = document.createElement('button');
  bastionRemoveBtn.textContent = 'Remove';
  bastionRemoveBtn.addEventListener('click', () => {
      bastionLogEvent.remove();
  });
    
  bastionLogEvent.appendChild(bastionRemoveBtn);
  bastionLogEvents.appendChild(bastionLogEvent);
  
  saveLog();
  
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
  localStorage.removeItem('bastionLog');
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
  const date = new Date().toLocaleString();
  bastionLogEvent.textContent = `[${date}] ${selectedFacility} (${selectedOrder})`;

  // Create a remove button
  const bastionRemoveBtn = document.createElement('button');
  bastionRemoveBtn.textContent = 'Remove';
  bastionRemoveBtn.addEventListener('click', () => {
    bastionLogEvent.remove();
  });
    
  bastionLogEvent.appendChild(bastionRemoveBtn);
  bastionLogEvents.appendChild(bastionLogEvent);
  
  saveLog();

});

bastmaintainBtn.addEventListener('click', () => {

  bastLevelDropDown.hidden = true;
  bastfacilDropDown.hidden = true;
  bastorderDropDown.hidden = true;

  // Roll on maintain table (d12)
  const roll = Math.floor(Math.random() * 12);
  const maintainResult = bastionRules.maintainTable[roll];

  // Add the new facility to the bastion log events element
  const bastionLogEvent = document.createElement('li');
  const date = new Date().toLocaleString();
  bastionLogEvent.textContent = `[${date}] Maintain Order Issued - Roll (${roll + 1}): ${maintainResult}`;
  
  // Create a remove button
  const bastionRemoveBtn = document.createElement('button');
  bastionRemoveBtn.textContent = 'Remove';
  bastionRemoveBtn.addEventListener('click', () => {
    bastionLogEvent.remove();
  });
  
  bastionLogEvent.appendChild(bastionRemoveBtn);
  bastionLogEvents.appendChild(bastionLogEvent);
  
  saveLog();

  
});

window.onload = function() {
  actionDiv.hidden = true;
  loadLog();
};

// Save log to localStorage
function saveLog() {
  const logItems = Array.from(document.querySelectorAll('.bastion-log li'))
    .map(li => li.textContent.replace('Remove', '').trim());
  localStorage.setItem('bastionLog', JSON.stringify(logItems));
}

// Load log from localStorage
function loadLog() {
  const savedLog = localStorage.getItem('bastionLog');
  if (savedLog) {
    const logItems = JSON.parse(savedLog);
    logItems.forEach(text => {
      const bastionLogEvent = document.createElement('li');
      bastionLogEvent.textContent = text;
      
      const bastionRemoveBtn = document.createElement('button');
      bastionRemoveBtn.textContent = 'Remove';
      bastionRemoveBtn.addEventListener('click', () => {
        bastionLogEvent.remove();
        saveLog();
      });
      
      bastionLogEvent.appendChild(bastionRemoveBtn);
      bastionLogEvents.appendChild(bastionLogEvent);
    });
  }
}
