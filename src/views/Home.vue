<template>
    <div id="home">
        <div class="hello">Hello</div>
        <div class="it-me">I'm Hamp</div>
        <div class="it-you">It's nice to meet you</div>
        <div class="look">Have a look around!</div>
        <div class="interests">
            <ul class="interests-list">
                <li class="interests-item">
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({

});
</script>


<style lang="scss" scoped>
    #home {
        font-family: Lato;
        width: 100%;
        height: 100%;
        @include flex(column, flex-start, flex-start);
        padding: 0 15vmin;

        .hello {
            font-size: 14vmin;
        }
        .it-me {
            font-size: 12vmin;
        }
        .it-you {
            font-size: 10vmin;
        }
        .look {
            font-size: 6vmin;
        }
        .interests {
            font-size: 2vmin;
            .interests-list {
                list-style-type: none;
                font-size: 1.5vmin;
                .interests-item {

                }
            }
        }
    }
</style>
