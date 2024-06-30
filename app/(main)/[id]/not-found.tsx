import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-lg text-center">
        <img
          src="not_found.webp"
          alt="Not Found"
          width={500}
          height={500}
          className="mx-auto mb-6"
        />
        <h2 className="text-3xl font-bold text-red-600 mb-4">רכב לא נמצא</h2>
        <p className="text-lg text-gray-700 mb-6">
          לא הצלחנו למצוא את מספר הרכב המבוקש
        </p>
        <Link
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
          href="/"
        >
          חזור לדף הבית
        </Link>
      </div>
    </div>
  );
}
