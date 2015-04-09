//this grabs the data for the aggregate data on the 
                        //eightfold path and spits out the polar chart
                        //every time the 'summaries' or 'seek' button is clicked
                        
                        $("#linkThree").click(function() {
                        		
                        		
                        		
                        		 $.ajax({
                        			  type: "GET",
                        			  url: '/pathAggGraph',
                        			  data: { userID: userID},
                        			  success: function(data)
                        				{							
                        					//if any of the truths aren't present yet, set them to 0, for the graph.. so uses can get a visualization of the fact that they haven't spun those yet
                        					if(! data.truths[0]) {
                        						data.truths[0] = {}
                        						data.truths[0].truth_count = 0;
                        						data.truths[0].sum = 0;
                        						}
                        					if(! data.truths[1]) {
                        						data.truths[1] = {}
                        						data.truths[1].sum = 0;
                        						data.truths[1].truth_count = 0;
                        						}
                        					if(! data.truths[2]) {
                        						data.truths[2] = {}
                        						data.truths[2].sum = 0;
                        						data.truths[2].truth_count = 0;
                        						}
                        					if(! data.truths[3]) {
                        						data.truths[3] = {}
                        						data.truths[3].sum = 0;
                        						data.truths[3].truth_count = 0;
                        						}
                        
                        			  		var sumData = {
                        					 labels: ["First Noble Truth", "Second Noble Truth", "Third Noble Truth"],
                        					 datasets: [
                        						  {
                        								label: "Truth Frequencies",
                        								fillColor: "rgba(220,220,220,0.5)",
                        								strokeColor: "rgba(220,220,220,0.8)",
                        								pointColor: "rgba(220,220,220,1)",
                        								highlightFill: "#fff",
                        								highlightStroke: "rgba(220,220,220,1)",
                        								data: [data.truths[0].truth_count, data.truths[1].truth_count, data.truths[2].truth_count]
                        						  },
                        						  
                        						  {
                        								label: "Truth Score Totals",
                        								fillColor: "rgba(110,110,110,0.5)",
                        								strokeColor: "rgba(110,110,110,0.8)",
                        								pointColor: "rgba(110,110,110,1)",
                        								highlightFill: "#fff",
                        								highlightStroke: "rgba(110,110,110,1)",
                        								data: [data.truths[0].sum, data.truths[1].sum, data.truths[2].sum]
                        						  }
                        					 ]
                        				};
                        					var ctx = document.getElementById("truthCanvas").getContext("2d");
                        					new Chart(ctx).Line(sumData, { scaleBeginAtZero: false, scaleLabel: "<%= ' ' + value%>", scaleFontFamily: 'Special Elite'});
                        				
                        				//if any of the paths aren't present yet, set them to 0, for the graph..
                        					if(! data.paths[0]) {
                        						data.paths[0] = {}
                        						data.paths[0].path_count = 0;
                        						data.paths[0].sum = 0;
                        						}
                        					if(! data.paths[1]) {
                        						data.paths[1] = {}
                        						data.paths[1].path_count = 0;
                        						data.paths[1].sum = 0;
                        						}
                        					if(! data.paths[2]) {
                        						data.paths[2] = {}
                        						data.paths[2].path_count = 0;
                        						data.paths[2].sum = 0;
                        						}
                        					if(! data.paths[3]) {
                        						data.paths[3] = {}
                        						data.paths[3].sum = 0;
                        						data.paths[3].path_count = 0;
                        						}
                        					if(! data.paths[4]) {
                        						data.paths[4] = {}
                        						data.paths[4].sum = 0;
                        						data.paths[4].path_count = 0;
                        						}
                        					if(! data.paths[5]) {
                        						data.paths[5] = {}
                        						data.paths[5].sum = 0;
                        						data.paths[5].path_count = 0;
                        						}
                        					if(! data.paths[6]) {
                        						data.paths[6] = {}
                        						data.paths[6].sum = 0;
                        						data.paths[6].path_count = 0;
                        						}
                        					if(! data.paths[7]) {
                        						data.paths[7] = {}
                        						data.paths[7].sum = 0;
                        						data.paths[7].path_count = 0;
                        						}
                       
                        			  		var sumPathData = {
                        					 labels: ["View", "Thought", "Speech", "Action", "Livelihood", "Effort", "Mindfulness", "Concentration"],
                        					 datasets: [
                        						  {
                        								label: "Path Frequencies",
                        								fillColor: "rgba(220,220,220,0.5)",
                        								strokeColor: "rgba(220,220,220,0.8)",
                        								pointColor: "rgba(220,220,220,1)",
                        								highlightFill: "#fff",
                        								highlightStroke: "rgba(220,220,220,1)",
                        								data: [data.paths[0].path_count, data.paths[1].path_count, data.paths[2].path_count, data.paths[3].path_count, data.paths[4].path_count, data.paths[5].path_count, data.paths[6].path_count, data.paths[7].path_count]
                        						  },
                        						  {
                        								label: "Path Score Totals",
                        								fillColor: "rgba(110,110,110,0.5)",
                        								strokeColor: "rgba(110,110,110,0.8)",
                        								pointColor: "rgba(110,110,110,1)",
                        								highlightFill: "#fff",
                        								highlightStroke: "rgba(110,110,110,1)",
                        								data: [data.paths[0].sum, data.paths[1].sum, data.paths[2].sum, data.paths[3].sum, data.paths[4].sum, data.paths[5].sum, data.paths[6].sum, data.paths[7].sum]
                        						  }
                        					 ]
                        				};
                        					var ctx = document.getElementById("pathCanvas").getContext("2d");
                        					new Chart(ctx).Line(sumPathData, { scaleBeginAtZero: false, scaleLabel: "<%= ' ' + value%>", scaleFontFamily: 'Special Elite'});
                        				}
                        		 });
       							 });
                        	
                        	
