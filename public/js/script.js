let sendBtn = document.getElementById('sendBtn')
let inputText = document.getElementById('inputText')
let chatContainer = document.getElementById('chatContainer')

let user = { "message": "" }

let possibleAnswers = [
    { message: "hi", response: "hello" },
    { message: "hello", response: "hi" },
    { message: "how are you", response: "all good. what about you" },
    { message: "what is IGNOU", response: "INDIRA GANDHI NATIONAL OPEN UNIVERSITY" },
    { message: "where are you from", response: "IGNOU" },
    { message: "whats your name", response: "I am ignou chatbox 1.0" },
    { message: "ignou website", response: "http://ignou.ac.in/" },
    { message: "ignou results", response: "http://ignou.ac.in/ignou/studentzone/results/1" },
    { message: "results", response: "http://ignou.ac.in/ignou/studentzone/results/1" },
    { message: "result", response: "http://ignou.ac.in/ignou/studentzone/results/1" },
    { message: "ignou gradecard", response: "https://gradecard.ignou.ac.in/gradecard/" },
    { message: "ignou grade card", response: "https://gradecard.ignou.ac.in/gradecard/" },
    { message: "grade card", response: "https://gradecard.ignou.ac.in/gradecard/" },
    { message: "gradecard", response: "https://gradecard.ignou.ac.in/gradecard/" },
]


function sendMessage(userMessage) {
    var messageElemeent = document.createElement('div')

    messageElemeent.innerHTML = "<span>" + userMessage + "</span> <span> <b>:You</b> </span>"
    chatContainer.appendChild(messageElemeent)

    messageElemeent.style.textAlign = "right"
    messageElemeent.style.margin = "10px"

    chatBotReply(userMessage)
}

function chatBotReply(userMessage) {
    var botMessageElemeent = document.createElement('div')

    var chatBotMessage = ""
    if (userMessage.length != 0) {
        var result = possibleAnswers.filter(val => val.message.includes(userMessage.toLowerCase()))
        if (result.length != 0) {
            chatBotMessage = result[0].response
        } else {
            chatBotMessage = "Please rephrace your question"
        }
    }

    botMessageElemeent.innerHTML = "<span> <b> Bot: </b> </span> <span>" + chatBotMessage + "</span>"
    setTimeout(() => {
        chatContainer.appendChild(botMessageElemeent)
    }, 500)

    botMessageElemeent.style.textAlign = "left"
    botMessageElemeent.style.margin = "10px"
}



sendBtn.addEventListener('click', () => {
    var userMessage = inputText.value


    if (userMessage.length != 0) {
        userMessage = userMessage.trim()
        user.message = userMessage
        inputText.value = ""
        sendMessage(userMessage)
    } else {
        window.alert("Please enter a message to search")
    }

})
