<template>
    <div>
        
        <div v-if="product.quantity">

            <div class="card mb-3 mt-4" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{ product.name }}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Quantity: {{ product.quantity }}</h6>
                </div>
            </div>

            <div class="form-group">
                <label for="customer">Chose Customer</label>
                <select class="form-control" id="customer" v-model="selectedCustomer">
                <option v-for="customer in customers" :key="customer.id" :value="customer">
                    {{ customer.fullName }}
                </option>
                </select>

                <button class="btn btn-success mt-4 mr-2" @click="purchase">Confirm</button>
                <router-link class="btn btn-light mt-4" to="/products">Cancel</router-link>
    
            </div>
        </div>

        <div v-else class="mt-4">
            <h3 class="alert alert-warning">Product is not available in this moment. Try again later.</h3>
            <router-link class="btn btn-light" to="/products">Go Back to Products</router-link>
        </div>

    </div>
</template>

<script>
import { productService } from "@/services/ProductService.js";
import{ customerService } from "@/services/CustomerService.js";


export default {

    data(){
        return {
            selectedCustomer: null
        }
       
    },
    computed: {
        product: function(){
            return productService.find(this.$route.params.id)
        },

        customers: function () {
            return customerService.list()
        }
    }, 

    methods: {
        purchase() {
            if (!this.selectedCustomer) {
                alert('Please select a customer.')
            }

            customerService.addProductToCustomer(this.selectedCustomer, this.product)
            this.selectedCustomer = {}
            productService.decrement(this.product)
        }
    }

}
</script>

<style scoped>
    .btn-light {
        border-color: dimgray;
    }

</style>