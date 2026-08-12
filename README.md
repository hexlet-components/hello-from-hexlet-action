Hello from Hexlet action!

[Made with hello World JavaScript action repository](https://github.com/actions/hello-world-javascript-action).

## Зачем это нужно

Простейший GitHub Action: выводит строку `Hello from Hexlet!` и больше ничего.

Именно бесполезность здесь и есть смысл. В курсе по GitHub Actions его
подключают к своему воркфлоу, чтобы разобраться, как экшены вообще
подключаются, не отвлекаясь на то, что экшен делает.

Подключается так:

```yaml
- uses: hexlet-components/hello-from-hexlet-action@release
```

## Usage

```yaml
steps:
  - name: Checkout
    id: checkout
    uses: actions/checkout@v4

  - name: Print Hello from Hexlet
    uses: hexlet-components/hello-from-hexlet-action@release
```
