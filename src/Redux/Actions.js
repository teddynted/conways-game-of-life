// Define redux action type and export it
export const Types = {  
    SET_CONFIG: 'SET_CONFIG',
    SET_LOADER: 'SET_LOADER',
}

// Define an action that will configuration state
export const setConfig = config => ({ type: Types.SET_CONFIG, config });

export const setLoader = isLoading => ({ type: Types.SET_LOADER, isLoading });