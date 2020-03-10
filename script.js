var wrapperEle = document.body.querySelector(".wrapper");
var addnotesEle = document.body.querySelector(".addnotes");
var arrayEle = document.body.querySelector(".array")
var textEle = document.body.querySelector(".text")
var importanceEle = document.body.querySelector(".importance")
function app() {
  nav();
  page1();
}
function nav() {
  document.body.querySelector(".page1").addEventListener("click", function() {
    page1();
  });
  
   document.body.querySelector(".addnotes").addEventListener("click", function() {
    addnotes();
  });
}
function page1() {
  arrayClear()
  arrayEle.innerHTML = "Page 1";
  writeBlocks(arrayEle);
}
function addnotes() {
  arrayClear()
  var addnotesWrapperEle = document.createElement("div");
  addnotesWrapperEle.innerHTML = "Page 2";
  writeBlocks(addnotesWrapperEle);
  arrayEle.appendChild(addnotesWrapperEle);
}

var array = [
  {
    text:"heckin good boys I am bekom fat aqua doggo. Dat tungg tho snoot length boy wow such tempt snoot dat tungg tho, noodle horse adorable doggo wow very biscit doggo. Thicc you are doing me a frighten mlem yapper floofs fat boi, I am bekom fat doing me a frighten much ruin diet pats long water shoob, sub woofer h*ck borkdrive mlem. Boofers such treat wow such tempt fluffer, boof. I am bekom fat shoob fluffer borking doggo thicc boof, pats wrinkler wow very biscit.",
    importance: 3
  },
  {
   text:"Rub against owner because nose is wet. Sit and stare loved it, hated it, loved it, hated it attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently purr when being pet the cat was chasing the mouse. While happily ignoring when being called lick butt and make a weird face yet stares at human while pushing stuff off a table fall asleep on the washing machine kitty scratches couch bad kitty. Cats woo please stop looking at your phone and pet me really likes hummus, for scream for no reason at 4 am so show belly, fish i must find my red catnip fishy fish or a nice warm laptop for me to sit on. I am the best all of a sudden cat goes crazy eat plants, meow, and throw up because i ate plants yet push your water glass on the floor. Stares at human while pushing stuff off a table let me in let me out let me in let me out let me in let me out who broke this door anyway for curl up and sleep on the freshly laundered towels but leave dead animals as gifts. Flex claws on the human's belly and purr like a lawnmower.",
    importance: 2
  },
  {
   text:"Lorem ipsum dolor sit amet, sea ne affert consul regione, ut liber eripuit quo. Augue ancillae nam ea, ius an invidunt democritum. Duis officiis mei eu, nisl ridens at sed, te duo omnis iuvaret. Eam deseruisse expetendis eu, has ex vocibus ullamcorper disputationi. Nonumy everti laboramus ne cum, ex nam reque porro.",
    importance: 5
  },
  {
   text:"I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. I am Groot. ",
    importance: 4
    
  },
  {
    text:"Bacon ipsum dolor amet shankle sausage cow chuck leberkas pancetta strip steak short loin ham brisket turkey jowl prosciutto. Hamburger pastrami pork chop, boudin pancetta kevin bresaola beef pig t-bone cow frankfurter tail. Shankle beef burgdoggen, tenderloin pork belly turkey swine kevin leberkas spare ribs bresaola ham hock corned beef pancetta meatloaf. Short ribs sausage pork belly cow. Filet mignon turducken cow spare ribs sausage pancetta salami landjaeger.",
    importance: 6
  },
  {
   text:"Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.",
    importance: 1
  }
];
    


for (var i = 0; i < array.length; i++) {
  var ele = document.createElement("div");
  ele.innerHTML = array[i].text+" ";
  
  if(array[i].importance="1"){
     ele.style.order= "6";
    
     }
   if(array[i].importance="2"){
     ele.style.order="5";
     }
  if(array[i].importance=="3"){
     ele.style.order="4";
     }
  if(array[i].importance="4"){
     ele.style.order="3";
     }
  if(array[i].importance=="5"){
     ele.style.order="2";
     }
  if(array[i].importance=="6"){
     ele.style.order="1";
     }
 
  wrapperEle.appendChild(ele);
}

function addnotes(){
  var para = document.createElement("P");               // Create a <p> element
para.innerText = "Add Notes Here"            // Insert text
document.body.appendChild(para)   ;
}


app();