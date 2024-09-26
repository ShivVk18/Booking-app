import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { setReady, setUser } from "../redux/slices/userSlice";
import PlacesPage from "./PlacesPage";
function AccountPage() {
  const user = useSelector((state) => state.user.name);
  const email = useSelector((state) => state.user.email);
  const ready = useSelector((state) => state.ready.ready);
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(null);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }
  const dispatch = useDispatch();

  useEffect(() => {
    if (!ready && !user && redirect) {
      navigate("/login");
    }
  }, [user, ready, navigate]);

  const styleClass = (type = null) => {
    let classes = "py-2 px-4";
    if (type === subpage) {
      classes += " bg-primary text-white rounded-full";
    }

    return classes;
  };

  const logoutHandler = async () => {
    try {
      await axios.post("api/v1/logout");
      dispatch(setUser({ name: null, email: null }));
      dispatch(setReady({ ready: false }));
      setRedirect("/");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  if (redirect) {
    navigate("/");
  }
  return (
    <div>
      <nav className="w-full flex mt-8 gap-2 mb-8 justify-center">
        <Link to={"/account"} className={styleClass("profile")}>
          My Profile
        </Link>
        <Link to={"/account/bookings"} className={styleClass("bookings")}>
          My Bookings
        </Link>
        <Link to={"/account/places"} className={styleClass("places")}>
          My Accomodations
        </Link>
      </nav>

      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user} ({email})
          <br />
          <button
            onClick={logoutHandler}
            className="bg-primary max-w-sm mt-2 w-full border my-2 py-2 px-3 rounded-2xl"
          >
            Logout
          </button>
        </div>
      )}

      {subpage==="places" && (
        <div>
          <PlacesPage/>
        </div>
      )}
    </div>
  );
}

export default AccountPage;
