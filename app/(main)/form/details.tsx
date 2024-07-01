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

export function CardDetails() {
  return (
    <Card className="w-full p-6 shadow-lg" dir="rtl">
      <CardHeader>
        <CardTitle className="text-xl font-bold">פרטי העמית</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full gap-4">
            <div className="flex gap-4">
              <Input
                id="name"
                placeholder="שם פרטי"
                className="p-2 border border-gray-300 rounded flex-1"
              />
              <Input
                id="familyName"
                placeholder="שם משפחה"
                className="p-2 border border-gray-300 rounded flex-1"
              />
              <Input
                id="previousFamilyName"
                placeholder="שם משפחה קודם"
                className="p-2 border border-gray-300 rounded flex-1"
              />
            </div>
            <div className="flex gap-4">
              <Input
                type="date"
                id="birthdate"
                placeholder="תאריך לידה"
                className="p-2 border border-gray-300 rounded w-full"
              />
              <Select dir="rtl">
                <SelectTrigger id="gender" className="w-full">
                  <SelectValue placeholder="מין" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="male">זכר</SelectItem>
                  <SelectItem value="female">נקבה</SelectItem>
                </SelectContent>
              </Select>
              <Select dir="rtl">
                <SelectTrigger id="status" className="w-full">
                  <SelectValue placeholder="מצב משפחתי" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="single">רווק</SelectItem>
                  <SelectItem value="married">נשוי</SelectItem>
                  <SelectItem value="divorced">גרוש</SelectItem>
                  <SelectItem value="widowed">אלמן</SelectItem>
                  <SelectItem value="partner">ידוע בציבור</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
