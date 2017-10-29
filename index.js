let store = {drivers: [], passengers: [], trips: []}


let driverId = 0
class Driver {
  constructor(name){
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)    
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  passengers(){
    return this.trips().map(trip => {
      return trip.passenger()
    })
  }
}


let passengerId = 0
class Passenger {
  constructor(name){
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)    
  }

  trips(){
    // return all trips driver has taken
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }

  drivers(){
    // return all drivers passenger has gone on trip with
    return this.trips().map(trip => {
      return trip.driver()
    })
  }
}

let tripId = 0
class Trip {
  constructor(driver, passenger){
    if(driver){
      this.driverId = driver.id
    }
    if (passenger){
      this.passengerId = passenger.id
    }
    this.id = ++tripId
    store.trips.push(this)
  }

  passenger(){
    // returns passenger associated with trip
    return store.passengers.find(passenger => { 
      return passenger.id === this.passengerId
     })
  }

  driver(){
    // returns driver associated with trip
    return store.drivers.find(driver => {
      return driver.id === this.driverId
    })
  }
}

