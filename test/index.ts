import autoComplete from "../src";

autoComplete({
	data: () => [{ name: "pizza" }, { name: "hot dog" }],
	element: "#autocomplete",
	keys: ["name"],
});
