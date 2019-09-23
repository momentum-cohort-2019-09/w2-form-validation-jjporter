function query (selector) {
    return document.querySelector(selector)
}

function markValid(field) {
    field.parentNode.classList.add()
}

function markInvalid(){

}

function validateName() {
    let nameField = query('#name')
    if(nameField.value === "") {
        nameField.parentNode.classList.remove('input-valid')
        nameField.parentNode.classList.add('input-invalid')
    } else{
        nameField.parentNode.classList.remove('input-invalid')
        nameField.parentNode.classList.add('input-valid')
    } 
}  

// function validateDate(date) {
//     let today = new date(date.UTC(0,0,0,0))
//     if(date === "") {
//         return null
//     }
//     if (date === today) {
//         return true
//     }
// }

function numberOfDays() {
    let daysField = query('#days')
    if(daysField === "") {
        return null
    }
}

// function markValid(field) {
//     nameField.parentNode.classList.remove('input-invalid')
//     nameField.parentNode.classList.add('input-valid')
// }

// function markValid(field) {
//     nameField.parentNode.classList.remove('input-vvalid')
//     nameField.parentNode.classList.add('input-invalid')


query('#parking-form').addEventListener('submit', function(event) {
    event.preventDefault()

    validateName() 
    numberOfDays()

})