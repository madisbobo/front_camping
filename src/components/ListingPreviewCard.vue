<template>
    <div class="row row-cols-1 row-cols-md-2 g-4">
        <div v-for="listing in listingsPreview" :key="listing.listingId" class="col">
            <div class="card px-4 h-100 border-0">
                <img v-if="listing.imageData.length < 10" @click="navigateToListing(listing.listingId)" src="../assets/logoTelk.png" class="card-img-top" alt="...">
                <img v-else @click="navigateToListing(listing.listingId)" :src="listing.imageData" class="card-img-top" alt="...">
                <div @click="navigateToListing(listing.listingId)" class="card-body">
                    <h5 class="card-title text-start mb-2">{{listing.listingName}}</h5>
                    <div class="d-flex justify-content-between">
                        <p class="card-text text-start">{{ listing.averageScore }}
                            <font-awesome-icon :icon="['fass', 'star']"/>
                            ({{ listing.numberOfScores }})
                        </p>
                        <p class="text-end">{{ listing.price }}€ /öö</p>
                    </div>
                </div>
                <!--Buttons -->
                <div v-if="showButtons === true" class="row mb-3 justify-content-center">
                    <div class="col col-6">
                        <button @click="editListing(listing.listingId)" type="button" class="btn btn-dark">Muuda</button>
                    </div>
                    <div class="col col-6">
                        <button @click="deleteListing(listing.listingId)" type="button" class="btn btn-outline-dark">Kustuta</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import router from "@/router";

export default {
    name: 'ListingPreviewCard',
    props: {
        listingsPreview: {},
        showButtons: false,
    },
    methods: {
        editListing(listingId) {
            router.push({name: 'editListingRoute', params: {id: listingId}})
        },

        deleteListing(listingId) {
            this.$http.delete("/my-listings", {
                    params: {
                        listingId: listingId,
                    }
                }
            ).then(response => {
                this.$emit('event-update-page')
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        },


        navigateToListing(listingId) {
            router.push({name: 'listingRoute', params: {id: listingId}})
        },

    }
}
</script>
<style scoped>
.card {
    cursor: pointer;
}
.card-title {
    height: 2.5rem;
}

.card-img-top {
    min-height: 300px; /* Set the min height */
    max-height: 300px; /* Set the max height */
    width: 100%;
    object-fit: cover; /* Zoom in/out to fit the container */
}

</style>