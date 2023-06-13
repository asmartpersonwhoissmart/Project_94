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
  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();