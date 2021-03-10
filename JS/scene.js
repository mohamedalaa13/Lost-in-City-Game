//Make Scene Object
const scene = {
	x: 0,
	y: [canvas.height/7, 400],//Where to draw from
	w: canvas.width,
	h: [canvas.height/7, canvas.height/3.5], //Two Times bigger than land
	color: ['#3498DB','#566573','#A569BD'],


	//Draw Everything in Scene
	drawScene(){
		this.land.drawLand();
		this.water.drawWater();
		this.street.drawStreet();
	},
	
	land:{
		
		drawLand(){ //Draw 3 Peices of land
			for(let i = 0; i < 3; i ++){
				ctx.drawImage(middle,0,0,500,200,0,i * 300,900,100);
						
			};
		}
	},
	
	water:{
			
		//Water Object
			
		//Rows In The Water
		rows: 
		[ 
			{
				name:'row1',
				x:0,
				y:260,
				speed:2.5,
				speedFactor: 1.5,
				'log count': 3,
				'firstLaneObj count': 2,
				space: 300,
				logs:[],
				logImg:'log1',
				firstLaneObjImg: 'firstLaneObj1',
				firstLaneObjs:[]
			},
			{	
				name:'row2',
				x:0,
				y:220,
				speed:-3,
				speedFactor: -1.75,
				'log count': 2,
				'firstLaneObj count': 3,
				space:275,
				logs:[],
				logImg:'log1',
				firstLaneObjImg:'firstLaneObj2',
				firstLaneObjs:[]

			},
			{
				name:'row3',
				x:0,
				y:180,
				speed:3,
				speedFactor: 1.75,
				'log count': 2,
				'firstLaneObj count': 1,
				space:375, 
				logs:[],
				logImg:'log1',
				firstLaneObjImg:'firstLaneObj1',
				firstLaneObjs:[]
			},
			{
				name:'row4Water',
				x:0,
				y:140,
				speed:-2,
				speedFactor: -1.25,
				'log count': 1,
				'firstLaneObj count': 2,
				space:250, 
				logs:[],
				logImg:'log1',
				firstLaneObjImg:'firstLaneObj2',
				firstLaneObjs:[]
			},
			{
				name:'row5',
				x:0,
				y:100,
				speed:3,
				speedFactor: 1.75,
				'log count': 2,
				'firstLaneObj count': 2,
				space:270, 
				logs:[],
				logImg:'log1',
				firstLaneObjImg:'firstLaneObj1',
				firstLaneObjs:[]
			}
		],
		//Draw Water
		drawWater(){ 
	    	ctx.drawImage(drawSecondLane[g].source,drawSecondLane[g].sx,drawSecondLane[g].sy,drawSecondLane[g].sw,drawSecondLane[g].sh,0,100,900,200);

		},
		//Generate Logs And Push To Each Row
		logFactory(){	
			for(let i = 0, len = this.rows.length; i < len; i ++){
				for(let j = 0, lc = this.rows[i]['log count'] ; j < lc; j ++){
					const newLog = new Log(this.rows[i].x + (j * this.rows[i].space) , this.rows[i].y, this.rows[i].speed, this.rows[i].name, this.rows[i].logImg, this.rows[i].speedFactor);
					this.rows[i].logs.push(newLog);
					this.rows[i].logs[j].drawMovingObj();
				};
			};
		},
		firstLaneObjFactory(){
			for(let i = 0, len = this.rows.length; i < len ; i ++){
				for(let j = 0, cc = this.rows[i]['firstLaneObj count']; j < cc; j ++){
					const newfirstLaneObj = new firstLaneObj(this.rows[i].x + (this.rows[i]['log count'] * this.rows[i].space) + (j * 180), this.rows[i].y, this.rows[i].speed, this.rows[i].name, this.rows[i].firstLaneObjImg, this.rows[i].speedFactor)
					this.rows[i].firstLaneObjs.push(newfirstLaneObj);
					this.rows[i].firstLaneObjs[j].drawMovingObj();
				};
			};
		}
	},	
	//Street Object
	street:{
		//Rows In the Street
		rows: 
		[ 
			{
				name:'row1',
				x:100,
				y:560,
				speed:1,
				speedFactor: .75,
				'MovingObj count': 4,
				space: 400,
				MovingObjImg:['car2', 'car3'],
				MovingObjs:[]
			},
			{	
				name:'row2',
				x:150,
				y:520,
				speed:-2,
				speedFactor: -1.25,
				'MovingObj count': 3,
				space: 400,
				MovingObjImg:['car1', 'car4', 'car5'],
				MovingObjs:[]
			},
			{
				name:'row3',
				x:170,
				y:480,
				speed:2.5,
				speedFactor: 1.5,
				'MovingObj count': 3,
				space: 350,
				MovingObjImg:['car2', 'car3'],
				MovingObjs:[]
			},
			{
				name: 'row4',
				x: 160,
				y: 440,
				speed: 1.5,
				speedFactor: 1,
				'MovingObj count':5,
				space:200,
				MovingObjImg:['car2', 'car3'],
				MovingObjs:[]
			},
			{
				name: 'row5',
				x: 130,
				y: 400,
				speed: -2,
				speedFactor: -1.25,
				'MovingObj count':3,
				space: 300,
				MovingObjImg:['car1', 'car4', 'car5'],
				MovingObjs:[]
			}
		],
		//Draw Street
		drawStreet(){
		
			ctx.drawImage(drawfirstLane[g].source,drawfirstLane[g].sx,drawfirstLane[g].sy,drawfirstLane[g].sw,drawfirstLane[g].sh,0,400,900,200);
		},
		//Generate MovingObjs And Push To Each Row
		MovingObjFactory(){
			for(let i = 0, len = this.rows.length; i < len ; i ++){
				for(let j = 0, vc = this.rows[i]['MovingObj count']; j < vc; j++){
					//(x,y,l,h,color,speed, row name)
					const newMovingObj = new MovingObj(this.rows[i].x + (this.rows[i].space * j), this.rows[i].y,this.rows[i].speed, this.rows[i].name, this.rows[i].MovingObjImg[Math.floor( Math.random() * this.rows[i].MovingObjImg.length)], this.rows[i].speedFactor);
					this.rows[i].MovingObjs.push(newMovingObj);
					this.rows[i].MovingObjs[j].drawMovingObj();
				};
			};
		}
	}				
}	
