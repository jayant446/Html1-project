        var attempt = 3;

        function validate() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            if (username == "dipender" && password == "dip008") {
                alert("Login successfully");
                window.location = "homepage.html"; // Redirecting to other page.
                return false;
            } else if (username == "narayan" && password == "06032001") {
				alert("Login successfully");
                window.location = "homepage.html"; // Redirecting to other page.
                return false;
			} else {
                attempt--;
                alert("You have left " + attempt + " attempt;");

                if (attempt == 0) {
                    document.getElementById("username").disabled = true;
                    document.getElementById("password").disabled = true;
                    document.getElementById("submit").disabled = true;
                    return false;
                }
            }
        }