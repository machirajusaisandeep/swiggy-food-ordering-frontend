import PopularCuisine from "@/components/common/PopularCuisine";
import SearchBar from "@/components/common/SearchBar";
import SwiggyAssets from "@/constants/SwiggyAssets";

const HomePage = () => {
  const popularCuisines = Object.values(SwiggyAssets.popularCuisines);
  return (
    <div className="m-auto md:w-2/3">
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-2">Search for the best!</h2>
        <SearchBar />
      </div>
      <PopularCuisine title="What's on your mind?" cusines={popularCuisines} />
    </div>
  );
};

export default HomePage;
