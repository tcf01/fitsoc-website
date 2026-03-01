# FitSoc Website — Image Generation Prompts

All images follow a unified editorial aesthetic: dark/moody, cinematic, warm tones with subtle film grain. Hong Kong sports lifestyle context. Reference: thesilktea.com visual language.

**Casting / ethnicity guideline:** Reflect Hong Kong's real sports community — majority East Asian (Chinese/HK locals), mixed with South Asian, Southeast Asian, and Western expats. Vary the mix across images: some all-Asian, some mixed Asian + foreigner groups, some with expats playing alongside locals. No single image needs to be perfectly balanced; diversity should feel natural across the full set.

**Generation notes:** No watermarks, no AI-generated text overlays, no logos, no signatures. All output must be clean, production-ready images with no visible branding or generation artifacts.

---

## Summary Table

| Section | Image Count | Notes |
|---|---|---|
| Hero Carousel | 5 | Full-bleed background photos, draggable carousel |
| Stacking Photos | 5 | Tilted polaroid-style, 260x340px rendered size |
| Story Grid | 4 | 4:3 aspect ratio tiles, 2x2 grid |
| Feature Highlight | 1 | Phone screen screenshot (9:19.5 aspect ratio) |
| Download CTA | 3 | Phone screen screenshots (center + two flanking) |
| **Total** | **18** | |

No images are required for SportCarouselSection (emoji + text only) or Footer (SVG icons only).

---

## Table of Contents

- [Hero Carousel](#hero-carousel)
  - [hero-01 — Basketball Session](#hero-01--basketball-session)
  - [hero-02 — Running Club](#hero-02--running-club)
  - [hero-03 — Tennis Match](#hero-03--tennis-match)
  - [hero-04 — Pickleball Session](#hero-04--pickleball-session)
  - [hero-05 — Badminton Game](#hero-05--badminton-game)
- [Stacking Photos Section](#stacking-photos-section)
  - [stack-01 — Sport Action A](#stack-01--sport-action-a)
  - [stack-02 — Sport Action B](#stack-02--sport-action-b)
  - [stack-03 — Sport Action C (Pickleball)](#stack-03--sport-action-c-pickleball)
  - [stack-04 — Sport Action D (Tennis Detail)](#stack-04--sport-action-d-tennis-detail)
  - [stack-05 — Sport Action E](#stack-05--sport-action-e)
- [Story Grid Section](#story-grid-section)
  - [story-map — Map / Discovery Tile](#story-map--map--discovery-tile)
  - [story-session — Session / Activity Tile](#story-session--session--activity-tile)
  - [story-club — Club / Community Tile](#story-club--community-tile)
  - [story-community — Community / Together Tile](#story-community--together-tile)
- [Feature Highlight Section](#feature-highlight-section)
  - [feature-screen-01 — App Map View](#feature-screen-01--app-map-view)
- [Download CTA Section](#download-cta-section)
  - [cta-screen-left — App Screen Left](#cta-screen-left--app-screen-left)
  - [cta-screen-center — App Screen Center](#cta-screen-center--app-screen-center)
  - [cta-screen-right — App Screen Right](#cta-screen-right--app-screen-right)

---

## Hero Carousel

The carousel auto-scrolls horizontally behind large centered "FitSoc" wordmark text. Each card is rendered at 320–500px wide, 70vh tall, with a dark gradient overlay. Images sit behind the overlay so they should be vivid and high-contrast enough to read through it.

Component: `src/components/sections/HeroSection.tsx`
Rendered card size: 320px–500px wide × ~70vh tall (landscape-ish crop, portrait safe)
Recommended export: 1200 × 1600px (portrait), JPEG, quality 90

---

### hero-01 — Basketball Session

**ID:** `hero-01`
**Section:** Hero Carousel, slide 1
**Dimensions:** 1200 × 1600px
**File path:** `public/images/hero/hero-01.jpg`

**Generation prompt:**
A cinematic portrait-format photo of young adults playing a pickup basketball game on an outdoor half-court in Hong Kong at golden hour. The court is set against the backdrop of dense Hong Kong residential tower blocks with bamboo scaffolding visible in the mid-distance. A player is mid-jump, ball raised overhead, silhouetted against a warm amber sky. Three other players are in motion below. The lighting is low-angle warm sunlight creating long shadows on the concrete. Color grade: deep orange-amber highlights, crushed blacks, slight film grain overlay. Mood: energetic, gritty urban sport.

**Style notes:**
- Warm tones: amber, burnt orange, deep brown shadows
- Film grain texture, slight halation around highlights
- No visible faces needed — silhouettes or motion blur acceptable
- Avoid over-saturated sports photography clichés; aim for editorial magazine feel
- Casting: all Asian players — local HK pickup game feel

---

### hero-02 — Running Club

**ID:** `hero-02`
**Section:** Hero Carousel, slide 2
**Dimensions:** 1200 × 1600px
**File path:** `public/images/hero/hero-02.jpg`

**Generation prompt:**
A moody editorial photo of a group of runners on the Victoria Harbour waterfront promenade in Hong Kong at dusk. The runners are spread across the frame in a loose pack, all facing away from camera toward the harbor. City skyline glitters in the background, slightly out of focus. The foreground runner is sharp, others bokeh. Wet pavement reflects the city lights in streaks of orange and white. Color grade: cool blue-grey shadows, warm amber street light pockets, high contrast. Mood: determined, contemplative, cinematic.

**Style notes:**
- Cooler palette than hero-01 — the gradient in code is `rgba(80,60,40,0.4)` suggesting warm-brown tones bleeding into near-black
- Reflections and wet surfaces add depth
- Urban loneliness aesthetic — even in a group, each person feels focused inward
- Casting: mixed group — mostly Asian runners with one or two Western expats in the pack

---

### hero-03 — Tennis Match

**ID:** `hero-03`
**Section:** Hero Carousel, slide 3
**Dimensions:** 1200 × 1600px
**File path:** `public/images/hero/hero-03.jpg`

**Generation prompt:**
A dramatic, low-angle editorial photo of a tennis player mid-serve on a floodlit outdoor court at night in Hong Kong. The player is caught at peak extension, racket blurred at contact, tennis ball frozen with slight motion blur trail. The court lights create harsh top-down shadows on the green hard court surface. Background: dark urban skyline, out of focus apartment towers with lit windows creating a bokeh cityscape. Color grade: warm coral highlights from court floodlights against a deep blue-black night sky, subtle film grain. Mood: intense, isolated, premium.

**Style notes:**
- Dominant color note from code: `rgba(250,95,71,0.15)` — a faint coral/red accent, so the image itself should read warm but not overpowering
- Strong contrast between the lit court and dark surroundings
- Shallow depth of field on the player
- Casting: Asian player

---

### hero-04 — Pickleball Session

**ID:** `hero-04`
**Section:** Hero Carousel, slide 4
**Dimensions:** 1200 × 1600px
**File path:** `public/images/hero/hero-04.jpg`

**Generation prompt:**
A cinematic portrait-format editorial photo of a doubles pickleball game on a floodlit outdoor court in Hong Kong at twilight. Two players at the net in mid-volley — paddles raised, the wiffle ball frozen between them. A second pair of players visible behind at the baseline. The court is set inside a fenced public sports facility with dense residential towers rising behind, balcony lights dotting the background. Warm tungsten floodlights cast strong downward shadows on the green court surface. Color grade: warm amber-gold floodlight highlights, cool blue-grey twilight sky, crushed blacks in the periphery, subtle film grain. Mood: fast, social, accessible, buzzing energy.

**Style notes:**
- Code gradient `rgba(60,80,60,0.3)` — muted green-grey tint; the green court surface and twilight sky carry this naturally
- Pickleball is trending and appeals to a wide age range — composition should feel inclusive and energetic
- Shallow depth of field on the net players, background pair slightly soft
- Casting: mixed — two Asian players at the net, one Western expat and one South Asian player at baseline

---

### hero-05 — Badminton Game

**ID:** `hero-05`
**Section:** Hero Carousel, slide 5
**Dimensions:** 1200 × 1600px
**File path:** `public/images/hero/hero-05.jpg`

**Generation prompt:**
An editorial photo of two players in a fast-paced badminton rally inside a sports hall in Hong Kong. Shot from a low angle looking up, one player is caught mid-leap smashing the shuttlecock downward. The fluorescent ceiling lights above create an industrial top-light. The floor is a warm wooden parquet court. Background: dim sports hall with wire mesh dividers and distant spectators slightly out of focus. Color grade: warm tungsten tones from overhead lights, deep shadows at court edges, slight film grain and halation around the ceiling lights. Mood: kinetic, focused, street-sport grit.

**Style notes:**
- Code gradient `rgba(250,95,71,0.1)` — very faint coral overlay, so the image itself should carry warmth
- Fluorescent-to-tungsten light mix gives interesting color temperature contrast
- Motion blur on the shuttlecock and smashing arm encouraged
- Casting: two Asian players

---

## Stacking Photos Section

Five photos rendered as tilted, scroll-animated polaroid-style cards stacked on the left side of the section. Each card renders at 260 × 340px with a thin semi-transparent white border (`border-white/10`). Rotations: -6deg, +4deg, -3deg, +7deg, -5deg. They animate in sequentially on scroll.

Because these are seen at relatively small rendered sizes and are partially overlapping, the subjects should be immediately readable — bold compositions, strong central subject, minimal background clutter.

Component: `src/components/sections/StackingPhotosSection.tsx`
Rendered card size: 260 × 340px (portrait)
Recommended export: 780 × 1020px (3x), JPEG, quality 85

---

### stack-01 — Sport Action A

**ID:** `stack-01`
**Section:** Stacking Photos, card 1 (rotation: -6deg, frontmost visible) 
**Dimensions:** 780 × 1020px
**File path:** `public/images/stacking/stack-01.jpg`

**Generation prompt:**
A warm, intimate editorial photo in portrait format of a solo basketball player dribbling on a sun-bleached outdoor concrete court in Hong Kong. Shot close — waist to knee, hands and ball in sharp focus, court surface texture prominent. Worn rubber soles and peeling court paint visible. Color grade: warm dusty amber, blown-out highlights on the concrete, deep shadow pockets. Film grain texture. Slightly overexposed in highlights as if shot on film. Mood: nostalgic, authentic, street.

**Style notes:**
- Close crop means no need for background complexity
- Warm amber / burnt sienna palette — matches code gradient `rgba(250,95,71,0.25)`
- Soft vignette around edges reinforces polaroid feel
- Casting: Asian player

---

### stack-02 — Sport Action B

**ID:** `stack-02`
**Section:** Stacking Photos, card 2 (rotation: +4deg)
**Dimensions:** 780 × 1020px
**File path:** `public/images/stacking/stack-02.jpg`

**Generation prompt:**
A moody portrait editorial photo of two runners stretching before a run on a staircase in Hong Kong, early morning. Stone steps, iron railing, green hillside visible behind. One runner leans into a calf stretch against the railing, the other checks their watch. Natural flat morning light, slightly overcast. Color grade: muted warm browns, cool grey-green shadows, minimal saturation. Film grain. Mood: preparatory, quiet, authentic.

**Style notes:**
- Code gradient `rgba(80,60,40,0.4)` — warm brown tones, rich shadow
- Two subjects create implied social dynamic — the app connects people
- No bright logos or branded sportswear visible
- Casting: one Asian runner, one Western expat — friends warming up together

---

### stack-03 — Sport Action C (Pickleball)

**ID:** `stack-03`
**Section:** Stacking Photos, card 3 (rotation: -3deg)
**Dimensions:** 780 × 1020px
**File path:** `public/images/stacking/stack-03.jpg`

**Generation prompt:**
A warm editorial portrait photo of a pickleball paddle resting on a court surface next to a wiffle ball, shot from a low angle close-up. The paddle face is slightly scuffed from play, the perforated ball sits in a small patch of warm floodlight. Behind, out of focus, two pairs of legs and shoes are visible mid-rally on the green court. Color grade: warm amber-gold light on the paddle and ball, muted green court tones, deep shadow at the edges, film grain. Mood: detail-focused, approachable, the new sport everyone's playing.

**Style notes:**
- Code gradient `rgba(60,80,60,0.3)` — muted green tones; the court surface carries this
- Close-up detail shot pairs well with stack-04's racket grip close-up — similar intimacy, different sport
- Soft vignette reinforces the polaroid card feel

---

### stack-04 — Sport Action D (Tennis Detail)

**ID:** `stack-04`
**Section:** Stacking Photos, card 4 (rotation: +7deg)
**Dimensions:** 780 × 1020px
**File path:** `public/images/stacking/stack-04.jpg`

**Generation prompt:**
A warm editorial portrait photo of a tennis player bouncing a ball before serving, shot from behind at waist level. The player's hand tosses the ball upward, racket held loosely in the other hand at their side. Background is a blurred floodlit outdoor court in Hong Kong at night — chain-link fence and distant apartment tower lights create warm bokeh circles. Color grade: warm coral-amber rim light on the player's arm and racket frame, deep blue-black night sky, subtle film grain. Mood: anticipation, ritual, quiet focus before explosive action.

**Style notes:**
- Code gradient `rgba(250,95,71,0.15)` — faint coral; the rim light on the racket frame carries this accent naturally
- Differs from stack-03's close-up object shot by showing a human moment — adds variety across the stack
- Bokeh city lights in background reinforce the Hong Kong night-sport atmosphere

---

### stack-05 — Sport Action E

**ID:** `stack-05`
**Section:** Stacking Photos, card 5 (rotation: -5deg, rearmost)
**Dimensions:** 780 × 1020px
**File path:** `public/images/stacking/stack-05.jpg`

**Generation prompt:** --> Problematic, the image is not quite logical
A cinematic portrait editorial photo of a football (soccer) game in progress on a caged rooftop court in Hong Kong — the kind of enclosed rooftop pitch common in Kowloon. Shot from ground level inside the cage, looking up slightly. Players in motion, city tower blocks visible through the steel mesh fence above and around. Dramatic late afternoon sidelight cutting through the mesh, casting grid-shadow patterns on the court. Color grade: warm amber sidelight, deep cool shadows, contrast-heavy, film grain. Mood: urban, raw, energetic.

**Style notes:**
- Code gradient `rgba(90,70,50,0.3)` — warm brown tones
- The cage/mesh fence is a distinctly Hong Kong visual element — lean into it
- Motion blur on players acceptable
- Casting: mixed group — Asian and Southeast Asian players

---

## Story Grid Section

A 2x2 grid of cinematic tiles, each `aspect-[4/3]`, with text overlaid at the bottom. Each tile has its own gradient and a film grain SVG overlay. The tiles represent four core app features: discovering venues on the map, joining sessions, club pages, and community.

Images replace the CSS gradient backgrounds. They should be bold enough to read through a dark gradient overlay (code darkens to `rgba(10,10,10,0.95)` at bottom) and still convey the theme even with the overlaid text.

Component: `src/components/sections/StoryGridSection.tsx`
Rendered aspect ratio: 4:3 (landscape)
Recommended export: 1600 × 1200px, JPEG, quality 90

---

### story-map — Map / Discovery Tile

**ID:** `story-map`
**Section:** Story Grid, tile 1 (key: `map`)
**Dimensions:** 1600 × 1200px
**File path:** `public/images/story/story-map.jpg`

**Generation prompt:**
A cinematic aerial or bird's-eye photograph of a section of Hong Kong — sports courts and facilities visible from above. An overhead shot of a cluster of multi-use sports courts (basketball, tennis, badminton) nestled between residential towers in Kowloon, shot at dusk with courts still lit. The geometry of the courts, their colored surfaces, and the surrounding urban density create an abstract map-like composition. Color grade: deep blue dusk sky, amber court lights, neon signage in the background creating color pops, film grain. Mood: discovery, urban density, possibility.

**Style notes:**
- Code gradient hint `rgba(250,95,71,0.15)` — faint coral, image should be cool-to-warm with amber court lights
- The "map" metaphor: overhead view, geometric courts, the city as a grid of opportunity
- No faces needed — abstract urban sports landscape

---

### story-session — Session / Activity Tile

**ID:** `story-session`
**Section:** Story Grid, tile 2 (key: `session`)
**Dimensions:** 1600 × 1200px
**File path:** `public/images/story/story-session.jpg`

**Generation prompt:**
A cinematic landscape-format editorial photo of a group of six people arriving at an outdoor sports court in Hong Kong for a pickup game — some carrying rackets, one with a basketball under their arm, all mid-conversation and in motion. Late afternoon golden light. The court surface is prominent in the lower third, city in soft focus behind. Color grade: warm amber golden hour light, rich brown-gold skin tones, deep shadow pockets, film grain. Mood: arrival, anticipation, social energy.

**Style notes:**
- Code gradient `rgba(80,60,40,0.3)` — warm earthy brown tones
- This tile represents "joining a session" — the moment of arrival and connection
- Dynamic but not chaotic — editorial controlled energy
- Casting: mixed group of six — four Asian, one Western expat, one South Asian

---

### story-club — Club / Community Tile

**ID:** `story-club`
**Section:** Story Grid, tile 3 (key: `club`)
**Dimensions:** 1600 × 1200px
**File path:** `public/images/story/story-club.jpg`

**Generation prompt:**
A warm editorial landscape photo of a small sports club team post-match huddle in Hong Kong — a running club or badminton club, around eight people of mixed ages gathered in a loose circle, some with arms around each other's shoulders, faces animated in conversation. Shot in a park or near a sports facility, dappled late-afternoon light filtering through trees or an awning. Color grade: warm dappled green-gold light, soft shadows, earthy tones, film grain. Mood: belonging, community, post-effort warmth.

**Style notes:**
- Code gradient `rgba(60,80,60,0.25)` — muted green, like sunlight through leaves
- Faces can be visible here — this is about human connection
- Candid, not posed — caught mid-laugh or conversation
- Casting: mostly Asian group with one or two Western expat members — a real HK sports club mix

---

### story-community — Community / Together Tile

**ID:** `story-community`
**Section:** Story Grid, tile 4 (key: `community`)
**Dimensions:** 1600 × 1200px
**File path:** `public/images/story/story-community.jpg`

**Generation prompt:**
A wide cinematic editorial photo of a large informal community sports event in a Hong Kong public park — dozens of people of all ages: some playing badminton, others doing tai chi, children on bikes, a group stretching. Shot from a slight elevation to capture the breadth of the scene, early morning with the park bathed in soft diffused light. In the background: the distinctive Hong Kong skyline or green hills. Color grade: soft warm morning light, gentle haze, muted earth tones and greens, film grain. Mood: vibrant community life, inclusive, the city at play.

**Style notes:**
- Code gradient `rgba(90,70,50,0.2)` — warm dusty brown
- The largest, most inclusive scene of all four tiles — the culmination
- Should feel like a Hong Kong version of a Magnum Photos documentary image
- Casting: diverse crowd — majority Asian, with visible South Asian, Southeast Asian, and Western faces mixed throughout naturally

---

## Feature Highlight Section

A single centered phone mockup (aspect ratio 9:19.5, max-width 280px rendered) showcasing one hero app screen. The mockup frame itself is provided by the `PhoneMockup` component (dark bezel, 40px border-radius). The image fills the screen area inside the frame.

The section's heading is "Find your game" (or similar i18n value) — so the screenshot should show the core map/session discovery experience.

Component: `src/components/sections/FeatureHighlightSection.tsx`
Rendered screen area: ~268px wide × ~582px tall (inside 280px mockup with 6px border)
Recommended export: 1080 × 2340px (portrait, approximately), PNG or JPEG quality 95

---

### feature-screen-01 — App Map View

**ID:** `feature-screen-01`
**Section:** Feature Highlight, center phone mockup
**Dimensions:** 1080 × 2340px
**File path:** `public/images/feature/feature-screen-01.png`

**Generation prompt:**
A high-fidelity app screenshot mockup for a dark-themed mobile sports app. The screen shows a full-bleed map view of Hong Kong (dark map tiles, muted street labels in white/grey). Overlaid on the map are several sport session cards as bottom sheet pins — small rounded pill labels showing sport type, time, and participant count in the FitSoc brand color coral/red (#FA5F47). At the bottom of the screen, a partial bottom sheet is visible showing a list of upcoming sessions nearby: "Basketball — Mong Kok — 3pm — 4/8 joined" style entries with sport icons. Top of screen: minimal dark header with location name and a search bar. The overall UI is dark (near-black background `#0A0A0A`), coral accent, white text. Clean, premium, editorial.

**Style notes:**
- This is a UI screenshot, not a photograph — vector/design tool output preferred over generative image
- If generating: ultra-realistic phone screen render, no UI chrome beyond the app itself
- Brand color: `#FA5F47` (coral red) for interactive elements and accent
- Dark mode: background `#0A0A0A`, card surfaces `#141414`, text white

---

## Download CTA Section

Three phone mockups in a fanned arrangement: left phone tilted -6deg at 60% opacity (max-width ~200px rendered), center phone upright and prominent (max-width 280px rendered), right phone tilted +6deg at 60% opacity (max-width ~200px rendered). Each shows a different app screen.

Component: `src/components/sections/DownloadCTASection.tsx`
Rendered sizes: center 280px wide, flanking 200px wide
Recommended export: all at 1080 × 2340px, PNG or JPEG quality 95

---

### cta-screen-left — App Screen Left

**ID:** `cta-screen-left`
**Section:** Download CTA, left flanking phone (hidden on mobile)
**Dimensions:** 1080 × 2340px
**File path:** `public/images/cta/cta-screen-left.png`

**Generation prompt:**
A high-fidelity dark-mode app screenshot for a sports social app. This screen shows a Club detail page: a club banner image at the top (a moody sports action photo), below it the club name in large white bold text, member count and sport type in coral (#FA5F47) tag chips. A horizontal scroll of member avatar circles below. Then a feed of recent activity posts — text posts with sport emoji, like/comment counts. Dark background `#0A0A0A`, card surfaces `#141414`, white text, coral accents. Clean, premium UI.

**Style notes:**
- Slightly lower visual priority than the center screen — will be seen at 60% opacity
- Club page conveys the social/community aspect of the app
- Consistent dark-mode design language with other screens

---

### cta-screen-center — App Screen Center

**ID:** `cta-screen-center`
**Section:** Download CTA, center primary phone
**Dimensions:** 1080 × 2340px
**File path:** `public/images/cta/cta-screen-center.png`

**Generation prompt:**
A high-fidelity dark-mode app screenshot for a sports social app. This screen shows a Session detail page — the hero state where a user is about to join a session. Large sport venue photo at top (a Hong Kong basketball court, cinematic/dark). Below: session title "Pickup Basketball @ Mong Kok", time "Today 3:00 PM", venue "Playground Court, Mong Kok". A coral (#FA5F47) "Join Session" button prominently centered. Below: participant avatars with names, skill level chip, session organizer profile. Dark background `#0A0A0A`, card surfaces `#141414`, white text, coral CTA. Clean, premium, inviting.

**Style notes:**
- This is the hero/primary phone — should be the most polished and complete screen
- The coral "Join Session" CTA should be visually dominant
- This screen is the single most important image on the page — invest most detail here

---

### cta-screen-right — App Screen Right

**ID:** `cta-screen-right`
**Section:** Download CTA, right flanking phone (hidden on mobile)
**Dimensions:** 1080 × 2340px
**File path:** `public/images/cta/cta-screen-right.png`

**Generation prompt:**
A high-fidelity dark-mode app screenshot for a sports social app. This screen shows the main Activity Feed / Home screen: a dark header "What's happening today" with a location chip "Hong Kong". Below: a vertical scroll of session cards — each card has a sport icon, session name, venue, time, and a small participant count pill. Some cards have a subtle coral left-border accent indicating "near you". A sticky bottom tab bar: Home, Map, Sessions, Clubs, Chat. All icons in white/coral. Dark background `#0A0A0A`, card surfaces `#141414`, white text, coral accents.

**Style notes:**
- Feed view gives a sense of volume and activity — make it feel like a busy, active community
- Match the -6deg tilt implied by `rotate-6` class in the component
- Consistent dark-mode design language with other screens
