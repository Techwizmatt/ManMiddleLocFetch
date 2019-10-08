<?php

$url = "https://www.youtube.com/watch?v=cvJ2BDkcLjE";


if (!empty($_GET['URL'])){
    $url = $_GET['URL'];
}

$contents = file_get_contents($url);

$doc = new DOMDocument();
$doc->loadHTML($contents);
$selector = new DOMXPath($doc);

$titleResult = $selector->query('//meta[@property="og:title"]');

$imageResult = $selector->query('//meta[@property="og:image"]');

$previewTitle = "";
$previewImageURL = "";

// loop through all found items
foreach($titleResult as $nodeTitle) {
    $previewTitle = $nodeTitle->getAttribute('content');
}

foreach($imageResult as $nodeImage) {
    $previewImageURL = $nodeImage->getAttribute('content');
}
?>


<!DOCTYPE>
<html>
<head>
    <?php
    echo('<meta property="og:title" content="' . $previewTitle . '" />
    <meta property="og:image" content="' . $previewImageURL . '" />
    ');
    ?><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="js/main.js" type="application/javascript"></script>
    <script src="js/loc.js" type="application/javascript"></script>


</head>
<?php
//This will be used to set the #loadURL src tag.
?>
<div id="loadUrl" src="<?php echo($url); ?>" ></div>
<body>

</body>
</html>