<template>
    <div class="shipments__item">
        <span class="shipments__item-shipment">
             Отгрузка #{{ shipment.id }}
        </span>
        <span class="shipments__item-order">
            Заказ #{{ shipment.order_id }}
        </span>
        <span class="shipments__item-date">
            {{ shipment.delivery_date }}
        </span>
        <SelectBtnShipment 
            @cancelShipment='$emit("cancelShipmentMain", shipment)'
        />
    </div>
</template>
<script>
import SelectBtnShipment from './SelectBtnShipment.vue'
export default {
    name: "ShipmentItem",
    data() {
        return {};
    },
    props: ["shipment"],
    components: { SelectBtnShipment }
}
</script>
<style lang="scss">
.shipments {
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
            &-order {
                margin-left: 10px;
                font-size: 12px;
                flex: 1;
                margin-right: 10px;
                @media (max-width: 400px) {
                    margin: 5px 0 0 0;
                }
            }
            &-date {
                margin-right: 20px;
                @media (max-width: 400px) {
                    margin: 5px 0 5px 0;
                }
            }
        }
    }
</style>