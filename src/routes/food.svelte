<!-- preload data -->
<script>
  import Card from "../components/Card.svelte"
  import ButtonPrimary from "../components/ButtonPrimary.svelte"

  let data = [
    {
      name: "Hamburgers",
      images: [
        {
          url: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg",
          confidence: "98%"
        },  {
          url: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg",
          confidence: "85%"
        }, {
          url: "https://www.simplyhappyfoodie.com/wp-content/uploads/2018/04/instant-pot-hamburgers-3.jpg",
          confidence: "75%"
        }, {
          url: "https://www.simplyhappyfoodie.com/wp-content/uploads/2018/04/instant-pot-hamburgers-3.jpg",
          confidence: "75%"
        }, {
          url: "https://www.simplyhappyfoodie.com/wp-content/uploads/2018/04/instant-pot-hamburgers-3.jpg",
          confidence: "75%"
        }, {
          url: "https://www.simplyhappyfoodie.com/wp-content/uploads/2018/04/instant-pot-hamburgers-3.jpg",
          confidence: "75%"
        }
      ]
    }, {
      name: "Milkshakes",
      images: [
        {
          url: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco/k%2FPhoto%2FRecipes%2F2020-07-how-to-make-a-milkshake-at-home%2F2020-06-08_AT-K19388",
          confidence: "83%"
        }, {
          url: "https://www.thereciperebel.com/wp-content/uploads/2020/06/how-to-make-a-milkshake-www.thereciperebel.com-600-11-of-44.jpg",
          confidence: "70%"
        }
      ]
    }
  ]

  function countFood(){
    return data.reduce((item_total, item) => {
      return item_total + item.images.length
    }, 0)
  }
</script>

<div class="h-screen bg-gray-100 overflow-hidden">
  <div class="px-10 pt-10 ">
    <!-- title -->
    <div class="flex justify-between items-center">
      <p class="text font-bold text-4xl text-gray-700">Food</p>
      <div class="w-10 h-10 bg-gray-700 rounded-full flex justify-center items-center text-white font-medium">
        {countFood()}
      </div>
    </div>
    <!-- array of categories -->
    {#each data as item}
      <!-- category name -->
      <p class="text-md font-semibold mt-4 mb-2">{item.name}</p>
      <div class="overflow-x-scroll whitespace-no-wrap w-full pl-4 ">
        <!-- array of classified images -->
        {#each item.images as image}
          <Card 
            name={item.name}
            confidence={image.confidence}
            url={image.url}
          />
        {/each}
      </div>
    {/each}
    <div class="bg-white py-10 px-5 rounded-2xl mt-10 text-center">
      <p>Hit "Snap" below to categorise more food items!</p>
    </div>
  </div>

  <div class="absolute bottom-0 w-full flex justify-center mb-10" style="font-family: 'Roboto'">
    <a href="/photo">
      <ButtonPrimary >
        Snap
      </ButtonPrimary>
    </a> 
  </div>
</div>