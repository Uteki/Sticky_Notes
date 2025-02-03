function getNoteTemplate(indexNote){
    return `<p><span> ${allNotes.notesTitle[indexNote] + '<br><br></span><span>' + allNotes.notes[indexNote] + '</span>'} 
    <button onclick="pushToArch(${indexNote})">A</button>
    <button onclick="pushToBin(${indexNote}, allNotes.notes, allNotes.notesTitle)">X</button>
    </p>`;
}

function getArcNoteTemplate(indexArcNote){
    return `<p><span> ${allNotes.archivTitle[indexArcNote] + '<br><br></span><span>' + allNotes.archiv[indexArcNote] + '</span>'} 
    <button onclick="pushBack(${indexArcNote},allNotes.archiv, allNotes.archivTitle)">N</button>
    <button onclick="pushToBin(${indexArcNote},allNotes.archiv, allNotes.archivTitle)">X</button>
    </p>`;
}

function getTrashNoteTemplate(indexTrashNote){
    return `<p><span> ${allNotes.trashNotesTitle[indexTrashNote] + '<br><br></span><span>' + allNotes.trashNotes[indexTrashNote] + '</span>'} 
    <button onclick="pushBack(${indexTrashNote}, allNotes.trashNotes, allNotes.trashNotesTitle)">N</button>
    <button onclick="deleteNote(${indexTrashNote})">X</button>
    </p>`;
}