const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Web Designer";
            }, 0);
            setTimeout(() => {
                text.textContent = "Web Developer";
            }, 4000);
        }

        textLoad();
        setInterval(textLoad, 4000);