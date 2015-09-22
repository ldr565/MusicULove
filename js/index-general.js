function headerClearField() 
{
	if(document.getElementById('newPostHeader').value == "Header")
	{
		document.getElementById('newPostHeader').value = "";
	}
}

function headerDefaultField()
{
	if(isEmpty(document.getElementById('newPostHeader').value))
	{
		document.getElementById('newPostHeader').value = "Header";
	}
}

function textClearField() 
{
	if(document.getElementById('newPostText').value == "Write here your post")
	{
		document.getElementById('newPostText').value = "";
	}
}

function textDefaultField()
{
	if(isEmpty(document.getElementById('newPostText').value))
	{
		document.getElementById('newPostText').value = "Write here your post";
	}
}

function isEmpty(string)
{
	var emptyString = "";
	for(var i = 0; i < string.length; i++)
	{
		emptyString += " ";
	}

	if(string == emptyString || string =="Write here your post" || string =="Header")
	{
		return true;
	}
	else
	{
		return false;
	}
}


function addNewPost()
{
	var text = document.getElementById('newPostText').value;
	var header = document.getElementById('newPostHeader').value;
	if(!isEmpty(text) && !isEmpty(header))
	{

		var news = document.getElementById('news');
		var newsContent = news.innerHTML;
		var time = '<span class="date">' + Date() + '</span>';
		var header = '<span class="postHeader">' + header + '</span>';
		var text = document.getElementById('newPostText').value;

		var post = '<div class = "post">';
		post += time + '<br>';
		post += header + '<br>'
		post += text + '</div>';
		news.innerHTML = post + newsContent;

		document.getElementById('newPostText').value = "";
		document.getElementById('newPostHeader').value = "";

	}
}

function addNewPostByKey(e)
{
	if(e.keyCode == 13)
	addNewPost();
}