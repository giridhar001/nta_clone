<template>
  <div>
    <label for="customRange1">Example range</label>
    <input type="range" class="custom-range" id="customRange1">
  </div>
</template>

<script>
	import { mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn } from 'mdbvue';
	export default {
		name: 'CardPage',
		components: {
			mdbCard,
			mdbCardImage,
			mdbCardBody,
			mdbCardTitle,
			mdbCardText,
			mdbBtn
		}
	}
</script>