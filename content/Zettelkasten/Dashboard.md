---
draft: true
title: "Dashboard"
publishDate:  22-10-2022
lang: en
tags:
- admin
---
# Dashboard

This page allows me to manage what's going on with my life


```dataviewjs
dv.span("** Habit and mood tracking**") 
const calendarData = {
    year: 2022,  // (optional) defaults to current year
    colors: {    // (optional) defaults to green
        blue:        ["#8cb9ff", "#69a3ff", "#428bff", "#1872ff", "#0058e2"], // first entry is considered default if supplied
        green:       ["#c6e48b", "#7bc96f", "#49af5d", "#2e8840", "#196127"],
    },
    showCurrentDayBorder: true, // (optional) defaults to true
    defaultEntryIntensity: 4,   // (optional) defaults to 4
    intensityScaleStart: 10,    // (optional) defaults to lowest value passed to entries.intensity
    intensityScaleEnd: 100,     // (optional) defaults to highest value passed to entries.intensity
    entries: [],                // (required) populated in the DataviewJS loop below
}

//DataviewJS loop
for (let page of dv.pages('"Journal"').where(p => p.habit)) {
    
    calendarData.entries.push({
        date: page.file.name,    
        intensity: page.mood * 10,
        content: page.habit,          
        color: "green",
    })
}

renderHeatmapCalendar(this.container, calendarData)
```



## Projects 

![[Zettelkasten/Project management]]


## Books 

![[Zettelkasten/Bookshelve]]