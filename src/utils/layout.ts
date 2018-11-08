import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Layout extends Vue {
  tableHeight: number = 0
  meterTableHeight() {
    let ref = this.$refs as any
    this.tableHeight = (ref.mainArea ? ref.mainArea.offsetHeight : ref.paneArea.offsetHeight + 8) - (ref.searchArea ? ref.searchArea.offsetHeight : 0) - (ref.btnArea ? ref.btnArea.offsetHeight : 0) - 26
  }
  rePageSize() {
    window.addEventListener('resize', () => {
      this.meterTableHeight()
    })
  }
  mounted() {
    this.$nextTick(() => {
      this.meterTableHeight()
    })
    this.rePageSize()
  }
  activated() {
    this.$nextTick(() => {
      this.meterTableHeight()
    })
    this.rePageSize()
  }
}