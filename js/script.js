document.addEventListener("DOMContentLoaded", function () {
  const cadastro = document.querySelector("#cadastro a");
  const signUpFormLogin = document.querySelector(".sign-up-form-login a");

  // =================== texto de boas vindas ============================================
  const  loginText = document.querySelector(".login-text")
  const signUpText = document.querySelector("#signup-text")
 
  const showCadastro = () => {
    document.querySelector(".login-form").style.display = "none";
    document.querySelector(".login-form-sing-up").style.display = "flex";
     signUpText.innerHTML=`<h1>Seja Bem Vindo(a)!</h1>
      <p>Crie sua conta  para primeiro acesso</p>
    `
     
  };

  const showSignUpFormLogin = () => {
    document.querySelector(".login-form").style.display = "flex";
    document.querySelector(".login-form-sing-up").style.display = "none";

     loginText.innerHTML = `<h1>Olá!
        Seja bem-vindo(a) de volta.</h1>
        <p>Faça seu login para continuar acessando a página</p>`

 

  };

  cadastro.addEventListener("click", function (event) {
    event.preventDefault;
    showCadastro();
  });
  signUpFormLogin.addEventListener("click", function (event) {
    event.preventDefault;
    showSignUpFormLogin();
  });
});
