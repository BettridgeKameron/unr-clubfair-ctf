import { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-blue-800 text-gray-700">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">UNR Club Fair CTF</h1>
        <p className="text-lg">
          Welcome to the Nevada Cyber Club CTF! Complete some of these challenges, and tell us the Flags for some prizes!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Challenge 1 */}
        <Link href="/challenge1">
          <div className="cursor-pointer bg-white rounded-lg shadow-md p-6 hover:bg-gray-200">
            <h2 className="text-2xl font-semibold mb-2">Challenge 1</h2>
            <p className="text-gray-600">Description for Challenge 1</p>
          </div>
        </Link>

        {/* Challenge 2 */}
        <Link href="/challenge2">
          <div className="cursor-pointer bg-white rounded-lg shadow-md p-6 hover:bg-gray-200">
            <h2 className="text-2xl font-semibold mb-2">Challenge 2</h2>
            <p className="text-gray-600">Description for Challenge 2</p>
          </div>
        </Link>

        {/* Challenge 3 */}
        <Link href="/challenge3">
          <div className="cursor-pointer bg-white rounded-lg shadow-md p-6 hover:bg-gray-200">
            <h2 className="text-2xl font-semibold mb-2">Challenge 3</h2>
            <p className="text-gray-600">Description for Challenge 3</p>
          </div>
        </Link>

        {/* Challenge 4 */}
        <Link href="/challenge4">
          <div className="cursor-pointer bg-white rounded-lg shadow-md p-6 hover:bg-gray-200">
            <h2 className="text-2xl font-semibold mb-2">Challenge 4</h2>
            <p className="text-gray-600">Description for Challenge 4</p>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Home;
