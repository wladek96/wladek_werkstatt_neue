document.addEventListener("DOMContentLoaded", function() {
  var lastElementClicked;
  var PrevLink = document.querySelector('a.link-btn');
  var NextLink = document.querySelector('a');




  Barba.Pjax.init();
  Barba.Prefetch.init();

  Barba.Dispatcher.on('linkClicked', function(el) {
    lastElementClicked = el;
  });

  var MovePage = Barba.BaseTransition.extend({
    start: function() {
      this.originalThumb = lastElementClicked;

      Promise
        .all([this.newContainerLoading, this.scrollTop()])
        .then(this.movePages.bind(this));
    },

    scrollTop: function() {
      var deferred = Barba.Utils.deferred();
      var obj = {
        y: window.pageYOffset
      };

      TweenLite.to(obj, 0.4, {
        y: 0,
        onUpdate: function() {
          if (obj.y === 0) {
            deferred.resolve();
          }

          window.scroll(0, obj.y);
        },
        onComplete: function() {
          deferred.resolve();
        }
      });

      return deferred.promise;
    },

    movePages: function() {
      var _this = this;
      var goingForward = true;
      this.updateLinks();

      if (this.getNewPageFile() === this.oldContainer.dataset.a) {
        goingForward = false;
      }

      TweenLite.set(this.newContainer, {
        visibility: 'visible',
        xPercent: goingForward ? 100 : -100,
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0
      });

      TweenLite.to(this.oldContainer, 0.6, {
        xPercent: goingForward ? -100 : 100
      });
      TweenLite.to(this.newContainer, 0.6, {
        xPercent: 0,
        onComplete: function() {
          TweenLite.set(_this.newContainer, {
            clearProps: 'all'
          });
          _this.done();
        }
      });
    },

    updateLinks: function() {
      NextLink.href = this.newContainer.dataset.a;
    },

    getNewPageFile: function() {
      return Barba.HistoryManager.currentStatus().url.split('/').pop();
    }
  });

  Barba.Pjax.getTransition = function() {
    return MovePage;
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
  path: 'data.json'
})
});

});
