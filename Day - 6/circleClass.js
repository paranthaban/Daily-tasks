
class Circle {
  
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }

    getRadius(){
      return this.radius;
      };
    setRadius(value){
      this.radius = value;
      };
    getColor(){
      return this.color;  
      };
    setColor(value){
        this.color = value;
      };

    toString() {
      console.log("Circle[radius= " + this.radius+",color= " + this.color+ "]");
    }
      
    getArea(){
      return Math.PI * this.radius * this.radius;
      };
    getCircumference(){
      return 2 * Math.PI * this.radius;
      };
  }
  
   let cir = new Circle(1.0, "red");
   cir.toString();
   cir.getRadius();
   cir.setRadius(3);
   let areaResult = cir.getArea();
   let CircumResult = cir.getCircumference();
    console.log("The area is "+ areaResult.toFixed(2)+"\nThe circumference is "+ CircumResult.toFixed(2));
   cir.getCircumference();