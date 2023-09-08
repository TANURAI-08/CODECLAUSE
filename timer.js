

var countDownDate = new Date("Jun 5,2022 15:37:25").getTime();

var X=setInterval(function() {

    var now = new Date().getTime();

    var Distance = countDownDate-now;

    var days = Math.floor(Distance/(1000*60*60*24));
    var hours = Math.floor(Distance%(1000*60*60*24)/(1000*60*60));
    var minutes = Math.floor(Distance%(1000*60*60)/(1000*60));
    var seconds = Math.floor(Distance%(1000*60)/1000);

    document.getElementById("demo").innerHTML = days+"d"+hours+"h"+minutes+"m"+seconds+"s";

    if (Distance<0)
    {
        clearInterval(X);
        document.getElementById("demo").innerHTML="Expired";
    }
}, 1000);