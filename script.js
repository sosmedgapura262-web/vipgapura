function startUpgrade() {
  const u = username.value.trim();
  const n = namarek.value.trim();
  const r = norek.value.trim();

  if (!u || !n || !r) {
    alert("Mohon lengkapi semua data terlebih dahulu.");
    return;
  }

  formCard.classList.add("hidden");
  processCard.classList.remove("hidden");

  const steps = [
    "Initializing secure channel...",
    "Validating member account...",
    "Checking VVIP eligibility...",
    "Upgrading privilege level...",
    "Finalizing activation..."
  ];

  let i = 0;
  const bar = document.getElementById("bar");
  const text = document.getElementById("loadingText");

  const interval = setInterval(() => {
    bar.style.width = ((i + 1) / steps.length) * 100 + "%";
    text.textContent = steps[i];
    i++;

    if (i === steps.length) {
      clearInterval(interval);
      setTimeout(() => showSuccess(u), 600);
    }
  }, 700);
}

function showSuccess(username) {
  processCard.classList.add("hidden");
  successCard.classList.remove("hidden");

  document.getElementById("welcomeText").innerHTML =
    `Selamat <strong>${username}</strong>, akun kamu telah resmi menjadi <strong>VVIP</strong>.`;

  const sound = document.getElementById("successSound");
  if (sound) sound.play();

  launchConfetti();
}

function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const c = document.createElement("div");
    c.style.position = "fixed";
    c.style.top = "-10px";
    c.style.left = Math.random() * 100 + "vw";
    c.style.width = "6px";
    c.style.height = "10px";
    c.style.background = "#d4af37";
    c.style.opacity = 0.85;
    c.style.transition = "top 2.5s linear";
    document.body.appendChild(c);

    setTimeout(() => c.style.top = "110vh", 10);
    setTimeout(() => c.remove(), 2600);
  }
}
