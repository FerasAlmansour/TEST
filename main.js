document.addEventListener("DOMContentLoaded", function () {
  const svgObject = document.getElementById("skeletonSvg");

  svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;
    const clickableIds = Array.from(svgDoc.querySelectorAll("[id]"));

    clickableIds.forEach(el => {
      el.addEventListener("click", () => {
        clickableIds.forEach(e => e.classList.remove("highlight"));
        el.classList.add("highlight");
        alert("Selected: " + el.id);
      });
    });
  });
});