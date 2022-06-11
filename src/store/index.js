import {createStore} from 'vuex'

export default createStore({
    state: {
        current: 0,
        exams: [
            {
                id: 0,
                title: 'Test title',
                question_count: 30,
                color: 'green',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
                    '  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />\n' +
                    '</svg>',
                tests: [
                    {
                        id: 0,
                        question: 'Kuz keldi (fe\'lni toping!)',
                        variants: [
                            {id: 0, title: 'Kuz jksdjf lkjdsf jdskljlfjfsd'},
                            {id: 1, title: 'Keldi'},
                            {id: 2, title: '7'},
                            {id: 3, title: '10'},
                        ]
                    },
                    {
                        id: 1,
                        question: '3+5',
                        variants: [
                            {id: 0, title: '8'},
                            {id: 1, title: '9'},
                            {id: 2, title: '3'},
                            {id: 3, title: '6'},
                        ]
                    },
                    {
                        id: 2,
                        question: '5+5',
                        variants: [
                            {id: 0, title: '10'},
                            {id: 1, title: '13'},
                            {id: 2, title: '16'},
                            {id: 3, title: '24'},
                        ]
                    },
                ],
            },
            {
                id: 1,
                title: 'CS 250',
                question_count: 10,
                color: 'gray',
                icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n" +
                    "  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z\" />\n" +
                    "</svg>",
            },
        ],
        current_exam: {
            id: 0,
            title: 'Test title',
            tests: [
                {
                    id: 0,
                    question: 'Kuz keldi (fe\'lni toping!)',
                    variants: [
                        {id: 0, title: 'Kuz jksdjf lkjdsf jdskljlfjfsd'},
                        {id: 1, title: 'Keldi'},
                        {id: 2, title: '7'},
                        {id: 3, title: '10'},
                    ]
                },
                {
                    id: 1,
                    question: '3+5',
                    variants: [
                        {id: 0, title: '8'},
                        {id: 1, title: '9'},
                        {id: 2, title: '3'},
                        {id: 3, title: '6'},
                    ]
                },
                {
                    id: 2,
                    question: '5+5',
                    variants: [
                        {id: 0, title: '10'},
                        {id: 1, title: '13'},
                        {id: 2, title: '16'},
                        {id: 3, title: '24'},
                    ]
                },
            ],
        }
    },
    getters: {
        current_exam: (state) => state.current_exam,
        exams: (state) => state.exams,
        current_index: (state) => state.current,
        test(id = 0, state) {
            return state.current_exam.tests[id];
        }
    },
    mutations: {
        START(state) {
            state.index = 0
        },
        NEXT(state) {
            if (this.state.current < state.current_exam.tests.length - 1) {
                state.current++
            }
        },
        BACK(state) {
            if (state.current > 0) {
                state.current--
            }
        },
    },
    actions: {
        start_test: ({commit}) => {
            commit('START')
        },
        next_test: ({commit}) => {
            commit('NEXT')
        },
        back_test: ({commit}) => {
            commit('BACK')
        }
    },
    modules: {}
})
