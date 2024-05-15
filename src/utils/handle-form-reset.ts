export default function handleFormReset(
	input: HTMLInputElement,
	hiddenInput?: HTMLInputElement,
) {
	input.form?.addEventListener("reset", () => {
		input.placeholder = input.dataset.defaultPlaceholder ?? "";
		if (hiddenInput != null)
			hiddenInput.value = hiddenInput.dataset.defaultValue ?? "";
	});
}
