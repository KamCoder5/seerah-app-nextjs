import React from "react";
import { HOME_CONSTANTS } from "@/constants/pageConstants";
import Typography from "../ui/typography/Typography";

const Header = () => (
	<div className="text-center">
		<Typography variant="h1">{HOME_CONSTANTS.PAGE_HEADING}</Typography>
		<Typography variant="body1">{HOME_CONSTANTS.PAGE_DESCRIPTION}</Typography>
	</div>
);

export default Header;
