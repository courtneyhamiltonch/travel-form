const form = document.courtneyAirlines
let firstAndLast = form.fullName.value
let age = form.age.value
let girlBoy = form.gender.value
let destination = form.destination.value
let diet = []


form.addEventListener("submit", (event) => {
    event.preventDefault()

firstAndLast = form.fullName.value 
age = form.age.value
girlBoy = form.gender.value
destination = form.destination.value
diet = []
if (form.Pescatarian.checked) {
    diet.push(form.Pescatarian.value);
}
if (form.Standard.checked) {
    diet.push(form.Standard.value)
}
if (form.Paleo.checked) {
    diet.push(form.Paleo.value)
}
if (form.Vegetarian.checked) {
    diet.push(form.Vegetarian.value)
}
alert(`Full Name: ${firstAndLast}\n Age: ${age}\n Gender: ${girlBoy}\n Destination: ${destination}\n Diet: ${diet}`)

})