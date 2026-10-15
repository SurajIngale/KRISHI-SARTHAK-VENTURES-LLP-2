import React from 'react';
import { ServicePageView } from '@/components/ServicePageView';
import { getServiceBySlug } from '@/data/servicesData';

export default function DocumentationServicesPage() {
  const service = getServiceBySlug('documentation-services')!;
  return <ServicePageView service={service} />;
}
