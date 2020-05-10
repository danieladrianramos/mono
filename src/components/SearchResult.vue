<template>
    <div class="row mb-5">
        <div class="col">

            <div class="row mt-3">
                <div class="col">
                    <h4 class="titleWhite">Results</h4>
                </div>
                <div class="col">
                    <button @click="sortResult('asc')" v-if="sort === 'desc'" class="btn btn-light float-right">Sort Asc</button>
                    <button @click="sortResult('desc')" v-else class="btn btn-light float-right">Sort Desc</button>
                </div>
            </div>

            <div class="card mt-3">
                <div class="card-body">
                    <div class="row" v-if="result">
                        <div v-for="item in result" v-bind:key="item.name" class="card ml-2 mt-2" style="width: 16rem;">
                            <img class="card-img-top" :src="item.flag" style="max-height: 125px;">
                            <div class="card-body">
                                <h5 class="card-title">{{ item.name }}</h5>

                                <div class="card-text cardContent">
                                    <div>
                                        <label>Capital:</label> {{ item.capital }}
                                    </div>
                                    <div>
                                        <label>Population:</label> {{ item.population }}
                                    </div>
                                    <div>
                                        <label>Currency:</label> {{ csv(item.currencies, "code") }}
                                    </div>
                                    <div>
                                        <label>Languages:</label> {{ csv(item.languages, "name") }}
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <a :href="goTo(item.name)" target="_blank">Google Maps</a>
                            </div>
                        </div>
                    </div>

                    <div class="alert alert-secondary" role="alert" v-else>
                        No results found!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['result', 'sort'],
        methods: {
            sortResult(value) {
                this.$emit("sortWasChanged", value);
            },
            goTo(value) {
                return `http://www.google.com/maps/place/${value}`;
            },
            csv(obj, field) {
                const list = [];

                obj.forEach((item) => {
                    list.push(item[field]);
                });

                return list.toString();
            }
        }
    }
</script>

<style scoped>
    .card-text label {
        font-weight: bold;
    }
    .cardContent {
        font-size: 12px;
    }
</style>