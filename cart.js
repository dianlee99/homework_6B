//count items in cart
var count = 0;
  function addtocart() {
        count += 1;
        document.getElementById("count").innerHTML = count;
    };



//select glaze
function glaze1() {
  document.getElementById("none").style.color = "white";
  document.getElementById("none").style.backgroundColor = "orange";
  document.getElementById("sugarmilk").style.color = "black";
  document.getElementById("sugarmilk").style.backgroundColor = "transparent";
  document.getElementById("vanillamilk").style.color = "black";
  document.getElementById("vanillamilk").style.backgroundColor = "transparent";
  document.getElementById("doublechoco").style.color = "black";
  document.getElementById("doublechoco").style.backgroundColor = "transparent";
}

function glaze2() {
  document.getElementById("sugarmilk").style.color = "white";
  document.getElementById("sugarmilk").style.backgroundColor = "orange";
  document.getElementById("none").style.color = "black";
  document.getElementById("none").style.backgroundColor = "transparent";
  document.getElementById("vanillamilk").style.color = "black";
  document.getElementById("vanillamilk").style.backgroundColor = "transparent";
  document.getElementById("doublechoco").style.color = "black";
  document.getElementById("doublechoco").style.backgroundColor = "transparent";
}

function glaze3() {
  document.getElementById("vanillamilk").style.color = "white";
  document.getElementById("vanillamilk").style.backgroundColor = "orange";
  document.getElementById("sugarmilk").style.color = "black";
  document.getElementById("sugarmilk").style.backgroundColor = "transparent";
  document.getElementById("none").style.color = "black";
  document.getElementById("none").style.backgroundColor = "transparent";
  document.getElementById("doublechoco").style.color = "black";
  document.getElementById("doublechoco").style.backgroundColor = "transparent";
}

function glaze4() {
  document.getElementById("doublechoco").style.color = "white";
  document.getElementById("doublechoco").style.backgroundColor = "orange";
  document.getElementById("sugarmilk").style.color = "black";
  document.getElementById("sugarmilk").style.backgroundColor = "transparent";
  document.getElementById("vanillamilk").style.color = "black";
  document.getElementById("vanillamilk").style.backgroundColor = "transparent";
  document.getElementById("none").style.color = "black";
  document.getElementById("none").style.backgroundColor = "transparent";
}

//calculate total price
function calculateAmount(val) {
  var tot_price = val * 4;
  /*display the result*/
  var divobj = document.getElementById('tot_amount');
  divobj.value = tot_price;
}

//remove item from shopping cart
function removeItem(){
    var elem = document.getElementById("item");
    elem.remove();
}

