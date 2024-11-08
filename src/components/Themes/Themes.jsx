export function toggleDarkMode() {
  const currentMode = localStorage.getItem("DarkMode") === "true";
  const newMode = !currentMode;
  localStorage.setItem("DarkMode", newMode);

  if (newMode) {
    document.body.classList.add("bg-gray-800");
  } else {
    document.body.classList.remove("bg-gray-800");
  }

  return newMode;
}

export function getDarkMode() {
  return localStorage.getItem("DarkMode") === "true";
}
