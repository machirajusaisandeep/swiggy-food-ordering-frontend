import { useCreateRestaurant, useGetRestaurant } from "@/api/RestaurantApi";
import ManageRestaurantForm from "@/components/restaurant/ManageRestaurant";

const ManageRestaurantPage = () => {
  const { isLoading, createRestaurant } = useCreateRestaurant();
  const { restaurant } = useGetRestaurant();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ManageRestaurantForm
        onSave={(formData: FormData) => {
          console.log(formData);
          createRestaurant(formData);
        }}
        isLoading={isLoading}
        restaurant={restaurant}
      />
    </div>
  );
};

export default ManageRestaurantPage;
