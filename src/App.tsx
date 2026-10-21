/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { AmbientesSection } from './components/AmbientesSection.tsx';
import { AmenitiesSection } from './components/AmenitiesSection.tsx';
import { EventQualifier } from './components/EventQualifier.tsx';
import { PartyCalculator } from './components/PartyCalculator.tsx';
import { HostSection } from './components/HostSection.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { LocationSection } from './components/LocationSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ReservationForm } from './components/ReservationForm.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1E2922] font-sans-ui selection:bg-[#C5A059] selection:text-white">
      {/* 3-Zone Fixed Navigation Header */}
      <Header />

      {/* Hero Section reflecting exact Flyer Identity */}
      <main>
        <Hero />

        {/* Dynamic Highlight of Venue Spaces */}
        <AmbientesSection />

        {/* Structural 35% Forest Green Amenities Matrix */}
        <AmenitiesSection />

        {/* Modern Interactive Pre-Qualification Tool */}
        <EventQualifier />

        {/* Instant Practical Party & Drink Calculator */}
        <PartyCalculator />

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
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Quick WhatsApp Floating Contact */}
      <FloatingWhatsApp />
    </div>
  );
}
