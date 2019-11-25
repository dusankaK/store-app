<template>
    <div>
        <h3 class="my-4">Products</h3>

        <i class="fas fa-search"></i> <input v-model="searchTerm" class="search" type="text" placeholder="Search products">
       
        <hr/>
        <div v-if="products.length">
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td>{{ product.name}}</td>
                        <td>
                            {{ product.quantity }}
                            <button v-if="product.quantity" 
                                    :disabled="!product.quantity" 
                                    @click="decrementProduct(product)" 
                                    class="btn btn-danger btn-sm">
                                    -
                            </button>
                            <button @click="incrementProduct(product)" 
                                    class="btn btn-success btn-sm">
                                    +
                            </button>
                            <button @click="purchaseProduct(product.id)" 
                                    class="btn btn-light btn-sm">
                                    <i class="fas fa-shopping-cart"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-else>
            <h3>There is no available products on the list.</h3>
        </div>
    
    </div>
</template>

<script>
import { productService } from "@/services/ProductService.js";

export default {
    data() {
        return{
            products: productService.list(),
            searchTerm: '',
        }        
    },

    methods: {
        purchaseProduct(id) {
            this.$router.push({name: 'purchaseProduct', params: { id }})
        },

        incrementProduct(product){
            productService.increment(product);
        },

        decrementProduct(product){
            productService.decrement(product);
        }
    },

    computed: {
        filteredProducts () {
            return this.products.filter(product => product.name.toLowerCase().includes(this.searchTherm.toLowerCase()))
        }
    }
}
</script>

<style scoped>
    .search {
        border-radius: 5px; 
        padding:5px;
        margin-bottom:20px;
    }

    .btn-success, .btn-danger{
        width:30px;
        height:30px;
        margin-right:5px;
    }
</style>