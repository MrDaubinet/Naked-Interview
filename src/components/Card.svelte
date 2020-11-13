<script>
  export let url 
  export let confidence  
  export let name
</script>

<div class="mx-2 py-1 w-50 inline-block">
  <p class="pb-1 text-center font-semibold">{confidence}</p>
  <img class="h-20 w-20 rounded-md object-cover" src={url} alt={name}>
</div>