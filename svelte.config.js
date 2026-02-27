import adapterVercel from '@sveltejs/adapter-vercel';
import adapterNode from '@sveltejs/adapter-node';

const adapter = process.env.DEPLOY_TARGET === 'node'
	? adapterNode()
	: adapterVercel();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter,
		paths: { base: '/v1' },
	},
};

export default config;
