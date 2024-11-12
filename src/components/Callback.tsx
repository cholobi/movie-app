import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";

const TMDB_API_KEY = import.meta.env.VITE_API_KEY;

const Callback = () => {
  const [searchParams] = useSearchParams();
  const requestToken = searchParams.get("request_token");
  const approved = searchParams.get("approved");

  useEffect(() => {
    const createSession = async () => {
      if (requestToken && approved === "true") {
        try {
          const response = await axios.post(
            `https://api.themoviedb.org/3/authentication/session/new?api_key=${TMDB_API_KEY}`,
            { request_token: requestToken }
          );

          const sessionId = response.data.session_id;
          // Store session ID or take any desired action here
          localStorage.setItem("sessionId", sessionId);
          window.location.href = "/dashboard";
        } catch (error) {
          console.error("Failed to create session", error);
        }
      } else {
        console.log("User did not approve the request.");
      }
    };

    createSession();
  }, [requestToken, approved]);

  return (
    <p>
      <Spinner /> Processing Log in with TMDb
    </p>
  );
};

export default Callback;
