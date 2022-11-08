import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      {/* Full navbar */}
      <nav className="sticky top-0 z-10 py-3 mx-auto">
        {/* Words navbar */}
        <div className="font-bold dark:bg-slate-800 dark:text-cyan-400 px-6 flex items-center m-auto justify-between xl:max-w-4xl sm:max-w-sm">
          <div className="hover:underline">
            <Link href="/">Looking Forward</Link>
          </div>
          <div className="hover:underline">
            <Link href="/CourseOffering">Course Offering</Link>
          </div>
          <div className="hover:underline">
            <div>Reviews</div>
          </div>
          <div className="hover:underline">
            <Link href="/CancellationPolicy">Cancellation Policy</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
