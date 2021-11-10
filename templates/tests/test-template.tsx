import React, { useState } from "react";
import styles from "./test-template.module.scss";
import classnames from "classnames";
import ProgressBar from "@comp/molecules/progress-bar";
import QuestionBox from "@comp/molecules/question-box";
import AnswerButton from "@comp/atoms/button/answer-button";
import { TestProps } from "@lib/utils/interfaces";

export default function TestTemplate({
	title,
	wholeIndex,
	questionList,
	answerList,
}: TestProps) {
	const [index, setIndex] = useState<number>(0);

	function goNext() {
		setIndex(index + 1);
	}

	console.log();

	return (
		<div className={classnames(styles.wrapper)}>
			<div className={classnames(styles.header)}>
				<h2>{title}</h2>
				<ProgressBar currentIndex={index} wholeIndex={wholeIndex} />
			</div>
			<div className={classnames(styles.body)}>
				<QuestionBox question={questionList[index]} />
			</div>
			<div className={classnames(styles.answer)}>
				<AnswerButton answer={answerList[index * 2]} goNext={goNext} />
				<AnswerButton answer={answerList[index * 2 + 1]} goNext={goNext} />
			</div>
		</div>
	);
}
