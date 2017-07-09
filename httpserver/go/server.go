package main

import (
	"log"
	"net/http"
)

func helloServer(w http.ResponseWriter, req *http.Request) {
	// w.Header().Set("Content-Type", "text/plain")
	w.Write([]byte("hello, world!\n"))
}

func main() {
	// runtime.GOMAXPROCS(1)
	http.HandleFunc("/", helloServer)
	http.ListenAndServe(":8080", nil)
	log.Println("Serving at http://127.0.0.1:8080/")
}
