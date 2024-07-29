import {
  useCreateRestaurant,
  useGetRestaurant,
  useUpdateRestaurant,
} from "@/api/RestaurantApi";
import ManageRestaurantForm from "@/components/restaurant/ManageRestaurant";

const ManageRestaurantPage = () => {
  const { isLoading: isCreateLoading, createRestaurant } =
    useCreateRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateRestaurant();
  const { restaurant, isLoading } = useGetRestaurant();

  const isEditing = !!restaurant;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ManageRestaurantForm
      onSave={(formData: FormData) => {
        if (isEditing) updateRestaurant(formData);
        else createRestaurant(formData);
      }}
      isLoading={isCreateLoading || isUpdateLoading}
      restaurant={restaurant}
    />
  );
};

export default ManageRestaurantPage;
