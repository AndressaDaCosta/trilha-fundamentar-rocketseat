# Aulas de Github

## Para quem é o curso?

Começaremos essa aula explicando a diferença entre Git e GitHub,

O Git é um gerenciador de projeto, alterações, histórico, usado em uma máquina local.

Caso você queira tirar da sua máquina e colocar em um repositório remoto, o GitHub existe como essa solução, sendo uma das mais usadas.

Porém o GitHub não dá para usar sem o Git, pois ele serve para hospedar os repositórios. Ao invés de deixar só na máquina, coloca na nuvem.

O que aprenderemos neste curso é a primeira parte que vemos no site "Give your code a home in the cloud", ou seja, colocar o seu código na nuvem, poderemos colocar todo o seu código, ver todo histórico, criar repositório pelo GitHub, trabalhar online, então veremos como linkar sua máquina com o GitHub, e levar seu repositório local ao GitHub e vice-versa.

## Requisitos para o curso e revisão de Git

Um dos requisitos que precisaremos para entender o curso é ter visto a parte de "Ambiente dev de outro mundo" do discover e também vai precisar do guia de Git.

De começo vamos revisar rapidamente algumas coisas sobre o curso de Git e ver qual o fluxo que teremos aqui e também veremos algumas palavras a mais que teremos no curso.

Abrindo o terminal, faremos um novo diretório com o comando mkdir, no caso colocaremos o nome de "revisao", após criarmos, entraremos no nele usando o comando cd revisao , manualmente seria come se estivéssemos criando uma pasta, colocando o nome e entrando nela, mas para nós é melhor controlar o computador via texto, com isso estamos já treinando a usar mais o terminal.

Ainda no terminal damos um git init para iniciarmos o repositório, será onde iremos guardar as modificações do nosso código, feito isso eu teria como criar um arquivo de texto usando o "vim" digitando: vim [README.md](http://readme.md) , apertaremos a letra I para inserir algo, md é uma extensão de Markdown , podemos alguns códigos específicos, podendo até usar alguns HTMLs. Daremos então Esc :wq, para sair, lembrando que isso é um comando do vim.

# Primeiros passos

## Criando uma conta

Estaremos vendo nesta aula como criar uma conta no GitHub.

Colocaremos o nosso Username, de preferência disponível, Email e senha, então faremos alguns puzzles para verificação da conta.

Selecionaremos qual tipo de trabalho fazemos, no seu caso provavelmente estudante, também colocaremos o seu nível de experiência, o seu plano usando o GitHub, suas línguas de interesse, e completaremos o nosso setup, por fim verificaremos o nosso email.

Voltando ao GitHub, iremos configurar o nosso ambiente na nossa próxima aula.

## Configurando perfil público

Após criar a conta no GitHub, ele perguntará se você fará um novo repositório, ou colaborar com o seu time, ou aprender sobre o GitHub, para quem quiser aprender mais afundo sobre é uma ótima opção, mas primeiro veremos a parte de perfil para configuirar. clicando no canto superior direito, vamos abrir o Your profile e Edit profile. Estaremos colocando o nome completo, o Email público, caso queira, selecionando email settings podemos configurar se queremos ou não ele público, podendo colocar outros Emails, para backup, para deixar como primário, para tirar a privacidade do email, desmarcamos a caixa "Keep my email adresses private", colocamos a Bio, seu site(se tiver), twitter, onde trabalha, sua localização e a opção importante para quem quer ser contratado por alguma empresa "Avaliable for hire" e update para salvarmos as alterações.

## Conhecendo a página do usuário

Nessa parte que estamos, temos o overview, repositórios, projetos e packages, além disso temos a barra do GitHub, onde leva ao dashboard dele, temos o pull requests, que não é o foco da aula, mas é onde fazemos o pedido para colocar um código na nuvem, issues a parte de correção de bugs que trabalhamos com o GitHub, o sininho para notificações, o botão de + é onde veremos depois no curso.

# Criando Repositórios

## Criando repositório online

Nessa aula estamos vendo como criar um repositório no GitHub

Existem várias opções de como criar, indo no dashboard, no + ou indo no perfil e na parte de repositórios e clicar em new.

Na parte de criação de um novo repositório, nele conterá todos os arquivos de projetos, colocaremos um nome, se for o seu próprio nome teremos um segredo, um repositório com o nome igual ao seu é especial, usado para fazer um README.md no GitHub, ou seja, fazer um profile no mesmo.

Descrição é opcional, podemos colocar como privado ou público, no caso adicionaremos um arquivo README. E criaremos o repositório.

Isso no terminal seria feito da seguinte forma:

primeiro precisamos estar em um diretório, caso não haja, mkdir**_nome_** e entrar nele é o comando cd**_nome_** , não há nada nele, então damos um git init e no processo de adicionar o README, usamos o comando touch README.md , no ls temos o README.md, damos um git add README.md e um git commit -m "README.md", com isso fizemos nosso primeiro commit.

Isso seria como fazer o repositório local, sendo diferente do GitHub que é na nuvem, por enquanto sem nenhuma ligação, mas no curso veremos ainda como ligar.

## Atualizando o repositório

Nesta aula aprenderemos a editar seu repositório.

De maneira simples clique no lápis do repositório que criamos na aula passada, o README.md, dentro já temos um template dele, podendo editar o conteúdo da maneira que desejar, como no nosso caso é um README, ele vai conter algumas informações como o nome, tecnologia que queremos trabalhar, empresa que trabalha e etc.

Você pode ver o de outras pessoas também, para ter ideias.

Clicando no preview changes, podemos ver o que foi alterado, o vermelho sendo o que era e o verde o alterado, mas qualquer arquivo que alteramos estaremos fazendo um novo commit, um novo ponto na história.

No commit changes, já temos uma mensagem padrão, que também podemos mudar, tendo também informações que você queira colocar a mais.

Na parte abaixo a essa caixa, temos a opção de selecionar se queremos commitar direto na branch main e a opção de criar uma nova branch, para solicitar um pull request, mas por enquanto a gente não esta vendo isso, pois estamos fazendo sozinho o projeto, já que o pull request serve para pedir para alguém do seu time revisar e ver se está certo o seu código

Por fim se clicarmos no nome do usuário que fica junto do nome do repositório, veremos ele bem bonito.

## Colaborando em outros repositórios

Podemos já fazer algumas colaborações.

Vemos que o README do Mayk está com alguns probleminhas, então conseguimos, clicando no lápis, corrigir esses problemas, fazendo assim uma proposta de mudança, criando uma atualização, o Mayk já vai receber isso como um pull request, então ele analisará e ver se aceita a correção, bacana.

Quando clicamos para editar o README.md do Mayk, o GitHub automaticamente cria um fork, que significa que ele está trazendo para os nossos repositórios um de fora, agora cabe você continuar trabalhando nele, ou também apagar, indo nas configurações do repositório, então deletando ele, porém apenas precisando colocar o nome certo do que você está a apagar, o fork meio que clona ele para o seu repositório, para você mexer da forma que desejar.

## Conhecendo o restante da página pessoal

Por fim estaremos conhecendo o resto do nosso dashboard.

Podemos mudar o tema dele para escuro, selecionar os seus melhores repositórios para aparecer ao público, caso tenha mais de 1.

Há também um histórico de contribuições que você fez.

Temos as atividade de contribuições, no dia de hoje, também o qual foi o primeiro seu primeiro repositório, quando você ingressou ao GitHub.

# Trabalhando com repositórios

## Criando chave SSH

O que é uma chave SSH?

É uma espécie de conexão que temos que fazer com a máquina e o servidores do GitHub, sendo encriptada, para identificarmos que nossa máquina pode usar o GitHub.

Para criarmos, clicaremos na bolinha do usuário, ir na parte de configurações, e nela iremos até a opção SSH and GPG keys, mas antes vamos para o terminal.

Abrindo o terminal, no caso esse é o do macOS, digitamos ssh-keygen, para gerar a chave ,-t rsa, para dizer o tipo de encriptação, -b 4096, a força da encriptação, -C "maykrbrito@gmail.com", o email que estamos criando, isso tudo na mesma linha, dando enter ele vai pedir algumas coisas que não precisamos, apenas dando enter.

No windows precisaremos do Git instalado, ao instalar você terá um terminal diferente, que podemos criar a chave da mesma forma que no macOS.

Agora com a chave precisamos pegar ela para colocarmos ela no botão verde, ainda pelo terminal, damos um cd ~/.ssh/ , teremos algumas opções como id_rsa e id_rsa.pub, que é o que queremos, mas não conseguimos navegar, fazer um cd nele, mas conseguimos dar um cat para mostrar tudo que há no arquivo, dando enter, vamos copiar tudo desde o ssh até o .com e voltar ao GitHub, clicando no botão verde de nova chave, colocar um título e colar a chave e adicionar ela.

## Adicionando chaves ao gerenciador local SSH Agent

Para este passo, vamos abrir o navegador, entrando neste link https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key você será direcionado a uma página no GitHub que irá nos ajudar, lembrando que para que executemos este processo, precisamos saber que o windows funciona de uma forma diferente do que macOS e o linux, então por isso para cada processo há uma página diferente, para todos esses sistemas operacionais.

Para o windows é bem simples, abriremos o terminal, iniciaremos ssh agent no background digitando ou apenas copiando do link, depois colaremos a linha já no terminal diferente que já tem o Git, eval "$(ssh-agent -s)", então mostrará para você o processo que está sendo executado e depois apenas rodar esta linha no terminal, ssh-add ~/.ssh/id_rsa.

No mac há alguns processos a mais do que o windows, iremos começar com a mesma linha eval "$(ssh-agent -s)", irá mostrar novamente o processo executado, então daremos um .ssh/config, veremos que não tem, então precisaremos dar um vim para criar, vim ~/ .ssh/config, assim criamos o config, agora tudo que precisamos é copiar:

Host \*
AddKeysToAgent yes
UseKeychain yes
IdentityFile ~/.ssh/id_rsa
Por fim copiaremos ssh-add -K ~/.ssh/id_rsa.

Pronto assim sua máquina está funcionando junto com a do GitHub.

## Linkando um repositório remoto com local

Fizemos nosso primeiro repositório apenas online, mas agora criaremos seguindo um outro caminho.

vamos em new para criar um novo repositório, colocamos o nome, descrição, mesmo opcional é bem importante, escolhemos se é privado ou público para as outras pessoas, pularemos essa etapa de adicionar coisas pela nuvem, pois faremos ele todo manualmente, criado, estaremos vendo os passos que deveremos seguir.

Estaremos criando um repositório escrevendo no terminal mkdir nome do diretório , cd nome do diretório , damos um git init para iniciarmos o nosso git, damos o vim [README.md](http://readme.md) no caso estaremos escrevendo algumas coisas como nome e descrição, saímos e damos um git status para apenas darmos uma olhada, o arquivo não está sendo rastreado, então vamos dar um git add . , git commit -m ":tada: first commit" o nosso primeiro commit o :tada: é apenas um ícone, agora precisaremos adicionar nosso repositório remoto, usando a parte de ssh que é muito mais seguro do que HTTPS, estaremos escrevendo add origin git@github.com:maykrbrito/demo.git este é somente um exemplo, já que o de cada um será diferente apenas copie ao lado do SSH, agora que adicionamos podemos dar um git remote -v para vermos os repositórios que estão na nuvem, mas por enquanto apenas estamos a focar em somente 1, que é no GitHub, damos um git branch -M main , pois ainda não temos a branch main, da forma com que estamos a trabalhar de padrão a branch vem na master, então mudamos o padrão para o main.

Agora damos um git push -u origin mainpara enviarmos nossos repositórios para nuvem, damos um yes para liberar a conexão, as chaves foram adicionada.

Voltando para parte code vemos que foi criado e linkado, olha que legal.

## Modificando arquivos local e enviando para repositório remoto

Agora estaremos fazendo uma alteração, no terminal, acessamos o nosso arquivo README que fizemos na aula passada escrevendo vim[README.md](http://readme.md) , damos um enter e modificamos o que queremos, saindo dando um git status podemos ver que ele não foi colocado no stage area, precisamos colocar, mas como o arquivo já está sendo rastreado pelo git, não precisaremos fazer o git add . , faremos o git commit -am ":sparkles: changing readme" m sendo a mensagem e o a ele vai adicionar a modificação que não está na stage area automaticamente junto ao commit tudo em uma linha só, isso somente funcionaria caso você já tenha posto na stage area alguma vez. não vamos precisar fazer o git remote, pois a nuvem já existe, dando o git push não vamos precisar fazer o -u origin , porque estamos na branch main já que a branch já existe aqui para o git.

## Modificando arquivos remotos e puxando para repositório local

Se alterarmos o arquivo e dermos commit changes, estaríamos fazendo direto online, mas se fizermos um git log --oneline, veremos que está a faltar um commit, sendo que na nuvem há mais, como faremos para puxar alteração da nuvem para máquina é bem simples, apenas damos um git pull e só, e se vermos novamente estará atualizada.

## Entendendo o histórico remoto

O histórico funciona da seguinte forma, se formos para um dos repositórios e clicarmos em commits com o sinal de relógio poderemos ver o histórico de modificações, podemos navegar por todos os pontos da história, ou seja clicando no ultimo ícone, vemos que o repositório que está sendo mostrado é o do momento da modificação, mas como faço para voltar é bem simples, mudamos a branch para main.

## Corrigindo conflitos de merge

Nesta aula estaremos fazendo uma configuração e corrigir conflito e erros por causa de um processo.

Entrando no diretório cd demo/ como exemplo, quando dermos um git pull ele vai avisar que está havendo um conflito, para corrigir apenas faremos o padrão pedido pelo git que é git config --global pull.rebase false que é o padrão merge, dando novamente o git pull estará tudo certo.

Agora forçaremos um erro para criarmos uma situação, vamos supor que nós tenhamos feito uma alteração no repositório e demos commit apenas na nuvem e esquecemos de dar git pull e quando chegamos em casa, nós fazemos uma alteração no local, quando formos dar um git pull vai mostrar que deu erro, se abrirmos pelo vim[README.md](http://readme.md) , poderemos ver que é possível escolher entre a alteração local e pela remota, e para fazermos isso apenas apagamos a cabeça, os ====== e os >>>>>> e dizemos qual alteração que queremos, mas existe outro modo usando o VSCode, abrindo ele, no terminal damos um open . e colocamos ele no VSCode, ele automaticamente irá perceber o conflito e irá lhe dar certas opções, como a de aceitar as alterações locais ou as da nuvem, aceitando qualquer uma automaticamente o VSCode vai alterar de acordo com a escolha, então damos um git commit -am "mensagem" , agora o git pull e depois por fim o git push, atualizando vemos as alterações no GitHub.

# Outras features

## Pesquisando no Github

Uma outra função que possuímos no GitHub é a de pesquisar repositórios.

Vamos supor que queremos fazer um filtro de busca de JavaScript, digitamos search filter javascript, no caso fica com o nome do user, mas queremos procurar por todo GitHub, então retiramos o nome e damos enter novamente.

Há muitos códigos enquanto procuramos, por isso podemos filtrar também, para ver apenas sobre repositórios, códigos, commits, issues, discussões e muito mais, há também como ordenar os resultados por tanto de estrelas, melhor match, pelas mais recentes.

Clicando naquilo que mais te interessa, podemos ver as ideais de códigos, avaliar, corrigir fazendo o fork clicando no lápis, e mandar para pessoa, que vai receber um pull request, colaborando com ela e ajudando assim no projeto.

Podemos também procurar na mesma barra de pesquisa no nosso próprio GitHub, os repositórios, digitando user:username coisa que você estiver procurando, filtrando da mesma forma que procurar pelo GitHub todo.

## Estrelas e git clone

Aprenderemos nesta aula sobre as estrelinhas e como fazer um git clone, trazer o código para máquina.

Pesquisando algo do seu interesse pelo GitHub todo, e entrando naquilo, para trazer até a máquina podemos fazer um fork ou dar uma estrelinha, para caso queira ver o repositório depois.

Para fazer um clone clicamos no botão Code, lá clicamos no SSH e copiamos a primeira opção, abrimos o terminal e damos um git clone e colamos, damos enter, assim trazemos o repositório direto para máquina, ao invés do fork que apenas traz para o GitHub, ou a estrela que é como se fosse um like, podendo ver mais tarde.

ainda no terminal podemos dar um ls , e depois o cd nome do repositório , se dermos git log --oneline, poderemos ver todo o projeto para estudar e etc.

No caso das estrelinhas apenas vamos no nosso perfil e clicamos na estrela, lá vai ter o que você marcou, fork faria mais sentido caso estivéssemos contribuindo, como não é apenas a estrela é o suficiente.

## Despedida

Chegamos ao final de mais um curso, esperamos que tenha aprendido muito sobre.

Vimos como adicionar repositórios online, como configurar nosso GitHub, fazer alterações, ligamos nossos repositórios locais com o online, também liberamos nossa máquina para trazer repositórios do GitHub e enviar qualquer solicitação, vimos até como contribuir em outros repositórios.

Mas estes conhecimentos são apenas a pontinha do Iceberg, o GitHub tem muita coisa ainda para ser aprendido, mas isso por enquanto é o suficiente para você colocar seus repositórios da sua máquina para o GitHub.


