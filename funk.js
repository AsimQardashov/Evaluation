$(document).ready(function(){
	var qiymet=new Array();
	let tr;
	let sira=0;
	$('#add').click(function(){
		if ($('#name').val()!='') {
			sira++;
			$('#umumi').append('<tr><th>'+sira+'</th><td>'+$('#name').val()+'</td><td class="imtahan" style="color:green; cursor: pointer;">Imtahan</td><td></td><td></td><td></td></tr>');
			$('#name').css("border","1px solid black");
			$('#name').val('');
		}
		else{
			$('#name').css("border","1px solid red")
		};
	});
	$("#umumi").on("click",".imtahan", function(){
		tr=$(this).parent('tr');
		if (tr.children().eq(3).text()=='') {
			$('#qiymetlendirme').children('tr').remove()
			$('.imtahan-modal').css({"margin-top" : "500px"})
  			$('.modal-back').css({"opacity":".5", "z-index":"9"})
		}
		else{
			$('.imtahan-modal').css({"margin-top" : "500px"})
  			$('.modal-back').css({"opacity":".5", "z-index":"9"})
		}

  		$('.imtahan-modal').css({"margin-top" : "500px"});
  		$('.modal-back').css({"opacity":".5", "z-index":"9"});
  		sira=0;
	});
	$('.netice').click(function () {
		if ($('.qiymet').val()!='') {
			sira++;
			$('.qiymet').css("border","1px solid black");
			$('#qiymetlendirme').append('<tr><th>'+sira+'</th><td>'+$('.fenn').val()+'</td><td>'+$('.qiymet').val()+'</td></tr>');
		}
		else(
			$('.qiymet').css("border","1px solid red")
		);
		qiymet.push($('.qiymet').val());
		$('.qiymet').val('');
	});
	$('.close>i').click(function(){
		$('.imtahan-modal').css({"margin-top" : "-400px"});
		$('.modal-back').css({"opacity":"0", "z-index":"0"});
	});
	$('#close').click(function(){
		if (qiymet!=0) {
			tr.children().eq(3).text(Math.max.apply(Math, qiymet));
			tr.children().eq(4).text(Math.min.apply(Math, qiymet));
			tr.children().eq(5).text((Math.max.apply(Math, qiymet)+Math.min.apply(Math, qiymet))/2);	
		}
		$('.imtahan-modal').css({"margin-top" : "-400px"});
		$('.modal-back').css({"opacity":"0", "z-index":"0"});
		qiymet=[];
		sira=0;
	});

});