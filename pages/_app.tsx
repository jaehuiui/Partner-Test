import { AppProps } from "next/app";
import "@styles/globals.scss";
import Layout from "@temp/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
