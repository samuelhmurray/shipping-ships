import { getCargoShips, getHaulers } from "./database.js"

const cargoShips = getCargoShips()
const haulers = getHaulers()

export const CargoShipList = () => {
    let cargoShipHTML = `<h1 class="title">Cargo Ships</h1><ul>`

    for (const cargoShip of cargoShips) {
        cargoShipHTML += `<li class="list-item"
                              data-type="cargoShip"
                              data-id="${cargoShip.id}"
                              data-haulerId="${cargoShip.haulerId}"
                              >${cargoShip.name}
                              </li>`;
    }

    cargoShipHTML += "</ul>"

    return cargoShipHTML
}


//not working 

// document.addEventListener(
//     "click", 
//     (theClickEvent) => {
//         const whatWasClickedOn = theClickEvent.target;
//         const haulerId = whatWasClickedOn.dataset.haulerId
//         console.log("Clicked Hauler ID:", haulerId);

//         for (const hauler of haulers) {
//                 if(hauler.id === parseInt(haulerId)){
//                     console.log("Current Hauler ID:", hauler.id);
//                     window.alert(`This cargo ship was hauled by ${hauler.name}`)
//                 }
            
//         }

//     }
// )