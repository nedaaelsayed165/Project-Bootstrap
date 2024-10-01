(() => {
    window.addEventListener('DOMContentLoaded', () => {
      const colorModeSwitch = document.getElementById('colorModeSwitch');
      if (colorModeSwitch) {
        colorModeSwitch.addEventListener('change', () => {
          document.body.setAttribute('data-bs-theme', colorModeSwitch.checked ? 'dark' : 'light');
        });
      }
      checkScrollPosition()
      });
  })();

  const navBar = document.getElementsByTagName("nav")[0]
  const navbarToggler = document.getElementsByClassName("navbar-toggler")[0]
  const navbarCollapse = document.getElementsByClassName("navbar-collapse")[0]
  
  let toggled = false
  const checkScrollPosition = () => {
    if (window.scrollY > 5) {
      navBar.classList.remove("navbar-dark")
    } else if(!navbarCollapse.classList.contains("show")){
      navBar.classList.add("navbar-dark")
    }
  };
  window.addEventListener("scroll", checkScrollPosition)
  navbarToggler.addEventListener("click", ()=>{
    if (window.scrollY <= 5) {
      navBar.classList.toggle("navbar-dark")
      toggled = !toggled
    }

  })
