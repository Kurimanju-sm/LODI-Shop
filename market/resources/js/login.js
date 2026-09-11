import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyDmj13K1RDWwGBP20W_qjR7SE7r0hIBg0I",
  authDomain: "capstone-design-7720e.firebaseapp.com",
  projectId: "capstone-design-7720e",
  storageBucket: "capstone-design-7720e.appspot.com",
  messagingSenderId: "315419868474",
  appId: "1:315419868474:web:91eb93d2898b9881a1a403",
  measurementId: "G-4PGY64H6BY"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

let myName = "익명 사용자";

// DOM 요소 가져오기
const btnLogin = document.getElementById("btnLogin");
const btnLogout = document.getElementById("btnLogout");
const userInfo = document.getElementById("userInfo");

// 로그인 상태 변경 감지
onAuthStateChanged(auth, user => {
  if (user) {
    myName = user.displayName || user.email || "익명 사용자";
    userInfo.textContent = `로그인: ${myName}`;
    btnLogin.style.display = "none";
    btnLogout.style.display = "inline-block";
  } else {
    myName = "익명 사용자";
    userInfo.textContent = "로그아웃 상태";
    btnLogin.style.display = "inline-block";
    btnLogout.style.display = "none";
  }
});

// 로그인 버튼 클릭 이벤트
btnLogin.addEventListener("click", () => {
  signInWithPopup(auth, provider).catch(console.error);
});

// 로그아웃 버튼 클릭 이벤트
btnLogout.addEventListener("click", () => {
  signOut(auth).catch(console.error);
});
