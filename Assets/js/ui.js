// Variables for the calculateDuration function
var cylinderConstant, currentPSI, rate //declare variables that get form inputs

// Variables for Consumption Calculation function
const t1AdultBaseFLow = 3;
const t1NeonatalBaseFLow = 4;


calculateDuration = () => { //function run after user enters relevent info in form

    cylinderConstant = parseFloat(document.getElementById("cylinderConstant").value); //cylinder constant based on size selected by user
    currentPSI = parseInt(document.getElementById("gaugePressure").value); //remaining PSI entered by user
    rate = parseInt(document.getElementById("flowRate").value); //flow rate (use) entered by user 

    // console.log("Cylinder Constant: ", cylinderConstant)
    // console.log("Current PSI : ", currentPSI);
    // console.log("Rate : ", rate);

    // document.getElementById("constant").innerHTML = cylinderConstant; //write formula values at bottom of the page
    // document.getElementById("gaugePSI").innerHTML = currentPSI; //write formula values at bottom of the page
    // document.getElementById("flow").innerHTML = rate; //write formula values at bottom of the page

    var timeLeft = Math.floor(((currentPSI - 200) * cylinderConstant) / rate); //the math happens here

    // document.getElementById("duration").innerHTML = (timeLeft + " minutes") //write duration in formula
    document.getElementById("durationBanner").innerHTML = (timeLeft + " minutes") //write duration in otherwise empty H1 div
}

calculateConsumption = () => {
    // console.log('consumption button clicked');

    const minuteVolume = parseFloat(document.getElementById("minuteVolume").value); //minute volume entered from user input
    const ptGroup = parseInt(document.getElementById("ptGroup").value); //patient group as selected in dropdown
    const MVLeak = parseInt(document.getElementById("MVLeak").value); //leak value entered in form. Has default value of zero
    const FiO2 = parseInt(document.getElementById("FiO2").value); //Oxygen percentage value entered in form.

    // console.log('minuteVolume: ' + minuteVolume);
    // console.log('Patient Age Group: ' + ptGroup);
    // console.log('Minute Volume Leak: ' + MVLeak);
    // console.log('FiO2: ' + FiO2);

    let consumption = ((minuteVolume + ptGroup + MVLeak) * ((FiO2 - 20.9) / 79.1)).toFixed(2);

    console.log('Consumption: ' + consumption + ' l/min')

    document.getElementById('o2Consumption').innerHTML = (consumption + ' l/min');
}

// Open the selected tab
function openPage(pageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) { //hide all of the divs with tabcontent as class
        tabcontent[i].style.display = "none";
    }

    document.getElementById(pageName).style.display = "block";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();