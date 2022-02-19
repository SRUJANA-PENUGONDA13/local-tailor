function openFilters() {
  document.querySelector(".left-nav").style.display = "flex";
  document.querySelector(".filters-btn").style.visibility = "hidden";
  document.querySelector(".filter-btn").style.display = "block";
}
function closeFilters() {
  document.querySelector(".left-nav").style.display = "none";
  document.querySelector(".filters-btn").style.visibility = "visible";
}
