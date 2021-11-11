
var back, imgBack;
var cat, catAnimation, cat1Img, cat2Img;
var mouse, mouse_animation, mouse1Img;
function preload() {
    //carregue as imagens aqui
    catAnimation.loadAnimation("cat2.png","cat3.png");
    cat1Img.loadImage("cat1.png");
    cat2Img.loadImage("cat4.png");
    mouse1Img.loadImage("mouse1.png");
    mouse_animation.loadAnimation("mouse2.png","mouse3.png");
    imgBack.loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    back = createSprite(500,400);
    back.addImage(imgBack);

    cat = createSprite(900,700);
    cat.addImage(cat1Img);

    mouse = createSprite(500,700);
    mouse.addAnimation(mouse_animation);
    
}

function draw() {

    background(0);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem

    if (cat.x - mouse.x < mouse.width / 2 + cat.width / 2){

      cat.changeImage(cat2Img);
      mouse.changeImage(mouse1Img);



    }
    keyPressed();

    drawSprites();
}

function keyPressed(){
    if (keyCode === LEFT_ARROW){
        cat.changeAnimation(catAnimation);
        cat.velocityX = -5;



    }
  //Para mover e alterar a animação, escreva o código aqui


}