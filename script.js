
let form=document.querySelector('form');
let input=document.querySelector('input');
let box=document.getElementsByClassName('box');

let myFunction=async(e)=>{
    e.preventDefault();
    let inpVal=input.value;
    const response= fetch(`https://api.weatherapi.com/v1/current.json?key=1bff110faf59430ca6993101242212 &q=${input.value}&aqi=yes`)
    response.then((response)=>response.json())
    .then((data)=>   {
        box[0].innerHTML=`<div class="smallbox">
                    <div class="leftside">
                        <h3 id="temperature">${data.current.temp_c + "&degC "}</h3>
                        <h4 id="city">${data.location.country}</h4>
                        <h2></h2>
                    </div>
                    <div class="rightside">
                         <img src=${data.current.condition.icon} height="100px" width= "100px" alt="">
                         <h3 id="sunny">${data.current.condition.text}</h3>
                    </div>
                  </div> `

    }).catch(()=>{
        box[0].innerHTML="Enter Correct City Name";
        box[0].style.color="white";
        box[0].style.backgroundColor="rgb(56,99,160)";
        box[0].style.width="50%";
        box[0].style.height="auto";
        box[0].style.marginTop="50px";
        box[0].style.padding="50px";
    });
        
    form.reset();

}
form.addEventListener('submit',myFunction)
   



    
  

