
// Start, Next and End Relation 

function changeButtonName() {
    let cookieStatus = readCookie("ExperimentCounter");
    if(cookieStatus === "1111") {
        document.getElementById("RecommendButton").innerHTML   = "&#x270D; Beenden"
    }else {
        document.getElementById("RecommendButton").innerHTML   = "&#x270D; Fertig"
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
    , 1200);
    
}


function showHide() {
    let x = document.getElementById("tutorial-div");
    x.style.display = "block";

  }

function setBotProgress(keyword){
    let cookieStatus = readCookie("ExperimentCounter")
    if (keyword.includes("Start") || keyword.includes("start")  ){
        showHide()
        // depends on group
        cookieGroup = readCookie("group")
        if(cookieGroup === "1" || cookieGroup === "2" ) { 
            
        renderHTMLEles(startTutorialHL2Array, "Bot")
        renderNext()
        return null

        }
        if(cookieGroup === "3" || cookieGroup === "4" ) {
            renderHTMLEles(startTutorialnHL2Array, "Bot");
            
            renderNext()
        return null

        }

        
    }

    if ((keyword.includes("Fertig") || keyword.includes("fertig"))  && cookieStatus !=="1111" ) {
        renderMessageEle('Klicke Bitte "Weiter" um die nächsten fünf Bilder zu klassifizieren.', "Bot");
        renderNext()
        return null
    }   
    // Depends on progress
    if (keyword.includes("Fertig") || keyword.includes("fertig") && cookieStatus ==="1111" ) {
        renderMessageEle('Klicke Bitte "Weiter" um die Aufgabe abzuschließen.', "Bot");
        renderNext()
        return null
    }
    else {
        renderMessageEle('Ich habe deine Nachricht leider nicht verstanden. Bitte nutze eine vorgeschlagene Antwortmöglichkeit.', "Bot");
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