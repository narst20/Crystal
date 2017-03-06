/*Pusedo code
	1. Random number function
		a. Generate random number for user to guess
		b. Assign random number value to 4 icons
	2. Operation function
		a. Add clicks together
	3. Calculate score
	4. Reset random number generator to start game over
	*/


$(document).ready(function(){
//Good! Assign random number for player to guess
	// var randnumber=Math.floor((Math.random() * 100) +50);
	// console.log(randnumber);
	// $("#randNum").text(randnumber);

 


// //Assign random number for player to guess
var heartnum = Math.floor((Math.random() * 5) +1);
var clubnum = Math.floor((Math.random() * 15) + 11);
var diamondnum = Math.floor((Math.random() * 10) +6 );
var spadenum = Math.floor((Math.random() * 20) + 16);
var sumscore=0;

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

  
   
};

console.log(sumscore);

 //Calling randnum function 
  $(".suit").on("click", randnum);
	console.log(randnum);


//document.ready function end syntax
});
 

 
