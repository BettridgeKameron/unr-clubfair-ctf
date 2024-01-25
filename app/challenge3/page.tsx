import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-blue-800 text-white">
      <div className="bg-white p-6 rounded-lg shadow-md min-h-[300px] text-center max-w-md">
        <h1 className="text-2xl font-bold mb-2 text-gray-700">Challenge 3</h1>
        <p className="text-gray-700">
          Last year I went on a vacation, and took some photos like these!
        </p>
        
        {/* Images with spacing */}
        <div className="mt-4">
          <div className="mb-4">
            <Image src="/photo1.jpg" alt="Vacation Photo 1" width={500} height={300} />
          </div>
          <div className="mb-4">
            <Image src="/photo2.jpg" alt="Vacation Photo 2" width={500} height={300} />
          </div>
          <Image src="/photo3.jpg" alt="Vacation Photo 3" width={500} height={300} />
        </div>
        
        <p className="text-gray-700 mt-4">
          What airport were the images taken at, and what the city I went to?  <br/><br/> Note: The flag format is
          "<strong><code>CLUBFAIR&#123;&lt;AirportAbbreviation_CityName&gt;&#125;</code></strong>"
        </p>

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
