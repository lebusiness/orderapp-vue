<template>
    <header class="header">
        <h1 class="header__topic">
            Панель администратора заказов
        </h1>
        <div class="switcher">
            <div class="switcher-relative">
                <span>on</span>
                <span>off</span>
                <div class="switcher-circle" @click="toggleSwitch"></div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: 'Header',
    data () {
        return {
        }
    },
    methods: {
        toggleSwitch(event) {
            event.target.classList.toggle('switcher-circle--active');
            console.log(event.target.classList);
            const theme = event.target.classList.contains('switcher-circle--active') ? 'dark' : '';
            document.documentElement.setAttribute("theme", theme);
        },
    }
}
</script>
<style lang="scss">
    .header {
        padding: 20px 25px;
        border: 1px solid var(--primary-color);
        background: var(--secondary-color);
        position: relative;
        &__topic {
            font-size: 20px;
            text-align: center;
            display: block;
        }
    }
    .switcher {
        height: 35px;
        width: 70px;
        position: absolute;
        border-radius: 30px;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        border: 1px solid var(--primary-color);
        @media (max-width: 700px) {
            margin-top: 40px;
            position: static;
        }
        &-relative {
            padding: 0 5px;
            position: relative;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        &-circle {
            transition: 0.2s;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            height: 35px;
            width: 35px;
            background: var(--primary-color);
            border-radius: 100%;
            cursor: pointer;
            &--active {
                right: 0;
                left: auto;
            }
        }
    }
</style>