"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Disc name must be at least 3 characters long",
  }),
  manufacturer: z.string().min(3, {
    message: "Disc manufacturer must be at least 3 characters long",
  }),
  type: z.string().min(3, {
    message: "Type must be at least 3 characters.",
  }),
  difficulty: z.string().min(3, {
    message: "Difficulty must be at least 3 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const NewRecordForm = () => {
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      manufacturer: "",
      type: "",
      difficulty: "",
    },
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      const response = await fetch(`http://localhost:3001/discs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          manufacturer: values.manufacturer,
          type: values.type,
          difficulty: values.difficulty,
        }),
      });

      if (!response.ok) {
        console.error("Failed to add new record: ", response.statusText);
        return;
      }

      form.reset({
        name: "",
        manufacturer: "",
        type: undefined,
        difficulty: undefined,
      });
      router.refresh();
    } catch (error) {
      console.error("Failed to add new record: ", error);
    }
  };

  return (
    <div className="px-4 pt-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-6"
        >
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Disc name"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="manufacturer"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Manufacturer</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Disc manufacturer"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        {field.value ? (
                          <SelectValue placeholder="Select type" />
                        ) : (
                          "Select type"
                        )}
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Putter">Putter</SelectItem>
                      <SelectItem value="Midrange">Midrange</SelectItem>
                      <SelectItem value="Driver">Driver</SelectItem>
                      <SelectItem value="Distance driver">
                        Distance driver
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="difficulty"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Difficulty</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        {field.value ? (
                          <SelectValue placeholder="Select difficulty" />
                        ) : (
                          "Select difficulty"
                        )}
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Beginner">Beginner</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />               
                </FormItem>
              )}
            />
          </div>
          <div className="mx-auto w-2/4">
            <Button type="submit" variant="outline" className="w-full">
              Add
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default NewRecordForm;
