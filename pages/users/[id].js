import MainLayout from "../../layouts/MainLayout";

const User = ({ user }) => {
	return <MainLayout>{user.title}</MainLayout>;
};

export const getServerSideProps = async (ctx) => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${ctx.query.id}`);

	const data = await response.json();

	return {
		props: {
			user: data,
		},
	};
};

export default User;
