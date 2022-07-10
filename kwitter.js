function addUser(){
    var User = document.getElementById("user_name").value ;
    
        localStorage.setItem("name",User) ;
    
        window.location = "kwitter_room.html" ;
    
    }