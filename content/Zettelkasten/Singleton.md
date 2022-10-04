 Mon (15)-08-2022-23:07
Status: #idea
Tags: [[programming]] [[tech]] [[system-design]]

# Singleton
The singleton pattern is part of the [[SOLID]] standard and it means that only **one instance of a class should be created and used across the app**

We can use the singleton pattern by implementing our own constructor. ie

Instead of having 
```js
new MyVideoPlayer('things')
```

We could have something like:
```js
MyVideoPlayer.create('things')
```

in which the `create` method returns the same instance once one is created




## References
[Singleton platzi](https://platzi.com/clases/2880-typescript-poo/47265-singleton-contructor-privado/)
