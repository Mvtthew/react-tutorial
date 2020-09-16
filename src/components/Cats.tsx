import { strict } from 'assert';
import { stat } from 'fs';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { types } from 'util';
import { Cat } from './Cat';

import './catsStyles.scss';
import { CatPhoto } from './PhotosList';

export const Cats: React.FC = () => {
	const url = 'https://api.thecatapi.com/v1/images/search';

	const [catPhotos, setCatPhotos] = useState<CatPhoto[]>([]);
	const urlParams = new URLSearchParams(useLocation().search);
	const amount = urlParams.get('amount');

	useEffect(() => {
		switch (typeof amount) {
			case 'string':
				const amountInt = parseInt(amount);
				for (let i = 0; i < amountInt; i++) {
					getNewCatPhoto();
				}
				break;
			default:
				for (let i = 0; i < 5; i++) {
					getNewCatPhoto();
				}
				break;
		}
	}, []);

	const getNewCatPhoto = async () => {
		const res = await fetch(url);
		const catPhoto: CatPhoto[] = await res.json();
		setCatPhotos((state) => [...catPhoto, ...state]);
	};

	const replaceCatPhoto = async (index: number) => {
		const res = await fetch(url);
		const catPhoto: CatPhoto[] = await res.json();
		const catPhotosArray = catPhotos;
		catPhotosArray.splice(index, 1, ...catPhoto);
		setCatPhotos(() => [...catPhotosArray]);
	};

	return (
		<div className='cats'>
			<h1>Cats list</h1>
			<div className='cats-list'>
				{catPhotos.map((catPhoto, index) => (
					<Cat cat={catPhoto} index={index} onImageDelete={replaceCatPhoto}></Cat>
				))}
			</div>
		</div>
	);
};
