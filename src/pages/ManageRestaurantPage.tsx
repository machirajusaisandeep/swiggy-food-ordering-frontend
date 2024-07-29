import { useCreateRestaurant } from "@/api/RestaurantApi";
import ManageRestaurantForm from "@/components/restaurant/ManageRestaurant";

const ManageRestaurantPage = () => {
  const { isLoading, createRestaurant } = useCreateRestaurant();
  return (
    <div>
      <ManageRestaurantForm
        onSave={(formData: FormData) => {
          console.log(formData);
          createRestaurant(formData);
        }}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ManageRestaurantPage;
