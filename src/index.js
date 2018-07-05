import './common.css';
import Vue from 'vue';
import Hello from './hello.vue'

var app = new Vue({
    el: '#app',
    components: {
        Hello
    },
    template: '<Hello />'
});