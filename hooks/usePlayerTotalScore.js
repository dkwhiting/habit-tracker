import { useMemo } from 'react';

const usePlayerTotalScore = (scores, playerKey) => {
	// Memoize the total score calculation
	return useMemo(() => {
		return Object.keys(scores).reduce((total, round) => {
			return total + (scores[round][playerKey] || 0); // Sum scores across all rounds
		}, 0);
	}, [scores, playerKey]);
};

export default usePlayerTotalScore;