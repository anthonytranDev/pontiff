class Cat {
  constructor() {
    this.state = {
      hungry: false,
    }
  }

  getFood() {
    console.log('nom nom')
  }

  getHungryState() {
    console.log(this.state.hungry)
  }
}

export default Cat
