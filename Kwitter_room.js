// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChDWXNO2eDTUJUj1ECQKV6Ei8YH8GL7Ow",
    authDomain: "lets-chat-web-app-1764c.firebaseapp.com",
    projectId: "lets-chat-web-app-1764c",
    storageBucket: "lets-chat-web-app-1764c.appspot.com",
    messagingSenderId: "1066121468399",
    appId: "1:1066121468399:web:5d477554772d99d3d07e1a"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;

           firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
          console.log("room_name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToroomname(name){
    console.log(name);
    localStorage.setItem("Roomname",name);
    window.location = "kwitter_page.html";
}
function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
}