// const title=document.getElementById('title')
// const bio=document.getElementById('bio')

// title.innerHTML="Ali Akmal"

// title.style.backgroundColor="orange"

// title.addEventListener('click',function(){
// title.classList.add('name')   
// })

// bio.addEventListener('mouseover',function(){
//   bio.classList.add('bio')
// })
// bio.addEventListener('mouseout',function(){
// bio.classList.remove('bio')
// })

// function ushak(){
//   // console.log("asdasdasds");
// return 2+3;
// }


// console.log(ushak());
// let 
// const 
// var
// function arslan(){
//  for(let j=1;j<=10;j++){


//   const para=document.createElement('h1')
//   para.innerHTML="Today is our Second Javascript Class. And we are learning basic concepts in JavaScript"
//   para.style.color="red"
//   document.body.appendChild(para)
//   }
// } 

// const students=["Hassan","Afnan","Ali","Ibrahim","hussnain"]
// console.log(students);


// for(let i=0;i<3;i++){
//   const title=document.createElement('h1')
//   title.innerHTML=students[i];
//   document.body.appendChild(title)
// }

// Create a Simple function that will render the array of months on a button click event


const months=["January","February","March","April","May","June","July","August","September","October","November","December","asada"];

function renderMonth(){
  for(let i=0;i<months.length;i++){
    const monthName=document.createElement('div')
    monthName.innerHTML="Month name is:" + months[i];
    monthName.classList.add('monthName')
    document.body.appendChild(monthName)
  }
}



// let a=5;
// a=90;
// console.log(a);















// Var can be redeclare and reinitilize 
// var a=90;
// a=100;
// var a=500;
// console.log(a);


  // let x;
  // x=09;
  // const c=100;
  // const d=900;
  // const e=60;

  // d=800;
  // console.log(c,d);