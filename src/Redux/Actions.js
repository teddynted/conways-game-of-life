// Define redux action type and export it
export const Types = {  
    SET_CONFIG: 'SET_CONFIG',
}

// Define an action that will configuration state
export const setConfig = config => ({ type: Types.SET_CONFIG, config });