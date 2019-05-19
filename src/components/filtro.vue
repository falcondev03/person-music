<template>
    <div>
        <p><b>Filtrar por:</b></p>

        <!-- <b-form-group id="" label="Nombre">
            <b-input-group >
                <b-form-input id="precio-min-fil" type="text" v-model="filtro.nombre" >
                </b-form-input>
            </b-input-group>
        </b-form-group> -->

        <b-form-group id="" label="Precio minimo">
            <b-input-group append="Bs.S">
                <b-form-input max="10000" id="precio-min-fil" type="number"
                    placeholder="0" v-model="filtro.montomin" >
                </b-form-input>
            </b-input-group>
        </b-form-group>

        <b-form-group id="" label="precio maximo">
            <b-input-group append="Bs.S">
                <b-form-input min="0" id="precio-max-fil" type="number"
                    placeholder="999999" v-model="filtro.montomax" >
                </b-form-input>
            </b-input-group>
        </b-form-group>

        <b-form-group id="" label="Rubro:" label-for="rubro-fil" >
            <b-form-select id="rubro-fil" v-model="filtro.rubro" >
                <option :value="null" selected >Seleccione</option>
                <option v-for="(item,key) in Get_items" :key="key" :value="item.id" >{{item.nombre}}</option>
            </b-form-select>
        </b-form-group>

        <b-form-group id="" label="Categoria:" label-for="categoria-fil">
            <b-form-select id="categoria-fil" v-model="filtro.categoria" >
                <option :value="null" selected>Seleccione</option>
                <option v-for="(item,key) in Get_categories" :key="key" :value="item.id" v-if="filtro.rubro!=null?(item.item_id==filtro.rubro?true:false):true">{{item.nombre}}</option>
            </b-form-select>
        </b-form-group>

        <hr>
        <b-row class="center-content">
            <b-btn class="" @click="" id="btn-aply-filt" variant="primary">Aplicar filtros</b-btn>
        </b-row>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
    export default {
        components: {},
        created() {},
        mounted() {
            this.Fetch_items();
            this.Fetch_categories();
            this.Fetch_subcategories();
        },
        data() {
            return {

                nombre:"",
                filtro:{
                    rubro:null,
                    categoria:null,
                    montomin:0,
                    montomax:0,
                },
                buscar: "",
                orden: [{
                        text: 'seleccione',
                        value: null,
                        disabled: false,
                    },
                    {
                        text: 'recientes',
                        value: 1,
                        disabled: false,
                    },
                    /* {
                    text: 'mas vendidos',
                    value: 2,
                    disabled: true,
                    },
                    {
                    text: 'mejor calificados',
                    value: 3,
                    disabled: true,
                    } */
                ],
                /*filtro: {
                    orden: null,
                    preciomin: null,
                    preciomax: null,
                    rubro: null,
                    categoria: null,
                    subcategoria: null,
                }*/
            }
        },
        props: [
        ],
        computed: {
            ...mapGetters({
                Get_products:'productos/get_products',

                //Get_type_offers:'Type_offers/get_type_offers',
                Get_items:'Items/get_items',
                Get_categories:'Categories/get_categories',
                Get_subcategories:'Subcategories/get_subcategories',
            }),
            /*rubros: function () {
                return this.$store.getters.get_B_rubros;
            },
            categorias: function () {
                return this.$store.getters.get_B_categorias;
            },
            subcategorias: function () {
                return this.$store.getters.get_B_subcategorias;
            },*/
        },
        watch: {
            /*'filtro.rubro'() {
                this.reset_type(true);
            },
            'filtro.categoria'() {
                this.reset_type(false);
            }*/
        },
        methods: {
            ...mapActions({
                Fetch_products:'productos/act_fetch_products',

                Fetch_items:'Items/act_fetch_items',
                Fetch_categories:'Categories/act_fetch_categories',
                Fetch_subcategories:'Subcategories/act_fetch_subcategories',
            }),
            /*alert(item) {
                console.log('alerta: ', item);
            },
            aplicar() {
                if (this.filtro.preciomin == "") {
                    this.filtro.preciomin = null
                }
                if (this.filtro.preciomax == "") {
                    this.filtro.preciomax = null
                }
                this.$store.dispatch("act_aplicar_filtros", this.filtro);
            },
            reset_type(item) {
                if (item) {
                    this.filtro.categoria = null;
                    this.filtro.subcategoria = null;
                } else {
                    this.filtro.subcategoria = null;
                }
            }*/
        }
    };

</script>

<style scoped>
</style>
