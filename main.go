package main

import (
	"fmt"
	"github.com/dolze0724/dolze-backend/cmd"
	"os"

	"github.com/urfave/cli/v2"
)

func main() {
	app := &cli.App{
		Name:  "myapp",
		Usage: "Start the server application",
		Commands: []*cli.Command{
			{
				Name:   "start",
				Usage:  "Start the server",
				Action: cmd.StartServer,
			},
		},
	}

	if err := app.Run(os.Args); err != nil {
		fmt.Printf("Error running app: %v\n", err)
		os.Exit(1)
	}
}
