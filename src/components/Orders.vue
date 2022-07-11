<template>
    <section class="orders">
        <button class="orders__reload" @click="$emit('ordersReload')">
            <svg width="27px" height="30px" viewBox="0 0 520 420" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5-b</title><path d="M400,148l-21.12-24.57A191.43,191.43,0,0,0,240,64C134,64,48,150,48,256s86,192,192,192A192.09,192.09,0,0,0,421.07,320" style="fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/><path d="M464,97.42V208a16,16,0,0,1-16,16H337.42c-14.26,0-21.4-17.23-11.32-27.31L436.69,86.1C446.77,76,464,83.16,464,97.42Z"/></svg>
        </button>
        <h2 class="orders__title">Заказы</h2>
        <div class="orders__list">
            <slot></slot>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Orders',
    data () {
        return {
        }
    },
}
</script>
<style lang="scss">
    .orders {
        border: 1px solid var(--primary-color);
        border-radius: 5px;
        padding: 20px;
        background: var(--secondary-color);
        position: relative;
        &__title {
            font-size: 20px;
            text-align: center;
            font-weight: 600;
        }
        &__list {
            margin-top: 20px;
        }
        &__reload {
            top: 15px;
            cursor: pointer;
            position: absolute;
            background: var(--secondary-color);
            fill: var(--primary-color);
            stroke: var(--primary-color);
            border: 1px solid var(--primary-color);
            border-radius: 5px;
            svg {
                transition: 0.3s;
            }
            &:hover svg {
                transform: rotate(10deg)
            }
        }
    }
    
</style>