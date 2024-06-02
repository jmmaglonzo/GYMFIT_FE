import { ExerciseType } from "../../pages/Library";

interface CardProps {
  exercise: ExerciseType;
}

const Card = ({ exercise }: CardProps) => {
  return (
    <div>
      <img src={exercise.gifUrl} alt="" />
    </div>
  );
};

export default Card;
