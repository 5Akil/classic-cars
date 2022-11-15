document.querySelector(".menu").addEventListener("click", () => {
    document.querySelectorAll(".target").forEach( (item)=>{
            item.classList.toggle("change");
    });
});


document.querySelectorAll(".wrapper").forEach( (item) =>{
    item.addEventListener("click" , () =>{
        document.querySelectorAll(".target").forEach((item) => {
            item.classList.remove("change");
        });
    });
});


// var video = document.getElementsByTagName("video");
// console.log(video);



document.querySelectorAll("video").forEach((video)=>{
    video.addEventListener("mouseover" , ()=>{
        video.play();
    });
    video.addEventListener("mouseout" , ()=>{
        video.pause();
    });
});

