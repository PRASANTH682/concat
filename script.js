function concat(){
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var fullName = document.getElementById("full-name");

    fullName.innerHTML ="Full Name : "+ firstName + " "+lastName;

}