Projeto de teste para disciplina de Desenvolvimento de Aplicações Móveis

## Configuração do ambiente

Siga os passos abaixo para configurar seu ambiente de desenvolvimento no Windows.
Para levantar o ambiente no sistema operacional Linux siga a 
[documentação oficisal](https://reactnative.dev/docs/environment-setup)

### Instalar o gerenciador de pacotes Chocolatey

O Chocolatey é um gerenciador de pacotes do Windows que nos permite instalar softwares auxiliares 
e dependências utilizadas no nosso ambiente de desenvolvimento. Para instalar o Chocolatey, abra o Power Shell com permissão de administrador e execute:

    Set-ExecutionPolicy Bypass -Scope Process -Force [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))


### Instalar Dependências

Com a ajuda do Chocolatey, iremos instalar duas dependências necessárias para a execução do código produzido com o React Native. As dependências são o NodeJs que é o software que provê o ambiente para a execução do JavaScript e uma série de ferramentas úteis. Junto com o NodeJS será instalado a React Native CLI (Command Line Interface) que possibilita a execução de comandos para 
gerar pacotes de código e executar testes em dispositivos virtuais e físicos.

    choco install -y nodejs.install openjdk8

### Instalar o Android Studio

O Android Studio é uma IDE completa para o desenvolvimento de aplicativos nativos para Android. Nós
não iremos utilizar a IDE em si, e sim um conjunto de ferramentas que a IDE provê para nos auxiliar
no desenvolvimento. A IDE vem junto com o SDK manager, que é uma ferramenta que facilita a instalação de versões do SDK do Android e o AVD Manager (Android Virtual Device Manager) que é uma ferramenta que permite a criação e execução de máquinas virtuais contendo diversas versões do Android, permitindo testar o App sem a necessidade de um dispositivo físico.

Para ter acesso ao instalador do Android Studio, basta acessar o seguinte link:

[Baixar Instalador](https://developer.android.com/studio/index.html)


### Configuração do Ambiente

Uma vez com o Android Studio Instalado, execute o AVD Manager para baixar uma imagem
do sistema Android (Baixe uma versão igual ou superior ao Android 10.0) e crie um novo
dispositivo virtual.

Também configure as seguintes variáveis de ambiente:

`ANDROID_HOME` deve conter o valor `%LOCALAPPDATA%\Android\Sdk`

Adicione também a pasta `%LOCALAPPDATA%\Android\Sdk\platform-tools` na variável de ambiente `Path`.


## Execução da Aplicação        

É possível criar uma nova aplicação de React Native com o seguinte comando:

    npx react-native init [nome do meu projeto aqui] 

Use o comando acima apenas parar criar um novo projeto do zero. Caso você clone este repositório, 
basta usar os seguintes comandos para executá-lo. 

Primeiro, certifique-se de que você tem um dispositivo virtual Android em execução na sua máquina. Ou, se quiser testar o App em um dispositivo físico, conecte via USB um Celular Android na máquina. Este dispositivo deve estar com as opções de desenvolvedor ativas assim como a [depuração USB também ativa](https://developer.android.com/studio/debug/dev-options).

Após isso, execute o Metro, que é o software que nos auxiliar a criar Pacotes da nossa aplicação em React Native e a enviá-los para o celular físico ou virtual, permitindo os testes. O seguinte comando deve ser executado na pasta onde o repositório foi clonado, ou onde você criou seu projeto.

    npx react-native start

Este comando irá manter o Metro Server em execução. Mantenha o terminal aberto com este comando em execução todo o tempo que estiver desenvolvendo e testando sua aplicação. Após isso, abra outra janela do terminal ou do PowerShell, e também no diretório onde o repositório foi clonado ou onde você criou seu projeto, execute:

    npx react-native run-android
   
O resultado esperado é seu projeto em execução nos dispositivos disponíveis no momento.
	