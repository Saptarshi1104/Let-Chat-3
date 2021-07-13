  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBXZmwwDuPkOr1KTMcCKwACsUlRhIfudNE",
    authDomain: "let-chat-31618.firebaseapp.com",
    databaseURL: "https://let-chat-31618-default-rtdb.firebaseio.com",
    projectId: "let-chat-31618",
    storageBucket: "let-chat-31618.appspot.com",
    messagingSenderId: "714228534560",
    appId: "1:714228534560:web:fad99a01b191fecc541b45"
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