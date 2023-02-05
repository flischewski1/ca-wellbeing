
// Start, Next and End Relation 
const responseObj = {
    hello: "Hey ! How are you doing ?",
    
}

function changeButtonName() {
    let cookieStatus = readCookie("ExperimentCounter");
    if(cookieStatus === "1111") {
        document.getElementById("RecommendButton").textContent  = "Beenden"
    }else {
        document.getElementById("RecommendButton").textContent  = "Fertig"
    }
    
}

const setMessage = (input) => {

    const userInput = input; 
    renderMessageEle(userInput, "user");
    txtinput.value = "";
  
    toggleLoading(false);
    setScrollPosition();
     
    setTimeout(() => {
        
        renderChatbotResponse(userInput)
        setScrollPosition();
        toggleLoading(true);
    }
    , 600);
    
}

function setBotProgress(keyword){
    let cookieStatus = readCookie("ExperimentCounter")
    if (keyword === "Start"){
        renderMessageEle('Klicke Bitte "Weiter" um das Experiment zu starten', "Bot");
        renderNext()
    }

    if (keyword === "Fertig" && cookieStatus !=="1111" ) {
        renderMessageEle('Klicke Bitte "Weiter" um die nächsten fünf Bilder zu klassifizieren.', "Bot");
        renderNext()
    }   
    // Depends on progress
    if (keyword === "Fertig" && cookieStatus ==="1111" ) {
        renderMessageEle('Klicke Bitte "Weiter" um die Aufgabe abzuschließen.', "Bot");
        renderNext()
    }
    else {
        // What
    }
}



// Cookie Progress

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 *1000));
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return null;
}

//


function appendCookie(name, value) {
    cookieValue = JSON.stringify(value)
    cookieStatus = readCookie(name)
    if(cookieStatus == null) {
        createCookie(name,cookieValue,7)
    }
    else {
        createCookie(name,cookieValue,7)
    }
}

function getTrackingCookie(name) {
    value = readCookie(name)
    if(value === null){
        empty = {};
        return empty
    }
    else {
        valueJSON = JSON.parse(value);
        return valueJSON

    }
}


// Update Function for task progress 

const setCookie = () => {
    createCookie("ExperimentCounter",1,7)
}

const updateCookie = () => {
    cookieStatus = readCookie("ExperimentCounter")
    if(cookieStatus == null) {
        setCookie()
    }
    else {
        cookieStatus = readCookie("ExperimentCounter")
        newCookieValue = cookieStatus + 1 
        createCookie("ExperimentCounter",newCookieValue,7)
        console.log(readCookie("ExperimentCounter"))
    }
}


// Generate Link 