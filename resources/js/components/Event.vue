<template>
  <div data-app ref="top">
    <alert-time-out :redirect="redirectSessionFinished" @redirect="updateTimeOut($event)" />
    <alert :text="textAlert" :event="alertEvent" :show="showAlert" @show-alert="updateAlert($event)" class="mb-2" />
    <v-card class="p-3">
      <v-container>
        <v-toolbar flat>
          <h2 class="mt-4">Eventos</h2>
          <v-spacer></v-spacer>
          <v-row>
            <v-col align="end">
              <v-btn rounded @click="addRecord()" class="mb-0 mt-3 btn-normal no-uppercase" title="Agregar"
                :disabled="loading != false">
                Agregar
              </v-btn>
            </v-col>
            <v-col xs="6" sm="6" md="6" class="d-none d-md-block d-lg-block">
              <v-text-field class="mt-3" outlined dense label="Buscar" type="text"
                v-model="options.search"></v-text-field>
            </v-col>
          </v-row>
        </v-toolbar>
      </v-container>
      <v-data-table v-model="selected" :single-select="false" show-select :search="options.search" :headers="headers"
        :items="recordsFiltered" :options.sync="options" :loading="loading" item-key="id" sort-by="id"
        :footer-props="{ 'items-per-page-options': [15, 30, 50, 100] }">
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small class="mr-2" @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-icon small class="mr-2" @click="initialize">
            mdi-refresh
          </v-icon>
        </template>
      </v-data-table>
    </v-card>

    <v-dialog v-model="dialog" max-width="800px" persistent>
      <v-card class="flexcard" height="100%">
        <v-card-title>
          <h1 class="mx-auto pt-3 mb-3 text-center black-secondary">
            {{ formTitle }}
          </h1>
        </v-card-title>
        <v-container v-show="disponibility">
          <alert :text="textAlert" :event="alertEvent" :show="showAlert" @show-alert="updateAlert($event)" class="mb-2" />
        </v-container>

        <v-card-text>
          <v-container>
            <!-- Form -->
            <v-row class="pt-3">
              <!-- event_name -->
              <v-col cols="12" sm="12" md="12">
                <base-input label="Evento" v-model="$v.editedItem.event_name.$model"
                  :validation="$v.editedItem.event_name" validationTextType="none" />
              </v-col>
              <!-- event_name -->
              <!-- cast_name -->
              <v-col cols="12" sm="12" md="12">
                <base-input label="Elenco (Opcional)" v-model="$v.editedItem.cast_name.$model"
                  :validation="$v.editedItem.cast_name" validationTextType="none" />
              </v-col>
              <!-- cast_name -->

              <!-- event_date -->
              <v-col cols="12" sm="12" md="4">
                <base-input label="Fecha de evento" v-model="$v.editedItem.event_date.$model"
                  :validation="$v.editedItem.event_date" validationTextType="none" type="date" />
              </v-col>
              <!-- event_date -->

              <!-- start_hour_event -->
              <v-col cols="12" sm="12" md="4">
                <base-input label="Hora de inicio" v-model="
                  $v.editedItem.start_hour_event.$model
                " :validation="$v.editedItem.start_hour_event" validationTextType="none" type="time" />
              </v-col>
              <!-- start_hour_event -->

              <!-- end_hour_event -->
              <v-col cols="12" sm="12" md="4">
                <base-input label="Hora de finalización" v-model="
                  $v.editedItem.end_hour_event.$model
                " :validation="$v.editedItem.end_hour_event" validationTextType="none" type="time" />
              </v-col>
              <!-- end_hour_event -->

              <!-- place_name -->
              <v-col cols="12" sm="12" md="6">
                <base-select-search label="Lugar" v-model.trim="
                  $v.editedItem.place_name.$model
                " :items="places" item="place_name" :validation="$v.editedItem.place_name" @change="changeRooms()" />
              </v-col>
              <!-- place_name -->

              <!-- room_name -->
              <v-col cols="12" sm="12" md="6" class="">
                <base-select-search label="Espacio" v-model.trim="
                  $v.editedItem.room_name.$model
                " :items="rooms" item="room_name" :validation="$v.editedItem.room_name" />
              </v-col>
              <!-- room_name -->

              <!-- location -->
              <!-- <v-col cols="12" sm="12" md="12">
                                <base-input
                                    label="Ubicación"
                                    v-model="$v.editedItem.location.$model"
                                    :validation="$v.editedItem.location"
                                    validationTextType="none"
                                />
                            </v-col> -->
              <!-- location -->
              <!-- description -->
              <v-col cols="12" sm="12" md="12">
                <base-text-area label="Descripción" v-model="$v.editedItem.description.$model"
                  :validation="$v.editedItem.description" validationTextType="none" :rows="4" />
              </v-col>
              <!-- description -->
              <!-- schedules -->
              <!-- <v-col cols="12" sm="12" md="12">
                                <base-text-area
                                    label="Horarios de atención"
                                    v-model="$v.editedItem.schedules.$model"
                                    :validation="$v.editedItem.schedules"
                                    validationTextType="default"
                                    :rows="4"
                                />
                            </v-col> -->
              <!-- schedules -->

              <!-- tariff -->
              <!-- <v-col cols="12" sm="12" md="12">
                                <base-text-area
                                    label="Tarifa"
                                    v-model="$v.editedItem.tariff.$model"
                                    :validation="$v.editedItem.tariff"
                                    validationTextType="default"
                                    :rows="4"
                                />
                            </v-col> -->
              <!-- tariff -->
              <!-- site_url -->
              <v-col cols="12" sm="12" md="12">
                <base-input label="Enlace de compra de tickets del evento" v-model="$v.editedItem.site_url.$model"
                  :validation="$v.editedItem.site_url" validationTextType="none" />
              </v-col>
              <!-- site_url -->
              <!-- event_file -->
              <v-col cols="12" sm="12" md="6">
                <h6 class="mb-0 fw-bold text-dark">
                  Adjuntar programa de mano (PDF).
                </h6>
                <input-file accept="application/pdf" v-model="$v.editedItem.event_file.$model"
                  :validation="$v.editedItem.event_file" @update-file="
                    editedItem.event_file = $event
                  " @file-size-exceeded="
  $emit('file-size-exceeded', true)
" />
              </v-col>
              <!-- event_file -->
              <!-- cover_image -->
              <v-col cols="12" sm="12" md="6">
                <h6 class="mb-0 fw-bold text-dark">
                  Adjuntar portada del evento.
                </h6>
                <span class="text-left">(Máximo 5MB | png, jpg, jpeg)</span>
                <input-image v-model="$v.editedItem.cover_image.$model" :validation="$v.editedItem.cover_image"
                  :image="editedItem.cover_image" @update-image="
                    editedItem.cover_image = $event
                  " />
              </v-col>
              <!-- cover_image -->
              <!-- images -->
              <v-col cols="12" sm="12" md="12">
                <h6 class="mb-0 fw-bold text-dark">
                  Adjuntar imagenes del evento.
                </h6>
                <span class="text-left">(Máximo 5MB | png, jpg, jpeg)</span>
              </v-col>

              <v-col class="pt-0 pb-0">
                <v-btn class="btn btn-normal" @click="addEventImages()">
                  Agregar imagen
                </v-btn>
              </v-col>

              <!-- images -->
            </v-row>
            <v-row>
              <v-col cols="12" md="12" sm="12" class="pt-4">
                <div class="table-responsive-md">
                  <table class="table table-responsive-md table-hover">
                    <thead>
                      <th>Imagen</th>
                      <th class="text-center">
                        Acciones
                      </th>
                    </thead>
                    <tbody>
                      <tr v-for="(img, index) in images" :key="index">
                        <td>
                          <v-img :src="img.image_url" height="50px" width="50px"></v-img>
                        </td>
                        <td class="text-center">
                          <a @click="deleteImage(img.id)" class="p-1 mr-1 text-center">
                            <span class="material-icons text-blue">
                              delete
                            </span></a>
                        </td>
                      </tr>
                      <tr v-if="images.length == 0">
                        <td colspan="5" class="text-center pt-3">
                          <p>
                            No se adjuntó ninguna imagen
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="orange-text" style="display: flex; align-items: center;" v-if="textMaxFiles">
                  <i class="material-icons">error_outline</i>
                  <p>
                    La cantidad límite de imagenes es de 5.
                  </p>
                </div>
                <v-dialog v-model="dialogImg" max-width="600px" persistent>
                  <v-card height="100%">
                    <v-container>
                      <h3 class="black-secondary text-center mt-4 mb-4">
                        Agregar Imagenes del Evento
                      </h3>
                      <v-row>
                        <!-- Image URL -->
                        <v-col cols="12" sm="12" md="12" style="padding: 1rem 8.5rem">
                          <input-image v-model="$v.image.image_url.$model" :validation="$v.image.image_url"
                            :image="image.image_url" @update-image="image.image_url = $event" />
                        </v-col>
                        <!-- Image URL -->
                      </v-row>
                      <v-row>
                        <v-col align="center">
                          <v-btn class="btn btn-normal mb-3 mt-1" @click="
                            addNewImage()
                          ">Agregar</v-btn>
                          <v-btn color="btn-normal-close mb-3 mt-1" rounded @click="closeImgDialog()">
                            Cancelar
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-dialog>
              </v-col>
            </v-row>

            <!-- Form -->
            <v-row>
              <v-col align="center">
                <v-btn color="btn-normal no-uppercase mt-3" rounded @click="save()" :disabled="loading != false">
                  Guardar
                </v-btn>
                <v-btn color="btn-normal-close no-uppercase mt-3" rounded @click="close">
                  Cancelar
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogDelete" max-width="400px">
      <v-card class="h-100">
        <v-container>
          <h1 class="black-secondary text-center mt-3 mb-3">
            {{
              selected.length > 0
              ? "Eliminar registros"
              : "Eliminar registro"
            }}
          </h1>
          <v-row>
            <v-col align="center">
              <v-btn color="btn-normal no-uppercase mt-3 mb-3 pr-5 pl-5 mx-auto" rounded
                @click="deleteItemConfirm">Confirmar</v-btn>
              <v-btn color="btn-normal-close no-uppercase mt-3 mb-3" rounded @click="closeDelete">
                Cancelar
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import eventApi from "../apis/eventApi";
import placeApi from "../apis/placeApi";
import lib from "../libs/function";
import fileLib from "../libs/function";
// import roomApi from "../apis/roomApi";
import axios from "axios";
import {
  required,
  minLength,
  maxLength,
  url,
  helpers,
} from "vuelidate/lib/validators";

const httpsValid = helpers.regex("https", /^https:\/\//);

export default {
  data() {
    return {
      search: "",
      selected: [],
      dialog: false,
      dialogImg: false,
      dialogDelete: false,
      headers: [
        { text: "EVENTO", value: "event_name" },
        { text: "ELENCO", value: "cast_name" },
        { text: "FECHA", value: "event_date" },
        { text: "LUGAR", value: "place_name" },
        { text: "ESPACIO", value: "room_name" },
        { text: "ACCIONES", value: "actions", sortable: false },
      ],
      records: [],
      recordsFiltered: [],
      editedIndex: -1,
      title: "Eventos",
      totalItems: 0,
      options: {},
      editedItem: {
        event_name: "",
        cast_name: "",
        event_date: "",
        start_hour_event: "",
        end_hour_event: "",
        place_name: "",
        room_name: "",
        location: "",
        schedules: "",
        description: "",
        tariff: "",
        site_url: "",
        event_file: "",
        cover_image: "",
        images: [],
        // color: "",
        // state: "",
      },
      defaultItem: {
        event_name: "",
        cast_name: "",
        event_date: "",
        start_hour_event: "",
        end_hour_event: "",
        place_name: "",
        room_name: "",
        location: "",
        schedules: "",
        description: "",
        tariff: "",
        site_url: "",
        event_file: "",
        cover_image: "",
        images: [],
        // color: "",
        // state: "",
      },

      image: {
        image_url: "",
      },
      defaultImage: {
        image_url: "",
      },
      selectedTab: 0,
      loading: false,
      debounce: 0,
      textAlert: "",
      alertEvent: "success",
      showAlert: false,
      redirectSessionFinished: false,
      alertTimeOut: 0,
      rooms: [],
      places: [],
      images: [],
      disponibility: false,
      clearDropzone: false,
      textMaxFiles: false,
    };
  },

  watch: {
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  // Validations
  validations: {
    editedItem: {
      event_name: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(200),
      },
      cast_name: {
        // required,
        minLength: minLength(0),
      },
      event_date: {
        required,
        minLength: minLength(1),
      },
      start_hour_event: {
        required,
        minLength: minLength(1),
      },
      end_hour_event: {
        required,
        minLength: minLength(1),
      },
      place_name: {
        required,
        minLength: minLength(1),
      },
      room_name: {
        required,
        minLength: minLength(1),
      },
      location: {
        // required,
        minLength: minLength(0),
      },
      schedules: {
        // required,
        minLength: minLength(0),
        maxLength: maxLength(330),
      },
      description: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(330),
      },
      tariff: {
        // required,
        minLength: minLength(0),
        maxLength: maxLength(330),
      },
      site_url: {
        required,
        url,
        https: httpsValid,
        minLength: minLength(1),
        maxLength: maxLength(500),
      },
      event_file: {
        //required,
        //minLength: minLength(0),
      },
      cover_image: {
        required,
        minLength: minLength(0),
      },
    },
    image: {
      image_url: {
        required,
      },
    },
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Nuevo registro"
        : "Editar registro";
    },
  },

  watch: {
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: false,
      dirty: false,
    },
    dialog(val) {
      val || this.close();
    },
    dialogBlock(val) {
      val || this.closeBlock();
    },
  },

  created() {
    this.initialize();
  },

  mounted() {
    // this.images = this.editItem.images;
  },

  methods: {
    async initialize() {
      this.loading = true;
      this.$v.$reset();
      this.records = [];
      this.recordsFiltered = [];

      let requests = [
        this.getDataFromApi(),
        placeApi.get(null, {
          params: { itemsPerPage: -1 },
        }),
      ];

      const responses = await Promise.all(requests).catch((error) => {
        this.updateAlert(
          true,
          "No fue posible obtener el registro.",
          "fail"
        );

        this.redirectSessionFinished = lib.verifySessionFinished(
          error.response.status,
          419
        );
      });

      if (responses) {
        this.places = responses[1].data.places;
      }

      this.loading = false;
    },

    editItem(item) {
      this.editedIndex = this.recordsFiltered.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.selectedTab = 0;
      this.dialog = true;
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.updateAlert(true, "Campos obligatorios.", "fail");
        return;
      }

      this.editedItem.images = this.images;

      if (this.editedIndex > -1) {
        const edited = Object.assign(
          this.recordsFiltered[this.editedIndex],
          this.editedItem
        );

        const { data } = await eventApi
          .put(`/${edited.id}`, edited)
          .catch((error) => {
            this.updateAlert(
              true,
              "No fue posible actualizar el registro.",
              "fail"
            );

            this.redirectSessionFinished =
              lib.verifySessionFinished(
                error.response.status,
                419
              );
          });

        if (data.success) {
          this.updateAlert(true, data.message, "success");
        }
        if (data.state == "error") {
          this.updateAlert(true, data.message, "fail");
        }

        this.close();
        this.initialize();
      } else {

        this.loading = true;
        const { data } = await eventApi
          .post(null, this.editedItem)
          .catch((error) => {
            this.updateAlert(
              true,
              "No fue posible crear el registro.",
              "fail"
            );

            this.redirectSessionFinished =
              lib.verifySessionFinished(
                error.response.status,
                419
              );
          });

        if (data.success) {
          this.updateAlert(true, data.message, "success");
          this.close();
          this.initialize();
        }

        if (data.state == "error") {
          this.disponibility = true;
          if (this.disponibility) {
            this.updateAlert(true, data.message, "fail");
          }
        }
        this.loading = false;
      }
    },

    deleteItem(item = null) {
      if (item) {
        this.editedIndex = this.recordsFiltered.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.selected = [];
      }

      this.dialogDelete = true;
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async deleteItemConfirm() {
      const { data } = await eventApi
        .delete(null, {
          params: {
            selected: this.selected,
            id: this.editedItem.id,
          },
        })
        .catch((error) => {
          this.updateAlert(
            true,
            "No fue posible eliminar el registro.",
            "fail"
          );

          this.redirectSessionFinished = lib.verifySessionFinished(
            error.response.status,
            419
          );
          this.close();
        });

      if (data.success) {
        this.updateAlert(true, data.message, "success");
      }

      this.initialize();
      this.closeDelete();
    },

    getDataFromApi() {
      this.loading = true;
      this.records = [];
      this.recordsFiltered = [];

      //debounce
      clearTimeout(this.debounce);
      this.debounce = setTimeout(async () => {
        const { data } = await eventApi
          .get(null, {
            params: this.options,
          })
          .catch((error) => {
            this.updateAlert(
              true,
              "No fue posible obtener los registros.",
              "fail"
            );
          });

        this.records = data.records;
        this.recordsFiltered = data.records;
        this.total = data.total;
        this.loading = false;
      }, 500);
    },

    addRecord() {
      this.dialog = true;
      this.editedIndex = -1;
      this.selectedTab = 0;
      this.editedItem = Object.assign({}, this.defaultItem);
      this.$v.$reset();
    },

    updateAlert(
      show = false,
      text = "Alerta",
      event = "success",
      time = 5000
    ) {
      this.textAlert = text;
      this.alertEvent = event;
      this.showAlert = show;
      this.time = time;
      if (show) {
        this.$refs.top.scrollIntoView();
      }
    },

    async changeRooms() {
      let { data } = await axios
        .get("/api/web/room/byPlaceName/" + this.editedItem.place_name)
        .catch((error) => {
          this.updateAlert(
            true,
            "No fue posible obtener la información de los espacios.",
            "fail"
          );
        });

      this.rooms = data.rooms;
    },

    addEventImages() {
      this.dialogImg = true;
      this.$v.image.image_url.$model = "";
      this.$v.image.$reset();
    },

    async addNewImage() {
      this.$v.image.$touch();

      if (this.$v.image.$invalid) {
        this.$emit("update-alert", {
          show: true,
          message: "Campos obligatorios",
          type: "fail",
        });

        return;
      }

      if (this.images.length > 4) {
        this.textMaxFiles = true;

        this.$nextTick(() => {
          this.closeImgDialog();
        });

        return;
      }

      this.images.push({ ...this.image });

      this.$nextTick(() => {
        this.closeImgDialog();
      });
    },

    closeImgDialog() {
      this.image = this.defaultImage;
      this.$v.image.$reset();
      this.dialogImg = false;
    },

    deleteImage() {
      this.images.splice(this.images.indexOf(this.image), 1);
    },
  },
};
</script>
<style>
.mdi-camera::before {
  color: #2d52a8 !important;
}
</style>
