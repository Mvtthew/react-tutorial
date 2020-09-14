import React from 'react';
import { useLocation } from 'react-router-dom';

export const Add2: React.FC = () => {
	const urlParams: URLSearchParams = new URLSearchParams(useLocation().search);

	const a = urlParams.get('a');
	const b = urlParams.get('b');

	const addNumbers = (a: string | null, b: string | null): number => {
		if (a == null || b == null) return 0;
		const parsedA: number = parseInt(a);
		const parsedB: number = parseInt(b);
		if (isNaN(parsedA) || isNaN(parsedB)) return 0;
		else return parsedA + parsedB;
	};

	return <p>suma: {addNumbers(a, b)}</p>;
};
