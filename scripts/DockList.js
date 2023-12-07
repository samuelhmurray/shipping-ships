import { getDocks, getHaulers } from "./database.js";

const docks = getDocks();
const haulers = getHaulers();

export const DockList = () => {
  let docksHTML = `<h1 class="title">Docks</h1><ul>`;

  for (const dock of docks) {
    docksHTML += `<li class="list-item"
                        data-type="dock"
                        data-id=${dock.id}
                        data-location=${dock.location}>
                        ${dock.location} can hold ${dock.volume} million tons of cargo.</li>`;
  }

  docksHTML += "</ul>";

  return docksHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "dock") {
    // const dockIdClick = itemClicked.dataset.id;
    // const dockName = itemClicked.dataset.location;


    const dockObj = docks.find(dock=>dock.id=== +itemClicked.dataset.id)


    debugger

    let haulingShips = [];
    let found = false;
    for (const hauler of haulers) {
      if (hauler.dockId === dockObj.id) {
        haulingShips.push(hauler.name);
        // haulingShips.push(" ");
        found = true;
      }
    }
    if (!found) {
      haulingShips.push("nothing");
    }

    let haulingShipsAsString = haulingShips.join(', ')
    window.alert(`The ${dockObj.location} dock is currently unloading ${haulingShipsAsString}`);
  }
});
//need to add a " " in between the locations
//need to fix the dock name to include the full string
