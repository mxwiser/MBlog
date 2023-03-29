/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

export async function loadFonts () {
  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */'webfontloader')

  webFontLoader.load({
    // google: {
    //   families: ['Roboto:100,300,400,500,700,900&display=swap'],
    // },active(){
    //   document.body.style.fontFamily = '阿里巴巴普惠体 Light';
    // }
    custom: {
      //families: ['puhui'],
    },active(){
      //document.body.style.fontFamily = 'puhui';
     }

  })
}
