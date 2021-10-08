<template>
  <BaseTemplate title="About">
    <div class="ui cards" style="margin: 10px">

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="searchQuery">
        Search
      </label>
      <input 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
        focus:outline-none focus:shadow-outline" 
        type="text" 
        placeholder="Search..." 
        v-model="searchQuery"
      />
    </div>
  
    <table class="table-auto">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Views</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in searchedProducts" :key="book.id">
          <th scope="row">{{ book.title  }}</th>  
          <td>{{ book.author }}</td> 
          <td>{{ book.views }}</td>  
        </tr>
      </tbody>
    </table>
  </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import { computed, ref, reactive } from "vue";
import BaseTemplate from '@/containers/templates/base/index.vue'
import { useSearch } from '@/utils/helpers/search';

const books = reactive([
  {
    id: 1,
    title: 'Harry Potter',
    author: 'JK Rowling',
    views: 856
  },
  {
    id: 2,
    title: 'Sobat Sakit',
    author: 'Jek Jingan',
    views: 900
  },
  {
    id: 3,
    title: 'Rindu',
    author: 'Tereliye',
    views: 400
  }
]);
  
  const searchQuery = ref('');
  const searchedProducts = computed(() : any => useSearch(searchQuery.value, books))
</script>
