<template>
    <div class="mimalism-divider">
        <div class="mimalism-divider__layers">
            <div
                v-if="imageUrl"
                class="mimalism-divider__layer mimalism-divider__layer--1"
                :style="{ backgroundImage: `url(${imageUrl})` }"
            ></div>
            <div
                v-if="imageUrl"
                class="mimalism-divider__layer mimalism-divider__layer--2"
                :style="{ backgroundImage: `url(${imageUrl})` }"
            ></div>
            <div
                v-if="imageUrl"
                class="mimalism-divider__layer mimalism-divider__layer--3"
                :style="{ backgroundImage: `url(${imageUrl})` }"
            ></div>

            <div v-else class="mimalism-divider__placeholder">
                <span>scroll</span>
            </div>
        </div>

        <div class="mimalism-divider__glow"></div>

        <div class="mimalism-divider__fade-top"></div>
        <div class="mimalism-divider__fade-bottom"></div>

        <div class="mimalism-divider__label" v-if="label">{{ label }}</div>
    </div>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        imageUrl?: string;
        alt?: string;
        label?: string;
    }>(),
    {
        alt: "",
        label: "",
    },
);
</script>

<style scoped>
.mimalism-divider {
    --divider-height: 180px;
    --scroll-height: 400px;

    width: 100%;
    height: var(--divider-height);
    position: relative;
    overflow: hidden;
    background: var(--mimalism-gray-900);
}

.mimalism-divider__layers {
    position: absolute;
    inset: 0;
    overflow: hidden;
}

.mimalism-divider__layer {
    position: absolute;
    inset: -75px 0;
    background-size: cover;
    background-position: center;
    will-change: transform;
}

.mimalism-divider__layer--1 {
    opacity: 1;
    animation: drift-1 20s ease-in-out infinite;
    filter: brightness(0.9);
}

.mimalism-divider__layer--2 {
    opacity: 0.4;
    animation: drift-2 28s ease-in-out infinite;
    filter: blur(2px) brightness(0.7);
}

.mimalism-divider__layer--3 {
    opacity: 0.2;
    animation: drift-3 35s ease-in-out infinite;
    filter: blur(4px) brightness(0.5);
}

.mimalism-divider__placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
        180deg,
        var(--mimalism-gray-800) 0%,
        var(--mimalism-gray-900) 50%,
        var(--mimalism-gray-800) 100%
    );
}

.mimalism-divider__placeholder span {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: var(--mimalism-gray-500);
    letter-spacing: 0.3em;
}

@keyframes drift-1 {
    0%,
    100% {
        transform: translate3d(0, 0, 0) scale(1.05);
    }
    50% {
        transform: translate3d(0, -80px, 0) scale(1.08);
    }
}

@keyframes drift-2 {
    0%,
    100% {
        transform: translate3d(0, 0, 0) scale(1.1);
    }
    50% {
        transform: translate3d(0, -120px, 0) scale(1.12);
    }
}

@keyframes drift-3 {
    0%,
    100% {
        transform: translate3d(0, 0, 0) scale(1.15);
    }
    50% {
        transform: translate3d(0, -150px, 0) scale(1.18);
    }
}

.mimalism-divider__glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
        ellipse 80% 60% at 50% 50%,
        rgba(0, 122, 255, 0.08) 0%,
        transparent 70%
    );
    pointer-events: none;
    z-index: 3;
}

.mimalism-divider__fade-top {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(
        to bottom,
        var(--mimalism-white) 0%,
        transparent 100%
    );
    z-index: 4;
}

.mimalism-divider__fade-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(
        to top,
        var(--mimalism-white) 0%,
        transparent 100%
    );
    z-index: 4;
}

.mimalism-divider__label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 12px;
    color: var(--mimalism-gray-100);
    text-transform: uppercase;
    letter-spacing: 0.4em;
    background: rgba(28, 28, 30, 0.85);
    padding: 14px 36px;
    border-radius: 30px;
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow:
        0 8px 32px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.05);
    z-index: 10;
    white-space: nowrap;
}

@media (prefers-reduced-motion: reduce) {
    .mimalism-divider__layer--1,
    .mimalism-divider__layer--2,
    .mimalism-divider__layer--3 {
        animation: none;
        transform: scale(1.05);
    }
}

@media (max-width: 768px) {
    .mimalism-divider {
        --divider-height: 120px;
    }

    .mimalism-divider__label {
        font-size: 9px;
        padding: 10px 24px;
        letter-spacing: 0.3em;
    }

    .mimalism-divider__fade-top,
    .mimalism-divider__fade-bottom {
        height: 40px;
    }
}

@media (max-width: 480px) {
    .mimalism-divider__label {
        font-size: 8px;
        padding: 8px 16px;
    }
}
</style>
