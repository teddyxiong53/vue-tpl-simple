import Vue from 'vue'
import {
    Button,
    Card,
    Input,
    Table,
    TableColumn,
    Dialog,
    Form,
    FormItem,
    Message,
    MessageBox,
    TabPane,
    Tabs,
    Icon
} from 'element-ui'

Vue.use(Button)
Vue.use(Card)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Message)
Vue.use(MessageBox)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Icon)

Vue.prototype.$message = Message
Vue.prototype.$comfirm = MessageBox

