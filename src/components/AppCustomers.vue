<template>
    <div>
        <h1 class="my-4">Customers</h1>
    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>&nbsp;</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(customer, key) in customers" v-bind:key="key">
                <td>{{ customer.fullName}}</td>
                <td>{{ customer.email}}</td>
                <td>
                    <button class="btn btn-danger btn-sm" @click="deleteCustomer(key)">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>

    import{ customerService } from "../services/CustomerService.js";

export default {
    data() {
        return {
            customers: customerService.list()
        }
    },

    methods: {
        deleteCustomer(customer) {
            customerService.remove(customer)
        }
    }

    
  
    
}
</script>

<style scoped>

</style>