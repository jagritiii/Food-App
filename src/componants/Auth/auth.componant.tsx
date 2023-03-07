import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoggedIn , setIsLoggedIn] =useState<boolean>(false)

  const handleLogin = () => {
    // You can perform authentication here and store user details in local storage
    setIsLoggedIn(true);
    const userDetails = { email, password ,isLoggedIn};
    localStorage.setItem("user", JSON.stringify(userDetails));
    navigate( '/');
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-medium mb-4">Login</h2>
        <form className="flex flex-col gap-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded py-2 px-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 rounded py-2 px-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
