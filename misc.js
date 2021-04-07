// Should i move it to /raw really?

const incomeLevel = {
  0: 'None',
  1: 'Very Low',
  2: 'Low',
  3: 'Normal',
  4: 'High',
  5: 'Very High'
}

const mode = {
  2: 'Conquest',
  3: 'Closer Combat',
  5: 'Breakthrough'
}

const victory = {
  0: 'Total Defeat',
  1: 'Major Defeat',
  2: 'Minor Defeat',
  3: 'Draw',
  4: 'Minor Victory',
  5: 'Major Victory',
  6: 'Total Victory'
}

const scoreLimit = {
  1000: 'Low',
  2000: 'Normal',
  4000: 'High'
}

const incomeTypes = {
  0: 'Balanced',
  1: 'Vanguard',
  2: 'Maverick',
  3: 'Juggernaut',
  4: 'Flat line',
  5: 'V for victory'
}

const map = {
  _2x2_Urban_River_Bobr_LD_1v1: "Bobr",
  _2x2_Urban_River_Bobr_LD_1v1_BKT: "Bobr",
  _2x2_Urban_River_Bobr_LD_1v1_CQC: "Bobr",
  _3x2_West_Brest_LD_1v1: "Brest West",
  _3x2_West_Brest_LD_1v1_CQC: "Brest West",
  _3x2_West_Brest_LD_1v1_BKT: "Brest West",
  _4x2_Vistula_Gora_Kalwaria_LD_1v1: "Gora Kalwaria",
  _4x2_Vistula_Gora_Kalwaria_LD_1v1_BKT: "Gora Kalwaria",
  _4x2_Vistula_Gora_Kalwaria_LD_1v1_CQC: "Gora Kalwaria",
  _2x2_Ville_Centrale_Haroshaje_LD_1v1: "Haroshaje",
  _2x2_Ville_Centrale_Haroshaje_LD_1v1_BKT: "Haroshaje",
  _2x2_Ville_Centrale_Haroshaje_LD_1v1_CQC: "Haroshaje",
  _3x2_Ilomantsi_LD_1v1: "Ilomantsi",
  _3x2_Ilomantsi_LD_1v1_BKT: "Ilomantsi",
  _3x2_Ilomantsi_LD_1v1_CQC: "Ilomantsi",
  _2x2_River_Swamp_Krupa_LD_1v1: "Krupa",
  _2x2_River_Swamp_Krupa_LD_1v1_BKT: "Krupa",
  _2x2_River_Swamp_Krupa_LD_1v1_CQC: "Krupa",
  _2x2_Lenina_LD_1v1: "Lenina",
  _2x2_Lenina_LD_1v1_BKT: "Lenina",
  _2x2_Lenina_LD_1v1_CQC: "Lenina",
  _2x2_Plateau_Central_Orsha_E_LD_1v1: "Orsha East",
  _2x2_Plateau_Central_Orsha_E_LD_1v1_BKT: "Orsha East",
  _2x2_Plateau_Central_Orsha_E_LD_1v1_CQC: "Orsha East",
  _2x1_Proto_levelBuild_Orsha_N_LD_1v1: "Orsha North",
  _2x1_Proto_levelBuild_Orsha_N_LD_1v1_BKT: "Orsha North",
  _2x1_Proto_levelBuild_Orsha_N_LD_1v1_CQC: "Orsha North",
  _2x2_Ostrowno_LD_1v1: "Ostrowno",
  _2x2_Ostrowno_LD_1v1_BKT: "Ostrowno",
  _2x2_Ostrowno_LD_1v1_CQC: "Ostrowno",
  _2x2_Shchedrin_LD_1v1: "Shchedrin",
  _2x2_Shchedrin_LD_1v1_BKT: "Shchedrin",
  _2x2_Shchedrin_LD_1v1_CQC: "Shchedrin",
  _2x2_Lacs_Sianno_LD_1v1: "Sianno",
  _2x2_Lacs_Sianno_LD_1v1_BKT: "Sianno",
  _2x2_Lacs_Sianno_LD_1v1_CQC: "Sianno",
  _3x2_Siedlce_LD_1v1: "Siedlce",
  _3x2_Siedlce_LD_1v1_CQC: "Siedlce",
  _3x2_Siedlce_LD_1v1_BKT: "Siedlce",
  _2x2_Slutsk_E_LD_1v1: "Slutsk East",
  _2x2_Slutsk_E_LD_1v1_BKT: "Slutsk East",
  _2x2_Slutsk_E_LD_1v1_CQC: "Slutsk East",
  _2x2_Slutsk_W_LD_1v1: "Slutsk West",
  _2x2_Slutsk_W_LD_1v1_BKT: "Slutsk West",
  _2x2_Slutsk_W_LD_1v1_CQC: "Slutsk West",
  _2x2_Slutsk_LD_1v1: "Slutsk",
  _2x2_Slutsk_LD_1v1_BKT: "Slutsk",
  _2x2_Slutsk_LD_1v1_CQC: "Slutsk",
  _3x2_Tali_Ihantala_LD_1v1: "Tali Ihantala",
  _3x2_Tali_Ihantala_LD_1v1_BKT: "Tali Ihantala",
  _3x2_Tali_Ihantala_LD_1v1_CQC: "Tali Ihantala",
  _2x2_Foret_Tsel_LD_1v1: "Tsel",
  _2x2_Foret_Tsel_LD_1v1_BKT: "Tsel",
  _2x2_Foret_Tsel_LD_1v1_CQC: "Tsel",
  _3x2_Zbuczyn_LD_1v1: "Zbuczyn",
  _3x2_Zbuczyn_LD_1v1_CQC: "Zbuczyn",
  _3x2_Zbuczyn_LD_1v1_BKT: "Zbuczyn",
  _3x2_Highway_LD_CQC: "Autobahn_Zur_Holle",
  _3x2_Highway_LD_CQC_BKT: "Autobahn_Zur_Holle",
  _3x2_Highway_LD_CQC_CQC: "Autobahn_Zur_Holle",
  _3x2_Beshankovichy_LD_2v2: "Beshankovichy",
  _3x2_Beshankovichy_LD_2v2_BKT: "Beshankovichy",
  _3x2_Beshankovichy_LD_2v2_CQC: "Beshankovichy",
  _3x2_West_Bobrujsk_LD_2v2: "Bobrujsk West",
  _3x2_West_Bobrujsk_LD_2v2_BKT: "Bobrujsk West",
  _3x2_West_Bobrujsk_LD_2v2_CQC: "Bobrujsk West",
  _3x2_West_Brest_LD_2v2: "Brest West 2",
  _3x2_West_Brest_LD_2v2_CQC: "Brest West 2",
  _3x2_West_Brest_LD_2v2_BKT: "Brest West 2",
  _3x2_Ilomantsi_LD_2v2: "Ilomantsi 2",
  _3x2_Ilomantsi_LD_2v2_BKT: "Ilomantsi 2",
  _3x2_Ilomantsi_LD_2v2_CQC: "Ilomantsi 2",
  _3x2_Lenina_LD_2v2: "Lenina 2",
  _3x2_Lenina_LD_2v2_CQC: "Lenina 2",
  _3x2_Lenina_LD_2v2_BKT: "Lenina 2",
  _3x2_Losnica_LD_2v2: "Losnica",
  _3x2_Losnica_LD_2v2_CQC: "Losnica",
  _3x2_Losnica_LD_2v2_BKT: "Losnica",
  _3x2_Astrouna_Novka_LD_2v2: "Novka",
  _3x2_Astrouna_Novka_LD_2v2_CQC: "Novka",
  _3x2_Astrouna_Novka_LD_2v2_BKT: "Novka",
  _3x2_Ostrowno_LD_2v2: "Ostrowno 2",
  _3x2_Ostrowno_LD_2v2_BKT: "Ostrowno 2",
  _3x2_Ostrowno_LD_2v2_CQC: "Ostrowno 2",
  _3x2_Siedlce_LD_2v2: "Siedlce 2",
  _3x2_Siedlce_LD_2v2_BKT: "Siedlce 2",
  _3x2_Siedlce_LD_2v2_CQC: "Siedlce 2",
  _3x2_Shchedrin_LD_2v2: "Shchedrin 2",
  _3x2_Shchedrin_LD_2v2_CQC: "Shchedrin 2",
  _3x2_Shchedrin_LD_2v2_BKT: "Shchedrin 2",
  _3x2_Slutsk_LD_2v2: "Slutsk 2",
  _3x2_Slutsk_LD_2v2_CQC: "Slutsk 2",
  _3x2_Slutsk_LD_2v2_BKT: "Slutsk 2",
  _3x2_Tali_Ihantala_LD_2v2: "Tali Ihantala 2",
  _3x2_Tali_Ihantala_LD_2v2_BKT: "Tali Ihantala 2",
  _3x2_Tali_Ihantala_LD_2v2_CQC: "Tali Ihantala 2",
  _3x2_Veselovo_LD_2v2: "Veselovo",
  _3x2_Veselovo_LD_2v2_CQC: "Veselovo",
  _3x2_Veselovo_LD_2v2_BKT: "Veselovo",
  _3x2_East_Vitebsk_LD_2v2: "Vitebsk East",
  _3x2_East_Vitebsk_LD_2v2_CQC: "Vitebsk East",
  _3x2_East_Vitebsk_LD_2v2_BKT: "Vitebsk East",
  _3x2_Zbuczyn_LD_2v2: "Zbuczyn 2",
  _3x2_Zbuczyn_LD_2v2_CQC: "Zbuczyn 2",
  _3x2_Zbuczyn_LD_2v2_BKT: "Zbuczyn 2",
  _3x2_West_Brest_LD_3v3: "Brest West 3",
  _3x2_West_Brest_LD_3v3_CQC: "Brest West 3",
  _3x2_West_Brest_LD_3v3_BKT: "Brest West 3",
  _3x2_Urban_roads_Krupki_LD_3v3: "Krupki",
  _3x2_Urban_roads_Krupki_LD_3v3_CQC: "Krupki",
  _3x2_Urban_roads_Krupki_LD_3v3_BKT: "Krupki",
  _3x2_Lenina_LD_3v3: "Lenina 3",
  _3x2_Lenina_LD_3v3_CQC: "Lenina 3",
  _3x2_Lenina_LD_3v3_BKT: "Lenina 3",
  _3x2_Lipen_LD_3v3: "Lipen",
  _3x2_Lipen_LD_3v3_BKT: "Lipen",
  _3x2_Lipen_LD_3v3_CQC: "Lipen",
  _3x2_Lyakhavichy_LD_3v3: "Lyakhavichy",
  _3x2_Lyakhavichy_LD_3v3_BKT: "Lyakhavichy",
  _3x2_Lyakhavichy_LD_3v3_CQC: "Lyakhavichy",
  _3x2_Mogilev_LD_3v3: "Mogilev",
  _3x2_Mogilev_LD_3v3_BKT: "Mogilev",
  _3x2_Mogilev_LD_3v3_CQC: "Mogilev",
  _3x2_Marecages_Naratch_lake_LD_3v3: "Naratch Lake",
  _3x2_Marecages_Naratch_lake_LD_3v3_BKT: "Naratch Lake",
  _3x2_Marecages_Naratch_lake_LD_3v3_CQC: "Naratch Lake",
  _3x2_Ostrowno_LD_3v3: "Ostrowno 3",
  _3x2_Ostrowno_LD_3v3_BKT: "Ostrowno 3",
  _3x2_Ostrowno_LD_3v3_CQC: "Ostrowno 3",
  _3x2_Rivers_Pleshchenitsy_S_LD_3v3: "Pleshchenitsy South",
  _3x2_Rivers_Pleshchenitsy_S_LD_3v3_CQC: "Pleshchenitsy South",
  _3x2_Rivers_Pleshchenitsy_S_LD_3v3_BKT: "Pleshchenitsy South",
  _3x2_Shchedrin_LD_3v3: "Shchedrin 3",
  _3x2_Shchedrin_LD_3v3_CQC: "Shchedrin 3",
  _3x2_Shchedrin_LD_3v3_BKT: "Shchedrin 3",
  _3x2_Slutsk_LD_3v3: "Slutsk 3",
  _3x2_Slutsk_LD_3v3_CQC: "Slutsk 3",
  _3x2_Slutsk_LD_3V3_BKT: "Slutsk 3",
  _3x2_Bridges_Smolyany_LD_3v3: "Smolyany",
  _3x2_Bridges_Smolyany_LD_3v3_CQC: "Smolyany",
  _3x2_Bridges_Smolyany_LD_3v3_BKT: "Smolyany",
  _3x2_Tali_Ihantala_LD_3v3: "Tali Ihantala 2",
  _3x2_Tali_Ihantala_LD_3v3_BKT: "Tali Ihantala 2",
  _3x2_Tali_Ihantala_LD_3v3_CQC: "Tali Ihantala 2",
  _4x2_Vistula_Gora_Kalwaria_LD_4v4: "Gora Kalwaria 4",
  _4x2_Vistula_Gora_Kalwaria_LD_4v4_CQC: "Gora Kalwaria 4",
  _4x2_Vistula_Gora_Kalwaria_LD_4v4_BKT: "Gora Kalwaria 4",
  _4x2_Lenina_LD_4v4: "Lenina 4",
  _4x2_Lenina_LD_4v4_CQC: "Lenina 4",
  _4x2_Lenina_LD_4v4_BKT: "Lenina 4",
  _3x2_Ostrowno_LD_4v4: "Ostrowno 4",
  _3x2_Ostrowno_LD_4v4_BKT: "Ostrowno 4",
  _3x2_Ostrowno_LD_4v4_CQC: "Ostrowno 4",
  _3x2_Shchedrin_LD_4v4: "Shchedrin 4",
  _3x2_Shchedrin_LD_4v4_CQC: "Shchedrin 4",
  _3x2_Shchedrin_LD_4v4_BKT: "Shchedrin 4",
  _4x2_Slutsk_LD_4v4: "Slutsk 4",
  _4x2_Slutsk_LD_4v4_CQC: "Slutsk 4",
  _4x2_Slutsk_LD_4v4_BKT: "Slutsk 4"
}

module.exports = { incomeLevel, incomeTypes, scoreLimit, victory, mode, map }
