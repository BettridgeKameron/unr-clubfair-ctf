import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-blue-800 text-white">
      <div className="bg-white p-6 rounded-lg shadow-md min-h-[300px] text-center max-w-md">
        <h1 className="text-2xl font-bold mb-2 text-gray-700">Challenge 3</h1>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod arcu in fermentum iaculis.
          Integer eget nunc quis lectus viverra ultrices. Quisque tincidunt quam a semper bibendum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod arcu in fermentum iaculis.
          Integer eget nunc quis lectus viverra ultrices. Quisque tincidunt quam a semper bibendum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod arcu in fermentum iaculis.
          Integer eget nunc quis lectus viverra ultrices. Quisque tincidunt quam a semper bibendum.
        </p>
        
        {/* Challenge implementation goes here */}
        
        {/* Back to Home link */}
        <Link href="/">
          <div className="text-blue-600 hover:underline mt-4 block cursor-pointer text-sm">
            Back to Home
          </div>
        </Link>
      </div>
    </div>
  );
}
