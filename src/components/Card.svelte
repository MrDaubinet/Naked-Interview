<script>
  export let url 
  export let confidence  
  export let name
</script>

<div class="inline-block py-1 mx-2 w-50">
  <p class="pb-1 font-semibold text-center">{confidence.toFixed(2)}</p>
  <img class="object-cover w-20 h-20 rounded-md" src={url} alt={name}>
</div>