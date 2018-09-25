/*eslint-disable no-undef*/
/*jslint white:true*/




$("#btn_armor").click(function () {
    if ($("#coll_armor").css("display") === "none") {
        $("#btn_armor").css("border-bottom", "0");
        $("#btn_armor").css("border-bottom-left-radius", "0");
        $("#btn_armor").css("border-bottom-right-radius", "0");
    } else {
        $("#btn_armor").removeAttr("style");
    }
    $("#coll_armor").slideToggle();
});
$("#btn_weapons").click(function () {
    if ($("#coll_weapons").css("display") === "none") {
        $("#btn_weapons").css("border-bottom", "0");
        $("#btn_weapons").css("border-bottom-left-radius", "0");
        $("#btn_weapons").css("border-bottom-right-radius", "0");
    } else {
        $("#btn_weapons").removeAttr("style");
    }
    $("#coll_weapons").slideToggle();
});
$("#btn_melee").click(function () {
    if ($("#coll_melee").css("display") === "none") {
        $("#btn_melee").css("border-bottom", "0");
        $("#btn_melee").css("border-bottom-left-radius", "0");
        $("#btn_melee").css("border-bottom-right-radius", "0");
    } else {
        $("#btn_melee").removeAttr("style");
    }
    $("#coll_melee").slideToggle();
});
$("#btn_ranged").click(function () {
    if ($("#coll_ranged").css("display") === "none") {
        $("#btn_ranged").css("border-bottom", "0");
        $("#btn_ranged").css("border-bottom-left-radius", "0");
        $("#btn_ranged").css("border-bottom-right-radius", "0");
    } else {
        $("#btn_ranged").removeAttr("style");
    }
    $("#coll_ranged").slideToggle();
});
$("#btn_gifts").click(function () {
    if ($("#coll_gifts").css("display") === "none") {
        $("#btn_gifts").css("border-bottom", "0");
        $("#btn_gifts").css("border-bottom-left-radius", "0");
        $("#btn_gifts").css("border-bottom-right-radius", "0");
    } else {
        $("#btn_gifts").removeAttr("style");
    }
    $("#coll_gifts").slideToggle();
});

var leatherarmor_num = 0,
    leatherarmor_p,
    leatherarmor_m,
    leatherarmor_t;
$("#up_leatherarmor").click(function () {
    leatherarmor_num += 1;
    $("#num_leatherarmor").text(leatherarmor_num);
});
function leatherarmor_plus() {
    leatherarmor_num += 1;
    $("#num_leatherarmor").text(leatherarmor_num);
}
$("#up_leatherarmor").mousedown(function () {
    leatherarmor_t = setTimeout(function () {leatherarmor_p = setInterval(leatherarmor_plus, 50);}, 500);
});

$("#dwn_leatherarmor").click(function () {
    leatherarmor_num -= 1;
    $("#num_leatherarmor").text(leatherarmor_num);
});
function leatherarmor_minus() {
    leatherarmor_num -= 1;
    $("#num_leatherarmor").text(leatherarmor_num);
}
$("#dwn_leatherarmor").mousedown(function () {
    leatherarmor_t = setTimeout(function () {leatherarmor_m = setInterval(leatherarmor_minus, 50);}, 500);
});


var ironarmor_num = 0,
    ironarmor_p,
    ironarmor_m,
    ironarmor_t;
$("#up_ironarmor").click(function () {
    ironarmor_num += 1;
    $("#num_ironarmor").text(ironarmor_num);
});
function ironarmor_plus() {
    ironarmor_num += 1;
    $("#num_ironarmor").text(ironarmor_num);
}
$("#up_ironarmor").mousedown(function () {
    ironarmor_t = setTimeout(function () {ironarmor_p = setInterval(ironarmor_plus, 50);}, 500);
});

$("#dwn_ironarmor").click(function () {
    ironarmor_num -= 1;
    $("#num_ironarmor").text(ironarmor_num);
});
function ironarmor_minus() {
    ironarmor_num -= 1;
    $("#num_ironarmor").text(ironarmor_num);
}
$("#dwn_ironarmor").mousedown(function () {
    ironarmor_t = setTimeout(function () {ironarmor_m = setInterval(ironarmor_minus, 50);}, 500);
});


var sword_num = 0,
    sword_p,
    sword_m,
    sword_t;
$("#up_sword").click(function () {
    sword_num += 1;
    $("#num_sword").text(sword_num);
});
function sword_plus() {
    sword_num += 1;
    $("#num_sword").text(sword_num);
}
$("#up_sword").mousedown(function () {
    sword_t = setTimeout(function () {sword_p = setInterval(sword_plus, 50);}, 500);
});

$("#dwn_sword").click(function () {
    sword_num -= 1;
    $("#num_sword").text(sword_num);
});
function sword_minus() {
    sword_num -= 1;
    $("#num_sword").text(sword_num);
}
$("#dwn_sword").mousedown(function () {
    sword_t = setTimeout(function () {sword_m = setInterval(sword_minus, 50);}, 500);
});


var axe_num = 0,
    axe_p,
    axe_m,
    axe_t;
$("#up_axe").click(function () {
    axe_num += 1;
    $("#num_axe").text(axe_num);
});
function axe_plus() {
    axe_num += 1;
    $("#num_axe").text(axe_num);
}
$("#up_axe").mousedown(function () {
    axe_t = setTimeout(function () {axe_p = setInterval(axe_plus, 50);}, 500);
});

$("#dwn_axe").click(function () {
    axe_num -= 1;
    $("#num_axe").text(axe_num);
});
function axe_minus() {
    axe_num -= 1;
    $("#num_axe").text(axe_num);
}
$("#dwn_axe").mousedown(function () {
    axe_t = setTimeout(function () {axe_m = setInterval(axe_minus, 50);}, 500);
});


var morningstar_num = 0,
    morningstar_p,
    morningstar_m,
    morningstar_t;
$("#up_morningstar").click(function () {
    morningstar_num += 1;
    $("#num_morningstar").text(morningstar_num);
});
function morningstar_plus() {
    morningstar_num += 1;
    $("#num_morningstar").text(morningstar_num);
}
$("#up_morningstar").mousedown(function () {
    morningstar_t = setTimeout(function () {morningstar_p = setInterval(morningstar_plus, 50);}, 500);
});

$("#dwn_morningstar").click(function () {
    morningstar_num -= 1;
    $("#num_morningstar").text(morningstar_num);
});
function morningstar_minus() {
    morningstar_num -= 1;
    $("#num_morningstar").text(morningstar_num);
}
$("#dwn_morningstar").mousedown(function () {
    morningstar_t = setTimeout(function () {morningstar_m = setInterval(morningstar_minus, 50);}, 500);
});


var shortbow_num = 0,
    shortbow_p,
    shortbow_m,
    shortbow_t;
$("#up_shortbow").click(function () {
    shortbow_num += 1;
    $("#num_shortbow").text(shortbow_num);
});
function shortbow_plus() {
    shortbow_num += 1;
    $("#num_shortbow").text(shortbow_num);
}
$("#up_shortbow").mousedown(function () {
    shortbow_t = setTimeout(function () {shortbow_p = setInterval(shortbow_plus, 50);}, 500);
});

$("#dwn_shortbow").click(function () {
    shortbow_num -= 1;
    $("#num_shortbow").text(shortbow_num);
});
function shortbow_minus() {
    shortbow_num -= 1;
    $("#num_shortbow").text(shortbow_num);
}
$("#dwn_shortbow").mousedown(function () {
    shortbow_t = setTimeout(function () {shortbow_m = setInterval(shortbow_minus, 50);}, 500);
});


var longbow_num = 0,
    longbow_p,
    longbow_m,
    longbow_t;
$("#up_longbow").click(function () {
    longbow_num += 1;
    $("#num_longbow").text(longbow_num);
});
function longbow_plus() {
    longbow_num += 1;
    $("#num_longbow").text(longbow_num);
}
$("#up_longbow").mousedown(function () {
    longbow_t = setTimeout(function () {longbow_p = setInterval(longbow_plus, 50);}, 500);
});

$("#dwn_longbow").click(function () {
    longbow_num -= 1;
    $("#num_longbow").text(longbow_num);
});
function longbow_minus() {
    longbow_num -= 1;
    $("#num_longbow").text(longbow_num);
}
$("#dwn_longbow").mousedown(function () {
    longbow_t = setTimeout(function () {longbow_m = setInterval(longbow_minus, 50);}, 500);
});


var crossbow_num = 0,
    crossbow_p,
    crossbow_m,
    crossbow_t;
$("#up_crossbow").click(function () {
    crossbow_num += 1;
    $("#num_crossbow").text(crossbow_num);
});
function crossbow_plus() {
    crossbow_num += 1;
    $("#num_crossbow").text(crossbow_num);
}
$("#up_crossbow").mousedown(function () {
    crossbow_t = setTimeout(function () {crossbow_p = setInterval(crossbow_plus, 50);}, 500);
});

$("#dwn_crossbow").click(function () {
    crossbow_num -= 1;
    $("#num_crossbow").text(crossbow_num);
});
function crossbow_minus() {
    crossbow_num -= 1;
    $("#num_crossbow").text(crossbow_num);
}
$("#dwn_crossbow").mousedown(function () {
    crossbow_t = setTimeout(function () {crossbow_m = setInterval(crossbow_minus, 50);}, 500);
});


var tradegift_num = 0,
    tradegift_p,
    tradegift_m,
    tradegift_t;
$("#up_tradegift").click(function () {
    tradegift_num += 1;
    $("#num_tradegift").text(tradegift_num);
});
function tradegift_plus() {
    tradegift_num += 1;
    $("#num_tradegift").text(tradegift_num);
}
$("#up_tradegift").mousedown(function () {
    tradegift_t = setTimeout(function () {tradegift_p = setInterval(tradegift_plus, 50);}, 500);
});

$("#dwn_tradegift").click(function () {
    tradegift_num -= 1;
    $("#num_tradegift").text(tradegift_num);
});
function tradegift_minus() {
    tradegift_num -= 1;
    $("#num_tradegift").text(tradegift_num);
}
$("#dwn_tradegift").mousedown(function () {
    tradegift_t = setTimeout(function () {tradegift_m = setInterval(tradegift_minus, 50);}, 500);
});


var peacegift_num = 0,
    peacegift_p,
    peacegift_m,
    peacegift_t;
$("#up_peacegift").click(function () {
    peacegift_num += 1;
    $("#num_peacegift").text(peacegift_num);
});
function peacegift_plus() {
    peacegift_num += 1;
    $("#num_peacegift").text(peacegift_num);
}
$("#up_peacegift").mousedown(function () {
    peacegift_t = setTimeout(function () {peacegift_p = setInterval(peacegift_plus, 50);}, 500);
});

$("#dwn_peacegift").click(function () {
    peacegift_num -= 1;
    $("#num_peacegift").text(peacegift_num);
});
function peacegift_minus() {
    peacegift_num -= 1;
    $("#num_peacegift").text(peacegift_num);
}
$("#dwn_peacegift").mousedown(function () {
    peacegift_t = setTimeout(function () {peacegift_m = setInterval(peacegift_minus, 50);}, 500);
});


var poisongift_num = 0,
    poisongift_p,
    poisongift_m,
    poisongift_t;
$("#up_poisongift").click(function () {
    poisongift_num += 1;
    $("#num_poisongift").text(poisongift_num);
});
function poisongift_plus() {
    poisongift_num += 1;
    $("#num_poisongift").text(poisongift_num);
}
$("#up_poisongift").mousedown(function () {
    poisongift_t = setTimeout(function () {poisongift_p = setInterval(poisongift_plus, 50);}, 500);
});

$("#dwn_poisongift").click(function () {
    poisongift_num -= 1;
    $("#num_poisongift").text(poisongift_num);
});
function poisongift_minus() {
    poisongift_num -= 1;
    $("#num_poisongift").text(poisongift_num);
}
$("#dwn_poisongift").mousedown(function () {
    poisongift_t = setTimeout(function () {poisongift_m = setInterval(poisongift_minus, 50);}, 500);
});


$("html").mouseup(function () {
    clearInterval(leatherarmor_p);
    clearInterval(leatherarmor_m);
    clearInterval(leatherarmor_t);
    clearInterval(ironarmor_p);
    clearInterval(ironarmor_m);
    clearInterval(ironarmor_t);
    clearInterval(sword_p);
    clearInterval(sword_m);
    clearInterval(sword_t);
    clearInterval(axe_p);
    clearInterval(axe_m);
    clearInterval(axe_t);
    clearInterval(morningstar_p);
    clearInterval(morningstar_m);
    clearInterval(morningstar_t);
    clearInterval(shortbow_p);
    clearInterval(shortbow_m);
    clearInterval(shortbow_t);
    clearInterval(longbow_p);
    clearInterval(longbow_m);
    clearInterval(longbow_t);
    clearInterval(crossbow_p);
    clearInterval(crossbow_m);
    clearInterval(crossbow_t);
    clearInterval(tradegift_p);
    clearInterval(tradegift_m);
    clearInterval(tradegift_t);
    clearInterval(peacegift_p);
    clearInterval(peacegift_m);
    clearInterval(peacegift_t);
    clearInterval(poisongift_p);
    clearInterval(poisongift_m);
    clearInterval(poisongift_t);
});