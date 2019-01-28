      var geocoder;
      var map;

      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: 0, lng: 0}
        });
        codeAddress(map);
      }

      function codeAddress(map) {
        var places = [
          ["January 26, 2019","January 27, 2019","161 Caroline Road","Paramus","Nj",7562  ],
          ["January 23, 2019","January 24, 2019","163 Clarken Drive","West Orange","Nj",7052  ],
          ["January 17, 2019","January 18, 2019","351 Ogden Street","City of Orange","NJ",7050  ],
          ["January 16, 2019","January 17, 2019","476 East Lafayette Drive","West Chester","PA",19382  ],
          ["January 14, 2019","January 15, 2019","7 Ellis Street","West Orange","Nj",7052  ],
          ["January 12, 2019","January 13, 2019","47 Erie Street","Dumont","NJ",7628  ],
          ["January 8, 2019","January 10, 2019","351 Ogden Street","City of Orange","NJ",7050  ],
          ["January 6, 2019","January 7, 2019","7 Eder Terrace","South Orange","NJ",7079  ],
          ["January 4, 2019","January 5, 2019","631 Ratzer Road","Wayne","NJ",7470  ],
          ["December 28, 2018","January 3, 2019","171 South 9th Street","Newark","NJ",7107  ],
          ["December 27, 2018","December 28, 2018","117 Fleming Avenue Basement","Newark","NJ",7105  ],
          ["December 22, 2018","December 23, 2018","270 Meeker Avenue 2nd floor","Newark","NJ",7112  ],
          ["December 14, 2018","December 20, 2018","","Englewood","NJ",7631  ],
          ["December 8, 2018","December 9, 2018","880 Broad Street","Teaneck","NJ",7666  ],
          ["December 7, 2018","December 8, 2018","280 Knickerbocker Road","Closter","NJ",7624  ],
          ["December 6, 2018","December 7, 2018","3802 Crows Nest Court","Hopewell","VA",23860  ],
          ["November 28, 2018","December 5, 2018","1527 South Gordon Street Southwest","Atlanta","GA",30310  ],
          ["November 25, 2018","November 27, 2018","5343 Crystal Lane","Atlanta","GA",30349  ],
          ["November 23, 2018","November 25, 2018","5343 Crystal Lane","Atlanta","GA",30349  ],
          ["November 20, 2018","November 23, 2018","200 Redding Ridge","Atlanta","GA",30349  ],
          ["November 18, 2018","November 19, 2018","815 Pine Manor","Marietta","GA",30066  ],
          ["November 16, 2018","November 18, 2018","114 Trace End Drive","Franklin","TN",37069  ],
          ["November 14, 2018","November 15, 2018","706 Long Hunter Lane","Nashville","TN",37217  ],
          ["November 12, 2018","November 13, 2018","5047 Edmondson Pike","Nashville","TN",37211  ],
          ["November 9, 2018","November 12, 2018","4614 Plaza Hills Lane Apt A","Chattanooga","TN",37343  ],
          ["November 8, 2018","November 9, 2018","4603 Dayton Boulevard","Chattanooga","TN",37415  ],
          ["November 7, 2018","November 8, 2018","4603 Dayton Boulevard","Chattanooga","TN",37415  ],
          ["November 6, 2018","November 7, 2018","1406 High Meadow Drive","Stone Mountain","GA",30083  ],
          ["November 4, 2018","November 5, 2018","4207 Defoors Farm Trail","Powder Springs","GA",30127  ],
          ["October 24, 2018","October 25, 2018","4207 Defoors Farm Trail","Powder Springs","GA",30127  ],
          ["October 23, 2018","October 24, 2018","1519 Saint Charles Avenue","Montgomery","AL",36107  ],
          ["October 22, 2018","October 23, 2018","20140 Quincy Avenue","Covington","LA",70433  ],
          ["October 20, 2018","October 21, 2018","1210 Mathews Street, Houston","Houston","TX",77019  ],
          ["October 16, 2018","October 16, 2018","1721 Haver Street, Houston","Houston","TX",77006  ],
          ["October 4, 2018","October 5, 2018","9611 Vilven Lane","Houston","TX",77080  ],
          ["October 3, 2018","October 4, 2018","906 Old Ponchatoula Highway","Madisonville","LA",70447  ],
          ["October 2, 2018","October 3, 2018","2070 Autumn Ridge Way","Auburn","AL",36879  ],
          ["September 29, 2018","September 30, 2018","209 Treasure Way","Woodstock","GA",30189  ],
          ["September 28, 2018","September 29, 2018","209 Treasure Way","Woodstock","GA",30189  ],
          ["September 27, 2018","September 28, 2018","209 Treasure Way","Woodstock","GA",30189  ],
          ["September 26, 2018","September 27, 2018","3150 Vickery Drive Northeast","Marietta","GA",30066  ],
          ["September 25, 2018","September 26, 2018","370 Northside Drive Northwest Call me","Atlanta","GA",30318  ],
          ["September 23, 2018","September 24, 2018","105 Orchard Lane","Oak Ridge","TN",37830  ],
          ["September 22, 2018","September 23, 2018","105 Orchard Lane","Oak Ridge","TN",37830  ],
          ["September 21, 2018","September 22, 2018","177 Golfcrest Lane","Oak Ridge","TN",37830  ],
          ["September 20, 2018","September 21, 2018","4440 Royalview Road","Knoxville","TN",37921  ],
          ["September 19, 2018","September 20, 2018","4440 Royalview Road","Knoxville","TN",37921  ],
          ["September 16, 2018","September 17, 2018","128 Eladi Trail @ The Tail of the Dragon","Vonore","TN",37885  ],
          ["September 14, 2018","September 16, 2018","4410 Alabama Avenue","Chattanooga","TN",37409  ],
          ["September 12, 2018","September 13, 2018","2184 West Ponce de Leon Avenue","Decatur","GA",30030  ],
          ["September 9, 2018","September 10, 2018","630 West 45th Street","Savannah","GA",31405  ],
          ["September 8, 2018","September 9, 2018","22 North Parkwood Drive","Savannah","GA",31404  ],
          ["September 7, 2018","September 8, 2018","345 Sonoma Drive","Pooler","GA",31322  ],
          ["September 6, 2018","September 7, 2018","1049 Graves Springs Road","Leesburg","GA",31763  ],
          ["September 5, 2018","September 6, 2018","1049 Graves Springs Road","Leesburg","GA",31763  ],
          ["September 4, 2018","September 5, 2018","1049 Graves Springs Road","Leesburg","GA",31763  ],
          ["September 3, 2018","September 4, 2018","2300 Saddlebrook Court","Albany","GA",31721  ],
          ["September 2, 2018","September 3, 2018","2113 Parador Bend","McDonough","GA",30253  ],
          ["September 1, 2018","September 2, 2018","2100 Shiloh Valley Drive Northwest 1025","Kennesaw","GA",30144  ],
          ["August 30, 2018","August 31, 2018","222 Pioneer Trail","Cartersville","GA",30121  ],
          ["August 26, 2018","August 28, 2018","1222 Leigh Avenue","Charlotte","NC",28205  ],
          ["August 23, 2018","August 26, 2018","3625 Charterhall Lane","Charlotte","NC",28215  ],
          ["August 22, 2018","August 23, 2018","318 Scottie Place","Charlotte","NC",28217  ],
          ["August 21, 2018","August 22, 2018","2789 Summer Ridge Lane","Kennesaw","GA",30152  ],
          ["August 20, 2018","August 21, 2018","1546 Halisport Lake Drive Northwest","Kennesaw","GA",30152  ],
          ["August 15, 2018","August 17, 2018","3864 Fairhill Point","Alpharetta","GA",30004  ],
          ["August 15, 2018","August 16, 2018","755 Saint Andrews Drive","Murfreesboro","TN",37128  ],
          ["August 14, 2018","August 15, 2018","787 Iris Terrace","Decatur","GA",30033  ],
          ["August 10, 2018","August 13, 2018","1523 Oakview Road 4","Decatur","GA",30030  ],
          ["August 9, 2018","August 10, 2018","9 McKinley Court Southeast","Cartersville","GA",30121  ],
          ["August 6, 2018","August 7, 2018","9 McKinley Court Southeast","Cartersville","GA",30121  ],
          ["August 4, 2018","August 5, 2018","2635 Fieldstone View Lane Southeast D","Conyers","GA",30013  ],
          ["August 3, 2018","August 4, 2018","4216 Oakridge Drive","North Charleston","SC",29418  ],
          ["August 2, 2018","August 3, 2018","84 Willow Oak Circle","Charleston","SC",29418  ],
          ["August 1, 2018","August 2, 2018","2750 Rifle Range Road","Mount Pleasant","SC",29466  ],
          ["July 31, 2018","August 1, 2018","","Conway","SC",null  ],
          ["July 29, 2018","July 30, 2018","9 McKinley Court Southeast","Cartersville","GA",30121  ],
          ["July 26, 2018","July 28, 2018","18011 Castle Ct","Bon Aqua","TN",37025  ],
          ["July 23, 2018","July 25, 2018","296 Paragon Mills Road","Nashville","TN",37211  ],
          ["July 22, 2018","July 23, 2018","3606 Rio Grande Avenue","Texarkana","TX",75503  ],
          ["July 11, 2018","July 12, 2018","1823 Crabapple Court","Allen","TX",75002  ],
          ["July 8, 2018","July 9, 2018","125 Woodcreek Drive","Rockwall","TX",75032  ],
          ["July 6, 2018","July 8, 2018","1800 Jordan Court","Irving","TX",75061  ],
          ["July 5, 2018","July 6, 2018","1800 Jordan Court","Irving","TX",75061  ],
          ["July 3, 2018","July 4, 2018","2029 West Grove Lane","Grand Prairie","TX",75052  ],
          ["June 30, 2018","July 1, 2018","703 Colson Drive","Arlington","TX",76002  ],
          ["June 29, 2018","June 30, 2018","3810 West Rochelle Road","Irving","TX",75062  ],
          ["June 28, 2018","June 30, 2018","435 West 9th Street Apt #3","Dallas","TX",75208  ],
          ["June 24, 2018","June 25, 2018","118 North Pine Street","Little Rock","AR",72205  ],
          ["June 22, 2018","June 23, 2018","118 North Pine Street","Little Rock","AR",72205  ],
          ["June 23, 2018","June 24, 2018","6808 Talmage Drive","Little Rock","AR",72204  ],
          ["June 20, 2018","June 22, 2018","4700 Edgemere Road","North Little Rock","AR",72116  ],
          ["June 19, 2018","June 20, 2018","6500 Evergreen Drive","Little Rock","AR",72207  ],
          ["June 17, 2018","June 19, 2018","6 Hillsleigh Drive","North Little Rock","AR",72116  ],
          ["June 15, 2018","June 17, 2018","501 East Military Drive","North Little Rock","AR",72118  ],
          ["June 14, 2018","June 15, 2018","108 Maplewood Court","Hot Springs","AR",71913  ],
          ["June 12, 2018","June 14, 2018","164 Tyler Cove","Hot Springs","AR",71913  ],
          ["June 11, 2018","June 12, 2018","6808 Talmage Drive","Little Rock","AR",72204  ],
          ["June 8, 2018","June 9, 2018","4700 Edgemere Road","North Little Rock","AR",72116  ],
          ["May 28, 2018","May 29, 2018","12915 Barth Road","Alexander","AR",72002  ],
          ["May 26, 2018","May 27, 2018","911 17th Street","Plano","TX",75074  ],
          ["May 24, 2018","May 25, 2018","1335 Arizona Avenue","Dallas","TX",75216  ],
          ["May 21, 2018","May 23, 2018","520 West 9th Street","Dallas","TX",75208  ],
          ["May 18, 2018","May 20, 2018","Cottonwood Drive","Princeton","TX",75407  ],
          ["May 17, 2018","May 18, 2018","4801 Rosehill Road","Garland","TX",75043  ],
          ["May 16, 2018","May 17, 2018","2625 Baronne Street","New Orleans","LA",70113  ],
          ["May 14, 2018","May 16, 2018","827 Marigny Street","New Orleans","LA",70117  ],
          ["May 12, 2018","May 13, 2018","6343 Dorothea Street","New Orleans","LA",70126  ],
          ["May 11, 2018","May 12, 2018","3016 Bore Street","Metairie","LA",70001  ],
          ["May 10, 2018","May 11, 2018","1037 Oak Avenue","Westwego","LA",70094  ],
          ["May 9, 2018","May 10, 2018","3137 Roosevelt Boulevard","Kenner","LA",70065  ],
          ["May 8, 2018","May 9, 2018","17473 Joe Sevario Road","Prairieville","LA",70769  ],
          ["May 7, 2018","May 8, 2018","6 Hillsleigh Drive","North Little Rock","AR",72116  ],
          ["May 6, 2018","May 7, 2018","1319 Huntsmoor Road","Sherwood","AR",72120  ],
          ["May 5, 2018","May 6, 2018","6808 Talmage Drive","Little Rock","AR",72204  ],
          ["May 4, 2018","May 5, 2018","6808 Talmage Drive","Little Rock","AR",72204  ],
          ["May 3, 2018","May 4, 2018","18011 Castle Ct","Bon Aqua","TN",37025  ],
          ["May 2, 2018","May 3, 2018","1304 Newman Avenue","Nashville","TN",37216  ],
          ["May 1, 2018","May 2, 2018","3925 Adkisson Drive Northwest 3734","Cleveland","TN",37312  ],
          ["April 30, 2018","May 1, 2018","114 West Pine Street","Johnson City","TN",37604  ],
          ["April 29, 2018","April 30, 2018","133 Ledbetter Lane","Clarksville","TN",37043  ],
          ["April 27, 2018","April 28, 2018","375 Davids Way","La Vergne","TN",37086  ],
          ["April 26, 2018","April 27, 2018","1623 Lethia Drive","Nashville","TN",37206  ],
          ["April 25, 2018","April 26, 2018","2016 Cedar Ln","Knoxville","TN",37918  ],
          ["April 24, 2018","April 25, 2018","781 Peachtree St","Pass Christian","MS",39571  ],
          ["April 23, 2018","April 24, 2018","1110 Gum Street Suite B","Conway","AR",72032  ],
          ["April 20, 2018","April 23, 2018","4940 Thunder Road","Dallas","TX",75244  ],
          ["April 18, 2018","April 19, 2018","818 Owensons Drive","Dallas","TX",75244  ],
          ["April 16, 2018","April 17, 2018","818 Owensons Drive","Dallas","TX",75244  ],
          ["April 12, 2018","April 13, 2018","818 Owensons Drive","Dallas","TX",75244  ],
          ["April 11, 2018","April 12, 2018","7735 Claremont Drive","Dallas","TX",75228  ],
          ["April 7, 2018","April 9, 2018","315 West Danieldale Road Near corner of Sedgemoor Ave","Dallas","TX",75232  ],
          ["April 5, 2018","April 7, 2018","3607 Urban Ave","Dallas","TX",75227  ],
          ["April 4, 2018","April 5, 2018","963 Ratcliff Street","Shreveport","LA",71104  ],
          ["April 3, 2018","April 4, 2018","963 Ratcliff Street","Shreveport","LA",71104  ],
          ["April 2, 2018","April 3, 2018","115 North Shore Drive","Dallas","TX",75216  ],
          ["April 1, 2018","April 2, 2018","1240 South Marsalis Avenue","Dallas","TX",75216  ],
          ["March 29, 2018","April 1, 2018","1240 South Marsalis Avenue","Dallas","TX",75216  ],
          ["March 26, 2018","March 27, 2018","409 Oakwood Street","Bossier City","LA",71111  ],
          ["March 15, 2018","March 18, 2018","103 South Capri Drive","Duncanville","TX",75116  ],
          ["March 12, 2018","March 13, 2018","3802 Kavanaugh Boulevard","Little Rock","AR",72205  ],
          ["March 11, 2018","March 12, 2018","3606 Rio Grande Avenue","Texarkana","TX",75503  ],
          ["March 7, 2018","March 10, 2018","4104 Country Brook Dr","Dallas","TX",75287  ],
          ["March 6, 2018","March 7, 2018","6808 Talmage Drive","Little Rock","AR",72204  ],
          ["March 1, 2018","March 4, 2018","28 Briar Patch Court","Little Rock","AR",72211  ],
          ["February 26, 2018","February 27, 2018","50 Bouresse Circle","Little Rock","AR",72223  ],
          ["February 23, 2018","February 25, 2018","31 Lucy Lane","Sherwood","AR",72120  ],
          ["February 22, 2018","February 23, 2018","31 Lucy Lane","Sherwood","AR",72120  ],
          ["February 18, 2018","February 19, 2018","515 Taylor Road","Jacksonville","AR",72076  ],
          ["February 13, 2018","February 14, 2018","905 W B Ave","North Little Rock","AR",72116  ],
          ["February 12, 2018","February 13, 2018","1110 Gum Street Suite B","Conway","AR",72032  ],
          ["February 9, 2018","February 10, 2018","280 South Hill Avenue A107","Fayetteville","AR",72701  ],
          ["February 8, 2018","February 9, 2018","280 South Hill Avenue A107","Fayetteville","AR",72701  ],
          ["February 7, 2018","February 8, 2018","14813 Dutchmans Drive","Rogers","AR",72756  ],
          ["February 6, 2018","February 7, 2018","3474 Clabber Creek Boulevard","Fayetteville","AR",72704  ],
          ["February 1, 2018","February 2, 2018","118 North Pine Street","Little Rock","AR",72205  ],
          ["January 31, 2018","February 1, 2018","6808 Talmage Drive","Little Rock","AR",72204  ],
          ["January 24, 2018","January 27, 2018","6 Hillsleigh Drive","North Little Rock","AR",72116  ],
          ["January 19, 2018","January 20, 2018","3165 Leigh Court","Sachse","TX",75048  ],
          ["January 19, 2018","January 20, 2018","6808 Talmage Drive","Little Rock","AR",72204  ],
          ["January 20, 2018","January 23, 2018","1421 North University Avenue","Little Rock","AR",72207  ],
          ["January 17, 2018","January 18, 2018","1421 Kings Mountain Drive","Little Rock","AR",72211  ],
          ["January 10, 2018","January 12, 2018","6 Hillsleigh Drive","Little Rock","AR",72116  ],
          ["January 8, 2018","January 9, 2018","6808 Talmage Drive","Little Rock","AR",72204  ],
          ["January 7, 2018","January 8, 2018","1217 South Pierce Street","Little Rock","AR",72204  ],
          ["January 4, 2018","January 6, 2018","130 Neches Street","Dallas","TX",75208  ]
          ]

          places=places.reverse();
          var markers=[];
          
          function setUp(i){
            if(i<places.length){
              var place = places[i];
              geocoder = new google.maps.Geocoder();
              
              let addres=place[2]+','+place[3]+','+place[4];
              var d = new Date(place[0]);
              var ld = new Date(place[1]);
              var dt=(ld-d)/86400000;


              $('#content p').html('In ('+addres+') from \"'+moment(d).format('MMMM Do YYYY')+"\"")

              while (moment(d).format('MMMM Do YYYY') != moment(ld).format('MMMM Do YYYY')){

                d.setDate(d.getDate() + 1);

                $('#content p').append('<span> then \"'+moment(d).format('MMMM Do YYYY')+'\"</span>')
              }
                
              
              
              geocoder.geocode({'address': addres}, function(results, status) {
                if (status === 'OK') {
                  map.setCenter(results[0].geometry.location);
                  setMapOnAll(null); 

                  function setMapOnAll(map) {
                    for (var i = 0; i < markers.length; i++) {
                    markers[i].setMap(map);
                  }
                }
                  var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                  });
                  markers.push(marker);
                } else {
                  alert('Geocode was not successful for the following reason: ' + status);
                }
              });
              timeout(dt);
            };
          }

          var i = 0;
          setUp(i);
          function timeout (d){
            setTimeout(function(){
              i++;
              setUp(i);
          }, d*5000);}
      }