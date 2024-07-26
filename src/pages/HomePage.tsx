import PopularCuisine from "@/components/common/PopularCuisine";
import SwiggyAssets from "@/constants/SwiggyAssets";

const HomePage = () => {
  const popularCuisines = Object.values(SwiggyAssets.popularCuisines);
  return (
    <div>
      <PopularCuisine title="What's on your mind?" cusines={popularCuisines} />
    </div>
  );
};

export default HomePage;
