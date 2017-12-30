
class Xot {
     constructor(x,y) {
     this.x = x;
     this.y = y;
     this.energy = 4;
     this.multiply = 0;
}
newCords(){
     this.directions = [
        [this.x - 1, this.y - 1],
        [this.x    , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y    ],
        [this.x + 1, this.y    ],
        [this.x - 1, this.y + 1],
        [this.x    , this.y + 1],
        [this.x + 1, this.y + 1]
    ];
}
    getdirections(t){
        this.newCords();
        let found  = [];
        for(let i in this.directions){
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length)
            {
              if(matrix[y][x] == t)
              {
                  found.push(this.directions[i]);
              }
          }
        }
        return found;

    }
    mul(){
      this.multiply++;
      if(this.multiply == 4){
        wood-=0.01;
        let num = Math.floor(Math.random() * (xoter.length)+ 1);
        if(num == 3 && trees.length<10)
        {
          for(let i in xoter)
          {
            if(xoter[i].x==this.x&&xoter[i].y==this.y)
            {
                xoter.splice(i,1);
                matrix[this.y][this.x]=7;
                trees.push(new Tree(this.x,this.y));
            }
          }
        }
        else
        {
        let cord = random(this.getdirections(0));
        if(cord){
          xoter.push(new Xot(cord[0],cord[1]));
          matrix[cord[1]][cord[0]] = 1;

        }
      }
      this.multiply = 0;
      }
    }

}
class Animal {
  constructor(x,y)
  {
    this.x=x;
    this.y=y;
    this.multiply = 0;
    this.eaten = 0;
    this.dietime = 0;
  }
  newCords(){
     this.directions = [
        [this.x - 1, this.y - 1],
        [this.x    , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y    ],
        [this.x + 1, this.y    ],
        [this.x - 1, this.y + 1],
        [this.x    , this.y + 1],
        [this.x + 1, this.y + 1]
    ];
}
  getdirections(t)
  {
      this.newCords();
      let found  = [];
      for(let i in this.directions){
          let x = this.directions[i][0];
          let y = this.directions[i][1];
          if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length)
          {
            if(matrix[y][x] == t)
            {
                found.push(this.directions[i]);
            }
          }
        }
      return found;

  }
  mul(){
      let cord = random(this.getdirections(1));
      if(cord){
          for(let i in xoter)
          {

            if(xoter[i].x==cord[0]&&xoter[i].y==cord[1])
            {
                xoter.splice(i,1);
            }
          }
        matrix[cord[1]][cord[0]] = 2;
        animals.push(new Animal(cord[0], cord[1]));
        this.multiply = 0;
      }
  }
die()
    {
          for(let i in animals)
          {
            if(animals[i].x==this.x&&animals[i].y==this.y)
            {
                animals.splice(i,1);
            }
            matrix[this.y][this.x]=0;
          }
    }

  move()
  {
        this.eaten++;
        if(this.eaten % 5 == 0){
            this.mul();
            this.eaten=0;
        }
      let cord = random(this.getdirections(1));
      if(cord==undefined)
      {
       this.dietime++;
       cord = random(this.getdirections(0));
        if(this.dietime%3==0)
        {
          this.die();
        }
        else
        {
        matrix[cord[1]][cord[0]]=2;
         matrix[this.y][this.x]=0;
         this.x = cord[0];
         this.y = cord[1];
        }

      }
      else if(cord)
      {
        for(let i in xoter)
          {

            if(xoter[i].x==cord[0]&&xoter[i].y==cord[1])
            {
                xoter.splice(i,1);

            }
       }
        matrix[cord[1]][cord[0]] = 2;
        matrix[this.y][this.x]=0;
        this.x = cord[0];
        this.y = cord[1];

    }

  }
}
class ripper
  {
    constructor(x,y)
    {
      this.x=x;
      this.y=y;
      this.might=0;
      this.leftup = [];
      this.leftdown = [];
      this.rightdown = [];
      this.rightup = [];
      this.previousNumber = 0;
    }
    newCords()
    {
     this.directions = [
        [this.x - 1, this.y - 1],
        [this.x    , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y    ],
        [this.x + 1, this.y    ],
        [this.x - 1, this.y + 1],
        [this.x    , this.y + 1],
        [this.x + 1, this.y + 1],
        [this.x - 2, this.y    ],
        [this.x - 2 ,this.y - 2],
        [this.x - 2, this.y + 1],
        [this.x - 1, this.y + 2],
        [this.x , this.y + 2   ],
        [this.x + 1, this.y + 2],
        [this.x + 2, this.y + 2],
        [this.x + 2, this.y + 1],
        [this.x + 2, this.y    ],
        [this.x + 2, this.y - 1],
        [this.x + 2, this.y - 2],
        [this.x + 1, this.y - 2],
        [this.x , this.y  - 2  ],
        [this.x - 1, this.y - 2],
        [this.x - 2, this.y - 2],
        [this.x - 2, this.y - 1]
    ];


  }
  getdirections(t)
  {
        this.newCords();
        let found  = [];
        for(let i in this.directions)
        {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length)
            {
              if(matrix[y][x] == t)
              {
                  found.push(this.directions[i]);
              }
            }
        }
        return found;

    }
  getleftup()
    {
      let leftup = [
        [this.x    , this.y - 1],
        [this.x - 1, this.y - 1],
        [this.x - 1, this.y    ],
        [this.x - 2, this.y    ],
        [this.x - 2, this.y - 1],
        [this.x - 2, this.y - 2],
        [this.x - 1, this.y - 2],
        [this.x, this.y - 2    ]
      ];
      let found  = [];

      for(let i in leftup)
      {
          let x = leftup[i][0];
          let y = leftup[i][1];
          if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length)
          {
                found.push(leftup[i]);
          }
      }
      return found;
    }
  getleftdown()
    {
      let leftdown = [
        [this.x , this.y + 1    ],
        [this.x    , this.y + 2 ],
        [this.x - 1, this.y + 2 ],
        [this.x - 1, this.y + 1 ],
        [this.x - 2, this.y + 2 ],
        [this.x - 2, this.y + 1 ],
        [this.x - 2, this.y     ],
        [this.x - 1, this.y     ]
      ];
      let found  = [];

      for(let i in leftdown)
      {
          let x = leftdown[i][0];
          let y = leftdown[i][1];
          if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length)
          {
                found.push(leftdown[i]);
          }
      }
      return found;
    }
  getrightup()
    {
      let rightup = [
        [this.x    , this.y - 1],
        [this.x, this.y - 2    ],
        [this.x + 1, this.y - 2],
        [this.x + 1, this.y - 1],
        [this.x + 2, this.y - 2],
        [this.x + 2, this.y - 1],
        [this.x + 2, this.y    ],
        [this.x + 1, this.y    ]
      ];
      let found  = [];

      for(let i in rightup)
      {
          let x = rightup[i][0];
          let y = rightup[i][1];
          if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length)
          {
                found.push(rightup[i]);
          }
      }
      return found;
    }
  getrightdown()
    {
      let rightdown = [
        [this.x + 1, this.y    ],
        [this.x + 2, this.y    ],
        [this.x + 2, this.y + 1],
        [this.x + 2, this.y + 2],
        [this.x + 1, this.y + 1],
        [this.x + 1, this.y + 2],
        [this.x    , this.y + 2],
        [this.x , this.y  + 1  ]
      ];
      let found  = [];

      for(let i in rightdown)
      {
          let x = rightdown[i][0];
          let y = rightdown[i][1];
          if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length)
          {
                found.push(rightdown[i]);
          }
      }
      return found;
    }
  move()
    {
      let rcord = random(this.getdirections(3));
      let cord = random(this.getdirections(2));
      this.previousNumber=0;
      if(rcord)
      {
        for(let i in rippers)
          {
            if(rippers[i].x==rcord[0]&&rippers[i].y==rcord[1])
              {
                if(this.might>rippers[i].might)
                {
                  rippers.splice(i,1);
                  matrix[this.y][this.x]=0;
                  this.x = rcord[0];
                  this.y = rcord[1];
                  this.might++;
                }
              }
          }
      }
      else if(cord)
      {
      this.might++;
      matrix[cord[1]][cord[0]]=3;
         matrix[this.y][this.x]=0;
         this.x = cord[0];
         this.y = cord[1];
      for(let i in animals)
          {
         if(animals[i].x==cord[0]&&animals[i].y==cord[1])
            {
                animals.splice(i,1);
            }
      }
    }
    else
    {


        let direction = 0;
        let nullpoint = 0;
        let animalcount = [];
        let counter = 0;
       for(let i = 0; i<=this.y;i++)
        {
          for(let j = 0; j<=this.x; j++)
          {
            if(matrix[i][j]==2)
            {
              counter+=1;
            }
          }
        }
        animalcount.push(counter);
        counter=0;
      for(let i = this.y; i<matrix.length; i++)
        {
         for(let j = 0; j<=this.x; j++)
          {
            if(matrix[i][j]==2)
            {
              counter+=1;
            }
          }
        }
        animalcount.push(counter);
        counter=0;
      for(let i = 0; i<=this.y; i++)
        {
         for(let j = this.x; j<matrix[0].length; j++)
          {
            if(matrix[i][j]==2)
            {
              counter+=1;
            }
          }
        }
        animalcount.push(counter);
        counter=0;
      for(let i = this.y; i<matrix.length;i++)
        {
         for(let j = this.x; j<matrix[0].length; j++)
          {
            if(matrix[i][j]==2)
            {
              counter+=1;
            }
          }
        }
        animalcount.push(counter);
        counter=0;
        for(let i in animalcount)
        {
          if(animalcount[i]>nullpoint)
          {
            nullpoint =animalcount[i];
          }
        }
        for(let i in animalcount)
        {
          if(animalcount[i]==nullpoint)
          {
            direction=parseInt(i);

          }
        }
        if(direction==0)
        {
          let smth = this.getleftup();
          let dcord = random(this.getleftup());
        if(dcord){
           if(matrix[dcord[1]][dcord[0]]!=4&&matrix[dcord[1]][dcord[0]]!=5){
          if(matrix[dcord[1]][dcord[0]]==1)
          {
            for(let i in xoter)
            {
              if(xoter[i].x==dcord[0]&&xoter[i].y==dcord[1])
              {
                xoter.splice(i,1);
              }
            }
          }
          else if(matrix[dcord[1]][dcord[0]]==6)
          {
            for(let i in humans)
            {
              if(humans[i].x==dcord[0]&&humans[i].y==dcord[1])
              {
                humans.splice(i,1);
              }
            }
          }
          else if(matrix[dcord[1]][dcord[0]]==7)
          {
            for(let i in trees)
            {
              if(trees[i].x==dcord[0]&&trees[i].y==dcord[1])
              {
                trees.splice(i,1);
              }
            }
          }
           matrix[this.y][this.x]=0;
          matrix[dcord[1]][dcord[0]]=3;

          this.x = dcord[0];
          this.y = dcord[1];
           }
        }
        }
        else if(direction==1)
        {
          let dcord = random(this.getleftdown());
          if(dcord){
            if(matrix[dcord[1]][dcord[0]]!=4&&matrix[dcord[1]][dcord[0]]!=5){
          if(matrix[dcord[1]][dcord[0]]==1)
          {
            for(let i in xoter)
            {
              if(xoter[i].x==dcord[0]&&xoter[i].y==dcord[1])
              {
                xoter.splice(i,1);
              }
            }
          }
          else if(matrix[dcord[1]][dcord[0]]==6)
          {
            for(let i in humans)
            {
              if(humans[i].x==dcord[0]&&humans[i].y==dcord[1])
              {
                humans.splice(i,1);
              }
            }
          }
          else if(matrix[dcord[1]][dcord[0]]==7)
          {
            for(let i in trees)
            {
              if(trees[i].x==dcord[0]&&trees[i].y==dcord[1])
              {
                trees.splice(i,1);
              }
            }
          }
           matrix[this.y][this.x]=0;
          matrix[dcord[1]][dcord[0]]=3;

          this.x = dcord[0];
          this.y = dcord[1];
            }
          }
        }
        else if(direction==2)
        {
          let dcord = random(this.getrightdown());
          if(dcord){
            if(matrix[dcord[1]][dcord[0]]!=4&&matrix[dcord[1]][dcord[0]]!=5){
          if(matrix[dcord[1]][dcord[0]]==1)
          {
            for(let i in xoter)
            {
              if(xoter[i].x==dcord[0]&&xoter[i].y==dcord[1])
              {
                xoter.splice(i,1);
              }
            }
          }
          else if(matrix[dcord[1]][dcord[0]]==6)
            {
              for(let i in humans)
              {
                if(humans[i].x==dcord[0]&&humans[i].y==dcord[1])
                {
                  humans.splice(i,1);
                }
              }
            }
            else if(matrix[dcord[1]][dcord[0]]==7)
            {
              for(let i in trees)
              {
                if(trees[i].x==dcord[0]&&trees[i].y==dcord[1])
                {
                  trees.splice(i,1);
                }
              }
            }
           matrix[this.y][this.x]=0;
          matrix[dcord[1]][dcord[0]]=3;

          this.x = dcord[0];
          this.y = dcord[1];
            }
          }
        }
        else if(direction==3)
        {
          let dcord = random(this.getrightdown());
          if(dcord){
           if(matrix[dcord[1]][dcord[0]]!=4&&matrix[dcord[1]][dcord[0]]!=5){
          if(matrix[dcord[1]][dcord[0]]==1)
          {
            for(let i in xoter)
            {
              if(xoter[i].x==dcord[0]&&xoter[i].y==dcord[1])
              {
                xoter.splice(i,1);
              }
            }
          }
          else if(matrix[dcord[1]][dcord[0]]==6)
          {
            for(let i in humans)
            {
              if(humans[i].x==dcord[0]&&humans[i].y==dcord[1])
              {
                humans.splice(i,1);
              }
            }
          }
          else if(matrix[dcord[1]][dcord[0]]==7)
          {
            for(let i in trees)
            {
              if(trees[i].x==dcord[0]&&trees[i].y==dcord[1])
              {
                trees.splice(i,1);
              }
            }
          }
          matrix[this.y][this.x]=0;
          matrix[dcord[1]][dcord[0]]=3;
          this.x = dcord[0];
          this.y = dcord[1];
           }
          }
        }
      }
  }
  }
class Human
  {
  constructor(x,y)
    {
      this.x=x;
      this.y=y;
      this.tox=null;
      this.toy=null;
    }
  getdirections()
  {
    let found = [];
    if(this.tox==null&&this.toy==null&&trees.length>0)
    {
      for(let i in trees)
      {
        if(trees[i].x==this.tox&&trees[i].y==this.toy)
        {
          trees[i].taken=true;
        }
      }
      for(let i in trees)
      {
        if(trees[i].taken==false)
        {
        found.push(trees[i]);
        }
      }
      if(found!=undefined){
    this.toy=random(found).y;
    this.tox=random(found).x;
    }
    return found;
    }
  }
  move()
  {
          this.getdirections();
    if(wood>0 && this.toy!=null && this.tox!=null){

      if(this.x==this.tox&&this.y==this.toy)
      {
        for(let i in trees)
        {
          if(trees[i].x==this.tox&&trees[i].y==this.toy)
          {
            trees[i].taken=false;
          }
        }
        this.tox=null;
        this.toy=null;
      }
            if(this.y==this.toy)
            {
               if(this.x>0&&this.x<matrix[0].length)
               {
                 if(this.x>this.tox)
                 {
                   if(this.x-1==this.tox)
                   {

                 matrix[this.y][this.x]=0;
                 this.x--;
                 matrix[this.y][this.x]=6;
                 for(let i in trees)
                 {
                   if(trees[i].x==this.x&&trees[i].y==this.y)
                   {
                     trees.splice(i,1);
                   }
                 }
                 wood++;
                  }
                  else
                  {
                    matrix[this.y][this.x]=0;
                    this.x--;
                    matrix[this.y][this.x]=6;
                  }
                 }
                 else if(this.x<this.tox)
                 {
                   if(this.x+1==this.tox)
                   {
                   matrix[this.y][this.x]=0;
                   this.x++;
                   matrix[this.y][this.x]=6;
                   for(let i in trees)
                   {
                     if(trees[i].x==this.x&&trees[i].y==this.y)
                     {
                       trees.splice(i,1);
                     }
                   }
                   wood++;
                   }
                   else
                   {
                     matrix[this.y][this.x]=0;
                     this.x++;
                    matrix[this.y][this.x]=6;
                   }
                 }
               }
            }
            else if(this.x==this.tox)
            {
              if(this.y>0&&this.y<matrix[0].length)
              {
                if(this.y>this.toy)
                {
                  if(this.y-1==this.toy)
                  {
                matrix[this.y][this.x]=0;
                this.y--;
                matrix[this.y][this.x]=6;
                for(let i in trees)
                {
                  if(trees[i].x==this.x&&trees[i].y==this.y)
                  {
                    trees.splice(i,1);
                  }
                }
                wood++;
                 }
                 else
                 {
                   matrix[this.y][this.x]=0;
                   this.y--;
                   matrix[this.y][this.x]=6;
                 }
                }
                else if(this.y<this.toy)
                {
                  if(this.y+1==this.toy)
                  {

                  matrix[this.y][this.x]=0;
                  this.y++;
                  matrix[this.y][this.x]=6;
                  for(let i in trees)
                  {
                    if(trees[i].x==this.x&&trees[i].y==this.y)
                    {
                      trees.splice(i,1);
                    }
                  }
                  wood++;
                  }
                  else
                  {
                    matrix[this.y][this.x]=0;
                    this.y++;
                   matrix[this.y][this.x]=6;
                  }
                }
              }
            }
            else if(this.toy<this.y&&this.tox<this.x)
            {
              if(this.x>0&&this.x<matrix[0].length&&this.y>0&&this.y<matrix.length&&matrix[this.y-1][this.x-1]==7)
              {
              matrix[this.y][this.x]=0;
              this.y--;
              this.x--;
              matrix[this.y][this.x]=6;
              for(let i in trees)
              {
                if(trees[i].x==this.x&&trees[i].y==this.y)
                {
                  trees.splice(i,1);
                }
              }
              wood++;
              }
              else
              {
                matrix[this.y][this.x]=0;
                this.x--;
                this.y--;
              matrix[this.y][this.x]=6;
              }
            }
            else if(this.toy>this.y&&this.tox<this.x)
            {
              if(this.x>0&&this.x<matrix[0].length&&this.y>0&&this.y<matrix.length&&matrix[this.y+1][this.x-1]==7)
              {

              matrix[this.y][this.x]=0;
              this.y++;
              this.x--;
              matrix[this.y][this.x]=6;
              for(let i in trees)
              {
                if(trees[i].x==this.x&&trees[i].y==this.y)
                {
                  trees.splice(i,1);
                }
              }
              wood++;
              }
              else
              {
                matrix[this.y][this.x]=0;
                this.x--;
                this.y++;
              matrix[this.y][this.x]=6;
              }
            }
            else if(this.toy>this.y&&this.tox>this.x)
            {
              if(this.x>0&&this.x<matrix[0].length&&this.y>0&&this.y<matrix.length&&matrix[this.y+1][this.x+1]==7)
              {
              matrix[this.y][this.x]=0;
              this.y++;
              this.x++;
              matrix[this.y][this.x]=6;
              for(let i in trees)
              {
                if(trees[i].x==this.x&&trees[i].y==this.y)
                {
                  trees.splice(i,1);
                }
              }
              wood++;
              }
              else
              {
                matrix[this.y][this.x]=0;
                this.x++;
                this.y++;
              matrix[this.y][this.x]=6;
              }
            }
            else if(this.toy<this.y&&this.tox>this.x)
            {
              if(this.x>0&&this.x<matrix[0].length&&this.y>0&&this.y<matrix.length&&matrix[this.y-1][this.x+1]==7)
              {
              matrix[this.y][this.x]=0;
              this.y--;
              this.x++;
              matrix[this.y][this.x]=6;
              for(let i in trees)
              {
                if(trees[i].x==this.x&&trees[i].y==this.y)
                {
                  trees.splice(i,1);
                }
              }
              wood++;
              }
              else
              {
                matrix[this.y][this.x]=0;
                this.x++;
                this.y--;
              matrix[this.y][this.x]=6;
              }
            }
          }
          else
          {
            hcolor="#A5F2F3";
          }
  }
}
class Tree
{
  constructor(x,y)
  {
    this.x=x;
    this.y=y;
    this.taken=false;
  }
}
