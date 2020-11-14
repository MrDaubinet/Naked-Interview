<!-- preload data -->
<!-- <script context="module">
	export async function preload(page, session) {
		const { slug } = page.params;

		const res = await this.fetch(`blog/${slug}.json`);
		const article = await res.json();

		return { article };
	}
</script> -->

<script>
  import Card from "../components/Card.svelte"
  import ButtonPrimary from "../components/ButtonPrimary.svelte"
  import { onMount } from 'svelte';
  import { dataRef, storage_test } from "../firebase.js";

  let markers
  let count
  let grouped_images = []
  let loaded = false

  onMount(async () => {
    markers = await getMarkers()
    markers = await generateUrls(markers)
    count = markers.length
    grouped_images = groupMarkers(markers)
    console.log(grouped_images)
  })

  async function getMarkers() {
    // await dataRef
    const events = await dataRef
    return events.get().then((querySnapshot) => {
        const tempDoc = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        })
        return tempDoc 
      })
  }

  async function generateUrls(markers) {
    let new_markers = []
    for(let marker of markers) {
      let image_ref = await storage_test.refFromURL(marker.url);
      let url = await image_ref.getDownloadURL()
      marker.url = url+".jpg"
      new_markers.push(marker)
    }
    loaded = true
    return new_markers
  }

  function groupMarkers(markers) {
    let data = []
    console.log(markers.length)
    markers.forEach(marker => {
      // check if the data array is empty
      if(data.length == 0 | (data.filter(category => category.name == marker.label).length == 0)) {
        data.push({
          name: marker.label,
          images: [
            {
              url: marker.url,
              confidence: marker.score
            }
          ]
        })
        console.log("inititalizing array")
      } else {
        // adding to existing category
        data.forEach(category => {
          if(marker.label == category.name) {
            category.images.push({
              url: marker.url,
              confidence: marker.score
            })
          }
        })
      }
    });
    console.log("grouped")
    console.log(data)
    return data
  }
</script>

<div class="h-screen">
  <div class="px-10 pt-10 ">
    <!-- title -->
    <div class="flex items-center justify-between">
      <p class="text-4xl font-bold text-gray-700 text">Food</p>
      <div class="flex items-center justify-center w-10 h-10 font-medium text-white bg-gray-700 rounded-full">
        {count || 0}
      </div>
    </div>
    {#if loaded}
      <!-- array of categories -->
      {#each grouped_images as item}
        <!-- category name -->
        <p class="mt-4 mb-2 font-semibold text-md">{item.name}</p>
        <div class="w-full pl-4 overflow-x-scroll whitespace-no-wrap ">
          <!-- array of classified images -->
          {#each item.images as image}
          <!-- {image.url} -->
            <Card 
              name={item.name}
              confidence={image.confidence}
              url={image.url}
            />
          {/each}
        </div>
      {/each}
    {/if}

    <div class="px-5 py-10 mt-10 text-center bg-white rounded-2xl">
      <p>Hit "Snap" below to categorise more food items!</p>
    </div>
  </div>

  <div class="flex justify-center w-full my-10 mb-10" style="font-family: 'Roboto'">
    <a href="/photo">
      <ButtonPrimary >
        Snap
      </ButtonPrimary>
    </a> 
  </div>
</div>