'use strict';

(window => {
	/**
	 * Executes the callback if adblocker is present.
	 *
	 * @param {function} callback The first number.
	 */
	const maari = callback => {
		const fakeAdFiles = ['ad.min.js', 'showAds.js', 'ads.min.js'];
		fakeAdFiles.forEach(fakeAdFile => {
			const xhr = new XMLHttpRequest();
			xhr.open('GET', fakeAdFile);
			xhr.send(null);
			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 0) {
						callback();
					}
				} else {
					if (xhr.status !== 404) {
						callback();
					}
				}
			};
		});
	};
	window.maari = maari;
})(window);
