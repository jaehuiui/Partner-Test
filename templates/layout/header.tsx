import React from "react";
import styles from "./header.module.scss";
import classnames from "classnames";
import TextButton from "@comp/atoms/button/text-button";

export interface HeaderProps {
	menuVisible: boolean;
	setMenuVisible: (value: boolean) => void;
}

export default function Header({ menuVisible, setMenuVisible }: HeaderProps) {
	return (
		<header className={classnames(styles.wrapper)}>
			<div className={classnames(styles.logo_button_wrapper)}>
				<div onClick={() => setMenuVisible(!menuVisible)}></div>
				<a href="/">
					<TextButton size="large" content="Home" />
				</a>
			</div>
			<div className={classnames(styles.nav_button_wrapper)}>
				<a href="/post">
					<TextButton size="large" content="포스트" />
				</a>
				<a href="/archive">
					<TextButton size="large" content="저장소" />
				</a>
			</div>
		</header>
	);
}
