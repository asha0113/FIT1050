function choosePizza(){
    var x = document.getElementById('showSection');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    var arr = ["Beef and Cheese", "Cheese and Garlic", "Margherita", "Hawaiian", "Meatlovers", "Mexicana", "Middle Eastern Special", "Vegetarian", "Tandoori Chicken", "Barbeque Chicken", "Chicken Hawaiian", "Seafood Supreme"];
    let rand = Math.random() * 11;
    rand = Math.floor(rand); 

    if(rand < 0){
        rand = 0;
    }

    var str = arr[rand];

    document.getElementById("myText").innerHTML = str;
}