var btn = document.querySelector("button.msg_send_btn");
var enter = document.querySelector("input.write_msg");
var affichage = document.getElementsByClassName("msg_history")[0];
var listMessages = new Array();

btn.addEventListener("click",send);
enter.addEventListener("keyup",function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        send();
    }
});


function send(){
    var message;
    var messageOrdi;
    var me = document.getElementsByTagName('input')[0];
    var myMessage = me.value;

    message = myContenu(myMessage);
    listMessages.push(message);

   // var debut = ["bonjour", "salut", "comment vas-tu ?", "comment ?", "comment vas-tu", "comment vas-tu?","comment", "comment vas tu?", "comment vas-tu ?", "comment tu vas?","comment tu vas ?"];
    var debut = ["bonjour", "salut"];
    var aleaDebut = Math.round(Math.random() * (debut.length - 1));
    var reponseDebut = ["bonjour","Salut"];

    if(debut.indexOf(myMessage) == -1){
        message = ordiContenu('Veuillez débuter la conversation par une salutation !');
    }
    else{
        messageOrdi = "Bonjour";
        message = ordiContenu(messageOrdi);
    }

    listMessages.push(message);
    write_msg();

     me.value = "";
}

function write_msg(){
    var contenu="";
    var tailleTableau = listMessages.length;            
        
    for(var i = 0; i < tailleTableau; i++) {
        
        contenu += '<div>';
        contenu += listMessages[i];
        contenu += '</div>';
    }

    affichage.innerHTML = contenu;
}

function myContenu(content){
    var message;
     message = '<div class="incoming_msg">';
            message += '<div class="received_msg">';
                message += '<div class="received_withd_msg">';
                    message += '<p>'+content+'</p>';
                    message += '<span class="user">Moi</span>';
                message += '</div>';
            message += '</div>';
        message += '</div>';

    return message;
}

function ordiContenu(content){
    var message;
    var message = '<div class="message">';
            message += '<div class="outgoing_msg">';
                message += '<div class="sent_msg">';
                    message += '<p>'+content+'</p>';
                    message += '<span class="user">Ordi</span>';
                message += '</div>';
            message += '</div>';
        message += '</div>';

    return message;
}