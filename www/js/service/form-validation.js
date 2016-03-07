angular.module('bolunbao.validation', []).
provider('Validation', function () {
    this.errorMessages = {};

    this.$get = function () {
        var errorMessages = this.errorMessages;
        return {
            error: function (errorType) {
                return errorMessages[errorType] || errorType;
            }
        };
    };

    this.setErrorMessage = function (messages) {
        this.errorMessages = messages;
    }
}).
directive('validationMessage', ['Validation', function (Validation) {
    return {
        restrict: 'A',
        scope: {
            validationForm: '=',
            validationField: '=',
            errors: '=',
            errorClass: '@'
        },

        controller: function ($scope) {
            $scope.errorFor = function (errorKey) {
                return Validation.error(errorKey);
            };

            $scope.buildErrorClass = function () {
                return this.errorClass || "inline-help text-error";
            };

            console.log($scope.validationField)
        },

        templateUrl: "template/directive/errorMessage.html"
    }
}])