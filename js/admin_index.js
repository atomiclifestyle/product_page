$(document).ready(function()
{
	
	
	
	$(document).on("click",".send-application",function(e)
	{
		
		
		var candidate_name=$("#candidate_name").val();
		var mob_no=$("#mob_no").val();
		var email_id=$("#email_id").val();
		var des=$("#des").val();
		var resume_url=$("#resume_url").val();
		
		var command="send_application";
		e.preventDefault();
		$.ajax({
			url:"php/view.php",
			cache:false,
			type:"POST",
			data:{command:command,candidate_name:candidate_name,mob_no:mob_no,email_id:email_id,des:des,resume_url:resume_url},
			//dataType:"json",
			success: function (data) 
			{
				//alert("Your application Send Successfully...")
				toastr.success('Your application Send Successfully...')
				//$("#view-jobs").html(data);
				$("#apply_job_popup").modal("toggle");
				
			}
			
		});
		
		
	});
	$(document).on("click",".send-application1",function(e)
	{
		
		
		var candidate_name=$("#candidate_name").val();
		var mob_no=$("#mob_no").val();
		var email_id=$("#email_id").val();
		var qualification=$("#qualification").val();
		var experience=$("#experience").val();
		var gender=$("#gender").val();
		var current_salary=$("#current_salary").val();
		var expected_salary=$("#expected_salary").val();
		var address=$("#address").val();
		var des=$("#des").val();
		var resume_url=$("#resume_url").val();
		var photo_url=$("#photo_url").val();
		
		var command="send_application1";
		e.preventDefault();
		$.ajax({
			url:"php/view.php",
			cache:false,
			type:"POST",
			data:{command:command,candidate_name:candidate_name,mob_no:mob_no,email_id:email_id,qualification:qualification,experience:experience,gender:gender,current_salary:current_salary,expected_salary:expected_salary,address:address,des:des,resume_url:resume_url,photo_url:photo_url},
			//dataType:"json",
			success: function (data) 
			{
				alert(data);
				//alert("Your application Send Successfully...")
				toastr.success('Your application Send Successfully...')
				//$("#view-jobs").html(data);
				$("#apply_job_popup").modal("toggle");
				
			}
			
		});
		
		
	});
	$(document).on("click",".find-job",function(e)
	{
		var i_job_title=$("#i_job_title").val();
		var i_job_cat=$("#i_job_cat").val();
		
		window.location="vacancies.php?job_title="+i_job_title+"&job_cat="+i_job_cat;
	});
	
	
		
		/////////////////////////////////////////////////////
	
});