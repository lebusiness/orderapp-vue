<template>
    <div class="btn-wrapper">
        <button class="btn-wrapper__btn" @click="isOpen = !isOpen">
            ...
        </button>
        <div class="btn-wrapper__list" v-if="isOpen">
            <button class="btn-wrapper__sub-btn btn-wrapper__sub-btn--red" @click='$emit("cancelShipment")'>Отменить</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SelectBtnShipment',
    data () {
        return {
            isOpen: false,
        }
    },
    methods: {

    }
}
</script>
<style lang="scss">
    .btn-wrapper {
        position: relative;
        &__btn {
            background: var(--secondary-color);
            color: var(--primary-color);
            border: 1px solid var(--primary-color);
            padding: 0px 6px 6px 6px;
            position: relative;
            cursor: pointer;
        }
        &__list {
            margin-top: 1px;
            right: 0;
            position: absolute;
            display: flex;
            flex-direction: column;
            padding: 0;
            z-index: 2;
        }
        &__sub-btn {
            cursor: pointer;
            border: 1px solid var(--primary-color);
            background: var(--secondary-color);
            color: var(--primary-color);
            padding: 6px 15px;
            &--red {
                color: rgb(201, 57, 57);
            }
            &--green {
                color: rgb(24, 165, 24);
            }
        }
    }
</style>