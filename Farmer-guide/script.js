document.addEventListener("DOMContentLoaded", function () {
  const cropData = [
    {
      name: "Apple",
      nitrogen: "20.80",
      phosphorus: "134.22",
      potassium: "199.89",
      temperature: "22.63",
      humidity: "92.33",
      pH: "5.93",
      rainfall: "112.65",
    },
    {
      name: "Banana",
      nitrogen: "100.23",
      phosphorus: "82.01",
      potassium: "50.05",
      temperature: "27.38",
      humidity: "80.36",
      pH: "5.98",
      rainfall: "104.63",
    },
    {
      name: "Blackgram",
      nitrogen: "40.02",
      phosphorus: "67.47",
      potassium: "19.24",
      temperature: "29.97",
      humidity: "65.12",
      pH: "7.13",
      rainfall: "67.88",
    },
    {
      name: "Chickpea",
      nitrogen: "40.09",
      phosphorus: "67.79",
      potassium: "79.92",
      temperature: "18.87",
      humidity: "16.86",
      pH: "7.34",
      rainfall: "80.06",
    },
    {
      name: "Coconut",
      nitrogen: "21.98",
      phosphorus: "16.93",
      potassium: "30.59",
      temperature: "27.41",
      humidity: "94.84",
      pH: "5.98",
      rainfall: "175.69",
    },
    {
      name: "Coffee",
      nitrogen: "101.20",
      phosphorus: "28.74",
      potassium: "29.94",
      temperature: "25.54",
      humidity: "58.87",
      pH: "6.81",
      rainfall: "158.07",
    },
    {
      name: "Cotton",
      nitrogen: "117.77",
      phosphorus: "46.24",
      potassium: "19.56",
      temperature: "23.99",
      humidity: "79.84",
      pH: "6.92",
      rainfall: "80.09",
    },
    {
      name: "Grapes",
      nitrogen: "23.18",
      phosphorus: "132.53",
      potassium: "200.11",
      temperature: "23.87",
      humidity: "81.87",
      pH: "6.25",
      rainfall: "69.91",
    },
    {
      name: "Jute",
      nitrogen: "78.40",
      phosphorus: "46.86",
      potassium: "39.99",
      temperature: "24.96",
      humidity: "79.64",
      pH: "6.73",
      rainfall: "174.79",
    },
    {
      name: "Lentil",
      nitrogen: "18.77",
      phosphorus: "68.36",
      potassium: "19.41",
      temperature: "24.51",
      humidity: "64.80",
      pH: "6.99",
      rainfall: "45.68",
    },
    {
      name: "Maize",
      nitrogen: "77.76",
      phosphorus: "48.44",
      potassium: "19.79",
      temperature: "22.61",
      humidity: "65.92",
      pH: "6.26",
      rainfall: "84.76",
    },
    {
      name: "Mango",
      nitrogen: "20.07",
      phosphorus: "27.18",
      potassium: "29.92",
      temperature: "31.90",
      humidity: "50.05",
      pH: "5.77",
      rainfall: "94.99",
    },
    {
      name: "Mothbeans",
      nitrogen: "21.44",
      phosphorus: "48.01",
      potassium: "20.23",
      temperature: "28.52",
      humidity: "53.16",
      pH: "6.85",
      rainfall: "51.22",
    },
    {
      name: "Mungbean",
      nitrogen: "20.99",
      phosphorus: "47.28",
      potassium: "19.87",
      temperature: "28.27",
      humidity: "85.95",
      pH: "6.74",
      rainfall: "48.44",
    },
    {
      name: "Muskmelon",
      nitrogen: "100.32",
      phosphorus: "17.72",
      potassium: "50.08",
      temperature: "28.66",
      humidity: "92.34",
      pH: "6.36",
      rainfall: "24.69",
    },
    {
      name: "Orange",
      nitrogen: "19.58",
      phosphorus: "16.55",
      potassium: "10.01",
      temperature: "22.77",
      humidity: "92.50",
      pH: "7.01",
      rainfall: "110.41",
    },
    {
      name: "Papaya",
      nitrogen: "49.88",
      phosphorus: "59.05",
      potassium: "50.04",
      temperature: "33.72",
      humidity: "92.40",
      pH: "6.74",
      rainfall: "142.63",
    },
    {
      name: "Pigeonpeas",
      nitrogen: "20.73",
      phosphorus: "67.73",
      potassium: "20.29",
      temperature: "27.74",
      humidity: "48.06",
      pH: "5.79",
      rainfall: "149.46",
    },
    {
      name: "Pomegranate",
      nitrogen: "18.87",
      phosphorus: "18.75",
      potassium: "40.21",
      temperature: "21.84",
      humidity: "90.13",
      pH: "6.43",
      rainfall: "107.53",
    },
    {
      name: "Rice",
      nitrogen: "79.89",
      phosphorus: "47.58",
      potassium: "39.87",
      temperature: "23.69",
      humidity: "82.27",
      pH: "6.43",
      rainfall: "236.18",
    },
    {
      name: "Watermelon",
      nitrogen: "99.42",
      phosphorus: "17.00",
      potassium: "50.22",
      temperature: "25.59",
      humidity: "85.16",
      pH: "6.50",
      rainfall: "50.79",
    },
    {
      name: "Kidneybeans",
      nitrogen: "20.75",
      phosphorus: "67.54",
      potassium: "20.05",
      temperature: "20.05",
      humidity: "21.61",
      pH: "5.78",
      rainfall: "105.92",
    },
  ];

  const tableBody = document
    .getElementById("crop-table")
    .getElementsByTagName("tbody")[0];
  cropData.forEach((crop) => {
    let row = tableBody.insertRow();
    Object.values(crop).forEach((text) => {
      let cell = row.insertCell();
      cell.appendChild(document.createTextNode(text));
    });
  });
});

function toggleDropdown() {
  document.getElementById("dropdownContent").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function showCrop(crop) {
  const cropInfo = document.getElementById("cropInfo");
  let content = "";

 if (crop === "rice") {
  content = `
    <h2>🌾 Rice Cultivation Guide</h2>

    <h3>📌 1. Introduction</h3>
    <p><strong>Rice (Oryza sativa)</strong> is a globally important staple crop. This guide walks you through growing rice from preparation to harvesting.</p>

    <h3>🧰 2. Materials Needed</h3>
    <ul>
      <li><strong>Seeds:</strong> High-quality certified rice seeds</li>
      <li><strong>Fertilizers:</strong> NPK (Nitrogen, Phosphorus, Potassium)</li>
      <li><strong>Irrigation:</strong> Flooding system or controlled irrigation</li>
      <li><strong>Machinery:</strong> Tractor, transplanting tools, or sickles</li>
      <li><strong>Pest Control:</strong> Proper herbicides and pesticides</li>
    </ul>

    <h3>🛠️ 3. Preparation</h3>
    <p><strong>Soil:</strong> Clay-loam soil, pH 5.5–6.5. Till and level the field.</p>
    <p><strong>Seed Treatment:</strong> Use pest-resistant, high-yielding varieties. Treat seeds with fungicides.</p>
    <p><strong>Field Layout:</strong> Build bunds (raised borders) to retain water evenly.</p>

    <h3>🌱 4. Planting</h3>
    <p><strong>Season:</strong> Plant during the rainy season (May–June).</p>
    <p><strong>Spacing:</strong> 20 x 15 cm for transplanted seedlings. Sow 2–3 cm deep for direct seeding.</p>
    <ul>
      <li><strong>Direct Seeding:</strong> Sow seeds directly into field.</li>
      <li><strong>Transplanting:</strong> Move seedlings after 20–30 days from nursery to field.</li>
    </ul>

    <h3>🌿 5. Care & Management</h3>
    <p><strong>Watering:</strong> Maintain 5–10 cm of standing water. Reduce near maturity.</p>
    <p><strong>Fertilizer:</strong> Split nitrogen doses into 3 stages: planting, tillering, panicle initiation.</p>
    <p><strong>Weeding:</strong> Weed at 15–20 days and again at 40 days post-transplanting.</p>
    <p><strong>Pest Control:</strong> Watch for stem borers, hoppers. Use IPM and appropriate chemicals.</p>

    <h3>🔍 6. Special Growth Stage Care</h3>
    <ul>
      <li><strong>Seedling:</strong> Protect from nursery diseases</li>
      <li><strong>Vegetative:</strong> Ensure consistent watering and nutrients</li>
      <li><strong>Flowering:</strong> Apply last fertilizer dose and ensure proper water level</li>
    </ul>

    <h3>🌾 7. Harvesting</h3>
    <p><strong>When:</strong> Grains should be 80–90% golden yellow.</p>
    <p><strong>How:</strong> Use sickles for small farms; harvesters for large fields.</p>
    <p><strong>After:</strong> Dry grains to 14% moisture, then thresh and winnow.</p>

    <h3>🏠 8. Post-Harvest Storage</h3>
    <p><strong>Storage:</strong> Keep in a cool, dry, ventilated area. Moisture < 14%.</p>
    <p><strong>Processing:</strong> Optional milling for husk removal</p>
    <p><strong>Packaging:</strong> Use sealed bags to avoid pests</p>

    <h3>⚠️ 9. Challenges & Tips</h3>
    <p><strong>Challenges:</strong> Pests, water scarcity, unpredictable climate</p>
    <p><strong>Solutions:</strong> Use IPM, water management, climate-resilient varieties</p>
  `;
}


if (crop === "maize") {
  content = `
    <h2>🌽 Maize Cultivation Guide</h2>

    <h3>📌 1. Introduction</h3>
    <p><strong>Maize (Zea mays)</strong>, also called corn, is a key cereal crop cultivated globally. This guide covers the steps from seed selection to harvest.</p>

    <h3>🧰 2. Required Resources</h3>
    <ul>
      <li><strong>Seeds:</strong> Certified hybrid or open-pollinated maize seeds</li>
      <li><strong>Fertilizers:</strong> NPK (Nitrogen, Phosphorus, Potassium)</li>
      <li><strong>Tools:</strong> Tractor or manual tools for land prep</li>
      <li><strong>Pest Control:</strong> Herbicides & insecticides for common maize pests</li>
      <li><strong>Irrigation:</strong> Drip/furrow system for dry regions</li>
    </ul>

    <h3>🛠️ 3. Land & Seed Prep</h3>
    <p><strong>Soil:</strong> Loamy, well-drained soil with pH 5.8–7.0.</p>
    <p><strong>Seed Treatment:</strong> Use drought & pest-resistant seeds; treat with fungicides.</p>
    <p><strong>Field Layout:</strong> Ensure level field with proper row spacing.</p>

    <h3>🌱 4. Planting Guidelines</h3>
    <p><strong>Season:</strong> Early rainy season (April–June).</p>
    <p><strong>Spacing:</strong> 20–25 cm within rows, 60–75 cm between rows.</p>
    <p><strong>Depth:</strong> Sow 2–5 cm deep.</p>
    <p><strong>Method:</strong> Direct seeding (manual or mechanized).</p>

    <h3>🌿 5. Growth & Crop Care</h3>
    <p><strong>Watering:</strong> Regular watering during silking & tasseling.</p>
    <p><strong>Fertilizer:</strong> Split nitrogen doses: planting, early growth, tasseling.</p>
    <p><strong>Weeding:</strong> Manual or chemical control at 15–20 days, then 30–40 days.</p>
    <p><strong>Pest Management:</strong> Monitor for borers, armyworms, aphids. Use IPM.</p>

    <h3>🔍 6. Stage-Wise Care</h3>
    <ul>
      <li><strong>Seedling Stage:</strong> Protect from drought & insects</li>
      <li><strong>Vegetative Stage:</strong> Boost with nitrogen fertilizer</li>
      <li><strong>Silking Stage:</strong> Ensure full moisture & pest safety</li>
      <li><strong>Grain-Filling:</strong> Avoid drought & promote kernel maturity</li>
    </ul>

    <h3>🌽 7. Harvesting</h3>
    <p><strong>When:</strong> Kernels mature, husk dries, 20–25% moisture</p>
    <p><strong>How:</strong> Hand-picking or mechanical harvesting</p>
    <p><strong>Post-Harvest:</strong> Dry to 13–14% moisture, then shell & clean</p>

    <h3>🏠 8. Storage & Processing</h3>
    <p><strong>Storage:</strong> Cool, dry, ventilated area</p>
    <p><strong>Processing:</strong> Optional drying/milling</p>
    <p><strong>Packaging:</strong> Airtight bags/containers</p>

    <h3>⚠️ 9. Challenges & Tips</h3>
    <p><strong>Challenges:</strong> Weather shifts, pest pressure, water stress</p>
    <p><strong>Solutions:</strong> Use IPM, monitor soil, plant resilient varieties</p>
  `;
}


 if (crop === "jute") {
  content = `
    <h2>🧵 Jute Cultivation Guide</h2>

    <h3>📌 1. Introduction</h3>
    <p><strong>Jute</strong> is a major fibrous crop used in textiles and eco-friendly packaging. This guide covers the complete process from seed to fiber extraction.</p>

    <h3>🧰 2. Materials & Resources</h3>
    <ul>
      <li><strong>Seeds:</strong> Certified Corchorus olitorius or capsularis varieties</li>
      <li><strong>Fertilizers:</strong> Organic compost + NPK</li>
      <li><strong>Tools:</strong> Manual tools or tractors for field prep</li>
      <li><strong>Pest Control:</strong> Herbicides & pesticides for jute pests</li>
      <li><strong>Irrigation:</strong> Controlled water or flooding setup</li>
    </ul>

    <h3>🛠️ 3. Land & Seed Preparation</h3>
    <p><strong>Soil:</strong> Loamy/sandy-loam with good drainage (pH 6.0–7.5)</p>
    <p><strong>Seed Treatment:</strong> Soak seeds for 24 hrs for better germination</p>
    <p><strong>Field Layout:</strong> Level field with bunds to retain water</p>

    <h3>🌱 4. Planting</h3>
    <p><strong>Time:</strong> With the start of monsoon (March–May)</p>
    <p><strong>Spacing:</strong> 25–30 cm between rows, 1–2 cm seed depth</p>
    <p><strong>Methods:</strong> 
      <ul>
        <li><strong>Broadcasting:</strong> Scatter seeds</li>
        <li><strong>Row Planting:</strong> Better for weeding and management</li>
      </ul>
    </p>

    <h3>🌿 5. Crop Growth & Care</h3>
    <p><strong>Watering:</strong> Keep soil moist early on; avoid waterlogging</p>
    <p><strong>Fertilizer:</strong> Apply NPK at sowing; top-dress nitrogen after thinning (20–25 days)</p>
    <p><strong>Weeding:</strong> First weeding at 15–20 days, second at 30–40 days</p>
    <p><strong>Pests:</strong> Caterpillars, aphids, stem rot. Use IPM methods</p>

    <h3>🔍 6. Stage-Wise Care</h3>
    <ul>
      <li><strong>Seedling Stage:</strong> Moisture + early pest control</li>
      <li><strong>Vegetative:</strong> Thin to 5–7 cm spacing. Boost with nitrogen</li>
      <li><strong>Fiber Maturity:</strong> Watch for yellowing lower leaves</li>
    </ul>

    <h3>✂️ 7. Harvesting</h3>
    <p><strong>When:</strong> 10–12 ft tall, lower leaves yellowing (~100–120 days)</p>
    <p><strong>How:</strong> Cut at base using sickle or knife before flowering</p>
    <p><strong>Retting:</strong> Submerge bundles in slow-flowing water for 10–15 days. Check daily for fiber readiness</p>

    <h3>🏠 8. Post-Harvest & Storage</h3>
    <p><strong>After Retting:</strong> Wash, dry in sun, sort & bundle</p>
    <p><strong>Storage:</strong> Store in dry, ventilated area to prevent mold</p>
    <p><strong>Packaging:</strong> Use dry bundles to maintain fiber quality</p>

    <h3>⚠️ 9. Challenges & Tips</h3>
    <p><strong>Challenges:</strong> Water stress, retting issues, pests</p>
    <p><strong>Solutions:</strong> Efficient irrigation, proper pest control, water monitoring during retting</p>
  `;
}
if (crop === "jute") {
  content = `
    <h2>🧵 Jute Cultivation Guide</h2>

    <h3>📌 1. Introduction</h3>
    <p><strong>Jute</strong> is a major fibrous crop used in textiles and eco-friendly packaging. This guide covers the complete process from seed to fiber extraction.</p>

    <h3>🧰 2. Materials & Resources</h3>
    <ul>
      <li><strong>Seeds:</strong> Certified Corchorus olitorius or capsularis varieties</li>
      <li><strong>Fertilizers:</strong> Organic compost + NPK</li>
      <li><strong>Tools:</strong> Manual tools or tractors for field prep</li>
      <li><strong>Pest Control:</strong> Herbicides & pesticides for jute pests</li>
      <li><strong>Irrigation:</strong> Controlled water or flooding setup</li>
    </ul>

    <h3>🛠️ 3. Land & Seed Preparation</h3>
    <p><strong>Soil:</strong> Loamy/sandy-loam with good drainage (pH 6.0–7.5)</p>
    <p><strong>Seed Treatment:</strong> Soak seeds for 24 hrs for better germination</p>
    <p><strong>Field Layout:</strong> Level field with bunds to retain water</p>

    <h3>🌱 4. Planting</h3>
    <p><strong>Time:</strong> With the start of monsoon (March–May)</p>
    <p><strong>Spacing:</strong> 25–30 cm between rows, 1–2 cm seed depth</p>
    <p><strong>Methods:</strong> 
      <ul>
        <li><strong>Broadcasting:</strong> Scatter seeds</li>
        <li><strong>Row Planting:</strong> Better for weeding and management</li>
      </ul>
    </p>

    <h3>🌿 5. Crop Growth & Care</h3>
    <p><strong>Watering:</strong> Keep soil moist early on; avoid waterlogging</p>
    <p><strong>Fertilizer:</strong> Apply NPK at sowing; top-dress nitrogen after thinning (20–25 days)</p>
    <p><strong>Weeding:</strong> First weeding at 15–20 days, second at 30–40 days</p>
    <p><strong>Pests:</strong> Caterpillars, aphids, stem rot. Use IPM methods</p>

    <h3>🔍 6. Stage-Wise Care</h3>
    <ul>
      <li><strong>Seedling Stage:</strong> Moisture + early pest control</li>
      <li><strong>Vegetative:</strong> Thin to 5–7 cm spacing. Boost with nitrogen</li>
      <li><strong>Fiber Maturity:</strong> Watch for yellowing lower leaves</li>
    </ul>

    <h3>✂️ 7. Harvesting</h3>
    <p><strong>When:</strong> 10–12 ft tall, lower leaves yellowing (~100–120 days)</p>
    <p><strong>How:</strong> Cut at base using sickle or knife before flowering</p>
    <p><strong>Retting:</strong> Submerge bundles in slow-flowing water for 10–15 days. Check daily for fiber readiness</p>

    <h3>🏠 8. Post-Harvest & Storage</h3>
    <p><strong>After Retting:</strong> Wash, dry in sun, sort & bundle</p>
    <p><strong>Storage:</strong> Store in dry, ventilated area to prevent mold</p>
    <p><strong>Packaging:</strong> Use dry bundles to maintain fiber quality</p>

    <h3>⚠️ 9. Challenges & Tips</h3>
    <p><strong>Challenges:</strong> Water stress, retting issues, pests</p>
    <p><strong>Solutions:</strong> Efficient irrigation, proper pest control, water monitoring during retting</p>
  `;
}


 if (crop === "cotton") {
  content = `
    <h2>🧺 Cotton Cultivation Guide</h2>

    <h3>📌 1. Introduction</h3>
    <p><strong>Cotton</strong> is a vital fiber crop used in the textile industry. This guide walks through the process from seed selection to post-harvest handling.</p>

    <h3>🧰 2. Materials & Resources</h3>
    <ul>
      <li><strong>Seeds:</strong> Certified Bt or pest-resistant cotton seeds</li>
      <li><strong>Fertilizers:</strong> NPK + micronutrients</li>
      <li><strong>Irrigation:</strong> Drip/furrow systems for dry regions</li>
      <li><strong>Pest Control:</strong> Herbicides, IPM methods, and sprayers</li>
      <li><strong>Tools:</strong> Tractor or hand tools for prep</li>
    </ul>

    <h3>🛠️ 3. Soil & Seed Prep</h3>
    <p><strong>Soil:</strong> Sandy-loam, well-drained, pH 6.0–7.5</p>
    <p><strong>Seed Treatment:</strong> Treat with fungicides/insecticides</p>
    <p><strong>Land Prep:</strong> Plow deeply, create furrows/beds, ensure drainage</p>

    <h3>🌱 4. Planting</h3>
    <p><strong>Time:</strong> March–May (spring season)</p>
    <p><strong>Spacing:</strong> 75–100 cm (rows), 25–30 cm (plants), depth 3–5 cm</p>
    <p><strong>Method:</strong> Direct seeding using drills or by hand</p>

    <h3>🌿 5. Crop Management</h3>
    <p><strong>Watering:</strong> Maintain moisture during flowering & boll stages</p>
    <p><strong>Fertilizers:</strong> Apply nitrogen in 3 parts (planting, vegetative, flowering)</p>
    <p><strong>Weeds:</strong> Remove weeds at 20–30 & 45 days after sowing</p>
    <p><strong>Pests:</strong> Bollworms, aphids, whiteflies — manage using IPM</p>

    <h3>🔍 6. Growth Stage Care</h3>
    <ul>
      <li><strong>Seedling:</strong> Keep moist & pest-free</li>
      <li><strong>Vegetative:</strong> Ensure nitrogen supply for leaf/root growth</li>
      <li><strong>Flowering & Bolling:</strong> Critical stage — moisture & pest care</li>
    </ul>

    <h3>✂️ 7. Harvesting</h3>
    <p><strong>Time:</strong> 150–180 days post-planting, when bolls fully open</p>
    <p><strong>Technique:</strong> Manual picking or mechanical harvesters</p>
    <p><strong>Post-Harvest:</strong> Dry in shade, clean, and gin the cotton</p>

    <h3>🏠 8. Post-Harvest Handling</h3>
    <p><strong>Storage:</strong> Keep fibers in dry, ventilated places</p>
    <p><strong>Processing:</strong> Ginning for fiber separation</p>
    <p><strong>Packaging:</strong> Bale packaging to protect fiber quality</p>

    <h3>⚠️ 9. Challenges & Solutions</h3>
    <p><strong>Challenges:</strong> Pest attacks, drought, nutrient depletion</p>
    <p><strong>Solutions:</strong> Use drought-tolerant seeds, proper irrigation, IPM practices</p>
  `;
}


  if (crop === "coconut") {
  content = `
    <h2>🥥 Coconut Cultivation Guide</h2>

    <h3>📌 1. Introduction</h3>
    <p><strong>Coconut (Cocos nucifera)</strong> is a tropical palm cultivated for its multipurpose fruit — used in oil, milk, fiber, and more.</p>

    <h3>🧰 2. Materials & Resources Required</h3>
    <ul>
      <li><strong>Seeds:</strong> Dwarf or tall, high-yield, disease-resistant seedlings</li>
      <li><strong>Fertilizers:</strong> Organic manure + NPK + micronutrients</li>
      <li><strong>Irrigation:</strong> Drip or basin systems for dry zones</li>
      <li><strong>Pest Control:</strong> Biocontrol agents or coconut-specific pesticides</li>
      <li><strong>Tools:</strong> Spade, weeding tools, sprayers</li>
    </ul>

    <h3>🌱 3. Soil & Seedling Preparation</h3>
    <p><strong>Soil:</strong> Well-drained sandy loam, pH 5.5–7.5</p>
    <p><strong>Planting Pit:</strong> 1m x 1m x 1m, filled with soil + compost + manure</p>
    <p><strong>Seedling:</strong> Use disease-resistant dwarf (easy harvest) or tall (drought-tolerant) varieties</p>

    <h3>🪴 4. Planting</h3>
    <p><strong>Time:</strong> Best during the rainy season, or year-round with irrigation</p>
    <p><strong>Spacing:</strong> 7.5–9 m for tall, 6.5–7 m for dwarf types</p>
    <p><strong>Method:</strong> Plant in center of pit, collar above ground level</p>

    <h3>🌿 5. Crop Care & Growth Stages</h3>
    <p><strong>Watering:</strong> Regular watering for 3 years, then weekly (esp. in dry months)</p>
    <p><strong>Fertilizers:</strong> Apply NPK 3 times/year + micronutrients like Mg & B</p>
    <p><strong>Weeds:</strong> Regular weeding + mulching to retain moisture</p>
    <p><strong>Pests:</strong> Watch for <em>rhinoceros beetles, red palm weevils</em> — use IPM or biocontrols</p>

    <h3>🧪 6. Growth Stage Specific Tips</h3>
    <ul>
      <li><strong>Seedling Stage:</strong> Ensure strong watering & nutrients</li>
      <li><strong>Juvenile Stage:</strong> Promote canopy and root development</li>
      <li><strong>Mature Stage:</strong> Focus on irrigation and yield improvement</li>
    </ul>

    <h3>✂️ 7. Harvesting</h3>
    <p><strong>Time:</strong> 12 months after flowering, every 45–60 days for high-yield trees</p>
    <p><strong>Method:</strong> Use climbers or tools to manually harvest ripe, brown-husked coconuts</p>
    <p><strong>Post-Harvest:</strong> Dehusk and dry if using for copra or oil</p>

    <h3>🏠 8. Storage & Processing</h3>
    <p><strong>Storage:</strong> Store in dry, ventilated spaces to prevent mold</p>
    <p><strong>Processing:</strong> Dry coconut meat (copra) in sunlight or mechanical dryers</p>
    <p><strong>Packaging:</strong> Use sacks or crates to protect fruits during transport</p>

    <h3>⚠️ 9. Challenges & Solutions</h3>
    <p><strong>Problems:</strong> Drought, nutrient loss, pests (e.g., root wilt, beetles)</p>
    <p><strong>Fixes:</strong> Install drip irrigation, apply compost annually, and use IPM techniques</p>
  `;
}


  if (crop === "chickpea") {
  content = `
    <h2>🌱 Chickpea Cultivation Guide</h2>

    <h3>📌 1. Introduction</h3>
    <p><strong>Chickpea (Cicer arietinum)</strong> is a protein-rich legume grown in many regions. It comes in two types: Desi and Kabuli.</p>

    <h3>🧰 2. Materials & Resources</h3>
    <ul>
      <li><strong>Seeds:</strong> Desi/Kabuli, disease-resistant</li>
      <li><strong>Fertilizers:</strong> Mainly phosphorus; chickpeas fix nitrogen</li>
      <li><strong>Irrigation:</strong> Drip/sprinkler in dry zones</li>
      <li><strong>Pest Control:</strong> Herbicides, pesticides for common chickpea pests</li>
      <li><strong>Tools:</strong> Tractors, plows, sprayers</li>
    </ul>

    <h3>🌾 3. Field & Soil Preparation</h3>
    <p><strong>Soil:</strong> Loamy, well-drained, pH 6.0–7.5</p>
    <p><strong>Preparation:</strong> Plow and harrow for fine tilth and good root penetration</p>
    <p><strong>Seed Treatment:</strong> Use rhizobium inoculant + fungicide</p>

    <h3>🌱 4. Planting Process</h3>
    <ul>
      <li><strong>Season:</strong> October–November (cool, dry)</li>
      <li><strong>Spacing:</strong> 30–40 cm between plants, 45–60 cm between rows</li>
      <li><strong>Depth:</strong> 5–8 cm depending on soil moisture</li>
      <li><strong>Method:</strong> Direct seeding with seed drill or by hand</li>
    </ul>

    <h3>💧 5. Growth Care</h3>
    <p><strong>Watering:</strong> Minimal; water only during flowering & pod filling if dry</p>
    <p><strong>Nutrition:</strong> Basal phosphorus; minimal N unless soil lacks it</p>
    <p><strong>Weeding:</strong> Remove weeds at 20–30 and 45–50 days</p>
    <p><strong>Pests:</strong> Control <em>pod borers, aphids, cutworms</em> using IPM</p>

    <h3>🌿 6. Growth Stage Tips</h3>
    <ul>
      <li><strong>Seedling:</strong> Moderate moisture, pest protection</li>
      <li><strong>Vegetative:</strong> Focus on phosphorus supply</li>
      <li><strong>Flowering & Pod Filling:</strong> Ensure moisture, protect pods</li>
    </ul>

    <h3>✂️ 7. Harvesting</h3>
    <p><strong>When:</strong> Plants turn yellow, pods dry — about 3–4 months after planting</p>
    <p><strong>Method:</strong> Hand-harvest or use combine harvester</p>
    <p><strong>Post-Harvest:</strong> Sun-dry → Thresh → Clean for storage/sale</p>

    <h3>🏠 8. Storage & Packaging</h3>
    <p><strong>Storage:</strong> Cool, dry place with airflow; avoid insects</p>
    <p><strong>Processing:</strong> Grade and clean seeds</p>
    <p><strong>Packaging:</strong> Use breathable gunny bags</p>

    <h3>⚠️ 9. Challenges & Solutions</h3>
    <p><strong>Problems:</strong> Pests, wilt, water stress, nutrient issues</p>
    <p><strong>Solutions:</strong> IPM, resistant seeds, moisture control, soil testing</p>
  `;
}


  if (crop === "pigeonpeas") {
  content = `
    <h2> Pigeon Pea Cultivation Guide</h2>

    <h3>📌 1. Introduction</h3>
    <p><strong>Pigeon Peas (Cajanus cajan)</strong> are drought-tolerant legumes known for their high protein content. Widely used in Indian cuisine and dryland farming.</p>

    <h3>🧰 2. Materials & Resources</h3>
    <ul>
      <li><strong>Seeds:</strong> Disease-resistant varieties (early, medium, late)</li>
      <li><strong>Fertilizers:</strong> Mainly phosphorus and potassium (minimal nitrogen needed)</li>
      <li><strong>Irrigation:</strong> Drip or furrow in dry zones</li>
      <li><strong>Pest Control:</strong> Herbicides & pesticides for common pests</li>
      <li><strong>Tools:</strong> Tractors, plows, sprayers</li>
    </ul>

    <h3>🌾 3. Soil & Field Prep</h3>
    <p><strong>Soil:</strong> Sandy loam to clay loam, well-drained, pH 6.0–7.5</p>
    <p><strong>Preparation:</strong> Plow + harrow for fine seedbed</p>
    <p><strong>Seed Treatment:</strong> Fungicide-treated, region-suitable seeds</p>

    <h3>🌱 4. Planting</h3>
    <ul>
      <li><strong>Time:</strong> Start of rainy season (or dry season in tropics)</li>
      <li><strong>Spacing:</strong> 30–40 cm between plants, 60–75 cm rows</li>
      <li><strong>Depth:</strong> 3–5 cm depending on moisture</li>
      <li><strong>Method:</strong> Direct seeding (hand or seed drill)</li>
    </ul>

    <h3>💧 5. Crop Care</h3>
    <p><strong>Water:</strong> Minimal; irrigate during flowering & pod filling if dry</p>
    <p><strong>Nutrition:</strong> Basal P & K; add N only if needed. Compost boosts soil health.</p>
    <p><strong>Weeding:</strong> Manual or herbicide at early stage; mulching helps too</p>
    <p><strong>Pests:</strong> Watch for pod borers, aphids, whiteflies → Use IPM</p>

    <h3>🌿 6. Growth Stage Tips</h3>
    <ul>
      <li><strong>Seedling:</strong> Keep soil moist and control early pests</li>
      <li><strong>Vegetative:</strong> Ensure sufficient phosphorus and potassium</li>
      <li><strong>Flowering/Pod-Filling:</strong> Maintain soil moisture to boost yield</li>
    </ul>

    <h3>✂️ 7. Harvesting</h3>
    <p><strong>When:</strong> Pods mature and dry (typically 4–6 months after planting)</p>
    <p><strong>How:</strong> Hand-harvest plants or pods; combine harvester for large fields</p>
    <p><strong>Post-Harvest:</strong> Sun-dry → Thresh → Clean seeds</p>

    <h3>🏠 8. Storage & Processing</h3>
    <p><strong>Storage:</strong> Dry, ventilated area to avoid spoilage and insects</p>
    <p><strong>Processing:</strong> Clean & grade before packing</p>
    <p><strong>Packaging:</strong> Use breathable jute or cloth bags</p>

    <h3>⚠️ 9. Challenges & Solutions</h3>
    <p><strong>Problems:</strong> Pests, diseases, nutrient stress</p>
    <p><strong>Solutions:</strong> Crop rotation, IPM, resistant seeds, proper soil care</p>
  `;
}


  if (crop === "mothbeans") {
  content = `
    <h2>🌱 Moth Bean Cultivation Guide</h2>

    <h3>📌 1. Introduction</h3>
    <p><strong>Moth Beans (Vigna aconitifolia)</strong> are drought-tolerant legumes grown mainly in arid regions. High in protein, they’re used in various dishes and fit well in dryland farming.</p>

    <h3>🧰 2. Materials & Resources</h3>
    <ul>
      <li><strong>Seeds:</strong> Certified, high-yielding, drought-resistant types</li>
      <li><strong>Fertilizers:</strong> Phosphorus, Potassium (minimal nitrogen needed)</li>
      <li><strong>Irrigation:</strong> Drip/furrow for dry areas</li>
      <li><strong>Pest Control:</strong> Herbicides and pesticides for common pests</li>
      <li><strong>Tools:</strong> Tractors or hand tools for prep, weeding, sowing</li>
    </ul>

    <h3>🌾 3. Soil & Field Preparation</h3>
    <p><strong>Soil:</strong> Sandy loam/clay, well-drained, pH 6.0–8.0</p>
    <p><strong>Preparation:</strong> Plow + harrow → fine seedbed → clear weeds/debris</p>
    <p><strong>Seed Treatment:</strong> Treat seeds with fungicide/insecticide</p>

    <h3>🌱 4. Planting</h3>
    <ul>
      <li><strong>Time:</strong> Monsoon onset (June–July)</li>
      <li><strong>Spacing:</strong> 30–45 cm between plants, 60–75 cm rows</li>
      <li><strong>Depth:</strong> 3–5 cm</li>
      <li><strong>Method:</strong> Direct sowing (by hand or seed drill)</li>
    </ul>

    <h3>💧 5. Crop Care</h3>
    <p><strong>Water:</strong> Needs little, but water during flowering/pod filling boosts yield</p>
    <p><strong>Nutrition:</strong> Add P and K at planting. Use compost for soil health.</p>
    <p><strong>Weeding:</strong> Weed early → manual/herbicide → mulch helps retain moisture</p>
    <p><strong>Pests:</strong> Watch aphids, pod borers, leafhoppers → Use IPM</p>

    <h3>🌀 6. Growth Stage Care</h3>
    <ul>
      <li><strong>Seedling:</strong> Moderate moisture, pest-free environment</li>
      <li><strong>Vegetative:</strong> Support with phosphorus/potassium</li>
      <li><strong>Flowering/Pod-filling:</strong> Ensure consistent water to maximize output</li>
    </ul>

    <h3>✂️ 7. Harvesting</h3>
    <p><strong>Time:</strong> 90–120 days after sowing, when pods dry and mature</p>
    <p><strong>How:</strong> Hand-pick or cut plants. Use harvesters on large farms.</p>
    <p><strong>Post-harvest:</strong> Sun-dry → thresh → clean seeds</p>

    <h3>🏠 8. Storage & Processing</h3>
    <p><strong>Storage:</strong> Dry, well-ventilated area → prevent spoilage/insects</p>
    <p><strong>Processing:</strong> Clean & grade before packing</p>
    <p><strong>Packaging:</strong> Use breathable bags or containers</p>

    <h3>⚠️ 9. Challenges & Solutions</h3>
    <p><strong>Problems:</strong> Pests, disease, harsh weather</p>
    <p><strong>Solutions:</strong> Use drought-resistant seeds, follow IPM, maintain healthy soil</p>
  `;
}


if (crop === "mungbean") {
  content = `
    <h2>🌱 Mung Bean Cultivation</h2>

    <h3>📘 1. Introduction</h3>
    <p><strong>Mung Beans (Vigna radiata)</strong> are small, protein-rich legumes valued for nutrition and drought tolerance. This guide outlines steps from soil prep to harvest.</p>

    <h3>🧰 2. Materials & Resources</h3>
    <ul>
      <li>🌾 <strong>Seeds:</strong> High-quality, disease-resistant varieties</li>
      <li>🌿 <strong>Fertilizers:</strong> Phosphorus, Potassium; minimal Nitrogen needed</li>
      <li>💧 <strong>Irrigation:</strong> Drip/Furrow systems</li>
      <li>🐛 <strong>Pest Control:</strong> Herbicides & pesticides for common pests</li>
      <li>🛠️ <strong>Tools:</strong> Tractors or hand tools</li>
    </ul>

    <h3>🚜 3. Preparation</h3>
    <h4>🧱 Soil:</h4>
    <p>Well-drained sandy loam with pH 6.0–7.5; plow and harrow to fine tilth.</p>

    <h4>🌱 Seed Selection:</h4>
    <p>Choose local-adapted, disease-resistant seeds. Treat with fungicide.</p>

    <h4>🏞️ Field Prep:</h4>
    <p>Weed-free field with good seed-soil contact.</p>

    <h3>🌾 4. Planting</h3>
    <ul>
      <li><strong>🕒 Time:</strong> April–June or onset of monsoon</li>
      <li><strong>📏 Spacing:</strong> 30–40 cm apart; rows 45–60 cm apart</li>
      <li><strong>📥 Depth:</strong> Sow 2–4 cm deep</li>
      <li><strong>🌿 Method:</strong> Direct seeding with drill or by hand</li>
    </ul>

    <h3>🌱 5. Growth & Care</h3>
    <h4>💧 Watering:</h4>
    <p>Keep soil moist, especially during germination & flowering. Avoid waterlogging.</p>

    <h4>🌾 Nutrients:</h4>
    <p>Apply P & K at planting. Use compost or organic matter to enrich soil.</p>

    <h4>🧹 Weed Control:</h4>
    <p>Manual weeding or herbicides in early stages. Mulching helps too.</p>

    <h4>🐛 Pests & Diseases:</h4>
    <p>Watch for aphids, beetles, thrips. Use IPM or light pesticides.</p>

    <h3>🔍 6. Stage-wise Care</h3>
    <ul>
      <li><strong>🌿 Seedling:</strong> Moisture and pest protection</li>
      <li><strong>🌿 Vegetative:</strong> Nutrient-rich soil for strong growth</li>
      <li><strong>🌸 Flowering/Pod-Filling:</strong> Ensure consistent moisture</li>
    </ul>

    <h3>🌾 7. Harvesting</h3>
    <ul>
      <li><strong>⏰ Time:</strong> 60–90 days after planting, when pods dry</li>
      <li><strong>✂️ Techniques:</strong> Hand-pick or use harvester</li>
      <li><strong>🌤️ Drying:</strong> Sun-dry plants before threshing</li>
    </ul>

    <h3>📦 8. Post-Harvest</h3>
    <ul>
      <li>🏠 <strong>Storage:</strong> Dry, cool, ventilated area</li>
      <li>🧼 <strong>Processing:</strong> Clean, grade, and pack</li>
      <li>📦 <strong>Packaging:</strong> Use breathable bags/containers</li>
    </ul>

    <h3>⚠️ 9. Challenges & Solutions</h3>
    <ul>
      <li><strong>Common Issues:</strong> Pests, drought, root rot</li>
      <li><strong>Solutions:</strong> IPM, moisture control, resistant varieties</li>
    </ul>
  `;
}


if (crop === "blackgram") {
  content = `
    <h2>🌱 Black Gram Cultivation</h2>

    <h3>📘 1. Introduction</h3>
    <p><strong>Black Gram (Vigna mungo)</strong> is a protein-rich legume used in many dishes. This guide walks through the complete process from seed to harvest.</p>

    <h3>🧰 2. Materials & Resources</h3>
    <ul>
      <li>🌾 <strong>Seeds:</strong> Disease-resistant, high-quality seeds</li>
      <li>🌿 <strong>Fertilizers:</strong> Phosphorus & Potassium (low Nitrogen)</li>
      <li>💧 <strong>Irrigation:</strong> Drip or furrow systems</li>
      <li>🐛 <strong>Pest Control:</strong> Herbicides & pesticides</li>
      <li>🛠️ <strong>Tools:</strong> Tractors or hand tools</li>
    </ul>

    <h3>🚜 3. Preparation</h3>
    <h4>🧱 Soil:</h4>
    <p>Well-drained sandy/clay loam, pH 6.0–7.5. Plow & harrow to fine tilth.</p>

    <h4>🌱 Seed Selection:</h4>
    <p>Use resistant varieties. Treat seeds with fungicides/insecticides.</p>

    <h4>🏞️ Field Prep:</h4>
    <p>Remove weeds and level field for even germination.</p>

    <h3>🌾 4. Planting</h3>
    <ul>
      <li><strong>🕒 Time:</strong> June–July (start of monsoon or dry season)</li>
      <li><strong>📏 Spacing:</strong> 30–45 cm between plants, 60–75 cm row spacing</li>
      <li><strong>📥 Depth:</strong> Sow 3–5 cm deep</li>
      <li><strong>🌿 Method:</strong> Direct seeding (by drill or hand)</li>
    </ul>

    <h3>🌱 5. Growth & Care</h3>
    <h4>💧 Watering:</h4>
    <p>Moisture needed during germination and flowering. Avoid overwatering.</p>

    <h4>🌾 Nutrient Management:</h4>
    <p>Apply phosphorus & potassium during planting. Organic matter helps fertility.</p>

    <h4>🧹 Weed Control:</h4>
    <p>Weed early using manual methods or herbicides. Mulching helps too.</p>

    <h4>🐛 Pests & Diseases:</h4>
    <p>Common pests: aphids, pod borers, thrips. Use IPM and biological solutions if needed.</p>

    <h3>🔍 6. Stage-wise Care</h3>
    <ul>
      <li><strong>🌱 Seedling:</strong> Moisture + pest protection</li>
      <li><strong>🌿 Vegetative:</strong> Nutrient support for foliage & root health</li>
      <li><strong>🌸 Flowering & Pod-Filling:</strong> Ensure soil moisture for better yield</li>
    </ul>

    <h3>🌾 7. Harvesting</h3>
    <ul>
      <li><strong>⏰ Time:</strong> 60–90 days after sowing when pods are dry</li>
      <li><strong>✂️ Methods:</strong> Hand-pick pods or use combine harvester</li>
      <li><strong>🌤️ Drying:</strong> Sun-dry plants before threshing</li>
    </ul>

    <h3>📦 8. Post-Harvest</h3>
    <ul>
      <li>🏠 <strong>Storage:</strong> Dry, well-ventilated area</li>
      <li>🧼 <strong>Processing:</strong> Clean and grade before packing</li>
      <li>📦 <strong>Packaging:</strong> Use breathable containers or bags</li>
    </ul>

    <h3>⚠️ 9. Challenges & Solutions</h3>
    <ul>
      <li><strong>Issues:</strong> Pest attacks, disease, poor rainfall</li>
      <li><strong>Fixes:</strong> Use IPM, resistant seeds, and soil moisture control</li>
    </ul>
  `;
}


if (crop === "lentil") {
  content = `
    <h2>🌿 Lentil Cultivation</h2>

    <h3>📘 1. Introduction</h3>
    <p><strong>Lentils (Lens culinaris)</strong> are protein- and fiber-rich legumes, widely grown and consumed across many cultures. This guide covers the complete process from seed to harvest.</p>

    <h3>🧰 2. Materials & Resources Required</h3>
    <ul>
      <li>🌾 <strong>Seeds:</strong> High-quality, disease-resistant varieties</li>
      <li>🌿 <strong>Fertilizers:</strong> Mainly phosphorus & potassium (low nitrogen)</li>
      <li>💧 <strong>Irrigation:</strong> Drip or furrow system</li>
      <li>🐛 <strong>Pest Control:</strong> Herbicides, pesticides, IPM</li>
      <li>🛠️ <strong>Tools:</strong> Tractors or hand tools</li>
    </ul>

    <h3>🚜 3. Preparation Steps</h3>
    <h4>🧱 Soil:</h4>
    <p>Well-drained loamy/sandy soil, pH 6.0–7.5. Plow and harrow for fine seedbed.</p>

    <h4>🌱 Seed Selection:</h4>
    <p>Choose local disease-resistant varieties. Treat seeds with fungicides/insecticides.</p>

    <h4>🏞️ Field Prep:</h4>
    <p>Remove weeds/debris to ensure good soil contact.</p>

    <h3>🌾 4. Planting</h3>
    <ul>
      <li><strong>🕒 Time:</strong> Early spring or late winter when soil is 10–15°C</li>
      <li><strong>📏 Spacing:</strong> 25–30 cm between plants, 45–60 cm between rows</li>
      <li><strong>📥 Depth:</strong> 2–3 cm, based on moisture</li>
      <li><strong>🌿 Method:</strong> Direct seeding using drills or hand</li>
    </ul>

    <h3>🌱 5. Growth & Care</h3>
    <h4>💧 Watering:</h4>
    <p>Minimal but critical during germination, flowering, and pod fill. Avoid water stress.</p>

    <h4>🌾 Nutrient Management:</h4>
    <p>Apply phosphorus & potassium at sowing. Organic matter boosts fertility.</p>

    <h4>🧹 Weed Control:</h4>
    <p>Manual weeding or herbicides during early growth. Mulch for moisture retention.</p>

    <h4>🐛 Pests & Diseases:</h4>
    <p>Watch for aphids, root rots, lygus bugs. Use IPM & biocontrols when needed.</p>

    <h3>🔍 6. Stage-wise Care</h3>
    <ul>
      <li><strong>🌱 Seedling Stage:</strong> Maintain moisture, protect from pests</li>
      <li><strong>🌿 Vegetative Stage:</strong> Monitor for nutrients and weeds</li>
      <li><strong>🌸 Flowering & Pod Filling:</strong> Ensure consistent moisture for best yield</li>
    </ul>

    <h3>🌾 7. Harvesting</h3>
    <ul>
      <li><strong>⏰ Time:</strong> 80–100 days after planting, when pods are dry and brown</li>
      <li><strong>✂️ Techniques:</strong> Hand harvest or combine harvester</li>
      <li><strong>🌤️ Drying:</strong> Sun-dry before threshing to reduce moisture</li>
    </ul>

    <h3>📦 8. Post-Harvest Management</h3>
    <ul>
      <li>🏠 <strong>Storage:</strong> Cool, dry, ventilated place</li>
      <li>🧼 <strong>Processing:</strong> Clean and grade for quality</li>
      <li>📦 <strong>Packaging:</strong> Use breathable containers</li>
    </ul>

    <h3>⚠️ 9. Challenges & Solutions</h3>
    <ul>
      <li><strong>Issues:</strong> Pest attacks, disease, and moisture stress</li>
      <li><strong>Fixes:</strong> Use IPM, good drainage, disease-resistant varieties</li>
    </ul>
  `;
}

if (crop === "pomegranate") {
  content = `
    <h2> Pomegranate Cultivation</h2>

    <h3>📘 1. Introduction</h3>
    <p><strong>Pomegranates (Punica granatum)</strong> are vibrant, nutritious fruits grown widely in warm climates. This guide covers planting to harvest for optimal yield.</p>

    <h3>🧰 2. Materials & Resources</h3>
    <ul>
      <li>🌱 <strong>Seedlings:</strong> Healthy, disease-resistant plants from nurseries</li>
      <li>🌿 <strong>Fertilizers:</strong> Balanced NPK-based fertilizers</li>
      <li>💧 <strong>Irrigation:</strong> Drip or furrow irrigation systems</li>
      <li>🛡️ <strong>Pest Control:</strong> Insecticides and fungicides</li>
      <li>🛠️ <strong>Tools:</strong> Pruners, planting and weeding equipment</li>
    </ul>

    <h3>🚜 3. Preparation Steps</h3>
    <h4>🧱 Soil Preparation:</h4>
    <p>Well-drained sandy/loam soil with pH 5.5–7.0. Plow and enrich with compost.</p>

    <h4>🌱 Seedling Selection:</h4>
    <p>Pick disease-resistant varieties suited for your region. Soak seeds overnight if used.</p>

    <h4>🏞️ Field Setup:</h4>
    <p>Remove weeds/stones. Ensure a clean planting area.</p>

    <h3>🌳 4. Planting</h3>
    <ul>
      <li><strong>🕒 Time:</strong> Spring (post-frost)</li>
      <li><strong>📏 Spacing:</strong> 5–8 feet between plants</li>
      <li><strong>📥 Depth:</strong> Plant seedlings 1–2 inches deep</li>
      <li><strong>🌱 Method:</strong> Direct seeding or transplanting</li>
    </ul>

    <h3>🌱 5. Growth & Care</h3>
    <h4>💧 Watering:</h4>
    <p>Regular deep watering early on; drought-tolerant when mature.</p>

    <h4>🌿 Nutrient Management:</h4>
    <p>Fertilize early spring & late summer. Compost boosts soil health.</p>

    <h4>🧹 Weed Control:</h4>
    <p>Use mulch and hand-weeding to keep area clean.</p>

    <h4>🐛 Pest & Disease Control:</h4>
    <p>Monitor for aphids, whiteflies, butterflies. Use IPM and organic sprays.</p>

    <h3>🌸 6. Stage-wise Special Care</h3>
    <ul>
      <li><strong>🌱 Seedling:</strong> Protect from pests and temperature extremes</li>
      <li><strong>🌿 Vegetative:</strong> Monitor growth and nutrient levels</li>
      <li><strong>🍎 Flowering/Fruit Set:</strong> Provide consistent watering for fruit quality</li>
    </ul>

    <h3>🌾 7. Harvesting</h3>
    <ul>
      <li><strong>⏰ Timing:</strong> 5–7 months after flowering</li>
      <li><strong>✂️ Techniques:</strong> Use sharp pruners to avoid bruising</li>
      <li><strong>📦 Handling:</strong> Store in cool, dry place to extend shelf life</li>
    </ul>

    <h3>📦 8. Post-Harvest Management</h3>
    <ul>
      <li>🏠 <strong>Storage:</strong> Cool, ventilated environment</li>
      <li>🧼 <strong>Processing:</strong> Clean and sort fruits, discard damaged ones</li>
      <li>📦 <strong>Packaging:</strong> Use breathable crates or boxes</li>
    </ul>

    <h3>⚠️ 9. Challenges & Solutions</h3>
    <ul>
      <li><strong>Common Issues:</strong> Drought, pests, diseases</li>
      <li><strong>Fixes:</strong> Use IPM, disease-resistant varieties, monitor irrigation</li>
    </ul>
  `;
}


if (crop === "watermelon") {
  content = `
    <h2>🍉 Watermelon Cultivation</h2>

    <h3>📘 1. Introduction</h3>
    <p><strong>Watermelons (Citrullus lanatus)</strong> are juicy summer fruits known for their high water content and refreshing taste. This guide explains the full process from planting to harvest.</p>

    <h3>🧰 2. Materials & Resources</h3>
    <ul>
      <li>🌱 <strong>Planting Material:</strong> High-quality seeds or seedlings</li>
      <li>🌿 <strong>Fertilizers:</strong> Balanced NPK fertilizers & compost</li>
      <li>💧 <strong>Irrigation:</strong> Drip or sprinkler system</li>
      <li>🐛 <strong>Pest Control:</strong> Insecticides, fungicides, IPM</li>
      <li>🛠️ <strong>Tools:</strong> Tractors, shovels, pruners, hoes</li>
    </ul>

    <h3>🚜 3. Field Preparation</h3>
    <h4>🧱 Soil:</h4>
    <p>Well-drained sandy loam with pH 6.0–6.8. Till and mix compost for better fertility.</p>

    <h4>🌱 Seed/Seedling Selection:</h4>
    <p>Use disease-resistant, climate-appropriate varieties. Soak seeds to improve germination.</p>

    <h4>🏞️ Field Setup:</h4>
    <p>Clear weeds and debris for a clean planting area.</p>

    <h3>🌿 4. Planting Procedure</h3>
    <ul>
      <li><strong>🕒 Time:</strong> Post-frost, when soil ≥ 21°C (70°F)</li>
      <li><strong>📏 Spacing:</strong> 3–5 ft between plants, 6–8 ft between rows</li>
      <li><strong>📥 Depth:</strong> Plant seeds/seedlings 1 inch deep</li>
      <li><strong>🌿 Method:</strong> Direct seeding or transplanting from nursery</li>
    </ul>

    <h3>🌱 5. Growth & Care</h3>
    <h4>💧 Watering:</h4>
    <p>Water consistently, especially during fruit set. Avoid wetting fruit to prevent rot.</p>

    <h4>🌿 Nutrient Management:</h4>
    <p>Apply balanced NPK at sowing and during vine growth. Use compost or mulch for added benefits.</p>

    <h4>🧹 Weed Control:</h4>
    <p>Use mulch and manual weeding to suppress weed growth.</p>

    <h4>🐛 Pest & Disease Management:</h4>
    <p>Watch for aphids, beetles, and spider mites. Prevent mildew with resistant varieties and IPM strategies.</p>

    <h3>🔍 6. Stage-wise Care</h3>
    <ul>
      <li><strong>🌱 Seedling Stage:</strong> Use row covers for frost and pest protection</li>
      <li><strong>🌿 Vegetative Stage:</strong> Ensure nutrients are available for healthy vines</li>
      <li><strong>🍉 Fruit Stage:</strong> Ensure consistent watering, avoid direct water on fruit</li>
    </ul>

    <h3>🌾 7. Harvesting</h3>
    <ul>
      <li><strong>⏰ Time:</strong> 70–90 days after planting</li>
      <li><strong>🔍 Signs:</strong> Yellow belly, dull skin, hollow sound</li>
      <li><strong>✂️ Method:</strong> Use knife or pruners, leave 2–3" stem</li>
    </ul>

    <h3>📦 8. Post-Harvest Management</h3>
    <ul>
      <li>🏠 <strong>Storage:</strong> Keep in cool, dry shade. Refrigerate for longer life</li>
      <li>🧃 <strong>Processing:</strong> Can be made into juice, smoothies, or pickles</li>
      <li>📦 <strong>Packaging:</strong> Use breathable crates to reduce bruising</li>
    </ul>

    <h3>⚠️ 9. Challenges & Solutions</h3>
    <ul>
      <li><strong>Common Issues:</strong> Pests, mildew, poor drainage, drought</li>
      <li><strong>Solutions:</strong> Use resistant varieties, proper spacing, mulching, and IPM</li>
    </ul>
  `;
}


if (crop === "kidneybeans") {
  content = `
    <h2>🌰 Kidney Bean Cultivation</h2>

    <h3>📘 1. Introduction</h3>
    <p><strong>Kidney beans (Phaseolus vulgaris)</strong> are high-protein legumes widely used in cooking. This guide explains the step-by-step process from seed to harvest.</p>

    <h3>🧰 2. Materials & Resources</h3>
    <ul>
      <li>🌱 <strong>Seeds:</strong> Disease-resistant, high-quality varieties</li>
      <li>🌿 <strong>Fertilizers:</strong> Phosphorus & potassium; minimal nitrogen</li>
      <li>💧 <strong>Irrigation:</strong> Drip or sprinkler system</li>
      <li>🐛 <strong>Pest Control:</strong> Herbicides, pesticides, IPM methods</li>
      <li>🛠️ <strong>Tools:</strong> Tractors, weeders, seed drills, etc.</li>
    </ul>

    <h3>🚜 3. Field Preparation</h3>
    <h4>🧱 Soil:</h4>
    <p>Loamy, well-drained soils with pH 6.0–7.0. Plow and harrow to achieve fine tilth.</p>

    <h4>🌱 Seed Selection & Treatment:</h4>
    <p>Use treated, disease-resistant seeds. Treat with fungicide/insecticide if needed.</p>

    <h4>🏞️ Layout:</h4>
    <p>Remove weeds, level field, and mark rows for even spacing and airflow.</p>

    <h3>🌿 4. Planting Procedure</h3>
    <ul>
      <li><strong>🕒 Time:</strong> Early spring when soil is ≥ 15°C (59°F)</li>
      <li><strong>📏 Spacing:</strong> 8–10 cm between plants, 45–60 cm between rows</li>
      <li><strong>📥 Depth:</strong> 3–5 cm</li>
      <li><strong>🌿 Method:</strong> Direct seeding by hand or seed drill</li>
    </ul>

    <h3>🌱 5. Growth & Care</h3>
    <h4>💧 Watering:</h4>
    <p>Regular irrigation needed during flowering and pod filling. Avoid overwatering.</p>

    <h4>🌿 Nutrients:</h4>
    <p>Use phosphorus & potassium fertilizers. Avoid excess nitrogen. Add micronutrients if required.</p>

    <h4>🧹 Weeding:</h4>
    <p>Critical in early stages. Use mulching or herbicides to suppress weeds.</p>

    <h4>🐛 Pest & Disease:</h4>
    <p>Watch for aphids, beetles, blight. Use IPM, crop rotation, and drainage management.</p>

    <h3>🔍 6. Stage-wise Care</h3>
    <ul>
      <li><strong>🌱 Seedling:</strong> Protect from pests, maintain soil moisture</li>
      <li><strong>🌿 Vegetative:</strong> Support leaf/stem growth with nutrients</li>
      <li><strong>🌼 Pod Filling:</strong> Provide consistent moisture for quality yield</li>
    </ul>

    <h3>🌾 7. Harvesting</h3>
    <ul>
      <li><strong>⏰ Time:</strong> 90–120 days after planting</li>
      <li><strong>🧭 Signs:</strong> Pods dry and fully matured</li>
      <li><strong>✂️ Method:</strong> Hand-pull or combine harvester</li>
    </ul>

    <h3>📦 8. Post-Harvest & Storage</h3>
    <ul>
      <li>☀️ <strong>Drying:</strong> Sun-dry plants before threshing</li>
      <li>🏠 <strong>Storage:</strong> Keep beans in a dry, cool, ventilated space</li>
      <li>🧼 <strong>Cleaning:</strong> Thresh, clean, and grade for quality</li>
      <li>📦 <strong>Packaging:</strong> Use breathable bags to maintain freshness</li>
    </ul>

    <h3>⚠️ 9. Challenges & Solutions</h3>
    <ul>
      <li><strong>Problems:</strong> Pest attacks, diseases, nutrient deficiencies</li>
      <li><strong>Solutions:</strong> IPM, soil health management, proper irrigation</li>
    </ul>
  `;
}


if (crop === "banana") {
  content = `
    <h2>🍌 Banana Cultivation</h2>

    <h3>📘 1. Introduction</h3>
    <p><strong>Bananas (Musa spp.)</strong> are sweet, tropical fruits rich in nutrients and widely cultivated in warm, humid climates. This guide covers everything from planting to harvesting.</p>

    <h3>🧰 2. Materials & Resources</h3>
    <ul>
      <li>🌱 <strong>Planting Material:</strong> Healthy suckers or tissue-cultured plantlets</li>
      <li>🌿 <strong>Fertilizers:</strong> Balanced NPK and organic compost</li>
      <li>💧 <strong>Irrigation:</strong> Drip or sprinkler systems</li>
      <li>🐛 <strong>Pest Control:</strong> Insecticides, fungicides, IPM methods</li>
      <li>🛠️ <strong>Tools:</strong> Shovels, pruners, or tractors</li>
    </ul>

    <h3>🚜 3. Field & Soil Preparation</h3>
    <h4>🧱 Soil:</h4>
    <p>Rich, loamy, well-drained soil with pH 5.5–7.0. Add compost to improve fertility.</p>

    <h4>🌱 Plant Selection:</h4>
    <p>Use disease-free suckers or lab-grown plantlets. Sanitize tools to prevent disease spread.</p>

    <h4>🏞️ Field Setup:</h4>
    <p>Remove debris and weeds for a clean planting bed.</p>

    <h3>🌿 4. Planting Procedure</h3>
    <ul>
      <li>🕒 <strong>Time:</strong> Start of rainy season or during warm weather</li>
      <li>📏 <strong>Spacing:</strong> 8–10 ft between plants, 10–12 ft between rows</li>
      <li>📥 <strong>Depth:</strong> Same depth as in nursery</li>
      <li>🌿 <strong>Method:</strong> Transplant into prepared pits</li>
    </ul>

    <h3>🌱 5. Growth & Care</h3>
    <h4>💧 Watering:</h4>
    <p>Regular irrigation required, especially in dry periods. Aim for 1–2 inches/week.</p>

    <h4>🌿 Nutrient Management:</h4>
    <p>Apply balanced NPK in spring and mid-season. Add mulch or compost regularly.</p>

    <h4>🧹 Weed Control:</h4>
    <p>Use mulch and manual weeding to minimize competition and preserve moisture.</p>

    <h4>🐛 Pest & Disease Management:</h4>
    <p>Watch for banana weevils and leaf spot. Use IPM, resistant varieties, and sanitation.</p>

    <h3>🔍 6. Stage-wise Care</h3>
    <ul>
      <li><strong>🌱 Seedling:</strong> Use shade cloth if needed, protect from pests</li>
      <li><strong>🌿 Vegetative:</strong> Monitor nutrients, especially potassium and magnesium</li>
      <li><strong>🍌 Flowering/Fruit:</strong> Ensure consistent moisture for healthy fruiting</li>
    </ul>

    <h3>🌾 7. Harvesting</h3>
    <ul>
      <li>⏰ <strong>Time:</strong> 9–12 months after planting</li>
      <li>🧭 <strong>Signs:</strong> Full size, pronounced angle between fruit and stalk</li>
      <li>✂️ <strong>Technique:</strong> Cut entire bunch with a knife or machete</li>
    </ul>

    <h3>📦 8. Post-Harvest Handling</h3>
    <ul>
      <li>🏠 <strong>Handling:</strong> Remove excess leaves, store in cool shade</li>
      <li>☀️ <strong>Storage:</strong> Keep at room temperature; avoid sunlight</li>
      <li>🧃 <strong>Processing:</strong> Make chips, purée, or other products</li>
      <li>📦 <strong>Packaging:</strong> Use breathable boxes for transport</li>
    </ul>

    <h3>⚠️ 9. Challenges & Solutions</h3>
    <ul>
      <li><strong>Issues:</strong> Pest/disease outbreaks, weather stress, poor irrigation</li>
      <li><strong>Fix:</strong> Use resistant varieties, follow IPM, maintain good drainage</li>
    </ul>
  `;
}


if (crop === "mango") {
  content = `
    <h2>🥭 Mango Cultivation</h2>

    <h3>📘 1. Introduction</h3>
    <p><strong>Mangoes (Mangifera indica)</strong> are tropical fruits known as the "King of Fruits" for their sweet flavor and rich nutrients. This guide covers the full journey—from planting to harvest.</p>

    <h3>🧰 2. Materials & Resources</h3>
    <ul>
      <li>🌱 <strong>Planting Material:</strong> Healthy grafts or seedlings</li>
      <li>🌿 <strong>Fertilizers:</strong> NPK mix, compost, and organic matter</li>
      <li>💧 <strong>Irrigation:</strong> Drip or sprinkler system</li>
      <li>🐛 <strong>Pest Control:</strong> Insecticides, fungicides, IPM tools</li>
      <li>🛠️ <strong>Tools:</strong> Pruners, shovels, tractors</li>
    </ul>

    <h3>🚜 3. Field & Soil Preparation</h3>
    <h4>🧱 Soil:</h4>
    <p>Sandy loam to loamy soil with pH 5.5–7.5. Mix in compost to boost fertility and drainage.</p>

    <h4>🌱 Seedling Selection:</h4>
    <p>Use disease-free, climate-suitable grafts or seedlings. Soak seeds for better germination if applicable.</p>

    <h4>🏞️ Field Setup:</h4>
    <p>Clear weeds, debris, and stones for a clean planting site.</p>

    <h3>🌿 4. Planting Procedure</h3>
    <ul>
      <li>🕒 <strong>Time:</strong> Start of the rainy season or warmer months</li>
      <li>📏 <strong>Spacing:</strong> 25–30 ft between trees</li>
      <li>📥 <strong>Depth:</strong> Same as nursery level</li>
      <li>🌿 <strong>Method:</strong> Dig larger holes and gently backfill to avoid air pockets</li>
    </ul>

    <h3>🌱 5. Growth & Care</h3>
    <h4>💧 Watering:</h4>
    <p>Water regularly for young plants. Mature trees are drought-tolerant but benefit from watering during flowering and fruiting.</p>

    <h4>🌿 Nutrients:</h4>
    <p>Apply balanced fertilizer in spring and mid-season. Use compost or mulch to improve soil health.</p>

    <h4>🧹 Weeding:</h4>
    <p>Manual weeding or mulching helps prevent weed competition and conserves moisture.</p>

    <h4>🐛 Pest & Disease Control:</h4>
    <p>Watch for mango weevils, fruit flies, and aphids. Use resistant varieties, sanitation, and IPM practices.</p>

    <h3>🌀 6. Stage-wise Care</h3>
    <ul>
      <li><strong>🌱 Seedling:</strong> Protect from wind, sun, and pests. Use shade nets if needed.</li>
      <li><strong>🌿 Vegetative:</strong> Prune for strong structure and check for nutrient deficiencies.</li>
      <li><strong>🌸 Flowering & Fruiting:</strong> Ensure regular moisture to support fruit set and quality.</li>
    </ul>

    <h3>🌾 7. Harvesting</h3>
    <ul>
      <li>⏰ <strong>Time:</strong> 3–6 months after flowering (depends on variety)</li>
      <li>🧭 <strong>Signs:</strong> Full color, firm texture, and fruity aroma</li>
      <li>✂️ <strong>Method:</strong> Use pruners or knife; leave a small stem on fruit</li>
    </ul>

    <h3>📦 8. Post-Harvest & Storage</h3>
    <ul>
      <li>🏠 <strong>Handling:</strong> Store in cool, shaded areas; avoid rough handling</li>
      <li>☀️ <strong>Ripening:</strong> Ripen at room temperature; refrigerate after ripening</li>
      <li>🧃 <strong>Processing:</strong> Make puree, jam, dried mango</li>
      <li>📦 <strong>Packaging:</strong> Use breathable boxes for freshness in transport</li>
    </ul>

    <h3>⚠️ 9. Challenges & Solutions</h3>
    <ul>
      <li><strong>Challenges:</strong> Pest infestations, drought, nutrient issues</li>
      <li><strong>Solutions:</strong> Adopt IPM, maintain soil health, and use resistant varieties</li>
    </ul>
  `;
}


if (crop === "grapes") {
  content = `
    <h2>🍇 Grape Cultivation</h2>

    <h3>📘 1. Introduction</h3>
    <p><strong>Grapes (Vitis vinifera)</strong> are versatile fruits grown for fresh consumption, raisins, and winemaking. This guide covers the full process from planting to harvest.</p>

    <h3>🧰 2. Materials & Resources</h3>
    <ul>
      <li>🌱 <strong>Planting Material:</strong> Healthy grafted vines (bare-root or potted)</li>
      <li>🌿 <strong>Fertilizers:</strong> NPK mix and organic compost</li>
      <li>💧 <strong>Irrigation:</strong> Drip irrigation for efficiency</li>
      <li>🐛 <strong>Pest Control:</strong> Insecticides, fungicides, and IPM</li>
      <li>🛠️ <strong>Tools:</strong> Pruners, shovels, trellis system</li>
    </ul>

    <h3>🚜 3. Field & Soil Preparation</h3>
    <h4>🧱 Soil:</h4>
    <p>Sandy loam or clay loam, well-drained, with pH 6.0–6.8. Add compost for fertility and aeration.</p>

    <h4>🌱 Vine Selection:</h4>
    <p>Choose climate-appropriate, disease-resistant varieties (table or wine grapes). Inspect for damage before planting.</p>

    <h4>🏞️ Field Setup:</h4>
    <p>Clear weeds/debris. Plan row spacing and install trellises or stakes.</p>

    <h3>🌿 4. Planting Procedure</h3>
    <ul>
      <li>🕒 <strong>Time:</strong> Early spring or late fall</li>
      <li>📏 <strong>Spacing:</strong> 6–10 ft between plants, 8–10 ft between rows</li>
      <li>📥 <strong>Depth:</strong> Same as nursery level</li>
      <li>🌿 <strong>Method:</strong> Transplant and water thoroughly</li>
    </ul>

    <h3>🌱 5. Growth & Care</h3>
    <h4>💧 Watering:</h4>
    <p>Regular watering in the first year. Once established, irrigate during dry spells—especially at fruiting stage.</p>

    <h4>🌿 Nutrient Management:</h4>
    <p>Apply NPK in early spring and mid-season. Use compost to enrich soil.</p>

    <h4>🧹 Weeding:</h4>
    <p>Mulch or hand weed to avoid competition for nutrients.</p>

    <h4>🐛 Pest & Disease Control:</h4>
    <p>Watch for aphids, mites, moths. Prevent mildew with IPM and proper pruning. Use resistant varieties when possible.</p>

    <h3>🌀 6. Stage-wise Care</h3>
    <ul>
      <li><strong>🌱 Young Vines:</strong> Stake and protect from pests or harsh weather</li>
      <li><strong>🌿 Vegetative:</strong> Prune regularly to improve airflow and reduce disease</li>
      <li><strong>🍇 Flowering & Fruit Set:</strong> Ensure moisture, remove excess clusters for quality</li>
    </ul>

    <h3>🌾 7. Harvesting</h3>
    <ul>
      <li>⏰ <strong>Time:</strong> 4–6 months after flowering</li>
      <li>🧭 <strong>Signs:</strong> Rich color, sweet taste, firm texture</li>
      <li>✂️ <strong>Method:</strong> Use pruning shears to cut clusters without damaging vines</li>
    </ul>

    <h3>📦 8. Post-Harvest & Storage</h3>
    <ul>
      <li>🏠 <strong>Handling:</strong> Remove damaged fruit and store in shade</li>
      <li>❄️ <strong>Storage:</strong> Keep in a cool, dry space; refrigerate for longer shelf life</li>
      <li>🧃 <strong>Processing:</strong> Juice, jelly, raisins, or wine</li>
      <li>📦 <strong>Packaging:</strong> Use breathable crates to avoid spoilage</li>
    </ul>

    <h3>⚠️ 9. Challenges & Solutions</h3>
    <ul>
      <li><strong>Issues:</strong> Mildew, pests, nutrient deficiencies, water stress</li>
      <li><strong>Fix:</strong> Practice IPM, maintain irrigation, prune regularly, and monitor climate conditions</li>
    </ul>
  `;
}


if (crop === "muskmelon") {
  content = `
    <h2>🍈 Muskmelon (Cantaloupe) Cultivation</h2>

    <h3>📘 1. Introduction</h3>
    <p>Muskmelons (Cucumis melo var. cantaloupe) are sweet, aromatic fruits perfect for warm climates. This guide explains the full cultivation process from seed to harvest.</p>

    <h3>🧰 2. Materials & Resources</h3>
    <ul>
      <li>🌱 <strong>Seeds/Seedlings:</strong> High-quality, disease-resistant from trusted sources</li>
      <li>🌿 <strong>Fertilizers:</strong> NPK mix + compost</li>
      <li>💧 <strong>Irrigation:</strong> Drip or overhead systems</li>
      <li>🐛 <strong>Pest Control:</strong> Insecticides, fungicides, and IPM practices</li>
      <li>🛠️ <strong>Tools:</strong> Hoes, pruners, shovels, or tractor equipment</li>
    </ul>

    <h3>🚜 3. Preparation Steps</h3>
    <h4>🧱 Soil:</h4>
    <p>Sandy loam or loamy soil, well-drained, pH 6.0–6.8. Mix organic matter for fertility.</p>

    <h4>🌾 Seed Prep:</h4>
    <p>Soak seeds for a few hours before sowing. Choose varieties suited for your region.</p>

    <h4>🏞️ Field Prep:</h4>
    <p>Clear weeds and debris for a clean growing bed.</p>

    <h3>🌿 4. Planting</h3>
    <ul>
      <li>🕒 <strong>When:</strong> After last frost, soil temp > 21°C (70°F)</li>
      <li>📏 <strong>Spacing:</strong> 3–4 ft between plants, 6–8 ft between rows</li>
      <li>📥 <strong>Method:</strong> Direct seed or transplant healthy seedlings</li>
    </ul>

    <h3>🌱 5. Growth & Care</h3>
    <h4>💧 Watering:</h4>
    <p>1–2 inches/week. Critical during flowering and fruiting. Avoid wetting fruits directly.</p>

    <h4>🌿 Nutrients:</h4>
    <p>Apply NPK at planting, again during vine development. Use compost or mulch for health.</p>

    <h4>🧹 Weed Control:</h4>
    <p>Mulching + hand weeding helps reduce competition and keeps moisture in.</p>

    <h4>🐛 Pest/Disease Management:</h4>
    <p>Watch for aphids, beetles, mildew. Use resistant varieties, clean practices, and biological controls as part of IPM.</p>

    <h3>🌀 6. Growth Stages</h3>
    <ul>
      <li><strong>🌱 Seedling:</strong> Protect from cold and pests; row covers help.</li>
      <li><strong>🌿 Vegetative:</strong> Check nutrients, train vines if needed.</li>
      <li><strong>🍈 Fruit Development:</strong> Ensure regular moisture. Avoid waterlogging. Support fruit if needed.</li>
    </ul>

    <h3>🌾 7. Harvesting</h3>
    <ul>
      <li>⏰ <strong>Time:</strong> 70–90 days after planting</li>
      <li>🔍 <strong>Ready Signs:</strong> Skin turns yellowish, netting visible, strong sweet smell</li>
      <li>✂️ <strong>Method:</strong> Use sharp tools to cut with stem attached</li>
    </ul>

    <h3>📦 8. Post-Harvest</h3>
    <ul>
      <li>🏠 <strong>Handling:</strong> Handle gently to avoid bruises</li>
      <li>❄️ <strong>Storage:</strong> Keep at room temp till ripe; refrigerate after</li>
      <li>🍹 <strong>Processing:</strong> Great for smoothies, salads, desserts</li>
      <li>📦 <strong>Packaging:</strong> Use breathable crates or netted bags</li>
    </ul>

    <h3>⚠️ 9. Challenges & Solutions</h3>
    <ul>
      <li><strong>Issues:</strong> Pests, mildew, drought, poor drainage</li>
      <li><strong>Fix:</strong> IPM practices, proper irrigation, disease-resistant varieties, good field hygiene</li>
    </ul>
  `;
}


if (crop === "apple") {
  content = `
    <h2>🍎 Apple Cultivation</h2>

    <h3>📘 1. Introduction</h3>
    <p><strong>Apples (Malus domestica)</strong> are among the most popular and nutritious fruits worldwide. This guide covers everything from soil prep to harvest, ideal for temperate climates.</p>

    <h3>🧰 2. Materials & Resources</h3>
    <ul>
      <li>🌱 <strong>Planting Material:</strong> Grafted apple saplings or high-quality seedlings</li>
      <li>🌿 <strong>Fertilizers:</strong> Balanced NPK mix, organic compost</li>
      <li>💧 <strong>Irrigation:</strong> Drip lines or hose systems for controlled watering</li>
      <li>🐛 <strong>Pest Control:</strong> Insecticides, fungicides, and IPM practices</li>
      <li>🛠️ <strong>Tools:</strong> Pruners, hoes, shovels, harvest crates</li>
    </ul>

    <h3>🚜 3. Preparation Steps</h3>
    <h4>🧱 Soil:</h4>
    <p>Well-drained loamy soil, pH 6.0–7.0. Add compost and till the land before planting.</p>

    <h4>🌳 Tree Selection:</h4>
    <p>Use climate-suitable, disease-resistant cultivars. Inspect for health and proper grafting.</p>

    <h4>🏞️ Field Setup:</h4>
    <p>Clear weeds, stones, and debris. Mark spacing before planting rows.</p>

    <h3>🌿 4. Planting Procedure</h3>
    <ul>
      <li>🕒 <strong>Best Time:</strong> Fall or early spring while dormant</li>
      <li>📏 <strong>Spacing:</strong> 4–6 ft for dwarf; 10–15 ft for standard trees</li>
      <li>📥 <strong>Method:</strong> Dig wide holes, place roots gently, water well. Graft union should stay above soil.</li>
    </ul>

    <h3>🌱 5. Growth & Care</h3>
    <h4>💧 Watering:</h4>
    <p>Regular watering for young trees. Deep irrigation during fruiting boosts yield.</p>

    <h4>🌿 Nutrients:</h4>
    <p>Apply NPK fertilizers in early spring and mid-season. Use compost to improve soil structure.</p>

    <h4>🧹 Weed Control:</h4>
    <p>Use mulch and manual weeding to retain moisture and minimize competition.</p>

    <h4>🐛 Pest & Disease Management:</h4>
    <p>Watch for codling moths, aphids, and apple scab. Use IPM, good sanitation, and resistant varieties.</p>

    <h3>🌀 6. Stage-wise Care</h3>
    <ul>
      <li><strong>🌱 Young Tree Stage:</strong> Use tree guards for protection from animals and sunburn.</li>
      <li><strong>🌿 Vegetative Stage:</strong> Prune for shape and airflow; check nutrients.</li>
      <li><strong>🌸 Flowering & Fruiting:</strong> Keep moisture steady and thin fruit clusters for size and health.</li>
    </ul>

    <h3>🌾 7. Harvesting</h3>
    <ul>
      <li>⏰ <strong>Time:</strong> 4–6 months after flowering, depending on variety</li>
      <li>🧭 <strong>Signs:</strong> Firm texture, change in skin color, fruit detaches easily</li>
      <li>✂️ <strong>Method:</strong> Use pruning shears to clip with stem intact; avoid pulling</li>
    </ul>

    <h3>📦 8. Post-Harvest & Storage</h3>
    <ul>
      <li>🏠 <strong>Handling:</strong> Handle gently to avoid bruises</li>
      <li>❄️ <strong>Storage:</strong> Store in cool, dark, ventilated areas; refrigeration extends shelf life</li>
      <li>🍏 <strong>Processing:</strong> Use for applesauce, cider, or drying</li>
      <li>📦 <strong>Packaging:</strong> Pack in breathable crates or boxes for safe transport</li>
    </ul>

    <h3>⚠️ 9. Challenges & Solutions</h3>
    <ul>
      <li><strong>Issues:</strong> Pests, fungal infections, frost, poor pruning</li>
      <li><strong>Fix:</strong> Select hardy varieties, prune correctly, apply IPM, and protect against frost during flowering</li>
    </ul>
  `;
}


if (crop === "orange") {
  content = `
    <h2>🍊 Orange Cultivation</h2>

    <h3>📘 1. Introduction</h3>
    <p>Oranges (Citrus sinensis) are widely grown citrus fruits loved for their taste and rich vitamin C content. They grow best in warm subtropical to tropical climates. This guide walks you through growing oranges from planting to harvest.</p>

    <h3>🧰 2. Materials & Resources</h3>
    <ul>
      <li>🌱 <strong>Planting Material:</strong> Grafted seedlings or quality saplings</li>
      <li>🌿 <strong>Fertilizers:</strong> Citrus-specific NPK + compost</li>
      <li>💧 <strong>Irrigation:</strong> Drip or hose irrigation for regular watering</li>
      <li>🐛 <strong>Pest Control:</strong> Insecticides, fungicides, and IPM tools</li>
      <li>🛠️ <strong>Tools:</strong> Pruners, shovels, hoes, sprayers</li>
    </ul>

    <h3>🚜 3. Preparation Steps</h3>
    <h4>🧱 Soil:</h4>
    <p>Well-drained sandy or clay loam soil with pH 6.0–7.5. Enrich with compost before planting.</p>

    <h4>🌳 Tree Selection:</h4>
    <p>Pick disease-resistant varieties based on your local climate and harvest timing. Avoid weak or damaged plants.</p>

    <h4>🏞️ Field Setup:</h4>
    <p>Clear the site of weeds and debris. Space rows for airflow and sunlight.</p>

    <h3>🌿 4. Planting</h3>
    <ul>
      <li>🕒 <strong>Time:</strong> Spring after frost risk has passed</li>
      <li>📏 <strong>Spacing:</strong> 12–25 feet depending on variety</li>
      <li>📥 <strong>Method:</strong> Dig wide holes, plant trees at nursery depth, keep graft above ground</li>
    </ul>

    <h3>🌱 5. Growth & Care</h3>
    <h4>💧 Watering:</h4>
    <p>Frequent watering for young trees; deep irrigation for mature trees during dry periods.</p>

    <h4>🌿 Nutrients:</h4>
    <p>Use citrus fertilizer in spring and mid-season. Compost improves soil structure and nutrients.</p>

    <h4>🧹 Weed Control:</h4>
    <p>Mulching + manual weeding keeps soil moist and roots healthy.</p>

    <h4>🐛 Pest & Disease:</h4>
    <p>Monitor aphids, citrus miners, and mites. Manage citrus canker and root rot via IPM and resistant types.</p>

    <h3>🌀 6. Growth Stages</h3>
    <ul>
      <li><strong>🌱 Young Trees:</strong> Use tree guards; protect from wind, frost, and animals</li>
      <li><strong>🌿 Vegetative Stage:</strong> Monitor nutrition, shape the canopy with pruning</li>
      <li><strong>🌸 Flowering & Fruiting:</strong> Keep soil moist and thin fruits if overcrowded</li>
    </ul>

    <h3>🌾 7. Harvesting</h3>
    <ul>
      <li>⏰ <strong>When:</strong> 7–12 months after flowering, depending on variety</li>
      <li>🔍 <strong>Signs:</strong> Color change, sweetness, slight fruit softness</li>
      <li>✂️ <strong>How:</strong> Use shears to snip with a short stem attached</li>
    </ul>

    <h3>📦 8. Post-Harvest & Storage</h3>
    <ul>
      <li>🏠 <strong>Handling:</strong> Avoid bruising; store in a cool shaded place</li>
      <li>❄️ <strong>Storage:</strong> Room temp for short term, refrigeration for longer shelf life</li>
      <li>🍹 <strong>Processing:</strong> Juice, marmalade, dried slices</li>
      <li>📦 <strong>Packaging:</strong> Use ventilated crates or boxes for transport</li>
    </ul>

    <h3>⚠️ 9. Challenges & Solutions</h3>
    <ul>
      <li><strong>Problems:</strong> Citrus canker, aphids, nutrient imbalance, pruning mistakes</li>
      <li><strong>Fix:</strong> Choose hardy cultivars, prune well, use compost, monitor IPM</li>
    </ul>
  `;
}


if (crop === "papaya") {
  content = `
    <h2>🍈 Papaya Cultivation</h2>

    <h3>📘 1. Introduction</h3>
    <p>Papayas (Carica papaya) are tropical fruits known for their sweet, juicy flesh and rich orange color. They grow best in warm climates and can yield fruit year-round. This guide covers the full process from planting to harvest.</p>

    <h3>🧰 2. Materials & Resources</h3>
    <ul>
      <li>🌱 <strong>Planting Material:</strong> Seeds or disease-free seedlings</li>
      <li>🌿 <strong>Fertilizers:</strong> Balanced NPK + organic compost</li>
      <li>💧 <strong>Irrigation:</strong> Drip systems or hoses</li>
      <li>🐛 <strong>Pest Control:</strong> Insecticides, fungicides, IPM tools</li>
      <li>🛠️ <strong>Tools:</strong> Shovels, pruners, hoes, or tractors</li>
    </ul>

    <h3>🚜 3. Preparation Steps</h3>
    <h4>🧱 Soil:</h4>
    <p>Well-drained sandy/loam soil, pH 6.0–6.5. Till and enrich with compost.</p>

    <h4>🌱 Seed Selection:</h4>
    <p>Choose climate-suitable, pest-resistant varieties. Soak seeds before planting to boost germination.</p>

    <h4>🏞️ Field Prep:</h4>
    <p>Clear weeds, rocks, and debris for a clean planting area.</p>

    <h3>🌿 4. Planting Procedure</h3>
    <ul>
      <li>🕒 <strong>Time:</strong> Spring, when weather is consistently warm</li>
      <li>📏 <strong>Spacing:</strong> 6–10 ft apart for proper growth</li>
      <li>📥 <strong>Depth:</strong> 0.5–1 inch</li>
      <li>🌱 <strong>Methods:</strong> 
        <ul>
          <li>➡️ Direct Seeding: After frost risk is over</li>
          <li>➡️ Transplanting: Use 12-inch seedlings</li>
        </ul>
      </li>
    </ul>

    <h3>🌱 5. Growth & Care</h3>
    <h4>💧 Watering:</h4>
    <p>Maintain consistent moisture without waterlogging. Water regularly in dry spells.</p>

    <h4>🌿 Nutrition:</h4>
    <p>Apply balanced NPK every 4–6 weeks. Enrich soil with compost.</p>

    <h4>🧹 Weed Control:</h4>
    <p>Mulch and weed manually to preserve soil moisture and reduce competition.</p>

    <h4>🐛 Pest & Disease:</h4>
    <p>Watch for aphids, fruit flies, mildew. Use IPM (biocontrol + sanitation).</p>

    <h3>🌀 6. Special Care by Growth Stage</h3>
    <ul>
      <li><strong>🌱 Seedling:</strong> Use covers to shield from frost/insects</li>
      <li><strong>🌿 Vegetative:</strong> Monitor nutrients, prune damaged leaves</li>
      <li><strong>🍈 Fruiting:</strong> Provide steady watering; thin fruits for quality size</li>
    </ul>

    <h3>🌾 7. Harvesting</h3>
    <ul>
      <li>⏰ <strong>When:</strong> 6–12 months post-planting</li>
      <li>🔍 <strong>Signs:</strong> Yellowing skin, sweet aroma</li>
      <li>✂️ <strong>Method:</strong> Cut with a knife, leaving a short stem</li>
    </ul>

    <h3>📦 8. Post-Harvest & Storage</h3>
    <ul>
      <li>🏠 <strong>Handling:</strong> Avoid bruising, store in cool shade</li>
      <li>❄️ <strong>Storage:</strong> Ripen at room temp, refrigerate when ripe</li>
      <li>🥗 <strong>Processing:</strong> Make smoothies, salads, dried papaya</li>
      <li>📦 <strong>Packaging:</strong> Use breathable containers for transit</li>
    </ul>

    <h3>⚠️ 9. Challenges & Solutions</h3>
    <ul>
      <li><strong>Challenges:</strong> Fruit flies, root rot, drought, overwatering</li>
      <li><strong>Solutions:</strong> Use IPM, avoid water stagnation, prune regularly, pick strong varieties</li>
    </ul>
  `;
}


if (crop === "coffee") {
  content = `
    <h2>☕ Coffee Cultivation</h2>

    <h3>📘 1. Introduction</h3>
    <p>Coffee (Coffea spp.) is one of the world’s favorite beverages, prized for its aroma and energizing properties. It grows best in tropical regions at higher elevations. This guide walks you through the entire coffee-growing journey — from planting to harvesting.</p>

    <h3>🧰 2. Materials & Resources</h3>
    <ul>
      <li>🌱 <strong>Planting Material:</strong> Healthy seedlings or treated seeds</li>
      <li>🌿 <strong>Fertilizers:</strong> NPK-balanced mix + compost</li>
      <li>💧 <strong>Irrigation:</strong> Drip systems or hoses</li>
      <li>🐛 <strong>Pest Control:</strong> Insecticides, fungicides, IPM tools</li>
      <li>🛠️ <strong>Tools:</strong> Shovels, pruners, hoes, or tractors</li>
    </ul>

    <h3>🚜 3. Preparation Steps</h3>
    <h4>🧱 Soil:</h4>
    <p>Well-drained loamy soil, pH 6.0–6.5. Enrich with organic matter for better drainage and nutrition.</p>

    <h4>🌱 Seedling Selection:</h4>
    <p>Pick climate-suitable, disease-resistant varieties. Soak seeds for 24 hrs to improve germination.</p>

    <h4>🏞️ Field Prep:</h4>
    <p>Clear weeds and debris to ensure a clean, fertile planting zone.</p>

    <h3>🌿 4. Planting Procedure</h3>
    <ul>
      <li>🕒 <strong>Time:</strong> Start at the beginning of the rainy season</li>
      <li>📏 <strong>Spacing:</strong> 5–8 ft between plants for air and growth</li>
      <li>📥 <strong>Depth:</strong> Root collar should align with the soil surface</li>
      <li>🌱 <strong>Method:</strong> Transplant gently, backfill, and water well</li>
    </ul>

    <h3>🌱 5. Growth & Care</h3>
    <h4>💧 Watering:</h4>
    <p>Regular watering for young plants; mature ones need steady but not excessive moisture.</p>

    <h4>🌿 Fertilization:</h4>
    <p>Feed every 3–4 months during growth. Use compost to boost fertility naturally.</p>

    <h4>🧹 Weed Control:</h4>
    <p>Mulch and manually weed to prevent competition and conserve moisture.</p>

    <h4>🐛 Pest & Disease:</h4>
    <p>Watch for borer beetles, leaf rust, and root rot. Use IPM and resistant varieties for prevention.</p>

    <h3>🌀 6. Stage-Wise Care</h3>
    <ul>
      <li><strong>🌱 Seedling Stage:</strong> Use shade and protection from sun and pests</li>
      <li><strong>🌿 Vegetative Stage:</strong> Prune for airflow and remove diseased parts</li>
      <li><strong>☕ Flowering & Fruiting:</strong> Ensure good irrigation; watch for fruit pests</li>
    </ul>

    <h3>🌾 7. Harvesting</h3>
    <ul>
      <li>⏰ <strong>When:</strong> 7–9 months after flowering (fruits turn red/yellow)</li>
      <li>✋ <strong>Method:</strong> Handpick ripe cherries for quality beans</li>
      <li>📦 <strong>Handling:</strong> Avoid bruising; process soon after harvest</li>
    </ul>

    <h3>🔧 8. Post-Harvest & Storage</h3>
    <h4>Processing:</h4>
    <p>Choose between:</p>
    <ul>
      <li>☀️ <strong>Dry method:</strong> Sun-dry whole cherries</li>
      <li>💧 <strong>Wet method:</strong> Ferment, wash, and dry beans</li>
    </ul>

    <h4>Storage:</h4>
    <p>Keep beans in a cool, dry place in airtight containers to preserve flavor.</p>

    <h4>Packaging:</h4>
    <p>Use moisture-proof, airtight packaging for longer shelf life and safe transport.</p>

    <h3>⚠️ 9. Challenges & Solutions</h3>
    <ul>
      <li><strong>Challenges:</strong> Leaf rust, root rot, pests, unpredictable market prices</li>
      <li><strong>Solutions:</strong> Use climate-suited varieties, IPM, good pruning, and market linkages</li>
    </ul>
  `;
}


  cropInfo.innerHTML = content;
  cropInfo.style.display = content ? "block" : "none";
}
