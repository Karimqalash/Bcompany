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
              ["December 8, 2018","December 9, 2018","880 Broad Street","Teaneck","NJ",7666  ]
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