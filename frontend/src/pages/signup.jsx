import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/signup",
        formData
      );
      setMessage(res.data.message);
    } catch (error) {
      setMessage("Error signing up. Try again.");
    }
  };

  return (
    <div className="form-handle">
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <br />
          <input
            type="radio"
            name="role"
            placeholder="checkbox"
            onChange={handleChange}
            className="w-full flex-1 px-4 py-2 mt-2 border rounded -lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          /><span>Customer</span>
           <input
            type="radio"
            name="role"
            placeholder="checkbox"
            onChange={handleChange}
            className="w-full px-4 flex-1 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          /><span>Admin</span>
          <br />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 mt-4 rounded-lg hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>
        {message && (
          <p className="mt-3 text-center text-green-500">{message}</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default Signup;
