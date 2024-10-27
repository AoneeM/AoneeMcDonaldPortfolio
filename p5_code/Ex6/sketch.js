let yippee;
let nani;
let spiderman;
let sponge;
let batman;
let mgr;

function preload() {
    // sound should be loaded so its available for all places.
    soundFormats('mp3', 'ogg');
    yippee = loadSound('sounds/yippee-tbh.mp3');
    nani = loadSound('sounds/nani-meme-sound-effect.mp3');
    spiderman = loadSound('sounds/spiderman-meme-song.mp3');
    sponge = loadSound('sounds/sponge.mp3');
batman = loadSound('sounds/batman.mp3');
}

function setup() {
    createCanvas(600, 600);
    // console.log(hell);
    mgr = new SceneManager();
 
    if (loy > 700) {
        loy = 5;
      }
       loy++;

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (drop);
    mgr.addScene (main);
    mgr.addScene (help);
    mgr.addScene (help);
    mgr.showNextScene();

}

function draw()
{

    // passthe current draw function into the SceneManager
    mgr.draw(main);
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
   mgr.mousePressed();
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( drop );
            break;
        case '2':
            mgr.showScene( main );
            break;
        case '3':
            mgr.showScene( help );
            break;
        case '4':
            mgr.showScene( drop );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
