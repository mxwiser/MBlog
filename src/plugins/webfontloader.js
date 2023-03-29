/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

export async function loadFonts () {
  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */'webfontloader')

  webFontLoader.load({
    // google: {
    //   families: ['Noto Sans SC']
    // },active(){
    //   document.body.style.fontFamily = 'Noto Sans SC,sans-serif';
    // }
    custom: {
      families: ['HarmonyOS'],
    },active(){
     document.body.style.fontFamily = 'HarmonyOS,sans-serif';
     }

  })
}
