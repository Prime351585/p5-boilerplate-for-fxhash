# p5-boilerplate-for-fxhash
This is the basic boilerplate with minimal installations to setup p5.js for fxhash(Visual Studio Code is most suited although you can use other editors).

# Requirments:
1.Visual Studio Code

2.Git(Optional)

# Getting Started

There are two ways to download this boilerplate:
1. Basic one is to directly download the zip file from github itself by clicking code->Download Zip

![image](https://user-images.githubusercontent.com/76157279/188544230-7f99a47c-2cb2-464b-afb2-8c9d440392a3.png)

2. Other one is through git clone (git insallation is needed )
    Now if you have git setted up head to terminal/command prompt and enter
    ```sh
    git clone https://github.com/Prime351585/p5-boilerplate-for-fxhash.git
    ```
    The installation will go like this
    
    ![image](https://user-images.githubusercontent.com/76157279/188544962-f8360ab6-5271-4270-91dd-b0c8a44a1805.png)

Now if you've cloned the boilerplate through git you may see this folder

![image](https://user-images.githubusercontent.com/76157279/188545693-11b9f530-4cce-4719-b50d-64e34945d211.png)

And if you've downloaded it you'll need to extract it.

# Vs Code Setup
if you've installed Vs Code then head to the Vs Code Extension place and install Live Server extension(Ritwick Dey)

![image](https://user-images.githubusercontent.com/76157279/188546685-eb177ba9-7251-482f-ab49-da21491502ed.png)

Once the extension is installed you need to restart Vs Code and you'll see a little Go Live option in bottom right corner of your Vs code window

Now once inside Vs code window go open the boilerplate as a folder by going to `` File->Open Folder `` and selecting the p5-boilerplate folder

![image](https://user-images.githubusercontent.com/76157279/188547517-53e4d539-43ea-41f4-8a74-da686b8e2d89.png)

Once opened you'll see the files to work on 

![image](https://user-images.githubusercontent.com/76157279/188548099-a510026a-cdb4-4d08-b6e7-b362012ff1b4.png)

So inside boilerplate we have directories like this...

TSdef folder the two files which enable intellesense in vscode which help to code with ease(i borrowed it from stackOverflow 
https://stackoverflow.com/questions/54581512/make-vscode-understand-p5js
 )

Inside Library folder I've included both core library files of p5.js and p5.min.js one can use any one of it by selecting from html file

Then we have main.js file in which we'll work

Then there is html file which contains fxhash script

There is a css file which keeps the canvas at centre of the screen.

By default the main.js will have a code to display a circle of random radius and random color alongwith the fxhash seed

The first two lines of main.js are for refrencing the intellisense for vscode if you don't want intellisense you can remove these two lines and delete TSDef folder as well.

``/// <reference path="./TSDef/p5.global-mode.d.ts" />
"use strict"; ``

Once everything is setted up hit go live to open live preview in a browser and you'll see something like this

![image](https://user-images.githubusercontent.com/76157279/188549278-2c73f92b-2689-4284-9b49-22cb2e84f303.png)

# Zipping Files and Getting ready to upload zip to fxhash

Once you've completed writing your code open the folder in which you're working via file explorer or you can directly Reveal it in file explorer from Vs Code

![image](https://user-images.githubusercontent.com/76157279/188549967-890bca7b-eed5-43ce-b476-65faca72f570.png)

Once the folder is opened select all files

![image](https://user-images.githubusercontent.com/76157279/188550341-0a93fc58-3778-4647-965f-aeacec0ed5d7.png)

Right Click and compress it to a zip

![image](https://user-images.githubusercontent.com/76157279/188550466-27156c4a-ff26-4814-841f-72b5f57e69af.png)

You'll get a zip file,Rename it to anything you want

![image](https://user-images.githubusercontent.com/76157279/188550609-9c771101-87d6-4de2-980d-0e2dad3eff93.png)

Then upload it on fxhash and you are good to go.................... : )









