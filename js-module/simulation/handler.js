import Class from './class'

export const Handler = Class.extend({
  initialize: function (target) {
    console.log('handler')
    this.target = target
  }
})

export default Handler
