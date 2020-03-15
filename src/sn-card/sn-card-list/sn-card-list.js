import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import "../sn-flash-card";
import { CARDS } from "../constants";
import view from "./view";
import styles from "./styles.scss";

createCustomElement("x-275250-sn-card-list", {
	initialState: {
		cards: CARDS
	},
	renderer: { type: snabbdom },
	view,
	styles
});
