function getRandomValue(min, max) {
    return Math.floor( Math.random() * (max - min)) + min
}
 
const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100, 
            monsterHealth: 100
        }
    },
    methods: {
        attackMonster() {
        // Calculate random numer between 12 and 5
        const attackValue = getRandomValue(5, 12)
        this.monsterHealth -= attackValue
        this.attackPlayer()
        }, 
        attackPlayer () {
        const attackValue = getRandomValue(8, 15)
        this.playerHealth -= attackValue
        }
    }
})

app.mount('#game')

