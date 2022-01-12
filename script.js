const link = document.querySelector("#link")


function age() {
    let a = prompt("Quel age avez-vous?");

    if (!a) {
        document.url("index.html"); //action a faire si l'utilisateur ne rentre rien
    } else if (isNaN(a)) {
        alert("Ce n'est pas un nombre...");
        age();

    } else if (a == 0) {
        alert("Tu as 0 an? Tu te fous de moi?");
        age();
    } else if (a >= 18) {
        link.href = "buycrypto.html";
    } else {
        link.href = "https://www.tf1.fr/tf1/pawpatrol";
    }

}
link.addEventListener("click", () => {
    link.href = "index.html"
    age()

})