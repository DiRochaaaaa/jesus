#!/bin/bash
# Script para mover os arquivos da pasta code/ para a raiz
cp -r code/* .
cp -r code/.* . 2>/dev/null || true
echo "Arquivos movidos com sucesso!"
ls -la 