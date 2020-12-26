.PHONY: help

help: ## This help text
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := build

ifeq ($(PREFIX),)
    PREFIX := /usr/local
endif

build:
	npm install
	npm run build

install:
	cp ddns-update $(PREFIX)/bin/

clean: ## Clean up
	rm -rf node_modules
	rm ddns-update
