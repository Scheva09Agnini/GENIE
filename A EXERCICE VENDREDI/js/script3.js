function validation() {

    if (document.getElementById('myField').value == '') {
        document.getElementById('myFieldError').innerHTML = "Le champ ne peut etre vide";
        return false;
    } else {
        document.getElementById('myFieldError').innerHTML = "";
        alert('Le formulaire a été envoyé')
        return true;
    }
}