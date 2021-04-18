var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event) {

    console.log(event);

    var Content = event.results[0] [0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);

    if(Content=="take my selfie")
    {
        speak();
    }
}

function speak()
{
    var synth = window.speechSynthesis;

    speak_data = "taking your selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout (function(){
        takesnap();
        save();
    },5000)
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png' ,
    png_quality:90
});
camera = document.getElementById("camera");

function takesnap()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='snap_image' src='"+data_uri+"'>"
    });
}

function save()
{
    image=document.getElementById("snap_image").src;
    document.getElementById("link").href=image;
    document.getElementById("link").click();
}