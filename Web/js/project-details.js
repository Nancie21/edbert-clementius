;(() => {
  // Project data - single source of truth
  const PROJECTS = {
    proj1: {
      title: "PartnerGO",
      description:
        "PartnerGO is a matchmaking platform design to help tech startups discover, evaluate, and connect with strategic business partners to accelerate growth.",
      overview:
        "Built as a full-stack application, PartnerGO serves as a curated directory for startup seeking partners. It features profile discovery with keyboard/category filters, a shortlist system to save promising profiles, and a contact flow to initiate outreach",
      features: [
        "Partner discovery with keyword and category filters",
        "Shortlist management and saved profiles",
        "Contact request flow with email handoff",
      ],
      tech: ["Laravel (PHP)", "MySQL (Database)", "HTML/CSS", "JavaScript"],
      liveUrl: "https://github.com/scholasticaCeline/partnergo",
      downloadUrl: "https://github.com/scholasticaCeline/partnergo",
      screenshots: ["images/partnergo1.png", "images/partnergo2.png", "images/partnergo3.png", "images/partnergo4.png"],
      hero: "images/item-1.jpg",
    },
    proj2: {
      title: "Skillsync",
      description:
        "A curated web platform which helps users to discover and master practical skills, from cooking to coding, through dedicated learning tracks.",
      overview:
        "A responsive, conttent-first front-end application which is built using HTML, CSS (Bootstrap), and JavaScript (jQuery/Vanilla). It functions as a 'Youtube for skills,' organizing lessons into categorized tracks and progressive modules. The primary focus was creating a clean, readable, and highly navigable user interface ffor a smooth learning experience.",
      features: [
        "Skill discovery through categorized learning tracks",
        "Progressive easy-to-follow lesson modules",
        "Fully responsive design for learning on any device",
      ],
      tech: ["HTML/CSS (Bootstrap)", "JavaScript (vanilla + jQuery)", "Image assets & icons"],
      liveUrl: "https://skillsync2101.netlify.app",
      downloadUrl: "https://github.com/Nancie21/SkillSync",
      screenshots: ["images/skillsync4.png", "images/skillsync1.png", "images/skillsync2.png", "images/skillsync3.png"],
      hero: "images/skillsync square bener.jpg",
    },
    proj3: {
      title: "RUindows",
      description: "A JavaFX-based desktop experience inspired by Windows: browse files, keep notes, and more.",
      overview:
        "Prototype desktop UX reimagined for coursework. Focused on simple utilities (file browsing, notes) with a clean navigation pattern.",
      features: [
        "File browsing UI with panels",
        "Integrated notepad with basic formatting",
        "Theming and window controls prototype",
      ],
      tech: ["Java (JavaFX)", "FXML layouts", "Desktop packaging"],
      liveUrl: "#",
      downloadUrl: "#",
      screenshots: [
        "images/RUindows1.png",
        "images/RUindows2.png",
        "images/RUindows3.png",
        "images/Ruindows4.png",
        "images/RUindows5.png",
        "images/RUindows6.png",
      ],
      hero: "images/RUindows square 2.jpg",
    },
    proj4: {
      title: "AniVault",
      description: "A responsive frontt-end prototype for AniVault, a niche e-commerce platform specializing in anime merchandise and collectibles.",
      overview: "Inspired by online merch stores like Kyou, AniVault is a front-end simulation of a real e-commerce website which features merchandise. Built entirely with HTML, CSS, and JavaScript, the project focuses on creating a clean, visually engaging, and easy-to-navigate shopping experience, from browsing the homepage to inspecting individual product pages",
      features: ["Visually appealing homepage with featured products","Detaild product pages with image galleries and descriptions","Multi-page layout fofr browsing different categories","Fully responsive design for desktop and mobile shopping"],
      tech: ["HTML","CSS", "JavaScript"],
      liveUrl: "https://anivault21.netlify.app/",
      downloadUrl: "https://github.com/Nancie21/Anivaults/tree/main",
      screenshots: ["images/Anivault1.png", "images/anivault2.png","images/Anivault3.png","images/anivault4.png","images/anivault5.png","images/anivault6.png","images/anivault7.png","images/anivault8.png","images/anivault9.png","images/anivault10.png","images/anivault11.png","images/anivault12.png","images/anivault13.png"],
      hero: "images/item-1.jpg",
    },
    proj5: {
      title: "CAteriNgz",
      description: "A responsive front-end prototype for a modern food ordering website, CAteriNgz, built to simulate a wonderful dining experience.",
      overview: "Built purely with HTML, CSS and JavaScript, this project focuses ona  clean and intuitive user interface for a catering service. It mimics the flow of a real food delivery app, which guides users from browsing popular menus on the homepage to viewing product details and navigating through different informational pages.",
      features: ["Homepage showcasing trending & promotional food items","Clean, multi-page design (products, testimonials, about us)","Simulated user journey (registration/browsing flow)","Fully responsive layout built from scratch"],
      tech: ["HTML","CSS", "JavaScript"],
      liveUrl: "https://cateringz21.netlify.app/",
      downloadUrl: "https://github.com/Nancie21/CAteriNgz",
      screenshots: ["images/cateringweb1.png","images/cateringweb2.png","images/cateringweb3.png","images/cateringweb4.png","images/cateringweb5.png"],
      hero: "images/skillsync square bener.jpg",
    },
    proj6: {
      title: "CAteriNgz Figma",
      description: "The complete UI.UX design case study for CAteriNgz, detailing the entire process from initial wireframes to a high-fidelity interactive prototype in Figma",
      overview: "This project documents the full design journey for the CAteriNgz food ordering platform. It covers the initial user flow mapping, low-fidelity wireframing for layout structure, and the final high-fidelity mockups for he visual design. The result is a comprehensive, click-through prototype in Figma which focuses on a clean, intuitive and seamless user experience",
      features: ["Detailed user Flow Mapping (from browsing to order)","High-Fidelity Wireframes","Interactive Click-Through Prototype", "UI Style Guide & Reusable Components"],
      tech: ["Figma"],
      liveUrl: "https://www.figma.com/design/nNuHGGyawKqTXmtZ46C7m6/HCI-LAB?node-id=0-1&p=f&t=Ls6vppXVgMhxTWMO-0",
      downloadUrl: "https://drive.google.com/drive/folders/1OHEOo4ObZwxqFSzZmjnOKyEWHfwmTgP7?usp=sharing",
      screenshots: ["images/figmamain.png","images/figma1.png","images/figma2.png","images/figma3.png","images/figma4.png"],
      hero: "images/RUindows square 2.jpg",
    },
    proj7: {
      title: "Project 7",
      description: "Template project. Replace with real description.",
      overview: "High-level overview of Project 7.",
      features: ["Key feature A", "Key feature B", "Key feature C"],
      tech: ["HTML/CSS", "JavaScript"],
      liveUrl: "#",
      downloadUrl: "#",
      screenshots: ["images/item-1.jpg"],
      hero: "images/item-1.jpg",
    },
    proj8: {
      title: "Project 8",
      description: "Template project. Replace with real description.",
      overview: "High-level overview of Project 8.",
      features: ["Key feature A", "Key feature B", "Key feature C"],
      tech: ["HTML/CSS", "JavaScript"],
      liveUrl: "#",
      downloadUrl: "#",
      screenshots: ["images/skillsync square bener.jpg"],
      hero: "images/skillsync square bener.jpg",
    },
    proj9: {
      title: "Project 9",
      description: "Template project. Replace with real description.",
      overview: "High-level overview of Project 9.",
      features: ["Key feature A", "Key feature B", "Key feature C"],
      tech: ["HTML/CSS", "JavaScript"],
      liveUrl: "#",
      downloadUrl: "#",
      screenshots: ["images/RUindows square 2.jpg"],
      hero: "images/RUindows square 2.jpg",
    },
    proj10: {
      title: "Project 10",
      description: "Template project. Replace with real description.",
      overview: "High-level overview of Project 10.",
      features: ["Key feature A", "Key feature B", "Key feature C"],
      tech: ["HTML/CSS", "JavaScript"],
      liveUrl: "#",
      downloadUrl: "#",
      screenshots: ["images/item-1.jpg"],
      hero: "images/item-1.jpg",
    },
    proj11: {
      title: "Project 11",
      description: "Template project. Replace with real description.",
      overview: "High-level overview of Project 11.",
      features: ["Key feature A", "Key feature B", "Key feature C"],
      tech: ["HTML/CSS", "JavaScript"],
      liveUrl: "#",
      downloadUrl: "#",
      screenshots: ["images/skillsync square bener.jpg"],
      hero: "images/skillsync square bener.jpg",
    },
    proj12: {
      title: "Project 12",
      description: "Template project. Replace with real description.",
      overview: "High-level overview of Project 12.",
      features: ["Key feature A", "Key feature B", "Key feature C"],
      tech: ["HTML/CSS", "JavaScript"],
      liveUrl: "#",
      downloadUrl: "#",
      screenshots: ["images/RUindows square 2.jpg"],
      hero: "images/RUindows square 2.jpg",
    },
  }

  // Helper function to get URL parameters
  function getParam(name) {
    const params = new URLSearchParams(window.location.search)
    return params.get(name)
  }

  // Initialize page when DOM is ready
  document.addEventListener("DOMContentLoaded", () => {
    console.log("[v0] project-details.js loaded")

    // Get project ID from URL (e.g., ?id=proj1)
    const projectId = getParam("project") || "proj1"
    console.log("[v0] Loading project:", projectId)

    const project = PROJECTS[projectId]

    if (!project) {
      console.error("[v0] Project not found:", projectId)
      return
    }

    // Populate project title and description
    const titleEl = document.getElementById("project-title")
    const descEl = document.getElementById("project-description")
    const overviewEl = document.getElementById("project-overview")
    const featuresEl = document.getElementById("project-features")
    const techEl = document.getElementById("project-tech")
    const carouselEl = document.getElementById("screenshot-carousel")
    const downloadLinkEl = document.getElementById("project-download-link")
    const liveLinkEl = document.getElementById("project-live-link")

    if (titleEl) titleEl.textContent = project.title
    if (descEl) descEl.textContent = project.description
    if (overviewEl) overviewEl.textContent = project.overview

    // Populate features list
    if (featuresEl) {
      featuresEl.innerHTML = ""
      project.features.forEach((feature) => {
        const li = document.createElement("li")
        li.textContent = feature
        featuresEl.appendChild(li)
      })
    }

    // Populate tech stack list
    if (techEl) {
      techEl.innerHTML = ""
      project.tech.forEach((tech) => {
        const li = document.createElement("li")
        li.textContent = tech
        techEl.appendChild(li)
      })
    }

    // Populate carousel with screenshots
    if (carouselEl) {
      carouselEl.innerHTML = ""
      project.screenshots.forEach((screenshot) => {
        const div = document.createElement("div")
        div.className = "item"
        const img = document.createElement("img")
        img.src = screenshot
        img.alt = project.title + " screenshot"
        div.appendChild(img)
        carouselEl.appendChild(div)
      })

      console.log("[v0] Added " + project.screenshots.length + " screenshots to carousel")

      // Dispatch event to trigger carousel initialization
      const event = new CustomEvent("screenshotsReady", {
        detail: { count: project.screenshots.length },
      })
      carouselEl.dispatchEvent(event)
    }

    // Update download link
    if (downloadLinkEl && project.downloadUrl !== "#") {
      downloadLinkEl.href = project.downloadUrl
    }

    if (liveLinkEl && project.liveUrl !== "#") {
      liveLinkEl.href = project.liveUrl
    }

    console.log("[v0] Project details loaded successfully")
  })
})()
