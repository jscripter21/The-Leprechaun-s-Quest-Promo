$(document).ready(function () {
  $(".icon-block").click(function () {
    $("#popupContainer").fadeIn();
    $(".popup-overlay").fadeIn();
    $(".close-button").fadeIn();
  });
});

// Роширення екрану
const iconBlocks = document.querySelectorAll(".icon-block");
const mainContainer = document.querySelector(".main-container");
iconBlocks.forEach((icon) => {
  icon.addEventListener("click", function (e) {
    mainContainer.classList.add("active");
  });
});

// Росташування об'єктів по кординатам
window.onload = function () {
  coordinateImage();
  window.addEventListener("resize", function () {
    coordinateImage();
  });
};

function coordinateImage() {
  // Координати для першої картинки (центр)

  const centerCoords = {
    x: document.querySelector(".big-circle").offsetWidth / 2,
    y: document.querySelector(".big-circle").offsetHeight / 2,
  };

  // Встановлюємо першу картинку в центр
  const centerImage = document.querySelectorAll(".icon-block")[0];
  centerImage.style.left = centerCoords.x - centerImage.offsetWidth / 2 + "px";
  centerImage.style.top = centerCoords.y - centerImage.offsetHeight / 2 + "px";

  // Координати для інших картинок (розміщені навколо центру)
  let otherCoords = [];
  if (window.innerWidth > 991) {
    otherCoords = [
      { x: centerCoords.x + 125, y: centerCoords.y + 200 },
      { x: centerCoords.x - 125, y: centerCoords.y + 200 },
      { x: centerCoords.x - 250, y: centerCoords.y + 0 },
      { x: centerCoords.x + 250, y: centerCoords.y + 0 },
      { x: centerCoords.x + 125, y: centerCoords.y - 200 },
      { x: centerCoords.x - 125, y: centerCoords.y - 200 },
    ];
  } else if (window.innerWidth <= 991 && window.innerWidth > 569) {
    otherCoords = [
      { x: centerCoords.x + 80, y: centerCoords.y + 150 },
      { x: centerCoords.x - 80, y: centerCoords.y + 150 },
      { x: centerCoords.x - 175, y: centerCoords.y - 0 },
      { x: centerCoords.x + 175, y: centerCoords.y - 0 },
      { x: centerCoords.x + 80, y: centerCoords.y - 150 },
      { x: centerCoords.x - 80, y: centerCoords.y - 150 },
    ];
  } else if (window.innerWidth <= 569 && window.innerWidth > 440) {
    otherCoords = [
      { x: centerCoords.x + 80, y: centerCoords.y + 125 },
      { x: centerCoords.x - 80, y: centerCoords.y + 125 },
      { x: centerCoords.x - 150, y: centerCoords.y - 0 },
      { x: centerCoords.x + 150, y: centerCoords.y - 0 },
      { x: centerCoords.x + 80, y: centerCoords.y - 125 },
      { x: centerCoords.x - 80, y: centerCoords.y - 125 },
    ];
  } else if (window.innerWidth <= 440) {
    otherCoords = [
      { x: centerCoords.x + 70, y: centerCoords.y + 110 },
      { x: centerCoords.x - 70, y: centerCoords.y + 110 },
      { x: centerCoords.x - 130, y: centerCoords.y - 0 },
      { x: centerCoords.x + 130, y: centerCoords.y - 0 },
      { x: centerCoords.x + 70, y: centerCoords.y - 110 },
      { x: centerCoords.x - 70, y: centerCoords.y - 110 },
    ];
  }

  // Встановлюємо решту картинок за заданими координатами
  for (let i = 1; i < iconBlocks.length; i++) {
    iconBlocks[i].style.left =
      otherCoords[i - 1].x - iconBlocks[i].offsetWidth / 2 + "px";
    iconBlocks[i].style.top =
      otherCoords[i - 1].y - iconBlocks[i].offsetHeight / 2 + "px";
  }
}

//
const getRandomNumberInclusive = (min, max) => {
  return Math.random() * (max - min + 1) + min;
};

const chooseAnimation = (elHeight) => {
  return elHeight < screen.height / 2 ? "falling" : "elevating";
};

const addStyles = (
  elOpacity,
  elScale,
  elDuration,
  elDelay,
  elBlur,
  elSpread,
  elPositionX,
  elPositionY
) =>
  `
    opacity: ${elOpacity};
    box-shadow: 0px 0px ${elBlur}px ${elSpread}px rgba(255, 255, 255, 1);
    transform: scale(${elScale});
    animation: ${chooseAnimation(
      elPositionY
    )} ${elDuration}s linear ${elDelay}s infinite alternate;
    left: ${elPositionX}px;
    top: ${elPositionY}px;
  `;

const box = document.getElementById("box");

for (let i = 0; i < 100; i++) {
  const rndOpacity = getRandomNumberInclusive(0, 1);
  const rndBlur = getRandomNumberInclusive(5, 15);
  const rndSpread = getRandomNumberInclusive(1, 1);
  const rndScale = getRandomNumberInclusive(0, 1);
  const rndDuration = getRandomNumberInclusive(10, 50);
  const rndDelay = getRandomNumberInclusive(0, 10);
  const rndPositionX = getRandomNumberInclusive(0, screen.width);
  const rndPositionY = getRandomNumberInclusive(0, screen.height);

  const firefly = document.createElement("div");
  firefly.classList.add("firefly");
  firefly.style.cssText = addStyles(
    rndOpacity,
    rndScale,
    rndDuration,
    rndDelay,
    rndBlur,
    rndSpread,
    rndPositionX,
    rndPositionY
  );

  box.appendChild(firefly);
}

// Функція встановлення промокоду
function updatePromoCodeAndPopup(promoDates) {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;

  const promoCodes = {
    "03-18": "LEP01",
    "03-19": "QUE02",
    "03-20": "CHA03",
    "03-21": "PRE04",
    "03-22": "LQ05",
    "03-23": "QUE06",
    "03-24": "LQ07",
  };

  const popupImages = {
    "03-18": "./img/popup/one_popup.png",
    "03-19": "./img/popup/two_popup.png",
    "03-20": "./img/popup/three_popup.png",
    "03-21": "./img/popup/four_popup.png",
    "03-22": "./img/popup/five_popup.png",
    "03-23": "./img/popup/six_popup.png",
    "03-24": "./img/popup/seven_popup.png",
  };

  const firstPromoCodeDate = Object.keys(promoCodes)[0];

  const formattedDate = `${("0" + month).slice(-2)}-${("0" + day).slice(-2)}`;

  const promoCodeElement = document.querySelector(".promo_code");
  const popupImage = document.getElementById("popupImg");

  if (promoDates[formattedDate]) {
    promoCodeElement.textContent = promoCodes[formattedDate];
    if (popupImage) {
      popupImage.src = popupImages[formattedDate];
    }
  } else {
    if (formattedDate < firstPromoCodeDate) {
      promoCodeElement.textContent = promoCodes[firstPromoCodeDate];
    } else {
      promoCodeElement.textContent = "Default Promo Code";
    }
  }
}

const promoDates = {
  "03-18": "2024-18-03",
  "03-19": "2024-19-03",
  "03-20": "2024-20-03",
  "03-21": "2024-21-03",
  "03-22": "2024-22-03",
  "03-23": "2024-23-03",
  "03-24": "2024-24-03",
};

updatePromoCodeAndPopup(promoDates);

// Перехід на сайт
document.addEventListener("DOMContentLoaded", function () {
  var closeButton = document.getElementById("closePopupButton");

  closeButton.addEventListener("click", function () {
    window.location.href = "https://sloterra.com/user/login";
  });
});

// Функція копіювання
document.addEventListener("DOMContentLoaded", function () {
  let copyButton = document.querySelector(".copy_btn");
  let promoCodeElement = document.querySelector(".promo_code");

  copyButton.addEventListener("click", function (event) {
    event.stopPropagation();

    let textToCopy = promoCodeElement.textContent;

    let textarea = document.createElement("textarea");
    textarea.value = textToCopy;

    document.body.appendChild(textarea);

    textarea.select();

    document.execCommand("copy");

    document.body.removeChild(textarea);

    copyButton.style.transform = "scale(1.2)";

    setTimeout(function () {
      copyButton.style.transform = "scale(1)";
    }, 300);
  });
});
