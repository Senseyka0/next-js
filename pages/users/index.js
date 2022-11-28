import { useEffect, useState } from "react";

import Link from "../../components/Link/Link.jsx";
import MainLayout from "../../layouts/MainLayout.jsx";

const Users = ({ users }) => {
	return (
		<MainLayout title="Users page">
			{users.map((user) => (
				<Link href={`/users/${user.id}`} key={user.id}>
					{user.title}
				</Link>
			))}
		</MainLayout>
	);
};

export default Users;

export const getStaticProps = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts/");

	const data = await response.json();

	return {
		props: {
			users: data,
		},
	};
};
