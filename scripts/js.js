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
    medicine = 0,
    poison = 0,
    leatherarmor = 0,
    ironarmor = 0,
    sword = 0,
    axe = 0,
    morningstar = 0,
    shortbow = 0,
    longbow = 0,
    crossbow = 0,
    tradegift = 0,
    peacegift = 0,
    poisongift = 0,
    horse = 0,
    supplies_max = 100,

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
    alchemist = 0,  brew_time = 1,
    smith = 0,      craft_time = 1,
    scout = 0,      travel_time = 1,
    knight = 0,     damage_bonus = 1,
    stableman = 0,  breed_bonus = 1,

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
    alchemisthut = false,   up_alchemisthut = false,
    forge = false,          up_forge = false,
    market = false,         up_market = false,
    scoutpost = false,      up_scoutpost = false,
    barracks = false,       up_barracks = false,
    stable = false,         up_stable = false,

    time_hut = 20,              time_upgrade_hut = 40,
    time_huntinghut = 30,       time_upgrade_huntinghut = 60,
    time_storage = 60,          time_upgrade_storage = 120,
    time_lumberjackhut = 80,    time_upgrade_lumberjackhut = 160,
    time_sheepstall = 100,      time_upgrade_sheepstall = 200,
    time_quarry = 120,          time_upgrade_quarry = 240,
    time_coalmine = 140,        time_upgrade_coalmine = 280,
    time_ironmine = 180,        time_upgrade_ironmine = 360,
    time_tailorhouse = 240,     time_upgrade_tailorhouse = 480,
    time_alchemisthut = 270,    time_upgrade_alchemisthut = 540,
    time_forge = 300,           time_upgrade_forge = 600,
    time_market = 600,          time_upgrade_market = 1200,
    time_scoutpost = 900,       time_upgrade_scoutpost = 1800,
    time_barracks = 1200,       time_upgrade_barracks = 2400,
    time_stable = 1800,         time_upgrade_stable = 3600,
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
    curr_time_alchemisthut,     curr_time_upgrade_alchemisthut,
    curr_time_forge,            curr_time_upgrade_forge,
    curr_time_market,           curr_time_upgrade_market,
    curr_time_scoutpost,        curr_time_upgrade_scoutpost,
    curr_time_barracks,         curr_time_upgrade_barracks,
    curr_time_stable,           curr_time_upgrade_stable,
    
    medicine_num = 0,
    poison_num = 0,
    leatherarmor_num = 0,
    ironarmor_num = 0,
    sword_num = 0,
    axe_num = 0,
    morningstar_num = 0,
    shortbow_num = 0,
    longbow_num = 0,
    crossbow_num = 0,
    tradegift_num = 0,
    peacegift_num = 0,
    poisongift_num = 0,
    
    time_medicine = 60,
    time_poison = 60,
    brewer,
    time_leatherarmor = 60,
    time_ironarmor = 120,
    time_sword = 120,
    time_axe = 60,
    time_morningstar = 180,
    time_shortbow = 60,
    time_longbow = 120,
    time_crossbow = 180,
    time_tradegift = 60,
    time_peacegift = 120,
    time_poisongift = 180,
    crafter,
    
    curr_time_medicine,
    curr_time_poison,
    curr_time_leatherarmor,
    curr_time_ironarmor,
    curr_time_sword,
    curr_time_axe,
    curr_time_morningstar,
    curr_time_shortbow,
    curr_time_longbow,
    curr_time_crossbow,
    curr_time_tradegift,
    curr_time_peacegift,
    curr_time_poisongift,

    slot_build = false,
    slot_craft = false,
    slot_brew = false,
    //slot_scout = false,

    build,
    upgrade,
    brew,
    craft,
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

    win = window.matchMedia("(max-width: 400px)");

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
    if (win.matches && $("#content #right").length <= 0) {
        $("#right").prependTo("#content");
    } else if (!win.matches && $("#content #right").length > 0) {
        $("#right").appendTo("#main");
    }

    //Supplies
    //region
    $("#food").text(food);
    $("#wood").text(wood);
    $("#stone").text(stone);
    $("#leather").text(leather);
    $("#cloth").text(cloth);
    $("#coal").text(coal);
    $("#iron").text(iron);
    $("#clothes").text(clothes);
    //endregion

    //Items
    //region
    $("#medicine").text(medicine);
    $("#poison").text(poison);
    $("#leatherarmor").text(leatherarmor);
    $("#ironarmor").text(ironarmor);
    $("#sword").text(sword);
    $("#axe").text(axe);
    $("#morningstar").text(morningstar);
    $("#shortbow").text(shortbow);
    $("#longbow").text(longbow);
    $("#crossbow").text(crossbow);
    $("#tradegift").text(tradegift);
    $("#peacegift").text(peacegift);
    $("#poisongift").text(poisongift);
    $("#horse").text(horse);
    //endregion

    //Villagers/Jobs
    //region
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
    $("#alchemist").text(alchemist);
    $("#smith").text(smith);
    $("#scout").text(scout);
    $("#knight").text(knight);
    $("#stableman").text(stableman);
    //endregion

    //Down/Up Buttons Dis-/Enabled
    //region
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
    if (worker === 0 || slot_build === true) {
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
    if (alchemist === 0 || slot_brew === true) {
        $("#dwn_alchemist").prop("disabled", true);
    } else {
        $("#dwn_alchemist").prop("disabled", false);
    }
    if (smith === 0 || slot_craft === true) {
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
    if (stableman === 0) {
        $("#dwn_stableman").prop("disabled", true);
    } else {
        $("#dwn_stableman").prop("disabled", false);
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
        $("#up_alchemist").prop("disabled", true);
        $("#up_smith").prop("disabled", true);
        $("#up_scout").prop("disabled", true);
        $("#up_knight").prop("disabled", true);
        $("#up_stableman").prop("disabled", true);
    }else if (slot_build === false || slot_craft === false) {
        $("#up_gatherer").prop("disabled", false);
        $("#up_lumberjack").prop("disabled", false);
        $("#up_quarryman").prop("disabled", false);
        $("#up_worker").prop("disabled", false);
        $("#up_hunter").prop("disabled", false);
        $("#up_shepherd").prop("disabled", false);
        $("#up_coalminer").prop("disabled", false);
        $("#up_ironminer").prop("disabled", false);
        $("#up_tailor").prop("disabled", false);
        $("#up_alchemist").prop("disabled", false);
        $("#up_smith").prop("disabled", false);
        $("#up_scout").prop("disabled", false);
        $("#up_knight").prop("disabled", false);
        $("#up_stableman").prop("disabled", false);
    }
    if (slot_build === true || slot_craft === true || slot_brew === true) {
        if (slot_build === true) {
            $("#up_worker").prop("disabled", true);
        }
        if (slot_craft === true) {
            $("#up_smith").prop("disabled", true);
        }
        if (slot_brew === true) {
            $("#up_alchemist").prop("disabled", true);
        }
    }
    //endregion

    // Current Time to build/upgrade
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
        curr_time_alchemisthut = time_alchemisthut / worker;
        curr_time_forge = time_forge / worker;
        curr_time_market = time_market / worker;
        curr_time_scoutpost = time_scoutpost / worker;
        curr_time_barracks = time_barracks / worker;
        curr_time_stable = time_stable / worker;

        curr_time_upgrade_hut = time_upgrade_hut / worker;
        curr_time_upgrade_huntinghut = time_upgrade_huntinghut / worker;
        curr_time_upgrade_lumberjackhut = time_upgrade_lumberjackhut / worker;
        curr_time_upgrade_quarry = time_upgrade_quarry / worker;
        curr_time_upgrade_storage = time_upgrade_storage / worker;
        curr_time_upgrade_sheepstall = time_upgrade_sheepstall / worker;
        curr_time_upgrade_coalmine = time_upgrade_coalmine / worker;
        curr_time_upgrade_ironmine = time_upgrade_ironmine / worker;
        curr_time_upgrade_tailorhouse = time_upgrade_tailorhouse / worker;
        curr_time_upgrade_alchemisthut = time_upgrade_alchemisthut / worker;
        curr_time_upgrade_forge = time_upgrade_forge / worker;
        curr_time_upgrade_market = time_upgrade_market / worker;
        curr_time_upgrade_scoutpost = time_upgrade_scoutpost / worker;
        curr_time_upgrade_barracks = time_upgrade_barracks / worker;
        curr_time_upgrade_stable = time_upgrade_stable / worker;
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
        curr_time_alchemisthut = time_alchemisthut;
        curr_time_forge = time_forge;
        curr_time_market = time_market;
        curr_time_scoutpost = time_scoutpost;
        curr_time_barracks = time_barracks;
        curr_time_stable = time_stable;

        curr_time_upgrade_hut = time_upgrade_hut;
        curr_time_upgrade_huntinghut = time_upgrade_huntinghut;
        curr_time_upgrade_lumberjackhut = time_upgrade_lumberjackhut;
        curr_time_upgrade_quarry = time_upgrade_quarry;
        curr_time_upgrade_storage = time_upgrade_storage;
        curr_time_upgrade_sheepstall = time_upgrade_sheepstall;
        curr_time_upgrade_coalmine = time_upgrade_coalmine;
        curr_time_upgrade_ironmine = time_upgrade_ironmine;
        curr_time_upgrade_tailorhouse = time_upgrade_tailorhouse;
        curr_time_upgrade_alchemisthut = time_upgrade_alchemisthut;
        curr_time_upgrade_forge = time_upgrade_forge;
        curr_time_upgrade_market = time_upgrade_market;
        curr_time_upgrade_scoutpost = time_upgrade_scoutpost;
        curr_time_upgrade_barracks = time_upgrade_barracks;
        curr_time_upgrade_stable = time_upgrade_stable;
    }
    //endregion

    // Display Build/Upgrade Time
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
    $("#time_alchemisthut").text(secondsTommss(curr_time_alchemisthut));
    $("#time_forge").text(secondsTommss(curr_time_forge));
    $("#time_market").text(secondsTommss(curr_time_market));
    $("#time_scoutpost").text(secondsTommss(curr_time_scoutpost));
    $("#time_barracks").text(secondsTommss(curr_time_barracks));
    $("#time_stable").text(secondsTommss(curr_time_stable));

    $("#time_upgrade_hut").text(secondsTommss(curr_time_upgrade_hut));
    $("#time_upgrade_huntinghut").text(secondsTommss(curr_time_upgrade_huntinghut));
    $("#time_upgrade_storage").text(secondsTommss(curr_time_upgrade_storage));
    $("#time_upgrade_lumberjackhut").text(secondsTommss(curr_time_upgrade_lumberjackhut));
    $("#time_upgrade_sheepstall").text(secondsTommss(curr_time_upgrade_sheepstall));
    $("#time_upgrade_quarry").text(secondsTommss(curr_time_upgrade_quarry));
    $("#time_upgrade_coalmine").text(secondsTommss(curr_time_upgrade_coalmine));
    $("#time_upgrade_ironmine").text(secondsTommss(curr_time_upgrade_ironmine));
    $("#time_upgrade_tailorhouse").text(secondsTommss(curr_time_upgrade_tailorhouse));
    $("#time_upgrade_alchemisthut").text(secondsTommss(curr_time_upgrade_alchemisthut));
    $("#time_upgrade_forge").text(secondsTommss(curr_time_upgrade_forge));
    $("#time_upgrade_market").text(secondsTommss(curr_time_upgrade_market));
    $("#time_upgrade_scoutpost").text(secondsTommss(curr_time_upgrade_scoutpost));
    $("#time_upgrade_barracks").text(secondsTommss(curr_time_upgrade_barracks));
    $("#time_upgrade_stable").text(secondsTommss(curr_time_upgrade_stable));
    //endregion

    // Build Buttons Dis-/Enabled
    //region
    if (wood >= 50 && stone >= 10 && worker > 0 && slot_build === false) {
        $("#btn_hut").prop("disabled", false);
    } else {
        $("#btn_hut").prop("disabled", true);
    }
    if (wood >= 150 && stone >= 30 && worker > 0 && slot_build === false) {
        $("#btn_huntinghut").prop("disabled", false);
    } else {
        $("#btn_huntinghut").prop("disabled", true);
    }
    if (wood >= 100 && stone >= 100 && worker > 0 && slot_build === false) {
        $("#btn_storage").prop("disabled", false);
    } else {
        $("#btn_storage").prop("disabled", true);
    }
    if (wood >= 200 && stone >= 50 && worker > 0 && slot_build === false) {
        $("#btn_lumberjackhut").prop("disabled", false);
    } else {
        $("#btn_lumberjackhut").prop("disabled", true);
    }
    if (wood >= 250 && stone >= 75 && worker > 0 && slot_build === false) {
        $("#btn_sheepstall").prop("disabled", false);
    } else {
        $("#btn_sheepstall").prop("disabled", true);
    }
    if (wood >= 300 && stone >= 100 && worker > 0 && slot_build === false) {
        $("#btn_quarry").prop("disabled", false);
    } else {
        $("#btn_quarry").prop("disabled", true);
    }
    if (wood >= 300 && stone >= 150 && worker > 0 && slot_build === false) {
        $("#btn_coalmine").prop("disabled", false);
    } else {
        $("#btn_coalmine").prop("disabled", true);
    }
    if (wood >= 400 && stone >= 200 && coal >= 50 && worker > 0 && slot_build === false) {
        $("#btn_ironmine").prop("disabled", false);
    } else {
        $("#btn_ironmine").prop("disabled", true);
    }
    if (wood >= 500 && stone >= 400 && coal >= 200 && worker > 0 && slot_build === false) {
        $("#btn_tailorhouse").prop("disabled", false);
    } else {
        $("#btn_tailorhouse").prop("disabled", true);
    }
    if (wood >= 550 && stone >= 450 && coal >= 250 && iron >= 50 && worker > 0 && slot_build === false) {
        $("#btn_alchemisthut").prop("disabled", false);
    } else {
        $("#btn_alchemisthut").prop("disabled", true);
    }
    if (wood >= 600 && stone >= 450 && coal >= 250 && iron >= 50 && worker > 0 && slot_build === false) {
        $("#btn_forge").prop("disabled", false);
    } else {
        $("#btn_forge").prop("disabled", true);
    }
    if (wood >= 750 && stone >= 500 && coal >= 300 && iron >= 100 && worker > 0 && slot_build === false) {
        $("#btn_market").prop("disabled", false);
    } else {
        $("#btn_market").prop("disabled", true);
    }
    if (wood >= 1000 && stone >= 750 && coal >= 400 && iron >= 250 && worker > 0 && slot_build === false) {
        $("#btn_scoutpost").prop("disabled", false);
    } else {
        $("#btn_scoutpost").prop("disabled", true);
    }
    if (wood >= 1500 && stone >= 1200 && coal >= 1000 && iron >= 800 && worker > 0 && slot_build === false) {
        $("#btn_barracks").prop("disabled", false);
    } else {
        $("#btn_barracks").prop("disabled", true);
    }
    if (wood >= 2500 && stone >= 2000 && coal >= 1500 && iron >= 1200 && worker > 0 && slot_build === false) {
        $("#btn_stable").prop("disabled", false);
    } else {
        $("#btn_stable").prop("disabled", true);
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
    }
    if (wood >= 200 && stone >= 100 && coal >= 25 && ironmine === false) {
        $("#btn_ironmine").closest("tr").show();
    } else {
        $("#btn_ironmine").closest("tr").hide();
    }
    if (wood >= 250 && stone >= 200 && coal >= 100 && tailorhouse === false) {
        $("#btn_tailorhouse").closest("tr").show();
    } else {
        $("#btn_tailorhouse").closest("tr").hide();
    }
    if (wood >= 275 && stone >= 225 && coal >= 125 && iron >= 25 && alchemisthut === false) {
        $("#btn_alchemisthut").closest("tr").show();
    } else {
        $("#btn_alchemisthut").closest("tr").hide();
    }
    if (wood >= 300 && stone >= 225 && coal >= 125 && iron >= 25 && forge === false) {
        $("#btn_forge").closest("tr").show();
    } else {
        $("#btn_forge").closest("tr").hide();
    }
    if (wood >= 375 && stone >= 250 && coal >= 150 && iron >= 50 && market === false) {
        $("#btn_market").closest("tr").show();
    } else {
        $("#btn_market").closest("tr").hide();
    }
    if (wood >= 500 && stone >= 375 && coal >= 200 && iron >= 125 && scoutpost === false) {
        $("#btn_scoutpost").closest("tr").show();
    } else {
        $("#btn_scoutpost").closest("tr").hide();
    }
    if (wood >= 750 && stone >= 600 && coal >= 500 && iron >= 400 && barracks === false) {
        $("#btn_barracks").closest("tr").show();
    } else {
        $("#btn_barracks").closest("tr").hide();
    }
    if (wood >= 1250 && stone >= 1000 && coal >= 750 && iron >= 600 && stable === false) {
        $("#btn_stable").closest("tr").show();
    } else {
        $("#btn_stable").closest("tr").hide();
    }
    //endregion

    // Upgrade Buttons Dis-/Enabled
    //region
    if (wood >= 100 && stone >= 20 && worker > 0 && slot_build === false) {
        $("#btn_upgrade_hut").prop("disabled", false);
    } else {
        $("#btn_upgrade_hut").prop("disabled", true);
    }
    if (wood >= 300 && stone >= 60 && worker > 0 && slot_build === false) {
        $("#btn_upgrade_huntinghut").prop("disabled", false);
    } else {
        $("#btn_upgrade_huntinghut").prop("disabled", true);
    }
    if (wood >= 300 && stone >= 300 && worker > 0 && slot_build === false) {
        $("#btn_upgrade_storage").prop("disabled", false);
    } else {
        $("#btn_upgrade_storage").prop("disabled", true);
    }
    if (wood >= 400 && stone >= 100 && worker > 0 && slot_build === false) {
        $("#btn_upgrade_lumberjackhut").prop("disabled", false);
    } else {
        $("#btn_upgrade_lumberjackhut").prop("disabled", true);
    }
    if (wood >= 500 && stone >= 150 && worker > 0 && slot_build === false) {
        $("#btn_upgrade_sheepstall").prop("disabled", false);
    } else {
        $("#btn_upgrade_sheepstall").prop("disabled", true);
    }
    if (wood >= 600 && stone >= 200 && worker > 0 && slot_build === false) {
        $("#btn_upgrade_quarry").prop("disabled", false);
    } else {
        $("#btn_upgrade_quarry").prop("disabled", true);
    }
    if (wood >= 600 && stone >= 300 && worker > 0 && slot_build === false) {
        $("#btn_upgrade_coalmine").prop("disabled", false);
    } else {
        $("#btn_upgrade_coalmine").prop("disabled", true);
    }
    if (wood >= 800 && stone >= 400 && coal >= 100 && worker > 0 && slot_build === false) {
        $("#btn_upgrade_ironmine").prop("disabled", false);
    } else {
        $("#btn_upgrade_ironmine").prop("disabled", true);
    }
    if (wood >= 1000 && stone >= 800 && coal >= 400 && worker > 0 && slot_build === false) {
        $("#btn_upgrade_tailorhouse").prop("disabled", false);
    } else {
        $("#btn_upgrade_tailorhouse").prop("disabled", true);
    }
    if (wood >= 1100 && stone >= 900 && coal >= 500 && iron >= 100 && worker > 0 && slot_build === false) {
        $("#btn_upgrade_alchemisthut").prop("disabled", false);
    } else {
        $("#btn_upgrade_alchemisthut").prop("disabled", true);
    }
    if (wood >= 1200 && stone >= 900 && coal >= 500 && iron >= 100 && worker > 0 && slot_build === false) {
        $("#btn_upgrade_forge").prop("disabled", false);
    } else {
        $("#btn_upgrade_forge").prop("disabled", true);
    }
    if (wood >= 1500 && stone >= 1000 && coal >= 600 && iron >= 200 && worker > 0 && slot_build === false) {
        $("#btn_upgrade_market").prop("disabled", false);
    } else {
        $("#btn_upgrade_market").prop("disabled", true);
    }
    if (wood >= 2000 && stone >= 1500 && coal >= 800 && iron >= 500 && worker > 0 && slot_build === false) {
        $("#btn_upgrade_scoutpost").prop("disabled", false);
    } else {
        $("#btn_upgrade_scoutpost").prop("disabled", true);
    }
    if (wood >= 3000 && stone >= 2400 && coal >= 2000 && iron >= 1600 && worker > 0 && slot_build === false) {
        $("#btn_upgrade_barracks").prop("disabled", false);
    } else {
        $("#btn_upgrade_barracks").prop("disabled", true);
    }
    if (wood >= 5000 && stone >= 4000 && coal >= 3000 && iron >= 2400 && worker > 0 && slot_build === false) {
        $("#btn_upgrade_stable").prop("disabled", false);
    } else {
        $("#btn_upgrade_stable").prop("disabled", true);
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
    if (wood >= 550 && stone >= 450 && coal >= 250 && iron >= 50 && alchemisthut === true && up_alchemisthut === false) {
        $("#btn_upgrade_alchemisthut").closest("tr").show();
    } else {
        $("#btn_upgrade_alchemisthut").closest("tr").hide();
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
    if (wood >= 2500 && stone >= 2000 && coal >= 1500 && iron >= 1200 && stable === true && up_stable === false) {
        $("#btn_upgrade_stable").closest("tr").show();
    } else {
        $("#btn_upgrade_stable").closest("tr").hide();
    }
    //endregion

    //Current Time to brew
    //region
    if (alchemist > 1) {
        curr_time_medicine = time_medicine / alchemist * medicine_num / brew_time;
        curr_time_poison = time_poison / alchemist * poison_num / brew_time;
    } else {
        curr_time_medicine = time_medicine * medicine_num / brew_time;
        curr_time_poison = time_poison * poison_num / brew_time;
    }
    //endregion

    //Current Time to craft
    //region
    if (smith > 1) {
        curr_time_leatherarmor = time_leatherarmor / smith * leatherarmor_num / craft_time;
        curr_time_ironarmor = time_ironarmor / smith * ironarmor_num / craft_time;
        curr_time_sword = time_sword / smith * sword_num / craft_time;
        curr_time_axe = time_axe / smith * axe_num / craft_time;
        curr_time_morningstar = time_morningstar / smith * morningstar_num / craft_time;
        curr_time_shortbow = time_shortbow / smith * shortbow_num / craft_time;
        curr_time_longbow = time_longbow / smith * longbow_num / craft_time;
        curr_time_crossbow = time_crossbow / smith * crossbow_num / craft_time;
        curr_time_tradegift = time_tradegift / smith * tradegift_num / craft_time;
        curr_time_peacegift = time_peacegift / smith * peacegift_num / craft_time;
        curr_time_poisongift = time_poisongift / smith * poisongift_num / craft_time;
    } else {
        curr_time_leatherarmor = time_leatherarmor * leatherarmor_num / craft_time;
        curr_time_ironarmor = time_ironarmor * ironarmor_num / craft_time;
        curr_time_sword = time_sword * sword_num / craft_time;
        curr_time_axe = time_axe * axe_num / craft_time;
        curr_time_morningstar = time_morningstar * morningstar_num / craft_time;
        curr_time_shortbow = time_shortbow * shortbow_num / craft_time;
        curr_time_longbow = time_longbow * longbow_num / craft_time;
        curr_time_crossbow = time_crossbow * crossbow_num / craft_time;
        curr_time_tradegift = time_tradegift * tradegift_num / craft_time;
        curr_time_peacegift = time_peacegift * peacegift_num / craft_time;
        curr_time_poisongift = time_poisongift * poisongift_num / craft_time;
    }
    //endregion

    //Display Brew/Craft Time
    //region
    $("#time_medicine").text(secondsTommss(curr_time_medicine));
    $("#time_poison").text(secondsTommss(curr_time_poison));
    $("#time_leatherarmor").text(secondsTommss(curr_time_leatherarmor));
    $("#time_ironarmor").text(secondsTommss(curr_time_ironarmor));
    $("#time_sword").text(secondsTommss(curr_time_sword));
    $("#time_axe").text(secondsTommss(curr_time_axe));
    $("#time_morningstar").text(secondsTommss(curr_time_morningstar));
    $("#time_shortbow").text(secondsTommss(curr_time_shortbow));
    $("#time_longbow").text(secondsTommss(curr_time_longbow));
    $("#time_crossbow").text(secondsTommss(curr_time_crossbow));
    $("#time_tradegift").text(secondsTommss(curr_time_tradegift));
    $("#time_peacegift").text(secondsTommss(curr_time_peacegift));
    $("#time_poisongift").text(secondsTommss(curr_time_poisongift));
    //endregion

    // Brew/Craft Buttons Dis-/Enabled
    //region
    if (food >= 20 * medicine_num && stone >= 5 * medicine_num && cloth >= 5 * medicine_num && alchemist > 0 && medicine_num > 0 && slot_brew === false) {
        $("#btn_medicine").prop("disabled", false);
    } else {
        $("#btn_medicine").prop("disabled", true);
    }
    if (food >= 10 * poison_num && stone >= 5 * poison_num && cloth >= 5 * poison_num && coal >= 5 * poison_num && iron >= 5 * poison_num && alchemist > 0 && poison_num > 0 && slot_brew === false) {
        $("#btn_poison").prop("disabled", false);
    } else {
        $("#btn_poison").prop("disabled", true);
    }
    if (leather >= 50 * leatherarmor_num && smith > 0 && leatherarmor_num > 0 && slot_craft === false) {
        $("#btn_leatherarmor").prop("disabled", false);
    } else {
        $("#btn_leatherarmor").prop("disabled", true);
    }
    if (iron >= 50 * ironarmor_num && smith > 0 && ironarmor_num > 0 && slot_craft === false) {
        $("#btn_ironarmor").prop("disabled", false);
    } else {
        $("#btn_ironarmor").prop("disabled", true);
    }
    if (wood >= 5 * sword_num && iron >= 25 * sword_num && smith > 0 && sword_num > 0 && slot_craft === false) {
        $("#btn_sword").prop("disabled", false);
    } else {
        $("#btn_sword").prop("disabled", true);
    }
    if (wood >= 5 * axe_num && iron >= 20 * axe_num && smith > 0 && axe_num > 0  && slot_craft === false) {
        $("#btn_axe").prop("disabled", false);
    } else {
        $("#btn_axe").prop("disabled", true);
    }
    if (wood >= 5 * morningstar_num && iron >= 30 * morningstar_num && smith > 0 && morningstar_num > 0  && slot_craft === false) {
        $("#btn_morningstar").prop("disabled", false);
    } else {
        $("#btn_morningstar").prop("disabled", true);
    }
    if (wood >= 20 * shortbow_num && iron >= 5 * shortbow_num && smith > 0 && shortbow_num > 0 && slot_craft === false) {
        $("#btn_shortbow").prop("disabled", false);
    } else {
        $("#btn_shortbow").prop("disabled", true);
    }
    if (wood >= 25 * longbow_num && iron >= 5 * longbow_num && smith > 0 && longbow_num > 0 && slot_craft === false) {
        $("#btn_longbow").prop("disabled", false);
    } else {
        $("#btn_longbow").prop("disabled", true);
    }
    if (wood >= 30 * crossbow_num && iron >= 5 * crossbow_num && smith > 0 && crossbow_num > 0 && slot_craft === false) {
        $("#btn_crossbow").prop("disabled", false);
    } else {
        $("#btn_crossbow").prop("disabled", true);
    }
    if (food >= 25 * tradegift_num && wood >= 25  * tradegift_num&& leather >= 25 * tradegift_num && cloth >= 25 * tradegift_num && iron >= 25  * tradegift_num&& clothes >= 25 * tradegift_num && smith > 0 && tradegift_num > 0 && slot_craft === false) {
        $("#btn_tradegift").prop("disabled", false);
    } else {
        $("#btn_tradegift").prop("disabled", true);
    }
    if (food >= 50 * peacegift_num && wood >= 50 * peacegift_num && leather >= 50 * peacegift_num && cloth >= 50 * peacegift_num && iron >= 50 * peacegift_num && clothes >= 50 * peacegift_num && smith > 0 && peacegift_num > 0 && slot_craft === false) {
        $("#btn_peacegift").prop("disabled", false);
    } else {
        $("#btn_peacegift").prop("disabled", true);
    }
    if (food >= 50 * poisongift_num && wood >= 50 * poisongift_num && leather >= 50 * poisongift_num && cloth >= 50 * poisongift_num && iron >= 50 * poisongift_num && clothes >= 50 * poisongift_num && poison >= 5 * poisongift_num && smith > 0 && poisongift_num > 0 && slot_craft === false) {
        $("#btn_poisongift").prop("disabled", false);
    } else {
        $("#btn_poisongift").prop("disabled", true);
    }
    //endregion

    // Craft Buttons Show/Hide
    //region
    if (food >= 10 && stone >= 3 && cloth >= 3) {
        $("#btn_medicine").closest("div").show();
    } else {
        $("#btn_medicine").closest("div").hide();
    }
    if (food >= 5 && stone >= 3 && cloth >= 3 && coal >= 3 && iron >= 3) {
        $("#btn_poison").closest("div").show();
    } else {
        $("#btn_poison").closest("div").hide();
    }
    if (leather >= 25) {
        $("#btn_leatherarmor").closest("div").show();
    } else {
        $("#btn_leatherarmor").closest("div").hide();
    }
    if (iron >= 25) {
        $("#btn_ironarmor").closest("div").show();
    } else {
        $("#btn_ironarmor").closest("div").hide();
    }
    if (wood >= 3 && iron >= 13) {
        $("#btn_sword").closest("div").show();
    } else {
        $("#btn_sword").closest("div").hide();
    }
    if (wood >= 3 && iron >= 10) {
        $("#btn_axe").closest("div").show();
    } else {
        $("#btn_axe").closest("div").hide();
    }
    if (wood >= 3 && iron >= 15) {
        $("#btn_morningstar").closest("div").show();
    } else {
        $("#btn_morningstar").closest("div").hide();
    }
    if (wood >= 10 && iron >= 3) {
        $("#btn_shortbow").closest("div").show();
    } else {
        $("#btn_shortbow").closest("div").hide();
    }
    if (wood >= 13 && iron >= 3) {
        $("#btn_longbow").closest("div").show();
    } else {
        $("#btn_longbow").closest("div").hide();
    }
    if (wood >= 15 && iron >= 3) {
        $("#btn_crossbow").closest("div").show();
    } else {
        $("#btn_crossbow").closest("div").hide();
    }
    if (food >= 13 && wood >= 13 && leather >= 13 && cloth >= 13 && iron >= 13 && clothes >= 13) {
        $("#btn_tradegift").closest("div").show();
    } else {
        $("#btn_tradegift").closest("div").hide();
    }
    if (food >= 25 && wood >= 25 && leather >= 25 && cloth >= 25 && iron >= 25 && clothes >= 25) {
        $("#btn_peacegift").closest("div").show();
    } else {
        $("#btn_peacegift").closest("div").hide();
    }
    if (food >= 25 && wood >= 25 && leather >= 25 && cloth >= 25 && iron >= 25 && clothes >= 25 && poison >= 3) {
        $("#btn_poisongift").closest("div").show();
    } else {
        $("#btn_poisongift").closest("div").hide();
    }
    //endregion
}

/* Game Over */
function game_over() {
    msg.prepend("<p>Dein Dorf ist gestorben.</p>");
    check_msg();
    refresh();
    clearInterval(build);
    clearInterval(upgrade);
    clearInterval(refr);
    clearInterval(starve);
    clearInterval(freeze);
    clearInterval(supp_prod);
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
                    check_msg();
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
                    check_msg();
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
                    check_msg();
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
                    check_msg();
                }
                if (villager === 0) {
                    game_over();
                }
            }
        }
    }
}

/* supplie production */
function supplie_prod() {
    if (food < supplies_max) {
        food += (gatherer * 2) + hunter;
        if (food > supplies_max) {
            food = supplies_max;
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
    if (wood < supplies_max) {
        wood += lumberjack * wood_bonus;
        if (wood > supplies_max) {
            wood = supplies_max;
        }
    }
    var rnd_stone, rnd_coal, rnd_iron;
    if (stone < supplies_max) {
        rnd_stone = Math.floor((Math.random() * 2) + 1);
        if (rnd_stone === 1) {
            stone += quarryman * stone_bonus;
            if (stone > supplies_max) {
                stone = supplies_max;
            }
        }
    }
    if (leather < supplies_max) {
        leather += hunter * leather_bonus;
        if (leather > supplies_max) {
            leather = supplies_max;
        }
    }
    if (cloth < supplies_max) {
        cloth += shepherd * cloth_bonus;
        if (cloth > supplies_max) {
            cloth = supplies_max;
        }
    }
    if (coal < supplies_max) {
        rnd_coal = Math.floor((Math.random() * 4) + 1);
        if (rnd_coal === 1) {
            coal += coalminer * coal_bonus;
            if (coal > supplies_max) {
                coal = supplies_max;
            }
        }
    }
    if (iron < supplies_max) {
        rnd_iron = Math.floor((Math.random() * 6) + 1);
        if (rnd_iron === 1) {
            iron += ironminer * iron_bonus;
            if (iron > supplies_max) {
                iron = supplies_max;
            }
        }
    }
    if (clothes < supplies_max) {
        clothes += tailor * clothes_bonus;
        cloth -= tailor;
        if (clothes > supplies_max) {
            clothes = supplies_max;
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
            check_msg();
        }
    } else if (rnd === 2 || rnd === 3) {
        if (villager < villager_max) {
            villager += 1;
            villager_unused += 1;
            msg.prepend("<p>Ein Fremder ist aufgetaucht.</p>");
            check_msg();
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