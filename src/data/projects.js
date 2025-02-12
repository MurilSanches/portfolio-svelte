import * as m from '$lib/paraglide/messages.js';
	
export let projects = [
    {
        name: 'Treinando Next.js',
        description:
            m.portfolio_next_desc,
        repo: 'https://github.com/MurilSanches/treinando-nextjs',
        images: [
            '/portfolio/next-page-1.png',
            '/portfolio/next-page-2.png',
            '/portfolio/next-page-3.png'
        ],
        tags: ['Next.js', 'SSR', 'API']
    },
    {
        name: 'Poizoni',
        description:
            m.portfolio_poizoni_desc,
        repo: 'https://github.com/ivanknobel/poizoni',
        images: [
            '/portfolio/poizoni-page-2.png',
            '/portfolio/poizoni-page-3.png',           
        ],
        tags: ['Flutter', 'Mobile', 'Geolocalização']
    }
];