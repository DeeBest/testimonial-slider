const footerParagraph = document.getElementById('footer-paragraph');
const currentDate = new Date().getFullYear();
footerParagraph.textContent = `Created by \xA9Simphiwe ${currentDate}.`;

const testimonials = [
  {
    name: 'Michael',
    photoUrl:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    testimony: `Asus makes me more productive and gets the job done in a fraction of
          the time. I'm glad I found Asus.`,
  },
  {
    name: 'James',
    photoUrl:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    testimony: `Asus is a game-changer. Instead of drowning in an endless chain of emails, there is clear and easy accountability meaning tasks actually get done!`,
  },
  {
    name: 'Rebecca',
    photoUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    testimony: `We don’t need to spend as much time in meetings now that we use Asus.`,
  },
  {
    name: 'Sarah',
    photoUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    testimony: `I have been using Asus for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great.`,
  },
  {
    name: 'Brad',
    photoUrl:
      'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    testimony: `Would definitely recommend Asus and will definitely be ordering again.`,
  },
];

let image = document.querySelector('img');
let testimonialParagraph = document.getElementById('testimonial-paragraph');
let userName = document.getElementById('user-name');

let index = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, testimony } = testimonials[index];

  image.src = photoUrl;
  testimonialParagraph.textContent = testimony;
  userName.textContent = name;

  index++;

  if (index === testimonials.length) {
    index = 0;
  }

  setTimeout(() => updateTestimonial(), 10000);
}
