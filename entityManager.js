module.exports = exports = entityManager

function entityManager(width, height, cellSize) = {
  this.width = width;
  this.height = height;
  this.cellSize = cellSize;
  this.widthInCells = Math.ceil(width / cellSize);
  this.numCells = this.widthInCells *= Math.ceil(height / cellSize;
  this.cells = [];
  for(var i = 0; i < this.numCells; i++){
	this.cells[i] = [];
  }
}

entityManager.prototype.addEntity = function(entity){
  var left = Math.floor(entity.x / this.cellSize);
  var right = Math.ceil((entity.x + entity.width) / this.cellSize);
  var top = Math.floor(entity.y / this.cellSize);
  var bottom = Math.ceil((entity.y + entity.height) / this.cellSize);
}