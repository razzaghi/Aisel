'use strict';

/**
 * This file is part of the Aisel package.
 *
 * (c) Ivan Proskuryakov
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @name            AiselAddressing
 * @description     ...
 */

define(['app'], function (app) {
    app.controller('AddressingRegionDetailsCtrl', function ($scope, $stateParams, regionService, $state, Environment) {
        $scope.details = {
            id: $stateParams.id,
            name: 'Region'
        };
        var handleSuccess = function (data, status) {
            $scope.item = {};
            $scope.item.item = data;
        };
        regionService.get($scope.details.id).success(handleSuccess);

        $scope.editCancel = function () {
            $state.transitionTo('regions', {locale: Environment.currentLocale()});
        }
    });
});