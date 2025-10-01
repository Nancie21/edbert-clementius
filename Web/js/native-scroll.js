;(() => {
  function addSectionIds() {
    const root = document.getElementById("fullpage")
    if (!root) return
    root.querySelectorAll(".section").forEach((sec) => {
      const id = sec.getAttribute("data-section")
      if (id && !sec.id) sec.id = id // e.g. slide01 -> id="slide01"
    })
  }

  function forceNativeStyles() {
    document.documentElement.style.overflowY = "auto"
    document.body.style.overflowY = "auto"
    const wrap = document.querySelector(".fullpage-wrapper")
    if (wrap) {
      wrap.style.height = "auto"
      wrap.style.transform = "none"
    }
    document.querySelectorAll(".section").forEach((s) => {
      s.style.height = "auto"
      s.style.minHeight = "0"
    })
  }

  function tryDisableFullPage() {
    try {
      if (window.fullpage_api?.destroy) {
        try {
          window.fullpage_api.setAutoScrolling(false)
        } catch {}
        try {
          window.fullpage_api.setFitToSection(false)
        } catch {}
        window.fullpage_api.destroy("all")
        return true
      }
      if (window.jQuery?.fn?.fullpage?.destroy) {
        window.jQuery.fn.fullpage.destroy("all")
        return true
      }
    } catch {}
    return false
  }

  function run() {
    addSectionIds()
    tryDisableFullPage()
    forceNativeStyles()
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run)
  } else {
    run()
  }
  window.addEventListener("load", run)

  // Retry a few times to beat late initializers
  let tries = 0
  const timer = setInterval(() => {
    tries++
    const disabled = tryDisableFullPage()
    forceNativeStyles()
    if (disabled || tries >= 10) clearInterval(timer)
  }, 300)
})()
