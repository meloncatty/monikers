export const teamNames = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TEAM_NAME':
    return [...state, action.teamName];
  default:
    return state;
  }
};

export const currentTeam = (state = '', action) => {
  switch (action.type) {
  case 'CURRENT_TEAM':
    return action.currentTeam;
  default:
    return state;
  }
};

export const currentRound = (state = 1, action) => {
  switch (action.type) {
  case 'CURRENT_ROUND':
    return state + action.roundNumber;
  default:
    return state;
  }
};

export const teamOneScore = (state = 0, action) => {
  switch (action.type) {
  case 'TEAM_ONE_SCORE':
    return state + action.points;
  default:
    return state;
  }
};

export const teamTwoScore = (state = 0, action) => {
  switch (action.type) {
  case 'TEAM_TWO_SCORE':
    return state + action.points;
  default:
    return state;
  }
};

export const teamTimer = (state = 'pregame', action) => {
  switch (action.type) {
  case 'UPDATE_TEAM_TIMER':
    return action.teamTimer;
  default:
    return state;
  }
};
