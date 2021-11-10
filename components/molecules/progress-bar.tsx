import React from "react";
import styles from "./progress-bar.module.scss";
import classnames from "classnames";

export interface ProgressBarProps {
	currentIndex: number;
	wholeIndex: number;
}

export default function ProgressBar({
	currentIndex,
	wholeIndex,
}: ProgressBarProps) {
	return (
		<div className={classnames(styles.progress)}>
			<span className={classnames(styles.progress_index)}>
				{currentIndex + 1} / {wholeIndex}
			</span>
			<div className={classnames(styles.progress_bar)}>
				{new Array(currentIndex + 1).fill(0).map((_) => {
					return <div className={classnames(styles.progress_block)} />;
				})}
			</div>
		</div>
	);
}
