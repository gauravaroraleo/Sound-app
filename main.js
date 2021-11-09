function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    mymodel = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ybqbL52m_/model.json", modelReady);
}

function modelReady() {
    mymodel.classify(gotResults);

}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("sound_name").innerHTML = "I can hear " + results[0].label;
        document.getElementById("accuracy").innerHTML = "Accuracy : " + (results[0].confidence * 100).toFixed(2) + " %";
        i1 = document.getElementById("cat");
                i2 = document.getElementById("dog");
        i3 = document.getElementById("peacock");
        i4 = document.getElementById("animals");

        if (results[0].label == "Meow") {
            i1.src = "catty.gif";
            i2.src="dog.jpeg"
            i3.src="peackok.jpeg"
            i4.src="animals.jpeg"
        } else if (results[0].label == "Peacock") {
            i3.src = "peacock.gif";
            i1.src = "cat.jpeg";
            i2.src="dog.jpeg"
            i4.src="animals.jpeg"
        } else if (results[0].label == "Bark") {
            i2.src = "doge.gif";
            i1.src = "cat.jpeg";
            i3.src="peackok.jpeg"
            i4.src="animals.jpeg"
        } else {
            i4.src = "8783104_45dd6.gif";
            i1.src = "cat.jpeg";
            i2.src="dog.jpeg"
            i3.src="peackok.jpeg"
          
        }
    }

}
