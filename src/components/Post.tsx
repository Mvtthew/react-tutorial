import React from 'react';
import { useParams } from 'react-router-dom';

type postUrlParamsType = {
	id: string;
};

export const Post: React.FC = () => {
	const { id } = useParams<postUrlParamsType>();

	return (
		<div>
			<h1>POST #{id}</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minima totam incidunt nemo exercitationem quia, corrupti repudiandae
				dolores quos earum quae sapiente quis! Ratione consequatur illum pariatur necessitatibus! Animi, explicabo!
			</p>
		</div>
	);
};
