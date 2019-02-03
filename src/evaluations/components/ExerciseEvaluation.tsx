import * as React from 'react';

import '../styles/ExerciseEvaluation.css';

import PhysicalEvaluation from './PhysicalEvaluation';
import FightEvaluation from './FightEvaluation';
import TaoluEvaluation from './TaoluEvaluation';

interface ExerciseEvaluationProps{
    rankExercise: any;
}

const ExerciseEvaluation: React.StatelessComponent<ExerciseEvaluationProps> = (props) => {
	const { rankExercise } = props;
	if (!rankExercise)
		return (<div>Exercise not available.</div>);

	const renderRankExercise = (rankExercise: any) => {
		const { type } = rankExercise.exercise;
		switch(type) {
			case 'TAOLU':
				return <TaoluEvaluation rankExercise={rankExercise}/>
			case 'PHYSICAL':
				return <PhysicalEvaluation rankExercise={rankExercise}/>
			case 'FIGHT':
				return <FightEvaluation rankExercise={rankExercise}/>
		}
		return type + 'is not a supported type of exercise.';
	}
	
	const { exercise } = rankExercise;
	return (
		<div className="ExerciseEvaluation">
			<div className="header">
				<span className="name">{exercise.name}</span>
				<span className="type">{exercise.type}</span>
			</div>
			<div className="body">
				{exercise.description?
					<p className="description">{exercise.description}</p> : ''
				}
				{exercise.image?
					<img className="image" src={exercise.image}/> : ''
				}
				{renderRankExercise(rankExercise)}
			</div>
		</div>
	);
}

export default ExerciseEvaluation;
