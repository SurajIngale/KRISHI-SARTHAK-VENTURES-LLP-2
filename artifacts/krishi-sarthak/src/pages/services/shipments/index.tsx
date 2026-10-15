import React from 'react';
import { ServicePageView } from '@/components/ServicePageView';
import { getServiceBySlug } from '@/data/servicesData';

export default function ShipmentServicesPage() {
  const service = getServiceBySlug('shipments')!;
  return <ServicePageView service={service} />;
}
