<template>
  <div class="media">
    <div class="media-left">
      <img width=64 :src="book.cover"/>
    </div>
    <div class="media-content" :style="{'overflow': 'hidden'}">
      <h4 class="subtitle is-4 is-size-6-mobile"> {{book.title}} </h4>
      <h4 class="subtitle is-5 is-size-7-mobile" style="{'display': 'inline-block'}">
        Author -
        <small v-for="(author,index) in book.authors" :key="index">
          {{author}},
        </small>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookdropdown',
  props: ['book']
}
</script>
