var tracks = {
'Trance': [],
'House':[],
'Club':[],
'ChillOut':[],
'Ambient':[],
'Trap':[]
};

jQuery.each(tracks, function(i, val) {
	for(var j = 1; j < 5; j++)
	{	
		tracks[i][j]=
		{
			"author": "author", 
			"name": "name"
		};
	}
});

var trance = tracks['Trance'];
var house = tracks['House'];
var club = tracks['Club'];
var chillOut = tracks['ChillOut'];
var ambient = tracks['Ambient'];
var trap = tracks['Trap'];

trance[1].author = "Clams Casino";
trance[1].name = "I'm God";
trance[2].author = "VillaNaranjos";
trance[2].name = "Granadella (Original Mix)";
trance[3].author = "Eco";
trance[3].name = "The Light In Your Eyes Went Out";
trance[4].author = "Rafael Frost";
trance[4].name = "Channel 4 (Original Mix)";

house[1].author = "Leghau";
house[1].name = "Karma ";

club[1].author = "author";
club[1].name = "name";

/*
chillOut[1].author = "author";
chillOut[1].name = "name";

ambient[1].author = " Midal E Garda";
ambient[1].name = "...и все!";


trap[1].author = "السوريين";
trap[1].name = "سلس";
*/

