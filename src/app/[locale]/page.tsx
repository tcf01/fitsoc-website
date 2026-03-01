import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { TargetAudienceSection } from '@/components/sections/TargetAudienceSection';
import { StackingPhotosSection } from '@/components/sections/StackingPhotosSection';
import { StoryGridSection } from '@/components/sections/StoryGridSection';
import { FeatureHighlightSection } from '@/components/sections/FeatureHighlightSection';
import { SportCarouselSection } from '@/components/sections/SportCarouselSection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <main className="flex flex-col gap-24 md:gap-32 bg-warm-bg px-6 py-24 md:py-32">
        <StackingPhotosSection />
        <TargetAudienceSection />
        <StoryGridSection />
        <FeatureHighlightSection />
        <SportCarouselSection />
      </main>
      <Footer />
    </>
  );
}
