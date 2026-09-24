'use client'
import { exerciseContext } from '@/context/ExerciceProvider';
import { cssTransition } from 'react-toastify';
import { iLibary } from '@/types/LibaryType';
import { useContext } from 'react';
import { IoCalendarNumber } from 'react-icons/io5';
import { Bounce, toast } from 'react-toastify';

interface AddTodayPlanButtonProps {
    data: iLibary
}
const SlideDown = cssTransition({
  enter: 'toast-enter',
  exit: 'Toastify__bounce-exit--top-right',
});

const AddTodayPlanButton = ({ data }: AddTodayPlanButtonProps) => {
    const { planExercise, setPlanExercise } = useContext(exerciseContext)
    const handleAddTodayPlan = () => {

        const exists = planExercise.some(item => item.id === data.id);
        if(exists){
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

            setPlanExercise([...planExercise, data]);
        toast.success(`${data.name} added to Todays Plan`, {
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
        <button onClick={() => handleAddTodayPlan()} className="flex items-center justify-center gap-2 bg-[#c8ff00] hover:bg-[#d4ff33] transition-colors text-black text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded-md">
            <IoCalendarNumber />
            Add to todays plan
        </button>
    );
};

export default AddTodayPlanButton;