"use client"
{/*
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Page() {
  const [username, setUsername] = useState('Kameron');
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch data for default username on mount
    fetchUserData(username);
  }, []);

  const fetchUserData = async (username: string) => {
    const response = await fetch(`/api/search-user?username=${username}`);
    const data = await response.json();
    setUserData(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-blue-800 text-white">
      <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-md">
        <h1 className="text-2xl font-bold mb-2 text-gray-700">Challenge 4</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border-2 border-gray-300 p-2"
        />
        <button onClick={() => fetchUserData(username)}>Search</button>
        <div>
          {userData.map((user, index) => (
            <div key={index}>
              {Object.entries(user).map(([key, value]) => (
                <div key={key}>{key}: {value}</div>
              ))}
            </div>
          ))}
        </div>
        <Link href="/">
          <div className="text-blue-600 hover:underline mt-4 block cursor-pointer text-sm">
            Back to Home
          </div>
        </Link>
      </div>
    </div>
  );
}
*/}