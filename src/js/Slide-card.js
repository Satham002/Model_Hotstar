// let cardContainer = document.querySelectorAll('.card-container');
// let Pre_btn = document.querySelector('.pre-btn');
// let Nxt_btn = document.querySelector('.nxt-btn');

// cardContainer.forEach((item ,i) => {
//     let ContainDims = item.getBoundingClientRect();
//     let ContainWidth = ContainDims.width;

//     Nxt_btn[i].addEventListener('click' , () =>{
//         item.scrollLeft += ContainWidth - 200;
//         console.log("nxtclicked");
//     });
//     Pre_btn[i].addEventListener('click' , () =>{
//         item.scrollLeft -= ContainWidth + 200;
//         console.log("preclicked");
//     });
// });



let cardContainers = document.querySelectorAll('.card-container');
let preBtns = document.querySelectorAll('.pre-btn');
let nxtBtns = document.querySelectorAll('.nxt-btn');


cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 300;
        console.log(item.scrollLeft);

    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
    console.log(item);
})