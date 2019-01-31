$("#btn_build").click(function () {
    if (win.matches) {
        $("#right").attr("hidden", true);
    }
    $("#build").removeAttr("hidden");
    $("#upgrade").attr("hidden", true);
    $("#craft").attr("hidden", true);
    $("#trade").attr("hidden", true);
    $("#travel").attr("hidden", true);
    $("#options").attr("hidden", true);
	
	$(this).addClass("selected");
    $("#btn_upgrade").removeAttr("class");
    $("#btn_craft").removeAttr("class");
    $("#btn_trade").removeAttr("class");
    $("#btn_travel").removeAttr("class");
    $("#btn_options").removeAttr("class");
    $("#btn_mobile").removeClass("class");
});
$("#btn_upgrade").click(function () {
    if (win.matches) {
        $("#right").attr("hidden", true);
    }
    $("#build").attr("hidden", true);
    $("#upgrade").removeAttr("hidden");
    $("#craft").attr("hidden", true);
    $("#trade").attr("hidden", true);
    $("#travel").attr("hidden", true);
    $("#options").attr("hidden", true);
	
	$(this).addClass("selected");
    $("#btn_build").removeAttr("class");
    $("#btn_craft").removeAttr("class");
    $("#btn_trade").removeAttr("class");
    $("#btn_travel").removeAttr("class");
    $("#btn_options").removeAttr("class");
    $("#btn_mobile").removeClass("class");
});
$("#btn_craft").click(function () {
    if (win.matches) {
        $("#right").attr("hidden", true);
    }
    $("#build").attr("hidden", true);
    $("#upgrade").attr("hidden", true);
    $("#craft").removeAttr("hidden");
    $("#trade").attr("hidden", true);
    $("#travel").attr("hidden", true);
    $("#options").attr("hidden", true);
	
	$(this).addClass("selected");
    $("#btn_build").removeAttr("class");
    $("#btn_upgrade").removeAttr("class");
    $("#btn_trade").removeAttr("class");
    $("#btn_travel").removeAttr("class");
    $("#btn_options").removeAttr("class");
    $("#btn_mobile").removeClass("class");
});
$("#btn_trade").click(function () {
    if (win.matches) {
        $("#right").attr("hidden", true);
    }
    $("#build").attr("hidden", true);
    $("#upgrade").attr("hidden", true);
    $("#craft").attr("hidden", true);
    $("#trade").removeAttr("hidden");
    $("#travel").attr("hidden", true);
    $("#options").attr("hidden", true);
	
	$(this).addClass("selected");
    $("#btn_build").removeAttr("class");
    $("#btn_upgrade").removeAttr("class");
    $("#btn_craft").removeAttr("class");
    $("#btn_travel").removeAttr("class");
    $("#btn_options").removeAttr("class");
    $("#btn_mobile").removeClass("class");
});
$("#btn_travel").click(function () {
    if (win.matches) {
        $("#right").attr("hidden", true);
    }
    $("#build").attr("hidden", true);
    $("#upgrade").attr("hidden", true);
    $("#craft").attr("hidden", true);
    $("#trade").attr("hidden", true);
    $("#travel").removeAttr("hidden");
    $("#options").attr("hidden", true);
	
	$(this).addClass("selected");
    $("#btn_build").removeAttr("class");
    $("#btn_upgrade").removeAttr("class");
    $("#btn_craft").removeAttr("class");
    $("#btn_trade").removeAttr("class");
    $("#btn_options").removeAttr("class");
    $("#btn_mobile").removeClass("class");
});
$("#btn_options").click(function () {
    if (win.matches) {
        $("#right").attr("hidden", true);
    }
    $("#build").attr("hidden", true);
    $("#upgrade").attr("hidden", true);
    $("#craft").attr("hidden", true);
    $("#trade").attr("hidden", true);
    $("#travel").attr("hidden", true);
    $("#options").removeAttr("hidden");
	
	$(this).addClass("selected");
    $("#btn_build").removeAttr("class");
    $("#btn_upgrade").removeAttr("class");
    $("#btn_craft").removeAttr("class");
    $("#btn_trade").removeAttr("class");
    $("#btn_travel").removeAttr("class");
    $("#btn_mobile").removeClass("class");
});

$("#btn_mobile").click(function () {
    $("#right").removeAttr("hidden");
    $("#build").attr("hidden", true);
    $("#upgrade").attr("hidden", true);
    $("#craft").attr("hidden", true);
    $("#trade").attr("hidden", true);
    $("#travel").attr("hidden", true);
    $("#options").attr("hidden", true);
	
	$(this).addClass("selected");
    $("#btn_build").removeAttr("class");
    $("#btn_upgrade").removeAttr("class");
    $("#btn_craft").removeAttr("class");
    $("#btn_trade").removeAttr("class");
    $("#btn_travel").removeAttr("class");
    $("#btn_options").removeAttr("class");
});