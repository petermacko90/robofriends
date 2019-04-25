import React from 'react';
import Card from './Card';
import { IRobot } from '../containers/App';

const CardList = ({ robots }: {robots: Array<IRobot>}) => {
	return (
		<div>
			{
				robots.map((user) => {
					return (
						<Card
							key={user.id}
							id={user.id}
							name={user.name}
							email={user.email}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;
