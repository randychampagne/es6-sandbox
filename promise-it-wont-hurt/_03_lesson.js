/*
	# Rejecting a Promise

	After the last session, you should be able to create a promise, fulfill it
	with a value, and read that value after the fulfillment of the promise. Now,
	not all promises result in a successful execution; some errors may have
	happened in the process. That's where promise rejection comes into play.

	When a promise is rejected, this is typically (though not always) used to
	indicate that a value was not successfully obtained by the promise. Promises
	provide a way to pass the specific error that prevents the successful
	execution.

	Once a promise has been rejected, it can never be fulfilled (nor rejected
	again). This aspect of promises will be explored deeper in the next lesson.
*/