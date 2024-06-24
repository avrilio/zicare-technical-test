<template>
    <div class="flex-grow border-2 border-zihub-border  bg-zihub-background rounded-2xl p-8">

        <div class="flex items-center border-b-2 border-zihub-border mb-4 pb-3">  
            <div class="text-white text-2xl font-bold border-r-2 border-zihub-border pr-4">
                Use Case 5
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
                        <button @click="openModal" class="big-button">
                            <font-awesome-icon icon="fa-solid fa-plus" />
                            <span class="mx-2">Add Data</span>
                        </button>
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

        <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div class="bg-zihub-background p-8 rounded-lg w-1/2">
                <div class="flex justify-between items-center mb-4">
                    <div class="flex items-center space-x-2 text-white">
                        <font-awesome-icon icon="fa-solid fa-plus" />
                        <h2 class="text-2xl font-bold ">Add Data</h2>
                    </div>
                    <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
                        <font-awesome-icon icon="fa-solid fa-times" />
                    </button>
                </div>
                <div class="flex flex-col space-y-4">
                    <div>
                        <label for="modalStatus" class="table-filter-input-label">Status</label>
                        <select id="modalStatus" class="table-filter-input mt-1 block w-full">
                            <option value="SUCCESS">SUCCESS</option>
                            <option value="FAILED">FAILED</option>
                            <option value="DRAFT">DRAFT</option>
                        </select>
                    </div>
                    <div>
                        <label for="modalSatusehatId" class="table-filter-input-label">ID SATUSEHAT</label>
                        <input type="text" id="modalSatusehatId" class="table-filter-input mt-1 block w-full" />
                    </div>
                    <div>
                        <label for="modalAdmissionId" class="table-filter-input-label">Admission ID</label>
                        <input type="text" id="modalAdmissionId" class="table-filter-input mt-1 block w-full" />
                    </div>
                    <div>
                        <label for="modalPatientNik" class="table-filter-input-label">Patient NIK</label>
                        <div class="flex space-x-2">
                            <input type="text" id="modalPatientNik" class="table-filter-input mt-1 block flex-grow" />
                            <button class="bg-blue-700 text-white px-4 py-2 rounded-md mt-1 h-10">
                                <font-awesome-icon icon="fa-solid fa-search" />
                                <span class="ml-2">Search Data</span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <label for="modalPractitionerSid" class="table-filter-input-label">Practitioner SID</label>
                        <input type="text" id="modalPractitionerSid" class="table-filter-input mt-1 block w-full" />
                    </div>
                    <div class="flex justify-end space-x-4">
                        <button @click="closeModal" class="bg-red-600 text-white px-4 py-2 rounded-md">Cancel</button>
                        <button class="bg-blue-700 text-white px-4 py-2 rounded-md">Save Data</button>
                    </div>
                </div>
            </div>
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

const isModalOpen = ref(false);
const filterStatus = ref(' ');
const filteredDatas = ref([]);

const filterData = () => {
    let filtered = datas;
    if (filterStatus.value) {
        filtered = filtered.filter(data => data.status === filterStatus.value);
    }

    filteredDatas.value = filtered;
};

const openModal = () => {
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};

onMounted(() => {
    filteredDatas.value = datas;
});

</script>

<style scoped>

</style>