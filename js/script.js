'use strict';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const radio = 45;
const inicio = 0;
ctx.lineWidth = 15;
ctx.font = "normal 16px sans-serif";

// HTML
ctx.beginPath();
ctx.strokeStyle = "#e34c26"; 
ctx.arc(60,55,radio,inicio,1.8*Math.PI);
ctx.fillText("HTML",40,60);
ctx.stroke();

// CSS
ctx.beginPath();
ctx.strokeStyle = "#264de4"; 
ctx.arc(200,55,radio,inicio,1.6*Math.PI);
ctx.fillText("CSS",185,60);
ctx.stroke();

// JS
ctx.beginPath();
ctx.strokeStyle = "#f0db4f"; 
ctx.arc(60,180,radio,inicio,1.3*Math.PI);
ctx.fillText("JS",50,190);
ctx.stroke();

// PHP
ctx.beginPath();
ctx.strokeStyle = "#474a8a"; 
ctx.arc(200,180,radio,inicio,1.5*Math.PI);
ctx.fillText("PHP",185,190);
ctx.stroke();

// Java
ctx.beginPath();
ctx.strokeStyle = "#f89820"; 
ctx.arc(60,300,radio,inicio,0.9*Math.PI);
ctx.fillText("Java",45,310);
ctx.stroke();

// Python
ctx.beginPath();
ctx.strokeStyle = "#06c258"; 
ctx.arc(200,300,radio,inicio,0.8*Math.PI);
ctx.fillText("Python",180,310);
ctx.stroke();

// SQL
ctx.beginPath();
ctx.strokeStyle = "#E74C3C"; 
ctx.arc(60,440,radio,inicio,1.55*Math.PI);
ctx.fillText("SQL",45,445);
ctx.stroke();
