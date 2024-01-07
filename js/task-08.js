//Scrieți un script de control al formularului de login.

//<form class="login-form">
 // <label>
   // Email
  //  <input type="email" name="email" />
 // </label>
 // <label>
 //   Password
 //   <input type="password" name="password" />
 // </label>
 // <button type="submit">Login</button></form>

//Gestionarea trimiterii formularului form.login-form trebuie să fie în cadrul evenimentului submit.
//La trimiterea formularului, pagina nu trebuie să se reîncarce.
//Dacă formularul are câmpuri goale, afișați un alert care avertizează că toate câmpurile trebuie completate.
//Dacă utilizatorul a completat toate câmpurile și a trimis formularul, colectați valorile câmpului într - un
//obiect în care numele câmpului va fi numele proprietății, iar valoarea câmpului va fi valoarea proprietății.
//Pentru a accesa elementele formularului, folosiți proprietatea elements.
//Afișați obiectul cu datele introduse în consolă și ștergeți valorile câmpurilor din formular, folosind metoda reset.

const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
    alert("Please fill in the required fields!");
    };
    form.reset();
};