import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./TestConstants";

export const incrementCounter = () => {
    return {
        type: INCREMENT_COUNTER
    }
}
export const decrementCounter = () => {
    return {
        type: DECREMENT_COUNTER
    }
}