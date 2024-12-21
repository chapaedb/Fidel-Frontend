// hero-section.js

document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.counter');
  
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        let count = +counter.innerText.replace('k', '');
        const speed = target > 1000 ? 100 : 200;
        const increment = target / speed;
  
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target >= 1000 ? (target / 1000).toFixed(1) + 'k' : target;
        }
      };
      updateCount();
    });
  });
  function handleClick(buttonName) {
    console.log(`${buttonName} button clicked`);
    // You can add further logic for each button click here
}