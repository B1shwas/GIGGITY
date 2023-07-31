const darkMode = () => {

    const headerSun = document.querySelector('.header__sun');
    const logoImage = document.querySelector('#logoImage');
    const headerLogo = document.querySelector('.header__logo');
    const profileSVG = document.getElementById("profileSVG");
    const wishlistSVG = document.getElementById("wishlistSVG");
    const shopSVG = document.getElementById("shopSVG");
    const sunSVG = document.getElementById("sunSVG");
    const searchBar = document.querySelector('.header__menu__search');
    const searchText = document.querySelector('.header__search');
    const anchorElement = document.querySelectorAll('.header__anchor');
    
    //Event Listener Start
    headerSun.addEventListener("click", function(){
        ///when clicked the light-mode class is toggled , which is the style.css
        document.body.classList.toggle('light-mode');

        // Dark Mode for the Logo
        // The logo is in code is img so the color cannot be changed . 
        // we change the image of another color and add "dark-logo" class for it to maintain same height as previous img
        
        if(logoImage.src.includes('/gg_bg.png')){
            logoImage.src = '/background__fullB.png';
            headerLogo.classList.add('dark-logo');
             // The logo is changed and class is added
        }
        else{
            logoImage.src = '/gg_bg.png';
            headerLogo.classList.remove('dark-logo');
             // This else section is needed for getting back to same mode. If not, then the '/background__fullB' will not be removed if we want to go back the same mode 
        }


        // For svg 
        const activeClass = "active";

        if (profileSVG.classList.contains(activeClass)) {
          // If the class is already present, it remove it and give the original color
          profileSVG.classList.remove(activeClass);
          wishlistSVG.classList.remove(activeClass);
          shopSVG.classList.remove(activeClass);
          sunSVG.classList.remove(activeClass);
        } else {
          // If the class is not present, it add the class to change the color
          // The css of this class is written seperately
          profileSVG.classList.add(activeClass);
          wishlistSVG.classList.add(activeClass);
          shopSVG.classList.add(activeClass);
          sunSVG.classList.add(activeClass);
        }

        // For searchBar -- Same as svg
        const activeSearch = "activeSearch";
         if (searchBar.classList.contains(activeSearch)){
            searchBar.classList.remove(activeSearch);
         }
         else{
            searchBar.classList.add(activeSearch);

         }

         // Text inside search bar
        const activeSearchText = "activeSearchText";
         if (searchText.classList.contains(activeSearchText)){
            searchText.classList.remove(activeSearchText);
         }
         else{
            searchText.classList.add(activeSearchText);

         }
         const activeAnchor = "activeAnchor";
         anchorElement.forEach((anchor) => {
             if (anchor.classList.contains(activeAnchor)) {
                 anchor.classList.remove(activeAnchor);
             } else {
                 anchor.classList.add(activeAnchor);
             }
         });



    });

}
export default darkMode;
