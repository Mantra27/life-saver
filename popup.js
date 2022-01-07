let addr;

    chrome.storage.sync.get(['key'], function(result) {
      console.log(result.key);

      document.getElementById('teams_mic').checked = result.key.teams_mic;
      document.getElementById('teams_video').checked = result.key.teams_video;
      document.getElementById('meet_mic').checked = result.key.meet_mic;
      document.getElementById('meet_video').checked = result.key.meet_video;

    });

       chrome.tabs.query({
          active: true,
          currentWindow: true
       }, tabs => {
          addr = tabs[0].id;

          chrome.tabs.sendMessage(addr, {
            teams_mic: document.getElementById('teams_mic').checked,
            teams_video: document.getElementById('teams_video').checked,
            meet_mic: document.getElementById('meet_mic').checked,
            meet_video: document.getElementById('meet_video').checked
            });
            
          chrome.storage.sync.get(['key'], function(result) {
            console.log(result.key);
      
            document.getElementById('teams_mic').checked = result.key.teams_mic;
            document.getElementById('teams_video').checked = result.key.teams_video;
            document.getElementById('meet_mic').checked = result.key.meet.mic;
            document.getElementById('meet_video').checked = result.key.meet_video;
      
          });
       });

       chrome.runtime.sendMessage({message: 'amigoismyfriend'})
    
            document.getElementById("muteall").addEventListener('click', ()=>{
                document.getElementById('teams_mic').checked = true;
                document.getElementById('teams_video').checked = true;
                document.getElementById('meet_mic').checked = true;
                document.getElementById('meet_video').checked = true;
            })
            document.addEventListener('click', ()=>{
              chrome.tabs.sendMessage(addr, {
                teams_mic: document.getElementById('teams_mic').checked,
                teams_video: document.getElementById('teams_video').checked,
                meet_mic: document.getElementById('meet_mic').checked,
                meet_video: document.getElementById('meet_video').checked
                });

                chrome.storage.sync.set({key: {

                teams_mic: document.getElementById('teams_mic').checked,
                teams_video: document.getElementById('teams_video').checked,
                meet_mic: document.getElementById('meet_mic').checked,
                meet_video: document.getElementById('meet_video').checked

                }}, function() {
                  console.log('Value is set to ' + {
                teams_mic: document.getElementById('teams_mic').checked,
                teams_video: document.getElementById('teams_video').checked,
                meet_mic: document.getElementById('meet_mic').checked,
                meet_video: document.getElementById('meet_video').checked
                  });
                });
            })