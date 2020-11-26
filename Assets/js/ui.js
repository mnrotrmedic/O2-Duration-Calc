var cylinderConstant, currentPSI, rate //declare variables that get form inputs


calculate = () => { //function run after user enters relevent info in form

    cylinderConstant = parseFloat(document.getElementById("cylinderConstant").value); //cylinder constant based on size selected by user
    currentPSI = parseInt(document.getElementById("gaugePressure").value); //remaining PSI entered by user
    rate = parseInt(document.getElementById("flowRate").value); //flow rate (use) entered by user 

    // console.log("Cylinder Constant: ", cylinderConstant)
    // console.log("Current PSI : ", currentPSI);
    // console.log("Rate : ", rate);

    document.getElementById("constant").innerHTML = cylinderConstant; //write formula values at bottom of the page
    document.getElementById("gaugePSI").innerHTML = currentPSI; //write formula values at bottom of the page
    document.getElementById("flow").innerHTML = rate; //write formula values at bottom of the page

    var timeLeft = Math.floor(((currentPSI - 200) * cylinderConstant) / rate); //the math happens here

    document.getElementById("duration").innerHTML = (timeLeft + " minutes") //write duration in formula
    document.getElementById("durationBanner").innerHTML = (timeLeft + " minutes") //write duration in otherwise empty H1 div
}