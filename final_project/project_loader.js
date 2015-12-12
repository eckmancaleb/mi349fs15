$(document).ready(function(){

    var title1 = "Simple Clock";
    var title2 = "Grid Screensaver";
    var title3 = "Pixel Globe";
    var title4 = "Maya";
    var title5 = "Star Wars Infographic";
    
    var description1 = "This is a tool I made for those who work with a second screen.";
    var description2 = "This is a web-based screensaver I made.  It uses Javascript to modify several tiles a second.";
    var description3 = "This animation uses rotating svg elements to create a globe effect.";
    var description4 = "I've done a decent amount of work with Maya, which is a 3d modeling software. Head over to my YouTube channel to check them out.";
    var description5 = "This is an infographic I recently made using Adobe Illustrator. It shows major Star Wars battles!";
    
    var link1 = "http://www.calebeckman.com/clock";
    var link2 = "http://www.calebeckman.com/screensaver";
    var link3 = "http://www.calebeckman.com/svg_test";
    var link4 = "https://www.youtube.com/channel/UCuXFh9OxkVDUDh2siHh2ELQ";
    var link5 = "http://www.calebeckman.com/Assets/star_wars_graphic.pdf";
    
    var title_list = [title1, title2, title3, title4, title5];
    var description_list = [description1, description2, description3, description4, description5];
    var link_list = [link1,link2,link3,link4,link5];
    
    var max = 5;
    
    
    $("#project-title").text( title_list[0] );
    $("#project-description").text( description_list[0] );
    $("#project-link").attr("href", link_list[0] );
    $("#project-title").addClass("1");
  
    $("#arrow-left").click(function(){
		
    	var current_project = parseInt($("#project-title").attr("class"),10);
    	if (current_project > 1) {
    	    var next_project = current_project - 1;
    	}
    	else {
    	    var next_project = max;
    	}
    	
    	$("#project-title").text( title_list[next_project-1] );
    	$("#project-description").text( description_list[next_project-1] );
    	$("#project-link").attr("href", link_list[next_project-1] );
    	$("#project-title").removeClass(current_project.toString())
    	$("#project-title").addClass(next_project.toString());
    });
    
    $("#arrow-right").click(function(){
    	
    	var current_project = parseInt($("#project-title").attr("class"),10);
    	if (current_project < max) {
    	    var next_project = current_project + 1;
    	}
    	else {
    	    var next_project = 1;
    	}
    	
    	$("#project-title").text( title_list[next_project-1] );
    	$("#project-description").text( description_list[next_project-1] );
    	$("#project-link").attr("href", link_list[next_project-1] );
    	$("#project-title").removeClass(current_project.toString())
    	$("#project-title").addClass(next_project.toString());
    });
});