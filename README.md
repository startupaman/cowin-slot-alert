# Co-WIN Slot Alerts

This script will check for the vaccination slots in Co-WIN portal every 3 seconds, faster than any other possible alternative. The slots will appear in your terminal once they are available. Please book your slots from https://selfregistration.cowin.gov.in/ as soon as it's available.

## Installation

Install MeteorJS (OSX / Linux)
```sh
curl https://install.meteor.com/ | sh
```
Clone the repository
```sh
git clone https://github.com/startupaman/cowin-slot-alert.git
```
Execute the following commands
```sh
cd cowin-slot-alert
npm install
meteor run
```

## Customization
1. Open `server/main.js` file.
2. Change districtId based on your district, defaulted to Hyderabad. The complete list of districts with their IDs will be added soon.
3. Change age based on your age group, defaulted to 18 - 45.