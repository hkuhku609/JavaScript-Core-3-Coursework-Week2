const showBtn = document.querySelector('#show-img');
const hideBtn = document.querySelector('#hide-img');
const createLi = document.createElement('li');
const createImg = document.createElement('img');
const ulHtml = document.querySelector('ul');

// non-async version
// const showImg = () => {
//   fetch('https://dog.ceo/api/breeds/image/random')
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       createImg.src = data.message;
//       createLi.append(createImg);
//       ulHtml.append(createLi);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

//async version
const showImg = async () => {
  try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    createImg.src = data.message;
    createLi.append(createImg);
    ulHtml.append(createLi);
  } catch (err) {
    console.error(err);
  }
};

showBtn.addEventListener('click', showImg);
hideBtn.addEventListener('click', () => {
  ulHtml.removeChild(createLi);
});
