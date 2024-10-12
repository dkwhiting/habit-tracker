import { useMemo } from 'react';

const useSortPlayersByScore = (game) => {
  const { players, scores, highestWins } = game;

  // Create a sorted list of players based on their scores
  const sortedPlayers = useMemo(() => {
    // Convert players object to an array of players with their scores
    const playersArray = Object.entries(players).map(([playerKey, player]) => {
      // Get the total score for the player by summing scores across rounds
      const totalScore = Object.entries(scores).reduce((total, [roundKey, roundScores]) => {
        return total + (roundScores[playerKey] || 0); // Add score or 0 if not defined
      }, 0);

      return { ...player, totalScore, key: playerKey }; // Include key for later use if needed
    });

    // Sort players based on their total scores without modifying original players structure
    return playersArray.sort((a, b) => {
      return highestWins
        ? b.totalScore - a.totalScore // Sort by descending score
        : a.totalScore - b.totalScore; // Sort by ascending score if lowest wins
    }).reduce((acc, player) => {
      // Rebuild the players object to maintain the original structure
      acc[player.key] = { color: player.color, icon: player.icon, name: player.name }; // Exclude totalScore
      return acc;
    }, {});
  }, [players, scores, highestWins]); // Recompute when players, scores, or highestWins change

  return sortedPlayers; // Returns the sorted players object
}

export default useSortPlayersByScore;
