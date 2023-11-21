(__TODO__: A Digital Pets Forum)

# Jiaqi Ruan

## Overview

Everyone loves pets! But instead of having a real pet which you have to worry about all the messy stuff related to taking care of a pet, why not just have a digital, virtual pet? In this website, you can choose your own digital pet and enjoy the company of pets without doing actual petkeeping work! 

No only can you choose pets from pre-set base, you can also create your own pet by uploading photos and customize everything about the pet! After you create or choose a pet, you can interact with it by many ways. The pet will be "Hungry" overtime so you need to feed them. The pet will get "Bored" so you need to play with them. Also, you can check other's pet and interact with them too! 

## Data Model

The application will store Users, Pets, Foods, Toys

* Each User can have one or more pets. Each user will have coins that they can buy Foods and Toys (and also Pets of course) from virtual store. Each user will have two arrays representing the Foods and Toys that the User is currently holding.
* Each Pet have its basic stats (name, species, photos, age...) and also virtual pet stats. A hunger stat representing how hungry the pet is, and a mood stat representing the mood of the pet. And of course, the owner who owns them.
* Each Food have a price in coins and the amount of hunger stat it can increase. 
* Each Toy have a price in coins and the amount of mood stat it can increase.

An Example User:

```javascript
{
  username: "jiaqiruan",
  hash: // a password hash,
  coins: 20 //number of coins that the user process
  pets: //an array of references to Pet documents,
  foods: //an embedded array of Food,
  toys: //an embedded array of Toy,
}
```

An Example Pet:

```javascript
{
  name: "kitty",//name of the pet
  age:3,
  category:"cat",
  photo: "",//link of the photo
  hunger: 80,//hunger stat, maximum 100
  mood: 60,//mood stat, maximum 100
  owner://reference to the User document,
}
```
An Example Food:

```javascript
{
  price: 100,
  fullness: 10,
}
```
An Example Toy:

```javascript
{
  price: 20,
  joyness: 10,
}
```

## [Link to Commented First Draft Schema](db.mjs) 


## Wireframes

(__TODO__: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc.)

/pets - for showing all pets
![pets](documentation/pets.png)

/pets/view - page for viewing a specific pet

![pets view](documentation/pet_view.png)

/pets/create - page for creating a pet
![pet create](documentation/pet_create.png)

/pets/choose - page for buying a pet
![pet choose](documentation/pet_choose.png)

/user - page for user profile
![user](documentation/user.png)

/toy - page for buying toys
![toy](documentation/toy.png)

/food - page for buying foods
![food](documentation/food.png)

## Site map

[sitemap](documentation/sitemap.png)
## User Stories or Use Cases

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can create a new pet 
4. as a user, I can buy a pet from the store
5. as a user, I can buy foods from the store
6. as a user, I can buy toys from the store
7. as a user, I can feed and give toy to my own pet
8. as a user, I can look at other's pet and play with them

## Research Topics

* (4 points) ui-material
    * using ui-material core to create simply ui layout
* (5 points) Redux
    * Redux is a great tool for managin states, (in my case the user's coins, the pets' hunger and mood stats), so I decided to learn it and use it
* (5 points) React
    * used React as the frontend framework; it's a challenging library to learn, so I've assigned it 5 points

10 points total out of 8 required points (___TODO__: addtional points will __not__ count for extra credit)


## [Link to Initial Main Project File](app.mjs) 

(__TODO__: create a skeleton Express application with a package.json, app.mjs, views folder, etc. ... and link to your initial app.mjs)

## Annotations / References Used

https://www.youtube.com/watch?v=aibtHnbeuio&t=124s
https://github.com/adrianhajdin/project_mern_memories/tree/PART_1_and_2

## Milestone 3

progress: Using React, Redux and material-ui to create a fully interactive website of upload pets, deleting pets and feeding pets. Please see the client folder for all the code for the front-end React and Redux FrameWork.