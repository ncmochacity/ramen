$(document).ready(function(){
	$(window).scroll(function(event){
		var y=$(this).scrollTop();
	if(y>=100){
		$("#ramen").addClass("animate grow-img");
	}
		
	})
	
})