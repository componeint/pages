/**
 * pages.module
 * Created by anonymous on 09/03/16 6:49.
 */

(function() {
    'use strict';

    angular
        .module('pages', [

            /* Shared */
            'appFoundation',
            'widgets',

            /* components */
            'seneschal',
            'dashboard'

        ]);

})();