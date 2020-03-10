'use strict';

class Port56WordProcessor {
  constructor(canvasElement){
    this.width = canvasElement.offsetWidth;
    this.height = canvasElement.offsetHeight;
    canvasElement.width = this.width;
    canvasElement.height = this.height;
    this.ctx = canvasElement.getContext("2d");
    this.renderQueue = {};

    this.clearScreen();
    this.setPageMargin([60, 60, 60, 60]);

    this.render();
  }

  clearScreen(){
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  render(){
    this.renderPageMargin();

    const that = this;
    requestAnimationFrame(function(){
      that.render();
    });
  }

  renderPageMargin(){
    if(this.renderQueue.pageMargin === null){ return; }
  
    const top = this.pageMargin[0];
    const right = this.pageMargin[1];
    const bottom = this.pageMargin[2];
    const left = this.pageMargin[3];

    const width = this.width - left - right;
    const height = this.height - top - bottom;

    this.clearScreen();
    this.ctx.strokeStyle = "black";
    this.ctx.strokeRect(left, top, width, height);

    this.renderQueue.pageMargin = null;
  }

  setPageMargin(margin){
    const sanitized = JSON.parse(JSON.stringify(margin));
    this.pageMargin = sanitized;
    this.renderQueue.pageMargin = sanitized;
  }
}
