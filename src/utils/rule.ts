import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Rules extends Vue {
  rules = {
    name: [
      {required: true, message: '名称不能为空！'}
    ],
    desc: [
      {required: true, message: '描述不能为空！'}
    ],
    one: [
      {required: true, message: '第一负责人不能为空！'}
    ],
    two: [
      {required: true, message: '第二负责人不能为空！'}
    ],
    dev: [
      {required: true, message: '开发人员不能为空！'}
    ],
    lang: [
      {required: true, message: '语言不能为空！'}
    ],
    git: [
      {required: true, message: 'git不能为空！'}
    ],
    params: [
      {required: true, message: '编译参数不能为空！'}
    ],
  }
}