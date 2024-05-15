import InputNotFoundError from "../errors/input-not-found-error";

/**
 * gets and prepares the input element to be used
 * @param selector the css selector string
 * @returns the input element
 */
export default function prepareInput(selector: string) {
	const input: HTMLInputElement | null = document.querySelector(selector);

	if (input == null) throw new InputNotFoundError(selector);

	input.autocomplete = "off";
	input.autocapitalize = "off";
	input.spellcheck = false;
	input.defaultValue = input.value;
	input.dataset.defaultPlaceholder = input.placeholder;
	input.value = "";
	return input;
}
