function getNoteTemplate(indexNote){
    return `<p><span> ${allNotes.notesTitle[indexNote] + '<br><br></span><span>' + allNotes.notes[indexNote] + '</span>'} 
    <button onclick="pushBack(${indexNote}, allNotes.notes, allNotes.notesTitle, 'archiv')">A</button>
    <button onclick="pushBack(${indexNote}, allNotes.notes, allNotes.notesTitle, 'trashNotes')">X</button>
    </p>`;
}

function getArcNoteTemplate(indexArcNote){
    return `<p><span> ${allNotes.archivTitle[indexArcNote] + '<br><br></span><span>' + allNotes.archiv[indexArcNote] + '</span>'} 
    <button onclick="pushBack(${indexArcNote},allNotes.archiv, allNotes.archivTitle, 'notes')">N</button>
    <button onclick="pushBack(${indexArcNote},allNotes.archiv, allNotes.archivTitle, 'trashNotes')">X</button>
    </p>`;
}

function getTrashNoteTemplate(indexTrashNote){
    return `<p><span> ${allNotes.trashNotesTitle[indexTrashNote] + '<br><br></span><span>' + allNotes.trashNotes[indexTrashNote] + '</span>'} 
    <button onclick="pushBack(${indexTrashNote}, allNotes.trashNotes, allNotes.trashNotesTitle, 'notes')">N</button>
    <button onclick="deleteNote(${indexTrashNote})">X</button>
    </p>`;
}