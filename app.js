const STORE = "mount_os_v1";
const WALLPAPER_URL = "wallpaper.jpg";
const GEAR_URL = "settings-icon.png";
const USER_ICON = `<svg class="user-icon" viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true"><circle cx="24" cy="24" r="24" fill="#6b6b6b"/><circle cx="24" cy="18" r="8" fill="#e8e8e8"/><path d="M8 42c0-8.8 7.2-14 16-14s16 5.2 16 14" fill="#e8e8e8"/></svg>`;
const APPS = [
  { id: "settings", name: "Settings", icon: "GEAR", pinned: true, desktop: true },
  { id: "browser", name: "Mount", icon: "WEB", pinned: true, desktop: true },
  { id: "games", name: "Games", icon: "GAME", pinned: true, desktop: true },
  { id: "ai", name: "Mount AI", icon: "AI", pinned: true, desktop: true }
];
const MOUNT_AI_URL = "https://blackhole-ai.weswoodland13.workers.dev";

const GAMES_ICON = "games-icon.png";
let GAMES_CATALOG = null;
const GAMES_EMBEDDED = [{"id":"10-minutes-till-dawn","name":"10 Minutes Till Dawn","url":"https://class6x.gitlab.io/10-minutes-till-dawn/"},{"id":"11-11","name":"11 11","url":"https://class6x.gitlab.io/11-11/"},{"id":"12-mini-battles-2","name":"12 Mini Battles 2","url":"https://class6x.gitlab.io/12-mini-battles-2/"},{"id":"12-minibattles","name":"12 Minibattles","url":"https://class6x.gitlab.io/12-minibattles/"},{"id":"18-wheeler-cargo-simulator","name":"18 Wheeler Cargo Simulator","url":"https://class6x.gitlab.io/18-wheeler-cargo-simulator/"},{"id":"1v1-lol","name":"1v1 Lol","url":"https://class6x.gitlab.io/1v1-lol/"},{"id":"1v1-lol-offline","name":"1v1 Lol Offline","url":"https://class6x.gitlab.io/1v1-lol-offline/"},{"id":"2-minute-football","name":"2 Minute Football","url":"https://class6x.gitlab.io/2-minute-football/"},{"id":"2048","name":"2048","url":"https://class6x.gitlab.io/2048/"},{"id":"2048-multitask","name":"2048 Multitask","url":"https://class6x.gitlab.io/2048-multitask/"},{"id":"3d-car-simulator","name":"3d Car Simulator","url":"https://class6x.gitlab.io/3d-car-simulator/"},{"id":"3d-monster-truck-skyroads","name":"3d Monster Truck Skyroads","url":"https://class6x.gitlab.io/3d-monster-truck-skyroads/"},{"id":"3d-moto-simulator-2","name":"3d Moto Simulator 2","url":"https://class6x.gitlab.io/3d-moto-simulator-2/"},{"id":"4th-and-goal-2022","name":"4th And Goal 2022","url":"https://class6x.gitlab.io/4th-and-goal-2022/"},{"id":"4x4-drive-offroad","name":"4x4 Drive Offroad","url":"https://class6x.gitlab.io/4x4-drive-offroad/"},{"id":"8-ball-pool","name":"8 Ball Pool","url":"https://class6x.gitlab.io/8-ball-pool/"},{"id":"8bit-fiesta","name":"8bit Fiesta","url":"https://class6x.gitlab.io/8bit-fiesta/"},{"id":"9-ball-pool","name":"9 Ball Pool","url":"https://class6x.gitlab.io/9-ball-pool/"},{"id":"9-balls-pool","name":"9 Balls Pool","url":"https://class6x.gitlab.io/9-balls-pool/"},{"id":"a-dance-of-fire-and-ice","name":"A Dance Of Fire And Ice","url":"https://class6x.gitlab.io/a-dance-of-fire-and-ice/"},{"id":"a-pretty-odd-bunny","name":"A Pretty Odd Bunny","url":"https://class6x.gitlab.io/a-pretty-odd-bunny/"},{"id":"a-pretty-odd-bunny-roast-it","name":"A Pretty Odd Bunny Roast It","url":"https://class6x.gitlab.io/a-pretty-odd-bunny-roast-it/"},{"id":"a-small-world-cup","name":"A Small World Cup","url":"https://class6x.gitlab.io/a-small-world-cup/"},{"id":"adventure-drivers","name":"Adventure Drivers","url":"https://class6x.gitlab.io/adventure-drivers/"},{"id":"air-hockey-championship-deluxe","name":"Air Hockey Championship Deluxe","url":"https://class6x.gitlab.io/air-hockey-championship-deluxe/"},{"id":"aliens-nest","name":"Aliens Nest","url":"https://class6x.gitlab.io/aliens-nest/"},{"id":"amazing-bubble-breaker","name":"Amazing Bubble Breaker","url":"https://class6x.gitlab.io/amazing-bubble-breaker/"},{"id":"amazing-bubble-connect","name":"Amazing Bubble Connect","url":"https://class6x.gitlab.io/amazing-bubble-connect/"},{"id":"among-us","name":"Among Us","url":"https://class6x.gitlab.io/among-us/"},{"id":"animal-arena","name":"Animal Arena","url":"https://class6x.gitlab.io/animal-arena/"},{"id":"ape-sling","name":"Ape Sling","url":"https://class6x.gitlab.io/ape-sling/"},{"id":"aqua-thrills","name":"Aqua Thrills","url":"https://class6x.gitlab.io/aqua-thrills/"},{"id":"archer-master-3d-castle-defense","name":"Archer Master 3d Castle Defense","url":"https://class6x.gitlab.io/archer-master-3d-castle-defense/"},{"id":"archery-world-tour","name":"Archery World Tour","url":"https://class6x.gitlab.io/archery-world-tour/"},{"id":"arithmetica","name":"Arithmetica","url":"https://class6x.gitlab.io/arithmetica/"},{"id":"arrow-pathway","name":"Arrow Pathway","url":"https://class6x.gitlab.io/arrow-pathway/"},{"id":"athletics-hero","name":"Athletics Hero","url":"https://class6x.gitlab.io/athletics-hero/"},{"id":"avalanche","name":"Avalanche","url":"https://class6x.gitlab.io/avalanche/"},{"id":"b-cubed","name":"B Cubed","url":"https://class6x.gitlab.io/b-cubed/"},{"id":"bacon-may-die","name":"Bacon May Die","url":"https://class6x.gitlab.io/bacon-may-die/"},{"id":"bad-ice-cream-2","name":"Bad Ice Cream 2","url":"https://class6x.gitlab.io/bad-ice-cream-2/"},{"id":"bad-ice-cream-3","name":"Bad Ice Cream 3","url":"https://class6x.gitlab.io/bad-ice-cream-3/"},{"id":"barbershop-inc","name":"Barbershop Inc","url":"https://class6x.gitlab.io/barbershop-inc/"},{"id":"basket-and-ball","name":"Basket And Ball","url":"https://class6x.gitlab.io/basket-and-ball/"},{"id":"basket-bros","name":"Basket Bros","url":"https://class6x.gitlab.io/basket-bros/"},{"id":"basket-champs","name":"Basket Champs","url":"https://class6x.gitlab.io/basket-champs/"},{"id":"basket-random","name":"Basket Random","url":"https://class6x.gitlab.io/basket-random/"},{"id":"basket-swooshes","name":"Basket Swooshes","url":"https://class6x.gitlab.io/basket-swooshes/"},{"id":"basketball-frvr","name":"Basketball Frvr","url":"https://class6x.gitlab.io/basketball-frvr/"},{"id":"basketball-legends","name":"Basketball Legends","url":"https://class6x.gitlab.io/basketball-legends/"},{"id":"basketball-stars","name":"Basketball Stars","url":"https://class6x.gitlab.io/basketball-stars/"},{"id":"battle-golf","name":"Battle Golf","url":"https://class6x.gitlab.io/battle-golf/"},{"id":"battle-wheels","name":"Battle Wheels","url":"https://class6x.gitlab.io/battle-wheels/"},{"id":"bearsus","name":"Bearsus","url":"https://class6x.gitlab.io/bearsus/"},{"id":"become-a-dentist","name":"Become A Dentist","url":"https://class6x.gitlab.io/become-a-dentist/"},{"id":"become-a-puppy-groomer","name":"Become A Puppy Groomer","url":"https://class6x.gitlab.io/become-a-puppy-groomer/"},{"id":"big-shot-boxing","name":"Big Shot Boxing","url":"https://class6x.gitlab.io/big-shot-boxing/"},{"id":"big-tall-small","name":"Big Tall Small","url":"https://class6x.gitlab.io/big-tall-small/"},{"id":"bike-trials-offroad-1","name":"Bike Trials Offroad 1","url":"https://class6x.gitlab.io/bike-trials-offroad-1/"},{"id":"bike-trials-winter-1","name":"Bike Trials Winter 1","url":"https://class6x.gitlab.io/bike-trials-winter-1/"},{"id":"bike-trials-winter-2","name":"Bike Trials Winter 2","url":"https://class6x.gitlab.io/bike-trials-winter-2/"},{"id":"bird-jumper","name":"Bird Jumper","url":"https://class6x.gitlab.io/bird-jumper/"},{"id":"bitlife","name":"Bitlife","url":"https://class6x.gitlab.io/bitlife/"},{"id":"blob-drop","name":"Blob Drop","url":"https://class6x.gitlab.io/blob-drop/"},{"id":"block-the-pig","name":"Block The Pig","url":"https://class6x.gitlab.io/block-the-pig/"},{"id":"blockins","name":"Blockins","url":"https://class6x.gitlab.io/blockins/"},{"id":"blocky-cars","name":"Blocky Cars","url":"https://class6x.gitlab.io/blocky-cars/"},{"id":"blocky-trials","name":"Blocky Trials","url":"https://class6x.gitlab.io/blocky-trials/"},{"id":"blood-drift","name":"Blood Drift","url":"https://class6x.gitlab.io/blood-drift/"},{"id":"bloons-tower-defense-1","name":"Bloons Tower Defense 1","url":"https://class6x.gitlab.io/bloons-tower-defense-1/"},{"id":"blue","name":"Blue","url":"https://class6x.gitlab.io/blue/"},{"id":"blumgi-ball","name":"Blumgi Ball","url":"https://class6x.gitlab.io/blumgi-ball/"},{"id":"blumgi-bloom","name":"Blumgi Bloom","url":"https://class6x.gitlab.io/blumgi-bloom/"},{"id":"blumgi-castle","name":"Blumgi Castle","url":"https://class6x.gitlab.io/blumgi-castle/"},{"id":"blumgi-dragon","name":"Blumgi Dragon","url":"https://class6x.gitlab.io/blumgi-dragon/"},{"id":"blumgi-rocket","name":"Blumgi Rocket","url":"https://class6x.gitlab.io/blumgi-rocket/"},{"id":"blumgi-slime","name":"Blumgi Slime","url":"https://class6x.gitlab.io/blumgi-slime/"},{"id":"bob-the-robber-4","name":"Bob The Robber 4","url":"https://class6x.gitlab.io/bob-the-robber-4/"},{"id":"bomber-royale","name":"Bomber Royale","url":"https://class6x.gitlab.io/bomber-royale/"},{"id":"bottle-flip","name":"Bottle Flip","url":"https://class6x.gitlab.io/bottle-flip/"},{"id":"bouncy-basketball","name":"Bouncy Basketball","url":"https://class6x.gitlab.io/bouncy-basketball/"},{"id":"bowling-stars","name":"Bowling Stars","url":"https://class6x.gitlab.io/bowling-stars/"},{"id":"boxing-physics-2","name":"Boxing Physics 2","url":"https://class6x.gitlab.io/boxing-physics-2/"},{"id":"boxing-random","name":"Boxing Random","url":"https://class6x.gitlab.io/boxing-random/"},{"id":"boxrob","name":"Boxrob","url":"https://class6x.gitlab.io/boxrob/"},{"id":"boxrob-2","name":"Boxrob 2","url":"https://class6x.gitlab.io/boxrob-2/"},{"id":"boxrob-3","name":"Boxrob 3","url":"https://class6x.gitlab.io/boxrob-3/"},{"id":"brain-test-2-tricky-stories","name":"Brain Test 2 Tricky Stories","url":"https://class6x.gitlab.io/brain-test-2-tricky-stories/"},{"id":"brain-test-3-tricky-quests","name":"Brain Test 3 Tricky Quests","url":"https://class6x.gitlab.io/brain-test-3-tricky-quests/"},{"id":"brain-test-4-tricky-friends","name":"Brain Test 4 Tricky Friends","url":"https://class6x.gitlab.io/brain-test-4-tricky-friends/"},{"id":"brain-test-tricky-puzzles","name":"Brain Test Tricky Puzzles","url":"https://class6x.gitlab.io/brain-test-tricky-puzzles/"},{"id":"breaking-the-bank","name":"Breaking The Bank","url":"https://class6x.gitlab.io/breaking-the-bank/"},{"id":"bubble-shooter","name":"Bubble Shooter","url":"https://class6x.gitlab.io/bubble-shooter/"},{"id":"bullet-bro","name":"Bullet Bro","url":"https://class6x.gitlab.io/bullet-bro/"},{"id":"bullet-bros","name":"Bullet Bros","url":"https://class6x.gitlab.io/bullet-bros/"},{"id":"bullet-force","name":"Bullet Force","url":"https://class6x.gitlab.io/bullet-force/"},{"id":"bumper-cars-soccer","name":"Bumper Cars Soccer","url":"https://class6x.gitlab.io/bumper-cars-soccer/"},{"id":"bumpy-jumpy","name":"Bumpy Jumpy","url":"https://class6x.gitlab.io/bumpy-jumpy/"},{"id":"burger-bounty","name":"Burger Bounty","url":"https://class6x.gitlab.io/burger-bounty/"},{"id":"burnin-rubber-5-xs","name":"Burnin Rubber 5 Xs","url":"https://class6x.gitlab.io/burnin-rubber-5-xs/"},{"id":"burnin-rubber-crash-n-burn","name":"Burnin Rubber Crash N Burn","url":"https://class6x.gitlab.io/burnin-rubber-crash-n-burn/"},{"id":"burnout-drift-seaport-max","name":"Burnout Drift Seaport Max","url":"https://class6x.gitlab.io/burnout-drift-seaport-max/"},{"id":"burnout-extreme-drift-2","name":"Burnout Extreme Drift 2","url":"https://class6x.gitlab.io/burnout-extreme-drift-2/"},{"id":"burrito-bison","name":"Burrito Bison","url":"https://class6x.gitlab.io/burrito-bison/"},{"id":"candy-jump","name":"Candy Jump","url":"https://class6x.gitlab.io/candy-jump/"},{"id":"car-climb-racing","name":"Car Climb Racing","url":"https://class6x.gitlab.io/car-climb-racing/"},{"id":"car-drift-racers-2","name":"Car Drift Racers 2","url":"https://class6x.gitlab.io/car-drift-racers-2/"},{"id":"car-eats-car-winter-adventure","name":"Car Eats Car Winter Adventure","url":"https://class6x.gitlab.io/car-eats-car-winter-adventure/"},{"id":"car-simulator-arena","name":"Car Simulator Arena","url":"https://class6x.gitlab.io/car-simulator-arena/"},{"id":"cars-thief","name":"Cars Thief","url":"https://class6x.gitlab.io/cars-thief/"},{"id":"cars-thief-tank-edition","name":"Cars Thief Tank Edition","url":"https://class6x.gitlab.io/cars-thief-tank-edition/"},{"id":"castle-of-chaos","name":"Castle Of Chaos","url":"https://class6x.gitlab.io/castle-of-chaos/"},{"id":"casual-chess","name":"Casual Chess","url":"https://class6x.gitlab.io/casual-chess/"},{"id":"cat-gunner-super-zombie-shoot","name":"Cat Gunner Super Zombie Shoot","url":"https://class6x.gitlab.io/cat-gunner-super-zombie-shoot/"},{"id":"cat-trap","name":"Cat Trap","url":"https://class6x.gitlab.io/cat-trap/"},{"id":"catpad","name":"Catpad","url":"https://class6x.gitlab.io/catpad/"},{"id":"cats","name":"Cats","url":"https://class6x.gitlab.io/cats/"},{"id":"cats-love-cake","name":"Cats Love Cake","url":"https://class6x.gitlab.io/cats-love-cake/"},{"id":"cats-love-cake-2","name":"Cats Love Cake 2","url":"https://class6x.gitlab.io/cats-love-cake-2/"},{"id":"cave-blast","name":"Cave Blast","url":"https://class6x.gitlab.io/cave-blast/"},{"id":"chess-grandmaster","name":"Chess Grandmaster","url":"https://class6x.gitlab.io/chess-grandmaster/"},{"id":"chicken-sword-ninja-master","name":"Chicken Sword Ninja Master","url":"https://class6x.gitlab.io/chicken-sword-ninja-master/"},{"id":"circloo-2","name":"Circloo 2","url":"https://class6x.gitlab.io/circloo-2/"},{"id":"city-bike-stunt-2","name":"City Bike Stunt 2","url":"https://class6x.gitlab.io/city-bike-stunt-2/"},{"id":"city-car-driving-stunt-master","name":"City Car Driving Stunt Master","url":"https://class6x.gitlab.io/city-car-driving-stunt-master/"},{"id":"city-rider","name":"City Rider","url":"https://class6x.gitlab.io/city-rider/"},{"id":"clash-of-tanks","name":"Clash Of Tanks","url":"https://class6x.gitlab.io/clash-of-tanks/"},{"id":"cluster-rush","name":"Cluster Rush","url":"https://class6x.gitlab.io/cluster-rush/"},{"id":"color-switch","name":"Color Switch","url":"https://class6x.gitlab.io/color-switch/"},{"id":"color-tunnel-2","name":"Color Tunnel 2","url":"https://class6x.gitlab.io/color-tunnel-2/"},{"id":"colorup","name":"Colorup","url":"https://class6x.gitlab.io/colorup/"},{"id":"connect-248","name":"Connect 248","url":"https://class6x.gitlab.io/connect-248/"},{"id":"cookie-clicker","name":"Cookie Clicker","url":"https://class6x.gitlab.io/cookie-clicker/"},{"id":"cooking-fast","name":"Cooking Fast","url":"https://class6x.gitlab.io/cooking-fast/"},{"id":"cosmos-lines","name":"Cosmos Lines","url":"https://class6x.gitlab.io/cosmos-lines/"},{"id":"court-kings-3d","name":"Court Kings 3d","url":"https://class6x.gitlab.io/court-kings-3d/"},{"id":"cozy-room-design","name":"Cozy Room Design","url":"https://class6x.gitlab.io/cozy-room-design/"},{"id":"crazy-bikes","name":"Crazy Bikes","url":"https://class6x.gitlab.io/crazy-bikes/"},{"id":"crazy-cars","name":"Crazy Cars","url":"https://class6x.gitlab.io/crazy-cars/"},{"id":"crazy-tunnel-3d","name":"Crazy Tunnel 3d","url":"https://class6x.gitlab.io/crazy-tunnel-3d/"},{"id":"cricket-world-cup","name":"Cricket World Cup","url":"https://class6x.gitlab.io/cricket-world-cup/"},{"id":"crossy-road","name":"Crossy Road","url":"https://class6x.gitlab.io/crossy-road/"},{"id":"crown-guard","name":"Crown Guard","url":"https://class6x.gitlab.io/crown-guard/"},{"id":"cubes-king","name":"Cubes King","url":"https://class6x.gitlab.io/cubes-king/"},{"id":"cubinko","name":"Cubinko","url":"https://class6x.gitlab.io/cubinko/"},{"id":"curve-ball-3d","name":"Curve Ball 3d","url":"https://class6x.gitlab.io/curve-ball-3d/"},{"id":"cyber-cars-punk-racing","name":"Cyber Cars Punk Racing","url":"https://class6x.gitlab.io/cyber-cars-punk-racing/"},{"id":"daddy-long-legs","name":"Daddy Long Legs","url":"https://class6x.gitlab.io/daddy-long-legs/"},{"id":"dadish","name":"Dadish","url":"https://class6x.gitlab.io/dadish/"},{"id":"dadish-3d","name":"Dadish 3d","url":"https://class6x.gitlab.io/dadish-3d/"},{"id":"dana-relics-for-sale","name":"Dana Relics For Sale","url":"https://class6x.gitlab.io/dana-relics-for-sale/"},{"id":"dead-paradise-race-shooter","name":"Dead Paradise Race Shooter","url":"https://class6x.gitlab.io/dead-paradise-race-shooter/"},{"id":"death-chase","name":"Death Chase","url":"https://class6x.gitlab.io/death-chase/"},{"id":"death-run-3d","name":"Death Run 3d","url":"https://class6x.gitlab.io/death-run-3d/"},{"id":"deepest-sword","name":"Deepest Sword","url":"https://class6x.gitlab.io/deepest-sword/"},{"id":"deer-simulator","name":"Deer Simulator","url":"https://class6x.gitlab.io/deer-simulator/"},{"id":"demolition-derby-crash-racing","name":"Demolition Derby Crash Racing","url":"https://class6x.gitlab.io/demolition-derby-crash-racing/"},{"id":"descent","name":"Descent","url":"https://class6x.gitlab.io/descent/"},{"id":"detective-dan","name":"Detective Dan","url":"https://class6x.gitlab.io/detective-dan/"},{"id":"digging-master","name":"Digging Master","url":"https://class6x.gitlab.io/digging-master/"},{"id":"dinosaur-game","name":"Dinosaur Game","url":"https://class6x.gitlab.io/dinosaur-game/"},{"id":"doctor-hero","name":"Doctor Hero","url":"https://class6x.gitlab.io/doctor-hero/"},{"id":"doge-miner","name":"Doge Miner","url":"https://class6x.gitlab.io/doge-miner/"},{"id":"double-panda","name":"Double Panda","url":"https://class6x.gitlab.io/double-panda/"},{"id":"dragon-simulator-3d","name":"Dragon Simulator 3d","url":"https://class6x.gitlab.io/dragon-simulator-3d/"},{"id":"draw-the-hill","name":"Draw The Hill","url":"https://class6x.gitlab.io/draw-the-hill/"},{"id":"dreadhead-parkour","name":"Dreadhead Parkour","url":"https://class6x.gitlab.io/dreadhead-parkour/"},{"id":"drift-boss","name":"Drift Boss","url":"https://class6x.gitlab.io/drift-boss/"},{"id":"drift-hunters","name":"Drift Hunters","url":"https://class6x.gitlab.io/drift-hunters/"},{"id":"driftwave","name":"Driftwave","url":"https://class6x.gitlab.io/driftwave/"},{"id":"drive-mad","name":"Drive Mad","url":"https://class6x.gitlab.io/drive-mad/"},{"id":"drunken-duel","name":"Drunken Duel","url":"https://class6x.gitlab.io/drunken-duel/"},{"id":"dubai-police-parking-2","name":"Dubai Police Parking 2","url":"https://class6x.gitlab.io/dubai-police-parking-2/"},{"id":"ducklingsio","name":"Ducklingsio","url":"https://class6x.gitlab.io/ducklingsio/"},{"id":"dunk-perfect","name":"Dunk Perfect","url":"https://class6x.gitlab.io/dunk-perfect/"},{"id":"dunkbrush","name":"Dunkbrush","url":"https://class6x.gitlab.io/dunkbrush/"},{"id":"dunkers","name":"Dunkers","url":"https://class6x.gitlab.io/dunkers/"},{"id":"duo-survival","name":"Duo Survival","url":"https://class6x.gitlab.io/duo-survival/"},{"id":"duo-survival-3","name":"Duo Survival 3","url":"https://class6x.gitlab.io/duo-survival-3/"},{"id":"duo-vikings-2","name":"Duo Vikings 2","url":"https://class6x.gitlab.io/duo-vikings-2/"},{"id":"duo-vikings-3","name":"Duo Vikings 3","url":"https://class6x.gitlab.io/duo-vikings-3/"},{"id":"dyna-boy","name":"Dyna Boy","url":"https://class6x.gitlab.io/dyna-boy/"},{"id":"earn-to-die","name":"Earn To Die","url":"https://class6x.gitlab.io/earn-to-die/"},{"id":"eggbot-vs-zombies","name":"Eggbot Vs Zombies","url":"https://class6x.gitlab.io/eggbot-vs-zombies/"},{"id":"eggy-car","name":"Eggy Car","url":"https://class6x.gitlab.io/eggy-car/"},{"id":"elastic-man","name":"Elastic Man","url":"https://class6x.gitlab.io/elastic-man/"},{"id":"electron-dash","name":"Electron Dash","url":"https://class6x.gitlab.io/electron-dash/"},{"id":"element-bblocks","name":"Element Bblocks","url":"https://class6x.gitlab.io/element-bblocks/"},{"id":"element-blocks","name":"Element Blocks","url":"https://class6x.gitlab.io/element-blocks/"},{"id":"eliza-mall-mania","name":"Eliza Mall Mania","url":"https://class6x.gitlab.io/eliza-mall-mania/"},{"id":"energy","name":"Energy","url":"https://class6x.gitlab.io/energy/"},{"id":"escaping-the-prison","name":"Escaping The Prison","url":"https://class6x.gitlab.io/escaping-the-prison/"},{"id":"eugenes-life","name":"Eugenes Life","url":"https://class6x.gitlab.io/eugenes-life/"},{"id":"extreme-car-driving-simulator","name":"Extreme Car Driving Simulator","url":"https://class6x.gitlab.io/extreme-car-driving-simulator/"},{"id":"extreme-off-road-cars-3-cargo","name":"Extreme Off Road Cars 3 Cargo","url":"https://class6x.gitlab.io/extreme-off-road-cars-3-cargo/"},{"id":"fairy-dressup","name":"Fairy Dressup","url":"https://class6x.gitlab.io/fairy-dressup/"},{"id":"fancy-pants","name":"Fancy Pants","url":"https://class6x.gitlab.io/fancy-pants/"},{"id":"fancy-pants-2","name":"Fancy Pants 2","url":"https://class6x.gitlab.io/fancy-pants-2/"},{"id":"fancy-pants-3","name":"Fancy Pants 3","url":"https://class6x.gitlab.io/fancy-pants-3/"},{"id":"fast-food-dumpster-adventure","name":"Fast Food Dumpster Adventure","url":"https://class6x.gitlab.io/fast-food-dumpster-adventure/"},{"id":"fireboy-and-watergirl-1-forest-temple","name":"Fireboy And Watergirl 1 Forest Temple","url":"https://class6x.gitlab.io/fireboy-and-watergirl-1-forest-temple/"},{"id":"fireboy-and-watergirl-2-light-temple","name":"Fireboy And Watergirl 2 Light Temple","url":"https://class6x.gitlab.io/fireboy-and-watergirl-2-light-temple/"},{"id":"fireboy-and-watergirl-3-ice-temple","name":"Fireboy And Watergirl 3 Ice Temple","url":"https://class6x.gitlab.io/fireboy-and-watergirl-3-ice-temple/"},{"id":"fireboy-and-watergirl-4-crystal-temple","name":"Fireboy And Watergirl 4 Crystal Temple","url":"https://class6x.gitlab.io/fireboy-and-watergirl-4-crystal-temple/"},{"id":"fireboy-and-watergirl-5-elements","name":"Fireboy And Watergirl 5 Elements","url":"https://class6x.gitlab.io/fireboy-and-watergirl-5-elements/"},{"id":"fireboy-and-watergirl-6-fairy-tales","name":"Fireboy And Watergirl 6 Fairy Tales","url":"https://class6x.gitlab.io/fireboy-and-watergirl-6-fairy-tales/"},{"id":"fireboy-watergirl-6-fairy-tales","name":"Fireboy Watergirl 6 Fairy Tales","url":"https://class6x.gitlab.io/fireboy-watergirl-6-fairy-tales/"},{"id":"fleeing-the-complex","name":"Fleeing The Complex","url":"https://class6x.gitlab.io/fleeing-the-complex/"},{"id":"flip-runner","name":"Flip Runner","url":"https://class6x.gitlab.io/flip-runner/"},{"id":"foot-chinko","name":"Foot Chinko","url":"https://class6x.gitlab.io/foot-chinko/"},{"id":"football-masters","name":"Football Masters","url":"https://class6x.gitlab.io/football-masters/"},{"id":"football-penalty-champions","name":"Football Penalty Champions","url":"https://class6x.gitlab.io/football-penalty-champions/"},{"id":"forgotten-hill-the-wardrobe-3","name":"Forgotten Hill The Wardrobe 3","url":"https://class6x.gitlab.io/forgotten-hill-the-wardrobe-3/"},{"id":"fortride-open-world","name":"Fortride Open World","url":"https://class6x.gitlab.io/fortride-open-world/"},{"id":"fortz","name":"Fortz","url":"https://class6x.gitlab.io/fortz/"},{"id":"four-in-a-row","name":"Four In A Row","url":"https://class6x.gitlab.io/four-in-a-row/"},{"id":"free-kick-screamers","name":"Free Kick Screamers","url":"https://class6x.gitlab.io/free-kick-screamers/"},{"id":"free-kick-shooter","name":"Free Kick Shooter","url":"https://class6x.gitlab.io/free-kick-shooter/"},{"id":"fruit-ninja","name":"Fruit Ninja","url":"https://class6x.gitlab.io/fruit-ninja/"},{"id":"funny-shooter-2","name":"Funny Shooter 2","url":"https://class6x.gitlab.io/funny-shooter-2/"},{"id":"fury-wars","name":"Fury Wars","url":"https://class6x.gitlab.io/fury-wars/"},{"id":"g-switch-3","name":"G Switch 3","url":"https://class6x.gitlab.io/g-switch-3/"},{"id":"g-switch-4","name":"G Switch 4","url":"https://class6x.gitlab.io/g-switch-4/"},{"id":"gangster-contract-mafia-wars","name":"Gangster Contract Mafia Wars","url":"https://class6x.gitlab.io/gangster-contract-mafia-wars/"},{"id":"geometry-dash","name":"Geometry Dash","url":"https://class6x.gitlab.io/geometry-dash/"},{"id":"getaway-shootout","name":"Getaway Shootout","url":"https://class6x.gitlab.io/getaway-shootout/"},{"id":"goat-vs-zombies","name":"Goat Vs Zombies","url":"https://class6x.gitlab.io/goat-vs-zombies/"},{"id":"gobdun","name":"Gobdun","url":"https://class6x.gitlab.io/gobdun/"},{"id":"golf-champions","name":"Golf Champions","url":"https://class6x.gitlab.io/golf-champions/"},{"id":"golfinity","name":"Golfinity","url":"https://class6x.gitlab.io/golfinity/"},{"id":"grand-prix-hero","name":"Grand Prix Hero","url":"https://class6x.gitlab.io/grand-prix-hero/"},{"id":"grindcraft","name":"Grindcraft","url":"https://class6x.gitlab.io/grindcraft/"},{"id":"gun-mayhem-2","name":"Gun Mayhem 2","url":"https://class6x.gitlab.io/gun-mayhem-2/"},{"id":"gunspin","name":"Gunspin","url":"https://class6x.gitlab.io/gunspin/"},{"id":"hammer-2-reloaded","name":"Hammer 2 Reloaded","url":"https://class6x.gitlab.io/hammer-2-reloaded/"},{"id":"head-soccer-2023","name":"Head Soccer 2023","url":"https://class6x.gitlab.io/head-soccer-2023/"},{"id":"heads-arena-soccer-all-stars","name":"Heads Arena Soccer All Stars","url":"https://class6x.gitlab.io/heads-arena-soccer-all-stars/"},{"id":"hide-and-smash","name":"Hide And Smash","url":"https://class6x.gitlab.io/hide-and-smash/"},{"id":"highway-bike-simulator","name":"Highway Bike Simulator","url":"https://class6x.gitlab.io/highway-bike-simulator/"},{"id":"highway-racer-3d","name":"Highway Racer 3d","url":"https://class6x.gitlab.io/highway-racer-3d/"},{"id":"highway-traffic","name":"Highway Traffic","url":"https://class6x.gitlab.io/highway-traffic/"},{"id":"hills-of-steel","name":"Hills Of Steel","url":"https://class6x.gitlab.io/hills-of-steel/"},{"id":"hop-chop","name":"Hop Chop","url":"https://class6x.gitlab.io/hop-chop/"},{"id":"hoppenhelm","name":"Hoppenhelm","url":"https://class6x.gitlab.io/hoppenhelm/"},{"id":"horse-simulator-3d","name":"Horse Simulator 3d","url":"https://class6x.gitlab.io/horse-simulator-3d/"},{"id":"house-of-hazards","name":"House Of Hazards","url":"https://class6x.gitlab.io/house-of-hazards/"},{"id":"hover-racer-drive","name":"Hover Racer Drive","url":"https://class6x.gitlab.io/hover-racer-drive/"},{"id":"idle-ants","name":"Idle Ants","url":"https://class6x.gitlab.io/idle-ants/"},{"id":"idle-digging-tycoon","name":"Idle Digging Tycoon","url":"https://class6x.gitlab.io/idle-digging-tycoon/"},{"id":"idle-startup-tycoon","name":"Idle Startup Tycoon","url":"https://class6x.gitlab.io/idle-startup-tycoon/"},{"id":"infinite-soccer","name":"Infinite Soccer","url":"https://class6x.gitlab.io/infinite-soccer/"},{"id":"into-the-pit","name":"Into The Pit","url":"https://class6x.gitlab.io/into-the-pit/"},{"id":"james-gun","name":"James Gun","url":"https://class6x.gitlab.io/james-gun/"},{"id":"jelly-truck","name":"Jelly Truck","url":"https://class6x.gitlab.io/jelly-truck/"},{"id":"jetpack-joyride","name":"Jetpack Joyride","url":"https://class6x.gitlab.io/jetpack-joyride/"},{"id":"jollyworld","name":"Jollyworld","url":"https://class6x.gitlab.io/jollyworld/"},{"id":"just-park-it-11","name":"Just Park It 11","url":"https://class6x.gitlab.io/just-park-it-11/"},{"id":"kix-dream-soccer","name":"Kix Dream Soccer","url":"https://class6x.gitlab.io/kix-dream-soccer/"},{"id":"lands-of-blight","name":"Lands Of Blight","url":"https://class6x.gitlab.io/lands-of-blight/"},{"id":"last-warriors","name":"Last Warriors","url":"https://class6x.gitlab.io/last-warriors/"},{"id":"leader-strike","name":"Leader Strike","url":"https://class6x.gitlab.io/leader-strike/"},{"id":"ledge-throw","name":"Ledge Throw","url":"https://class6x.gitlab.io/ledge-throw/"},{"id":"lethal-sniper-3d-army-soldier","name":"Lethal Sniper 3d Army Soldier","url":"https://class6x.gitlab.io/lethal-sniper-3d-army-soldier/"},{"id":"level-devil","name":"Level Devil","url":"https://class6x.gitlab.io/level-devil/"},{"id":"little-master-cricket","name":"Little Master Cricket","url":"https://class6x.gitlab.io/little-master-cricket/"},{"id":"mad-day","name":"Mad Day","url":"https://class6x.gitlab.io/mad-day/"},{"id":"madalin-stunt-cars-3","name":"Madalin Stunt Cars 3","url":"https://class6x.gitlab.io/madalin-stunt-cars-3/"},{"id":"madzoong","name":"Madzoong","url":"https://class6x.gitlab.io/madzoong/"},{"id":"make-it-meme","name":"Make It Meme","url":"https://class6x.gitlab.io/make-it-meme/"},{"id":"masked-forces","name":"Masked Forces","url":"https://class6x.gitlab.io/masked-forces/"},{"id":"master-checkers","name":"Master Checkers","url":"https://class6x.gitlab.io/master-checkers/"},{"id":"master-chess","name":"Master Chess","url":"https://class6x.gitlab.io/master-chess/"},{"id":"mimelet","name":"Mimelet","url":"https://class6x.gitlab.io/mimelet/"},{"id":"minecraft-builder","name":"Minecraft Builder","url":"https://class6x.gitlab.io/minecraft-builder/"},{"id":"mob-city","name":"Mob City","url":"https://class6x.gitlab.io/mob-city/"},{"id":"monster-tracks","name":"Monster Tracks","url":"https://class6x.gitlab.io/monster-tracks/"},{"id":"moto-maniac","name":"Moto Maniac","url":"https://class6x.gitlab.io/moto-maniac/"},{"id":"moto-maniac-2","name":"Moto Maniac 2","url":"https://class6x.gitlab.io/moto-maniac-2/"},{"id":"moto-road-rash-3d","name":"Moto Road Rash 3d","url":"https://class6x.gitlab.io/moto-road-rash-3d/"},{"id":"moto-x3m","name":"Moto X3m","url":"https://class6x.gitlab.io/moto-x3m/"},{"id":"moto-x3m-2","name":"Moto X3m 2","url":"https://class6x.gitlab.io/moto-x3m-2/"},{"id":"moto-x3m-pool-party","name":"Moto X3m Pool Party","url":"https://class6x.gitlab.io/moto-x3m-pool-party/"},{"id":"moto-x3m-spooky-land","name":"Moto X3m Spooky Land","url":"https://class6x.gitlab.io/moto-x3m-spooky-land/"},{"id":"moto-x3m-winter","name":"Moto X3m Winter","url":"https://class6x.gitlab.io/moto-x3m-winter/"},{"id":"moving-truck-bounty","name":"Moving Truck Bounty","url":"https://class6x.gitlab.io/moving-truck-bounty/"},{"id":"murder","name":"Murder","url":"https://class6x.gitlab.io/murder/"},{"id":"n-gon","name":"N Gon","url":"https://class6x.gitlab.io/n-gon/"},{"id":"narrow-one","name":"Narrow One","url":"https://class6x.gitlab.io/narrow-one/"},{"id":"nightpoint-io","name":"Nightpoint Io","url":"https://class6x.gitlab.io/nightpoint-io/"},{"id":"noob-drive","name":"Noob Drive","url":"https://class6x.gitlab.io/noob-drive/"},{"id":"noob-hook","name":"Noob Hook","url":"https://class6x.gitlab.io/noob-hook/"},{"id":"odd-bot-out","name":"Odd Bot Out","url":"https://class6x.gitlab.io/odd-bot-out/"},{"id":"offroader-v5","name":"Offroader V5","url":"https://class6x.gitlab.io/offroader-v5/"},{"id":"ooze-odyssey","name":"Ooze Odyssey","url":"https://class6x.gitlab.io/ooze-odyssey/"},{"id":"ovo","name":"Ovo","url":"https://class6x.gitlab.io/ovo/"},{"id":"ovo-dimensions","name":"Ovo Dimensions","url":"https://class6x.gitlab.io/ovo-dimensions/"},{"id":"papas-cheeseria","name":"Papas Cheeseria","url":"https://class6x.gitlab.io/papas-cheeseria/"},{"id":"papas-donuteria","name":"Papas Donuteria","url":"https://class6x.gitlab.io/papas-donuteria/"},{"id":"papas-hotdoggeria","name":"Papas Hotdoggeria","url":"https://class6x.gitlab.io/papas-hotdoggeria/"},{"id":"papas-pancakeria","name":"Papas Pancakeria","url":"https://class6x.gitlab.io/papas-pancakeria/"},{"id":"papas-pizzeria","name":"Papas Pizzeria","url":"https://class6x.gitlab.io/papas-pizzeria/"},{"id":"paper-fighter-3d","name":"Paper Fighter 3d","url":"https://class6x.gitlab.io/paper-fighter-3d/"},{"id":"paper-io-2","name":"Paper Io 2","url":"https://class6x.gitlab.io/paper-io-2/"},{"id":"paper-minecraft","name":"Paper Minecraft","url":"https://class6x.gitlab.io/paper-minecraft/"},{"id":"parking-fury","name":"Parking Fury","url":"https://class6x.gitlab.io/parking-fury/"},{"id":"parking-fury-2","name":"Parking Fury 2","url":"https://class6x.gitlab.io/parking-fury-2/"},{"id":"parkmania","name":"Parkmania","url":"https://class6x.gitlab.io/parkmania/"},{"id":"penalty-rivals","name":"Penalty Rivals","url":"https://class6x.gitlab.io/penalty-rivals/"},{"id":"penalty-shooters-2","name":"Penalty Shooters 2","url":"https://class6x.gitlab.io/penalty-shooters-2/"},{"id":"perfect-peel","name":"Perfect Peel","url":"https://class6x.gitlab.io/perfect-peel/"},{"id":"ping-pong-chaos","name":"Ping Pong Chaos","url":"https://class6x.gitlab.io/ping-pong-chaos/"},{"id":"pixel-gun-survival","name":"Pixel Gun Survival","url":"https://class6x.gitlab.io/pixel-gun-survival/"},{"id":"pixwars-2","name":"Pixwars 2","url":"https://class6x.gitlab.io/pixwars-2/"},{"id":"pizzafall","name":"Pizzafall","url":"https://class6x.gitlab.io/pizzafall/"},{"id":"pool-club","name":"Pool Club","url":"https://class6x.gitlab.io/pool-club/"},{"id":"poor-bunny","name":"Poor Bunny","url":"https://class6x.gitlab.io/poor-bunny/"},{"id":"power-badminton","name":"Power Badminton","url":"https://class6x.gitlab.io/power-badminton/"},{"id":"puppet-master","name":"Puppet Master","url":"https://class6x.gitlab.io/puppet-master/"},{"id":"raft-wars-2","name":"Raft Wars 2","url":"https://class6x.gitlab.io/raft-wars-2/"},{"id":"ragdoll-hit","name":"Ragdoll Hit","url":"https://class6x.gitlab.io/ragdoll-hit/"},{"id":"rally-champion","name":"Rally Champion","url":"https://class6x.gitlab.io/rally-champion/"},{"id":"rally-point","name":"Rally Point","url":"https://class6x.gitlab.io/rally-point/"},{"id":"rally-point-5","name":"Rally Point 5","url":"https://class6x.gitlab.io/rally-point-5/"},{"id":"rebels-clash","name":"Rebels Clash","url":"https://class6x.gitlab.io/rebels-clash/"},{"id":"recoil","name":"Recoil","url":"https://class6x.gitlab.io/recoil/"},{"id":"retro-bowl","name":"Retro Bowl","url":"https://class6x.gitlab.io/retro-bowl/"},{"id":"retro-highway","name":"Retro Highway","url":"https://class6x.gitlab.io/retro-highway/"},{"id":"riddle-school","name":"Riddle School","url":"https://class6x.gitlab.io/riddle-school/"},{"id":"rocket-soccer-derby","name":"Rocket Soccer Derby","url":"https://class6x.gitlab.io/rocket-soccer-derby/"},{"id":"rodeo-stampede-savannah","name":"Rodeo Stampede Savannah","url":"https://class6x.gitlab.io/rodeo-stampede-savannah/"},{"id":"rolling-sky","name":"Rolling Sky","url":"https://class6x.gitlab.io/rolling-sky/"},{"id":"rooftop-snipers","name":"Rooftop Snipers","url":"https://class6x.gitlab.io/rooftop-snipers/"},{"id":"school-bus-demolition-derby","name":"School Bus Demolition Derby","url":"https://class6x.gitlab.io/school-bus-demolition-derby/"},{"id":"shady-bears","name":"Shady Bears","url":"https://class6x.gitlab.io/shady-bears/"},{"id":"shoot-stickman","name":"Shoot Stickman","url":"https://class6x.gitlab.io/shoot-stickman/"},{"id":"shootz","name":"Shootz","url":"https://class6x.gitlab.io/shootz/"},{"id":"short-life","name":"Short Life","url":"https://class6x.gitlab.io/short-life/"},{"id":"short-ride","name":"Short Ride","url":"https://class6x.gitlab.io/short-ride/"},{"id":"shortcut-race","name":"Shortcut Race","url":"https://class6x.gitlab.io/shortcut-race/"},{"id":"skateboard-hero","name":"Skateboard Hero","url":"https://class6x.gitlab.io/skateboard-hero/"},{"id":"slime-laboratory","name":"Slime Laboratory","url":"https://class6x.gitlab.io/slime-laboratory/"},{"id":"slime-laboratory-3","name":"Slime Laboratory 3","url":"https://class6x.gitlab.io/slime-laboratory-3/"},{"id":"sling-drift","name":"Sling Drift","url":"https://class6x.gitlab.io/sling-drift/"},{"id":"slope","name":"Slope","url":"https://class6x.gitlab.io/slope/"},{"id":"slope-2","name":"Slope 2","url":"https://class6x.gitlab.io/slope-2/"},{"id":"slope-2-multiplayer","name":"Slope 2 Multiplayer","url":"https://class6x.gitlab.io/slope-2-multiplayer/"},{"id":"slot-car-racing","name":"Slot Car Racing","url":"https://class6x.gitlab.io/slot-car-racing/"},{"id":"smash-karts","name":"Smash Karts","url":"https://class6x.gitlab.io/smash-karts/"},{"id":"snake","name":"Snake","url":"https://class6x.gitlab.io/snake/"},{"id":"snake-is-mlg-edition","name":"Snake Is Mlg Edition","url":"https://class6x.gitlab.io/snake-is-mlg-edition/"},{"id":"snakeis-mlg-edition","name":"Snakeis Mlg Edition","url":"https://class6x.gitlab.io/snakeis-mlg-edition/"},{"id":"sniper-gun-shooting","name":"Sniper Gun Shooting","url":"https://class6x.gitlab.io/sniper-gun-shooting/"},{"id":"snow-rider-3d","name":"Snow Rider 3d","url":"https://class6x.gitlab.io/snow-rider-3d/"},{"id":"soccar","name":"Soccar","url":"https://class6x.gitlab.io/soccar/"},{"id":"soccer-random","name":"Soccer Random","url":"https://class6x.gitlab.io/soccer-random/"},{"id":"soccer-skills-champions-league","name":"Soccer Skills Champions League","url":"https://class6x.gitlab.io/soccer-skills-champions-league/"},{"id":"soccer-skills-euro-cup","name":"Soccer Skills Euro Cup","url":"https://class6x.gitlab.io/soccer-skills-euro-cup/"},{"id":"soccer-skills-world-cup","name":"Soccer Skills World Cup","url":"https://class6x.gitlab.io/soccer-skills-world-cup/"},{"id":"space-major-miner","name":"Space Major Miner","url":"https://class6x.gitlab.io/space-major-miner/"},{"id":"speed-boat-extreme-racing","name":"Speed Boat Extreme Racing","url":"https://class6x.gitlab.io/speed-boat-extreme-racing/"},{"id":"stack-ball","name":"Stack Ball","url":"https://class6x.gitlab.io/stack-ball/"},{"id":"stacktris","name":"Stacktris","url":"https://class6x.gitlab.io/stacktris/"},{"id":"stealing-the-diamond","name":"Stealing The Diamond","url":"https://class6x.gitlab.io/stealing-the-diamond/"},{"id":"stick-defenders","name":"Stick Defenders","url":"https://class6x.gitlab.io/stick-defenders/"},{"id":"stick-fighter","name":"Stick Fighter","url":"https://class6x.gitlab.io/stick-fighter/"},{"id":"stick-merge","name":"Stick Merge","url":"https://class6x.gitlab.io/stick-merge/"},{"id":"stickman-archero-fight","name":"Stickman Archero Fight","url":"https://class6x.gitlab.io/stickman-archero-fight/"},{"id":"stickman-army-team-battle","name":"Stickman Army Team Battle","url":"https://class6x.gitlab.io/stickman-army-team-battle/"},{"id":"stickman-army-the-resistance","name":"Stickman Army The Resistance","url":"https://class6x.gitlab.io/stickman-army-the-resistance/"},{"id":"stickman-bike","name":"Stickman Bike","url":"https://class6x.gitlab.io/stickman-bike/"},{"id":"stickman-bike-pr","name":"Stickman Bike Pr","url":"https://class6x.gitlab.io/stickman-bike-pr/"},{"id":"stickman-bridge-constructor","name":"Stickman Bridge Constructor","url":"https://class6x.gitlab.io/stickman-bridge-constructor/"},{"id":"stickman-climb-2","name":"Stickman Climb 2","url":"https://class6x.gitlab.io/stickman-climb-2/"},{"id":"stickman-fight-ragdoll","name":"Stickman Fight Ragdoll","url":"https://class6x.gitlab.io/stickman-fight-ragdoll/"},{"id":"stickman-fighter-epic-battle-2","name":"Stickman Fighter Epic Battle 2","url":"https://class6x.gitlab.io/stickman-fighter-epic-battle-2/"},{"id":"stickman-fighter-mega-brawl","name":"Stickman Fighter Mega Brawl","url":"https://class6x.gitlab.io/stickman-fighter-mega-brawl/"},{"id":"stickman-golf","name":"Stickman Golf","url":"https://class6x.gitlab.io/stickman-golf/"},{"id":"stickman-hook","name":"Stickman Hook","url":"https://class6x.gitlab.io/stickman-hook/"},{"id":"stickman-parkour-3","name":"Stickman Parkour 3","url":"https://class6x.gitlab.io/stickman-parkour-3/"},{"id":"stickman-ragdoll-crash-fun","name":"Stickman Ragdoll Crash Fun","url":"https://class6x.gitlab.io/stickman-ragdoll-crash-fun/"},{"id":"stickman-run","name":"Stickman Run","url":"https://class6x.gitlab.io/stickman-run/"},{"id":"stickman-school-run","name":"Stickman School Run","url":"https://class6x.gitlab.io/stickman-school-run/"},{"id":"stock-car-hero","name":"Stock Car Hero","url":"https://class6x.gitlab.io/stock-car-hero/"},{"id":"street-ball-jam","name":"Street Ball Jam","url":"https://class6x.gitlab.io/street-ball-jam/"},{"id":"striker-dummies","name":"Striker Dummies","url":"https://class6x.gitlab.io/striker-dummies/"},{"id":"stupid-zombies","name":"Stupid Zombies","url":"https://class6x.gitlab.io/stupid-zombies/"},{"id":"stupid-zombies-2","name":"Stupid Zombies 2","url":"https://class6x.gitlab.io/stupid-zombies-2/"},{"id":"subway-surfers-beijing","name":"Subway Surfers Beijing","url":"https://class6x.gitlab.io/subway-surfers-beijing/"},{"id":"sumo-party","name":"Sumo Party","url":"https://class6x.gitlab.io/sumo-party/"},{"id":"super-bike-the-champion","name":"Super Bike The Champion","url":"https://class6x.gitlab.io/super-bike-the-champion/"},{"id":"super-hot","name":"Super Hot","url":"https://class6x.gitlab.io/super-hot/"},{"id":"super-liquid-soccer","name":"Super Liquid Soccer","url":"https://class6x.gitlab.io/super-liquid-soccer/"},{"id":"super-racing-gt-drag-pro","name":"Super Racing Gt Drag Pro","url":"https://class6x.gitlab.io/super-racing-gt-drag-pro/"},{"id":"super-star-car","name":"Super Star Car","url":"https://class6x.gitlab.io/super-star-car/"},{"id":"super-tunnel-rush","name":"Super Tunnel Rush","url":"https://class6x.gitlab.io/super-tunnel-rush/"},{"id":"superbattle-2","name":"Superbattle 2","url":"https://class6x.gitlab.io/superbattle-2/"},{"id":"superbike-hero","name":"Superbike Hero","url":"https://class6x.gitlab.io/superbike-hero/"},{"id":"tag","name":"Tag","url":"https://class6x.gitlab.io/tag/"},{"id":"tag-2","name":"Tag 2","url":"https://class6x.gitlab.io/tag-2/"},{"id":"tank-trouble-2","name":"Tank Trouble 2","url":"https://class6x.gitlab.io/tank-trouble-2/"},{"id":"tanuki-sunset","name":"Tanuki Sunset","url":"https://class6x.gitlab.io/tanuki-sunset/"},{"id":"teleport-jumper","name":"Teleport Jumper","url":"https://class6x.gitlab.io/teleport-jumper/"},{"id":"temple-of-boom","name":"Temple Of Boom","url":"https://class6x.gitlab.io/temple-of-boom/"},{"id":"temple-run-2-frozen-shadows","name":"Temple Run 2 Frozen Shadows","url":"https://class6x.gitlab.io/temple-run-2-frozen-shadows/"},{"id":"temple-run-2-holi-festival","name":"Temple Run 2 Holi Festival","url":"https://class6x.gitlab.io/temple-run-2-holi-festival/"},{"id":"tennis-masters","name":"Tennis Masters","url":"https://class6x.gitlab.io/tennis-masters/"},{"id":"there-is-no-game","name":"There Is No Game","url":"https://class6x.gitlab.io/there-is-no-game/"},{"id":"thumb-fighter","name":"Thumb Fighter","url":"https://class6x.gitlab.io/thumb-fighter/"},{"id":"tictactoe","name":"Tictactoe","url":"https://class6x.gitlab.io/tictactoe/"},{"id":"tiger-simulator-3d","name":"Tiger Simulator 3d","url":"https://class6x.gitlab.io/tiger-simulator-3d/"},{"id":"time-clones","name":"Time Clones","url":"https://class6x.gitlab.io/time-clones/"},{"id":"tingly-ppyramid-solitaire","name":"Tingly Ppyramid Solitaire","url":"https://class6x.gitlab.io/tingly-ppyramid-solitaire/"},{"id":"tingly-pyramid-solitaire","name":"Tingly Pyramid Solitaire","url":"https://class6x.gitlab.io/tingly-pyramid-solitaire/"},{"id":"tiny-fishing","name":"Tiny Fishing","url":"https://class6x.gitlab.io/tiny-fishing/"},{"id":"top-speed-racing-3d","name":"Top Speed Racing 3d","url":"https://class6x.gitlab.io/top-speed-racing-3d/"},{"id":"towntopia","name":"Towntopia","url":"https://class6x.gitlab.io/towntopia/"},{"id":"traffic-mania","name":"Traffic Mania","url":"https://class6x.gitlab.io/traffic-mania/"},{"id":"traffic-rider","name":"Traffic Rider","url":"https://class6x.gitlab.io/traffic-rider/"},{"id":"traffic-rush","name":"Traffic Rush","url":"https://class6x.gitlab.io/traffic-rush/"},{"id":"tricks","name":"Tricks","url":"https://class6x.gitlab.io/tricks/"},{"id":"truck-loader","name":"Truck Loader","url":"https://class6x.gitlab.io/truck-loader/"},{"id":"tube-jumpers","name":"Tube Jumpers","url":"https://class6x.gitlab.io/tube-jumpers/"},{"id":"tunnel-rush","name":"Tunnel Rush","url":"https://class6x.gitlab.io/tunnel-rush/"},{"id":"turbo-moto-racer","name":"Turbo Moto Racer","url":"https://class6x.gitlab.io/turbo-moto-racer/"},{"id":"ultimate-car-driving","name":"Ultimate Car Driving","url":"https://class6x.gitlab.io/ultimate-car-driving/"},{"id":"unicycle-hero","name":"Unicycle Hero","url":"https://class6x.gitlab.io/unicycle-hero/"},{"id":"vex-6","name":"Vex 6","url":"https://class6x.gitlab.io/vex-6/"},{"id":"vex-7","name":"Vex 7","url":"https://class6x.gitlab.io/vex-7/"},{"id":"vex-8","name":"Vex 8","url":"https://class6x.gitlab.io/vex-8/"},{"id":"village-craft","name":"Village Craft","url":"https://class6x.gitlab.io/village-craft/"},{"id":"volley-random","name":"Volley Random","url":"https://class6x.gitlab.io/volley-random/"},{"id":"war-of-caribbean-pirates","name":"War Of Caribbean Pirates","url":"https://class6x.gitlab.io/war-of-caribbean-pirates/"},{"id":"we-become-what-we-behold","name":"We Become What We Behold","url":"https://class6x.gitlab.io/we-become-what-we-behold/"},{"id":"wood-blocks-3d","name":"Wood Blocks 3d","url":"https://class6x.gitlab.io/wood-blocks-3d/"},{"id":"word-city-crossed","name":"Word City Crossed","url":"https://class6x.gitlab.io/word-city-crossed/"},{"id":"words-search-classic-edition","name":"Words Search Classic Edition","url":"https://class6x.gitlab.io/words-search-classic-edition/"},{"id":"world-conquest","name":"World Conquest","url":"https://class6x.gitlab.io/world-conquest/"},{"id":"worlds-hardest-game-2","name":"Worlds Hardest Game 2","url":"https://class6x.gitlab.io/worlds-hardest-game-2/"},{"id":"worlds-hardest-game-3","name":"Worlds Hardest Game 3","url":"https://class6x.gitlab.io/worlds-hardest-game-3/"},{"id":"wrassling","name":"Wrassling","url":"https://class6x.gitlab.io/wrassling/"},{"id":"yohohoio","name":"Yohohoio","url":"https://class6x.gitlab.io/yohohoio/"},{"id":"yokai-dungeon","name":"Yokai Dungeon","url":"https://class6x.gitlab.io/yokai-dungeon/"},{"id":"zeepkist-crash-2d","name":"Zeepkist Crash 2d","url":"https://class6x.gitlab.io/zeepkist-crash-2d/"},{"id":"zen-blocks","name":"Zen Blocks","url":"https://class6x.gitlab.io/zen-blocks/"},{"id":"zombie-siege-outbreak","name":"Zombie Siege Outbreak","url":"https://class6x.gitlab.io/zombie-siege-outbreak/"}];



function defaultState() {
  return { users: [], sessionUserId: null, settings: { wallpaper: "default", reducedMotion: false } };
}
function load() {
  try {
    const d = JSON.parse(localStorage.getItem(STORE) || "null");
    if (!d || !Array.isArray(d.users)) return defaultState();
    if (!d.settings) d.settings = { wallpaper: "default", reducedMotion: false };
    return d;
  } catch (e) { return defaultState(); }
}
function save() {
  try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) {}
}


/* Custom cursor */
(function () {
  const c = document.getElementById("cursor");
  const r = document.getElementById("cursor-ring");
  if (!c || !r) return;
  let x = 0, y = 0, rx = 0, ry = 0;
  document.addEventListener("mousemove", e => {
    x = e.clientX; y = e.clientY;
    c.style.left = x + "px"; c.style.top = y + "px";
    document.body.classList.add("ready");
  });
  (function loop() {
    rx += (x - rx) * 0.2;
    ry += (y - ry) * 0.2;
    r.style.left = rx + "px";
    r.style.top = ry + "px";
    requestAnimationFrame(loop);
  })();
  document.addEventListener("mousedown", () => c.classList.add("click"));
  document.addEventListener("mouseup", () => c.classList.remove("click"));
  document.addEventListener("mouseover", e => {
    if (e.target.closest("button, input, select, a, .user-chip, .desk-icon, .tb, .snav, .browser-tab")) {
      c.classList.add("dot"); r.classList.add("hover");
    }
  });
  document.addEventListener("mouseout", e => {
    if (e.target.closest("button, input, select, a, .user-chip, .desk-icon, .tb, .snav, .browser-tab")) {
      c.classList.remove("dot"); r.classList.remove("hover");
    }
  });
})();


/* UV proxy helpers */
function ensureProxySW() {
  if (window.__mountSWPromise) return window.__mountSWPromise;
  if (typeof registerSW === "function") {
    window.__mountSWPromise = registerSW().catch(function () {}).then(function () {
      window.__mountSWReady = true;
    });
    return window.__mountSWPromise;
  }
  window.__mountSWReady = true;
  return Promise.resolve();
}
function toProxyUrl(raw) {
  var url = raw;
  if (typeof search === "function") {
    url = search(raw, "https://duckduckgo.com/?q=%s");
  } else {
    url = String(raw || "").trim();
    if (!/^https?:\/\//i.test(url)) {
      if (/^[a-z0-9.-]+\.[a-z]{2,}(\/.*)?$/i.test(url)) url = "https://" + url;
      else url = "https://duckduckgo.com/?q=" + encodeURIComponent(url);
    }
  }
  if (typeof __uv$config !== "undefined" && __uv$config.encodeUrl && __uv$config.prefix) {
    return __uv$config.prefix + __uv$config.encodeUrl(url);
  }
  return url;
}

let state = load();
let selectedUserId = null;
let unlocked = false;
let zTop = 50;
const openWins = new Map();

function uid() { return "u_" + Math.random().toString(36).slice(2, 10); }
function initials(n) { return ((String(n || "?").trim()[0]) || "?").toUpperCase(); }
function userById(id) { return state.users.find(u => u.id === id); }
function currentUser() { return userById(state.sessionUserId); }
function ensureUser(u) {
  if (!u.data) u.data = {};
  if (!u.data.prefs) u.data.prefs = {};
  return u;
}
function gearImg(cls) {
  return `<div class="${cls}"><img src="${GEAR_URL}" alt=""></div>`;
}

function tick() {
  const n = new Date();
  const t = n.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  const d = n.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" });
  const ds = n.toLocaleDateString([], { month: "numeric", day: "numeric", year: "numeric" });
  const set = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  set("lock-clock", t); set("lock-date", d); set("tb-time", t); set("tb-date", ds);
}
setInterval(tick, 10000); tick();

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
function applyWallpaper() {
  document.documentElement.style.setProperty("--wp-image", "url(" + WALLPAPER_URL + ")");
}

function renderUserList() {
  const list = document.getElementById("user-list");
  list.innerHTML = "";
  state.users.forEach(u => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "user-chip";
    b.innerHTML = `<div class="avatar">${USER_ICON}</div><b></b>`;
    b.querySelector("b").textContent = u.name;
    b.onclick = () => selectUser(u.id);
    list.appendChild(b);
  });
}
function selectUser(id) {
  selectedUserId = id;
  const u = userById(id);
  document.getElementById("user-list").style.display = "none";
  document.getElementById("btn-add-user-login").style.display = "none";
  document.getElementById("create-form").classList.remove("show");
  document.getElementById("login-form").classList.add("show");
  document.getElementById("login-avatar").innerHTML = USER_ICON;
  document.getElementById("login-name").textContent = u.name;
  document.getElementById("login-err").textContent = "";
  document.getElementById("login-pass").value = "";
  setTimeout(() => document.getElementById("login-pass").focus(), 40);
}
function backToUsers() {
  selectedUserId = null;
  document.getElementById("login-form").classList.remove("show");
  document.getElementById("create-form").classList.remove("show");
  document.getElementById("user-list").style.display = "";
  document.getElementById("btn-add-user-login").style.display = "";
  renderUserList();
}
function unlockUI() {
  unlocked = true;
  document.getElementById("lock").classList.add("unlocked");
  if (!state.users.length) {
    document.getElementById("user-list").style.display = "none";
    document.getElementById("btn-add-user-login").style.display = "none";
    document.getElementById("create-form").classList.add("show");
  } else backToUsers();
}
function createUser(name, pass) {
  name = String(name || "").trim();
  pass = String(pass || "");
  if (!name) return "Enter a username.";
  if (state.users.some(u => u.name.toLowerCase() === name.toLowerCase())) return "Username taken.";
  if (!pass || pass.length < 4) return "PIN required (at least 4 characters).";
  state.users.push(ensureUser({ id: uid(), name, pass, created: Date.now(), data: {} }));
  save();
  return null;
}
function signIn(user) {
  ensureUser(user);
  state.sessionUserId = user.id;
  save();
  enterSession();
}
function enterSession() {
  const u = currentUser();
  if (!u) { showScreen("lock"); return; }
  document.getElementById("session-avatar").innerHTML = USER_ICON;
  document.getElementById("session-name").textContent = u.name;
  applyWallpaper();
  renderDesktop();
  renderPinned();
  showScreen("session");
  closeStart();
}
function lockSession() {
  openWins.forEach(win => win.remove());
  openWins.clear();
  renderTaskbar();
  state.sessionUserId = null;
  save();
  showScreen("lock");
  document.getElementById("lock").classList.remove("unlocked");
  unlocked = false;
  backToUsers();
  closeStart();
}

document.getElementById("btn-add-user-login").onclick = () => {
  document.getElementById("user-list").style.display = "none";
  document.getElementById("btn-add-user-login").style.display = "none";
  document.getElementById("login-form").classList.remove("show");
  document.getElementById("create-form").classList.add("show");
};
document.getElementById("btn-cancel-create").onclick = backToUsers;
document.getElementById("btn-create").onclick = () => {
  const err = createUser(document.getElementById("create-name").value, document.getElementById("create-pass").value);
  if (err) { document.getElementById("create-err").textContent = err; return; }
  signIn(state.users[state.users.length - 1]);
};
document.getElementById("btn-back-users").onclick = backToUsers;
document.getElementById("btn-sign-in").onclick = () => {
  const u = userById(selectedUserId);
  if (!u) return;
  if (u.pass && u.pass !== document.getElementById("login-pass").value) {
    document.getElementById("login-err").textContent = "Incorrect PIN.";
    return;
  }
  signIn(u);
};
document.getElementById("login-pass").addEventListener("keydown", e => {
  if (e.key === "Enter") document.getElementById("btn-sign-in").click();
});
function tryUnlock(e) {
  if (unlocked) return;
  if (!document.getElementById("lock").classList.contains("active")) return;
  // allow clicks anywhere on lock screen before login panel is interactive
  unlockUI();
}
document.getElementById("lock").addEventListener("click", tryUnlock);
document.getElementById("lock").addEventListener("pointerdown", tryUnlock);
window.addEventListener("keydown", tryUnlock);
window.addEventListener("keyup", tryUnlock);

function renderDesktop() {
  const box = document.getElementById("desktop-icons");
  box.innerHTML = "";
  APPS.filter(a => a.desktop).forEach(app => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "desk-icon";
    let ico;
    if (app.icon === "GEAR") ico = gearImg("ico settings");
    else if (app.icon === "WEB") ico = `<div class="ico web-ico"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg></div>`;
    else if (app.icon === "GAME") ico = `<div class="ico game-ico"><img src="${GAMES_ICON}" alt=""></div>`;
    else if (app.icon === "AI") ico = `<div class="ico ai-ico"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" stroke-width="1.7"><path d="M12 3a6 6 0 0 1 6 6v1a4 4 0 0 1 3 4v1H3v-1a4 4 0 0 1 3-4V9a6 6 0 0 1 6-6z"/><path d="M9 18h6M10 21h4"/></svg></div>`;
    else ico = `<div class="ico">${app.icon}</div>`;
    b.innerHTML = ico + `<span>${app.name}</span>`;
    b.ondblclick = () => openApp(app.id);
    b.onclick = () => {
      document.querySelectorAll(".desk-icon").forEach(x => x.classList.remove("selected"));
      b.classList.add("selected");
    };
    box.appendChild(b);
  });
}
function renderPinned() {
  const box = document.getElementById("pinned");
  box.innerHTML = "";
  APPS.filter(a => a.pinned).forEach(app => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "start-app";
    let ico;
    if (app.icon === "GEAR") ico = gearImg("ico settings");
    else if (app.icon === "WEB") ico = `<div class="ico web-ico"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg></div>`;
    else if (app.icon === "GAME") ico = `<div class="ico game-ico"><img src="${GAMES_ICON}" alt=""></div>`;
    else if (app.icon === "AI") ico = `<div class="ico ai-ico"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" stroke-width="1.7"><path d="M12 3a6 6 0 0 1 6 6v1a4 4 0 0 1 3 4v1H3v-1a4 4 0 0 1 3-4V9a6 6 0 0 1 6-6z"/><path d="M9 18h6M10 21h4"/></svg></div>`;
    else ico = `<div class="ico">${app.icon}</div>`;
    b.innerHTML = ico + `<span>${app.name}</span>`;
    b.onclick = () => { closeStart(); openApp(app.id); };
    box.appendChild(b);
  });
}

const startMenu = document.getElementById("start");
function closeStart() {
  startMenu.classList.remove("open");
  document.getElementById("btn-start").classList.remove("active");
}
document.getElementById("btn-start").onclick = e => {
  e.stopPropagation();
  startMenu.classList.toggle("open");
  document.getElementById("btn-start").classList.toggle("active", startMenu.classList.contains("open"));
};
document.addEventListener("click", e => {
  if (!e.target.closest("#start") && !e.target.closest("#btn-start")) closeStart();
  if (!e.target.closest("#ctx")) document.getElementById("ctx").classList.remove("open");
});
document.getElementById("btn-lock").onclick = lockSession;
document.getElementById("start-user-btn").onclick = () => { closeStart(); openApp("settings"); };

function openApp(id) {
  if (openWins.has(id)) { focusWin(openWins.get(id)); return; }
  const app = APPS.find(a => a.id === id);
  if (!app) return;

  const win = document.createElement("div");
  win.className = "window";
  win.dataset.id = id;
  const w = Math.min(id === "settings" || id === "games" || id === "ai" ? 1020 : id === "browser" ? 1000 : 520, innerWidth - 16);
  const h = Math.min(id === "settings" || id === "ai" ? 640 : id === "games" ? Math.min(innerHeight - 80, 820) : id === "browser" ? 640 : 380, innerHeight - 64);
  win.style.width = w + "px";
  win.style.height = h + "px";
  win.style.left = Math.max(8, (innerWidth - w) / 2) + "px";
  win.style.top = Math.max(8, (innerHeight - 48 - h) / 2) + "px";
  win.style.zIndex = ++zTop;

  let wicon;
  if (app.icon === "GEAR") wicon = `<div class="wicon settings-wicon"><img src="${GEAR_URL}" alt=""></div>`;
  else if (app.icon === "WEB") wicon = `<div class="wicon" style="background:#2563eb;display:grid;place-items:center"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#fff" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/></svg></div>`;
  else if (app.icon === "GAME") wicon = `<div class="wicon" style="background:#333;padding:2px"><img src="${GAMES_ICON}" alt="" style="width:100%;height:100%;object-fit:contain;filter:brightness(0) invert(1)"></div>`;
  else if (app.icon === "AI") wicon = `<div class="wicon" style="background:linear-gradient(135deg,#60cdff,#8b5cf6)"></div>`;
  else wicon = `<div class="wicon"></div>`;

  win.innerHTML = `
    <div class="wtitle" data-drag>
      ${wicon}
      <div class="wname">${app.name}</div>
      <div class="wbtns">
        <button type="button" class="wbtn min" title="Minimize">&#9472;</button>
        <button type="button" class="wbtn max" title="Maximize">&#9723;</button>
        <button type="button" class="wbtn close" title="Close">&#10005;</button>
      </div>
    </div>
    <div class="wbody"></div>`;

  const body = win.querySelector(".wbody");
  if (id === "settings") renderSettings(body);
  else if (id === "browser") renderBrowser(body);
  else if (id === "games") renderGames(body);
  else if (id === "ai") renderMountAI(body);
  else body.innerHTML = `<div style="padding:16px">${app.name}</div>`;

  document.getElementById("windows").appendChild(win);
  requestAnimationFrame(() => requestAnimationFrame(() => win.classList.add("open")));
  openWins.set(id, win);
  wireWin(win, id);
  renderTaskbar();
  focusWin(win);
}

function closeWin(id) {
  const win = openWins.get(id);
  if (!win) return;
  win.classList.add("closing");
  win.classList.remove("open");
  setTimeout(() => {
    win.remove();
    openWins.delete(id);
    renderTaskbar();
  }, 160);
}

function wireWin(win, id) {
  const bar = win.querySelector("[data-drag]");
  let drag = null;
  bar.addEventListener("pointerdown", e => {
    if (e.target.closest("button") || win.classList.contains("maximized")) return;
    focusWin(win);
    drag = { x: e.clientX, y: e.clientY, l: win.offsetLeft, t: win.offsetTop };
    bar.setPointerCapture(e.pointerId);
  });
  bar.addEventListener("pointermove", e => {
    if (!drag) return;
    win.style.left = drag.l + (e.clientX - drag.x) + "px";
    win.style.top = Math.max(0, drag.t + (e.clientY - drag.y)) + "px";
  });
  bar.addEventListener("pointerup", () => { drag = null; });
  bar.addEventListener("dblclick", () => win.classList.toggle("maximized"));
  win.querySelector(".close").onclick = () => closeWin(id);
  win.querySelector(".min").onclick = () => { win.style.visibility = "hidden"; renderTaskbar(); };
  win.querySelector(".max").onclick = () => win.classList.toggle("maximized");
  win.addEventListener("mousedown", () => focusWin(win));
}

function focusWin(win) {
  document.querySelectorAll(".window").forEach(w => w.classList.remove("active"));
  win.classList.add("active");
  win.style.visibility = "visible";
  win.style.zIndex = ++zTop;
  renderTaskbar();
}

function renderTaskbar() {
  const bar = document.getElementById("task-apps");
  bar.innerHTML = "";
  openWins.forEach((win, id) => {
    const app = APPS.find(a => a.id === id);
    const b = document.createElement("button");
    b.type = "button";
    b.className = "tb" + (win.classList.contains("active") && win.style.visibility !== "hidden" ? " active" : "");
    b.title = app ? app.name : id;
    if (app && app.icon === "GEAR") {
      b.innerHTML = `<span class="gear-ico"><img src="${GEAR_URL}" alt=""></span>`;
    } else if (app && app.icon === "WEB") {
      b.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#60cdff" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>`;
    } else if (app && app.icon === "GAME") {
      b.innerHTML = `<img src="${GAMES_ICON}" alt="" style="width:18px;height:18px;object-fit:contain;filter:brightness(0) invert(1)">`;
    } else if (app && app.icon === "AI") {
      b.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#60cdff" stroke-width="1.8"><path d="M12 3a6 6 0 0 1 6 6v1a4 4 0 0 1 3 4v1H3v-1a4 4 0 0 1 3-4V9a6 6 0 0 1 6-6z"/><path d="M9 18h6M10 21h4"/></svg>`;
    } else {
      b.textContent = app ? app.name[0] : "*";
    }
    b.onclick = () => {
      if (win.style.visibility === "hidden") { win.style.visibility = "visible"; focusWin(win); }
      else if (win.classList.contains("active")) { win.style.visibility = "hidden"; renderTaskbar(); }
      else focusWin(win);
    };
    bar.appendChild(b);
  });
}


function renderBrowser(root) {
  const tabs = [{ id: 1, title: "New tab", url: "", history: [], index: -1 }];
  let active = 1;
  let nextId = 2;

  root.innerHTML = `
    <div class="browser">
      <div class="browser-tabs" id="b-tabs"></div>
      <div class="browser-chrome">
        <div class="nav">
          <button type="button" id="b-back" title="Back">&#8592;</button>
          <button type="button" id="b-fwd" title="Forward">&#8594;</button>
          <button type="button" id="b-reload" title="Reload">&#8635;</button>
        </div>
        <form id="b-form">
          <input id="b-url" type="text" placeholder="Search or enter address" spellcheck="false" />
        </form>
      </div>
      <div id="b-stage" style="flex:1;min-height:0;position:relative;display:flex;flex-direction:column"></div>
    </div>`;

  const tabsEl = root.querySelector("#b-tabs");
  const stage = root.querySelector("#b-stage");
  const urlInput = root.querySelector("#b-url");
  const backBtn = root.querySelector("#b-back");
  const fwdBtn = root.querySelector("#b-fwd");

  function current() { return tabs.find(t => t.id === active); }

  function normalize(raw) {
    raw = String(raw || "").trim();
    if (!raw) return "";
    if (/^https?:\/\//i.test(raw)) return raw;
    if (/^[a-z0-9.-]+\.[a-z]{2,}(\/.*)?$/i.test(raw)) return "https://" + raw;
    return "https://duckduckgo.com/?q=" + encodeURIComponent(raw);
  }

  function renderTabs() {
    tabsEl.innerHTML = "";
    tabs.forEach(t => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "browser-tab" + (t.id === active ? " active" : "");
      b.innerHTML = `<span style="overflow:hidden;text-overflow:ellipsis">${t.title}</span>`;
      const x = document.createElement("button");
      x.type = "button"; x.className = "x"; x.textContent = "x";
      x.onclick = e => {
        e.stopPropagation();
        const idx = tabs.findIndex(x => x.id === t.id);
        tabs.splice(idx, 1);
        if (!tabs.length) {
          tabs.push({ id: nextId++, title: "New tab", url: "", history: [], index: -1 });
          active = tabs[0].id;
        } else if (active === t.id) {
          active = tabs[Math.max(0, idx - 1)].id;
        }
        paint();
      };
      b.appendChild(x);
      b.onclick = () => { active = t.id; paint(); };
      tabsEl.appendChild(b);
    });
    const add = document.createElement("button");
    add.type = "button"; add.className = "browser-new"; add.textContent = "+";
    add.onclick = () => {
      const t = { id: nextId++, title: "New tab", url: "", history: [], index: -1 };
      tabs.push(t); active = t.id; paint();
    };
    tabsEl.appendChild(add);
  }

  function showHome() {
    stage.innerHTML = `
      <div class="browser-home">
        <h2>Mount</h2>
        <p>Search or enter a website · proxied</p>
        <form class="search-box" id="b-home-form">
          <input id="b-home-q" placeholder="Search DuckDuckGo or type a URL" />
        </form>
      </div>`;
    stage.querySelector("#b-home-form").onsubmit = e => {
      e.preventDefault();
      navigate(stage.querySelector("#b-home-q").value);
    };
  }

  function showFrame(url) {
    stage.innerHTML = "";
    const frame = document.createElement("iframe");
    frame.className = "browser-frame";
    frame.setAttribute("allow", "fullscreen");
    frame.src = url;
    stage.appendChild(frame);
  }

  function navigate(raw, push) {
    const url = normalize(raw);
    if (!url) return;
    const t = current();
    if (push !== false) {
      t.history = t.history.slice(0, t.index + 1);
      t.history.push(url);
      t.index = t.history.length - 1;
    }
    t.url = url;
    try {
      t.title = new URL(url).hostname.replace(/^www\./, "") || "Tab";
    } catch (e) { t.title = "Tab"; }
    urlInput.value = url;
    var proxied = toProxyUrl(url);
    renderTabs();
    updateNav();
    if (window.__mountSWReady) {
      showFrame(proxied);
    } else {
      var done = false;
      var swTimer = setTimeout(function () {
        if (!done) { done = true; showFrame(proxied); }
      }, 150);
      ensureProxySW().then(function () {
        if (!done) { done = true; clearTimeout(swTimer); showFrame(proxied); }
      });
    }
  }

  function updateNav() {
    const t = current();
    backBtn.disabled = !t || t.index <= 0;
    fwdBtn.disabled = !t || t.index >= t.history.length - 1;
  }

  function paint() {
    const t = current();
    urlInput.value = t.url || "";
    if (!t.url) showHome();
    else showFrame(t.url);
    renderTabs();
    updateNav();
  }

  root.querySelector("#b-form").onsubmit = e => {
    e.preventDefault();
    navigate(urlInput.value);
  };
  backBtn.onclick = () => {
    const t = current();
    if (t.index > 0) {
      t.index--;
      t.url = t.history[t.index];
      urlInput.value = t.url;
      showFrame(toProxyUrl(t.url));
      renderTabs();
      updateNav();
    }
  };
  fwdBtn.onclick = () => {
    const t = current();
    if (t.index < t.history.length - 1) {
      t.index++;
      t.url = t.history[t.index];
      urlInput.value = t.url;
      showFrame(toProxyUrl(t.url));
      renderTabs();
      updateNav();
    }
  };
  root.querySelector("#b-reload").onclick = () => {
    const t = current();
    if (t.url) showFrame(toProxyUrl(t.url));
    else showHome();
  };

  paint();
}



async function loadGamesCatalog() {
  if (GAMES_CATALOG) return GAMES_CATALOG;
  if (typeof GAMES_EMBEDDED !== "undefined" && GAMES_EMBEDDED && GAMES_EMBEDDED.length) {
    GAMES_CATALOG = GAMES_EMBEDDED;
    return GAMES_CATALOG;
  }
  try {
    const r = await fetch("games.json");
    GAMES_CATALOG = await r.json();
  } catch (e) {
    GAMES_CATALOG = [];
  }
  return GAMES_CATALOG;
}


function gameColor(id) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  const hue = h % 360;
  return "hsl(" + hue + " 45% 38%)";
}

function renderGames(root) {
  root.innerHTML = `
    <div class="games-app">
      <div class="games-library" id="games-library">
        <div class="games-toolbar">
          <input id="games-search" type="text" placeholder="Search games" />
          <span id="games-count"></span>
        </div>
        <div class="games-grid" id="games-grid">Loading…</div>
      </div>
      <div class="games-player" id="games-player" hidden>
        <div class="games-player-bar">
          <button type="button" id="games-back">Back</button>
          <span id="games-playing-title"></span>
        </div>
        <iframe id="games-frame" class="games-frame" allowfullscreen allow="fullscreen; gamepad; autoplay; clipboard-write" referrerpolicy="no-referrer"></iframe>
      </div>
    </div>`;

  const library = root.querySelector("#games-library");
  const player = root.querySelector("#games-player");
  const grid = root.querySelector("#games-grid");
  const search = root.querySelector("#games-search");
  const count = root.querySelector("#games-count");
  const frame = root.querySelector("#games-frame");
  const playingTitle = root.querySelector("#games-playing-title");
  let all = [];

  // Cache resolved icon URLs so they appear instantly next time
  var iconCache = {};
  try { iconCache = JSON.parse(localStorage.getItem("mount_game_icons") || "{}") || {}; } catch (e) {}
  function saveIconCache() {
    try { localStorage.setItem("mount_game_icons", JSON.stringify(iconCache)); } catch (e) {}
  }

  function resolveGameIcon(g, img) {
    var cached = iconCache[g.id];
    if (cached === "") {
      img.remove();
      return;
    }
    if (cached) {
      img.src = cached;
      img.onload = function () {
        if (img.naturalWidth >= 24) img.classList.add("ok");
        else { iconCache[g.id] = ""; saveIconCache(); img.remove(); }
      };
      img.onerror = function () {
        delete iconCache[g.id];
        saveIconCache();
        resolveGameIcon(g, img); // retry discovery
      };
      return;
    }

    var base = "https://class6x.gitlab.io/" + g.id + "/";
    // Prioritized list — most common successes first
    var candidates = [
      base + "logo.png",
      base + "icon-256.png",
      base + "icons/icon-256.png",
      base + "favicon.png",
      base + "thumbnail.jpg",
      base + "icon-128.png",
      base + "icons/icon-128.png",
      base + "html5game/splash.png",
      base + "html5game/bh5logo.png",
      base + "patch/ubg235/logo_512.png",
      base + "splash.png",
      base + "icons/loading-logo.png",
      base + "favicon.ico",
      base + "icon.png",
      base + "screenshots/1-small.jpg"
    ];

    var settled = false;
    var remaining = candidates.length;

    function failOne() {
      remaining--;
      if (!settled && remaining <= 0) {
        settled = true;
        iconCache[g.id] = "";
        saveIconCache();
        img.remove();
      }
    }

    // Race the top candidates in parallel for speed
    candidates.forEach(function (url) {
      var probe = new Image();
      probe.onload = function () {
        if (settled) return;
        if (probe.naturalWidth >= 24 && probe.naturalHeight >= 24) {
          settled = true;
          iconCache[g.id] = url;
          saveIconCache();
          img.src = url;
          img.onload = function () { img.classList.add("ok"); };
        } else {
          failOne();
        }
      };
      probe.onerror = failOne;
      probe.src = url;
    });
  }

  function paint(q) {
    q = (q || "").trim().toLowerCase();
    const list = !q ? all : all.filter(g => g.name.toLowerCase().includes(q) || g.id.includes(q));
    count.textContent = list.length + " games";
    grid.innerHTML = "";
    const frag = document.createDocumentFragment();
    list.forEach(g => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "game-tile";
      const letter = (g.name || "?").trim().charAt(0).toUpperCase() || "?";
      b.innerHTML = `<div class="game-thumb" style="background:${gameColor(g.id)}">` +
        `<span class="game-letter">${letter}</span>` +
        `<img class="game-icon" alt="" decoding="async" />` +
        `</div><span class="game-name"></span>`;
      b.querySelector(".game-name").textContent = g.name;
      const img = b.querySelector(".game-icon");
      resolveGameIcon(g, img);
      b.title = g.name;
      b.onclick = () => playGame(g);
      frag.appendChild(b);
    });
    grid.appendChild(frag);
  }

  function playGame(g) {
    playingTitle.textContent = g.name;
    library.hidden = true;
    player.hidden = false;
    // Direct load for instant start (class6x is static). Proxy is still used by the browser app.
    frame.onload = null;
    frame.onerror = null;
    frame.src = g.url;
  }

  function exitGame() {
    frame.src = "about:blank";
    player.hidden = true;
    library.hidden = false;
    playingTitle.textContent = "";
  }

  root.querySelector("#games-back").onclick = exitGame;

  loadGamesCatalog().then(list => {
    all = list || [];
    paint("");
    search.oninput = () => paint(search.value);
  });
}




function renderMountAI(root) {
  root.innerHTML = `
    <div class="mount-ai">
      <div class="mount-ai-bar">
        <span>Mount AI</span>
        <button type="button" id="ai-refresh" title="Reload">Refresh</button>
      </div>
      <iframe class="mount-ai-frame" id="ai-frame" title="Mount AI" allow="clipboard-write"></iframe>
    </div>`;
  const frame = root.querySelector("#ai-frame");
  function load() {
    frame.src = MOUNT_AI_URL + (MOUNT_AI_URL.indexOf("?") >= 0 ? "&" : "?") + "t=" + Date.now();
  }
  root.querySelector("#ai-refresh").onclick = load;
  load();
}

function renderSettings(root) {
  root.innerHTML = `
    <div class="settings-layout">
      <aside class="settings-nav">
        <h2>Settings</h2>
        <button type="button" class="snav active" data-panel="system"><i></i> System</button>
        <button type="button" class="snav" data-panel="personalize"><i></i> Personalization</button>
        <button type="button" class="snav" data-panel="accounts"><i></i> Accounts</button>
        <button type="button" class="snav" data-panel="about"><i></i> About</button>
      </aside>
      <main class="settings-main" id="settings-main"></main>
    </div>`;
  const main = root.querySelector("#settings-main");
  const navs = root.querySelectorAll(".snav");

  function show(panel) {
    navs.forEach(n => n.classList.toggle("active", n.dataset.panel === panel));
    if (panel === "system") {
      main.innerHTML = `
        <h3>System</h3>
        <div class="sub">Display, notifications, power</div>
        <div class="s-card"><div class="row">
          <div><b>Notifications</b><p>System notifications</p></div>
          <button type="button" class="toggle" id="t-notif"></button>
        </div></div>
        <div class="s-card"><div class="row">
          <div><b>Reduced motion</b><p>Fewer animations</p></div>
          <button type="button" class="toggle ${state.settings.reducedMotion ? "on" : ""}" id="t-motion"></button>
        </div></div>`;
      main.querySelector("#t-motion").onclick = function () {
        state.settings.reducedMotion = !state.settings.reducedMotion;
        this.classList.toggle("on", state.settings.reducedMotion);
        save();
      };
      main.querySelector("#t-notif").onclick = function () { this.classList.toggle("on"); };
    }
    if (panel === "personalize") {
      main.innerHTML = `
        <h3>Personalization</h3>
        <div class="sub">Colors</div>
        <div class="s-card"><div class="row">
          <div><b>Accent color</b><p>Windows blue</p></div>
          <span style="width:28px;height:28px;border-radius:4px;background:#60cdff"></span>
        </div></div>`;
    }
    if (panel === "accounts") {
      const rows = state.users.map(u => `
        <div class="s-card"><div class="row">
          <div><b>${u.name}${u.id === state.sessionUserId ? " (signed in)" : ""}</b><p>Local account</p></div>
          ${u.id !== state.sessionUserId ? `<button type="button" class="btn" data-del="${u.id}" style="width:auto;padding:6px 12px;margin:0">Remove</button>` : ""}
        </div></div>`).join("");
      main.innerHTML = `
        <h3>Accounts</h3>
        <div class="sub">Your accounts</div>
        ${rows}
        <div class="s-card">
          <b>Add an account</b>
          <input id="set-new-name" type="text" placeholder="Username" style="margin-top:10px" />
          <input id="set-new-pass" type="password" placeholder="PIN (optional)" />
          <button type="button" class="btn primary" id="set-add" style="margin-top:8px">Add</button>
        </div>`;
      main.querySelectorAll("[data-del]").forEach(btn => {
        btn.onclick = () => {
          state.users = state.users.filter(u => u.id !== btn.getAttribute("data-del"));
          save(); show("accounts");
        };
      });
      main.querySelector("#set-add").onclick = () => {
        const err = createUser(main.querySelector("#set-new-name").value, main.querySelector("#set-new-pass").value);
        if (err) alert(err); else show("accounts");
      };
    }
    if (panel === "about") {
      main.innerHTML = `
        <h3>About</h3>
        <div class="sub">Mount OS</div>
        <div class="s-card"><div class="row"><div><b>Edition</b><p>Mount OS</p></div></div></div>
        <div class="s-card"><div class="row"><div><b>Version</b><p>1.0.0</p></div></div></div>
        <div class="s-card"><div class="row"><div><b>Storage</b><p>localStorage</p></div></div></div>`;
    }
  }
  navs.forEach(n => n.onclick = () => show(n.dataset.panel));
  show("system");
}

document.getElementById("wallpaper").addEventListener("contextmenu", e => {
  e.preventDefault();
  const ctx = document.getElementById("ctx");
  ctx.innerHTML = `<button type="button" data-act="settings">Settings</button><hr><button type="button" data-act="lock">Lock</button>`;
  ctx.style.left = Math.min(e.clientX, innerWidth - 210) + "px";
  ctx.style.top = Math.min(e.clientY, innerHeight - 100) + "px";
  ctx.classList.add("open");
  ctx.onclick = ev => {
    const a = ev.target.getAttribute("data-act");
    ctx.classList.remove("open");
    if (a === "settings") openApp("settings");
    if (a === "lock") lockSession();
  };
});

applyWallpaper();
document.getElementById("login-avatar").innerHTML = USER_ICON;
document.getElementById("session-avatar").innerHTML = USER_ICON;
renderUserList();
state.sessionUserId = null;
save();
showScreen("lock");

// Register UV service worker early so the proxy is ready when needed
try { ensureProxySW(); } catch (e) {}
