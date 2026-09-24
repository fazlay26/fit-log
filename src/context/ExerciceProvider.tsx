'use client'
import { iLibary } from '@/types/LibaryType';
import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

export interface IExerciseContext {
    planExercise: iLibary[];
    setPlanExercise: Dispatch<SetStateAction<iLibary[]>>;
    saved: iLibary[];
    setSaved: Dispatch<SetStateAction<iLibary[]>>;
}

export const exerciseContext = createContext<IExerciseContext>({
    planExercise: [],
   setPlanExercise: () => {},
    saved: [],
    setSaved: ()=>{}
})

const ExerciceProvider = ({children}:{ children: React.ReactNode}) => {
    const [planExercise,setPlanExercise] = useState<iLibary[]>([]);
    const [saved,setSaved] = useState<iLibary[]>([]);
    const data:IExerciseContext ={
         planExercise,
        setPlanExercise,
        saved,
        setSaved,
    }
    return (
        <exerciseContext.Provider value={data}>
            {children}
            
        </exerciseContext.Provider>
    );
};

export default ExerciceProvider;