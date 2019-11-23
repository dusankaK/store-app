<template>
    <div>
        <form @submit.prevent class="wrappForm">
            <h3 class="my-4">Add new customer</h3>
            <div class="form-group">
                <label for="name">Name</label>
                <input v-model="newCustomers.fullName" type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter name">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input v-model="newCustomers.email" type="text" class="form-control" id="email" aria-describedby="email" placeholder="Enter email">
            </div> 
            <div class="form-group text-center">
                <button class="btn btn-primary" @click="addNewCustomer">Submit</button>
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
                <tr v-for="(customer, id) in customers" v-bind:key="id">
                    <td>{{ customer.fullName}}</td>
                    <td>{{ customer.email}}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" @click="deleteCustomer(key)">
                            <i class="fas fa-trash"></i>
                        </button>
                        <router-link class="btn btn-light btn-sm" :to="{name: 'latest-purchases', params:{id: customer.id} }">
                            <i class="fas fa-shopping-cart"></i>
                        </router-link>
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
            newCustomers: {},
            customers: customerService.list()
        }

    },

    methods: {
        deleteCustomer(customer) {
            customerService.remove(customer)
        },

        addNewCustomer(){
            customerService.add(this.newCustomers);
            this.newCustomers = {}
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