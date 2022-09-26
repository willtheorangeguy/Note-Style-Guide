/**
 * @file
 * JavaScript behaviors for element help text (tooltip).
 */

(function ($, Drupal) {

  'use strict';

  // @see https://atomiks.github.io/tippyjs/v5/all-props/
  // @see https://atomiks.github.io/tippyjs/v6/all-props/
  Drupal.webform = Drupal.webform || {};
  Drupal.webform.elementHelpIcon = Drupal.webform.elementHelpIcon || {};
  Drupal.webform.elementHelpIcon.options = Drupal.webform.elementHelpIcon.options || {};

  /**
   * Element help icon.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.webformElementHelpIcon = {
    attach: function (context) {
      if (!window.tippy) {
        return;
      }

      // Hide on escape.
      // @see https://atomiks.github.io/tippyjs/v6/plugins/#hideonesc
      //
      // Converted from ES6 to ES5.
      // @see https://babeljs.io/repl/
      var hideOnEsc = {
        name: 'hideOnEsc',
        defaultValue: true,
        fn: function fn(_ref) {
          var hide = _ref.hide;

          function onKeyDown(event) {
            if (event.keyCode === 27) {
              hide();
            }
          }

          return {
            onShow: function onShow() {
              document.addEventListener('keydown', onKeyDown);
            },
            onHide: function onHide() {
              document.removeEventListener('keydown', onKeyDown);
            }
          };
        }
      };

      $(context).find('.js-webform-element-help').once('webform-element-help').each(function () {
        var $link = $(this);

        $link.on('click', function (event) {
          // Prevent click from toggling <label>s wrapped around help.
          event.preventDefault();
        });

        var options = $.extend({
          content: $link.attr('data-webform-help'),
          delay: 100,
          allowHTML: true,
          interactive: true,
          plugins: [hideOnEsc]
        }, Drupal.webform.elementHelpIcon.options);

        tippy(this, options);
      });
    }
  };

})(jQuery, Drupal);
;
var AU=AU||{};!function(e){function n(e,n,t,o){if("opening"===n||"open"===n)var a=t||"au-main-nav__content--closed",l=o||"au-main-nav__content--open";else var a=o||"au-main-nav__content--open",l=t||"au-main-nav__content--closed";!function(e,n){e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")}(e,a),function(e,n){e.classList?e.classList.add(n):e.className=e.className+" "+n}(e,l)}function t(e,n,t){function o(e){var n=t.apply(this,arguments);return!1===n&&(e.stopPropagation(),e.preventDefault()),n}function a(){var n=t.call(e,window.event);return!1===n&&(window.event.returnValue=!1,window.event.cancelBubble=!0),n}return e.addEventListener?(e.addEventListener(n,o,!1),{element:e,handler:o,event:n}):(e.attachEvent("on"+n,a),{element:e,handler:a,event:n})}function o(e){e.element.removeEventListener?e.element.removeEventListener(e.event,e.handler):e.element.detachEvent("on"+e.event,e.handler)}var a={},l={},c=!1;a.Toggle=function(i,u,s){if(!c){c=!0;try{window.event.cancelBubble=!0,event.stopPropagation()}catch(e){}"object"!=typeof s&&(s={});var r=i.getAttribute("aria-controls"),f=document.getElementById(r),p=f.querySelector(".au-main-nav__menu"),d=f.querySelector(".au-main-nav__overlay"),v=f.querySelector(".au-main-nav__toggle--close"),y=f.querySelector(".au-main-nav__toggle--open"),m=f.querySelector(".au-main-nav__focus-trap-top"),_=f.querySelector(".au-main-nav__focus-trap-bottom"),g=p.querySelectorAll("a, .au-main-nav__toggle"),b=-1===f.className.indexOf("au-main-nav__content--open"),S=p.offsetWidth,w=b?"opening":"";d.style.display="block",function(u,r){e.animate.Toggle({element:p,property:"left",openSize:0,closeSize:-1*S,speed:r||250,prefunction:function(){"opening"===w?(p.style.display="block",d.style.left=0,d.style.opacity=.5,"function"==typeof s.onOpen&&s.onOpen()):(d.style.opacity="0","function"==typeof s.onClose&&s.onClose())},postfunction:function(){"opening"===w?(v.focus(),m.setAttribute("tabindex",0),_.setAttribute("tabindex",0),l.focusTop=t(m,"focus",function(){g[g.length-1].focus()}),l.focusBottom=t(_,"focus",function(){g[0].focus()}),l.escKey=t(document,"keyup",function(){var e=e||window.event,n=function(e,n){return("undefined"!=typeof getComputedStyle?getComputedStyle(e,null):e.currentStyle).display}(d);27===e.keyCode&&"block"===n&&a.Toggle(i,r,s)}),"function"==typeof s.afterOpen&&s.afterOpen()):(y.focus(),m.removeAttribute("tabindex"),_.removeAttribute("tabindex"),o(l.focusTop),o(l.focusBottom),o(l.escKey),"function"==typeof s.afterClose&&s.afterClose()),n(u,w),n(document.body,w,"au-main-nav__scroll--unlocked","au-main-nav__scroll--locked"),p.style.display="",p.style.left="",d.style.display="",d.style.left="",d.style.opacity="",c=!1}})}(f,u)}},e.mainNav=a}(AU),"undefined"!=typeof module&&(module.exports=AU);;
var AU=AU||{};!function(e){function t(e,t,n){if(e===t)return{stepSize:0,steps:0,intervalTime:0};var o=t-e,i=n/o,a=o<0?-1:1,r=Math.abs(o/a);return i=n/r,Math.abs(i)<1e3/60&&(i=1e3/60,a=o/(r=Math.ceil(Math.abs(n/i)))),{stepSize:a,steps:r-1,intervalTime:i}}var n={};"undefined"!=typeof module&&(n.CalculateAnimationSpecs=t),n.GetCSSPropertyBecauseIE=function(t,n){if("undefined"!=typeof getComputedStyle)return window.getComputedStyle(t)[n];var o=t.currentStyle[n];return"auto"===o&&(o=e.animate.CalculateAuto(t,n)),o},n.CalculateAuto=function(e,t){var n,o;return"height"===t?(n=e.clientHeight,e.style[t]="auto",o=e.clientHeight,e.style[t]=n+"px"):(n=e.clientWidth,e.style[t]="auto",o=e.clientWidth,e.style[t]=n+"px"),parseInt(o)},n.Stop=function(e){clearInterval(e.AUanimation)},n.Run=function(n){var o=n.element,i=n.speed||250;void 0===o.length&&(o=[o]),"function"!=typeof n.callback&&(n.callback=function(){}),o[0].AUinteration=0,o[0].AUinterations=o.length;for(var a=0;a<o.length;a++){var r=o[a];e.animate.Stop(r);var l=parseInt(e.animate.GetCSSPropertyBecauseIE(r,n.property)),p=n.endSize;"auto"===n.endSize&&(p=e.animate.CalculateAuto(r,n.property));var u=t(l,p,i),c=l;u.stepSize<0?r.AUtoggleState="closing":u.stepSize>0&&(r.AUtoggleState="opening"),function(t,i,a,r,l){t.AUanimation=setInterval(function(){if(i===l||0===r.steps){if(e.animate.Stop(t),t.style[n.property]=l+"px",t.AUtoggleState="",o[0].AUinteration++,"auto"===n.endSize&&(t.style[n.property]=""),o[0].AUinteration>=o[0].AUinterations)return n.callback()}else a+=r.stepSize,t.style[n.property]=a+"px",r.steps--},Math.abs(r.intervalTime))}(r,l,c,u,p)}},n.Toggle=function(t){var n=t.element,o=t.property||"height",i=t.speed||250,a=void 0===t.closeSize?0:t.closeSize,r=void 0===t.openSize?"auto":t.openSize;void 0===n.length&&(n=[n]),"function"!=typeof t.prefunction&&(t.prefunction=function(){}),"function"!=typeof t.postfunction&&(t.postfunction=function(){}),"function"!=typeof t.callback&&(t.callback=function(){}),n[0].AUtoggleInteration=0,n[0].AUtoggleInterations=n.length;for(var l=0;l<n.length;l++){var p=n[l];e.animate.Stop(p);var u,c="",s="",f=parseInt(e.animate.GetCSSPropertyBecauseIE(p,t.property));if(f===a||"closing"===p.AUtoggleState)u=r,c="opening",s="open";else{if(f===a&&"opening"!==p.AUtoggleState)throw new Error("AU.animate.Toggle cannot determine state of element");u=a,c="closing",s="closed"}t.prefunction(p,c),e.animate.Run({element:p,endSize:u,property:o,speed:i,callback:function(){if(n[0].AUtoggleInteration++,n[0].AUtoggleInteration===n[0].AUinterations){var e=t.callback(p,s);return t.postfunction(p,s),e}t.postfunction(p,s)}})}},e.animate=n}(AU),"undefined"!=typeof module&&(module.exports=AU),"undefined"!=typeof exports&&(Object.defineProperty(exports,"__esModule",{value:!0}),eval("exports.default = AU"));;
/**
 * @file
 * Initializes all modifications.
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.modifiers = {

    attach: function attach(context, settings) {
      // Process only if there are some modifiers.
      if (typeof settings.modifiers !== 'undefined') {
        this.initAttributes(context, settings);
        this.initSettings(context, settings);
      }
    },

    initSettings: function (context, settings) {
      // Skip processing if there are no modifications.
      if (typeof settings.modifiers.settings !== 'undefined') {
        var modifications = [];

        // Group all modifications into single array.
        $.each(settings.modifiers.settings, function (index, group) {
          modifications = modifications.concat(group);
        });

        // Process all modifications.
        $.each(modifications, function (index, modification) {
          var callback = window[modification.namespace][modification.callback];
          if (typeof callback === 'function') {
            // Check number of callback arguments.
            if (callback.length > 3) {
              // Callback with context and selector for backward compatibility.
              callback(context, modification.selector, modification.media, modification.args);
            }
            else {
              // Limit elements by context.
              $(modification.selector).each(function () {
                if ($.contains(context, this)) {
                  callback(this, modification.media, modification.args);
                }
              });
            }
          }
        });
      }
    },

    initAttributes: function (context, settings) {
      // Skip processing if there are no attributes.
      if (typeof settings.modifiers.attributes !== 'undefined') {
        var attributes = {};

        // Group all attributes into single array.
        $.each(settings.modifiers.attributes, function (index, group) {
          $.each(group, function (media, selectors) {
            // Initialize array for this media.
            if (typeof attributes[media] === 'undefined') {
              attributes[media] = {};
            }
            $.each(selectors, function (selector, values) {
              attributes[media][selector] = values;
            });
          });
        });

        // Process all attributes immediately.
        this.toggleAttributes(context, attributes);

        var that = this;
        // Process all attributes again after resize.
        window.addEventListener('resize', function () {
          that.toggleAttributes(context, attributes);
        });
      }
    },

    toggleAttributes: function (context, attributes) {
      var enable = {};
      var disable = {};

      // Check all media queries validity and split selectors to sets.
      $.each(attributes, function (media, selectors) {
        if (window.matchMedia(media).matches) {
          // Fill these selectors for enabling.
          $.each(selectors, function (selector, values) {
            enable[selector] = values;
          });
        }
        else {
          // Fill these selectors for disabling.
          $.each(selectors, function (selector, values) {
            disable[selector] = values;
          });
        }
      });

      // Remove unwanted attributes from target objects.
      $.each(disable, function (selector, values) {
        // Limit elements by context.
        var elements = $(selector).filter(function () {
          return $.contains(context, this);
        });
        if (elements.length) {
          // Process all attributes.
          $.each(values, function (attribute, value) {
            if (attribute === 'class') {
              $.each(value, function (index, item) {
                elements.removeClass(item);
              });
            }
            else {
              elements.prop(attribute, null);
            }
          });
        }
      });

      // Set required attributes to target objects.
      $.each(enable, function (selector, values) {
        // Limit elements by context.
        var elements = $(selector).filter(function () {
          return $.contains(context, this);
        });
        if (elements.length) {
          // Process all attributes.
          $.each(values, function (attribute, value) {
            if (attribute === 'class') {
              $.each(value, function (index, item) {
                elements.addClass(item);
              });
            }
            else if (typeof value === 'object') {
              elements.prop(attribute, value.join(' '));
            }
            else {
              elements.prop(attribute, value);
            }
          });
        }
      });
    }
  };

})(jQuery, Drupal);
;
