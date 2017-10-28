'use strict';

describe('Detect Adblock', function() {
	const foo = (cb1, cb2) => {
		window.maari(() => {
			cb1();
		});
		setTimeout(() => {
			cb2();
		}, 6000);
	};
	it('must fire', function(done) {
		foo(done, () => {
			done.fail("It didn't detect adblock plugin");
		});
		expect().nothing();
	});
});
