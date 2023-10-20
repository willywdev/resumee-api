package main

import (
	"github.com/willywdev/resumee-api/server"
)

func main() {
	print("Before Server Start. Waiting ...")
	server.HandleRequest()
}
