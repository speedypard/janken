import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		money: 10,
		bet: 10,
		round: 0
	}
});

export default app;