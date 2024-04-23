const headerTop = document.querySelector(".header-top");
const header = document.querySelector(".header");
const mainElement = document.querySelector(".main");
const toTopBtn = document.querySelector(".toTop-btn");

AOS.init();

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 100) {
    headerTop.style.transform = "translateY(-100px)";
    header.style.marginTop = 0;
  } else {
    headerTop.style.transform = "translateY(0)";
    header.style.marginTop = `${headerTop.getBoundingClientRect().height}px`;
  }
});

header.style.marginTop = `${headerTop.getBoundingClientRect().height}px`;
mainElement.style.marginTop = `${
  headerTop.getBoundingClientRect().height +
  header.getBoundingClientRect().height
}px`;

const maps = document.querySelectorAll(".jqvmap-region");
maps.forEach((regionMap, index) => {
  // Hover Effect
  regionMap.addEventListener("mouseover", () => {
    regionMap.setAttribute("fill", "#6c7ba3");
  });

  regionMap.addEventListener("mouseleave", () => {
    regionMap.setAttribute("fill", regionMap.getAttribute("original"));
  });
  // ==============================

  // Selecting
  regionMap.addEventListener("click", () => {
    const currentRegion = regionMap.id.split("_");
    document.querySelector(".areaTitle").innerHTML =
      currentRegion[currentRegion.length - 1];

    regionMap.classList.add("active");
    maps.forEach((element, elementID) => {
      if (elementID !== index) element.classList.remove("active");
    });
  });
});

// ====================================================================
// ====================================================================

// Accordion configuration

const accordionBtns = document.querySelectorAll(".accordionBtn");
accordionBtns.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    document.querySelectorAll(".content")[index].classList.toggle("active");
  });
});

// Statistics
const doughnut = document.getElementById("myChart");
const renderVals = document.createElement("div");

const vals = [
  { title: "Ko'p qavatli uylar", value: 40789 },
  { title: "Boshqaruv kompaniyalar soni", value: 812 },
  { title: "Shirkatlar soni", value: 117 },
];
const backgroundColors = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
];

new Chart(doughnut, {
  type: "doughnut",
  data: {
    labels: vals.map((item) => item.title),
    datasets: [
      {
        label: ["# value"],
        data: vals.map((item) => item.value),
        borderWidth: 0,
        backgroundColor: backgroundColors,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

renderVals.innerHTML = `
  <p>
    <span>${vals[0].title}</span>
    <span style="color: ${backgroundColors[0]}">${vals[0].value}</span>
  </p>
  <p>
    <span>${vals[1].title}</span>
    <span style="color: ${backgroundColors[1]}">${vals[1].value}</span>
  </p>
  <p>
    <span>${vals[2].title}</span>
    <span style="color: ${backgroundColors[2]}">${vals[2].value}</span>
  </p>
`;
renderVals.classList.add("renderVals");

document.getElementById("chartVals").appendChild(renderVals);

// ===========================================
// Swiper Js

var swiper = new Swiper(".resourceSwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
  },
});

// To Top button

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 200) {
    toTopBtn.classList.add("active");
  } else {
    toTopBtn.classList.remove("active");
  }
});
