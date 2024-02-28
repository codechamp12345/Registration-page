function validation(event) {
    event.preventDefault(); // Prevent default form submission

    if (document.Formfill.Username.value === "") {
        document.getElementById("result").innerHTML = "Enter Username*";
        return false;
    } else if (document.Formfill.Username.value.length < 6) {
        document.getElementById("result").innerHTML = "At least six letters*";
        return false;
    } else if (document.Formfill.Email.value === "") {
        document.getElementById("result").innerHTML = "Enter Your Email*";
        return false;
    } else if (document.Formfill.Password.value === "") {
        document.getElementById("result").innerHTML = "Enter Your Password*";
        return false;
    } else if (document.Formfill.Password.value.length < 6) {
        document.getElementById("result").innerHTML = "Password must be 6 characters long*";
        return false;
    } else if (document.Formfill.CPassword.value === "") {
        document.getElementById("result").innerHTML = "Enter Confirm Password*";
        return false;
    } else if (document.Formfill.Password.value !== document.Formfill.CPassword.value) {
        document.getElementById("result").innerHTML = "Password doesn't match";
        return false;
    } else {
        popup.classList.add("open-slide");
        return false;
    }
}


//var popup = document.getElementById('popup');

function CloseSlide() {
    popup.classList.remove("open-slide");
}


