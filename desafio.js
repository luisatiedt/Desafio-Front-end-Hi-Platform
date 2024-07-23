
//Como a árvore de dados é bem extensa, optei por usar o recurso fetch com o arquivo data.json (JSON) conforme abaixo, para trazer os dados da árvore na tela. Por isso também que não coloquei essa estrutura da árovore de dados diretamente no HTML.//
//O document.addEventListener('DOMContentLoaded', () tem a função de aguardar o DOM ser carregado antes da execução do script.//
document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(treeData => {
            const treeContainer = document.getElementById('tree-container'); //Considera o container criado no HTML, onde a árvore é renderizada.//
            treeContainer.appendChild(renderTree(treeData, 0)); //Renderizar a árvore e adicionar ao container criado no HTML.//
        })
        .catch(error => console.error('Erro ao carregar o arquivo JSON com a árvore de dados:', error)); //Mensagem para caso de erro na requisição.//
});

//renderTree função que renderiza a árvore com base nos dados do arquivo JSON.//
function renderTree(tree, level) {
    const fragment = document.createDocumentFragment();
    Object.keys(tree).forEach(key => {
        const node = tree[key];
        const div = document.createElement('div'); //Criação de uma div.//
        div.classList.add('tree-node'); //Adicionar a classe tree-node na div.//
        if (node.level > level) {
            div.classList.add('indented'); //Caso o nível do nó for maior que o nível atual, é adicionada a classe indented na organização dos dados.//
        }

        const checkbox = document.createElement('input'); // Criação dos checkboxes e consequentemente o tipo e o id.//
        checkbox.type = 'checkbox';
        checkbox.id = node.id;
        checkbox.dataset.level = node.level;

        // Aplicação de um evento de mudança (change) nos checkboxes.//
        checkbox.addEventListener('change', (event) => {
            const checked = event.target.checked;
            updateChildrenState(event.target, checked); //Atualização do estados dos filhos (children).//
            updateParentState(event.target); //Atualização do estados dos pais (parents).//
        });

        const label = document.createElement('label'); //Criação de um label, id e texto para ele.//
        label.htmlFor = node.id;
        label.textContent = node.name;

        div.appendChild(checkbox); //Adicionar um checkbox na div.//
        div.appendChild(label); //Adicionar o label na div.//

        // Condicional para verificar se se o nó tem filhos, subfilhos.//
        if (node.children && Object.keys(node.children).length > 0) {
            const toggleButton = document.createElement('button'); //Criação de um toggle button (botão azul da interface disposto antes dos checkboxes para indicar que o pai tem filhos abaixo de si), pois há alteração de estados expandir (expanded) e recolher representado pelo sinal de + ou -//.
            toggleButton.textContent = '+';
            toggleButton.addEventListener('click', () => {
                div.classList.toggle('expanded');
                toggleButton.textContent = div.classList.contains('expanded') ? '-' : '+';
            });
            div.insertBefore(toggleButton, checkbox);
            div.appendChild(renderTree(node.children, node.level));
        }

        fragment.appendChild(div);
    });
    return fragment;
   
}

//updateChildrenState função que atualiza o estado dos filhos nos checkboxes.//
function updateChildrenState(parent, state) {
    const children = parent.parentElement.querySelectorAll('.tree-node input[type="checkbox"]');
    children.forEach(child => {
        child.checked = state;
        child.indeterminate = false; //Define o estado indeterminado como falso (traço cinza nos checkboxes).//
    });
}

//updateParentState função que atualiza o estado dos pais nos checkboxes, localizando o nó do pai mais próximo.//
function updateParentState(child) {
    const parent = child.closest('.tree-node').parentElement.closest('.tree-node');
    if (parent) {
        const parentCheckbox = parent.querySelector('input[type="checkbox"]');
        const checkboxSiblings = Array.from(parent.querySelectorAll(':scope > .tree-node input[type="checkbox"]')); // Seleção de todos os checkboxes irmãos (siblings).//

        const allChecked = checkboxSiblings.every(checkboxSiblings => checkboxSiblings.checked); //Verificação da marcação dos irmãos.//
        const noneChecked = checkboxSiblings.every(checkboxSiblings => !checkboxSiblings.checked);

        parentCheckbox.checked = allChecked; //Caso todos os checkboxes filhos estiverem marcados, o checkbox pai será marcado também.//
        parentCheckbox.indeterminate = !allChecked && !noneChecked; //Caso contrário permanece como indeterminado até a conclusão da ação.//

        updateParentState(parentCheckbox);
    }
}
