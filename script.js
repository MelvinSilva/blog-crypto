const link = document.getElementById("link")


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



const createNewCard = (image, description) => {
    const newArticle = document.createElement("div")
    newArticle.classList.add("article")



    const imgArticle = document.createElement("img")
    imgArticle.classList.add("image1")
    imgArticle.src = image
    newArticle.appendChild(imgArticle)

    const descriptionArticle = document.createElement("p")
    descriptionArticle.classList.add("text1")
    descriptionArticle.innerHTML = description
    newArticle.appendChild(descriptionArticle)



    return newArticle

}

const handleSubmit = (event) => {
    event.preventDefault()

    const formImg = document.querySelector("#image").value
    const formDescription = document.querySelector("#text").value
    const projectNewArticle = createNewCard(formImg, formDescription)
    document.querySelector(".left-article").appendChild(projectNewArticle)

    document.querySelector("#text").value = ""
    document.querySelector("#image").value = ""

}