import NextLink from "next/link";

import cls from "./Link.module.scss";

const Link = (props) => {
	return (
		<NextLink className={cls.wrapper} {...props}>
			{props.children}
		</NextLink>
	);
};

export default Link;
