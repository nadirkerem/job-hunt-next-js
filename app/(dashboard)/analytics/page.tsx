import { getAnalyticsAction } from "@/utils/actions";

export default async function AnalyticsPage() {
  const analytics = await getAnalyticsAction();
  console.log(analytics);

  return <div>AnalyticsPage</div>;
}
