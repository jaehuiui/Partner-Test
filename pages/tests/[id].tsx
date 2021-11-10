import React, { useState } from "react";
import TestTemplate from "@temp/tests/test-template";
import ResultTemplate from "@temp/tests/result-template";
import FriendTest from "@lib/data/friend.json";
import { TestProps } from "@lib/utils/interfaces";

export default function SampleTest({
	title,
	wholeIndex,
	questionList,
	answerList,
}: TestProps) {
	const [showResult, setShowResult] = useState<boolean>(false);

	return (
		<>
			{showResult ? (
				<ResultTemplate />
			) : (
				<TestTemplate
					title={title}
					wholeIndex={wholeIndex}
					questionList={questionList}
					answerList={answerList}
				/>
			)}
		</>
	);
}

export async function getServerSideProps() {
	// Fetch data from external API
	const title = FriendTest.title;
	const wholeIndex = FriendTest.whole;
	const questionList = FriendTest.question;
	const answerList = FriendTest.answer;

	// Pass data to the page via props
	return {
		props: {
			title: title,
			wholeIndex: wholeIndex,
			questionList: questionList,
			answerList: answerList,
		},
	};
}
