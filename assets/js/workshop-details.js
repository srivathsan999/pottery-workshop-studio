const workshopsData = {
    'beginner-wheel': {
        title: "Beginner's Wheel Workshop",
        level: "Beginner Level",
        shortDesc: "Perfect for first-time potters. Learn the fundamentals of wheel throwing in a supportive, hands-on environment.",
        longDesc: "This comprehensive workshop is designed for complete beginners. You'll learn the foundational skills needed to create pottery on the wheel, from centering clay to pulling walls and shaping your first pieces.",
        image: "https://loremflickr.com/600/400/pottery,wheel,mud?lock=10",
        price: "$120",
        duration: "4 hours",
        maxStudents: "8",
        instructor: "Sarah Chen",
        schedule: ["Saturdays, 10 AM - 2 PM", "Wednesdays, 6 PM - 10 PM"],
        whatYoullLearn: [
            "Proper clay preparation and wedging techniques",
            "Centering clay on the wheel",
            "Opening and pulling walls",
            "Shaping techniques for bowls and cylinders",
            "Trimming and finishing basics"
        ],
        whatsIncluded: [
            "All clay and materials",
            "Use of studio tools and equipment",
            "Firing and glazing of your pieces",
            "Take home 2-3 finished pieces",
            "Light refreshments"
        ]
    },
    'hand-building': {
        title: "Hand Building Basics",
        level: "Beginner Level",
        shortDesc: "Explore the tactile art of hand building. Learn pinch, coil, and slab techniques to create unique forms without a wheel.",
        longDesc: "Hand building offers endless possibilities for creative expression. In this workshop, you'll master the primary techniques of constructing ceramic forms by hand, allowing you to create more organic and sculptural pieces.",
        image: "https://loremflickr.com/600/400/clay,hands,sculpture?lock=22",
        price: "$100",
        duration: "3 hours",
        maxStudents: "10",
        instructor: "David Miller",
        schedule: ["Fridays, 5 PM - 8 PM", "Sundays, 1 PM - 4 PM"],
        whatYoullLearn: [
            "Wedging and preparing clay for hand building",
            "Pinch pot construction for organic forms",
            "Coiling techniques for vessels",
            "Slab building for structured pieces",
            "Surface texture and joins"
        ],
        whatsIncluded: [
            "All clay and hand tools",
            "Expert instruction and guidance",
            "Glazing and firing services",
            "Your finished hand-built creations",
            "Coffee and tea"
        ]
    },
    'advanced-techniques': {
        title: "Advanced Techniques",
        level: "Advanced Level",
        shortDesc: "Master complex forms, glazing techniques, and surface decoration for experienced potters looking to refine their craft.",
        longDesc: "This workshop is tailored for those who have a solid foundation in pottery and want to push their boundaries. We'll focus on larger vessels, intricate lids, and advanced surface decoration methods.",
        image: "https://loremflickr.com/600/400/ceramic,carving?lock=3",
        price: "$180",
        duration: "6 hours",
        maxStudents: "6",
        instructor: "Elena Rodriguez",
        schedule: ["Sundays, 10 AM - 4 PM"],
        whatYoullLearn: [
            "Throwing larger amounts of clay (5lbs+)",
            "Creating multi-part forms and lidded jars",
            "Advanced carving and piercing techniques",
            "Crystalline and layered glazing",
            "Professional finishing and foot-turning"
        ],
        whatsIncluded: [
            "Premium clay and specialty glazes",
            "Access to all studio specialized equipment",
            "Reserved shelf space during the workshop",
            "Firing of large-scale pieces",
            "Catered lunch"
        ]
    },
    'family-workshop': {
        title: "Family Workshop",
        level: "All Ages",
        shortDesc: "A fun, hands-on experience for families. Create memories and pottery together in this creative session.",
        longDesc: "Spend quality time with your loved ones while learning a new skill. This workshop is designed for kids and adults to work together, creating playful and functional pottery items as a family unit.",
        image: "https://loremflickr.com/600/400/family,painting,clay?lock=4",
        price: "$150",
        duration: "2 hours",
        maxStudents: "12 (4 families)",
        instructor: "Maya Patel",
        schedule: ["Saturdays, 3 PM - 5 PM", "Sundays, 10 AM - 12 PM"],
        whatYoullLearn: [
            "Simple clay preparation for all ages",
            "Fun stamp and texture techniques",
            "Creating personalized family name plates",
            "Basic bowl and cup making",
            "Colorful underglazing and painting"
        ],
        whatsIncluded: [
            "Materials for all family members",
            "Kid-friendly tools and aprons",
            "All pieces fired and ready in 2 weeks",
            "A collaborative family project",
            "Juice and snacks"
        ]
    },
    'glazing-finishing': {
        title: "Glazing & Finishing",
        level: "Intermediate Level",
        shortDesc: "Learn glazing techniques, color theory, and surface decoration to bring your pieces to life.",
        longDesc: "This workshop is for those who have already created some pieces and want to learn how to expertly finish them. We'll dive deep into glaze chemistry, application methods, and decorative techniques like sgraffito and mishima.",
        image: "https://loremflickr.com/600/400/pottery,glaze?lock=14",
        price: "$140",
        duration: "4 hours",
        maxStudents: "8",
        instructor: "Yuki Tanaka",
        schedule: ["Tuesdays, 6 PM - 10 PM"],
        whatYoullLearn: [
            "Glaze chemistry and safety",
            "Dipping, pouring, and brushing techniques",
            "Wax resist and masking",
            "Sgraffito and underglaze transfer",
            "Kiln firing basics and atmosphere"
        ],
        whatsIncluded: [
            "Wide range of studio glazes",
            "Underglazes and oxide washes",
            "Specialized applicator tools",
            "Firing of 4-5 test pieces",
            "Technical handouts"
        ]
    },
    'date-night': {
        title: "Date Night Pottery",
        level: "All Levels",
        shortDesc: "A romantic evening workshop for couples. Create matching pieces and enjoy a unique date experience.",
        longDesc: "Looking for a unique date? Join us for an evening of creativity and fun. This workshop focuses on the joy of creating together. No experience necessary – we'll guide you through making a pair of matching mugs or bowls in a relaxed, social atmosphere.",
        image: "https://loremflickr.com/600/400/couple,pottery?lock=15",
        price: "$160",
        duration: "2.5 hours",
        maxStudents: "10 (5 couples)",
        instructor: "Chris & Sam",
        schedule: ["Friday Nights, 7 PM - 9:30 PM", "Saturday Nights, 7 PM - 9:30 PM"],
        whatYoullLearn: [
            "Guided wheel throwing or hand building",
            "Basic shaping for functional pieces",
            "Collaborative decoration techniques",
            "Creating matching textures",
            "Finishing your first 'couple's set'"
        ],
        whatsIncluded: [
            "Clay for two people",
            "Complimentary glass of wine or sparkling cider",
            "Cheese and charcuterie board",
            "All firing and glazing included",
            "One-on-one assistance"
        ]
    }
};

function updateWorkshopDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    // Default to beginner-wheel if no ID or invalid ID
    const workshop = workshopsData[id] || workshopsData['beginner-wheel'];

    // Update Title and Meta
    document.title = `${workshop.title} - Earth & Clay Studio`;

    // Update Elements
    const elements = {
        'ws-image': (el) => {
            el.src = workshop.image;
            el.alt = workshop.title;
        },
        'ws-level': (el) => el.textContent = workshop.level,
        'ws-title': (el) => el.textContent = workshop.title,
        'ws-short-desc': (el) => el.textContent = workshop.shortDesc,
        'ws-duration': (el) => el.textContent = workshop.duration,
        'ws-price': (el) => el.textContent = workshop.price,
        'ws-max-students': (el) => el.textContent = workshop.maxStudents,
        'ws-long-desc': (el) => el.textContent = workshop.longDesc,
        'ws-instructor': (el) => el.textContent = workshop.instructor,
    };

    for (const [id, updateFn] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el) updateFn(el);
    }

    // Update Learn List
    const learnList = document.getElementById('ws-learn-list');
    if (learnList) {
        learnList.innerHTML = workshop.whatYoullLearn.map(item => `
            <li class="flex items-start">
                <svg class="w-6 h-6 text-accent-terracotta mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-secondary" style="line-height: 1.65;">${item}</span>
            </li>
        `).join('');
    }

    // Update Included List
    const includedList = document.getElementById('ws-included-list');
    if (includedList) {
        includedList.innerHTML = workshop.whatsIncluded.map(item => `
            <li class="flex items-center text-secondary">
                <svg class="w-5 h-5 text-accent-sage mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                ${item}
            </li>
        `).join('');
    }

    // Update Schedule
    const scheduleContainer = document.getElementById('ws-schedule');
    if (scheduleContainer) {
        scheduleContainer.innerHTML = workshop.schedule.map(time => `
            <p class="font-medium text-primary">${time}</p>
        `).join('');
    }
}

document.addEventListener('DOMContentLoaded', updateWorkshopDetails);
