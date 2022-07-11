<template>
    <Modal 
        v-if="isOpenModal"
        @close="isOpenModal = false"
        :modalOrder="modalOrder"
        @toShipmentMain="toShipmentMain"
        @cancelMain="cancelMain"
    />
    <main class="main">
        <Orders @ordersReload="getOrdersData">
            <OrderItem 
                v-for="order of orders" 
                :order="order" 
                :key="order" 
                @getMoreMain="getMoreMain"
                @toShipmentMain="toShipmentMain" 
                @cancelMain="cancelMain"
            />
        </Orders>
        <Shipments @shipmentsReload="getShipmentsData">
            <ShipmentItem 
                v-for="shipment of shipments" 
                :shipment="shipment" 
                :key="shipment" 
                @cancelShipmentMain="cancelShipmentMain"
            />
        </Shipments>
    </main>
</template>
<script>
import Orders from "./Orders.vue";
import OrderItem from "./OrderItem.vue";
import Shipments from "./Shipments.vue";
import ShipmentItem from "./ShipmentItem.vue";
import Modal from "./Modal.vue";



export default {
    name: "Main",
    data() {
        return {
            student: "2021-0625",
            orders: null,
            shipments: null,
            isOpenModal: false,
            modalOrder: null,
        };
    },
    methods: {
        getMoreMain(event) {
            this.isOpenModal = true;
            this.modalOrder = event;
        },
        toShipmentMain(event) {
            fetch(`https://demo-api.vsdev.space/api/orders_admin/${this.student}/orders/${event.id}/delivery`, {
                method: "POST",
            })
            .then(() => {
                this.getFetchData();
            })
        },
        cancelMain(event) {
            fetch(`https://demo-api.vsdev.space/api/orders_admin/${this.student}/orders/${event.id}`, {
                method: "DELETE",
            })
            .then(() => {
                this.getFetchData();
            })
        },
        cancelShipmentMain(event) {
            fetch(`https://demo-api.vsdev.space/api/orders_admin/${this.student}/deliveries/${event.id}`, {
                method: "DELETE",
            })
            .then(() => {
                this.getFetchData();
            })
        },
        getOrdersData() {
            fetch(`https://demo-api.vsdev.space/api/orders_admin/${this.student}/orders`)
            .then(response => response.json())
            .then(data => (this.orders = data));
        },
        getShipmentsData() {
            fetch(`https://demo-api.vsdev.space/api/orders_admin/${this.student}/deliveries`)
            .then(response => response.json())
            .then(data => (this.shipments = data));
        },
        getFetchData() {
            this.getOrdersData();
            this.getShipmentsData();
        }
    },
    beforeMount() {
        this.getFetchData();
    },
    updated() {
        console.log("updated");
    },
    components: { Orders, Shipments, OrderItem, ShipmentItem, Modal }
}
</script>
<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    .main {
        padding: 25px;
        display: grid;
        grid-auto-columns: 1fr 1fr;
        grid-auto-flow: column;
        gap: 30px;
        background: var(--subsecondary-color);
        @media (max-width: 980px) {
            grid-auto-columns: 1fr;
            grid-auto-flow: row;
        }
    }
    html {
        font-family: 'Montserrat', sans-serif;
    }
    * {
        margin: 0;
    }


    :root {
        --primary-color: rgb(9, 9, 9);
        --subsecondary-color: #f4f4f4;
        --secondary-color: #FFF;
    }

    [theme="dark"] {
        --primary-color: #FFF;
        --subsecondary-color: #150f15;
        --secondary-color: rgb(0, 0, 0);
    }

    html {
        color: var(--primary-color);
    }
</style>