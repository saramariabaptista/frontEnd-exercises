# O que é um codigo Assíncrono? ⌛️

Pense no `código assíncrono` como uma parte do código que vai rodar fora do fluxo principal da aplicação, ou seja, fora da sequência de execução original do programa.

	
---

# Por que usar códigos assíncronos

A principal vantagem de se trabalhar com um `código assíncrono` é poder executar outras funções sem travar a execução do programa principal enquanto o resultado da função assíncrona não é finalizado.

Existem várias situações onde você irá precisar trabalhar com códigos assíncronos, como, por exemplo:

Leitura e escrita de arquivos: como operações em disco tendem a ser demoradas, geralmente elas são realizadas de forma assíncrona.

Acesso a alguns recursos do navegador: recursos que dependem de hardware, como lidar com a câmera, por exemplo.

Fazer requisições externas: esse provavelmente é o cenário onde a assincronicidade é mais utilizada. É necessário aguardar uma resposta do servidor após fazer uma requisição sem travar a execução do resto do sistema.

<br />

<br />

# Promises 🤞

`Promises` são ferramentas poderosas que o Javascript possui para lidar com códigos assíncronos.

<blockquote>Promise é um objeto usado para processamento assíncrono. Um Promise (de “promessa”) representa um valor que pode estar disponível agora, no futuro ou nunca.</blockquote>

<br />

<br />

<img src="https://content-assets.betrybe.com/prod/77436266-7104-47a1-bf66-ad6541ccc8bd-Anima%C3%A7%C3%A3o%20representando%20uma%20promise%20resolvida.gif">

<br />

<img src="https://content-assets.betrybe.com/prod/77436266-7104-47a1-bf66-ad6541ccc8bd-Anima%C3%A7%C3%A3o%20representando%20uma%20promise%20rejeitada.gif">

<br />

# Construindo uma promise

Se quisermos criar nossas próprias promises podemos usar o construtor `new Promise()` para criar uma nova promise. Esse construtor recebe uma função como parâmetro e essa função deverá ter dois argumentos: a função `resolve` e a função `reject`.

```
new Promise((resolve, reject) => {});
```

Os parâmetros `resolve` e `reject` serão usados para definirmos qual o estado que *promise* terá quando for finalizada.

Quando a promise for *resolvida*, usamos a função `resolve`; <br />
Quando a promise for *rejeitada*, usamos a função `reject`.

# Retornando valores quando a promise é resolvida

Vamos criar uma *promise* e usar a função `setTimeout` para criar um código assíncrono que demora 1000 milissegundos (1 segundo) para ser executado. Além do `setTimeout`, vamos criar também uma função chamada `generateRandomNumber` que gera um número aleatório entre 0 e 10.

```
// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });
  ```
Dessa forma, quando a *promise* `resolvedPromise` for chamada, ela será finalizada com o estado de `resolvida`, retornando o número gerado.

# Retornando um erro quando a promise é rejeitada

Da mesma forma que podemos retornar um valor quando a promise for resolvida, também podemos retornar um valor quando ela for rejeitada, usando a função `reject`:

```
// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
// const resolvedPromise = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = generateRandomNumber();
//       resolve(randomNumber);
//     }, 1000);
//   });

// promise rejeitada retornando um objeto de erro
const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido.`));
    }, 1000);
  });
```
### Repare que podemos retornar qualquer valor usando a função reject, mas geralmente é uma boa prática retornar um objeto de erro.

<br />

# Fetch

No seu dia-a-dia como pessoa desenvolvedora, será extremamente comum fazer com que a aplicação que você está desenvolvendo tenha alguma interação com outra aplicação. Aplicações Front-end estão constantemente fazendo requisições para as aplicações em back-end enviando e recebendo informações. Todo esse processo, como você pode ter imaginado, acontece de forma assíncrona, por isso as promises são fundamentais nesse tipo de operação tão vital para a web.

E o Javascript já nos fornece um método nativo para lidarmos com requisições externas: o método `fetch()`, que retorna uma promise, que pode ser resolvida ou rejeitada de acordo com o resultado da requisição.

<br />

<blockquote> Atenção: você precisa estar com o node.js na versão 18 para conseguir rodar o fetch. </blockquote>

O método fetch recebe dois parâmetros:

```
fetch(URL, config)
```

- URL (obrigatório): é o endereço da API para qual faremos a requisição;
- Objeto de configurações (opcional): caso a requisição precise de alguma configuração adicional, é possível defini-la nesse objeto.

# Fazendo uma requisição usando o fetch

Para fazer uma requisição usando o método fetch, precisamos passar a URL da API que queremos acessar. Para esse exemplo, vamos usar a o endereço https://api.goprogram.ai/inspiration, que deve nos retornar um objeto. Ao rodar o código acima, vemos que o resultado exibido é um objeto que contém várias informações.

Esse retorno é diferente do objeto que estávamos esperando de nossa API, certo? Isso acontece por que quando a promise retornada pelo método fetch é resolvida, ela retorna um objeto do tipo Response, que é um tipo de objeto criado especialmente para lidar com a resposta de uma requisição.

No nosso exemplo, nossa API retorna um objeto e queremos usar esse formato para conseguir acessar as informações retornadas, por isso vamos usar o método .json().

O método Response.json() também retorna uma promise, ou seja, precisaremos usar mais um .then para acessar o seu retorno. Quando a promise é resolvida ela retorna em formato json a resposta da requisição feita a API:

```
fetch("https://api.goprogram.ai/inspiration")
  .then(response => response.json())
  .then(data => console.log(`"${data.quote}" | ${data.author}`));
```
> _De olho na dica 👀:_ Você reparou que usamos dois .then seguidos após fazer o fetch? Esse processo é chamado de encadeamento. Podemos usar esse recurso retornando um valor dentro de um .then. O valor retornado será recebido pelo próximo .then encadeado. No caso acima, estamos retornando o valor de response.json() para o próximo .then, que recebe o valor através da variável data.

# Configurações de uma requisição

Além da URL que queremos acessar, também é possível passar para o método fetch um objeto com as configurações da requisição. Existem várias configurações possíveis. Vamos focar agora nas três configurações que são as mais usadas normalmente:

- *method:* é o método HTTP da requisição, ou seja, um padrão na comunicação entre o front-end e o back-end. Algumas APIs pedem um determinado tipo de método para aceitarem requisições, por isso, sempre leia a documentação da API que estiver usando para saber qual método deve ser usado. Os mais comuns são GET e POST. Se nenhuma configuração for passada, o method padrão usado pelo fetch é GET.

- *headers:* o cabeçalhos são informações adicionais que podemos passar em cada requisição. Em alguns casos, é possível que a API peça algum cabeçalho específico para que a comunicação seja realizada com sucesso. Sempre leia a documentação da API que estiver usando para saber se é necessário passar algum cabeçalho na requisição.

- *body:* é o corpo da requisição, ou seja, quais são os dados que queremos enviar para a API. Importante lembrar que o body precisa estar em formato de texto, por isso é muito comum usar a função JSON.stringify para transformar nossos dados em texto antes de enviar a requisição.

Exemplo:

```
// Requisição GET sem nenhuma configuração - recupera as informações de um produto.
fetch('https://dummyjson.com/products/27')
  .then((response) => response.json())
  .then((data) => console.log('GET sem headers', data));

// Requisição POST com headers e body - adiciona um produto num carrinho de compras.
fetch('https://dummyjson.com/carts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: 1,
    products: [
      {
        id: 27,
        quantity: 1,
      },
    ],
  }),
})
  .then((response) => response.json())
  .then((data) => console.log('POST com headers e body', data));
```
# Tratando erros em requisições

Lembre-se de que o fetch retorna uma promise e, com isso, temos a vantagem de usar o mecanismo de tratamento de erros das promises. Da mesma forma que podemos usar o .then após uma chamada, também podemos encadear um .catch para tratar caso aconteça algum erro.

```
// Requisição com uma URL inválida. Deve retornar um erro.
fetch('https://invalid.dummyjson.com/products/27')
  .then((response) => response.json())
  .then((data) => console.log('GET sem headers', data))
  .catch((error) => console.log('Erro ao fazer requisição.', error.message));

```

> Anota aí 📝: Você pode ter quantos then encadeados forem necessários, mas geralmente costuma-se ter apenas um catch, pois esse catch conseguirá capturar um erro que seja disparado em qualquer um dos then anteriores.

# Trabalhando com várias promises

Ao trabalhar com códigos assíncronos, é muito comum precisarmos lidar com mais de uma promise por vez. Seja por que você precisa esperar o resultado de duas ou mais promises, ou por que você precisa fazer várias chamadas e pegar o resultado somente da que retornar mais rápido. O Javascript oferece quatro métodos que nos ajudam a trabalhar com várias promises:

- Promise.all
- Promise.race
- Promise.any
- Promise.allSettled

<br />

# Método Promise.all
Parâmetro recebido: array de promises

Retorno: o retorno varia de acordo com a situação:

quando todas promises são resolvidas: retorna uma promise resolvida com um array com o resultado de cada promise recebida.

<img src="https://content-assets.betrybe.com/prod/be6af146-23b1-4a9a-b2d6-1b595ccd34b4-Anima%C3%A7%C3%A3o%20representando%20Promise.all%20com%20todas%20promises%20resolvidas.gif">

Quando uma promise é rejeitada: retorna uma promise rejeitada com o objeto o erro retornado pela promise que foi rejeitada.

<img src="https://content-assets.betrybe.com/prod/be6af146-23b1-4a9a-b2d6-1b595ccd34b4-Anima%C3%A7%C3%A3o%20representando%20Promise.all%20com%20uma%20das%20promise%20sendo%20rejeitada.gif">

<br />

Atenção 🚨:  mesmo que uma das promises seja rejeitada, os códigos das outras ainda serão executados.

<br />

# Método Promise.race

Parâmetro recebido: array de promises

Retorno: o retorno varia de acordo com a situação:

quando a primeira promise finalizada for resolvida: retorna uma promise resolvida com o valor retornado pela primeira promise original.

<img src="https://content-assets.betrybe.com/prod/be6af146-23b1-4a9a-b2d6-1b595ccd34b4-Anima%C3%A7%C3%A3o%20representando%20Promise.race%20com%20a%20primeira%20promise%20sendo%20resolvida.gif">

Quando a primeira promise finalizada for rejeitada: retorna uma promise rejeitada com o objeto o erro retornado pela promise original.

<img src="https://content-assets.betrybe.com/prod/be6af146-23b1-4a9a-b2d6-1b595ccd34b4-Anima%C3%A7%C3%A3o%20representando%20Promise.race%20com%20a%20primeira%20promise%20sendo%20rejeitada.gif">

Atenção ⚠️: mesmo que `Promise.race` só receba o valor da primeira promise a ser finalizada e ignore o valor das outras promises, todas as promises passadas como parâmetro serão executadas.