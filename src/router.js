import Vue from 'vue'
import Router from 'vue-router'
import Customers from './components/AppCustomers.vue'
import Products from './components/AppProducts.vue'
import LatestPurchase from './components/LatestPurchase.vue'
import PurchaseProduct from './components/PurchaseProduct.vue'


Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {path: '/', redirect: '/customers'},
        {path: '/customers', component: Customers },
        {path: '/products', component: Products },
        {path: '/customers/:id', component: LatestPurchase, name: 'latest-purchases'},
        {path: '/products/:id', component:PurchaseProduct, name: 'purchase-product', props: true}
    ]
    
})
    