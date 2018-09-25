/*eslint-disable no-undef*/
/*jslint white:true*/
var food = 0,
    wood = 0,
    stone = 0,
    leather = 0,
    cloth = 0,
    coal = 0,
    iron = 0,
    clothes = 0,
    armor = 0,
    sword = 0,
    resources_max = 100,

    villager = 5,
    villager_unused = 5,
    villager_max = 10,

    gatherer = 0,
    lumberjack = 0, wood_bonus = 1,
    quarryman = 0,  stone_bonus = 1,
    worker = 0,
    hunter = 0,     leather_bonus = 1,
    shepherd = 0,   cloth_bonus = 1,
    coalminer = 0,  coal_bonus = 1,
    ironminer = 0,  iron_bonus = 1,
    tailor = 0,     clothes_bonus = 1,
    smith = 0,      craft_time = 1,
    scout = 0,      travel_time = 1,
    knight = 0,     damage_bonus = 1,

    trade_bonus = 1,

    hut = 0,
    huntinghut = false,     up_huntinghut = false,
    storage = false,        lvl_storage = 0,
    lumberjackhut = false,  up_lumberjackhut = false,
    sheepstall = false,     up_sheepstall = false,
    quarry = false,         up_quarry = false,
    coalmine = false,       up_coalmine = false,
    ironmine = false,       up_ironmine = false,
    tailorhouse = false,    up_tailorhouse = false,
    forge = false,          up_forge = false,
    market = false,         up_market = false,
    scoutpost = false,      up_scoutpost = false,
    barracks = false,       up_barracks = false,

    time_hut = 20,              time_upgrade_hut = 40,
    time_huntinghut = 30,       time_upgrade_huntinghut = 60,
    time_storage = 60,          time_upgrade_storage = 120,
    time_lumberjackhut = 80,    time_upgrade_lumberjackhut = 160,
    time_sheepstall = 100,      time_upgrade_sheepstall = 200,
    time_quarry = 120,          time_upgrade_quarry = 240,
    time_coalmine = 140,        time_upgrade_coalmine = 280,
    time_ironmine = 180,        time_upgrade_ironmine = 360,
    time_tailorhouse = 240,     time_upgrade_tailorhouse = 480,
    time_forge = 300,           time_upgrade_forge = 600,
    time_market = 600,          time_upgrade_market = 1200,
    time_scoutpost = 900,       time_upgrade_scoutpost = 1800,
    time_barracks = 1200,       time_upgrade_barracks = 2400,
    timer,

    curr_time_hut,              curr_time_upgrade_hut,
    curr_time_huntinghut,       curr_time_upgrade_huntinghut,
    curr_time_storage,          curr_time_upgrade_storage,
    curr_time_lumberjackhut,    curr_time_upgrade_lumberjackhut,
    curr_time_sheepstall,       curr_time_upgrade_sheepstall,
    curr_time_quarry,           curr_time_upgrade_quarry,
    curr_time_coalmine,         curr_time_upgrade_coalmine,
    curr_time_ironmine,         curr_time_upgrade_ironmine,
    curr_time_tailorhouse,      curr_time_upgrade_tailorhouse,
    curr_time_forge,            curr_time_upgrade_forge,
    curr_time_market,           curr_time_upgrade_market,
    curr_time_scoutpost,        curr_time_upgrade_scoutpost,
    curr_time_barracks,         curr_time_upgrade_barracks,

    slot_building = false,
    //slot_scout = false,

    build,
    upgrade,
    refr,
    starve,
    freeze,
    res_prod,
    new_vil,
    temperat,

    tempr = ["Warm", "Warm", "Warm", "Mild", "Kalt"],

    speed,

    task = $("#task"),
    msg = $("#msg"),

    win = window.matchMedia("(max-width: 376px)");

/* Convert int to time */
function secondsTommss(total) {
    var m = Math.floor(total / 60),
        s = total - (m * 60),
        result;

    s = Math.round(s * 100) / 100;

    if (total < 60) {
        result = s + "s";
    } else {
        result = m + "min ";
        result += (s < 10 ? "0" + s : s) + "s";
    }
    return result;
}

/* Check Message count */
function check_msg() {
    while ($("#msg p").length > 12) {
        $("#msg p").last().remove();
    }
}

/* Refresher */
function refresh() {
    //region
    check_msg();

    $("#food").text(food);
    $("#wood").text(wood);
    $("#stone").text(stone);
    $("#leather").text(leather);
    $("#cloth").text(cloth);
    $("#coal").text(coal);
    $("#iron").text(iron);
    $("#clothes").text(clothes);
    $("#armor").text(armor);
    $("#sword").text(sword);

    $("#villager").text(villager + "/" + villager_max);
    $("#villager_unused").text(villager_unused + "/" + villager);
    $("#gatherer").text(gatherer);
    $("#lumberjack").text(lumberjack);
    $("#quarryman").text(quarryman);
    $("#worker").text(worker);
    $("#hunter").text(hunter);
    $("#shepherd").text(shepherd);
    $("#coalminer").text(coalminer);
    $("#ironminer").text(ironminer);
    $("#tailor").text(tailor);
    $("#smith").text(smith);
    $("#scout").text(scout);
    $("#knight").text(knight);

    if (gatherer === 0) {
        $("#dwn_gatherer").prop("disabled", true);
    } else {
        $("#dwn_gatherer").prop("disabled", false);
    }
    if (lumberjack === 0) {
        $("#dwn_lumberjack").prop("disabled", true);
    } else {
        $("#dwn_lumberjack").prop("disabled", false);
    }
    if (quarryman === 0) {
        $("#dwn_quarryman").prop("disabled", true);
    } else {
        $("#dwn_quarryman").prop("disabled", false);
    }
    if (worker === 0 || slot_building === true) {
        $("#dwn_worker").prop("disabled", true);
    } else {
        $("#dwn_worker").prop("disabled", false);
    }
    if (hunter === 0) {
        $("#dwn_hunter").prop("disabled", true);
    } else {
        $("#dwn_hunter").prop("disabled", false);
    }
    if (shepherd === 0) {
        $("#dwn_shepherd").prop("disabled", true);
    } else {
        $("#dwn_shepherd").prop("disabled", false);
    }
    if (coalminer === 0) {
        $("#dwn_coalminer").prop("disabled", true);
    } else {
        $("#dwn_coalminer").prop("disabled", false);
    }
    if (ironminer === 0) {
        $("#dwn_ironminer").prop("disabled", true);
    } else {
        $("#dwn_ironminer").prop("disabled", false);
    }
    if (tailor === 0) {
        $("#dwn_tailor").prop("disabled", true);
    } else {
        $("#dwn_tailor").prop("disabled", false);
    }
    if (smith === 0) {
        $("#dwn_smith").prop("disabled", true);
    } else {
        $("#dwn_smith").prop("disabled", false);
    }
    if (scout === 0) {
        $("#dwn_scout").prop("disabled", true);
    } else {
        $("#dwn_scout").prop("disabled", false);
    }
    if (knight === 0) {
        $("#dwn_knight").prop("disabled", true);
    } else {
        $("#dwn_knight").prop("disabled", false);
    }
    if (villager_unused === 0) {
        $("#up_gatherer").prop("disabled", true);
        $("#up_lumberjack").prop("disabled", true);
        $("#up_quarryman").prop("disabled", true);
        $("#up_worker").prop("disabled", true);
        $("#up_hunter").prop("disabled", true);
        $("#up_shepherd").prop("disabled", true);
        $("#up_coalminer").prop("disabled", true);
        $("#up_ironminer").prop("disabled", true);
        $("#up_tailor").prop("disabled", true);
        $("#up_smith").prop("disabled", true);
        $("#up_scout").prop("disabled", true);
        $("#up_knight").prop("disabled", true);
    } else if (slot_building === true) {
        $("#up_gatherer").prop("disabled", false);
        $("#up_lumberjack").prop("disabled", false);
        $("#up_quarryman").prop("disabled", false);
        $("#up_worker").prop("disabled", true);
        $("#up_hunter").prop("disabled", false);
        $("#up_shepherd").prop("disabled", false);
        $("#up_coalminer").prop("disabled", false);
        $("#up_ironminer").prop("disabled", false);
        $("#up_tailor").prop("disabled", false);
        $("#up_smith").prop("disabled", false);
        $("#up_scout").prop("disabled", false);
        $("#up_knight").prop("disabled", false);
    } else {
        $("#up_gatherer").prop("disabled", false);
        $("#up_lumberjack").prop("disabled", false);
        $("#up_quarryman").prop("disabled", false);
        $("#up_worker").prop("disabled", false);
        $("#up_hunter").prop("disabled", false);
        $("#up_shepherd").prop("disabled", false);
        $("#up_coalminer").prop("disabled", false);
        $("#up_ironminer").prop("disabled", false);
        $("#up_tailor").prop("disabled", false);
        $("#up_smith").prop("disabled", false);
        $("#up_scout").prop("disabled", false);
        $("#up_knight").prop("disabled", false);
    }
    //endregion

    // Current Time to build
    //region
    if (worker > 1) {
        curr_time_hut = time_hut / worker;
        curr_time_huntinghut = time_huntinghut / worker;
        curr_time_lumberjackhut = time_lumberjackhut / worker;
        curr_time_quarry = time_quarry / worker;
        curr_time_storage = time_storage / worker;
        curr_time_sheepstall = time_sheepstall / worker;
        curr_time_coalmine = time_coalmine / worker;
        curr_time_ironmine = time_ironmine / worker;
        curr_time_tailorhouse = time_tailorhouse / worker;
        curr_time_forge = time_forge / worker;
        curr_time_market = time_market / worker;
        curr_time_scoutpost = time_scoutpost / worker;
        curr_time_barracks = time_barracks / worker;

        curr_time_upgrade_hut = time_upgrade_hut / worker;
        curr_time_upgrade_huntinghut = time_upgrade_huntinghut / worker;
        curr_time_upgrade_lumberjackhut = time_upgrade_lumberjackhut / worker;
        curr_time_upgrade_quarry = time_upgrade_quarry / worker;
        curr_time_upgrade_storage = time_upgrade_storage / worker;
        curr_time_upgrade_sheepstall = time_upgrade_sheepstall / worker;
        curr_time_upgrade_coalmine = time_upgrade_coalmine / worker;
        curr_time_upgrade_ironmine = time_upgrade_ironmine / worker;
        curr_time_upgrade_tailorhouse = time_upgrade_tailorhouse / worker;
        curr_time_upgrade_forge = time_upgrade_forge / worker;
        curr_time_upgrade_market = time_upgrade_market / worker;
        curr_time_upgrade_scoutpost = time_upgrade_scoutpost / worker;
        curr_time_upgrade_barracks = time_upgrade_barracks / worker;
    } else {
        curr_time_hut = time_hut;
        curr_time_huntinghut = time_huntinghut;
        curr_time_lumberjackhut = time_lumberjackhut;
        curr_time_quarry = time_quarry;
        curr_time_storage = time_storage;
        curr_time_sheepstall = time_sheepstall;
        curr_time_coalmine = time_coalmine;
        curr_time_ironmine = time_ironmine;
        curr_time_tailorhouse = time_tailorhouse;
        curr_time_forge = time_forge;
        curr_time_market = time_market;
        curr_time_scoutpost = time_scoutpost;
        curr_time_barracks = time_barracks;

        curr_time_upgrade_hut = time_upgrade_hut;
        curr_time_upgrade_huntinghut = time_upgrade_huntinghut;
        curr_time_upgrade_lumberjackhut = time_upgrade_lumberjackhut;
        curr_time_upgrade_quarry = time_upgrade_quarry;
        curr_time_upgrade_storage = time_upgrade_storage;
        curr_time_upgrade_sheepstall = time_upgrade_sheepstall;
        curr_time_upgrade_coalmine = time_upgrade_coalmine;
        curr_time_upgrade_ironmine = time_upgrade_ironmine;
        curr_time_upgrade_tailorhouse = time_upgrade_tailorhouse;
        curr_time_upgrade_forge = time_upgrade_forge;
        curr_time_upgrade_market = time_upgrade_market;
        curr_time_upgrade_scoutpost = time_upgrade_scoutpost;
        curr_time_upgrade_barracks = time_upgrade_barracks;
    }
    //endregion

    // Display Build Time
    //region
    $("#time_hut").text(secondsTommss(curr_time_hut));
    $("#time_huntinghut").text(secondsTommss(curr_time_huntinghut));
    $("#time_storage").text(secondsTommss(curr_time_storage));
    $("#time_lumberjackhut").text(secondsTommss(curr_time_lumberjackhut));
    $("#time_sheepstall").text(secondsTommss(curr_time_sheepstall));
    $("#time_quarry").text(secondsTommss(curr_time_quarry));
    $("#time_coalmine").text(secondsTommss(curr_time_coalmine));
    $("#time_ironmine").text(secondsTommss(curr_time_ironmine));
    $("#time_tailorhouse").text(secondsTommss(curr_time_tailorhouse));
    $("#time_forge").text(secondsTommss(curr_time_forge));
    $("#time_market").text(secondsTommss(curr_time_market));
    $("#time_scoutpost").text(secondsTommss(curr_time_scoutpost));
    $("#time_barracks").text(secondsTommss(curr_time_barracks));

    $("#time_upgrade_hut").text(secondsTommss(curr_time_upgrade_hut));
    $("#time_upgrade_huntinghut").text(secondsTommss(curr_time_upgrade_huntinghut));
    $("#time_upgrade_storage").text(secondsTommss(curr_time_upgrade_storage));
    $("#time_upgrade_lumberjackhut").text(secondsTommss(curr_time_upgrade_lumberjackhut));
    $("#time_upgrade_sheepstall").text(secondsTommss(curr_time_upgrade_sheepstall));
    $("#time_upgrade_quarry").text(secondsTommss(curr_time_upgrade_quarry));
    $("#time_upgrade_coalmine").text(secondsTommss(curr_time_upgrade_coalmine));
    $("#time_upgrade_ironmine").text(secondsTommss(curr_time_upgrade_ironmine));
    $("#time_upgrade_tailorhouse").text(secondsTommss(curr_time_upgrade_tailorhouse));
    $("#time_upgrade_forge").text(secondsTommss(curr_time_upgrade_forge));
    $("#time_upgrade_market").text(secondsTommss(curr_time_upgrade_market));
    $("#time_upgrade_scoutpost").text(secondsTommss(curr_time_upgrade_scoutpost));
    $("#time_upgrade_barracks").text(secondsTommss(curr_time_upgrade_barracks));
    //endregion

    // Build Buttons Dis-/Enabled
    //region
    if (wood >= 50 && stone >= 10 && worker > 0 && slot_building === false) {
        $("#btn_hut").prop("disabled", false);
    } else {
        $("#btn_hut").prop("disabled", true);
    }
    if (wood >= 150 && stone >= 30 && worker > 0 && slot_building === false) {
        $("#btn_huntinghut").prop("disabled", false);
    } else {
        $("#btn_huntinghut").prop("disabled", true);
    }
    if (wood >= 100 && stone >= 100 && worker > 0 && slot_building === false) {
        $("#btn_storage").prop("disabled", false);
    } else {
        $("#btn_storage").prop("disabled", true);
    }
    if (wood >= 200 && stone >= 50 && worker > 0 && slot_building === false) {
        $("#btn_lumberjackhut").prop("disabled", false);
    } else {
        $("#btn_lumberjackhut").prop("disabled", true);
    }
    if (wood >= 250 && stone >= 75 && worker > 0 && slot_building === false) {
        $("#btn_sheepstall").prop("disabled", false);
    } else {
        $("#btn_sheepstall").prop("disabled", true);
    }
    if (wood >= 300 && stone >= 100 && worker > 0 && slot_building === false) {
        $("#btn_quarry").prop("disabled", false);
    } else {
        $("#btn_quarry").prop("disabled", true);
    }
    if (wood >= 300 && stone >= 150 && worker > 0 && slot_building === false) {
        $("#btn_coalmine").prop("disabled", false);
    } else {
        $("#btn_coalmine").prop("disabled", true);
    }
    if (wood >= 400 && stone >= 200 && coal >= 50 && worker > 0 && slot_building === false) {
        $("#btn_ironmine").prop("disabled", false);
    } else {
        $("#btn_ironmine").prop("disabled", true);
    }
    if (wood >= 500 && stone >= 400 && coal >= 200 && worker > 0 && slot_building === false) {
        $("#btn_tailorhouse").prop("disabled", false);
    } else {
        $("#btn_tailorhouse").prop("disabled", true);
    }
    if (wood >= 600 && stone >= 450 && coal >= 250 && iron >= 50 && worker > 0 && slot_building === false) {
        $("#btn_forge").prop("disabled", false);
    } else {
        $("#btn_forge").prop("disabled", true);
    }
    if (wood >= 750 && stone >= 500 && coal >= 300 && iron >= 100 && worker > 0 && slot_building === false) {
        $("#btn_market").prop("disabled", false);
    } else {
        $("#btn_market").prop("disabled", true);
    }
    if (wood >= 1000 && stone >= 750 && coal >= 400 && iron >= 250 && worker > 0 && slot_building === false) {
        $("#btn_scoutpost").prop("disabled", false);
    } else {
        $("#btn_scoutpost").prop("disabled", true);
    }
    if (wood >= 1500 && stone >= 1200 && coal >= 1000 && iron >= 800 && worker > 0 && slot_building === false) {
        $("#btn_barracks").prop("disabled", false);
    } else {
        $("#btn_barracks").prop("disabled", true);
    }
    //endregion

    // Build Buttons Show/Hide
    //region
    if (wood >= 25 && stone >= 5) {
        $("#btn_hut").closest("tr").show();
    } else {
        $("#btn_hut").closest("tr").hide();
    }
    if (wood >= 75 && stone >= 15 && huntinghut === false) {
        $("#btn_huntinghut").closest("tr").show();
    } else {
        $("#btn_huntinghut").closest("tr").hide();
        if (huntinghut === true) {
            $("#leather").closest("#row").show();
            $("#hunter").closest("#row").show();
        }
    }
    if (wood >= 50 && stone >= 50 && storage === false) {
        $("#btn_storage").closest("tr").show();
    } else {
        $("#btn_storage").closest("tr").hide();
    }
    if (wood >= 100 && stone >= 25 && lumberjackhut === false) {
        $("#btn_lumberjackhut").closest("tr").show();
    } else {
        $("#btn_lumberjackhut").closest("tr").hide();
    }
    if (wood >= 125 && stone >= 37 && sheepstall === false) {
        $("#btn_sheepstall").closest("tr").show();
    } else {
        $("#btn_sheepstall").closest("tr").hide();
        if (sheepstall === true) {
            $("#cloth").closest("#row").show();
            $("#shepherd").closest("#row").show();
        }
    }
    if (wood >= 150 && stone >= 50 && quarry === false) {
        $("#btn_quarry").closest("tr").show();
    } else {
        $("#btn_quarry").closest("tr").hide();
    }
    if (wood >= 150 && stone >= 75 && coalmine === false) {
        $("#btn_coalmine").closest("tr").show();
    } else {
        $("#btn_coalmine").closest("tr").hide();
        if (coalmine === true) {
            $("#coal").closest("#row").show();
            $("#coalminer").closest("#row").show();
        }
    }
    if (wood >= 200 && stone >= 100 && coal >= 25 && ironmine === false) {
        $("#btn_ironmine").closest("tr").show();
    } else {
        $("#btn_ironmine").closest("tr").hide();
        if (ironmine === true) {
            $("#iron").closest("#row").show();
            $("#ironminer").closest("#row").show();
        }
    }
    if (wood >= 250 && stone >= 200 && coal >= 100 && tailorhouse === false) {
        $("#btn_tailorhouse").closest("tr").show();
    } else {
        $("#btn_tailorhouse").closest("tr").hide();
        if (tailorhouse === true) {
            $("#clothes").closest("#row").show();
            $("#tailor").closest("#row").show();
        }
    }
    if (wood >= 300 && stone >= 225 && coal >= 125 && iron >= 25 && forge === false) {
        $("#btn_forge").closest("tr").show();
    } else {
        $("#btn_forge").closest("tr").hide();
        if (forge === true) {
            $("#btn_craft").show();
            $("#armor").closest("#row").show();
            $("#sword").closest("#row").show();
            $("#smith").closest("#row").show();
        }
    }
    if (wood >= 375 && stone >= 250 && coal >= 150 && iron >= 50 && market === false) {
        $("#btn_market").closest("tr").show();
    } else {
        $("#btn_market").closest("tr").hide();
        if (market === true) {
            $("#btn_trade").show();
        }
    }
    if (wood >= 500 && stone >= 375 && coal >= 200 && iron >= 125 && scoutpost === false) {
        $("#btn_scoutpost").closest("tr").show();
    } else {
        $("#btn_scoutpost").closest("tr").hide();
        if (scoutpost === true) {
            $("#btn_travel").show();
            $("#scout").closest("#row").show();
        }
    }
    if (wood >= 750 && stone >= 600 && coal >= 500 && iron >= 400 && barracks === false) {
        $("#btn_barracks").closest("tr").show();
    } else {
        $("#btn_barracks").closest("tr").hide();
        if (barracks === true) {
            $("#knight").closest("#row").show();
        }
    }
    //endregion

    // Upgrade Buttons Dis-/Enabled
    //region
    if (wood >= 100 && stone >= 20 && worker > 0 && slot_building === false) {
        $("#btn_upgrade_hut").prop("disabled", false);
    } else {
        $("#btn_upgrade_hut").prop("disabled", true);
    }
    if (wood >= 300 && stone >= 60 && worker > 0 && slot_building === false) {
        $("#btn_upgrade_huntinghut").prop("disabled", false);
    } else {
        $("#btn_upgrade_huntinghut").prop("disabled", true);
    }
    if (wood >= 300 && stone >= 300 && worker > 0 && slot_building === false) {
        $("#btn_upgrade_storage").prop("disabled", false);
    } else {
        $("#btn_upgrade_storage").prop("disabled", true);
    }
    if (wood >= 400 && stone >= 100 && worker > 0 && slot_building === false) {
        $("#btn_upgrade_lumberjackhut").prop("disabled", false);
    } else {
        $("#btn_upgrade_lumberjackhut").prop("disabled", true);
    }
    if (wood >= 500 && stone >= 150 && worker > 0 && slot_building === false) {
        $("#btn_upgrade_sheepstall").prop("disabled", false);
    } else {
        $("#btn_upgrade_sheepstall").prop("disabled", true);
    }
    if (wood >= 600 && stone >= 200 && worker > 0 && slot_building === false) {
        $("#btn_upgrade_quarry").prop("disabled", false);
    } else {
        $("#btn_upgrade_quarry").prop("disabled", true);
    }
    if (wood >= 600 && stone >= 300 && worker > 0 && slot_building === false) {
        $("#btn_upgrade_coalmine").prop("disabled", false);
    } else {
        $("#btn_upgrade_coalmine").prop("disabled", true);
    }
    if (wood >= 800 && stone >= 400 && coal >= 100 && worker > 0 && slot_building === false) {
        $("#btn_upgrade_ironmine").prop("disabled", false);
    } else {
        $("#btn_upgrade_ironmine").prop("disabled", true);
    }
    if (wood >= 1000 && stone >= 800 && coal >= 400 && worker > 0 && slot_building === false) {
        $("#btn_upgrade_tailorhouse").prop("disabled", false);
    } else {
        $("#btn_upgrade_tailorhouse").prop("disabled", true);
    }
    if (wood >= 1200 && stone >= 900 && coal >= 500 && iron >= 100 && worker > 0 && slot_building === false) {
        $("#btn_upgrade_forge").prop("disabled", false);
    } else {
        $("#btn_upgrade_forge").prop("disabled", true);
    }
    if (wood >= 1500 && stone >= 1000 && coal >= 600 && iron >= 200 && worker > 0 && slot_building === false) {
        $("#btn_upgrade_market").prop("disabled", false);
    } else {
        $("#btn_upgrade_market").prop("disabled", true);
    }
    if (wood >= 2000 && stone >= 1500 && coal >= 800 && iron >= 500 && worker > 0 && slot_building === false) {
        $("#btn_upgrade_scoutpost").prop("disabled", false);
    } else {
        $("#btn_upgrade_scoutpost").prop("disabled", true);
    }
    if (wood >= 3000 && stone >= 2400 && coal >= 2000 && iron >= 1600 && worker > 0 && slot_building === false) {
        $("#btn_upgrade_barracks").prop("disabled", false);
    } else {
        $("#btn_upgrade_barracks").prop("disabled", true);
    }
    //endregion

    // Upgrade Buttons Show/Hide
    //region
    if (wood >= 50 && stone >= 10 && hut > 0) {
        $("#btn_upgrade_hut").closest("tr").show();
    } else {
        $("#btn_upgrade_hut").closest("tr").hide();
    }
    if (wood >= 150 && stone >= 30 && huntinghut === true && up_huntinghut === false) {
        $("#btn_upgrade_huntinghut").closest("tr").show();
    } else {
        $("#btn_upgrade_huntinghut").closest("tr").hide();
    }
    if (wood >= 150 && stone >= 150 && storage === true && lvl_storage < 5) {
        $("#btn_upgrade_storage").closest("tr").show();
    } else {
        $("#btn_upgrade_storage").closest("tr").hide();
    }
    if (wood >= 200 && stone >= 50 && lumberjackhut === true && up_lumberjackhut === false) {
        $("#btn_upgrade_lumberjackhut").closest("tr").show();
    } else {
        $("#btn_upgrade_lumberjackhut").closest("tr").hide();
    }
    if (wood >= 250 && stone >= 75 && sheepstall === true && up_sheepstall === false) {
        $("#btn_upgrade_sheepstall").closest("tr").show();
    } else {
        $("#btn_upgrade_sheepstall").closest("tr").hide();
    }
    if (wood >= 300 && stone >= 100 && quarry === true && up_quarry === false) {
        $("#btn_upgrade_quarry").closest("tr").show();
    } else {
        $("#btn_upgrade_quarry").closest("tr").hide();
    }
    if (wood >= 300 && stone >= 150 && coalmine === true && up_coalmine === false) {
        $("#btn_upgrade_coalmine").closest("tr").show();
    } else {
        $("#btn_upgrade_coalmine").closest("tr").hide();
    }
    if (wood >= 400 && stone >= 200 && coal >= 50 && ironmine === true && up_ironmine === false) {
        $("#btn_upgrade_ironmine").closest("tr").show();
    } else {
        $("#btn_upgrade_ironmine").closest("tr").hide();
    }
    if (wood >= 500 && stone >= 400 && coal >= 200 && tailorhouse === true && up_tailorhouse === false) {
        $("#btn_upgrade_tailorhouse").closest("tr").show();
    } else {
        $("#btn_upgrade_tailorhouse").closest("tr").hide();
    }
    if (wood >= 600 && stone >= 450 && coal >= 250 && iron >= 50 && forge === true && up_forge === false) {
        $("#btn_upgrade_forge").closest("tr").show();
    } else {
        $("#btn_upgrade_forge").closest("tr").hide();
    }
    if (wood >= 750 && stone >= 500 && coal >= 300 && iron >= 100 && market === true && up_market === false) {
        $("#btn_upgrade_market").closest("tr").show();
    } else {
        $("#btn_upgrade_market").closest("tr").hide();
    }
    if (wood >= 1000 && stone >= 750 && coal >= 400 && iron >= 250 && scoutpost === true && up_scoutpost === false) {
        $("#btn_upgrade_scoutpost").closest("tr").show();
    } else {
        $("#btn_upgrade_scoutpost").closest("tr").hide();
    }
    if (wood >= 1500 && stone >= 1200 && coal >= 1000 && iron >= 800 && barracks === true && up_barracks === false) {
        $("#btn_upgrade_barracks").closest("tr").show();
    } else {
        $("#btn_upgrade_barracks").closest("tr").hide();
    }
    //endregion
}

/* Game Over */
function game_over() {
    msg.prepend("<p>Dein Dorf ist gestorben.</p>");
    refresh();
    clearInterval(build);
    clearInterval(upgrade);
    clearInterval(refr);
    clearInterval(starve);
    clearInterval(freeze);
    clearInterval(res_prod);
    clearInterval(new_vil);
    clearInterval(temperat);
}

/* Die possibilities */
function die(type) {
    var rnd = Math.floor((Math.random() * 3) + 1);
    if (type === "starve") {
        if (rnd === 1 || rnd === 2) {
            if (villager > 0) {
                villager -= 1;
                if (villager_unused > 0) {
                    villager_unused -= 1;
                    msg.prepend("<p>Bewohner ist verhungert.</p>");
                } else {
                    if (gatherer > 0) {
                        gatherer -= 1;
                        msg.prepend("<p>Sammler ist verhungert.</p>");
                    } else if (lumberjack > 0) {
                        lumberjack -= 1;
                        msg.prepend("<p>Holzfäller ist verhungert.</p>");
                    } else if (quarryman > 0) {
                        quarryman -= 1;
                        msg.prepend("<p>Steinbrucharbeiter ist verhungert.</p>");
                    } else if (worker > 0) {
                        worker -= 1;
                        msg.prepend("<p>Arbeiter ist verhungert.</p>");
                    } else if (hunter > 0) {
                        hunter -= 1;
                        msg.prepend("<p>Jäger ist verhungert.</p>");
                    } else if (shepherd > 0) {
                        shepherd -= 1;
                        msg.prepend("<p>Schäfer ist verhungert.</p>");
                    } else if (coalminer > 0) {
                        coalminer -= 1;
                        msg.prepend("<p>Kohleminenarbeiter ist verhungert.</p>");
                    } else if (ironminer > 0) {
                        ironminer -= 1;
                        msg.prepend("<p>Eisenminenarbeiter ist verhungert.</p>");
                    } else if (tailor > 0) {
                        tailor -= 1;
                        msg.prepend("<p>Schneider ist verhungert.</p>");
                    } else if (smith > 0) {
                        smith -= 1;
                        msg.prepend("<p>Schmied ist verhungert.</p>");
                    } else if (scout > 0) {
                        scout -= 1;
                        msg.prepend("<p>Kundschafter ist verhungert.</p>");
                    } else if (knight > 0) {
                        knight -= 1;
                        msg.prepend("<p>Krieger ist verhungert.</p>");
                    }
                }
                if (villager === 0) {
                    game_over();
                }
            }
        }
    } else if (type === "freeze") {
        if (rnd === 1 || rnd === 2) {
            if (villager > 0) {
                villager -= 1;
                if (villager_unused > 0) {
                    villager_unused -= 1;
                    msg.prepend("<p>Bewohner ist erfroren.</p>");
                } else {
                    if (gatherer > 0) {
                        gatherer -= 1;
                        msg.prepend("<p>Sammler ist erfroren.</p>");
                    } else if (lumberjack > 0) {
                        lumberjack -= 1;
                        msg.prepend("<p>Holzfäller ist erfroren.</p>");
                    } else if (quarryman > 0) {
                        quarryman -= 1;
                        msg.prepend("<p>Steinbrucharbeiter ist erfroren.</p>");
                    } else if (worker > 0) {
                        worker -= 1;
                        msg.prepend("<p>Arbeiter ist erfroren.</p>");
                    } else if (hunter > 0) {
                        hunter -= 1;
                        msg.prepend("<p>Jäger ist erfroren.</p>");
                    } else if (shepherd > 0) {
                        shepherd -= 1;
                        msg.prepend("<p>Schäfer ist erfroren.</p>");
                    } else if (coalminer > 0) {
                        coalminer -= 1;
                        msg.prepend("<p>Kohleminenarbeiter ist erfroren.</p>");
                    } else if (ironminer > 0) {
                        ironminer -= 1;
                        msg.prepend("<p>Eisenminenarbeiter ist erfroren.</p>");
                    } else if (tailor > 0) {
                        tailor -= 1;
                        msg.prepend("<p>Schneider ist erfroren.</p>");
                    } else if (smith > 0) {
                        smith -= 1;
                        msg.prepend("<p>Schmied ist erfroren.</p>");
                    } else if (scout > 0) {
                        scout -= 1;
                        msg.prepend("<p>Kundschafter ist erfroren.</p>");
                    } else if (knight > 0) {
                        knight -= 1;
                        msg.prepend("<p>Krieger ist erfroren.</p>");
                    }
                }
                if (villager === 0) {
                    game_over();
                }
            }
        }
    }
}

/* Resource production */
function resource_prod() {
    if (food < resources_max) {
        food += (gatherer * 2) + hunter;
        if (food > resources_max) {
            food = resources_max;
        }
    }
    if (food >= villager) {
        food -= villager;
        if (typeof starve !== 'undefined') {
            clearInterval(starve);
            starve = undefined;
        }
    } else {
        food = 0;
        if (typeof starve === 'undefined') {
            starve = setInterval(function () {die("starve"); }, speed * 15);
        }
    }
    if (wood < resources_max) {
        wood += lumberjack * wood_bonus;
        if (wood > resources_max) {
            wood = resources_max;
        }
    }
    var rnd_stone, rnd_coal, rnd_iron;
    if (stone < resources_max) {
        rnd_stone = Math.floor((Math.random() * 2) + 1);
        if (rnd_stone === 1) {
            stone += quarryman * stone_bonus;
            if (stone > resources_max) {
                stone = resources_max;
            }
        }
    }
    if (leather < resources_max) {
        leather += hunter * leather_bonus;
        if (leather > resources_max) {
            leather = resources_max;
        }
    }
    if (cloth < resources_max) {
        cloth += shepherd * cloth_bonus;
        if (cloth > resources_max) {
            cloth = resources_max;
        }
    }
    if (coal < resources_max) {
        rnd_coal = Math.floor((Math.random() * 4) + 1);
        if (rnd_coal === 1) {
            coal += coalminer * coal_bonus;
            if (coal > resources_max) {
                coal = resources_max;
            }
        }
    }
    if (iron < resources_max) {
        rnd_iron = Math.floor((Math.random() * 6) + 1);
        if (rnd_iron === 1) {
            iron += ironminer * iron_bonus;
            if (iron > resources_max) {
                iron = resources_max;
            }
        }
    }
    if (clothes < resources_max) {
        clothes += tailor * clothes_bonus;
        cloth -= tailor;
        if (clothes > resources_max) {
            clothes = resources_max;
        }
    }
}

/* Villager add */ 
function new_villagers() {
    var rnd = Math.floor((Math.random() * 6) + 1), amount;
    if (rnd === 1) {
        amount = Math.floor((Math.random() * 2) + 2);
        if (villager + amount <= villager_max) {
            villager += amount;
            villager_unused += amount;
            msg.prepend("<p>" + amount + " Fremde sind aufgetaucht.</p>");
        }
    } else if (rnd === 2 || rnd === 3) {
        if (villager < villager_max) {
            villager += 1;
            villager_unused += 1;
            msg.prepend("<p>Ein Fremder ist aufgetaucht.</p>");
        }
    }
}

/* Temperature */
function temperature() {
    $("#phase").empty();
    var i, rnd, last, first;
    for (i = 0; i < tempr.length; i += 1) {
        if (i === 0) {
            $("#phase").append("<p>" + tempr[i] + "</p> -> ");
        } else {
            $("#phase").append(tempr[i] + " -> ");
        }
    }
    rnd = Math.floor((Math.random() * 3) + 1);
    last = tempr[tempr.length - 1];
    if (last === "Warm") {
        if (rnd === 1 || rnd === 2) {
            tempr[tempr.length] = "Warm";
        } else {
            tempr[tempr.length] = "Mild";
        }
    } else if (last === "Mild") {
        if (rnd === 1) {
            tempr[tempr.length] = "Warm";
        } else if (rnd === 2) {
            tempr[tempr.length] = "Kalt";
        } else {
            tempr[tempr.length] = "Mild";
        }
    } else if (last === "Kalt") {
        if (rnd === 1 || rnd === 2) {
            tempr[tempr.length] = "Mild";
        } else {
            tempr[tempr.length] = "Kalt";
        }
    }
    first = tempr.shift();
    if (first === "Kalt") {
        if (clothes >= villager) {
            clothes -= villager;
            if (typeof freeze !== 'undefined') {
                clearInterval(freeze);
                freeze = undefined;
            }
        } else {
            var rest = villager - clothes;
            clothes = 0;
            if (wood >= rest) {
                wood -= rest;
                if (typeof freeze !== 'undefined') {
                    clearInterval(freeze);
                    freeze = undefined;
                }
            } else {
                wood = 0;
                if (typeof freeze === 'undefined') {
                    freeze = setInterval(function () {die("freeze"); }, speed * 15);
                }
            }
        }
    } else {
        if (typeof freeze !== 'undefined') {
            clearInterval(freeze);
            freeze = undefined;
        }
    }
}

/* Start */
$("#btn_start").click(function () {
    if ($("#speed").val() < 200 || $("#speed").val() > 5000) {
        $("#start p").remove();
        $("#start").append("<p>Geschwindigkeit zwischen 200 und 5000.</p>");
    } else {
    speed = $("#speed").val();

    if ($("#load")[0].files.length !== 0) {
        var file = $("#load")[0].files[0],
            reader = new FileReader();

        reader.onload = function (e) {
            var contents = JSON.parse(e.target.result);
            food = contents.$food;
            wood = contents.$wood;
            stone = contents.$stone;
            leather = contents.$leather;
            cloth = contents.$cloth;
            coal = contents.$coal;
            iron = contents.$iron;
            clothes = contents.$clothes;
            armor = contents.$armor;
            sword = contents.$sword;
            resources_max = contents.$resources_max;

            villager = contents.$villager;
            villager_unused = contents.$villager_unused;
            villager_max = contents.$villager_max;

            gatherer = contents.$gatherer;
            lumberjack = contents.$lumberjack;    wood_bonus = contents.$wood_bonus;
            quarryman = contents.$quarryman;      stone_bonus = contents.$stone_bonus;
            worker = contents.$worker;
            hunter = contents.$hunter;            leather_bonus = contents.$leather_bonus;
            shepherd = contents.$shepherd;        cloth_bonus = contents.$cloth_bonus;
            coalminer = contents.$coalminer;      coal_bonus = contents.$coal_bonus;
            ironminer = contents.$ironminer;      iron_bonus = contents.$iron_bonus;
            tailor = contents.$tailor;            clothes_bonus = contents.$clothes_bonus;
            smith = contents.$smith;              craft_time = contents.$craft_time;
            scout = contents.$scout;              travel_time = contents.$travel_time;
            knight = contents.$knight;            damage_bonus = contents.$damage_bonus;

            trade_bonus = contents.$trade_bonus;

            hut = contents.$hut;
            huntinghut = contents.$huntinghut;
            storage = contents.$storage;              lvl_storage = contents.$lvl_storage;
            lumberjackhut = contents.$lumberjackhut;
            sheepstall = contents.$sheepstall;
            quarry = contents.$quarry;
            coalmine = contents.$coalmine;
            ironmine = contents.$ironmine;
            tailorhouse = contents.$tailorhouse;
            forge = contents.$forge;
            market = contents.$market;
            scoutpost = contents.$scoutpost;
            barracks = contents.$barracks;
        };
        reader.readAsText(file);
    }

    $("#main").show();
    $("#bottom").show();
    $("#start").hide();

    refr = setInterval(refresh, 100);
    res_prod = setInterval(resource_prod, speed * 5);
    new_vil = setInterval(new_villagers, speed * 30);
    temperature();
    temperat = setInterval(temperature, speed * 30);
    }
});