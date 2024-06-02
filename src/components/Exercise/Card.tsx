import { ExerciseType } from "../../pages/Library";

interface CardProps {
  exercise: ExerciseType;
  onClick: (data: ExerciseType) => void;
}

const Card = ({ exercise, onClick }: CardProps) => {
  return (
    <div
      className="flex flex-col gap-2 text-center cursor-pointer"
      onClick={() => onClick(exercise)}
    >
      <img src={exercise.gifUrl} alt={exercise.name} />
      <span className="font-bold capitalize text-sm">{exercise.name}</span>
    </div>
  );
};

export default Card;
