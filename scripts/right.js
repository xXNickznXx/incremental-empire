/*eslint-disable no-undef*/
/*jslint white:true*/

function decode(str) {
    return str.replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(dec);
    });
}
var str;
$("#villagers .th").click(function () {
    if ($("#content_villagers").css("display") == "none") {
        str = "&#9207;Bewohner";
        str = decode(str);
        $("#villagers .th").text(str);
    } else {
        str = "&#9205;Bewohner";
        str = decode(str);
        $("#villagers .th").text(str);
    }
    $("#content_villagers").slideToggle();
});

$("#jobs .th").click(function () {
    if ($("#content_jobs").css("display") == "none") {
        str = "&#9207;Jobs";
        str = decode(str);
        $("#jobs .th").text(str);
    } else {
        str = "&#9205;Jobs";
        str = decode(str);
        $("#jobs .th").text(str);
    }
    $("#content_jobs").slideToggle();
});

$("#supplies .th").click(function () {
    if ($("#content_supplies").css("display") == "none") {
        str = "&#9207;Vorräte";
        str = decode(str);
        $("#supplies .th").text(str);
    } else {
        str = "&#9205;Vorräte";
        str = decode(str);
        $("#supplies .th").text(str);
    }
    $("#content_supplies").slideToggle();
});

$("#items .th").click(function () {
    if ($("#content_items").css("display") == "none") {
        str = "&#9207;Gegenstände";
        str = decode(str);
        $("#items .th").text(str);
    } else {
        str = "&#9205;Gegenstände";
        str = decode(str);
        $("#items .th").text(str);
    }
    $("#content_items").slideToggle();
});