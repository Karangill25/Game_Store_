
let day_night = document.getElementById('day_night');
let day_night2 = document.getElementById('day_night2');
day_night2.style.display = "none";
day_night.addEventListener('click', () => {
  document.documentElement.style.setProperty('--color-1', 'rgb(184,184,184,.5)');
  document.documentElement.style.setProperty('--color-2', '#000');
  document.documentElement.style.setProperty('--color-3', '#fff');
  document.documentElement.style.setProperty('--color-4', 'rgb(0,0,0,.5)');
  document.documentElement.style.setProperty('--color-5', '#663da6');
  day_night.style.display = "none";
  day_night2.style.display = "unset";

});
day_night2.addEventListener('click', () => {
  document.documentElement.style.setProperty('--color-1', '#262b3f');
  document.documentElement.style.setProperty('--color-2', '#fff');
  document.documentElement.style.setProperty('--color-3', 'rgb(30, 35, 54)');
  document.documentElement.style.setProperty('--color-4', ' rgb(255, 255, 255, .5)');
  document.documentElement.style.setProperty('--color-5', 'greenyellow');
  day_night.style.display = "unset";
  day_night2.style.display = "none";

});

let active_battery = document.getElementById('active_battery');
let battery_icon = document.getElementById('battery_icon');
let battery_level = document.getElementById('battery_level');
let audio1 = new Audio('audio/charging.mp3');
// audio.play()

navigator.getBattery().then(battery => {
  const battery_level_change = () => {
    battery_level.innerText=(battery.level *100)+"%";
  }
  setInterval(battery_level_change,1000);
  battery_level_change();

  battery_icon.value = battery.charging;
  // alert(battery_icon.value)

  battery.addEventListener('chargingchange',()=>{
    switch (battery.charging) {
      case true:
        battery_icon.classList.remove('bi-battery-half')
        battery_icon.classList.add('bi-battery-charging')
        active_battery.classList.add('active_battery')
        battery_icon.style.color='#fff'
        audio1.play()
        break;
      case false:
        battery_icon.classList.add('bi-battery-half')
        battery_icon.classList.remove('bi-battery-charging')
        active_battery.classList.remove('active_battery')
        battery_icon.style.color='unset'
       break;
       case 100:
         battery_icon.classList.add('bi-battery-full')
         battery_icon.classList.remove('bi-battery-half')
       break;
    }
  })
});

let wifi =document.getElementById('wifi');
const wifi_change=()=>{
  if (navigator.onLine) {
    wifi.style.color='var(--color-5)';
  } else {
    wifi.style.color='';
    
  }
}
setInterval(wifi_change,100)
wifi_change();
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('header article nav .search input');
  const sections = [
    
    { container: '.game2', cardSelector: 'h6' }
  ];

  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();

    sections.forEach(({ container, cardSelector }) => {
      const section = document.querySelector(container);
      const cards = section.querySelectorAll('.card');
      let visibleCount = 0;

      cards.forEach(card => {
        const title = card.querySelector(cardSelector)?.textContent.toLowerCase() || '';
        const match = term === '' || title.includes(term);
        card.style.display = match ? 'block' : 'none';
        if (match) visibleCount++;
      });

      section.style.display = visibleCount > 0 || term === '' ? 'block' : 'none';
    });
  });
});

const refreshBtn = document.getElementById('refresh');

    refreshBtn.addEventListener('click', () => {
      // Add animation class
      refreshBtn.classList.add('rotate');

      location.reload();

      setTimeout(() => {
        refreshBtn.classList.remove('rotate');
      }, 600);
    });