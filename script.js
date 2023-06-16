const images = [
    'https://images.unsplash.com/photo-1587837073080-448bc6a2329b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3R5bGlzaCUyMG1lbnMlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1512236393941-3d6da97e56bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3R5bGlzaCUyMG1lbnMlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1574177556859-1362f72ed6f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    'https://plus.unsplash.com/premium_photo-1663011658095-2b289ecc1b07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnMlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1634833740183-3193a06cac2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnMlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fG1lbnMlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
];

const n = images.length;
const flexContainer = document.getElementById('flex-container');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const carouselNav = document.getElementById('carousel-nav')

 const containerWidth = 60;
 const flexContainerWidth = n*containerWidth;
 flexContainer.style.width = flexContainerWidth;


for(let i = 0; i<n; i++){
    const newImg = document.createElement('img');
    newImg.src = images[i];
    newImg.classList.add('img-style');
    flexContainer.appendChild(newImg);
 
    const dotDiv = document.createElement('div');
    dotDiv.classList.add('carousel-dot');
    carouselNav.appendChild(dotDiv);
    dotDiv.addEventListener('click',(event)=>{
    const index =  [...carouselNav.children].indexOf(event.target);
    curPosition = index;
    showImg(index);
    })
}
let curPosition = 0;

showImg(0);
leftBtn.addEventListener('click',()=>{
    if(curPosition > 0){
        showImg(curPosition-1);
    }
    else{
        showImg(n-1);
    }
   
})

rightBtn.addEventListener('click',()=>{
    if(curPosition < n-1){
        showImg(curPosition+1);
    }
    else{
        showImg(0);
    }
   
})

 function showImg(position){
    const prevDot = carouselNav.children[curPosition];
    prevDot.classList.remove('active');
    
    curPosition = position;

    const curDot = carouselNav.children[curPosition];
    curDot.classList.add('active');
    
    const translateXDistance = -curPosition * containerWidth
    flexContainer.style.transform= `translateX(${translateXDistance}vw)`
 }


