import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import view from "./view";
import styles from "./styles.scss";
import { CARDS } from "../constants";

createCustomElement("x-275250-sn-card-list", {
	initialState: {
		cards: CARDS
	},
	renderer: { type: snabbdom },
	view: view,
	styles
});
