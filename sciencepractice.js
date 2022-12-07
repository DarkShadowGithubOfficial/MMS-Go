
  let qs = [
    {
      "q": "What is the density of water? (No units)",
      "a": 1,
      "e": "The density of water is 1 g/mL, a commonly used constant."
    },
    {
      "q": "What is the weight of a 5 kg object? (no units)",
      "a": 49,
      "e": "By multiplying 5 kg by Earth's gravitational acceleration, 9.8, you get that the weight (gravitational pull force) is 49 Newtons"
    },
    {
      "q": "What is the unit for force? (plural form)",
      "a": "Newtons",
      "e": "This unit was named after the physicist that discovered gravity and fathered physics, Isaac Newton"
    },
    {
      "q": "What shifts and causes earthquakes?",
      "a": "Tectonic plates",
      "e": "These pieces of the Earth's crust can sometimes move around and cause earthquakes. They also create mountains and valleys."
    },
    {
      "q": "What is air resistance otherwise known as?",
      "a": "Drag",
      "e": "The drag force is basically the friction between an object and a fluid."
    },
    {
      "q": "What type of rock forms from cooled magma?",
      "a": "Igneous",
      "e": "Igneous rocks (derived from latin), are formed from cooled magma or lava."
    },
    {
      "q": "What type of rock forms from heat and pressure?",
      "a": "Metamorphic",
      "e": "Metamorphic rocks are rocks that get put under extreme heat and pressure to change form, like a diamond."
    },
    {
      "q": "What type of rock forms from pieces of eroded rock?",
      "a": "Sedimentary",
      "e": "Sedimentary rocks are formed from eroded sediments that are compacted and compressed into rock."
    },
    {
      "q": "True or false: all minerals are solid",
      "a": "True",
      "e": "To be a mineral, a material has to be solid, inorganic (not coming from living things), have a chemical formula, a crystalline formation (the molecules make a repeating pattern), and must be naturally occurring (not man-made)."
    },
    {
      "q": "What is the process in which plants convert sunlight to glucose?",
      "a": "Photosynthesis",
      "e": "Sunlight and carbon dioxide are taken in by plants, which use the sun as an energy source to extract the carbon to combine with water to make glucose (a sugar type), and they release the excess oxygen."
    },
    {
      "q": "What are the tubes that send water to every part of a tree called?",
      "a": "Xylem",
      "e": "Trees use vacuums in their xylem to suck water up from the roots to distribute to every part of the tree."
    },
    {
      "q": "Instead of bones, what do sharks have?",
      "a": "Cartilage",
      "e": "Rather than bones, sharks have cartilage, a flexible white tissue (newborn babies have this too)."
    }
  ]
  let currentQ = qs[Math.round(Math.random() * (qs.length - 1))];
  let ans = currentQ.a;
  function updateQuestion() {
    currentQ = qs[Math.round(Math.random() * (qs.length - 1))];
    ans = currentQ.a;
    document.querySelector('#q').innerHTML = currentQ.q;
  }
  function checkAnswer() {
    if (`${document.querySelector('#answer').value}`.toLowerCase() == `${ans}`.toLowerCase()) {
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
    document.querySelector('#e').innerHTML = currentQ.e;
  }