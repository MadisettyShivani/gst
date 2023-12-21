

function trip() {



  let beach1 = document.getElementById("beach1").value;
  // console.log(beach1);

  let waterfalls = document.getElementById("waterfalls").value;

  let oldgoa = document.getElementById("oldgoa").value;

  let temple = document.getElementById("temple").value;

  let fork = document.getElementById("fork").value;

  let one = document.getElementById("one").value;

  let two = document.getElementById("two").value;

  let three = document.getElementById("three").value;

  let four = document.getElementById("four").value;

  let gst = document.getElementById("gst").value;

  let button = document.getElementById("trip-button");

  
 let total = [parseInt(beach1), parseInt(waterfalls), parseInt(oldgoa), parseInt(temple), parseInt(fork),parseInt(gst)];

  let sum = 0;
  for (let i = 0; i < total.length; i++) {
    sum += total[i];
  }
  console.log(sum);


  let totalbill = sum *(gst/100) ;
  console.log(totalbill);

if(!isNaN(sum)){
  document.getElementById("shiva")
  .innerHTML = `Name : ${one} </br>
                     E-mail : ${two}</br>
                     password : ${three} </br>
                     phonenumber : ${four}</br>
                     Total : ${sum}</br>
                     Total bill with GST : ${totalbill+sum}`;
}


  
}

trip();

let navLists = document.querySelector(".navbar-lists");
let boxes = document.querySelector(".boxes");

function navSlide(){

  navLists.classList.toggle("nav-active");
  boxes.classList.toggle("toggle");

 
}










