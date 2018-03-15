<template>

  <transition name="modal">
    <div v-show="show" class="modal">
      <div class="modal-wrapper">
        <div class="modal-container" :class="className">
          <div class="modal-header">
            <div v-if="showHeader">
              <slot name="header"></slot>
              <button class="btn-modal-close" @click="$emit('close')">
                <img class="img-responsive" src="static/images/btn-modal-close.png">
              </button>
            </div>
          </div>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
          <div class="modal-footer" v-if="showFooter">
            <slot name="footer">
              <!--<button class="modal-default-button" @click="$emit('close')">OK</button>-->
            </slot>
          </div>
        </div>
      </div>
      <div v-if="showMask" class="modal-mask"></div>
    </div>
  </transition>

</template>

<script>
  export default {
    name: 'Modal',
    model: {
      prop: 'show',
      event: 'change'
    },
    props: {
      className: {
        type: String
      },
      showHeader: {
        type: Boolean,
        default: true
      },
      showFooter: {
        type: Boolean,
        default: true
      },
      showMask: {
        type: Boolean,
        default: true
      },
      countTime: {
        type: Number,
        default: 2000
      },
      autoClose: {
        type: Boolean,
        default: false
      },
      show: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        timerId: null
      }
    },
    watch: {
      show(show) {
        if (show) {
          this.showChanged()
        } else {
          this.timerId && clearTimeout(this.timerId)
        }
      }
    },
    methods: {
      showChanged: function () {
        const countTime = this.countTime;
        if (!this.autoClose || countTime === 0) {
          return false;
        }
        this.timerId = setTimeout(() => {
          this.$emit('close');
          clearTimeout(self.timerId);
        }, countTime)
      }
    },
    mounted: function () {
      this.showChanged()
    }
  }
</script>
