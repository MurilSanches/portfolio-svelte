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
    { name: 'Next.js', src: RiLogosNextjsFill, color: "#000" },
    { name: 'Svelte', src: RiLogosSvelteFill, color: "#FF3E00" },
    { name: 'Angular', src: RiLogosAngularjsFill, color: "#DD0031" },
    { name: 'Vue', src: RiLogosVuejsFill, color: "#41B883" },
    { name: 'React', src: RiLogosReactjsFill, color: "#61DAFB" },
    { name: 'JavaScript', src: SiJavascript, color: "#F7DF1E" },
    { name: 'TypeScript', src: SiTypescript, color: "#2D79C7" },
    { name: 'Vite', src: SiVite, color: "#BC35FE" },
    { name: 'Java', src: RiLogosJavaFill, color: "#EC2025" },
    { name: 'Node.js', src: RiLogosNodejsFill, color: "#76AE64" },
    { name: 'Tailwind CSS', src: RiLogosTailwindCssFill, color: "#38BDF8" },
    { name: 'AWS', src: FaBrandsAws, color: "#FF9900" },
    { name: 'OpenShift', src: SiRedhatopenshift, color: "#BA141A" },
    { name: 'MongoDB', src: SiMongodb, color: "#68B33D" },
    { name: 'Azure', src: VscAzureDevops, color: "#008ADA" }
];