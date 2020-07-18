<template>
    <div id="footer">
        <div class="footer-group">

        </div>
        <div class="footer-group">

        </div>
        <div class="footer-group d-flex flex-row justify-content-center align-items-center">
            <a href="https://denverdevs.org/" class="pr-4">
                <div class="footer-grouprow">
                    <font-awesome-icon class="fa-icon" :icon="['fab', 'slack']" />
                </div>
                <div class="footer-group-row label">
                    @HampGoodwin
                </div>
            </a>
            <div class="footer-group">
                <div class="footer-group-row">
                    <a href="https://github.com/abelgoodwin1988">
                        <font-awesome-icon class="fa-icon" :icon="['fab', 'github-alt']" />
                    </a>
                    <a href="https://www.linkedin.com/in/abelgoodwin/">
                        <font-awesome-icon class="fa-icon" :icon="['fab', 'linkedin-in']" />
                    </a>
                </div>
                <div class="footer-group-row">
                    <a href="https://www.twitch.tv/hamp_tv/">
                        <font-awesome-icon class="fa-icon" :icon="['fab', 'twitch']" />
                    </a>
                    <a href="https://twitter.com/abelgoodwin1988">
                        <font-awesome-icon class="fa-icon" :icon="['fab', 'twitter']" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({

});
</script>

<style lang="scss" scoped>
    #footer {
        @include flex(row, space-between, center);
        flex: 1 0 auto;
        width: 100%;
        height: 12vmin;
        padding: 0 3vmin;
        background: $banner-fade;
        box-shadow: inset 0px 1px 0px 0px rgba(36,41,46,1);

        .footer-group {
            @include flex(column, center, space-between);
            
            .footer-group-row {
                @include flex(row, center, center); 
            }

            a {
                @include flex(column, center, center);
                text-decoration: none;
                color: $color-primary;
            }
            a:hover {
                color: $color-secondary;
            }
        }


        .fa-icon {
            font-size: 3vmin;
        }
        .label {
            font-size: 1.5vmin;
        }
    }
</style>
