function encode() {
    var txt = document.getElementById("cleartext").value;
    var shift = parseInt(document.getElementById("shift").value);
    if (isNaN(shift)) {
        document.getElementById("output").innerHTML = "Please enter a number into the shift value";
    } else {
        if (document.getElementById("encode").value == "encode") {
            document.getElementById("output").innerHTML = caesar(txt, shift);
        } else {
            document.getElementById("output").innerHTML = caesar(txt, 26-shift);
        }
    }
}

function caesar(decoded, shift) {
    var encoded = [];
    var temp;

    for (i = 0; i < decoded.length; i++) {
        temp = decoded.charCodeAt(i);
        if (temp > 64 && temp < 91) {
            temp = (temp - 65 + shift)%26 + 65;
        } else if (temp > 96 && temp < 123) {
            temp = (temp - 97 + shift)%26 + 97;
        }
        encoded.push(String.fromCharCode(temp));
    }
    return encoded.join("");
}