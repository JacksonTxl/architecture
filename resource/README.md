# 静态资源
静态资源包括图片、压缩文件等。这些文件比网页文件来大的多，直接拖慢网页响应速度。所以将一些公共的资源提取统一管理，以后想更新某些公共的资源图片也不需要全部修改，直接在一处服务器修改即可。同时也能避免遗漏。
#### 1.图片：

###### 1.压缩资源图片。尽量减少资源体积，提高加载速度。
###### 2.如果带宽影响到了访问加载速度，可以增加带宽，而不需要所有服务都增加。
###### 3.使用cdn加速。cdn核心理念就是将内容缓存在终端用户附近，使用户能够就近访问到资源，例如采用缓存的机制。
![cdn](./image/cdn.png)
###### 4.统一替换资源图片快捷方便，不会有遗漏。
###### 5.提供各种图片大小，资源丰富，页面引用灵活，本地不需要存储各种图片。

#### 2.第三方插件：
###### 1.提供各式插件，可以直接支持在页面引用操作。例如地图，语音等。
###### 2.尽量提供插件的差异化版本，可以灵活引用。

#### 3.一些说明类的页面：
###### 1.提供说明类的页面。例如：协议，帮助文档

#### 內容补充：
###### 什么是CDN？
###### CDN的全称是Content Delivery Network，即内容分发网络。其目的是使用户可就近取得所需内容，解决 Internet网络拥挤的状况，提高用户访问网站的响应速度。CDN网络可以将服务器的内容缓存到分布全球的CDN节点，根据用户的访问IP，就近连接CDN，提高网站响应速度。


