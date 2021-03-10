//Make A MovingObj Class
class MovingObj {
		constructor(x, y, speed, row, img, speedFactor){
			this.x = x;
			this.y = y;
			this.w = 80;
			this.h = 38;
			this.speed = speed;
			this.row = row;
			this.img = img;
			this.speedFactor = speedFactor;
			this.counter = 0;
			this.randomise = Math.floor(Math.random() * 15 + 15);
			if(level == 'medium'){
				this.speed = this.speed * 1.5;
				this.speedFactor = this.speedFactor * 1.1;
			}
			if(level == 'hard'){
				this.speed = this.speed * 2;
				this.speedFactor = this.speedFactor * 1.1;
			}

		}
		drawMovingObj(){
			switch(this.img){
				case 'car1':
					if(frame % this.randomise === 0 && flag){
						if(this.counter >= 2){
							this.counter = 0;
						} else{
							this.counter++;
						}
					}
					
					ctx.drawImage(drawObj[0+i].source, drawObj[0+i].sx + this.counter *displacement, drawObj[0+i].sy, drawObj[0+i].sw, drawObj[0+i].sh, this.x, this.y, this.w, this.h);
					break;

				case 'car2':
					if(frame % this.randomise === 0  && flag){
						if(this.counter >= 2){
							this.counter = 0;
						} else{
							this.counter++;
						}
					}
					ctx.drawImage(drawObj[1+i].source, drawObj[1+i].sx  + this.counter *displacement, drawObj[1+i].sy, drawObj[1+i].sw, drawObj[1+i].sh, this.x, this.y, this.w, this.h);
					break;

				case 'car3':
					if(frame % this.randomise === 0  && flag){
						if(this.counter >= 2){
							this.counter = 0;
						} else{
							this.counter++;
						}
					}
					ctx.drawImage(drawObj[2+i].source, drawObj[2+i].sx  + this.counter *displacement, drawObj[2+i].sy, drawObj[2+i].sw, drawObj[2+i].sh, this.x, this.y, this.w, this.h);
					break;

				case 'car4':
					if(frame % this.randomise === 0  && flag){
						if(this.counter >= 2){
							this.counter = 0;
						} else{
							this.counter++;
						}
					}
					ctx.drawImage(drawObj[3+i].source, drawObj[3+i].sx  + this.counter *displacement, drawObj[3+i].sy, drawObj[3+i].sw, drawObj[3+i].sh, this.x, this.y, this.w, this.h);
					break;

				case 'car5':
					//this.w = 130;
					if(frame % this.randomise === 0  && flag){
						if(this.counter >= 2){
							this.counter = 0;
						} else{
							this.counter++;
						}
					}
					ctx.drawImage(drawObj[4+i].source, drawObj[4+i].sx  + this.counter *displacement, drawObj[4+i].sy, drawObj[4+i].sw, drawObj[4+i].sh, this.x, this.y, this.w, this.h);
					break;
				case 'log1':

					ctx.drawImage(drawLog[k].source, drawLog[k].sx  , drawLog[k].sy, drawLog[k].sw, drawLog[k].sh, this.x, this.y, this.w, this.h);
					//ctx.drawImage(log, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.w, this.h);
					break;
				case 'firstLaneObj1':
					if(frame % this.randomise === 0){
						if(this.counter >= 2){
							this.counter = 0;
						} else{
							this.counter++;
						}
					}
						
					
					ctx.drawImage(drawobject2[0+j].source,drawobject2[0+j].sx + (displacement2 * this.counter), drawobject2[0+j].sy, drawobject2[0+j].sw, drawobject2[0+j].sh, this.x, this.y, this.w, this.h);
					
					break;
				case 'firstLaneObj2':
					if(frame % this.randomise === 0){
						if(this.counter >= 2){
							this.counter = 0;
						} else{
							this.counter++;
						}
					}

					ctx.drawImage(drawobject2[1+j].source,drawobject2[1+j].sx + (displacement2 * this.counter), drawobject2[1+j].sy, drawobject2[1+j].sw, drawobject2[1+j].sh, this.x, this.y, this.w, this.h);

					//ctx.drawImage(dragon,this.counter * 170 , 200 , 167 ,100, this.x, this.y, this.w,this.h);
					break;
				case 'bug':
					ctx.drawImage(sprites3, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.w, this.h);
					break;									

			}	


		}
		move(){	
			//Conditionals to bring back MovingObjs on canvas
			if(this.x > (canvas.width + 150)){
				this.x = -150;
			}
			//If MovingObj is moving in Reverse
			else if(this.x < -150 && (this.row === 'row2' || this.row === 'row5' || this.row === 'row4Water' )){

				this.x = canvas.width + 150 ; 
				
			}
			
			if(thePlayerGame.round > 1){
				this.speed = (thePlayerGame.round * this.speedFactor);
			}

			this.x += this.speed;
			
			this.drawMovingObj();
		}
		//Detect Collision To player
		detectCollision(){
			let left = this.x;
			let right = this.x + this.w;
			let top = this.y;
			let bottom = this.y + this.h;
			let playerLeft = player.x;
			let playerRight = player.x + player.r; 
			let playerTop = player.y;
			let playerBottom = player.y + player.r; 
			//If any one of these are true , returns true, meaning not colliding.!(True), meaning colliding.
			return !(left >= playerRight || right <= playerLeft || top >= playerBottom || bottom <= playerTop)

		}
};
