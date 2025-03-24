# 1. Usar a imagem oficial do Node.js como base
FROM node:18-alpine

# 2. Definir o diretório de trabalho dentro do container
WORKDIR /app

# 3. Copiar o package.json e o package-lock.json para o container
COPY package.json package-lock.json ./

# 4. Instalar as dependências
RUN npm install

# 5. Copiar todos os arquivos do projeto para o container
COPY . .

# 6. Expor a porta 3000 para acessar a aplicação
EXPOSE 3000

# 7. Comando para iniciar o Next.js no modo de desenvolvimento
CMD ["npm", "run", "dev"]
