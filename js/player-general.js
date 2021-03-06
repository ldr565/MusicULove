var previousStyle = undefined;

function makeTracklist(style, tracksCount)
{
    tracks[style].tracksCount = tracksCount;
	var divTagBegin = "<div";
	var divClass = " class=\"tracklist-row\" ";

	var divTagEnd = ">";
	var divClose = "</div>";
	for(var i = 1; i <= tracksCount; i++)
	{
		var divId = "id=" + "\"" + style + i + "\"";
		var divHandle = " onclick=\"playTrack("+"'"+style+"'"+","+i+")\"";
		var content = tracks[style][i].author + " - " + tracks[style][i].name;
		document.getElementById('tracklist-' + style).innerHTML += divTagBegin+divClass+divId+divHandle+divTagEnd+content+divClose;
	}
	document.getElementById('tracklist-'+style).style.display = 'block';
}

function hideAllStyles()
{
	document.getElementById("tracklist-Trance").style.display = 'none';
	document.getElementById("tracklist-House").style.display = 'none';
	document.getElementById("tracklist-Club").style.display = 'none';
	document.getElementById("tracklist-ChillOut").style.display = 'none';
	document.getElementById("tracklist-Ambient").style.display = 'none';
	document.getElementById("tracklist-Trap").style.display = 'none';
}

function showTracklist(style, tracksCount)
{
	if(style != previousStyle)
	{
			hideAllStyles();
		if(document.getElementById('tracklist-' + style).innerHTML == 0)
		{
			makeTracklist(style, tracksCount);
		}
		document.getElementById(style).className = " currentStyle ";
		
		if(previousStyle != undefined)
		{
			document.getElementById(previousStyle).className = "central-button";
		}
		else
		if(!(document.getElementById('play').style.display == 'none') && document.getElementById("style"+"1"))
		{
			playTrack(style,1);
			clickPause();
		}
		previousStyle = style;
		document.getElementById("tracklist-"+style).style.display = 'block';
	}
}

function clickPlay()
{
	document.getElementById('player-test').play();
	document.getElementById('play').style.display = 'none';
	document.getElementById('pause').style.display = 'block';
	document.getElementById('pause').clickPlayed = true;

}

function clickPause()
{
	document.getElementById('player-test').pause();
	document.getElementById('pause').style.display = 'none';
	document.getElementById('play').style.display = 'block';
	document.getElementById('pause').clickPlayed = false;
}

var ctrlKeyPushed = false;

function playerControl(e)
{
	keyCode = e.keyCode;
	var spacebar = 32;
	var left = 37;
	var right = 39;
	var up = 38;
	var down = 40;

    if(e.ctrlKey)
    {
        ctrlKeyPushed = !ctrlKeyPushed;
    }
    else if(keyCode == spacebar)
	{
		if(document.getElementById('play').style.display == 'none')
		{
			$("#pause").click();
		}
		else
		{
			$("#play").click();
		}
	}
	else if(keyCode == left)
	{
        if(ctrlKeyPushed)
        {
            changeTrackPrev();
            e.preventDefault();
            return;
        }
        else{
            document.getElementById('player-test').currentTime -= 15;
        }
	}
	else if(keyCode == right)
	{
        if(ctrlKeyPushed)
        {
            changeTrackNext();
            e.preventDefault();
            return;
        }
        else{
            document.getElementById('player-test').currentTime += 15;
        }
	}	
	else if(keyCode == up)
	{
		volumeUp();
	}
	else if(keyCode == down)
	{
		volumeDown();
	}
    e.preventDefault();
}

var tempFunction = playerControl;

function antiPlayerControl(keyCode)
{
	var spacebar = 32;
	var left = 37;
	var right = 39;

	if(keyCode == spacebar || keyCode == left || keyCode == right)
	{
		playerControl = 0;
	}
}

function antiPlayerControlOff()
{
	playerControl = tempFunction
}

function mDur()
{
	document.getElementById('dur').max = document.getElementById('player-test').duration;
}

function mPlay()
{
	currentTime = document.getElementById('player-test').currentTime;
	if(!rewind)
	document.getElementById('dur').value = currentTime;
	
	var minuts = currentTime/60 | 0;
	if(minuts < 10	)
	{
		minuts = "0" + minuts;
	} 

	var seconds = (currentTime - minuts * 60) | 0;
	if(seconds < 10)
	{
		seconds = "0" + seconds;
	} 
	
	document.getElementById('time').innerHTML = minuts + ":" + seconds;
	
}

function mSet()
{
	document.getElementById('player-test').currentTime = document.getElementById('dur').value;
}

var rewind = false;

function disconnectDuration()
{
	rewind = true;
}

function connectDuration()
{
	rewind = false;
}

function mute()
{
	document.getElementById('player-test').muted = true;
	document.getElementById('volumeLevel').className = "muted";
}

function unmute()
{
	document.getElementById('player-test').muted = false;
	document.getElementById('volumeLevel').className = "unmuted";
}

function mute_unmute()
{
	if(document.getElementById('player-test').muted)
	{
		unmute();
	}
	else
	{
		mute();
	}
}

function showVolume()
{
	volume = (document.getElementById('player-test').volume*100/1|0) +"%";
	document.getElementById("volumeLevel").innerHTML = volume;
	document.getElementById('vertical').value = document.getElementById('player-test').volume * 100;
}

var player = document.getElementById('player-test');
function changeVolume()
{
	document.getElementById('player-test').volume = document.getElementById('vertical').value/100;
	showVolume();
}

function setMediumVolume()
{
	document.getElementById('player-test').volume = .5;
}

function setDefaultPlayer()
{
	setMediumVolume();
	document.getElementById('dur').value = 0;
	    document.getElementById('background1').onclick = function() {
        changeBackground(1, "http://cs627426.vk.me/v627426258/17548/ehNHUijS6Kc.jpg");
    };
    document.getElementById('background2').onclick = function() {
        changeBackground(2,"http://cs627426.vk.me/v627426258/17552/3rzvtzjKUmU.jpg");
    };
    document.getElementById('background3').onclick = function() {
        changeBackground(3, "http://cs627426.vk.me/v627426258/1753e/RMaxELvDQBA.jpg");
    };
    $('#background1').click();
}

function volumeUp()
{
	if(document.getElementById('player-test').volume > 15/16)
	{
		document.getElementById('player-test').volume = 1;
	}
	else
	document.getElementById('player-test').volume += 1/16;
 	showVolume();
}

function volumeDown()
{
	if(document.getElementById('player-test').volume < 1/16)
	{
		document.getElementById('player-test').volume = 0;
	}
	else
	document.getElementById('player-test').volume -= 1/16;
 	showVolume();
}

var changeBackground = function(number, link){
    document.body.style.backgroundImage = "url("+link+")";
    for(var i = 1; i < 4; i++)
    {
        if(i==number){
            document.getElementById('background'+number).className +=  " currentBackground";
        }
        else{
            document.getElementById('background'+i).className = "footer-button";
        }
    }
}
