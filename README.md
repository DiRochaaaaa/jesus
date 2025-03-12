# Jesus

Aplicação web desenvolvida com React, TypeScript e Vite.

## Estrutura do Projeto

- `code/` - Contém todos os arquivos do projeto
  - `src/` - Código fonte da aplicação
  - `public/` - Arquivos estáticos
  - `dist/` - Build de produção (gerado após `npm run build`)

## Desenvolvimento

Para iniciar o desenvolvimento:

```bash
cd code
npm install
npm run dev
```

## Build

Para criar uma versão de produção:

```bash
cd code
npm run build
```

## Deploy no Easypanel

### Configuração

1. No Easypanel, selecione "Git" como fonte
2. Configure o repositório: `https://github.com/DiRochaaaaa/jesus.git`
3. Branch: `main`
4. **Importante**: Configure o "Build Path" como `code`
5. Selecione "Nixpacks" como método de build

O arquivo `nixpacks.toml` na raiz do repositório já está configurado para direcionar o Nixpacks para a pasta `code/`. 