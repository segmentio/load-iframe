#
# Binaries.
#

ZUUL = ./node_modules/.bin/zuul

#
# Files.
#

SRCS = index.js
TESTS = test/index.test.js

#
# Task arguments.
#

BROWSER_NAME ?= chrome
BROWSER_VERSION ?= latest
PORT ?= 0
ZUUL_ARGS = --ui mocha-bdd

#
# Tasks.
#

# Install node dependencies.
node_modules: package.json $(node_modules/*/package.json)
	@npm install

# Remove temporary files and build artifacts.
clean:
	rm -rf *.log build
.PHONY: clean

# Remove temporary files, build artifacts, and vendor files.
distclean: clean
	@rm -rf components node_modules
.PHONY: distclean

# Run tests in a browser. Defaults to a local browser.
# To run on Sauce Labs, set SAUCE_USERNAME and SAUCE_ACCESS_KEY.
ifdef SAUCE_USERNAME
test-browser: ZUUL_ARGS += --browser-name $(BROWSER_NAME) --browser-version $(BROWSER_VERSION)
else
test-browser: ZUUL_ARGS += --local $(PORT)
endif
test-browser: node_modules
	@$(ZUUL) $(ZUUL_ARGS) -- $(TESTS)
.PHONY: test-browser

# Run tests in PhantomJS.
test-phantom: node_modules
	@$(ZUUL) --phantom $(ZUUL_ARGS) -- $(TESTS)
.PHONY: test-phantom

# Test shortcut.
test: test-phantom
.PHONY: test
.DEFAULT_GOAL = test
