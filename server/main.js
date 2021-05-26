import { Meteor } from 'meteor/meteor';
import { checkSlots } from '/server/modules/checkSlots';

SyncedCron.config({
	log: true
});

SyncedCron.add({
	name: 'FIND_VACCINE_SLOTS',

	schedule: function (parser) {
		return parser.recur().every(3).second(); // Fires every 3 seconds, OPTION: Change the value in every() to fire accordingly.
	},

	job: function () {
		const districtId = 312; // OPTION: Change districtId based on your district, please refer README.md for the codes.
		const age = 18; // OPTION: Use 18 for 18 - 45 age group; Use 45 for 45+ age group; Use 0 for 0 - 18 age group;

		checkSlots(districtId, age);
	}
});

Meteor.startup(() => {
	SyncedCron.start();
});
