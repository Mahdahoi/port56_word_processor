class Port56WordProcessor {
  constructor(canvasElement){
    this.width = canvasElement.offsetWidth;
    this.height = canvasElement.offsetHeight;
    this.ctx = canvasElement.getContext("2d");

    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillRect(0, 0, this.width, this.height);
  }
}
