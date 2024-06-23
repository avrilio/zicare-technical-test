<template>
    <div class="flex-grow border-2 border-zihub-border  bg-zihub-background rounded-2xl p-8">

        <div class="flex items-center border-b-2 border-zihub-border mb-4 pb-3">  
            <div class="text-white text-2xl font-bold border-r-2 border-zihub-border pr-4">
                Use Case 2
            </div>
            <div class="flex space-x-4 pl-4">
                <button class="big-button">
                    <font-awesome-icon icon="fa-solid fa-house" />
                    <span class="mx-2">Dashboard</span>
                </button>
                <button class="big-button">
                    <font-awesome-icon icon="fa-solid fa-bars" />
                    <span class="mx-2">Encounter</span>
                </button>
                <button class="big-button">
                    <font-awesome-icon icon="fa-solid fa-bars" />
                    <span class="mx-2">Condition</span>
                </button>
            </div>
        </div>

        <div class="w-full mb-4">
            <div class="flex flex-row items-end justify-between space-y-0 space-x-4">
                <div class="flex flex-col space-y-2 flex-grow">
                    <label for="fromDate" class="table-filter-input-label">From Date</label>
                    <input type="date" id="fromDate"  class="table-filter-input" />
                </div>
                <div class="flex flex-col space-y-2 flex-grow">
                    <label for="toDate" class="table-filter-input-label">To Date</label>
                    <input type="date" id="toDate"  class="table-filter-input" />
                </div>
                <div class="flex flex-col space-y-2 flex-grow">
                    <label for="status" class="table-filter-input-label">Status</label>
                    <select v-model="filterStatus" id="status" class="table-filter-input">
                        <option value="">ALL</option>
                        <option value="SUCCESS">SUCCESS</option>
                        <option value="FAILED">FAILED</option>
                        <option value="DRAFT">DRAFT</option>
                    </select>
                </div>
                <div class="flex flex-col space-y-2 flex-grow">
                    <label for="textFilter" class="table-filter-input-label">SID / NIK / ADMISSION ID</label>
                    <input type="text" id="textFilter" placeholder="Type Here ..." class="table-filter-input" />
                </div>
                <div class="flex flex-row space-y-0 space-x-4">
                    <div class="flex flex-col space-y-2">
                        <button @click="filterData" class="small-button p-2">
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                        </button>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <button class="big-button">
                            <font-awesome-icon icon="fa-solid fa-download" />
                            <span class="mx-2">Export to Excel</span>
                        </button>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <a class="big-button">
                            <font-awesome-icon icon="fa-solid fa-plus" />
                            <span class="mx-2">Add Data</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative overflow-x-auto rounded-lg">
            <table class="w-full text-sm text-left text-gray-400">
                <thead class="text-base uppercase bg-gray-800 text-indigo-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            No
                        </th>
                        <th scope="col" class="px-6 py-3">
                            STATUS SATUSEHAT
                        </th>
                        <th scope="col" class="px-6 py-3">
                            ID SATUSEHAT
                        </th>
                        <th scope="col" class="px-6 py-3">
                            ADMISSION ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                            PATIENT NIK
                        </th>
                        <th scope="col" class="px-6 py-3">
                            PRACTITIONER SID
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(data, index) in filteredDatas" :key="index" class=" odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-white">
                            {{ index + 1 }}
                        </th>
                        <td class="px-6 py-4">
                            <statusBadge :status="data.status" />
                        </td>
                        <td class="px-6 py-4">
                            {{ data.satusehat_id }}
                        </td>
                        <td class="px-6 py-4">
                            {{ data.admission_id }}
                        </td>
                        <td class="px-6 py-4">
                            {{ data.patient_nik }}
                        </td>
                        <td class="px-6 py-4">
                            {{ data.practitioner_sid }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import statusBadge from '../status-badge.vue';

const datas = [
    {
        status: "SUCCESS",
        satusehat_id: "DC7EB6CF-D949-4094-A882-FC38BA6147DD",
        admission_id: "240608.051638",
        patient_nik: "3206085405880001",
        patient_sid: "P01273630673",
        practitioner_sid: "3206080000000"
    },
    {
        status: "SUCCESS",
        satusehat_id: "DC7EB6CF-D949-4094-A882-FC38BA6147DD",
        admission_id: "240608.051638",
        patient_nik: "3206085405880001",
        patient_sid: "P01273630673",
        practitioner_sid: "3206080000000"
    },
    {
        status: "SUCCESS",
        satusehat_id: "DC7EB6CF-D949-4094-A882-FC38BA6147DD",
        admission_id: "240608.051638",
        patient_nik: "3206085405880001",
        patient_sid: "P01273630673",
        practitioner_sid: "3206080000000"
    },
    {
        status: "FAILED",
        satusehat_id: "DC7EB6CF-D949-4094-A882-FC38BA6147DD",
        admission_id: "240608.051638",
        patient_nik: "3206085405880001",
        patient_sid: "P01273630673",
        practitioner_sid: "3206080000000"
    },
    {
        status: "DRAFT",
        satusehat_id: "DC7EB6CF-D949-4094-A882-FC38BA6147DD",
        admission_id: "240608.051638",
        patient_nik: "3206085405880001",
        patient_sid: "P01273630673",
        practitioner_sid: "3206080000000"
    },
    {
        status: "SUCCESS",
        satusehat_id: "DC7EB6CF-D949-4094-A882-FC38BA6147DD",
        admission_id: "240608.051638",
        patient_nik: "3206085405880001",
        patient_sid: "P01273630673",
        practitioner_sid: "3206080000000"
    },
    {
        status: "FAILED",
        satusehat_id: "DC7EB6CF-D949-4094-A882-FC38BA6147DD",
        admission_id: "240608.051638",
        patient_nik: "3206085405880001",
        patient_sid: "P01273630673",
        practitioner_sid: "3206080000000"
    },
];

const filterStatus = ref(' ');
const filteredDatas = ref([]);

const filterData = () => {
    let filtered = datas;
    if (filterStatus.value) {
        filtered = filtered.filter(data => data.status === filterStatus.value);
    }

    filteredDatas.value = filtered;
};

onMounted(() => {
    filteredDatas.value = datas;
});

</script>

<style scoped>

</style>