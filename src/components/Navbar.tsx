import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      {/* Full navbar */}
      <nav className="sticky top-0 z-10 py-3 mx-auto">
        {/* Words navbar */}
        <div className="dark:bg-slate-800 dark:text-cyan-400 px-6 flex items-center m-auto justify-between xl:max-w-4xl sm:max-w-sm">
          <Link href="/">Looking Forward</Link>
          <Link href="/CourseOffering">Course Offering</Link>
          <div>Reviews</div>
          <Link href="/CancellationPolicy">Cancellation Policy</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
