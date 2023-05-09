 // function for toggling darkmode and saving it using local storage
 document.querySelectorAll(".darkmode").forEach((dark)=>{
    dark.addEventListener("click",function(){

        document.body.classList.toggle("dark")
       
       
        let bodyState;
   
        if(document.body.classList.contains("dark")){
            bodyState = "DARK"
        }
        else{
          bodyState = "light"  
        }
        localStorage.setItem("theme",JSON.stringify(bodyState))
    })
   
    let fromLocalStorage = JSON.parse(localStorage.getItem("theme"))
   
    if(fromLocalStorage === "DARK"){
        document.body.classList.add("dark")
        document.body.classList.add("transition")   
    }
    else{
        document.body.classList.add("transition")   
    }
   
 })

 //function for toggling the navigation-bar
document.querySelector(".navigation-bar-container").addEventListener("click",function(){
    document.querySelector(".pages-container-800px").classList.toggle("display-inputs")
    document.querySelector(".navigation-bar-container").classList.toggle("transition-2")
})


///jQueryCode for toggling the search bar
   $(document).ready(function(){
       $("#search").click(function(){
           $("#input").toggle(1000)
       })
   })

//scroll effect 
window.addEventListener("scroll",function(){
    let scrollHeight = this.window.pageYOffset
    if(scrollHeight >= 100){
        document.querySelector(".idk").classList.add("fixed-nav")
        this.document.querySelector(".idk").classList.add("transition")
    }
    else{
        this.document.querySelector(".idk").classList.remove("fixed-nav")
        this.document.querySelector(".idk").classList.add("transition")
    }
}) 



//toggling the faqs btn
document.querySelectorAll(".question").forEach((question)=>{
    question.querySelector(".question-btn").addEventListener("click",function(){
        document.querySelectorAll(".question").forEach((item)=>{
            if(item !== question){
                item.classList.remove("show-text")
            }
        })
        question.classList.toggle("show-text")
        question.classList.add("transition")
    })
})

// transiton in the newsletter
document.querySelectorAll(".form-input").forEach((input)=> {
    input.addEventListener("click", function(){
        input.style.backgroundColor = "white"
        let sibling = input.previousElementSibling
        sibling.style.display = "none"
        sibling.style.transition = ".900s"
        input.style.transition = ".900s"
    })
})


//the date for the footer
date = new Date().getFullYear()
document.querySelector(".current-date").innerHTML =  date

// contact us function
const contactArray = []

document.querySelector("#submit").addEventListener("click",function(){

    let name = document.querySelector("#fullname").value
    let email = document.querySelector("#email").value
    let description = document.querySelector("#text").value

    if(name && email && description){
        contactArray.push(
            {
            name,
            email,
            description,
        })
        localStorage.setItem("contactIssues", JSON.stringify(contactArray))
    }
})


document.querySelector(".top-btn").addEventListener("click",function(){
    
       if(pageYOffset === 3184.54541015625){

          window.scroll(0,0)
       }
       else{

        let scrollHeight = pageYOffset - 300
        window.scroll(0,scrollHeight)
       }
    })


document.querySelector(".bottom-btn").addEventListener("click",function(){
    let scrollHeight = pageYOffset + 300
    window.scroll(0,scrollHeight)
})