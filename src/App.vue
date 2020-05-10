<template>
  <div class="container">
    <h1 class="titleWhite">Mono Test</h1>

    <div class="alert alert-warning mt-3" role="alert" v-if="searchError">
      There are no result for that search!
    </div>

    <app-search-form @searchWasExecuted="search"></app-search-form>

    <app-search-history 
        :list="history"
        @searchInHistoryWasExecuted="getFromHistory"></app-search-history>

    <app-search-result 
        :result="list" 
        :sort="sort" 
        @sortWasChanged="sortList($event)"></app-search-result> 
  </div>
</template>

<script>
  // Components
  import SearchForm from "./components/SearchForm.vue";
  import SearchResult from "./components/SearchResult.vue";
  import SearchHistory from "./components/SearchHistory.vue";

  // Services
  import CountryService from "./services/Countries";
  import SearchLog from "./services/SearchLog";

  export default {
    data() {
      return {
        sort: "asc",
        list: [],
        history: [],
        searchError: false
      } 
    },
    created() {
      this.history = SearchLog.getAll();
      this.list = SearchLog.getLastSearch();
    },
    methods: {
      search(formData) {
        CountryService.search(formData.type, formData.value)
          .then((result) => {
            this.searchError = false;
            this.list = result;

            // Add entry in log and get the new list
            this.history = SearchLog.set(formData.type, formData.value, result);
          })
          .catch((err) => {
            console.log(err);
            this.searchError = true;
          });
      },
      sortList(value) {
        this.sort = value;

        if (value == "asc") {
          this.list.sort((a, b) => (a.name > b.name) ? 1 : -1)
        } else {
          this.list.sort((a, b) => (a.name > b.name) ? -1 : 1)
        }
      },
      getFromHistory(key) {
        this.list = SearchLog.getByKey(key);
      }
    },
    components: {
      appSearchForm: SearchForm,
      appSearchResult: SearchResult,
      appSearchHistory: SearchHistory
    }
  }
</script>

<style>
  body {
    background-color: #333;
  }
  .titleWhite {
    color: white;
  }
</style>