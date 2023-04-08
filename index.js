function createCharactersTable() {
    var table = document.createElement("table"); // create table element
    var rowCount = 0; // initialize row count to 0
    var imgCount = 1; // initialize image count to 1
    var row = table.insertRow(rowCount); // insert first row
    
    // loop through all images
    for (var i = 1; i <= 95; i++) {
      // create image element
      var img = document.createElement("img");
      img.src = "characters/cards-1" + i + ".png"; // set image source
      img.id = "characters_" + i
      // create cell element and add image to it
      var cell = row.insertCell(imgCount - 1);
      cell.appendChild(img);
      
      // increment image count
      imgCount++;
      
      // if we've inserted 5 images in the current row, create a new row
      if (imgCount > 4) {
        rowCount++;
        imgCount = 1;
        row = table.insertRow(rowCount);
      }
    }
    
    // add table to document
    document.body.appendChild(table);
  }

  function createSpellsTable() {
    var table = document.createElement("table"); // create table element
    var rowCount = 0; // initialize row count to 0
    var imgCount = 1; // initialize image count to 1
    var row = table.insertRow(rowCount); // insert first row
    
    // loop through all images
    for (var i = 1; i <= 11; i++) {
      // create image element
      var img = document.createElement("img");
      img.src = "spells/ALLspellCards-1" + i + ".png"; // set image source
      img.id = "spells_" + i
      // create cell element and add image to it
      var cell = row.insertCell(imgCount - 1);
      cell.appendChild(img);
      
      // increment image count
      imgCount++;
      
      // if we've inserted 5 images in the current row, create a new row
      if (imgCount > 4) {
        rowCount++;
        imgCount = 1;
        row = table.insertRow(rowCount);
      }
    }
    
    // add table to document
    document.body.appendChild(table);
  }

  function createHeroesTable() {
    var table = document.createElement("table"); // create table element
    var rowCount = 0; // initialize row count to 0
    var imgCount = 1; // initialize image count to 1
    var row = table.insertRow(rowCount); // insert first row
    
    // loop through all images
    for (var i = 1; i <= 11; i++) {
      // create image element
      var img = document.createElement("img");
      img.src = "heroes/ALLheroCards-1" + i + ".png"; // set image source
      img.id = "heroes_" + i
      // create cell element and add image to it
      var cell = row.insertCell(imgCount - 1);
      cell.appendChild(img);
      
      // increment image count
      imgCount++;
      
      // if we've inserted 5 images in the current row, create a new row
      if (imgCount > 4) {
        rowCount++;
        imgCount = 1;
        row = table.insertRow(rowCount);
      }
    }
    
    // add table to document
    document.body.appendChild(table);
  }

  function createTreasuresTable() {
    var table = document.createElement("table"); // create table element
    var rowCount = 0; // initialize row count to 0
    var imgCount = 1; // initialize image count to 1
    var row = table.insertRow(rowCount); // insert first row
    
    // loop through all images
    for (var i = 1; i <= 35; i++) {
      // create image element
      var img = document.createElement("img");
      img.src = "treasures/ALLtreasuesCards-1" + i + ".png"; // set image source
      img.id = "treasures_" + i
      // create cell element and add image to it
      var cell = row.insertCell(imgCount - 1);
      cell.appendChild(img);
      
      // increment image count
      imgCount++;
      
      // if we've inserted 5 images in the current row, create a new row
      if (imgCount > 4) {
        rowCount++;
        imgCount = 1;
        row = table.insertRow(rowCount);
      }
    }
    
    // add table to document
    document.body.appendChild(table);
  }