export function CommonAction (data) {
    return { type: 'INITIAL_STATE', payload: data }
}

export const CreateUser = (data)  => ({
    
     type: 'SET_CURRENT_USER', payload: data 
});

