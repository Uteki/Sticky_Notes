let notesTitle = [];
let notes = [];

let archivTitle = [];
let archiv = [];

let trashNotesTitle = [];
let trashNotes = [];

function init(){
    getFromLocalStorage();

    renderNotes();
    renderArchive()
    renderTrashNotes();
}

function renderNotes(){
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = '';

    for (let i = 0; i < notes.length; i++) {
        contentRef.innerHTML += getNoteTemplate(i);
    }

    saveToLocalStorage();
}

function renderArchive() {
    let arcContentRef = document.getElementById("archive");
    arcContentRef.innerHTML = '';

    for (let i = 0; i < archiv.length; i++) {
        arcContentRef.innerHTML += getArcNoteTemplate(i);
    }

    saveToLocalStorage();
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById("trash_content");
    trashContentRef.innerHTML = '';

    for (let i = 0; i < trashNotes.length; i++) {
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

    notes.push(inputRefs().noteInput);
    notesTitle.push(inputRefs().noteTitleInput);
    renderNotes();

    inputRefs().noteInputRef.value = "";
    inputRefs().noteTitleInputRef.value = "";
}

function pushBack(indexNote, description, title){
    let becomeNote = description.splice(indexNote, 1);
    let becomeNoteTitle = title.splice(indexNote, 1);

    notesTitle.push(becomeNoteTitle[0]);
    notes.push(becomeNote[0]);

    renderNotes();
    renderArchive();
    renderTrashNotes();
}

function pushToBin(indexBinNote, description, title) {
    let becomeTrash = description.splice(indexBinNote, 1);
    let becomeTrashTitle = title.splice(indexBinNote, 1);

    trashNotesTitle.push(becomeTrashTitle[0]);
    trashNotes.push(becomeTrash[0]);

    renderNotes();
    renderArchive();
    renderTrashNotes();
}

function pushToArch(indexArcNote) {
    let becomeArc = notes.splice(indexArcNote, 1);
    let becomeArcTitle = notesTitle.splice(indexArcNote, 1);

    archivTitle.push(becomeArcTitle[0]);
    archiv.push(becomeArc[0]);

    renderNotes();
    renderArchive();
    renderTrashNotes();
}

function deleteNote(indexXNote) {
    trashNotes.splice(indexXNote, 1);
    trashNotesTitle.splice(indexXNote, 1);

    renderTrashNotes();
}

function saveToLocalStorage(){
    localStorage.setItem('notesTitle', JSON.stringify(notesTitle));
    localStorage.setItem('notes', JSON.stringify(notes));

    localStorage.setItem('archivTitle', JSON.stringify(archivTitle));
    localStorage.setItem('archiv', JSON.stringify(archiv));

    localStorage.setItem('trashNotesTitle', JSON.stringify(trashNotesTitle));
    localStorage.setItem('trashNotes', JSON.stringify(trashNotes));
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
        notesTitle = notePair1;
        notes = notePair2;
    }

    if (arcPair1 != null && arcPair2 != null) {
        archivTitle = arcPair1;
        archiv = arcPair2;
    }

    if (trashPair1 != null && trashPair2 != null) {
        trashNotesTitle = trashPair1;
        trashNotes = trashPair2;
    }
}