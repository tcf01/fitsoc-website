import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { CommunityStatsSection } from '@/components/sections/CommunityStatsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { DownloadCTASection } from '@/components/sections/DownloadCTASection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CommunityStatsSection />
      <TestimonialsSection />
      <DownloadCTASection />
      <Footer />
    </>
  );
}
