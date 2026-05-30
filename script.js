
const months = ['mai','juin','juillet','août','septembre']

// the date of today is today's date
const date_stand = document.getElementById('datex');
const today = new Date();
today.setHours(0,0,0,0); // normalise to start of day
date_stand.textContent = today.getDate()+' '+months[today.getMonth()-4]+' '+today.getFullYear();

function filterAccordionsByDate(){

  document.querySelectorAll('[data-start][data-end]').forEach(item => {
    const startDate = new Date(item.dataset.start);
    const endDate = new Date(item.dataset.end);
    
    // Check if today falls within the period
    const isActive = today >= startDate && today <= endDate;
    
    if (!isActive) {
      item.classList.add('hidden');
    } else {
      item.classList.remove('hidden');
    }

    // BONUS: Check if starts tomorrow
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (startDate.getDate() === tomorrow.getDate()) {
      const warningMsg = `🚧 Attention ! Demain, il y a des travaux sur le ${item.querySelector('.accordion-item-title')?.textContent || '???'}`;
      const pp = document.createElement('p');
	  pp.textContent = warningMsg;
	  document.getElementById("tomorrow-too").appendChild(pp);
    }
  });
}

// Run on page load
filterAccordionsByDate();
// Time savings
if(months[today.getMonth()-4]==='mai'){
	const pp = document.createElement('p');
	pp.textContent = 'Le Webmaster prend ses fonctions le 1er juin.';
	document.getElementById("tomorrow-too").appendChild(pp);
}
else if(months[today.getMonth()-4]==='septembre'){
	const pp = document.createElement('p');
	pp.textContent = 'Le Webmaster a fini son travail. Fin du projet';
	document.getElementById("tomorrow-too").appendChild(pp);
}