const html = document.documentElement;
const canvas = document.getElementById("hero-section");
const context = canvas.getContext('2d');

canvas.width = 3400;
canvas.height = 3400;


const currentFrame = index => (
    `scene${index.toString().padStart(5, "0")}.jpg`
  )


  const preloadImages = () => {
    for (let i = 1; i <= 81; i++) {
      const image = new Image();
      image.src = currentFrame(i);
    }
  };

  const image = new Image();
  image.src = currentFrame(1);

  image.onload=function(){
    context.drawImage(image, 0, 0);
  }

  window.addEventListener('scroll', () => {
      const scrollTop = html.scrollTop;
      const maxScroll = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScroll;
      const frameIndex = Math.min(81,Math.floor(scrollFraction * 148));
        requestAnimationFrame(() => updateImage(frameIndex+1))
  })
  
  const updateImage = index => {
    image.src = currentFrame(index);
    context.drawImage(image, 0, 0);
  }

  preloadImages()