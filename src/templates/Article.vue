<template>
  <Layout>
    <h1>{{ $context.pageTitle }}</h1>

    <section v-for="item in $context.paragraph" v-bind:key="item">
      <h2>{{ item.heading }}</h2>

      <div v-html="item.body" />
    </section>
  </Layout>
</template>