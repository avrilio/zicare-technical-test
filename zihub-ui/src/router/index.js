import { createRouter, createWebHistory } from 'vue-router';
import UseCaseOne from '../components/satusehat/use-case-one.vue';
import UseCaseTwo from '../components/satusehat/use-case-two.vue';
import UseCaseThree from '../components/satusehat/use-case-three.vue';
import UseCaseFour from '../components/satusehat/use-case-four.vue';
import UseCaseFive from '../components/satusehat/use-case-five.vue';
import UseCaseSix from '../components/satusehat/use-case-six.vue';
import UseCaseLocation from '../components/satusehat/use-case-location.vue';
import UseCaseOrganization from '../components/satusehat/use-case-organization.vue';
import UseCasePatient from '../components/satusehat/use-case-patient.vue';
import UseCasePractitioner from '../components/satusehat/use-case-practitioner.vue';

const routes = [
    {
        path: '/use-case-1',
        name: 'UseCaseOne',
        component: UseCaseOne
    },
    {
        path: '/use-case-2',
        name: 'UseCaseTwo',
        component: UseCaseTwo
    },
    {
        path: '/use-case-3',
        name: 'UseCaseThree',
        component: UseCaseThree
    },
    {
        path: '/use-case-4',
        name: 'UseCaseFour',
        component: UseCaseFour
    },
    {
        path: '/use-case-5',
        name: 'UseCaseFive',
        component: UseCaseFive
    },
    {
        path: '/use-case-6',
        name: 'UseCaseSix',
        component: UseCaseSix
    },
    {
        path: '/use-case-location',
        name: 'UseCaseLocation',
        component: UseCaseLocation
    },
    {
        path: '/use-case-organization',
        name: 'UseCaseOrganization',
        component: UseCaseOrganization
    },
    {
        path: '/use-case-patient',
        name: 'UseCasePatient',
        component: UseCasePatient
    },
    {
        path: '/use-case-practitioner',
        name: 'UseCasePractitioner',
        component: UseCasePractitioner
    },
    {
        path: '/',
        redirect: '/use-case-1'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;