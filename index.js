//base values are here...
let will_google_meet_mic = false;
let will_google_meet_video = false;

// for microsoft teams
let will_microsoft_teams_mic = false;
let will_microsoft_teams_video = false;

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    console.log(msg);

    will_google_meet_mic = msg.meet_mic;
    will_google_meet_video = msg.meet_video;
    will_microsoft_teams_mic = msg.teams_mic;
    will_microsoft_teams_video = msg.teams_video;

    // response('wufsnk')
    // if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
    //    // Collect the necessary data. 
    //    // (For your specific requirements `document.querySelectorAll(...)`
    //    //  should be equivalent to jquery's `$(...)`.)
    //    var domInfo = {
    //       total: document.querySelectorAll('*').length,
    //       inputs: document.querySelectorAll('input').length,
    //       buttons: document.querySelectorAll('button').length,
    //    };
 
    //    // Directly respond to the sender (popup), 
    //    // through the specified callback.
    //    response(domInfo);
    // }
 });

 // for google meet..//////------------------------------------------------
var checkExist_google_mic = setInterval(function() {
    if (document.querySelector('#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.AVk6L.gwmyUe > div > div > span > button') !== undefined && document.querySelector('#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.AVk6L.gwmyUe > div > div > span > button') !== null) {
       console.log("google meet mic Exists!");

       

       if(document.querySelector('#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.AVk6L.gwmyUe > div > div > span > button').attributes[11].value == 'false'){
        document.querySelector('#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.AVk6L.gwmyUe > div > div > span > button').click()
       }
       clearInterval(checkExist_google_mic);
        document.querySelector('#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.AVk6L.gwmyUe > div > div > span > button').addEventListener('click', ()=>{
            
            console.log('mic is', document.querySelector('#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.AVk6L.gwmyUe > div > div > span > button').attributes[11].value)
            if(document.querySelector('#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.AVk6L.gwmyUe > div > div > span > button').attributes[11].value !== 'false' && will_google_meet_mic){
                
                    document.querySelector('#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.AVk6L.gwmyUe > div > div > span > button').click()
             
            }
        })
    }
 }, 500);

 var checkExist_google_video = setInterval(function() {
    if (document.querySelector('#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.CrGlle.dq8L2c > div > span > button') !== undefined && document.querySelector('#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.CrGlle.dq8L2c > div > span > button') !== null) {
       console.log("google meet video Exists!");
       if(document.querySelector('#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.CrGlle.dq8L2c > div > span > button').attributes[11].value == 'false'){
        document.querySelector('#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.CrGlle.dq8L2c > div > span > button').click()
       }
       clearInterval(checkExist_google_video);
        document.querySelector('#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.CrGlle.dq8L2c > div > span > button').addEventListener('click', ()=>{
            console.log('video is', document.querySelector('#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.CrGlle.dq8L2c > div > span > button').attributes[11].value)
            if(document.querySelector('#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.CrGlle.dq8L2c > div > span > button').attributes[11].value !== 'false' && will_google_meet_video){         
                document.querySelector('#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.CrGlle.dq8L2c > div > span > button').click()  
            }
        })
    }
 }, 500);




 // for microsoft teams..//////------------------------------------------------
 var checkExist_teams_mic = setInterval(function() {
    if (document.querySelector('#microphone-button') !== null && document.querySelector('#microphone-button') !== undefined) {
       console.log("teams mic Exists!");
       if(document.querySelector('#microphone-button').attributes[14].value !== 'Unmute'){
            document.querySelector('#microphone-button').click();
        }
       clearInterval(checkExist_teams_mic);
       document.querySelector('#microphone-button').addEventListener('click', ()=>{
            console.log('mic is not', document.querySelector('#microphone-button').attributes[14].value)
            if(document.querySelector('#microphone-button').attributes[14].value !== 'Mute' && will_microsoft_teams_mic){         
                setTimeout(()=>{
                    document.querySelector('#microphone-button').click();
                    console.log('tried to mute the mic') 
                }, 50)
            }
        })
    }
 }, 500);


 var checkExist_teams_video = setInterval(function() {
    if (document.querySelector('#video-button') !== null && document.querySelector('#video-button') !== undefined) {
       console.log("teams video Exists!");
       
       if(document.querySelector('#video-button').attributes[14].value !== 'Turn camera on'){
            document.querySelector('#video-button').click();
        }
       clearInterval(checkExist_teams_video);
       document.querySelector('#video-button').addEventListener('click', ()=>{
            console.log('video is not', document.querySelector('#video-button').attributes[14].value)
            if(document.querySelector('#video-button').attributes[14].value !== 'Turn camera off' && will_microsoft_teams_video){         
                setTimeout(()=>{
                    document.querySelector('#video-button').click();
                    console.log('tried to turn off the video source') 
                    
                }, 70)
            }
        })
    }
 }, 500);

 // window.onload = function(){
//   $('.spinner-grow').delay('300')
//     .css({'transition':'ease-out','display':'none'});
// }


  

  
  