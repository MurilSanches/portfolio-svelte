import * as m from '$lib/paraglide/messages.js';	

export let experience = [
    {
        position: 'Analista de Software Pleno',
        company: 'CI&T',
        start: 'Dezembro de 2021',
        end: null, // Se ainda estiver trabalhando, deixe como null
        description:
            m.experience_1_desc,
        keyPoints: [
            m.experience_1_key_1,
            m.experience_1_key_2,
            m.experience_1_key_3
        ],
        achievements: [
            m.experience_1_achievements_1,
            m.experience_1_achievements_2
        ]
    },
    {
        position: 'Estagiário',
        company: 'Dextra',
        start: 'Janeiro de 2021',
        end: 'Dezembro de 2021',
        description:
            m.experience_2_desc
    }
];
