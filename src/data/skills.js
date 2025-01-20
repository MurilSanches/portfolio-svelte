import {
    RiLogosAngularjsFill,
    RiLogosNextjsFill,
    RiLogosReactjsFill,
    RiLogosSvelteFill,
    RiLogosVuejsFill,
    RiLogosJavaFill,
    RiLogosNodejsFill,
    RiLogosTailwindCssFill
} from 'svelte-icons-pack/ri';
import {
    SiJavascript,
    SiTypescript,
    SiVite,
    SiRedhatopenshift,
    SiMongodb
} from 'svelte-icons-pack/si';
import { FaBrandsAws } from 'svelte-icons-pack/fa';
import { VscAzureDevops } from 'svelte-icons-pack/vsc';

export const skills = [
    { name: 'Next.js', src: RiLogosNextjsFill, color: "#000", level: 80 },
    { name: 'Svelte', src: RiLogosSvelteFill, color: "#FF3E00", level: 60 },
    { name: 'Angular', src: RiLogosAngularjsFill, color: "#DD0031", level: 40 },
    { name: 'Vue', src: RiLogosVuejsFill, color: "#41B883", level: 30 },
    { name: 'React', src: RiLogosReactjsFill, color: "#61DAFB", level: 80 },
    { name: 'JavaScript', src: SiJavascript, color: "#F7DF1E", level: 80 },
    { name: 'TypeScript', src: SiTypescript, color: "#2D79C7", level: 80 },
    { name: 'Vite', src: SiVite, color: "#BC35FE", level: 60 },
    { name: 'Java', src: RiLogosJavaFill, color: "#EC2025", level: 50 },
    { name: 'Node.js', src: RiLogosNodejsFill, color: "#76AE64", level: 85 },
    { name: 'Tailwind CSS', src: RiLogosTailwindCssFill, color: "#38BDF8", level: 90 },
    { name: 'AWS', src: FaBrandsAws, color: "#FF9900", level: 50 },
    { name: 'OpenShift', src: SiRedhatopenshift, color: "#BA141A", level: 60 },
    { name: 'MongoDB', src: SiMongodb, color: "#68B33D", level: 60 },
    { name: 'Azure', src: VscAzureDevops, color: "#008ADA", level: 70 }
];