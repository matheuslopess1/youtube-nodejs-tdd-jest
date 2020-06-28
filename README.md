# Testes no NodeJS aplicando TDD com Jest | Diego Fernandes

Repositório com conteúdo do [vídeo referente ao título](https://www.youtube.com/watch?v=2G_mWfG0DZE)

## Conteitos

- É recomentado separar a inicialização do servidor em uma arquivo separado da aplicação, para poder realizar testes sem precisar iniciar o servidor como um todo.
- O módulo utilizado foi o [JEST](https://jestjs.io/)
- O jest tem a necessidade de ter um arquivo de configuração por trás, com isso utilizamos o comando ```yarn jest --init```
- Para otimizar os testes, na configuração utilizamos:
  - Usar Jest quando rodar o script "test" no "package.json"? Sim
  - Ambiente? Node
  - Percentual do quanto a gente ta cobrindo o código com testes (coverage)? Não (mas depois há a configuração)
  - Limpar automaticamente os mocks de chamadas e instancias entre todo teste? Sim
Provedor? V8

**jest.config.js**

- bail? True (Parar assim que encontrar uma primeira falha)
- testMatch: ["**/__tests__/**/*.test.js"]

**Como rodar os testes?**

```yarn test```

### Tipos de Testes

**Testes Unitários**

Tem como foco testar funções puras, onde dados as mesmas variaveis, não importa o número de vezes, ela tem sempre o mesmo retorno, ou seja, nunca tocam em efeitos colaterais, como chamadas a api, alterações em banco de dados, nunca tocam em recursos que possam dar errado, são apenas recursos da própria linguagem, como cálculos matematicos, geradores de caminhos e etc.

**Testes de Integração**

São testes que testam funcionalidades, como chamadas a api, ou seja, chamadas que não são puras, aquelas que realmente tem efeitos colaterais.

**Testes Funcionais**

O teste funcional, ou de caixa-preta, é baseado nos requisitos funcionais do software. Esta técnica não está preocupada com o comportamento interno do sistema durante a execução do teste, mas sim com a saída gerada após a entrada dos dados especificados. Tal tipo de teste é indicado para detectar erros de interface, de comportamento e/ou desempenho, podendo ser aplicada em todas as fases de testes (unidade, integração, sistema e aceitação). Uma dificuldade dessa técnina, por questões de tempo e recurso, é testar todas as entradas possíveis. Essa técnica de teste apresenta-se como necessária durante o desenvolvimento de um sistema, contudo, por sua natureza, mostra-se insuficiente para identificar certos riscos num projeto de software.

*Fonte: [demoiselle/sourceforge](http://demoiselle.sourceforge.net/process/ds/1.2.3-BETA1/ProcessoDemoisellePlugin/guidances/supportingmaterials/tecnicasTestes_8AB32ED1.html)*

**Truncate**

Comando que tem como funcionalidade esvaziar o conteúdo de uma tabela. No caso desta aplicação, o comando está se aplicando a todas as tabelas geradas, apagando em todas através de uma iteração.

**Factories**

No setor de testes, age como um facilitador que entrega um objeto pronto, como uma entidade, podendo também ser customizado para de adequar ao teste.

*Foi utilizado o [factory-girl](https://github.com/stalniy/factory-girl)*

**Faker**

Agregando as factories, faker cria dados aleatórios para preencher os atributos de uma entidade, assim não nos preocupamos em ter que preencher dados.

*Foi utilizado o [faker.js](https://github.com/Marak/faker.js)*

**Coverage Report**

Gera um conteúdo após o script de teste ser finalizado, mostrando informações mais profundas sobre os testes aplicados, como quais arquivos foram testados.

```json
{
  "collectCoverage": true,
  "coverageDirectory": "__tests__/coverage",
  "collectCoverageFrom": ["src/**"]
}
```

No caso, um arquivo html organizado, em nossa configuração se encontraria em:

```__tests__/coverage/lcov-report/index.html```