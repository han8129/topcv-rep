function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
      if (!event.target.matches('.dropdown-button')) {
            let dropdowns = document.getElementsByClassName("dropdown-content");
            
            for (let i = 0; i < dropdowns.length; i++) {
                  let openDropdown = dropdowns[i];
                  if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                  }
            }
      }
}