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

    renderNotes('content', 'notes', getNoteTemplate);
    renderNotes('archive', 'archiv', getArcNoteTemplate);
    renderNotes('trash_content', 'trashNotes', getTrashNoteTemplate);
}

function renderNotes(id , key, template){
    let contentRef = document.getElementById(id);
    contentRef.innerHTML = '';

    for (let i = 0; i < allNotes[key].length; i++) {
        contentRef.innerHTML += template(i);
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

    renderNotes('content', 'notes', getNoteTemplate);

    inputRefs().noteInputRef.value = "";
    inputRefs().noteTitleInputRef.value = "";
}

function pushBack(indexNote, description, title, key){
    let becomeNote = description.splice(indexNote, 1);
    let becomeNoteTitle = title.splice(indexNote, 1);

    allNotes[key + "Title"].push(becomeNoteTitle[0]);
    allNotes[key].push(becomeNote[0]);

    renderNotes('content', 'notes', getNoteTemplate);
    renderNotes('archive', 'archiv', getArcNoteTemplate);
    renderNotes('trash_content', 'trashNotes', getTrashNoteTemplate);
}

function deleteNote(indexXNote) {
    allNotes.trashNotes.splice(indexXNote, 1);
    allNotes.trashNotesTitle.splice(indexXNote, 1);

    renderNotes('trash_content', 'trashNotes', getTrashNoteTemplate);
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