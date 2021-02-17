<template>
  <div id="app">
    <header>
    <div class="title siteTitle"><a href="index.html">Mr. Task Manager</a></div>
    <nav>
      <ul>
        <li><router-link to="/">本日のタスク</router-link></li>
        <li><router-link to="/Add">タスク一覧・新規登録</router-link></li>
        <li><router-link to="/Download">データダウンロード</router-link></li>
      </ul>
    </nav>
    </header>
    <main>
    <router-view>
    </router-view>
    </main>
    <footer>
      <a href="https://twitter.com/KeitaBangkok">&copy;いのっち</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "./css/destyle.css";
@import "./css/style.css";

</style>