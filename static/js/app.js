const chatBody = document.querySelector(".chat-body");
const txtinput = document.querySelector("#txtinput");
const send = document.querySelector(".send");
const loadingEle =document.querySelector(".loading");


 

// Messages

// Start Laura 

let startMessageHL1 = document.createTextNode("Hallo! Ich bin " );
let startMessageHL2 = document.createElement("strong");
startMessageHL2.innerText = "Laura";
let startMessageHL3 = document.createTextNode(" und helfe dir dich in dieser Studie zurecht zu finden 😊" );
const startMessageArrayHL = [startMessageHL1,startMessageHL2, startMessageHL3]


let startTutorialHL1 = document.createTextNode("Gib mir Bescheid, wenn du das Experiment starten willst. Tippe dafür" );
let startTutorialHL2 = document.createElement("strong");
startTutorialHL2.innerText = ' "Start"';
let startTutorialHL3 = document.createTextNode(" in den Chat oder nutze " );
let startTutorialHL4 = document.createElement("strong");
startTutorialHL4.innerText = 'die vorgeschlagene Antwortmöglichkeit (Start).';

const startTutorialHL1Array = [startTutorialHL1,startTutorialHL2, startTutorialHL3, startTutorialHL4]

// Start no Human Like 
let startTutorialnHL1 = document.createTextNode("Wenn du mit der Studie starten möchtest tippe " );
let startTutorialnHL2 = document.createElement("strong");
startTutorialnHL2.innerText = ' "Start"';
let startTutorialnHL3 = document.createTextNode(" in den Chat oder nutze " );
let startTutorialnHL4 = document.createElement("strong");
startTutorialnHL4.innerText = 'die vorgeschlagene Antwortmöglichkeit (Start).';

const startTutorialnHL1Array = [startTutorialnHL1,startTutorialnHL2, startTutorialnHL3, startTutorialnHL4]




let startTutorialNextHL1 = document.createTextNode("In dieser Studie ist es deine Aufgabe die " );
let startTutorialNextHL2 = document.createElement("strong");
startTutorialNextHL2.innerText = 'Bilder zu klassifizieren';
let startTutorialNextHL3 = document.createTextNode(". Wähle dazu im Beispielbild (links) die passenden Optionen in den Kategorien " );
let startTutorialNextHL4 = document.createElement("strong");
startTutorialNextHL4.innerText = 'Terrain ';
let startTutorialNextHL5 = document.createTextNode("(im Beispiel Sand) und " );
let startTutorialNextHL6 = document.createElement("strong");
startTutorialNextHL6.innerText = 'Gegenstand ';
let startTutorialNextHL7 = document.createTextNode("im Beispiel Strohhalm). Klingt einfach oder?" + String.fromCodePoint( 128077 )  + "Bitte " );
let startTutorialNextHL8 = document.createElement("strong");
startTutorialNextHL8.innerText = 'wähle die passenden Felder für das Beispielbild und klicke Bitte auf "Weiter" ';
let startTutorialNextHL9 = document.createTextNode("um die nächsten Bilder zu klassifizieren." );
const startTutorialHL2Array = [startTutorialNextHL1,startTutorialNextHL2,startTutorialNextHL3,startTutorialNextHL4,startTutorialNextHL5,startTutorialNextHL6,startTutorialNextHL7,startTutorialNextHL8,startTutorialNextHL9]

let startTutorialNextnHL1 = document.createTextNode("In dieser Studie ist es deine Aufgabe die " );
let startTutorialNextnHL2 = document.createElement("strong");
startTutorialNextHL2.innerText = 'Bilder zu klassifizieren';
let startTutorialNextnHL3 = document.createTextNode(". Wähle dazu im Beispielbild (links) die passenden Optionen in den Kategorien " );
let startTutorialNextnHL4 = document.createElement("strong");
startTutorialNextnHL4.innerText = 'Terrain ';
let startTutorialNextnHL5 = document.createTextNode("(im Beispiel Sand) und " );
let startTutorialNextnHL6 = document.createElement("strong");
startTutorialNextnHL6.innerText = 'Gegenstand ';
let startTutorialNextnHL7 = document.createTextNode("im Beispiel Strohhalm).Bitte " );
let startTutorialNextnHL8 = document.createElement("strong");
startTutorialNextnHL8.innerText = 'wähle die passenden Felder für das Beispielbild und klicke Bitte auf "Weiter" ';
let startTutorialNextnHL9 = document.createTextNode("um die nächsten Bilder zu klassifizieren." );
const startTutorialnHL2Array = [startTutorialNextnHL1,startTutorialNextnHL2,startTutorialNextnHL3,startTutorialNextnHL4,startTutorialNextnHL5,startTutorialNextnHL6,startTutorialNextnHL7,startTutorialNextnHL8,startTutorialNextnHL9]


let startNote1HL1 = document.createTextNode("Du hast die Aufgabe gestartet! Klassifiziere jetzt bitte die ersten 5 Bilder. Beachte bitte: Falls du dir beim " );
let startNote1HL2 = document.createElement("strong");
startNote1HL2.innerText = 'Terrain unsicher ';
let startNote1HL3 = document.createTextNode("bist, wähle das Terrain des Gebietes aus, " );
let startNote1HL4 = document.createElement("strong");
startNote1HL4.innerText = 'auf welchem der Müllgegenstand liegt.';
let startNote1HL5 = document.createTextNode(" Es gibt ")
let startNote1HL6 = document.createElement("strong");
startNote1HL6.innerText = 'einfache und schwere Bilder, sowie Bilder ohne Müllgegenstand. ';
let startNote1HL7 = document.createTextNode('Tippe in den Chat "Fertig" oder nutze die vorgegebene Antwortmöglichkeit, wenn die Bilder erfolgreich klassifiziert hast. 😊' );

const startNotelHL1Array = [startNote1HL1,startNote1HL2, startNote1HL3, startNote1HL4, startNote1HL5,startNote1HL6, startNote1HL7]

let startNote1nHL1 = document.createTextNode("Klassifiziere jetzt bitte die ersten 5 Bilder. Beachte bitte: Falls du dir beim " );
let startNote1nHL2 = document.createElement("strong");
startNote1nHL2.innerText = 'Terrain unsicher ';
let startNote1nHL3 = document.createTextNode("bist, wähle das Terrain des Gebietes aus, " );
let startNote1nHL4 = document.createElement("strong");
startNote1nHL4.innerText = 'auf welchem der Müllgegenstand liegt.';
let startNote1nHL5 = document.createTextNode(" Es gibt ")
let startNote1nHL6 = document.createElement("strong");
startNote1nHL6.innerText = 'einfache und schwere Bilder, sowie Bilder ohne Müllgegenstand. ';
let startNote1nHL7 = document.createTextNode('Tippe in den Chat "Fertig" oder nutze die vorgegebene Antwortmöglichkeit, wenn die Bilder erfolgreich klassifiziert hast.' );
const startNotelnHL1Array = [startNote1nHL1,startNote1nHL2, startNote1nHL3, startNote1nHL4, startNote1nHL5,startNote1nHL6, startNote1nHL7]

const messageTutorial = 'Gib mir Bescheid, wenn du das Experiment starten willst.' + String.fromCodePoint( 128077 ) 
const message2Tutorial = 'In dieser Studie ist es deine Aufgabe die Bilder zu klassifizieren. Wähle dazu im Beispielbild (links) die passenden Optionen in den Kategorien Terrain (im Beispiel Sand) und Gegenstand (im Beispiel Strohhalm). Klingt einfach oder? '
const messageTutorialBot = 'In dieser Studie ist es deine Aufgabe die Bilder zu klassifizieren. Wähle dazu im Beispielbild (links) die passenden Optionen in den Kategorien Terrain (im Beispiel Sand) und Gegenstand (im Beispiel Strohhalm). Antworte mit "Start" wenn du das Experiment starten möchtest.' 


const messageLauraStart = "Du hast die Aufgabe gestartet! Klassifiziere jetzt bitte die ersten 5 Bilder 😊"
const messageBotStart = "Die Aufgabe ist gestartet. Bitte klassifiziere die Bilder."

const messageLauraProgressstart = "Du hast bereits "
const messageLauraProgressend = " geschafft!" 
const messageLauraProgres = "Klassifiziere jetzt bitte die nächsten 5 Bilder 😊"

const messageLauraNonProgress = "Diese Bilder wären geschafft!" + " Klassifiziere jetzt bitte die nächsten 5 Bilder 😊"

const messageLBotProgressstart = "Fortschritt: "
const messageLBotProgressend = " "
const messageLBotProgress = "Klassifiziere jetzt bitte die nächsten 5 Bilder."
const messageBotNonProgress = "Klassifiziere jetzt bitte die nächsten 5 Bilder."   


// Chatbot functions 
send.addEventListener("click", ()=> renderUserMessage());

txtinput.addEventListener("keyup", (event) => {
    if(event.keyCode === 13) {
        renderUserMessage();
    }
});

const renderUserMessage = () => {

    const userInput = txtinput.value ; 
    renderMessageEle(userInput, "user");
    txtinput.value = "";
  
    toggleLoading(false);
    setScrollPosition();
     
    setTimeout(() => {
        
        renderChatbotResponse(userInput)
        setScrollPosition();
        toggleLoading(true);
    }
    , 1200);
    
}

const renderMessageEle = (txt, type) => {
    let className = "user-message";
    if(type !== 'user') {
        className = "chatbot-message";
    }
    const messageEle = document.createElement("div");
    const txtNode = document.createTextNode(txt);
    messageEle.classList.add(className); 
    messageEle.append(txtNode); 
    chatBody.insertBefore(messageEle, loadingEle);

}



const renderProgressEle = (regularText1, boldText, regularText2, type) => {
    let className = "user-message";
    if(type !== 'user') {
        className = "chatbot-message";
    }
    const messageEle = document.createElement("div");
    let newElement = document.createElement("p");
    let regularTextNode1 = document.createTextNode(regularText1);
    let boldTextNode1 = document.createElement("strong");
    boldTextNode1.innerText = boldText;
    let regularTextNode2 = document.createTextNode(regularText2);

    newElement.appendChild(regularTextNode1);
    newElement.appendChild(boldTextNode1);
    newElement.appendChild(regularTextNode2);

    messageEle.classList.add(className); 
    messageEle.append(newElement); 
    chatBody.insertBefore(messageEle, loadingEle);

}

function renderHTMLEles(inputArray, type) {
    let className = "user-message";
    if(type !== 'user') {
        className = "chatbot-message";
    }
    const messageEle = document.createElement("div");
    let newElement = document.createElement("p");
    // Loop over array and append each elment
    for (const x of inputArray) {
        newElement.appendChild(x) }
    
    messageEle.classList.add(className); 
    messageEle.append(newElement); 
    chatBody.insertBefore(messageEle, loadingEle);
    
}

// chatbot answer
const renderChatbotResponse = (userInput) => {
    setBotProgress(userInput)
}


const setScrollPosition = () => {
    if(chatBody.scrollHeight > 0){
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

const toggleLoading = (show) => loadingEle.classList.toggle("hide", show)

function renderChatbotmessage(id) {
   
    toggleLoading(false);
    setScrollPosition();
    setTimeout(() => {   
        messagetree(id)
        setScrollPosition();
        toggleLoading(true);
    }
    , 800);
}

function renderNext() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "submit");
    x.setAttribute("form", "labelform");
    x.setAttribute("value", "Weiter");
    x.setAttribute("class", "chatbot-message");
    
    chatBody.insertBefore(x, loadingEle);

}


function messagetree(id) {
    menuMessages[id]()
}


var menuMessages = {};
menuMessages["TutorialHumanLike"] = tutorialHumanLike;
menuMessages["TutorialBot"] = tutorialBot;
menuMessages["HumanLikeStart"] = humanLikeStart;
menuMessages["BotStart"] = botStart;
menuMessages["ProgressHumanLike"] = progressHumanLike;
menuMessages["ProgressBot"] = progressBot; nonProgressHumanLike
menuMessages["NonProgressHumanLike"] = nonProgressHumanLike;
menuMessages["NonProgressBot"] = nonProgressBot;

// dialogflow functions

// guide
function tutorialHumanLike() {
    renderHTMLEles(startMessageArrayHL,"Bot");
    renderHTMLEles(startTutorialHL1Array, "Bot");
   
}

function tutorialBot() {
    renderHTMLEles(startTutorialnHL1Array, "Bot");
    
}

function humanLikeStart(){
    renderHTMLEles(startNotelHL1Array, "Bot");
    
 
}

function botStart(){
    renderHTMLEles(startNotelnHL1Array,"Bot");
    
}


// New messages depending on treatment

const messageMask = {
    "1": "Weiter gehts!😊 Klassifiziere jetzt die nächsten fünf Bilder bitte.",
    "11": "Ich habe mir deine Klassifizierung angeschaut und weitergeleitet. Mach jetzt bitte weiter. :)",
    "111" : "Klassifiziere jetzt die nächsten fünf Bilder bitte.😊", 
    "1111" : "Deine Ergebnisse sind bei mir angekommen für die nächsten 5 Bilder. Setzte jetzt bitte die Klassifikation fort."
  }



function progressHumanLike() {
    cookieStatus = readCookie("ExperimentCounter")
    n = cookieStatus.length * 5;
    progressString = n + "/25 Bilder";
    // custom Function als innerHTML
    renderProgressEle(messageLauraProgressstart,progressString,messageLauraProgressend ,"Bot")
    renderMessageEle(messageMask[cookieStatus],"Bot");

}


function progressBot() {

    cookieStatus = readCookie("ExperimentCounter");
    n = cookieStatus.length * 5;
    progressString = n + "/25 Bilder";
    renderProgressEle(messageLBotProgressstart, progressString, messageLBotProgressend, "Bot");
    renderMessageEle(messageLBotProgress,"Bot");
 
}

function nonProgressHumanLike() {
    cookieStatus = readCookie("ExperimentCounter");
    renderMessageEle(messageMask[cookieStatus],"Bot");
 
}

function nonProgressBot() {

    renderMessageEle(messageBotNonProgress,"Bot");
    

}

// progress monitoring

function progressMessage(treatmentHuman, treatmentProgress) {
    cookieStatus = readCookie("ExperimentCounter")
    if(cookieStatus == null) {
        if(treatmentHuman){
            renderChatbotmessage("HumanLikeStart")
        }
        else {
            renderChatbotmessage("BotStart")
        }
        // message 1 human like or bot
    }
    else {
         // progress messages 

        if(treatmentHuman && treatmentProgress) {
            renderChatbotmessage("ProgressHumanLike")
        }

        if(treatmentHuman === false && treatmentProgress) {
            renderChatbotmessage("ProgressBot")
        }

    // no progress messages
        if(treatmentHuman && treatmentProgress === false) {
        renderChatbotmessage("NonProgressHumanLike")
        }

        if(treatmentHuman === false && treatmentProgress === false) {
        renderChatbotmessage("NonProgressBot")
        }

    }
    
}
    
