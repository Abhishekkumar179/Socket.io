package main

import (
	"fmt"
	"log"
	"net/http"
	"os/exec"

	socketio "github.com/googollee/go-socket.io"
	// contr "chatsocketserver/controller"
)

func main() {
	server, err := socketio.NewServer(nil)
	if err != nil {
		log.Fatal(err)
	} else {
		server.OnConnect("/", func(s socketio.Conn) error {
			s.SetContext("")
			fmt.Println("connected:", s.ID())
			return nil
		})

		server.OnEvent("/", "notice", func(s socketio.Conn, msg string) {
			fmt.Println("notice:", msg)
			s.Emit("reply", "have "+msg)
			fmt.Println(msg, "message")
		})
		server.OnEvent("/chat", "msg", func(s socketio.Conn, msg string) string {
			s.SetContext(msg)
			fmt.Println(msg, "message")
			return "recv " + msg
		})
		go server.Serve()
		defer server.Close()
		log.SetFlags(log.Lshortfile)
		// newServerUser:= contr.NewServerUser()
		http.Handle("/socket.io/", server)
		http.Handle("/", http.FileServer(http.Dir("./static/")))
		// go newServerUser.Controller()
		log.Println("Listening on port... :8000")
		err := exec.Command("xdg-open", "http://localhost:8000").Run()
		if err != nil {
			log.Fatal(err)
		}
		log.Fatal(http.ListenAndServe(":8000", nil))
	}
}
