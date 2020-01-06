<template>
  <q-page class="q-pa-md ">
      
      <div class="row q-col-gutter-sm q-gutter-sm">
          <div class="col">
              <q-input filled v-model="experimento.nome" label="Nome" />
          </div>
          <div class="col">
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

          <div class="col">
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

      <div class="row q-col-gutter-sm q-gutter-sm">
          <div class="col">
              <q-btn @click="adicionarExperimento" color="primary" icon="save" size="md" label="Salvar"></q-btn>
          </div>
      </div>

      <div class="row  q-col-gutter-sm q-gutter-sm" v-if="experimentos.length > 0">
        <div class="col-12">
          <q-list bordered separator>
            <q-item @click="selecionarExperimento(experimento)" clickable v-ripple  v-for="(experimento, index) in experimentos.slice().reverse() " v-bind:key="index">
              <q-item-section>
                <q-item-label>{{ experimento.nome }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
  </q-page>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'PageLisimetro',
  data () {
      return {
        experimento: {
            nome: '',
            descricao: '',
            data_inicio: '',
            data_termino: '',
        },

        experimentos: []
      }
  },
  created() {
    try {
      if(!this.$q.localStorage.getItem('experimentos')) {
        this.$q.localStorage.set('experimentos', [])
        this.experimentos = []
      }
      else {
        this.experimentos = this.$q.localStorage.getItem('experimentos')
      }
    } catch (e) {
      alert('Não suporta o armazenamento local')
    }
  },

  methods: {
      selecionarExperimento(experimento) {
        this.setExperimentoSelecionado(experimento);
        this.$router.push('/experimentos/detalhe')
      },

      adicionarExperimento() {
        let exp = JSON.parse(JSON.stringify(this.experimento))
        let experimentos = this.$q.localStorage.getItem('experimentos')
        experimentos.push(exp)
        this.experimentos = experimentos
        this.$q.localStorage.set('experimentos', JSON.stringify(experimento))
      },

      ...mapMutations('experimentos', ['setExperimentoSelecionado'])
     
  },

}
</script>
