import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import view from "./view";
import styles from "./styles.scss";

createCustomElement("sn-flash-card", {
	renderer: { type: snabbdom },
	view,
	styles
});
