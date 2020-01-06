<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-sm q-gutter-sm">
      <div class="col">
        <q-btn to="/experimentos" label="Voltar" icon="keyboard_arrow_left"></q-btn>
      </div>
    </div>
    <div style="margin-top: 10px;" class="row q-col-gutter-sm q-gutter-sm">
          <div class="col col-xs-12">
              <q-input filled v-model="experimento.nome" label="Nome" />
          </div>
          <div class="col col-xs-12">
               <q-input filled label="Data de Início" v-model="experimento.data_inicio" mask="date" :rules="['date']">
                    <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                            <q-date v-model="experimento.data_inicio" @input="() => $refs.qDateProxy.hide()" />
                        </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
          </div>
          <div class="col col-xs-12">
               <q-input filled label="Data de Termino" v-model="experimento.data_termino" mask="date" :rules="['date']">
                    <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                            <q-date v-model="experimento.data_termino" @input="() => $refs.qDateProxy.hide()" />
                        </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
          </div>
      </div>

      <div class="row  q-col-gutter-sm q-gutter-sm">
          <div class="col">
              <q-input filled  type="textarea" v-model="experimento.descricao" label="Descricão" />
          </div>
      </div>

      <div style="margin-top: 10px;" class="row  q-col-gutter-sm q-gutter-sm">
          <div class="col-xs-12">
            <q-btn style="width: 100%;" label="Atualizar" icon="refresh" color="purple"></q-btn>
          </div>
          <div class="col-xs-12">
            <q-btn style="width: 100%;" @click="removerExperimento" label="Remover" icon="delete" color="red"></q-btn>
          </div>
      </div>
  </q-page>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'PageExperimentoDetalhe',
  data () {
    return {
      experimento: {
          nome: '',
          descricao: '',
          data_inicio: '',
          data_termino: '',
      },
    }
  },

  created() {
    this.experimento = JSON.parse(JSON.stringify(this.experimento_selecionado))
  },

  methods: {
    removerExperimento() {
        let exp = JSON.parse(JSON.stringify(this.experimento_selecionado))
        let experimentos = this.$q.localStorage.getItem('experimentos')
        let index = experimentos.indexOf(exp);
        experimentos.splice(index, 1)
        this.setExperimentos(experimentos)
        this.$q.localStorage.set('experimentos', experimentos)
        this.$router.push('/experimentos')
    },

    ...mapMutations('experimentos', ['setExperimentos', 'setExperimentoSelecionado'])
  },  

  computed: {
    ...mapState('experimentos', ['experimento_selecionado'])
  } 
}
</script>
