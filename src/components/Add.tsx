import React from 'react';
import { useParams } from 'react-router-dom';

type addUrlParamsType = {
	a: string;
	b: string;
};

export const Add: React.FC = () => {
	const { a, b } = useParams<addUrlParamsType>();

	const addNumbers = (a: string, b: string): number => {
		const parsedA: number = parseInt(a);
		const parsedB: number = parseInt(b);
		if (isNaN(parsedA) || isNaN(parsedB)) return 0;
		else return parsedA + parsedB;
	};

	return <p>suma: {addNumbers(a, b)}</p>;
};
