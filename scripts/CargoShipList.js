import { getCargoShips, getHaulers } from "./database.js";

const cargoShips = getCargoShips();
const haulers = getHaulers();


const sortCargoShips = (a, b) =>{
  let x = a.name.toLowerCase();
  let y = b.name.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
};


cargoShips.sort(sortCargoShips)
//cargoShips.sort((a, b) => a.name - b.name);

export const CargoShipList = () => {
  
  let cargoShipHTML = `<h1 class="title">Cargo Ships</h1><ul>`;
  for (const cargoShip of cargoShips) {
    cargoShipHTML += `<li class="list-item"
                              data-type="cargoShip"
                              data-name=${cargoShip.name}
                              data-id="${cargoShip.id}"
                              data-hauler-id="${cargoShip.haulerId}"
                              >${cargoShip.name}
                              </li>`;
  }

  cargoShipHTML += "</ul>";

  return cargoShipHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "cargoShip") {
    const cargoShipName = itemClicked.outerText;
    const cargoShipHaulerId = itemClicked.dataset.haulerId

    let haulingShip = { name: "Incorrect" }
    for (const hauler of haulers) {
      if (hauler.id === +cargoShipHaulerId) {
        haulingShip.name = hauler.name;
      }
    }
    window.alert(`${cargoShipName} is being hauled by ${haulingShip.name}`);
  }
});