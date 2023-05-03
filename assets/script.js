let script = window.location.pathname;
let headLink = document.querySelectorAll("ul a").forEach(link =>{
    if(link.href.includes(`${script}`)){
        link.classList.add('active');
    }
});
