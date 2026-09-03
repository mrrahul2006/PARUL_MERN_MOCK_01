const form = document.getElementById("form")
form.addEventListener('click',function(event){
    event.preventDefault()
    let name = document.getElementById("name").value

    document.getElementById('output').innerText = "Welcome "
    +name
})