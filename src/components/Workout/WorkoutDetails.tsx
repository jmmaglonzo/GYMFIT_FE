import { BiTrash } from "react-icons/bi";
import { Workout } from "../../pages/Workout";

interface WorkoutProps {
  data: Workout;
  deleteWorkout: (id: string) => Promise<void>;
}

const WorkoutDetails = ({ data, deleteWorkout }: WorkoutProps) => {
  return (
    <div className="bg-white flex  justify-between p-4 rounded-md shadow-md ">
      <div className="flex flex-col gap-2">
        <span className="font-bold text-2xl text-[#ef5350]">{data.title}</span>
        <span className="font-bold text-xl">Load (KG): {data.load} </span>
        <span className="font-bold text-xl">Reps: {data.reps}</span>
      </div>

      <BiTrash
        className="cursor-pointer"
        size={20}
        onClick={() => deleteWorkout(data._id)}
      />
    </div>
  );
};

export default WorkoutDetails;
