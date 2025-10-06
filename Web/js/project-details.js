;(() => {
  const qs = (id) => document.getElementById(id)

  function getParam(name) {
    const params = new URLSearchParams(window.location.search)
    return params.get(name)
  }

  // One source of truth per project
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
      downloadUrl: "#",
      screenshots: [
        "images/item-1.jpg",
        "/partnergo-dashboard-interface.jpg",
        "/partnergo-partner-search-page.jpg",
        "/partnergo-profile-details-view.jpg",
      ],
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
      screenshots: [
        "images/skillsync4.png",
        "images/skillsync1.png",
        "images/skillsync2.png",
        "images/skillsync3.png"
      ],
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
        "images/RUindows6.png"
      ],
      hero: "images/RUindows square 2.jpg",
    },
  }

  function populateList(el, items) {
    if (!el) return
    el.innerHTML = ""
    ;(items || []).forEach((text) => {
      const li = document.createElement("li")
      li.textContent = text
      el.appendChild(li)
    })
  }

  function populateScreenshots(container, shots) {
    if (!container) {
      console.error("[v0] Screenshot container not found")
      return
    }

    if (window.jQuery && window.jQuery(container).data("owl.carousel")) {
      console.log("[v0] Destroying existing carousel")
      window.jQuery(container).trigger("destroy.owl.carousel")
      window.jQuery(container).removeClass("owl-carousel owl-loaded")
    }

    container.innerHTML = ""

    const images = Array.isArray(shots) ? shots : []
    if (images.length === 0) {
      console.warn("[v0] No screenshots available for this project")
      return
    }

    console.log("[v0] Populating " + images.length + " screenshots")

    images.forEach((src, index) => {
      const item = document.createElement("div")
      item.className = "item"
      const figure = document.createElement("figure")
      const img = document.createElement("img")
      img.src = src
      img.alt = "Project screenshot " + (index + 1)
      img.style.width = "100%"
      img.style.height = "auto"
      img.style.display = "block"
      figure.appendChild(img)
      item.appendChild(figure)
      container.appendChild(item)
    })

    console.log("[v0] Screenshots populated, triggering ready event")
    const event = new CustomEvent("screenshotsReady", { detail: { count: images.length } })
    container.dispatchEvent(event)
  }

  function render() {
    const key = getParam("project") || "proj1"
    const data = PROJECTS[key] || PROJECTS.proj1

    // Title + meta
    if (data.title) document.title = `${data.title} – Project Details`
    const titleEl = qs("project-title")
    const descEl = qs("project-description")
    const overviewEl = qs("project-overview")
    const featuresEl = qs("project-features")
    const techEl = qs("project-tech")
    const shotsEl = qs("project-screenshots") || qs("screenshot-carousel")
    const liveEl = qs("project-live-link")
    const dlEl = qs("project-download-link")

    if (titleEl) titleEl.textContent = data.title || ""
    if (descEl) descEl.textContent = data.description || ""
    if (overviewEl) overviewEl.textContent = data.overview || ""

    populateList(featuresEl, data.features || [])
    populateList(techEl, data.tech || [])
    populateScreenshots(shotsEl, data.screenshots || [])

    if (liveEl) liveEl.href = data.liveUrl || "#"
    if (dlEl) dlEl.href = data.downloadUrl || "#"
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render)
  } else {
    render()
  }
})()
