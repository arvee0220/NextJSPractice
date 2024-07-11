import React from "react";

const Page = (props: { params: { id: string } }) => {
	console.log(props.params.id);
	return <div>Coffee Store Page: {props.params.id}</div>;
};

export default Page;
