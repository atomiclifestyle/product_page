$(document).ready(function()
{
	
	
	function validate_can_name()
	{
		let candidate_name = $("#candidate_name").val();
		
		if (candidate_name.length=="") 
		{
		  $("#can_name_chk").show();
		  can_name_error = false;
		  
		}
		else 
		{
		  can_name_error = true;
		  $("#can_name_chk").hide();
		}
	}
	function validate_can_mob_no()
	{
		let mob_no = $("#mob_no").val();
		
		if (mob_no.length=="") 
		{
		  $("#can_mob_no_chk").show();
		  can_mob_no_error = false;
		  
		}
		else 
		{
		  can_mob_no_error = true;
		  $("#can_mob_no_chk").hide();
		}
	}
	function validate_can_email_id()
	{
		let email_id = $("#email_id").val();
		
		if (email_id.length=="") 
		{
		  $("#can_email_id_chk").show();
		  can_email_id_error = false;
		  
		}
		else 
		{
		  can_email_id_error = true;
		  $("#can_email_id_chk").hide();
		}
	}
	function validate_des()
	{
		let des = $("#des").val();
		
		if (des.length=="") 
		{
		  $("#des_chk").show();
		  des_error = false;
		  
		}
		else 
		{
		  des_error = true;
		  $("#des_chk").hide();
		}
		
	}
	
	////////////////////////////////////////////////////////////////////////
	
	function validate_can_name_1()
	{
		let candidate_name_1 = $("#j_candidate_name").val();
		
		if (candidate_name_1.length=="") 
		{
		  $("#can_name_chk_1").show();
		  can_name_error_1 = false;
		  
		}
		else 
		{
		  can_name_error_1 = true;
		  $("#can_name_chk_1").hide();
		}
	}
	function validate_can_mob_no_1()
	{
		let mob_no_1 = $("#j_mob_no").val();
		
		if (mob_no_1.length=="") 
		{
		  $("#can_mob_no_chk_1").show();
		  can_mob_no_error_1 = false;
		  
		}
		else 
		{
		  can_mob_no_error_1 = true;
		  $("#can_mob_no_chk_1").hide();
		}
	}
	function validate_can_email_id_1()
	{
		let email_id_1 = $("#j_email_id").val();
		
		if (email_id_1.length=="") 
		{
		  $("#can_email_id_chk_1").show();
		  can_email_id_error_1 = false;
		  
		}
		else 
		{
		  can_email_id_error_1 = true;
		  $("#can_email_id_chk_1").hide();
		}
	}
	
	function validate_can_resume_1()
	{
		let resume_url_1 = $("#resume_url_1").val();
		
		if (resume_url_1.length=="") 
		{
		  $("#can_resume_chk_1").show();
		  can_resume_error_1 = false;
		  
		}
		else 
		{
		  can_resume_error_1 = true;
		  $("#can_resume_chk_1").hide();
		}
		
	}
	function validate_work_sts()
	{
		let work_sts = $("#work_sts").val();
		
		if (work_sts=="0") 
		{
		  $("#can_work_sts_chk").show();
		  can_work_sts_error = false;
		  
		}
		else 
		{
		   can_work_sts_error = true;
		  $("#can_work_sts_chk").hide();
		}
		
	}
	
	$(document).on("keyup","#candidate_name",function()
	{
		validate_can_name();
	});
	
	$(document).on("keyup","#mob_no",function()
	{
		validate_can_mob_no();
	});
	
	$(document).on("keyup","#email_id",function()
	{
		validate_can_email_id();
	});
	
	$(document).on("change",".fileInput",function()
	{
		
		if (!$('#fileInput').val()) 
		{
			$("#can_resume_chk").show();
			can_resume_error = false;
		}
		else
		{
			 can_resume_error = true;
			$("#can_resume_chk").hide();
		}
		
	});
	$(document).on("change","#work_sts",function()
	{
		validate_work_sts();
	});
	
	//////////////////////////////////////
	$(document).on("keyup","#j_candidate_name",function()
	{
		validate_can_name_1();
	});
	
	$(document).on("keyup","#j_mob_no",function()
	{
		validate_can_mob_no_1();
	});
	
	$(document).on("keyup","#j_email_id",function()
	{
		validate_can_email_id_1();
	});
	
	
	$(document).on("change",".fileInput_1",function()
	{
		
		if (!$('#fileInput_1').val()) 
		{
			$("#can_resume_chk_1").show();
			can_resume_error_1 = false;
		}
		else
		{
			 can_resume_error_1 = true;
			$("#can_resume_chk_1").hide();
		}

		
		
		
	});
	
	
	
	
	$(document).on("click",".send-application",function(e)
	{
		validate_can_name();
		validate_can_mob_no();
		validate_can_email_id();
		validate_des();
		
		var candidate_name=$("#candidate_name").val();
		var mob_no=$("#mob_no").val();
		var email_id=$("#email_id").val();
		var des=$("#des").val();
		var http_url=$("#http_url").val();
		
		
		var command="send_application";
		if( can_name_error == true && can_mob_no_error == true && can_email_id_error == true && des_error == true ) 
			{
				$(".send-application").attr("disabled", true);
				toastr.info("Data Saving... Please Wait")
				e.preventDefault();
				$.ajax({
					url:"php/view.php",
					cache:false,
					type:"POST",
					data:{command:command,candidate_name:candidate_name,mob_no:mob_no,email_id:email_id,des:des},
					//dataType:"json",
					success: function (data) 
					{
						//alert(data);
						toastr.success('Thank you... We will contact soon')
						
						
						
						$("#staticBackdrop").modal("toggle");
						location.reload(true);
					}
					
				});
			}
			else
			{
				toastr.error('Please Fill Mandatory Fields!!');
				return false;
			}
		
		
	});
	$(document).on("click",".send-application2",function(e)
	{
		validate_can_name();
		validate_can_mob_no();
		validate_can_email_id();
		validate_des();
		
		var candidate_name=$("#candidate_name").val();
		var mob_no=$("#mob_no").val();
		var email_id=$("#email_id").val();
		var des=$("#des").val();
		var http_url=$("#http_url").val();
		
		
		var command="send_application";
		if( can_name_error == true && can_mob_no_error == true && can_email_id_error == true && des_error == true ) 
			{
				$(".send-application").attr("disabled", true);
				toastr.info("Data Saving... Please Wait")
				e.preventDefault();
				$.ajax({
					url:http_url+"php/view.php",
					cache:false,
					type:"POST",
					data:{command:command,candidate_name:candidate_name,mob_no:mob_no,email_id:email_id,des:des},
					//dataType:"json",
					success: function (data) 
					{
						//alert(data);
						toastr.success('Thank you... We will contact soon')
						
						
						
						$("#staticBackdrop").modal("toggle");
						location.reload(true);
					}
					
				});
			}
			else
			{
				toastr.error('Please Fill Mandatory Fields!!');
				return false;
			}
		
		
	});
	$(document).on("click",".send-application1",function(e)
	{
		validate_can_name_1();
		validate_can_mob_no_1();
		validate_can_email_id_1();
		validate_can_resume_1();
		validate_work_sts();
		
		var candidate_name=$("#j_candidate_name").val();
		var mob_no=$("#j_mob_no").val();
		var email_id=$("#j_email_id").val();
		var work_sts=$("#work_sts").val();
		var des=$("#j_des").val();
		var resume_url=$("#resume_url_1").val();
		var photo_url=$("#photo_url").val();
		
		
		var job_id=$("#job_id").val();
		var job_title_id=$("#job_title_id").val();
		var job_cat_id=$("#job_cat_id").val();
		var job_type_id=$("#job_type_id").val();
		var http_url=$("#http_url").val();
		
		var command="send_application1";
		
		if( can_name_error_1 == true && can_mob_no_error_1 == true && can_email_id_error_1 == true && can_email_id_error_1 == true &&  can_resume_error_1==true  && can_work_sts_error==true ) 
			{
				$(".send-application1").attr("disabled", true);
				toastr.info("Data Saving... Please Wait")
				
		e.preventDefault();
		$.ajax({
			url:http_url+"php/view.php",
			cache:false,
			type:"POST",
			data:{command:command,candidate_name:candidate_name,mob_no:mob_no,email_id:email_id,job_id:job_id,job_title_id:job_title_id,job_cat_id:job_cat_id,job_type_id:job_type_id,des:des,resume_url:resume_url,photo_url:photo_url,work_sts:work_sts},
			//dataType:"json",
			success: function (data) 
			{
				//alert(data);
				//alert("Your application Send Successfully...")
				toastr.success('Your application Send Successfully...')
				//$("#view-jobs").html(data);
				$("#appnowPopup").modal("toggle");
				//location.reload(true);
				
			}
			
		});
			}
			else
			{
				toastr.error('Please Fill Mandatory Fields!!');
				return false;
			}
		
		
	});
	$(document).on("click",".find-job",function(e)
	{
		var i_job_title=$("#i_job_title").val();
		var i_job_cat=$("#i_job_cat").val();
		
		window.location="vacancies.php?job_title="+i_job_title+"&job_cat="+i_job_cat;
	});
	
	$(document).on("click",".sub-btn",function(e)
	{
		var subscription_mail_id=$("#subscription_mail_id").val();
		var command="subscription";
		if(subscription_mail_id=="")
		{
			toastr.error('Pleae fill your mail id');
		}
		else
		{
			e.preventDefault();
		$.ajax({
			url:"php/view.php",
			cache:false,
			type:"POST",
			data:{command:command,subscription_mail_id:subscription_mail_id},
			//dataType:"json",
			success: function (data) 
			{
				//alert(data);
				toastr.success('Thank you for Subscribing!!!!')
				////$("#view-jobs").html(data);
				//$("#apply_job_popup").modal("toggle");
				
			}
		});
		}
	});
	
	
	$(document).on("click",".con-submit-btn",function(e)
	{
		var con_name=$("#con_name").val();
		var con_email_id=$("#con_email_id").val();
		var con_mob_no=$("#con_mob_no").val();
		var con_subject=$("#con_subject").val();
		var message=$("#message").val();
		var securityCode=$("#securityCode").val();
		var command="contact_form";
		
		
		
		if(con_name=="")
		{
			toastr.error('Pleae fill your Name');
		}
		else if(con_email_id=="")
		{
			toastr.error('Pleae fill your Email Id');
		}
		else if(con_mob_no=="")
		{
			toastr.error('Pleae fill your Contact No');
		}
		else if(con_subject=="")
		{
			toastr.error('Pleae fill Subject');
		}
		else
		{
			$(".con-submit-btn").attr("disabled", true);
			toastr.info("Please Wait....")
				
			e.preventDefault();
			$.ajax({
			url:"php/view.php",
			cache:false,
			type:"POST",
			data:{command:command,con_name:con_name,con_email_id:con_email_id,con_mob_no:con_mob_no,con_subject:con_subject,securityCode:securityCode,message:message},
			//dataType:"json",
			success: function (data) 
			{
				if(data==1)
				{
						toastr.success('Thank you for Submit, We Will contact soon!!!!')
						$("#contact_frm")[0].reset();
				}
				else
				{
					toastr.error(data);
				}
				
				$(".con-submit-btn").attr("disabled", false);
				
			}
		});
		}
	});
		
		/////////////////////////////////////////////////////
	
});