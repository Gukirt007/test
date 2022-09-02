import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    data: [],
    error: false,
    isLoading: false,
    cards: [],
    darkMode: false,
    filterQuery: null
  },
  getters: {
    getData(state) {
      return state.data
    },
    getCards(state) {
      return state.cards.filter(card => card.visible);
    },
    getFilteredCards(state) {
      const filter = state.filterQuery
      if (!filter) {
        return state.cards.filter(card => card.visible);
      }
      return state.cards.filter((card) => card.title.toLowerCase().includes(filter.toLowerCase()))
    },
    getError(state) {
      return state.error;
    },
    getIsLoading(state) {
      return state.isLoading
    },
    getDarkMode(state) {
      return state.darkMode
    }
  },
  mutations: {
    setError(state, data) {
      state.error = data
    },
    setData(state, data) {
      state.count = data.count
      state.data = data.entries
    },
    setIsLoading(state, data) {
      state.isLoading = data
    },
    setCards(state, data) {
      state.cards = data
    },
    setDarkMode(state, data) {
      state.darkMode = data
    }
  },
  actions: {
    async fetchData(context) {
      if (!navigator.onLine) {
        console.log("Internet connection not working!");
        context.commit('setError', true)
        return;
      }
      if (context.getters.getData.length) {
        console.log("we have data already")
        return;
      }
      context.commit('setIsLoading', true)
      const result = await fetch('https://api.publicapis.org/entries');

      if (!result.ok) {
        console.log("got error while fetching data");
        context.commit('setError', true)
        return;
      }
      context.commit('setError', false)
      const data = await result.json()
      context.commit('setData', data)
      context.commit('setIsLoading', false)

      // console.log(data)
    },

    fetchCards(context) {
      context.commit('setIsLoading', true)

      const cards = [
        {
          id: 1,
          title: 'Request time off',
          visible: true,
          highlight: false,
          icon: "ClockIcon",
          iconForeground: 'text-teal-700',
          iconBackground: 'bg-teal-50',
        },
        {
          id: 2,
          title: 'Benefits',
          icon: "CheckBadgeIcon",
          visible: true,
          highlight: false,
          iconForeground: 'text-purple-700',
          iconBackground: 'bg-purple-50',
        },
        {
          id: 3,
          title: 'Schedule a one-on-one',
          icon: "UsersIcon",
          visible: true,
          highlight: false,
          iconForeground: 'text-sky-700',
          iconBackground: 'bg-sky-50',
        },
        {
          id: 4,
          title: 'Payroll',
          icon: "BanknotesIcon",
          visible: true,
          highlight: false,
          iconForeground: 'text-yellow-700',
          iconBackground: 'bg-yellow-50',
        },
        {
          id: 5,
          title: 'Submit an expense',
          icon: "ReceiptRefundIcon",
          visible: true,
          highlight: false,
          iconForeground: 'text-rose-700',
          iconBackground: 'bg-rose-50',
        },
        {
          id: 6,
          title: 'Training',
          icon: "AcademicCapIcon",
          visible: true,
          highlight: false,
          iconForeground: 'text-indigo-700',
          iconBackground: 'bg-indigo-50',
        },
      ]
      context.commit("setCards", cards)
      context.commit('setIsLoading', false)

    },

    setDarkMode(context, data) {
      context.commit("setDarkMode", data)
    },

    resetErrorState(context, data) {
      context.commit("setError", data)
    },
    filterCards(context, data) {   
      context.state.filterQuery = data
    },
    async highlightCard(context, id){
      const cards = context.getters.getCards;
      const highlightedCard = cards.filter(card => {
        if(card.id == id){
          card.highlight = true
        }else{
          card.highlight = false
        }
        return card;
      });
     await context.commit("setCards" , highlightedCard);

    }

  },
  modules: {
  }
})
