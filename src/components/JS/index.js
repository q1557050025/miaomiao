import Vue from "vue";
import MessageBox from './MessageBox';

export const messageBox = (function() {
  var defaults = {
    title: '信息',
    content: '内容',
    ok: '确定',
    cancel: '取消',
    handleOk: function(){},
    handleCancel: function(){}
  }

  var MyComponent = Vue.extend(MessageBox)

  return (options) => {
    var opts = Object.assign(defaults, options);
    console.log("opts", opts)
    var vm = new MyComponent({
      el: document.createElement('div'),
      data() {
        return {
          title: opts.title,
          content: opts.content,
          ok: opts.ok,
          cancel: opts.cancel
        }
      },
      methods: {
        handleOk() {
          opts.handleOk.call(this)
          document.body.removeChild(vm.$el)
        },
        handleCancel() {
          opts.handleCancel.call(this)
          document.body.removeChild(vm.$el)
        }
      }
    })

    document.body.appendChild(vm.$el)
  }

})()