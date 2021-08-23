  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDBLfDmDylmHWDWBXP_wmSGMCg2tlE89XU",
    authDomain: "let-chat-11f5b.firebaseapp.com",
    projectId: "let-chat-11f5b",
    storageBucket: "let-chat-11f5b.appspot.com",
    messagingSenderId: "821089815250",
    appId: "1:821089815250:web:4dc9ec019912a0e11e3b0b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addRoom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose: "adding room name"
});
localStorage("room_name", room_name);
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+room_name+"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function userName(){

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
}

function redirectToRoomName(name){
console.log(name);
localStorage.setUp("room_name", name);
window.location = "kwitter_page.html";
}