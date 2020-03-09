const init = function init(){
  const canvas = document.querySelector("canvas");
  const editor = new Port56WordProcessor(canvas);
};

if(document.readyState != "loading"){
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}
