import Class from './class'

export class Handler extends Class {
  constructor (target) {
    super()
    this.target = target
    console.log('handler')
  }
}

export default Handler
