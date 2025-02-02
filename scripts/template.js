function getNoteTemplate(indexNote){
    return `<p><span> ${notesTitle[indexNote] + '<br><br></span><span>' + notes[indexNote] + '</span>'} 
    <button onclick="pushToArch(${indexNote})">A</button>
    <button onclick="pushToBin(${indexNote}, notes, notesTitle)">X</button>
    </p>`;
}

function getArcNoteTemplate(indexArcNote){
    return `<p><span> ${archivTitle[indexArcNote] + '<br><br></span><span>' + archiv[indexArcNote] + '</span>'} 
    <button onclick="pushBack(${indexArcNote},archiv, archivTitle)">N</button>
    <button onclick="pushToBin(${indexArcNote},archiv, archivTitle)">X</button>
    </p>`;
}

function getTrashNoteTemplate(indexTrashNote){
    return `<p><span> ${trashNotesTitle[indexTrashNote] + '<br><br></span><span>' + trashNotes[indexTrashNote] + '</span>'} 
    <button onclick="pushBack(${indexTrashNote}, trashNotes, trashNotesTitle)">N</button>
    <button onclick="deleteNote(${indexTrashNote})">X</button>
    </p>`;
}