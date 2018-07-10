function validate() {
var username=document.getElementById("login").value;
var pass=document.getElementById("pass").value;
var confirm=document.getElementById("confirm").value;
var mail=document.getElementById("mail").value;
var errors="";
if (username=="" || pass=="" || confirm=="" || mail=="")
{
alert("Все поля должны быть заполнены!!");
return false;
}

if (pass!=confirm)
{
errors+="Пароли не совпадают!!\n";
}

if (pass.length<6)
{
errors+="Слишком короткий пароль!!\n";
}
var reg = /^\w+@\w+\.\w{2,11}$/i;
if (!reg.test(mail))
{
errors+="Неправильный e-mail адрес!!\n";
}
 
if(errors=="")
return true;
else
{
alert(errors);
return false;
}
}
