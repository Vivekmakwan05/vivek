const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "𝚠𝚎𝚋 𝚍𝚎𝚜𝚒𝚐𝚗𝚎𝚛";
            }, 0);
            setTimeout(() => {
                text.textContent = "𝚠𝚎𝚋 𝚍𝚎𝚜𝚒𝚐𝚗𝚎𝚛";
            }, 4000);
        }

        textLoad();
        setInterval(textLoad, 4000);
