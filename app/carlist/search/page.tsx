"use client";

import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  carNumber: z.string().max(8).min(5, {
    message: "מספר הרכב חייב להכיל לפחות 5 ספרות",
  }),
});
export default function SearchPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      carNumber: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    router.push(`/carlist/search/${data.carNumber}`);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <div
        className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg"
        dir="rtl"
      >
        <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
          מידע על רכב
        </h1>
        <p className="text-sm text-gray-700 mb-6 text-center">
          בדיקת מידע על רכב לפי מספר רישוי והפקת דוח מידע מפורט בחינם!
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex items-center gap-4 mb-4"
          >
            <FormField
              control={form.control}
              name="carNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      id="carNumber"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="מספר רכב"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              חפש
            </Button>
          </form>
        </Form>
        <label htmlFor="carNumber" className="sr-only">
          Car Number
        </label>
        <div className="bg-blue-50 p-4 rounded-lg space-y-3">
          <div className="flex items-center gap-2">
            <Check className="text-green-500" />
            <p className="text-sm text-gray-800">הצלבה ממספר מאגרים</p>
          </div>
          <div className="flex items-center gap-2">
            <Check className="text-green-500" />
            <p className="text-sm text-gray-800">
              מידע מקיף על מיליוני כלי רכב בישראל
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Check className="text-green-500" />
            <p className="text-sm text-gray-800">מבוסס על מידע רשמי</p>
          </div>
        </div>
      </div>
    </main>
  );
}
