import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();

  const addBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    //  console.log(formData)

    //  const data={
    //      title :formData.get("title"),
    //      subTitle:formData.get("subTitle"),
    //      description:formData.get("description"),

    //  }
    const data = Object.fromEntries(formData);
    const response = await axios.post(
      "https://backendcms.up.railway.app/blog",
      data
    );
    if (response.status == 201) {
      navigate("/");
    }
  };

  return (
    <>
  <form
  onSubmit={addBlog}
  className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col gap-6 mt-10"
>
  <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-6">
    Create a New Blog
  </h1>

  {/* Title */}
  <div className="flex flex-col">
    <label className="text-gray-700 dark:text-gray-300 mb-2 font-medium">
      Title
    </label>
    <input
      type="text"
      name="title"
      placeholder="Enter your blog title"
      className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition placeholder-gray-400"
      required
    />
  </div>

  {/* Subtitle */}
  <div className="flex flex-col">
    <label className="text-gray-700 dark:text-gray-300 mb-2 font-medium">
      Subtitle
    </label>
    <input
      type="text"
      name="subTitle"
      placeholder="Enter a subtitle (optional)"
      className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition placeholder-gray-400"
    />
  </div>

  {/* Description */}
  <div className="flex flex-col">
    <label className="text-gray-700 dark:text-gray-300 mb-2 font-medium">
      Content
    </label>
    <textarea
      name="description"
      placeholder="Write your blog content here..."
      rows="8"
      className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition placeholder-gray-400 resize-none"
      required
    ></textarea>
  </div>

  {/* Image Upload */}
  <div className="flex flex-col">
    <label className="text-gray-700 dark:text-gray-300 mb-2 font-medium">
      Blog Image
    </label>
    <input
      type="file"
      name="image"
      accept="image/*"
      className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition"
    />
  </div>

  {/* Submit */}
  <button
    type="submit"
    className="bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
  >
    Publish Blog
  </button>
</form>


    </>
  );
};

export default CreateBlog;
