import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export interface Car {
  car_type: string;
  manufacturer: string;
  model: string;
  _id: number;
  mispar_rechev: number;
  tozeret_nm: string;
  degem_nm: string;
  shnat_yitzur: number;
  sug_delek_nm: string;
  mivchan_acharon_dt: string;
  tokef_dt: string;
  tzeva_rechev: string;
  sug_degem: string;
  ramat_gimur: string;
  degem_cd: number;
  baalut: string;
  [key: string]: any;
  tag_neche: TagNeche[];
}

export type TagNeche = {
  _id: number;
  "MISPAR RECHEV": number;
  "TAARICH HAFAKAT TAG": number;
  "SUG TAV": number;
  rank: number;
};
