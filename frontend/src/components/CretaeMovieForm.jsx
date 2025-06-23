import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import Creatable from "react-select/creatable";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../service/AuthService";

function CretaeMovieForm() {
  const { token } = useAuth();
  const host = import.meta.env.VITE_BACKEND_HOST;
  const { register, handleSubmit, reset } = useForm();
  const [posterUrl, setPosterUrl] = useState(null);
  const [genre, setGenre] = useState([]);
  const navigate = useNavigate();
  //   const token = localStorage.getItem("token");

  const onDrop = (acceptedFiles) => {
    setPosterUrl(acceptedFiles[0]);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("genre", JSON.stringify(genre));
    formData.append("posterUrl", posterUrl);

    formData.append("duration", data.duration);
    formData.append("releaseDate", data.releaseDate);

    try {
      const res = await axios.post(`${host}/api/movie/createMovie`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("movie created succ", res);
      reset();
      setPosterUrl(null);
      setGenre([]);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="grid-rows-1 px-20 gap-5 md:grid grid-cols-2 w-full">
        <div
          {...getRootProps({
            className: `border-dashed border-2 p-4 rounded cursor-pointer text-center ${
              isDragActive ? "bg-blue-100" : ""
            }`,
          })}
        >
          <input {...getInputProps()} />
          {posterUrl ? (
            <p>Uploaded: {posterUrl.name}</p>
          ) : (
            <p>Upload img here...</p>
          )}
        </div>
        <div className="grid grid-rows-1 gap-4">
          <input
            type="text"
            placeholder="Movie title"
            {...register("title", { required: "Title is required" })}
            className="border p-2 rounded"
          />
          <input
            type="number"
            min="1"
            placeholder="Movie duration"
            {...register("duration", { required: "Title is required" })}
            className="border p-2 rounded"
          />

          <input
            type="date"
            placeholder="Movie release date"
            {...register("releaseDate", { required: "Title is required" })}
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Description"
            {...register("description", {
              required: "Description is required",
            })}
            className="border p-2 rounded"
          ></textarea>
          <Creatable
            isMulti
            value={genre}
            onChange={(newGenre) => setGenre(newGenre)}
            placeholder="Genre"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          >
            Publish
          </button>
        </div>
      </div>
    </form>
  );
}

export default CretaeMovieForm;
