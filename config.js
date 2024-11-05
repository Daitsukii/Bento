// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'ダイツキ',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: '起きて!',
	greetingAfternoon: 'おはよう,',
	greetingEvening: 'こんばんは,',
	greetingNight: '早く寝てよ!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '586c406c9905db7ce2312037d56dbbfc', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'ja', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '0',
	defaultLongitude: '0',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Googleキャレンダー',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/u/0/r',
		},
		{
			id: '2',
			name: 'Notion',
			icon: 'sticky-note',
			link: 'https://www.notion.so/',
		},
		{
			id: '3',
			name: 'Google教室',
			icon: 'school',
			link: 'https://classroom.google.com/u/1/',
		},
		{
			id: '4',
			name: 'Bandcamp',
			icon: 'headphones',
			link: 'https://daitsuki.bandcamp.com/',
		},
		{
			id: '5',
			name: 'Messenger',
			icon: 'message-circle',
			link: 'https://www.messenger.com/',
		},
		{
			id: '6',
			name: 'Facebook',
			icon: 'facebook',
			link: 'https://www.facebook.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'library',
			id: '1',
			links: [
				{
					name: '',
					link: '',
				},
				{
					name: 'グループのフォルダー',
					link: 'https://drive.google.com/drive/u/1/folders/1lEl_TbZxXMvj26PjdXu4aAWA5ztnWnGp?usp=drive_link',
				},
				{
					name: '学習素材',
					link: 'https://drive.google.com/drive/u/1/folders/11gwY_O9hJuZ2ijfHWmRrjMt6jZ5IJa3R?usp=drive_link',
				},
				{
					name: '',
					link: '',
				},
			],
		},
		{
			icon: 'graduation-cap',
			id: '2',
			links: [
				{
					name: '物理',
					link: 'https://drive.google.com/drive/u/1/folders/17xx4urQEdjAZI4XiMk5pOB4Ev6uTSIvb?usp=drive_link',
				},
				{
					name: '設計・製造技術',
					link: 'https://drive.google.com/drive/u/1/folders/1TCOIDKl5uRXEN8OWxDfiFqi3sI0-YUp0?usp=drive_link',
				},
				{
					name: '数学',
					link: 'https://drive.google.com/drive/u/1/folders/12_gvc62iWL3H-tzRe0FreliOIDHi-Ims?usp=drive_link',
				},
				{
					name: 'フィリピン語',
					link: 'https://drive.google.com/drive/u/1/folders/1aC57B5UuQ2MhB-xHl0qO5DQGuRS6dcRI?usp=drive_link',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
