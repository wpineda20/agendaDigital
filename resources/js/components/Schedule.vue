<template>
  <div class="container-fluid" data-app ref="top">
    <alert
      :text="textAlert"
      :event="alertEvent"
      :show="showAlert"
      :time="time"
      @show-alert="updateAlert($event)"
      class="mb-2"
    />
    <div class="schedule-content">
      <div class="schedule-left">
        <div class="card-schedule">
          <!-- Schedule Banner -->
          <div class="card-schedule-header">
            <img class="card-image" src="/logos/Logo_GOES_horizontal_D.svg" />
          </div>
          <!-- Schedule Banner -->
          <div class="card-schedule-body">
            <!-- Schedule Search -->
            <div class="card-search">
              <div class="search-input">
                <v-text-field
                  outlined
                  dense
                  label="Busca tu actividad cultural preferida"
                  type="text"
                ></v-text-field>
              </div>
              <div class="search-item">
                <img
                  style="
                    filter: invert(19%) sepia(13%) saturate(856%)
                      hue-rotate(177deg) brightness(96%) contrast(90%);
                    height: 45px;
                  "
                  src="/img/grid_view.svg"
                />
              </div>
            </div>
            <!-- Schedule Search -->
            <div class="scroll">
              <loader v-if="loading"> </loader>
              <v-col
                cols="12"
                sm="12"
                md="12"
                class="text-center"
                v-if="events.length == 0"
              >
                <h4 class="fw-bold">
                  No hay eventos programados para este día
                </h4>
              </v-col>
              <div class="card-content">
                <div
                  class="card-item"
                  style="margin: 0px !important"
                  v-for="(event, index) in events"
                  :key="index"
                >
                  <a style="text-decoration: none" @click="selectEvent(event)">
                    <v-card class="card-events">
                      <p class="card-event-title" v-if="event.event_name">
                        {{ event.event_name }}
                      </p>
                      <img :src="event.cover_image" class="card-img" alt="" />
                      <p class="card-event-text">
                        <span class="cast-name" v-if="event.cast_name"
                          >{{ event.cast_name }} </span
                        ><br v-show="event.cast_name" />
                        <span class="description" v-if="event.description"
                          >{{ event.description }} </span
                        ><br v-show="event.description" />
                        <span class="place" v-if="event.place_name"
                          >{{ event.place_name }} </span
                        ><br v-show="event.place_name" />
                        <span class="hour" v-if="event.start_hour_event">{{
                          event.start_hour_event
                        }}</span>
                      </p>
                    </v-card>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="schedule-right"></div>
    </div>

    <!-- Modal -->
    <v-dialog v-model="dialog" class="m-0 p-0" width="600px">
      <v-card>
        <v-container>
          <v-row fluid class="fluid">
            <v-col cols="12" md="12" sm="12">
              <a
                class="no-decoration"
                @click="close()"
                style="cursor: pointer; color: lightgray !important"
              >
                <i
                  class="material-icons"
                  style="
                    font-size: 30px !important;
                    display: flex;
                    justify-content: flex-end;
                  "
                  >close</i
                >
              </a>
            </v-col>
          </v-row>
          <v-row class="mx-auto" fluid>
            <v-col cols="12" md="12" sm="12">
              <p class="modal-event-title">{{ eventModal.event_name }}</p>
            </v-col>
            <v-col cols="12" md="12" sm="12">
              <img src="/img/ballet.jpg" height="400px" width="100%" alt="" />
            </v-col>
            <v-col cols="12" md="12" sm="12">
              <h5 class="fw-bold">Descripción del evento</h5>
              <p class="modal-description">{{ eventModal.description }}</p>
            </v-col>
            <div class="modal-items">
              <div class="modal-button" v-if="eventModal.event_file">
                <a :href="eventModal.event_file" download="Programa de mano">
                  <span>Descarga de programa de mano</span>
                </a>
              </div>
              <div class="modal-shop">
                <a :href="eventModal.site_url" target="_blank">
                  <img src="/img/shopping_cart.png" alt="" />
                </a>
              </div>
            </div>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
    <!-- Modal -->
  </div>
</template>

<script>
import axios from "axios";
import eventApi from "../apis/eventApi";
import lib from "../libs/function";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  data: () => ({
    textAlert: "",
    alertEvent: "success",
    showAlert: false,
    time: 5000,
    loading: false,
    dialog: false,
    defaultEditedItem: {
      zone_name: "",
      events: [],
    },
    editedItem: {
      zone_name: "",
      events: [],
    },
    events: {},
    eventModal: {},
  }),
  validations: {
    editedItem: {
      zone_name: {
        required,
        minLength: minLength(1),
      },
    },
  },
  mounted() {
    this.initialize();
  },
  methods: {
    async initialize() {
      this.loading = true;
      let requests = [eventApi.post(`/scheduleEvents`)];
      let responses = await Promise.all(requests).catch((error) => {
        this.updateAlert(true, "No fue posible obtener los registros.", "fail");
        this.redirectSessionFinished = lib.verifySessionFinished(
          error.response.status,
          401
        );
      });

      this.events = responses[0].data.scheduleEvents;
      this.loading = false;
    },

    updateAlert(show = false, text = "Alerta", event = "success", time = 5000) {
      this.textAlert = text;
      this.alertEvent = event;
      this.showAlert = show;
      this.time = time;
      if (show) {
        this.$refs.top.scrollIntoView();
      }
    },
    close() {
      this.dialog = false;
    },
    async selectEvent(event) {
      this.dialog = true;
      this.eventModal = event;
    },
  },
};
</script>

<style>
</style>