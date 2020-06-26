# titulo

separar em um arquivo de inicializacao e em outro a inicializacao em si, para poder realizar testes sem precisar iniciar o servidor em alguma porta

yarn add jest

yarn jest --init

Usar Jest quando rodar o script "test" no "package.json"? Sim
Ambiente? Node
Percentual do quanto a gente ta cobrindo o código com testes (coverage)? Não (mas depois há a configuração)
Limpar automaticamente os mocks de chamadas e instancias entre todo teste? Sim
Provedor? V8

jest.config.js

bail? True
Parar assim que encontrar uma primeira falha

```js
testMatch: [
    "**/__tests__/**/*.test.js"
]
```

```
yarn test
```

tipos de teste

testes unitarios

testar funcoes puras (dados as mesmas variaveis nao importa o numero de vezes, ela tem sempre o mesmo retorno, nunca tocam em efeitos colaterais, como chamadas a api, alteracoes em banco de dados, nunca tocam em recursos que possam dar errado, sao apenas recursos da propria linguagem, como calculos matematicos, geradores de caminhos)

testes de integracao

sao testes que dai sim testam funcionalidades que possam ser chamadas a api, que nao sao puras, que tem efeitos colaterais.

testes funcionais (pesquisar)

truncate (pesquisar)

factories - factory-girl

faker

coverage report

```
collectCoverage: true,
coverageDirectory: '__tests__/coverage'
collectCoverageFrom: ['src/**']
```

```
__tests__/coverage/lcov-report/index.html
```