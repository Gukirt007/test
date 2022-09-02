
<template>
  <div
    class="maxHeight scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2  overflow-hidden rounded-lg bg-white dark:bg-black shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0
    ">
    <div v-for="(card, cardIdx) in cards" :key="cardIdx"
      :class="['rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative group bg-white dark:bg-black p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500']">
      <div>
        <span :class="[card.iconBackground, card.iconForeground, 'rounded-lg inline-flex p-3 ring-4 ring-white']">
          <component :is="card.icon" class="h-6 w-6" aria-hidden="true" />
        </span>
      </div>
      <div class="mt-8">
        <h3 class="text-lg text-black dark:text-white font-medium">
            <span :class="[card.highlight ? 'border-4 rounded-md border-sky-800 dark:border-white' : '' , 'absolute inset-0']" aria-hidden="true" />
            {{ card.title }}
        </h3>
        <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit
          repellendus qui ut at blanditiis et quo et molestiae.</p>
      </div>
      <span v-on:click="deleteCard(card.id)" class="cursor-pointer absolute top-6 right-6 text-gray-300 "
        aria-hidden="true">
        <XMarkIcon  class="block h-6 w-6" aria-hidden="true" />
      </span>
    </div>
  </div>
</template>

<script >
import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'

export default {
  name: "CardView",
  components: { AcademicCapIcon, BanknotesIcon, CheckBadgeIcon, ClockIcon, ReceiptRefundIcon, UsersIcon, XMarkIcon },
  computed: {
    cards(){
      return this.$store.getters.getCards
    }
  },
  methods:{
    deleteCard(id){
      this.cards.filter((card) => {
        if(card.id == id){
          card.visible = false
        }
      })
    } 
  },
  mounted(){  
    // this.$store.dispatch('fetchCards')
  },
}
</script>