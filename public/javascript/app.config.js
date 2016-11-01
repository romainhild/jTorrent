angular.
    module('jTorrentApp').
    config(['$locationProvider', '$routeProvider',
	    function config($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');
		
		$routeProvider.
		    when('/torrents', {
			template: '<h2>Hello</h2>'
		    }).
		    otherwise('/torrents');
	    }
	   ]);
