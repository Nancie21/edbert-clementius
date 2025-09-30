;(() => {
  function getParam(name) {
    const params = new URLSearchParams(window.location.search)
    return params.get(name)
  }

  const PROJECTS = {
    proj1: {
      title: "PartnerGO",
      description: "A brief description of Project One. Replace this with your real project overview.",
      screenshots: ["images/item-1.jpg", "images/item-2.jpg", "images/item-3.jpg"], // replace with actual images
      downloadUrl: "#", // link to your downloadable code
      hero: "images/item-1.jpg", // hero image for the project
    },
    proj2: {
      title: "Skillsync",
      description: "Skillsync is a website which allows user to develop skills for living such as cooking , creativity or even programming, in order to enhance intelligence",
      screenshots: ["images/SKillsync.png"],
      downloadUrl: "#",
      hero: "images/Skillsync.png", // hero image for the project
    },
    proj3: {
      title: "RUindows",
      description: "A brief description of Project Three. Replace this with your real project overview.",
      screenshots: ["images/item-3.jpg"],
      downloadUrl: "#",
      hero: "images/item-3.jpg", // hero image for the project
    },
  }

  function render() {
    const key = getParam("project") || "proj1"
    const data = PROJECTS[key] || PROJECTS.proj1

    const titleEl = document.getElementById("project-title")
    const descEl = document.getElementById("project-description")
    const shotsEl = document.getElementById("project-screenshots")
    const dlEl = document.getElementById("project-download-link")

    if (titleEl) titleEl.textContent = data.title
    if (descEl) descEl.textContent = data.description
    if (dlEl) dlEl.href = data.downloadUrl

    if (shotsEl) {
      shotsEl.innerHTML = ""
      const src = data.hero || (Array.isArray(data.screenshots) && data.screenshots.length ? data.screenshots[0] : null)

      if (src) {
        const figure = document.createElement("figure")
        figure.className = "project-hero"
        const img = new Image()
        img.src = src
        img.alt = data.title + " preview"
        img.loading = "lazy"
        figure.appendChild(img)
        shotsEl.appendChild(figure)
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render)
  } else {
    render()
  }
})()
