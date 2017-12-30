let matrix = [
            [0,0,0,0,1,0,0,0,0,1,0,2,0,0,1,0,0,0,0,1],
            [1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,2,0,1,0,0],
            [1,0,1,0,7,2,0,1,0,3,0,0,1,0,0,0,0,1,0,2],
            [1,0,1,0,1,2,0,1,0,0,0,0,1,0,0,0,0,1,0,7],
            [1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,2],
            [0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1],
            [1,0,0,0,1,0,0,0,0,1,0,2,0,0,1,0,0,0,0,1],
            [1,0,1,0,0,0,0,1,4,4,4,4,4,4,4,2,0,1,0,0],
            [1,0,1,2,0,2,0,1,4,5,5,5,5,6,4,0,0,1,0,2],
            [0,0,1,0,1,2,0,1,4,5,6,5,5,5,4,0,0,1,0,0],
            [0,0,1,0,2,0,0,1,4,5,5,5,6,5,4,0,0,1,0,2],
            [0,0,1,0,0,0,0,1,4,5,5,5,5,5,4,0,0,1,0,1],
            [0,0,0,0,1,2,0,0,4,4,0,0,0,4,4,0,0,0,0,1],
            [0,0,1,7,0,0,0,1,0,0,0,0,1,0,0,2,0,1,0,0],
            [0,0,1,0,0,2,2,1,0,2,0,0,1,0,0,0,0,1,0,2],
            [0,0,1,0,1,2,0,1,0,0,2,0,1,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,2],
            [0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1],
            [0,0,0,0,1,0,0,0,0,1,0,2,0,0,1,7,0,0,0,1],
            [0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,2,0,1,0,0]

            ];
let X = 20;
let Y = 20;
let wood =20;
let side = 40;
let count = 0;
let xoter = [];
let animals = [];
let rippers = [];
let humans = [];
let trees = [];
let hcolor = '#ffe0bd';
function setup(){
    frameRate(5);
    createCanvas(X*side,Y*side);
    background("#acacac");
    for(let i in matrix){
        for(let j in matrix[i]){
          if(matrix[i][j] == 1)
          {
            xoter.push(new Xot(parseInt(j),parseInt(i)));
          }
        else if(matrix[i][j] == 2)
          {
            animals.push(new Animal(parseInt(j),parseInt(i)));
          }
        else if(matrix[i][j] == 3)
          {
            rippers.push(new ripper(parseInt(j),parseInt(i)));
          }
        else if(matrix[i][j] == 6)
          {
            humans.push(new Human(parseInt(j),parseInt(i)));
          }
        else if(matrix[i][j] == 7)
          {
            trees.push(new Tree(parseInt(j),parseInt(i)));
          }
        }
    }
 }
function draw(){
  for(let i in trees)
  {
    if(matrix[trees[i].y][trees[i].x]==6)
    {
        trees.splice(i,1);
    }
  }
  for(let i = 7; i<=12; i++)
  {
    for(let j = 8; j<=14; j++)
    {
      if(i==7 && matrix[i][j]!=6)
      {
        matrix[i][j]=4;
      }
      else if((j==8||j==14) && matrix[i][j]!=6)
      {
        matrix[i][j]=4;
      }
      else if( matrix[i][j]!=6)
      {
        matrix[i][j]=5;
      }
    }
  }
  for(let i in xoter){
    xoter[i].mul();
  }
    background("#acacac");
    for(let i = 0; i < matrix.length; i++){
   for(let j = 0; j < matrix[i].length; j++){
       if(matrix[i][j] == 1){
         fill("green");
         rect(j*side,i*side,side,side)
       }
       else if(matrix[i][j] == 2)
       {
         fill("yellow");
         rect(j*side,i*side,side,side)
       }
      else if(matrix[i][j] == 3)
       {
         fill("red");
         rect(j*side,i*side,side,side)
       }
      else if(matrix[i][j] == 4)
      {
        fill("brown");
        rect(j*side,i*side,side,side)
      }
    else if(matrix[i][j] == 5)
     {
       fill("#cd8500");
       rect(j*side,i*side,side,side)
     }
    else if(matrix[i][j] == 6)
    {
      fill(`${hcolor}`);
      rect(j*side,i*side,side,side)
    }
    else if(matrix[i][j] == 7)
    {
      fill("#533118");
      rect(j*side,i*side,side,side)
    }

   }
}
for(let i in humans){
  humans[i].move();
}
  for(let i in rippers){
    rippers[i].move();
  }
  for(let i in animals){
    animals[i].move();
  }
}
