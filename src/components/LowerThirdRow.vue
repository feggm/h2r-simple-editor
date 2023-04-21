<template>
  <div class="space-y-10 divide-y divide-gray-900/10">
    <div class="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
      <div class="px-4 sm:px-0">
        <h2 class="text-base font-semibold leading-7 text-gray-900">{{ title }}</h2>
        <!-- <p class="mt-1 text-sm leading-6 text-gray-600">...</p> -->
      </div>

      <form class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div class="px-4 py-6 sm:p-8">
          <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="col-span-full">
              <label :for="`name-${id}`" class="block text-sm font-medium leading-6 text-gray-900"
                >Name</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  :name="`name-${id}`"
                  :id="`name-${id}`"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  v-model="computedName"
                />
              </div>
            </div>
            <div class="col-span-full">
              <label :for="`role-${id}`" class="block text-sm font-medium leading-6 text-gray-900"
                >Funktion</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  :name="`role-${id}`"
                  :id="`role-${id}`"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  v-model="computedRole"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { kebabCase } from 'lodash'
import { computed } from 'vue'

const props = defineProps<{
  title: string
  name?: string
  role?: string
}>()

const emit = defineEmits<{
  (e: 'update:name', name: string): void
  (e: 'update:role', role: string): void
}>()

const id = computed(() => kebabCase(props.title))

const computedName = computed({
  get: () => props.name || '',
  set: (name) => emit('update:name', name)
})

const computedRole = computed({
  get: () => props.role || '',
  set: (role) => emit('update:role', role)
})
</script>
