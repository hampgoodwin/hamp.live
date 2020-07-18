<template>
    <div id="blog">
        For now, please see my&nbsp;<a href="https://medium.com/@abelgoodwin1988">Medium</a>&nbsp;page.
    </div>
</template>

<style lang="scss">
    #blog {
        @include flex(row, center, center);
        height: 100%;
        width: 100%;
        font-size: 5vmin;

        a {
            font-family: sans-serif;
            background: black;
            color: $font-color-secondary;
            font-weight: 700;
            padding: 0 1vmin;
            text-decoration: none;
        }
        a:hover {
            animation-name: hop;
            animation-duration: 3s;
        }
    }

    @keyframes hop {
        0% {
            transform:scale(1)
        }
        25% {
            transform:scale(.8)
        }
        50% {
            transform:scale(1.1)
        }
        75% {
            transform:scale(.9)
        }
        100% {
            transform:scale(1)
        }
    }
</style>
