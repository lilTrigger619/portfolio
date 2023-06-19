import { FC, useEffect } from "react";
import NextLink from "next/link";
import { Link, Box, useColorModeValue, useColorMode } from "@chakra-ui/react";

interface menuItemNode {
	to: string;
	text: string;
	path?: string;
	isMobile?: boolean;
	mDisplay?: string;
	underline?: boolean;
}

const MenuItem: FC<menuItemNode> = ({
	to,
	text,
	path,
	mDisplay,
	isMobile,
	underline,
}) => {
	const inActiveColor = useColorModeValue<string, string>(
		"gray200",
		"whiteAlpha900"
	) as string;
	return (
		<Box display={isMobile ? mDisplay : ["none", "none", "block"]}>
			<Link
				p={2}
				_active={{ backgroundColor: "gold" }}
				as={NextLink}
				href={to}
				//textDecoration={underline ? "underline" : "none"}
			>
				{text}
			</Link>
		</Box>
	);
};

export default MenuItem;
