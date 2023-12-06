import { DockList } from "./DockList.js";
import { HaulerList } from "./HaulerList.js";
import { CargoShipList } from "./CargoShipList.js";

const docksContainer = document.querySelector(".docks");
docksContainer.innerHTML = DockList()

const haulersContainer = document.querySelector(".hauler-ships")
haulersContainer.innerHTML = HaulerList() 

const cargoShipsContainer = document.querySelector(".cargo-ships")
cargoShipsContainer.innerHTML = CargoShipList() 