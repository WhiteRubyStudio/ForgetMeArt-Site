// Navigation bar //

const navSlide = () => {
    const navButton = document.querySelector('.navButton');
    const navBar = document.querySelector('.navBar');
    
    navButton.addEventListener('click', ()=>{
        navBar.classList.toggle('navBar-Show');
    })
}

navSlide();