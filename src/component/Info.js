import React, { useEffect, useState } from "react";

function Info() {
	const [data, setData] = useState("");
	const getInfo = async () => {
		try {
			let response = await fetch("https://api.spacexdata.com/v3/info"),
				info = await response.json();
			setData(info);
			return;
		} catch (err) {
			alert(err);
		}
	};

	useEffect(() => {
		getInfo();
	}, []);
	return (
		<div>
			<h1>{data.name}</h1>
			<p>Founder: {data.founder}</p>
			<p>Year Founded: {data.founded}</p>
			<h2>SUMMARY</h2>
			<p>{data.summary}</p>
		</div>
	);
}

export default Info;
