$(function() {
    $("#sendmail").click(function() {
        var name = $("#name").val();
        var mail = $("#mail").val();
        var website = $("#website").val();
        var message = $("#message").val();
        if (name !== "" && mail !== "" && message !== "") {
            $.post("/support/contact", {'name':name,'mail':mail,'website':website,'message':message}, function(data) {
                console.log(data);
                if (data === "Sent") {
                    alert("Thank you for contacting us");
                    $("#name").val("");
                    $("#mail").val("");
                    $("#website").val("");
                    $("#message").val("");
                } else {
                    alert(data);
                }
            });
        }
    });
});