import React from "react";
import { ExerciseType } from "../../pages/Library";

interface ModalProps {
  data: ExerciseType | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 bg-transparent border-none text-xl cursor-pointer"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="flex flex-col items-center text-xs">
          <img
            src={data.gifUrl}
            alt={data.name}
            className=" rounded mb-4"
            width={150}
          />
          <h2 className="text-xl font-bold mb-2">{data.name}</h2>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold">Body Part:</span> {data.bodyPart}
            <span className="font-bold">Equipment:</span> {data.equipment}
            <span className="font-bold">Target Muscle:</span> {data.target}
            <span className="font-bold">Secondary Muscles:</span>
            <span>{data.secondaryMuscles.join(", ")}</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Instructions:</h3>
          <ul className="list-disc text-sm list-inside">
            {data.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
