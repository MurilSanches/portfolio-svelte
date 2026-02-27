import * as m from '$lib/paraglide/messages.js';
import { base } from '$app/paths';

export let projects = [
    {
        name: 'Treinando Next.js',
        description:
            m.portfolio_next_desc,
        repo: 'https://github.com/MurilSanches/treinando-nextjs',
        images: [
            `${base}/portfolio/next-page-1.png`,
            `${base}/portfolio/next-page-2.png`,
            `${base}/portfolio/next-page-3.png`
        ],
        tags: ['Next.js', 'SSR', 'API']
    },
    {
        name: 'Poizoni',
        description:
            m.portfolio_poizoni_desc,
        repo: 'https://github.com/ivanknobel/poizoni',
        images: [
            `${base}/portfolio/poizoni-page-2.png`,
            `${base}/portfolio/poizoni-page-3.png`,
        ],
        tags: ['Flutter', 'Mobile', 'Geolocalização']
    }
];