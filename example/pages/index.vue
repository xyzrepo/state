<template>
  <div>
    Works!
    <pre><strong>this.test: </strong>{{ this.test }}</pre>
    <pre><strong>this.$store.get('test.test3'): </strong>{{ $store.get('test.test3.hello') }}</pre>
    <pre><strong>this.test: </strong>{{ this.test }}</pre>
    {{ $store.get('test') }}
    <input v-model="test.test1"/>
     <input v-model="test.test2"/>
      <input v-model="test.test3"/>
    <button @click="$store.saveState($data)">Save State</button>
    <button @click="$store.set('test.test3', 'world')">Set Test3 to {hello: 'world'}</button>
  </div>
</template>

<script>
export default {
  mounted () {
    //this.$store.hello('from mounted');
    //setTimeout(() => this.test2 = 'wowwww', 3000)
  },
  data() {
    return {
      test: {
        test3: 'default'
      }
    }
  },

}
</script>
