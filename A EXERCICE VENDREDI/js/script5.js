function Somme() {

    var position;
    var resultat = 0;
    for (position = 0; position < arguments.length; ++position) {
        resultat += arguments[position];
    }
    return resultat;
}

var a = 12;
var b = 25;
var c = 47;
var d = 18;
var e = 15;
var f = 12;
var g = 1999;

document.writeln('La somme est ' + Somme(a, b, c, d, e, f, g));