import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-10  w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-6  w-full" />
        <Skeleton className="h-6  w-full" />
        <Skeleton className="h-6  w-full" />
        <Skeleton className="h-6  w-full" />
        <Skeleton className="h-6  w-full" />
        <Skeleton className="h-6  w-full" />
        <Skeleton className="h-6  w-full" />
        <Skeleton className="h-6  w-full" />
      </div>
    </div>
  );
}
