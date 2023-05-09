let messages = []
let response = ""
let helloText = document.getElementById("hello").innerHTML
let samText = document.getElementById("sam").innerHTML
let JsonText = document.getElementById("Json").innerHTML
// displayMessages()

let fromLocal = JSON.parse(localStorage.getItem("messages"))

if(fromLocal){
messages = fromLocal
displayMessages()
}

document.querySelector("#send").addEventListener("click",function(){
    userMessage =  document.querySelector("#text").value
    if(userMessage){
         if(userMessage === helloText){
             hello()
         }
         else if( userMessage === JsonText){
             json()
         }
         else if(userMessage === samText){
             sam()
         }
         else{
            response = "Kindly send us an email at oketunbi.olufunke @gmail.com or send us a message at 09034434018"
            pushDetails()
            displayMessages()
            document.querySelector("#text").value = " "
         }
       userMessage = ""
   }
})

function pushDetails(){
    messages.push(
        {
            userMessage,
            response
        }
    )
    localStorage.setItem("messages",JSON.stringify(messages))
}

function displayMessages(){
let showMessages = ''

messages.map((message)=>{
        const {userMessage, response} = message
        return(
          
            showMessages +=
            `
            <div class="user-message">${userMessage}</div>
            <div class="response">${response}</div>
            `
        )
    })
    document.querySelector(".message-container").innerHTML = showMessages 
}

function hello(){
let btn = document.querySelector("#hello").innerHTML
    userMessage =  btn   
    response = "HI! We are sorry for the inconviences. Your order is being processed and will be delivered soon.Thanks!"
    pushDetails()
    displayMessages()
}

function sam(){
let btn = document.querySelector("#sam").innerHTML
    userMessage =  btn   
    response = "Hello! Refunds are only made because of the following reasons ~Inability to deliver ~Unsatisfaction with your product"
    pushDetails()
    displayMessages()
}

function json(){
 let btn = document.querySelector("#Json").innerHTML
    userMessage =  btn   
    response = "We are sorry for the inconviences.Kindly provide us with additional information about the issue you are having.Thank You!"
    pushDetails()
    displayMessages()
}


 setInterval(()=>{
 localStorage.removeItem("messages")
 },3600000)
//localStorage.clear()