import { Button } from "@/components/ui/button";
import { fetchCar } from "@/lib/data";
import axios from "axios";
import { CheckCheckIcon, Pencil, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function MainPage({
  params,
}: {
  params: { carNumber: string };
}) {
  const car = await fetchCar(params.carNumber);
  console.log(car);

  let tag = false;
  if (car.tag_neche.length > 0) {
    const first = car.tag_neche[0];
    if (
      first["SUG TAV"] == 1 &&
      first["MISPAR RECHEV"].toString() === params.carNumber
    ) {
      tag = true;
    }
  }
  return (
    <Table className="shadow-md rounded-lg overflow-hidden w-full">
      <TableHeader dir="rtl" className="bg-gray-100  text-center">
        <TableRow>
          <TableHead className="text-right p-2 font-semibold ">
            פרטי רכב
          </TableHead>
          <TableHead className="text-right p-2 font-semibold">ערכים</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="px-3 py-2 font-medium">מספר רכב</TableCell>
          <TableCell className="px-3 py-2 font-bold">
            {car.mispar_rechev}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="px-3 py-2 font-medium">יצרן</TableCell>
          <TableCell className="px-3 py-2 font-bold">
            {car.tozeret_nm}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="px-3 py-2 font-medium">Manufacturer</TableCell>
          <TableCell className="px-3 py-2 font-bold">
            {car.tozeret_nm.split("-")[0]}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="px-3 py-2 font-medium ">דגם</TableCell>
          <TableCell className="px-3 py-2 font-bold">{car.degem_nm}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="px-3 py-2 font-medium">שנת ייצור</TableCell>
          <TableCell className="px-3 py-2 font-bold">
            {car.shnat_yitzur}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="px-3 py-2 font-medium">סוג דלק</TableCell>
          <TableCell className="px-3 py-2 font-bold">
            {car.sug_delek_nm}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="px-3 py-2 font-medium">
            מבחן שנתי אחרון{" "}
          </TableCell>
          <TableCell className="px-3 py-2 font-bold">
            {car.mivchan_acharon_dt}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="px-3 py-2 font-medium">תוקף רישוי </TableCell>
          <TableCell className="px-3 py-2 font-bold">{car.tokef_dt}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="px-3 py-2 font-medium">צבע</TableCell>
          <TableCell className="px-3 py-2 font-bold">
            {car.tzeva_rechev}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="px-3 py-2 font-medium">תו נכה</TableCell>
          <TableCell className="px-3 py-2 font-bold">
            {tag ? (
              <CheckCheckIcon className="text-green-400" />
            ) : (
              <X className="text-red-500" />
            )}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
