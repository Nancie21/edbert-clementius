;(() => {
  // Project data - single source of truth
  const PROJECTS = {
    proj1: {
      title: "PartnerGO",
      description:
        "PartnerGO helps startup founders discover, evaluate, and connect with strategic partners to accelerate growth.",
      overview:
        "Built as a lightweight matchmaking platform for startups seeking partners. It focuses on profile discovery, shortlisting, and outreach with a clean, mobile-first UI.",
      features: [
        "Partner discovery with keyword and category filters",
        "Shortlist management and saved profiles",
        "Contact request flow with email handoff",
      ],
      tech: ["HTML/CSS (Bootstrap)", "JavaScript (jQuery, Owl Carousel)", "Static hosting"],
      liveUrl: "#",
      downloadUrl: "https://drive.google.com/drive/folders/1wkOliMIvOl02G5TjC5Gy_c37EHYwbReF?usp=drive_link",
      screenshots: ["images/partnergo1.png", "images/partnergo2.png", "images/partnergo3.png", "images/partnergo4.png"],
      hero: "images/item-1.jpg",
    },
    proj2: {
      title: "Skillsync",
      description:
        "Skillsync helps users develop practical life skills like cooking, creativity, and programming through curated learning tracks.",
      overview:
        "A content-first site with categorized tracks and progressive modules. Emphasis on clarity, readability, and quick navigation to lessons.",
      features: [
        "Category-based learning tracks",
        "Progressive modules and bookmarking",
        "Responsive layouts optimized for reading",
      ],
      tech: ["HTML/CSS (Bootstrap)", "JavaScript (vanilla + jQuery)", "Image assets & icons"],
      liveUrl: "#",
      downloadUrl: "https://drive.google.com/drive/folders/1c2Nbo1dD6eHqDCzItteVIn6-k2AgsXtI?usp=drive_link",
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
        "images/RUindows4.png",
        "images/RUindows5.png",
        "images/RUindows6.png",
      ],
      hero: "images/RUindows square 2.jpg",
    },
    proj4: {
      title: "Project 4",
      description: "Template project. Replace with real description.",
      overview: "High-level overview of Project 4.",
      features: ["Key feature A", "Key feature B", "Key feature C"],
      tech: ["HTML/CSS", "JavaScript"],
      liveUrl: "#",
      downloadUrl: "#",
      screenshots: ["images/item-1.jpg", "images/item-1.jpg"],
      hero: "images/item-1.jpg",
    },
    proj5: {
      title: "Project 5",
      description: "Template project. Replace with real description.",
      overview: "High-level overview of Project 5.",
      features: ["Key feature A", "Key feature B", "Key feature C"],
      tech: ["HTML/CSS", "JavaScript"],
      liveUrl: "#",
      downloadUrl: "#",
      screenshots: ["images/skillsync square bener.jpg"],
      hero: "images/skillsync square bener.jpg",
    },
    proj6: {
      title: "Project 6",
      description: "Template project. Replace with real description.",
      overview: "High-level overview of Project 6.",
      features: ["Key feature A", "Key feature B", "Key feature C"],
      tech: ["HTML/CSS", "JavaScript"],
      liveUrl: "#",
      downloadUrl: "#",
      screenshots: ["images/RUindows square 2.jpg"],
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

    console.log("[v0] Project details loaded successfully")
  })
})()
