const form = document.querySelector('#memeGenerator')
const topText = document.querySelector('input[name=top-text]');
const bottomText = document.querySelector('input[name="bottom-text"]');
const photo = document.querySelector('#photo')
const button = document.getElementById('button')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newMeme = makeMeme(topText.value, bottomText.value);
    results.appendChild(newMeme);
});

button.addEventListener('click', function(e){
    const imageurl = document.getElementById('url').value;
    const img = document.createElement('img')

    img.src = imageurl;
    document.body.appendChild(img);
    console.log(e);
});

function generateMeme (img, topText, bottomText) {
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);

    let fontSize = canvas.width / 15;
    ctx.font = fontSize + 'px Impact';
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = fontSize / 15;

    ctx.fillText(topText, canvas.width / 2, fontSize, canvas.width);

}














// function makeMeme(topText, bottomText){
//     const meme = document.createElement('h2');
//     meme.innerText = text;
// }





// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     const newLogo = makeLogo(
//         brandInput.value,
//         colorInput.value,
//         fontSizeInput.value
//     );
//     results.appendChild(newLogo);
// });



// function makeLogo(text, color, size){
//     const logo = document.createElement('h2');
//     logo.innerText = text;
//     logo.style.color = color;
//     logo.style.fontSize = size + 'px';
//     return logo;
// };





















// let topTextInput, bottomTextInput, generateBtn, canvas, ctx;

// function generateMeme (img, topText, bottomText) {
//     canvas.width = img.width;
//     canvas.height = img.height;

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(img, 0, 0);

//     let fontSize = canvas.width / 15;
//     ctx.font = fontSize + 'px Impact';
//     ctx.fillStyle = 'white';
//     ctx.strokeStyle = 'black';
//     ctx.lineWidth = fontSize / 15;

//     ctx.fillText(topText, canvas.width / 2, fontSize, canvas.width);

// }

// function generateMeme () {

// }

// function init (){
//     topTextInput = document.getElementById('top-text');
//     bottomTextInput = document.getElementById('bottom-text');
//     imageInput = document.getElementById('image-input');
//     generateBtn = document.getElementById('generate-btn');
//     canvas = document.getElementById('meme-canvas');

//     ctx = canvas.getContext('2d');

//     canvas.width = canvas.height = 0;

//     generateBtn.addEventListener('click', function() {
//         let reader = new FileReader();
//         // img.onload = function(){
//         //     generateMeme(img);
//         //  }
//         reader.onload = function(){
//             let img = new Image;
//             img.src = reader.result;
//             generateMeme(img, topTextInput.value, bottomTextInput.value);
//         };
//         reader.readAsDataURL(imageInput.files[0]);
//     });
// }

// init();

// // image.onload = () => {generateMeme(image)};


// // image.onload = function(){
// //     generateMeme(image);
// //  }