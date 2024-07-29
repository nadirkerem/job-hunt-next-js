import ChartsContainer from "@/components/charts-container";
import AnalyticsContainer from "@/components/analytics-container";
import { getChartsDataAction, getAnalyticsAction } from "@/utils/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function AnalyticsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["analytics"],
    queryFn: () => getAnalyticsAction(),
  });
  await queryClient.prefetchQuery({
    queryKey: ["charts"],
    queryFn: () => getChartsDataAction(),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AnalyticsContainer />
      {/* <ChartsContainer /> */}
    </HydrationBoundary>
  );
}
