// ── Data ──────────────────────────────────────────────────────────────────────

const ACTIVITIES = [
  { id: "beach",      label: "Beach & Swimming",   icon: "🏖️" },
  { id: "hiking",     label: "Hiking & Trails",     icon: "🥾" },
  { id: "snorkel",    label: "Snorkeling & Diving",  icon: "🤿" },
  { id: "surf",       label: "Surfing & Water Sports", icon: "🏄" },
  { id: "culture",    label: "Cultural & Historical", icon: "🏛️" },
  { id: "luau",       label: "Luau & Nightlife",    icon: "🌴" },
  { id: "food",       label: "Foodie & Dining",     icon: "🍽️" },
  { id: "whale",      label: "Whale Watching",       icon: "🐋" },
  { id: "helicopter", label: "Helicopter Tours",     icon: "🚁" },
  { id: "waterfall",  label: "Waterfall & Rainforest", icon: "💧" },
  { id: "shopping",   label: "Shopping",             icon: "🛍️" },
  { id: "golf",       label: "Golf",                 icon: "⛳" },
  { id: "yoga",       label: "Spa & Wellness",       icon: "🧘" },
  { id: "stargazing", label: "Stargazing",            icon: "🔭" },
];

// Activity descriptions for itinerary building
const ACTIVITY_OPTIONS = {
  beach: [
    "Relax on the white sands of Waikiki Beach",
    "Visit Lanikai Beach for crystal-clear turquoise water",
    "Watch the sunset at Hapuna Beach State Recreation Area",
    "Explore the black-sand beach at Punalu'u",
    "Spend the day at Ka'anapali Beach",
    "Stroll along the resort-lined shores of Poipū Beach",
    "Explore the tide pools at Shark's Cove",
  ],
  hiking: [
    "Hike Diamond Head Crater for panoramic ocean views",
    "Trek the Kalalau Trail along Nā Pali Coast",
    "Summit Mauna Kea at sunrise",
    "Walk the Pipiwai Trail to the 400-ft Waimoku Falls",
    "Explore the Manoa Falls Trail through lush rainforest",
    "Hike to the top of Lanipo Ridge Trail",
    "Traverse the Aiea Loop Trail in the Ko'olau Mountains",
  ],
  snorkel: [
    "Snorkel with sea turtles at Turtle Town (Maui)",
    "Discover vibrant coral at Molokini Crater",
    "Dive the underwater caves at Sharks Cove",
    "Snorkel at Hanauma Bay Nature Preserve",
    "Dive with manta rays off Kona Coast",
    "Explore Anini Reef off Kaua'i's north shore",
    "Join a guided snorkel cruise along the Nā Pali Coast",
  ],
  surf: [
    "Take a beginner surf lesson at Waikiki",
    "Watch the pros at Pipeline on the North Shore",
    "Paddleboard at Maunalua Bay",
    "Kayak to the Mokulua Islands off Lanikai",
    "Try outrigger canoe paddling with a local club",
    "Windsurf at Ho'okipa Beach, the world's windsurfing mecca",
    "Stand-up paddleboard along the Wailua River",
  ],
  culture: [
    "Visit Pearl Harbor and the USS Arizona Memorial",
    "Tour the Iolani Palace, America's only royal palace",
    "Explore Pu'uhonua o Hōnaunau National Historical Park",
    "Walk through Bishop Museum's Hawaiian Hall",
    "Tour the Polynesian Cultural Center",
    "Visit Lahaina's historic Front Street and art galleries",
    "Explore the ancient heiau at Wailua Heritage Trail, Kaua'i",
  ],
  luau: [
    "Attend the Old Lahaina Luau for authentic Hawaiian food & hula",
    "Experience a Polynesian Cultural Center show",
    "Enjoy the Te Au Moana Luau at the Maui Beach Hotel",
    "Hit the cocktail bars along Hotel Street in Honolulu",
    "Watch live Hawaiian music at Blue Note Hawaii",
    "Try a craft cocktail at a rooftop bar in Waikiki",
    "Join a sunset dinner cruise with live entertainment",
  ],
  food: [
    "Feast on fresh poke bowls at a local fish market",
    "Try shave ice at Matsumoto's on the North Shore",
    "Sample malasadas at Leonard's Bakery",
    "Dig into a plate lunch (loco moco, kalua pork) at a local diner",
    "Dine at a farm-to-table restaurant using Big Island produce",
    "Visit the KCC Farmers Market for local fruit and snacks",
    "Take a food tour through Chinatown Honolulu",
  ],
  whale: [
    "Book a whale-watching boat tour out of Lahaina Harbor",
    "Watch humpback whales from Papawai Scenic Lookout",
    "Join a research-backed whale watch with the Pacific Whale Foundation",
    "Spot spinner dolphins and whales on an eco-cruise off Kona",
    "Look for whales from the cliffs at Makapu'u Point",
  ],
  helicopter: [
    "Fly over Nā Pali Coast by helicopter for breathtaking sea cliffs",
    "Helicopter tour over active Kīlauea lava fields",
    "See the full Haleakalā crater from the air",
    "Take a doors-off helicopter flight over the Big Island's volcanoes",
    "Soar above the waterfalls of Waipio Valley",
  ],
  waterfall: [
    "Visit Akaka Falls State Park – two majestic waterfalls",
    "Hike to Rainbow Falls near Hilo",
    "Discover the seven sacred pools at Ohe'o Gulch (Maui)",
    "Walk to Wailua Falls, Kaua'i's iconic double waterfall",
    "Explore Manoa Falls on a lush rainforest walk",
    "Drive the Road to Hana with stops at countless waterfalls",
  ],
  shopping: [
    "Browse Ala Moana Center, Hawaii's largest open-air mall",
    "Hunt for local art and jewelry on Lahaina's Front Street",
    "Pick up macadamia nuts and Kona coffee at a local farm store",
    "Explore the Aloha Stadium Swap Meet for unique souvenirs",
    "Visit the International Marketplace in Waikiki",
    "Shop for handmade crafts at the Maui Swap Meet",
  ],
  golf: [
    "Tee off at the world-famous Kapalua Bay Course",
    "Play a round at the oceanfront Mauna Kea Golf Course",
    "Enjoy the Ko Olina Golf Club's tropical fairways",
    "Golf at the Princeville Makai Course overlooking Hanalei Bay",
    "Experience Kā'anapali's award-winning Royal Golf Course",
  ],
  yoga: [
    "Yoga and meditation at a beachfront studio",
    "Rejuvenate with a lomi lomi massage at a spa resort",
    "Try a sunrise yoga session on the beach",
    "Book a couples' hot stone massage",
    "Unwind at the Grand Wailea Spa (World's best spa)",
    "Join a sunset meditation on the beach",
    "Experience a volcanic hot spring soak on the Big Island",
  ],
  stargazing: [
    "Join a summit stargazing tour at Mauna Kea Observatory",
    "Watch for shooting stars from a dark-sky beach",
    "Attend a telescope viewing event at Haleakalā summit",
    "Take an astronomy tour led by a professional astronomer",
  ],
};

// Tips per vacation type
const VACATION_TIPS = {
  family: [
    "Book activities with age-flexible options — many operators have kid minimums",
    "Rent a condo with a kitchen to save on meal costs",
    "Visit the Bishop Museum — kids love the planetarium and science exhibits",
    "Honolulu Zoo and Waikiki Aquarium are great half-day activities",
    "Book a morning snorkel tour — calmer seas before the afternoon trades pick up",
  ],
  solo: [
    "Stay in Waikiki or Kailua-Kona for easy access to tours and activities",
    "Join group activity tours — great for meeting fellow travelers",
    "Rent a car for at least a few days to explore off-the-beaten-path spots",
    "Visit local farmers' markets and roadside stands for authentic eats",
    "Download the AllTrails app before any hike",
  ],
  couple: [
    "Book a sunset dinner cruise early — they sell out fast",
    "Consider a private snorkeling charter for a romantic experience",
    "The Road to Hana on Maui is a perfect romantic drive",
    "Spa resorts like Grand Wailea offer spectacular couples' packages",
    "Watch the sunrise from Haleakalā crater for an unforgettable moment",
  ],
  honeymoon: [
    "Upgrade to an oceanfront room or overwater bungalow if available",
    "Pre-order champagne and flowers — most resorts offer honeymoon packages",
    "A private helicopter tour is the ultimate honeymoon splurge",
    "Wailea, Maui is often rated Hawaii's most romantic destination",
    "Book a private Chef's Table dinner for an intimate dining experience",
  ],
  work: [
    "Choose a hotel with reliable high-speed WiFi and business center",
    "Schedule morning work blocks and afternoon activities",
    "The Honolulu Convention Center hosts large events year-round",
    "Many coffee shops in Kailua and Honolulu are remote-work friendly",
    "Rent a car to commute easily between the venue and your hotel",
  ],
  friends: [
    "Book group accommodations like vacation rentals for better value",
    "ATV tours and zipline adventures are great for groups",
    "The North Shore food truck scene is perfect for casual group dining",
    "Consider chartering a private snorkel or fishing boat",
    "Bar-hop along Waikiki's Kalakaua Avenue for a fun night out",
  ],
};

// ── Helpers ────────────────────────────────────────────────────────────────────

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick(arr, n) {
  return shuffle(arr).slice(0, n);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Build a pool of activities from selected types, plus filler from default set
function buildActivityPool(selectedIds) {
  const pool = [];
  selectedIds.forEach(id => {
    if (ACTIVITY_OPTIONS[id]) pool.push(...ACTIVITY_OPTIONS[id]);
  });
  // Deduplicate
  return [...new Set(pool)];
}

// Assign time slots
const TIME_SLOTS = ["Morning", "Late Morning", "Afternoon", "Evening"];
const ACTIVITIES_PER_DAY = 3;
const TIPS_TO_SHOW = 3;

function buildDay(dayNum, activityPool, vacationType) {
  const dayActivities = pick(activityPool, ACTIVITIES_PER_DAY);
  const slots = pick(TIME_SLOTS, dayActivities.length);
  slots.sort((a, b) => TIME_SLOTS.indexOf(a) - TIME_SLOTS.indexOf(b));
  return { dayNum, activities: dayActivities.map((act, i) => ({ time: slots[i], desc: act })) };
}

// ── Itinerary Generation ────────────────────────────────────────────────────────

function generateItinerary(vacationType, duration, selectedActivities) {
  const numDays = parseInt(duration, 10);
  const pool = buildActivityPool(selectedActivities);

  if (pool.length < ACTIVITIES_PER_DAY) {
    return null; // Not enough activities
  }

  const days = [];
  for (let d = 1; d <= numDays; d++) {
    days.push(buildDay(d, pool, vacationType));
  }

  const tips = VACATION_TIPS[vacationType] || VACATION_TIPS.solo;

  return { days, tips: pick(tips, TIPS_TO_SHOW) };
}

// ── UI Rendering ───────────────────────────────────────────────────────────────

function renderActivityChips() {
  const container = document.getElementById("activity-chips");
  ACTIVITIES.forEach(act => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "activity-chip";
    chip.dataset.id = act.id;
    chip.innerHTML = `<span class="chip-icon">${act.icon}</span>${act.label}`;
    chip.addEventListener("click", () => {
      chip.classList.toggle("selected");
    });
    container.appendChild(chip);
  });
}

function getSelectedActivities() {
  return [...document.querySelectorAll(".activity-chip.selected")].map(c => c.dataset.id);
}

function getLabel(selectId) {
  const el = document.getElementById(selectId);
  return el.options[el.selectedIndex].text;
}

function renderItinerary(result, vacationType, duration, selectedActivities) {
  const section = document.getElementById("itinerary-section");
  const content = document.getElementById("itinerary-content");

  const vacLabel = getLabel("vacation-type");
  const durLabel = getLabel("duration");
  const actLabels = ACTIVITIES.filter(a => selectedActivities.includes(a.id)).map(a => a.label);

  let html = `
    <div class="itinerary-header">
      <h3>🌺 Your Hawaii Itinerary</h3>
      <div class="summary-tags">
        <span class="summary-tag">🧳 ${vacLabel}</span>
        <span class="summary-tag">📅 ${durLabel}</span>
        ${actLabels.map(l => `<span class="summary-tag">${l}</span>`).join("")}
      </div>
    </div>
  `;

  result.days.forEach(day => {
    html += `
      <div class="day-card">
        <h4>Day ${day.dayNum}</h4>
        <ul>
          ${day.activities.map(a => `
            <li><span class="time-slot">${a.time}:</span> ${a.desc}</li>
          `).join("")}
        </ul>
      </div>
    `;
  });

  html += `
    <div class="tips-section">
      <h4>✨ Tips for Your Trip</h4>
      <ul>
        ${result.tips.map(t => `<li>${t}</li>`).join("")}
      </ul>
    </div>
  `;

  content.innerHTML = html;
  section.classList.add("visible");
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ── Event Handlers ─────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  renderActivityChips();

  document.getElementById("generate-btn").addEventListener("click", () => {
    const vacationType = document.getElementById("vacation-type").value;
    const duration = document.getElementById("duration").value;
    const selectedActivities = getSelectedActivities();
    const errorEl = document.getElementById("error-message");

    // Validation
    if (!vacationType) {
      errorEl.textContent = "Please select a vacation type.";
      errorEl.classList.add("visible");
      return;
    }
    if (!duration) {
      errorEl.textContent = "Please select a trip duration.";
      errorEl.classList.add("visible");
      return;
    }
    if (selectedActivities.length === 0) {
      errorEl.textContent = "Please select at least one activity.";
      errorEl.classList.add("visible");
      return;
    }
    errorEl.classList.remove("visible");

    const result = generateItinerary(vacationType, duration, selectedActivities);
    if (!result) {
      errorEl.textContent = "Not enough activities to generate an itinerary. Please select more activities.";
      errorEl.classList.add("visible");
      return;
    }

    renderItinerary(result, vacationType, duration, selectedActivities);
  });
});
