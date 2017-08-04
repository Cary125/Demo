 $(document).ready(function (){
// 	function btn1(){
//	if(!$('#nameMen').value && !$('#nameWomen').value) {
//	alert("请输入姓名！"); 
//	$('#nameMen').focus();
//	$('#nameWomen').focus(); 
//	return false;
//	}
//	else {
//		window.location.href ="index2.html";
//	}
// }
// 	var name_Men=$('#nameMen').val();
//	var name_Women=$('#nameWomen').val();
//	var senfont=$('.ble_con').val();
//	var imglist=$(this).attr('title');
// 	$('.imgs li').on('click',function(){
// 		var imglist=$(this).attr('title');
//		$(this).attr('class','selected').siblings().attr('class','');
// })
//	$('.btn_temp').on('click',function(){
//		var name_Men=$('#nameMen').val();
//		var name_Women=$('#nameWomen').val();
//		$('#names').hide();
//		$('#imgs').show();
//		$('.imgs li').on('click',function(){
//		var imglist=$(this).attr('title');
//		$(this).attr('class','selected').siblings().attr('class','');
//		$('.btn_full').on('click',function(){
//			$('#imgs').hide();
//			$('#sentiments').show()
//		})
//		$('.btn_generate').on('click',function(){
//			var senfont=$('.ble_con').val();
//			$('#sentiments').hide()
//			$('#show_bg').show();
//			$('.show_img ').attr('src',imglist);
//			$('.show_name #name1').html(name_Men);
//			$('.show_name #name2').html(name_Women);
//			$('.show_txt .sent').html(senfont);
//			
//		})
//	})
//	})
var h = "";
h += " 网页可见区域宽："+ document.body.clientWidth+"\n";
h += " 网页可见区域高："+ document.body.clientHeight+"\n";
h += " 网页可见区域宽："+ document.body.offsetWidth +" (包括边线和滚动条的宽)"+"\n";
h += " 网页可见区域高："+ document.body.offsetHeight +" (包括边线的宽)"+"\n";
h += " 网页正文全文宽："+ document.body.scrollWidth+"\n";
h += " 网页正文全文高："+ document.body.scrollHeight+"\n";
h += " 网页被卷去的上："+ document.body.scrollTop+"\n";
h += " 网页被卷去的左："+ document.body.scrollLeft+"\n";
h += " 网页正文部分上："+ window.screenTop+"\n";
h += " 网页正文部分左："+ window.screenLeft+"\n";
h += " 屏幕分辨率的宽："+ window.screen.width+"\n";
h += " 屏幕分辨率的高："+ window.screen.height+"\n";
h += " 屏幕可用工作区宽度："+ window.screen.availWidth+"\n";
h += " 屏幕可用工作区高度："+ window.screen.availHeight+"\n";
h += " 你的屏幕设置是 "+ window.screen.colorDepth +" 位彩色"+"\n";
h += " 你的屏幕设置 "+ window.screen.deviceXDPI +" 像素/英寸"+"\n";
alert(h);
$('.btn_temp').on('click',function(){
	var name_Men=$('#nameMen').val();
	var name_Women=$('#nameWomen').val();
	sessionStorage.setItem('nameM',name_Men);
	sessionStorage.setItem('nameW',name_Women)
	window.location.href='index2.html';
	
});

$('.imgs li').on('click',function(){
	var imglist=$(this).attr('title');
	$(this).attr('class','selected').siblings().attr('class','');
	$('.btn_full').on('click',function(){
		sessionStorage.setItem('Img',imglist);
		window.location.href='index3.html';
	})
});

$('.btn_generate').on('click',function(){
		var sent_txt=$('.ble_con').val();
		sessionStorage.setItem('sent_txt',sent_txt);
		window.location.href='index4.html';
});
	var name_Men=sessionStorage.getItem('nameM');
	var name_Women=sessionStorage.getItem('nameW');
	var imgList=sessionStorage.getItem('Img');
	var senfont=sessionStorage.getItem('sent_txt');
	$('.show_img ').attr('src',imgList);
	$('.show_name #name1').html(name_Men);
	$('.show_name #name2').html(name_Women);
	$('.show_txt .sent').html(senfont);
	$('.btn_share').on('click',function(){
		$('.share_date').show()
		$('.share_date_con').animate({bottom:0});
		$('.share_date_con ').on('click',function(){
			var thisHeight=$('.share_date_con').height()
			$('.share_date_con').animate({bottom:-thisHeight});
			$('.share_date').hide()
		})
	})
})