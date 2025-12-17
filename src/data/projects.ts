export type ProjectCategory = "commercial" | "residential" | "interiors" | "renovation";

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  year: string;
  client: string;
  area: string;
  category: ProjectCategory;
  categories: ProjectCategory[];
  description: string;
  longDescription: string;
  featuredImage: string;
  heroVideo?: string;
  gallery: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  beforeAfter?: {
    before: string;
    after: string;
  };
  featured: boolean;
  awards?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "cedar-ridge-residence",
    title: "Cedar Ridge Residence",
    subtitle: "A home that breathes with the landscape",
    location: "Portland, Oregon",
    year: "2024",
    client: "Private Client",
    area: "4,200 sq ft",
    category: "residential",
    categories: ["residential"],
    description: "A modern residence nestled into the Pacific Northwest hillside, designed to blur the boundaries between interior and exterior living.",
    longDescription: "The Cedar Ridge Residence represents our philosophy of designing with context rather than against it. Perched on a forested hillside overlooking the Willamette Valley, this home was conceived as an extension of its natural surroundings. Floor-to-ceiling glazing frames views of century-old Douglas firs, while the material palette of weathered cedar, concrete, and blackened steel echoes the rugged beauty of the Oregon landscape. The home's split-level design follows the natural contours of the site, minimizing earthwork and preserving the root systems of existing trees.",
    featuredImage: "/images/projects/cedar-ridge-hero.jpg",
    heroVideo: "/videos/cedar-ridge-loop.mp4",
    gallery: [
      { src: "/images/projects/cedar-ridge-1.jpg", alt: "Living room with panoramic views", caption: "The main living space opens to a 180-degree view of the valley" },
      { src: "/images/projects/cedar-ridge-2.jpg", alt: "Kitchen interior", caption: "Custom walnut cabinetry meets raw concrete countertops" },
      { src: "/images/projects/cedar-ridge-3.jpg", alt: "Exterior at dusk", caption: "The home's horizontal lines echo the horizon" },
      { src: "/images/projects/cedar-ridge-4.jpg", alt: "Master bedroom", caption: "Waking up to the forest canopy" },
    ],
    featured: true,
    awards: ["AIA Oregon Design Award 2024", "Dwell Design Award Finalist"],
  },
  {
    id: "2",
    slug: "volt-workspace",
    title: "Volt Workspace",
    subtitle: "Where energy meets collaboration",
    location: "Seattle, Washington",
    year: "2024",
    client: "Volt Energy Technologies",
    area: "32,000 sq ft",
    category: "commercial",
    categories: ["commercial", "interiors"],
    description: "A dynamic headquarters for a clean energy startup, designed to inspire innovation and foster spontaneous collaboration.",
    longDescription: "Volt Energy Technologies approached us with a challenge: create a workspace that embodies their mission of sustainable energy while attracting top talent in a competitive market. Our response was a bold interior transformation of a 1950s industrial building. We exposed the original bow-truss ceiling structure, creating dramatic volumes that house flexible work neighborhoods. A central 'energy spine' runs through the space, featuring living walls, informal meeting pods, and a cafe that spills onto a new courtyard. The material strategy prioritizes low-carbon alternatives: hempcrete acoustic panels, recycled aluminum fixtures, and locally salvaged timber.",
    featuredImage: "/images/projects/volt-hero.jpg",
    gallery: [
      { src: "/images/projects/volt-1.jpg", alt: "Open workspace", caption: "Flexible work neighborhoods beneath the original bow-truss ceiling" },
      { src: "/images/projects/volt-2.jpg", alt: "Central atrium", caption: "The living wall creates a microclimate in the heart of the building" },
      { src: "/images/projects/volt-3.jpg", alt: "Meeting pods", caption: "Informal meeting spaces encourage spontaneous collaboration" },
      { src: "/images/projects/volt-4.jpg", alt: "Courtyard cafe", caption: "The cafe extends into a new landscaped courtyard" },
    ],
    featured: true,
    awards: ["Interior Design Best of Year Award"],
  },
  {
    id: "3",
    slug: "the-greenhouse-lofts",
    title: "The Greenhouse Lofts",
    subtitle: "Historic preservation meets modern living",
    location: "San Francisco, California",
    year: "2023",
    client: "Urban Revival Partners",
    area: "48,000 sq ft",
    category: "renovation",
    categories: ["residential", "renovation"],
    description: "The transformation of a decommissioned Victorian greenhouse into 24 unique residential lofts.",
    longDescription: "The Greenhouse Lofts project began with a simple question: how do you preserve a structure defined by light and transparency while creating private, comfortable homes? Our solution maintains the iconic curved glass roof as a shared amenity—a spectacular indoor garden that serves as the building's heart. Individual units are inserted as 'pods' within the steel framework, their walls stopping short of the original glazing to maintain visual connection to the communal space. Each loft features a private winter garden, a transition zone between the intimate domestic realm and the shared greenhouse atmosphere.",
    featuredImage: "/images/projects/greenhouse-hero.jpg",
    gallery: [
      { src: "/images/projects/greenhouse-1.jpg", alt: "Central greenhouse atrium", caption: "The original greenhouse structure becomes a shared indoor garden" },
      { src: "/images/projects/greenhouse-2.jpg", alt: "Loft interior", caption: "Living pods maintain visual connection to the greenhouse" },
      { src: "/images/projects/greenhouse-3.jpg", alt: "Private winter garden", caption: "Each unit features its own winter garden" },
      { src: "/images/projects/greenhouse-4.jpg", alt: "Historic detail", caption: "Restored Victorian ironwork meets contemporary insertions" },
    ],
    beforeAfter: {
      before: "/images/projects/greenhouse-before.jpg",
      after: "/images/projects/greenhouse-after.jpg",
    },
    featured: true,
    awards: ["Preservation Alliance Award", "SF Chronicle Home of the Year"],
  },
  {
    id: "4",
    slug: "koya-restaurant",
    title: "Koya Restaurant",
    subtitle: "An intimate theater for food",
    location: "Los Angeles, California",
    year: "2023",
    client: "Chef Kenji Yamamoto",
    area: "2,800 sq ft",
    category: "interiors",
    categories: ["commercial", "interiors"],
    description: "A 28-seat omakase restaurant where the architecture serves the culinary narrative.",
    longDescription: "Chef Kenji Yamamoto's vision for Koya was precise: a space where every element supports the dining experience without competing for attention. We responded with a study in restraint and material honesty. A single hinoki cypress counter, carved from a 200-year-old log, anchors the room. Behind it, a rhythm of vertical cedar slats conceals service areas while creating an ever-changing play of light and shadow. The ceiling—a suspended lattice of woven bamboo—softens sound and creates an intimate canopy overhead. Every detail, from the custom ceramic light fixtures to the hand-forged door pulls, was designed in collaboration with Japanese craftspeople.",
    featuredImage: "/images/projects/koya-hero.jpg",
    gallery: [
      { src: "/images/projects/koya-1.jpg", alt: "Main counter", caption: "The hinoki cypress counter is the room's focal point" },
      { src: "/images/projects/koya-2.jpg", alt: "Cedar screen detail", caption: "Vertical cedar slats create privacy without opacity" },
      { src: "/images/projects/koya-3.jpg", alt: "Bamboo ceiling", caption: "Hand-woven bamboo lattice softens the acoustic environment" },
      { src: "/images/projects/koya-4.jpg", alt: "Entry sequence", caption: "A compressed entry heightens anticipation" },
    ],
    featured: false,
  },
  {
    id: "5",
    slug: "twin-peaks-house",
    title: "Twin Peaks House",
    subtitle: "Two volumes, one family",
    location: "San Francisco, California",
    year: "2023",
    client: "Private Client",
    area: "3,600 sq ft",
    category: "residential",
    categories: ["residential"],
    description: "A multigenerational home designed as two interconnected pavilions, offering independence and togetherness.",
    longDescription: "The brief was delicate: design a home for a family of five that also accommodates aging parents who value their independence. Our response splits the program into two distinct volumes—a main family house and a smaller guest pavilion—connected by a glazed bridge that frames views of the city below. Each structure has its own entrance, kitchen, and living spaces, but they share a central courtyard that serves as the heart of family life. The architecture mediates between privacy and connection, allowing different generations to live their lives while remaining fundamentally together.",
    featuredImage: "/images/projects/twin-peaks-hero.jpg",
    gallery: [
      { src: "/images/projects/twin-peaks-1.jpg", alt: "Aerial view", caption: "Two volumes connected by a glazed bridge" },
      { src: "/images/projects/twin-peaks-2.jpg", alt: "Central courtyard", caption: "The shared courtyard is the heart of family life" },
      { src: "/images/projects/twin-peaks-3.jpg", alt: "Guest pavilion interior", caption: "The guest pavilion offers complete independence" },
      { src: "/images/projects/twin-peaks-4.jpg", alt: "View from bridge", caption: "The connecting bridge frames city views" },
    ],
    featured: false,
  },
  {
    id: "6",
    slug: "artisan-collective-studios",
    title: "Artisan Collective Studios",
    subtitle: "A village for makers",
    location: "Oakland, California",
    year: "2022",
    client: "Oakland Arts Foundation",
    area: "18,000 sq ft",
    category: "commercial",
    categories: ["commercial", "renovation"],
    description: "The conversion of a former auto body shop into a thriving community of artist studios and shared workshops.",
    longDescription: "The Artisan Collective began with a conversation about what artists actually need: affordable space, natural light, and community. Our design preserves the industrial character of the original auto body shop while inserting a 'village' of individual studios around a central shared workshop. The saw-tooth roof was repaired and expanded, flooding the space with north light. New mezzanines create additional studio space without sacrificing the dramatic volumes. A materials library, shared wood and metal shops, and a community gallery support the creative ecosystem.",
    featuredImage: "/images/projects/artisan-hero.jpg",
    gallery: [
      { src: "/images/projects/artisan-1.jpg", alt: "Central workshop", caption: "The shared workshop occupies the heart of the building" },
      { src: "/images/projects/artisan-2.jpg", alt: "Studio mezzanines", caption: "New mezzanines create intimate studio spaces" },
      { src: "/images/projects/artisan-3.jpg", alt: "Community gallery", caption: "A rotating gallery showcases resident artists" },
      { src: "/images/projects/artisan-4.jpg", alt: "Saw-tooth roof", caption: "The restored saw-tooth roof provides ideal north light" },
    ],
    beforeAfter: {
      before: "/images/projects/artisan-before.jpg",
      after: "/images/projects/artisan-after.jpg",
    },
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((project) => project.categories.includes(category));
}

export function getAllCategories(): ProjectCategory[] {
  return ["commercial", "residential", "interiors", "renovation"];
}
