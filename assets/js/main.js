const navBar = document.getElementsByClassName('openBar')[0];


navBar.addEventListener('click', () => {
    const navMenu = document.getElementsByClassName('header-hideNav')[0];

    if(navMenu.style.display != 'none'){
        navMenu.style.display = 'none';
    }else{
        navMenu.style.display = "flex";
    }
})