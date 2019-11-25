<template>
    <div>
        <form @submit.prevent="addNewCustomer" class="wrappForm">
            <h3 class="my-4">Add new customer</h3>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input v-model="newCustomer.fullName" type="text" class="form-control" aria-describedby="name" placeholder="Enter name">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input v-model="newCustomer.email" type="text" class="form-control" aria-describedby="email" placeholder="Enter email">
                </div> 
                <div class="form-group text-center">
                    <button class="btn btn-primary">Submit</button>
                </div>
        </form>
    
        <h3 class="my-4">Customers</h3>
        
        <hr/>

        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(customer, index) in customers" :key="index">
                    <td>{{ customer.fullName}}</td>
                    <td>{{ customer.email}}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" 
                                @click="deleteCustomer(customer)">
                                <i class="fas fa-trash"></i>
                        </button>
                        <button @click="latestPurchases(customer.id)" 
                                class="btn btn-light btn-sm">
                                <i class="fas fa-shopping-cart"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import{ customerService } from "@/services/CustomerService.js";

export default {
    data() {
        return {
            newCustomer: {},
            customers: customerService.list()
        }

    },

    methods: {
        latestPurchases(id){
            this.$router.push({name: 'latest-purchase', params: { id }})
        },

        deleteCustomer(customer) {
            customerService.remove(customer)
        },

        addNewCustomer(){
            customerService.add(this.newCustomer);
            this.newCustomer = {}
        }
    }    
}
</script>

<style scoped>
   .wrappForm{
       width: 40%;
       margin: 0 auto;
   }
</style>