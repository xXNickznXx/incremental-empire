/*eslint-disable no-undef*/
/*jslint white:true*/

function decode(str) {
    return str.replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(dec);
    });
}
var str;
$("#supplies .th").click(function () {
    if ($("#supplies #row").css("display") == "none") {
        str = "&#9207;Vorräte";
        str = decode(str);
        $("#supplies .th").text(str);
    } else {
        str = "&#9205;Vorräte";
        str = decode(str);
        $("#supplies .th").text(str);
    }
    $("#supplies #row").slideToggle();
});

$("#items .th").click(function () {
    if ($("#items #row").css("display") == "none") {
        str = "&#9207;Gegenstände";
        str = decode(str);
        $("#items .th").text(str);
    } else {
        str = "&#9205;Gegenstände";
        str = decode(str);
        $("#items .th").text(str);
    }
    $("#items #row").slideToggle();
});

$("#villagers .th").click(function () {
    if ($("#villagers #row").css("display") == "none") {
        str = "&#9207;Bewohner";
        str = decode(str);
        $("#villagers .th").text(str);
    } else {
        str = "&#9205;Bewohner";
        str = decode(str);
        $("#villagers .th").text(str);
    }
    $("#villagers #row").slideToggle();
});

$("#jobs .th").click(function () {
    if ($("#jobs #row").css("display") == "none") {
        str = "&#9207;Jobs";
        str = decode(str);
        $("#jobs .th").text(str);
    } else {
        str = "&#9205;Jobs";
        str = decode(str);
        $("#jobs .th").text(str);
    }
    $("#jobs #row").slideToggle();
});