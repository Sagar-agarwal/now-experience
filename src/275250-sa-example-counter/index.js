import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";

const view = (state, { updateState }) => {
	return (
		<div>
			<h1>Example counter</h1>
			<span>
				<button type="button">Increment</button>
			</span>
			<span>
				<button type="button">Reset</button>
			</span>
			<div>Value: </div>
		</div>
	);
};

createCustomElement("x-275250-sa-example-counter", {
	renderer: { type: snabbdom },
	view,
	styles
});
