function calculateLove() {
    var name1 = document.getElementById("name1").value.toLowerCase();
    var name2 = document.getElementById("name2").value.toLowerCase();

    var combinedString = name1 + name2;

    var trueCount = combinedString.split("t").length - 1 +
                    combinedString.split("r").length - 1 +
                    combinedString.split("u").length - 1 +
                    combinedString.split("e").length - 1;

    var loveCount = combinedString.split("l").length - 1 +
                    combinedString.split("o").length - 1 +
                    combinedString.split("v").length - 1 +
                    combinedString.split("e").length - 1;

    var loveScore = parseInt(trueCount.toString() + loveCount.toString());

    var resultDiv = document.getElementById("result");
    if (loveScore < 10 || loveScore > 90) {
        resultDiv.innerText = "Va cam iubiti cam pe laa " + loveScore + "%! Nici pe titanic nu se iubeau asaa!";
    } else if (loveScore >= 50 && loveScore <= 90) {
        resultDiv.innerText = "Hai sa zicem ca sunteti okk cu " + loveScore + "%! Poate luna urmatoare reveniti sa refacem testul.";
    } else {
        resultDiv.innerText = "E fizica quantique cum de functionati la " + loveScore + "%! Si voi nu stiti fizica quantique asa-i?";
    }
}
