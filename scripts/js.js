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
    while ($("#msg p").length > 9) {
        $("#msg p").last().remove();
    }
}

/* Check Weather count */
function check_weather() {
    while ($("#phase div").length > 3) {
        $("#phase div").first().remove();
    }
}

/* Check Windowsize and if the right container is not already moved */
function window_resize() {
	if (win.matches && $("#content #right").length <= 0) {
        $("#right").prependTo("#content");
        $("#right").hide();
    } else if (!win.matches && $("#content #right").length > 0) {
        $("#right").appendTo("#main");
        $("#right").show();
    }
	if (win.matches) {
		$("#content").css({height: ""});
	} else {
		$("#content").css({height: "calc(100vh - 370px - " + $(".nav").outerHeight() + "px"});
	}
}

/* Window resize */
$(window).on("resize", function () {
    window_resize();
});

/* Refresher */
function refresh() {
    // Supplies
    //region
    $("#iecoin").text(iecoin);
    $("#food").text(food);
    $("#wood").text(wood);
    $("#stone").text(stone);
    $("#leather").text(leather);
    $("#cloth").text(cloth);
    $("#coal").text(coal);
    $("#iron").text(iron);
    $("#clothes").text(clothes);
    //endregion

    // Items
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

    // Villagers/Jobs
    //region
    $("#villager").text(villager.count + "/" + villager.max);
    $("#villager_unused").text(villager.unused + "/" + villager.count);
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

    // Down/Up Buttons Dis-/Enabled
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
    if (villager.unused === 0) {
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
    }else if (villager.unused > 0) {
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
        hut.curr_time = hut.time / worker * (speed / 1000);
        huntinghut.curr_time = huntinghut.time / worker * (speed / 1000);
        lumberjackhut.curr_time = lumberjackhut.time / worker * (speed / 1000);
        quarry.curr_time = quarry.time / worker * (speed / 1000);
        storage.curr_time = storage.time / worker * (speed / 1000);
        sheepstall.curr_time = sheepstall.time / worker * (speed / 1000);
        coalmine.curr_time = coalmine.time / worker * (speed / 1000);
        ironmine.curr_time = ironmine.time / worker * (speed / 1000);
        tailorhouse.curr_time = tailorhouse.time / worker * (speed / 1000);
        alchemisthut.curr_time = alchemisthut.time / worker * (speed / 1000);
        forge.curr_time = forge.time / worker * (speed / 1000);
        market.curr_time = market.time / worker * (speed / 1000);
        scoutpost.curr_time = scoutpost.time / worker * (speed / 1000);
        barracks.curr_time = barracks.time / worker * (speed / 1000);
        stable.curr_time = stable.time / worker * (speed / 1000);
        
        hut_up.curr_time = hut_up.time / worker * (speed / 1000);
        huntinghut_up.curr_time = huntinghut_up.time / worker * (speed / 1000);
        lumberjackhut_up.curr_time = lumberjackhut_up.time / worker * (speed / 1000);
        quarry_up.curr_time = quarry_up.time / worker * (speed / 1000);
        storage_up.curr_time = storage_up.time / worker * (speed / 1000);
        sheepstall_up.curr_time = sheepstall_up.time / worker * (speed / 1000);
        coalmine_up.curr_time = coalmine_up.time / worker * (speed / 1000);
        ironmine_up.curr_time = ironmine_up.time / worker * (speed / 1000);
        tailorhouse_up.curr_time = tailorhouse_up.time / worker * (speed / 1000);
        alchemisthut_up.curr_time = alchemisthut_up.time / worker * (speed / 1000);
        forge_up.curr_time = forge_up.time / worker * (speed / 1000);
        market_up.curr_time = market_up.time / worker * (speed / 1000);
        scoutpost_up.curr_time = scoutpost_up.time / worker * (speed / 1000);
        barracks_up.curr_time = barracks_up.time / worker * (speed / 1000);
        stable_up.curr_time = stable_up.time / worker * (speed / 1000);
    } else {
        hut.curr_time = hut.time * (speed / 1000);
        huntinghut.curr_time = huntinghut.time * (speed / 1000);
        lumberjackhut.curr_time = lumberjackhut.time * (speed / 1000);
        quarry.curr_time = quarry.time * (speed / 1000);
        storage.curr_time = storage.time * (speed / 1000);
        sheepstall.curr_time = sheepstall.time * (speed / 1000);
        coalmine.curr_time = coalmine.time * (speed / 1000);
        ironmine.curr_time = ironmine.time * (speed / 1000);
        tailorhouse.curr_time = tailorhouse.time * (speed / 1000);
        alchemisthut.curr_time = alchemisthut.time * (speed / 1000);
        forge.curr_time = forge.time * (speed / 1000);
        market.curr_time = market.time * (speed / 1000);
        scoutpost.curr_time = scoutpost.time * (speed / 1000);
        barracks.curr_time = barracks.time * (speed / 1000);
        stable.curr_time = stable.time * (speed / 1000);
        
        hut_up.curr_time = hut_up.time * (speed / 1000);
        huntinghut_up.curr_time = huntinghut_up.time * (speed / 1000);
        lumberjackhut_up.curr_time = lumberjackhut_up.time * (speed / 1000);
        quarry_up.curr_time = quarry_up.time * (speed / 1000);
        storage_up.curr_time = storage_up.time * (speed / 1000);
        sheepstall_up.curr_time = sheepstall_up.time * (speed / 1000);
        coalmine_up.curr_time = coalmine_up.time * (speed / 1000);
        ironmine_up.curr_time = ironmine_up.time * (speed / 1000);
        tailorhouse_up.curr_time = tailorhouse_up.time * (speed / 1000);
        alchemisthut_up.curr_time = alchemisthut_up.time * (speed / 1000);
        forge_up.curr_time = forge_up.time * (speed / 1000);
        market_up.curr_time = market_up.time * (speed / 1000);
        scoutpost_up.curr_time = scoutpost_up.time * (speed / 1000);
        barracks_up.curr_time = barracks_up.time * (speed / 1000);
        stable_up.curr_time = stable_up.time * (speed / 1000);
    }
    //endregion

    // Display Build/Upgrade Time
    //region
    $("#time_hut").text(secondsTommss(hut.curr_time));
    $("#time_huntinghut").text(secondsTommss(huntinghut.curr_time));
    $("#time_storage").text(secondsTommss(storage.curr_time));
    $("#time_lumberjackhut").text(secondsTommss(lumberjackhut.curr_time));
    $("#time_sheepstall").text(secondsTommss(sheepstall.curr_time));
    $("#time_quarry").text(secondsTommss(quarry.curr_time));
    $("#time_coalmine").text(secondsTommss(coalmine.curr_time));
    $("#time_ironmine").text(secondsTommss(ironmine.curr_time));
    $("#time_tailorhouse").text(secondsTommss(tailorhouse.curr_time));
    $("#time_alchemisthut").text(secondsTommss(alchemisthut.curr_time));
    $("#time_forge").text(secondsTommss(forge.curr_time));
    $("#time_market").text(secondsTommss(market.curr_time));
    $("#time_scoutpost").text(secondsTommss(scoutpost.curr_time));
    $("#time_barracks").text(secondsTommss(barracks.curr_time));
    $("#time_stable").text(secondsTommss(stable.curr_time));
    
    $("#time_upgrade_hut").text(secondsTommss(hut_up.curr_time));
    $("#time_upgrade_huntinghut").text(secondsTommss(huntinghut_up.curr_time));
    $("#time_upgrade_storage").text(secondsTommss(storage_up.curr_time));
    $("#time_upgrade_lumberjackhut").text(secondsTommss(lumberjackhut_up.curr_time));
    $("#time_upgrade_sheepstall").text(secondsTommss(sheepstall_up.curr_time));
    $("#time_upgrade_quarry").text(secondsTommss(quarry_up.curr_time));
    $("#time_upgrade_coalmine").text(secondsTommss(coalmine_up.curr_time));
    $("#time_upgrade_ironmine").text(secondsTommss(ironmine_up.curr_time));
    $("#time_upgrade_tailorhouse").text(secondsTommss(tailorhouse_up.curr_time));
    $("#time_upgrade_alchemisthut").text(secondsTommss(alchemisthut_up.curr_time));
    $("#time_upgrade_forge").text(secondsTommss(forge_up.curr_time));
    $("#time_upgrade_market").text(secondsTommss(market_up.curr_time));
    $("#time_upgrade_scoutpost").text(secondsTommss(scoutpost_up.curr_time));
    $("#time_upgrade_barracks").text(secondsTommss(barracks_up.curr_time));
    $("#time_upgrade_stable").text(secondsTommss(stable_up.curr_time));
    //endregion

    // Build Buttons Dis-/Enabled
    //region
    if (wood >= hut.costs.wood && stone >= hut.costs.stone && worker > 0 && slot_build === false) {
        $("#btn_hut").prop("disabled", false);
    } else {
        $("#btn_hut").prop("disabled", true);
    }
    if (wood >= huntinghut.costs.wood && stone >= huntinghut.costs.stone && worker > 0 && slot_build === false) {
        $("#btn_huntinghut").prop("disabled", false);
    } else {
        $("#btn_huntinghut").prop("disabled", true);
    }
    if (wood >= storage.costs.wood && stone >= storage.costs.stone && worker > 0 && slot_build === false) {
        $("#btn_storage").prop("disabled", false);
    } else {
        $("#btn_storage").prop("disabled", true);
    }
    if (wood >= lumberjackhut.costs.wood && stone >= lumberjackhut.costs.stone && worker > 0 && slot_build === false) {
        $("#btn_lumberjackhut").prop("disabled", false);
    } else {
        $("#btn_lumberjackhut").prop("disabled", true);
    }
    if (wood >= sheepstall.costs.wood && stone >= sheepstall.costs.stone && worker > 0 && slot_build === false) {
        $("#btn_sheepstall").prop("disabled", false);
    } else {
        $("#btn_sheepstall").prop("disabled", true);
    }
    if (wood >= quarry.costs.wood && stone >= quarry.costs.stone && worker > 0 && slot_build === false) {
        $("#btn_quarry").prop("disabled", false);
    } else {
        $("#btn_quarry").prop("disabled", true);
    }
    if (wood >= coalmine.costs.wood && stone >= coalmine.costs.stone && worker > 0 && slot_build === false) {
        $("#btn_coalmine").prop("disabled", false);
    } else {
        $("#btn_coalmine").prop("disabled", true);
    }
    if (wood >= ironmine.costs.wood && stone >= ironmine.costs.stone && coal >= ironmine.costs.coal && worker > 0 && slot_build === false) {
        $("#btn_ironmine").prop("disabled", false);
    } else {
        $("#btn_ironmine").prop("disabled", true);
    }
    if (wood >= tailorhouse.costs.wood && stone >= tailorhouse.costs.stone && coal >= tailorhouse.costs.coal && worker > 0 && slot_build === false) {
        $("#btn_tailorhouse").prop("disabled", false);
    } else {
        $("#btn_tailorhouse").prop("disabled", true);
    }
    if (wood >= alchemisthut.costs.wood && stone >= alchemisthut.costs.stone && coal >= alchemisthut.costs.coal && iron >= alchemisthut.costs.iron && worker > 0 && slot_build === false) {
        $("#btn_alchemisthut").prop("disabled", false);
    } else {
        $("#btn_alchemisthut").prop("disabled", true);
    }
    if (wood >= forge.costs.wood && stone >= forge.costs.stone && coal >= forge.costs.coal && iron >= forge.costs.iron && worker > 0 && slot_build === false) {
        $("#btn_forge").prop("disabled", false);
    } else {
        $("#btn_forge").prop("disabled", true);
    }
    if (wood >= market.costs.wood && stone >= market.costs.stone && coal >= market.costs.coal && iron >= market.costs.iron && worker > 0 && slot_build === false) {
        $("#btn_market").prop("disabled", false);
    } else {
        $("#btn_market").prop("disabled", true);
    }
    if (wood >= scoutpost.costs.wood && stone >= scoutpost.costs.stone && coal >= scoutpost.costs.coal && iron >= scoutpost.costs.iron && worker > 0 && slot_build === false) {
        $("#btn_scoutpost").prop("disabled", false);
    } else {
        $("#btn_scoutpost").prop("disabled", true);
    }
    if (wood >= barracks.costs.wood && stone >= barracks.costs.stone && coal >= barracks.costs.coal && iron >= barracks.costs.iron && worker > 0 && slot_build === false) {
        $("#btn_barracks").prop("disabled", false);
    } else {
        $("#btn_barracks").prop("disabled", true);
    }
    if (wood >= stable.costs.wood && stone >= stable.costs.stone && coal >= stable.costs.coal && iron >= stable.costs.iron && worker > 0 && slot_build === false) {
        $("#btn_stable").prop("disabled", false);
    } else {
        $("#btn_stable").prop("disabled", true);
    }
    //endregion

    // Build Buttons Show/Hide
    //region
    if (wood >= hut.costs.wood / 2 && stone >= hut.costs.stone / 2) {
        if ($("#build tbody #btn_hut").length <= 0) {
            $("#build tbody").append(el_build_hut);
        }
    } else {
        if ($("#build tbody #btn_hut")) {
            $("#build tbody #btn_hut").closest("tr").remove();
        }
    }
    if (wood >= huntinghut.costs.wood / 2 && stone >= huntinghut.costs.stone / 2 && huntinghut.count === false) {
        if ($("#build tbody #btn_huntinghut").length <= 0) {
            $("#build tbody").append(el_build_huntinghut);
        }
    } else {
        if ($("#build tbody #btn_huntinghut")) {
            $("#build tbody #btn_huntinghut").closest("tr").remove();
        }
    }
    if (wood >= storage.costs.wood / 2 && stone >= storage.costs.stone / 2 && storage.count === false) {
        if ($("#build tbody #btn_storage").length <= 0) {
            $("#build tbody").append(el_build_storage);
        }
    } else {
        if ($("#build tbody #btn_storage")) {
            $("#build tbody #btn_storage").closest("tr").remove();
        }
    }
    if (wood >= lumberjackhut.costs.wood / 2 && stone >= lumberjackhut.costs.stone / 2 && lumberjackhut.count === false) {
        if ($("#build tbody #btn_lumberjackhut").length <= 0) {
            $("#build tbody").append(el_build_lumberjackhut);
        }
    } else {
        if ($("#build tbody #btn_lumberjackhut")) {
            $("#build tbody #btn_lumberjackhut").closest("tr").remove();
        }
    }
    if (wood >= sheepstall.costs.wood / 2 && stone >= sheepstall.costs.stone / 2 && sheepstall.count === false) {
        if ($("#build tbody #btn_sheepstall").length <= 0) {
            $("#build tbody").append(el_build_sheepstall);
        }
    } else {
        if ($("#build tbody #btn_sheepstall")) {
            $("#build tbody #btn_sheepstall").closest("tr").remove();
        }
    }
    if (wood >= quarry.costs.wood / 2 && stone >= quarry.costs.stone / 2 && quarry.count === false) {
        if ($("#build tbody #btn_quarry").length <= 0) {
            $("#build tbody").append(el_build_quarry);
        }
    } else {
        if ($("#build tbody #btn_quarry")) {
            $("#build tbody #btn_quarry").closest("tr").remove();
        }
    }
    if (wood >= coalmine.costs.wood / 2 && stone >= coalmine.costs.stone / 2 && coalmine.count === false) {
        if ($("#build tbody #btn_coalmine").length <= 0) {
            $("#build tbody").append(el_build_coalmine);
        }
    } else {
        if ($("#build tbody #btn_coalmine")) {
            $("#build tbody #btn_coalmine").closest("tr").remove();
        }
    }
    if (wood >= ironmine.costs.wood / 2 && stone >= ironmine.costs.stone / 2 && coal >= ironmine.costs.coal / 2 && ironmine.count === false) {
        if ($("#build tbody #btn_ironmine").length <= 0) {
            $("#build tbody").append(el_build_ironmine);
        }
    } else {
        if ($("#build tbody #btn_ironmine")) {
            $("#build tbody #btn_ironmine").closest("tr").remove();
        }
    }
    if (wood >= tailorhouse.costs.wood / 2 && stone >= tailorhouse.costs.stone / 2 && coal >= tailorhouse.costs.coal / 2 && tailorhouse.count === false) {
        if ($("#build tbody #btn_tailorhouse").length <= 0) {
            $("#build tbody").append(el_build_tailorhouse);
        }
    } else {
        if ($("#build tbody #btn_tailorhouse")) {
            $("#build tbody #btn_tailorhouse").closest("tr").remove();
        }
    }
    if (wood >= alchemisthut.costs.wood / 2 && stone >= alchemisthut.costs.stone / 2 && coal >= alchemisthut.costs.coal / 2 && iron >= alchemisthut.costs.iron / 2 && alchemisthut.count === false) {
        if ($("#build tbody #btn_alchemisthut").length <= 0) {
            $("#build tbody").append(el_build_alchemisthut);
        }
    } else {
        if ($("#build tbody #btn_alchemisthut")) {
            $("#build tbody #btn_alchemisthut").closest("tr").remove();
        }
    }
    if (wood >= forge.costs.wood / 2 && stone >= forge.costs.stone / 2 && coal >= forge.costs.coal / 2 && iron >= forge.costs.iron / 2 && forge.count === false) {
        if ($("#build tbody #btn_forge").length <= 0) {
            $("#build tbody").append(el_build_forge);
        }
    } else {
        if ($("#build tbody #btn_forge")) {
            $("#build tbody #btn_forge").closest("tr").remove();
        }
    }
    if (wood >= market.costs.wood / 2 && stone >= market.costs.stone / 2 && coal >= market.costs.coal / 2 && iron >= market.costs.iron / 2 && market.count === false) {
        if ($("#build tbody #btn_market").length <= 0) {
            $("#build tbody").append(el_build_market);
        }
    } else {
        if ($("#build tbody #btn_market")) {
            $("#build tbody #btn_market").closest("tr").remove();
        }
    }
    if (wood >= scoutpost.costs.wood / 2 && stone >= scoutpost.costs.stone / 2 && coal >= scoutpost.costs.coal / 2 && iron >= scoutpost.costs.iron / 2 && scoutpost.count === false) {
        if ($("#build tbody #btn_scoutpost").length <= 0) {
            $("#build tbody").append(el_build_scoutpost);
        }
    } else {
        if ($("#build tbody #btn_scoutpost")) {
            $("#build tbody #btn_scoutpost").closest("tr").remove();
        }
    }
    if (wood >= barracks.costs.wood / 2 && stone >= barracks.costs.stone / 2 && coal >= barracks.costs.coal / 2 && iron >= barracks.costs.iron / 2 && barracks.count === false) {
        if ($("#build tbody #btn_barracks").length <= 0) {
            $("#build tbody").append(el_build_barracks);
        }
    } else {
        if ($("#build tbody #btn_barracks")) {
            $("#build tbody #btn_barracks").closest("tr").remove();
        }
    }
    if (wood >= stable.costs.wood / 2 && stone >= stable.costs.stone / 2 && coal >= stable.costs.coal / 2 && iron >= stable.costs.iron / 2 && stable.count === false) {
        if ($("#build tbody #btn_stable").length <= 0) {
            $("#build tbody").append(el_build_stable);
        }
    } else {
        if ($("#build tbody #btn_stable")) {
            $("#build tbody #btn_stable").closest("tr").remove();
        }
    }
    //endregion

    // Upgrade Buttons Dis-/Enabled
    //region
    if (wood >= hut_up.costs.wood && stone >= hut_up.costs.stone && worker > 0 && slot_build === false) {
        $("#btn_upgrade_hut").prop("disabled", false);
    } else {
        $("#btn_upgrade_hut").prop("disabled", true);
    }
    if (wood >= huntinghut_up.costs.wood && stone >= huntinghut_up.costs.stone && worker > 0 && slot_build === false) {
        $("#btn_upgrade_huntinghut").prop("disabled", false);
    } else {
        $("#btn_upgrade_huntinghut").prop("disabled", true);
    }
    if (wood >= storage_up.costs.wood && stone >= storage_up.costs.stone && worker > 0 && slot_build === false) {
        $("#btn_upgrade_storage").prop("disabled", false);
    } else {
        $("#btn_upgrade_storage").prop("disabled", true);
    }
    if (wood >= lumberjackhut_up.costs.wood && stone >= lumberjackhut_up.costs.stone && worker > 0 && slot_build === false) {
        $("#btn_upgrade_lumberjackhut").prop("disabled", false);
    } else {
        $("#btn_upgrade_lumberjackhut").prop("disabled", true);
    }
    if (wood >= sheepstall_up.costs.wood && stone >= sheepstall_up.costs.stone && worker > 0 && slot_build === false) {
        $("#btn_upgrade_sheepstall").prop("disabled", false);
    } else {
        $("#btn_upgrade_sheepstall").prop("disabled", true);
    }
    if (wood >= quarry_up.costs.wood && stone >= quarry_up.costs.stone && worker > 0 && slot_build === false) {
        $("#btn_upgrade_quarry").prop("disabled", false);
    } else {
        $("#btn_upgrade_quarry").prop("disabled", true);
    }
    if (wood >= coalmine_up.costs.wood && stone >= coalmine_up.costs.stone && worker > 0 && slot_build === false) {
        $("#btn_upgrade_coalmine").prop("disabled", false);
    } else {
        $("#btn_upgrade_coalmine").prop("disabled", true);
    }
    if (wood >= ironmine_up.costs.wood && stone >= ironmine_up.costs.stone && coal >= ironmine_up.costs.coal && worker > 0 && slot_build === false) {
        $("#btn_upgrade_ironmine").prop("disabled", false);
    } else {
        $("#btn_upgrade_ironmine").prop("disabled", true);
    }
    if (wood >= tailorhouse_up.costs.wood && stone >= tailorhouse_up.costs.stone && coal >= tailorhouse_up.costs.coal && worker > 0 && slot_build === false) {
        $("#btn_upgrade_tailorhouse").prop("disabled", false);
    } else {
        $("#btn_upgrade_tailorhouse").prop("disabled", true);
    }
    if (wood >= alchemisthut_up.costs.wood && stone >= alchemisthut_up.costs.stone && coal >= alchemisthut_up.costs.coal && iron >= alchemisthut_up.costs.iron && worker > 0 && slot_build === false) {
        $("#btn_upgrade_alchemisthut").prop("disabled", false);
    } else {
        $("#btn_upgrade_alchemisthut").prop("disabled", true);
    }
    if (wood >= forge_up.costs.wood && stone >= forge_up.costs.stone && coal >= forge_up.costs.coal && iron >= forge_up.costs.iron && worker > 0 && slot_build === false) {
        $("#btn_upgrade_forge").prop("disabled", false);
    } else {
        $("#btn_upgrade_forge").prop("disabled", true);
    }
    if (wood >= market_up.costs.wood && stone >= market_up.costs.stone && coal >= market_up.costs.coal && iron >= market_up.costs.iron && worker > 0 && slot_build === false) {
        $("#btn_upgrade_market").prop("disabled", false);
    } else {
        $("#btn_upgrade_market").prop("disabled", true);
    }
    if (wood >= scoutpost_up.costs.wood && stone >= scoutpost_up.costs.stone && coal >= scoutpost_up.costs.coal && iron >= scoutpost_up.costs.iron && worker > 0 && slot_build === false) {
        $("#btn_upgrade_scoutpost").prop("disabled", false);
    } else {
        $("#btn_upgrade_scoutpost").prop("disabled", true);
    }
    if (wood >= barracks_up.costs.wood && stone >= barracks_up.costs.stone && coal >= barracks_up.costs.coal && iron >= barracks_up.costs.iron && worker > 0 && slot_build === false) {
        $("#btn_upgrade_barracks").prop("disabled", false);
    } else {
        $("#btn_upgrade_barracks").prop("disabled", true);
    }
    if (wood >= stable_up.costs.wood && stone >= stable_up.costs.stone && coal >= stable_up.costs.coal && iron >= stable_up.costs.iron && worker > 0 && slot_build === false) {
        $("#btn_upgrade_stable").prop("disabled", false);
    } else {
        $("#btn_upgrade_stable").prop("disabled", true);
    }
    //endregion

    // Upgrade Buttons Show/Hide
    //region
    if (wood >= hut_up.costs.wood / 2 && stone >= hut_up.costs.stone / 2 && hut.count > 0) {
        if ($("#upgrade tbody #btn_upgrade_hut").length <= 0) {
            $("#upgrade tbody").append(el_upgrade_hut);
        }
    } else {
        if ($("#upgrade tbody #btn_upgrade_hut")) {
            $("#upgrade tbody #btn_upgrade_hut").closest("tr").remove();
        }
    }
    if (wood >= 150 && stone >= 30 && huntinghut.count === true && huntinghut_up.count === false) {
        if ($("#upgrade tbody #btn_upgrade_huntinghut").length <= 0) {
            $("#upgrade tbody").append(el_upgrade_huntinghut);
        }
    } else {
        if ($("#upgrade tbody #btn_upgrade_huntinghut")) {
            $("#upgrade tbody #btn_upgrade_huntinghut").closest("tr").remove();
        }
    }
    if (wood >= 150 && stone >= 150 && storage.count === true && storage_up.count < 9) {
        if ($("#upgrade tbody #btn_upgrade_storage").length <= 0) {
            $("#upgrade tbody").append(el_upgrade_storage);
        }
    } else {
        if ($("#upgrade tbody #btn_upgrade_storage")) {
            $("#upgrade tbody #btn_upgrade_storage").closest("tr").remove();
        }
    }
    if (wood >= 200 && stone >= 50 && lumberjackhut.count === true && lumberjackhut_up.count === false) {
        if ($("#upgrade tbody #btn_upgrade_lumberjackhut").length <= 0) {
            $("#upgrade tbody").append(el_upgrade_lumberjackhut);
        }
    } else {
        if ($("#upgrade tbody #btn_upgrade_lumberjackhut")) {
            $("#upgrade tbody #btn_upgrade_lumberjackhut").closest("tr").remove();
        }
    }
    if (wood >= 250 && stone >= 75 && sheepstall.count === true && sheepstall_up.count === false) {
        if ($("#upgrade tbody #btn_upgrade_sheepstall").length <= 0) {
            $("#upgrade tbody").append(el_upgrade_sheepstall);
        }
    } else {
        if ($("#upgrade tbody #btn_upgrade_sheepstall")) {
            $("#upgrade tbody #btn_upgrade_sheepstall").closest("tr").remove();
        }
    }
    if (wood >= 300 && stone >= 100 && quarry.count === true && quarry_up.count === false) {
        if ($("#upgrade tbody #btn_upgrade_quarry").length <= 0) {
            $("#upgrade tbody").append(el_upgrade_quarry);
        }
    } else {
        if ($("#upgrade tbody #btn_upgrade_quarry")) {
            $("#upgrade tbody #btn_upgrade_quarry").closest("tr").remove();
        }
    }
    if (wood >= 300 && stone >= 150 && coalmine.count === true && coalmine_up.count === false) {
        if ($("#upgrade tbody #btn_upgrade_coalmine").length <= 0) {
            $("#upgrade tbody").append(el_upgrade_coalmine);
        }
    } else {
        if ($("#upgrade tbody #btn_upgrade_coalmine")) {
            $("#upgrade tbody #btn_upgrade_coalmine").closest("tr").remove();
        }
    }
    if (wood >= 400 && stone >= 200 && coal >= 50 && ironmine.count === true && ironmine_up.count === false) {
        if ($("#upgrade tbody #btn_upgrade_ironmine").length <= 0) {
            $("#upgrade tbody").append(el_upgrade_ironmine);
        }
    } else {
        if ($("#upgrade tbody #btn_upgrade_ironmine")) {
            $("#upgrade tbody #btn_upgrade_ironmine").closest("tr").remove();
        }
    }
    if (wood >= 500 && stone >= 400 && coal >= 200 && tailorhouse.count === true && tailorhouse_up.count === false) {
        if ($("#upgrade tbody #btn_upgrade_tailorhouse").length <= 0) {
            $("#upgrade tbody").append(el_upgrade_tailorhouse);
        }
    } else {
        if ($("#upgrade tbody #btn_upgrade_tailorhouse")) {
            $("#upgrade tbody #btn_upgrade_tailorhouse").closest("tr").remove();
        }
    }
    if (wood >= 550 && stone >= 450 && coal >= 250 && iron >= 50 && alchemisthut.count === true && alchemisthut_up.count === false) {
        if ($("#upgrade tbody #btn_upgrade_alchemisthut").length <= 0) {
            $("#upgrade tbody").append(el_upgrade_alchemisthut);
        }
    } else {
        if ($("#upgrade tbody #btn_upgrade_alchemisthut")) {
            $("#upgrade tbody #btn_upgrade_alchemisthut").closest("tr").remove();
        }
    }
    if (wood >= 600 && stone >= 450 && coal >= 250 && iron >= 50 && forge.count === true && forge_up.count === false) {
        if ($("#upgrade tbody #btn_upgrade_forge").length <= 0) {
            $("#upgrade tbody").append(el_upgrade_forge);
        }
    } else {
        if ($("#upgrade tbody #btn_upgrade_forge")) {
            $("#upgrade tbody #btn_upgrade_forge").closest("tr").remove();
        }
    }
    if (wood >= 750 && stone >= 500 && coal >= 300 && iron >= 100 && market.count === true && market_up.count === false) {
        if ($("#upgrade tbody #btn_upgrade_market").length <= 0) {
            $("#upgrade tbody").append(el_upgrade_market);
        }
    } else {
        if ($("#upgrade tbody #btn_upgrade_market")) {
            $("#upgrade tbody #btn_upgrade_market").closest("tr").remove();
        }
    }
    if (wood >= 1000 && stone >= 750 && coal >= 400 && iron >= 250 && scoutpost.count === true && scoutpost_up.count === false) {
        if ($("#upgrade tbody #btn_upgrade_scoutpost").length <= 0) {
            $("#upgrade tbody").append(el_upgrade_scoutpost);
        }
    } else {
        if ($("#upgrade tbody #btn_upgrade_scoutpost")) {
            $("#upgrade tbody #btn_upgrade_scoutpost").closest("tr").remove();
        }
    }
    if (wood >= 1500 && stone >= 1200 && coal >= 1000 && iron >= 800 && barracks.count === true && barracks_up.count === false) {
        if ($("#upgrade tbody #btn_upgrade_barracks").length <= 0) {
            $("#upgrade tbody").append(el_upgrade_barracks);
        }
    } else {
        if ($("#upgrade tbody #btn_upgrade_barracks")) {
            $("#upgrade tbody #btn_upgrade_barracks").closest("tr").remove();
        }
    }
    if (wood >= 2500 && stone >= 2000 && coal >= 1500 && iron >= 1200 && stable.count === true && stable_up.count === false) {
        if ($("#upgrade tbody #btn_upgrade_stable").length <= 0) {
            $("#upgrade tbody").append(el_upgrade_stable);
        }
    } else {
        if ($("#upgrade tbody #btn_upgrade_stable")) {
            $("#upgrade tbody #btn_upgrade_stable").closest("tr").remove();
        }
    }
    //endregion

    //Current Time to brew
    //region
    if (alchemist > 1) {
        prod_medicine.curr_time = prod_medicine.time / alchemist * prod_medicine.count / brew_time;
        prod_poison.curr_time = prod_poison.time / alchemist * prod_poison.count / brew_time;
    } else {
        prod_medicine.curr_time = prod_medicine.time * prod_medicine.count / brew_time;
        prod_poison.curr_time = prod_poison.time * prod_poison.count / brew_time;
    }
    //endregion

    //Current Time to craft
    //region
    if (smith > 1) {
        prod_leatherarmor.curr_time = prod_leatherarmor.time / smith * prod_leatherarmor.count / craft_time;
        prod_ironarmor.curr_time = prod_ironarmor.time / smith * prod_ironarmor.count / craft_time;
        prod_axe.curr_time = prod_axe.time / smith * prod_axe.count / craft_time;
        prod_sword.curr_time = prod_sword.time / smith * prod_sword.count / craft_time;
        prod_morningstar.curr_time = prod_morningstar.time / smith * prod_morningstar.count / craft_time;
        prod_shortbow.curr_time = prod_shortbow.time / smith * prod_shortbow.count / craft_time;
        prod_longbow.curr_time = prod_longbow.time / smith * prod_longbow.count / craft_time;
        prod_crossbow.curr_time = prod_crossbow.time / smith * prod_crossbow.count / craft_time;
        prod_tradegift.curr_time = prod_tradegift.time / smith * prod_tradegift.count / craft_time;
        prod_peacegift.curr_time = prod_peacegift.time / smith * prod_peacegift.count / craft_time;
        prod_poisongift.curr_time = prod_poisongift.time / smith * prod_poisongift.count / craft_time;
    } else {
        prod_leatherarmor.curr_time = prod_leatherarmor.time * prod_leatherarmor.count / craft_time;
        prod_ironarmor.curr_time = prod_ironarmor.time * prod_ironarmor.count / craft_time;
        prod_axe.curr_time = prod_axe.time * prod_axe.count / craft_time;
        prod_sword.curr_time = prod_sword.time * prod_sword.count / craft_time;
        prod_morningstar.curr_time = prod_morningstar.time * prod_morningstar.count / craft_time;
        prod_shortbow.curr_time = prod_shortbow.time * prod_shortbow.count / craft_time;
        prod_longbow.curr_time = prod_longbow.time * prod_longbow.count / craft_time;
        prod_crossbow.curr_time = prod_crossbow.time * prod_crossbow.count / craft_time;
        prod_tradegift.curr_time = prod_tradegift.time * prod_tradegift.count / craft_time;
        prod_peacegift.curr_time = prod_peacegift.time * prod_peacegift.count / craft_time;
        prod_poisongift.curr_time = prod_poisongift.time * prod_poisongift.count / craft_time;
    }
    //endregion

    //Display Brew/Craft Time
    //region
    $("#time_medicine").text(secondsTommss(prod_medicine.curr_time));
    $("#time_poison").text(secondsTommss(prod_poison.curr_time));
    $("#time_leatherarmor").text(secondsTommss(prod_leatherarmor.curr_time));
    $("#time_ironarmor").text(secondsTommss(prod_ironarmor.curr_time));
    $("#time_axe").text(secondsTommss(prod_axe.curr_time));
    $("#time_sword").text(secondsTommss(prod_sword.curr_time));
    $("#time_morningstar").text(secondsTommss(prod_morningstar.curr_time));
    $("#time_shortbow").text(secondsTommss(prod_shortbow.curr_time));
    $("#time_longbow").text(secondsTommss(prod_longbow.curr_time));
    $("#time_crossbow").text(secondsTommss(prod_crossbow.curr_time));
    $("#time_tradegift").text(secondsTommss(prod_tradegift.curr_time));
    $("#time_peacegift").text(secondsTommss(prod_peacegift.curr_time));
    $("#time_poisongift").text(secondsTommss(prod_poisongift.curr_time));
    //endregion

    // Brew/Craft Buttons Dis-/Enabled
    //region
    if (food >= prod_medicine.costs.food * prod_medicine.count && stone >= prod_medicine.costs.stone * prod_medicine.count && cloth >= prod_medicine.costs.cloth * prod_medicine.count && alchemist > 0 && prod_medicine.count > 0 && slot_brew === false) {
        $("#btn_medicine").prop("disabled", false);
    } else {
        $("#btn_medicine").prop("disabled", true);
    }
    if (food >= prod_poison.costs.food * prod_poison.count && stone >= prod_poison.costs.stone * prod_poison.count && cloth >= prod_poison.costs.cloth * prod_poison.count && coal >= prod_poison.costs.coal * prod_poison.count && iron >= prod_poison.costs.iron * prod_poison.count && alchemist > 0 && prod_poison.count > 0 && slot_brew === false) {
        $("#btn_poison").prop("disabled", false);
    } else {
        $("#btn_poison").prop("disabled", true);
    }
    if (leather >= prod_leatherarmor.costs.leather * prod_leatherarmor.count && smith > 0 && prod_leatherarmor.count > 0 && slot_craft === false) {
        $("#btn_leatherarmor").prop("disabled", false);
    } else {
        $("#btn_leatherarmor").prop("disabled", true);
    }
    if (iron >= prod_ironarmor.costs.iron * prod_ironarmor.count && smith > 0 && prod_ironarmor.count > 0 && slot_craft === false) {
        $("#btn_ironarmor").prop("disabled", false);
    } else {
        $("#btn_ironarmor").prop("disabled", true);
    }
    if (wood >= prod_axe.costs.wood * prod_axe.count && iron >= prod_axe.costs.iron * prod_axe.count && smith > 0 && prod_axe.count > 0 && slot_craft === false) {
        $("#btn_axe").prop("disabled", false);
    } else {
        $("#btn_axe").prop("disabled", true);
    }
    if (wood >= prod_sword.costs.wood * prod_sword.count && iron >= prod_sword.costs.iron * prod_sword.count && smith > 0 && prod_sword.count > 0 && slot_craft === false) {
        $("#btn_sword").prop("disabled", false);
    } else {
        $("#btn_sword").prop("disabled", true);
    }
    if (wood >= prod_morningstar.costs.wood * prod_morningstar.count && iron >= prod_morningstar.costs.iron * prod_morningstar.count && smith > 0 && prod_morningstar.count > 0 && slot_craft === false) {
        $("#btn_morningstar").prop("disabled", false);
    } else {
        $("#btn_morningstar").prop("disabled", true);
    }
    if (wood >= prod_shortbow.costs.wood * prod_shortbow.count && iron >= prod_shortbow.costs.iron * prod_shortbow.count && smith > 0 && prod_shortbow.count > 0 && slot_craft === false) {
        $("#btn_shortbow").prop("disabled", false);
    } else {
        $("#btn_shortbow").prop("disabled", true);
    }
    if (wood >= prod_longbow.costs.wood * prod_longbow.count && iron >= prod_longbow.costs.iron * prod_longbow.count && smith > 0 && prod_longbow.count > 0 && slot_craft === false) {
        $("#btn_longbow").prop("disabled", false);
    } else {
        $("#btn_longbow").prop("disabled", true);
    }
    if (wood >= prod_crossbow.costs.wood * prod_crossbow.count && iron >= prod_crossbow.costs.iron * prod_crossbow.count && smith > 0 && prod_crossbow.count > 0 && slot_craft === false) {
        $("#btn_crossbow").prop("disabled", false);
    } else {
        $("#btn_crossbow").prop("disabled", true);
    }
    if (food >= prod_tradegift.costs.food * prod_tradegift.count && wood >= prod_tradegift.costs.wood * prod_tradegift.count && leather >= prod_tradegift.costs.leather * prod_tradegift.count && cloth >= prod_tradegift.costs.cloth * prod_tradegift.count && iron >= prod_tradegift.costs.iron * prod_tradegift.count && clothes >= prod_tradegift.costs.clothes * prod_tradegift.count && smith > 0 && prod_tradegift.count > 0 && slot_craft === false) {
        $("#btn_tradegift").prop("disabled", false);
    } else {
        $("#btn_tradegift").prop("disabled", true);
    }
    if (food >= prod_peacegift.costs.food * prod_peacegift.count && wood >= prod_peacegift.costs.wood * prod_peacegift.count && leather >= prod_peacegift.costs.leather * prod_peacegift.count && cloth >= prod_peacegift.costs.cloth * prod_peacegift.count && iron >= prod_peacegift.costs.iron * prod_peacegift.count && clothes >= prod_peacegift.costs.clothes * prod_peacegift.count && smith > 0 && prod_peacegift.count > 0 && slot_craft === false) {
        $("#btn_peacegift").prop("disabled", false);
    } else {
        $("#btn_peacegift").prop("disabled", true);
    }
    if (food >= prod_poisongift.costs.food * prod_poisongift.count && wood >= prod_poisongift.costs.wood * prod_poisongift.count && leather >= prod_poisongift.costs.leather * prod_poisongift.count && cloth >= prod_poisongift.costs.cloth * prod_poisongift.count && iron >= prod_poisongift.costs.iron * prod_poisongift.count && clothes >= prod_poisongift.costs.clothes * prod_poisongift.count && poison >= prod_poisongift.costs.poison * prod_poisongift.count && smith > 0 && prod_poisongift.count > 0 && slot_craft === false) {
        $("#btn_poisongift").prop("disabled", false);
    } else {
        $("#btn_poisongift").prop("disabled", true);
    }
    //endregion

    // Brew/Craft Buttons Show/Hide
    //region
    if (food >= prod_medicine.costs.food / 2 && stone >= prod_medicine.costs.stone / 2 && cloth >= prod_medicine.costs.cloth / 2) {
        if ($("#craft #row_medicine").length <= 0) {
            $("#craft #content_brew").append(el_craft_medicine);
        }
    } else {
        if ($("#craft #row_medicine")) {
            $("#craft #row_medicine").remove();
        }
    }
    if (food >= prod_poison.costs.food / 2 && stone >= prod_poison.costs.stone / 2 && cloth >= prod_poison.costs.cloth / 2 && coal >= prod_poison.costs.coal / 2 && iron >= prod_poison.costs.iron / 2) {
        if ($("#craft #row_poison").length <= 0) {
            $("#craft #content_brew").append(el_craft_poison);
        }
    } else {
        if ($("#craft #row_poison")) {
            $("#craft #row_poison").remove();
        }
    }
    if (leather >= prod_leatherarmor.costs.leather / 2) {
        if ($("#craft #row_leatherarmor").length <= 0) {
            $("#craft #content_armor").append(el_craft_leatherarmor);
        }
    } else {
        if ($("#craft #row_leatherarmor")) {
            $("#craft #row_leatherarmor").remove();
        }
    }
    if (iron >= prod_ironarmor.costs.iron / 2) {
        if ($("#craft #row_ironarmor").length <= 0) {
            $("#craft #content_armor").append(el_craft_ironarmor);
        }
    } else {
        if ($("#craft #row_ironarmor")) {
            $("#craft #row_ironarmor").remove();
        }
    }
    if (wood >= prod_axe.costs.wood / 2 && iron >= prod_axe.costs.iron / 2) {
        if ($("#craft #row_axe").length <= 0) {
            $("#craft #content_melee").append(el_craft_axe);
        }
    } else {
        if ($("#craft #row_axe")) {
            $("#craft #row_axe").remove();
        }
    }
    if (wood >= prod_sword.costs.wood / 2 && iron >= prod_sword.costs.iron / 2) {
        if ($("#craft #row_sword").length <= 0) {
            $("#craft #content_melee").append(el_craft_sword);
        }
    } else {
        if ($("#craft #row_sword")) {
            $("#craft #row_sword").remove();
        }
    }
    if (wood >= prod_morningstar.costs.wood / 2 && iron >= prod_morningstar.costs.iron / 2) {
        if ($("#craft #row_morningstar").length <= 0) {
            $("#craft #content_melee").append(el_craft_morningstar);
        }
    } else {
        if ($("#craft #row_morningstar")) {
            $("#craft #row_morningstar").remove();
        }
    }
    if (wood >= prod_shortbow.costs.wood / 2 && iron >= prod_shortbow.costs.iron / 2) {
        if ($("#craft #row_shortbow").length <= 0) {
            $("#craft #content_ranged").append(el_craft_shortbow);
        }
    } else {
        if ($("#craft #row_shortbow")) {
            $("#craft #row_shortbow").remove();
        }
    }
    if (wood >= prod_longbow.costs.wood / 2 && iron >= prod_longbow.costs.iron / 2) {
        if ($("#craft #row_longbow").length <= 0) {
            $("#craft #content_ranged").append(el_craft_longbow);
        }
    } else {
        if ($("#craft #row_longbow")) {
            $("#craft #row_longbow").remove();
        }
    }
    if (wood >= prod_crossbow.costs.wood / 2 && iron >= prod_crossbow.costs.iron / 2) {
        if ($("#craft #row_crossbow").length <= 0) {
            $("#craft #content_ranged").append(el_craft_crossbow);
        }
    } else {
        if ($("#craft #row_crossbow")) {
            $("#craft #row_crossbow").remove();
        }
    }
    if (food >= prod_tradegift.costs.food / 2 && wood >= prod_tradegift.costs.wood / 2 && leather >= prod_tradegift.costs.leather / 2 && cloth >= prod_tradegift.costs.cloth / 2 && iron >= prod_tradegift.costs.iron / 2 && clothes >= prod_tradegift.costs.clothes / 2) {
        if ($("#craft #row_tradegift").length <= 0) {
            $("#craft #content_gifts").append(el_craft_tradegift);
        }
    } else {
        if ($("#craft #row_tradegift")) {
            $("#craft #row_tradegift").remove();
        }
    }
    if (food >= prod_peacegift.costs.food / 2 && wood >= prod_peacegift.costs.wood / 2 && leather >= prod_peacegift.costs.leather / 2 && cloth >= prod_peacegift.costs.cloth / 2 && iron >= prod_peacegift.costs.iron / 2 && clothes >= prod_peacegift.costs.clothes / 2) {
        if ($("#craft #row_peacegift").length <= 0) {
            $("#craft #content_gifts").append(el_craft_peacegift);
        }
    } else {
        if ($("#craft #row_peacegift")) {
            $("#craft #row_peacegift").remove();
        }
    }
    if (food >= prod_poisongift.costs.food / 2 && wood >= prod_poisongift.costs.wood / 2 && leather >= prod_poisongift.costs.leather / 2 && cloth >= prod_poisongift.costs.cloth / 2 && iron >= prod_poisongift.costs.iron / 2 && clothes >= prod_poisongift.costs.clothes / 2 && poison >= prod_poisongift.costs.poison / 2) {
        if ($("#craft #row_poisongift").length <= 0) {
            $("#craft #content_gifts").append(el_craft_poisongift);
        }
    } else {
        if ($("#craft #row_poisongift")) {
            $("#craft #row_poisongift").remove();
        }
    }
    //endregion
    
    //Current Trade Price
    //region
    $("#btn_buy_food").html(a_market.food.buy_price);
    $("#btn_sell_food").html(a_market.food.sell_price);
    
    $("#btn_buy_wood").html(a_market.wood.buy_price);
    $("#btn_sell_wood").html(a_market.wood.sell_price);
    
    $("#btn_buy_stone").html(a_market.stone.buy_price);
    $("#btn_sell_stone").html(a_market.stone.sell_price);
    
    $("#btn_buy_leather").html(a_market.leather.buy_price);
    $("#btn_sell_leather").html(a_market.leather.sell_price);
    
    $("#btn_buy_cloth").html(a_market.cloth.buy_price);
    $("#btn_sell_cloth").html(a_market.cloth.sell_price);
    
    $("#btn_buy_coal").html(a_market.coal.buy_price);
    $("#btn_sell_coal").html(a_market.coal.sell_price);
    
    $("#btn_buy_iron").html(a_market.iron.buy_price);
    $("#btn_sell_iron").html(a_market.iron.sell_price);
    
    $("#btn_buy_clothes").html(a_market.clothes.buy_price);
    $("#btn_sell_clothes").html(a_market.clothes.sell_price);
    
    $("#btn_buy_medicine").html(a_market.medicine.buy_price);
    $("#btn_sell_medicine").html(a_market.medicine.sell_price);
    
    $("#btn_buy_poison").html(a_market.poison.buy_price);
    $("#btn_sell_poison").html(a_market.poison.sell_price);
    
    $("#btn_buy_leatherarmor").html(a_market.leatherarmor.buy_price);
    $("#btn_sell_leatherarmor").html(a_market.leatherarmor.sell_price);
    
    $("#btn_buy_ironarmor").html(a_market.ironarmor.buy_price);
    $("#btn_sell_ironarmor").html(a_market.ironarmor.sell_price);
    
    $("#btn_buy_axe").html(a_market.axe.buy_price);
    $("#btn_sell_axe").html(a_market.axe.sell_price);
    
    $("#btn_buy_sword").html(a_market.sword.buy_price);
    $("#btn_sell_sword").html(a_market.sword.sell_price);
    
    $("#btn_buy_morningstar").html(a_market.morningstar.buy_price);
    $("#btn_sell_morningstar").html(a_market.morningstar.sell_price);
    
    $("#btn_buy_shortbow").html(a_market.shortbow.buy_price);
    $("#btn_sell_shortbow").html(a_market.shortbow.sell_price);
    
    $("#btn_buy_longbow").html(a_market.longbow.buy_price);
    $("#btn_sell_longbow").html(a_market.longbow.sell_price);
    
    $("#btn_buy_crossbow").html(a_market.crossbow.buy_price);
    $("#btn_sell_crossbow").html(a_market.crossbow.sell_price);
    
    $("#btn_buy_tradegift").html(a_market.tradegift.buy_price);
    $("#btn_sell_tradegift").html(a_market.tradegift.sell_price);
    
    $("#btn_buy_peacegift").html(a_market.peacegift.buy_price);
    $("#btn_sell_peacegift").html(a_market.peacegift.sell_price);
    
    $("#btn_buy_poisongift").html(a_market.poisongift.buy_price);
    $("#btn_sell_poisongift").html(a_market.poisongift.sell_price);
    //endregion
    
    // Trade Button Dis-/Enabled
    //region
    if (food + a_market.food.number <= supplies_max && iecoin >= a_market.food.buy_price) {
        $("#btn_buy_food").prop("disabled", false);
    } else {
        $("#btn_buy_food").prop("disabled", true);
    }
    if (food >= a_market.food.number && iecoin + a_market.food.sell_price <= supplies_max) {
        $("#btn_sell_food").prop("disabled", false);
    } else {
        $("#btn_sell_food").prop("disabled", true);
    }
    
    if (wood + a_market.wood.number <= supplies_max && iecoin >= a_market.wood.buy_price) {
        $("#btn_buy_wood").prop("disabled", false);
    } else {
        $("#btn_buy_wood").prop("disabled", true);
    }
    if (wood >= a_market.wood.number && iecoin + a_market.wood.sell_price <= supplies_max) {
        $("#btn_sell_wood").prop("disabled", false);
    } else {
        $("#btn_sell_wood").prop("disabled", true);
    }
    
    if (stone + a_market.stone.number <= supplies_max && iecoin >= a_market.stone.buy_price) {
        $("#btn_buy_stone").prop("disabled", false);
    } else {
        $("#btn_buy_stone").prop("disabled", true);
    }
    if (stone >= a_market.stone.number && iecoin + a_market.stone.sell_price <= supplies_max) {
        $("#btn_sell_stone").prop("disabled", false);
    } else {
        $("#btn_sell_stone").prop("disabled", true);
    }
    
    if (leather + a_market.leather.number <= supplies_max && iecoin >= a_market.leather.buy_price) {
        $("#btn_buy_leather").prop("disabled", false);
    } else {
        $("#btn_buy_leather").prop("disabled", true);
    }
    if (leather >= a_market.leather.number && iecoin + a_market.leather.sell_price <= supplies_max) {
        $("#btn_sell_leather").prop("disabled", false);
    } else {
        $("#btn_sell_leather").prop("disabled", true);
    }
    
    if (cloth + a_market.cloth.number <= supplies_max && iecoin >= a_market.cloth.buy_price) {
        $("#btn_buy_cloth").prop("disabled", false);
    } else {
        $("#btn_buy_cloth").prop("disabled", true);
    }
    if (cloth >= a_market.cloth.number && iecoin + a_market.cloth.sell_price <= supplies_max) {
        $("#btn_sell_cloth").prop("disabled", false);
    } else {
        $("#btn_sell_cloth").prop("disabled", true);
    }
    
    if (coal + a_market.coal.number <= supplies_max && iecoin >= a_market.coal.buy_price) {
        $("#btn_buy_coal").prop("disabled", false);
    } else {
        $("#btn_buy_coal").prop("disabled", true);
    }
    if (coal >= a_market.coal.number && iecoin + a_market.coal.sell_price <= supplies_max) {
        $("#btn_sell_coal").prop("disabled", false);
    } else {
        $("#btn_sell_coal").prop("disabled", true);
    }
    
    if (iron + a_market.iron.number <= supplies_max && iecoin >= a_market.iron.buy_price) {
        $("#btn_buy_iron").prop("disabled", false);
    } else {
        $("#btn_buy_iron").prop("disabled", true);
    }
    if (iron >= a_market.iron.number && iecoin + a_market.iron.sell_price <= supplies_max) {
        $("#btn_sell_iron").prop("disabled", false);
    } else {
        $("#btn_sell_iron").prop("disabled", true);
    }
    
    if (clothes + a_market.clothes.number <= supplies_max && iecoin >= a_market.clothes.buy_price) {
        $("#btn_buy_clothes").prop("disabled", false);
    } else {
        $("#btn_buy_clothes").prop("disabled", true);
    }
    if (clothes >= a_market.clothes.number && iecoin + a_market.clothes.sell_price <= supplies_max) {
        $("#btn_sell_clothes").prop("disabled", false);
    } else {
        $("#btn_sell_clothes").prop("disabled", true);
    }
    
    if (medicine + a_market.medicine.number <= supplies_max && iecoin >= a_market.medicine.buy_price) {
        $("#btn_buy_medicine").prop("disabled", false);
    } else {
        $("#btn_buy_medicine").prop("disabled", true);
    }
    if (medicine >= a_market.medicine.number && iecoin + a_market.medicine.sell_price <= supplies_max) {
        $("#btn_sell_medicine").prop("disabled", false);
    } else {
        $("#btn_sell_medicine").prop("disabled", true);
    }
    
    if (poison + a_market.poison.number <= supplies_max && iecoin >= a_market.poison.buy_price) {
        $("#btn_buy_poison").prop("disabled", false);
    } else {
        $("#btn_buy_poison").prop("disabled", true);
    }
    if (poison >= a_market.poison.number && iecoin + a_market.poison.sell_price <= supplies_max) {
        $("#btn_sell_poison").prop("disabled", false);
    } else {
        $("#btn_sell_poison").prop("disabled", true);
    }
    
    if (leatherarmor + a_market.leatherarmor.number <= supplies_max && iecoin >= a_market.leatherarmor.buy_price) {
        $("#btn_buy_leatherarmor").prop("disabled", false);
    } else {
        $("#btn_buy_leatherarmor").prop("disabled", true);
    }
    if (leatherarmor >= a_market.leatherarmor.number && iecoin + a_market.leatherarmor.sell_price <= supplies_max) {
        $("#btn_sell_leatherarmor").prop("disabled", false);
    } else {
        $("#btn_sell_leatherarmor").prop("disabled", true);
    }
    
    if (ironarmor + a_market.ironarmor.number <= supplies_max && iecoin >= a_market.ironarmor.buy_price) {
        $("#btn_buy_ironarmor").prop("disabled", false);
    } else {
        $("#btn_buy_ironarmor").prop("disabled", true);
    }
    if (ironarmor >= a_market.ironarmor.number && iecoin + a_market.ironarmor.sell_price <= supplies_max) {
        $("#btn_sell_ironarmor").prop("disabled", false);
    } else {
        $("#btn_sell_ironarmor").prop("disabled", true);
    }
    
    if (axe + a_market.axe.number <= supplies_max && iecoin >= a_market.axe.buy_price) {
        $("#btn_buy_axe").prop("disabled", false);
    } else {
        $("#btn_buy_axe").prop("disabled", true);
    }
    if (axe >= a_market.axe.number && iecoin + a_market.axe.sell_price <= supplies_max) {
        $("#btn_sell_axe").prop("disabled", false);
    } else {
        $("#btn_sell_axe").prop("disabled", true);
    }
    
    if (sword + a_market.sword.number <= supplies_max && iecoin >= a_market.sword.buy_price) {
        $("#btn_buy_sword").prop("disabled", false);
    } else {
        $("#btn_buy_sword").prop("disabled", true);
    }
    if (sword >= a_market.sword.number && iecoin + a_market.sword.sell_price <= supplies_max) {
        $("#btn_sell_sword").prop("disabled", false);
    } else {
        $("#btn_sell_sword").prop("disabled", true);
    }
    
    if (morningstar + a_market.morningstar.number <= supplies_max && iecoin >= a_market.morningstar.buy_price) {
        $("#btn_buy_morningstar").prop("disabled", false);
    } else {
        $("#btn_buy_morningstar").prop("disabled", true);
    }
    if (morningstar >= a_market.morningstar.number && iecoin + a_market.morningstar.sell_price <= supplies_max) {
        $("#btn_sell_morningstar").prop("disabled", false);
    } else {
        $("#btn_sell_morningstar").prop("disabled", true);
    }
    
    if (shortbow + a_market.shortbow.number <= supplies_max && iecoin >= a_market.shortbow.buy_price) {
        $("#btn_buy_shortbow").prop("disabled", false);
    } else {
        $("#btn_buy_shortbow").prop("disabled", true);
    }
    if (shortbow >= a_market.shortbow.number && iecoin + a_market.shortbow.sell_price <= supplies_max) {
        $("#btn_sell_shortbow").prop("disabled", false);
    } else {
        $("#btn_sell_shortbow").prop("disabled", true);
    }
    
    if (longbow + a_market.longbow.number <= supplies_max && iecoin >= a_market.longbow.buy_price) {
        $("#btn_buy_longbow").prop("disabled", false);
    } else {
        $("#btn_buy_longbow").prop("disabled", true);
    }
    if (longbow >= a_market.longbow.number && iecoin + a_market.longbow.sell_price <= supplies_max) {
        $("#btn_sell_longbow").prop("disabled", false);
    } else {
        $("#btn_sell_longbow").prop("disabled", true);
    }
    
    if (crossbow + a_market.crossbow.number <= supplies_max && iecoin >= a_market.crossbow.buy_price) {
        $("#btn_buy_crossbow").prop("disabled", false);
    } else {
        $("#btn_buy_crossbow").prop("disabled", true);
    }
    if (crossbow >= a_market.crossbow.number && iecoin + a_market.crossbow.sell_price <= supplies_max) {
        $("#btn_sell_crossbow").prop("disabled", false);
    } else {
        $("#btn_sell_crossbow").prop("disabled", true);
    }
    
    if (tradegift + a_market.tradegift.number <= supplies_max && iecoin >= a_market.tradegift.buy_price) {
        $("#btn_buy_tradegift").prop("disabled", false);
    } else {
        $("#btn_buy_tradegift").prop("disabled", true);
    }
    if (tradegift >= a_market.tradegift.number && iecoin + a_market.tradegift.sell_price <= supplies_max) {
        $("#btn_sell_tradegift").prop("disabled", false);
    } else {
        $("#btn_sell_tradegift").prop("disabled", true);
    }
    
    if (peacegift + a_market.peacegift.number <= supplies_max && iecoin >= a_market.peacegift.buy_price) {
        $("#btn_buy_peacegift").prop("disabled", false);
    } else {
        $("#btn_buy_peacegift").prop("disabled", true);
    }
    if (peacegift >= a_market.peacegift.number && iecoin + a_market.peacegift.sell_price <= supplies_max) {
        $("#btn_sell_peacegift").prop("disabled", false);
    } else {
        $("#btn_sell_peacegift").prop("disabled", true);
    }
    
    if (poisongift + a_market.poisongift.number <= supplies_max && iecoin >= a_market.poisongift.buy_price) {
        $("#btn_buy_poisongift").prop("disabled", false);
    } else {
        $("#btn_buy_poisongift").prop("disabled", true);
    }
    if (poisongift >= a_market.poisongift.number && iecoin + a_market.poisongift.sell_price <= supplies_max) {
        $("#btn_sell_poisongift").prop("disabled", false);
    } else {
        $("#btn_sell_poisongift").prop("disabled", true);
    }
    //endregion
}

/* Show Related Stuff of Buildings */
function show_related() {
    if (huntinghut.count === true) {
        $("#leather").closest("#row").show();
        $("#hunter").closest("#row").show();
    }
    if (sheepstall.count === true) {
        $("#cloth").closest("#row").show();
        $("#shepherd").closest("#row").show();
    }
    if (coalmine.count === true) {
        $("#coal").closest("#row").show();
        $("#coalminer").closest("#row").show();
    }
    if (ironmine.count === true) {
        $("#iron").closest("#row").show();
        $("#ironminer").closest("#row").show();
    }
    if (tailorhouse.count === true) {
        $("#clothes").closest("#row").show();
        $("#tailor").closest("#row").show();
    }
    if (alchemisthut.count === true) {
        $("#btn_craft").show();
        $("#coll_brew").show();
        $("#items").show();
        $("#medicine").closest("#row").show();
        $("#poison").closest("#row").show();
        $("#alchemist").closest("#row").show();
    }
    if (forge.count === true) {
        $("#btn_craft").show();
        $("#coll_armor").show();
        $("#coll_weapons").show();
        $("#coll_gifts").show();
        $("#items").show();
        $("#leatherarmor").closest("#row").show();
        $("#ironarmor").closest("#row").show();
        $("#sword").closest("#row").show();
        $("#axe").closest("#row").show();
        $("#morningstar").closest("#row").show();
        $("#shortbow").closest("#row").show();
        $("#longbow").closest("#row").show();
        $("#crossbow").closest("#row").show();
        $("#tradegift").closest("#row").show();
        $("#peacegift").closest("#row").show();
        $("#poisongift").closest("#row").show();
        $("#smith").closest("#row").show();
    }
    if (market.count === true) {
        $("#btn_trade").show();
    }
    if (scoutpost.count === true) {
        $("#btn_travel").show();
        $("#scout").closest("#row").show();
    }
    if (barracks.count === true) {
        $("#knight").closest("#row").show();
    }
    if (stable.count === true) {
        $("#items").show();
        $("#horse").closest("#row").show();
        $("#stableman").closest("#row").show();
        interval_new_hor = setInterval(new_horses, speed * 60);
    }
}

/* Game Over */
function game_over() {
    msg.prepend("<p>Dein Dorf ist gestorben.</p>");
    check_msg();
    refresh();
    clearInterval(interval_build);
    clearInterval(interval_upgrade);
    clearInterval(interval_brew);
    clearInterval(interval_craft);
    clearInterval(interval_refr);
    clearInterval(interval_starve);
    clearInterval(interval_freeze);
    clearInterval(interval_supp_prod);
    clearInterval(interval_new_vil);
    clearInterval(interval_new_hor);
    clearInterval(interval_weath);
}

/* Die possibilities */
function die(type) {
    var rnd = Math.floor((Math.random() * 3) + 1);
    if (type === "starve") {
        if (rnd === 1 || rnd === 2) {
            if (villager.count > 0) {
                villager.count -= 1;
                if (villager.unused > 0) {
                    villager.unused -= 1;
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
                if (villager.count === 0) {
                    game_over();
                }
            }
        }
    } else if (type === "freeze") {
        if (rnd === 1 || rnd === 2) {
            if (villager.count > 0) {
                villager.count -= 1;
                if (villager.unused > 0) {
                    villager.unused -= 1;
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
                if (villager.count === 0) {
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
    if (food >= villager.count) {
        food -= villager.count;
        if (typeof interval_starve !== 'undefined') {
            clearInterval(interval_starve);
            interval_starve = undefined;
        }
    } else {
        food = 0;
        if (typeof interval_starve === 'undefined') {
            interval_starve = setInterval(function () {die("starve"); }, speed * 15);
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
        if (villager.count + amount <= villager.max) {
            villager.count += amount;
            villager.unused += amount;
            msg.prepend("<p>" + amount + " Fremde sind aufgetaucht.</p>");
            check_msg();
        }
    } else if (rnd === 2 || rnd === 3) {
        if (villager.count < villager.max) {
            villager.count += 1;
            villager.unused += 1;
            msg.prepend("<p>Ein Fremder ist aufgetaucht.</p>");
            check_msg();
        }
    }
}

/* Horse add */ 
function new_horses() {
    var rnd = Math.floor((Math.random() * stableman) + 1), amount;
    if (rnd >= 1 && rnd < Math.floor((stableman * breed_bonus) / 6)) {
        amount = Math.floor((Math.random() * 2) + 2);
        if (horse + amount <= villager.max) {
            horse += amount;
            msg.prepend("<p>" + amount + " Pferde wurden gezüchtet.</p>");
            check_msg();
        }
    } else if (rnd >= Math.floor((stableman * breed_bonus) / 6) && rnd <= Math.floor((stableman * breed_bonus) / 3)) {
        if (horse < villager.max) {
            horse += 1;
            msg.prepend("<p>Ein Pferd wurde gezüchtet.</p>");
            check_msg();
        }
    }
}