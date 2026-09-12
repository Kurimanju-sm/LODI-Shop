        console.log("main.js 실행됨");
        
        
        /* =========================================
           검색
        ========================================== */

        function search_onclick_submit() {

            const input =
                document.getElementById(
                    "searchInput"
                );


            const keyword =
                input.value.trim();


            if (keyword === "") {

                alert(
                    "검색할 상품명을 입력해주세요."
                );

                return;
            }


            /*
             * 현재는 실제 상품 DB 검색이 아니라
             * 입력값을 확인하는 단계
             */

            alert(
                "검색 기능은 준비 중입니다."
            );

        }



        /* Enter 키 검색 */

        document
            .getElementById("searchInput")
            .addEventListener(
                "keydown",
                function(event) {

                    if (event.key === "Enter") {

                        search_onclick_submit();

                    }

                }
            );



        /* =========================================
           시세검색
        ========================================== */

        function openPriceSearch(event) {

            event.preventDefault();

            document
                .getElementById("searchInput")
                .focus();

        }



        /* =========================================
           아직 준비되지 않은 기능
        ========================================== */

        function notReady(event, feature) {

            event.preventDefault();

            alert(
                `${feature} 기능은 준비 중입니다.`
            );

        }



        /* =========================================
           즐겨찾기
        ========================================== */

        function addFavorite(event) {

            event.preventDefault();


            alert(
                "Ctrl + D 키를 누르면 즐겨찾기에 추가하실 수 있습니다."
            );

        }



        /* =========================================
           새로고침시 스크롤 복원 방지
        ========================================== */

        history.scrollRestoration =
            "manual";



        /* =========================================
           Header 스크롤
        ========================================== */

        let didScroll = false;

        let lastScrollTop = 0;

        const delta = 5;


        const header =
            document.getElementById(
                "header"
            );


        const navbarHeight =
            header.offsetHeight;


        $(window).scroll(
            function() {

                didScroll = true;

            }
        );


        setInterval(
            function() {

                if (didScroll) {

                    hasScrolled();

                    didScroll = false;

                }

            },
            250
        );


        function hasScrolled() {

            const st =
                $(window).scrollTop();


            if (
                Math.abs(
                    lastScrollTop - st
                ) <= delta
            ) {

                return;

            }


            if (
                st > lastScrollTop &&
                st > navbarHeight
            ) {

                header.style.top =
                    `-${navbarHeight}px`;

            } else {

                if (
                    st + $(window).height()
                    < $(document).height()
                ) {

                    header.style.top =
                        "0px";

                }

            }


            lastScrollTop = st;

        }



        /* =========================================
           사이드 배너
        ========================================== */

        const sideBanner =
            $(".sideBanner");


        if (sideBanner.length > 0) {

            const floatPosition =
                parseInt(
                    sideBanner.css("top")
                );


            $(window).scroll(
                function() {

                    const currentTop =
                        $(window).scrollTop();


                    const bannerTop =
                        currentTop +
                        floatPosition +
                        80;


                    sideBanner
                        .stop()
                        .animate(
                            {
                                "top":
                                    bannerTop + "px"
                            },
                            400
                        );

                }
            ).scroll();

        }

        import {
            initializeApp
        }
        from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";


        import {
            getAuth,
            onAuthStateChanged,
            signOut
        }
        from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";


        const firebaseConfig = {

            apiKey:
                "AIzaSyDmj13K1RDWwGBP20W_qjR7SE7r0hIBg0I",

            authDomain:
                "capstone-design-7720e.firebaseapp.com",

            projectId:
                "capstone-design-7720e",

            storageBucket:
                "capstone-design-7720e.firebasestorage.app",

            messagingSenderId:
                "315419868474",

            appId:
                "1:315419868474:web:91eb93d2898b9881a1a403",

            measurementId:
                "G-4PGY64H6BY"

        };


        /* =========================================
                   Firebase 코드드
           ========================================= */

        const app =
    initializeApp(firebaseConfig);

const auth =
    getAuth(app);


const userNameDisplay =
    document.getElementById(
        "userNameDisplay"
    );

const logoutBtn =
    document.getElementById(
        "logoutBtn"
    );


onAuthStateChanged(
    auth,
    (user) => {

        if (user) {

            const name =
                user.displayName ||
                user.email;

            userNameDisplay.textContent =
                `${name} 님 환영합니다!`;

            logoutBtn.style.display =
                "inline-block";

        } else {

            userNameDisplay.textContent =
                "로그인이 필요합니다.";

            logoutBtn.style.display =
                "none";
        }

    }
);


logoutBtn.addEventListener(
    "click",
    () => {

        signOut(auth)

            .then(() => {

                alert(
                    "로그아웃 되었습니다."
                );

                window.location.reload();

            })

            .catch((error) => {

                console.error(
                    "로그아웃 실패:",
                    error
                );

            });

    }
);