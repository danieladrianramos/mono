<template>
  <div class="card">
    <div class="card-body">
      <form>
        <div class="form-group">
          <label>Type:</label>
          <select v-model="search.type" class="form-control">
            <option>country</option>
            <option>capital</option>
            <option>language</option>
            <option>currency</option>
          </select>
        </div>

        <div class="form-group">
          <label>Value:</label>
          <input type="text" v-model="search.value" class="form-control">
        </div>

        <button id="stadisticsBtn" @click.prevent="runSearch" class="btn btn-primary btn-lg btn-block">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
  // It displays the form used for running new searches.
  export default {
    name: "SearchForm",
    data() {
      return {
        // It holds the form data
        search: {
          type: "country",
          value: ""
        }
      } 
    },
    methods: {
      // @vuese
      // Emit the event "searchWasExecuted" for running a new search into App.vue component
      runSearch() {
        if (this.search.value != "") {
          this.$emit("searchWasExecuted", this.search);
        }
      }
    }
  }
</script>
