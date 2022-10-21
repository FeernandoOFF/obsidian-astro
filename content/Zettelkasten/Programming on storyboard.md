---
draft: false
title: "Programming on storyboard"
publishDate:  Tue 11-10-2022
lang: en
tags:
- idea
- ios
- storyboard
---
# Programming on storyboard

### Project  structure

- `Main.storyboard` -> Visual Editor for our code (View)
- `ViewController.switf` -> Define the logic for the app (Controller)
- `Launchscreen.storyboard` -> Shows when app is loading

## Interface

- #### Show as  (Option at the bottom left )
	- Different devices
	- Dark/Light
	- Rotation

- #### Object library - (Option top right) 
	-  Drag Components to the view
	- Examples
		- Label
		- Image
		- Sliders
		- Buttons


### Tree elements
- View -> Kind of the `body` in HTML
- Label
- Image





## Reactive data / Programming
- How do we add user interaction? 
- How do we update the UI based on user interaction?

Up to this point we've only made `display only` apps - which as the name suggests only displays a static UI, So the next thing is 


### Assistant  (`ctrl + opt + cmd + enter`)
The assistant is the way we can pair the **UI** with the **code**  and it enable us to create references of  UI Elements by holding the `ctrl` key and dragging it to out code. By doing this you'll be able to create a reference to:

`IB`-> Interface builder
- UI Elements(`@IBOutlet`)
	- We bind a variable to a element and we can change his values by modifying the object properties
- Actions(`@IBAction`)
	- This will create a function which gets triggered when some condition is meet, for example a tap, slide, etc
	- To map more than one button to a function you can click and drag the circle besides the function to the button you want to link to 



### Responsive UI
- How do we make our UI responsive for all screens?

For testing different screen sizes, phone models, orientation and even dark mode - we can use the Interface builder (the bottom part) to change all of this properties


Parts of the "view"
	- Safeareas 
		- Safe areas are the spicing between the home button, status bar
	- Margins
	- Super View 
		- Super View is the whole screen, going beyond Safeareas

#### Responsive interfaces

- Constraints 
	- Atribute panel
	- Relative to other element
	- Operations `equals` - `higher or equal`
- Alignment 
	- Horizontally
	- Vertically
- UIView
	- They are like `html divs` which can contain one or more items inside them
	- Add a new container
		- Object library => UIView
		- Editor -> embed in -> view
		- Attribute panel (`last item`) embed in
- Stack views
	- Embed in
	- Stack views are like flex containers in which you can assign directions and spicing 





- How do we integrate with API?
- How do we integrate with the app DB?




## References
