/// <reference path="./TSDef/p5.global-mode.d.ts" />
"use strict";

function setup()
{

    randomSeed(100000*fxrand())
    noiseSeed(100000*fxrand())
    createCanvas(800,800)
    background(255)
    // translate(width/2,height/2)
    colorMode(HSB)
    push()
    fill(fxrand()*255,255,255)
    ellipse(width/2,height/2,500*fxrand())
    pop()
    textSize(20)
    text(str(fxhash),10,100)
    textSize(30)
    text("Your hash",10,50)

    console.log(fxhash)
}
