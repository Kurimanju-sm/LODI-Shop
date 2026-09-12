import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDmj13K1RDWwGBP20W_qjR7SE7r0hIBg0I",
    authDomain: "capstone-design-7720e.firebaseapp.com",
    projectId: "capstone-design-7720e",
    storageBucket: "capstone-design-7720e.firebasestorage.app",
    messagingSenderId: "315419868474",
    appId: "1:315419868474:web:91eb93d2898b9881a1a403",
    measurementId: "G-4PGY64H6BY"
  };
  

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const showSignupLink = document.getElementById('show-signup');
const showLoginLink = document.getElementById('show-login');

showSignupLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
});

showLoginLink.addEventListener('click', (e) => {
  e.preventDefault();
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';
});

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // 폼 제출 기본 동작 막기

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    alert(`로그인 성공! 환영합니다, ${user.email}`);
    // 로그인 성공 후 할 작업 (예: 페이지 이동)
    window.location.href = '../main.html';

  } catch (error) {
    alert('로그인 실패: ' + error.message);
  }
});

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  if (password.length < 6) {
    alert('비밀번호는 6자 이상이어야 합니다.');
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert(`회원가입 성공! 환영합니다, ${userCredential.user.email}`);
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
  } catch (error) {
    alert('회원가입 실패: ' + error.message);
  }
});
        
        const labels = document.querySelectorAll('.form-control label');

        labels.forEach((label) => {
        label.innerHTML = label.textContent
            .split('')
            .map((letter, idx) => `<span style="transition-delay:${idx * 20}ms">${letter}</span>`)
            .join('');
        });