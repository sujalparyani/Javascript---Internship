//Primitive Datatype

var Num=98;
var Str="Sujal paryani";
var BooleanVar=true;


document.write("<br/>",Num);
document.write("<br/>",Str);
document.write("<br/>",BooleanVar);

// TypeOf
document.write("<br/>",typeof(BooleanVar));


//Non-Primitive Datatype
// 1. Object: Object in Javascript is an entity having properties and methods. Everything is an object in javascript.

// Create an empty generic object
var obj = new Object();
document.write("<br/>"+typeof(obj));
document.write("<br/>"+obj.FirstName+" "+obj.LastName);


// Create a user defined object
var anime = {
    type: "Action",
    theme: "Dark",
    episodes: 08
}
document.write("<br/>"+anime.type+" "+anime.theme+" "+anime.episodes);

// Array datatype
var Naruto = ["Boruto", "Kakashi", "Sasuke"];
document.write("<br/>"+Naruto[0]);
document.write("<br/>"+Naruto[1]);
document.write("<br/>"+Naruto[2]);


// Function datatype
var Demo = function(){ 
    return "Bye BYE "; 
}
document.write("<br/>"+typeof(Demo));
document.write("<br/>"+Demo());



