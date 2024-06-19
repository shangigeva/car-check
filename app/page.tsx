"use client";

import { useEffect, useState } from "react";
import { fetchCar } from "@/lib/data";
import { Pencil } from "lucide-react";
import { Car } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
