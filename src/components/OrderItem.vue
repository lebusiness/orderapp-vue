<template>
    <div class="orders__item">
        <span class="orders__item-order">
            Заказ #{{order.id}}
        </span>
        <span class="orders__item-price">
            {{order.total}} руб.
        </span>
        <SelectBtnOrder 
            @getMore='$emit("getMoreMain", order)'
            @toShipment='$emit("toShipmentMain", order)'
            @cancel='$emit("cancelMain", order)'
        />
    </div>
</template>
<script>
import SelectBtnOrder from './SelectBtnOrder.vue'
export default {
    name: "OrderItem",
    data() {
        return {};
    },
    props: ["order"],
    components: { SelectBtnOrder }
}
</script>
<style lang="scss">
    .orders {
        &__item {
            border: 1px solid var(--primary-color);
            border-radius: 5px;
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            @media (max-width: 400px) {
                flex-direction: column;
            }
            &-price {
                flex: 1;
                text-align: right;
                margin-right: 20px;
                @media (max-width: 400px) {
                    margin: 5px 0 5px 0;
                }
            }
        }
    }
</style>