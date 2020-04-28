class Quality {

    init() {
        this.mobileSlider();
        this.selectTab();
    }

    detectMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    selectTab() {
        $('.tab-btn').on('click', function (e) {
            const slide = e.target.dataset.slide;
            $('.tab-btn').removeClass('tab-active');
            $(this).addClass('tab-active');
            $('.quality-wrap').addClass('d-none');
            $('.quality-wrap[data-slide="'+ slide +'"]').removeClass('d-none');
        });
    }

    mobileSlider() {
        if (this.detectMobileDevice()) {
            let tabs = document.querySelectorAll('.tab');
            for (let i = 0; i < tabs.length; i++){
                tabs[i].classList.add('d-none');
            }
            tabs[0].classList.remove('d-none');
        }
        document.querySelector('.quality-right__btn').addEventListener('click', (e) => {
            e.preventDefault();
            this.slideNext();
        });
        document.querySelector('.quality-left__btn').addEventListener('click', (e) => {
            e.preventDefault();
            this.slidePrev();
        });
    }

    slideNext() {
        let tabs = document.querySelectorAll('.tab');
        for (let i = 0; i < tabs.length; i++){
            if (!tabs[i].classList.contains('d-none')) {
                tabs[i].classList.add('d-none');
                tabs[i + 1].classList.remove('d-none');
                tabs[i + 1].children[0].classList.add('tab-active');
                let name = tabs[i + 1].children[0].dataset.slide;
                this.showSlide(name);
                return;
            }
        }
    }

    slidePrev() {
        let tabs = document.querySelectorAll('.tab');
        for (let i = 0; i < tabs.length; i++){
            if (!tabs[i].classList.contains('d-none')) {
                tabs[i].classList.add('d-none');
                tabs[i - 1].classList.remove('d-none');
                tabs[i - 1].children[0].classList.add('tab-active');
                let name = tabs[i - 1].children[0].dataset.slide;
                this.showSlide(name);
                return;
            }
        }
    }

    showSlide(name){
        $('.quality-wrap').addClass('d-none');
        $('.quality-wrap[data-slide="'+ name +'"]').removeClass('d-none');
    }



}

export default Quality;
