import React from "react";
import styles from "./header.module.scss";
import classnames from "classnames";
import TextButton from "@comp/atoms/button/text-button";

export default function Header() {
	return (
		<header className={classnames(styles.wrapper)}>
			<div className={classnames(styles.logo_button_wrapper)}>
				<a href="/">
					<TextButton size="large" content="홈" />
				</a>
			</div>
			<div className={classnames(styles.nav_button_wrapper)}>
				<a href="/list">
					<TextButton size="large" content="테스트 목록" />
				</a>
			</div>
		</header>
	);
}
