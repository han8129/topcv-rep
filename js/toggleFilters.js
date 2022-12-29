const filters = document.querySelector(".filters");
const openFilters = document.querySelector(".fa-filter")
const exitFilters = filters.querySelector(".exit-filters")

function toggleFilters () {
       filters.classList.toggle("filters-is-out");
}

openFilters.addEventListener("click", toggleFilters)

exitFilters.addEventListener("click", toggleFilters)


