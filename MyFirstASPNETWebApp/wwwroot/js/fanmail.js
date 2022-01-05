    //document.getElementById("buttonsend").addEventListener("click", function() {
    //alert("From: " + document.getElementById("textFrom").value +
    //    "\n" + "Subject: " + document.getElementById("textSubject").value +
    //    "\n" + "Message: " + document.getElementById("textMessage").value
    //);
    //})


    $("#buttonsend").click(function () {
        alert("From: " + $("#textFrom").val() +
            "\n" + "Subject: " + $("#textSubject").val() +
            "\n" + "Message: " + $("#textMessage").val()
        );
        $("#gandersonPhoto").fadeOut("slow");
    })
