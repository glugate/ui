<script lang="ts" setup>
import PageHeader from '@/components/PageHeader.vue';
import BaseTable from '@/components/BaseTable.vue';
import { useUsersStore } from '@/store/modules/users';
import { onMounted } from 'vue';

const users = useUsersStore();
onMounted(() => users.getUsers());

</script>

<template>
  <PageHeader title="Users" />
  <div class="page-body">
    <BaseTable />
  </div>
</template>
