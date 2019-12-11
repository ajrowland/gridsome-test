<template>
  <Layout>
    <h1>Unilever</h1>
    <ul>
      <li v-for="item in $context.pages" v-bind:key="item">
        <a :href="item.path" :title="item.pageTitle || 'No title'">{{ item.pageTitle || 'No title' }}</a>
      </li>
    </ul>
  </Layout>
</template>