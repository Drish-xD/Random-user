const app = Vue.createApp({
    data () {
        return {
            Title: 'Random User Generator',
            FName: 'Lorem',
            LName: 'Ipsum',
            Email: 'tempmail@mail.com',
            Phone: '1234567890',
            Address: 'lorem ipsium',
            Picture: 'https://randomuser.me/api/portraits/lego/5.jpg',
        }
    },
})

app.mount('#app')