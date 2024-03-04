// const carouselItems = document.querySelectorAll('.carousel-item');
contents = document.querySelectorAll('.content');
const matchingContentTwo = document.querySelectorAll('.content');
const closeX = document.querySelector('.close'),
  player = document.querySelector('.play');



function toggleVideo() {
  const trailer = document.querySelector('.trailer'),
    video = document.querySelector('video');
  video.pause();
  trailer.classList.toggle('active');
}
player.addEventListener('click', () => {
  toggleVideo();
  clearTimeout(timeout);
})
closeX.addEventListener('click', () => {
  toggleVideo();

});


let images;



const carouselItems = document.querySelectorAll('.carousel-item');
const banner = document.querySelector('.banner');


carouselItems.forEach(item => {
  item.addEventListener('click', () => {
    // Get the class name of the clicked carousel-item
    const clickedClassName = item.classList[1]; // Assuming i'm looking for the  second class is the classlist i.e (0,1)

    // Check if any content element has the same class name
    const matchingContent = document.querySelector(`.content.${clickedClassName}`);

    images = `assets/images/movies/bg-${clickedClassName}.jpg`;
    banner.style.background = `url("${images}")`;
    banner.style.backgroundSize = `cover`;
    banner.style.backgroundPosition = `center`;
    videoElement.setAttribute('src', `assets/vid-trailers/${clickedClassName}.mp4`);


    // console.log(images);
    // console.log(matchingContent)
    // console.log(item.className.split(" "));

    if (matchingContent) {
      removeActive();
      if (!matchingContent.classList.contains('active')) {
        matchingContent.classList.add('active');

      }
    }
  });
});
function removeActive() {
  matchingContentTwo.forEach(match => {

    if (match.classList.contains('active')) {
      match.classList.remove('active');
    }
  })
}


let i = 0,
  intervalId,
  videoElement = document.querySelector('video');



function clickNext() {
  carouselItems[i].click();

  i++;

  if (i >= carouselItems.length) {
    i = 0;
  }
  intervalId = setTimeout(() => { clickNext() }, 7000);
}

function startInterval() {
  clickNext()
}
startInterval();

carouselItems.forEach((carousel, index) => {
  carousel.addEventListener('click', () => {
    i = index;
    console.log(index)
  });
});


var storedIndex;

player.addEventListener('click', function () {
  clearTimeout(intervalId);
  storedIndex = i;
  clearTimeout(intervalId);
});

closeX.addEventListener('click', function () {
  i = storedIndex;
  startInterval();
});



videoElement.addEventListener('mouseover', () => {
  videoElement.play();
  videoElement.setAttribute('controls', '');
})

videoElement.addEventListener('mouseleave', () => {
  videoElement.removeAttribute('controls')
})
