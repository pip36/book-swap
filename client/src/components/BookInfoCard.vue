<template>
  <div class="content">
    <div class="columns is-mobile">
      <div class="column is-one-quarter has-text-centered">
        <img :src="book.cover"/>
      </div>
      <div class="column">
        <h3 class="title is-3 is-size-5-mobile"> {{book.title}} </h3>
        <h4 class="subtitle is-5 is-size-6-mobile">
          Author -
          <small v-for="(author,index) in book.authors" :key="index">
            {{author}},
          </small>
        </h4>
        <p class="is-size-7-mobile">
          {{ book.description }}
        </p>
        <slot>
          <button class="button is-info"> + Add to Wishlist</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookdropdown',
  props: ['book']
}
</script>
