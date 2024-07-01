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

export function CardContact() {
  return (
    <Card className="w-full p-6 shadow-lg" dir="rtl">
      <CardHeader>
        <CardTitle className="text-xl font-bold">כתובת ופרטי התקשרות</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full gap-4">
            {" "}
            <div className="flex gap-4">
              <Select dir="rtl">
                <SelectTrigger id="city" className="w-full">
                  <SelectValue placeholder="יישוב" />
                </SelectTrigger>
                <SelectContent position="popper"></SelectContent>
              </Select>
              <Select dir="rtl">
                <SelectTrigger id="street" className="w-full">
                  <SelectValue placeholder="רחוב " />
                </SelectTrigger>
                <SelectContent position="popper"></SelectContent>
              </Select>{" "}
              <Input id="mailBox" placeholder="תא דואר" />
            </div>
            <div className="flex gap-4">
              <Input
                id="houseNumber"
                placeholder="מספר בית"
                className="p-2 border border-gray-300 rounded flex-1"
              />
              <Input
                id="apartmentNumber"
                placeholder="מספר דירה "
                className="p-2 border border-gray-300 rounded flex-1"
              />
              <Input
                id="postalCode"
                placeholder=" מיקוד"
                className="p-2 border border-gray-300 rounded flex-1"
              />
            </div>
            <div className="flex gap-4">
              <Input
                type="email"
                id="mail"
                placeholder="דואר אלקטרוני"
                className="p-2 border border-gray-300 rounded flex-1"
              />
              <Input
                id="phone"
                placeholder="טלפון נייד"
                className="p-2 border border-gray-300 rounded flex-1"
              />
              <Input
                id="houserPhone"
                placeholder=" טלפון קווי"
                className="p-2 border border-gray-300 rounded flex-1"
              />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
