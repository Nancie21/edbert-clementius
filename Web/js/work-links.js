// Include this AFTER js/custom.js in index.html to:
// 1) Make the first 3 My Work cards clickable and route to project.html
// 2) Remove "Team Members" and "Certificates" counters at runtime
// 3) Slow down the Who am I carousel autoplay with clear markers to tweak

;(($) => {
  if (!window.jQuery) return

  function linkWorkCards() {
    const $items = $(".gallery-list .item")
    // guard if not present
    if (!$items.length) return

    // Attach clicks only to the first 3 items
    $items.slice(0, 3).each(function (idx) {
      const key = ["proj1", "proj2", "proj3"][idx]
      $(this)
        .css("cursor", "pointer")
        .on("click", () => {
          window.location.href = "project.html?project=" + key
        })
    })
  }

  function removeUnwantedFacts() {
    // Remove items whose counter text contains these labels
    const labelsToRemove = ["Team Members", "Certificates"]
    $(".facts-list .item .counter-box").each(function () {
      const text = $(this).text().trim()
      if (labelsToRemove.some((l) => text.indexOf(l) !== -1)) {
        $(this).closest(".item").remove()
      }
    })
  }

  function slowWhoAmICarousel() {
    const $facts = $(".facts-list")
    if (!$facts.length || !$facts.data("owl.carousel")) return

    // Destroy then re-init with slower autoplay
    $facts.trigger("destroy.owl.carousel")
    $facts.owlCarousel({
      items: 1,
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 8000,
      smartSpeed: 600,
    })
  }

  $(() => {
    linkWorkCards()
    removeUnwantedFacts()
    slowWhoAmICarousel()
  })
})(window.jQuery)
