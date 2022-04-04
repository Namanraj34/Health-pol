

function myFunction() {
    // for(i = 1;i<=10;i++){
    //     document.write(`2 x ${i} = ${2*i}`)
    //     document.write("<br>")
    // }
    var health = document.getElementById('health').value;
    var age = document.getElementById('age').value;
    var Location = document.getElementById('city').value;
    var Village = document.getElementById('village').value;
    var gender = document.getElementById('gender').value;

    // let health = prompt("Enter Your Health 'Good or Poor'", "guest")
    // let age = prompt("Enter Your Age", 20)
    // let Location = prompt("Enter Your Location 'City or Village'", "City")
    // let gender = prompt("Enter Your Gender", "Male or Female")

    if (health == "Good" && age > 18 && Location == "City" && gender == "Male") {
        document.write(`Your health is ${health} "<br>" Your Age is ${age} "<br>" Live in ${Location} "<br>"  Gender: ${gender}`)
        document.write("<br>", "Your Health Policy is 35 Lakh Rupees '<br>'")
        document.write("To Apply This Policy Please Contact Us =>  7485962547")
    }

    else if (health == "Poor" && age > 18 && Location == "City" && gender == "Male") {

        document.write(`Your health is ${health} "<br>" Your Age is ${age} "<br>" Live in ${Location} "<br>" Gender: ${gender}`)

        document.write("<br>","Your Health Policy is 25 Lakh Rupees '<br>'")
        document.write("To Apply This Policy Please Contact Us =>  7485962547")

    }

    else if (health == "Good" && age > 18 && Village == "Village" && gender == "Male") {

        document.write(`Your health is ${health} "<br>" Your Age is ${age} "<br>" Live in ${Village} "<br>" Gender: ${gender}`)

        document.write("<br>","Your Health Policy is 31 Lakh Rupees '<br>'")
        document.write("To Apply This Policy Please Contact Us =>  7485962547")

    }
    else if (health == "Poor" && age > 18 && Village == "Village" && gender == "Male") {

        document.write(`Your health is ${health} "<br>" Your Age is ${age} "<br>" Live in ${Village} "<br>" Gender: ${gender}`)

        document.write("<br>","Your Health Policy is 28 Lakh Rupees '<br>'")
        document.write("To Apply This Policy Please Contact Us =>  7485962547")

    }
    else if (health == "Good" && age > 18 && Location == "City" && gender == "Female") {

        document.write(`Your health is ${health} "<br>" Your Age is ${age} "<br>" Live in ${Location} "<br>" Gender: ${gender}`)

        document.write("<br>","Your Health Policy is 33 Lakh Rupees '<br>'")
        document.write("To Apply This Policy Please Contact Us =>  7485962547")

    }
    else if (health == "Poor" && age > 18 && Location == "City" && gender == "Female") {

        document.write(`Your health is ${health} "<br>" Your Age is ${age} "<br>" Live in ${Location} "<br>" Gender: ${gender}`)

        document.write("<br>","Your Health Policy is 28 Lakh Rupees '<br>'")
        document.write("To Apply This Policy Please Contact Us =>  7485962547")

    }

    else if (health == "Good" && age > 18 && Village == "Village" && gender == "Female") {

        document.write(`Your health is ${health} "<br>" Your Age is ${age} "<br>" Live in ${Village} "<br>" Gender: ${gender}`)

        document.write("<br>","Your Health Policy is 30 Lakh Rupees '<br>'")
        document.write("To Apply This Policy Please Contact Us =>  7485962547")

    }
    else if (health == "Poor" && age > 18 && Village == "Village" && gender == "Female") {

        document.write(`Your health is ${health} "<br>" Your Age is ${age} "<br>" Live in ${Village} "<br>" Gender: ${gender}`)

        document.write("<br>","Your Health Policy is 28 Lakh Rupees '<br>'")
        document.write("To Apply This Policy Please Contact Us =>  7485962547")
    }

    else {
        document.write("You not field correctly the form '<br>'")

  
    }
}

window.localStorage
// let sum = 0;

        // for(i=1;i<=10;i++){
        //     document.write(`${num} x ${i} = ${num*i}`)
        //     document.write("<br>")
        // }
