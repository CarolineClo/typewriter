let text = document.getElementById("typewriter").innerHTML;
let counter = 1;
let sentance;
const type1 = document.getElementById("typekey1");
const type2 = document.getElementById("typekey2");
const typeSpace = document.getElementById("typespace");
const typeLast = document.getElementById("typelast");

type();

function type() {
  let sentance = text.substring(0, counter);
  document.getElementById("typewriter").innerHTML = sentance;
  if (counter < text.length) {
    setTimeout(() => {
      type();
    }, Math.random() * 300 + 100);
    if (text.charAt(counter - 1) == " ") {
      typeSpace.play();
    } else {
      let sound = [type1, type2][Math.floor(Math.random() * 2)];
      sound.play();
      console.log(sound);
    }
  } else {
    typeLast.play();
  }
  counter += 1;
}

//if counter is positive number paly type1
//if counter is negative number play type2
//if char is " " type three f text[counter]==" "
