<template>
  <section >
    <b-field label="Find a book">
      <b-autocomplete
        rounded
        v-model="query"
        :data="searchResults"
        placeholder="e.g. Harry Potter"
        icon="magnify"
        :open-on-focus="true"
        @input="search"
        @select="option => selected = option">
        <template slot-scope="props">
          <BookDropdown :book="props.option"/>
        </template>
      </b-autocomplete>
    </b-field>
    <BookInfoCard v-if="selected" :book="selected"> </BookInfoCard>
  </section>
</template>

<script>
import bookApi from '@/services/bookApi.js'
import BookDropdown from '@/components/BookDropdown.vue'
import BookInfoCard from '@/components/BookInfoCard.vue'

export default {
  name: 'booksearch',
  components: {
    BookDropdown,
    BookInfoCard
  },
  data () {
    return {
      query: '',
      searchResults: [],
      selected: null,
      delay: null
    }
  },
  methods: {
    search () {
      clearTimeout(this.delay)
      if (this.query) {
        this.delay = setTimeout(() => bookApi.search(this.query, this.parseBookData), 400)
      }
    },

    hasEnoughInfo (book) {
      let info = book.volumeInfo
      return (info.title && info.authors && info.description)
    },

    parseBookData (data) {
      this.searchResults = data.items
        .filter(this.hasEnoughInfo)
        .map((book) => {
          let info = book.volumeInfo
          return {
            title: info.title,
            authors: info.authors,
            description: info.description,
            cover: info.imageLinks.thumbnail
          }
        })
    }
  }
}
</script>
