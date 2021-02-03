### General Architecture / Needs

1. **Will need a class to represent a User and all of the user's data (ex. name, age, etc.)**

> - User class needs to have the ability to store data, retrieve it, and change it
> - Needs to have the ability to notify the rest of the app when data has changed
> - Needs ability to persist data to an outside server, and the ability to retrieve the data

2. **We will be using an Extraction Approach for this**

> - We will build a 'mega' User class with tons of methods
> - Then we will Refactor User class to utilize composition
> - Then we will Refactor User to be a reusable class that can represent any piece of data, not just a User
> - In essence we are Extracting the core functionality into abstractions that are very flexible and can be used for a lot of different use cases from our very specific starting example of a User.

3. **User class specifics**

- private data: UserProps
  > Object to store info about a particular user
- get(propName:string): (string | number)
  > Gets a single piece of info about this user (name/age)
- set(update: UserProps): void
  > Changes info about this user
- on(eventName:string, callback: ()=>{})
  > Registers an event handler with this object, so other parts of the app know when something changes
- trigger(eventName:string):void
  > Triggers an event to tell other parts of the app that something has changed
- fetch(): Promise
  > Fetches some data from the server about a particular user
- save(): Promise
  > Saves some data about this user to the server
