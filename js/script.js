$(document).ready(function() {

    $("#submitWeather").click(function(){

      var city = $("#city").val();
      if (city != ''){
        $.ajax({
          url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=90f0cf3b257712c65a9a9f9616ba4a62",
          type:"GET",
          dataType:"jsonp",
          success:function(data) {
          var widget = show(data);

          $("#show").html(widget);

          $("#city").val('');
          }
        });
      }else{
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Veuillez mettre une ville</div>");
      }
    });
});

function show(data){
  return "<h3 style='font-size:40px; font-weight: bold' class='text-center'>Météo actuelle pour " + data.name + ","  + "</h3>" +
    "<h3 style= 'padding-left:40px;'><strong>Météo</strong>: "+ data.weather[0].main + "</h3>" +
    "<h3 style= 'padding-left:40px;'><strong>Description</strong>: <img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'>"+ data.weather[0].description + "</h3>" +
    "<h3 style= 'padding-left:40px;'><strong>Température</strong>: "+ data.main.temp + " &deg;C</h3>" +
    "<h3 style= 'padding-left:40px;'><strong>Pression</strong>: "+ data.main.pressure + " hPa</h3>" +
    "<h3 style= 'padding-left:40px;'><strong>Humidité</strong>: "+ data.main.humidity + " %</h3>" +
    "<h3 style= 'padding-left:40px;'><strong>Température Min.</strong>: "+ data.main.temp_min + " &deg;C</h3>" +
    "<h3 style= 'padding-left:40px;'><strong>Température Max.</strong>: "+ data.main.temp_max + " &deg;C</h3>" +
    "<h3 style= 'padding-left:40px;'><strong>Vitesse du vent</strong>: "+ data.wind.speed + " km/h</h3>" +
    "<h3 style= 'padding-left:40px;'><strong>Direction du vent</strong>: "+ data.wind.deg + " &deg;</h3>";

}
