import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Exercise/Card";
import Loader from "../components/Loader/Loader";
import Pagination from "../components/Exercise/Pagination";
import { BiSearch } from "react-icons/bi";
import Modal from "../components/Exercise/Modal";

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
  const [search, setSearch] = useState("");
  const [selectedData, setSelectedData] = useState<ExerciseType | null>(null);
  useEffect(() => {
    getExercise();
  }, []);

  const getExercise = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        "https://exercisedb.p.rapidapi.com/exercises",
        {
          url: "https://exercisedb.p.rapidapi.com/exercises",
          params: { limit: "100" },
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
            "X-RapidAPI-Host": import.meta.env.VITE_HOST,
          },
        }
      );

      setExercise(res.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = exercise.slice(firstPostIndex, lastPostIndex);

  const handleCardClick = (data: ExerciseType) => {
    setSelectedData(data);
  };

  const handleCloseModal = () => {
    setSelectedData(null);
  };

  return (
    <section className="md:py-20 flex flex-col my-12 container p-4">
      <div className="flex justify-center">
        <div className="flex flex-col text-center gap-4">
          <span className="font-bold md:text-2xl lg:text-4xl">
            Workouts & Routines: Elevate Your Fitness
          </span>
          <div className="flex items-center bg-white px-4 py-2 rounded-md">
            <input
              type="text"
              className="w-full outline-none"
              placeholder="Search Exercise...."
              onChange={(e) => setSearch(e.target.value)}
            />
            <BiSearch size={20} />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-4 grid-cols-2 mt-12">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {currentPosts
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.name.toLowerCase().includes(search) ||
                      item.bodyPart.toLowerCase().includes(search);
              })
              .map((e) => (
                <Card key={e.id} exercise={e} onClick={handleCardClick} />
              ))}
          </>
        )}

        <Modal data={selectedData} onClose={handleCloseModal} />
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
