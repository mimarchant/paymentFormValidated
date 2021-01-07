let form = document.querySelector("form")
let alertMsg = document.querySelector(".alert")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let error = false
    
    let validateCard =  /^[0-9]{13,16}$/
    let validateName = /^[a-zA-Z\s]+$/
    let validatecvc = /^[0-9]{3,3}$/
    let validateAmount = /^[-+]?[0-9]*[.,]?[0-9]+$/
    let validatePostalCode = /^[0-9]{7}$/
    let validateMessage = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,300}$/

    if (!validateCard.test(form.creditcard.value)){
        form.creditcard.classList.add("is-invalid")
        form.creditcard.classList.add("alert-danger")
        error = true
    } else {
        form.creditcard.classList.remove("is-invalid")
        form.creditcard.classList.remove("alert-danger")
        form.creditcard.classList.add("is-valid")
    }

    if (form.firstname.value === "" || !validateName.test(form.firstname.value)){
        form.firstname.classList.add("is-invalid")
        form.firstname.classList.add("alert-danger")
        error = true
    } else {
        form.firstname.classList.remove("is-invalid")
        form.firstname.classList.remove("alert-danger")
        form.firstname.classList.add("is-valid")
    }

    if (!validatecvc.test(form.cvc.value)){
        form.cvc.classList.add("is-invalid")
        form.cvc.classList.add("alert-danger")
        error = true
    } else {
        form.cvc.classList.remove("is-invalid")
        form.cvc.classList.remove("alert-danger")
        form.cvc.classList.add("is-valid")
    }

    if (form.amount.value === "" || !validateAmount.test(form.amount.value)){
        form.amount.classList.add("is-invalid")
        form.amount.classList.add("alert-danger")
        error = true
    } else {
        form.amount.classList.remove("is-invalid")
        form.amount.classList.remove("alert-danger")
        form.amount.classList.add("is-valid")
    }

    if (form.lastname.value === "" || !validateName.test(form.lastname.value)){
        form.lastname.classList.add("is-invalid")
        form.lastname.classList.add("alert-danger")
        error = true
    } else {
        form.lastname.classList.remove("is-invalid")
        form.lastname.classList.remove("alert-danger")
        form.lastname.classList.add("is-valid")
    }

    if (form.city.value === "" || !validateName.test(form.city.value)){
        form.city.classList.add("is-invalid")
        form.city.classList.add("alert-danger")
        error = true
    } else {
        form.city.classList.remove("is-invalid")
        form.city.classList.remove("alert-danger")
        form.city.classList.add("is-valid")
    }

    if (form.state.value == "Pick a state"){
        form.state.classList.add("is-invalid")
        form.state.classList.add("alert-danger")
        error = true
    } else {
        form.state.classList.remove("is-invalid")
        form.state.classList.remove("alert-danger")
        form.state.classList.add("is-valid")
    }

    if (form.postalcode.value === "" || !validatePostalCode.test(form.postalcode.value)){
        form.postalcode.classList.add("is-invalid")
        form.postalcode.classList.add("alert-danger")
        error = true
    } else {
        form.postalcode.classList.remove("is-invalid")
        form.postalcode.classList.remove("alert-danger")
        form.postalcode.classList.add("is-valid")
    }

    if (!validateMessage.test(form.mensaje.value) || form.mensaje.value === ""){
        form.mensaje.classList.add("is-invalid")
        form.mensaje.classList.add("alert-danger")
        error = true
    } else {
        form.mensaje.classList.remove("is-invalid")
        form.mensaje.classList.remove("alert-danger")
        form.mensaje.classList.add("is-valid")
    }

    if (error){
        alertMsg.classList.remove("d-none")
        alertMsg.classList.add("d-block")
        error = true
    } else {
        alertMsg.classList.add("d-none")
        alertMsg.classList.remove("d-block")
    }

})