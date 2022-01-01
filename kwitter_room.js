
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyB2CKIyXKW24KSnXik3oUsIKmAIB-ynwvY",
      authDomain: "databaseroom-56c8f.firebaseapp.com",
      databaseURL: "https://databaseroom-56c8f-default-rtdb.firebaseio.com",
      projectId: "databaseroom-56c8f",
      storageBucket: "databaseroom-56c8f.appspot.com",
      messagingSenderId: "203726790443",
      appId: "1:203726790443:web:7c9ac4c5d99e48b11faf6e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var user_name = localStorage.getItem("user_name");
    
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
 document.getElementById("output").innerHTML = row;
//End code
      });});}
getData();

function addRoom() {

room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name",
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout() {

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}