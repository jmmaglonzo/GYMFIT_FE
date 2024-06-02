import { ExerciseType } from "../../pages/Library";

interface CardProps {
  exercise: ExerciseType;
}

const Card = ({ exercise }: CardProps) => {
  return (
    <div className="flex flex-col gap-2 text-center">
      <img src={exercise.gifUrl} alt={exercise.name} />
      <span className="font-bold capitalize text-sm">{exercise.name}</span>
    </div>
  );
};

export default Card;
