import Head from "next/head";

import Link from "../components/Link/Link";

const MainLayout = ({ children, title = "Home Page" }) => {
	return (
		<div>
			<Head>
				<title>{title} | Senseyka</title>
			</Head>
			<div>
				<Link href="/">Home</Link>

				<Link href="/users">Users</Link>

				<Link href="/profile">Profile</Link>
			</div>

			<div>{children}</div>
		</div>
	);
};

export default MainLayout;
