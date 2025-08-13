/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve","Jose"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 10;



function getRandomFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min;

  return { name, occupation, rate };
}  

const freelancers = Array.from({ length: NUM_FREELANCERS }, () => getRandomFreelancer());


function averageRate(freelancers) {
  const totalRate = freelancers.reduce((sum, freelancer) => sum + freelancer.rate, 0);
  return totalRate / freelancers.length;
}



const averageFreelancerRate = averageRate(freelancers);



console.log(averageFreelancerRate)

function FreelancerRow(freelancer) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${freelancer.name}</td>
    <td>${freelancer.occupation}</td>
    <td>$${freelancer.rate}</td>
  `;
  return tr;
}

function FreelancerRows(freelancers) {
  const tbody = document.createElement("tbody");
  freelancers.forEach(freelancer => {
    tbody.appendChild(FreelancerRow(freelancer));
  });
  return tbody;
}


function AverageRate(averageRate) {
  const h2 = document.createElement("h2");
  h2.textContent = `Average Freelancer Rate: $${averageRate.toFixed(2)}/hr`;
  return h2;
}

function renderApp() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div id="average-rate"></div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Occupation</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody id="FreelancerRows"></tbody>
    </table>
  `;

  app.querySelector("#average-rate").replaceWith(AverageRate(averageFreelancerRate));

  app.querySelector("#FreelancerRows").replaceWith(FreelancerRows(freelancers));
}

renderApp();


document.body.style.border = "1px solid black";
document.body.style.padding = "20px";