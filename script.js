// Navbar scroll behavior: show when scrolling up or at the top; hide when scrolling down past 100px.
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", function () {
    let currentScrollY = window.scrollY;
    if (currentScrollY < 10 || currentScrollY < lastScrollY) {
      navbar.style.transform = "translateY(0)";
    } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
      navbar.style.transform = "translateY(-100%)";
    }
    lastScrollY = currentScrollY;
  });

  // Mobile menu toggle
  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");

  menuButton.addEventListener("click", function () {
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
      menuIcon.innerHTML = "&times;"; // Show 'X' icon
    } else {
      mobileMenu.classList.add("hidden");
      menuIcon.innerHTML = "&#9776;"; // Show hamburger icon
    }
  });
});

// Define the blog posts array (simulating the TSX posts array)
const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt:
      "Learn the best practices for structuring large React applications that can grow with your team.",
    date: "March 15, 2024",
  },
  {
    title: "The Future of Web Development",
    excerpt:
      "Exploring emerging trends and technologies that will shape the web development landscape.",
    date: "March 10, 2024",
  },
  {
    title: "Mastering TypeScript in 2024",
    excerpt:
      "Advanced TypeScript patterns and techniques to write more robust and maintainable code.",
    date: "March 5, 2024",
  },
];

// Inline SVGs for icons

const calendarSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" class="calendar-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
`;

const arrowSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" class="arrow-right-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7" />
  </svg>
`;

// Render the blog posts dynamically inside the "blogGrid" element.
const blogGrid = document.getElementById("blogGrid");

blogPosts.forEach((post) => {
  // Create a card wrapper
  const card = document.createElement("div");
  card.className = "card";

  // Build the card header HTML
  const cardHeader = `
    <div class="card-header">
      <div class="date">
        ${calendarSVG}
        ${post.date}
      </div>
      <div class="card-title">
        ${post.title}
      </div>
    </div>
  `;

  // Build the card content HTML
  const cardContent = `
    <div class="card-content">
      <p>${post.excerpt}</p>
      <div class="read-more">
        Read More
        ${arrowSVG}
      </div>
    </div>
  `;

  // Combine header and content into the card
  card.innerHTML = cardHeader + cardContent;

  // Append card to the grid
  blogGrid.appendChild(card);
});

// Define the projects array (simulating your TSX projects array)
const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400",
    date: "March 2024",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=400",
    date: "February 2024",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard that provides detailed forecasts, interactive maps, and personalized weather alerts for multiple locations.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=400",
    date: "January 2024",
  },
  {
    title: "Social Media Analytics",
    description:
      "A comprehensive analytics platform for social media managers to track engagement, analyze trends, and generate detailed reports across multiple platforms.",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=400",
    date: "December 2023",
  },
];

// Inline SVG for the Github Icon
const githubIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" class="github-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.111.793-.261.793-.578 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.746.082-.73.082-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.3-5.467-1.335-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.006-.404 11.5 11.5 0 0 1 3.006.404c2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.432.37.816 1.096.816 2.21 0 1.595-.014 2.882-.014 3.275 0 .319.192.694.8.576C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
`;

// Get the container element for the project cards
const projectGrid = document.getElementById("projectGrid");

// Loop over each project and build its card structure
projects.forEach((project) => {
  const card = document.createElement("div");
  card.className = "card";
  
  card.innerHTML = `
    <div class="card-img">
      <img src="${project.image}" alt="${project.title}">
    </div>
    <div class="card-header">
      <h3 class="card-title">${project.title}</h3>
      <p class="card-date">${project.date}</p>
    </div>
    <div class="card-content">
      <p>${project.description}</p>
      <div class="card-buttons">
        <button class="btn btn-sm">
          ${githubIcon}
          Code
        </button>
      </div>
    </div>
  `;
  
  projectGrid.appendChild(card);
});
