import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import WorkoutDetails from "../components/Workout/WorkoutDetails";
import axios from "axios";

const url = "https://workout-crud.vercel.app/api/workouts";

export interface Workout {
  _id: string;
  title: string;
  reps: number;
  load: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Workout = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [form, setForm] = useState({
    title: "",
    load: "",
    reps: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    load: "",
    reps: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    getWorkout();
  }, []);

  const getWorkout = async () => {
    try {
      const res = await axios.get(url);
      setWorkouts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createWorkout = async (e: FormEvent) => {
    e.preventDefault();

    let formValid = true;
    const newErrors = {
      title: "",
      load: "",
      reps: "",
    };

    if (!form.title.trim()) {
      newErrors.title = "Title is required";
      formValid = false;
    } else if (/^\d+$/.test(form.title.trim())) {
      newErrors.title = "Title should not contain numbers";
      formValid = false;
    }

    if (!form.load.trim()) {
      newErrors.load = "Load is required";
      formValid = false;
    } else if (isNaN(Number(form.load))) {
      newErrors.load = "Load should be a number";
      formValid = false;
    }

    if (!form.reps.trim()) {
      newErrors.reps = "Reps are required";
      formValid = false;
    } else if (isNaN(Number(form.reps))) {
      newErrors.reps = "Reps should be a number";
      formValid = false;
    }

    if (!formValid) {
      setErrors(newErrors);
      return;
    }

    const res = await axios.post(url, form);

    setWorkouts([...workouts, res.data]);
    setForm({ title: "", load: "", reps: "" });
    setErrors({ title: "", load: "", reps: "" });
  };

  const deleteWorkout = async (id: string) => {
    try {
      await axios.delete(`https://workout-crud.vercel.app/api/workouts/${id}`);

      const newWorkout = [...workouts].filter((w) => w._id !== id);

      setWorkouts(newWorkout);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="md:py-20 my-12 container grid grid-cols-3 gap-12">
      <div className="col-span-2 overflow-auto h-96 flex flex-col gap-4 p-4">
        {workouts.length === 0 ? (
          <span className="font-bold">Enter Data to start</span>
        ) : (
          <>
            {workouts
              .slice()
              .sort(
                (a, b) =>
                  new Date(b.updatedAt || b.createdAt).getTime() -
                  new Date(a.updatedAt || a.createdAt).getTime()
              )
              .map((el) => (
                <WorkoutDetails
                  key={el._id}
                  data={el}
                  deleteWorkout={deleteWorkout}
                />
              ))}
          </>
        )}
      </div>
      <div className="col-span-1">
        <form
          onSubmit={createWorkout}
          className="flex flex-col flex-1  p-4 rounded-lg shadow-2xl"
        >
          <h3 className="font-bold text-2xl">Add a new Workout</h3>

          <label htmlFor="title">Exercise Title:</label>
          <input
            className="bg-white text-white px-4 py-2"
            id="title"
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
          {errors.title && <span className="text-red-500">{errors.title}</span>}

          <label htmlFor="load">Load in (in kg):</label>
          <input
            id="load"
            className="bg-white text-white px-4 py-2"
            type="number"
            name="load"
            value={form.load}
            onChange={handleChange}
          />
          {errors.load && <span className="text-red-500">{errors.load}</span>}

          <label htmlFor="reps">Reps:</label>
          <input
            id="reps"
            className="bg-white text-white px-4 py-2"
            type="number"
            name="reps"
            value={form.reps}
            onChange={handleChange}
          />
          {errors.reps && <span className="text-red-500">{errors.reps}</span>}

          <button type="submit" className="mt-8 px-6 py-2 bg-black text-white">
            Add Workout
          </button>
        </form>
      </div>
    </section>
  );
};

export default Workout;
