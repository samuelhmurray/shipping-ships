import { getCargoShips, getHaulers } from "./database.js";

const cargoShips = getCargoShips();
const haulers = getHaulers();

export const CargoShipList = () => {
  let cargoShipHTML = `<h1 class="title">Cargo Ships</h1><ul>`;

  for (const cargoShip of cargoShips) {
    cargoShipHTML += `<li class="list-item"
                              data-type="cargoShip"
                              data-name=${cargoShip.name}
                              data-id="${cargoShip.id}"
                              data-haulerId="${cargoShip.haulerId}"
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
    const cargoShipHaulerId = itemClicked.dataset.haulerid

    let haulingShip = { name: "Incorrect" }
    for (const hauler of haulers) {
      if (hauler.id === +cargoShipHaulerId) {
        haulingShip.name = hauler.name;
      }
    }
    window.alert(`${cargoShipName} is being hauled by ${haulingShip.name}`);
  }
});