import images from '../assets/images';

export const LEAGUE_START_DATE = new Date('2023-06-01T12:00:00+00:00');
export const LEAGUE_END_DATE = new Date('2023-07-15T12:00:00+00:00');

export const PASSIVE_RELICS = {
  unlockThresholds: [0, 10, 300, 1500, 3000, 7500, 15000],
  tiers: {
    1: {
      points: 0,
      expMultiplier: 5,
      expMultiplierIncrease: true,
      dropMultiplier: 1,
      dropMultiplierIncrease: false,
      extras: ['Free combat fragment'],
    },
    2: {
      points: 10,
      expMultiplier: 5,
      expMultiplierIncrease: false,
      dropMultiplier: 1,
      dropMultiplierIncrease: false,
      extras: ['Unlimited run energy', 'Stackable clues', 'Smooth Criminal fragment'],
    },
    3: {
      points: 300,
      expMultiplier: 8,
      expMultiplierIncrease: true,
      dropMultiplier: 1,
      dropMultiplierIncrease: false,
      extras: ['Double Kourend favour', 'Stackable clues', 'Random combat fragment'],
    },
    4: {
      points: 1500,
      expMultiplier: 8,
      expMultiplierIncrease: false,
      dropMultiplier: 2,
      dropMultiplierIncrease: true,
      extras: ['Random skilling fragment'],
    },
    5: {
      points: 3000,
      expMultiplier: 12,
      expMultiplierIncrease: true,
      dropMultiplier: 2,
      dropMultiplierIncrease: false,
      extras: ['Random combat fragment'],
    },
    6: {
      points: 7500,
      expMultiplier: 12,
      expMultiplierIncrease: false,
      dropMultiplier: 3,
      dropMultiplierIncrease: true,
      extras: ['Ability to choose slayer tasks'],
    },
    7: {
      points: 15000,
      expMultiplier: 16,
      expMultiplierIncrease: true,
      dropMultiplier: 3,
      dropMultiplierIncrease: false,
      extras: ['Random combat fragment'],
    },
  },
};

export const STATS = {
  Agility: {
    label: 'Agility',
    panelOrder: 4,
    icon: images['agility.gif'],
    iconMini: images['task-agility.png'],
    isPossibleTutorialUnlock: false,
    unlockCost: 5,
    unchainedTalentEligible: true,
  },
  Attack: {
    label: 'Attack',
    panelOrder: 0,
    icon: images['attack.gif'],
    iconMini: images['task-attack.png'],
    isPossibleTutorialUnlock: true,
    unlockCost: 10,
    unchainedTalentEligible: false,
  },
  Construction: {
    label: 'Construction',
    panelOrder: 21,
    icon: images['construction.gif'],
    iconMini: images['task-construction.png'],
    isPossibleTutorialUnlock: false,
    unlockCost: 15,
    unchainedTalentEligible: true,
  },
  Cooking: {
    label: 'Cooking',
    panelOrder: 11,
    icon: images['cooking.gif'],
    iconMini: images['task-cooking.png'],
    isPossibleTutorialUnlock: false,
    unlockCost: 10,
    unchainedTalentEligible: true,
  },
  Crafting: {
    label: 'Crafting',
    panelOrder: 13,
    icon: images['crafting.gif'],
    iconMini: images['task-crafting.png'],
    isPossibleTutorialUnlock: false,
    unlockCost: 15,
    unchainedTalentEligible: true,
  },
  Defence: {
    label: 'Defence',
    panelOrder: 6,
    icon: images['defence.gif'],
    iconMini: images['task-defence.png'],
    isPossibleTutorialUnlock: false,
    unlockCost: 0,
    unchainedTalentEligible: false,
  },
  Farming: {
    label: 'Farming',
    panelOrder: 20,
    icon: images['farming.gif'],
    iconMini: images['task-farming.png'],
    isPossibleTutorialUnlock: false,
    unlockCost: 10,
    unchainedTalentEligible: true,
  },
  Firemaking: {
    label: 'Firemaking',
    panelOrder: 14,
    icon: images['firemaking.gif'],
    iconMini: images['task-firemaking.png'],
    isPossibleTutorialUnlock: false,
    unlockCost: 5,
    unchainedTalentEligible: true,
  },
  Fishing: {
    label: 'Fishing',
    panelOrder: 8,
    icon: images['fishing.gif'],
    iconMini: images['task-fishing.png'],
    isPossibleTutorialUnlock: false,
    unlockCost: 0,
    unchainedTalentEligible: true,
  },
  Fletching: {
    label: 'Fletching',
    panelOrder: 16,
    icon: images['fletching.gif'],
    iconMini: images['task-fletching.png'],
    isPossibleTutorialUnlock: false,
    unlockCost: 10,
    unchainedTalentEligible: true,
  },
  Herblore: {
    label: 'Herblore',
    panelOrder: 7,
    icon: images['herblore.gif'],
    iconMini: images['task-herblore.png'],
    isPossibleTutorialUnlock: false,
    unlockCost: 15,
    unchainedTalentEligible: true,
  },
  Hitpoints: {
    label: 'Hitpoints',
    panelOrder: 1,
    icon: images['hitpoints.gif'],
    iconMini: images['task-hitpoints.png'],
    isPossibleTutorialUnlock: false,
    unlockCost: 5,
    unchainedTalentEligible: false,
  },
  Hunter: {
    label: 'Hunter',
    panelOrder: 22,
    icon: images['hunter.gif'],
    iconMini: images['task-hunter.png'],
    isPossibleTutorialUnlock: false,
    unlockCost: 5,
    unchainedTalentEligible: true,
  },
  Magic: {
    label: 'Magic',
    panelOrder: 15,
    icon: images['magic.gif'],
    iconMini: images['task-magic.png'],
    isPossibleTutorialUnlock: true,
    unlockCost: 10,
    unchainedTalentEligible: false,
  },
  Mining: {
    label: 'Mining',
    panelOrder: 2,
    icon: images['mining.gif'],
    iconMini: images['task-mining.png'],
    isPossibleTutorialUnlock: false,
    unlockCost: 5,
    unchainedTalentEligible: true,
  },
  Prayer: {
    label: 'Prayer',
    panelOrder: 12,
    icon: images['prayer.gif'],
    iconMini: images['task-prayer.png'],
    isPossibleTutorialUnlock: false,
    unlockCost: 15,
    unchainedTalentEligible: false,
  },
  Ranged: {
    label: 'Ranged',
    panelOrder: 9,
    icon: images['ranged.gif'],
    iconMini: images['task-ranged.png'],
    isPossibleTutorialUnlock: true,
    unlockCost: 10,
    unchainedTalentEligible: false,
  },
  Runecraft: {
    label: 'Runecraft',
    panelOrder: 18,
    icon: images['runecraft.gif'],
    iconMini: images['task-runecraft.png'],
    isPossibleTutorialUnlock: false,
    unlockCost: 5,
    unchainedTalentEligible: true,
  },
  Slayer: {
    label: 'Slayer',
    panelOrder: 19,
    icon: images['slayer.gif'],
    iconMini: images['task-slayer.png'],
    isPossibleTutorialUnlock: false,
    unlockCost: 15,
    unchainedTalentEligible: true,
  },
  Smithing: {
    label: 'Smithing',
    panelOrder: 5,
    icon: images['smithing.gif'],
    iconMini: images['task-smithing.png'],
    isPossibleTutorialUnlock: false,
    unlockCost: 10,
    unchainedTalentEligible: true,
  },
  Strength: {
    label: 'Strength',
    panelOrder: 3,
    icon: images['strength.gif'],
    iconMini: images['task-strength.png'],
    isPossibleTutorialUnlock: false,
    unlockCost: 10,
    unchainedTalentEligible: false,
  },
  Thieving: {
    label: 'Thieving',
    panelOrder: 10,
    icon: images['thieving.gif'],
    iconMini: images['task-thieving.png'],
    isPossibleTutorialUnlock: false,
    unlockCost: 0,
    unchainedTalentEligible: true,
  },
  Woodcutting: {
    label: 'Woodcutting',
    panelOrder: 17,
    icon: images['woodcutting.gif'],
    iconMini: images['task-woodcutting.png'],
    isPossibleTutorialUnlock: false,
    unlockCost: 5,
    unchainedTalentEligible: true,
  },
  Overall: {
    label: 'Overall',
    panelOrder: 23,
    icon: images['task-total.png'],
    iconMini: images['task-total.png'],
    isPossibleTutorialUnlock: null,
    unlockCost: null,
    unchainedTalentEligible: false,
  },
  Combat: {
    label: 'Combat',
    panelOrder: null,
    icon: images['combat.png'],
    iconMini: images['task-combat.png'],
    isPossibleTutorialUnlock: null,
    unlockCost: null,
    unchainedTalentEligible: false,
  },
  QP: {
    label: 'Quest points',
    panelOrder: null,
    icon: images['tab-quests.png'],
    iconMini: images['task-quest.png'],
    isPossibleTutorialUnlock: null,
    unlockCost: null,
    unchainedTalentEligible: false,
  },
};

export const BOSSES = {
  ABYSSAL_SIRE: {
    hiscoresName: 'abyssalSire',
    label: 'Abyssal Sire',
    unlockCost: 20,
    icon: images['abyssal-sire.png'],
    isGroupedWith: [],
  },
  ALCHEMICAL_HYDRA: {
    hiscoresName: 'alchemicalHydra',
    label: 'Alchemical Hydra',
    unlockCost: 30,
    icon: images['alchemical-hydra.png'],
    isGroupedWith: [],
  },
  BARROWS: {
    hiscoresName: 'barrows',
    label: 'Barrows',
    unlockCost: 15,
    icon: images['barrows.png'],
    isGroupedWith: [],
  },
  BRYOPHYTA: {
    hiscoresName: 'bryophyta',
    label: 'Bryophyta',
    unlockCost: 5,
    icon: images['bryophyta.png'],
    isGroupedWith: [],
  },
  CALLISTO: {
    hiscoresName: 'callisto',
    label: 'Callisto',
    unlockCost: null,
    icon: images['callisto.png'],
    isDefaultUnlock: true,
    isGroupedWith: [],
  },
  CERBERUS: {
    hiscoresName: 'cerberus',
    label: 'Cerberus',
    unlockCost: 20,
    icon: images['cerberus.png'],
    isGroupedWith: [],
  },
  CHAMBERS_OF_XERIC: {
    hiscoresName: 'chambersOfXeric',
    label: 'Chambers of Xeric',
    unlockCost: 20,
    icon: images['chambers-of-xeric.png'],
    isGroupedWith: ['Chambers of Xeric: Challenge Mode'],
  },
  CHAMBERS_OF_XERIC_CHALLENGE_MODE: {
    hiscoresName: 'chambersOfXericChallengeMode',
    label: 'Chambers of Xeric: Challenge Mode',
    unlockCost: 20,
    icon: images['chambers-of-xeric-challenge-mode.png'],
    isGroupedWith: ['Chambers Of Xeric'],
  },
  CHAOS_ELEMENTAL: {
    hiscoresName: 'chaosElemental',
    label: 'Chaos Elemental',
    unlockCost: null,
    icon: images['chaos-elemental.png'],
    isDefaultUnlock: true,
    isGroupedWith: [],
  },
  CHAOS_FANATIC: {
    hiscoresName: 'chaosFanatic',
    label: 'Chaos Fanatic',
    unlockCost: null,
    icon: images['chaos-fanatic.png'],
    isDefaultUnlock: true,
    isGroupedWith: [],
  },
  COMMANDER_ZILYANA: {
    hiscoresName: 'commanderZilyana',
    label: 'Commander Zilyana',
    unlockCost: 30,
    icon: images['commander-zilyana.png'],
    isGroupedWith: [],
  },
  CORPOREAL_BEAST: {
    hiscoresName: 'corporealBeast',
    label: 'Corporeal Beast',
    unlockCost: 30,
    icon: images['corporeal-beast.png'],
    isGroupedWith: [],
  },
  CRAZY_ARCHAEOLOGIST: {
    hiscoresName: 'crazyArchaeologist',
    label: 'Crazy Archaeologist',
    unlockCost: null,
    icon: images['crazy-archaeologist.png'],
    isDefaultUnlock: true,
    isGroupedWith: [],
  },
  DAGANNOTH_PRIME: {
    hiscoresName: 'dagannothPrime',
    label: 'Dagannoth Prime',
    unlockCost: 15,
    icon: images['dagannoth-prime.png'],
    isGroupedWith: ['Dagannoth Rex', 'Dagannoth Supreme'],
  },
  DAGANNOTH_REX: {
    hiscoresName: 'dagannothRex',
    label: 'Dagannoth Rex',
    unlockCost: 15,
    icon: images['dagannoth-rex.png'],
    isGroupedWith: ['Dagannoth Prime', 'Dagannoth Supreme'],
  },
  DAGANNOTH_SUPREME: {
    hiscoresName: 'dagannothSupreme',
    label: 'Dagannoth Supreme',
    unlockCost: 15,
    icon: images['dagannoth-supreme.png'],
    isGroupedWith: ['Dagannoth Prime', 'Dagannoth Rex'],
  },
  DERANGED_ARCHAEOLOGIST: {
    hiscoresName: 'derangedArchaeologist',
    label: 'Deranged Archaeologist',
    unlockCost: null,
    icon: images['deranged-archaeologist.png'],
    isDefaultUnlock: true,
    isGroupedWith: [],
  },
  GENERAL_GRAARDOR: {
    hiscoresName: 'generalGraardor',
    label: 'General Graardor',
    unlockCost: 30,
    icon: images['general-graardor.png'],
    isGroupedWith: [],
  },
  GIANT_MOLE: {
    hiscoresName: 'giantMole',
    label: 'Giant Mole',
    unlockCost: 10,
    icon: images['giant-mole.png'],
    isGroupedWith: [],
  },
  GROTESQUE_GUARDIANS: {
    hiscoresName: 'grotesqueGuardians',
    label: 'Grotesque Guardians',
    unlockCost: 10,
    icon: images['grotesque-guardians.png'],
    isGroupedWith: [],
  },
  HESPORI: {
    hiscoresName: 'hespori',
    label: 'Hespori',
    unlockCost: 5,
    icon: images['hespori.png'],
    isGroupedWith: [],
  },
  KALPHITE_QUEEN: {
    hiscoresName: 'kalphiteQueen',
    label: 'Kalphite Queen',
    unlockCost: 10,
    icon: images['kalphite-queen.png'],
    isGroupedWith: [],
  },
  KING_BLACK_DRAGON: {
    hiscoresName: 'kingBlackDragon',
    label: 'King Black Dragon',
    unlockCost: 10,
    icon: images['king-black-dragon.png'],
    isGroupedWith: [],
  },
  KRAKEN: {
    hiscoresName: 'kraken',
    label: 'Kraken',
    unlockCost: 20,
    icon: images['kraken.png'],
    isGroupedWith: [],
  },
  KREEARRA: {
    hiscoresName: 'kreeArra',
    label: "Kree'Arra",
    unlockCost: 30,
    icon: images['kreearra.png'],
    isGroupedWith: [],
  },
  KRIL_TSUTSAROTH: {
    hiscoresName: 'krilTsutsaroth',
    label: "K'ril Tsutsaroth",
    unlockCost: 30,
    icon: images['kril-tsutsaroth.png'],
    isGroupedWith: [],
  },
  MIMIC: {
    hiscoresName: 'mimic',
    label: 'Mimic',
    unlockCost: null,
    icon: images['mimic.png'],
    isDefaultUnlock: true,
    isGroupedWith: [],
  },
  NEX: {
    hiscoresName: 'nex',
    label: 'Nex',
    unlockCost: 15,
    icon: images['nex.png'],
    isGroupedWith: [],
  },
  NIGHTMARE: {
    hiscoresName: 'nightmare',
    label: 'Nightmare',
    unlockCost: 30,
    icon: images['nightmare.png'],
    isGroupedWith: ["Phosani's Nightmare"],
  },
  PHOSANIS_NIGHTMARE: {
    hiscoresName: 'phosanisNightmare',
    label: "Phosani's Nightmare",
    unlockCost: 30,
    icon: images['phosanis-nightmare.png'],
    isGroupedWith: ['Nightmare'],
  },
  OBOR: {
    hiscoresName: 'obor',
    label: 'Obor',
    unlockCost: 5,
    icon: images['obor.png'],
    isGroupedWith: [],
  },
  SARACHNIS: {
    hiscoresName: 'sarachnis',
    label: 'Sarachnis',
    unlockCost: 10,
    icon: images['sarachnis.png'],
    isGroupedWith: [],
  },
  SCORPIA: {
    hiscoresName: 'scorpia',
    label: 'Scorpia',
    unlockCost: null,
    icon: images['scorpia.png'],
    isDefaultUnlock: true,
    isGroupedWith: [],
  },
  SKOTIZO: {
    hiscoresName: 'skotizo',
    label: 'Skotizo',
    unlockCost: 5,
    icon: images['skotizo.png'],
    isGroupedWith: [],
  },
  TEMPOROSS: {
    hiscoresName: 'tempoross',
    label: 'Tempoross',
    unlockCost: 10,
    icon: images['tempoross.png'],
    isGroupedWith: [],
  },
  GAUNTLET: {
    hiscoresName: 'gauntlet',
    label: 'The Gauntlet',
    unlockCost: 30,
    icon: images['the-gauntlet.png'],
    isGroupedWith: ['The Corrupted Gauntlet'],
  },
  CORRUPTED_GAUNTLET: {
    hiscoresName: 'corruptedGauntlet',
    label: 'The Corrupted Gauntlet',
    unlockCost: 30,
    icon: images['the-corrupted-gauntlet.png'],
    isGroupedWith: ['The Gauntlet'],
  },
  THEATRE_OF_BLOOD: {
    hiscoresName: 'theatreOfBlood',
    label: 'Theatre of Blood',
    unlockCost: 35,
    icon: images['theatre-of-blood.png'],
    isGroupedWith: ['Theatre of Blood: Hard Mode'],
  },
  THEATRE_OF_BLOOD_HARD_MODE: {
    hiscoresName: 'theatreOfBloodHardMode',
    label: 'Theatre of Blood: Hard Mode',
    unlockCost: 35,
    icon: images['theatre-of-blood-hard-mode.png'],
    isGroupedWith: ['Theatre of Blood'],
  },
  THERMONUCLEAR_SMOKE_DEVIL: {
    hiscoresName: 'thermonuclearSmokeDevil',
    label: 'Thermonuclear Smoke Devil',
    unlockCost: 20,
    icon: images['thermonuclear-smoke-devil.png'],
    isGroupedWith: [],
  },
  TZKAL_ZUK: {
    hiscoresName: 'tzKalZuk',
    label: 'TzKal-Zuk',
    unlockCost: null,
    icon: images['tzkal-zuk.png'],
    isDefaultUnlock: true,
    isGroupedWith: [],
  },
  TZTOK_JAD: {
    hiscoresName: 'tzTokJad',
    label: 'TzTok-Jad',
    unlockCost: null,
    icon: images['tztok-jad.png'],
    isDefaultUnlock: true,
    isGroupedWith: [],
  },
  VENENATIS: {
    hiscoresName: 'venenatis',
    label: 'Venenatis',
    unlockCost: null,
    icon: images['venenatis.png'],
    isDefaultUnlock: true,
    isGroupedWith: [],
  },
  VETION: {
    hiscoresName: 'vetion',
    label: "Vet'ion",
    unlockCost: null,
    icon: images['vetion.png'],
    isDefaultUnlock: true,
    isGroupedWith: [],
  },
  VORKATH: {
    hiscoresName: 'vorkath',
    label: 'Vorkath',
    unlockCost: 30,
    icon: images['vorkath.png'],
    isGroupedWith: [],
  },
  WINTERTODT: {
    hiscoresName: 'wintertodt',
    label: 'Wintertodt',
    unlockCost: 10,
    icon: images['wintertodt.png'],
    isGroupedWith: [],
  },
  ZALCANO: {
    hiscoresName: 'zalcano',
    label: 'Zalcano',
    unlockCost: 15,
    icon: images['zalcano.png'],
    isGroupedWith: [],
  },
  ZULRAH: {
    hiscoresName: 'zulrah',
    label: 'Zulrah',
    unlockCost: 30,
    icon: images['zulrah.png'],
    isGroupedWith: [],
  },
};

export const DIFFICULTY = {
  BEGINNER: {
    label: 'Beginner',
    value: 5,
    renown: 1,
    icon: images['task-beginner.png'],
    sortOrder: 0,
  },
  EASY: {
    label: 'Easy',
    value: 5,
    renown: 1,
    icon: images['task-easy.png'],
    sortOrder: 1,
  },
  MEDIUM: {
    label: 'Medium',
    value: 25,
    renown: 2,
    icon: images['task-medium.png'],
    sortOrder: 2,
  },
  HARD: {
    label: 'Hard',
    value: 50,
    renown: 3,
    icon: images['task-hard.png'],
    sortOrder: 3,
  },
  ELITE: {
    label: 'Elite',
    value: 125,
    renown: 4,
    icon: images['task-elite.png'],
    sortOrder: 4,
  },
  MASTER: {
    label: 'Master',
    value: 250,
    renown: 5,
    icon: images['task-master.png'],
    sortOrder: 5,
  },
};

export const QUEST_DIFFICULTY = {
  NOVICE: {
    id: 0,
    label: 'Novice',
    icon: images['task-bronze-star.png'],
  },
  INTERMEDIATE: {
    id: 1,
    label: 'Intermediate',
    icon: images['task-silver-star.png'],
  },
  EXPERIENCED: {
    id: 2,
    label: 'Experienced',
    icon: images['task-gold-star.png'],
  },
  MASTER: {
    id: 3,
    label: 'Master',
    icon: images['task-two-stars.png'],
  },
  GRANDMASTER: {
    id: 4,
    label: 'Grandmaster',
    icon: images['task-three-stars.png'],
  },
};

export const QUEST_LENGTH = {
  VERY_SHORT: {
    id: 0,
    label: 'Very Short',
    icon: images['task-bronze-sword.png'],
  },
  SHORT: {
    id: 1,
    label: 'Short',
    icon: images['task-iron-sword.png'],
  },
  MEDIUM: {
    id: 2,
    label: 'Medium',
    icon: images['task-mith-sword.png'],
  },
  LONG: {
    id: 3,
    label: 'Long',
    icon: images['task-rune-sword.png'],
  },
  VERY_LONG: {
    id: 4,
    label: 'Very Long',
    icon: images['task-dragon-sword.png'],
  },
};

export const QUEST_SERIES = {
  CAMELOT: {
    id: 0,
    label: 'Camelot',
    icon: images['task-kandarin.png'],
  },
  DESERT: {
    id: 1,
    label: 'Desert',
    icon: images['task-kharidian.png'],
  },
  DORGESHUUN: {
    id: 2,
    label: 'Dorgeshuun',
    icon: images['task-bandos.png'],
  },
  GUILDS: {
    id: 3,
    label: 'Guilds / Dragonkin',
    icon: images['task-legend.png'],
  },
  ELEMENTAL: {
    id: 4,
    label: 'Elemental Workshop',
    icon: images['task-elemental.png'],
  },
  ELF: {
    id: 5,
    label: 'Elven',
    icon: images['task-tiranwnn.png'],
  },
  GNOME: {
    id: 6,
    label: 'Gnome',
    icon: images['task-gnome.png'],
  },
  FAIRY: {
    id: 7,
    label: 'Fairy Tale',
    icon: images['task-cosmic.png'],
  },
  FREMENNIK: {
    id: 8,
    label: 'Fremennik',
    icon: images['task-fremennik.png'],
  },
  KOUREND: {
    id: 9,
    label: 'Great Kourend',
    icon: images['task-xeric.png'],
  },
  KARAMJA: {
    id: 10,
    label: 'Karamja',
    icon: images['task-karamja.png'],
  },
  MAHJARRAT: {
    id: 11,
    label: 'Mahjarrat / Return of Zaros',
    icon: images['task-zaros.png'],
  },
  MYREQUE: {
    id: 12,
    label: 'Myreque',
    icon: images['task-morytania.png'],
  },
  OGRE: {
    id: 13,
    label: 'Ogre',
    icon: images['task-goblin.png'],
  },
  PIRATE: {
    id: 14,
    label: 'Pirate',
    icon: images['task-steel-scim.png'],
  },
  RED_AXE: {
    id: 15,
    label: 'Rise of the Red Axe',
    icon: images['task-dragon-baxe.png'],
  },
  TEMPLE_KNIGHT: {
    id: 16,
    label: 'Temple Knight / Sea Slug',
    icon: images['task-steel-kite.png'],
  },
  TROLL: {
    id: 17,
    label: 'Troll',
    icon: images['task-bossing.png'],
  },
};

export const SKILL_UNLOCK = {
  13344: STATS.Attack,
  13345: STATS.Strength,
  13348: STATS.Hitpoints,
  13346: STATS.Ranged,
  13349: STATS.Prayer,
  13347: STATS.Magic,
  13356: STATS.Cooking,
  13358: STATS.Woodcutting,
  13359: STATS.Fletching,
  13357: STATS.Firemaking,
  13352: STATS.Crafting,
  13355: STATS.Smithing,
  13354: STATS.Mining,
  13351: STATS.Herblore,
  13350: STATS.Agility,
  13360: STATS.Slayer,
  13361: STATS.Farming,
  13353: STATS.Runecraft,
  13363: STATS.Hunter,
  13362: STATS.Construction,
};

export const QUEST_STATUS = {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  FINISHED: 'FINISHED',
};

export const CLUE_TIERS = ['Beginner', 'Easy', 'Medium', 'Hard', 'Elite', 'Master'];

export const DEFAULT_NOTES_TEXT = '(none)';
