// redirecter
document.querySelectorAll(".scroll-link").forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

document.querySelectorAll(".header_btn").forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();

    const targetElement = document.querySelector("#media");

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// faq item
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".faq_item").forEach((item) => {
    const title = item.querySelector(".faq_item_title");

    title.addEventListener("click", () => {
      const isActive = item.classList.contains("active_faq_item");

      document.querySelectorAll(".faq_item").forEach((faq) => {
        faq.classList.remove("active_faq_item");
      });

      if (!isActive) {
        item.classList.add("active_faq_item");
      }
    });
  });
});

// mobile menu
function toggleMenu() {
  document
    .querySelector(".mobile_menu")
    .classList.toggle("visible_mobile_menu");
}

// toggle reqs
function toggleReqs() {
  document.querySelector(".requires_big").classList.toggle("vis_requires_big");
}

// pie diagramm
function renderChart() {
  var options = {
    chart: {
      type: "pie",
      animations: {
        enabled: true, // Включает анимацию
        speed: 3000, // Скорость анимации в миллисекундах
        animateGradually: {
          enabled: true,
          delay: 150, // Задержка между анимациями отдельных элементов
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350, // Скорость анимации при динамическом обновлении данных
        },
      },
    },

    series: [30, 30, 15, 15, 10, 5],
    labels: [
      "Game pool",
      "Liquidity",
      "Insurance fund",
      "Team budget",
      "Marketing",
      "Staking reward",
    ],
    colors: ["#ff895b", "#f37d4d", "#e67143", "#d7663a", "#c75e36", "#c2572d"],
    legend: {
      position: "left",
      fontSize: "20px",
      fontWeight: 600,
      labels: {
        colors: "#fff",
      },
      markers: {
        size: 20,
        strokeWidth: 0,
        offsetX: -12,
      },
      itemMargin: {
        vertical: 15,
      },
    },
    stroke: {
      width: 0,
    },
    dataLabels: {
      style: {
        fontSize: "20px",
        fontWeight: "bold",
      },
      formatter: function (val, opts) {
        return `${opts.w.config.series[opts.seriesIndex]}%`;
      },
    },

    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "top",
            fontSize: "12px",
            fontWeight: 600,
            labels: {
              colors: "#fff",
            },
            markers: {
              size: 10,
              strokeWidth: 0,
              offsetX: -2,
            },
            itemMargin: {
              vertical: 8,
            },
          },
          dataLabels: {
            style: {
              fontSize: "12px",
            },
          },
        },
      },
    ],
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
}

// Функция для наблюдения за видимостью элемента
function observeChart() {
  var chartElement = document.querySelector("#chart");

  var observerOptions = {
    root: null, // Используется viewport
    rootMargin: "0px",
    threshold: 0.1, // Процент видимости элемента
  };

  function observerCallback(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Элемент виден, отрисовываем диаграмму
        renderChart();
        observer.unobserve(entry.target); // Останавливаем наблюдение после отрисовки
      }
    });
  }

  var observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(chartElement);
}

// Запускаем наблюдение после загрузки контента
document.addEventListener("DOMContentLoaded", observeChart);
