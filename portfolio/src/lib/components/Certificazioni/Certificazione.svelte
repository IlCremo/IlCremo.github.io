<script>
	export let certificazione;
</script>

<div
	class="d-flex bg-col-primary rounded-1 mx-2 my-2 gap-4 px-4 pt-3 pb-2 box-shadow box-certificazione"
>
	<div class="d-flex"><i class="bi {certificazione?.icona ?? ''} display-4"></i></div>
	<div>
		<p class="fw-bold mb-0 f">{certificazione.nome}</p>
		<p>Anno di conseguimento: {certificazione.anno}</p>
	</div>
</div>

<style>
	.box-certificazione:hover {
		cursor: default;
		filter: brightness(90%);
	}
</style>
