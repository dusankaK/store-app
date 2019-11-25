<template>
    <div>
        <router-link to="/customers">
            <button class="btn btn-primary btn-sm mt-4" type="button">&lt;&lt; Go Back</button>
        </router-link>
        <hr/>

        <div class="card mb-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ customer.fullName }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ customer.email }}</h6>
            </div>
        </div>

        <h4>Products</h4>
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in customer.products" :key="index">
                    <td>{{ product.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { customerService } from "@/services/CustomerService.js";


export default {
    computed: {
        customer () {
            return customerService.findCustomer(this.$route.params.id)
        },
    }
}
</script>

<style>
</style>