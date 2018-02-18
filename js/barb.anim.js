Barba.Pjax.start();
Barba.Prefetch.init();

var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    /**
     * This function is automatically called as soon the Transition starts
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!)
     */

    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    /**
     * this.oldContainer is the HTMLElement of the old Container
     */

    return $(this.oldContainer).animate({
      opacity: 0
    }).promise();
  },

  fadeIn: function() {
    /**
     * this.newContainer is the HTMLElement of the new Container
     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */

    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();

    $el.css({
      visibility: 'visible',
      opacity: 0
    });

    $el.animate({
      opacity: 1
    }, 1000, function() {
      /**
       * Do not forget to call .done() as soon your transition is finished!
       * .done() will automatically remove from the DOM the old Container
       */

      _this.done();
    });
  }
});

/**
 * Next step, you have to tell Barba to use the new Transition
 */

Barba.Pjax.getTransition = function() {
  /**
   * Here you can use your own logic!
   * For example you can use different Transition based on the current page or link...
   */

  return FadeTransition;
};





Barba.Dispatcher.on('newPageReady', function() {
  $('.link-btn').on('click', function() {
    $('.menu-toggle').toggleClass('open');
  });
});


Barba.Dispatcher.on('newPageReady', function() {
  var anim = bodymovin.loadAnimation({
      container: document.getElementById('lottie'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'data.json',
      rendererSettings: {
        progressiveLoad: true,
      }
    }),
    anim = bodymovin.setQuality(1);
});

Barba.Dispatcher.on('transitionCompleted', function() {
  AOS.init({
    offset: 0,
    duration: 400,
    easing: 'ease-in-sine',
    disable: window.innerWidth > 768,
  });
});
