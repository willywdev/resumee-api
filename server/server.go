package server

import (
	"log"
	"net/http"
)

func Home(w http.ResponseWriter, r *http.Request) {
	print("Welcome!\n")
	print("Endpoint hit: Home\n")
}

func HandleRequest() {
	http.HandleFunc("/", Home)
	log.Fatal(http.ListenAndServe(":10000", nil))
}
