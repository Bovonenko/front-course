import React from "react";
import { createComponent } from "@lit/react";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import styles from "./my-loader.styles";

@customElement("my-loader")
class MyLoader extends LitElement {
	static styles = [styles];

	render() {
		return html`
			<div class="lds-facebook">
				<div></div>
				<div></div>
				<div></div>
			</div>
		`;
	}
}

export const MyLoaderWC = createComponent({
	react: React,
	tagName: "my-loader",
	elementClass: MyLoader,
});
