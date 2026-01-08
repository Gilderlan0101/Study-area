class Dices {

  constructor(){

    this.offset = 25;
    this.center = 100;
  }


  cratePoints() {
    
    let points = {
      
      1: [
        (this.center, this.center)
      ],

      2: [
        (this.offset, this.offset),
        (this.center - this.offset, 2*this.center - this.offset)
      ],

      3: [
        (this.offset, this.offset),
        (this.center, this.center),
        (2*this.center - this.offset, 2*this.center - this.offset)
      ],

      4: [
        (this.offset, this.offset),
        (this.offset, 2*this.center - this.offset),
        (this.offset, 2*this.center - this.offset),
        (2*this.center - this.offset, 2*this.center - this.offset)
      ]
    };

    return points;
  }
  
  draw(start, end) {

    // Cria uma grade 5x5 para representar o quadrado do dado
    const grid = Array.from({length: 5}, () => Array(5).fill(' '));
    console.log(grid)
  }

}

let dice = new Dices();
console.log(dice.cratePoints());
dice.draw(1, 5);
