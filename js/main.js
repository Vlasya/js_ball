
var text=document.querySelector("p");
// console.log(text);
var phrases=[
	"Нет",
	"Да",
	"Возможно",
	"Не сегодня"
]

var random = () => phrases[Math.floor(Math.random() * 4)];
console.log(random);
document.querySelector("#button").addEventListener('click',function () {
	text.innerHTML=random();
});

