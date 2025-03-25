
// GUARDAR A IMAGEM NO PERFIL
      function loadImage(event) {
        const image = document.getElementById("profileImage");
        const file = event.target.files[0];

        if (file) {
          const reader = new FileReader();
          reader.onload = function (e) {
            image.src = e.target.result; // Define a nova imagem
          };
          reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados
        }
      }

// ESCONDER A BARRA LATERAL
      $(".barLado").hide();

      $(".bars").click(function () {
        if ($(".barLado").is(":visible")) {
          $(".barLado").slideUp("slow");
        } else {
          $(".barLado").slideDown("slow");
        }
      });


      // Função para atualizar o perfil com os dados do usuário
      function updateProfile() {
        const currentUser = JSON.parse(localStorage.getItem("currentUser "));

        if (currentUser) {
          document.querySelector(".Name").textContent = currentUser.firstname; // Atualiza o nome
          document.querySelector(".Email").textContent = currentUser.email; // Atualiza o email
        }
      }

      // Chama a função ao carregar a página
      window.onload = updateProfile;

// Função para carregar a imagem
      function loadImage(event) {
        const image = document.getElementById("profileImage");
        const file = event.target.files[0];

        if (file) {
          const reader = new FileReader();
          reader.onload = function (e) {
            image.src = e.target.result; // Define a nova imagem
            localStorage.setItem("profileImage", e.target.result); // Armazena a imagem no localStorage
          };
          reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados
        }
      }

      // Função para atualizar o perfil com os dados do usuário
      function updateProfile() {
        const currentUser = JSON.parse(localStorage.getItem("currentUser "));

        if (currentUser) {
          document.querySelector(".Name").textContent = currentUser.firstname; // Atualiza o nome
          document.querySelector(".Email").textContent = currentUser.email; // Atualiza o email
        }

        // Carrega a imagem de perfil do localStorage
        const storedImage = localStorage.getItem("profileImage");
        if (storedImage) {
          document.getElementById("profileImage").src = storedImage; // Define a imagem armazenada
        }
      }

      // Chama a função ao carregar a página
      window.onload = function () {
        updateProfile(); // Atualiza o perfil
      };

      // modo claro/escuro -------------------------------------------------------------------------------
      $(".sunMoon").click(function () {
        $("body").toggleClass("claro");
      });

      $(".sunMoon").click(function () {
        $("header").toggleClass("headerclear");
      });

      $(".sunMoon").click(function () {
        $("nav").toggleClass("navclear");
      });

      $(".sunMoon").click(function () {
        $("themeToggle").toggleClass("themeToggleClear");
      });

      $(".sunMoon").click(function () {
        $(".profile-cd").toggleClass(".profile-cdClear");
      });
