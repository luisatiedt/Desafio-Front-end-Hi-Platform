# Desafio Front-end Hi Platform - Luisa Tiedt
Este projeto foi realizado com base no desafio Front-end da Hi Platform, onde o objetivo era desenvolver uma árvore com itens encadeados (pais e filhos) dado o conjunto de dados em formato JSON.
Para ver e navegar o projeto final, [clique aqui](https://luisatiedt.github.io/Desafio-Front-end-Hi-Platform/)

Os códigos comentatos no detalhe e escolhas de cada etapa está disponível aqui nos arquivos repositório do Github.

Preview:

![Projeto preview](https://github.com/luisatiedt/Desafio-Front-end-Hi-Platform/blob/main/GIF%20desafio.gif)

 ### Tecnologias utilizadas
HTML, CSS e Javascript.

### Desenvolvimento do projeto
Dados os requisitos funcionais e comportamentos esperados, desenvolvi uma interface web composta por quatro arquivos que contemplam o HTML, CSS, Javascript e os dados em JSON.
Ao receber o desafio, quebrei os comportamentos em partes para serem desenvolvidos e incorporados nas funções.

Nesta aplicação o usuário tem a possibilidade de realizar as seguintes ações:
* Marcar e desmarcar checkbox de cada item da árvore (seja pai ou filho);
* Marcar/desmarcar o checkbox de um item que tenha filhos, e o estado é cascateado a todos os seus descendentes;
* Marcar um ou mais filhos, e até que marque todos, o estado do checkbox pai é alterado para indeterminate;
* Marcar/desmarcar todos os filhos, o estado do checkbox pai replica o dos filhos;
* Mostrar e esconder os itens internos de um item pai principal (o primeiro da linha de descendência).
  
:pushpin: Observações importantes:

* O botão azul (+ ou -) indica que a pessoa possui filhos e uma descendência abaixo dela. As pessoas que não tem esse botão, significa que não possuem filhos;


* As tags e elementos (como divs, inputs) foram escritos em inglês, criando padronização;

* Neste projeto não há uma gama de cores grandes na estilização, mas caso tivesse, eu utilização as variáveis no CSS com o root.


### Principais aprendizados
Pude aprender várias funções e características novas do Javascript ao longo deste projeto, nas quais listo abaixo:


* Manipulação de dados em JSON a partir da função fetch;
* Renderização de árvore de dados;
* Criação e manipulação de Divs, input e labels diretamente no Javascript;
* Uso de toggleButton na criação de botões com alteração de estado;
* Uso de querySelector;
* Alteração de estado de checkboxes em uma aplicação.

