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
  export default {
    data() {
      return {
        search: {
          type: "country",
          value: ""
        }
      } 
    },
    methods: {
      runSearch() {
        if (this.search.value != "") {
          this.$emit("searchWasExecuted", this.search);
        }
      }
    }
  }
</script>
