### 7 配置相关
#### 7.1 配置项webpack.base.conf.js - alias代码指向
当引用文件的时候为了简化引用，需要使用alias
```
resolve: {
  alias: {
    '@': resolve('src')
  }
}
// 使用
import sideBar from '@/components/sideBar'
```
