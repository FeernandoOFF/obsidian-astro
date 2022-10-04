---
draft: false
title: "Http"
publishDate:  Sat 03-09-2022
tags: 
- tech
- protocols
- todo
---
Status: #idea
Tags: [[tech]]

# HTTP
Http stands for (Hypertext transfer [[protocol]]) which is the language for the [[web]]

## How HTTP works
- Request response model
	- You have to request information to the [[server]] in order to get a response
	- **TIME << Data** It takes more to response but you want to make sure that the page is complete
- It uses [[TCP]] protocol for the transmission and stability 

## Simple HTTP request/ response
- You can create a server with you preferred programming language
- You can send a request from different clients such as:
	- curl
	- NetCat
```
GET / HTTP 1.1
Host: 127.0.0.1
X-Header-1: custom-header
/n
```

We can identify:
- The method (See: [[HTTP Methods]])
- The path ("/")
- Protocol 
- Host
- Custom headers


## References

[Web security](https://www.youtube.com/watch?v=80VviDER96I&list=WL&index=77&t=1s)