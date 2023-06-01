import images from '../assets/images';
import { STATS } from './constants';

export const ACTIVITIES = {
  AGILITY: {
    label: STATS.Agility.label,
    icon: STATS.Agility.iconMini,
  },
  CLUES: {
    label: 'Clues',
    icon: images['task-clue.png'],
  },
  COMBAT: {
    label: STATS.Combat.label,
    icon: STATS.Combat.iconMini,
  },
  CONSTRUCTION: {
    label: STATS.Construction.label,
    icon: STATS.Construction.iconMini,
  },
  COOKING: {
    label: STATS.Cooking.label,
    icon: STATS.Cooking.iconMini,
  },
  CRAFTING: {
    label: STATS.Crafting.label,
    icon: STATS.Crafting.iconMini,
  },
  FARMING: {
    label: STATS.Farming.label,
    icon: STATS.Farming.iconMini,
  },
  FIREMAKING: {
    label: STATS.Firemaking.label,
    icon: STATS.Firemaking.iconMini,
  },
  FISHING: {
    label: STATS.Fishing.label,
    icon: STATS.Fishing.iconMini,
  },
  FLETCHING: {
    label: STATS.Fletching.label,
    icon: STATS.Fletching.iconMini,
  },
  HERBLORE: {
    label: STATS.Herblore.label,
    icon: STATS.Herblore.iconMini,
  },
  HUNTER: {
    label: STATS.Hunter.label,
    icon: STATS.Hunter.iconMini,
  },
  MAGIC: {
    label: STATS.Magic.label,
    icon: STATS.Magic.iconMini,
  },
  MELEE: {
    label: STATS.Attack.label,
    icon: STATS.Attack.iconMini,
  },
  MINIGAMES: {
    label: 'Minigames',
    icon: images['task-minigame.png'],
  },
  MINING: {
    label: STATS.Mining.label,
    icon: STATS.Mining.iconMini,
  },
  PRAYER: {
    label: STATS.Prayer.label,
    icon: STATS.Prayer.iconMini,
  },
  RANGED: {
    label: STATS.Ranged.label,
    icon: STATS.Ranged.iconMini,
  },
  RUNECRAFT: {
    label: STATS.Runecraft.label,
    icon: STATS.Runecraft.iconMini,
  },
  SLAYER: {
    label: STATS.Slayer.label,
    icon: STATS.Slayer.iconMini,
  },
  SMITHING: {
    label: STATS.Smithing.label,
    icon: STATS.Smithing.iconMini,
  },
  THIEVING: {
    label: STATS.Thieving.label,
    icon: STATS.Thieving.iconMini,
  },
  WOODCUTTING: {
    label: STATS.Woodcutting.label,
    icon: STATS.Woodcutting.iconMini,
  },
};

export const TAGS = {
  ACCURACY: {
    label: 'Accuracy',
    icon: STATS.Attack.iconMini,
  },
  AUTO: {
    label: 'Auto-processing',
    icon: images['spark.png'],
  },
  BANK: {
    label: 'Auto-bank',
    icon: images['chest.png'],
  },
  DPS: {
    label: 'Damage',
    icon: STATS.Strength.iconMini,
  },
  DROPS: {
    label: 'Drop rate',
    icon: images['task-inventory.png'],
  },
  EXP: {
    label: 'Experience',
    icon: images['task-level.png'],
  },
  GOLD: {
    label: 'GP/Currencies',
    icon: images['gold-bar.png'],
  },
  ITEM: {
    label: 'Utility item',
    icon: images['inventory-item.png'],
  },
  MULTI: {
    label: 'Multi-processing',
    icon: images['task-three-stars.png'],
  },
  OUTPUT: {
    label: 'Output multiplier',
    icon: images['green-plus.png'],
  },
  SURVIVABILITY: {
    label: 'Survivability',
    icon: images['restore.png'],
  },
  RESOURCES: {
    label: 'Resource preservation',
    icon: images['oak-tree.png'],
  },
  SUCCESS: {
    label: 'Success rate',
    icon: images['triple-chevron.png'],
  },
  OTHER: {
    label: 'Miscellaneous',
    icon: images['misc.png'],
  },
};

const TYPE = {
  COMBAT: {
    label: STATS.Combat.label,
    icon: STATS.Combat.iconMini,
  },
  HARVEST: {
    label: 'Harvesting',
    icon: STATS.Farming.iconMini,
  },
  OTHER: {
    label: 'Miscellaneous',
    icon: images['misc.png'],
  },
  PRODUCTION: {
    label: 'Production',
    icon: STATS.Crafting.iconMini,
  },
  SKILLING: {
    label: 'Skilling',
    icon: images['task-level.png'],
  },
};

export const SETS = {
  S0: {
    id: 'S0',
    label: 'Absolute Unit',
    levels: [2, 3],
    effect: [
      'You take ',
      ['30%', '50%'],
      ' less damage from monsters, and ',
      ['50%', '100%'],
      ' of post-reduction damage is reflected to the attacker.',
    ],
    affects: [ACTIVITIES.COMBAT],
    tags: [TAGS.SURVIVABILITY, TAGS.DPS],
    icon: images['set-absolute-unit.png'],
  },
  S1: {
    id: 'S1',
    label: 'The Alchemist',
    levels: [3],
    effect: [
      'When cooking food, making jugs of wine, cleaning herbs and making potions, all items in your inventory will be processed at once and reward full experience.',
    ],
    affects: [ACTIVITIES.COOKING, ACTIVITIES.HERBLORE],
    tags: [TAGS.AUTO],
    icon: images['set-the-alchemist.png'],
  },
  S2: {
    id: 'S2',
    label: 'Chain Magic',
    levels: [2, 3],
    effect: [
      'After a successful Magic attack, you have a ',
      ['30%', '60%'],
      ' chance to do another magic attack roll.',
    ],
    affects: [ACTIVITIES.MAGIC],
    tags: [TAGS.DPS],
    icon: images['set-chain-magic.png'],
  },
  S3: {
    id: 'S3',
    label: 'The Craftsman',
    levels: [3],
    effect: [
      'When smelting ores, smithing bars and cannonballs, crafting with leather, glass, uncut gems, pottery, battlestaves, spinning flax and wool, fletching logs and cutting bolt tips, all items in your inventory will be processed at once and reward full experience.',
    ],
    affects: [ACTIVITIES.SMITHING, ACTIVITIES.CRAFTING, ACTIVITIES.FLETCHING],
    tags: [TAGS.AUTO],
    icon: images['set-the-craftsman.png'],
  },
  S4: {
    id: 'S4',
    label: 'Double Tap',
    levels: [2, 3],
    effect: [
      'After a successful Ranged attack, you have a ',
      ['30%', '60%'],
      ' chance to do another ranged attack roll.',
    ],
    affects: [ACTIVITIES.RANGED],
    tags: [TAGS.DPS],
    icon: images['set-double-tap.png'],
  },
  S5: {
    id: 'S5',
    label: "Drakan's Touch",
    levels: [2, 3],
    effect: [
      'Any successful attack has a 50% chance of restoring your hitpoints by ',
      ['5%', '10%'],
      ' of damage dealt.',
    ],
    affects: [ACTIVITIES.COMBAT],
    tags: [TAGS.SURVIVABILITY],
    icon: images["set-drakan's-touch.png"],
  },
  S6: {
    id: 'S6',
    label: 'Endless Knowledge',
    levels: [3],
    effect: ['You gain an item that allows you to swap spellbooks at will.'],
    affects: [ACTIVITIES.MAGIC],
    tags: [TAGS.ITEM],
    icon: images['set-endless-knowledge.png'],
  },
  S7: {
    id: 'S7',
    label: 'Fast Metabolism',
    levels: [2],
    effect: ['Hitpoint regeneration is quadrupled.'],
    affects: [ACTIVITIES.COMBAT],
    tags: [TAGS.SURVIVABILITY],
    icon: images['set-fast-metabolism.png'],
  },
  S8: {
    id: 'S8',
    label: 'Greedy Gatherer',
    levels: [2, 3],
    effect: [
      'You gain ',
      ['double', 'triple'],
      ' resources from Fishing, Woodcutting, Mining and Farming. Experience is granted per resource gathered.',
    ],
    affects: [ACTIVITIES.FISHING, ACTIVITIES.WOODCUTTING, ACTIVITIES.MINING, ACTIVITIES.FARMING],
    tags: [TAGS.OUTPUT],
    icon: images['set-greedy-gatherer.png'],
  },
  S9: {
    id: 'S9',
    label: "Knife's Edge",
    levels: [2, 3],
    effect: ['For every hitpoint missing, you deal ', ['0.3%', '0.6%'], ' additional damage in all combat styles.'],
    affects: [ACTIVITIES.COMBAT],
    tags: [TAGS.DPS],
    icon: images["set-knife's-edge.png"],
  },
  S10: {
    id: 'S10',
    label: 'Last Recall',
    levels: [4],
    effect: [
      'You gain an item that allows you to teleport back to the location where your most recent teleport occurred outside of an instance.',
    ],
    affects: [],
    tags: [TAGS.ITEM],
    icon: images['set-last-recall.png'],
  },
  S11: {
    id: 'S11',
    label: 'Personal Banker',
    levels: [],
    effect: [
      'You have a ',
      ['50%', '100%'],
      ' chance that resources gathered from Fishing, Woodcutting, Mining and Farming will be sent directly to your bank.',
    ],
    affects: [ACTIVITIES.FISHING, ACTIVITIES.WOODCUTTING, ACTIVITIES.MINING, ACTIVITIES.FARMING],
    tags: [TAGS.BANK],
    icon: images['set-personal-banker.png'],
  },
  S12: {
    id: 'S12',
    label: 'Trailblazer',
    levels: [4],
    effect: ['You gain an item which allows you to teleport to major areas.'],
    affects: [],
    tags: [TAGS.ITEM],
    icon: images['set-trailblazer.png'],
  },
  S13: {
    id: 'S13',
    label: 'Twin Strikes',
    levels: [2, 3],
    effect: [
      'After a successful melee attack, you have a ',
      ['30%', '60%'],
      ' chance to do another melee attack roll.',
    ],
    affects: [ACTIVITIES.MELEE],
    tags: [TAGS.DPS],
    icon: images['set-twin-strikes.png'],
  },
  S14: {
    id: 'S14',
    label: 'Unchained Talent',
    levels: [3],
    effect: ['All non-combat skills receive a permanent +8 boost.'],
    affects: [
      ACTIVITIES.RUNECRAFT,
      ACTIVITIES.CONSTRUCTION,
      ACTIVITIES.AGILITY,
      ACTIVITIES.HERBLORE,
      ACTIVITIES.THIEVING,
      ACTIVITIES.CRAFTING,
      ACTIVITIES.FLETCHING,
      ACTIVITIES.SLAYER,
      ACTIVITIES.HUNTER,
      ACTIVITIES.MINING,
      ACTIVITIES.SMITHING,
      ACTIVITIES.FISHING,
      ACTIVITIES.COOKING,
      ACTIVITIES.FIREMAKING,
      ACTIVITIES.WOODCUTTING,
      ACTIVITIES.FARMING,
    ],
    tags: [TAGS.OTHER],
    icon: images['set-unchained-talent.png'],
  },
};

export const FRAGMENTS = {
  1: {
    id: '1',
    label: 'Unholy Warrior',
    type: TYPE.COMBAT,
    effect: ['Melee attacks have ', ['12%', '20%', '30%'], ' more accuracy with 0 Prayer points left.'],
    sets: [SETS.S9, SETS.S12],
    affects: [ACTIVITIES.MAGIC],
    tags: [TAGS.ACCURACY],
  },
  2: {
    id: '2',
    label: 'Tactical Duelist',
    type: TYPE.COMBAT,
    effect: ['Melee weapon charges have a ', ['20%', '40%', '80%'], ' chance to be saved.'],
    sets: [SETS.S13, SETS.S0],
    affects: [ACTIVITIES.MELEE],
    tags: [TAGS.RESOURCES],
  },
  3: {
    id: '3',
    label: 'Unholy Ranger',
    type: TYPE.COMBAT,
    effect: [
      'Ranged attacks have ',
      ['30%', '60%', '100%'],
      " better accuracy with 0 prayer remaining. Doesn't include dwarf multicannon.",
    ],
    sets: [SETS.S4, SETS.S5],
    affects: [ACTIVITIES.RANGED],
    tags: [TAGS.ACCURACY],
  },
  4: {
    id: '4',
    label: 'Bottomless Quiver',
    type: TYPE.COMBAT,
    effect: [
      'Ranged ammunition and weapon charges have a ',
      ['40%', '60%', '90%'],
      " chance to be saved. This is a separate roll for ammunition and weapon charge. Doesn't include chinchompas.",
    ],
    sets: [SETS.S9, SETS.S12],
    affects: [ACTIVITIES.RANGED],
    tags: [TAGS.RESOURCES],
  },
  5: {
    id: '5',
    label: 'Unholy Wizard',
    type: TYPE.COMBAT,
    effect: ['Magic attacks have ', ['40%', '70%', '125%'], ' better accuracy with 0 prayer left.'],
    sets: [SETS.S2, SETS.S5],
    affects: [ACTIVITIES.MELEE],
    tags: [TAGS.ACCURACY],
  },
  6: {
    id: '6',
    label: 'Arcane Conduit',
    type: TYPE.COMBAT,
    effect: ['Magic runes & magic weapon charges have a ', ['40%', '60%', '90%'], ' chance to be saved.'],
    sets: [SETS.S6, SETS.S12],
    affects: [ACTIVITIES.MAGIC],
    tags: [TAGS.RESOURCES],
  },
  7: {
    id: '7',
    label: 'Thrall Damage',
    type: TYPE.COMBAT,
    effect: ['Summoned creatures deal ', ['100%', '200%', '300%'], ' more damage. The damage is rounded up.'],
    sets: [SETS.S2, SETS.S6],
    affects: [ACTIVITIES.COMBAT],
    tags: [TAGS.DPS],
  },
  8: {
    id: '8',
    label: "Livin' On A Prayer",
    type: TYPE.COMBAT,
    effect: ['Prayer drains ', ['15%', '30%', '60%'], ' slower.'],
    sets: [SETS.S9, SETS.S13],
    affects: [ACTIVITIES.PRAYER, ACTIVITIES.COMBAT],
    tags: [TAGS.OTHER],
  },
  9: {
    id: '9',
    label: 'Divine Restoration',
    type: TYPE.COMBAT,
    effect: ['1 prayer points will restore every ', ['15', '9', '3.6'], ' seconds.'],
    sets: [SETS.S0, SETS.S13],
    affects: [ACTIVITIES.PRAYER, ACTIVITIES.COMBAT],
    tags: [TAGS.SURVIVABILITY],
  },
  10: {
    id: '10',
    label: 'Praying Respects',
    type: TYPE.SKILLING,
    effect: ['Bones and ashes are auto buried and scattered with ', ['50%', '100%', '200%'], ' experience.'],
    sets: [SETS.S9, SETS.S5],
    affects: [ACTIVITIES.PRAYER],
    tags: [TAGS.EXP, TAGS.AUTO],
  },
  11: {
    id: '11',
    label: 'Larger Recharger',
    type: TYPE.COMBAT,
    effect: ['Special attack points are restored by 10% every ', ['25s', '20s', '10s'], '.'],
    sets: [SETS.S7, SETS.S5],
    affects: [ACTIVITIES.COMBAT],
    tags: [TAGS.OTHER],
  },
  12: {
    id: '12',
    label: 'Special Discount',
    type: TYPE.COMBAT,
    effect: [
      'Special attacks that cost more than ',
      ['50', '40', '25'],
      ' points cost ',
      ['50', '40', '25'],
      ' instead.',
    ],
    sets: [SETS.S13, SETS.S5],
    affects: [ACTIVITIES.COMBAT],
    tags: [TAGS.OTHER],
  },
  13: {
    id: '13',
    label: 'Venomaster',
    type: TYPE.COMBAT,
    effect: [
      'Apply poison and poison immunity. Your attacks have a chance to inflict ',
      ['3', '5', '7'],
      ' poison damage.',
      [
        '',
        ' Additionally, you are immune to being poisoned.',
        ' Additionally, you are immune to being poisoned and venomed.',
      ],
    ],
    sets: [SETS.S7, SETS.S0],
    affects: [ACTIVITIES.COMBAT],
    tags: [TAGS.DPS, TAGS.SURVIVABILITY],
  },
  14: {
    id: '14',
    label: 'Slay All Day',
    type: TYPE.COMBAT,
    effect: ['Killing a slayer monster on task will heal you for ', ['1', '2', '3'], ' hitpoints.'],
    sets: [SETS.S9, SETS.S1],
    affects: [ACTIVITIES.COMBAT, ACTIVITIES.SLAYER],
    tags: [TAGS.SURVIVABILITY],
  },
  15: {
    id: '15',
    label: 'Superior Tracking',
    type: TYPE.COMBAT,
    effect: ['Superior slayer monsters will have a 1 in ', ['150', '100', '30'], ' chance of appearing.'],
    sets: [SETS.S10, SETS.S0],
    affects: [ACTIVITIES.COMBAT, ACTIVITIES.SLAYER],
    tags: [TAGS.DROPS],
  },
  16: {
    id: '16',
    label: "Slay 'n' Pay",
    type: TYPE.COMBAT,
    effect: ['Completing Slayer tasks will award ', ['10%', '20%', '50%'], ' more points.'],
    sets: [SETS.S13, SETS.S10],
    affects: [ACTIVITIES.COMBAT, ACTIVITIES.SLAYER],
    tags: [TAGS.GOLD],
  },
  17: {
    id: '17',
    label: 'Bandosian Might',
    type: TYPE.COMBAT,
    effect: [
      'When wielding four Bandos items, your max hit is increased by ',
      ['1', '2', '4'],
      ' damage per attack speed.',
    ],
    sets: [SETS.S13, SETS.S7],
    affects: [ACTIVITIES.COMBAT],
    tags: [TAGS.DPS],
  },
  18: {
    id: '18',
    label: 'Armadylean Decree',
    type: TYPE.COMBAT,
    effect: [
      'When wielding four Armadyl items, bolt effects have a ',
      ['25%', '50%', '100%'],
      ' increased chance to activate.',
    ],
    sets: [SETS.S4, SETS.S0],
    affects: [ACTIVITIES.RANGED],
    tags: [TAGS.SUCCESS],
  },
  19: {
    id: '19',
    label: 'Zamorakian Sight',
    type: TYPE.COMBAT,
    effect: ['When wielding four Zamorak items, you have ', ['50%', '125%', '250%'], ' increased magic accuracy.'],
    sets: [SETS.S2, SETS.S5],
    affects: [ACTIVITIES.MAGIC],
    tags: [TAGS.ACCURACY],
  },
  20: {
    id: '20',
    label: 'Saradominist Defence',
    type: TYPE.COMBAT,
    effect: [
      "When wielding four Saradomin items, if you've taken damage in the last 2.4 seconds, your max hit is increased by ",
      ['2', '5', '10'],
      '.',
    ],
    sets: [SETS.S0, SETS.S9],
    affects: [ACTIVITIES.COMBAT],
    tags: [TAGS.DPS],
  },
  21: {
    id: '21',
    label: "Chef's Catch",
    type: TYPE.HARVEST,
    effect: [['20%', '35%', '50%'], ' chance that any fish caught is cooked, granting Cooking experience.'],
    sets: [SETS.S8, SETS.S12],
    affects: [ACTIVITIES.FISHING, ACTIVITIES.COOKING],
    tags: [TAGS.AUTO],
  },
  22: {
    id: '22',
    label: 'Catch Of The Day',
    type: TYPE.HARVEST,
    effect: ['All types of Fishing have a 1 in ', ['300', '200', '80'], ' chance to roll the rare drop table.'],
    sets: [SETS.S11, SETS.S14],
    affects: [ACTIVITIES.FISHING],
    tags: [TAGS.OTHER],
  },
  23: {
    id: '23',
    label: 'Smooth Criminal',
    type: TYPE.SKILLING,
    effect: [
      'Chance to successfully pickpocket is increased by ',
      [
        '15%',
        '25%, and you no longer take damage from being stunned',
        '50%, and you no longer take damage from being stunned',
      ],
      '. This stacks with the gloves of silence and Ardougne Diary bonus.',
    ],
    sets: [SETS.S12, SETS.S10],
    affects: [ACTIVITIES.THIEVING],
    tags: [TAGS.SUCCESS],
  },
  24: {
    id: '24',
    label: 'Deeper Pockets',
    type: TYPE.SKILLING,
    effect: [
      ['20%', '50%', '100%'],
      " chance to gain double loot when pickpocketing. This stacks with the Rogue's outfit.",
    ],
    sets: [SETS.S2, SETS.S11],
    affects: [ACTIVITIES.THIEVING],
    tags: [TAGS.OUTPUT],
  },
  25: {
    id: '25',
    label: 'Slash & Burn',
    type: TYPE.HARVEST,
    effect: [['20%', '35%', '50%'], ' chance that chopped logs are burned, granting Firemaking experience.'],
    sets: [SETS.S8, SETS.S14],
    affects: [ACTIVITIES.FIREMAKING, ACTIVITIES.WOODCUTTING],
    tags: [TAGS.AUTO],
  },
  26: {
    id: '26',
    label: 'Homewrecker',
    type: TYPE.HARVEST,
    effect: [
      'Bird nests from Woodcutting have a ',
      ['2', '3', '4'],
      ' times chance of being dropped, and are automatically sent to the bank.',
    ],
    sets: [SETS.S1, SETS.S10],
    affects: [ACTIVITIES.WOODCUTTING],
    tags: [TAGS.DROPS, TAGS.BANK],
  },
  27: {
    id: '27',
    label: 'Hot On The Trail',
    type: TYPE.SKILLING,
    effect: ['Lighting fires gives a ', ['2%', '5%', '10%'], ' chance at receiving a clue scroll.'],
    sets: [SETS.S7, SETS.S2],
    affects: [ACTIVITIES.FIREMAKING, ACTIVITIES.CLUES],
    tags: [TAGS.OTHER],
  },
  28: {
    id: '28',
    label: 'Plank Stretcher',
    type: TYPE.PRODUCTION,
    effect: [['10%', '20%', '50%'], ' chance for all types of planks to not be consumed in Construction.'],
    sets: [SETS.S14, SETS.S6],
    affects: [ACTIVITIES.CONSTRUCTION],
    tags: [TAGS.RESOURCES],
  },
  29: {
    id: '29',
    label: 'Rock Solid',
    type: TYPE.HARVEST,
    effect: [['25%', '50%', '75%'], " chance that iron ore, sandstone and granite doesn't deplete."],
    sets: [SETS.S8, SETS.S7],
    affects: [ACTIVITIES.MINING],
    tags: [TAGS.OTHER],
  },
  30: {
    id: '30',
    label: 'Molten Miner',
    type: TYPE.HARVEST,
    effect: [
      ['20%', '50%', '100%'],
      ' chance that mined ore will be smelted into a bar (if applicable), granting Smithing experience.',
    ],
    sets: [SETS.S8, SETS.S11],
    affects: [ACTIVITIES.MINING, ACTIVITIES.SMITHING],
    tags: [TAGS.AUTO],
  },
  31: {
    id: '31',
    label: 'Smithing Double',
    type: TYPE.PRODUCTION,
    effect: [
      'Smithing at an anvil has a ',
      ['5%', '15%', '30%'],
      ' chance to give two of the end product with full experience.',
    ],
    sets: [SETS.S11, SETS.S4],
    affects: [ACTIVITIES.SMITHING],
    tags: [TAGS.OUTPUT, TAGS.EXP],
  },
  32: {
    id: '32',
    label: 'Rumple-Bow-String',
    type: TYPE.PRODUCTION,
    effect: ['Spin Flax spell yields ', ['10', '15', '28'], ' bowstrings instead of 5.'],
    sets: [SETS.S3, SETS.S4],
    affects: [ACTIVITIES.MAGIC, ACTIVITIES.CRAFTING],
    tags: [TAGS.OUTPUT],
  },
  33: {
    id: '33',
    label: 'Dragon On A Bit',
    type: TYPE.PRODUCTION,
    effect: [
      'When crafting dragonhide armour, ',
      ['10%', '20%', '40%'],
      ' chance that the material will be saved and sent back to bank.',
    ],
    sets: [SETS.S3, SETS.S0],
    affects: [ACTIVITIES.CRAFTING],
    tags: [TAGS.RESOURCES],
  },
  34: {
    id: '34',
    label: "Imcando's Apprentice",
    type: TYPE.PRODUCTION,
    effect: [
      'Smithing gem jewellery has a ',
      ['20%', '50%', '75%'],
      ' chance to give twice the end product with full experience.',
    ],
    sets: [SETS.S3, SETS.S6],
    affects: [ACTIVITIES.CRAFTING],
    tags: [TAGS.OUTPUT, TAGS.EXP],
  },
  35: {
    id: '35',
    label: 'Enchanted Jeweler',
    type: TYPE.SKILLING,
    effect: [
      'All the Enchantment spells enchant ',
      ['5', '10', '25'],
      ' pieces of jewellery per cast with full experience.',
    ],
    sets: [SETS.S10, SETS.S6],
    affects: [ACTIVITIES.MAGIC],
    tags: [TAGS.MULTI],
  },
  36: {
    id: '36',
    label: 'Alchemaniac',
    type: TYPE.SKILLING,
    effect: ['High alchemy gives ', ['15%', '30%', '50%'], ' bonus gold.'],
    sets: [SETS.S6, SETS.S11],
    affects: [ACTIVITIES.MAGIC],
    tags: [TAGS.GOLD],
  },
  37: {
    id: '37',
    label: 'Profletchional',
    type: TYPE.PRODUCTION,
    effect: ['Experience from fletching and stringing bows are increased by ', ['30%', '50%', '100%'], '.'],
    sets: [SETS.S3, SETS.S10],
    affects: [ACTIVITIES.FLETCHING],
    tags: [TAGS.EXP],
  },
  38: {
    id: '38',
    label: 'Pro Tips',
    type: TYPE.PRODUCTION,
    effect: ["When fletching gems into tips, you'll receive ", ['30%', '50%', '100%'], ' more tips per gem.'],
    sets: [SETS.S3, SETS.S4],
    affects: [ACTIVITIES.FLETCHING],
    tags: [TAGS.OUTPUT],
  },
  39: {
    id: '39',
    label: 'Chinchonkers',
    type: TYPE.HARVEST,
    effect: [
      'Chinchompas yield ',
      ['50%', '100%', '100%'],
      ' more experience.',
      ['', '', ' Additionally, you gain 2 chinchompas instead of 1 per successful trap.'],
    ],
    sets: [SETS.S4, SETS.S10],
    affects: [ACTIVITIES.HUNTER],
    tags: [TAGS.OUTPUT, TAGS.EXP],
  },
  40: {
    id: '40',
    label: 'Dine & Dash',
    type: TYPE.PRODUCTION,
    effect: [['10%', '20%', '50%'], ' chance you will get an extra cooked food.'],
    sets: [SETS.S1, SETS.S14],
    affects: [ACTIVITIES.COOKING],
    tags: [TAGS.OUTPUT],
  },
  41: {
    id: '41',
    label: 'Certified Farmer',
    type: TYPE.HARVEST,
    effect: [
      'Farming resources harvested are always noted and have a ',
      ['25%', '50%', '100%'],
      ' chance to be doubled.',
    ],
    sets: [SETS.S8, SETS.S1],
    affects: [ACTIVITIES.FARMING],
    tags: [TAGS.OUTPUT],
  },
  42: {
    id: '42',
    label: 'Seedy Business',
    type: TYPE.HARVEST,
    effect: [['10%', '25%', '50%'], ' chance to save the seed after planting.'],
    sets: [SETS.S11, SETS.S12],
    affects: [ACTIVITIES.FARMING],
    tags: [TAGS.RESOURCES],
  },
  43: {
    id: '43',
    label: 'Mixologist',
    type: TYPE.PRODUCTION,
    effect: [
      'Creating potions has a ',
      ['25%', '50%', '100%'],
      ' chance to create their four-dose variant, and a ',
      ['20%', '50%', '100%'],
      ' chance of saving their secondary ingredient.',
    ],
    sets: [SETS.S1, SETS.S14],
    affects: [ACTIVITIES.HERBLORE],
    tags: [TAGS.RESOURCES],
  },
  44: {
    id: '44',
    label: 'Just Druid!',
    type: TYPE.PRODUCTION,
    effect: ['Herblore experience from cleaning herbs is increased by ', ['10%', '20%', '40%'], '.'],
    sets: [SETS.S1, SETS.S8],
    affects: [ACTIVITIES.HERBLORE],
    tags: [TAGS.EXP],
  },
  45: {
    id: '45',
    label: 'Golden Brick Road',
    type: TYPE.SKILLING,
    effect: ['When a Mark of Grace is spawned, ', ['4,000', '7,000', '15,000'], ' coins will be spawned together.'],
    sets: [SETS.S1, SETS.S12],
    affects: [ACTIVITIES.AGILITY],
    tags: [TAGS.GOLD],
  },
  46: {
    id: '46',
    label: 'Grave Robber',
    type: TYPE.SKILLING,
    effect: ['The amount of hallowed marks received is increased by ', ['50%', '150%', '300%'], '.'],
    sets: [SETS.S7, SETS.S3],
    affects: [ACTIVITIES.AGILITY],
    tags: [TAGS.DROPS],
  },
  47: {
    id: '47',
    label: 'Rooty Tooty 2x Runeys',
    type: TYPE.PRODUCTION,
    effect: [
      'Each time a rune is crafted, there is a ',
      ['20%', '40%', '80%'],
      ' chance to get double the amount of runes.',
    ],
    sets: [SETS.S10, SETS.S2],
    affects: [ACTIVITIES.RUNECRAFT],
    tags: [TAGS.OUTPUT],
  },
  48: {
    id: '48',
    label: 'Rune Escape',
    type: TYPE.PRODUCTION,
    effect: [
      'When crafting runes at ZMI, you no longer craft ',
      ['mind', 'mind and body', 'mind, body, and elemental'],
      ' runes.',
    ],
    sets: [SETS.S10, SETS.S0],
    affects: [ACTIVITIES.RUNECRAFT],
    tags: [TAGS.OTHER],
  },
  49: {
    id: '49',
    label: 'Clued In',
    type: TYPE.OTHER,
    effect: ['NPCs that drop clue scrolls will have a 1 in ', ['30', '25', '15'], ' chance of dropping them.'],
    sets: [SETS.S10, SETS.S5],
    affects: [ACTIVITIES.CLUES, ACTIVITIES.COMBAT],
    tags: [TAGS.DROPS],
  },
  50: {
    id: '50',
    label: 'Message In A Bottle',
    type: TYPE.OTHER,
    effect: ['Clue geodes, nests and bottles are found ', ['3', '5', '10'], ' times more often.'],
    sets: [SETS.S9, SETS.S8],
    affects: [ACTIVITIES.MINING, ACTIVITIES.WOODCUTTING, ACTIVITIES.FISHING, ACTIVITIES.CLUES],
    tags: [TAGS.DROPS],
  },
  51: {
    id: '51',
    label: 'Barbarian Pest Wars',
    type: TYPE.OTHER,
    effect: [
      'Barbarian assault, pest control points and soul wars zeal tokens received are boosted by ',
      ['100%', '200%', '300%'],
      '.',
    ],
    sets: [SETS.S13, SETS.S9],
    affects: [ACTIVITIES.MINIGAMES],
    tags: [TAGS.GOLD],
  },
  52: {
    id: '52',
    label: "Rogues' Chompy Farm",
    type: TYPE.OTHER,
    effect: [
      'Tithe Farm points are boosted by ',
      ['100%', '200%', '300%,'],
      " chance to successfully crack the wall safe in Rogue's Den maze is boosted by ",
      ['10%', '20%', '40%'],
      ' and chompy bird kill count is worth ',
      ['2', '3', '4'],
      '.',
    ],
    sets: [SETS.S4, SETS.S14],
    affects: [ACTIVITIES.MINIGAMES, ACTIVITIES.THIEVING, ACTIVITIES.FARMING],
    tags: [TAGS.GOLD, TAGS.SUCCESS],
  },
  53: {
    id: '53',
    label: "Mother's Magic Fossils",
    type: TYPE.OTHER,
    effect: [
      'The chance of obtaining fossils on Fossil Island, Motherlode Mine gold nuggets and Mage Training Arena points are increased by ',
      ['100%', '200%', '300%'],
      '.',
    ],
    sets: [SETS.S2, SETS.S6],
    affects: [
      ACTIVITIES.WOODCUTTING,
      ACTIVITIES.HUNTER,
      ACTIVITIES.COMBAT,
      ACTIVITIES.MINING,
      ACTIVITIES.MAGIC,
      ACTIVITIES.MINIGAMES,
    ],
    tags: [TAGS.DROPS, TAGS.GOLD],
  },
};
