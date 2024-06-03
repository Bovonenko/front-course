import React from "react";
import { createComponent } from "@lit/react";
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import styles from "./my-button.styles";

export enum ThemeButton {
	CLEAR = "clear",
}

@customElement("my-button")
class MyButton extends LitElement {
	static styles = [styles];

	@property({ reflect: true }) theme: ThemeButton = ThemeButton.CLEAR;

	render() {
		return html`
			<button>
				<slot></slot>
			</button>
		`;
	}
}

export const MyButtonWC = createComponent({
	react: React,
	tagName: "my-button",
	elementClass: MyButton,
});
