function changeLanguage(url) {
  if (url) {
    window.location.href = url; // Перенаправление на выбранный файл
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("language");
  const currentPage = window.location.pathname.split("/").pop(); // Получаем имя текущего файла

  select.value = currentPage; // Устанавливаем правильный вариант в выпадающем списке
});

// Initialize Flatpickr for both date inputs
flatpickr("#checkin", {
  dateFormat: "d F Y",
});

flatpickr("#checkout", {
  dateFormat: "d F Y",
});
