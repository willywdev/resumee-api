package main

import (
	"log"
	"net/http"
)

func main() {
	handleRequest()
}

func home(w http.ResponseWriter, r *http.Request) {
	print("Welcome!\n")
	print("Endpoint hit: Home\n")
}

func handleRequest() {
	http.HandleFunc("/", home)
	log.Fatal(http.ListenAndServe(":10000", nil))
}