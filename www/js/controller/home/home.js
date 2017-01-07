angular.module('home', [])
.controller('homeController', ['$rootScope', '$scope', '$location', '$http', '$q', '$timeout', '$window', '$ionicSideMenuDelegate', 'Product', function ($rootScope, $scope, $location, $http, $q, $timeout, $window, $ionicSideMenuDelegate, Product) {
    // get products
    // Product.getProducts(10).then(function (productArray) {
    //     $scope.products = productArray;        
    // });

    // $scope.goToProductDetailPage = function (product) {
    //     Product.setProductObject(product);

    //     $timeout(function () {
    //         $location.path('product/detail');
    //     }, 0);
    //     console.log('go to detail page')        
    // }
    // console.log('home')

    var searchService,
        markers = [];
    function init() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(mapInit);
        } else {
            console.log('not support html 5');
        }
    }

    function mapInit(position) {
        var geoLatitude = position.coords.latitude;
        var geoLongitude = position.coords.longitude;

        var myLatlng = new qq.maps.LatLng(geoLatitude, geoLongitude);
        var myOptions = {
            zoomControl: true,
            zoom: 15,
            center: myLatlng,      
            mapTypeId: qq.maps.MapTypeId.ROADMAP,
            mapTypeControlOptions: {
                position: qq.maps.ControlPosition.BOTTOM_RIGHT
            }
        }
        var map = new qq.maps.Map(document.getElementById("container"), myOptions);
        
        var marker = new qq.maps.Marker({
            position: myLatlng,
            map: map
        });

        marker.setVisible(true);
        marker.setAnimation(qq.maps.MarkerAnimation.DOWN);
        marker.setDraggable(true);

        var anchor = new qq.maps.Point(3, -30),
            size = new qq.maps.Size(42, 68),
            origin = new qq.maps.Point(0, 0),
            icon = new qq.maps.MarkerImage(
                "/doc_v2/img/nilt.png",
                size,
                origin,
                anchor
            )

        var anchorb = new qq.maps.Point(3, -30),
            sizeb = new qq.maps.Size(42, 11),
            origin = new qq.maps.Point(0, 0),
            iconb = new qq.maps.MarkerImage(
                "/doc_v2/img/nilb.png",
                sizeb,
                origin,
                anchorb
            );

        marker.setShadow(iconb);
        // marker.setTitle('Test');
        // init my postion marker
        markers.push(marker);

        var latlngBounds = new qq.maps.LatLngBounds();
        searchService = new qq.maps.SearchService({
            complete: function (results) {
                var pois = results.detail.pois;
                for (var i=0, l=pois.length; i<l; i++) {
                    var poi = pois[i];
                    latlngBounds.extend(poi.latLng);
                    var marker = new qq.maps.Marker({
                        map: map,
                        position: poi.latLng
                    });

                    marker.setTitle(poi.name);
                    markers.push(marker);
                };
                map.fitBounds(latlngBounds);
            }
        })

        // var info = new qq.maps.InfoWindow({
        //     map: map
        // });

        // info.open();
        // info.setContent('Set draggle: ' + marker.getDraggable());
        // info.setPosition(marker.getPosition());

        // qq.maps.event.addListener(marker, 'click', function() {
        //     info.open();
        //     info.setContent('Im test info');
        //     info.setPosition(marker.getPosition());
        // });

        // qq.maps.event.addListener(marker, 'dragend', function() {
        //     info.open();
        //     info.setContent('Im drag end');
        //     info.setPosition(marker.getPosition());
        // })

        // cityLocation = new qq.maps.CityService({
        //     complete: function(result){
        //         map.setCenter(result.detail.latLng);
        //     }
        // });

        // cityLocation.searchLocalCity();
    }

    function loadScript() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "http://map.qq.com/api/js?v=2.exp&key=AVCBZ-NINWI-L5MG7-5PB4X-5BL7J-PFFSJ&callback=init";
        document.body.appendChild(script);
    };

    function clearOverlay(overlays) {
        var overlay;
        while(overlay = overlays.pop()) {
            overlay.setMap(null);
        }
    }

    $window.init = init;
    angular.element(document).ready(function () {
        loadScript();
    })

    $scope.mapSearchSubmit = function () {
        console.log(markers);
        clearOverlay(markers);
        searchService.setLocation('深圳');
        searchService.search($scope.mapSearch);       
    }

    $scope.openSideMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    }
}])