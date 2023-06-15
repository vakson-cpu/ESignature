const ARRAY = [];

const submitHandler = (event) => {
  //gvoyfoiyjuvcvdvj
  event.preventDefault();
  const imageURL = canvas.toDataURL();
  const imageURL2 = canvas2.toDataURL();
  const imageURL3 = canvas3.toDataURL();
  const image = document.createElement("img");
  image.src = imageURL;
  ARRAY.push(imageURL);
  ARRAY.push(imageURL2);
  ARRAY.push(imageURL3);
  console.log(ARRAY);
  clearPad();
  clearPad2();
  clearPad3();
};
