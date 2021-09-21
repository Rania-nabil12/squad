//toggle menu
let togglebtn = document.querySelector(".toggle-menu");

let tlinks = document.querySelector(".pages");

togglebtn.onclick = function(e){

    //stop propagation
    e.stopPropagation();

    this.classList.toggle("menu-active");

    tlinks.classList.toggle("open");


};

document.addEventListener("click",(e)=>{

    if(e.target !==  togglebtn && e.target !== tlinks){

        if (tlinks.classList.contains("open")){


            togglebtn.classList.toggle("menu-active");

            tlinks.classList.toggle("open");
        };
    };
});

tlinks.oncclick = function(e){
    e.stopPropagation();

}    
