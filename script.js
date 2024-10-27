window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;

    document.querySelector(".myBar").style.width = scrolled + "%";


    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".navbar").style.top = "0";
        document.querySelector(".progress").style.top = "0";
        
    } else {
        document.querySelector(".navbar").style.top = "-50px";
        document.querySelector(".progress").style.top = "-50px";

    }

    
}

document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    });
  
    backToTop.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });


const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.querySelector(".close");


openModalBtn.addEventListener("click", function(event) {
    event.preventDefault(); 
    modal.style.display = "block";
});

closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none"; 
});

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; 
    }
});

const projectDetails = {
  1: {
      title: "Fullstack веб-приложение",
      text: "Этот проект представляет собой интернет-магазин, разработанный с использованием современных технологий и инструментов. В качестве сборщика проектов использован Vite, что обеспечивает быструю и эффективную разработку. <br>  <br>  Вёрстка сайта выполнена по макету из FIGMA, с применением SCSS для создания структурированных и поддерживаемых стилей. <br> <br>  Весь интерактив сайта реализован на современном стандарте JavaScript (ES6+), позволяя работать с элементами DOM-дерева: получать элементы страницы, управлять ими (скрывать, показывать, создавать новые), а также эффективно манипулировать классами CSS. <br> <br> Использованы методы работы с событиями браузера и пользователя, такие как обработка кликов и событий формы. Также применено делегирование для оптимизации кода. Шаблонные строки и интерполяция используются для более удобной работы с динамическими данными, а деструктуризация делает код более чистым и понятным. <br>  <br>  Проект организован с учётом удобной структуры файлов, что упрощает навигацию и поддержку. Роутинг, навигация и хлебные крошки обеспечивают пользователям лёгкий доступ к страницам. Меню, списки товаров, карточки товаров и корзина динамически генерируются на основе данных, полученных через API.  <br> <br> Для авторизации используется access token, а функционал избранного, корзины и оформления заказа интегрирован с сервером, что обеспечивает полную функциональность и удобство использования. <br><br>"
  },
  2: {
      title: "Fullstack веб-приложение",
      text: "Проект ReactShop представляет собой фуллстек интернет-магазин, реализованный на PERN stack (PostgreSQL, Express, React, Node.js). В репозитории разделены клиентская и серверная части: <br> <br> <strong>Клиентская часть (React): </strong>  Взаимодействует с сервером через API <br><br> Реализованы страницы для регистрации/авторизации пользователей, списка товаров и корзины покупок. <br><br>Интерфейс динамически обновляется через React, используя состояние и рендеринг компонентов. <br><br><strong>Серверная часть (Express, Node.js):  </strong> <br><br> Обрабатывает запросы от клиента, подключается к базе данных PostgreSQL через ORM. <br><br>Управляет регистрацией пользователей, товарами и корзиной. <br><br><strong> Основные моменты проекта: </strong> <br><br> В клиентской части используются компоненты React для взаимодействия с пользователем. Например, для корзины или страниц товаров. <br><br>Сервер написан на Node.js и взаимодействует с PostgreSQL для хранения и обработки данных о пользователях, заказах и товарах. <br><br> API отвечает за регистрацию, авторизацию, добавление товаров в корзину и выполнение других операций. <br><br> Приложение подключено к базе данных через ORM (Sequelize), что упрощает работу с PostgreSQL.<br><br> <strong>Особенности проекта: </strong> <br><br>Адаптивный интерфейс.<br><br> Реализованы базовые функции корзины и списков товаров. <br><br> Простая архитектура взаимодействия между клиентом и сервером, что делает код более читабельным и удобным для поддержания."
  },
  3: {
      title: "Приложение погоды",
      text: "Приложение для прогноза погоды, разработанное на чистом JavaScript, представляет собой динамический веб-инструмент, который позволяет пользователям вводить название города и получать актуальную информацию о погоде. Оно интегрируется с внешними API для отображения данных о температуре, влажности, скорости ветра и других метеоусловиях в реальном времени. Приложение поддерживает адаптивный дизайн, что обеспечивает удобство использования как на настольных компьютерах, так и на мобильных устройствах, с плавной подстройкой интерфейса под разные размеры экранов."
  }
};

const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeBtn = document.getElementsByClassName("close")[0];
const projectButtons = document.querySelectorAll(".projects_block-text__btn-descr");

projectButtons.forEach(button => {
  button.addEventListener("click", function (event) {
      event.preventDefault(); 
      
      const projectId = this.getAttribute("data-project");
      
      modalTitle.innerText = projectDetails[projectId].title;
      modalText.innerHTML  = projectDetails[projectId].text;
      
      modal.style.display = "block";
  });
});

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}
