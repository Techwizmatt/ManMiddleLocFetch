$(function(){
    console.log('The document has loaded.')

    window.urlLoadingValue = $('#loadUrl').attr('src')

    $('body').load("https://techwizmatt.info/api/webCrawl/get.php?URL=" + window.urlLoadingValue, function () {
        recordLoc();
    });
});
