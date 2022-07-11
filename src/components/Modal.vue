<template>
    <div class="modal" @click="$emit('close')">
        <div class="modal__inner" @click.stop>
            <button class="modal__close" @click="$emit('close')">x</button>
            <p class="modal__number">Заказ #{{modalOrder.id}}</p>
            <p class="modal__title">Корзина</p>
            <div class="modal__list">
                <ModalItem 
                    v-for="item of modalOrder.basket_items" 
                    key="item"
                    :name="item.name"
                    :count="item.quantity"
                    :price="item.price"
                />
            </div>

            <span class="modal__total">
                Итого: {{modalOrder.total}} руб.
            </span>
            <div class="modal__btn-wrapper">
                <button class="modal__btn modal__btn--green" @click='$emit("toShipmentMain", modalOrder), $emit("close")'>
                    К отгрузке
                </button>
                <button class="modal__btn modal__btn--red" @click='$emit("cancelMain", modalOrder), $emit("close")'>
                    Отменить
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import ModalItem from './ModalItem.vue';
export default {
    name: "Modal",
    data() {
        return {
        };
    },
    props: ["modalOrder"],
    components: { ModalItem },
    beforeMount () {
        window.onkeydown = ( event ) => {
            if ( event.keyCode == 27 ) {
                this.$emit("close");
            }
        };
    }
}
</script>
<style lang="scss">
    .modal {
        z-index: 5;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(51, 51, 51, 0.522);
        display: flex;
        justify-items: center;
        align-items: center;
        &__inner {
            position: relative;
            padding: 20px;
            width: 500px;
            background: var(--secondary-color);
            margin: 0 auto;
            border-radius: 5px;
            @media (max-width: 600px) {
                width: 80%;
            }
        }
        &__close {
            right: 20px;
            cursor: pointer;
            position: absolute;
            color: var(--primary-color);
            background: var(--secondary-color)
        }
        &__number {
            text-align: center;
            font-size: 14px;
        }
        &__title {
            margin-top: 5px;
            font-weight: 500
        }
        &__list {
            margin-top: 20px;
        }
        &__btn-wrapper {
            margin-top: 15px;
            display: flex;
            justify-content: space-between
        }
        &__btn {
            border: 1px solid var(--primary-color);
            padding: 10px 25px;
            cursor: pointer;
            background: var(--secondary-color);
            &--green {
                color: rgb(24, 165, 24);
            }
            &--red {
                color: rgb(201, 57, 57);
            }
        }
        &__total {
            margin-top: 15px;
            text-align: right;
            display: block;
        }
    }
</style>
