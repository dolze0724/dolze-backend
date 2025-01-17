package cmd

import (
	"github.com/dolze0724/dolze-backend/internal"
	"github.com/gorilla/mux"
	"github.com/urfave/cli/v2"
	"log"
	"net/http"
)

func runServer() error {
	r := mux.NewRouter()
	internal.RegisterRoutes(r)

	log.Printf("Starting server on %s", Cfg.Server.Port)
	return http.ListenAndServe(":"+Cfg.Server.Port, r)
}

func StartServer(c *cli.Context) error {
	return runServer()
}
