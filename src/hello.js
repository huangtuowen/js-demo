import './common.css';
import './hello.css';
import Vue from 'vue/dist/vue.esm.js';

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});