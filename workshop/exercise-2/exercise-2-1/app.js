// Preset values
const FROGS = 3;
//

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

const ol = document.getElementById("track");

const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = "../assets/styles.css";
stylesheet.type = "text/css";
document.head.appendChild(stylesheet);
console.log(stylesheet);
/* 
the document element only exists on the browser
the document is the screen of the browser, the space that has the html tags you're looking for
now that when you do ol.innerText, you
anytime you do document.getElementBy... anything you get back will be an HTML tag
once you have targeted the HTML and put it in a variable, you can use the variable to target it
and assign new attributes to it that is valid for that kind of tag, for example
*/
console.log(frogStable);

for (let i = 0; i < FROGS; i++) {
  const li = document.createElement("li");
  li.id = `lane-${i + 1}`;
  const span = document.createElement("span");
  span.innerText = `${i + 1}`;
  ol.appendChild(li);
  li.appendChild(span);
}

let racers = [];

for (let i = 0; i < FROGS; i++) {
  // let number = make a random nmber, pass it on instead of i; just make sure this function returns a number between 0-4
  racers.push(frogStable[i]);
}
// after this, use math.random to select a number form 1 to 4, and pass that instead

racers.forEach((racer, index) => {
  const li = document.getElementById(`lane-${index + 1}`);
  const frogSpan = document.createElement("span");
  frogSpan.classList.add("frog");
  frogSpan.innerText = racer.number;
  frogSpan.style.backgroundColor = racer.color;
  li.appendChild(frogSpan);
  racer.progress = 0;
});

console.log(racers);

/*
the way we're going to make the frog jump is by changing left of the frog, which is curren
tly at the leftmost of the track; every time we change the frog, it'll go a bit further
we'll write a function that randomly creates a new number, and that's the value 
i'll give it to frog, so frog.style.left = new random number
in order to know where to hop, you need to know where you are right now
let's say if you don't have progress and your number is chosen randomly = 0-10, and you assign
frog distance to that, and then frogstyle.left = interval, and then store that in progress
so set interval will run function that makes it hop, and inside that function is where you
update your racer.progress, so that the next hop, you work on your last place and move from 
there
you store the hop in progress, and in the next hop you do progress + next hop
*/

// in js objects are dynamic, you can add properties to objects at any time
// in stricter programming languages you'd have to change the class to change the obj
// that's what we mean by js being a dynamic language

// 2. Create li

// 3. Create span and add it to the li

// 4. Assign an id to each lane

/*
the list items and span is just to show the track on the screen
the reason we need a loop is to set up three tracks
at the beginning of the loop, we also insert the track number
    each lane will have an indidivual frog, so we need each li to have a unique id, to target them
    in future we will use bracket notation to put stuff in there
    once we do document.getElementByID its going to usethe unique ids
*/
