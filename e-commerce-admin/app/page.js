"use client";

import { useEffect, useState } from "react";
import { signIn, getSession } from "next-auth/react"; // Import getSession from next-auth

export default function Home() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession(); // Use getSession for client-side session fetching
      setSession(sessionData);
    };

    fetchSession();
  }, []);

  return (
    <div className="bg-blue-900 w-screen h-screen flex items-center">
      <div className="text-center w-full">
        {session ? (
          <div>
            <p>Welcome, {session.user?.name}</p>
          </div>
        ) : (
          <button
            className="bg-white p-2 px-4 rounded-lg"
            onClick={() => signIn("google")}
          >
            Login with Google
          </button>
        )}
      </div>
    </div>
  );
}
