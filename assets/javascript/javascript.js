/*Pusedo code
	1. Create global variables for everything
      a. for random numbers and sumscore do not assign a value
      b. Assign values that will wins and losses
	2. Create function to create random numbers.
      a. Use this to evaluate wins and losses
      b. Use this to click new game button
  4. Create function to add card suit values to player score if player clicks on specific suit
      a. use suit id assignment 
      b. this is a parent function
	5. Create function to calculate wins and losses if player gets exact score or goes over
      a. this is a child function
  6. Create on click event for card suit to run both functions
      a. use class assignment
  7. Create on click event for New Game button to start over
	*/


$(document).ready(function(){
  var heartnum;
  var clubnum;
  var diamondnum;
  var spadenum;
  var randnumber;
  var sumscore;
  var win=0;
  var lose=0;

//Reset function when person wins or loses
function newgame(){
  randnumber=Math.floor((Math.random() * 100) +50);
  heartnum = Math.floor((Math.random() * 5) +1);
  clubnum = Math.floor((Math.random() * 15) + 11);
  diamondnum = Math.floor((Math.random() * 10) +6 );
  spadenum = Math.floor((Math.random() * 20) + 16);
  sumscore=0;
  //Assign random number for player to guess
  
  console.log(randnumber);
  $("#randNum").text(randnumber);
 
// //Assign random number for player to guess
};

function randnum() {
  console.log(heartnum);
  console.log(clubnum);
  console.log(diamondnum);
  console.log(spadenum);
  console.log(sumscore);

  console.log(this);
  console.log(this.id);

//If-elseif statements to add numbers together.
  if  (this.id==="heartpic") {
      sumscore=sumscore+heartnum;
      $("#yourtotal").html(sumscore);

  }
  else if (this.id==="clubpic") {
      sumscore=sumscore+clubnum;
      $("#yourtotal").html(sumscore);

  }

  else if (this.id==="diamondpic") {
      sumscore=sumscore+diamondnum;
      $("#yourtotal").html(sumscore);

  }
  else if (this.id==="spadepic") {
      sumscore=sumscore+spadenum;
      $("#yourtotal").html(sumscore);

  }
  //Function to see if win or lose
  function winorlose() {
    console.log(randnumber);
    console.log(sumscore);
    console.log(win);
    console.log(lose);
  if (sumscore===randnumber) {
    win++;
    console.log(win);
    $("#yourwins").html(win);
    $("#yourlosses").html(lose);
    newgame();
    
  }
  if (sumscore>randnumber) {
    lose++;
    console.log(lose);
     $("#yourwins").html(win);
    $("#yourlosses").html(lose);
    newgame();    
  }

  };

  winorlose();
   
};

console.log(sumscore);

 //Calling randnum function 
  $(".suit").on("click", randnum);
	console.log(randnum);
  $("#startover").on("click", newgame);

newgame();
//document.ready function end syntax
});
 

 
