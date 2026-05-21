
const months = ['mai','juin','juillet','août','septembre']

// the date of today is today's date
const today = document.getElementById('datex');
const d = new Date();
today.textContent = d.getDate()+' '+months[d.getMonth()-4]+' '+d.getFullYear();