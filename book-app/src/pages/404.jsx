import React from "react";

function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-red-600 drop-shadow-lg">404</h1>
        <p className="mt-4 text-xl text-gray-700">
          متاسفیم، صفحه‌ای که به دنبالش هستید پیدا نشد.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
        >
          به صفحه اصلی برگردید
        </a>
      </div>
    </div>
  );
}

export default NotFoundPage;
