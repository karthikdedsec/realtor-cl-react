import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [pageState, setPageState] = useState("Sign in");
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);

  const pathStyleChange = (source) => {
    if (source === location.pathname) {
      return true;
    }
  };

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header
        className="flex justify-between items-center
      px-3 max-w-6xl mx-auto"
      >
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex gap-1 space-x-1">
            <li
              className={`transition duration-300 ease-in-out hover:text-black px-4 cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathStyleChange("/") && "!text-black !bg-gray-200 rounded"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`transition duration-300 ease-in-out hover:text-black px-4 cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathStyleChange("/offers") &&
                "!text-black !bg-gray-200 rounded "
              } `}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`transition duration-300 ease-in-out hover:text-black px-4 cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                (pathStyleChange("/sign-in") &&
                  "!text-black !bg-gray-200 rounded") ||
                (pathStyleChange("/profile") &&
                  "!text-black !bg-gray-200 rounded")
              }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
