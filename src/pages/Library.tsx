import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Exercise/Card";
import Loader from "../components/Loader/Loader";
import Pagination from "../components/Exercise/Pagination";

export interface ExerciseType {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  instructions: [string];
  name: string;
  secondaryMuscles: [string];
  target: string;
}

const Library = () => {
  const [exercise, setExercise] = useState<ExerciseType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage] = useState<number>(10);
  useEffect(() => {
    getExercise();
  }, []);

  const getExercise = async () => {
    setIsLoading(true);
    const res = await axios.get("https://exercisedb.p.rapidapi.com/exercises", {
      url: "https://exercisedb.p.rapidapi.com/exercises",
      params: { limit: "100" },
      headers: {
        "X-RapidAPI-Key": "41d5aec5e0mshf5632abd58571cbp1b37e7jsn36c8acffc7e4",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    });

    setExercise(res.data);
    setIsLoading(false);
  };

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = exercise.slice(firstPostIndex, lastPostIndex);

  return (
    <section className="md:py-20 flex flex-col my-12 container">
      <div className="flex justify-center">
        <span className="font-bold text-4xl">
          Workouts & Routines: Elevate Your Fitness
        </span>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-4 grid-cols-2 mt-12">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {currentPosts.map((e) => (
              <Card key={e.id} exercise={e} />
            ))}
          </>
        )}
      </div>
      <Pagination
        totalPosts={exercise.length}
        postsPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
};

export default Library;
