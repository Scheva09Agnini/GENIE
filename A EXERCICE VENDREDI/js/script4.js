a = "1";
b = "2";
c = a + b;

document.writeln("Types et valeur des variables");
// afficher la valeur et le type de chaque variablee

document.writeln("");
document.writeln("le type de a est(" + typeof(a) + ") " + a);
document.writeln("le type de b est(" + typeof(b) + ") " + b);
document.writeln("le type de c est(" + typeof(c) + ") " + c);

// forcer le type de a et b à entier  et executer de nouveau a + b

// Number() ou parseInt
document.writeln("");
document.writeln("Conversion en entier................");
document.writeln("");
a = parseInt(a);
b = parseInt(b);
c = a + b;

document.writeln("Types et valeur des variables");
document.writeln("");
document.writeln("le type de a est(" + typeof(a) + ") " + a);
document.writeln("le type de b est(" + typeof(b) + ") " + b);
document.writeln("le type de c est(" + typeof(c) + ") " + c);