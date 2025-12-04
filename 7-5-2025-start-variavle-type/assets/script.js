document.writeln("<br>hello <b>World</b>"); 
document.writeln("<br>Hello JS");
// only a a contain ar text e kaj kore 
document.getElementById("contain").innerText ="hello roxi bhai, dari koren kno";

/*
// html ar full body niye kaj korebe
document.getElementByAll("contain").innerHTML ="hello roxi bhai, dari koren kno";
//ekadik div or others tag ar only ekta ke niye kaj kore 
document.querySelector("#contain").innerText ="hello roxi bhai, dari koren kno";
// ekadik div or others tag ar sobgula niye te kaj kore
document.getElementByAll("#contain").innerText ="hello roxi bhai, dari koren kno";
// 
document.getElementByAll("contain").innerText ="hello roxi bhai, dari koren kno"; */

// p ke div ar vitore rakha
document.getElementById("contain").innerText = document.querySelector("p").innerText;






// document.getElementById("contain").outerText ="dari koren kno";