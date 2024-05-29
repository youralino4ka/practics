window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);
  
  
  
  const elevator = document.querySelector('.elevator');
  const elevatorL = document.querySelector('.elevatorL');
  const elevatorR = document.querySelector('.elevatorR');
  
  
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        
        elevator.classList.add('elevator-transition');
              elevatorL.classList.add('elevatorL-transition');
        elevatorR.classList.add('elevatorR-transition');
  
        return;
      }
  
      elevator.classList.remove('elevator-transition');
      elevatorL.classList.remove('elevatorL-transition');
      elevatorR.classList.remove('elevatorR-transition');
  
    });
  });
  
  
  observer.observe(document.querySelector('.elevator'));
  observer.observe(document.querySelector('.elevatorL'));
  observer.observe(document.querySelector('.elevatorR'));

  

  function switchTheme(theme) {
    document.body.className = theme + '-theme';
    localStorage.setItem('theme', theme);
}

window.onload = function() {
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        switchTheme(savedTheme);
    }
};