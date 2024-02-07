export const dateToString = (yyyymmdd) => {
	let month = '';
	let year = yyyymmdd.slice(0, 4);
	let day = yyyymmdd.slice(6, 8);

	switch (yyyymmdd.slice(4, 6).toString()) {
		case '01':
			month = 'Jan';
			break;
		case '02':
			month = 'Feb';
			break;
		case '03':
			month = 'Mar';
			break;
		case '04':
			month = 'Apr';
			break;
		case '05':
			month = 'May';
			break;
		case '06':
			month = 'Jun';
			break;
		case '07':
			month = 'Jul';
			break;
		case '08':
			month = 'Aug';
			break;
		case '09':
			month = 'Sept';
			break;
		case '10':
			month = 'Oct';
			break;
		case '11':
			month = 'Nov';
			break;
		case '12':
			month = 'Dec';
			break;
	}

	return `${day} ${month} ${year}`;
};
