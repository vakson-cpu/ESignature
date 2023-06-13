
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

function sendEmail(email) {
  var template = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Template</title>
      <style>

      </style>
      <script src="your-script.js"></script>
    </head>
    <body>
        <h3 class="blue--title">Attestaions and  Authorizaitons</h3>
        <div class="signature--box">
        <ul><li><p>Statements of Goods and Services</p></li>
            </ul>
        <img src=${ARRAY[0]}  alt="something went wrong"/>
        </div>
    </body>
    </html>
    `;
  Email.send({
    Host: "smtp.gmail.com",
    Username: "mailerbot12@gmail.com",
    Password: "gvoyfoiyjuvcvdvj",
    To: email,
    From: "mailerbot12@gmail.com",
    Subject: "Signed Document",
    Body: template,
  }).then(function (message) {
    alert("mail sent successfully");
  });
}
