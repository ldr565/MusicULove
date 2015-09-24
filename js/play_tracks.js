var previousTrackNumber = 0;
var previousTrackStyle;
	
function cutString(div)
{
	var maxStringLength = 350;
	var rowHeight = 23;
	if(div.offsetWidth > maxStringLength || div.offsetHeight > rowHeight)
	{
		var cuttedString = div.innerHTML;
		while(div.offsetWidth > maxStringLength || div.offsetHeight > rowHeight)
		{
			cuttedString = cuttedString.slice(0,cuttedString.length-1);
			div.innerHTML = cuttedString + "...";
		}
	}
}
	
var playTrack = function(style, i)
{
	if(previousTrackNumber != i || previousTrackStyle != style)
	{		
 		var srs = style + " " + "(" + i +")" + ".mp3";
 		var connectTrack = "<source src = \"" + srs + "\"/>";
 		document.getElementById("player-test").innerHTML = connectTrack;
		document.getElementById("player-test").load();
		
		if(previousTrackNumber != 0)
		{
			previousTrackId = previousTrackStyle + previousTrackNumber;
			document.getElementById(previousTrackId).className = "tracklist-row";
		}
		
		document.getElementById("author-text").innerHTML = tracks[style][i].author;
		cutString(document.getElementById("author-text"));
		
		document.getElementById("name-text").innerHTML = tracks[style][i].name;
		document.getElementById("name-text").style.float = "right";
		cutString(document.getElementById("name-text"));
		document.getElementById("name-text").style.float = "left";
	
		document.getElementById("dash").style.display = "inline";
		
		currentTrackId = style + i;
		document.getElementById(currentTrackId).className += " played";
		
		previousTrackNumber = i;
		previousTrackStyle = style;
	
		$("#play").click();
	}
}

function changeTrackNext()
{
    if(previousTrackNumber < tracks[previousTrackStyle].tracksCount)
    {
        playTrack(previousTrackStyle, previousTrackNumber + 1);
    }
    else
    {
        playTrack(previousTrackStyle, 1);
    }
}

function changeTrackPrev()
{
    if(previousTrackNumber > 1)
    {
        playTrack(previousTrackStyle, previousTrackNumber - 1);
    }
    else
    {
        playTrack(previousTrackStyle, tracks[previousTrackStyle].tracksCount);
    }
}