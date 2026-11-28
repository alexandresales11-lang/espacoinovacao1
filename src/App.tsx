/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';

const AmbientesSection = lazy(() =>
  import('./components/AmbientesSection.tsx').then((m) => ({ default: m.AmbientesSection }))
);
const AmenitiesSection = lazy(() =>
  import('./components/AmenitiesSection.tsx').then((m) => ({ default: m.AmenitiesSection }))
);
const EventQualifier = lazy(() =>
  import('./components/EventQualifier.tsx').then((m) => ({ default: m.EventQualifier }))
);
const GallerySection = lazy(() =>
  import('./components/GallerySection.tsx').then((m) => ({ default: m.GallerySection }))
);
const HostSection = lazy(() =>
  import('./components/HostSection.tsx').then((m) => ({ default: m.HostSection }))
);
const LocationSection = lazy(() =>
  import('./components/LocationSection.tsx').then((m) => ({ default: m.LocationSection }))
);
const ReservationForm = lazy(() =>
  import('./components/ReservationForm.tsx').then((m) => ({ default: m.ReservationForm }))
);
const FaqSection = lazy(() =>
  import('./components/FaqSection.tsx').then((m) => ({ default: m.FaqSection }))
);
const Footer = lazy(() =>
  import('./components/Footer.tsx').then((m) => ({ default: m.Footer }))
);
const FloatingWhatsApp = lazy(() =>
  import('./components/FloatingWhatsApp.tsx').then((m) => ({ default: m.FloatingWhatsApp }))
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1E2922] font-sans-ui selection:bg-[#C5A059] selection:text-white">
      {/* 3-Zone Fixed Navigation Header */}
      <Header />

      {/* Hero Section reflecting exact Flyer Identity */}
      <main>
        <Hero />

        <Suspense fallback={<div className="py-20" />}>
          {/* Dynamic Highlight of Venue Spaces */}
          <AmbientesSection />

          {/* Structural 35% Forest Green Amenities Matrix */}
          <AmenitiesSection />

          {/* Modern Interactive Pre-Qualification Tool */}
          <EventQualifier />

          {/* Real Photo Gallery with Lightbox */}
          <GallerySection />

          {/* Host Section with Konccy */}
          <HostSection />

          {/* Location & Interactive Map */}
          <LocationSection />

          {/* Express Reservation Form */}
          <ReservationForm />

          {/* FAQ Section */}
          <FaqSection />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        {/* Quiet Footer */}
        <Footer />

        {/* Quick WhatsApp Floating Contact */}
        <FloatingWhatsApp />
      </Suspense>
    </div>
  );
}
