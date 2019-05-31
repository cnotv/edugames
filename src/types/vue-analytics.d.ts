import _Vue, { PluginFunction } from 'vue';

declare class VueAnalytics {
  public static install(Vue: typeof _Vue, options: any): void;
  private analyticsMiddleware: any;
  private onAnalyticsReady: any;
  private event: any;
  private ecommerce: any;
  private set: any;
  private page: any;
  private query: any;
  private screenview: any;
  private time: any;
  private require: any;
  private exception: any;
  private social: any;
}
export default VueAnalytics;

declare module 'vue-analytics' {

}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends _Vue> {
    ga?: VueAnalytics;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $ga: VueAnalytics;
  }
}
