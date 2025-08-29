const testimonials = [
    {
      id: 1,
      name: 'Susan Smith',
      job: 'Web Developer',
      img: 'img/profile2.png',
      text: "He has always been a great team contributor.",
    },
    {
      id: 2,
      name: 'Anna Johnson',
      job: 'Web Designer',
      img: 'img/profile3.png',
      text: 'A creative individual with high levels of energy.',
    },
    {
      id: 3,
      name: 'Peter Jones',
      job: 'Intern',
      img: 'img/profile4.png',
      text: 'He always put in his best for the tasks assigned to him. He will be an asset to any company.',
    },
  ];
// select items
const img = document.getElementById('reviewer-img');
const author = document.getElementById('reviewer');
const job = document.getElementById('reviewer-job');
const review = document.getElementById('review-text');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
});

// show person based on item
function showPerson(person) {
  const item = testimonials[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  review.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > testimonials.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = testimonials.length - 1;
  }
  showPerson(currentItem);
});

