WITH_ENV = set -a && . ./.env.test && set +a &&

test:
	$(WITH_ENV) go test -v ./...
