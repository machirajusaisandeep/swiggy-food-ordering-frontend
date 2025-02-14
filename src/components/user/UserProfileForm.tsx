import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { User } from "@/types";
import { useEffect } from "react";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().optional(),
  addressLine1: z.string().min(1, "AddressLine1 is required"),
  city: z.string().min(1, "city is required"),
  state: z.string().min(1, "state is required"),
  country: z.string().min(1, "country is required"),
  pincode: z.string().min(1, "pincode is required"),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (data: UserFormData) => void;
  isUpdateLoading: boolean;
  currentUser: User;
};

const UserProfileForm = ({ onSave, isUpdateLoading, currentUser }: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: currentUser,
  });

  useEffect(() => {
    form.reset(currentUser);
  }, [currentUser, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          console.log(data);
          onSave(data);
        })}
        className="space-y-4 bg-gray-50 p-10 rounded-lg"
      >
        <div className="space-y-4">
          <h2 className="text-xl font-bold mb-2">User Profile</h2>
          <FormDescription>Update your profile details.</FormDescription>
          <Separator className="my-4" />
          <FormField
            control={form.control}
            name={"email"}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input className="bg-white" disabled {...field} />
                  </FormControl>
                </FormItem>
              );
            }}
          ></FormField>

          <FormField
            control={form.control}
            name={"name"}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input className="bg-white" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          ></FormField>

          <FormField
            control={form.control}
            name={"addressLine1"}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Textarea className="resize-none bg-white" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          ></FormField>
          <div className="flex gap-4 ">
            <FormField
              control={form.control}
              name={"city"}
              render={({ field }) => {
                return (
                  <FormItem className="flex-1">
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input className="bg-white" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            ></FormField>

            <FormField
              control={form.control}
              name={"state"}
              render={({ field }) => {
                return (
                  <FormItem className="flex-1">
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input className="bg-white" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            ></FormField>
          </div>

          <div className="flex gap-4 ">
            <FormField
              control={form.control}
              name={"country"}
              render={({ field }) => {
                return (
                  <FormItem className="flex-1">
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input className="bg-white" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            ></FormField>

            <FormField
              control={form.control}
              name={"pincode"}
              render={({ field }) => {
                return (
                  <FormItem className="flex-1">
                    <FormLabel>Pincode</FormLabel>
                    <FormControl>
                      <Input className="bg-white" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            ></FormField>
          </div>
        </div>
        {isUpdateLoading ? (
          <p>loading...</p>
        ) : (
          <Button variant="default" className="w-full" type="submit">
            Save
          </Button>
        )}
      </form>
    </Form>
  );
};

export default UserProfileForm;
