const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,hammerImg;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    hammer = new Hammer(10,100);
    plane = new Plane(600,height,1200,20)
    square = new Square(650,10);
    square2 = new Square(650,10);

    box2 = new rectangle(650,1);
    box3 = new rectangle(650,100);
    box4 = new rectangle(800,100);
    box5 = new rectangle(500,100);
    ball1 = new Ball(650,0);

    //first line
    smallball1 = new Smallball(0,300);
    smallball2 = new Smallball(0,300);
    smallball3 = new Smallball(0,300);
    smallball4 = new Smallball(0,300);
    smallball5 = new Smallball(0,300);
    smallball6 = new Smallball(0,300);
    smallball7 = new Smallball(0,300);
    smallball8 = new Smallball(0,300);
    smallball9 = new Smallball(0,300);
    smallball10= new Smallball(0,300);
    smallball11= new Smallball(0,300);

//Second line
smallball12 = new Smallball(0,300);
smallball13 = new Smallball(0,300);
smallball14= new Smallball(0,300);
smallball15= new Smallball(0,300);
smallball16= new Smallball(0,300);
smallball17= new Smallball(0,300);
smallball18= new Smallball(0,300);
smallball19= new Smallball(0,300);
smallball20= new Smallball(0,300);
smallball21= new Smallball(0,300);
smallball22= new Smallball(0,300);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    square.display();
    square2.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ball1.display();

    //first line
    smallball1.display();    
    smallball2.display();    
    smallball3.display();    
    smallball4.display();           
    smallball5.display();   
    smallball6.display();           
    smallball7.display();           
    smallball8.display();           
    smallball9.display();           
    //second line
    smallball10.display();    
    smallball11.display();    
    smallball12.display();    
    smallball13.display();           
    smallball14.display();   
    smallball15.display();           
    smallball16.display();           
    smallball17.display();           
    smallball18.display(); 
    smallball19.display(); 
    smallball20.display(); 
    smallball21.display(); 
    smallball22.display(); 

}