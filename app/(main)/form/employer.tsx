import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CardEmployer() {
  return (
    <Card className="w-full p-6 shadow-lg" dir="rtl">
      <CardHeader>
        <CardTitle className="text-xl font-bold">פרטי המעסיק</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full gap-4">
            <div className="flex gap-4">
              <Input
                id="name"
                placeholder="שם "
                className="p-2 border border-gray-300 rounded flex-1"
              />
              <Input
                id="address"
                placeholder=" כתובת המעסיק"
                className="p-2 border border-gray-300 rounded flex-1"
              />
            </div>
            <div className="flex gap-4">
              <Input
                id="phone"
                placeholder="טלפון המעסיק "
                className="p-2 border border-gray-300 rounded flex-1"
              />
              <Input
                id="address"
                placeholder="  ח.פ/ עוסק מורשה"
                className="p-2 border border-gray-300 rounded flex-1"
              />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
