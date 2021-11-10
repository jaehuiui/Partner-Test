import React from "react";
import styles from "./text-button.module.scss";
import classnames from "classnames";

interface TextButtonProp {
	size: string;
	content: string;
}

export default function TextButton({ size, content }: TextButtonProp) {
	return (
		<div className={classnames(styles.wrapper, styles[size])}>{content}</div>
	);
}
