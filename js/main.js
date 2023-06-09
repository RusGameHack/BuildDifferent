let allMainTitle = document.querySelectorAll('.test-text'),
    index = 0, nextIndex = 0, nowOpen = 0,
    zIndexAll = 1;
    allMainTitle.forEach(element => {
        element.addEventListener('click', ()=>{
            console.log('Я появляюсь!');
            let textBlock = document.querySelectorAll(`.test-next-answer[data-button="${element.getAttribute('data-button')}"]`);
            nowOpen = element.getAttribute('data-button');
            console.log(textBlock)
            textBlock[0].classList.add('active');
            nextIndex++;
        })
        index++;
    });
    let continueBtns = document.querySelectorAll('.text-next-answer-continue');
    continueBtns.forEach(element => {
        element.addEventListener('click', ()=>{
            let blocks = document.querySelectorAll(`[data-button="${nowOpen}"]`);
            blocks[nextIndex].classList.add('active');
            nextIndex++;
        });
    });

    // ФИНИШ КЛИК
    let finish = document.querySelectorAll('.text-next-answer-finish');
    finish.forEach(element => {
        element.addEventListener('click', ()=>{
            setTimeout(() => {
                let popupThanks = document.querySelector('.popup-thanks');
                popupThanks.classList.add('active');
                setTimeout(() => {
                    popupThanks.classList.add('visible');  
                }, 500);
            }, 500);
        });
    });
    let finishBtn = document.querySelector('.popup-btn');
    finishBtn.addEventListener('click', ()=>{
        document.querySelectorAll('.visible').forEach(element => {
            element.classList.remove('visible');
        });
        setTimeout(() => {
            document.querySelectorAll('.active').forEach(element => {
                element.classList.remove('active');
            });
        }, 500);
        index = 0; nextIndex = 0; nowOpen = 0;
    });