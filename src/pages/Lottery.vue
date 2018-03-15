<template>
  <div>
    <h4 class="award-count">你有<span class="number">{{awardCount}}</span>次抽奖机会</h4>
    <div class="light light-yellow fadeIn">
      <img class="img-responsive" src="static/images/lottery-light-yellow.png">
    </div>
    <div class="light light-pink fadeIn">
      <img class="img-responsive" src="static/images/lottery-light-pink.png">
    </div>

    <transition-group name="flip-list"
                      tag="div"
                      class="award-list">
      <div class="award-item"
           v-for="(item, index) in awardList"
           :key="item.key"
           :data-index="index"
           :class="{getAward: index === awardIndex}">
        <transition name="flip"
                    v-on:enter="openedCard(item, index)"
                    v-on:leave="closedCard(item,index)">
          <a v-if="!awardItemStates[index].show"
             class="award-item-thumbnail flip award-item-back award-item-draw"
             href="javascript: void (0);"
             :key="item.key+'front'"
             :ref="index+'front'"
             :data-key="index+'front'"
             @click="getAward(item, index)">
            <img class="img-responsive" src="static/images/lottery-click-me.png">
          </a>
          <a v-if="awardItemStates[index].show" class="award-item-thumbnail flip award-item-front"
             href="javascript: void (0)"
             :key="item.key+'back'"
             :ref="index+'back'"
             :data-key="index+'back'"
             @click="getAward(item, index)">
            <img v-show="isOpended" class="img-responsive" :src=item.pic>
            <p v-show="isOpended" class="award-item-text">{{item.prize_name}}</p>
          </a>
        </transition>
      </div>
    </transition-group>

    <!--底部抽奖按钮40-->
    <modal v-show="showPostAddress" class-name="modal-address" @close="confirmSaveAddress">
      <div slot="body">
        <div class="product-img">
          <img class="img-responsive" :src=award.pic>
        </div>
        <p class="text-center get-award-tip" v-award-title="{name: award.prize_name, type: award.type}"></p>
        <p class="text-center adr-tip">请准确填写您的收货地址，奖品会邮寄给您 </p>
        <form class="form-horizontal">
          <div class="form-group">
            <label for="name" class="control-label">收货人</label>
            <div class="form-controls">
              <input type="text" id="name" name="name" v-model="userForm.name"
                     class="form-control">
            </div>
          </div>
          <div class="form-group form-link-adr">
            <label class="control-label">收货地址</label>
            <div class="form-controls">
              <area-link v-model="area"></area-link>
            </div>
          </div>
          <div class="form-group">
            <input type="text" id="address" name="address" v-model="userForm.address"
                   class="form-control" placeholder="详细地址">

          </div>
          <div class="form-group">
            <label for="mobile" class="control-label">联系电话</label>
            <div class="form-controls">
              <input type="number" id="mobile" name="mobile"
                     v-model="userForm.mobile" class="form-control">
            </div>
          </div>
        </form>
        <p class="award-number-tip">您还剩余<span class="modal-award-count">{{awardCount}}</span>次抽奖机会</p>
      </div>
      <div slot="footer">
        <div class="text-center">
          <button type="button" class="btn-save" @click="postAddress">确 定</button>
        </div>
      </div>
    </modal>


    <modal v-model="showDialogFail" class-name="modal-dialog-alert" :show-mask="false" :show-header="false"
           :auto-close="true"
           :count-time="1000"
           :show-footer="false" @close="showDialogFail = false">
      <div slot="body">
        <div class="modal-state">
          <img src="static/images/lottery-cry.png"><span>{{dialogFailText}}</span>
        </div>
      </div>
    </modal>
  </div>
</template>


<script>
  import Modal from '../components/modal.vue'
  import AreaLink from '../components/AreaLink.vue'

  export default {
    name: 'Lottery',
    components: {
      Modal,
      AreaLink
    },
    data() {
      return {
        awardCount: '',
        awardList: [],
        award: {},
        awardItemStates: [],
        userForm: {
          mobile: '',
          address: '',
          name: ''
        },
        area: {
          provinceId: '',
          cityId: '',
          countryId: ''
        },
        isOpended: false,
        awardIndex: 0,
        showPostAddress: false,
        showDialogFail: true,
        dialogFailText: ''
      }
    },

    directives: {
      'awardTitle': {
        inserted: function () {

        }
      }
    },
    methods: {
      openedCard(item, index) {

      },
      closedCard(item, index) {

      },
      getAward(item, index) {

      },
      confirmSaveAddress() {

      },
      postAddress() {

      }
    },
    beforeMount() {

    },
    mounted() {

    }
  }
</script>
