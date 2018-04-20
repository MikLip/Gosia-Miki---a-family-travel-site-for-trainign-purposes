class Slider {
    constructor() {
        this.activeSlide = 0; //aktywny numer slajdu
        this.$slides = $('.main-banner-slide');
        this.$btnNext = $('.main-banner-next');
        this.$btnPrev = $('.main-banner-prev');
        this.slidePauseTime = 3000;

        this.time = setTimeout(() => {
            this.showNextSlide()
        }, this.slidePauseTime);
    }

    showPrevSlide() {
        this.activeSlide--;
        if (this.activeSlide < 0) {
            this.activeSlide = this.$slides.length-1;
        }
        this.$slides.removeClass('active');
        this.$slides.eq(this.activeSlide).addClass('active');

        clearTimeout(this.time);
        this.time = setTimeout(() => {
            this.showNextSlide()
        }, this.slidePauseTime);
    }
    showNextSlide() {
        this.activeSlide++;
        if (this.activeSlide > this.$slides.length-1) {
            this.activeSlide = 0;
        }
        this.$slides.removeClass('active');
        this.$slides.eq(this.activeSlide).addClass('active');

        clearTimeout(this.time);
        this.time = setTimeout(() => {
            this.showNextSlide()
        }, this.slidePauseTime);
    }

    bindEvents() {
        this.$btnPrev.on('click', () => {
            this.showPrevSlide();
        });
        this.$btnNext.on('click', () => {
            this.showNextSlide();
        });
    }    
}

export { Slider };