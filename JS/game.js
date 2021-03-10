
// Select player
var selectedChar = false;
function selectChar(char) {

    switch (char) { 
        case 'char1':
            document.getElementById('player-selected').innerHTML = 'Rhino';
            selectedChar = "char1";
            break;
        case 'char2':
            document.getElementById('player-selected').innerHTML = 'Lumiere';
            selectedChar = "char2";
            break;
        case 'char3':
            document.getElementById('player-selected').innerHTML = 'Pinky';
            selectedChar = "char3";
            break;
        case 'char4':
            document.getElementById('player-selected').innerHTML = 'Charl';
            selectedChar = "char4";
            break;
        case 'char5':
            document.getElementById('player-selected').innerHTML = 'Toad';
            selectedChar = "char5";
            break;
    }
    return selectedChar;
}

function easyGame() {
    if (selectedChar === false) {
        alert('Please Select Character');
    } else {
        window.location.href = 'index.html';
        // Store it in the local storage
        localStorage.setItem('level', 'easy');
        localStorage.setItem('selectedChar', selectedChar);
    }
}

function medGame() {
    if (selectedChar === false) {
        alert('Please Select Character');
    } else {
        window.location.href = 'index.html';
        // Store it in the local storage
        localStorage.setItem('level', 'medium');
        localStorage.setItem('selectedChar', selectedChar);
    }
}

function hardGame() {
    if (selectedChar === false) {
        alert('Please Select Character');
    } else {
        window.location.href = 'index.html';
        // Store it in the local storage
        localStorage.setItem('level', 'hard');
        localStorage.setItem('selectedChar', selectedChar);
    }
}



