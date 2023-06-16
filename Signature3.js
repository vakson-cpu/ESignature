const canvas3 = document.getElementById("thirdSignature");

const xButton3= document.getElementById("x3");

const ctx3 = canvas3.getContext("2d");
let writtingMode3=false;
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const imageURL = canvas3.toDataURL();
//   ARRAY.push(imageURL)
//   const image = document.createElement("img");
//   image.src = imageURL;
//   image.height = canvas3.height;
//   image.width = canvas3.width;
//   image.style.display = "block";
//   form.appendChild(image);
//   console.log(ARRAY)

//   clearPad();
// });


const getTargetPosition3 = (event) => {
  positionX = event.clientX - event.target.getBoundingClientRect().x;
  positionY = event.clientY - event.target.getBoundingClientRect().y;

  return [positionX, positionY];
};
const handlePointerMove3 = (event) => {
  if (!writtingMode3) return;
  const [positionX, positionY] = getTargetPosition3(event);
  ctx3.lineTo(positionX, positionY);
  ctx3.stroke();
};
// 


const handlePointerUp3 = () => {
  writtingMode3 = false;
};

const handlePointerDown3 = (event) => {
  writtingMode3 = true;
  ctx3.beginPath();
  const [positionX, positionY] = getTargetPosition3(event);
  ctx3.moveTo(positionX, positionY);
};
ctx3.lineWidth = 3;
ctx3.lineJoin = ctx3.lineCap = "round";

const onCanvasClick3 = () => {
  let spanText = document.getElementById("signature3");
  spanText.hidden = true;
  canvas3.style.display="block"
  xButton3.style.display="block"
};

const clearPad3 = () => {
  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
};
xButton3.addEventListener("click", (event) => {
  event.preventDefault();
  clearPad3();
});

canvas3.addEventListener("pointerdown", handlePointerDown3, { passive: true });
canvas3.addEventListener("pointerup", handlePointerUp3, { passive: true });
canvas3.addEventListener("pointermove", handlePointerMove3, { passive: true });
