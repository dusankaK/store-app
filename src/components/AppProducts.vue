<template>
    <div>
        <h3 class="my-4">Products</h3>
        <hr/>
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, id) in products" v-bind:key="id">
                    <td>{{ product.name}}</td>
                    <td>{{ product.quantity}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { productService } from "../services/ProductService.js";
export default {
    data() {
        return{
            products: productService.list()
        }
        
    }
    
}
</script>

<style scoped>

</style>