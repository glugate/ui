<script lang="ts" setup>
import PageHeader from '@/components/PageHeader.vue';
import BaseTable from '@/components/BaseTable.vue';
import { useUsersStore } from '@/store/modules/users';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';


const usersStore = storeToRefs(useUsersStore());
const users = usersStore.users
const { getUsers } = useUsersStore()
onMounted(() => getUsers());
</script>

<template>
  <PageHeader title="Users" />
  <div class="page-body">
    <BaseTable 
      :headers="['id', 'first_name', 'last_name', 'email', 'title', 'birth_date', 'status', 'is_active',  'created_at', 'updated_at']"
      :data-provider="users"
       />
  </div>
</template>
