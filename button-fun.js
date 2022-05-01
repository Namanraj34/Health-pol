

function myFunction() {
    var health = document.getElementById('health').value;
    var age = document.getElementById('age').value;
    var Location = document.getElementById('city').value;
    var Village = document.getElementById('village').value;
    var gender = document.getElementById('gender').value;

    if (health == "Good" && age > 18 && Location == "City" && gender == "Male") {
        document.write(`Your health is ${health} "<br>" Your Age is ${age} "<br>" Live in ${Location} "<br>"  Gender: ${gender}`)
        document.write("<br>", "Get ₹15 Lac Health Insurance starts '<br>' @ ₹999/month*")
        document.write("To Apply This Policy Please Contact Us =>  7485962547")
    }

    else if (health == "Poor" && age > 18 && Location == "City" && gender == "Male") {

        document.write(`Your health is ${health} "<br>" Your Age is ${age} "<br>" Live in ${Location} "<br>" Gender: ${gender}`)

        document.write("<br>","Get ₹12 Lac Health Insurance starts '<br>' @ ₹799/month")
        document.write("To Apply This Policy Please Contact Us =>  7485962547")

    }

    else if (health == "Good" && age > 18 && Village == "Village" && gender == "Male") {

        document.write(`Your health is ${health} "<br>" Your Age is ${age} "<br>" Live in ${Village} "<br>" Gender: ${gender}`)

        document.write("<br>","Get ₹13 Lac Health Insurance starts '<br>' @ ₹849/month")
        document.write("To Apply This Policy Please Contact Us =>  7485962547")

    }
    else if (health == "Poor" && age > 18 && Village == "Village" && gender == "Male") {

        document.write(`Your health is ${health} "<br>" Your Age is ${age} "<br>" Live in ${Village} "<br>" Gender: ${gender}`)

        document.write("<br>","Get ₹11 Lac Health Insurance starts '<br>' @ ₹699/month")
        document.write("To Apply This Policy Please Contact Us =>  7485962547")

    }
    else if (health == "Good" && age > 18 && Location == "City" && gender == "Female") {

        document.write(`Your health is ${health} "<br>" Your Age is ${age} "<br>" Live in ${Location} "<br>" Gender: ${gender}`)

        document.write("<br>","Get ₹15 Lac Health Insurance starts '<br>' @ ₹999/month")
        document.write("To Apply This Policy Please Contact Us =>  7485962547")

    }
    else if (health == "Poor" && age > 18 && Location == "City" && gender == "Female") {

        document.write(`Your health is ${health} "<br>" Your Age is ${age} "<br>" Live in ${Location} "<br>" Gender: ${gender}`)

        document.write("<br>","Get ₹12 Lac Health Insurance starts '<br>' @ ₹799/month")
        document.write("To Apply This Policy Please Contact Us =>  7485962547")

    }

    else if (health == "Good" && age > 18 && Village == "Village" && gender == "Female") {

        document.write(`Your health is ${health} "<br>" Your Age is ${age} "<br>" Live in ${Village} "<br>" Gender: ${gender}`)

        document.write("<br>","Get ₹13 Lac Health Insurance starts '<br>' @ ₹849/month")
        document.write("To Apply This Policy Please Contact Us =>  7485962547")

    }
    else if (health == "Poor" && age > 18 && Village == "Village" && gender == "Female") {

        document.write(`Your health is ${health} "<br>" Your Age is ${age} "<br>" Live in ${Village} "<br>" Gender: ${gender}`)

        document.write("<br>","Get ₹11 Lac Health Insurance starts '<br>' @ ₹699/month")
        document.write("To Apply This Policy Please Contact Us =>  7485962547")
    }

    else {
        document.write("You not field correctly the form '<br>'")

  
    }
}        

