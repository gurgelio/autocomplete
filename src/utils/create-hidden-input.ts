export default function createHiddenInput(input: HTMLInputElement) {
	const hiddenInput = document.createElement("input");
	hiddenInput.type = "hidden";
	hiddenInput.dataset.defaultValue = input.value;
	hiddenInput.value = input.value;
	hiddenInput.name = input.name;

	input.insertAdjacentElement("afterend", hiddenInput);

	return hiddenInput;
}
