<script setup lang="ts">
import { IUser } from "@/types/user";
import TableCell from "./TableCell.vue";
type UserField = keyof IUser
interface Props {
  headers: UserField[],
  dataProvider: IUser[]
}
defineProps<Props>()
</script>

<template>
    <div class="card">
        <div class="card-body">
            <div id="table-default">
                <table class="table">
                    <thead>
                        <tr>
                            <th v-for="h in headers" :key="h">
                                <button class="table-sort" data-sort="sort-name">{{ h }}</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="table-tbody">
                        <tr v-for="user in dataProvider" :key="user.id">
                            <td v-for="h in headers" :key="h" class="sort-name"><TableCell :value="user[h]" /></td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>