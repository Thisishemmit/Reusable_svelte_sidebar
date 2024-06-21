<script lang="ts">
    export let text: string;
    export let active: boolean;

    export let onClick: () => void;

    import PhStudentFill from "~icons/ph/student-fill";
    import PhStudentDuotone from "~icons/ph/student-duotone";
</script>

<button
    on:click={onClick}
    class="w-full h-10 flex justify-start items-center pl-3 rounded-lg text-lg
        {active
        ? ' bg-gray-50 text-dark-900'
        : ' hover:bg-dark-600 text-gray-50 '}"
>
    {#if active}
        <slot name="active-icon" />
    {:else}
        <slot name="inactive-icon" />
    {/if}
    <p class="pl-3">{text}</p>
</button>
