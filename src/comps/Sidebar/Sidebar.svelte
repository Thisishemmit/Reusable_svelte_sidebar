<script context="module" lang="ts">
    export type Tab = {
        text: string;
        ActiveIcon: any;
        InactiveIcon: any;
    };
</script>

<script lang="ts">
    import Sidetab from "./Sidetab.svelte";

    export let tabs: Tab[];
    export let buttomTabs: Tab[];
    type Page = string | null;
    let active: Page = null;
</script>

<div class="w-56 h-full p-3 flex flex-col gap-y-3">
    <div
        class="w-full h-20 bg-gray-50 rounded-lg flex justify-start items-center pl-3"
    >
        <img
            class="w-10/12"
            src="https://img.logoipsum.com/297.svg"
            alt="logo"
        />
    </div>
    <div class="w-full pt-6 flex justify-center items-center">
        <div class="w-2/3 h-0.5 bg-dark-700 rounded-lg"></div>
    </div>
    <div class="w-full flex-1 py-3 gap-y-3 flex flex-col">
        {#each tabs as { text, ActiveIcon, InactiveIcon }}
            <Sidetab
                {text}
                onClick={() => {
                    active = text.toLowerCase();
                }}
                active={active === text.toLowerCase()}
            >
                <ActiveIcon slot="active-icon" class="size-6" />
                <InactiveIcon slot="inactive-icon" class="size-6" />
            </Sidetab>
        {/each}
    </div>

    <div class="w-full pt-6 flex justify-center items-center">
        <div class="w-2/3 h-0.5 bg-dark-700 rounded-lg"></div>
    </div>
    <div class="w-full h-28 flex flex-col justify-end pt-3 gap-y-3">
        {#each buttomTabs as { text, ActiveIcon, InactiveIcon }}
            <Sidetab
                {text}
                onClick={() => {
                    active = text.toLowerCase();
                }}
                active={active === text.toLowerCase()}
            >
                <ActiveIcon slot="active-icon" class="size-6" />
                <InactiveIcon slot="inactive-icon" class="size-6" />
            </Sidetab>
        {/each}
    </div>
</div>
