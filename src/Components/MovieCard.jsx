import React from "react";
import Loading from "../assets/Loading.gif";
import image from "../assets/no-data.png";

const MovieCard = ({ allMovieData, loading }) => {
  return (
    <div>
      {loading ? (
        <div className="flex justify-center ">
          <img className=" w-16 py-20" src={Loading} alt="" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 lg:px-10">
          {allMovieData.map((item, index) => {
            const { Title, Year, Poster } = item;

            return (
              <div
                key={index}
                className="bg-[#40407a] rounded-2xl shadow-lg border border-gray-300 hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 ease-in-out"
              >
                <img
                  src={
                    Poster !== "N/A"
                      ? Poster
                      : image
                  }
                  alt="Not found"
                  className="rounded-t-2xl w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-white text-xl font-semibold mb-1 truncate">
                    {Title}
                  </h2>
                  <p className="text-gray-300 text-sm">Year: {Year}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MovieCard;
