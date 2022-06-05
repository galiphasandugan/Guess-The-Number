const buton =document.getElementById("btn");
const b = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
console.log(b);
buton.addEventListener("click", (e)=> {
const input =document.querySelector(".input");
console.log(input.value);



  if (input.value < b) {
    alert('artır');
    e.target
  };  
  if (input.value > b) {
   alert('azalt');
   e.target
  };  
  if (input.value == b) {
   alert('buldun');
   


};
   

});