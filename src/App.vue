<template>
  <div id="app">
    <header>
    <div class="title siteTitle"><a href="/task_manager_spa">Mr. Task Manager</a></div>
    <nav>
      <ul>
        <li><router-link to="/task_manager_spa">本日のタスク</router-link></li>
        <li><router-link to="/task_manager_spa/add">タスク一覧・新規登録</router-link></li>
        <li><router-link to="/task_manager_spa/download">データダウンロード</router-link></li>
      </ul>
    </nav>
    </header>
    <main>
    <router-view>
    </router-view>
    </main>
    <footer>
      Copyright - Keita Inoue, 2021 All Rights Reserved.
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