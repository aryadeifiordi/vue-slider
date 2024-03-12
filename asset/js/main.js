const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            immagini: [
                './asset/img/jim1.jpg',
                './asset/img/jim2.jpg',
                './asset/img/jim3.jpg',
                './asset/img/jim4.jpg'
            ],
            indiceCorrente: 0
        };
    },
    computed: {
        immagineCorrente() {
            return this.immagini[this.indiceCorrente];
        }
    },
    methods: {
        precedente() {
            this.indiceCorrente = (this.indiceCorrente - 1 + this.immagini.length) % this.immagini.length;
        },
        successiva() {
            this.indiceCorrente = (this.indiceCorrente + 1) % this.immagini.length;
        }
    }
});

app.mount('#app');


