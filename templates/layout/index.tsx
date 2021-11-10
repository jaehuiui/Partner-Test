import React, { useState } from "react";
import styles from "./index.module.scss";
import classnames from "classnames";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
	const [menuVisible, setMenuVisible] = useState<boolean>(false);

	return (
		<div className={classnames(styles.container)}>
			<Header menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
			<div className={classnames(styles.contents_wrapper)}>{children}</div>
			<Footer />
		</div>
	);
}
