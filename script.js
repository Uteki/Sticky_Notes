let allNotes = {
    'notesTitle': [],
    'notes': [],
    'archivTitle': [],
    'archiv': [],
    'trashNotesTitle': [],
    'trashNotes': []
};

function init(){
    getFromLocalStorage();

    renderNotes();
    renderArchive()
    renderTrashNotes();
}

function renderNotes(){
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = '';

    for (let i = 0; i < allNotes.notes.length; i++) {
        contentRef.innerHTML += getNoteTemplate(i);
    }

    saveToLocalStorage();
}

function renderArchive() {
    let arcContentRef = document.getElementById("archive");
    arcContentRef.innerHTML = '';

    for (let i = 0; i < allNotes.archiv.length; i++) {
        arcContentRef.innerHTML += getArcNoteTemplate(i);
    }

    saveToLocalStorage();
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById("trash_content");
    trashContentRef.innerHTML = '';

    for (let i = 0; i < allNotes.trashNotes.length; i++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(i);
    }

    saveToLocalStorage();
}

function inputRefs() {
    let noteInputRef = document.getElementById("note_input");
    let noteInput = noteInputRef.value;

    let noteTitleInputRef = document.getElementById("noteTitle_input");
    let noteTitleInput = noteTitleInputRef.value;

    return {noteInputRef, noteInput, noteTitleInputRef, noteTitleInput};
}

function warning() {
    let test = false;
    if (inputRefs().noteInput === "" || inputRefs().noteTitleInput === "") {
        document.getElementById("note_output").setAttribute("style", "display:block");
        setTimeout(() => {
            document.getElementById("note_output").setAttribute("style", "display:");
        }, 1000);
        test = true;
    }
    return test;
}

function addNote() {
    warning();

    if (warning() === true) {return}

    allNotes.notes.push(inputRefs().noteInput);
    allNotes.notesTitle.push(inputRefs().noteTitleInput);
    renderNotes();

    inputRefs().noteInputRef.value = "";
    inputRefs().noteTitleInputRef.value = "";
}

function pushBack(indexNote, description, title){
    let becomeNote = description.splice(indexNote, 1);
    let becomeNoteTitle = title.splice(indexNote, 1);

    allNotes.notesTitle.push(becomeNoteTitle[0]);
    allNotes.notes.push(becomeNote[0]);

    renderNotes();
    renderArchive();
    renderTrashNotes();
}

function pushToBin(indexBinNote, description, title) {
    let becomeTrash = description.splice(indexBinNote, 1);
    let becomeTrashTitle = title.splice(indexBinNote, 1);

    allNotes.trashNotesTitle.push(becomeTrashTitle[0]);
    allNotes.trashNotes.push(becomeTrash[0]);

    renderNotes();
    renderArchive();
    renderTrashNotes();
}

function pushToArch(indexArcNote) {
    let becomeArc = allNotes.notes.splice(indexArcNote, 1);
    let becomeArcTitle = allNotes.notesTitle.splice(indexArcNote, 1);

    allNotes.archivTitle.push(becomeArcTitle[0]);
    allNotes.archiv.push(becomeArc[0]);

    renderNotes();
    renderArchive();
    renderTrashNotes();
}

function deleteNote(indexXNote) {
    allNotes.trashNotes.splice(indexXNote, 1);
    allNotes.trashNotesTitle.splice(indexXNote, 1);

    renderTrashNotes();
}

function saveToLocalStorage(){
    localStorage.setItem('notesTitle', JSON.stringify(allNotes.notesTitle));
    localStorage.setItem('notes', JSON.stringify(allNotes.notes));

    localStorage.setItem('archivTitle', JSON.stringify(allNotes.archivTitle));
    localStorage.setItem('archiv', JSON.stringify(allNotes.archiv));

    localStorage.setItem('trashNotesTitle', JSON.stringify(allNotes.trashNotesTitle));
    localStorage.setItem('trashNotes', JSON.stringify(allNotes.trashNotes));
}


function getFromLocalStorage() {
    let notesT = JSON.parse(localStorage.getItem('notesTitle'));
    let notes = JSON.parse(localStorage.getItem('notes'));
    let arcT = JSON.parse(localStorage.getItem('archivTitle'));
    let arc = JSON.parse(localStorage.getItem('archiv'));
    let trashT = JSON.parse(localStorage.getItem('trashNotesTitle'));
    let trash = JSON.parse(localStorage.getItem('trashNotes'));

    checkNull(notesT, notes, arcT, arc, trashT, trash);
}

function checkNull(notePair1, notePair2, arcPair1, arcPair2, trashPair1, trashPair2) {
    if (notePair1 != null && notePair2 != null) {
        allNotes.notesTitle = notePair1;
        allNotes.notes = notePair2;
    }

    if (arcPair1 != null && arcPair2 != null) {
        allNotes.archivTitle = arcPair1;
        allNotes.archiv = arcPair2;
    }

    if (trashPair1 != null && trashPair2 != null) {
        allNotes.trashNotesTitle = trashPair1;
        allNotes.trashNotes = trashPair2;
    }
}