/*eslint-disable no-undef*/
/*jslint white:true*/

var el_build_hut = `<tr>
                        <td>
                            <button id="btn_hut" class="btn_content">Hütte
                                <span class="tooltip">
                                    <ul>
                                        <li>` + hut.costs.wood + ` Holz</li>
                                        <li>` + hut.costs.stone + ` Stein</li>
                                    </ul>
                                    <p>Erhöht max Bewohner um 2</p>
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