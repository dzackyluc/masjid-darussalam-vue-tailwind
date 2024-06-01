<template>
  <div v-if="isVisible" class="modal-backdrop">
    <transition name="modal">
      <div class="modal" @click.self="hideModal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ title }}</h5>
              <button
                type="button"
                class="btn-close"
                aria-label="Close"
                @click="hideModal"
              ></button>
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    hideModal() {
      this.$emit("update:isVisible", false);
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  transition: 1s;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  transition: 1s;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-dialog {
  max-width: 500px;
  width: 100%;
  margin: 1rem;
}

.modal-content {
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
}

.modal-title {
  margin-bottom: 1rem;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dee2e6;
  padding-bottom: 0.5rem;
}

.modal-footer {
  border-top: 1px solid #dee2e6;
  padding-top: 0.5rem;
  display: flex;
  justify-content: flex-end;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 1s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
