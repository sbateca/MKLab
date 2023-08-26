override SHELL := /bin/bash

.PHONY: start-mock-api
start-mock-api:
	json-server --watch ./api/db.json --port 8888
