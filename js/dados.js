class Dices {
  constructor() {
    this.offset = 25;
    this.center = 100;
  }

  createPoints() {
    const points = {
      1: [[this.center, this.center]],
      
      2: [
        [this.offset, this.offset],
        [2 * this.center - this.offset, 2 * this.center - this.offset]
      ],

      3: [
        [this.offset, this.offset],
        [this.center, this.center],
        [2 * this.center - this.offset, 2 * this.center - this.offset]
      ],

      4: [
        [this.offset, this.offset],
        [2 * this.center - this.offset, this.offset],
        [this.offset, 2 * this.center - this.offset],
        [2 * this.center - this.offset, 2 * this.center - this.offset]
      ],

      5: [
        [this.offset, this.offset],
        [2 * this.center - this.offset, this.offset],
        [this.center, this.center],
        [this.offset, 2 * this.center - this.offset],
        [2 * this.center - this.offset, 2 * this.center - this.offset]
      ],

      6: [
        [this.offset, this.offset],
        [2 * this.center - this.offset, this.offset],
        [this.offset, this.center],
        [2 * this.center - this.offset, this.center],
        [this.offset, 2 * this.center - this.offset],
        [2 * this.center - this.offset, 2 * this.center - this.offset]
      ]
    };
    
    return points;
  }

  draw(faceNum, points) {
    const grid = Array(5).fill().map(() => Array(5).fill(' '));
    const coordToGrid = {25: 0, 100: 2, 175: 4};

    for (const [x, y] of points) {
      if (coordToGrid.hasOwnProperty(x) && coordToGrid.hasOwnProperty(y)) {
        const gridX = coordToGrid[x];
          const gridY = coordToGrid[y];
        grid[gridY][gridX] = '●';
      }
    }
    
    this.printFace(grid, faceNum);
  }

  drawAllFaces() {
    const points = this.createPoints();

    console.log("\n" + "=".repeat(40));
    console.log("TODAS AS FACES DO DADO");
    console.log("=".repeat(40));

    for (const [faceNum, facePoints] of Object.entries(points)) {
      console.log(`\n=== Face ${faceNum} ===`);
      
      const grid = Array(5).fill().map(() => Array(5).fill(' '));
      const coordToGrid = {25: 0, 100: 2, 175: 4};

      for (const [x, y] of facePoints) {
        if (coordToGrid.hasOwnProperty(x) && coordToGrid.hasOwnProperty(y)) {
          const gridX = coordToGrid[x];
          const gridY = 4 - coordToGrid[y];
          grid[gridY][gridX] = '●';
        }
      }
      
      this.printFace(grid, faceNum);
    }
  }

  printFace(grid, faceNum) {
    console.log(`┌─────────┐`);
    console.log(`│ FACE ${faceNum} │`);
    console.log(`└─────────┘`);
    
    console.log('┌─────────┐');
    
    for (let i = 1; i <= 3; i++) {
      const rowChars = [];
      
      for (let j = 1; j <= 3; j++) {
        const char = grid[i-1][j-1] || ' ';
        rowChars.push(char);
      }
      
      const rowContent = rowChars.join('  ');
      console.log(`│ ${rowContent} │`);
    }
    
    console.log('└─────────┘\n');
  }

  drawAllFacesSideBySide() {
    const points = this.createPoints();
    const allGrids = [];
    
    for (let faceNum = 1; faceNum <= 6; faceNum++) {
      const grid = Array(5).fill().map(() => Array(5).fill(' '));
      const coordToGrid = {25: 0, 100: 2, 175: 4};
      const facePoints = points[faceNum];
      
      for (const [x, y] of facePoints) {
        if (coordToGrid.hasOwnProperty(x) && coordToGrid.hasOwnProperty(y)) {
          const gridX = coordToGrid[x];
          const gridY = coordToGrid[y];
          grid[gridY][gridX] = '●';
        }
      }
      
      allGrids.push({ faceNum, grid });
    }
    
    console.log("\n" + "=".repeat(60));
    console.log("DADO COMPLETO - TODAS AS FACES");
    console.log("=".repeat(60));
    
    let header = "";
    for (const { faceNum } of allGrids) {
      header += `┌─────────┐  `;
    }
    console.log(header);
    
    header = "";
    for (const { faceNum } of allGrids) {
      header += `│ FACE ${faceNum} │  `;
    }
    console.log(header);
    
    header = "";
    for (const { faceNum } of allGrids) {
      header += `└─────────┘  `;
    }
    console.log(header);
    
    console.log();
    
    for (let i = 1; i <= 3; i++) {
      let line = "";
      for (const { grid } of allGrids) {
        const rowChars = [];
        for (let j = 1; j <= 3; j++) {
          rowChars.push(grid[i-1][j-1] || ' ');
        }
        line += `│ ${rowChars.join('  ')} │  `;
      }
      console.log(line);
    }
    
    let footer = "";
    for (let i = 0; i < 6; i++) {
      footer += `└─────────┘  `;
    }
    console.log(footer);
  }
}

const dice = new Dices();
const points = dice.createPoints();

console.log("=".repeat(40));
console.log("TESTE DO DADO DE 6 FACES");
console.log("=".repeat(40));

console.log("\nFACES INDIVIDUAIS:");
for (let face = 1; face <= 6; face++) {
  dice.draw(face, points[face]);
}

dice.drawAllFaces();

dice.drawAllFacesSideBySide();

console.log("\nVERIFICAÇÃO DOS PONTOS:");
for (let face = 1; face <= 6; face++) {
  console.log(`\nFace ${face}:`);
  console.log(`Quantidade de pontos: ${points[face].length}`);
  points[face].forEach(([x, y], i) => {
    console.log(`  Ponto ${i + 1}: (${x}, ${y})`);
  });
}
