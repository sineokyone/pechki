window.onload = function () {
  //функции при запуске страницы
  // getBackground()
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
