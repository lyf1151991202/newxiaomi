/*
* @Author: Administrator
* @Date:   2018-09-09 20:59:50
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-12 13:30:27
*/
window.onload = function(){
	// 购物车效果
	let shoppingCart = document.querySelector(".shoppingCart");
	let shoppingCartDiv = document.querySelector(".shoppingCart div");
	shoppingCart.onmouseover = function(){
		shoppingCart.style.background = "#fff";
		shoppingCartDiv.style.height = "100px";
		shoppingCartDiv.innerHTML = "购物车中还没有商品，赶紧选购吧！";
		shoppingCartDiv.style.lineHeight = "100px";
		shoppingCartDiv.style.transition ="all .3s";
		shoppingCartDiv.style.color = "#999999";
	}
	shoppingCart.onmouseout = function(){
		shoppingCart.style.background = "#424242";
		shoppingCartDiv.style.height = "0";
		shoppingCartDiv.innerHTML = "";
		shoppingCartDiv.style.lineHeight = "0";
	}
	// 导航二级页面
	let navSon = document.querySelectorAll(".navSon");
	let navSonA = document.querySelectorAll(".navSonA");
	let second = document.querySelectorAll(".second");
	let tow = document.querySelector(".tow");
	for(let i=0;i<navSon.length;i++){
		navSon[i].onmouseover = function(){
			for(let j=0;j<second.length;j++){
				// second[j].style.display = "none";
				second[j].style.height = 0;
				tow.style.height = 0;
			}
			navSonA[i].style.color = "#ff6700";
			// second[i].style.display = "block";
			second[i].style.height = "230px";
			tow.style.borderTop = "1px solid #B0B0B0";
			tow.style.height = "230px";
		}
		navSon[i].onmouseout = function(){
			navSonA[i].style.color = "#333333";
			// second[i].style.display = "none";
			tow.style.borderTop = "none";
			second[i].style.height = 0;
			tow.style.height = 0;
		}
	}

	// demo选项卡
	let topNavList = document.querySelectorAll(".top_right>li");
	let topNavListA = document.querySelectorAll(".top_right>li>a");
	let bottom_right = document.querySelectorAll(".bottom_right");
	for(let i=0;i<topNavList.length;i++){
		topNavList[i].onmouseover = function(){
			for(let j=0;j<topNavListA.length;j++){
				topNavListA[j].style.color = "#424242";
				topNavListA[j].style.borderBottom = "none";
			}
			for(let k=0;k<bottom_right.length;k++){
				bottom_right[k].style.display = "none";
			}
			topNavListA[i].style.color = "#ff6700";
			topNavListA[i].style.borderBottom = "2px solid #ff6700";
			bottom_right[i].style.display = "block";
		}
	}

	// banner二级页面
	let menuList = document.querySelectorAll(".menuListA");
	let secondaryPage = document.querySelectorAll(".secondaryPage");
	for(let i=0;i<secondaryPage.length;i++){
		menuList[i].onmouseover = function(){
			for(let j=0;j<secondaryPage.length;j++){
				secondaryPage[j].style.display = "none";
			}
			secondaryPage[i].style.display = "block";
		}
		menuList[i].onmouseout = function(){
			secondaryPage[i].style.display = "none";
		}
	}

	// 轮播图效果 
	let t;
	let num=0;
	let banner = document.querySelector(".banner");
	let imgboxList = document.querySelectorAll(".imgbox li");
	let circle = document.querySelectorAll(".circle li");
	let bannerGo = document.querySelector(".bannerGo");
	let bannerBack = document.querySelector(".bannerBack");

	let flag = true;


	imgboxList[0].style.opacity = 1;
	circle[0].style.background = "#fff";
	for(let i=0;i<imgboxList.length;i++){
		circle[i].onmouseover = function(){
			for(let j=0;j<imgboxList.length;j++){
				imgboxList[j].style.opacity = 0;
				circle[j].style.background = "rgba(0, 0, 0, 0.6)";
			}
			imgboxList[i].style.opacity = 1;
			circle[i].style.background = "#fff";
		}
		num = i;
	}

	t = setInterval(move,3000);
	function move(){
		num++;
		if(num == imgboxList.length){
			num = 0;
		}
		for(let j=0;j<imgboxList.length;j++){
				imgboxList[j].style.opacity = 0;
				circle[j].style.background = "rgba(0, 0, 0, 0.6)";
			}
		imgboxList[num].style.opacity = 1;
		circle[num].style.background = "#fff";
		flag = true;
	}

	banner.onmouseover = function(){
		clearInterval(t);
	}
	banner.onmouseout = function(){
		t = setInterval(move,3000);
	}
	bannerGo.onclick = function(){
		if(!flag){
			return;
		}
		flag = false;
		move();
		console.log(flag);
	}
	function moveL(){
		num--;
		if(num < 0){
			num = imgboxList.length-1;
		}
		for(let j=0;j<imgboxList.length;j++){
				imgboxList[j].style.opacity = 0;
				circle[j].style.background = "rgba(0, 0, 0, 0.6)";
			}
		imgboxList[num].style.opacity = 1;
		circle[num].style.background = "#fff";
		flag = true;

	}
	bannerBack.onclick = function(){
		if(!flag){
			return;
		}
		flag = false;
		moveL();
		console.log(flag);
	}
	window.onblur = function(){
		clearInterval(t);
	}
	window.focus = function(){
		setInterval(move,3000);
	}
	// 书籍轮播图
	
	let contentbanner = document.querySelector(".contentBanner");
	let contentdots = document.querySelectorAll(".contentBanner .contentCircleSon");
	let contentimgs = document.querySelectorAll(".contentBanner .item-list");
	let contentleftBtn = document.querySelector(".contentBanner .contentleft");
	let contentrightBtn = document.querySelector(".contentBanner .contentright");
	let widths = parseInt(getComputedStyle(contentbanner,null).width);

	let contentbanner1 = document.querySelector(".contentBanner1");
	let contentdots1 = document.querySelectorAll(".contentBanner1 .contentCircleSon");
	let contentimgs1 = document.querySelectorAll(".contentBanner1 .item-list");
	let contentleftBtn1 = document.querySelector(".contentBanner1 .contentleft");
	let contentrightBtn1 = document.querySelector(".contentBanner1 .contentright");
	let widths1 = parseInt(getComputedStyle(contentbanner1,null).width);

	let contentbanner2 = document.querySelector(".contentBanner2");
	let contentdots2 = document.querySelectorAll(".contentBanner2 .contentCircleSon");
	let contentimgs2 = document.querySelectorAll(".contentBanner2 .item-list");
	let contentleftBtn2 = document.querySelector(".contentBanner2 .contentleft");
	let contentrightBtn2 = document.querySelector(".contentBanner2 .contentright");
	let widths2 = parseInt(getComputedStyle(contentbanner2,null).width);

	let contentbanner3 = document.querySelector(".contentBanner3");
	let contentdots3 = document.querySelectorAll(".contentBanner3 .contentCircleSon");
	let contentimgs3 = document.querySelectorAll(".contentBanner3 .item-list");
	let contentleftBtn3 = document.querySelector(".contentBanner3 .contentleft");
	let contentrightBtn3 = document.querySelector(".contentBanner3 .contentright");
	let widths3 = parseInt(getComputedStyle(contentbanner3,null).width);
	

	LRbanner(contentbanner,contentdots,contentimgs,contentleftBtn,contentrightBtn,widths,"content_hot");
	LRbanner(contentbanner1,contentdots1,contentimgs1,contentleftBtn1,contentrightBtn1,widths1,"content_hot");
	LRbanner(contentbanner2,contentdots2,contentimgs2,contentleftBtn2,contentrightBtn2,widths2,"content_hot");
	LRbanner(contentbanner3,contentdots3,contentimgs3,contentleftBtn3,contentrightBtn3,widths3,"content_hot");


	function LRbanner(banner,dots,imgs,leftBtn,rightBtn,widths,active){
	let t;
	let now = 0;
	let next = 0;
	
	dots[0].classList.add(active);
	imgs[0].style.left = 0;
	for(let i=0;i<dots.length;i++){
		dots[i].onclick = function(){
			// dots[i].index=i;
			for(let j=0;j<dots.length;j++){
				dots[j].classList.remove(active);
				imgs[j].style.left = -widths+"px";
			}
			dots[i].classList.add(active);
			imgs[i].style.left = 0;
			now = i;
			next = i;
		}
		
	}


	// 自动轮播
	// t = setInterval(move,1500);
	function move(){
		next++;
		if(next == imgs.length){
			next = imgs.length - 1;
			return;
		}
		imgs[now].style.left = 0;
		imgs[next].style.left = widths + "px";
		animate(imgs[now],{left:-widths},function(){
			for(let j=0;j<dots.length;j++){
				dots[j].classList.remove(active);
				// flag = true;
			}
		});
		animate(imgs[next],{left:0},function(){
			dots[next].classList.add(active);
			// flag = true;
		});
		now = next;
	}

	// banner.onmouseover = function(){
	// 	clearInterval(t);
	// }
	// banner.onmouseout = function(){
	// 	t = setInterval(move,1500);
	// }

	function moveL(){
		next--;
		if(next == -1){
			next = 0;
			return;
		}
		imgs[now].style.left = 0;
		imgs[next].style.left = -widths + "px";
		animate(imgs[now],{left:widths},function(){
			for(let j=0;j<dots.length;j++){
				dots[j].classList.remove(active);
				// flag = true;
			}
		});
		animate(imgs[next],{left:0},function(){
			dots[next].classList.add(active);
			// flag = true;
		});
		now = next;
	}
	rightBtn.onclick = function(){
		// if(!flag){
		// 	return;
		// }
		// flag = false;
		
		move();	
	}
	leftBtn.onclick = function(){
		// if(!flag){
		// 	return;
		// }
		// flag = false;
		moveL();
	}
	// window.onblur = function(){
	// 	clearInterval(t);
	// }
	// window.onfocus = function(){
	// 	t = setInterval(move, 1500);
	// }
}
	// 左右平移
	let singleT_L = document.querySelector(".singleT_L");
	let singleT_R = document.querySelector(".singleT_R");
	let fastShopping_box = document.querySelector(".fastShopping_box");
	let singlewidths = parseInt(getComputedStyle(fastShopping_box).width)/2;

	let n=0;

	singleT_R.onclick = function(){
		n++;
		if(n == 2){
			n=1;
			singleT_R.style.borderColor = "#e0e0e0";
			singleT_L.style.borderColor = "#AAADB4";
			return;
		}
		fastShopping_box.style.transform = "translateX("+(-singlewidths*n)+"px)";
	}
	singleT_L.onclick = function(){
		n--;
		if(n == -1){
			n=0;
			singleT_L.style.borderColor = "#e0e0e0";
			singleT_R.style.borderColor = "#AAADB4";
			return;
		}
		fastShopping_box.style.transform = "translateX("+(-singlewidths*n)+"px)";
	}






}