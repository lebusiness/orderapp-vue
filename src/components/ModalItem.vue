<template>
    <div class="modal__item">
        <span>{{name}}</span>
        <span class="modal__item-count">{{count}} шт.</span>
        <span class="modal__item-price">{{price}} руб.</span>
    </div>
</template>
<script>
export default {
    name: "ModalItem",
    data() {
        return {};
    },
    props: ["name", "count", "price"],
}
</script>
<style lang="scss">
    .modal {
        &__item {
            display: flex;
            justify-content: space-between;
            border: 1px solid var(--primary-color);
            padding: 10px;
            margin-bottom: 10px;
            @media (max-width: 600px) {
                flex-direction: column
            }
            &-count {
                flex: 5;
                text-align: right
            }
            &-price {
                flex: 3;
                text-align: right;
            }
        }
    }
</style>
