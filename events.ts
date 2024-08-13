const events = [
	{
		id: 1,
		name: "DJ Practice Session",
		slug: "dj-practice-session",
		city: "Austin",
		location: "Austin Music Hall",
		date: "2030-10-12T00:00:00.000Z",
		organizerName: "DJ Inc.",
		imageUrl:
			"https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
		description:
			"Join us for an immersive DJ practice session at the DJ Beats Workshop! Whether you're a beginner or an experienced DJ, this event is tailored for you. Showcase your skills during our open decks session and receive applause and feedback from a supportive audience.",
		isFeatured: true,
	},
	{
		id: 2,
		name: "Mumbai Music Conference",
		slug: "mumbai-music-conference",
		city: "Mumbai",
		location: "Mumbai Convention Center",
		date: "2030-11-05T00:00:00.000Z",
		organizerName: "Mumbai Music Alliance",
		imageUrl:
			"https://images.unsplash.com/photo-1561466074-d91d91f83148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
		description:
			"Explore the future of music at the Mumbai Music Conference. Industry experts and musicians come together to discuss trends, technology, and the business of music. Network with professionals and attend workshops to elevate your music career.",
		isFeatured: true,
	},
	{
		id: 3,
		name: "Delhi Social Night",
		slug: "delhi-social-night",
		city: "Delhi",
		location: "Delhi Social Club",
		date: "2030-12-20T00:00:00.000Z",
		organizerName: "Delhi Event Planners",
		imageUrl:
			"https://images.unsplash.com/photo-1529878567033-5a8f1f11ba95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
		description:
			"Join us for an unforgettable Social Night in Delhi. Enjoy live music, delicious food, and great company. Perfect for networking and making new friends in the city's vibrant social scene.",
		isFeatured: false,
	},
	{
		id: 4,
		name: "Chennai Tech Expo",
		slug: "chennai-tech-expo",
		city: "Chennai",
		location: "Chennai Trade Center",
		date: "2030-09-30T00:00:00.000Z",
		organizerName: "Chennai Innovators",
		imageUrl:
			"https://images.unsplash.com/photo-1508594627373-8a281e0d3a1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
		description:
			"Explore cutting-edge technology at the Chennai Tech Expo. From AI to robotics, this event showcases the latest innovations. Attend keynotes, network with tech leaders, and experience the future of technology.",
		isFeatured: true,
	},
	{
		id: 5,
		name: "Bangalore Startup Meetup",
		slug: "bangalore-startup-meetup",
		city: "Bangalore",
		location: "Bangalore Startup Hub",
		date: "2030-08-25T00:00:00.000Z",
		organizerName: "Bangalore Entrepreneurs",
		imageUrl:
			"https://images.unsplash.com/photo-1532384814961-9f4f0fa45b7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
		description:
			"Connect with fellow entrepreneurs at the Bangalore Startup Meetup. Share ideas, find potential partners, and get inspired by success stories. This event is a must for anyone in the startup ecosystem.",
		isFeatured: false,
	},
	{
		id: 6,
		name: "Hyderabad Food Festival",
		slug: "hyderabad-food-festival",
		city: "Hyderabad",
		location: "Hyderabad Culinary Park",
		date: "2030-07-15T00:00:00.000Z",
		organizerName: "Hyderabad Foodies",
		imageUrl:
			"https://images.unsplash.com/photo-1556912167-f556f1f4b7a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
		description:
			"Indulge in a culinary adventure at the Hyderabad Food Festival. Taste local and international cuisines, watch live cooking demos, and meet top chefs. A perfect event for food lovers of all ages.",
		isFeatured: true,
	},
	{
		id: 7,
		name: "Pune Yoga Retreat",
		slug: "pune-yoga-retreat",
		city: "Pune",
		location: "Pune Wellness Center",
		date: "2030-10-10T00:00:00.000Z",
		organizerName: "Pune Wellness Collective",
		imageUrl:
			"https://images.unsplash.com/photo-1580842317374-27dd0494fcd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
		description:
			"Rejuvenate your mind and body at the Pune Yoga Retreat. Experience various yoga practices, meditation sessions, and wellness workshops. Whether you're a beginner or a seasoned yogi, this retreat offers a peaceful escape from the hustle and bustle.",
		isFeatured: false,
	},
	{
		id: 8,
		name: "Kolkata Literature Festival",
		slug: "kolkata-literature-festival",
		city: "Kolkata",
		location: "Kolkata Cultural Center",
		date: "2030-11-15T00:00:00.000Z",
		organizerName: "Kolkata Literary Society",
		imageUrl:
			"https://images.unsplash.com/photo-1531362699072-836a53b7ebd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
		description:
			"Celebrate the power of words at the Kolkata Literature Festival. Meet renowned authors, attend book readings, and participate in literary discussions. This event is a haven for book lovers and writers alike.",
		isFeatured: true,
	},
	{
		id: 9,
		name: "Jaipur Art Exhibition",
		slug: "jaipur-art-exhibition",
		city: "Jaipur",
		location: "Jaipur Art Gallery",
		date: "2030-12-05T00:00:00.000Z",
		organizerName: "Jaipur Art Collective",
		imageUrl:
			"https://images.unsplash.com/photo-1529220359938-4ad58b9f0e5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
		description:
			"Discover the vibrant art scene of Jaipur at this exclusive Art Exhibition. View works by local and international artists, and engage in art talks and workshops. Perfect for art enthusiasts and collectors.",
		isFeatured: false,
	},
	{
		id: 10,
		name: "Ahmedabad Business Summit",
		slug: "ahmedabad-business-summit",
		city: "Ahmedabad",
		location: "Ahmedabad Trade Center",
		date: "2030-11-20T00:00:00.000Z",
		organizerName: "Ahmedabad Entrepreneurs Network",
		imageUrl:
			"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
		description:
			"Join top business leaders and entrepreneurs at the Ahmedabad Business Summit. This event features keynote speakers, panel discussions, and networking opportunities designed to inspire and inform business professionals.",
		isFeatured: true,
	},
	{
		id: 11,
		name: "Goa Beach Party",
		slug: "goa-beach-party",
		city: "Goa",
		location: "Goa Beachfront",
		date: "2030-12-25T00:00:00.000Z",
		organizerName: "Goa Party Planners",
		imageUrl:
			"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
		description:
			"Celebrate the holiday season at the ultimate Goa Beach Party! Dance to the beats of top DJs, enjoy beachside cocktails, and soak in the vibrant atmosphere. This event is the perfect getaway for party lovers.",
		isFeatured: false,
	},
	{
		id: 12,
		name: "Kerala Cultural Fest",
		slug: "kerala-cultural-fest",
		city: "Kochi",
		location: "Kochi Cultural Grounds",
		date: "2030-10-15T00:00:00.000Z",
		organizerName: "Kerala Culture Association",
		imageUrl:
			"https://images.unsplash.com/photo-1546238232-20216dec9725?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
		description:
			"Experience the rich cultural heritage of Kerala at the Kerala Cultural Fest. Enjoy traditional dance performances, music, and local crafts. A perfect event for those looking to explore Kerala's vibrant culture.",
		isFeatured: true,
	},
	{
		id: 13,
		name: "Lucknow Craft Fair",
		slug: "lucknow-craft-fair",
		city: "Lucknow",
		location: "Lucknow Handicraft Pavilion",
		date: "2030-09-20T00:00:00.000Z",
		organizerName: "Lucknow Artisan Society",
		imageUrl:
			"https://images.unsplash.com/photo-1545069067-d63c54e2f0d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
		description:
			"Discover exquisite handmade crafts at the Lucknow Craft Fair. From textiles to pottery, this event showcases the best of local craftsmanship. Perfect for finding unique gifts and supporting local artisans.",
		isFeatured: false,
	},
	{
		id: 14,
		name: "Indore Film Festival",
		slug: "indore-film-festival",
		city: "Indore",
		location: "Indore Cinematic Hub",
		date: "2030-08-18T00:00:00.000Z",
		organizerName: "Indore Cinephiles",
		imageUrl:
			"https://images.unsplash.com/photo-1551827338-d28a40aaa72f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
		description:
			"Celebrate cinema at the Indore Film Festival. Watch screenings of independent films, participate in discussions, and meet filmmakers. A must-attend event for movie enthusiasts and aspiring filmmakers.",
		isFeatured: true,
	},
	{
		id: 15,
		name: "Chandigarh Fashion Week",
		slug: "chandigarh-fashion-week",
		city: "Chandigarh",
		location: "Chandigarh Fashion Arena",
		date: "2030-10-05T00:00:00.000Z",
		organizerName: "Chandigarh Fashion Council",
		imageUrl:
			"https://images.unsplash.com/photo-1533670809214-346b0b2967d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
		description:
			"Witness the latest trends at Chandigarh Fashion Week. Top designers and models come together to showcase cutting-edge fashion. Attend runway shows, fashion talks, and exclusive after-parties.",
		isFeatured: false,
	},
	{
		id: 16,
		name: "Jaipur Food Carnival",
		slug: "jaipur-food-carnival",
		city: "Jaipur",
		location: "Jaipur Food Plaza",
		date: "2030-11-22T00:00:00.000Z",
		organizerName: "Jaipur Culinary Club",
		imageUrl:
			"https://images.unsplash.com/photo-1502997050256-4f24de51b002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
		description:
			"Indulge in a variety of cuisines at the Jaipur Food Carnival. Sample dishes from local and international chefs, enjoy cooking demonstrations, and participate in food competitions. A paradise for food lovers.",
		isFeatured: true,
	},
	{
		id: 17,
		name: "Bhopal Book Fair",
		slug: "bhopal-book-fair",
		city: "Bhopal",
		location: "Bhopal Exhibition Center",
		date: "2030-12-12T00:00:00.000Z",
		organizerName: "Bhopal Literary Society",
		imageUrl:
			"https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
		description:
			"Explore a wide range of books at the Bhopal Book Fair. From fiction to non-fiction, this event has something for every reader. Meet authors, attend book signings, and find your next great read.",
		isFeatured: false,
	},
	{
		id: 18,
		name: "Ranchi Adventure Fest",
		slug: "ranchi-adventure-fest",
		city: "Ranchi",
		location: "Ranchi Adventure Park",
		date: "2030-09-28T00:00:00.000Z",
		organizerName: "Ranchi Adventure Club",
		imageUrl:
			"https://images.unsplash.com/photo-1531746790731-e6c2878a6c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
		description:
			"Get your adrenaline pumping at the Ranchi Adventure Fest. Experience thrilling activities like rock climbing, zip-lining, and more. Perfect for adventure enthusiasts and families looking for excitement.",
		isFeatured: true,
	},
	{
		id: 19,
		name: "Surat Music Festival",
		slug: "surat-music-festival",
		city: "Surat",
		location: "Surat Concert Grounds",
		date: "2030-10-30T00:00:00.000Z",
		organizerName: "Surat Sound Collective",
	},
];
