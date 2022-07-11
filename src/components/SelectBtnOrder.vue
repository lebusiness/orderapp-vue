<template>
    <div class="btn-wrapper">
        <button class="btn-wrapper__btn" @click="isOpen = !isOpen">
            ...
        </button>
        <div class="btn-wrapper__list" v-if="isOpen">
            <button class="btn-wrapper__sub-btn" @click='$emit("getMore")'>Подробнее</button>
            <button class="btn-wrapper__sub-btn btn-wrapper__sub-btn--green" @click='$emit("toShipment")'>К отгрузке</button>
            <button class="btn-wrapper__sub-btn btn-wrapper__sub-btn--red" @click='$emit("cancel")'>Отменить</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SelectBtnOrder',
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

</style>