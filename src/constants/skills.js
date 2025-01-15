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
    { name: 'Next.js', src: RiLogosNextjsFill, level: 80 },
    { name: 'Svelte', src: RiLogosSvelteFill, level: 60 },
    { name: 'Angular', src: RiLogosAngularjsFill, level: 40 },
    { name: 'Vue', src: RiLogosVuejsFill, level: 30 },
    { name: 'React', src: RiLogosReactjsFill, level: 80 },
    { name: 'JavaScript', src: SiJavascript, level: 80 },
    { name: 'TypeScript', src: SiTypescript, level: 80 },
    { name: 'Vite', src: SiVite, level: 60 },
    { name: 'Java', src: RiLogosJavaFill, level: 50 },
    { name: 'Node.js', src: RiLogosNodejsFill, level: 85 },
    { name: 'Tailwind CSS', src: RiLogosTailwindCssFill, level: 90 },
    { name: 'AWS', src: FaBrandsAws, level: 50 },
    { name: 'OpenShift', src: SiRedhatopenshift, level: 60 },
    { name: 'MongoDB', src: SiMongodb, level: 60 },
    { name: 'Azure', src: VscAzureDevops, level: 70 }
];