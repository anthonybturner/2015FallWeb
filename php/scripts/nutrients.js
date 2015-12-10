 var maxCalories = 400, maxCarbs = 200, maxCholestrol = 300, maxFat = 50, maxFiber = 50, maxProtien = 1000;
	    
		(function($) {
		    
		    
		    $("form").submit(function(i){
		        
		         var nutrientsList = ($(this).serializeArray());
		         var nutrientRow = "<tr>";

		      
		         for( var i = 0; i < nutrientsList.length; i++){
		             
		             var nutrientName = nutrientsList[i].name;
		            
		             var nutrient = nutrientsList[i].value;
		             
		             if( nutrientName =="nutrient")//Special case for not summing nutrient name with nutrient values
		                 nutrientRow += "<td class='"+nutrientName+"'>" +nutrient+"</td> ";
		                 
                     else if( nutrient == "" || isNaN(nutrient))//The user may have entered blank values for nutrients or invalid characters (string data)
		               nutrientRow += "<td class='"+nutrientName+"'>" +0+"</td> ";

                    else
		             nutrientRow += "<td class='"+nutrientName+"'>" +nutrient+"</td> ";
		       
		             
		         }
		         nutrientRow+= "</tr>"

		        var nutritionTableId = $(this).attr('action');
		        $(nutritionTableId + " table tr:last").after((nutrientRow));
		        getTotals();
		        getTotalPrgoress();

		      //  $('#myTable tr:last').after('<tr>...</tr><tr>...</tr>');

		        
		        
		        return false;
		    });
		    
		   
                
                function initialize(){
                    
                     $('.progress-bar').each(function() {
		        
                           $(this).attr('aria-valuemax', 100);
                           
                     });
                
                    $("#total-nutrition td").each(function(){
    
                        if( !$(this).hasClass(("") )){//Only add values and progress bars to table cells that are not labels ( such as the label 'nutrient' does not have a progress bar or values)
                            
                             $(this).html(" <span class='amount'>  </span> <div class='progress'> <div class='progress-bar progress-bar-striped active' role='progressbar' style='width: 0%'>" +
                             "<span class='progress-bar-text'>0% reached</span>	</div>  </div>");
                        }
                    });
                }
		    
		   
		    
    		    function getTotals(){
    		        
    		        getTotalNutrient("calories", maxCalories);
    		        getTotalNutrient("carbs", maxCarbs);
    		        getTotalNutrient("fiber", maxFiber);
    		        getTotalNutrient("fat", maxFat);
                    getTotalNutrient("cholestrol", maxCholestrol);
                    getTotalNutrient("protien", maxProtien);
    
    		    }
    		    
    		    
    		    function getTotalNutrient(nutrient, maxNutrient){
    		        
    		        var total = 0, totalPercent = 0;
    			    var base = 10; //Base to use, base 10 (decimal)
    			    
    			    $("."+nutrient).each(function( index ) {//Get the class of the given nutrient

                         var value = 0;
                         value = parseInt($( this ).text(), base);
                         if( value != "")
    			            total += value;
    			     
                      
                    });
                    
                  
                    totalPercent = Math.floor((total/600)*100);
                    if( totalPercent > 100)
                        totalPercent = 100;
                    
                    if( total > maxNutrient)
                        total = maxNutrient;
                        
                    $(".total-"+nutrient+" .amount").text(total + " of " +maxNutrient);//Add the total sum to the area for totals
                    
                    $(".total-"+nutrient+" .progress-bar").css("width", totalPercent + "%");
                    $(".total-"+nutrient+" .progress-bar span").text( totalPercent + "% reached");
    		        
    		    }
    		    
    		    
    		    function getTotalPrgoress(){
    		        
    		        var total = 0, totalPercent = 0;
    			    var base = 10; //Base to use, base 10 (decimal)
    			      var maxTotal = maxCalories + maxCarbs + maxFiber + maxFat + maxCholestrol +maxProtien;
                    
    			    $("td").each(function( index ) {//Get the class of the given nutrient


                        var td = $(this);
                        var str = td.prop("className");
                        
                      //  console.log(str)
                       var strNeeded =  str.substring(0,5);
                       if (strNeeded != "total"){
                       
                          var value = 0;
                          value = parseInt($( td ).text(), base);
                          if( value != "" && !isNaN((value))){
    			               total += value;
                          }
                      
                       }
                      
                    });
                    
                    
                    totalPercent = Math.floor((total/maxTotal)*100);
                    

                    $("#total-progress .progress-bar").css("width", totalPercent);
                    $("#total-progress .progress-bar span").text( totalPercent + "% reached");
                    

    		        
    		    }
    		    
    		   
    		    
    		    
    		    
    		     $(initialize);
		    
		         $(getTotals);
		         $(getTotalPrgoress);
		      
		    

		

		})(jQuery);