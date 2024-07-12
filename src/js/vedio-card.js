const vedioCard =document.querySelectorAll('.video-card');

vedioCard.forEach(item => {
    // --------mouseover---------
    item.addEventListener('mouseover', ()=>{
        let video = item.children[1];
        video.play();
    })
    // ------mouseleave-----------
    item.addEventListener('mouseleave', ()=>{
        let video = item.children[1];
        video.pause();
    })
});
