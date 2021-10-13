import Tilt from "react-parallax-tilt";

const Homepage = () => {
  return (
    <div className="bg-gray-900 h-screen w-screen relative overflow-hidden flex flex-col justify-center items-center">
      <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 animate-pulse"></div>
      <div className="h-35-r w-35-r bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-full absolute top-96 -left-20 animate-pulse"></div>
      <Tilt>
        <div className="container h-96 w-96 bg-white bg-opacity-10 relative z-2 rounded-2xl shadow-5xl border border-r-0 border-b-0 border-opacity-30 backdrop-filter backdrop-blur-sm">
          <form className="h-full flex flex-col justify-evenly items-center">
            <div className="text-3xl font-semibold text-white tracking-wide">
              Login 24 Hashtags
            </div>
            <input
              className="input-text"
              type="text"
              placeholder="Enter user name"
            />
            <input
              className="input-text"
              type="password"
              placeholder="Enter password"
            />
            <input
              className="bg-white hover:bg-opacity-90 bg-opacity-50 cursor-pointer px-5 py-1 rounded-full"
              type="submit"
            />
          </form>
        </div>
      </Tilt>
    </div>
  );
};

export default Homepage;
