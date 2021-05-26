import { HTTP } from 'meteor/http';

export const checkSlots = (districtId, age) => {
	const date = new Date();
	date.setDate(new Date().getDate()+1);

	const dateString = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();

	const URL = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=" + districtId + "&date=" + dateString;
	const response = HTTP.get(URL, {
		headers: {
			"accept": "application/json",
			"Accept-Language": "en_US",
			"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36"
		}
	});

	const sessions = response.data.sessions;
	const centers = new Map();
	sessions.forEach(session => {
		if (session.available_capacity > 10) {
			if (session.min_age_limit == age) {
				centers.has(session.center_id) ? '' : centers.set(session.center_id, session);
			}
		}
	});


	if (centers.size > 0) {
		for (let [key, value] of centers.entries()) {
			console.log('Center: ' + value.name);
			console.log('Address: ' + value.address);
			console.log('Available Slots: ' + value.available_capacity);
			console.log('Vaccine: ' + value.vaccine);
			console.log('\n');

			// Add integeration to Slack, Discord, or Email. Please contact aman.gupta@outlook.in for any help regarding these integrations.
		}
	}
}