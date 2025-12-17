export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  actionShot: string;
}

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Maya Chen",
    role: "Founding Principal",
    bio: "Maya founded Unaing in 2015 after a decade leading projects at renowned firms in Tokyo and New York. Her work is driven by a belief that architecture should amplify the unique qualities of each place and program. She holds a Master of Architecture from Harvard GSD.",
    image: "/images/team/maya-portrait.jpg",
    actionShot: "/images/team/maya-action.jpg",
  },
  {
    id: "2",
    name: "David Okonkwo",
    role: "Design Director",
    bio: "David brings 15 years of experience in sustainable design and material innovation. Before joining Unaing, he led the research division at a leading environmental consultancy. He is passionate about creating buildings that give more than they take.",
    image: "/images/team/david-portrait.jpg",
    actionShot: "/images/team/david-action.jpg",
  },
  {
    id: "3",
    name: "Sofia Rodriguez",
    role: "Project Architect",
    bio: "Sofia oversees projects from concept through construction, ensuring that design intent is maintained at every scale. Her background in furniture design informs her attention to detail and craft. She believes the smallest decisions have the biggest impact.",
    image: "/images/team/sofia-portrait.jpg",
    actionShot: "/images/team/sofia-action.jpg",
  },
  {
    id: "4",
    name: "James Park",
    role: "Technical Director",
    bio: "James bridges the gap between design ambition and buildability. With expertise in parametric design and digital fabrication, he helps the studio push material and structural boundaries while keeping projects on budget and schedule.",
    image: "/images/team/james-portrait.jpg",
    actionShot: "/images/team/james-action.jpg",
  },
];

export const news = [
  "AIA Oregon Design Award 2024 for Cedar Ridge Residence",
  "Featured in Dwell Magazine: The Future of Sustainable Homes",
  "Volt Workspace wins Interior Design Best of Year",
  "Maya Chen speaking at Design Miami 2024",
  "New studio space opening in Portland",
  "Greenhouse Lofts featured on ArchDaily",
];
