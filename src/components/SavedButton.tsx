'use client'
import { exerciseContext } from '@/context/ExerciceProvider';
import { iLibary } from '@/types/LibaryType';
import { cssTransition, toast } from 'react-toastify';
import React, { useContext } from 'react';
import { FaRegSave } from 'react-icons/fa';

interface SavedButtonProps {
    data: iLibary
}
const SlideDown = cssTransition({
  enter: 'toast-enter',
  exit: 'Toastify__bounce-exit--top-right',
});
const SavedButton = ({ data }:SavedButtonProps) => {
    const { saved, setSaved } = useContext(exerciseContext)
    const handleSavedButton = () => {

        const exists = saved.some(item => item.id === data.id);
        if(exists ){
             toast.error(`${data.name} already added`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: SlideDown,
                    });
        }
        else{
            setSaved([...saved, data]);
         toast.success(`${data.name} added to Saved`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: SlideDown,
                });

        }

        
    }
    return (
        <button onClick={()=>handleSavedButton()} className="flex items-center justify-center gap-2 bg-transparent border border-white/20 hover:border-white/40 transition-colors text-white text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded-md">
            <FaRegSave />
            Save for later
        </button>
    );
};

export default SavedButton;