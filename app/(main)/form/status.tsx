import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function CardStatus() {
  return (
    <Card className="w-full p-6 shadow-lg" dir="rtl">
      <CardHeader>
        <CardTitle className="text-xl font-bold">מעמד העמית</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full gap-4">
            <RadioGroup defaultValue="comfortable" className="space-y-4">
              <div className="flex gap-4">
                <div className="flex items-center space-x-2 flex-1">
                  <RadioGroupItem value="employee" id="r1" />
                  <Label htmlFor="r1">שכיר</Label>
                </div>
                <div className="flex items-center space-x-2 flex-1">
                  <RadioGroupItem value="self-employed" id="r2" />
                  <Label htmlFor="r2">עצמאי</Label>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center space-x-2 flex-1">
                  <RadioGroupItem value="control-employee" id="r3" />
                  <Label htmlFor="r3">שכיר בעל שליטה</Label>
                </div>
                <div className="flex items-center space-x-2 flex-1">
                  <RadioGroupItem value="self-employed-with-employer" id="r4" />
                  <Label htmlFor="r4">עצמאי באמצעות מעסיק</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
