var queryString = window.location.search;
queryString = queryString.substring(1);

    var params = {}, queries, temp, i, l;
    // Split into key/value pairs
    queries = queryString.split("&");
    // Convert the array of strings into an object
    for ( i = 0, l = queries.length; i < l; i++ ) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
 }

function fillInfo(){
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var radio = document.getElementById("radio");
    var listSel = document.getElementById("listSelection");
    fname.innerHTML = `First Name: ${params.fname}`;
    lname.innerHTML = `Last Name: ${params.lname}`;
    email.innerHTML = `Email: ${params.email}`;
    radio.innerHTML = `Subscribe to newsletter: ${params.subscribe}`;
    listSel.innerHTML =`School: ${params.Schools}`;

   
}
fillInfo()

    
    var str = document.getElementById('email'); 
    var emailFix = str.innerText.replace("%40", "@");
    document.getElementById('email').innerHTML = emailFix;
    console.log(str)

   


