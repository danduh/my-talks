### Descriptor.

*I would like to present to you a series of mini-articles, which describe the metaprogramming basics and techniques.
Generally, I will write about the use of certain techniques in JavaScript or TypeScript*

*This is the first article in the series*

So, what is metaprogramming?

![JavaScript / TypeScript meetaprogramming](https://cdn-images-1.medium.com/max/2000/1*4VkjoMqzyLyuXO3kMo9d1Q.png)
> Metaprogramming is a programming technique in which computer programs have the ability to treat other programs as
> their data. It means that a program can be designed to read, generate, analyze or transform other programs, and even
> modify itself while running. In some cases, this allows programmers to minimize the number of lines of code to express a
> solution, in turn reducing development time.

The definition is pretty complex, but the main benefit of metaprogramming is quite clear:
> “… this allows programmers to minimize the number of lines of code to express a solution, in turn reducing development
> time”.

Actually, metaprogramming has so many forms of practical application, that the discussion on “where metaprogramming ends
and the programming begins” might never get an accurate answer.

I have formulated the following rules for myself:

1) Metaprogramming should not define, change or affect the business logic by any means.
2) If the metaprogramming-related code is removed, the program should not be seriously affected.

### Descriptor

In JavaScript, metaprogramming is a fairly new trend, having the descriptor as one of its fundamentals.

Descriptor is a kind of description (meta information) of a given property/method in an object.

Understanding and correctly application of descriptors will allow you a lot more than just create and modify methods or
properties in your objects.

Descriptors are also helpful in understanding how to operate with decorators, which is the topic of my next article.

Let’s take an apartment and describe it as an object, with it’s own properties:

```ts
let apt = {
  floor: 12,
  number: '12B',
  size: 3400,
  bedRooms: 3.4,
  bathRooms: 2,
  Price: 400000,
  amenities: {...}
};
```

Let’s determine which properties can and cannot be changed.

For example, it is impossible to change the floor or the total size of the apartment, while the number of rooms or
bathrooms can be changed.
As a result, we have the following requirements: to make it impossible to change the floor and size properties in apt
objects.

To solve this task, we will need descriptors for each of these properties. To get the descriptor, use the static method
getOwnPropertyDescriptor, which belongs to the Object class*.*

```ts
let descriptor = Object.getOwnPropertyDescriptor(apt, 'floor');
console.log(descriptor);
// Output
//{
//  value: 12,
//  writable:true,
//  enumerable:true,
//  configurable:true
//}
```

Let’s take a closer look at the next:

*value<any>* — this is the value assigned to the floor property at a certain moment

*writable<boolean>* — defines whether it is possible to change the *value*

*enumerable<boolean>* — defines if the floor property can or can’t be enumerated — (more on this later).

*configurable<boolean>* — defines the ability to make changes on the *descriptor* object.

To prevent the floor property from changing after initialisation, it is necessary to set the writable value to false.
The static defineProperty method is used to change descriptor properties. Its input parameters are the object itself (
apt), property name (‘floor’) and the descriptor.

    Object.defineProperty(apt, ‘floor’, {writable: false});

In this case, we pass not the entire descriptor object, but only the writable property having the false value.

Now let’s try to change the floor property _value_:

```ts
apt.floor = 44;
console.log(apt.floor);
// output    12
```

The value has not changed, and when using the ‘use strict’, an error message will be shown:
> *” Cannot assign to read only property ‘*floor*’ of object ‘…*

Now it is impossible to change the value. However, we can still revert the writable to true and modify the floor
property value. To avoid this, we have to set the configurable property value to false

```ts
Object.defineProperty(apt, 'floor', {
  writable: false, configurable: false
})
```

Let’s make one more attempt to change the value of any of the property of our descriptor…

```ts
Object.defineProperty(apt, 'floor', {
  writable: true, configurable: true
});
```

We get the next:
> *“TypeError: Cannot redefine property: floor…”*

Let’s sum it up:

To make the value of the property unchangeable, it is necessary to specify the configuration of this property:
`{writable: false, configurable: false}`.

```typescript
//This can be done when initialising the property:
Object.defineProperty(apt, 'floor',
  {value: 12, writable: false, configurable: false});

//Or after the initialisation:
Object.defineProperty(apt, 'floor',
  {writable: false, configurable: false});
```

In the end, let’s consider an example with a class:

```ts
class Apartment {
  constructor(apt){
    this.apt = apt;
  }

  getFloor(){
    return this.apt.floor
  }
}

let apt = {
  floor: 12,
  number: '12B',
  size: 3400,
  beds: 3.4,
  baths: 2.
};
```

Let’s change the getFloor method:

```ts
Apartment.prototype.getFloor = () => {
  return 44.
};
let myApt = new Apartment(apt);
console.log(myApt);
// output will be changed.
// 44
```

Now let’s change descriptor of the `getFloor` method

```ts
Object.defineProperty(Apartment.prototype, 'getFloor',
  {writable: false, configurable: false});

Apartment.prototype.getFloor = () => {
  return 44.
};
let myApt = new Apartment(apt);
console.log(myApt);

// output will be original.
12
```

### Back to *enumerable.*

```typescript


let otherApt = {
  floor: 12,
  number: '12B',
  size: 3400,
  bedRooms: 3.4,
  bathRooms: 2,
  price: 400000,
  amenities: {}
};

let keys = Object.keys(otherApt);
console.log(keys);
// Output
[ 'floor', 'number', 'size', 'bedRooms',
  'bathRooms', 'price', 'amenities'
]
```

In other words, we can iterate the properties of the object using for … in.
What if one of the properties, e.g. amenities, should not be available for iteration?
This can be done by setting {enumerable: false} in our descriptor

```typescript
Object.defineProperty(otherApt, 'amenities', {enumerable: false});
const keys = Object.keys(otherApt);
console.log(keys);
// Output
// [ 'floor', 'number', 'size', 'bedRooms', 'bathRooms', 'price' ]
```

The amenities property remains a part of the apt.prototype.

```typescript
console.log(otherApt.hasOwnProperty('amenities'));
// Output
// true
```

### Takeaway

I hope this article will shed a little more light on what *descriptor* is and how you can use it.

If you like this article press 👏 clap button ♾️ times.
Feel free to ask a question.
Follow me on [Twitter](https://twitter.com/danduh81) and [Medium](https://medium.com/@danduh) for blog updates.
Thanks a lot for reading!
