        var myInput = document.getElementById("psw");
        

        // When the user clicks on the password field, show the message box
        myInput.onfocus = function() {
            document.getElementById("message").style.display = "block";
        }

        // When the user clicks outside of the password field, hide the message box
        myInput.onblur = function() {
            document.getElementById("message").style.display = "none";
        }

        
        

        function sign_up() {
            var name = document.forms["RegForm"]["Name"];
            var email = document.forms["RegForm"]["EMail"];
            var phone = document.forms["RegForm"]["Telephone"];
            var what = document.forms["RegForm"]["Subject"];
            var password = document.forms["RegForm"]["Password"];
            var address = document.forms["RegForm"]["Address"];
            if (name.value == "") {
                window.alert("Please enter your name.");
                name.focus();
                return false;
            }

            if (address.value == "") {
                window.alert("Please enter your address.");
                name.focus();
                return false;
            }

            if (email.value == "") {
                window.alert("Please enter a valid e-mail address.");
                email.focus();
                return false;
            }

            if (email.value.indexOf("@", 0) < 0) {
                window.alert("Please enter a valid e-mail address.");
                email.focus();
                return false;
            }
            if (email.value.indexOf(".", 0) < 0) {
                window.alert("Please enter a valid e-mail address.");
                email.focus();
                return false;
            }

            if (phone.value == "") {
                window.alert("Please enter your telephone number.");
                phone.focus();
                return false;
            }



           

            return true;
        }