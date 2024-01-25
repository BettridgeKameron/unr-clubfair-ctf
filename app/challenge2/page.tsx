import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-blue-800 text-white">
      <div className="bg-white p-6 rounded-lg shadow-md min-h-[300px] text-center max-w-md">
        <h1 className="text-2xl font-bold mb-2 text-gray-700">Challenge 2</h1>
        <p className="text-gray-700">
          We found some weak password hashes, and need to recover what they originally were. See if you can crack them! <br/><br/> Note: The flag format is 
          &quot;<strong><code>CLUBFAIR&#123;&lt;Password1_Password2_Password3&gt;&#125;</code></strong>&quot;
        </p>
        
        {/* Numbered List */}
        <div className="text-left mt-4">
          <ol className="list-decimal pl-4 text-gray-700">
            <li>42f749ade7f9e195bf475f37a44cafcb</li>
            <li>b0439fae31f8cbba6294af86234d5a28</li>
            <li>e1fcf6840ff655290491c14e01d38329bf2cd8b8</li>
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
