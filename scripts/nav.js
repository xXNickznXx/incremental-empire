/*eslint-disable no-undef*/
/*jslint white:true*/
$("#btn_build").click(function () {
    if (win.matches) {
        $("#right").slideUp();
    }
    $("#build").slideToggle();
    $("#upgrade").slideUp();
    $("#craft").slideUp();
    $("#trade").slideUp();
    $("#travel").slideUp();
    $("#options").slideUp();
});
$("#btn_upgrade").click(function () {
    if (win.matches) {
        $("#right").slideUp();
    }
    $("#build").slideUp();
    $("#upgrade").slideToggle();
    $("#craft").slideUp();
    $("#trade").slideUp();
    $("#travel").slideUp();
    $("#options").slideUp();
});
$("#btn_craft").click(function () {
    if (win.matches) {
        $("#right").slideUp();
    }
    $("#build").slideUp();
    $("#upgrade").slideUp();
    $("#craft").slideToggle();
    $("#trade").slideUp();
    $("#travel").slideUp();
    $("#options").slideUp();
});
$("#btn_trade").click(function () {
    if (win.matches) {
        $("#right").slideUp();
    }
    $("#build").slideUp();
    $("#upgrade").slideUp();
    $("#craft").slideUp();
    $("#trade").slideToggle();
    $("#travel").slideUp();
    $("#options").slideUp();
});
$("#btn_travel").click(function () {
    if (win.matches) {
        $("#right").slideUp();
    }
    $("#build").slideUp();
    $("#upgrade").slideUp();
    $("#craft").slideUp();
    $("#trade").slideUp();
    $("#travel").slideToggle();
    $("#options").slideUp();
});
$("#btn_options").click(function () {
    if (win.matches) {
        $("#right").slideUp();
    }
    $("#build").slideUp();
    $("#upgrade").slideUp();
    $("#craft").slideUp();
    $("#trade").slideUp();
    $("#travel").slideUp();
    $("#options").slideToggle();
});

$("#btn_mobile").click(function () {
    $("#right").slideToggle();
    $("#build").slideUp();
    $("#upgrade").slideUp();
    $("#craft").slideUp();
    $("#trade").slideUp();
    $("#travel").slideUp();
    $("#options").slideUp();
});