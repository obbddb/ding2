/**
 * @file
 * Implement opt-out option for the Webtrekk cookie.
 */

(function($) {

  "use strict";

  Drupal.behaviors.ding_webtrekk = {
    attach: function(context) {
      // If Webtrekk is not setup correctly, we might not have this.
      if (typeof webtrekkV3 === 'undefined') {
        return;
      }

      $('.webtrekk-opt-out', context).click(function() {
        webtrekk = new webtrekkV3();
        // track the opt-out event in Webtrekk.
        webtrekk.sendinfo({linkId: 'event_optout'});
        // Set the opt-out cookie (for 5 years).
        webtrekk.setCookie ('webtrekkOptOut', 1, 60 * 60 * 24 * 30 * 12 * 5);
        alert(Drupal.t('Dear user, you have successfully excluded yourself from tracking.'));
        return false;
      });
    }
  };
})(jQuery);
