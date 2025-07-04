'use client';

import StatCard from '@/components/atoms/analytics/StatCard';
import { useAnalyticsSummary } from '@/hooks/analytics/useAnalyticsSummary';
import { formatStatCards } from '@/lib/analytics/utils/formatAnalyticsData';

export default function StatCardGroup() {
  const { current, previous, isLoading } = useAnalyticsSummary();

  if (isLoading || !current) {
    return <div className="grid grid-cols-2 md:grid-cols-4 gap-4">Loading...</div>;
  }

  const stats = formatStatCards(current, previous);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((item, idx) => (
        <StatCard key={idx} {...item} />
      ))}
    </div>
  );
}
