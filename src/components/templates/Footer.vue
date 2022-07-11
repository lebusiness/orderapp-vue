<template>
    <footer class="footer">
        <span class="footer__name">
            Футер
        </span>
        <div class="footer__scroll-wrap">
            <span>Scroll to top</span>
            <button class="footer__scroll" @click="toTop">↑</button>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer',
    data () {
        return {
        }
    },
    methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }
}
</script>
<style lang="scss">
    .footer {
        padding: 20px 25px;
        border: 1px solid var(--primary-color);
        background: var(--secondary-color);
        display: flex;
        justify-content: space-between;
        @media (max-width: 550px) {
            flex-direction: column
        }
        &__name {
            transform: translateY(4px);
        }
        &__scroll {
            margin-left: 10px;
            cursor: pointer;
            color: var(--primary-color);
            background: var(--secondary-color);
            border: 1px solid var(--primary-color);
            border-radius: 1px;
            padding: 5px 9px 6px 9px;
            &-wrap {
                vertical-align: middle;
            }
        }
        
    }
</style>