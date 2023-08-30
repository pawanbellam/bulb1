<html lang="en">
<head>
    <title>BULB</title>
    <link rel="stylesheet" href="bulb.css">
    <style type="text/css">
        *{
    text-align: center;
    background-color: rgba(140, 240, 138, 0.837);
}


button{
    margin-top: 2%;
    color:black;
    background-color: white;
    height: 50px;
    width: 120px;
    border-radius: 20%;
    font-family: 'Times New Roman', Times, serif;
    font-size: medium;
    font-weight: bolder;
    background-color: burlywood;
    position: relative;
}

img{
    margin:auto;
    height: 256px;
    width: 256px;
}
#off{
     margin-left:20%;
}

button:hover{
    color: aliceblue;
    background-color:darkred;
    cursor: pointer;
}

    </style>

</head>
<body>
    <script type="text/javascript">
        function bulb_on(){
    document.getElementById('image').src="on.JPEG.";
}
function bulb_off(){
    document.getElementById('image').src ="f.JPEG ";
}

    </script>
    <h1>CLICK THE BUTTON TO ON AND OFF THE BULB..!</h1>
    <div>
        <img id="image" src="on.jpeg" alt="off">
    </div>
    <div>
        <button id="on" onclick="bulb_on()">ON</button>
        <button id="off" onclick="bulb_off()">OFF</button>
    </div>
    <script src="./bulb.js"></script>
</body>
</html>
