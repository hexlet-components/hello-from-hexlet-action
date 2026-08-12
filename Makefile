install:
	npm i

lint:
	pnpm --silent run lint
	pnpm --silent run format:check

test:
	pnpm --silent test

# dist/ коммитится в репозиторий: именно его запускает GitHub при вызове
# экшена. check-dist.yml сверяет собранное с закоммиченным.
bundle:
	pnpm --silent run bundle
