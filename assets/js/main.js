(function () {
  pagination(true);
})();
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("theme-toggle");
  const root = document.documentElement;

  // 读取存储的模式
  const currentTheme = localStorage.getItem("theme") || "light";
  if (currentTheme === "dark") {
    root.classList.add("dark");
  }

  // 切换模式并存储
  toggleButton.addEventListener("click", function () {
    const isDarkMode = root.classList.toggle("dark");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  });
});
