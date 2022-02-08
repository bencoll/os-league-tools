export const CURRENT_VERSION = 7;

export const INITIAL_STATE = {
    version: CURRENT_VERSION,
    randomTaskId: null,
    rsn: null,
    tasks: {},
    taskStats: {},
    tier: 1,
};

export const INITIAL_TASK_STATE = {
    completed: null,
    todo: null,
    ignored: null,
    order: null,
    notes: null,
    lastUpdated: null,
};

export const LEGACY_TO_INTERNAL_IDS = {
    495: 879,
    496: 984,
    497: 508,
    498: 502,
    499: 1294,
    500: 499,
    501: 574,
    502: 520,
    503: 510,
    504: 525,
    505: 229,
    506: 522,
    507: 767,
    508: 419,
    509: 427,
    510: 1,
    511: 274,
    512: 1364,
    513: 774,
    514: 599,
    515: 583,
    516: 823,
    517: 11,
    518: 1403,
    519: 758,
    520: 613,
    521: 848,
    522: 617,
    523: 619,
    524: 878,
    525: 476,
    526: 1337,
    527: 810,
    528: 288,
    529: 396,
    530: 1217,
    531: 1178,
    532: 965,
    533: 753,
    534: 690,
    535: 636,
    536: 660,
    537: 1381,
    538: 1486,
    539: 667,
    540: 479,
    541: 1287,
    542: 677,
    543: 681,
    544: 686,
    545: 679,
    546: 684,
    547: 652,
    548: 659,
    549: 611,
    550: 1142,
    551: 703,
    552: 707,
    553: 1507,
    554: 531,
    555: 716,
    556: 898,
    557: 386,
    558: 1268,
    559: 1107,
    560: 1079,
    561: 741,
    562: 743,
    563: 1406,
    564: 680,
    565: 1397,
    566: 604,
    567: 1252,
    568: 1327,
    569: 1028,
    570: 248,
    571: 756,
    572: 112,
    573: 166,
    574: 685,
    575: 625,
    576: 282,
    577: 1377,
    578: 500,
    579: 501,
    580: 498,
    581: 511,
    582: 509,
    583: 513,
    584: 523,
    585: 524,
    586: 521,
    587: 963,
    588: 575,
    589: 1174,
    590: 893,
    591: 67,
    592: 1026,
    593: 626,
    594: 595,
    595: 665,
    596: 482,
    597: 957,
    598: 1376,
    599: 615,
    600: 609,
    601: 1402,
    602: 623,
    603: 899,
    604: 616,
    605: 481,
    606: 749,
    607: 993,
    608: 602,
    609: 1097,
    610: 839,
    611: 966,
    612: 653,
    613: 1015,
    614: 663,
    615: 90003,
    616: 888,
    617: 671,
    618: 1312,
    619: 642,
    620: 646,
    621: 647,
    622: 670,
    623: 1349,
    624: 910,
    625: 411,
    626: 389,
    627: 1236,
    628: 1305,
    629: 247,
    630: 1101,
    631: 706,
    632: 702,
    633: 710,
    634: 711,
    635: 1346,
    636: 724,
    637: 737,
    638: 492,
    639: 1093,
    640: 1092,
    641: 733,
    642: 1095,
    643: 257,
    644: 393,
    645: 1505,
    646: 381,
    647: 1473,
    648: 490,
    649: 1050,
    650: 1300,
    651: 586,
    652: 1315,
    653: 1250,
    654: 174,
    655: 1152,
    656: 147,
    657: 175,
    658: 814,
    659: 148,
    660: 93,
    661: 129,
    662: 48,
    663: 84,
    664: 9,
    665: 30,
    666: 10,
    667: 1045,
    668: 1258,
    669: 939,
    670: 1378,
    671: 1080,
    672: 503,
    673: 504,
    674: 505,
    675: 514,
    676: 515,
    677: 526,
    678: 527,
    679: 271,
    680: 762,
    681: 4,
    682: 598,
    683: 606,
    684: 1183,
    685: 1023,
    686: 622,
    687: 1110,
    688: 697,
    689: 249,
    690: 640,
    691: 1056,
    692: 1409,
    693: 678,
    694: 651,
    695: 655,
    696: 1313,
    697: 600,
    698: 675,
    699: 998,
    700: 682,
    701: 603,
    702: 828,
    703: 246,
    704: 607,
    705: 596,
    706: 709,
    707: 713,
    708: 382,
    709: 1119,
    710: 1216,
    711: 1326,
    712: 915,
    713: 746,
    714: 742,
    715: 313,
    716: 408,
    717: 1284,
    718: 1286,
    719: 165,
    720: 156,
    721: 120,
    722: 138,
    723: 94,
    724: 130,
    725: 139,
    726: 102,
    727: 605,
    728: 39,
    729: 66,
    730: 31,
    731: 85,
    732: 76,
    733: 728,
    734: 12,
    735: 1005,
    736: 20,
    737: 16,
    738: 1073,
    739: 1122,
    740: 1379,
    827: 1310,
    828: 886,
    829: 1027,
    830: 1031,
    831: 90002,
    832: 901,
    833: 1201,
    834: 1169,
    836: 1151,
    837: 1359,
    838: 1024,
    839: 760,
    840: 771,
    841: 589,
    842: 916,
    843: 1185,
    844: 811,
    845: 650,
    846: 635,
    847: 1202,
    848: 1146,
    849: 1285,
    850: 1320,
    851: 1369,
    852: 1021,
    853: 17,
    854: 942,
    855: 972,
    856: 90001,
    857: 1179,
    858: 1100,
    859: 581,
    860: 778,
    861: 1116,
    862: 934,
    863: 1111,
    864: 1246,
    865: 1262,
    866: 1203,
    867: 13,
    868: 432,
    869: 1475,
    870: 1150,
    893: 977,
    894: 909,
    895: 1323,
    896: 872,
    897: 1109,
    898: 1138,
    899: 855,
    900: 1213,
    901: 956,
    902: 952,
    903: 483,
    904: 836,
    905: 676,
    906: 1069,
    907: 648,
    908: 627,
    909: 773,
    910: 1055,
    911: 1188,
    912: 391,
    913: 1374,
    914: 21,
    915: 914,
    916: 1389,
    917: 1139,
    918: 1304,
    919: 1162,
    920: 1064,
    921: 1472,
    922: 889,
    923: 832,
    924: 1205,
    925: 25,
    926: 932,
    927: 1325,
    928: 1121,
    929: 912,
    930: 1316,
    931: 1308,
    932: 1234,
    933: 938,
    934: 787,
    935: 759,
    936: 1077,
    937: 1266,
    938: 1341,
    939: 1477,
    940: 940,
    941: 732,
    942: 1140,
    943: 395,
    966: 858,
    967: 691,
    968: 202,
    970: 630,
    971: 1060,
    972: 672,
    973: 1288,
    974: 948,
    975: 801,
    976: 478,
    977: 734,
    978: 720,
    979: 768,
    980: 943,
    981: 618,
    982: 1008,
    983: 1012,
    984: 895,
    985: 629,
    986: 1019,
    987: 276,
    988: 1103,
    989: 826,
    990: 211,
    991: 779,
    992: 278,
    993: 1059,
    994: 1365,
    995: 1128,
    996: 1186,
    997: 954,
    998: 1076,
    999: 1057,
    1000: 808,
    1001: 821,
    1002: 1418,
    1003: 804,
    1004: 1074,
    1005: 782,
    1006: 944,
    1007: 763,
    1008: 892,
    1009: 754,
    1010: 693,
    1011: 726,
    1012: 851,
    1013: 1330,
    1014: 1126,
    1015: 1318,
    1016: 14,
    1017: 1219,
    1018: 1227,
    1019: 712,
    1020: 1345,
    1021: 1344,
    1022: 945,
    1047: 983,
    1048: 897,
    1049: 846,
    1050: 1047,
    1051: 1041,
    1052: 980,
    1053: 1086,
    1054: 495,
    1055: 817,
    1056: 1214,
    1057: 1363,
    1058: 1367,
    1059: 1147,
    1060: 1311,
    1061: 717,
    1062: 1298,
    1063: 316,
    1064: 1233,
    1065: 1306,
    1066: 1336,
    1067: 1410,
    1068: 1328,
    1069: 796,
    1070: 385,
    1071: 283,
    1072: 1400,
    1073: 1269,
    1074: 1474,
    1075: 1206,
    1076: 884,
    1077: 1087,
    1078: 1480,
    1079: 1096,
    1080: 1408,
    1081: 885,
    1082: 687,
    1083: 854,
    1084: 1042,
    1085: 785,
    1086: 1317,
    1087: 1199,
    1088: 390,
    1089: 1200,
    1090: 1338,
    1091: 962,
    1092: 1215,
    1093: 1088,
    1094: 1118,
    1121: 407,
    1122: 649,
    1123: 926,
    1124: 624,
    1125: 219,
    1126: 1082,
    1127: 590,
    1128: 1167,
    1129: 1218,
    1130: 494,
    1131: 1017,
    1132: 1099,
    1133: 1030,
    1134: 1083,
    1135: 1037,
    1136: 1212,
    1137: 941,
    1138: 1238,
    1139: 1375,
    1140: 1301,
    1141: 1180,
    1142: 725,
    1143: 314,
    1144: 689,
    1145: 1257,
    1146: 1020,
    1147: 1322,
    1148: 976,
    1149: 985,
    1150: 1084,
    1151: 1081,
    1152: 75,
    1170: 813,
    1171: 1154,
    1172: 1168,
    1173: 1176,
    1174: 1210,
    1175: 645,
    1177: 1383,
    1178: 1506,
    1180: 873,
    1182: 882,
    1183: 1018,
    1184: 1009,
    1185: 1155,
    1186: 1156,
    1187: 1157,
    1188: 1002,
    1190: 429,
    1191: 1504,
    1192: 661,
    1193: 704,
    1194: 905,
    1195: 434,
    1196: 1372,
    1197: 750,
    1198: 409,
    1199: 777,
    1200: 931,
    1201: 1314,
    1202: 1189,
    1203: 1384,
    1204: 1193,
    1205: 1289,
    1206: 587,
    1207: 475,
    1208: 1068,
    1209: 1158,
    1210: 1159,
    1211: 1166,
    1212: 1172,
    1213: 281,
    1214: 1256,
    1215: 656,
    1216: 880,
    1217: 1025,
    1219: 1192,
    1220: 1195,
    1221: 1196,
    1222: 1353,
    1223: 788,
    1224: 1385,
    1225: 1488,
    1226: 1067,
    1227: 883,
    1228: 825,
    1247: 695,
    1248: 582,
    1249: 585,
    1250: 860,
    1251: 968,
    1252: 1280,
    1253: 1053,
    1254: 1104,
    1255: 994,
    1256: 953,
    1257: 969,
    1258: 594,
    1259: 718,
    1260: 1220,
    1261: 1226,
    1262: 955,
    1263: 701,
    1264: 1066,
    1265: 267,
    1266: 1070,
    1267: 818,
    1268: 1357,
    1269: 1043,
    1270: 982,
    1271: 593,
    1272: 748,
    1273: 1182,
    1274: 1292,
    1275: 1006,
    1276: 584,
    1277: 1173,
    1278: 698,
    1279: 890,
    1280: 874,
    1281: 285,
    1282: 1281,
    1283: 1245,
    1284: 1516,
    1285: 1249,
    1286: 1134,
    1287: 1393,
    1288: 995,
    1289: 1251,
    1290: 496,
    1291: 184,
    1292: 806,
    1293: 896,
    1294: 696,
    1295: 1034,
    1296: 1282,
    1297: 654,
    1298: 959,
    1299: 591,
    1300: 761,
    1302: 960,
    1303: 900,
    1304: 923,
    1305: 384,
    1306: 1148,
    1307: 1184,
    1308: 996,
    1326: 1239,
    1327: 975,
    1328: 837,
    1329: 781,
    1330: 1242,
    1331: 797,
    1332: 192,
    1333: 1297,
    1334: 807,
    1335: 694,
    1336: 383,
    1337: 1295,
    1338: 1509,
    1339: 1222,
    1340: 1010,
    1341: 1247,
    1342: 894,
    1343: 812,
    1344: 644,
    1345: 3,
    1346: 674,
    1347: 1319,
    1348: 970,
    1349: 258,
    1350: 798,
    1351: 193,
    1352: 815,
    1353: 820,
    1354: 1494,
    1355: 722,
    1356: 1223,
    1357: 1224,
    1358: 1228,
    1359: 664,
    1360: 1340,
    1361: 764,
    1362: 776,
    1363: 1244,
    1364: 1277,
    1365: 1394,
    1366: 493,
    1367: 1137,
    1368: 799,
    1369: 183,
    1370: 809,
    1399: 1302,
    1400: 1102,
    1401: 1263,
    1402: 780,
    1403: 210,
    1404: 1368,
    1405: 1004,
    1406: 1127,
    1407: 5,
    1408: 592,
    1409: 772,
    1410: 1373,
    1411: 791,
    1412: 1044,
    1413: 906,
    1414: 1361,
    1415: 967,
    1416: 1013,
    1417: 891,
    1418: 831,
    1419: 1235,
    1420: 641,
    1421: 978,
    1422: 911,
    1423: 868,
    1424: 918,
    1425: 866,
    1426: 856,
    1427: 859,
    1428: 1347,
    1429: 869,
    1430: 877,
    1431: 841,
    1432: 643,
    1433: 1153,
    9556763: 1495,
    12455040: 1392,
    13431480: 121,
    19978474: 399,
    21503278: 368,
    32559711: 1433,
    41823503: 853,
    45801466: 1450,
    46191202: 1401,
    46437158: 1351,
    59403344: 925,
    69838451: 1241,
    73987870: 537,
    79619491: 1207,
    79997928: 1382,
    81163038: 1413,
    81338413: 111,
    83717921: 392,
    93962468: 1465,
    104489669: 1135,
    114004280: 1231,
    121396142: 930,
    124652048: 1125,
    136248837: 1198,
    140235878: 559,
    141745381: 1144,
    156288058: 7,
    158416699: 1204,
    163219416: 1208,
    182118993: 424,
    184896262: 1417,
    185218122: 103,
    185974188: 1237,
    201506054: 1411,
    203202908: 370,
    224914292: 1438,
    229101749: 937,
    231962836: 491,
    236442720: 1036,
    240250934: 542,
    240749503: 775,
    243535452: 610,
    252185604: 371,
    252537453: 1362,
    258808275: 946,
    262548047: 406,
    264093365: 1398,
    264523259: 731,
    274595057: 342,
    287459329: 1011,
    289418988: 1390,
    294402359: 1467,
    296037414: 0,
    299701685: 487,
    305214802: 404,
    316838744: 1117,
    324107030: 1500,
    326787626: 1181,
    331934769: 1464,
    345685312: 430,
    360393446: 242,
    374598484: 485,
    379513335: 951,
    399561947: 864,
    401703312: 1425,
    405242286: 1175,
    419964359: 344,
    421738683: 541,
    430104856: 999,
    431866370: 577,
    435670889: 331,
    437143202: 269,
    444688497: 273,
    444705206: 1133,
    445224184: 58,
    445249074: 24,
    457391780: 569,
    466322152: 766,
    468702883: 286,
    474389408: 1171,
    491527535: 1063,
    496127811: 489,
    501824003: 270,
    509010396: 1145,
    544578677: 1512,
    556416721: 950,
    560815062: 484,
    568733865: 928,
    577120635: 57,
    582479814: 555,
    583486353: 1420,
    627972399: 544,
    630939783: 1265,
    639462183: 1273,
    640928159: 362,
    643283584: 557,
    647935191: 876,
    650346239: 1430,
    660718932: 277,
    662497207: 1113,
    665200273: 783,
    670044885: 1303,
    683120793: 1449,
    684313816: 333,
    684985306: 949,
    686880465: 1058,
    700533015: 1518,
    702186020: 887,
    719390321: 802,
    734344242: 359,
    735295670: 902,
    741526413: 512,
    742108274: 628,
    743636694: 405,
    749895837: 1484,
    754022041: 341,
    756921757: 1399,
    766411710: 1248,
    771172118: 1517,
    786303449: 403,
    790029706: 850,
    800334999: 1470,
    804423641: 1429,
    807050474: 770,
    810100140: 744,
    813650624: 1163,
    838616156: 1279,
    844979472: 241,
    846185987: 1405,
    856448605: 1078,
    863251984: 348,
    869943238: 1054,
    872075638: 1414,
    883278815: 1522,
    891283107: 1124,
    900592686: 1191,
    901382642: 363,
    912639630: 421,
    928595125: 1455,
    933928392: 1352,
    985442351: 40,
    993668748: 1380,
    1009816784: 736,
    1021898174: 986,
    1052170499: 1339,
    1060069122: 388,
    1072792478: 418,
    1079208525: 1033,
    1084822136: 415,
    1098181156: 827,
    1110434858: 235,
    1114142443: 1479,
    1126065358: 329,
    1130222655: 553,
    1134007999: 981,
    1147138529: 666,
    1177702941: 1370,
    1183335370: 1271,
    1184080145: 1270,
    1184751542: 1071,
    1192342603: 1514,
    1195420112: 908,
    1206542137: 1143,
    1217708891: 816,
    1239096362: 805,
    1239973294: 1032,
    1246009775: 719,
    1246274482: 565,
    1253803697: 240,
    1262667733: 1091,
    1290147694: 372,
    1300258764: 1508,
    1316762021: 425,
    1319520553: 1497,
    1328640319: 688,
    1333428963: 1309,
    1335491277: 1513,
    1339824442: 552,
    1340609589: 576,
    1349333207: 1190,
    1356761207: 462,
    1359450420: 1510,
    1361492110: 550,
    1374398953: 1421,
    1377106353: 1452,
    1381535578: 23,
    1382543473: 1048,
    1385968668: 361,
    1395686017: 1490,
    1423178222: 398,
    1436409438: 1416,
    1438357173: 414,
    1439436418: 563,
    1441764313: 1098,
    1443637636: 1275,
    1443705256: 275,
    1451035184: 1499,
    1457946919: 1491,
    1468277768: 326,
    1487063298: 1476,
    1487206153: 638,
    1494818110: 1428,
    1503604349: 1334,
    1504709060: 1444,
    1504978158: 1194,
    1511900399: 1422,
    1512305702: 516,
    1512328611: 517,
    1512329572: 518,
    1512330533: 519,
    1527328330: 632,
    1531688688: 1360,
    1533679583: 1451,
    1534857586: 6,
    1545430044: 1520,
    1560273348: 1457,
    1567755458: 789,
    1567967952: 1478,
    1570417363: 568,
    1590793109: 907,
    1593083093: 971,
    1594751089: 1496,
    1595615627: 992,
    1599799766: 566,
    1602127678: 727,
    1616473983: 997,
    1617794646: 958,
    1636017482: 1423,
    1656184483: 352,
    1657216666: 614,
    1662627922: 239,
    1668772609: 426,
    1684032475: 378,
    1685058948: 738,
    1708423701: 1391,
    1708996738: 1253,
    1719310160: 871,
    1722382468: 561,
    1723219953: 1485,
    1728720384: 1016,
    1729953971: 1487,
    1763886776: 1419,
    1773256614: 1075,
    1773274056: 346,
    1780263711: 354,
    1781164957: 1521,
    1784464330: 792,
    1798746232: 857,
    1801708981: 795,
    1810504196: 1129,
    1819586217: 1197,
    1842376055: 769,
    1844035516: 979,
    1897119308: 755,
    1900168684: 339,
    1916788996: 324,
    1936504160: 1264,
    1940196608: 369,
    1952011986: 1371,
    1956871672: 549,
    1963542466: 506,
    1963542497: 507,
    1963543429: 497,
    1968325416: 852,
    1999578923: 1276,
    2012295797: 765,
    2013630346: 700,
    2014691319: 829,
    2021268764: 1462,
    2021643861: 1089,
    2024898463: 1463,
    2050020977: 8,
    2050520578: 397,
    2051541659: 1049,
    2060484826: 486,
    2063778005: 1232,
    2071452147: 238,
    2073362226: 322,
    2078992311: 1343,
    2089356989: 1211,
    2095696735: 1267,
    2119684323: 284,
    2126145146: 1481,
    2128042586: 1132,
    2144060088: 1493,
    2158210177: 573,
    2162260770: 345,
    2166021076: 990,
    2166383361: 1038,
    2191063970: 420,
    2191580912: 843,
    2197441454: 323,
    2209229353: 752,
    2216748828: 793,
    2218199825: 1329,
    2219180156: 332,
    2229065251: 567,
    2233866778: 658,
    2270822262: 410,
    2272375146: 1130,
    2300350682: 657,
    2316731765: 340,
    2317167408: 1123,
    2318995208: 545,
    2333306170: 1469,
    2338720370: 1453,
    2339455030: 730,
    2372265889: 535,
    2372909226: 740,
    2386173495: 1446,
    2388512233: 1161,
    2390970879: 1230,
    2393805029: 1366,
    2394294039: 1141,
    2398304958: 1035,
    2405692728: 1468,
    2411634130: 1105,
    2411897922: 1432,
    2416350101: 1424,
    2417193302: 1447,
    2417645810: 1052,
    2428714253: 1354,
    2440583958: 351,
    2447666785: 90000,
    2448213109: 1448,
    2462828027: 1170,
    2478079286: 1466,
    2480276372: 237,
    2484472912: 1261,
    2490768890: 1412,
    2490849209: 1356,
    2496011615: 1471,
    2496318452: 343,
    2498909557: 849,
    2506152333: 634,
    2507769487: 838,
    2511685832: 935,
    2519714987: 1386,
    2521953536: 1278,
    2526472909: 1094,
    2530741854: 1461,
    2536057160: 1085,
    2549401371: 279,
    2549487489: 1106,
    2552884313: 1492,
    2556379449: 692,
    2557351864: 250,
    2558272496: 1283,
    2588058705: 863,
    2594339949: 1000,
    2594897405: 921,
    2625311500: 1519,
    2635069113: 350,
    2635610952: 1003,
    2647134609: 1439,
    2654909467: 1483,
    2655445997: 1498,
    2665399946: 578,
    2669101951: 1293,
    2685049284: 360,
    2699974977: 637,
    2701377073: 620,
    2706590771: 1120,
    2712986342: 699,
    2718990503: 1209,
    2725364030: 1062,
    2725721152: 1296,
    2730040241: 474,
    2760758738: 1039,
    2768702777: 251,
    2777563859: 1254,
    2785402207: 379,
    2785478399: 1460,
    2789297334: 1108,
    2790041402: 723,
    2796114153: 1355,
    2797336458: 1160,
    2827188447: 532,
    2838387747: 15,
    2845667947: 1443,
    2854908112: 1321,
    2855358615: 328,
    2862409070: 973,
    2865763914: 1503,
    2898392369: 1260,
    2900221256: 1299,
    2905203008: 757,
    2909094588: 913,
    2928388360: 272,
    2928662509: 1149,
    2929388041: 705,
    2939901347: 1243,
    2941594745: 1396,
    2944311742: 1007,
    2951372119: 528,
    2951372150: 529,
    2951372181: 530,
    2953456002: 234,
    2954184529: 1511,
    2955336087: 875,
    2970823336: 870,
    2978686404: 844,
    2980053690: 252,
    3006922194: 1456,
    3011191863: 865,
    3020007217: 1307,
    3026063943: 236,
    3028355607: 562,
    3029901419: 924,
    3033502048: 325,
    3040214944: 1459,
    3056002894: 673,
    3063904131: 989,
    3066483275: 739,
    3073202395: 477,
    3073344404: 571,
    3079818810: 803,
    3082902428: 683,
    3083960905: 1445,
    3085548015: 1331,
    3100404492: 1442,
    3104247869: 1014,
    3111274207: 412,
    3115308537: 268,
    3119746818: 1415,
    3126975016: 1274,
    3136259968: 334,
    3138247270: 1131,
    3147943789: 1136,
    3159166921: 1502,
    3160408807: 564,
    3166404415: 830,
    3181803500: 835,
    3186623251: 554,
    3189287851: 784,
    3191404603: 253,
    3199408117: 471,
    3210509154: 633,
    3240447949: 373,
    3245234193: 547,
    3254094882: 1114,
    3254235774: 540,
    3280232769: 157,
    3296164190: 538,
    3300334387: 1454,
    3314298997: 714,
    3314299028: 715,
    3334582101: 560,
    3336748182: 1165,
    3337652724: 417,
    3353579557: 1046,
    3355141037: 1441,
    3363579726: 364,
    3365388042: 867,
    3368714385: 558,
    3371043811: 570,
    3372660351: 747,
    3384859890: 881,
    3407519265: 543,
    3407873828: 862,
    3407933410: 861,
    3410840519: 588,
    3411677127: 721,
    3413353028: 1324,
    3424412820: 947,
    3425280540: 1164,
    3428606463: 1115,
    3433056752: 1358,
    3433282063: 401,
    3439419026: 480,
    3439562815: 548,
    3444167617: 1348,
    3444359654: 1333,
    3446366674: 1407,
    3447587934: 800,
    3459501556: 402,
    3485046361: 794,
    3493753543: 266,
    3495773092: 903,
    3503095621: 1272,
    3505768833: 745,
    3512253432: 572,
    3512543299: 631,
    3515570467: 347,
    3528839656: 1426,
    3558267571: 1437,
    3558310742: 790,
    3561106566: 22,
    3566116234: 601,
    3571116628: 729,
    3575056523: 1501,
    3585233185: 413,
    3588112543: 1229,
    3595585810: 1187,
    3599017778: 1458,
    3612187985: 929,
    3615960989: 1489,
    3641619803: 473,
    3656013142: 1022,
    3668539927: 19,
    3669158986: 1051,
    3671022364: 377,
    3676802358: 933,
    3679855436: 1515,
    3680551577: 556,
    3681100460: 580,
    3683153468: 668,
    3688379856: 961,
    3691280643: 472,
    3695015929: 423,
    3696958160: 917,
    3720753050: 433,
    3726839486: 1225,
    3726979590: 1259,
    3746460155: 1029,
    3761344792: 534,
    3770680039: 394,
    3781739436: 1434,
    3782892125: 922,
    3784660342: 1221,
    3787351268: 1395,
    3791566500: 786,
    3802450685: 1240,
    3811411749: 974,
    3811931626: 1090,
    3815582848: 822,
    3817079708: 416,
    3829772550: 708,
    3838920029: 1436,
    3841169682: 735,
    3860611538: 1435,
    3864290924: 1001,
    3869871493: 597,
    3877791050: 1387,
    3878722647: 847,
    3879651989: 428,
    3892566733: 751,
    3898892225: 1388,
    3901127369: 1342,
    3901752377: 220,
    3913943871: 1440,
    3935360859: 1255,
    3940472288: 228,
    3948034980: 1072,
    3953813013: 608,
    3957131580: 245,
    3959504706: 612,
    3960755413: 422,
    3963770009: 536,
    3970663899: 539,
    3971594072: 919,
    3998729920: 579,
    4000640985: 920,
    4001946133: 1061,
    4006276139: 1427,
    4015801866: 988,
    4016467011: 927,
    4018418522: 639,
    4019366629: 964,
    4033900115: 621,
    4042337598: 840,
    4055852968: 1482,
    4060276647: 201,
    4067758857: 551,
    4086909547: 1112,
    4094266741: 824,
    4096662418: 669,
    4112701319: 1350,
    4115234265: 1335,
    4134881937: 400,
    4147772588: 991,
    4158937794: 470,
    4159593286: 2,
    4161225624: 431,
    4168238515: 49,
    4170711863: 1404,
    4186059463: 353,
    4193448777: 1040,
    4194772939: 904,
    4197060136: 546,
    4197487557: 1177,
    4205883401: 936,
    4218377983: 233,
    4235375515: 987,
    4236696081: 349,
    4242918074: 533,
    4253201702: 330,
    4254919066: 1431,
    4266036018: 18,
    4274905865: 1332,
    4275556596: 845,
};
