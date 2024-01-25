import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-blue-800 text-white">
      <div className="bg-white p-6 rounded-lg shadow-md min-h-[300px] text-center max-w-md">
        <h1 className="text-2xl font-bold mb-2 text-gray-700">Challenge 1</h1>
        <p className="text-gray-700">
          We found some strange data that will apparently get the flag, but it seems weird to me.
          Are you able to get the flag? <br/><br/> Note: The flag format is 
          &quot;<strong><code>CLUBFAIR&#123;&lt;Text_Here&gt;&#125;</code></strong>&quot;
        </p>
        
        {/* Bulleted List */}
        <div className="text-left mt-4">
          <ol className="list-disc pl-4 text-gray-700">
            <li>Q0xVQkZBSVJ7Tm90Xw==</li>
            <li>57656972645f4a7573745f</li>
            <li>01000101 01101110 01100011 01101111
                01100100 01100101 01100100 01111101</li>
          </ol>
        </div>
        
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
