import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
import style from "./counter.scss";

const view = (state, { updateState }) => {
	const { tally } = state;
	return (
		<div className="counter">
			<h1>Example counter</h1>
			<span>
				<button
					type="button"
					on-click={() => updateState({ tally: tally + 1 })}
				>
					Increment
				</button>
			</span>
			<span>
				<button type="button" on-click={() => updateState({ tally: 0 })}>
					Reset
				</button>
			</span>
			<div>Value: {tally}</div>
		</div>
	);
};

createCustomElement("x-275250-sa-example-counter", {
	renderer: { type: snabbdom },
	initialState: {
		tally: 0
	},
	view,
	styles: style
});
