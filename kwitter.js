function store(){
    names=document.getElementById("USERNAME").value;
    localStorage.setItem("username",names);
    window.location="kwitter_room.html";
}