import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import classnames from "classnames";
import Header from "./header";
import Footer from "./footer";

import { useRouter } from "next/router";

export default function Layout({ children }) {
	const router = useRouter();
	const [testPage, setTestPage] = useState<boolean>(false);

	function currentPath() {
		const path = router.pathname;

		setTestPage(path.split("/")[1] === "tests");
	}

	useEffect(() => {
		currentPath();
	}, [router]);

	return (
		<div className={classnames(styles.container)}>
			{!testPage && <Header />}
			<div className={classnames(styles.contents_wrapper)}>{children}</div>
			{!testPage && <Footer />}
		</div>
	);
}
