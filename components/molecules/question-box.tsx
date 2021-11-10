import React from "react";
import styles from "./question-box.module.scss";
import classnames from "classnames";

export interface QuestionBoxProps {
	question: string;
}

export default function QuestionBox({ question }: QuestionBoxProps) {
	return (
		<div className={classnames(styles.wrapper)}>
			<span>{question}</span>
		</div>
	);
}
