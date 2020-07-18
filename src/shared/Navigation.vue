<template>
    <div id="navigation">
        <router-link tag="div" :to="{name: 'home'}" class="navigation-item navigation-item-image">
            <img :src="logo" alt="S">
            <div class="navigation-item-selector"
            :class="{'navigation-item-selected': currentRouteName === 'home'}"></div>
        </router-link>
        <router-link tag="div" :to="{ name: 'resume' }" class="navigation-item">
            <div class="navigation-item-label"
                :class="{'selected': currentRouteName ==='resume'}">
                Resume
            </div>
            <div class="navigation-item-selector"
                :class="{'navigation-item-selected': currentRouteName === 'resume'}"></div>
        </router-link>
        <router-link tag="div" :to="{ name: 'portfolio' }" class="navigation-item">
            <div class="navigation-item-label"
                :class="{'selected': currentRouteName ==='portfolio'}">
                Portfolio
            </div>
            <div class="navigation-item-selector"
                :class="{'navigation-item-selected': currentRouteName === 'portfolio'}"></div>
        </router-link>
        <!-- <router-link tag="div" :to="{ name: 'blog' }" class="navigation-item">
            <div class="navigation-item-label"
                :class="{'selected': currentRouteName ==='blog'}">
                Blog
            </div>
            <div class="navigation-item-selector"
                :class="{'navigation-item-selected': currentRouteName === 'blog'}"></div>
        </router-link> -->
        <router-link tag="div" :to="{ name: 'contact' }" class="navigation-item">
            <div class="navigation-item-label"
                :class="{'selected': currentRouteName ==='contact'}">
                Contact
            </div>
            <div class="navigation-item-selector"
                :class="{'navigation-item-selected': currentRouteName === 'contact'}"></div>
        </router-link>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data(): {
        logo: string;
    } {
        return {
            logo: require('@/assets/logo.gif'),
        };
    },
    computed: {
        currentRouteName(): string | null | undefined {
            return this.$route.name;
        },
    },
});

</script>

<style lang="scss" scoped>
    #navigation{
        @include flex(row, flex-start, center);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 7vmin;
        padding: 0 3vmin;
        background: $banner-fade;
        box-shadow: inset 0px -1px 0px 0px rgba(36,41,46,1);

        .navigation-item {
            @include flex(column, flex-end, center);
            height: 100%;
            width: 15vmin;
            color: $font-color-tertiary;
            text-align: center;

            .navigation-item-label {
                @include flex(row, center, center);
                height: 4vmin;
                margin: 0 0 1vmin 0;
                font-size: 2.5vmin;
                font-weight: bold;
            }
            .selected {
                color: $font-color-secondary;
            }
            .navigation-item-selector{
                @include flex(row, center, flex-end);
                height: .7vmin;
                width: 100%;
            }
            .navigation-item-selected {
                background: $color-secondary;
            }
        }
        .navigation-item:hover {
            cursor: pointer;
        }
        .navigation-item-image {
            @include flex(column, flex-end, center);
            max-width: 12vmin;

            img {
                margin: auto;
                max-height: 5.6vmin;
            }
        }
        .navigation-item-image:hover {
            cursor: pointer;
        }
    }
</style>
