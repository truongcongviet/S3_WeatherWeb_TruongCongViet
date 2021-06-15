import { createContext, useCallback, useContext, useReducer, Fragment } from 'react';
import { weatherReducer, initialState } from './reducers/weatherReducer'
const CreateContext = createContext({});

export const useAppContext = () => {
    const { data, setData } = useContext(CreateContext)
    const dispatch = useCallback(
        ({ type, data }) => {
            setData({ data, type })
        },
        [setData]
    )
    return [data, dispatch]
}

export const WeatherProvider = props => {
    const { children } = props;
    const [data, dispatch] = useReducer(weatherReducer, initialState);
    return (
        <CreateContext.Provider value={{ data, setData: dispatch }}>
            <Fragment>
                {children}
            </Fragment>

        </CreateContext.Provider>
    )
}

export default CreateContext;