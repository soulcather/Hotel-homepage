function changeLanguage(url) {
  if (url) {
    window.location.href = url; // Перенаправление на выбранный файл
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("language");
  const currentPage = window.location.pathname.split("/").pop(); // Получаем имя текущего файла

  if (currentPage === "index.html") {
    select.value = "index.html"; // Значение для Español
  } else if (currentPage === "index_eng.html") {
    select.value = "index_eng.html"; // Значение для English
  }
});

const userLang = document.documentElement.lang || "es"; // по умолчанию испанский

flatpickr("#checkin", {
  dateFormat: "d F Y",
  locale: userLang,
});

flatpickr("#checkout", {
  dateFormat: "d F Y",
  locale: userLang,
});
