
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyByoKnfrg-ABcDUHibXugIVBpabc411SFs",
      authDomain: "chats-app-5c1c6.firebaseapp.com",
      databaseURL: "https://chats-app-5c1c6-default-rtdb.firebaseio.com",
      projectId: "chats-app-5c1c6",
      storageBucket: "chats-app-5c1c6.appspot.com",
      messagingSenderId: "1014072461514",
      appId: "1:1014072461514:web:53200410b6d2e763cb4c33",
      measurementId: "G-3QJBLWKQKF"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = { apiKey: "AIzaSyC0yDH0-16JN2AvcvLes5R8ZXWhSoaFfq8", 
authDomain: "kwitter-13621.firebaseapp.com", 
databaseURL: "https://kwitter-13621-default-rtdb.firebaseio.com", 
projectId: "kwitter-13621", storageBucket: "kwitter-13621.appspot.com", 
messagingSenderId: "423280083957", appId: "1:423280083957:web:45d221b393e5d2712916bc", 
measurementId: "G-TW206HXJV6" }; 
//ADD YOUR FIREBASE LINKS 
firebase.initializeApp(firebaseConfig);
    user_name=localstorage.getItem("username");
    document.getElementById("username").innerHTML=user_name+"! "
    

    function add(){
          room_name=document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                 purpose : "adding room name"
          });
          localStorage.setItem("roomname",room_name);


          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(room_name)
       row="<div id="+room_name+" onclick='gotoroom(this.id);'>"+"#"+room_name+"</div><hr>"
       document.getElementById("output").innerHTML= row;


      });});}
getData();
function gotoroom(name){
      console.log(name);
      localstorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

      //End code
      });});}
getData();
