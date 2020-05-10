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
    export default {
        props: ["list"],
        methods: {
            show(key) {
                this.$emit("searchInHistoryWasExecuted", key);
            }
        }
    }
</script>
