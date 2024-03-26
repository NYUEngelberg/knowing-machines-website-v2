/*

LAION Scrollytell 

Known issues
- 32px hack for grid

*/

const imageBase = "";
const jsPath = "/models-all-the-way";
//P5

let seed;
let nodes = [];
let focusNode;
let networking = true;
let spawnReach = 1;
let scoring = false;
let networkCount = 0;

let netImages = [];

let scrollCount = 0;

let whiteCount = 0;
let oldScroll;

let networkAltProb = 0;

let networkCanvas;

let currentGrid;
let allGrids = [];
let engGrid, noGrid, multiGrid;

let gridWaits = [];

p5.disableFriendlyErrors = true;

gsap.config({
  nullTargetWarn: false,
});


function preload() {

}

function setup() {
  p5ready = true;
  init();

  if (anchorScript) {
    eval(anchorScript);
  }
}

function draw() {

  let newWaits = [];
  gridWaits.forEach(g => {
    let w = g.waitObject;
    if (w.files.length > 0) {
      if (!w.grid.removed) {
        if (!w.grid.fullyLoaded) {
         newWaits.push(g);
         populateGrid(w.grid);
        } else {
          w.grid.populated = true;
          if (w.extras) {
            w.extras.forEach(e => {
              e.f(w.grid);
            })
          }
        }
      }
    } else {
      newWaits.push(g);
    }
  });
  gridWaits = newWaits;


  if (!networking) {

  } else {
    let scrollDiff = abs(oldScroll - window.scrollY);
    oldScroll = window.scrollY;
    for(let i = 0; i < scrollDiff; i++) {
      //doNetwork();
      scrollCount += 0.3;
    }

    if (scrollCount > 0) {
      doNetwork();
      scrollCount -=1;
    }
    
  }

  //Fade out
  if (whiteCount > 0) {
    whiteCount--;
    fill("#EFF0EC11");
    noStroke();
    rect(0,0,windowWidth,windowHeight);
  }
}

//------------------------------------ NETWORK ------------------------------

function getScoreColor(_score) {
  let greens = ['#ffffe5','#f7fcb9','#d9f0a3','#addd8e','#78c679','#41ab5d','#238443','#006837','#004529'];
  return(greens[floor(mapRange(_score, 0.1, 0.5, 0, greens.length, 0, greens.length))]);
}

function initNetwork() {
  //console.log("INIT NETWORK");
  try {
    randomSeed(1);
  } catch(_e) {

  }
  
  networkCanvas = createCanvas(windowWidth, windowHeight);
  document.querySelector(".p5Canvas").style.visibility = "visible";
  seed = makeNode();
  seed.spawnable = true;
  oldScroll = window.scrollY;
  networking = true;
}

function clearNetwork() {
  seed = null;
  focusNode = null;
  try {
   select(".p5Canvas").remove();
 } catch (_e) {

 }
 networking = false;
 networkCount = 0;
}

function doNetwork() {
  if (seed) {
    background("#EFF0EC");
      //background("red");

    push();
    if (focusNode) {
      translate(-(focusNode.pos.x - seed.pos.x), -(focusNode.pos.y - seed.pos.y));
    }

    if (networking) updateNode(seed);
    renderNode(seed);

    

    let centerPP = focusNode ? focusNode:seed;
    let heading = focusNode ? atan2(focusNode.pos.y - focusNode.parent.pos.y, focusNode.pos.x - focusNode.parent.pos.x) : atan2(windowHeight/2 -seed.pos.y,  windowWidth/2 - seed.pos.x)

    //Arrow
    push();
    translate(centerPP.pos.x, centerPP.pos.y);
    rotate(heading);
    stroke(0);
    strokeWeight(3);
    line(0,0,-10,-7);
    line(0,0,-10,7);
    pop();
    pop();

    describe(`A network visualization showing sites and images from a conceptual version of Common Crawl. Currently shows ${networkCount} nodes.`);
  }
}

function makeNode() {
  let n = {
    pos:{x:0, y:0},
    tpos:{x:windowWidth/3, y:windowHeight/2},
    parent:null,
    children:[],
    spawned:false,
    spawnable:null,
    depth:0,
    img:netImages[floor(random(netImages.length))],
    type:(random() < networkAltProb) ? "txt":"img",
    alt: randomAlts[floor(random(randomAlts.length))],
    score:String(random(0.05, 0.7)).substr(0,5),
    scoreCount:0,
    scoreLimit:floor(random(10,20))
  }
  nodes.push(n);

  return(n);
}

function updateNode(_node) {
  if (!_node.spawned) {
    _node.pos.x = lerp(_node.pos.x, _node.tpos.x, 0.05);
    _node.pos.y = lerp(_node.pos.y, _node.tpos.y, 0.05);

    let d = dist(_node.pos.x, _node.pos.y, _node.tpos.x, _node.tpos.y);
    if (abs(d) < 1) {
      _node.spawned = true;
      if (_node.depth < 3 && _node.spawnable) spawnNode(_node)
    }

} else {
  _node.scoreCount++;
  _node.children.forEach(node => {
    updateNode(node);
    renderNode(node);
  });
}

}

function checkIn(_node) {
  let _coords = _node.pos;
  let xIn = (_coords.x > focusNode.pos.x - windowWidth/2 && _coords.x < focusNode.pos.x + windowWidth/2);
  let yIn = (_coords.y > focusNode.pos.y - windowHeight/2 && _coords.y < focusNode.pos.y + windowHeight/2);
  return(xIn && yIn);
}

function renderNode(_node) {

  if (_node == seed) {
    stroke(225);
    strokeWeight(3);
    line(_node.pos.x, _node.pos.y, 0, windowHeight/5);
  }

  _node.children.forEach(kid => {

    if (checkIn(_node) || checkIn(kid)) {
      strokeWeight(kid == focusNode ? 3:1);
      stroke(225);
      line(_node.pos.x, _node.pos.y, kid.pos.x, kid.pos.y);
    }
  }) 

  noStroke();
  if (_node != seed && _node != focusNode) {
    if (checkIn(_node)) {
      //fill("gray");
      //rect(_node.pos.x, _node.pos.y, 10, 10);
      if (!scoring || _node.scoreCount < _node.scoreLimit) {
        try {
          image(_node.img.img, _node.pos.x - 5, _node.pos.y - 5, 10, 10);
        } catch (_e) {
          console.log(_node);
          rect(_node.pos.x - 5, _node.pos.y - 5, 10, 10);
        } 
      } else {
        push();
        translate(_node.pos.x, _node.pos.y);

        let c = (parseFloat(_node.score) > 0.26 &&  parseFloat(_node.score) < 0.45) ? getScoreColor(_node.score):("lightgray");

        fill(c);

        rect(-2,-14,36,16);
        fill("white");
        text(_node.score, 0,0);
        pop();
      }
    }
  }
  
}

function spawnNode(_node) {
  let nn = isNarrow ? floor(random(4,10)): floor(random(8,20));
  let rad = random(20,100);
  let inc = TAU / nn;
  let focusIndex = floor(random(nn));
  let spin = random(TAU);
  for (let i = 0; i < nn; i++) {
    let kid = makeNode();
    let theta = spin + (i * inc);
    kid.pos = {x:_node.pos.x, y:_node.pos.y};
    kid.depth = _node.depth + 1;
    kid.spawnable = (i == focusIndex || random(100) < 20);
    if (i == focusIndex && (_node == focusNode || _node == seed)) {
      focusNode = kid;
      kid.depth = 0;
    }

    let arad = (i == focusIndex) ? rad * 3  * (random(100) > 80 ? (5 * spawnReach):1): rad;
    kid.tpos = {
      x:_node.pos.x + (arad * cos(theta)),
      y:_node.pos.y + (arad * sin(theta))
    }
    _node.children.push(kid);
    kid.parent = _node;
    networkCount++;
  }
}

//---------------- OLD FAKE CONTENT STUFF

let randomAlts = [
  "4 Pack Happy Socks Women/'s Nautical Gift Box",
  "Fotostrecke: Alle Formel-1-Autos von AlphaTauri (und Toro Rosso) seit 2006",
  "uslugi budowlane puzzle na bialym",
  "goat portrait",
  "【シグナル】の動画を見逃したならFOD!韓国版も視聴可能!",
  "Heart Shaped Sunnies - Chynna Dolls Swimwear",
  "Harborfields' Bridgit Ryan carries the ball up court.",
  "Beautiful Bayeux, France",
  "chefs prepare food at the kitchen in jyran restaurant north indian",
  "Photo booth hire doncaster",
  "Davinson Sanchez in action for Ajax during the Europa League final against Manchester United.",
  "Hot Pink 'Aloha' Print Top In Aztec Burn Out",
  "The artist working on an oil triptych.",
  "sample mandolin lessons from Mike Marshall",
  "Strait South - Country Band in Fort Erie, Ontario",
  "Chrysler rolls first production 2013 SRT Viper off of Conner Avenue Assembly Plant",
  "Toddler Jack Sparrow Costume, halloween costume (Toddler Jack Sparrow Costume)",
  ];

//---------------- BUBBLE MAP PARAMS

let centroid = [550, 100];
let mapJSON;
let jMap = {};
let medians;
let heatColors = [
  "#002f61",
  "#003d6c",
  "#004b77",
  "#005981",
  "#006689",
  "#007390",
  "#007f95",
  "#008b98",
  "#00979b",
  "#00a39c",
  "#00af9b",
  "#00bb98",
  "#00c693",
  "#00d18b",
  "#18dc82",
  "#3be675",
  "#65ec69",
  "#87f25c",
  "#a7f74d",
  "#c5fa3c",
  "#e2fd27",
  "#ffff00",
  ];

//-----------MAP

function heatMap(_type) {
  let all = medians[medians.length - 1];
  medians.forEach((med) => {
    console.log(med);
    let hscale = med["median_" + _type] / all["median_" + _type];
    let hc = heatColors[Math.floor((hscale / 2) * heatColors.length)];
    try {
      let s = processLabel(
        med.category_tier2 && med.category_tier2 != ""
        ? med.category_tier2
        : med.category_tier1
        );

      let mainItem = document.querySelector("#" + s);
      let circles = mainItem.querySelectorAll("circle");
      circles.forEach((c) => {
        console.log(c);
        c.style.fill = hc;
      });

      console.log(mainItem);
      //mainItem.firstElementChild.style.fill = hc;

      //mainItem
      gsap.to(mainItem, {
        duration: 0.5,
        ease: "power1.out",
        //opacity: hscale / 2,
      });
    } catch (e) {
      console.log(e);
    }
  });
}

function showMap(_hide) {
  //document.querySelectorAll("#map").style.visibility = "visible";
  gsap.to("#map", {
    opacity: _hide ? 0 : 1,
    ease: "power1.out",
  });
}

function unMap() {
  let circles = document.querySelectorAll("circle");
  circles.forEach((c) => {
    //console.log(c.getAttribute("oricolor"))
    c.style.fill = c.getAttribute("oricolor");
  });
}

function doLabel(_label, _depthLimit) {
  if (!_depthLimit) _depthLimit = 0;
  let mainItem = document.querySelector("#" + processLabel(_label));
  let pd = parseInt(mainItem.getAttribute("depth"));
  let kids = mainItem.querySelectorAll("g");

  kids.forEach((c) => {
    try {
      if (parseInt(c.getAttribute("depth")) <= pd + 1 + _depthLimit) {
        addLabel(c, c.getAttribute("label"));
      }
    } catch (e) {
      console.log(e);
    }
  });
}

function unLabel() {
  document.querySelectorAll(".label").forEach((l) => {
    l.innerHTML = "";
  });
}

function addLabel(_element, _label) {
  let d = document.createElement("div");
  let h = document.createElement("div");
  let t = document.createTextNode(_label);
  h.appendChild(t);
  d.appendChild(h);
  d.classList.add("label");
  h.classList.add("labelHolder");

  //centroid (this needs to be functionized!)
  //put everything that's a circle into the mainItems array
  let mainItems = _element.querySelectorAll("circle");

  //calc the centroid
  let isoCent = [0, 0];
  let ic = 0;

  mainItems.forEach((item) => {
    try {
      isoCent[0] += parseFloat(item.getAttribute("cx"));
      isoCent[1] += parseFloat(item.getAttribute("cy"));
      ic++;
    } catch (e) {}
  });

  isoCent[0] /= ic;
  isoCent[1] /= ic;

  //console.log(isoCent);

  d.style.left = isoCent[0] + "px";
  d.style.top = isoCent[1] + "px";

  document.querySelector("#svgSlide").appendChild(d);

  gsap.to(d, {
    duration: 0.5,
    delay: Math.random(),
    ease: "power1.out",
    opacity: 1,
  });
}

function isolate(_label) {
  let isoScale = 2;
  //hide 'em all
  let hideItems = document.querySelectorAll(".mapPart");
  let mainItem = document.querySelector("#" + processLabel(_label));

  //put everything that's a circle into the mainItems array
  let mainItems = mainItem.querySelectorAll("circle");

  //calc the centroid
  let isoCent = [0, 0];
  let ic = 0;

  mainItems.forEach((item) => {
    try {
      isoCent[0] += parseFloat(item.getAttribute("cx"));
      isoCent[1] += parseFloat(item.getAttribute("cy"));
      ic++;
    } catch (e) {}
  });

  isoCent[0] /= ic;
  isoCent[1] /= ic;

  console.log(isoCent);

  //move animation
  gsap.to("#map", {
    duration: 0.5,
    ease: "power1.out",
    x: centroid[0] - isoCent[0], // * isoScale,
    y: centroid[1] - isoCent[1], // * isoScale,
  });

  //zoom animation
  gsap.to("#svgSlide", {
    duration: 0.5,
    ease: "power1.out",
    scale: isoScale,
  });

  document.querySelectorAll(".labelHolder").forEach((l) => {
    console.log(l);
    gsap.to(l, {
      duration: 0.5,
      ease: "power1.out",
      scale: 1 / isoScale,
    });
  });

  //opacity animation
  hideItems.forEach((hi) => {
    //hi.style.opacity = "0";
    if (mainItems.indexOf(hi) == -1) {
      gsap.to(hi, {
        duration: 0.5,
        ease: "power1.out",
        opacity: 0.1,
      });
    }
  });

  //Show the main node;
  mainItem.style.opacity = "1";
}

function deIsolate() {
  //show 'em all
  let hideItems = document.querySelectorAll(".mapPart");

  hideItems.forEach((hi) => {
    //hi.style.opacity = "0";
    gsap.to(hi, {
      duration: 0.5,
      ease: "power1.out",
      opacity: 1,
    });
  });

  //move animation
  gsap.to("#map", {
    duration: 0.5,
    ease: "power1.out",
    x: 0,
    y: 0,
  });

  //zoom animation
  gsap.to("#svgSlide", {
    duration: 0.5,
    ease: "power1.out",
    scale: 1,
  });

  document.querySelectorAll(".labelHolder").forEach((l) => {
    console.log(l);
    gsap.to(l, {
      duration: 0.5,
      ease: "power1.out",
      scale: 1,
    });
  });
}

function processLabel(_label) {
  return _label.replace(/[^A-Z0-9]+/gi, "_");
}

//------------------------------------ GRID

async function prepareFileListJSON(_url) {
  let j = fetch(_url);
  return(j);
}

function loadFileList(_url, _container, _trigger) {
  prepareFileListJSON(_url)
  .then(response => {
    response.json() 
    .then((data) => {
      data.forEach(d => {
        _container.push(d);
      });
      if (_trigger) {
        _trigger();
      }
    })  
  });
}


/*
function prepareFileList(_size, _maxDim) {
  if (!_maxDim) {
    _maxDim = 200;
  }
  let files = [];
  for (let i = 0; i < _size; i++) {
    let f = {
      url: "https://picsum.photos/" + _maxDim + "?r=" + Math.random(),
    };
    files[i] = f;
  }
  return files;
}
*/

function moveGrid(_grid, _x, _y, _t) {
  console.log("MOVE GRID");
  gsap.to(_grid, {
    duration: _t,
    x: _x,
    y: _y,
  });
}

function addGrid(_files, _c, _r, _animate, _w, _h, _x, _y,_skip,_isCrawler) {

  //console.log("ADD GRID");

  let grid = document.createElement("div");
  grid.populated = false;
  grid.classList.add("iGrid");
  grid.style["grid-template-columns"] = "repeat(" + _c + ",1fr)";
  grid.style["grid-template-rows"] = "repeat(" + _r + ",1fr)";
  document.querySelector("#grid").appendChild(grid);

  grid.args = arguments;
  grid.popCount = 0;
  grid.isCrawler = _isCrawler
  grid.fullyLoaded = false;

  //if (_files.length == 0) {
    grid.waitObject = {
      "grid":grid,
      "files":_files,
      "extras":[]
    };
    gridWaits.push(grid);

    /*
  } else {
    populateGrid(grid);
    grid.populated = true;
  }

  */
  allGrids.push(grid);

  return grid;
}

function populateGrid(_grid) {

  let c = 0;
  let o = (_grid.args[8]) ? _grid.args[8]:0;

  _grid.style.width = (_grid.args[4] ? _grid.args[4]:windowWidth) + "px";
  _grid.style.height = (_grid.args[5] ? _grid.args[5]:windowHeight) + "px";

  if (_grid.args[6]) {
    _grid.style.left = _grid.args[6] + "px";
    _grid.style.top = _grid.args[7] + "px";
  }


  let sc = _grid.popCount;
  let pc = _grid.popCount + (_grid.isCrawler ? _grid.args[1] * _grid.args[2]:5);

  for (let i = sc; i < min(pc,_grid.args[1] * _grid.args[2]); i++) { 
    let f = _grid.args[0][i + parseFloat(o)];      
    let gi = document.createElement("div");

      //Image element
    let gii = document.createElement("div");
    gii.classList.add("iGridImg");
    gi.appendChild(gii);

    try {
      //Alt text
      let git = document.createElement("div");
      git.classList.add("iGridText");
      git.innerHTML = f.text;
      gii.appendChild(git);


      //Lang text
      let gil = document.createElement("div");
      gil.classList.add("iGridLang");
      gil.innerHTML = f.language;
      gii.appendChild(gil);

      //Score text
      let gis = document.createElement("div");
      gis.classList.add("iGridScore");
      //kludge for sim values that are null
      if(f.similarity == null) f.similarity = "NO S" 
      gis.innerHTML = f.similarity.toString().slice(0,5);
      gii.appendChild(gis);
      gis.style["background-color"] =  getScoreColor(f.similarity);

      gi.id = "sq" + (c % _grid.args[1]) + "_" + Math.floor(c / _grid.args[1]);
      gi.classList.add("iGridItem");

      let w = (_grid.args[4] ? _grid.args[4]:windowWidth) / _grid.args[1] ;
      let h = (_grid.args[5] ? _grid.args[5]:windowHeight) / _grid.args[2] ;

      gi.style.width = w + "px";
      gi.style.height = h + "px";

      let imgSize;
      if ((w > 100 || h > 100) && (f["300px"]))  {
        imgSize = "300px"
      } else if (w > 30 || h > 30) {
        imgSize = "100px"
      } else {
        imgSize = "30px"
      }

      gii.style["background-image"] = "url(" + imageBase + f[imgSize] + ")";
      _grid.appendChild(gi);
       
      
      if (_grid.args[3]) {
        gsap.to(gi, {
          delay: Math.random() * 0.5,
          duration: 0.5,
          ease: "power1.out",
          opacity: 1,
        });
      }

    } catch (_e) {

    }
    c++;
    _grid.popCount ++;
  };

  if (_grid.popCount == (_grid.args[1] * _grid.args[2])) {
    _grid.fullyLoaded = true;
    //console.log("GRID DONE");
  }


    //console.log(c);
}

function crawlerToAlt(_crawler) {
  let _grid = _crawler.div;
  _grid.querySelectorAll(".iGridText").forEach((gi) => {
    gsap.to(gi, {
      duration: 0.5,
      delay: Math.random(),
      ease: "power1.out",
      opacity: 1,
    });
  });
}

function mapRange (value, a, b, c, d) {
    // first map value from (a..b) to (0..1)
    value = (value - a) / (b - a);
    // then map it from (0..1) to (c..d) and return it
    return c + value * (d - c);
}

function distroGrid(_grid) {
  if (_grid.populated) {
    let binCount = 20;
    let bins = [];
    let range = [0.26, 0.46];
    for (let i = 0; i <binCount; i++) {
      bins[i] = [];
    }

    try {
     _grid.querySelectorAll(".iGridItem").forEach((gi) => {

      let xOff = gi.offsetLeft;
      let yOff = gi.offsetTop;

      gi.oldPos = [xOff, yOff];

      let score = parseFloat(gi.querySelector(".iGridScore").innerHTML);
      let b = floor(mapRange(score, range[0], range[1], 0, binCount));

      let xp = mapRange(b, 0, binCount, windowWidth * 0.05, windowWidth - (windowWidth * 0.05));
      let yp = (windowHeight - 100) - (bins[b].length * 5);

      gsap.to(gi, {
        duration: 0.5,
        delay: 0.5 + (score * 6),
        x: xp - xOff,
        y: yp - yOff,
      });

      bins[b].push(gi);
    });
   } catch(_e) {

   }
 } else {
  //console.log("--- DEFER DISTRO");
  _grid.waitObject.extras.push({
    f:distroGrid
  });
}
}

function distroGridLang(_grid) {

  if (_grid.populated) {

    let langs = ["ru","fr","de","es","zh","ja","it","pt","nl","pl","no","vi","tr","la","lb","gl","da","cs","bg","sv","other"];
    let bins = {

    }
    langs.forEach(l => {
      bins[l] = [];
    });

    let gxOff = windowWidth * 0.4;
    let gyOff = _grid.offsetTop;

    //console.log(gxOff + ":" + gyOff);

    try {
     _grid.querySelectorAll(".iGridItem").forEach((gi) => {
      let l = gi.querySelector(".iGridLang").innerHTML;

      let xOff = gi.offsetLeft;
      let yOff = gi.offsetTop;

      gi.oldPos = [xOff, yOff];

      let b = langs.indexOf(l);
      if (b == -1) {
        b = langs.indexOf("other");
        //console.log(l);
        l = "other";
      }

      let xp = mapRange(b, 0, langs.length, windowWidth * 0.15, windowWidth - (windowWidth * 0.15));
      let yp = (windowHeight - 100) - (bins[l].length * 5);

      gsap.to(gi, {
        duration: 0.5,
        delay: 1 + (b * 0.2),
        x: xp - xOff - gxOff,
        y: yp - yOff - gyOff,
      });

      bins[l].push(gi);
    });
   } catch(_e) {
    console.log(_e);
  }
} else {
  console.log("--- DEFER UNDISTRO");
  _grid.waitObject.extras.push({
    f:distroGridLang
  });
}
}

function unDistro(_grid) {
  if (_grid.populated) {
    _grid.querySelectorAll(".iGridItem").forEach((gi) => {

      gsap.to(gi, {
        duration: 0.5,
        delay: 1 + random(2),
        x: gi.oldPos[0] / 2,
        y: gi.oldPos[1] / 2,
      });

    });
  } else {
    //console.log("--- DEFER UNDISTRO");
    _grid.waitObject.extras.push({
      f:unDistro
    });
  }
}


function gridToAlt(_grid) {
  //console.log("GRID TO ALT");
  if (_grid.populated) {
    //console.log("--- DO");
    try {
      //console.log(_grid);

      _grid.querySelectorAll(".iGridText").forEach((gi) => {
        gsap.to(gi, {
          duration: 0.5,
          delay: Math.random(),
          ease: "power1.out",
          opacity: 1,
        });
      });
    } catch (_e) {

    }
  } else {
    console.log("--- DEFER");
    _grid.waitObject.extras.push({
      f:gridToAlt
    });
  }
}

function gridToLang(_grid) {
  if (_grid.populated) {
    try {
      _grid.querySelectorAll(".iGridLang").forEach((gi) => {
        gsap.to(gi, {
          duration: 0.5,
          delay: Math.random(),
          ease: "power1.out",
          opacity: 1,
        });
      });
    } catch (_e) {

    }
  } else {
    _grid.waitObject.extras.push({
      f:gridToLang
    });
  }
}

function filterGrid(_grid, _range) {
  try {
    _grid.querySelectorAll(".iGridItem").forEach((gi) => {
      let score = parseFloat(gi.querySelector(".iGridScore").innerHTML);

      if (score < _range[0] || score > _range[1]) {
        gsap.to(gi, {
          duration: 0.5,
          delay: 1 + random(2),
          x:"-=50",
          ease: "power1.out",
          opacity: 0,
        });
      }
    });
  } catch (_e) {

  }
  

}

function gridToScore(_grid, _bully) {
  if (_grid.populated) {
   if(_bully) {
     try {
       _grid.querySelectorAll(".iGridText").forEach((gi) => {
        gsap.to(gi, {
          duration: 0.2,
          delay: Math.random(),
          ease: "power1.out",
          opacity: 0,
        });
      });
     } catch (_e) {

     }
   }
   try {
    _grid.querySelectorAll(".iGridScore").forEach((gi) => {
      gsap.to(gi, {
        duration: 0.5,
        delay: Math.random(),
        ease: "power1.out",
        opacity: 1,
      });
    });
  } catch (_e) {

  }
} else {
  if (_bully) {
    _grid.waitObject.extras = [];
  }
  _grid.waitObject.extras.push({
    f:gridToScore
  })
}
}


function removeAllGrids() {

  document.querySelectorAll(".iGridItem").forEach(g => {
    g.removed = true;
  });

  try {
    document.querySelectorAll(".iGridItem").forEach((gi) => {
      gsap.to(gi, {
        duration: 0.5,
        delay: Math.random(),
        ease: "power1.out",
        opacity: 0,
      });
    });
    gsap.to(document.querySelector(".iGrid"), {
      duration: 1.5,
      ease: "power1.out",
      opacity: 1,
      onComplete: function () {
        try {
         this._targets[0].remove();
       } catch (_e) {

       } 
     },
   });
  } catch (_e) {
    //document.querySelector(".iGrid").remove();
  }
}

function removeGrid(_grid) {
  try {
    _grid.querySelectorAll(".iGridItem").forEach((gi) => {
      gsap.to(gi, {
        duration: 0.5,
        delay: Math.random(),
        ease: "power1.out",
        opacity: 0,
      });
    });

    gsap.to(_grid, {
      duration: 1.5,
      ease: "power1.out",
      opacity: 1,
      onCompleteParams:[_grid],
      onComplete: function (_grid) {
        try {
         _grid.remove();
       } catch (_e) {
         console.log("REMOVE ERROR");
         console.log(_e);
       } 
     },
   });
  } catch (_e) {
    
    //document.querySelector(".iGrid").remove();
  }
}

function hiliteGrid(_grid, _index) {
  let gis = _grid.querySelectorAll(".iGridItem");
  let fgi = gis[_index];
  _grid.querySelectorAll(".iGridItem").forEach((gi) => {
    if (gi != fgi) {
      gsap.to(gi, {
        duration: 0.5,
        delay: Math.random(),
        ease: "power1.out",
        opacity: 0,
      });
    }
  });
}

function markLanguage() {
  let g = addGrid(prepareFileList(1000), 18, 10, true);
  let tokens = [
    { token: "EN", prob: 0.6 },
    { token: "RU", prob: 0.1 },
    { token: "FR", prob: 0.07 },
    { token: "ES", prob: 0.06 },
    { token: "ZH", prob: 0.06 },
    { token: "JA", prob: 0.04 },
    { token: "IT", prob: 0.04 },
    { token: "PT", prob: 0.04 },
    { token: "NL", prob: 0.03 },
    ];

  let c = 0;
  g.querySelectorAll(".iGridText").forEach((gii) => {
    let dice = Math.random();
    let dc = 0;
    let di = 0;
    let ltoken = "";
    while (dc < dice) {
      ltoken = tokens[di].token;
      dc += tokens[di].prob;
      di++;
    }
    gii.innerHTML = "<span class='langMark'>" + ltoken + "</span";
    c++;
    console.log(gii);
    gsap.to(gii, {
      duration: 0.5,
      delay: 4 + c * 0.01,
      ease: "power1.out",
      opacity: 1,
    });
  });
}

//---------------------- CRAWLERS

let crawlers = [];
let crawlTimer;

function updateCrawlers() {
  crawlers.forEach((c) => {
    if (c.alive) {
      c.tick++;
      if (c.tick == c.pulse) {
        c.tick = 0;
        if (!c.pattern) {
          let dice = Math.random() * 100;
          let chk = 0;
          let i = 0;
          while (dice > chk) {
            chk += c.probs[i];
            i++;
          }
          if (i == 1) {
          //UP
            c.index[1]--;
            if (c.index[1] < 0) c.index[1] += c.grid[1];
          } else if (i == 2) {
          //RIGHT
            c.index[0]++;
            if (c.index[0] >= c.grid[0]) c.index[0] = 0;
          } else if (i == 3) {
          //DOWN
            c.index[1]++;
            if (c.index[1] >= c.grid[1]) c.index[1] = 0;
          } else {
            c.index[0]--;
            if (c.index[0] < 0) c.index[0] += c.grid[0];
          //LEFT
          }
        } else {
          let dir = c.pattern[c.tock % c.pattern.length];
        //console.log(dir);
          if (dir == "u") {
          //UP
            c.index[1]--;
            if (c.index[1] < 0) c.index[1] += c.grid[1];
          } else if (dir == "r") {
          //RIGHT
            c.index[0]++;
            if (c.index[0] >= c.grid[0]) c.index[0] = 0;
          } else if (dir == "d") {
          //DOWN
            c.index[1]++;
            if (c.index[1] >= c.grid[1]) c.index[1] = 0;
          } else if (dir == "l") {
            c.index[0]--;
            if (c.index[0] < 0) c.index[0] += c.grid[0];
          //LEFT
          }
        }

        let sq = c.div.querySelector("#sq" + c.index[0] + "_" + c.index[1]);

        if (c.redding && Math.random() < 0.02) {
          sq.style["background-image"] = "none";
          sq.style["background-color"] = "red";
        }

        if (!c.noFade) {
          gsap.to(sq, {
            duration: 0.5,
            ease: "power1.out",
            opacity: 1,
            onComplete: function (_sq) {
              gsap.to(_sq, {
                opacity: 0,
                duration: 1,
                ease: "power1.out",
                delay: 10,
              });
            },
            onCompleteParams: [sq],
          });
        } else {
          gsap.to(sq, {
            duration: 0.5,
            ease: "power1.out",
            opacity: 1,
          });
        }

        try {
          let t = sq.querySelector(".iGridText");
        //console.log(t);
          if (c.size > 30) {
            gsap.to(t, {
              opacity: 1,
              duration: 1,
              delay: 2,
            });
          }
        } catch (_e) {

        }

        c.tock++;
        if (c.count) {
          if (c.tock == c.count - 1) c.alive = false;
        }

      }
    }
  });
}
function addCrawlBlock(_images, _size, _pulse, _count, _w) {
  //Make pattern
  let pattern = [];
  for (let i = 0; i < _count; i++) {
    if (i % _w == _w - 1) {
      pattern[i] = 'u';
    } else {
      let row = Math.floor(i / _w);
      pattern[i] = row % 2 == 0 ? 'r':'l';
    }
  }

  let h = Math.ceil(_count / _w);
  let _grid = [_w, h]
  
  let _div = addGrid(_images, _grid[0], _grid[1], false, _w * _size, h * _size, 0, true);
  
  //Add crawler
  let crawl = {
    alive:true,
    grid: _grid,
    images: _images,
    size: _size,
    index: [0,h],
    pulse: _pulse,
    probs: [],
    tick: 0,
    tock: 0,
    div: _div,
    redding: false,
    pattern: pattern,
    noFade: true,
    noRepeat:true,
    count:_count
  };
  crawlers.push(crawl);
  return(crawl);
  
}

function addCrawler(
  _images,
  _grid,
  _size,
  _startIndex,
  _pulse,
  _probs,
  _pattern,
  _noFade,
  _offset
  ) {
  let crawl = {
    alive: true,
    grid: _grid,
    images: _images,
    size: _size,
    index: _startIndex,
    pulse: _pulse,
    probs: _probs ? _probs : [25, 25, 25, 25],
    tick: 0,
    tock: 0,
    div: addGrid(_images, _grid[0], _grid[1], false, false, false, false, false, _offset, true),
    redding: false,
    pattern: _pattern,
  };
  crawlers.push(crawl);
}

function speedCrawlers(_s) {
  crawlers.forEach((c) => {
    c.pulse = _s;
    c.tick = 0;
  });
}

function startCrawlers() {
  if (!crawlTimer) crawlTimer = setInterval(updateCrawlers, 30);
}

function clearCrawlers() {
  crawlers = [];
}

function stopCrawlers() {
  let squares = document.querySelectorAll(".iGridItem");
  squares.forEach(sq => { 
    gsap.to(sq, {
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      delay: random(),
    });
  })
  clearInterval(crawlTimer);
  crawlTimer = null;
}

//---------- PEOPLE to IMAGE RATIOS

let ratioItems = [];

function addRatio(_ratio, _lang) {

  let s = 100;

  if (_ratio[0] > 10) {
    s = 60;
  }

  if (_ratio[0] > 100) {
    s = 20;
  }

  let is = 100;


  //console.log("ADD RATIO");
  //console.log(_ratio);
    //People
  for(let i = 0; i < _ratio[0]; i++) {
    let p = document.createElement("div");
    p.classList.add("person");

    let cols = (i > 100) ? (60):(_ratio[0]);
    p.style.left = (windowWidth/2 -(cols/2 * s) + ((i % cols) * s)) + "px";
      p.style.top = ((windowHeight/4 - _ratio[0]/10) + (s * floor(i / cols))) + "px";//random(windowHeight/5, 2 * windowHeight/5) + "px";
      document.querySelector("#grid").appendChild(p);
      p.style.width = s + "px";
      p.style.height = s + "px";


      gsap.to(p, {
        opacity: 1,
        duration: 1,
        ease: "power1.out",
        delay: 0,
      });
      ratioItems.push(p)
    }
    //Images
    //People
    for(let i = 0; i < _ratio[1]; i++) {
      let img = document.createElement("div");
      img.classList.add("person");
      img.style.left = (windowWidth/2 -(_ratio[1]/2 * is) + (i * is)) + "px";//random(windowWidth/4,3 * windowWidth/4) + "px";
      img.style.top = (2 * windowHeight/3) + "px";///random(3 * windowHeight/5, 3.2 * windowHeight/5 - 100) + "px";
      img.style.width = is + "px";
      img.style.height = is + "px";

      let sample = samples[_lang];

      let f = sample[i];
      img.style["background-image"] = "url(" + imageBase + f["100px"] + ")";
      document.querySelector("#grid").appendChild(img);
      gsap.to(img, {
        opacity: 1,
        duration: 1,
        ease: "power1.out",
        delay: 0,
      });
      ratioItems.push(img)
    }
  }

  function clearRatio() {
    ratioItems.forEach(i => {
      gsap.to(i, {
        opacity: 0,
        duration: 1,
        ease: "power1.out",
        delay: random(),
      });
    })
    ratioItems = [];
  }

//-----------DATA

  function onJSON() {
    console.log("JSON LOADED");
  }

  function getJSON() {
  //Map
    fetch("data/eng.json")
    .then((response) => response.json())

    //There are only three possible nesting levels so this hack is fine. Right?
    .then((data) => {
      data.children.forEach(function (d) {
        jMap[d.name] = d;
        d.children.forEach(function (d2) {
          jMap[d2.name] = d2;
          d2.children.forEach(function (d3) {
            jMap[d3.name] = d3;
          });
        });
      });

      //Medians
      fetch("data/multi1.json")
      .then((response) => response.json())
      .then((data) => {
        medians = data;
          //isolate("Internet & Telecom");
      })
      .catch((error) => console.error("Error fetching JSON:", error));
    })
    .catch((error) => console.error("Error fetching JSON:", error));
  }

//---------- UTILITIES

  function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

getJSON();
