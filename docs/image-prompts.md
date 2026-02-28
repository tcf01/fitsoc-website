# FitSoc Website — Image Asset Prompts

## Summary

**Total images needed: 20**

| Section | Count | Type |
|---------|-------|------|
| Hero Carousel | 5 | Editorial lifestyle sport photography |
| Feature Stacking Cards | 3 | Moody background images |
| Parallax Gallery | 6 | Mix of app screenshot mockups and lifestyle photos |
| Testimonials | 3 | Avatar / profile photos |
| Navbar / General | 1 | Logo SVG |
| Hero Social Proof | 2 | Small avatar cluster photos (optional) |

---

## Table of Contents

1. [Hero Carousel — Card 1: Basketball Court at Sunset](#hero-01)
2. [Hero Carousel — Card 2: Running Club on Victoria Harbour Promenade](#hero-02)
3. [Hero Carousel — Card 3: Tennis Match Under Floodlights](#hero-03)
4. [Hero Carousel — Card 4: Hiking Group on Dragon's Back Trail](#hero-04)
5. [Hero Carousel — Card 5: Badminton Game in Sports Hall](#hero-05)
6. [Stacking Card — Discover: Urban Court Discovery](#card-discover)
7. [Stacking Card — Connect: Athletes Meeting Up](#card-connect)
8. [Stacking Card — Improve: Training Progress](#card-improve)
9. [Parallax Gallery — Left 1: App Screenshot — Map View](#gallery-left-01)
10. [Parallax Gallery — Left 2: Lifestyle — Post-Game Huddle](#gallery-left-02)
11. [Parallax Gallery — Left 3: App Screenshot — Club Feed](#gallery-left-03)
12. [Parallax Gallery — Right 1: Lifestyle — Stretching at Dawn](#gallery-right-01)
13. [Parallax Gallery — Right 2: App Screenshot — Session Detail](#gallery-right-02)
14. [Parallax Gallery — Right 3: Lifestyle — Night Basketball](#gallery-right-03)
15. [Testimonial Avatar 1: Young Woman — Basketball Player](#avatar-01)
16. [Testimonial Avatar 2: Young Man — Runner](#avatar-02)
17. [Testimonial Avatar 3: Young Man — Tennis Player](#avatar-03)
18. [Logo SVG](#logo-svg)
19. [Hero Social Proof — Avatar Set A](#social-proof-a)
20. [Hero Social Proof — Avatar Set B](#social-proof-b)

---

## Hero Carousel

The hero section (`HeroSection.tsx`) renders a horizontally-scrolling carousel of 5 images at `320-500px` wide and `400-600px` tall. Currently using placeholder gradient divs. Image sources are referenced as `/images/hero-1.jpg` through `/images/hero-5.jpg`.

---

### <a id="hero-01"></a>Hero Carousel — Card 1: Basketball Court at Sunset

- **ID**: `hero-01`
- **Section**: Hero Carousel
- **Dimensions**: 3:4 portrait, minimum 1000x1200px
- **File path**: `public/images/hero-1.jpg`
- **Prompt**: Editorial lifestyle photograph of a pickup basketball game on an outdoor rooftop court in Hong Kong at golden hour. Two players mid-action, one driving to the basket. The Victoria Harbour skyline is softly blurred in the background. Dramatic side lighting with long warm shadows. Shallow depth of field. Cinematic color grading with deep shadows, lifted blacks, and warm amber-vermilion tones. Shot on 85mm lens, f/1.8. Premium sports magazine aesthetic.
- **Style notes**: Dominant warm tones (amber, vermilion #FA5F47). Deep crushed blacks in the shadows. Slight film grain. The mood should feel aspirational and energetic. Composition weighted to the left third to allow text overlay on the right if needed.

---

### <a id="hero-02"></a>Hero Carousel — Card 2: Running Club on Victoria Harbour Promenade

- **ID**: `hero-02`
- **Section**: Hero Carousel
- **Dimensions**: 3:4 portrait, minimum 1000x1200px
- **File path**: `public/images/hero-2.jpg`
- **Prompt**: Editorial photograph of a small running club (3-4 people) jogging along the Tsim Sha Tsui waterfront promenade at dusk. Hong Kong Island skyline lights reflecting on the harbour water behind them. Runners wearing modern athletic wear. Low-angle shot capturing motion blur on their legs while torsos remain sharp. Moody twilight sky transitioning from deep blue to warm orange at the horizon. Cinematic color grading, warm-cool contrast. Shot on 35mm lens, f/2.8.
- **Style notes**: Cool blue-purple sky contrasting with warm streetlight / harbour light reflections. Slight motion blur conveys energy. Keep faces partially obscured or in profile for a more editorial, anonymous feel.

---

### <a id="hero-03"></a>Hero Carousel — Card 3: Tennis Match Under Floodlights

- **ID**: `hero-03`
- **Section**: Hero Carousel
- **Dimensions**: 3:4 portrait, minimum 1000x1200px
- **File path**: `public/images/hero-3.jpg`
- **Prompt**: Dramatic editorial photograph of a tennis player mid-serve on an outdoor hard court at night under harsh floodlights. Sweat particles visible in the backlit floodlight beam. Dark background with only the court surface and player illuminated. Strong chiaroscuro lighting. The player is captured in a powerful upward motion, racket behind their head. Cinematic, high-contrast color grading with deep blacks and isolated warm highlights on skin and court surface. Shot on 70-200mm lens, f/2.8.
- **Style notes**: Extremely high contrast — near-black background with the player carved out by a single hard light source. Vermilion accent could appear as a court line or wristband detail. Minimal color palette: black, warm skin tones, court green-blue.

---

### <a id="hero-04"></a>Hero Carousel — Card 4: Hiking Group on Dragon's Back Trail

- **ID**: `hero-04`
- **Section**: Hero Carousel
- **Dimensions**: 3:4 portrait, minimum 1000x1200px
- **File path**: `public/images/hero-4.jpg`
- **Prompt**: Editorial lifestyle photograph of a small hiking group (3 people) on the Dragon's Back trail in Hong Kong, silhouetted against a dramatic sunrise. Lush green tropical vegetation framing the trail. One hiker in the foreground looking out over Shek O beach far below, backpack visible. Volumetric morning mist in the valley. Golden hour backlighting creating rim light around the hikers. Warm amber and earthy tones. Shot on 24mm wide-angle lens, f/5.6.
- **Style notes**: Airy and aspirational compared to the darker indoor shots. Still maintain the warm color grading but allow more natural greens. The mist adds depth and atmosphere. Composition should lead the eye from foreground hikers to the coastline below.

---

### <a id="hero-05"></a>Hero Carousel — Card 5: Badminton Game in Sports Hall

- **ID**: `hero-05`
- **Section**: Hero Carousel
- **Dimensions**: 3:4 portrait, minimum 1000x1200px
- **File path**: `public/images/hero-5.jpg`
- **Prompt**: Editorial sports photograph of an intense badminton doubles match inside a dimly-lit Hong Kong community sports hall. One player leaping for a smash shot, shuttlecock frozen mid-air. Fluorescent overhead lights creating dramatic top-down illumination with strong shadows on the wooden court floor. Other players visible but slightly out of focus. Dynamic diagonal composition. Cinematic color grading with desaturated greens from the fluorescent lights mixed with warm skin tones. Shot on 50mm lens, f/1.4.
- **Style notes**: Indoor sports hall atmosphere — slightly gritty, authentic. The fluorescent lighting should feel intentionally moody rather than flat. Warm skin tones pop against the cooler ambient light. Capture the athleticism and intensity of the moment.

---

## Feature Stacking Cards

The features section (`FeaturesSection.tsx`) uses 3 sticky stacking cards at `500px` wide and `600-700px` tall. Currently using CSS gradient backgrounds. These images would replace or layer behind the gradients.

---

### <a id="card-discover"></a>Stacking Card — Discover: Urban Court Discovery

- **ID**: `card-discover`
- **Section**: Feature Stacking Cards
- **Dimensions**: 5:7 portrait, minimum 1000x1400px
- **File path**: `public/images/features/card-discover.jpg`
- **Prompt**: Dark, atmospheric photograph of an empty urban basketball court nestled between residential tower blocks in Hong Kong at night. A single overhead streetlight casting a cone of warm light onto the court surface. Wet ground reflecting the light after rain. The surrounding buildings have scattered lit windows creating a mosaic of warm squares in the darkness. No people — the image conveys a hidden gem waiting to be discovered. Deep shadows, moody, cinematic. Shot on 24mm lens, f/2.0.
- **Style notes**: Very dark overall (will have text overlaid at the bottom). The gradient on this card is dark navy to deep blue (`#1a1a2e` to `#0f3460`), so the image should have cool blue-black tones with isolated warm light accents. The vermilion accent glow in the top-right corner of the card means the image should be darker in that region. Must work with white text overlaid on the lower third.

---

### <a id="card-connect"></a>Stacking Card — Connect: Athletes Meeting Up

- **ID**: `card-connect`
- **Section**: Feature Stacking Cards
- **Dimensions**: 5:7 portrait, minimum 1000x1400px
- **File path**: `public/images/features/card-connect.jpg`
- **Prompt**: Warm, intimate editorial photograph of a diverse group of young athletes (4-5 people) gathered at a dimly-lit rooftop or outdoor seating area after a sports session. They are sharing drinks, laughing, checking phones. Warm string lights or lanterns in the background. Hong Kong high-rise buildings softly blurred behind them. The scene feels authentic and spontaneous. Warm amber-vermilion color grading, low-key lighting. Shot on 35mm lens, f/1.8. Shallow depth of field with the group in focus.
- **Style notes**: The card gradient is warm brown-amber (`#23110f` to `#5a2a0f`), so lean into warm, earthy, fire-lit tones. The image should feel like a warm gathering — community and connection. Keep the lower third dark enough for text overlay. Faces can be partially lit, adding to the editorial mood.

---

### <a id="card-improve"></a>Stacking Card — Improve: Training Progress

- **ID**: `card-improve`
- **Section**: Feature Stacking Cards
- **Dimensions**: 5:7 portrait, minimum 1000x1400px
- **File path**: `public/images/features/card-improve.jpg`
- **Prompt**: High-contrast, dramatic photograph of a single athlete mid-training in a dark gym or outdoor space. Close-up from behind, showing defined shoulder and arm muscles as they perform a stretching or warm-up movement. A single hard side light sculpts the body. Sweat visible on the skin. The background is almost completely black. Minimal, powerful, focused. The mood conveys discipline and self-improvement. Shot on 85mm lens, f/1.4. Black and white with subtle warm tone.
- **Style notes**: The card gradient is near-black (`#0a0a0a` to `#2d2d2d`). This image should be very dark and desaturated — almost monochrome with just a hint of warm skin tone. Think Nike Training Club editorial aesthetic. Lower third must be very dark for text readability. The single light source creates a sculptural, almost abstract quality.

---

## Parallax Gallery

The parallax gallery (`ParallaxGallerySection.tsx`) has two columns of 3 images each. Left column uses `aspect-[3/4]`, `aspect-[4/3]`, `aspect-[3/4]`. Right column uses `aspect-[4/3]`, `aspect-[3/4]`, `aspect-[4/3]`. Currently all placeholder gradients. Recommend alternating between app screenshot mockups and lifestyle photos.

---

### <a id="gallery-left-01"></a>Parallax Gallery — Left 1: App Screenshot — Map View

- **ID**: `gallery-left-01`
- **Section**: Parallax Gallery (left column)
- **Dimensions**: 3:4 portrait, minimum 800x1067px
- **File path**: `public/images/gallery/gallery-left-01.jpg`
- **Prompt**: Clean mockup of a smartphone displaying the FitSoc app map view screen. The phone is placed on a dark concrete surface, slightly angled, with moody overhead lighting. The screen shows a dark-mode map interface with vermilion (#FA5F47) pins marking sports venues across Hong Kong. Soft shadows beneath the phone. Minimal styling — the focus is the screen content. Dark, editorial product photography.
- **Style notes**: This can be a composite — photograph a real phone on a dark surface, then overlay the actual app screenshot onto the screen. Alternatively, generate a convincing UI mockup. The surrounding environment should be very dark to match the website's black background. Consider a subtle vermilion light reflection on the surface near the phone.

---

### <a id="gallery-left-02"></a>Parallax Gallery — Left 2: Lifestyle — Post-Game Huddle

- **ID**: `gallery-left-02`
- **Section**: Parallax Gallery (left column)
- **Dimensions**: 4:3 landscape, minimum 1067x800px
- **File path**: `public/images/gallery/gallery-left-02.jpg`
- **Prompt**: Editorial lifestyle photograph of a group of young athletes in a tight huddle on a sports court, shot from slightly above. Hands stacked together in the center in a team cheer. Warm overhead floodlight creating a pool of light on the group while the surrounding court falls into shadow. Diverse group wearing casual athletic wear. The energy is joyful and united. Warm color grading with amber highlights. Shot on 35mm lens, f/2.0.
- **Style notes**: Landscape orientation. The huddle creates a natural circular composition. Warm tones dominate. This image represents the community and social aspect of FitSoc. Keep it feeling authentic rather than overly posed.

---

### <a id="gallery-left-03"></a>Parallax Gallery — Left 3: App Screenshot — Club Feed

- **ID**: `gallery-left-03`
- **Section**: Parallax Gallery (left column)
- **Dimensions**: 3:4 portrait, minimum 800x1067px
- **File path**: `public/images/gallery/gallery-left-03.jpg`
- **Prompt**: Clean mockup of a smartphone displaying the FitSoc app club feed screen. The phone is resting on a dark wooden bench (like a changing room bench). The screen shows a dark-mode social feed with posts, photos, and vermilion accent buttons. Dramatic side lighting from the left. A folded gym towel and water bottle partially visible in the background, out of focus. Dark, editorial product photography.
- **Style notes**: Similar treatment to gallery-left-01 for visual cohesion across app screenshots. The changing room setting adds context. Screen content should show the club/social features of the app.

---

### <a id="gallery-right-01"></a>Parallax Gallery — Right 1: Lifestyle — Stretching at Dawn

- **ID**: `gallery-right-01`
- **Section**: Parallax Gallery (right column)
- **Dimensions**: 4:3 landscape, minimum 1067x800px
- **File path**: `public/images/gallery/gallery-right-01.jpg`
- **Prompt**: Editorial lifestyle photograph of a young woman stretching on a quiet outdoor running track in Hong Kong at dawn. She is in a deep lunge stretch, silhouetted against a pastel sky. Early morning light creating a warm rim light on her hair and shoulders. The track curves away into the soft distance. Atmospheric haze. Serene, focused, peaceful energy. Warm-cool color contrast. Shot on 85mm lens, f/2.0.
- **Style notes**: Landscape orientation. Softer and more serene than the hero images but still maintaining the warm color grading. The dawn setting provides natural warm-cool contrast. This image balances the high-energy shots with a quieter, contemplative moment.

---

### <a id="gallery-right-02"></a>Parallax Gallery — Right 2: App Screenshot — Session Detail

- **ID**: `gallery-right-02`
- **Section**: Parallax Gallery (right column)
- **Dimensions**: 3:4 portrait, minimum 800x1067px
- **File path**: `public/images/gallery/gallery-right-02.jpg`
- **Prompt**: Clean mockup of a smartphone displaying the FitSoc app session detail screen. The phone is held in a hand against a blurred dark background (bokeh lights suggesting a night city scene). The screen shows a dark-mode session card with venue details, player list, and a vermilion "Join" button. The hand is lit from the screen glow. Cinematic, shallow depth of field. Dark, editorial product photography.
- **Style notes**: The hand-held phone adds a human element. The bokeh background keeps it feeling premium and urban. Screen content should clearly show the session-joining feature.

---

### <a id="gallery-right-03"></a>Parallax Gallery — Right 3: Lifestyle — Night Basketball

- **ID**: `gallery-right-03`
- **Section**: Parallax Gallery (right column)
- **Dimensions**: 4:3 landscape, minimum 1067x800px
- **File path**: `public/images/gallery/gallery-right-03.jpg`
- **Prompt**: Wide-angle editorial photograph of a nighttime 3-on-3 basketball game on an outdoor cage court in a dense Hong Kong neighborhood. Harsh overhead light illuminating the court from above. Players mid-game with dynamic movement. Surrounding residential towers rise up on all sides, lit windows creating a vertical grid pattern. Gritty, urban, electric atmosphere. High contrast with deep shadows. Warm-toned floodlight against cool blue ambient city light. Shot on 24mm lens, f/2.8.
- **Style notes**: Landscape orientation. This is the most "urban" and energetic image in the gallery. The cage court and surrounding towers create a uniquely Hong Kong atmosphere. The contrast between the harsh court light and the ambient city glow gives it cinematic depth.

---

## Testimonials

The testimonials section (`TestimonialsSection.tsx`) shows 3 cards, each with a small `40x40px` circular avatar. Currently using placeholder `div` with `bg-primary/20`.

---

### <a id="avatar-01"></a>Testimonial Avatar 1: Young Woman — Basketball Player

- **ID**: `avatar-01`
- **Section**: Testimonials
- **Dimensions**: 1:1 square, minimum 200x200px
- **File path**: `public/images/avatars/avatar-01.jpg`
- **Prompt**: Close-up portrait headshot of a young East Asian woman in her early 20s, smiling naturally. She is wearing a basketball jersey, with slightly messy hair from exercise. Warm, soft lighting from one side. Dark, blurred background. The expression is genuine and approachable. Shot on 85mm lens, f/1.8. Warm color grading.
- **Style notes**: Small display size (40x40px) so the face should fill most of the frame. Natural and authentic — not a stock photo smile. Warm tones consistent with the site palette. Consider using AI avatar generators (e.g., Generated Photos, Lensa) for consistency and to avoid licensing issues.

---

### <a id="avatar-02"></a>Testimonial Avatar 2: Young Man — Runner

- **ID**: `avatar-02`
- **Section**: Testimonials
- **Dimensions**: 1:1 square, minimum 200x200px
- **File path**: `public/images/avatars/avatar-02.jpg`
- **Prompt**: Close-up portrait headshot of a young East Asian man in his mid-20s, slight smile. He is wearing a running shirt, with a light sheen of sweat. Outdoor setting with soft natural backlight creating a warm rim light. Dark, blurred background. Confident, friendly expression. Shot on 85mm lens, f/1.8. Warm color grading.
- **Style notes**: Same treatment as avatar-01 for visual consistency. Face fills the frame. Warm skin tones, dark background. At 40x40px display size, simplicity is key.

---

### <a id="avatar-03"></a>Testimonial Avatar 3: Young Man — Tennis Player

- **ID**: `avatar-03`
- **Section**: Testimonials
- **Dimensions**: 1:1 square, minimum 200x200px
- **File path**: `public/images/avatars/avatar-03.jpg`
- **Prompt**: Close-up portrait headshot of a young East Asian man in his early 20s, wearing a tennis polo shirt and a headband. Natural, relaxed expression. Soft side lighting. Dark, blurred outdoor background suggesting a court environment. Shot on 85mm lens, f/1.8. Warm color grading consistent with the other avatars.
- **Style notes**: Same treatment as the other avatars. Consider generating all three avatars together to ensure stylistic consistency. Alternatively, use illustrated/stylized avatars if photorealistic generation produces inconsistent results.

---

## General / Navbar

---

### <a id="logo-svg"></a>Logo SVG

- **ID**: `logo-svg`
- **Section**: Navbar / Footer
- **Dimensions**: SVG, scalable, recommended viewBox around 120x32
- **File path**: `public/images/logo.svg`
- **Prompt**: N/A — this should be designed, not generated. The navbar currently uses the text "FitSoc" as a wordmark (`t('logo')`). Design a clean, modern wordmark or logomark in white. Consider: a minimal sans-serif wordmark with the "F" or "S" stylized, or a small geometric icon (abstract flame, running figure, or connected dots) paired with the text. The vermilion (#FA5F47) accent color can be used for a detail element.
- **Style notes**: Must work at small sizes (navbar height ~32px). Should be legible against both black and transparent backgrounds. Provide both a white version (for dark backgrounds) and a dark version (for light contexts). SVG format for crisp rendering at all sizes.

---

### <a id="social-proof-a"></a>Hero Social Proof — Avatar Set A

- **ID**: `social-proof-a`
- **Section**: Hero (social proof cluster)
- **Dimensions**: 1:1 square, 64x64px minimum
- **File path**: `public/images/avatars/social-proof-01.jpg` through `social-proof-04.jpg`
- **Prompt**: Set of 4 small, tightly-cropped circular headshot portraits of diverse young people (mixed gender, East Asian). Each person appears active/sporty — wearing athletic wear, slightly flushed, natural expressions. Warm, consistent lighting across all four. Dark backgrounds. These display at 32x32px in an overlapping row.
- **Style notes**: These are extremely small and overlap each other, so only the general impression matters — warm skin tones against dark backgrounds, clearly different people. Generate as a batch for consistency. Could also use the same AI avatar tool as the testimonial avatars.

---

### <a id="social-proof-b"></a>Hero Social Proof — Avatar Set B

- **ID**: `social-proof-b`
- **Section**: Hero (social proof cluster) — alternative
- **Dimensions**: N/A
- **File path**: N/A
- **Prompt**: N/A — as an alternative to generating individual avatars for the social proof cluster, consider using a simple CSS/SVG approach: colored circles with initials, or gradient circles matching the brand palette. This avoids the uncanny valley of tiny AI-generated faces at 32px. The current placeholder (`bg-primary/60` circles) already works reasonably well.
- **Style notes**: This is an optional enhancement. The placeholder circles are acceptable for launch. If real user photos become available, use those instead.

---

## Global Style Guide for All Images

To ensure visual cohesion across all generated images:

- **Color grading**: Warm shadows (push blacks toward brown/amber, never pure black). Highlights should lean warm (amber/vermilion). Avoid cool or clinical tones except for intentional contrast (e.g., night city scenes).
- **Contrast**: High contrast, lifted blacks. Aim for a look between editorial magazine photography and cinematic film stills.
- **Film grain**: Add subtle grain (ISO 800-1600 equivalent) to all images for texture and cohesion.
- **Lens choices**: Use realistic focal lengths and depth of field. Avoid ultra-wide distortion or telephoto compression unless specified.
- **People**: Young adults (18-28), primarily East Asian to reflect the Hong Kong context. Diverse within that range. Natural expressions, not posed stock-photo smiles. Athletic but not bodybuilder physiques.
- **Hong Kong context**: Where possible, include recognizable Hong Kong elements — dense residential towers, harbour views, cage courts, MTR stations, wet markets in the background, etc.
- **Brand color**: Vermilion #FA5F47 should appear as a subtle accent in at least half the images — as a piece of clothing, a court line, a light reflection, or color grading push. Never dominant, always tasteful.
- **Negative space**: Most images will have text or UI elements overlaid. Ensure at least one edge or region has enough dark, low-detail space for legibility.
