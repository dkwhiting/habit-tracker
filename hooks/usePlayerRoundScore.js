import React from 'react'

const usePlayerRoundScore = (game, roundKey, playerKey) => {
	if (game.scores[roundKey]?.[playerKey]){
        return game.scores[roundKey]?.[playerKey]
    } else {
        return 0
    }
};

export default usePlayerRoundScore