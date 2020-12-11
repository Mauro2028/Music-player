import React, { useEffect, useState } from "react";
import Proptypes from "prop-types";
const AudioApp = props => {
	const BASE_URL = "https://assets.breatheco.de/apis/sound";
	const [songs, setSongs] = useState([
		{
			id: 1,
			name: "cambur pinton",
			url: "alguna/url",
			category: "cuatro"
		},
		{
			id: 2,
			name: "La cucaracha",
			url: "alguna/url",
			category: "tradicional"
		},
		{
			id: 3,
			name: "song #3",
			url: "alguna/url",
			category: "electro"
		}
	]);
	const [selectedId, setSelectdId] = useState(null);
	useEffect(() => {
		let url = `${BASE_URL}/songs`;
		fetch(url)
			.then(response => {
				return response.json();
			})
			.then(songlist => {
				setSongs(songlist);
			});
	}, []);
	return (
		<div className="container-fluid grid">
			<div className="row  justify-content-center">
				<ul className="song-list col-md-6 ">
					{songs.map((song, index) => {
						return (
							// eslint-disable-next-line react/jsx-key
							<li
								key={song.id}
								className={`song${
									song.id == selectedId ? "selected" : ""
								}`}
								onClick={e => setSelectdId(song.id)}>
								<span className="song-number">
									{index + 1}{" "}
								</span>
								{song.name}
							</li>
						);
					})}
				</ul>
			</div>
			<div className="row justify-content-center controls p-3 bg-dark">
				<audio
					autoPlay
					src={
						selectedId &&
						`${BASE_URL}/${
							songs.find(song => song.id == selectedId).url
						}`
					}
					controls
				/>
			</div>
		</div>
	);
};
AudioApp.proptypes = {};
export default AudioApp;
