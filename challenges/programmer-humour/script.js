const bodyHTML = document.querySelector('body');
const createImg = document.createElement('img');

// non-async version
// const showImg = () => {
//   fetch('https://xkcd.now.sh/?comic=latest')
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       createImg.src = data.img;
//       bodyHTML.append(createImg);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

//async version
const showImg = async () => {
  try {
    const res = await fetch('https://xkcd.now.sh/?comic=latest');
    const data = await res.json();
    console.log(data);
    createImg.src = data.img;
    bodyHTML.append(createImg);
  } catch (err) {
    console.error(err);
  }
};
showImg();
