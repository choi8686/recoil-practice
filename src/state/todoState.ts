import {atom, atomFamily} from 'recoil';
import { TodoContent } from '../types';

//In recoil, we define state using a function called atom.
export const todoContentState = atom<TodoContent[]>({
    //key is a unique identifier for the todoContentState.
    key: "todoContents",
    //default is simply the default state.
    default: [],
});

// atomFamily returns a function to which you pass a unique ID,
// enabling a unique state for your component.

export const todoCompleteState = atomFamily<boolean, string>({
    key: "todoCompleteState",
    default: false,
})