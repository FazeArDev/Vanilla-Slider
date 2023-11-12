let curSlide = 0;
 
const slides = document.querySelectorAll('.slide');
const nextSlide = document.querySelector('.btn-next');
const prevSlide = document.querySelector('.btn-prev');
 
let maxSlide = slides.length - 1;

nextSlide.addEventListener('click',function(){
  if(curSlide === maxSlide){
    curSlide = 0;
  }else{
  curSlide++;
  }
  
  slides.forEach((slide,indx)=>{
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`
  })
})
function radioSlide(number){
  
  curSlide = number
 
  slides.forEach((slide,indx)=>{
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`
    
  })
}
prevSlide.addEventListener('click',function(){
  if(curSlide === 0){
    curSlide = maxSlide
  }else{
    curSlide--
  }

  slides.forEach((slide,indx)=>{
    slide.style.transform = `translateX(${100*(indx - curSlide)}%)`
  })
})