import images from '../assets/images';
import getAllQuestPrereqs from '../util/getAllQuestPrereqs';

export const NONE_REGION_ID = -1;
export const DEFAULT_REGIONS = [0, 1];
export const REGION_UNLOCK_THRESHOLDS = [0, 50, 150, 300];

export const TRAILBLAZER_REGIONS = [
  {
    id: 0,
    label: 'Misthalin',
    icon: images['task-misthalin.png'],
    map: images['map-misthalin.png'],
    isDefaultUnlock: true,
    questUnlocks: getAllQuestPrereqs(['3139', '350', '354', '433', '3135', '360']),
    diaryUnlocks: [
      295, 297, 299, 300, 301, 310, 311, 315, 316, 317, 319, 320, 322, 323, 324, 327, 382, 383, 390, 391, 393, 396, 404,
      406,
    ],
  },
  {
    id: 1,
    label: 'Karamja',
    icon: images['task-karamja.png'],
    map: images['map-karamja.png'],
    isDefaultUnlock: true,
    questUnlocks: getAllQuestPrereqs(['424']),
    diaryUnlocks: [203, 204, 216, 221, 227, 231, 234, 236, 242],
  },
  {
    id: 2,
    label: 'Asgarnia',
    icon: images['task-asgarnia.png'],
    map: images['map-asgarnia.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['394', '402']),
    diaryUnlocks: [97, 114, 118],
  },
  {
    id: 3,
    label: 'Desert',
    icon: images['task-kharidian.png'],
    map: images['map-desert.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['90009']),
    diaryUnlocks: [58, 67, 70, 75],
  },
  {
    id: 4,
    label: 'Fremennik',
    icon: images['task-fremennik.png'],
    map: images['map-fremennik.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['90002', '382', '348', '398']),
    diaryUnlocks: [131, 134, 141, 142, 155, 156],
  },
  {
    id: 5,
    label: 'Morytania',
    icon: images['task-morytania.png'],
    map: images['map-morytania.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['341', '375']),
    diaryUnlocks: [346, 350, 357, 360, 362],
  },
  {
    id: 6,
    label: 'Kandarin',
    icon: images['task-kandarin.png'],
    map: images['map-kandarin.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['396', '428', '387']),
    diaryUnlocks: [171, 186, 188, 195, 196, 199, 409, 414, 424, 434, 441, 449, 1, 8, 14, 15, 20, 22, 32, 33, 35, 41],
  },
  {
    id: 7,
    label: 'Kourend',
    icon: images['task-xeric.png'],
    map: images['map-kourend.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['3155']),
    diaryUnlocks: [],
  },
  {
    id: 8,
    label: 'Tirannwn',
    icon: images['task-tiranwnn.png'],
    map: images['map-tirannwn.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['603']),
    diaryUnlocks: [278],
  },
  {
    id: 9,
    label: 'Wilderness',
    icon: images['task-wilderness.png'],
    map: images['map-wilderness.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['3140']),
    diaryUnlocks: [473, 482, 484, 486],
  },
];

function getRegionsById() {
  const regionsById = {};
  TRAILBLAZER_REGIONS.forEach(region => {
    regionsById[region.id] = region;
  });
  return regionsById;
}
export const regionsById = getRegionsById();

function getRegionsByName() {
  const regionsByName = {};
  TRAILBLAZER_REGIONS.forEach(region => {
    regionsByName[region.label] = region;
  });
  return regionsByName;
}
export const regionsByName = getRegionsByName();

export const regionNames = TRAILBLAZER_REGIONS.map(({ label }) => label);
