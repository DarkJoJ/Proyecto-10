var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

calle1= createSprite(190, 120, 420, 3);
calle2= createSprite(190, 260, 420, 3);
var carro1= createSprite(100, 130, 12, 12);
carro1.shapeColor="red";
var carro2= createSprite(225, 130, 12, 12);
carro2.shapeColor="red";
var carro3= createSprite(165, 250, 12, 12);
carro3.shapeColor="red";
var carro4= createSprite(270, 250, 12, 12);
carro4.shapeColor="red";

var Sam= createSprite(20, 190, 13, 13);
Sam.shapeColor="darkBlue";

carro1.velocityY=7;
carro2.velocityY=7
carro3.velocityY=-7
carro4.velocityY=-7
var Intentos=0

function draw() {
  background("white");
  textSize(25);
  text("Intentos: "+ Intentos, 140, 30);
  
  noStroke();
  fill("yellow");
  rect(0, 120, 52, 140);
  noStroke();
  fill("green");
  rect(345, 120, 52, 140);
  
  carro1.bounceOff(calle1);
  carro1.bounceOff(calle2);
  carro2.bounceOff(calle1);
  carro2.bounceOff(calle2);
  carro3.bounceOff(calle1);
  carro3.bounceOff(calle2);
  carro4.bounceOff(calle1);
  carro4.bounceOff(calle2);
  
  if (keyDown("right")) {
    Sam.x=Sam.x+2.1;
  }
  if (keyDown("left")) {
    Sam.x=Sam.x-2.1;
  }
  if (Sam.isTouching(carro1)||Sam.isTouching(carro2)||Sam.isTouching(carro3)||Sam.isTouching(carro4)) {
    Sam.y=190;
    Sam.x=20;
    Intentos=Intentos+1;
  }
  
  
  
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
