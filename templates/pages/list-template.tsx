import React from "react";
import styles from "./list-template.module.scss";
import classnames from "classnames";
import TextButton from "@comp/atoms/button/text-button";

export default function ListTemplate() {
	return (
		<div className={classnames(styles.wrapper)}>
			<a href="/tests/friend">
				<TextButton size="large" content="친구 합격 테스트" />
			</a>
		</div>
	);
}
