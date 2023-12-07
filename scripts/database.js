const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Galactic Giggler", dockId: 3 },
        { id: 2, name: "Quasar Quencher", dockId: 2 },
        { id: 3, name: "Nebula Napper", dockId: 1 },
        { id: 4, name: "Cosmic Cruncher", dockId: 1 },
        { id: 5, name: "Stellar Snuggler", dockId: 1 } 
    ],
    cargoShips: [
        { id: 1, name: "Orbiting Snuggler", haulerId: 2 },
        { id: 2, name: "Celestial Laugher", haulerId: 2 },
        { id: 3, name: "Galactic Quencher", haulerId: 3 },
        { id: 4, name: "Stellar Chuckler", haulerId: 1 },
        { id: 5, name: "Nebula Tickler", haulerId: 5 },
        { id: 6, name: "Interstellar Cruncher", haulerId: 3 },
        { id: 7, name: "Lunar Amuser", haulerId: 2 },
        { id: 8, name: "Cosmic Sipper", haulerId: 5 },
        { id: 9, name: "Astro Giggler", haulerId: 2 },
        { id: 10, name: "Solar Napper", haulerId: 4 },
        { id: 11, name: "Milky Way Quencher", haulerId: 1 },
        { id: 12, name: "Supernova Chuckler", haulerId: 3 },
        { id: 13, name: "Deep Space Cruncher", haulerId: 5 },
        { id: 14, name: "Comet Snuggler", haulerId: 2 },
        { id: 15, name: "Galaxy Laugher", haulerId: 4 },
        { id: 16, name: "Nebula Sipper", haulerId: 1 },
        { id: 17, name: "Stellar Amuser", haulerId: 3 },
        { id: 18, name: "Orbiting Giggler", haulerId: 5 },
        { id: 19, name: "Cosmic Napper", haulerId: 2 },
        { id: 20, name: "Interstellar Quencher", haulerId: 4 },
    ]
}

export const getDocks = () => structuredClone(database.docks);
export const  getHaulers = () => structuredClone(database.haulers);
export const getCargoShips = () => structuredClone(database.cargoShips);