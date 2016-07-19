type source = string;

interface IOptions {
  /**
   * url to load as iframce 
   */
  src?: string;
  /**
   * url to load if surrounding protocol is "http"
   */
  http?: string;
  /**
   * url to load if surrounding protocol is "https"
   */
  https?: string;
  /**
   * width of the iframe
   */
  width?: boolean;
  /**
   * height of the iframe
   */
  height?: boolean;
}

export type ILoadIframeOptions = source & IOptions;

/**
 * called when the iframe is loaded
 */
export interface IOnloadCallback {
  (): any;
}

/**
 * the load iframe function
 */
export interface ILoadIframe {
  (options: ILoadIframeOptions, callback?: IOnloadCallback): HTMLIFrameElement;
}

const loadIframe: ILoadIframe;
export default loadIframe;
