// addEventListener

let main_form_containerElement = document.getElementById("forma")
let menuOpenElement = document.getElementById("call-btn")

let giveFormResnponceBtnElement = document.getElementById("give-form-response")

let menuOpenedStatus = false
menuOpenElement.addEventListener("click",(e) =>{
    if (main_form_containerElement.style.visibility === "" || main_form_containerElement.style.visibility === "hidden" ) {
        console.log(main_form_containerElement.style.visibility)
        main_form_containerElement.style.visibility = "visible";
        main_form_containerElement.classList.add("shown");
        document.body.style.overflow = "hidden"
        menuOpenedStatus = true
      } else {
        menuOpenedStatus = false
        console.log(main_form_containerElement.style.visibility)
        main_form_containerElement.style.visibility = "hidden";
        main_form_containerElement.classList.remove("shown");
        document.body.style.overflow = ""
      }
})



main_form_containerElement.addEventListener("click",(event) =>{
    if (menuOpenedStatus && event.target.id == "forma"){
        menuOpenedStatus = false
        console.log(main_form_containerElement.style.visibility)
        main_form_containerElement.style.visibility = "hidden";
        main_form_containerElement.classList.remove("shown");
        document.body.style.overflow = ""
    }
})


giveFormResnponceBtnElement.addEventListener("click",(event) =>{
    event.preventDefault()
    const inputPhoneElement = document.getElementById("form-file-phone")
    const inputNameElement = document.getElementById("form-file-name")
    let formSubmitStatus = document.getElementById("form-submit-succes")
    
    const phoneRegex = /^\+7\d{10}$/;
    if (!phoneRegex.test(inputPhoneElement.value.trim())) {
        formSubmitStatus.innerText = "Номер телефона должен быть в формате +7XXXXXXXXXX (всего 12 символов).";
        formSubmitStatus.style.color = "red"
        return;
      }
    
      if (inputNameElement.value.trim() === "") {
        formSubmitStatus.style.color = "red"
        formSubmitStatus.innerText = "Пожалуйста, введите имя.";
        return;
      }
    
    else {
        formSubmitStatus.innerText = "Все ок!!";
        formSubmitStatus.style.color = "green"
    }
    formSubmitStatus.style.visibility = "visible"
    
})

// function write_to_lesson(){    
//     if (main_form_containerElement.style.visibility === "" || main_form_containerElement.style.visibility === "hidden" ) {
//         console.log(main_form_containerElement.style.visibility)
//         main_form_containerElement.style.visibility = "visible";
//         main_form_containerElement.classList.add("shown");
//       } else {
//         console.log(main_form_containerElement.style.visibility)
//         main_form_containerElement.style.visibility = "hidden";
//         main_form_containerElement.classList.remove("shown");
//       }
// }