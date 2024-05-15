export default class InputNotFoundError extends Error {
	constructor(selector: string) {
		super(`Input element not found for '${selector}'`);

		// Set the prototype explicitly.
		Object.setPrototypeOf(this, InputNotFoundError.prototype);
	}
}
