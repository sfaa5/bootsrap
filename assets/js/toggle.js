document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.toggle-menu');
    const box = document.querySelector('.nav');
  
    button.addEventListener('click', function () {
      box.classList.toggle('clicked');
    });


    // Function to remove the clicked class if viewport is 768px or wider
    function handleResize() {
        if (window.innerWidth >= 768) {
            box.classList.remove('clicked');
        }
    }

    

    // Attach resize event listener
    window.addEventListener('resize', handleResize);







    // Call the function once on initial load
    handleResize();


  });
  