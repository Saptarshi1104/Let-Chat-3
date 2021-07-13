  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCdO5VLkGObdfy8Yy47S0qQOjmm-WaDZiY",
    authDomain: "let-chat-84fa8.firebaseapp.com",
    databaseURL: "https://let-chat-84fa8-default-rtdb.firebaseio.com",
    projectId: "let-chat-84fa8",
    storageBucket: "let-chat-84fa8.appspot.com",
    messagingSenderId: "161979437268",
    appId: "1:161979437268:web:7fff8d70f4b65e19ed6b41"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 console.log("Room Name - " + room_name);
 row = "<div class='room_name' id="+room_name+" onclick='redirectToRoomName(this.id)'> #" + room_name + "</div><hr>";
document.getElementById("list_of_rooms").innerHTML += row;
 //End code
 });});}
getData();

function userName(){
user_name = localStorage.getItem("user_name");
document.getElementById("username").innerHTML = "Welcome " + user_name + "!";
}

function addRoom(){
room_name = document.getElementById("roomname").value;
firebase.database().ref("/").child(room_name).update({
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
console.log(name);
localStorage.setUp("room_name", name);
window.location = "kwitter_page.html";
}