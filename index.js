var my_card = `
<div class="card col-md-3 m-1">
<img src="data:image/jpeg;base64,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" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
`;
var card_array = [];
var card_product_array = [];
var product_name;
var product_description;
var product_img_url;

// Initialize localstorage at boot time
function createCardStorageObj() {
    var card = localStorage.getItem("cards");
    if (card) {
        console.log("Cards Obj Exsists");
    } else {
        localStorage.setItem("cards", []);
        console.log("Creating Card Obj");
    }
}

// Function to get data when app boot
function getCardsData() {
    let cards = JSON.parse(localStorage.getItem("cards"));
    card_product_array = cards;

    // Creating dynamic html content
    for (var i = 0; i < cards.length; i++) {
        card_array.push(`
        <div class="card col-md-5 m-1 id=${cards[i].id} ">
        <img src=${cards[i].product_img_url} alt="..." style="object-fit: contain;">
        <div class="card-body">
          <h5 class="card-title">${cards[i].product_name}</h5>
          <p class="card-text">${cards[i].product_description}.</p>
          <p class="card-text">$${cards[i].product_price}</p>
          <p><small>Product ID: ${cards[i].id}</small></p>
          <a href="#" class="btn btn-danger" onclick="deleteProduct(${i} ,${cards[i].id})">Delete this product</a>
        </div>
        </div>
        `);
    }
}

// Functin for removing spinner
function removeClass$Spinner() {
    var element = document.getElementById("pulse");
    element.classList.remove("pulse");
    element.innerHTML = ''
}

// Function for creating card objects
function createCardObj() {
    document.getElementById("my-cards").innerHTML = card_array.join("");
    card_array = []
    removeClass$Spinner();
}

// Function for clearing inputs
function cleanFormFields() {
    document.getElementById("productName").value = "";
    document.getElementById("productDescription").value = "";
    document.getElementById("productImageUrl").value = "";
    document.getElementById("productPrice").value = "";
}

// Function for saving user input data
function setCards(obj) {
    localStorage.setItem("cards", JSON.stringify(obj));
}

// Function for deleting all card objects
function deleteAllCard() {
    delete localStorage.cards;

    // Calling funcion here to update after deleting
    getCardsData()
    createCardObj()
}

// Function for deleting a single object
function deleteProduct(index, id) {
    let products = JSON.parse(localStorage.getItem("cards"));
    for (var i = 0; i < products.length; i++) {
        products[i].id == id ? products.splice(i, 1) : '';
        setCards(products);
    }
    // Calling funcion here to update after deleting
    getCardsData()
    createCardObj()
}

// Fucntion that gets user inputs 
function getProductValues(e) {
    e.preventDefault();
    card_product_array.push({
        id: Date.now(),
        product_name: document.getElementById("productName").value,
        product_description: document.getElementById("productDescription").value,
        product_img_url: document.getElementById("productImageUrl").value,
        product_price: document.getElementById("productPrice").value,

    });

    //Function that saves object to localstorage 
    setCards(card_product_array);

    // Calling funcion here to update after saving objects
    getCardsData()
    createCardObj()

    // CLeaning form fields
    cleanFormFields();
}

// Calling funtion when initializing app
createCardStorageObj();
getCardsData()
createCardObj()