---
draft: false
title: "Swift"
publishDate:  Wed 12-10-2022
lang: en
tags:
- idea
- tech
- ios
---
# Swift
## Basics
- Naming conventions 
	- camelCasing
	- kebab-casing
	- snake_case
- Comments (`//`)
	- `CMD + /`
	- `/* multiline comment */`
- Playgrounds
	- File -> new -> Playground
		- Blank
		- Single View
		- Map
		- Game
- Print
	- Interpolation `"STRING..\(Code..) Continues"`
- Variables
	- `var` -> regular variable
	- `let` -> Constant variable
## Data types

#### Type Inference
You don't have to type the type that a variable will hold when you assign a value when you create it -> swift automatically infers that

#### Nil
#### String
Only with **double quotes**
#### Int
Complete numbers
- Methods
	- Random (`.random(in: 1...5)`)

#### Float
#### Double
#### Bool

### Optionals
An optional data type can be defined by adding `?` to the data type of your variable - this means that the variable can be `nil` (Empty)

```swift
var hardness : String?
```

### Arrays 
A bunch of items separated by commas and you can access a value from his Index

**Declaration:** 
```swift
let eggTimes = [5,8,12]
```

Type: `[Int]` - This way we can type a variable
Literal: `[]`

### Dictionaries
Key-value pair  and you can access his value with the key in brackets

 **Declaration:** 
```swift
let eggTimes : [String:Int ]= ["Soft":5,"Medium":8,"Hard":12]

eggTimes["Soft"] //5
```




### Operators
`a...b` All including the highest
`a..<b` But no B
`..b` Up to B

```swift
object.value! //Will stop execution if property not found
```


### Functions
Syntax: 
```swift
 func nameOfFunction(parameterName: DataType,secondParameter:DataType)
 {
		//
 }
```

Call: 
```swift
	nameOfFunction(parameterName: Value)
```

### Conditionals
```swift
if(){
	//
}if else{
	//
}else{
 //
}
```


```swift
switch var{
	case "value":
		//
	case "z":
		//
	default:
		//
}
```







## Shortcuts
Timer
```swift
timer = Timer.scheduledTimer(timeInterval: 1, target: **self**, selector: **#selector**(updateTimer), userInfo: **nil**, repeats: **true**)
```

Play an audio
```swift
import AVFoundation


let url = Bundle.main.url(forResource: "alarm_sound", withExtension: "mp3")
  
player = try! AVAudioPlayer(contentsOf: url!) 
player.play()
```
## References