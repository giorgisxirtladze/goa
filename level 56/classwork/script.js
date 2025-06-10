document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault()

        let form = document.getElementById("myForm")

        let name = form.elements["name"].value
        let email = form.elements["email"].value
        let age = form.elements["age"].value
        let city = form.elements["city"].value

        console.log("სახელი:", name)
        console.log("ელ. ფოსტა:", email)
        console.log("ასაკი:", age)
        console.log("ქალაქი:", city)

        form.reset()
    })
})