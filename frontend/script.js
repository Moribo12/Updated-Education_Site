
function Dropdown(dropdownId) {

  const collapseId = dropdownId.replace("dropdown_", "collapse_");
  const dropdownHeader = document.getElementById(dropdownId);
  const header = dropdownHeader.firstElementChild
  const arrowUp = dropdownHeader.querySelector(".span");
  const arrowDown = dropdownHeader.querySelector(".span-down");

  const collapseContent = document.getElementById(collapseId);

  if (collapseContent.style.display === "block") {
    collapseContent.style.display = "none";
    header.style.color = "#333a46e8";
    arrowUp.style.display = "block";
    arrowDown.style.display = "none";
  } else {
    collapseContent.style.display = "block";
    header.style.color = "#f47929";
    arrowUp.style.display = "none";
    arrowDown.style.display = "block";
  }
}



function openDiv(divId){
  const showId = divId.replace("divId_","show_");
  const showDropDown = document.getElementById(showId)
  const arrUp = document.querySelectorAll(".up");
  const arrDown = document.querySelectorAll(".down");
  // const arrUpPic = document.querySelector(".picUp");
  // const arrDownPic =document.querySelector(".picDown");
 
 
  arrDown.forEach(down =>{
     down.addEventListener("click",()=>{
      showDropDown.classList.add("reveal");
      console.log(down)
      // arrUpPic.style.display="block";
      // down.style.display="none";
    })
  })

  arrUp.forEach(ups=>{
   ups.addEventListener("click",()=>{
    showDropDown.classList.add("md-form");
   
   })
  })
}



document.addEventListener('DOMContentLoaded', function () {

  const collapseMenu = document.getElementById("btn-collapse");
  const navbarCollapse = document.getElementById("navbar-collapse")

  collapseMenu.addEventListener("click", () => {

    console.log("Its working")
    if (navbarCollapse.style.display === 'none' || navbarCollapse.style.display === '') {
      navbarCollapse.style.display = 'block';
    } else {
      navbarCollapse.style.display = 'none';
    }

  })

})

const form = document.getElementById("myForm");
const modalForm = document.querySelector(".mdForm");
const getArrowDown = document.querySelector(".arrow-dwn");
const arrowUps = document.querySelector(".up");
const arrowDowns = document.querySelector(".down");

let isClicked=false;
function validateForm() {

  if (form.checkValidity()) {
    form.parentElement.style.display = "none";
    modalForm.style.display = "block";
    arrowUps.style.display = "none";
    arrowDowns.style.display = "block";

  } else {
    const inputs = form.querySelectorAll(":invalid");
    inputs.forEach(function (input) {
      input.style.borderColor = "red";
    });
  }
  console.log(isClicked);
}


const getDetails = document.getElementById("yr-details")
getArrowDown.addEventListener("click", ()=>{
  getDetails.style.display = "block";
  modalForm.style.display = "none";
  arrowUps.style.display = "block";
  arrowDowns.style.display = "none";
})



const BEE_Cal = document.getElementById("B-BBEE_calculation")
const BEE_Points = document.getElementById("B-BBEE-Points")
const computeBtn = document.getElementById("compute-btn");

computeBtn.addEventListener("click",()=>{

  BEE_Cal.classList.toggle("hide")
  BEE_Points.classList.toggle("reveal")
})


const inputFields = document.querySelectorAll('.input-field');
const outputDiv = document.getElementById('output');
const outputDiv2 = document.getElementById('output2');
inputFields.forEach(inputField => {
  inputField.addEventListener('input', () => {
    const values = Array.from(inputFields)
      .map(field => field.value)
      .filter(value => value !== ''); 

    outputDiv.textContent = values.length > 1 ? `(${values.join(', ')})` : values.join('');
    outputDiv2.textContent = values.length > 1 ? `(${values.join(', ')})` : values.join('');
  });
});


const inputField = document.querySelectorAll('.input-fields');
const outputDivs = document.getElementById('outputz');
const outputDiv3 = document.getElementById('output3');

inputField.forEach(inputFieldx => {
  inputFieldx.addEventListener('input', () => {
    const values = Array.from(inputField)
      .map(field => field.value)
      .filter(value => value !== ''); 

    outputDivs.textContent = values.length > 1 ? `(${values.join(', ')})` : values.join('');
    outputDiv3.textContent = values.length > 1 ? `(${values.join(', ')})` : values.join('');
  });
});






const cat_dw = document.querySelectorAll(".ct-box");
const info = document.querySelector(".accordition_info")
const close_box = document.querySelectorAll(".general")
// const sectorbtn = document.querySelector(".Category_dotted")

close_box.forEach(cl_box =>{
  isClicked = false;
  cl_box.addEventListener("click",()=>{
    info.style.display = "none"
    // cl_box.style.backgroundColor="#005d86";

    isClicked = true;

    })

})

cat_dw.forEach(box => {
  box.addEventListener("click", ()=>{
    const sectors = document.querySelector(".accordition_sector_section")
    sectors.style.display="block"
  })
})



// // Get a reference to the button element
// const button = document.getElementById('myButton');

// // Initialize a variable to track the button state
// let isClicked = false;

// // Add a click event listener to the button
// button.addEventListener('click', function() {
//     // Update the state when the button is clicked
    
// });

// checkbox js
const checkBx = document.getElementById("checkbox")
const inputFrm = document.getElementById("Consultant_info")
const checkboxDiv =document.getElementById("checkbox_btn")

checkBx.addEventListener("click", ()=>{
  inputFrm.classList.toggle("popup")
})



//Supplier,Enterprise and socio-economic divs JS
const grantbtn = document.querySelectorAll(".grantB");

function contentHide(env){
 const NoBtn = document.getElementById(env).parentElement.parentElement.parentElement.parentElement;
 NoBtn.classList.add("display-hide");
//  NoBtn.classList.remove("md-form");
  NoBtn.classList.remove("reveal");

}


function contentDisplay(event){
  const YesButton = document.getElementById(event);
  YesButton.style.backgroundColor="#005d86";
  YesButton.style.color="#fff";
  YesButton.style.boxShadow="none"

 const YesBtn = document.getElementById(event).parentElement.parentElement.parentElement.nextElementSibling.firstElementChild;
 YesBtn.classList.add("reveal");
 YesBtn.classList.remove("display-hide")

}


function grantBtnDisplay(env){
  const supplierbtn= document.getElementById(env);
  supplierbtn.style.backgroundColor="#005d86";
  supplierbtn.style.color="#fff";
  
  const grantButton = document.getElementById(env).parentElement.parentElement.nextElementSibling;
  grantButton.classList.add("reveal");
  grantButton.classList.remove("display-hide")
}

function removeDisabled(event){
 const editBtn = document.getElementById(event).parentElement.previousElementSibling.firstElementChild.nextElementSibling
 editBtn.disabled=false;
 editBtn.style.boxShadow = "0 0 0 3px rgba(0,116,167,.25)";
 editBtn.style.borderColor = "#80bad3";
 
}


