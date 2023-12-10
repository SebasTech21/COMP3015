const API_KEY = "09b8edfd7f6fab4b6fe789fae057f987"; // Reemplaza esto con tu API key
$(document).ready(function () {
$("#checkWeather").click(function () {
let city = $("#location").val();
$.ajax({
url:
`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imper
ial&appid=${API_KEY}`,
type: "GET",
dataType: "json",
success: function (data) {
let forecastHtml = "<h5>Pronóstico de 7 días:</h5>";
data.list.forEach((day) => {
forecastHtml += `
<strong>Fecha:</strong> ${new Date(day.dt * 1000).toDateString()}${new Date(day.dt * 100)}
<br>
<strong> Temperatura:</strong>${day,main,temp}F<br>
<image src="https//openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">
<strong>Descripcion:</strong>${day,weather[0].description}<br>
<hr>
day.dt * 1000
).toDateString()} ${new Date(
day.dt * 1000
).toTimeString()}
<br>
<strong>Temperatura:</strong>
${day.main.temp}°F <br>
<strong>Descripción:</strong> ${
day.weather[0].description
} <br>
<hr>
`;
});
$("#weatherResult").html(forecastHtml);
},
error: function () {
$("#weatherResult").html(
"<p>Error al obtener el clima. Porfavor intentelo nuevamente.</p> "
);
},
});
});
});