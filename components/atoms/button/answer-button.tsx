import React from "react";
import styles from "./answer-button.module.scss";
import classnames from "classnames";

export interface AnswerButtonProps {
	answer: string;
	goNext: (value: void) => void;
}

export default function AnswerButton({ answer, goNext }: AnswerButtonProps) {
	return (
		<button
			className={classnames(styles.wrapper)}
			onClick={() => {
				goNext();
			}}
		>
			<span className={classnames(styles.answer_text)}>{answer}</span>
		</button>
	);
}
