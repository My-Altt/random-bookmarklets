(function() {
    var audio = new Audio('https://my-altt.github.io/new-tabs/new-tab-1/oh_yea.mp4');
    audio.addEventListener('canplay', () =>{
        audio.play();
    });
})();
