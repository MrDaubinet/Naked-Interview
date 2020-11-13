<script>
  import { storageRef } from "../firebase.js";
  import moment from "moment"

  import ButtonPrimary from "../components/ButtonPrimary.svelte"
  import { onMount } from 'svelte';

  let img
  let lastPicture
  let video
  let canvas

  onMount(() => {
    img = document.querySelector('img');
    canvas = document.createElement('canvas');
    
    if (hasGetUserMedia()) {
      // Good to go!
      console.log("camera available")
      video = document.querySelector('video')
      const constraints = {
        video: true
      };
      navigator.mediaDevices.getUserMedia(constraints).
        then((stream) => {video.srcObject = stream});
    } else {
      alert('getUserMedia() is not supported by your browser');
    }
  })

  function hasGetUserMedia() {
    return !!(navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia);
  }

  function takePhoto(){
    console.log("taking photo")
    if(video) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0);
      // Other browsers will fall back to image/png
      lastPicture = true
      img.src = canvas.toDataURL('image/webp');

      let dataurl = canvas.toDataURL('image/png');
      let blob = dataURLtoBlob(dataurl);
      // console.log(blob)
      uploadFile(blob)
    } else {
      console.log("no video available")
    }
  }

  function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
  }

  function uploadFile(file){
    let date = moment(new Date()).format()
    console.log(date)
    let newFoodImageRef = storageRef.child('images/'+date);
    newFoodImageRef.put(file).then(function(snapshot) {
      console.log('Uploaded a blob or file!');
    });
  }

</script>

<div class="h-screen w-full bg-gray-100">
  <div class="mx-5 pt-10">
    <video class="rounded-lg"  autoplay></video>
  </div>
  
  <div class="mx-5 {lastPicture? 'pt-10' : ''}">
    <img class="rounded-lg" src="">
    <canvas style="display:none;"></canvas>
    {#if !lastPicture}
      <div class="bg-white py-10 px-5 rounded-2xl mt-10 text-center">
        <p>Your Most recent photo will display above</p>
      </div>
    {/if}
  </div>
  <div class="flex justify-between  pt-5 mx-5">
    <a class="rounded-2xl" href="/food">
      <ButtonPrimary >
        Back
      </ButtonPrimary>
    </a>
    <button class="rounded-2xl" on:click={takePhoto}>
      <ButtonPrimary >
        Click for picture
      </ButtonPrimary>
    </button>
  </div>
</div>
