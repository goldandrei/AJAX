var ajaxRequest = new XMLHttpRequest();

function getWelcome(){
    ajaxRequest.onreadystatechange =function(){
        console.log("ready state changed!")
        if(ajaxRequest.readyState == 1){
            console.log("Established server connection.");
        }
        else if(ajaxRequest.readyState == 2){
            console.log("Request received by server.");
        }
        else if(ajaxRequest.readyState == 3){
            console.log("Processing request.");
        }
        else if(ajaxRequest.readyState == 4){
            console.log("Done loading!");
        }
        else{
            console.log("Something went wrong. :(");
        }
        if(ajaxRequest.readyState==4){
            if(ajaxRequest.status ==200){
                console.log("file is OK");
                var jsonObj = JSON.parse(ajaxRequest.responseText);
                var randomMessagesArray  = jsonObj.randomMessages;
                var randomIndex = Math.floor(Math.random()*randomMessagesArray.length);
                var messageObj = randomMessagesArray[randomIndex];
                document.getElementById("welcome").innerHTML=messageObj.message;
                document.getElementById("welcome").style.color = messageObj.color;
            }
            else{
                console.log("Status error:" + ajaxRequest.status);
            }
        }
        else{
            console.log("Ignored readyState: " + ajaxRequest.readyState);
        }
    }
    ajaxRequest.open("GET","https://happycoding.io/tutorials/javascript/example-ajax-files/random-welcomes.json",true);
    ajaxRequest.send();
}
