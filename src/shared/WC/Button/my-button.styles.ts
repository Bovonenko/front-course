import { css } from "lit";

export default css`
	* {
		box-sizing: border-box;
	}

	:host {
		display: block;
	}

	button {
		color: var(--inverted-secondary-color);
	}

	button:hover {
		cursor: pointer;
	}

	:host([theme="clear"]) button {
		padding: 0;
		margin: 0;
		border: none;
		background: none;
		outline: none;
	}
`;
