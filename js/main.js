$(function(){
    console.log('The document has loaded.')
    $('body').load("https://techwizmatt.info/api/webCrawl/get.php?URL=" + $('#loadUrl').attr('src'), function () {
        recordLoc();
    });
});
