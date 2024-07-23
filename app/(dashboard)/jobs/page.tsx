import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import JobsList from "@/components/jobs-list";
import SearchForm from "@/components/search-form";

import { getAllJobsAction } from "@/utils/actions";

export default async function JobsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["jobs", "", "", ""],
    queryFn: () => getAllJobsAction({}),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchForm />
      <JobsList />
    </HydrationBoundary>
  );
}
