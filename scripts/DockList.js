import { getDocks } from "./database.js"

const docks = getDocks()

export const DockList = () => {
    let docksHTML = `<h1 class="title">Docks</h1><ul>`

    for (const dock of docks) {
        docksHTML += `<li class="list-item">${dock.location} can hold ${dock.volume} million tons of cargo.</li>`;
    }

    docksHTML += "</ul>"

    return docksHTML
} 