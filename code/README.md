# Vite React TypeScript Starter

Este é um projeto React com TypeScript usando Vite como bundler.

## Requisitos

- Node.js 18 ou superior
- npm 9 ou superior

## Instalação

```bash
npm install
```

## Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

## Build

Para criar uma versão de produção:

```bash
npm run build
```

## Preview

Para visualizar a versão de produção localmente:

```bash
npm run preview
```

## Deploy

Este projeto está configurado para deploy no Easypanel usando Nixpacks.

### Configuração do Easypanel

1. Selecione "Git" como fonte
2. Configure o repositório e a branch
3. Selecione "Nixpacks" como método de build
4. Não é necessário configurar manualmente os pacotes Nix, pois o arquivo `nixpacks.toml` já está configurado

## Estrutura do Projeto

- `src/` - Código fonte da aplicação
- `public/` - Arquivos estáticos
- `dist/` - Build de produção (gerado após `npm run build`) 