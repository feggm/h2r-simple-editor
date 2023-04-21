<template>
  <main class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
    <LowerThirdRow
      v-for="(lowerThird, index) in lowerThirds"
      :key="lowerThird.id"
      :title="lowerThird.label || String(index)"
      :name="lowerThird.line_one"
      :role="lowerThird.line_two"
      @update:name="
        updateLowerThird({ lowerThirdId: lowerThird.id, attribute: 'line_one', text: $event })
      "
      @update:role="
        updateLowerThird({ lowerThirdId: lowerThird.id, attribute: 'line_two', text: $event })
      "
    />
    <SimpleAlert
      :open="!isConnected"
      title="Keine Verbindung"
      text="Du scheinst keine Verbindung zum H2R Server zu haben. Bitte überprüfe deine Netzwerkverbindung."
      button-label="Seite neu laden"
      @button-click="reload"
    />
  </main>
</template>

<script setup lang="ts">
import LowerThirdRow from './components/LowerThirdRow.vue'
import { lowerThirds, isConnected } from './api/apiData'
import { updateLowerThird } from './api/updateLowerThird'
import SimpleAlert from './components/SimpleAlert.vue'

const reload = () => location.reload()
</script>
