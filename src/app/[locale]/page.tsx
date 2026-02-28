import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { StackingPhotosSection } from '@/components/sections/StackingPhotosSection';
import { StoryGridSection } from '@/components/sections/StoryGridSection';
import { FeatureHighlightSection } from '@/components/sections/FeatureHighlightSection';
import { DownloadCTASection } from '@/components/sections/DownloadCTASection';
import { SportCarouselSection } from '@/components/sections/SportCarouselSection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StackingPhotosSection />
      <StoryGridSection />
      <FeatureHighlightSection />
      <DownloadCTASection />
      <SportCarouselSection />
      <Footer />
    </>
  );
}
