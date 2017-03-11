'use scrict';

var script = document.createElement('script');
script.textContent = `
    var currentVideoUrl = '';
    var newVideoUrl = '';

    function onStateChange(event) {
        if(event === 1){
            newVideoUrl = _player.getVideoUrl();
            if(newVideoUrl !== currentVideoUrl){
                changeVideoQuality(_player);
            }
        }
    }

    function changeVideoQuality(player){
        var availableQualities = player.getAvailableQualityLevels();
        if (availableQualities.indexOf('hd1080') != -1) {
            player.setPlaybackQuality('hd1080');
        }
        else if (availableQualities.indexOf('hd720') != -1) {
            player.setPlaybackQuality('hd720');
        }
        else {
        }
    }

    var _player = document.getElementById('movie_player');
    if(_player){
        _player.addEventListener('onStateChange', onStateChange);
        currentVideoUrl = _player.getVideoUrl();
        changeVideoQuality(_player);
    }
`;

document.documentElement.appendChild(script);