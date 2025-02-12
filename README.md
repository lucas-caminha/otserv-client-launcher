otserv-client-launcher é um aplicativo desenvolvido com Electron para gerenciar o client de open tibia servers. Ele permite iniciar o jogo, verificar o status do servidor, exibir informações do servidor e atualizar o cliente quando uma nova versão estiver disponível.

Funcionalidades
Iniciar o jogo
Verificar o status do servidor
Exibir informações do servidor
Exibir os 5 melhores personagens
Atualizar o cliente para a versão mais recente
Estrutura do Projeto
main.js: Arquivo principal do Electron que cria a janela do aplicativo e gerencia eventos IPC.
preload.js: Script que é carregado antes de outros scripts na página.
renderer.js: Script que gerencia a interface do usuário e a lógica do frontend.
index.html: Página HTML principal do aplicativo.
style.css: Arquivo de estilos CSS para a interface do usuário.
config.js: Arquivo de configuração com informações do servidor.
assets: Pasta contendo ícones e outros recursos estáticos.
Instalação
Clone o repositório:

git clone https://github.com/seu-usuario/otserv-client-launcher.git cd otserv-client-launcher

Instale as dependências:

npm install

Configuração
O arquivo config.js contém as configurações do servidor. Aqui está um exemplo de como configurá-lo:

const config = {
  serverName: 'otserver-name',
  version: '13.40',
  serverType: 'PvP',
  experienceRate: 3,
  skillRate: 2,
  magicLevelRate: 1,
  backgroundImage: 'path/to/background-image.jpg',
  websiteUrl: 'https://yourwebsite'
};

serverName: Nome do servidor.
version: Versão atual do cliente.
serverType: Tipo de servidor (PvP, PvE, etc.).
experienceRate: Taxa de experiência.
skillRate: Taxa de habilidades.
magicLevelRate: Taxa de nível mágico.
backgroundImage: Caminho para a imagem de fundo.
websiteUrl: URL do site do servidor.

Uso
Inicie o aplicativo:

npm start

A interface do launcher será exibida, permitindo que você inicie o jogo, verifique o status do servidor e atualize o cliente.

Atualização do Cliente
Em desenvolvimento

Estrutura de Arquivos
otserv-client-launcher/ ├── assets/ │ └── icons/ │ └── otserv-client-launcher.ico ├── config.js ├── index.html ├── main.js ├── preload.js ├── renderer.js ├── style.css └── .gitignore

Geração de Build
Para gerar uma build do aplicativo, você pode usar o electron-packager ou o electron-builder. Aqui está um exemplo de como usar o electron-packager:

Instale o electron-packager:

npm install electron-packager --save-dev

Adicione um script de build no package.json:

"scripts": {
  "start": "electron .",
  "build": "electron-packager . otserv-client-launcher --platform=win32 --arch=x64 --out=dist --icon=assets/icons/otserv-client-launcher.ico --overwrite"
}

Execute o script de build:

npm run build

Isso irá gerar a build do aplicativo na pasta dist.

Contribuição
Fork o projeto
Crie uma nova branch (git checkout -b feature/nova-funcionalidade)
Commit suas mudanças (git commit -am 'Adiciona nova funcionalidade')
Push para a branch (git push origin feature/nova-funcionalidade)
Crie um novo Pull Request