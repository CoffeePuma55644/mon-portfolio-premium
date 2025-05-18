document.addEventListener("DOMContentLoaded", function () {
  const image = document.getElementById("Joker");
  const buttonMario = document.getElementById("mario");
  const buttonCloud = document.getElementById("cloud");
  const buttonJoker = document.getElementById("joker");
  const buttonMoi = document.getElementById("moi");
  const header = document.querySelector("header");
  const navbar = document.querySelector(".navbar");
  const navButtons = document.querySelectorAll(".nav-buttons button");
  const main = document.querySelector("main");

  // Fonction pour appliquer le thème Cloud
  function setCloudTheme() {
    document.body.style.backgroundColor = "#11131F";
    document.body.style.color = "#D6E1FF";
    header.style.backgroundColor = "#141726";
    navbar.style.backgroundColor = "#141726";
    main.style.color = "#D6E1FF";
    image.style.background = "#182449";
    navButtons.forEach((btn) => {
      btn.style.background = "#182449";
      btn.style.color = "#D6E1FF";
    });
  }

  // Fonction pour revenir au thème Joker (par défaut)
  function setJokerTheme() {
    document.body.style.backgroundColor = "#191111";
    document.body.style.color = "#FFD1D9";
    header.style.backgroundColor = "#201314";
    navbar.style.backgroundColor = "#201314";
    main.style.color = "#FFD1D9";
    image.style.background = "#3b1219";
    navButtons.forEach((btn) => {
      btn.style.background = "#3b1219";
      btn.style.color = "#FFD1D9";
    });
  }

  // Fonction pour appliquer le thème Mario
  function setMarioTheme() {
    document.body.style.backgroundColor = "#0B161A";
    document.body.style.color = "#B6ECF7";
    header.style.backgroundColor = "#101B20";
    navbar.style.backgroundColor = "#101B20";
    main.style.color = "#B6ECF7";
    image.style.background = "#082C36";
    navButtons.forEach((btn) => {
      btn.style.background = "#082C36";
      btn.style.color = "#B6ECF7";
    });
  }

  // Fonction pour appliquer le thème Moi
  function setMoiTheme() {
    document.body.style.backgroundColor = "#111111";
    document.body.style.color = "#EEEEEE";
    header.style.backgroundColor = "#191919";
    navbar.style.backgroundColor = "#191919";
    main.style.color = "#EEEEEE";
    image.style.background = "#222222";
    navButtons.forEach((btn) => {
      btn.style.background = "#222222";
      btn.style.color = "#EEEEEE";
    });
  }

  buttonCloud.addEventListener("click", function () {
    image.src =
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/final-fantasy-vii-remake/9/9b/Final-fantasy-vii-remake-image-02_22917472824_o.jpg";
    image.alt = "Cloud";
    setCloudTheme();
  });

  buttonJoker.addEventListener("click", function () {
    image.src =
      "https://i.pinimg.com/736x/9f/1c/34/9f1c345f24bbb6e1c33bdb6ca2ede122.jpg";
    image.alt = "Joker";
    setJokerTheme();
  });

  buttonMario.addEventListener("click", function () {
    image.src =
      "https://amiibodoctor.com/wp-content/uploads/2020/10/2020071216534400-0e7df678130f4f0fa2c88ae72b47afdf.jpg";
    image.alt = "Mario";
    setMarioTheme();
  });

  buttonMoi.addEventListener("click", function () {
    image.src =
      "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-78f8-51f7-9bdd-21c3afd1c9b2/raw?se=2025-05-17T16%3A54%3A50Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=b928fb90-500a-412f-a661-1ece57a7c318&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-17T15%3A42%3A49Z&ske=2025-05-18T15%3A42%3A49Z&sks=b&skv=2024-08-04&sig=kSefcOxHxTI23P7hTjAQoZm9eEr4doVAAK12bKl7C80%3D";
    image.alt = "Moi";
    setMoiTheme();
  });
});
