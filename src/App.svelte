<script lang="ts">
    import Sidebar from "./comps/Sidebar/Sidebar.svelte";
    import Dashboard from "./comps/Dashboard.svelte";
    import type { Tab } from "./comps/Sidebar/Sidebar.svelte";

    import PhStudentDuotone from "~icons/ph/student-duotone";
    import PhStudentFill from "~icons/ph/student-fill";
    import PhSquaresFourDuotone from "~icons/ph/squares-four-duotone";
    import PhSquaresFourFill from "~icons/ph/squares-four-fill";
    import PhChalkboardTeacherDuotone from "~icons/ph/chalkboard-teacher-duotone";
    import PhChalkboardTeacherFill from "~icons/ph/chalkboard-teacher-fill";
    import PhWalletDuotone from "~icons/ph/wallet-duotone";
    import PhWalletFill from "~icons/ph/wallet-fill";
    import PhGraduationCapDuotone from "~icons/ph/graduation-cap-duotone";
    import PhGraduationCapFill from "~icons/ph/graduation-cap-fill";
    import PhUsersThreeDuotone from "~icons/ph/users-three-duotone";
    import PhUsersThreeFill from "~icons/ph/users-three-fill";
    import PhGearDuotone from "~icons/ph/gear-duotone";
    import PhGearFill from "~icons/ph/gear-fill";
    import PhSignOutBold from '~icons/ph/sign-out-bold'
    import PhSignOutDuotone from '~icons/ph/sign-out-duotone'
    let tabs: Tab[] = [
        {
            text: "Dashboard",
            ActiveIcon: PhSquaresFourFill,
            InactiveIcon: PhSquaresFourDuotone,
        },
        {
            text: "Students",
            ActiveIcon: PhStudentFill,
            InactiveIcon: PhStudentDuotone,
        },
        {
            text: "Teachers",
            ActiveIcon: PhChalkboardTeacherFill,
            InactiveIcon: PhChalkboardTeacherDuotone,
        },
        {
            text: "Payments",
            ActiveIcon: PhWalletFill,
            InactiveIcon: PhWalletDuotone,
        },
        {
            text: "Courses",
            ActiveIcon: PhGraduationCapFill,
            InactiveIcon: PhGraduationCapDuotone,
        },
        {
            text: "Groups",
            ActiveIcon: PhUsersThreeFill,
            InactiveIcon: PhUsersThreeDuotone,
        },
        {
            text: "Settings",
            ActiveIcon: PhGearFill,
            InactiveIcon: PhGearDuotone,
        },
    ];


    let buttomTabs: Tab[] = [
        {
            text: "Sign Out",
            ActiveIcon: PhSignOutBold,
            InactiveIcon: PhSignOutDuotone,
        },
    ];
</script>

<div class="w-screen flex h-screen bg-dark-900">
    <Sidebar {tabs} {buttomTabs} />
    <div class="flex-1 h-full p-3">
        <Dashboard />
    </div>
</div>

