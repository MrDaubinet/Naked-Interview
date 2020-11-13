<!-- 
  1. preload check for images
    1.1 if images, go to food page
    1.2 if none, display this stuff

-->

<script>
  import ButtonPrimary from "../components/ButtonPrimary.svelte"
</script>
<div class="h-screen bg-fixed " style="background-image: url(/images/food.jpg)">
  <!-- The Title -->
  <div class="h-full flex items-center ml-5">
    <div class="text-black font-bold text-5xl w-50 leading-tight">
      <p>The</p>
      <p>Food</p>
      <p>Critic</p>
    </div>
  </div>
  <!-- The bottom button -->
  <div class="absolute bottom-0 w-full flex justify-center mb-5" style="font-family: 'Roboto'">
    <a href="/food">
      <ButtonPrimary >
        Take my first snap
      </ButtonPrimary>
    </a>
  </div>
</div>





