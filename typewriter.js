"use strict";

//remove h1 content
//turn h1 into a string
//split
//append()
//if character = less than total chars showOneCharacter()
//else stop

let text = document.getElementById("typewriter").innerHTML;
let counter = 1;
let sentance;
const type1 = document.getElementById("typekey1");
const type2 = document.getElementById("typekey2");
const type3 = document.getElementById("typespace");
const typeLast = document.getElementById("typelast");
let sound = [type1, type2, type3][Math.floor(Math.random() * 3)];

type();

function type() {
  let sentance = text.substring(0, counter);
  document.getElementById("typewriter").innerHTML = sentance;
  if (counter < text.length) {
    counter += 1;
    setTimeout(() => {
      type();
    }, 400);
    if (counter % 2 == 0) {
      type1.play();
      console.log("1");
    }
    if (text.charAt(counter) == " ") {
      type3.play();
    } else {
      type2.play();
      console.log(2);
    }
  } else {
    stop;
    typeLast.play();
    console.log("stop");
  }
}

//if counter is positive number paly type1
//if counter is negative number play type2
//if char is " " type three f text[counter]==" "
