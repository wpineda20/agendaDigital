<template>
  <vue-dropzone
    ref="myVueDropzone"
    id="dropzone"
    :options="dropzoneOptions"
    @vdropzone-files-added="fileUploaded"
    @vdropzone-success="success"
    :duplicateCheck="true"
    v-model="files"
  ></vue-dropzone>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  components: {
    vueDropzone: vue2Dropzone,
  },
  data: function () {
    return {
      files: [],
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 50,
        acceptedFiles: ".jpeg, .jpg, .png, .webp",
        headers: { "My-Awesome-Header": "header value" },

        addRemoveLinks: true,
        dictDefaultMessage: "Arrastra tus archivos hasta aquí",
        dictFallbackMessage:
          "Tu navegador no soporta delizar y arrastar para subir archivos.",
        dictFallbackText:
          "Utilice el formulario alternativo a continuación para cargar sus archivos.",
        dictFileTooBig:
          "El archivo es demasiado grande ({{filesize}}MiB). Tamaño máximo: {{maxFilesize}}MiB.",
        dictInvalidFileType: "Tipo de archivo no soportado.",
        dictResponseError:
          "El servidor respondió con un código {{statusCode}}.",
        dictCancelUpload: "Cancelar subida",
        dictCancelUploadConfirmation: "Estás seguro que deseas cancelar?",
        dictRemoveFile: "Eliminar",
        dictMaxFilesExceeded: "La cantidad límite de archivos es de 5.",
        dictDuplicateFile: "Duplicate Files Cannot Be Uploaded",
        parallelUploads: 100,
        maxFiles: 5,
      },
    };
  },

  props: {
    removeAll: {
      required: true,
      type: Boolean,
      default: false,
    },
  },

  watch: {
    removeAll(val) {
      if (val == true) {
        this.$refs.myVueDropzone.removeAllFiles();
        this.$emit("clearDropzone", !this.removeAll);
      }
    },
  },

  methods: {
    fileUploaded(e) {
      this.$emit("change", e);
    },
    success() {
      this.$emit("success", true);
    },
  },
};
</script>

<style>
.dropzone .dz-preview.dz-error .dz-error-message {
  position: absolute;
  display: block;
  top: 0.4rem;
}
.vue-dropzone {
  color: #2d52a8;
  border: 1px solid #2d52a8;
  border-radius: 4px;
  margin-top: 6px;
}
</style>
