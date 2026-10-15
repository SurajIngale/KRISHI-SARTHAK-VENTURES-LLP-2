import React from 'react';
import { ServicePageView } from '@/components/ServicePageView';
import { getServiceBySlug } from '@/data/servicesData';

export default function FreightForwardingLogisticsPage() {
  const service = getServiceBySlug('freight-forwarding-logistics')!;
  return <ServicePageView service={service} />;
}
