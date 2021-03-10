//Global Variables
let level = localStorage.getItem('level');
let selectedChar = localStorage.getItem('selectedChar');

//console.log("level : "+level+"  selectedChar : "+selectedChar)

//H3 Tag to input score and Lives
let lives = document.getElementById('lives');
let score = document.getElementById('score');
let round = document.getElementById('round');

//Controls Animation function
let control = true;

//Get Canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
//Image Object for Sprites

const waterImg= new Image();
waterImg.src = "images/background.png"

const sand= new Image();
sand.src = "images/sand.png"

const roadImg= new Image();
roadImg.src = "images/road.jpg"

const grass= new Image();
grass.src = "images/grass.png"

const middle= new Image();
middle.src = "images/road3.jpg"

const carSprite= new Image();
carSprite.src = "images/cars.png"

const bird= new Image();
bird.src = "images/bird.png"

const bird_flip= new Image();
bird_flip.src = "images/flip_bird.png"


const character_1= new Image();
character_1.src = "images/1.png"


const character_2= new Image();
character_2.src = "images/2.png"

const character_3= new Image();
character_3.src = "images/3.png"


const character_4= new Image();
character_4.src = "images/4.png"

const character_5= new Image();
character_5.src = "images/5.png"

const collision= new Image();
collision.src = "images/collisions.png"


const dragon= new Image();
dragon.src = "images/parrot2.png"


const dragon_flip= new Image();
dragon_flip.src = "images/parrot3.png"



const cats= new Image();
cats.src = "images/cats.png"



const cobra_red= new Image();
cobra_red.src = "images/cobra-red.png"



const cobra_blue= new Image();
cobra_blue.src = "images/cobra-blue.png"

const log= new Image();
log.src = "images/log.png"




const steel= new Image();
steel.src = "images/steel.png"


const stone= new Image();
stone.src = "images/stone.png"


const dolphin= new Image();
dolphin.src = "images/dolphin.png"


const lava= new Image();
lava.src = "images/lava.png"


const flame= new Image();
flame.src = "images/flame.jpg"

let frame = 0;

const drawObj = [
	{
		source: carSprite ,
		sx:0,
		sy:0,
		sw:800,
		sh:350
	},
		{
		source: carSprite ,
		sx:0,
		sy:360,
		sw:800,
		sh:350
				
	},
	{
		source: carSprite ,
		sx:0,
		sy:745,
		sw:800,
		sh:350
				
	},
	{
		source: carSprite ,
		sx:0,
		sy:1415,
		sw:800,
		sh:350
				
	},
	{
		source: carSprite ,
		sx:0,
		sy:2150,
		sw:800,
		sh:350
				
	},
	{
		source: cats ,
		sx:285,
		sy:130,
		sw:100,
		sh:70
	},
		{
		source: cats ,
		sx:580,
		sy:220,
		sw:100,
		sh:70
				
	},
	{
		source: cats ,
		sx:580,
		sy:600,
		sw:100,
		sh:70
				
	},
	{
		source: cats ,
		sx:570,
		sy:510,
		sw:100,
		sh:70
				
	},
	{
		source: cats ,
		sx:860,
		sy:510,
		sw:100,
		sh:70
				
	},
	{
		source: cobra_blue ,
		sx:0,
		sy:187,
		sw:60,
		sh:63
	},
		{
		source: cobra_red ,
		sx:0,
		sy:64,
		sw:60,
		sh:60
				
	},
	{
		source: cobra_red ,
		sx:0,
		sy:64,
		sw:60,
		sh:60
				
	},
	{
		source: cobra_blue ,
		sx:0,
		sy:187,
		sw:60,
		sh:63
				
	},
	{
		source: cobra_blue ,
		sx:0,
		sy:187,
		sw:60,
		sh:63
				
	}
]


const drawobject2 = [
	{
		source: dolphin ,
		sx:570,
		sy:600,
		sw:100,
		sh:50
	},
		{
		source: dolphin ,
		sx:290,
		sy:519,
		sw:100,
		sh:50
				
	},
	{

		source: dragon_flip ,
		sx:0,
		sy:370,
		sw:167,
		sh:100
		
				
	},
	{
		source: dragon ,
		sx:0,
		sy:370,
		sw:167,
		sh:100
				
	},
	{
		
		source: bird ,
		sx:0,
		sy:0,
		sw:160,
		sh:130
				
	},
	{
		source: bird_flip ,
		sx:0,
		sy:0,
		sw:160,
		sh:130
	}
]



const drawLog = [
	{
		source: log ,
		sx:20,
		sy:30,
		sw:770,
		sh:260
	},
		{
		source: steel ,
		sx:0,
		sy:130,
		sw:635,
		sh:130
				
	},
	{

		source: stone ,
		sx:0,
		sy:0,
		sw:900,
		sh:400
		
				
	}
]



const drawCharacter = [
	{
		source: character_1 ,	
	},
		{
		source: character_2 ,			
	},
	{

		source: character_3 ,			
	}
	,
	{

		source: character_4 ,			
	}
	,
	{

		source: character_5 ,			
	}
]



const drawfirstLane = [
	{ 
		source: roadImg ,
		sx:0 ,
		sy:0 ,
		sw:852 ,
		sh: 480	
	},
		{
		source: grass ,
		sx:0 ,
		sy:340 ,
		sw:900 ,
		sh:160 			
	}
	,
	{

		source: sand ,
		sx:0 ,
		sy:200 ,
		sw:840 ,
		sh:260 			
	}
	
]



const drawSecondLane = [
	{ 
		source: waterImg ,
		sx:0 ,
		sy:0 ,
		sw:600 ,
		sh: 250	
	},
		{
		source: lava ,
		sx:20 ,
		sy:50 ,
		sw:900 ,
		sh:300 			
	}
	,
	{

		source: flame ,
		sx:0 ,
		sy:210 ,
		sw:620 ,
		sh:390 			
	}
	
]


let i;

let displacement ;

let displacement2 ;

let j;

let k;

let m;

let g;

let flag;

if(selectedChar == 'char1'){
	m=0;
}
else if(selectedChar == 'char2')
{
	m=1;
}
else if(selectedChar == 'char3')
{
	m=2;
}
else if(selectedChar == 'char4')
{
	m=3;
}
else if(selectedChar == 'char5')
{
	m=4;
}

if (level == 'easy'){
	g=0;
	i=0;
	j=0;
	k=0;
	flag=false;
	displacement=0;
	displacement2 = 95;

}
else if(level == 'medium'){
	g=1;
	i=5;
	j=2;
	k=2;
	flag=true;
	displacement= 95;
	displacement2 = 170;

}

else if(level == 'hard'){

	g=2;
	i=10;
	j=4;
	k=1;
	flag=true;
	displacement= 63;
	displacement2 = 160;
	
}
