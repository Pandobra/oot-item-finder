import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Information } from "./Information";
import Items from "./Items";
import Completed from "./Completed";
import Sidebar from "./Sidebar";
import { isCompositeComponent } from "react-dom/test-utils";
function App() {

const [stick, setStick] = useState(false);
const [nut, setNut] = useState(false);
const [bombs, setBombs] = useState(false);
const [bow, setBow] = useState(false);
const [fireArrow, setFireArrow] = useState(false);
const [dins, setDins] = useState(false);
const [slingshot, setSlingshot] = useState(false);
const [ocarina, setOcarina] = useState(false);
const [chu, setChu] = useState(false);
const [hookshot, setHookshot] = useState(0);
const [nayrus, setNayrus] = useState(false);
const [boomer, setBoomer] = useState(false);
const [lens, setLens] = useState(false);
const [hammer, setHammer] = useState(false);
const [bottle, setBottle] = useState(false);
const [kokiriSword, setKokiriSword] = useState(false);
const [masterSword, setMasterSword] =useState(false);
const [dekuShield, setDekuShield] = useState(false);
const [hylianShield, setHylianShield] = useState(false);
const [mirrorShield, setMirrorShield] = useState(false);
const [magic, setMagic] = useState(false);
const [goronTunic, setGoronTunic] = useState(false);
const [zoraTunic, setZoraTunic] = useState(false);
const [scale, setScale] = useState(0);
const [gauntlet, setGauntlet] = useState(0);
const [ironBoot, setIronBoot] = useState(false);
const [hovers, setHovers] = useState(false);
const [suns, setSuns] = useState(false);
const [zl, setZl] = useState(false);
const [time, setTime] = useState(false);
const [eponaS, setEponaS] = useState(false); 
const [storms, setStorms] = useState(false);
const [minuet, setMinuet] = useState(false);
const [bolero, setBolero] = useState(false);
const [serenade, setSerenade] = useState(false);
const [requiem, setRequiem] = useState(false);
const [nocturne, setNocturne] = useState(false);
const [prelude, setPrelude] = useState(false);
const [skullMask, setSkullMask] = useState(false);
const [truthMask, setTruthMask] = useState(false);
const [sarias, setSarias] = useState(false);
const [completedArray, setCompletedArray ] = useState([]);
const [locationArray, setLocationArray]= useState(["Death Mountain Crater","Death Mountain Trail","Desert Colossus","Ganon's Castle Outside","Gerudo Valley","Goron City","Graveyard","Haunted Wasteland","Hyrule Castle","Hyrule Field","Kakariko Village","Kokiri Forest","Lake Hylia","Lon Lon Ranch","Lost Woods","Market","Sacred Forest Meadow","Zora's Domain","Zora's Fountain","Zora's River"]);
const itemArray = [stick, nut, bombs, bow, fireArrow, dins, slingshot, ocarina, chu, hookshot, nayrus, boomer, lens, hammer, bottle, kokiriSword, masterSword, dekuShield, hylianShield, mirrorShield, magic, goronTunic, zoraTunic, scale, gauntlet, ironBoot, hovers, suns, zl, time, eponaS, storms, sarias, minuet, bolero, serenade, requiem, nocturne, prelude, skullMask, truthMask]
const itemPicsGrey = ['../oot-pics/items-pics/stick-grey.png','../oot-pics/items-pics/seed-grey.png','../oot-pics/items-pics/bomb-grey.png','../oot-pics/items-pics/bow-gret.png','../oot-pics/items-pics/special-arrow-grey.png','../oot-pics/items-pics/magic-item.png','../oot-pics/items-pics/slingshot-grey.png','../oot-pics/items-pics/ocarina-grey.png','../oot-pics/items-pics/chu-grey.png','../oot-pics/items-pics/hookshot-grey.png','../oot-pics/items-pics/magic-item.png','../oot-pics/items-pics/boomerang-grey.png','../oot-pics/items-pics/lens-grey.png','../oot-pics/items-pics/hammer-grey.png','../oot-pics/items-pics/bottle.png','../oot-pics/items-pics/kokiri-grey.png','../oot-pics/items-pics/master-grey.png','../oot-pics/items-pics/deku-grey.png','../oot-pics/items-pics/hylian-grey.png','../oot-pics/items-pics/mirror-grey.png','../oot-pics/items-pics/magic-grey.png','../oot-pics/items-pics/tunic.png','../oot-pics/items-pics/tunic.png','../oot-pics/items-pics/greyscale.png','../oot-pics/items-pics/strength-grey.png','../oot-pics/items-pics/iron-grey.png','../oot-pics/items-pics/hover-grey.png','../oot-pics/items-pics/sun-grey.png','../oot-pics/items-pics/ZL-grey.png','../oot-pics/items-pics/time-grey.png','../oot-pics/items-pics/epona-grey.png','../oot-pics/items-pics/storm-grey.png','../oot-pics/items-pics/saria-grey.png', '../oot-pics/items-pics/song-grey.png' ,'../oot-pics/items-pics/song-grey.png','../oot-pics/items-pics/song-grey.png','../oot-pics/items-pics/song-grey.png','../oot-pics/items-pics/song-grey.png','../oot-pics/items-pics/song-grey.png']
const itemPicsFull = ['../oot-pics/items-pics/stick-full.png','../oot-pics/items-pics/seed-full.png','../oot-pics/items-pics/bomb-full.png','../oot-pics/items-pics/bow-full.png','../oot-pics/items-pics/fire-arrow.png','../oot-pics/items-pics/dins.png','../oot-pics/items-pics/slingshot-full.png','../oot-pics/items-pics/ocarina-full.png','../oot-pics/items-pics/chu-full.png','../oot-pics/items-pics/hook-shot-full.png','../oot-pics/items-pics/nayru.png','../oot-pics/items-pics/boomerang-full.png','../oot-pics/items-pics/lens-full.png','../oot-pics/items-pics/hammer-full.png','../oot-pics/items-pics/bottle-full.png','../oot-pics/items-pics/kokiri-full.png','../oot-pics/items-pics/master-full.png','../oot-pics/items-pics/deku-full.png','../oot-pics/items-pics/hylian-full.png','../oot-pics/items-pics/mirror-full.png','../oot-pics/items-pics/magic-full.png','../oot-pics/items-pics/goron.png','../oot-pics/items-pics/zora.png','../oot-pics/items-pics/scale.png','../oot-pics/items-pics/goron-brace.png','../oot-pics/items-pics/iron-boot.png','../oot-pics/items-pics/hover-full.png','../oot-pics/items-pics/sun-full.png','../oot-pics/items-pics/ZL.png','../oot-pics/items-pics/time-full.png','../oot-pics/items-pics/epona-full.png','../oot-pics/items-pics/storm-full.png','../oot-pics/items-pics/saria-full.png','../oot-pics/items-pics/forest-full.png','../oot-pics/items-pics/bolero.png','../oot-pics/items-pics/serenade.png','../oot-pics/items-pics/requiem.png','../oot-pics/items-pics/shadow.png','../oot-pics/items-pics/prelude.png']
const test = ["stick","nut","bombs","bow","fire arrow","dins","slingshot","ocarina","chu","hookshot","nayrus","boomer","lens","hammer","bottle","kokiriSword","masterSword","dekuShield","hylianShield","Mirror Shield","Magic","Goron Tunic","Zora Tunic","Scale","Goron Bracelet","Iron Boots", "Hover Boots", "Sun Song", "Zelda Lull", "Song of Time", "Epona Song", "Song of storms", "Minuet of Forest", "Bolero of Fire", "Serenade of water", "Requiem", "Nocturne", "prelude","sarias", "skullmask","truthmask"]
const test2 = ["","","","","","","","","","","",'../oot-pics/items-pics/longshot.png',"","","","","","","","","","","","","", '../oot-pics/items-pics/goldscale.png', '../oot-pics/items-pics/silvergauntlet.png', '../oot-pics/items-pics/goldengauntlet.png'] //Seperate array for progressive items
const locations = ["Show All","Death Mountain Crater","Death Mountain Trail","Desert Colossus","Ganon's Castle Outside","Gerudo Valley","Goron City","Graveyard","Haunted Wasteland","Hyrule Castle","Hyrule Field","Kakariko Village","Kokiri Forest","Lake Hylia","Lon Lon Ranch","Lost Woods","Market","Sacred Forest Meadow","Zora's Domain","Zora's Fountain","Zora's River"]
const updater = [setStick, setNut, setBombs, setBow, setFireArrow, setDins, setSlingshot, setOcarina, setChu, setHookshot, setNayrus, setBoomer, setLens, setHammer, setBottle, setKokiriSword, setMasterSword, setDekuShield, setHylianShield, setMirrorShield, setMagic, setGoronTunic, setZoraTunic, setScale, setGauntlet, setIronBoot, setHovers, setSuns, setZl, setTime, setEponaS, setStorms, setSarias, setMinuet, setBolero, setSerenade, setRequiem, setNocturne, setPrelude, setSkullMask, setTruthMask]
const checks  = {
  kfStormsGrotto: {
    location:locations[12],
    show: (ocarina && storms) ,
    type:"grotto",
    title: "Kokiri Forest Song of Storms Grotto:",
    img:'../oot-pics/checks-pics/Kfstormsgrotto.png',
    // content:["One chest.",<br/>,"Play song of storms to enter." ]
  },
  kfMidosHouse:{
    location:locations[12],
    show:true,
    title:"Mido's House:",
    content:"Four chests.",
    img:'../oot-pics/checks-pics/kfmidoshouse.png'
  },
  kfKokiriSword:{
    location:locations[12],
    show:true,
    title:"Kokiri Sword Chest:",
    content:"One chest.",
    img:'../oot-pics/checks-pics/kfkokirisword.png'
  },
  lwGoronCityGrotto: {
    location:locations[15],
    show: ((bombs)||(chu)||(hammer)),
    type:"grotto",
    title:"Outside Goron City Grotto:",
    img:'../oot-pics/checks-pics/lwGoronCityGrotto.png',
    // content: ["One chest.",<br/>,"Enter with explosives or hammer."],
  },
  lwGrottoScrubs: {
    location:locations[15],
    show: ((bombs)||(chu)||(hammer)),
    type:"grotto",
    title: "Lost Woods Grotto Scrubs",
    img:'../oot-pics/checks-pics/lwGrottoScrubs.png',
    // content:["Two scrubs.",<br/>,"Enter with explosives or hammer."]
  },
  dekuTheater: {
    location:locations[15],
    show: (skullMask || truthMask),
    type:"grotto",
    title:"Deku Theater Mask Checks:",
    img:'../oot-pics/checks-pics/dekuTheater.png'
    // content:["Two checks.",<br/>,"Requires skull mask or mask of truth."]
  },
  lwGift:{
    location:locations[15],
    show: (kokiriSword && dekuShield),
    title:"Saria on the Bridge:",
    content:"One check.",
    img:'../oot-pics/checks-pics/lwSariaGift.png',
  },
  lwTarget:{
    location:locations[15],
    show: (slingshot),
    title:"Lost Woods Target:",
    content:"One check.",
    img:'../oot-pics/checks-pics/lwTarget.png',
  },
  lwSkullKid:{
    location:locations[15],
    show: (ocarina && sarias),
    title:"Lost Woods Skull Kid",
    img:'../oot-pics/checks-pics/lwSkullKid.png',
    // content:["One check.",<br/>,"Play saria's song."]
  },
  lwNearBridge:{
    location:locations[15],
    show:true,
    check:"scrubs",
    title:"Lost Woods Scrubs Near Bridge:",
    content:"One scrub.",
    img:'../oot-pics/checks-pics/lwBridgeScrub.png',
  },
  lwMemoryGame:{
    location:locations[15],
    show:ocarina,
    title:"Lost Woods Memory Game",
    img:'../oot-pics/checks-pics/lwMemoryGame.png',
  },
  sfmWolfGrotto: {
    location:locations[17],
    show: ((bombs)||(chu)||(hammer)),
    type:"grotto",
    title:"Sacred Forest Meadow Wolfos Grotto",
    img:'../oot-pics/checks-pics/sfmWolfosGrotto.png',
    // content: ["Chest after killing wolfos.",<br/>,"Explosives or hammer to get in."],
  },
  sfmStormsGrotto: {
    location:locations[17],
    show: (ocarina && storms),
    type:"grotto",
    title:"Sacred Forest Meadow Storms Grotto:",
    img:'../oot-pics/checks-pics/sfmStormsGrotto.png',
    // content:["Two scrubs",<br/>,"Play song of storms."]
  },
  hfSE: {
    location:locations[10],
    show: ((bombs)||(chu)||(hammer)),
    type:"grotto",
    title:"Hyrule Field Southeast:",
    img:'../oot-pics/checks-pics/hfSe.png'
    // content:["One chest.",<br/>,"Explosives or hammer to get in."],
  },
  hfOpen: {
    location:locations[10],
    show: true,
    type:"grotto",
    title:"Hyrule Field Open Grotto",
    content:"One chest",
    img:'../oot-pics/checks-pics/hfOpen.png',
  },
  hfFence: {
    location:locations[10],
    show: ((bombs)||(chu)||(hammer)),
    type:"grotto",
    title:"Hyrule Field Inside Fence Grotto:",
    img:'../oot-pics/checks-pics/hfFence.png',
    // content:["One scrub",<br/>,"Explosives or hammer to get in"],
  },
  hfNearMarket: {
    location:locations[10],
    show: ((bombs)||(chu)||(hammer)),
    type:"grotto",
    title:"Hyrule Field Grotto Near Market",
    img:'../oot-pics/checks-pics/hfNearMarket.png',
    // content:["One chest",<br/>,"Explosives or hammer to get in"],
  },
  hfTektite: {
    location:locations[10],
    show: (((bombs)||(chu)||(hammer)) && (ironBoot || (scale > 1))),
    type:"grotto",
    title:"Hyrule Field Tektite Grotto:",
    img:'../oot-pics/checks-pics/hfTektite.png'
    // content:["One item",<br/>,"Explosives or hammer to get in, iron boots or golden scale to get the item."],
  },
  hfCow: {
    location:locations[10],
    show: ((bombs)||(chu)||(hammer)) && (ocarina && eponaS),
    type:"grotto",
    title:"Hyrule Field Cow Grotto",
    img:'../oot-pics/checks-pics/hfCow.png'
    // content:["A cow,",<br/>,"Explosives as child, hammer as adult, play epona's song for item."]
  },
  mktShooting:{
    location:locations[16],
    show:true,
    title:"Market Shooting Gallery:",
    content:"One check.",
    img:'../oot-pics/checks-pics/hfMarketShooting.png',
  },
  mktBombchu:{
    location:locations[16],
    show:true,
    title:"Bombchu Bowling:",
    content:"Two checks.",
    img:'../oot-pics/checks-pics/marketBombchu.png',
  },
  mktRichard:{
    location:locations[16],
    show:true,
    title:"Richard the dog:",
    img:'../oot-pics/checks-pics/marketRichard.png',
    // content:["One check.",<br/>,"Bring Richard home."]
  },
  mktTreasure:{
    location:locations[16],
    show:(lens && magic),
    title:"Chest game:",
    content:"One check.",
    img:'../oot-pics/checks-pics/marketChestGame.png',
  },
  hcMalon:{
    location:locations[9],
    show:true,
    title:"Item from Malon:",
    content:"One check.",
    img:'../oot-pics/checks-pics/hcMalon.png'
  },
  hcZelda:{
    location:locations[9],
    show:true,
    title:"Item from Zelda",
    img:'../oot-pics/checks-pics/hcZelda.png',
    // content:["One check.",<br/>,"Needs egg but I haven't added that as an item."]
  },
  hcFountain:{
    location:locations[9],
    show:(bombs || chu) && (ocarina && zl),
    check:"great fairy",
    title:"Hyrule Castle Great Fairy Fountain",
    img:'../oot-pics/checks-pics/hcFountain.png',
    // content:["One check.",<br/>,"Explosives to get in, Zelda's lullaby for check."]
  },
  llrChickens:{
    location:locations[14],
    show:true,
    title:"Lon Lon Ranch Chicken Game:",
    content:"One check.",
    img:'../oot-pics/checks-pics/llrChickens.png',
  },
  llrCowHeart:{
    location:locations[14],
    show:true,
    title:"Lon Lon Ranch Crate Heart:",
    content:"One check.",
    img:'../oot-pics/checks-pics/llrHeartPiece.png',
  },
  llrScrubs:{
    location:locations[14],
    show:true,
    title:"Lon Lon Ranch Grotto:",
    content:"Three Scrubs",
    img:'../oot-pics/checks-pics/llrOpenGrotto.png',
  },
  llrStables:{
    location:locations[14],
    show:(ocarina && eponaS),
    title:"Lon Lon Ranch Stables:",
    img:'../oot-pics/checks-pics/llrTowerCows.png',
    // content:["Two cows.",<br/>,"Play epona's song"],
  },
  llrTower:{
    location:locations[14],
    show:(ocarina && eponaS),
    title:"Lon Lon Ranch Tower:",
    img:'../oot-pics/checks-pics/llrStableCow.png'
    // content:["Two cows.",<br/>,"Play epona's song"],
  },
  kakRedad: {
    location:locations[11],
    show: ((bombs)||(chu)||(hammer)),
    type:"grotto",
    content:"kakRedad",
    img:'../oot-pics/checks-pics/kakRedead.png',
  },
  kakOpen: {
    location:locations[11],
    show:true,
    type:"grotto",
    title:"Kakariko Village Open Grotto:",
    content:"One chest.",
    img:"https://wiki.ootrandomizer.com/images/c/c3/Kakopen.png",
    completed:true,
  },
  kakAnjuC:{
    location:locations[11],
    show:true,
    title:"Kakariko Collect Chickens:",
    content:"One check.",
    img:'../oot-pics/checks-pics/kakChicken.png'
  },
  kakAnjuA:{
    location:locations[11],
    show:masterSword,
    title:"Kakariko Adult Chicken Lady:",
    img:'../oot-pics/checks-pics/kakAnjuAdult.png',
    // content:["One check",<br/>,"Talk to chicken lady as an adult."],
  },
  impasHouse:{
    location:locations[11],
    show:true,
    title:"Impa's House Item:",
    img:'../oot-pics/checks-pics/kakimpasHouse.png',
    // content:["One check",<br/>,"Use a chicken to get up here"],
  },
  kakWindMill:{
    location:locations[11],
    show:masterSword,
    title:"Kakariko Windmill Item:",
    img:'../oot-pics/checks-pics/kakWindmill.png',
    // content:["One check",<br/>, "Hookshot or after Dampe race"],
  },
  kakRoofGuy:{
    location:locations[11],
    show:(hookshot > 0),
    title:"Kakariko Man on Roof:",
    img:'../oot-pics/checks-pics/kakRoof.png'
    // content:["One check",<br/>,"Hookshot to the man."]
  },
  kakShooting:{
    location:locations[11],
    show:bow,
    title:"Kakariko Shooting Gallery:",
    content:"One check.",
    img:'../oot-pics/checks-pics/kakShooting.png',
  },
  gyShield: {
    location:locations[7],
    show:true,
    type:"grotto",
    title:"Hylian Shield Graveyard",
    content:"One check.",
    img:'../oot-pics/checks-pics/gyShield.png',
  },
  gyHeart:{
    location:locations[7],
    show:(ocarina && suns),
    type:"grotto",
    title:"Graveyard Redead Grotto:",
    img:'../oot-pics/checks-pics/gyRedead.png',
    // content:["One check",<br/>,"Play sun song near the redead"],
  },
  gyComposerChest:{
    location:locations[7],
    show:(dins || (fireArrow && bow && magic)),
    title:"Composer Grave Chest:",
    img:'../oot-pics/checks-pics/kakComposer.png',
    // content:["One chest",<br/>,"Light torches."]
  },
  gyDampeHeart:{
    location:locations[7],
    show:true,
    title:"Dampe Gravedigging:",
    img:'../oot-pics/checks-pics/gyDampeChild.png'
    // content:["One check",<br/>,"Pay Dampe to dig a grave."],
  },
  gyDampe:{
    location:locations[7],
    show:masterSword,
    type:"grotto",
    title:"Dampe Race:",
    content:"One check.",
    img:'../oot-pics/checks-pics/kakDampe.png'
  },
  dmtStorms:{
    location:locations[2],
    show:(ocarina && storms),
    type:"grotto",
    title:"Death Mountain Trail Storms Grotto:",
    img:'../oot-pics/checks-pics/dmtStorms.png',
    // content:["A chest.",<br/>,"Play song of storms."]
  },
  dmtCow:{
    location:locations[2],
    show:(bombs || chu || hammer) && (ocarina && eponaS),
    type:"grotto",
    title:"Death Mountain Trail Cow:",
    img:'../oot-pics/checks-pics/dmtCow.png',
    // content:["A cow,",<br/>,"Explosives as child, hammer as adult, play epona's song for item."]
  },
  dmtChest:{
    location:locations[2],
    show:(bombs || chu || hammer),
    title:"Death Mountain Trail Chest:",
    img:'../oot-pics/checks-pics/dmtChest.png'
    // content:["One chest.",<br/>,"Explode the wall."],
  },
  dmtHeart:{
    location:locations[2],
    show:true,
    title:"Death Mountain Trail Heart:",
    img:'../oot-pics/checks-pics/dmtHeart.png',
    // content:["One check",<br/>,"Backflip from above onto dodogo's cavern."],
  },
  gcGrotto:{
    location:locations[6],
    show:masterSword && ((goronTunic && hookshot) || (ocarina && time) || (nayrus && hookshot)),
    type:"grotto",
    title:"Goron City Grotto:",
    img:'../oot-pics/checks-pics/gcGrotto.png'
    // content:["Three scrubs",<br/>,"Requires either goron tunic and hootshot, song of time, or nayrus and hookshot."],
  },
  gcPot:{
    location:locations[6],
    show:(gauntlet > 0 || bombs),
    title:"Goron City Pot:",
    img:'../oot-pics/checks-pics/gcPot.png'
    // content:["One check",<br/>,"Throw bomb into pot."],
  },
  gcRollingGoron:{
    location:locations[6],
    show:(bombs || chu),
    title:"Goron City Rolling Goron Child:",
    img:'../oot-pics/checks-pics/gcRollingChild.png'
    // content:["One check",<br/>,"Stop him with bomb."],
  },
  gcRollingGoronAdult:{
    location:locations[6],
    show:(bombs || chu) && masterSword,
    title:"Goron City Rolling Goron Adult:",
    img:'../oot-pics/checks-pics/gcRollingAdult.png'
    // content:["One check",<br/>,"Stop him with bomb."],
  },
  gcMedigoron:{
    location:locations[6],
    show:true, //Needs adult wallet but dont have in items xd
    title:"Goron City Medigoron:",
    img:'../oot-pics/checks-pics/gcMedigoron.png'
    // content:["One check",<br/>,"Costs 200 rupees"],
  },
  gcMaze:{
    location:locations[6],
    show:(bombs || chu || hammer),
    title:"Goron City Maze:",
    img:'../oot-pics/checks-pics/gcMazeChest.png'
    // content:["Three chests",<br/>,"Use hammer or bombs to get through the maze."],
  },
  dmcVolcano:{
    location:locations[1],
    show:hovers,
    title:"Death Mountain Crater Volcano",
    img:'../oot-pics/checks-pics/dmcVolcano.png',
  },
  dmcUpper:{
    location:locations[1],
    show:(bombs || chu || hammer),
    title:"Death Mountain Crater Upper Grotto",
    img:'../oot-pics/checks-pics/dmcUpper.png',
  },
  dmcLower:{
    location:locations[1],
    show:hammer,
    type:"grotto",
    title:"Death Mountain Crater Lower Grotto",
    img:'../oot-pics/checks-pics/dmcLower.png',
  },
  dmcHeart:{
    location:locations[1],
    show:true,
    title:"Death Mountain Crater Heart",
    img:'../oot-pics/checks-pics/dmcHeart.png',
  },
  zrMagicBean:{
    location:locations[20],
    show:(chu || bombs || (scale > 0)),
    title:"Zora's River Magic Bean Salesman",
    img:'../oot-pics/checks-pics/zrBean.png',
  },
  zrFrogs:{
    location:locations[20],
    show:(storms && ocarina) && (chu || bombs || (scale > 0)),
    title:"Zora's River Frogs",
    img:'../oot-pics/checks-pics/zrFrogs.png',
  },
  zrLowerHeart:{
    location:locations[20],
    show:(chu || bombs || (scale > 0)) || (masterSword && hookshot),
    title:"Zora's River Lower Heart Piece",
    img:'../oot-pics/checks-pics/zrHeart.png',
  },
  zrUpperHeart:{
    location:locations[20],
    show:(chu || bombs || (scale > 0)) || (masterSword && hookshot),
    title:"Zora's River Upper Heart Piece",
    img:'../oot-pics/checks-pics/zrHeartUpper.png',
  },
  zrOpen:{
    location:locations[20],
    show:masterSword || (chu || bombs || (scale > 0)),
    type:"grotto",
    title:"Zora's River Open Grotto",
    img:'../oot-pics/checks-pics/zrGrotto.png',
  },
  zrStorms:{
    location:locations[20],
    show:(masterSword || (chu || bombs)) && (ocarina && storms),
    title:"Zora's River Storms Grotto",
    img:'../oot-pics/checks-pics/zrStorms.png',
  },
  zdDiving:{
    location:locations[18],
    show:(ocarina && zl) || (scale > 0),
    title:"Zora's Domain Diving Minigame",
    img:'../oot-pics/checks-pics/zdDiving.png',
  },
  zdChest:{
    location:locations[18],
    show:(stick),
    title:"Zora's Domain Chest",
    img:'../oot-pics/checks-pics/zdHeart.png',
  },
  zdKingZora:{
    location:locations[18],
    show:false, // mastersword and bottle
    title:"Zora's Domain Unfreeze King Zora",
    img:'../oot-pics/checks-pics/zdKingZora.png',
  },
  zfFountain:{
    location:locations[19],
    show:(bombs || chu) && (ocarina && zl) && masterSword && (ocarina && zl),
    title:"Zora's Fountain Great Fairy",
    img:'../oot-pics/checks-pics/zfFountain.png',
  },
  zfIceberg:{
    location:locations[19],
    show:masterSword && (ocarina && zl),
    title:"Zora's Fountain Iceberg",
    img:'../oot-pics/checks-pics/zfHeart.png',
  },
  zfBottom:{
    location:locations[19],
    show:ironBoot && masterSword && (ocarina && zl),
    title:"Zora's Fountain Bottom",
    img:'../oot-pics/checks-pics/zfBottom.png',
  },
  lhChildFishing:{
    location:locations[13],
    show:true,
    title:"Child Fishing",
    img:'../oot-pics/checks-pics/lhFishing.png',
  },
  lhAdultFishing:{
    location:locations[13],
    show:ocarina && hookshot,
    title:"Adult Fishing",
    img:'../oot-pics/checks-pics/lhFishingAdult.png',
  },
  lhUnderwater:{
    location:locations[13],
    show:scale > 0,
    title:"Lake Hylia Underwater Item",
    img:'../oot-pics/checks-pics/lhBottom.png'
  },
  lhGrotto:{
    location:locations[13],
    show:true,
    type:"grotto",
    title:"Lake Hylia Grave Grotto",
    img:'../oot-pics/checks-pics/lhOpen.png',
  },
  lhHeart:{
    location:locations[13],
    show:false, //beans
    title:"Lake Hylia Heart Piece",
    img:'../oot-pics/checks-pics/lhHeart.png',
  },
  lhLabDive:{
    location:locations[13],
    show: scale > 1,
    title:"Lake Hylia Lab Dive",
    img:'../oot-pics/checks-pics/lhDive.png'
  },
  lhSun:{
    location:locations[13],
    show: masterSword && bow,
    title:"Lake Hylia Sun",
    img:'../oot-pics/checks-pics/lhBow.png',
  },
  gvCrate:{
    location:locations[5],
    show:true,
    title:"Gerudo Valley Crate Heart",
    img:'../oot-pics/checks-pics/gvCrate.png'
  },
  gvWaterfall:{
    location:locations[5],
    show:true,
    title:"Gerudo Valley Waterfall",
    img:'../oot-pics/checks-pics/gvWaterfall.png'
  },
  gvChest:{
    location:locations[5],
    show:masterSword && hammer,
    title:"Gerudo Valley Chest",
    img:'../oot-pics/checks-pics/gvChest.png'
  },
  gvCow:{
    location:locations[5],
    show:ocarina && eponaS,
    title:"Gerudo Valley Cow",
    img:'../oot-pics/checks-pics/gvCow.png'
  },
  gvStorms:{
    location:locations[5],
    show:(hookshot > 1 || (ocarina && eponaS)) && (ocarina && storms) && masterSword,
    type:"grotto",
    title:"Gerudo Valley Storms Grotto",
    img:'../oot-pics/checks-pics/gvStorms.png'
  },
  hwBombchu:{
    location:locations[8],
    show:(hookshot > 1) && lens && masterSword,
    title:"Haunted Wasteland Bombchu Salesman",
    img:'../oot-pics/checks-pics/hwCarpet.png',
  },
  hwChest:{
    location:locations[8],
    show:(hookshot > 1) && lens && masterSword,
    title:"Haunted Wasteland Chest",
    img:'../oot-pics/checks-pics/hwChest.png'
  },
  dcGrotto:{
    location:locations[3],
    show:(gauntlet > 1) && (((lens && ((hookshot > 1) || (hovers))) || requiem)),
    type:"grotto",
    title:"Desert Collosus Scrub Grotto",
    img:'../oot-pics/checks-pics/dcGrotto.png'
  },
  dcFountain:{
    location:locations[3],
    show:(((lens && (hookshot > 1)) || requiem) && (bombs || chu)) && (ocarina && zl),
    check:"great fairy",
    title:"Desert Collosus Great Fairy",
    img:'../oot-pics/checks-pics/hwFountain.png',
  },
  dcHeart:{
    location:locations[3],
    show:false, //beans
    title:"Desert Collosus Heart",
    img:'../oot-pics/checks-pics/dcHeart.png'
   }, //No biggoron, king zora, adult fishing, LH heart, all gerudo fortress checks,Desert Collossus Heart, darunia
}
function updateItems (a, b) { //Function used to update if user has item or not
   if((hookshot <= 1 && a===9)){
    setHookshot(hookshot+1)
  } 
  else if((hookshot > 1) && a===9){ 
    setHookshot(0)
  }
  else if(scale <= 1 && a===23){
    setScale(scale+1)
  }
  else if(scale > 1 && a===23){
    setScale(0)
  }
  else if(gauntlet <=2 && a===24){
    setGauntlet(gauntlet+1)
  }
  else if(gauntlet > 2 && a===24){
    setGauntlet(0)
  }
  else{
    updater[a](!b)
  }
}
function hideCheck (a){ //Updates completed array in order to have list of completed checks
  setCompletedArray( arr => [...arr, a])
}
function unHideCheck(a){
  let arrayIndex = completedArray.indexOf(a);
  setCompletedArray([...completedArray.slice(0, arrayIndex),
  ...completedArray.slice(arrayIndex+1, completedArray.length)]);
}
function filterLocation(a){
  if(locations[a] === locations[0]){
    setLocationArray(["Death Mountain Crater","Death Mountain Trail","Desert Colossus","Ganon's Castle Outside","Gerudo Valley","Goron City","Graveyard","Haunted Wasteland","Hyrule Castle","Hyrule Field","Kakariko Village","Kokiri Forest","Lake Hylia","Lon Lon Ranch","Lost Woods","Market","Sacred Forest Meadow","Zora's Domain","Zora's Fountain","Zora's River"])
  }
  else{
  setLocationArray(locations[a])
  }
}
console.log(completedArray)
  return (
    <Router>
    <div className="main-container">
      <div className="items">
      <Items
      itemArray={itemArray}
      itemPicsGrey={itemPicsGrey}
      itemPicsFull={itemPicsFull}
      test={test}
      test2={test2}
      func={(a, b) =>{
        updateItems(a,b)
      }}>
      </Items>
      </div>
      <div className="location-buttons">
      <Sidebar
      locations={locations}
      func={(a) =>{
        filterLocation(a)
      }}>
      </Sidebar>
      </div>
    <div className="information">
    <Routes>
      <Route 
      path="/" 
      element={
      <Information
        itemArray={itemArray}
        checks={checks}
        locationArray={locationArray}
        func={(a) =>{
          hideCheck(a)
        }}
        completedArray={completedArray}>
        </Information>}/>
        <Route path="/completed" element={<Completed
        completedArray={completedArray}
        checks={checks}
        func={(a) =>{
          unHideCheck(a)
        }}/>
        }/>
    </Routes>
    </div>
    </div>
    </Router>
  );
}

export default App;
