const app = Vue.createApp({
    data() {
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
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            this.FName = results[0].name.first
            this.LName = results[0].name.last
            this.Email = results[0].email
            this.Phone = results[0].phone
            this.Address = results[0].location.country
            this.Picture = results[0].picture.large
            
        },
    },
})

app.mount('#app')