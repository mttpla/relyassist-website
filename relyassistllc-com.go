//Copyright 2016 Matteo Paoli - mttpla@gmail.com

package hello

import (
    "fmt"
    "net/http"
)

func init() {
    http.HandleFunc("/", handler)
}

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "RelyAssist LLC - web site - 2016-12-16")
}
