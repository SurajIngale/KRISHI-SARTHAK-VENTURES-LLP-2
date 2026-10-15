import React from 'react';
import { ServicePageView } from '@/components/ServicePageView';
import { getServiceBySlug } from '@/data/servicesData';

export default function GlobalTradeConsultancyPage() {
  const service = getServiceBySlug('global-trade-consultancy')!;
  return <ServicePageView service={service} />;
}
