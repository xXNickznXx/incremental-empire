/*eslint-disable no-undef*/
/*jslint white:true*/

// Build Elements
//region
var el_build_hut = `<tr>
                        <td>
                            <button id="btn_hut" class="btn_content">Hütte
                                <span class="tooltip">
                                    <ul>
                                        <li>` + hut.costs.wood + ` Holz</li>
                                        <li>` + hut.costs.stone + ` Stein</li>
                                    </ul>
                                    <p>Max Bewohner: + 2</p>
                                </span>
                            </button>
                        </td>
                        <td id="time_hut"></td>
                    </tr>`;
var el_build_huntinghut = `<tr>
                                <td>
                                    <button id="btn_huntinghut" class="btn_content">Jagdhütte
                                        <span class="tooltip">
                                            <ul>
                                                <li>` + huntinghut.costs.wood + ` Holz</li>
                                                <li>` + huntinghut.costs.stone + ` Stein</li>
                                            </ul>
                                            <p>Ausbildung: Jäger</p>
                                        </span>
                                    </button>
                                </td>
                                <td id="time_huntinghut"></td>
                            </tr>`;
var el_build_storage = `<tr>
                            <td>
                                <button id="btn_storage" class="btn_content">Lager
                                    <span class="tooltip">
                                        <ul>
                                            <li>` + storage.costs.wood + ` Holz</li>
                                            <li>` + storage.costs.stone + ` Stein</li>
                                        </ul>
                                        <p>Max aller Vorräte: + 400</p>
                                    </span>
                                </button>
                            </td>
                            <td id="time_storage"></td>
                        </tr>`;
var el_build_lumberjackhut = `<tr>
                                <td>
                                    <button id="btn_lumberjackhut" class="btn_content">Holzfällerhütte
                                        <span class="tooltip">
                                            <ul>
                                                <li>` + lumberjackhut.costs.wood + ` Holz</li>
                                                <li>` + lumberjackhut.costs.stone + ` Stein</li>
                                            </ul>
                                            <p>Holz sammeln: + 1</p>
                                        </span>
                                    </button>
                                </td>
                                <td id="time_lumberjackhut"></td>
                            </tr>`;
var el_build_sheepstall = `<tr>
                                <td>
                                    <button id="btn_sheepstall" class="btn_content">Schafstall
                                        <span class="tooltip">
                                            <ul>
                                                <li>` + sheepstall.costs.wood + ` Holz</li>
                                                <li>` + sheepstall.costs.stone + ` Stein</li>
                                            </ul>
                                            <p>Ausbildung: Schäfer</p>
                                        </span>
                                    </button>
                                </td>
                                <td id="time_sheepstall"></td>
                            </tr>`;
var el_build_quarry = `<tr>
                            <td>
                                <button id="btn_quarry" class="btn_content">Steinbruch
                                    <span class="tooltip">
                                        <ul>
                                            <li>` + quarry.costs.wood + ` Holz</li>
                                            <li>` + quarry.costs.stone + ` Stein</li>
                                        </ul>
                                        <p>Stein sammeln: + 1</p>
                                    </span>
                                </button>
                            </td>
                            <td id="time_quarry"></td>
                        </tr>`;
var el_build_coalmine = `<tr>
                            <td>
                                <button id="btn_coalmine" class="btn_content">Kohlemine
                                    <span class="tooltip">
                                        <ul>
                                            <li>` + coalmine.costs.wood + ` Holz</li>
                                            <li>` + coalmine.costs.stone + ` Stein</li>
                                        </ul>
                                        <p>Ausbildung: Kohleminenarbeiter</p>
                                    </span>
                                </button>
                            </td>
                            <td id="time_coalmine"></td>
                        </tr>`;
var el_build_ironmine = `<tr>
                            <td>
                                <button id="btn_ironmine" class="btn_content">Eisenmine
                                    <span class="tooltip">
                                        <ul>
                                            <li>` + ironmine.costs.wood + ` Holz</li>
                                            <li>` + ironmine.costs.stone + ` Stein</li>
                                            <li>` + ironmine.costs.coal + ` Kohle</li>
                                        </ul>
                                        <p>Ausbildung: Eisenminenarbeiter</p>
                                    </span>
                                </button>
                            </td>
                            <td id="time_ironmine"></td>
                        </tr>`;
var el_build_tailorhouse = `<tr>
                                <td>
                                    <button id="btn_tailorhouse" class="btn_content">Schneiderhaus
                                        <span class="tooltip">
                                            <ul>
                                                <li>` + tailorhouse.costs.wood + ` Holz</li>
                                                <li>` + tailorhouse.costs.stone + ` Stein</li>
                                                <li>` + tailorhouse.costs.coal + ` Kohle</li>
                                            </ul>
                                            <p>Ausbildung: Schneider</p>
                                        </span>
                                    </button>
                                </td>
                                <td id="time_tailorhouse"></td>
                            </tr>`;
var el_build_alchemisthut = `<tr>
                                <td>
                                    <button id="btn_alchemisthut" class="btn_content">Alchemistenhütte
                                        <span class="tooltip">
                                            <ul>
                                                <li>` + alchemisthut.costs.wood + ` Holz</li>
                                                <li>` + alchemisthut.costs.stone + ` Stein</li>
                                                <li>` + alchemisthut.costs.coal + ` Kohle</li>
                                                <li>` + alchemisthut.costs.iron + ` Eisen</li>
                                            </ul>
                                            <p>Ausbildung: Alchemist</p>
                                        </span>
                                    </button>
                                </td>
                                <td id="time_alchemisthut"></td>
                            </tr>`;
var el_build_forge = `<tr>
                            <td>
                                <button id="btn_forge" class="btn_content">Schmiede
                                    <span class="tooltip">
                                        <ul>
                                            <li>` + forge.costs.wood + ` Holz</li>
                                            <li>` + forge.costs.stone + ` Stein</li>
                                            <li>` + forge.costs.coal + ` Kohle</li>
                                            <li>` + forge.costs.iron + ` Eisen</li>
                                        </ul>
                                        <p>Ausbildung: Schmied</p>
                                    </span>
                                </button>
                            </td>
                            <td id="time_forge"></td>
                        </tr>`;
var el_build_market = `<tr>
                            <td>
                                <button id="btn_market" class="btn_content">Markt
                                    <span class="tooltip">
                                        <ul>
                                            <li>` + market.costs.wood + ` Holz</li>
                                            <li>` + market.costs.stone + ` Stein</li>
                                            <li>` + market.costs.coal + ` Kohle</li>
                                            <li>` + market.costs.iron + ` Eisen</li>
                                        </ul>
                                        <p>Möglichkeit: Handeln</p>
                                    </span>
                                </button>
                            </td>
                            <td id="time_market"></td>
                        </tr>`;
var el_build_scoutpost = `<tr>
                                <td>
                                    <button id="btn_scoutpost" class="btn_content">Erkundungsposten
                                        <span class="tooltip">
                                            <ul>
                                                <li>` + scoutpost.costs.wood + ` Holz</li>
                                                <li>` + scoutpost.costs.stone + ` Stein</li>
                                                <li>` + scoutpost.costs.coal + ` Kohle</li>
                                                <li>` + scoutpost.costs.iron + ` Eisen</li>
                                            </ul>
                                            <p>Ausbildung: Kundschafter</p>
                                        </span>
                                    </button>
                                </td>
                                <td id="time_scoutpost"></td>
                            </tr>`;
var el_build_barracks = `<tr>
                            <td>
                                <button id="btn_barracks" class="btn_content">Kaserne
                                    <span class="tooltip">
                                        <ul>
                                            <li>` + barracks.costs.wood + ` Holz</li>
                                            <li>` + barracks.costs.stone + ` Stein</li>
                                            <li>` + barracks.costs.coal + ` Kohle</li>
                                            <li>` + barracks.costs.iron + ` Eisen</li>
                                        </ul>
                                        <p>Ausbildung: Krieger</p>
                                    </span>
                                </button>
                            </td>
                            <td id="time_barracks"></td>
                        </tr>`;
var el_build_stable = `<tr>
                            <td>
                                <button id="btn_stable" class="btn_content">Pferdestall
                                    <span class="tooltip">
                                        <ul>
                                            <li>` + stable.costs.wood + ` Holz</li>
                                            <li>` + stable.costs.stone + ` Stein</li>
                                            <li>` + stable.costs.coal + ` Kohle</li>
                                            <li>` + stable.costs.iron + ` Eisen</li>
                                        </ul>
                                        <p>Haltung: Pferde</p>
                                    </span>
                                </button>
                            </td>
                            <td id="time_stable"></td>
                        </tr>`;
//endregion

// Upgrade Elements
//region
var el_upgrade_hut = `<tr>
                        <td>
                            <button id="btn_upgrade_hut" class="btn_content">Hütte
                                <span class="tooltip">
                                    <ul>
                                        <li>` + hut_up.costs.wood + ` Holz</li>
                                        <li>` + hut_up.costs.stone + ` Stein</li>
                                    </ul>
                                    <p>Max Bewohner: + 3</p>
                                </span>
                            </button>
                        </td>
                        <td id="time_upgrade_hut"></td>
                    </tr>`;
var el_upgrade_huntinghut = `<tr>
                                <td>
                                    <button id="btn_upgrade_huntinghut" class="btn_content">Jagdhütte
                                        <span class="tooltip">
                                            <ul>
                                                <li>` + huntinghut_up.costs.wood + ` Holz</li>
                                                <li>` + huntinghut_up.costs.stone + ` Stein</li>
                                            </ul>
                                            <p>Leder sammeln: + 1</p>
                                        </span>
                                    </button>
                                </td>
                                <td id="time_upgrade_huntinghut"></td>
                            </tr>`;
var el_upgrade_storage = `<tr>
                            <td>
                                <button id="btn_upgrade_storage" class="btn_content">Lager
                                    <span class="tooltip">
                                        <ul>
                                            <li>` + storage_up.costs.wood + ` Holz</li>
                                            <li>` + storage_up.costs.stone + ` Stein</li>
                                        </ul>
                                        <p>Max aller Vorräte: + 500</p>
                                    </span>
                                </button>
                            </td>
                            <td id="time_upgrade_storage"></td>
                        </tr>`;
var el_upgrade_lumberjackhut = `<tr>
                                <td>
                                    <button id="btn_upgrade_lumberjackhut" class="btn_content">Holzfällerhütte
                                        <span class="tooltip">
                                            <ul>
                                                <li>` + lumberjackhut_up.costs.wood + ` Holz</li>
                                                <li>` + lumberjackhut_up.costs.stone + ` Stein</li>
                                            </ul>
                                            <p>Holz sammeln: + 1</p>
                                        </span>
                                    </button>
                                </td>
                                <td id="time_upgrade_lumberjackhut"></td>
                            </tr>`;
var el_upgrade_sheepstall = `<tr>
                                <td>
                                    <button id="btn_upgrade_sheepstall" class="btn_content">Schafstall
                                        <span class="tooltip">
                                            <ul>
                                                <li>` + sheepstall_up.costs.wood + ` Holz</li>
                                                <li>` + sheepstall_up.costs.stone + ` Stein</li>
                                            </ul>
                                            <p>Wolle sammeln: + 1</p>
                                        </span>
                                    </button>
                                </td>
                                <td id="time_upgrade_sheepstall"></td>
                            </tr>`;
var el_upgrade_quarry = `<tr>
                            <td>
                                <button id="btn_upgrade_quarry" class="btn_content">Steinbruch
                                    <span class="tooltip">
                                        <ul>
                                            <li>` + quarry_up.costs.wood + ` Holz</li>
                                            <li>` + quarry_up.costs.stone + ` Stein</li>
                                        </ul>
                                        <p>Stein sammeln: + 1</p>
                                    </span>
                                </button>
                            </td>
                            <td id="time_upgrade_quarry"></td>
                        </tr>`;
var el_upgrade_coalmine = `<tr>
                            <td>
                                <button id="btn_upgrade_coalmine" class="btn_content">Kohlemine
                                    <span class="tooltip">
                                        <ul>
                                            <li>` + coalmine_up.costs.wood + ` Holz</li>
                                            <li>` + coalmine_up.costs.stone + ` Stein</li>
                                        </ul>
                                        <p>Kohle sammeln: + 1</p>
                                    </span>
                                </button>
                            </td>
                            <td id="time_upgrade_coalmine"></td>
                        </tr>`;
var el_upgrade_ironmine = `<tr>
                            <td>
                                <button id="btn_upgrade_ironmine" class="btn_content">Eisenmine
                                    <span class="tooltip">
                                        <ul>
                                            <li>` + ironmine_up.costs.wood + ` Holz</li>
                                            <li>` + ironmine_up.costs.stone + ` Stein</li>
                                            <li>` + ironmine_up.costs.coal + ` Kohle</li>
                                        </ul>
                                        <p>Eisen sammeln: + 1</p>
                                    </span>
                                </button>
                            </td>
                            <td id="time_upgrade_ironmine"></td>
                        </tr>`;
var el_upgrade_tailorhouse = `<tr>
                                <td>
                                    <button id="btn_upgrade_tailorhouse" class="btn_content">Schneiderhaus
                                        <span class="tooltip">
                                            <ul>
                                                <li>` + tailorhouse_up.costs.wood + ` Holz</li>
                                                <li>` + tailorhouse_up.costs.stone + ` Stein</li>
                                                <li>` + tailorhouse_up.costs.coal + ` Kohle</li>
                                            </ul>
                                            <p>Kleidung herstellen: + 1</p>
                                        </span>
                                    </button>
                                </td>
                                <td id="time_upgrade_tailorhouse"></td>
                            </tr>`;
var el_upgrade_alchemisthut = `<tr>
                                <td>
                                    <button id="btn_upgrade_alchemisthut" class="btn_content">Alchemistenhütte
                                        <span class="tooltip">
                                            <ul>
                                                <li>` + alchemisthut_up.costs.wood + ` Holz</li>
                                                <li>` + alchemisthut_up.costs.stone + ` Stein</li>
                                                <li>` + alchemisthut_up.costs.coal + ` Kohle</li>
                                                <li>` + alchemisthut_up.costs.iron + ` Eisen</li>
                                            </ul>
                                            <p>Herstellzeit / 2</p>
                                        </span>
                                    </button>
                                </td>
                                <td id="time_upgrade_alchemisthut"></td>
                            </tr>`;
var el_upgrade_forge = `<tr>
                            <td>
                                <button id="btn_upgrade_forge" class="btn_content">Schmiede
                                    <span class="tooltip">
                                        <ul>
                                            <li>` + forge_up.costs.wood + ` Holz</li>
                                            <li>` + forge_up.costs.stone + ` Stein</li>
                                            <li>` + forge_up.costs.coal + ` Kohle</li>
                                            <li>` + forge_up.costs.iron + ` Eisen</li>
                                        </ul>
                                        <p>Herstellzeit / 2</p>
                                    </span>
                                </button>
                            </td>
                            <td id="time_upgrade_forge"></td>
                        </tr>`;
var el_upgrade_market = `<tr>
                            <td>
                                <button id="btn_upgrade_market" class="btn_content">Markt
                                    <span class="tooltip">
                                        <ul>
                                            <li>` + market_up.costs.wood + ` Holz</li>
                                            <li>` + market_up.costs.stone + ` Stein</li>
                                            <li>` + market_up.costs.coal + ` Kohle</li>
                                            <li>` + market_up.costs.iron + ` Eisen</li>
                                        </ul>
                                        <p>Preise / 2</p>
                                    </span>
                                </button>
                            </td>
                            <td id="time_upgrade_market"></td>
                        </tr>`;
var el_upgrade_scoutpost = `<tr>
                                <td>
                                    <button id="btn_upgrade_scoutpost" class="btn_content">Erkundungsposten
                                        <span class="tooltip">
                                            <ul>
                                                <li>` + scoutpost_up.costs.wood + ` Holz</li>
                                                <li>` + scoutpost_up.costs.stone + ` Stein</li>
                                                <li>` + scoutpost_up.costs.coal + ` Kohle</li>
                                                <li>` + scoutpost_up.costs.iron + ` Eisen</li>
                                            </ul>
                                            <p>Erkundungszeit / 2</p>
                                        </span>
                                    </button>
                                </td>
                                <td id="time_upgrade_scoutpost"></td>
                            </tr>`;
var el_upgrade_barracks = `<tr>
                            <td>
                                <button id="btn_upgrade_barracks" class="btn_content">Kaserne
                                    <span class="tooltip">
                                        <ul>
                                            <li>` + barracks_up.costs.wood + ` Holz</li>
                                            <li>` + barracks_up.costs.stone + ` Stein</li>
                                            <li>` + barracks_up.costs.coal + ` Kohle</li>
                                            <li>` + barracks_up.costs.iron + ` Eisen</li>
                                        </ul>
                                        <p>Schaden * 2</p>
                                    </span>
                                </button>
                            </td>
                            <td id="time_upgrade_barracks"></td>
                        </tr>`;
var el_upgrade_stable = `<tr>
                            <td>
                                <button id="btn_upgrade_stable" class="btn_content">Pferdestall
                                    <span class="tooltip">
                                        <ul>
                                            <li>` + stable_up.costs.wood + ` Holz</li>
                                            <li>` + stable_up.costs.stone + ` Stein</li>
                                            <li>` + stable_up.costs.coal + ` Kohle</li>
                                            <li>` + stable_up.costs.iron + ` Eisen</li>
                                        </ul>
                                        <p>Zuchtchance * 2</p>
                                    </span>
                                </button>
                            </td>
                            <td id="time_upgrade_stable"></td>
                        </tr>`;
//endregion

// Craft Elements
//region
var el_craft_medicine = `<div id="row_medicine" class="row_craft">
                            <button id="btn_medicine" class="btn_content">Medizin
                                <span class="tooltip">
                                    <ul>
                                        <li>` + prod_medicine.costs.food + ` Nahrung</li>
                                        <li>` + prod_medicine.costs.stone + ` Stein</li>
                                        <li>` + prod_medicine.costs.cloth + ` Wolle</li>
                                    </ul>
                                    <p>Heilt Krankheit</p>
                                </span>
                            </button>
                            <button id="dwn_medicine" class="btn_dwn_up">-</button>
                            <p id="num_medicine" class="num"></p>
                            <button id="up_medicine" class="btn_dwn_up">+</button>
                            <p id="time_medicine"></p>
                        </div>`;
var el_craft_poison = `<div id="row_poison" class="row_craft">
                            <button id="btn_poison" class="btn_content">Gift
                                <span class="tooltip">
                                    <ul>
                                        <li>` + prod_poison.costs.food + ` Nahrung</li>
                                        <li>` + prod_poison.costs.stone + ` Stein</li>
                                        <li>` + prod_poison.costs.cloth + ` Wolle</li>
                                        <li>` + prod_poison.costs.coal + ` Kohle</li>
                                        <li>` + prod_poison.costs.iron + ` Eisen</li>
                                    </ul>
                                    <p>Vergiftet Ziel</p>
                                </span>
                            </button>
                            <button id="dwn_poison" class="btn_dwn_up">-</button>
                            <p id="num_poison" class="num"></p>
                            <button id="up_poison" class="btn_dwn_up">+</button>
                            <p id="time_poison"></p>
                        </div>`;
var el_craft_leatherarmor = `<div id="row_leatherarmor" class="row_craft">
                                <button id="btn_leatherarmor" class="btn_content">Lederrüstung
                                    <span class="tooltip">
                                        <ul>
                                            <li>` + prod_leatherarmor.costs.leather + ` Leder</li>
                                        </ul>
                                        <p>Leichte Rüstung</p>
                                        <p>Leicht erhöhte Überlebenschance</p>
                                        <p>Schnelle Fortbewegung</p>
                                    </span>
                                </button>
                                <button id="dwn_leatherarmor" class="btn_dwn_up">-</button>
                                <p id="num_leatherarmor" class="num"></p>
                                <button id="up_leatherarmor" class="btn_dwn_up">+</button>
                                <p id="time_leatherarmor"></p>
                            </div>`;
var el_craft_ironarmor = `<div id="row_ironarmor" class="row_craft">
                                <button id="btn_ironarmor" class="btn_content">Eisenrüstung
                                    <span class="tooltip">
                                        <ul>
                                            <li>` + prod_ironarmor.costs.iron + ` Eisen</li>
                                        </ul>
                                        <p>Schwere Rüstung</p>
                                        <p>Stark erhöhte Überlebenschance</p>
                                        <p>Langsame Fortbewegung</p>
                                    </span>
                                </button>
                                <button id="dwn_ironarmor" class="btn_dwn_up">-</button>
                                <p id="num_ironarmor" class="num"></p>
                                <button id="up_ironarmor" class="btn_dwn_up">+</button>
                                <p id="time_ironarmor"></p>
                            </div>`;
var el_craft_axe = `<div id="row_axe" class="row_craft">
                        <button id="btn_axe" class="btn_content">Axt
                            <span class="tooltip">
                                <ul>
                                    <li>` + prod_axe.costs.wood + ` Holz</li>
                                    <li>` + prod_axe.costs.iron + ` Eisen</li>
                                </ul>
                                <p>Leichte Waffe</p>
                                <p>Leichter Schaden</p>
                            </span>
                        </button>
                        <button id="dwn_axe" class="btn_dwn_up">-</button>
                        <p id="num_axe" class="num"></p>
                        <button id="up_axe" class="btn_dwn_up">+</button>
                        <p id="time_axe"></p>
                    </div>`;
var el_craft_sword = `<div id="row_sword" class="row_craft">
                        <button id="btn_sword" class="btn_content">Schwert
                            <span class="tooltip">
                                <ul>
                                    <li>` + prod_sword.costs.wood + ` Holz</li>
                                    <li>` + prod_sword.costs.iron + ` Eisen</li>
                                </ul>
                                <p>Normaler Waffe</p>
                                <p>Normaler Schaden</p>
                            </span>
                        </button>
                        <button id="dwn_sword" class="btn_dwn_up">-</button>
                        <p id="num_sword" class="num"></p>
                        <button id="up_sword" class="btn_dwn_up">+</button>
                        <p id="time_sword"></p>
                    </div>`;
var el_craft_morningstar = `<div id="row_morningstar" class="row_craft">
                                <button id="btn_morningstar" class="btn_content">Morgenstern
                                    <span class="tooltip">
                                        <ul>
                                            <li>` + prod_morningstar.costs.wood + ` Holz</li>
                                            <li>` + prod_morningstar.costs.iron + ` Eisen</li>
                                        </ul>
                                        <p>Schwere Waffe</p>
                                        <p>Schwerer Schaden</p>
                                    </span>
                                </button>
                                <button id="dwn_morningstar" class="btn_dwn_up">-</button>
                                <p id="num_morningstar" class="num"></p>
                                <button id="up_morningstar" class="btn_dwn_up">+</button>
                                <p id="time_morningstar"></p>
                            </div>`;
var el_craft_shortbow = `<div id="row_shortbow" class="row_craft">
                            <button id="btn_shortbow" class="btn_content">Kurzbogen
                                <span class="tooltip">
                                    <ul>
                                        <li>` + prod_shortbow.costs.wood + ` Holz</li>
                                        <li>` + prod_shortbow.costs.iron + ` Eisen</li>
                                    </ul>
                                    <p>Leichte Waffe</p>
                                    <p>Leichter Schaden</p>
                                </span>
                            </button>
                            <button id="dwn_shortbow" class="btn_dwn_up">-</button>
                            <p id="num_shortbow" class="num"></p>
                            <button id="up_shortbow" class="btn_dwn_up">+</button>
                            <p id="time_shortbow"></p>
                        </div>`;
var el_craft_longbow = `<div id="row_longbow" class="row_craft">
                            <button id="btn_longbow" class="btn_content">Langbogen
                                <span class="tooltip">
                                    <ul>
                                        <li>` + prod_longbow.costs.wood + ` Holz</li>
                                        <li>` + prod_longbow.costs.iron + ` Eisen</li>
                                    </ul>
                                    <p>Normaler Waffe</p>
                                    <p>Normaler Schaden</p>
                                </span>
                            </button>
                            <button id="dwn_longbow" class="btn_dwn_up">-</button>
                            <p id="num_longbow" class="num"></p>
                            <button id="up_longbow" class="btn_dwn_up">+</button>
                            <p id="time_longbow"></p>
                        </div>`;
var el_craft_crossbow = `<div id="row_crossbow" class="row_craft">
                            <button id="btn_crossbow" class="btn_content">Armbrust
                                <span class="tooltip">
                                    <ul>
                                        <li>` + prod_crossbow.costs.wood + ` Holz</li>
                                        <li>` + prod_crossbow.costs.iron + ` Eisen</li>
                                    </ul>
                                    <p>Schwere Waffe</p>
                                    <p>Schwerer Schaden</p>
                                </span>
                            </button>
                            <button id="dwn_crossbow" class="btn_dwn_up">-</button>
                            <p id="num_crossbow" class="num"></p>
                            <button id="up_crossbow" class="btn_dwn_up">+</button>
                            <p id="time_crossbow"></p>
                        </div>`;
var el_craft_tradegift = `<div id="row_tradegift" class="row_craft">
                            <button id="btn_tradegift" class="btn_content">Handelsgeschenk
                                <span class="tooltip">
                                    <ul>
                                        <li>` + prod_tradegift.costs.food + ` Nahrung</li>
                                        <li>` + prod_tradegift.costs.wood + ` Holz</li>
                                        <li>` + prod_tradegift.costs.leather + ` Leder</li>
                                        <li>` + prod_tradegift.costs.cloth + ` Wolle</li>
                                        <li>` + prod_tradegift.costs.iron + ` Eisen</li>
                                        <li>` + prod_tradegift.costs.clothes + ` Kleidung</li>
                                    </ul>
                                    <p>Erhöhte Chance: Handelsabkommen</p>
                                </span>
                            </button>
                            <button id="dwn_tradegift" class="btn_dwn_up">-</button>
                            <p id="num_tradegift" class="num"></p>
                            <button id="up_tradegift" class="btn_dwn_up">+</button>
                            <p id="time_tradegift"></p>
                        </div>`;
var el_craft_peacegift = `<div id="row_peacegift" class="row_craft">
                            <button id="btn_peacegift" class="btn_content">Friedensgeschenk
                                <span class="tooltip">
                                    <ul>
                                        <li>` + prod_peacegift.costs.food + ` Nahrung</li>
                                        <li>` + prod_peacegift.costs.wood + ` Holz</li>
                                        <li>` + prod_peacegift.costs.leather + ` Leder</li>
                                        <li>` + prod_peacegift.costs.cloth + ` Wolle</li>
                                        <li>` + prod_peacegift.costs.iron + ` Eisen</li>
                                        <li>` + prod_peacegift.costs.clothes + ` Kleidung</li>
                                    </ul>
                                    <p>Erhöhte Chance: Friedensabkommen</p>
                                </span>
                            </button>
                            <button id="dwn_peacegift" class="btn_dwn_up">-</button>
                            <p id="num_peacegift" class="num"></p>
                            <button id="up_peacegift" class="btn_dwn_up">+</button>
                            <p id="time_peacegift"></p>
                        </div>`;
var el_craft_poisongift = `<div id="row_poisongift" class="row_craft">
                                <button id="btn_poisongift" class="btn_content">Giftgeschenk
                                    <span class="tooltip">
                                        <ul>
                                            <li>` + prod_poisongift.costs.food + ` Nahrung</li>
                                            <li>` + prod_poisongift.costs.wood + ` Holz</li>
                                            <li>` + prod_poisongift.costs.leather + ` Leder</li>
                                            <li>` + prod_poisongift.costs.cloth + ` Wolle</li>
                                            <li>` + prod_poisongift.costs.iron + ` Eisen</li>
                                            <li>` + prod_poisongift.costs.clothes + ` Kleidung</li>
                                            <li>` + prod_poisongift.costs.poison + ` Gift</li>
                                        </ul>
                                        <p>Erhöhte Chance: Toter Anführer</p>
                                    </span>
                                </button>
                                <button id="dwn_poisongift" class="btn_dwn_up">-</button>
                                <p id="num_poisongift" class="num"></p>
                                <button id="up_poisongift" class="btn_dwn_up">+</button>
                                <p id="time_poisongift"></p>
                            </div>`;
//endregion