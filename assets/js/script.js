window.onload = function () {
  //функции при запуске страницы
  textPupSimple()
  titleArr()
  // newUser()
  // getColorInput()
  // // получение и разграничение поисковика(первый поисковик при запуске)
  // localStorage.getItem("searchInfo")
  // searchSystem = localStorage.getItem("searchInfo");
  // if (localStorage.getItem("searchInfo")==null){
  //  searchSystem = null
  // }else{searchSystem = localStorage.getItem("searchInfo");}

  // //приветствие для новых пользователей
  
}



function titleArr(){
	// let titleChars = ["Лучший поисковик в мире | Yandrex", "Yandrex сила!", "Поисковик поисковиков | Yandrex", "Найдется даже Атлантида | Yandrex","Яндрекс поиск", "Yandrex"];
	// let textT = titleChars[ Math.floor(Math.random() * titleChars.length)];
	// document.title = textT
    var arr = ["ЛУЧШИЕ ПЕЧКИ В ГОРОДЕ", "Печки мира", "Ищешь печи?", "У нас они есть!", "Миллион на складе", "Любая на выбор!","Самые крутые печи","Не купил печку?", "-пожалел"," Печи-тут" ];
		function Looper(){
			for (let i = 0; i <= arr.length; i++){
			setTimeout( function timer(){
				document.title = arr[i]
				if(i === arr.length){
					document.title = ""
					Looper();}}, i*3000 );
			}
		}
		Looper();
}

window.addEventListener("load", function() {
  var f = document.getElementById('textPup');
  setInterval(function() {
      f.style.color = (f.style.color == 'red' ? '' : 'red');
  }, 800);

}, false);



// function textPupSimple(){
// var arr = ["С","В","Я","З","А","Т","Ь","С","Я","!"];
// let elem = document.getElementById("textPup");
// function textTitle(){
//   for (let i = 0; i <= arr.length; i++){
//   setTimeout( function timer(){
//     elem.textContent += arr[i]
//     if(i === arr.length){
//        elem.textContent = "СВЯЗАТЬСЯ"
//        textTitle();}}, i*500 );
//     }
// }
// textTitle()
// }