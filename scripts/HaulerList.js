import { getCargoShips, getHaulers } from "./database.js";

const haulers = getHaulers();
const cargoShips = getCargoShips();

export const HaulerList = () => {
  let haulerHTML = `<h1 class="title">Hauler Ships</h1><ul>`;

  for (const hauler of haulers) {
    haulerHTML += `<li class="list-item" 
                           data-type="hauler" 
                           data-haulerId="${hauler.id}"
                           >${hauler.name}
                           </li>`;
  }

  haulerHTML += "</ul>";

  return haulerHTML;
};


document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if(itemClicked.dataset.type==="hauler"){
    const haulerIdClick = itemClicked.dataset.haulerid;
  
    let index=0
  for (const cargoShip of cargoShips) {
    if (cargoShip.haulerId === (+haulerIdClick)) {
        index++
    }
  }
  window.alert(`This hauler is carrying ${index} cargo ships`);
  }
});