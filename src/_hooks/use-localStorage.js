import React from 'react';

function useLocalStorage(key, defaultValue="", {serialize = JSON.stringify, deserialize = JSON.parse} = {}){
    const [state, setState] = React.useState(() => {
            const valueInLocalStorage = window.localStorage.getItem(key);

            if(valueInLocalStorage){
                return deserialize(valueInLocalStorage)
            }

            return defaultValue;
        }
    )

    React.useEffect(() => {
        window.localStorage.setItem(key, serialize(state))
    }, [key, serialize, state])

    return [state, setState];
}

export default useLocalStorage;