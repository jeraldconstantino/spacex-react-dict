import React, { useEffect, useState } from "react";

const getRandomIntegerBetween = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

function History() {
	let randomID = getRandomIntegerBetween(0, 19),
		title = "",
		details = "",
		link = "";

	const [data, setData] = useState([]);
	const getHistory = async () => {
		try {
			let response = await fetch("https://api.spacexdata.com/v3/history"),
				info = await response.json();
			console.log(info);
			setData(info);
			return;
		} catch (err) {
			alert(err);
		}
	};

	useEffect(() => {
		getHistory();
	}, []);

	const ShowHistory = () =>
		data.map((history) => {
			if (history.id === randomID) {
				title = history.title;
				details = history.details;
				link = history.links.article;
			}
			return;
		});

	ShowHistory();
	return (
		<div>
			<h2>RANDOM HISTORY HAPPENED</h2>
			<h4>{title}</h4>

			<p>Details: {details}</p>
			<h5>
				Source: <a href={link}>{link}</a>
			</h5>
		</div>
	);
}

export default History;
