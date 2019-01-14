var gatherer_p,
    gatherer_m,
    gatherer_t;
function gatherer_plus() {
    if (villager.unused > 0) {
        villager.unused -= 1;
        gatherer += 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#gatherer").text(gatherer);
    }
}
$("#jobs").on("click", "#up_gatherer", function () {
    gatherer_plus();
});
$("#jobs").on("mousedown", "#up_gatherer", function () {
    gatherer_t = setTimeout(function () {gatherer_p = setInterval(gatherer_plus, 50);}, 500);
});

function gatherer_minus() {
    if (gatherer > 0) {
        villager.unused += 1;
        gatherer -= 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#gatherer").text(gatherer);
    }
}
$("#jobs").on("click", "#dwn_gatherer", function () {
    gatherer_minus();
});
$("#jobs").on("mousedown", "#dwn_gatherer", function () {
    gatherer_t = setTimeout(function () {gatherer_m = setInterval(gatherer_minus, 50);}, 500);
});

var lumberjack_p,
    lumberjack_m,
    lumberjack_t;
function lumberjack_plus() {
    if (villager.unused > 0) {
        villager.unused -= 1;
        lumberjack += 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#lumberjack").text(lumberjack);
    }
}
$("#jobs").on("click", "#up_lumberjack", function () {
    lumberjack_plus();
});
$("#jobs").on("mousedown", "#up_lumberjack", function () {
    lumberjack_t = setTimeout(function () {lumberjack_p = setInterval(lumberjack_plus, 50);}, 500);
});

function lumberjack_minus() {
    if (lumberjack > 0) {
        villager.unused += 1;
        lumberjack -= 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#lumberjack").text(lumberjack);
    }
}
$("#jobs").on("click", "#dwn_lumberjack", function () {
    lumberjack_minus();
});
$("#jobs").on("mousedown", "#dwn_lumberjack", function () {
    lumberjack_t = setTimeout(function () {lumberjack_m = setInterval(lumberjack_minus, 50);}, 500);
});

var quarryman_p,
    quarryman_m,
    quarryman_t;
function quarryman_plus() {
    if (villager.unused > 0) {
        villager.unused -= 1;
        quarryman += 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#quarryman").text(quarryman);
    }
}
$("#jobs").on("click", "#up_quarryman", function () {
    quarryman_plus();
});
$("#jobs").on("mousedown", "#up_quarryman", function () {
    quarryman_t = setTimeout(function () {quarryman_p = setInterval(quarryman_plus, 50);}, 500);
});

function quarryman_minus() {
    if (quarryman > 0) {
        villager.unused += 1;
        quarryman -= 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#quarryman").text(quarryman);
    }
}
$("#jobs").on("click", "#dwn_quarryman", function () {
    quarryman_minus();
});
$("#jobs").on("mousedown", "#dwn_quarryman", function () {
    quarryman_t = setTimeout(function () {quarryman_m = setInterval(quarryman_minus, 50);}, 500);
});

var worker_p,
    worker_m,
    worker_t;
function worker_plus() {
    if (villager.unused > 0) {
        villager.unused -= 1;
        worker += 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#worker").text(worker);
    }
}
$("#jobs").on("click", "#up_worker", function () {
    worker_plus();
});
$("#jobs").on("mousedown", "#up_worker", function () {
    worker_t = setTimeout(function () {worker_p = setInterval(worker_plus, 50);}, 500);
});

function worker_minus() {
    if (worker > 0) {
        villager.unused += 1;
        worker -= 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#worker").text(worker);
    }
}
$("#jobs").on("click", "#dwn_worker", function () {
    worker_minus();
});
$("#jobs").on("mousedown", "#dwn_worker", function () {
    worker_t = setTimeout(function () {worker_m = setInterval(worker_minus, 50);}, 500);
});

var hunter_p,
    hunter_m,
    hunter_t;
function hunter_plus() {
    if (villager.unused > 0) {
        villager.unused -= 1;
        hunter += 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#hunter").text(hunter);
    }
}
$("#jobs").on("click", "#up_hunter", function () {
    hunter_plus();
});
$("#jobs").on("mousedown", "#up_hunter", function () {
    hunter_t = setTimeout(function () {hunter_p = setInterval(hunter_plus, 50);}, 500);
});

function hunter_minus() {
    if (hunter > 0) {
        villager.unused += 1;
        hunter -= 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#hunter").text(hunter);
    }
}
$("#jobs").on("click", "#dwn_hunter", function () {
    hunter_minus();
});
$("#jobs").on("mousedown", "#dwn_hunter", function () {
    hunter_t = setTimeout(function () {hunter_m = setInterval(hunter_minus, 50);}, 500);
});

var shepherd_p,
    shepherd_m,
    shepherd_t;
function shepherd_plus() {
    if (villager.unused > 0) {
        villager.unused -= 1;
        shepherd += 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#shepherd").text(shepherd);
    }
}
$("#jobs").on("click", "#up_shepherd", function () {
    shepherd_plus();
});
$("#jobs").on("mousedown", "#up_shepherd", function () {
    shepherd_t = setTimeout(function () {shepherd_p = setInterval(shepherd_plus, 50);}, 500);
});

function shepherd_minus() {
    if (shepherd > 0) {
        villager.unused += 1;
        shepherd -= 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#shepherd").text(shepherd);
    }
}
$("#jobs").on("click", "#dwn_shepherd", function () {
    shepherd_minus();
});
$("#jobs").on("mousedown", "#dwn_shepherd", function () {
    shepherd_t = setTimeout(function () {shepherd_m = setInterval(shepherd_minus, 50);}, 500);
});

var coalminer_p,
    coalminer_m,
    coalminer_t;
function coalminer_plus() {
    if (villager.unused > 0) {
        villager.unused -= 1;
        coalminer += 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#coalminer").text(coalminer);
    }
}
$("#jobs").on("click", "#up_coalminer", function () {
    coalminer_plus();
});
$("#jobs").on("mousedown", "#up_coalminer", function () {
    coalminer_t = setTimeout(function () {coalminer_p = setInterval(coalminer_plus, 50);}, 500);
});

function coalminer_minus() {
    if (coalminer > 0) {
        villager.unused += 1;
        coalminer -= 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#coalminer").text(coalminer);
    }
}
$("#jobs").on("click", "#dwn_coalminer", function () {
    coalminer_minus();
});
$("#jobs").on("mousedown", "#dwn_coalminer", function () {
    coalminer_t = setTimeout(function () {coalminer_m = setInterval(coalminer_minus, 50);}, 500);
});

var ironminer_p,
    ironminer_m,
    ironminer_t;
function ironminer_plus() {
    if (villager.unused > 0) {
        villager.unused -= 1;
        ironminer += 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#ironminer").text(ironminer);
    }
}
$("#jobs").on("click", "#up_ironminer", function () {
    ironminer_plus();
});
$("#jobs").on("mousedown", "#up_ironminer", function () {
    ironminer_t = setTimeout(function () {ironminer_p = setInterval(ironminer_plus, 50);}, 500);
});

function ironminer_minus() {
    if (ironminer > 0) {
        villager.unused += 1;
        ironminer -= 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#ironminer").text(ironminer);
    }
}
$("#jobs").on("click", "#dwn_ironminer", function () {
    ironminer_minus();
});
$("#jobs").on("mousedown", "#dwn_ironminer", function () {
    ironminer_t = setTimeout(function () {ironminer_m = setInterval(ironminer_minus, 50);}, 500);
});

var tailor_p,
    tailor_m,
    tailor_t;
function tailor_plus() {
    if (villager.unused > 0) {
        villager.unused -= 1;
        tailor += 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#tailor").text(tailor);
    }
}
$("#jobs").on("click", "#up_tailor", function () {
    tailor_plus();
});
$("#jobs").on("mousedown", "#up_tailor", function () {
    tailor_t = setTimeout(function () {tailor_p = setInterval(tailor_plus, 50);}, 500);
});

function tailor_minus() {
    if (tailor > 0) {
        villager.unused += 1;
        tailor -= 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#tailor").text(tailor);
    }
}
$("#jobs").on("click", "#dwn_tailor", function () {
    tailor_minus();
});
$("#jobs").on("mousedown", "#dwn_tailor", function () {
    tailor_t = setTimeout(function () {tailor_m = setInterval(tailor_minus, 50);}, 500);
});

var alchemist_p,
    alchemist_m,
    alchemist_t;
function alchemist_plus() {
    if (villager.unused > 0) {
        villager.unused -= 1;
        alchemist += 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#alchemist").text(alchemist);
    }
}
$("#jobs").on("click", "#up_alchemist", function () {
    alchemist_plus();
});
$("#jobs").on("mousedown", "#up_alchemist", function () {
    alchemist_t = setTimeout(function () {alchemist_p = setInterval(alchemist_plus, 50);}, 500);
});

function alchemist_minus() {
    if (alchemist > 0) {
        villager.unused += 1;
        alchemist -= 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#alchemist").text(alchemist);
    }
}
$("#jobs").on("click", "#dwn_alchemist", function () {
    alchemist_minus();
});
$("#jobs").on("mousedown", "#dwn_alchemist", function () {
    alchemist_t = setTimeout(function () {alchemist_m = setInterval(alchemist_minus, 50);}, 500);
});

var smith_p,
    smith_m,
    smith_t;
function smith_plus() {
    if (villager.unused > 0) {
        villager.unused -= 1;
        smith += 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#smith").text(smith);
    }
}
$("#jobs").on("click", "#up_smith", function () {
    smith_plus();
});
$("#jobs").on("mousedown", "#up_smith", function () {
    smith_t = setTimeout(function () {smith_p = setInterval(smith_plus, 50);}, 500);
});

function smith_minus() {
    if (smith > 0) {
        villager.unused += 1;
        smith -= 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#smith").text(smith);
    }
}
$("#jobs").on("click", "#dwn_smith", function () {
    smith_minus();
});
$("#jobs").on("mousedown", "#dwn_smith", function () {
    smith_t = setTimeout(function () {smith_m = setInterval(smith_minus, 50);}, 500);
});

var scout_p,
    scout_m,
    scout_t;
function scout_plus() {
    if (villager.unused > 0) {
        villager.unused -= 1;
        scout += 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#scout").text(scout);
    }
}
$("#jobs").on("click", "#up_scout", function () {
    scout_plus();
});
$("#jobs").on("mousedown", "#up_scout", function () {
    scout_t = setTimeout(function () {scout_p = setInterval(scout_plus, 50);}, 500);
});

function scout_minus() {
    if (scout > 0) {
        villager.unused += 1;
        scout -= 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#scout").text(scout);
    }
}
$("#jobs").on("click", "#dwn_scout", function () {
    scout_minus();
});
$("#jobs").on("mousedown", "#dwn_scout", function () {
    scout_t = setTimeout(function () {scout_m = setInterval(scout_minus, 50);}, 500);
});

var knight_p,
    knight_m,
    knight_t;
function knight_plus() {
    if (villager.unused > 0) {
        villager.unused -= 1;
        knight += 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#knight").text(knight);
    }
}
$("#jobs").on("click", "#up_knight", function () {
    knight_plus();
});
$("#jobs").on("mousedown", "#up_knight", function () {
    knight_t = setTimeout(function () {knight_p = setInterval(knight_plus, 50);}, 500);
});

function knight_minus() {
    if (knight > 0) {
        villager.unused += 1;
        knight -= 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#knight").text(knight);
    }
}
$("#jobs").on("click", "#dwn_knight", function () {
    knight_minus();
});
$("#jobs").on("mousedown", "#dwn_knight", function () {
    knight_t = setTimeout(function () {knight_m = setInterval(knight_minus, 50);}, 500);
});

var stableman_p,
    stableman_m,
    stableman_t;
function stableman_plus() {
    if (villager.unused > 0) {
        villager.unused -= 1;
        stableman += 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#stableman").text(stableman);
    }
}
$("#jobs").on("click", "#up_stableman", function () {
    stableman_plus();
});
$("#jobs").on("mousedown", "#up_stableman", function () {
    stableman_t = setTimeout(function () {stableman_p = setInterval(stableman_plus, 50);}, 500);
});

function stableman_minus() {
    if (stableman > 0) {
        villager.unused += 1;
        stableman -= 1;
        $("#villager_unused").text(villager.unused + "/" + villager.count);
        $("#stableman").text(stableman);
    }
}
$("#jobs").on("click", "#dwn_stableman", function () {
    stableman_minus();
});
$("#jobs").on("mousedown", "#dwn_stableman", function () {
    stableman_t = setTimeout(function () {stableman_m = setInterval(stableman_minus, 50);}, 500);
});

$("html").mouseup(function () {
    clearInterval(gatherer_p);
    clearInterval(gatherer_m);
    clearInterval(gatherer_t);
    clearInterval(lumberjack_p);
    clearInterval(lumberjack_m);
    clearInterval(lumberjack_t);
    clearInterval(quarryman_p);
    clearInterval(quarryman_m);
    clearInterval(quarryman_t);
    clearInterval(worker_p);
    clearInterval(worker_m);
    clearInterval(worker_t);
    clearInterval(hunter_p);
    clearInterval(hunter_m);
    clearInterval(hunter_t);
    clearInterval(shepherd_p);
    clearInterval(shepherd_m);
    clearInterval(shepherd_t);
    clearInterval(coalminer_p);
    clearInterval(coalminer_m);
    clearInterval(coalminer_t);
    clearInterval(ironminer_p);
    clearInterval(ironminer_m);
    clearInterval(ironminer_t);
    clearInterval(tailor_p);
    clearInterval(tailor_m);
    clearInterval(tailor_t);
    clearInterval(alchemist_p);
    clearInterval(alchemist_m);
    clearInterval(alchemist_t);
    clearInterval(smith_p);
    clearInterval(smith_m);
    clearInterval(smith_t);
    clearInterval(scout_p);
    clearInterval(scout_m);
    clearInterval(scout_t);
    clearInterval(knight_p);
    clearInterval(knight_m);
    clearInterval(knight_t);
    clearInterval(stableman_p);
    clearInterval(stableman_m);
    clearInterval(stableman_t);
});