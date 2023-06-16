const canvas2 = document.getElementById("secondSignature");

const xButton2= document.getElementById("x2");

const ctx2 = canvas2.getContext("2d");
let writtingMode2=false

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const imageURL = canvas2.toDataURL();
//   const image = document.createElement("img");
//   image.src = imageURL;
//   ARRAY.push(imageURL)

//   image.height = canvas2.height;
//   image.width = canvas2.width;
//   image.style.display = "block";
//   form.appendChild(image);
//   clearPad();
// });


const getTargetPosition2 = (event) => {
  positionX = event.clientX - event.target.getBoundingClientRect().x;
  positionY = event.clientY - event.target.getBoundingClientRect().y;

  return [positionX, positionY];
};
const handlePointerMove2 = (event) => {
  if (!writtingMode2) return;
  const [positionX, psoitionY] = getTargetPosition2(event);
  ctx2.lineTo(positionX, psoitionY);
  ctx2.stroke();
};
// const clearPad2 = () => {
//   ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
// };

// clearButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   clearPad();
// });

const handlePointerUp2 = () => {
  writtingMode2 = false;
};

const handlePointerDown2 = (event) => {
  writtingMode2 = true;
  ctx2.beginPath();
  const [positionX, psoitionY] = getTargetPosition2(event);
  ctx2.moveTo(positionX, psoitionY);
};
ctx2.lineWidth = 3;
ctx2.lineJoin = ctx2.lineCap = "round";

const onCanvasClick2 = () => {
  let spanText = document.getElementById("signature2");
  spanText.hidden = true;
  canvas2.style.display="block"
  xButton2.style.display="block"

};
const clearPad2 = () => {
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
};
xButton2.addEventListener("click", (event) => {
  event.preventDefault();
  clearPad2();
});



canvas2.addEventListener("pointerdown", handlePointerDown2, { passive: true });
canvas2.addEventListener("pointerup", handlePointerUp2, { passive: true });
canvas2.addEventListener("pointermove", handlePointerMove2, { passive: true });
