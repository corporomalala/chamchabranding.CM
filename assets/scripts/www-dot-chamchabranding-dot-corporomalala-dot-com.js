/*===
Into Binary (https://chamchabranding.corporomalala.com)
&copy Coryright 2022 Into Binary. All rights reserved.
Written for -- www.chamchabranding.corporomalala.com
===*/

/*=== LIBRARIES ===*/

/*=== END LIBRARIES ===*/

/*=== CUSTOM ===*/
/** WWW ***/

	/*** GLOBAL VARIABLES & OBJECTS ***/
	var ib_form_message = document.querySelector(".js-form_message");
	var ib_form_membership = document.querySelector(".js-form_membership");
	/*** END GLOBAL VARIABLES & OBJECTS ***/
	
	/*** SETUP ***/
	/*** END SETUP ***/
	
	/*** EVENTS ***/
	ib_form_message.addEventListener("submit", ib_handleSubmit_message);
	ib_form_membership.addEventListener("submit", ib_handleSubmit_membership);
	/*** END EVENTS ***/
	
	/*** ACTIONS ***/
	/*** END ACTIONS ***/
	
	/*** FUNCTIONS ***/
	async function ib_handleSubmit_message(event) {
		event.preventDefault();
		
		var status = document.querySelector(".js-form_message-status");
		var data = new FormData(event.target);
		
		fetch(event.target.action, {
			method: ib_form_message.method,
			body: data,
			headers: {
				"Accept": "application/json"
			}
		}).then(response => {
			if(response.ok) {
				status.innerHTML = "Thanks for your submission!";
				ib_form_message.reset();
			} else {
				response.json().then(data => {
					if(Object.hasOwn(data, "errors")) {
						status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
					} else {
						status.innerHTML = "Oops! There was a problem submitting your message_form.";
					}
				});
			}
		}).catch(error => {
			status.innerHTML = "Oops! There was a problem submitting your membership_form.";
		});
	}
	async function ib_handleSubmit_membership(event) {
		event.preventDefault();
		
		var status = document.querySelector(".js-form_membership-status");
		var data = new FormData(event.target);
		
		fetch(event.target.action, {
			method: ib_form_message.method,
			body: data,
			headers: {
				"Accept": "application/json"
			}
		}).then(response => {
			if(response.ok) {
				status.innerHTML = "Thanks for your submission!";
				ib_form_message.reset();
			} else {
				response.json().then(data => {
					if(Object.hasOwn(data, "errors")) {
						status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
					} else {
						status.innerHTML = "Oops! There was a problem submitting your membership_form.";
					}
				});
			}
		}).catch(error => {
			status.innerHTML = "Oops! There was a problem submitting your membership_form.";
		});
	}
	/*** END FUNCTIONS ***/

/*=== END CUSTOM ===*/