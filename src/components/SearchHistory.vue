<template>
    <div class="card mt-3">
        <div class="card-body">
            <h5>History Log</h5>

            <div v-if="list">
                <span v-for="(result, key) in list" v-bind:key="key">
                    <button @click.prevent="show(key)" class="mr-2 mt-2">{{ key }}</button>
                </span>
            </div>

            <div class="alert alert-secondary" role="alert" v-else>
                No log for the moment!
            </div>
        </div>
    </div>
</template>

<script>
    // It displays a log with all the searches executed.
    // Doing click on the buttons, the user can display it again.
    export default {
        name: "SearchHistory",
        props: ["list"],
        methods: {
            // @vuese
            // Emit the event "searchInHistoryWasExecuted" for loading an old search into SearchResult component
            show(key) {
                this.$emit("searchInHistoryWasExecuted", key);
            }
        }
    }
</script>
