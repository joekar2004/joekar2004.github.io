function encode() {
    var txt = document.getElementById("cleartext").value;
    var shift2 = document.getElementById("shift").value;
    var shift = new Array(shift2.length) 
    for (var i = 0; i < shift.length; i++) {
        shift[i] = shift2[i];
    }
    console.log(shift);
    if (document.getElementById("decision").selectedIndex == 0) {
        document.getElementById("output").innerHTML = vigDcode(txt, shift);
    } else {
        document.getElementById("output").innerHTML = vigEcode(txt, shift);
    }
}

function vigDcode(decoded, shift) {
    
}

function vigEcode(encoded, shift) {

}