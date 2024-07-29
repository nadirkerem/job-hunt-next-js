"use client";
import { useQuery } from "@tanstack/react-query";

import { getAnalyticsAction } from "@/utils/actions";

import AnalyticsCard, { AnalyticsLoadingCard } from "./analytics-card";

export default function AnalyticsContainer() {
  const { data, isPending } = useQuery({
    queryKey: ["analytics"],
    queryFn: () => getAnalyticsAction(),
  });

  if (isPending)
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnalyticsLoadingCard />
        <AnalyticsLoadingCard />
        <AnalyticsLoadingCard />
      </div>
    );

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <AnalyticsCard title="pending stage" value={data?.pending || 0} />
      <AnalyticsCard title="interview stage" value={data?.interview || 0} />
      <AnalyticsCard title="declined" value={data?.declined || 0} />
    </div>
  );
}
