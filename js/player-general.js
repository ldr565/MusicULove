var previousStyle = undefined;

function makeTracklist(style, tracksCount)
{
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

function playerControl(e)
{
	keyCode = e.keyCode;
	var spacebar = 32;
	var left = 37;
	var right = 39;
	var up = 38;
	var down = 40;

	if(keyCode == spacebar)
	{
		if(document.getElementById('play').style.display == 'none')
		{
			$("#pause").click();
		}
		else
		{
			$("#play").click();
		}
		e.preventDefault(); 
	}
	else if(keyCode == left)
	{
		document.getElementById('player-test').currentTime -= 15;
        e.preventDefault();
	}
	else if(keyCode == right)
	{
		document.getElementById('player-test').currentTime += 15;
        e.preventDefault();
	}	
	else if(keyCode == up)
	{
		volumeUp();
		e.preventDefault(); 
	}
	else if(keyCode == down)
	{
		volumeDown();
		e.preventDefault(); 
	}
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

/*
function continuePlaying(keyCode)
{
	var left = 37;
	var right = 39;

	if((keyCode == left || keyCode == right) && document.getElementById('pause').clickPlayed)
	{
		document.getElementById('player-test').play();
	}
}
*/

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