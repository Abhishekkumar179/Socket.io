const so = io();
const socket =io("http://localhost:8000/")
      var sock = null;
      var flag1=false;
      function GetSetSocket(id) {
          this.sock =  socket.open();
          this.sock.onopen = function() {
            flag1=true;
             console.log("connected! "+flag1);
            console.log(sock["url"]);
            if(!id){
              alert("id not set"+id);
              // return;
            }
            registerSend(id);
            };
      }
      class TelemoChatApi{
        constructor(userId,opts){
          this.usrId=userId;
          this.opts=opts;
        }
        static StartSocket(api){
         
          sock=GetSetSocket(api.usrId);
          // alert("telechat "+api.usrId);
          api.opts["chatContainer"].setAttribute("name",api.usrId);
          //api.opts["chatContainer"].children[0].innerHTML=api.opts["chatName"];
          api.opts["chatContainer"].style.width=api.opts["width"];
          api.opts["chatContainer"].style.height=api.opts["height"];
          var us=document.querySelectorAll(".sd-name");
          for (var i = 0; i < us.length; i++) {
            us[i].children[0].style.backgroundColor="darkgrey";
          }
          if(api.usrId=="moin"){
            api.opts["chatContainer"].children[0].children[0].children[1].setAttribute("href","javascript:register_popup('mukesh','mukesh');");
            api.opts["chatContainer"].children[0].children[0].children[1].children[0].textContent="mukesh";
            api.opts["chatContainer"].children[0].children[0].children[1].children[0].setAttribute("name","mukesh");
            api.opts["chatContainer"].children[0].children[1].children[1].setAttribute("href","javascript:register_popup('umesh','umesh');");
            api.opts["chatContainer"].children[0].children[1].children[1].children[0].textContent="umesh";
            api.opts["chatContainer"].children[0].children[1].children[1].children[0].setAttribute("name","umesh");
          }else if(api.usrId=="umesh"){
            api.opts["chatContainer"].children[0].children[0].children[1].setAttribute("href","javascript:register_popup('moin','moin');");
            api.opts["chatContainer"].children[0].children[0].children[1].children[0].textContent="moin";
            api.opts["chatContainer"].children[0].children[0].children[1].children[0].setAttribute("name","moin");
            api.opts["chatContainer"].children[0].children[1].children[1].setAttribute("href","javascript:register_popup('mukesh','mukesh');");
            api.opts["chatContainer"].children[0].children[1].children[1].children[0].textContent="mukesh";
            api.opts["chatContainer"].children[0].children[1].children[1].children[0].setAttribute("name","mukesh");
          }else if(api.usrId=="mukesh"){
            api.opts["chatContainer"].children[0].children[0].children[1].setAttribute("href","javascript:register_popup('moin','moin');");
            api.opts["chatContainer"].children[0].children[0].children[1].children[0].textContent="moin";
            api.opts["chatContainer"].children[0].children[0].children[1].children[0].setAttribute("name","moin");
            api.opts["chatContainer"].children[0].children[1].children[1].setAttribute("href","javascript:register_popup('umesh','umesh');");
            api.opts["chatContainer"].children[0].children[1].children[1].children[0].textContent="umesh";
            api.opts["chatContainer"].children[0].children[1].children[1].children[0].setAttribute("name","umesh");
          }
        }
      };
