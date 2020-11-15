let cards = document.querySelectorAll(".card");


// menu
let iconMenu = document.querySelector(".icon-menu");
let aside = document.querySelector(".aside");
let body = document.querySelector("body");
if (iconMenu != null) {
	iconMenu.addEventListener("click", function (e) {
		aside.classList.toggle("active");   
      iconMenu.classList.toggle("active");
      body.classList.toggle("active");
	});
};

//  показать ещё карточки
let hiddenCards = document.querySelectorAll(".card-hidden");
let showCardsBtn = document.querySelector(".main__show-more");


showCardsBtn.addEventListener('click', (e) => {
   hiddenCards.forEach(el => {
      el.classList.toggle("card-hidden");
   })
   if (hiddenCards[0] && !hiddenCards[0].classList.contains("card-hidden")){
      e.target.innerHTML = "Скрыть";
   } else {
      e.target.innerHTML = "Показать ещё";
   }
})

//  показать ещё  дополнительные опции
let hiddenOptions = document.querySelectorAll(".checkbox-hidden");
let showOptionsBtn = document.querySelector(".widget__show-more");

showOptionsBtn.addEventListener('click', (e) => {
   hiddenOptions.forEach(el => {
      el.classList.toggle("checkbox-hidden");
   })
   if (hiddenOptions[0] && !hiddenOptions[0].classList.contains("checkbox-hidden")){
      e.target.innerHTML = "Скрыть";
   } else {
      e.target.innerHTML = "Показать ещё";
   }
})

// Близость к метро
let btns = document.querySelectorAll(".widget__btn");
let btnAll = document.querySelector(".widget__btn-all");
btns.forEach(el => {
   el.addEventListener("click", (e) => {
      e.preventDefault()
      if (!el.classList.contains("widget__btn-all")){
        btnAll.classList.remove("active");
      } else {
         document.querySelectorAll(".widget__btn.active").forEach(el => {
            if (!el.classList.contains("widget__btn-all")){
               el.classList.remove("active");            
            }
         })
      }
      el.classList.toggle("active");
   })
})


//  преключение услуг
let services = document.querySelectorAll(".widget__services");
services.forEach(el => {
   el.addEventListener("click", (e) => {
      e.preventDefault()
      el.classList.toggle("active");
   })
})

// submit
document.querySelector(".widget__btn-submit").addEventListener("click", (e) => {
   e.preventDefault();
})

// reset
document.querySelector(".widget__btn-reset").addEventListener("click", () => {
   cards.forEach(el => {
      el.classList.remove("hidden");
   })
   services.forEach(el => {
      if (el.classList.contains("active")){
         el.classList.remove("active");
      }
   })
   btns.forEach(el => {
      if (el.classList.contains("active")){
         el.classList.remove("active");
      }
   })
})

//  скрытие и открытие элементов
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 400) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 400) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}


let titles = document.querySelectorAll(".widget__title");
titles.forEach(el => {
   el.addEventListener('click', (e) => {
      el.classList.toggle("reverse");
      _slideToggle(el.parentElement.querySelector(".widget__body"))
   })
})
