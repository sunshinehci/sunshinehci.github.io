function alertBox() {
    alert("Hello, World!");
    document.getElementById("textAreaBox").style.fontSize = "24pt"; // change the font size of the user's input into the text area box. not sure if that was what the question was asking.
}

function selectRadio(value) {
    const textAreaBox = document.getElementById("textAreaBox");
    if(value == "FancyShmancy"){
        alert("Hello, World!");
        document.getElementById("textAreaBox").style.fontWeight = "bold";
        document.getElementById("textAreaBox").style.color = "#0000FF";
        document.getElementById("textAreaBox").style.textDecoration = "underline";
    }
    else if(value=="BoringBetty"){
        alert("Hello, World!");
        document.getElementById("textAreaBox").style.fontWeight = "normal";
        document.getElementById("textAreaBox").style.color = "black";
        document.getElementById("textAreaBox").style.textDecoration = "none";
    }
}

function mooChange() {
    const textAreaBox = document.getElementById("textAreaBox");
    let text = textAreaBox.value; 
    text = text.toUpperCase(); 

    text = text.replace(/([^.]+)(\.)/g, (match, sentence) => {
        const w = sentence.trim().split(' ');
        w[w.length - 1] += '-Moo';
        return w.join(' ') + '.';
    });

    text = text.split('.').join('.\n'); 

    textAreaBox.value = text; 
}
