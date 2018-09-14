/*eslint-disable no-undef*/
$(document).ready(function () {
    "use strict";
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
        huntinghut = false,
        storage = false,        lvl_storage = 0,
        lumberjackhut = false,
        sheepstall = false,
        quarry = false,
        coalmine = false,
        ironmine = false,
        tailorhouse = false,
        forge = false,
        market = false,
        scoutpost = false,
        barracks = false,

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
        
        speed = 100,
        
        activities = $("#activities"),
        msg = $("#msg");

    /*-------------Jobs----------------*/
    $("#up_gatherer").click(function () {
        villager_unused -= 1;
        gatherer += 1;
    });
    $("#dwn_gatherer").click(function () {
        gatherer -= 1;
        villager_unused += 1;
    });

    $("#up_lumberjack").click(function () {
        villager_unused -= 1;
        lumberjack += 1;
    });
    $("#dwn_lumberjack").click(function () {
        lumberjack -= 1;
        villager_unused += 1;
    });

    $("#up_quarryman").click(function () {
        villager_unused -= 1;
        quarryman += 1;
    });
    $("#dwn_quarryman").click(function () {
        quarryman -= 1;
        villager_unused += 1;
    });

    $("#up_worker").click(function () {
        villager_unused -= 1;
        worker += 1;
    });
    $("#dwn_worker").click(function () {
        worker -= 1;
        villager_unused += 1;
    });

    $("#up_hunter").click(function () {
        villager_unused -= 1;
        hunter += 1;
    });
    $("#dwn_hunter").click(function () {
        hunter -= 1;
        villager_unused += 1;
    });

    $("#up_shepherd").click(function () {
        villager_unused -= 1;
        shepherd += 1;
    });
    $("#dwn_shepherd").click(function () {
        shepherd -= 1;
        villager_unused += 1;
    });

    $("#up_coalminer").click(function () {
        villager_unused -= 1;
        coalminer += 1;
    });
    $("#dwn_coalminer").click(function () {
        coalminer -= 1;
        villager_unused += 1;
    });

    $("#up_ironminer").click(function () {
        villager_unused -= 1;
        ironminer += 1;
    });
    $("#dwn_ironminer").click(function () {
        ironminer -= 1;
        villager_unused += 1;
    });

    $("#up_tailor").click(function () {
        villager_unused -= 1;
        tailor += 1;
    });
    $("#dwn_tailor").click(function () {
        tailor -= 1;
        villager_unused += 1;
    });

    $("#up_smith").click(function () {
        villager_unused -= 1;
        smith += 1;
    });
    $("#dwn_smith").click(function () {
        smith -= 1;
        villager_unused += 1;
    });

    $("#up_scout").click(function () {
        villager_unused -= 1;
        scout += 1;
    });
    $("#dwn_scout").click(function () {
        scout -= 1;
        villager_unused += 1;
    });

    $("#up_knight").click(function () {
        villager_unused -= 1;
        knight += 1;
    });
    $("#dwn_knight").click(function () {
        knight -= 1;
        villager_unused += 1;
    });

    /*----------Navigation-------------*/
    $("#btn_build").click(function () {
        $("#build").slideToggle();
        $("#upgrade").slideUp();
        $("#craft").slideUp();
        $("#trade").slideUp();
        $("#travel").slideUp();
        $("#options").slideUp();
    });
    $("#btn_upgrade").click(function () {
        $("#build").slideUp();
        $("#upgrade").slideToggle();
        $("#craft").slideUp();
        $("#trade").slideUp();
        $("#travel").slideUp();
        $("#options").slideUp();
    });
    $("#btn_craft").click(function () {
        $("#build").slideUp();
        $("#upgrade").slideUp();
        $("#craft").slideToggle();
        $("#trade").slideUp();
        $("#travel").slideUp();
        $("#options").slideUp();
    });
    $("#btn_trade").click(function () {
        $("#build").slideUp();
        $("#upgrade").slideUp();
        $("#craft").slideUp();
        $("#trade").slideToggle();
        $("#travel").slideUp();
        $("#options").slideUp();
    });
    $("#btn_travel").click(function () {
        $("#build").slideUp();
        $("#upgrade").slideUp();
        $("#craft").slideUp();
        $("#trade").slideUp();
        $("#travel").slideToggle();
        $("#options").slideUp();
    });
    $("#btn_options").click(function () {
        $("#build").slideUp();
        $("#upgrade").slideUp();
        $("#craft").slideUp();
        $("#trade").slideUp();
        $("#travel").slideUp();
        $("#options").slideToggle();
    });

    /*--------Gebäude bauen------------*/
    $("#btn_hut").click(function () {
        activities.append("<td class='hut'>Bau einer Hütte</td>");
        activities.append("<td class='hut time'></td>");
        wood -= 50;
        stone -= 10;
        slot_building = true;
        timer = curr_time_hut;
        build = setInterval(build_hut, 100);
    });
    function build_hut() {
        $("#activities .hut.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            hut += 1;
            villager_max += 2;
            clearInterval(build);
            slot_building = false;
            msg.prepend("<p>Hütte wurde fertiggestellt.</p>");
            $("#activities .hut").remove();
        }
    }
    
    $("#btn_huntinghut").click(function () {
        activities.append("<td class='huntinghut'>Bau einer Jagdhütte</td>");
        activities.append("<td class='huntinghut time'></td>");
        wood -= 150;
        stone -= 30;
        slot_building = true;
        timer = curr_time_huntinghut;
        build = setInterval(build_huntinghut, 100);
    });
    function build_huntinghut() {
        $("#activities .huntinghut.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            huntinghut = true;
            $("#leather").closest("tr").show();
            $("#hunter").closest("tr").show();
            $("#btn_huntinghut").closest("tr").hide();
            clearInterval(build);
            slot_building = false;
            msg.prepend("<p>Jagdhütte wurde fertiggestellt.</p>");
            $("#activities .huntinghut").remove();
        }
    }
    
    $("#btn_storage").click(function () {
        activities.append("<td class='storage'>Bau eines Lager</td>");
        activities.append("<td class='storage time'></td>");
        wood -= 100;
        stone -= 100;
        slot_building = true;
        timer = curr_time_storage;
        build = setInterval(build_storage, 100);
    });
    function build_storage() {
        $("#activities .storage.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            storage = true;
            resources_max += 400;
            $("#btn_storage").closest("tr").hide();
            clearInterval(build);
            slot_building = false;
            msg.prepend("<p>Lager wurde fertiggestellt.</p>");
            $("#activities .storage").remove();
        }
    }
    
    $("#btn_lumberjackhut").click(function () {
        activities.append("<td class='lumberjackhut'>Bau einer Holzfällerhütte</td>");
        activities.append("<td class='lumberjackhut time'></td>");
        wood -= 200;
        stone -= 50;
        slot_building = true;
        timer = curr_time_lumberjackhut;
        build = setInterval(build_lumberjackhut, 100);
    });
    function build_lumberjackhut() {
        $("#activities .lumberjackhut.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            lumberjackhut = true;
            wood_bonus += 1;
            $("#btn_lumberjackhut").closest("tr").hide();
            clearInterval(build);
            slot_building = false;
            msg.prepend("<p>Holzfällerhütte wurde fertiggestellt.</p>");
            $("#activities .lumberjackhut").remove();
        }
    }
    
    $("#btn_sheepstall").click(function () {
        activities.append("<td class='sheepstall'>Bau eines Schafstall</td>");
        activities.append("<td class='sheepstall time'></td>");
        wood -= 250;
        stone -= 75;
        slot_building = true;
        timer = curr_time_sheepstall;
        build = setInterval(build_sheepstall, 100);
    });
    function build_sheepstall() {
        $("#activities .sheepstall.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            sheepstall = true;
            $("#cloth").closest("tr").show();
            $("#shepherd").closest("tr").show();
            $("#btn_sheepstall").closest("tr").hide();
            clearInterval(build);
            slot_building = false;
            msg.prepend("<p>Schafstall wurde fertiggestellt.</p>");
            $("#activities .sheepstall").remove();
        }
    }
    
    $("#btn_quarry").click(function () {
        activities.append("<td class='quarry'>Bau eines Steinbruch</td>");
        activities.append("<td class='quarry time'></td>");
        wood -= 300;
        stone -= 100;
        slot_building = true;
        timer = curr_time_quarry;
        build = setInterval(build_quarry, 100);
    });
    function build_quarry() {
        $("#activities .quarry.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            quarry = true;
            stone_bonus += 1;
            $("#btn_quarry").closest("tr").hide();
            clearInterval(build);
            slot_building = false;
            msg.prepend("<p>Steinbruch wurde fertiggestellt.</p>");
            $("#activities .quarry").remove();
        }
    }
    
    $("#btn_coalmine").click(function () {
        activities.append("<td class='coalmine'>Bau einer Kohlemine</td>");
        activities.append("<td class='coalmine time'></td>");
        wood -= 300;
        stone -= 150;
        slot_building = true;
        timer = curr_time_coalmine;
        build = setInterval(build_coalmine, 100);
    });
    function build_coalmine() {
        $("#activities .coalmine.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            coalmine = true;
            $("#coal").closest("tr").show();
            $("#coalminer").closest("tr").show();
            $("#btn_coalmine").closest("tr").hide();
            clearInterval(build);
            slot_building = false;
            msg.prepend("<p>Kohlemine wurde fertiggestellt.</p>");
            $("#activities .coalmine").remove();
        }
    }
    
    $("#btn_ironmine").click(function () {
        activities.append("<td class='ironmine'>Bau einer Eisenmine</td>");
        activities.append("<td class='ironmine time'></td>");
        wood -= 400;
        stone -= 200;
        coal -= 50;
        slot_building = true;
        timer = curr_time_ironmine;
        build = setInterval(build_ironmine, 100);
    });
    function build_ironmine() {
        $("#activities .ironmine.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            ironmine = true;
            $("#iron").closest("tr").show();
            $("#ironminer").closest("tr").show();
            $("#btn_ironmine").closest("tr").hide();
            clearInterval(build);
            slot_building = false;
            msg.prepend("<p>Eisenmine wurde fertiggestellt.</p>");
            $("#activities .ironmine").remove();
        }
    }
    
    $("#btn_tailorhouse").click(function () {
        activities.append("<td class='tailorhouse'>Bau eines Schneiderhaus</td>");
        activities.append("<td class='tailorhouse time'></td>");
        wood -= 500;
        stone -= 400;
        coal -= 200;
        slot_building = true;
        timer = curr_time_tailorhouse;
        build = setInterval(build_tailorhouse, 100);
    });
    function build_tailorhouse() {
        $("#activities .tailorhouse.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            tailorhouse = true;
            $("#clothes").closest("tr").show();
            $("#tailor").closest("tr").show();
            $("#btn_tailorhouse").closest("tr").hide();
            clearInterval(build);
            slot_building = false;
            msg.prepend("<p>Schneiderhaus wurde fertiggestellt.</p>");
            $("#activities .tailorhouse").remove();
        }
    }
    
    $("#btn_forge").click(function () {
        activities.append("<td class='forge'>Bau einer Schmiede</td>");
        activities.append("<td class='forge time'></td>");
        wood -= 600;
        stone -= 450;
        coal -= 250;
        iron -= 50;
        slot_building = true;
        timer = curr_time_forge;
        build = setInterval(build_forge, 100);
    });
    function build_forge() {
        $("#activities .forge.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            forge = true;
            $("#btn_craft").show();
            $("#armor").closest("tr").show();
            $("#sword").closest("tr").show();
            $("#smith").closest("tr").show();
            $("#btn_forge").closest("tr").hide();
            clearInterval(build);
            slot_building = false;
            msg.prepend("<p>Schmiede wurde fertiggestellt.</p>");
            $("#activities .forge").remove();
        }
    }
    
    $("#btn_market").click(function () {
        activities.append("<td class='market'>Bau eines Markt</td>");
        activities.append("<td class='market time'></td>");
        wood -= 750;
        stone -= 500;
        coal -= 300;
        iron -= 100;
        slot_building = true;
        timer = curr_time_market;
        build = setInterval(build_market, 100);
    });
    function build_market() {
        $("#activities .market.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            market = true;
            $("#btn_trade").show();
            $("#btn_market").closest("tr").hide();
            clearInterval(build);
            slot_building = false;
            msg.prepend("<p>Markt wurde fertiggestellt.</p>");
            $("#activities .market").remove();
        }
    }
    
    $("#btn_scoutpost").click(function () {
        activities.append("<td class='scoutpost'>Bau eines Erkundungsposten</td>");
        activities.append("<td class='scoutpost time'></td>");
        wood -= 1000;
        stone -= 750;
        coal -= 400;
        iron -= 250;
        slot_building = true;
        timer = curr_time_scoutpost;
        build = setInterval(build_scoutpost, 100);
    });
    function build_scoutpost() {
        $("#activities .scoutpost.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            scoutpost = true;
            $("#btn_travel").show();
            $("#scout").closest("tr").show();
            $("#btn_scoutpost").closest("tr").hide();
            clearInterval(build);
            slot_building = false;
            msg.prepend("<p>Erkundungsposten wurde fertiggestellt.</p>");
            $("#activities .scoutpost").remove();
        }
    }
    
    $("#btn_barracks").click(function () {
        activities.append("<td class='barracks'>Bau einer Kaserne</td>");
        activities.append("<td class='barracks time'></td>");
        wood -= 1500;
        stone -= 1200;
        coal -= 1000;
        iron -= 800;
        slot_building = true;
        timer = curr_time_barracks;
        build = setInterval(build_barracks, 100);
    });
    function build_barracks() {
        $("#activities .barracks.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            barracks = true;
            $("#knight").closest("tr").show();
            $("#btn_barracks").closest("tr").hide();
            clearInterval(build);
            slot_building = false;
            msg.prepend("<p>Kaserne wurde fertiggestellt.</p>");
            $("#activities .barracks").remove();
        }
    }
    
    /*-------Gebäude upgraden----------*/
    $("#btn_upgrade_hut").click(function () {
        activities.append("<td class='hut'>Ausbau einer Hütte</td>");
        activities.append("<td class='hut time'></td>");
        wood -= 100;
        stone -= 20;
        slot_building = true;
        timer = curr_time_upgrade_hut;
        upgrade = setInterval(upgrade_hut, 100);
    });
    function upgrade_hut() {
        $("#activities .hut.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            hut -= 1;
            villager_max += 3;
            clearInterval(upgrade);
            slot_building = false;
            msg.prepend("<p>Hütte wurde ausgebaut.</p>");
            $("#activities .hut").remove();
        }
    }
    
    $("#btn_upgrade_huntinghut").click(function () {
        activities.append("<td class='huntinghut'>Ausbau einer Jagdhütte</td>");
        activities.append("<td class='huntinghut time'></td>");
        wood -= 300;
        stone -= 60;
        slot_building = true;
        timer = curr_time_upgrade_huntinghut;
        upgrade = setInterval(upgrade_huntinghut, 100);
    });
    function upgrade_huntinghut() {
        $("#activities .huntinghut.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            leather_bonus += 1;
            $("#btn_upgrade_huntinghut").closest("tr").hide();
            clearInterval(upgrade);
            slot_building = false;
            msg.prepend("<p>Jagdhütte wurde ausgebaut.</p>");
            $("#activities .huntinghut").remove();
        }
    }
    
    $("#btn_upgrade_storage").click(function () {
        activities.append("<td class='storage'>Ausbau eines Lager</td>");
        activities.append("<td class='storage time'></td>");
        wood -= 300;
        stone -= 300;
        slot_building = true;
        timer = curr_time_upgrade_storage;
        upgrade = setInterval(upgrade_storage, 100);
    });
    function upgrade_storage() {
        $("#activities .storage.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            resources_max += 500;
            lvl_storage += 1;
            if (lvl_storage === 5) {
                $("#btn_upgrade_storage").closest("tr").hide();
            }
            clearInterval(upgrade);
            slot_building = false;
            msg.prepend("<p>Lager wurde ausgebaut.</p>");
            $("#activities .storage").remove();
        }
    }
    
    $("#btn_upgrade_lumberjackhut").click(function () {
        activities.append("<td class='lumberjackhut'>Ausbau einer Holzfällerhütte</td>");
        activities.append("<td class='lumberjackhut time'></td>");
        wood -= 400;
        stone -= 100;
        slot_building = true;
        timer = curr_time_upgrade_lumberjackhut;
        upgrade = setInterval(upgrade_lumberjackhut, 100);
    });
    function upgrade_lumberjackhut() {
        $("#activities .lumberjackhut.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            wood_bonus += 1;
            $("#btn_upgrade_lumberjackhut").closest("tr").hide();
            clearInterval(upgrade);
            slot_building = false;
            msg.prepend("<p>Holzfällerhütte wurde ausgebaut.</p>");
            $("#activities .lumberjackhut").remove();
        }
    }
    
    $("#btn_upgrade_sheepstall").click(function () {
        activities.append("<td class='sheepstall'>Ausbau eines Schafstall</td>");
        activities.append("<td class='sheepstall time'></td>");
        wood -= 500;
        stone -= 150;
        slot_building = true;
        timer = curr_time_upgrade_sheepstall;
        upgrade = setInterval(upgrade_sheepstall, 100);
    });
    function upgrade_sheepstall() {
        $("#activities .sheepstall.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            cloth_bonus += 1;
            $("#btn_upgrade_sheepstall").closest("tr").hide();
            clearInterval(upgrade);
            slot_building = false;
            msg.prepend("<p>Schafstall wurde ausgebaut.</p>");
            $("#activities .sheepstall").remove();
        }
    }
    
    $("#btn_upgrade_quarry").click(function () {
        activities.append("<td class='quarry'>Ausbau eines Steinbruch</td>");
        activities.append("<td class='quarry time'></td>");
        wood -= 600;
        stone -= 200;
        slot_building = true;
        timer = curr_time_upgrade_quarry;
        upgrade = setInterval(upgrade_quarry, 100);
    });
    function upgrade_quarry() {
        $("#activities .quarry.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            stone_bonus += 1;
            $("#btn_upgrade_quarry").closest("tr").hide();
            clearInterval(upgrade);
            slot_building = false;
            msg.prepend("<p>Steinbruch wurde ausgebaut.</p>");
            $("#activities .quarry").remove();
        }
    }
    
    $("#btn_upgrade_coalmine").click(function () {
        activities.append("<td class='coalmine'>Ausbau einer Kohlemine</td>");
        activities.append("<td class='coalmine time'></td>");
        wood -= 600;
        stone -= 300;
        slot_building = true;
        timer = curr_time_upgrade_coalmine;
        upgrade = setInterval(upgrade_coalmine, 100);
    });
    function upgrade_coalmine() {
        $("#activities .coalmine.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            coal_bonus += 1;
            $("#btn_upgrade_coalmine").closest("tr").hide();
            clearInterval(upgrade);
            slot_building = false;
            msg.prepend("<p>Kohlemine wurde ausgebaut.</p>");
            $("#activities .coalmine").remove();
        }
    }
    
    $("#btn_upgrade_ironmine").click(function () {
        activities.append("<td class='ironmine'>Ausbau einer Eisenmine</td>");
        activities.append("<td class='ironmine time'></td>");
        wood -= 800;
        stone -= 400;
        coal -= 100;
        slot_building = true;
        timer = curr_time_upgrade_ironmine;
        upgrade = setInterval(upgrade_ironmine, 100);
    });
    function upgrade_ironmine() {
        $("#activities .ironmine.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            iron_bonus += 1;
            $("#btn_upgrade_ironmine").closest("tr").hide();
            clearInterval(upgrade);
            slot_building = false;
            msg.prepend("<p>Eisenmine wurde ausgebaut.</p>");
            $("#activities .ironmine").remove();
        }
    }
    
    $("#btn_upgrade_tailorhouse").click(function () {
        activities.append("<td class='tailorhouse'>Ausbau eines Schneiderhaus</td>");
        activities.append("<td class='tailorhouse time'></td>");
        wood -= 1000;
        stone -= 800;
        coal -= 400;
        slot_building = true;
        timer = curr_time_upgrade_tailorhouse;
        upgrade = setInterval(upgrade_tailorhouse, 100);
    });
    function upgrade_tailorhouse() {
        $("#activities .tailorhouse.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            clothes_bonus += 1;
            $("#btn_upgrade_tailorhouse").closest("tr").hide();
            clearInterval(upgrade);
            slot_building = false;
            msg.prepend("<p>Schneiderhaus wurde ausgebaut.</p>");
            $("#activities .tailorhouse").remove();
        }
    }
    
    $("#btn_upgrade_forge").click(function () {
        activities.append("<td class='forge'>Ausbau einer Schmiede</td>");
        activities.append("<td class='forge time'></td>");
        wood -= 1200;
        stone -= 900;
        coal -= 500;
        iron -= 100;
        slot_building = true;
        timer = curr_time_upgrade_forge;
        upgrade = setInterval(upgrade_forge, 100);
    });
    function upgrade_forge() {
        $("#activities .forge.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            craft_time += 1;
            $("#btn_upgrade_forge").closest("tr").hide();
            clearInterval(upgrade);
            slot_building = false;
            msg.prepend("<p>Schmiede wurde ausgebaut.</p>");
            $("#activities .forge").remove();
        }
    }
    
    $("#btn_upgrade_market").click(function () {
        activities.append("<td class='market'>Ausbau eines Markt</td>");
        activities.append("<td class='market time'></td>");
        wood -= 1500;
        stone -= 1000;
        coal -= 600;
        iron -= 200;
        slot_building = true;
        timer = curr_time_upgrade_market;
        upgrade = setInterval(upgrade_market, 100);
    });
    function upgrade_market() {
        $("#activities .market.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            trade_bonus += 1;
            $("#btn_upgrade_market").closest("tr").hide();
            clearInterval(upgrade);
            slot_building = false;
            msg.prepend("<p>Markt wurde ausgebaut.</p>");
            $("#activities .market").remove();
        }
    }
    
    $("#btn_upgrade_scoutpost").click(function () {
        activities.append("<td class='scoutpost'>Ausbau eines Erkundungsposten</td>");
        activities.append("<td class='scoutpost time'></td>");
        wood -= 2000;
        stone -= 1500;
        coal -= 800;
        iron -= 500;
        slot_building = true;
        timer = curr_time_upgrade_scoutpost;
        upgrade = setInterval(upgrade_scoutpost, 100);
    });
    function upgrade_scoutpost() {
        $("#activities .scoutpost.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            travel_time += 1;
            $("#btn_upgrade_scoutpost").closest("tr").hide();
            clearInterval(upgrade);
            slot_building = false;
            msg.prepend("<p>Erkundungsposten wurde ausgebaut.</p>");
            $("#activities .scoutpost").remove();
        }
    }
    
    $("#btn_upgrade_barracks").click(function () {
        activities.append("<td class='barracks'>Ausbau einer Kaserne</td>");
        activities.append("<td class='barracks time'></td>");
        wood -= 3000;
        stone -= 2400;
        coal -= 2000;
        iron -= 1600;
        slot_building = true;
        timer = curr_time_upgrade_barracks;
        upgrade = setInterval(upgrade_barracks, 100);
    });
    function upgrade_barracks() {
        $("#activities .barracks.time").text(secondsTommss(timer.toFixed(1)));
        timer -= 0.1;
        if (timer < 0) {
            damage_bonus += 1;
            $("#btn_upgrade_barracks").closest("tr").hide();
            clearInterval(upgrade);
            slot_building = false;
            msg.prepend("<p>Kaserne wurde ausgebaut.</p>");
            $("#activities .barracks").remove();
        }
    }
    
    $("#slider").click(function () {
    var dark;
        if ($("#switch input").is(":checked")) {
            setCookie("dark", "false", 30);
            alert(getCookie("dark"));
        } else {
            setCookie("dark", "true", 30);
            alert(getCookie("dark"));
        }
    });
    var dark = Cookies.get('dark');
    if (dark === 'true') {
        document.documentElement.style.setProperty("--bg", "black");
        document.documentElement.style.setProperty("--fg", "white");
    } else {
        document.documentElement.style.setProperty("--bg", "white");
        document.documentElement.style.setProperty("--fg", "black");
    }

    function refresh() {
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
        
        //region
        if (wood >= 100 && stone >= 20 && worker > 0 && slot_building === false && hut > 0) {
            $("#btn_upgrade_hut").prop("disabled", false);
        } else {
            $("#btn_upgrade_hut").prop("disabled", true);
        }
        if (wood >= 300 && stone >= 60 && worker > 0 && slot_building === false && huntinghut === true) {
            $("#btn_upgrade_huntinghut").prop("disabled", false);
        } else {
            $("#btn_upgrade_huntinghut").prop("disabled", true);
        }
        if (wood >= 300 && stone >= 300 && worker > 0 && slot_building === false && storage === true) {
            $("#btn_upgrade_storage").prop("disabled", false);
        } else {
            $("#btn_upgrade_storage").prop("disabled", true);
        }
        if (wood >= 400 && stone >= 100 && worker > 0 && slot_building === false && lumberjackhut === true) {
            $("#btn_upgrade_lumberjackhut").prop("disabled", false);
        } else {
            $("#btn_upgrade_lumberjackhut").prop("disabled", true);
        }
        if (wood >= 500 && stone >= 150 && worker > 0 && slot_building === false && sheepstall === true) {
            $("#btn_upgrade_sheepstall").prop("disabled", false);
        } else {
            $("#btn_upgrade_sheepstall").prop("disabled", true);
        }
        if (wood >= 600 && stone >= 200 && worker > 0 && slot_building === false && quarry === true) {
            $("#btn_upgrade_quarry").prop("disabled", false);
        } else {
            $("#btn_upgrade_quarry").prop("disabled", true);
        }
        if (wood >= 600 && stone >= 300 && worker > 0 && slot_building === false && coalmine === true) {
            $("#btn_upgrade_coalmine").prop("disabled", false);
        } else {
            $("#btn_upgrade_coalmine").prop("disabled", true);
        }
        if (wood >= 800 && stone >= 400 && coal >= 100 && worker > 0 && slot_building === false && ironmine === true) {
            $("#btn_upgrade_ironmine").prop("disabled", false);
        } else {
            $("#btn_upgrade_ironmine").prop("disabled", true);
        }
        if (wood >= 1000 && stone >= 800 && coal >= 400 && worker > 0 && slot_building === false && tailorhouse === true) {
            $("#btn_upgrade_tailorhouse").prop("disabled", false);
        } else {
            $("#btn_upgrade_tailorhouse").prop("disabled", true);
        }
        if (wood >= 1200 && stone >= 900 && coal >= 500 && iron >= 100 && worker > 0 && slot_building === false && forge === true) {
            $("#btn_upgrade_forge").prop("disabled", false);
        } else {
            $("#btn_upgrade_forge").prop("disabled", true);
        }
        if (wood >= 1500 && stone >= 1000 && coal >= 600 && iron >= 200 && worker > 0 && slot_building === false && market === true) {
            $("#btn_upgrade_market").prop("disabled", false);
        } else {
            $("#btn_upgrade_market").prop("disabled", true);
        }
        if (wood >= 2000 && stone >= 1500 && coal >= 800 && iron >= 500 && worker > 0 && slot_building === false && scoutpost === true) {
            $("#btn_upgrade_scoutpost").prop("disabled", false);
        } else {
            $("#btn_upgrade_scoutpost").prop("disabled", true);
        }
        if (wood >= 3000 && stone >= 2400 && coal >= 2000 && iron >= 1600 && worker > 0 && slot_building === false && barracks === true) {
            $("#btn_upgrade_barracks").prop("disabled", false);
        } else {
            $("#btn_upgrade_barracks").prop("disabled", true);
        }
        //endregion
    }
    refr = setInterval(refresh, 100);
    
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

    function check_msg() {
        while ($("#msg p").length > 12) {
            $("#msg p").last().remove();
        }
    }
    
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

    function die(type) {
        var rnd = Math.floor((Math.random() * 3) + 1);
        if (type === "starve") {
            if (rnd === 1) {
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
                        }
                    }
                    if (villager === 0) {
                        game_over();
                    }
                }
            }
        } else if (type === "freeze") {
            if (rnd === 1) {
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
                        }
                    }
                    if (villager === 0) {
                        game_over();
                    }
                }
            }
        }
    }

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
                starve = setInterval(function () {die("starve"); }, speed * 20);
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
    res_prod = setInterval(resource_prod, speed * 10);

    function new_villagers() {
        var rnd = Math.floor((Math.random() * 8) + 1), amount;
        if (rnd === 1) {
            amount = Math.floor((Math.random() * 3) + 2);
            if (villager + amount <= villager_max) {
                villager += amount;
                villager_unused += amount;
                msg.prepend("<p>" + amount + " Fremde sind aufgetaucht.</p>");
            }
        } else if (rnd === 2 || rnd === 3 || rnd === 4) {
            if (villager < villager_max) {
                villager += 1;
                villager_unused += 1;
                msg.prepend("<p>Ein Fremder ist aufgetaucht.</p>");
            }
        }
    }
    new_vil = setInterval(new_villagers, speed * 100);
    
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
                        freeze = setInterval(function () {die("freeze"); }, speed * 20);
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
    temperature();
    temperat = setInterval(temperature, speed * 30);
});