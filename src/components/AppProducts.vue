<template>
    <div>
        <h3 class="my-4">Products</h3>

        <i class="fas fa-search"></i> <input v-model="searchProduct" class="search" type="text" placeholder="Search products">
       
        <hr/>
        <div v-if="products.length > 0">
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
                    <td>{{ product.quantity}}</td>
                    <button v-if="product.quantity > 0" @click="decrementProduct(product)" class="btn btn-danger btn-sm">-</button>
                    <button v-else class="btn btn-danger btn-sm" disabled>-</button>
                    <button @click="incrementProduct(product)" class="btn btn-success btn-sm">+</button>
                </tr>
            </tbody>
        </table>
        </div>
        <h3 v-else>There is no products of that kind on the list.</h3>
    </div>
</template>

<script>
import { productService } from "../services/ProductService.js";
export default {
    data() {
        return{
            products: productService.list(),
            searchProduct: '',
        }        
    },

    methods: {
        incrementProduct(product){
            productService.increment(product);
        },

        decrementProduct(product){
            productService.decrement(product);
        }
    },

    watch: {
        searchProduct: function() {
            return this.products = productService.list().filter(product => product.name.toLowerCase().includes(this.searchProduct.toLowerCase()))
        }
    }
    //includes vraca true ili false 
 
    
}
</script>

<style scoped>

.search {
    border-radius: 5px; 
    padding:5px;
    margin-bottom:20px;

}
</style>