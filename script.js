const gate = document.querySelector("#age-gate");
const acceptButton = document.querySelector("#age-accept");
const storageKey = "maison-des-pierres-age-confirmed";

function storageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function storageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // If storage is unavailable, the page still opens for the current visit.
  }
}

function closeAgeGate() {
  if (!gate) {
    return;
  }

  gate.hidden = true;
  document.body.classList.remove("age-locked");
}

if (gate && storageGet(storageKey) === "yes") {
  closeAgeGate();
} else if (gate) {
  document.body.classList.add("age-locked");
}

acceptButton?.addEventListener("click", () => {
  storageSet(storageKey, "yes");
  closeAgeGate();
});
