//your JS code here. If required.
const form = document.getElementById('form');

form.addEventListener('submit',handelSubmit);

function handelSubmit(event){
	const first = document.getElementById('first');
	const last = document.getElementById('last');
	const phone = document.getElementById('phone');
	const email = document.getElementById('email');

	    window.alert(`
    First Name: ${first.value}
    Last Name: ${last.value}
    Phone Number: ${phone.value}
    Email ID: ${email.value}`);

	event.preventDefault();
  }
