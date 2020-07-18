<template>
    <div id="contact">
        <a href="mailto:abelgoodwin1988@gmail.com" class='contact'>
            <font-awesome-icon class="fa-icon" :icon="['fas', 'at']" />
        </a>
        <a href="https://denverdevs.org/" class='contact'>
            <div class="d-flex flex-row">
                <font-awesome-icon class="fa-icon" :icon="['fab', 'slack']" />
            </div>
            <div class="d-flex flex-row label">
                @HampGoodwin
            </div>
        </a>
        <a href="https://github.com/abelgoodwin1988" class='contact'>
            <font-awesome-icon class="fa-icon" :icon="['fab', 'github-alt']" />
        </a>
        <a href="https://www.linkedin.com/in/hampgoodwin/" class='contact'>
            <font-awesome-icon class="fa-icon" :icon="['fab', 'linkedin-in']" />
        </a>
        <a href="https://www.twitch.tv/hamp_tv/" class='contact'>
            <font-awesome-icon class="fa-icon" :icon="['fab', 'twitch']" />
        </a>
        <a href="https://twitter.com/abelgoodwin1988" class='contact'>
            <font-awesome-icon class="fa-icon" :icon="['fab', 'twitter']" />
        </a>
    </div>
</template>

<style lang="scss">
    #contact {
        padding: 10vmin 0 0 0;

        .contact {
            display: inline-flex !important;
            @include flex(column, center, center);
            margin: 2vmin;
            color: $font-color-primary;
            text-decoration:none;

            .fa-icon {
                
                font-size: 10vmin;
            }
        }
        .contact:hover {
            animation-name: hop;
            animation-duration: .9s;

            color: $color-tertiary;
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
