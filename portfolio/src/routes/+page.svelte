<script>
	import {
		Navbar,
		Hero,
		About,
		Competenze,
		Progetti,
		Certificazioni,
		Contatti
	} from '$lib/components';
	import '$lib/css/global.css';
	import '$lib/ext/ova/style.css';
	import { onMount } from 'svelte';
	import { initOVA } from '$lib/ext/ova/ova.min.js';

	onMount(() => {
		initOVA();
	});
</script>

<Navbar />

<Hero />

<About />

<Competenze />

<Progetti />

<Certificazioni />

<Contatti />
