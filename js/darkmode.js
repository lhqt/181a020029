const list = document.querySelectorAll('.đang');
	function kichHoat(){
		list.forEach((item) =>
		item.classList.remove('✔️'));
		this.classList.add('✔️');
	}
	list.forEach((item) =>
	item.addEventListener('click',kichHoat));

let DarkMode = document.querySelector('.DarkMode');
	let body = document.querySelector('body')
	DarkMode.onclick = function(){
		body.classList.toggle('dark')
	}

let NútMenu = document.querySelector('.NútMenu');
	NútMenu.onclick = function(){
		const TrạngThái = ListMenu.getAttribute("TrạngThái");
		if (TrạngThái === "ẩn"){
			ListMenu.setAttribute("TrạngThái", "hiện");
			X.setAttribute("class", "fa-solid fa-xmark");}
		else{
			ListMenu.setAttribute("TrạngThái", "ẩn");
			X.setAttribute("class", "fa-solid fa-bars");}
	}
