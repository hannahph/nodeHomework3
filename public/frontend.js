// Use this file to add all of the functionality to the website including the XMLHttpRequests. 
// You may use the class examples for references as the XMLHttpRequests always follow the same pattern for the kind of
// work we will be using them for. Remeber google is your friend!

var httpGet = function(theUrl){
    console.log(theUrl);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function(){
        console.log(xmlHttp.responseText);
        //window.location.href = 'faq.html';
        //document.getElementById('user').innerHTML=xmlHttp.responseText;
        if(xmlHttp.responseText=='true'){
            window.location.href = 'successful.html';
        }
        else{
            window.location.href='fail.html'
        }
    }
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send();
};

var checkPassword = function(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    var theUrl = '/login/' + username +'/' + password;
    console.log(theUrl);
    httpGet(theUrl);
};

var showPwd = function(){
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
};
