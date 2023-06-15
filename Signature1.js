
const canvas = document.getElementById("firstSignature");
const form = document.querySelector(".signature-pad-form");
const xButton1= document.getElementById("x1");
const clearButton = document.querySelector(".clear-button");

const ctx = canvas.getContext("2d");
let writtingMode = false;

form.addEventListener("submit", (event) => {

});


const getTargetPosition = (event) => {
  positionX = event.clientX - event.target.getBoundingClientRect().x;
  positionY = event.clientY - event.target.getBoundingClientRect().y;

  return [positionX, positionY];
};
const handlePointerMove = (event) => {
  if (!writtingMode) return;
  const [positionX, psoitionY] = getTargetPosition(event);
  ctx.lineTo(positionX, psoitionY);
  ctx.stroke();
};
const clearPad = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

// clearButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   clearPad();
// });

const handlePointerUp = () => {
  writtingMode = false;
};

const handlePointerDown = (event) => {
  writtingMode = true;
  ctx.beginPath();
  const [positionX, psoitionY] = getTargetPosition(event);
  ctx.moveTo(positionX, psoitionY);
};
ctx.lineWidth = 3;
ctx.lineJoin = ctx.lineCap = "round";
xButton1.addEventListener("click", (event) => {
    event.preventDefault();
    clearPad();
  });
  
const onCanvasClick = () => {
  let spanText = document.getElementById("signature1");
  spanText.hidden = true;
  canvas.style.display="block"
  xButton1.style.display="block"
};

canvas.addEventListener("pointerdown", handlePointerDown, { passive: true });
canvas.addEventListener("pointerup", handlePointerUp, { passive: true });
canvas.addEventListener("pointermove", handlePointerMove, { passive: true });
