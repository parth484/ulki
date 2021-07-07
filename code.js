
moveForward(25);

setScreen("logo");

onEvent("logo", "load", function( ) {
	console.log(" Evisi clicked");
});
setTimeout(function() {
  setScreen("home");
},4000);

// Buttons

onEvent("bu1", "click", function( ) {
playSound("assets/category_app/snap.mp3", false); 
setScreen("about");
});
onEvent("b1", "click", function( ) {
 playSound("assets/category_app/snap.mp3", false); 
  setScreen("Evisi");
});
onEvent("nextc1", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
  setScreen("Altrozev");
});
onEvent("nextc2", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
  setScreen("nexonev");
});
onEvent("nextc3", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
  setScreen("sierra");
});
onEvent("nextc4", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
  setScreen("ipace");
});
onEvent("nextc5", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
  setScreen("kona");
});
onEvent("nextc6", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
  setScreen("home");
});
onEvent("prec1", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
  setScreen("Evisi");
});
onEvent("prec2", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
  setScreen("Altrozev");
});
onEvent("prec3", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
  setScreen("nexonev");
});
onEvent("prec4", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
  setScreen("sierra");
});
onEvent("prec5", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
  setScreen("ipace");
});
onEvent("bac1", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
  setScreen("home");
});
onEvent("bac2", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
  setScreen("home");
});
onEvent("b2", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
  setScreen("evultra");
});
onEvent("backh", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
  setScreen("home");
});
onEvent("nextb1", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
  setScreen("bus");
});
onEvent("pre1", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
  setScreen("evultra");
});
onEvent("homep1", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
  setScreen("home");
});
onEvent("homep2", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
  setScreen("home");
});
onEvent("homep3", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
  setScreen("home");
});
onEvent("homep4", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
  setScreen("home");
});
onEvent("homep5", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
  setScreen("home");
}); 
onEvent("homep6", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
  setScreen("home");
});
onEvent("homep7", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
  setScreen("home");
}); 
//122222333333334444444444555555555
// buy

onEvent("buynex1", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
 open("https://nexonev.tatamotors.com/");
   
}); 

onEvent("buyipac1", "click", function( ) {
  playSound("assets/category_app/snap.mp3", false); 
 open("https://www.jaguar.com/jaguar-range/i-pace/index.html");
   
});

onEvent("text_input1", "change", function( ) {
	console.log("jaguar"||"Jaguar"||"i-pace");
	 open("https://www.jaguar.com/jaguar-range/i-pace/index.html");
});
