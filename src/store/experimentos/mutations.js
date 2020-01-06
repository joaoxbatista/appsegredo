export function setExperimentos (state, experimentos) {
    state.experimentos = experimentos
}

export function addExperimento (state, experimento) {
    state.experimentos.push(experimento)
}

export function setExperimentoSelecionado(state, experimento) {
    state.experimento_selecionado = experimento
}
