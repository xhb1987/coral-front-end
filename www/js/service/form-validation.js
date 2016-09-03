angular.module('bolunbao.validation', []).
provider('Validation', function () {
    this.errorMessages = {};

    this.$get = function () {
        var errorMessages = this.errorMessages;
        return {
            error: function (errorType, errors) {
                return errorMessages[errorType]['message'] || errorType;
            }, 

            errorWeight: function (errorType) {

                return errorMessages[errorType]['weight'] || 0;
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

            console.log($scope.errors);
            $scope.errors = {integer: true, phone: true};
            $scope.errorFor = function (errorKey) {
                return Validation.error(errorKey, $scope.errors);
            };

            $scope.errorWeight = function (errorKey) {
                return Validation.errorWeight(errorKey);
            }

            $scope.buildErrorClass = function () {
                return this.errorClass || "inline-help text-error";
            };

            console.log($scope.validationField)
        },

        templateUrl: "template/directive/errorMessage.html"
    }
}]).
directive('integer', function () {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, elm, attr, ctrl) {
            if (!ctrl) {
                return;
            }

            var integerRegx = /^\-?\d+$/,
                integerValue;
            
            attr.$observe('integer', function (value) {
                console.log(value)
                ctrl.$validate();
            });

            ctrl.$validators.integer = function (value) {
                console.log(value)
                return ctrl.$isEmpty(value) || (integerRegx.test(value))
            }
        }
    }
}).
directive('phone', function () {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, elm, attr, ctrl) {
            if (!ctrl) {
                return;
            }

            var phoneRegx = /^1[3-9][0-9]\d{8}$/,
                phoneValue;
            
            attr.$observe('phone', function (value) {
                ctrl.$validate();
            });

            ctrl.$validators.phone = function (value) {
                return ctrl.$isEmpty(value) || (phoneRegx.test(value))
            }
        }
    }
})