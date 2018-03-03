<template>
  <div class="home">
    <Hero>
      <p slot="title"> Home </p>
      <p slot="subtitle"> Welcome to the homepage </p>
    </Hero>
    <BookSearch/>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import BookSearch from '@/components/BookSearch.vue'

export default {
  name: 'home',
  components: {
    Hero,
    BookSearch
  }
}
</script>
