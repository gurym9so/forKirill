document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger_btn").addEventListener("click", function(){
        document.querySelector(".header").classList.toggle("open")
    })
})