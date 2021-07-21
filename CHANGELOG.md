# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [12.0.0](https://github.com/stackriot/material-components-web/compare/v0.15.0...v12.0.0) (2021-07-21)


* fix(linear-progress) support aria attributes (#5248) ([7084b40](https://github.com/stackriot/material-components-web/commit/7084b403a4ab6be0856c670eebb39078a4fcbcfe)), closes [#5248](https://github.com/stackriot/material-components-web/issues/5248)
*  fix(toolbar): update menu-icon className (#992) (#1373) ([36577ab](https://github.com/stackriot/material-components-web/commit/36577ab7a3236553769a6aa3766213e44847ecf6)), closes [#992](https://github.com/stackriot/material-components-web/issues/992) [#1373](https://github.com/stackriot/material-components-web/issues/1373)


### Bug Fixes

* **animation:** Update exit curves to match spec ([#971](https://github.com/stackriot/material-components-web/issues/971)) ([4844330](https://github.com/stackriot/material-components-web/commit/4844330e7836d9dc97798b47594ff0dbaac51227))
* **auto-init:** Fixed issue with multiple default exports ([#5464](https://github.com/stackriot/material-components-web/issues/5464)) ([8ddd5c6](https://github.com/stackriot/material-components-web/commit/8ddd5c6dcbfa6d81a063b37aee4021ebf34d18f0))
* **banner:** Update image to graphic and support material icons ([346069c](https://github.com/stackriot/material-components-web/commit/346069ccb2a831b37df62bf71135acad92fd69c3))
* **banner:** Use role alertdialog. ([a07b6d4](https://github.com/stackriot/material-components-web/commit/a07b6d486a7852a2089c9c13d5cf80d4ab65a425))
* **base:** Add EDITING and EDITABLE states to the chip. ([cf3b664](https://github.com/stackriot/material-components-web/commit/cf3b664ab1f12b17ea827ad1e2870977b9836e5b))
* **base:** Causes internal text in a chip to not overflow and instead be truncated by ellipsis. ([b83d720](https://github.com/stackriot/material-components-web/commit/b83d720ee41acb13e3e6ca69431f718c7887c1de))
* **base:** Make the root property public ([51d4535](https://github.com/stackriot/material-components-web/commit/51d4535fe39a2448fbba1ec995bb9980357545fa))
* **base:** observer now listens to superclass properties ([88a33cd](https://github.com/stackriot/material-components-web/commit/88a33cd70c0e87fcfb9e2ff58967f911ad71ace7))
* **base:** Remove "foundation_" from MDCComponent ([8c6d7e0](https://github.com/stackriot/material-components-web/commit/8c6d7e0766d8958a8d4ffea35acee9d6841dafd4))
* **base:** Remove trailing underscore "adapter_" ([5b5f62f](https://github.com/stackriot/material-components-web/commit/5b5f62f9397100a9dd97c257b930e686837c4ceb))
* **base:** Remove trailing underscore from superclass properties ([62b5f37](https://github.com/stackriot/material-components-web/commit/62b5f37db092df4441abdf5e4ee0b32dceee8c7c))
* **button:** Add `overflow: visible` to button. ([#4973](https://github.com/stackriot/material-components-web/issues/4973)) ([905e84e](https://github.com/stackriot/material-components-web/commit/905e84e4a2778dcc37202d85acf7bd7a306b0933))
* **button:** Add mdc-typography-base to button ([#949](https://github.com/stackriot/material-components-web/issues/949)) ([3b80525](https://github.com/stackriot/material-components-web/commit/3b80525e333a2936a0004a68f012f308ac1d52a8)), closes [#942](https://github.com/stackriot/material-components-web/issues/942)
* **button:** add missing feature-targeting import ([71fe9a0](https://github.com/stackriot/material-components-web/commit/71fe9a067878c810fe6a7d01b8e839764d7a802c))
* **button:** Adjust touch target size when density is applied ([#5112](https://github.com/stackriot/material-components-web/issues/5112)) ([e2506f4](https://github.com/stackriot/material-components-web/commit/e2506f4b3de7494767197c7c1510c019879f8ecf))
* **button:** allow Mac zoom service to access button label ([29ac6ec](https://github.com/stackriot/material-components-web/commit/29ac6ec1ef7316ecf03dc93ac0d63a3c09250052))
* **button:** Correct misspelling of overflow ([29debfe](https://github.com/stackriot/material-components-web/commit/29debfea704941e80f1d337880b4a18142c11561))
* **button:** Correct misspelling of overflow ([99d2fc9](https://github.com/stackriot/material-components-web/commit/99d2fc961be8cd7e8316b40dcf9754a536d29991))
* **button:** Correct misspelling of overflow ([28d32f8](https://github.com/stackriot/material-components-web/commit/28d32f8e0d923099221fe7d3853177243e0fd243))
* **button:** Default to primary color ([#1356](https://github.com/stackriot/material-components-web/issues/1356)) ([0b808b8](https://github.com/stackriot/material-components-web/commit/0b808b8d47bcbd36e036ffc4b2589c0199a2dd63))
* **button:** Fix non-text buttons with icons to have reduced horizontal padding on the side with the icon. ([197f64f](https://github.com/stackriot/material-components-web/commit/197f64fa2a4b78907261e820c5e1e8724777c92c))
* **button:** Fix outline & ink color according to spec guidance ([#5268](https://github.com/stackriot/material-components-web/issues/5268)) ([ee1a68c](https://github.com/stackriot/material-components-web/commit/ee1a68c54fa9240a334b0462513b855d5dab4807))
* **button:** Fix vertical alignment of contents ([#2534](https://github.com/stackriot/material-components-web/issues/2534)) ([6bc73ca](https://github.com/stackriot/material-components-web/commit/6bc73cac059b88c6abf7dc20e2d79f7263e6bd54))
* **button:** Fixed  parameter default value in height mixin ([#5244](https://github.com/stackriot/material-components-web/issues/5244)) ([b0cecf1](https://github.com/stackriot/material-components-web/commit/b0cecf1451c13fd8c159c1b0ca90b2a1e9b907a0))
* **button:** Fixed button's icon size scaling on browser zoom ([bc104ba](https://github.com/stackriot/material-components-web/commit/bc104bae7c4e1bbcbedb085e6079432f06865cbf))
* **button:** icon in rtl should have margin right flipped. ([#2346](https://github.com/stackriot/material-components-web/issues/2346)) ([3c04419](https://github.com/stackriot/material-components-web/commit/3c04419c83377fab38fe1709e66f777328300491))
* **button:** Ignore CSS variables in Edge for mdc-button-container-fill-color ([5c55e92](https://github.com/stackriot/material-components-web/commit/5c55e920ff9e902499434a4efa3b5121394d9a42))
* **button:** Increase specifity of button icon's CSS class ([#2242](https://github.com/stackriot/material-components-web/issues/2242)) ([f91d25e](https://github.com/stackriot/material-components-web/commit/f91d25e2b73d32a5e41d3d1a1cc5ce860207f0b0))
* **button:** Move theme-baseline() into base Sass. ([080965f](https://github.com/stackriot/material-components-web/commit/080965f3952b32105419558c0167873554234dd0))
* **button:** Remove dense/stroked line-height tweaks to improve alignment ([#3028](https://github.com/stackriot/material-components-web/issues/3028)) ([8b5f595](https://github.com/stackriot/material-components-web/commit/8b5f595aaedd42e17ba95cdf8edfe3a76f346b1b))
* **button:** Remove misspelled label-overlow-ellipsis ([e59906a](https://github.com/stackriot/material-components-web/commit/e59906a57e91604f918c8ccd350f93a9a802e412))
* **button:** Rename stroke to outline ([#2632](https://github.com/stackriot/material-components-web/issues/2632)) ([0033990](https://github.com/stackriot/material-components-web/commit/003399075b864511e935d64c863d81efeb586d7e))
* **button:** Restore order of disabled styles ([#1176](https://github.com/stackriot/material-components-web/issues/1176)) ([6ffed49](https://github.com/stackriot/material-components-web/commit/6ffed498ec724873552d69a4635b8e1a64ad0765))
* **button:** Revise button minimum width ([#1487](https://github.com/stackriot/material-components-web/issues/1487)) ([cb73283](https://github.com/stackriot/material-components-web/commit/cb732834ec918890d707f150c0dd7ada5107f5c8))
* **button:** Stroked buttons should change the padding of the button ([#1538](https://github.com/stackriot/material-components-web/issues/1538)) ([97e5aa8](https://github.com/stackriot/material-components-web/commit/97e5aa81b8b75ac00817d4686aa3c2371c3cd64a))
* **button:** Suppress whitespace between icon and text label ([#2449](https://github.com/stackriot/material-components-web/issues/2449)) ([f504aa6](https://github.com/stackriot/material-components-web/commit/f504aa68d1a87853b352173d0f397d5062ffcc0b))
* **button:** Un-break the build by referencing `secondary` theme prop instead of `accent` ([#1156](https://github.com/stackriot/material-components-web/issues/1156)) ([d3ff8fc](https://github.com/stackriot/material-components-web/commit/d3ff8fc8edd3328a75399171ce3a5324ef35a3f8)), closes [#1074](https://github.com/stackriot/material-components-web/issues/1074) [#1116](https://github.com/stackriot/material-components-web/issues/1116)
* **button:** Update border-width to 1px ([#4606](https://github.com/stackriot/material-components-web/issues/4606)) ([be8747f](https://github.com/stackriot/material-components-web/commit/be8747f94574669cb5e7add1a7c54fa41a89cec7))
* **button:** Update colors to match guidance ([#2598](https://github.com/stackriot/material-components-web/issues/2598)) ([1be9d96](https://github.com/stackriot/material-components-web/commit/1be9d969c91fd674760fd5bbec2055d32c24008a))
* **card:** Center background image ([#2388](https://github.com/stackriot/material-components-web/issues/2388)) ([466e7db](https://github.com/stackriot/material-components-web/commit/466e7dbbcfc920aa97856711ca50ed022d352f1d))
* **card:** Correct text in a card to use text-primar-on-light ([#931](https://github.com/stackriot/material-components-web/issues/931)) ([e3966d9](https://github.com/stackriot/material-components-web/commit/e3966d91b1ae3f890274911feb45465864490897)), closes [#930](https://github.com/stackriot/material-components-web/issues/930)
* **card:** Corrected baseline shape value of card small => medium ([#4060](https://github.com/stackriot/material-components-web/issues/4060)) ([acb9443](https://github.com/stackriot/material-components-web/commit/acb94434a17da457a0da803523d2d8590f4afc7d))
* **card:** ensure border-adjacent content renders correctly. ([790ca85](https://github.com/stackriot/material-components-web/commit/790ca85fd643229e95f2d1c08811c8e0e5513805))
* **card:** Import variables in mixins ([#2799](https://github.com/stackriot/material-components-web/issues/2799)) ([e6b787c](https://github.com/stackriot/material-components-web/commit/e6b787c4dfdd0b6810534d929b3aad2011ab19d3))
* **card:** Remove unused dep/import and add missing dep ([#2234](https://github.com/stackriot/material-components-web/issues/2234)) ([a6de863](https://github.com/stackriot/material-components-web/commit/a6de8639a98ad8801b1706263ec4f6cd4ec3f40a)), closes [#2231](https://github.com/stackriot/material-components-web/issues/2231)
* **card:** Rename stroke to outline ([#2633](https://github.com/stackriot/material-components-web/issues/2633)) ([6657e6f](https://github.com/stackriot/material-components-web/commit/6657e6f40c93fc445e98264e592f8256a83eadfc))
* **card:** Update elevation to match spec ([#4040](https://github.com/stackriot/material-components-web/issues/4040)) ([a6b028d](https://github.com/stackriot/material-components-web/commit/a6b028d2cb2bf1a06a62ad99ae435691a683baf6))
* **card:** Use on-surface color for action icons ([#4519](https://github.com/stackriot/material-components-web/issues/4519)) ([9f37016](https://github.com/stackriot/material-components-web/commit/9f37016490b37deaf87a23b9dc813f5233610635))
* **checkbox:** add aria-checked=mixed to indeterminate state ([#2389](https://github.com/stackriot/material-components-web/issues/2389)) ([cf45654](https://github.com/stackriot/material-components-web/commit/cf45654e026029768e9bd44bab7e38ac81fccc8a))
* **checkbox:** Added missing clearTimeout call to destroy method ([#3674](https://github.com/stackriot/material-components-web/issues/3674)) ([7e5c3ca](https://github.com/stackriot/material-components-web/commit/7e5c3ca7e68ad722a3a65e1f8e2e6b5f76c5d038))
* **checkbox:** Avoid using & within [@at-root](https://github.com/at-root) context ([#2238](https://github.com/stackriot/material-components-web/issues/2238)) ([665cf12](https://github.com/stackriot/material-components-web/commit/665cf12b23745cd406f40186a3a998cad6cc6424))
* **checkbox:** change checkbox event type from change to click and add some logic for IE browser ([#5316](https://github.com/stackriot/material-components-web/issues/5316)) ([2e491de](https://github.com/stackriot/material-components-web/commit/2e491de555d54f8d41474ccda156e5f9d0666bc4)), closes [#4893](https://github.com/stackriot/material-components-web/issues/4893)
* **checkbox:** Change minimum ripple size of checkbox & switch 24px => 28px ([#5140](https://github.com/stackriot/material-components-web/issues/5140)) ([3eae309](https://github.com/stackriot/material-components-web/commit/3eae309495f447c84ba493cb9cbb0058dc53cf6c))
* **checkbox:** Disabled state colors in IE11 high contrast mode ([#5263](https://github.com/stackriot/material-components-web/issues/5263)) ([d6a1d4b](https://github.com/stackriot/material-components-web/commit/d6a1d4bf81b828f214e8bbf941090ef7d8e91c58))
* **checkbox:** Fix background fading too fast ([#2122](https://github.com/stackriot/material-components-web/issues/2122)) ([d461374](https://github.com/stackriot/material-components-web/commit/d46137485aab76304d17214b706265c17ca94e82))
* **checkbox:** Fix checkbox terminology in sass mixins ([#5014](https://github.com/stackriot/material-components-web/issues/5014)) ([2161c02](https://github.com/stackriot/material-components-web/commit/2161c024d012ab90ea6580d53a59d17affcc0e20))
* **checkbox:** Fix visibility in Windows high-contrast mode ([#2672](https://github.com/stackriot/material-components-web/issues/2672)) ([eadec3c](https://github.com/stackriot/material-components-web/commit/eadec3cbfe2282265d61a378911ef684d14b61f9))
* **checkbox:** Fixed checkbox container fill color when animati… ([#4879](https://github.com/stackriot/material-components-web/issues/4879)) ([d393fb5](https://github.com/stackriot/material-components-web/commit/d393fb56cfc6428e29f49baa8c58353233a84daf))
* **checkbox:** Fixed disabled checkbox styles for Edge browser ([#4602](https://github.com/stackriot/material-components-web/issues/4602)) ([7855a6b](https://github.com/stackriot/material-components-web/commit/7855a6b3da79ec7fabdd089779c5a6ee6487bd79))
* **checkbox:** Fixed hover focus colors for unchecked checkbox ([#4868](https://github.com/stackriot/material-components-web/issues/4868)) ([1d8fbf5](https://github.com/stackriot/material-components-web/commit/1d8fbf5dc8322149f18bbad0b11b4c6ecd913f21))
* **checkbox:** Ignore CSS variables in Edge for __background::before ([67129e9](https://github.com/stackriot/material-components-web/commit/67129e9474a799db7e6f22eb10363c7c62ac2ccd))
* **checkbox:** Implement component/adapter APIs to sync aria-checked ([#2580](https://github.com/stackriot/material-components-web/issues/2580)) ([30710a4](https://github.com/stackriot/material-components-web/commit/30710a43688a60a45eca5af6e9a80beb8c103c14))
* **checkbox:** make checkmark in high contrast mode on IE visible. ([#2848](https://github.com/stackriot/material-components-web/issues/2848)) ([9b2c6a1](https://github.com/stackriot/material-components-web/commit/9b2c6a1632d398c7402836edeebdb4cdf2a4d5ed))
* **checkbox:** remove adapter.getNativeCb and move property hooks to component ([#4073](https://github.com/stackriot/material-components-web/issues/4073)) ([5ab68fe](https://github.com/stackriot/material-components-web/commit/5ab68fec33d6d243e56b003e2d82c520bae19620))
* **checkbox:** Remove duplicate background props ([#1812](https://github.com/stackriot/material-components-web/issues/1812)) ([d3a2901](https://github.com/stackriot/material-components-web/commit/d3a2901038a76b764f9ee700942d78f61e290225))
* **checkbox:** remove native control from getters/setters of foundation ([#3408](https://github.com/stackriot/material-components-web/issues/3408)) ([b0fe9cf](https://github.com/stackriot/material-components-web/commit/b0fe9cf255c0119347c66c61605c4c0f21eaa1a3))
* **checkbox:** remove register/deregisterEventlisteners from foundation ([#3402](https://github.com/stackriot/material-components-web/issues/3402)) ([430b338](https://github.com/stackriot/material-components-web/commit/430b338df635609ddf9ebc54a6c395d8bccba060))
* **checkbox:** Remove RTL styles from checkbox ripple ([#5134](https://github.com/stackriot/material-components-web/issues/5134)) ([a646516](https://github.com/stackriot/material-components-web/commit/a6465161b31ebe79a2aecf38f918197e1d83a632))
* **checkbox:** Remove unnecessary :enabled ([#1944](https://github.com/stackriot/material-components-web/issues/1944)) ([9525aec](https://github.com/stackriot/material-components-web/commit/9525aec672c900069a5bbcfa958ddcb227128394))
* **checkbox:** Replace unique-id with custom color hash functio… ([#5404](https://github.com/stackriot/material-components-web/issues/5404)) ([7be9e4a](https://github.com/stackriot/material-components-web/commit/7be9e4a04387b9ca5f8afae6e4edcb3b37e6a86b))
* **checkbox:** Respect BEM when outputting the base stylesheet ([#1733](https://github.com/stackriot/material-components-web/issues/1733)) ([3e9bd5f](https://github.com/stackriot/material-components-web/commit/3e9bd5f7a147e5e3853be37a47a5cd7f76f99327))
* **checkbox:** screenshot test golden update ([#4735](https://github.com/stackriot/material-components-web/issues/4735)) ([0b44494](https://github.com/stackriot/material-components-web/commit/0b4449406d5168c7fcff7879d0ab1e62ff69b365))
* **checkbox:** screenshot test golden update ([#4735](https://github.com/stackriot/material-components-web/issues/4735)) ([adcf840](https://github.com/stackriot/material-components-web/commit/adcf840aa16127f412cc9bf046a809a95d008a15))
* **checkbox:** support high contrast mode in Firefox on Windows ([#2927](https://github.com/stackriot/material-components-web/issues/2927)) ([2bd52c7](https://github.com/stackriot/material-components-web/commit/2bd52c7386ad59cc872ed30a0dfcee021cf17fab))
* **checkbox:** update disabled color values ([#5209](https://github.com/stackriot/material-components-web/issues/5209)) ([821871e](https://github.com/stackriot/material-components-web/commit/821871e04737c5b0c0afded9e8e885680ca25a1f))
* **checkbox:** Update to match new colors ([#2622](https://github.com/stackriot/material-components-web/issues/2622)) ([68f4ad0](https://github.com/stackriot/material-components-web/commit/68f4ad0e2782540740fb71705d92f4f7c1c5ead5))
* **checkbox:** Use secondary and on-secondary as default colors ([b95172e](https://github.com/stackriot/material-components-web/commit/b95172e69613c0defe82191b86ed1c1999b74400)), closes [#5730](https://github.com/stackriot/material-components-web/issues/5730)
* **checkbox:** Use superclass properties without trailing underscores ([2e218db](https://github.com/stackriot/material-components-web/commit/2e218dbf8810548de27b683ed6e25d5fb1cbbc23))
* **chip-set:** crash when only item is removed ([a653b68](https://github.com/stackriot/material-components-web/commit/a653b68118e823ae30b1f47f87a4a8e5e69d9186))
* **chips:** .d.ts file generated with syntax error ([d154836](https://github.com/stackriot/material-components-web/commit/d1548369f2311e164b0920ed651ba211d05543fa))
* **chips:** .d.ts file generated with syntax error ([#5577](https://github.com/stackriot/material-components-web/issues/5577)) ([98f7faa](https://github.com/stackriot/material-components-web/commit/98f7faa05fa7c88e0231a00942f4ff9dedf4e8c0))
* **chips:** Add an event typedef for chip interaction events ([#2965](https://github.com/stackriot/material-components-web/issues/2965)) ([153e737](https://github.com/stackriot/material-components-web/commit/153e7375842aa6119e1e507d0818cfd315963b53))
* **chips:** Add box-sizing back to chip root ([#4807](https://github.com/stackriot/material-components-web/issues/4807)) ([cbee4e2](https://github.com/stackriot/material-components-web/commit/cbee4e279ed43a0559f113bf24af1d6ba8d726d1))
* **chips:** Add box-sizing back to chip root ([#4807](https://github.com/stackriot/material-components-web/issues/4807)) ([19a19b3](https://github.com/stackriot/material-components-web/commit/19a19b3183dfb7f8a4bb8005072f63bc99d93254))
* **chips:** Add delay to filter chip checkmark ([#2804](https://github.com/stackriot/material-components-web/issues/2804)) ([9e35b1e](https://github.com/stackriot/material-components-web/commit/9e35b1eef95b340169b92593b07bb4037fe6aef9))
* **chips:** Add documentation for action ([3db4d16](https://github.com/stackriot/material-components-web/commit/3db4d1680bb4135c44042ac77521c8ff18032d14))
* **chips:** Add documentation for chip; update action docs ([22b83ad](https://github.com/stackriot/material-components-web/commit/22b83adadc55d1d2ccf150bc4a4dc28432f1f453))
* **chips:** Add nowrap to chip text ([#2671](https://github.com/stackriot/material-components-web/issues/2671)) ([7abb3a2](https://github.com/stackriot/material-components-web/commit/7abb3a21b761ef5d453e9516cfbae71cc18bee74))
* **chips:** Add stubbed component methods along with tests ([06930c9](https://github.com/stackriot/material-components-web/commit/06930c96b8a27ec886fc7873d7c0d0a4bec0761a))
* **chips:** Do not throw error if chip set becomes empty ([#5290](https://github.com/stackriot/material-components-web/issues/5290)) ([f978109](https://github.com/stackriot/material-components-web/commit/f978109c33d9e67aebe5af3e460174686eea7b4a))
* **chips:** Document chip set; add root readme ([5b6a460](https://github.com/stackriot/material-components-web/commit/5b6a460167986caea058dd3f42c11c1edd761596))
* **chips:** Emit custom event from trailing icon ([#2286](https://github.com/stackriot/material-components-web/issues/2286)) ([e849937](https://github.com/stackriot/material-components-web/commit/e849937638165662fbbdfe9104e7d273d8bcd25f))
* **chips:** Expose deprecated resources in top-level TypeScript file ([67d780c](https://github.com/stackriot/material-components-web/commit/67d780c795e2a61772f5d1639c202ced3fbc4dc4))
* **chips:** Extend ripple to fill the chip when animating width ([#2423](https://github.com/stackriot/material-components-web/issues/2423)) ([ec705e1](https://github.com/stackriot/material-components-web/commit/ec705e1a2c8e340c3b5886d37b75e6e6d262b843))
* **chips:** Fix browser back nav in FF when removing chip with… ([#5537](https://github.com/stackriot/material-components-web/issues/5537)) ([a1a0deb](https://github.com/stackriot/material-components-web/commit/a1a0deb3ea47d5d89efdcab062e438218148b975))
* **chips:** Fix chips trailing icon margin ([#4720](https://github.com/stackriot/material-components-web/issues/4720)) ([41b1f74](https://github.com/stackriot/material-components-web/commit/41b1f74b010b9caee4319c273a021024f3c57ddd))
* **chips:** Fix chips trailing icon margin ([#4720](https://github.com/stackriot/material-components-web/issues/4720)) ([5de76bc](https://github.com/stackriot/material-components-web/commit/5de76bcd062325917e9f9dd5e122b232adba0e9f))
* **chips:** Fix choice-chips leading icon being hidden ([#2796](https://github.com/stackriot/material-components-web/issues/2796)) ([7d406fa](https://github.com/stackriot/material-components-web/commit/7d406fa06a91ef9d357247ed54483dfd3215f530)), closes [#2728](https://github.com/stackriot/material-components-web/issues/2728)
* **chips:** Fix incorrect references between deprecated and non-deprecated resources ([f8579b7](https://github.com/stackriot/material-components-web/commit/f8579b7eaa22bf9da04ea5e4ec27418e001a0813))
* **chips:** Fix incorrect ripple effect on filter chip ([#4565](https://github.com/stackriot/material-components-web/issues/4565)) ([975bae2](https://github.com/stackriot/material-components-web/commit/975bae276b2d95152b9774b025cb7a4c145f4ef1))
* **chips:** Flip leading icon margin when used in RTL contexts ([#4380](https://github.com/stackriot/material-components-web/issues/4380)) ([ea15b2f](https://github.com/stackriot/material-components-web/commit/ea15b2f254c4bac91d90b781e01fc53b0651ad20))
* **chips:** Handle IE/Edge specific key names in keyboard navigation logic ([3657f88](https://github.com/stackriot/material-components-web/commit/3657f886327182c26f1d1555b2ac67c2128140b5))
* **chips:** Hide HCM focus indicator for presentational actions ([8c7d994](https://github.com/stackriot/material-components-web/commit/8c7d994ae1699fd9e51ea80a073554d12959de3f))
* **chips:** Ignore selection events in chip set ([#4878](https://github.com/stackriot/material-components-web/issues/4878)) ([94c6a00](https://github.com/stackriot/material-components-web/commit/94c6a000b46c3e39af4cf0795dbe2da584cfbf97))
* **chips:** Make chips wrap by default ([24255c4](https://github.com/stackriot/material-components-web/commit/24255c408518dff48ed59c2529ee3d0496d6b40c))
* **chips:** Make event handlers on Chip public ([#2997](https://github.com/stackriot/material-components-web/issues/2997)) ([963e0c1](https://github.com/stackriot/material-components-web/commit/963e0c1052dfb2fe9c31c3a5a3a6c0c65e3ec40e))
* **chips:** Manage chip selection for classes added manually ([#2391](https://github.com/stackriot/material-components-web/issues/2391)) ([66f2464](https://github.com/stackriot/material-components-web/commit/66f2464e199a54872530ba514e61ff145d35cc80))
* **chips:** Move touch target inside primary action ([ad3bbf7](https://github.com/stackriot/material-components-web/commit/ad3bbf7822d1fe26694b798299c48e8896971e25))
* **chips:** Notify ChipSet when selected is set directly on the Chip ([#3601](https://github.com/stackriot/material-components-web/issues/3601)) ([891f30d](https://github.com/stackriot/material-components-web/commit/891f30d5925ff8a6c47fec50dae1cd73d8ea5b97))
* **chips:** Remove color change from selected filter chips ([#3093](https://github.com/stackriot/material-components-web/issues/3093)) ([19e3d7f](https://github.com/stackriot/material-components-web/commit/19e3d7f0d24797020f2813858cf08380232e2445))
* **chips:** Remove keyCode check ([#4966](https://github.com/stackriot/material-components-web/issues/4966)) ([e6304c4](https://github.com/stackriot/material-components-web/commit/e6304c46d0f9d14602c7924950db304850bb50d9))
* **chips:** Remove obsolete chips resources now in chips/deprecated/* ([87ac2fd](https://github.com/stackriot/material-components-web/commit/87ac2fd5ca4ec7814216d16a0b0ef6a4474d7e92))
* **chips:** Remove obsolete resources ([40dd242](https://github.com/stackriot/material-components-web/commit/40dd242d5ce4586002a8e5cb59ce2711572f1cf3))
* **chips:** Rename all entry chips to input chips ([#2619](https://github.com/stackriot/material-components-web/issues/2619)) ([a694a34](https://github.com/stackriot/material-components-web/commit/a694a343ba46882d2870174d5b9e15e34f49a2de))
* **chips:** rename deprecated trailing action classes ([48f4b67](https://github.com/stackriot/material-components-web/commit/48f4b67fbd0d43377670673e56cb5868b3a11e1d))
* **chips:** Rename stroke to outline ([#2635](https://github.com/stackriot/material-components-web/issues/2635)) ([604ddad](https://github.com/stackriot/material-components-web/commit/604ddad096ec6bac92af8ed4cb838e344201a057))
* **chips:** Reset touch target when chip density mixin is applied. ([#5116](https://github.com/stackriot/material-components-web/issues/5116)) ([d3b515e](https://github.com/stackriot/material-components-web/commit/d3b515e894da3045b24816226306254516c6995a))
* **chips:** Stack trailing/leading icons above touch target el ([#5040](https://github.com/stackriot/material-components-web/issues/5040)) ([048d4b7](https://github.com/stackriot/material-components-web/commit/048d4b7bf4335f03c8f18051989ffc6fe1693b12))
* **chips:** Stop emitting events in handlers ([#4969](https://github.com/stackriot/material-components-web/issues/4969)) ([cfd81dc](https://github.com/stackriot/material-components-web/commit/cfd81dc8cc1648b03f69ebe1f8eb1c0b8e6ad27e))
* **chips:** Trailing icon and remove icon are the same thing ([#2616](https://github.com/stackriot/material-components-web/issues/2616)) ([9e64c32](https://github.com/stackriot/material-components-web/commit/9e64c328942af884d6b9a1b01923df7ed0b32de4))
* **chips:** Un-remove obsolete chips resources now in chips/deprecated/* ([7cf6782](https://github.com/stackriot/material-components-web/commit/7cf67823ec45a93f5b458060b2ec632479d813c9))
* **chips:** Update chip set links ([4a7939c](https://github.com/stackriot/material-components-web/commit/4a7939c9c3f3ec54bc486ee22567f9ca4e8f18bb))
* **chips:** Update to guidance ([#2601](https://github.com/stackriot/material-components-web/issues/2601)) ([c529cea](https://github.com/stackriot/material-components-web/commit/c529cea17efcabb10bb1e22b51b902be474e1005))
* **chips:** Use deprecated chips in autoinit ([d2a39d3](https://github.com/stackriot/material-components-web/commit/d2a39d300e3b9dee6c0d58d34522075f62b261c3))
* **chips:** Use required pixel value ([#4361](https://github.com/stackriot/material-components-web/issues/4361)) ([fdfd934](https://github.com/stackriot/material-components-web/commit/fdfd9347180d9d1642452b559d249e56fc3fb8eb))
* **chips:** Use superclass properties without trailing underscores ([cf7747e](https://github.com/stackriot/material-components-web/commit/cf7747ef72efb4affe2dd920a6641f730f3bcfcd))
* **circular-progress:** Add .npmignore file to ignore typescript files when publishing ([#5801](https://github.com/stackriot/material-components-web/issues/5801)) ([f172b0f](https://github.com/stackriot/material-components-web/commit/f172b0f90a91d8d3d700763d1496bb7b9c1a8d51)), closes [#5800](https://github.com/stackriot/material-components-web/issues/5800)
* **circular-progress:** add annotation ([06dead2](https://github.com/stackriot/material-components-web/commit/06dead2d69d09dfde582d0d9fb1473a61358a5f6))
* **circular-progress:** Default all variables ([430fd02](https://github.com/stackriot/material-components-web/commit/430fd025b07b3e15dd699620fbbfca75f74632a3))
* **circular-progress:** display properly inside button ([000d648](https://github.com/stackriot/material-components-web/commit/000d6481570c361cf4c66b55c287eea434b6d11e)), closes [#6388](https://github.com/stackriot/material-components-web/issues/6388)
* **circular-progress:** display properly inside button ([2bd09a7](https://github.com/stackriot/material-components-web/commit/2bd09a706efb991fd71e171db8994f0282a1f02e))
* **circular-progress:** fix determinate transition typo & 4 color keyframes ([a301636](https://github.com/stackriot/material-components-web/commit/a3016368df53b1c7967d7d146a9ea53a24442fa9))
* **circular-progress:** Fix naming in package.json and add to jsBundleFactory ([86f7cad](https://github.com/stackriot/material-components-web/commit/86f7cad8330dbd600e478610eefd8dd92eb3d8c7))
* **circular-progress:** Force LTR layout ([6a40ef2](https://github.com/stackriot/material-components-web/commit/6a40ef217f597138ee2920d2160364649dbf5620))
* **circular-progress:** set explicit line-height to prevent inheritance ([e8e39ad](https://github.com/stackriot/material-components-web/commit/e8e39ad19d9fae1ddbf065c9047905753ccd5754)), closes [#7118](https://github.com/stackriot/material-components-web/issues/7118)
* **circular-progress:** Switch mixins import to `[@use](https://github.com/use)` ([098ae32](https://github.com/stackriot/material-components-web/commit/098ae3285223af2532659dec233537a55c1183f5))
* **circular-progress:** use theme.property() for color mixins ([7bd5075](https://github.com/stackriot/material-components-web/commit/7bd5075de978f8499f4cdc3b8359005184fa5192))
* **circularprogress:** Use superclass properties without trailing underscores ([da05f66](https://github.com/stackriot/material-components-web/commit/da05f66e10f8efe5c425cec7f140ed399b11bd3f))
* **core:** Fix canary release by excluding test files from default tsconfig ([#5317](https://github.com/stackriot/material-components-web/issues/5317)) ([c916008](https://github.com/stackriot/material-components-web/commit/c9160084f1f64800e74e0e69673c6b2beca22ee4))
* **data-table:** Add .npmignore to ignore typescript files when… ([#4992](https://github.com/stackriot/material-components-web/issues/4992)) ([dd422d1](https://github.com/stackriot/material-components-web/commit/dd422d10cd2f4cf8fbb1f58a849354756325dcb0))
* **data-table:** Add noflip annotation to header cell text align ([843f636](https://github.com/stackriot/material-components-web/commit/843f636c047b5371cd31b9ae4af76a7ec494b446))
* **data-table:** change svg attribute name viewbox to viewBox ([#5483](https://github.com/stackriot/material-components-web/issues/5483)) ([#5493](https://github.com/stackriot/material-components-web/issues/5493)) ([f3adce8](https://github.com/stackriot/material-components-web/commit/f3adce86f43c15d3e2311363bf317ff68a3bb99d))
* **data-table:** Check if data table has checkboxes on destroy ([164c073](https://github.com/stackriot/material-components-web/commit/164c07365ef405a14e4375db71fbc55931aa9262))
* **data-table:** Fix icon misalignment in sort icon button when sorted down ([610c26c](https://github.com/stackriot/material-components-web/commit/610c26c4a1c7928fec0e8d63be3bd76cb7ff76a0))
* **data-table:** Fix JS error in IE11 when setting multiple styles ([d548d7a](https://github.com/stackriot/material-components-web/commit/d548d7a923393f4be11a7919542fa07f5a224d29))
* **data-table:** Fix pagination box height ([eb28b6e](https://github.com/stackriot/material-components-web/commit/eb28b6ecc65a9979ef0959eac5dbfde5b4d3b2dc))
* **data-table:** Fix row checkbox cell's leading padding to match spec ([38ef450](https://github.com/stackriot/material-components-web/commit/38ef4501f630351b32efd31ea2b870e0ed1b1b1d))
* **data-table:** fix style ordering wrt select & use new variable-width mixin ([afb6889](https://github.com/stackriot/material-components-web/commit/afb68894e63c9ed4bb3b3d523cbb4072480117a6)), closes [#6599](https://github.com/stackriot/material-components-web/issues/6599)
* **data-table:** Fixed alignment of header cell title for numer… ([#4963](https://github.com/stackriot/material-components-web/issues/4963)) ([b6274a7](https://github.com/stackriot/material-components-web/commit/b6274a702a562f6a8ad1cc612af006809ced21d1))
* **data-table:** Fixed alignment of numeric header cell with sort button. ([2139200](https://github.com/stackriot/material-components-web/commit/2139200b3ed2b57d74a02701bfef23a983d19cdf))
* **data-table:** Fixed default feature targeting query params of sort mixins ([e33c49e](https://github.com/stackriot/material-components-web/commit/e33c49eaf9c0dbc601f3610af6358cbf2833229c))
* **data-table:** Fixed horizontal scrolling issue with pagination controls ([b065a4d](https://github.com/stackriot/material-components-web/commit/b065a4d2bd351b86277f5a2f4d512fb6c243c7ce))
* **data-table:** Hover styles for sortable header cell ([d580805](https://github.com/stackriot/material-components-web/commit/d5808057fcdf00364731e0896ef7031ac605cf55))
* **data-table:** Make row checkbox table cell fixed even when table is wide ([a6ac8f6](https://github.com/stackriot/material-components-web/commit/a6ac8f629b45e46d598b4b531fed8300fb5a8eef))
* **data-table:** Minor fixes for data table layout ([#5037](https://github.com/stackriot/material-components-web/issues/5037)) ([37b1f93](https://github.com/stackriot/material-components-web/commit/37b1f93188e049c65a3422b742a076affab2e84d))
* **data-table:** not inverting text alignment in rtl ([bd8d1aa](https://github.com/stackriot/material-components-web/commit/bd8d1aafab5c6da614135702f5814447de5ea448))
* **data-table:** partial rollback of [#6390](https://github.com/stackriot/material-components-web/issues/6390) ([da72839](https://github.com/stackriot/material-components-web/commit/da72839f40a432c529bb24e5bc4514842627d3bf))
* **data-table:** Removed overflow-x from root element ([4ebce8d](https://github.com/stackriot/material-components-web/commit/4ebce8d787db92afb4c1f9d2a10268a62d188d43))
* **data-table:** Reverse the arrow direction icon for column sorting ([a7c827f](https://github.com/stackriot/material-components-web/commit/a7c827f17ce9be631484676ccb6b5f18604803ae))
* **data-table:** Set progress indicator height to table body offset height ([c678a9d](https://github.com/stackriot/material-components-web/commit/c678a9d34a3f694511f292c7a62e68749721b63c))
* **data-table:** unable to redefine colors in class-based themi… ([#5751](https://github.com/stackriot/material-components-web/issues/5751)) ([4d48051](https://github.com/stackriot/material-components-web/commit/4d48051c1099f48e867cf08f070138a7abc719fc))
* **data-table:** unable to redefine colors in class-based theming ([4b45b66](https://github.com/stackriot/material-components-web/commit/4b45b662057edd8819f1a515db88e1c12254cc30))
* **datatable:** Fix updating the header checkbox when there are no rows in a datatable ([2ccf996](https://github.com/stackriot/material-components-web/commit/2ccf996cc417b888d7ac4ceebdfa4160464a0bb1))
* **datatable:** Use superclass properties without trailing underscores ([862d0d7](https://github.com/stackriot/material-components-web/commit/862d0d7bce4fc30a1947d1ff7cb7286c106dd9e5))
* **demos:** add back button to header on drawer demos page ([#1703](https://github.com/stackriot/material-components-web/issues/1703)) ([fa72e42](https://github.com/stackriot/material-components-web/commit/fa72e425105a3666f5ab62bc0c1ee98da14fcb6e))
* **demos:** Convert NodeList to array for forEach; avoid fat arrow ([#1073](https://github.com/stackriot/material-components-web/issues/1073)) ([c6a1f2a](https://github.com/stackriot/material-components-web/commit/c6a1f2a3ce62c8b96f055766996ae628b1ed6a04))
* **demos:** Correct RTL/LTR toggling in demos in Safari ([#2348](https://github.com/stackriot/material-components-web/issues/2348)) ([b9000a4](https://github.com/stackriot/material-components-web/commit/b9000a43ef7fcab1d653c7f04c67d3d5314352b4))
* **demos:** Corrected HTML structure in demo index page for two-line list ([#3359](https://github.com/stackriot/material-components-web/issues/3359)) ([15f376c](https://github.com/stackriot/material-components-web/commit/15f376cab403283da58fea30c93972fec269cdd2))
* **demos:** Fix button demo update from [#1176](https://github.com/stackriot/material-components-web/issues/1176) to work in IE 11 ([#1178](https://github.com/stackriot/material-components-web/issues/1178)) ([dadc597](https://github.com/stackriot/material-components-web/commit/dadc597de5ccd093ef2703b271dc522fde7ca04a))
* **demos:** Fix CSS selector for dark theme buttons ([#1933](https://github.com/stackriot/material-components-web/issues/1933)) ([bbc479c](https://github.com/stackriot/material-components-web/commit/bbc479ce32fa713cb0d2d853e6344b9f15210d78))
* **demos:** Fix drawer menu icon position in RTL ([#1931](https://github.com/stackriot/material-components-web/issues/1931)) ([8848fcc](https://github.com/stackriot/material-components-web/commit/8848fccb285fdcd373da80b7d938d87767e8a0e7))
* **demos:** Fix NPEs in drawer demos ([#1946](https://github.com/stackriot/material-components-web/issues/1946)) ([2c92827](https://github.com/stackriot/material-components-web/commit/2c928279cce2c193684aa2538c3d48ce9251713c))
* **demos:** Fix ready.js to avoid false positive before document load ([#2180](https://github.com/stackriot/material-components-web/issues/2180)) ([2fe4dcd](https://github.com/stackriot/material-components-web/commit/2fe4dcd9568f46b836008814ea94899cf3969e70))
* **demos:** Fix trailing whitespace and mixed tabs in dialog demo ([#1200](https://github.com/stackriot/material-components-web/issues/1200)) ([e1f5d53](https://github.com/stackriot/material-components-web/commit/e1f5d53b3ddb971285883ea4b97a052ea13781c9))
* **demos:** Make unsupported ripple message visible and improve detection ([#1408](https://github.com/stackriot/material-components-web/issues/1408)) ([1044cf5](https://github.com/stackriot/material-components-web/commit/1044cf5595feb2ee2a5129dce5ddbb17aa6ef854))
* **demos:** Re-enable JS source maps ([#2124](https://github.com/stackriot/material-components-web/issues/2124)) ([929eb8c](https://github.com/stackriot/material-components-web/commit/929eb8ce3e9d1c3e3973861f98731db5add584bf))
* **demos:** Remove space between toolbar title and navigation icon. ([#2174](https://github.com/stackriot/material-components-web/issues/2174)) ([3b0977d](https://github.com/stackriot/material-components-web/commit/3b0977d60fe6c94528bb348bff5b17edf460ff1f))
* **demos:** Sanitize slider input values ([#2018](https://github.com/stackriot/material-components-web/issues/2018)) ([f3d4ca7](https://github.com/stackriot/material-components-web/commit/f3d4ca7728e6e04ee325e2f4684fc805b5282dd2))
* **demos:** Update first tab bar's layout when toggling RTL ([#1204](https://github.com/stackriot/material-components-web/issues/1204)) ([cdd367e](https://github.com/stackriot/material-components-web/commit/cdd367e1b6094c3540db5416e70013fb0eeb11b0))
* **demos:** Update misleading textfield validation message ([#1377](https://github.com/stackriot/material-components-web/issues/1377)) ([99c9596](https://github.com/stackriot/material-components-web/commit/99c9596d23644ea1e51c646e69a98e29df8d0317))
* **dialog:** Add noflip annotations for GSS compiler. ([#4769](https://github.com/stackriot/material-components-web/issues/4769)) ([d644e78](https://github.com/stackriot/material-components-web/commit/d644e78775996d8f519d3e7f261741f8c633e32f))
* **dialog:** Add noflip annotations for GSS compiler. ([#4769](https://github.com/stackriot/material-components-web/issues/4769)) ([5563a12](https://github.com/stackriot/material-components-web/commit/5563a122066b1ad6f08ce710438a18dcdac6a860))
* **dialog:** add property to customize suppressDefaultPressSelector ([772cc10](https://github.com/stackriot/material-components-web/commit/772cc10686cc8994033a556ab70f4be106e902ee))
* **dialog:** Add redlines to dialog screenshots; update to match spec ([#3602](https://github.com/stackriot/material-components-web/issues/3602)) ([4da83dd](https://github.com/stackriot/material-components-web/commit/4da83dd83134e80e4e736103e16889d812e60fd6))
* **dialog:** Add transparent border to dialog surface for HCM support. ([b2fa996](https://github.com/stackriot/material-components-web/commit/b2fa996a1faa513fae691920cb339091d65b6c9b))
* **dialog:** allow click events to propagate ([#869](https://github.com/stackriot/material-components-web/issues/869)) ([ef7e540](https://github.com/stackriot/material-components-web/commit/ef7e5402db32b990d41d22ebda90d8f7d9b4e8a2)), closes [#794](https://github.com/stackriot/material-components-web/issues/794)
* **dialog:** Apply max-width to same element as min-width ([#3749](https://github.com/stackriot/material-components-web/issues/3749)) ([2dac7e1](https://github.com/stackriot/material-components-web/commit/2dac7e11bb16c86a03445de050b0227de032842d))
* **dialog:** Apply mdc-dialog__action color to buttons ([#2776](https://github.com/stackriot/material-components-web/issues/2776)) ([6066795](https://github.com/stackriot/material-components-web/commit/60667958e7e03b9427cc15d22d8dfee8b385ac33))
* **dialog:** Cancel open's rAF when close is called ([#4087](https://github.com/stackriot/material-components-web/issues/4087)) ([2516c25](https://github.com/stackriot/material-components-web/commit/2516c25c1984c66d22d8a7876bd1731aa01e8291))
* **dialog:** Change scale(1) to `transform:none` ([9ea5207](https://github.com/stackriot/material-components-web/commit/9ea52070f4f9693266a20311cce15700e84696c3))
* **dialog:** Conform more closely with spec ([#3575](https://github.com/stackriot/material-components-web/issues/3575)) ([359710d](https://github.com/stackriot/material-components-web/commit/359710deee281200b3a65c14ae3b3ccef04118ff))
* **dialog:** Dialog buttons should use primary color ([#941](https://github.com/stackriot/material-components-web/issues/941)) ([b4e8b5a](https://github.com/stackriot/material-components-web/commit/b4e8b5a23efad7e4d6035c5cf325a5d8726102ef)), closes [#940](https://github.com/stackriot/material-components-web/issues/940)
* **dialog:** Dialog scroll-lock fix when calling destroy immediately after close ([#2120](https://github.com/stackriot/material-components-web/issues/2120)) ([c961a5d](https://github.com/stackriot/material-components-web/commit/c961a5dc6163ae4cd70a0a8b6abd8529b8250d26))
* **dialog:** Expose numbers on foundation ([#3346](https://github.com/stackriot/material-components-web/issues/3346)) ([8f35741](https://github.com/stackriot/material-components-web/commit/8f35741c0621a56b77b4f6722a76e026a600e345))
* **dialog:** Fix scrolling content overflowing on Chrome/Android. ([#4746](https://github.com/stackriot/material-components-web/issues/4746)) ([f741ae0](https://github.com/stackriot/material-components-web/commit/f741ae0091b20cd8f9ac80bfb2f0a55176fdd6d2))
* **dialog:** Fix scrolling content overflowing on Chrome/Android. ([#4746](https://github.com/stackriot/material-components-web/issues/4746)) ([3e9abda](https://github.com/stackriot/material-components-web/commit/3e9abda8e7d7ac359f0161b34c4f4b24efc8f5f2))
* **dialog:** Fix Typography version ([#2821](https://github.com/stackriot/material-components-web/issues/2821)) ([e793a56](https://github.com/stackriot/material-components-web/commit/e793a564878b85085ae2a3cdcddaf366e06b5ed6))
* **dialog:** Fix z-index & wrong CSS ([#1094](https://github.com/stackriot/material-components-web/issues/1094)) ([88b7167](https://github.com/stackriot/material-components-web/commit/88b7167a9c24fab47237b46cdaaf36a9aead16fc)), closes [#1095](https://github.com/stackriot/material-components-web/issues/1095) [#1096](https://github.com/stackriot/material-components-web/issues/1096)
* **dialog:** fixed dark-theme dialog copy color ([#1524](https://github.com/stackriot/material-components-web/issues/1524)) ([1aa3760](https://github.com/stackriot/material-components-web/commit/1aa3760e3943dc13f1c5ee5fcf198401fd3b11af)), closes [#1032](https://github.com/stackriot/material-components-web/issues/1032)
* **dialog:** Fixes transitionend event not always being called ([#3267](https://github.com/stackriot/material-components-web/issues/3267)) ([fe9d195](https://github.com/stackriot/material-components-web/commit/fe9d19596836859777a0ca207ea715220b8ae565))
* **dialog:** Increase z-index above Drawer ([#3597](https://github.com/stackriot/material-components-web/issues/3597)) ([c1bd45a](https://github.com/stackriot/material-components-web/commit/c1bd45a523347cdf8d1fb34d939b7cc1b9c4e974))
* **dialog:** Layout footer buttons' ripples after open transition ends ([#1087](https://github.com/stackriot/material-components-web/issues/1087)) ([c51fcd5](https://github.com/stackriot/material-components-web/commit/c51fcd5a438ad9f01b0958dd94f56ac19c601085))
* **dialog:** Move aria roles from dialog root to dialog surface… ([#5239](https://github.com/stackriot/material-components-web/issues/5239)) ([c704b71](https://github.com/stackriot/material-components-web/commit/c704b71d931dd0db191a30ff88a5d0c44f099300))
* **dialog:** Only equalize paddings for scrollable dialogs with titles, since there is no added divider between title/content in this case. ([8135cc0](https://github.com/stackriot/material-components-web/commit/8135cc085a5cd548cf8c8fba4bb43a21bcd3fd46))
* **dialog:** prevent programmatic click on disabled default button ([e0c3462](https://github.com/stackriot/material-components-web/commit/e0c346286a9656819302f04b0cf3f7b948429f74))
* **dialog:** Release focus after style changes on close ([#4069](https://github.com/stackriot/material-components-web/issues/4069)) ([e12997a](https://github.com/stackriot/material-components-web/commit/e12997a3c4e851f673a04bd3fde2ff51f47e2948))
* **dialog:** Remove code that does nothing ([#1935](https://github.com/stackriot/material-components-web/issues/1935)) ([fd0c675](https://github.com/stackriot/material-components-web/commit/fd0c67581419a6efcbbadade72ec301c8a6f43ce))
* **dialog:** Remove the unnecessary border on the dialog title when not needed, this adds an extra line in the UI on high contrast mode. With margins it is possible to keep the previous spacing and only add the border when needed. ([3344d12](https://github.com/stackriot/material-components-web/commit/3344d12ad2eb74cfc4ef270290bcc0322ebe8566))
* **dialog:** Use 100vw for dialog max-width calculation. ([#4766](https://github.com/stackriot/material-components-web/issues/4766)) ([d0b8c89](https://github.com/stackriot/material-components-web/commit/d0b8c8923b6368aafc921c83ce9bc4bac17d9c27)), closes [#4746](https://github.com/stackriot/material-components-web/issues/4746)
* **dialog:** Use 100vw for dialog max-width calculation. ([#4766](https://github.com/stackriot/material-components-web/issues/4766)) ([f918e0a](https://github.com/stackriot/material-components-web/commit/f918e0abc64868542da251c9bfcb6dcc97be3c3f)), closes [#4746](https://github.com/stackriot/material-components-web/issues/4746)
* **dialog:** Use superclass properties without trailing underscores ([b4e2fe9](https://github.com/stackriot/material-components-web/commit/b4e2fe9f4bf690968d0ac47da0ca4a64ee8d7a88))
* **dialog:** Wait for rAF/timeout to apply open class ([#3682](https://github.com/stackriot/material-components-web/issues/3682)) ([4fd076b](https://github.com/stackriot/material-components-web/commit/4fd076bcba0546e896147ae3a5541a61b613bd77))
* **dom:** Clear out announcer regions on document click ([c67667e](https://github.com/stackriot/material-components-web/commit/c67667e8e213ed4686889cb3962685444bd885c6))
* **dom:** do not cache focusable elements in focus-trap ([7899e0f](https://github.com/stackriot/material-components-web/commit/7899e0fe0a87cb255a5216333054207ef2687933))
* **dom:** Make dom selectors in dom/announce tests scoped ([fc65fd0](https://github.com/stackriot/material-components-web/commit/fc65fd00b91d388d0ad15e50a13567a8e1d425c0))
* **drawer:** Align open & close animations to spec ([#976](https://github.com/stackriot/material-components-web/issues/976)) ([b001aec](https://github.com/stackriot/material-components-web/commit/b001aecc06af4950dabf9c1c320c51b8b4dd0371)), closes [#646](https://github.com/stackriot/material-components-web/issues/646)
* **drawer:** allow drawer below top app bar ([#4028](https://github.com/stackriot/material-components-web/issues/4028)) ([ebdb084](https://github.com/stackriot/material-components-web/commit/ebdb084ca505380a21e4e90215c51e86e61b4c58))
* **drawer:** Change how click events are handled ([3e173e1](https://github.com/stackriot/material-components-web/commit/3e173e1ddc3bff5c7c9c2d794eeb36a9354ec98c))
* **drawer:** check for existence of ANIMATE class name in isOpening condition ([#4078](https://github.com/stackriot/material-components-web/issues/4078)) ([a4fd0a6](https://github.com/stackriot/material-components-web/commit/a4fd0a6419a197521ea00d7c873be44cb2e3da30))
* **drawer:** Destroy list in destroy method ([#3474](https://github.com/stackriot/material-components-web/issues/3474)) ([325317c](https://github.com/stackriot/material-components-web/commit/325317cbf927c1c4c65adcffd9dad1dbb190049b))
* **drawer:** Fix drawer content to have momentum scroll on iOS ([#3578](https://github.com/stackriot/material-components-web/issues/3578)) ([c65be9b](https://github.com/stackriot/material-components-web/commit/c65be9bafbf936e80690b6310ad3a05ad2453118))
* **drawer:** Fix exports and closure tests ([#3424](https://github.com/stackriot/material-components-web/issues/3424)) ([8d53068](https://github.com/stackriot/material-components-web/commit/8d53068fdca10d88e8e5f4d2f9d2a854ff656da1))
* **drawer:** Fix issue where drawer fires opened event twice. ([#4027](https://github.com/stackriot/material-components-web/issues/4027)) ([72ef4e8](https://github.com/stackriot/material-components-web/commit/72ef4e8d2eb078095ba28f5a8eabf9c7585cf4e6))
* **drawer:** Fix restore & release focus order when closing the drawer ([#4304](https://github.com/stackriot/material-components-web/issues/4304)) ([dffbcc1](https://github.com/stackriot/material-components-web/commit/dffbcc138bf61c19371291b4b55269ffdc887aba))
* **drawer:** Fix slidable drawer's closed position in RTL ([#1957](https://github.com/stackriot/material-components-web/issues/1957)) ([486ec87](https://github.com/stackriot/material-components-web/commit/486ec87c6a7102bd5d312cbcff2736baca696f8d)), closes [#1930](https://github.com/stackriot/material-components-web/issues/1930)
* **drawer:** fixed drawer demo typos ([#2115](https://github.com/stackriot/material-components-web/issues/2115)) ([c52a4b6](https://github.com/stackriot/material-components-web/commit/c52a4b638c9b5b6b921730a4f5a477a88ac68778))
* **drawer:** link to the es6 component js file in screenshot spec ([#3696](https://github.com/stackriot/material-components-web/issues/3696)) ([8d96a72](https://github.com/stackriot/material-components-web/commit/8d96a727bae77f514a4184ae217472e1485ef204))
* **drawer:** Modal --open state class needs display: flex ([#3431](https://github.com/stackriot/material-components-web/issues/3431)) ([533a46f](https://github.com/stackriot/material-components-web/commit/533a46fea5a79763bb4c3acccdb130e73e8e5b57))
* **drawer:** remove dark theme ([#2080](https://github.com/stackriot/material-components-web/issues/2080)) ([f05ebb5](https://github.com/stackriot/material-components-web/commit/f05ebb57638d34482dfeb83f5518d7fbfb31e831))
* **drawer:** Remove list item children to be included in click target. ([#3480](https://github.com/stackriot/material-components-web/issues/3480)) ([cc3ae2f](https://github.com/stackriot/material-components-web/commit/cc3ae2f99bc58a0712bfd38f1d4370ab19e46f50))
* **drawer:** Remove redundant style ([#3731](https://github.com/stackriot/material-components-web/issues/3731)) ([716da5a](https://github.com/stackriot/material-components-web/commit/716da5a1739c6122704a4efca1b26e606967f4cb))
* **drawer:** Remove unnecessary Closure annotation ([#3935](https://github.com/stackriot/material-components-web/issues/3935)) ([61128be](https://github.com/stackriot/material-components-web/commit/61128be345fbfda4d80e4c72753cd56b2e9eee51))
* **drawer:** Temporary drawer is below toolbar ([#925](https://github.com/stackriot/material-components-web/issues/925)) ([cbc8436](https://github.com/stackriot/material-components-web/commit/cbc84361352bce28a9f1c50e44ee47f664703af5))
* **drawer:** Update menu icon to be anchor element ([#2372](https://github.com/stackriot/material-components-web/issues/2372)) ([1065a74](https://github.com/stackriot/material-components-web/commit/1065a74ea68757cb4b2c925060166a659dc8964d))
* **drawer:** Update motion to match spec ([#2398](https://github.com/stackriot/material-components-web/issues/2398)) ([6417b51](https://github.com/stackriot/material-components-web/commit/6417b51b1f43bfb0a1bc920d346cd71e64389248))
* **drawer:** update radio button ids to correct add/remove classes on demos ([#1883](https://github.com/stackriot/material-components-web/issues/1883)) ([ac46b88](https://github.com/stackriot/material-components-web/commit/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f))
* **drawer:** Upgrade focus-trap version in drawer & dialog ([#4217](https://github.com/stackriot/material-components-web/issues/4217)) ([ea37b07](https://github.com/stackriot/material-components-web/commit/ea37b07d0387c43528bf3a231bfeee90b17dcd2c))
* **drawer:** Use parentNode DOM API when selecting scrim to make it work with Shadow DOM ([#4265](https://github.com/stackriot/material-components-web/issues/4265)) ([385a223](https://github.com/stackriot/material-components-web/commit/385a22307defde1663eb9dd4caacca152b1e90a8))
* **drawer:** Use rAF/setTimeout for opening class ([#3683](https://github.com/stackriot/material-components-web/issues/3683)) ([26a6981](https://github.com/stackriot/material-components-web/commit/26a6981e7ccaa82113e58fa88968577dde88d374))
* **drawer:** Use superclass properties without trailing underscores ([a66493c](https://github.com/stackriot/material-components-web/commit/a66493cd8e9717ce32218fb877ca2258ea6ee880))
* **elevation:** Update _mixins.scss so Sass linter passes ([#933](https://github.com/stackriot/material-components-web/issues/933)) ([9e6623e](https://github.com/stackriot/material-components-web/commit/9e6623eaebc335bcd48b5fe1011557d352177b8b))
* **elevation:** Update overlay color mixin ([#5331](https://github.com/stackriot/material-components-web/issues/5331)) ([b723dfa](https://github.com/stackriot/material-components-web/commit/b723dfa7848c4b96bc24bb148cc5f55f316625ee))
* **elevation:** Use relative path when importing theme Sass file. ([405a29a](https://github.com/stackriot/material-components-web/commit/405a29a2016565f8cb269915c5f6c0d4df133c6d))
* **fab:** add alternate decorator only when necessary ([0fd56a8](https://github.com/stackriot/material-components-web/commit/0fd56a86b30846de63d7d1520dcecc4d5ece2347))
* **fab:** Add hover/focus elevation ([#1331](https://github.com/stackriot/material-components-web/issues/1331)) ([cb9995d](https://github.com/stackriot/material-components-web/commit/cb9995d8a358e7b6a67b54834b6253e4cd5b1e20))
* **fab:** Add missing dep to fab package.json. ([#5236](https://github.com/stackriot/material-components-web/issues/5236)) ([e0f6fd9](https://github.com/stackriot/material-components-web/commit/e0f6fd931f677874dcad4d91c3d74a2125674e96))
* **fab:** Add overflow: hidden; to ripple target to fix bounded ripple. ([#5214](https://github.com/stackriot/material-components-web/issues/5214)) ([97cbbdc](https://github.com/stackriot/material-components-web/commit/97cbbdc28c1623acbc40c878e2b3d48c80c01cef))
* **fab:** Add overflow: visible to make touch target visible in… ([#5241](https://github.com/stackriot/material-components-web/issues/5241)) ([5850080](https://github.com/stackriot/material-components-web/commit/58500806e27a0931404631d76bc09646bc64caaf))
* **fab:** Adjust fab line-height ([#5254](https://github.com/stackriot/material-components-web/issues/5254)) ([525989b](https://github.com/stackriot/material-components-web/commit/525989b5d8dfe86bcb6f65e0f0f0fd138e4b4b76))
* **fab:** Adjust fab line-height to center text ([#5258](https://github.com/stackriot/material-components-web/issues/5258)) ([591a6ad](https://github.com/stackriot/material-components-web/commit/591a6ad449f98efa7bc00c8afdd2716a6fbe75d9))
* **fab:** Apply extended shape radius in Extended FAB's theme mixin ([81911b7](https://github.com/stackriot/material-components-web/commit/81911b7077801590c0f47bf17743f3b2b320b863))
* **fab:** clear text decoration ([#4865](https://github.com/stackriot/material-components-web/issues/4865)) ([b524a12](https://github.com/stackriot/material-components-web/commit/b524a12535eb9b74e322742e152e18a966f9a256))
* **fab:** Fix transitions by importing correct mdc-animation resource ([#1325](https://github.com/stackriot/material-components-web/issues/1325)) ([e005460](https://github.com/stackriot/material-components-web/commit/e005460dba69a21fb86c32e6da87e74adc591e44))
* **fab:** Fixed Fab ripple ([84f3db9](https://github.com/stackriot/material-components-web/commit/84f3db9ed03fc414f347bfd88be384fe50646bd8)), closes [#7053](https://github.com/stackriot/material-components-web/issues/7053)
* **fab:** Ignore CSS variables in Edge for mdc-fab-container-color ([bf0f722](https://github.com/stackriot/material-components-web/commit/bf0f722d9e6bdfd1485284fa7d6a53c37188561d))
* **fab:** Restore horizontal alignment in IE11 ([#2715](https://github.com/stackriot/material-components-web/issues/2715)) ([fded349](https://github.com/stackriot/material-components-web/commit/fded349b6fc247e3480d29eaf55df04eab0e8c8f))
* **fab:** Separate mixins for regular FAB and Extended FAB ([#4082](https://github.com/stackriot/material-components-web/issues/4082)) ([003e95f](https://github.com/stackriot/material-components-web/commit/003e95f8dff12a3319d2808c1ccad62521eed627))
* **fab:** Use FAB ripple target selector ([#5146](https://github.com/stackriot/material-components-web/issues/5146)) ([9d91acc](https://github.com/stackriot/material-components-web/commit/9d91acc0ec332bdda462075f534204ec2ea7af9c))
* **feature-targeting:** fix incorrect list construction ([#4419](https://github.com/stackriot/material-components-web/issues/4419)) ([173f202](https://github.com/stackriot/material-components-web/commit/173f20256e99ded7f837d8ef5484b75b8b31a82d))
* **feature-targeting:** Move ripple styles into separate mixins ([#4454](https://github.com/stackriot/material-components-web/issues/4454)) ([720bef0](https://github.com/stackriot/material-components-web/commit/720bef02fe5d55cffe827614de89f6eac8b0526b))
* **feature-targeting:** prevent accidental nesting of mdc-feature-targets mixin ([#4281](https://github.com/stackriot/material-components-web/issues/4281)) ([3405bc4](https://github.com/stackriot/material-components-web/commit/3405bc4d915a2c120ae2aeeab4cc0ed3572b3447))
* **floating-label:** achieved 100% test coverage ([#2523](https://github.com/stackriot/material-components-web/issues/2523)) ([2e7f904](https://github.com/stackriot/material-components-web/commit/2e7f9049fb5e0cf9a2b3a105a33e9fce90f6177d))
* **floating-label:** Add [@noflip](https://github.com/noflip) annotation to floating label ([#2696](https://github.com/stackriot/material-components-web/issues/2696)) ([d9d695a](https://github.com/stackriot/material-components-web/commit/d9d695a5c6739e73ebcffcd0eb28ce8cd1c0e8d2))
* **floating-label:** Add alternate tag ([#3993](https://github.com/stackriot/material-components-web/issues/3993)) ([6307071](https://github.com/stackriot/material-components-web/commit/63070716763f79c0b9a88c6a874072fb5621ea12))
* **floating-label:** Add missing import to mixins ([#4434](https://github.com/stackriot/material-components-web/issues/4434)) ([183d44e](https://github.com/stackriot/material-components-web/commit/183d44ed80a0be0eab6438b3b85f523ee1da39d5))
* **floating-label:** Enforce text alignment ([#3684](https://github.com/stackriot/material-components-web/issues/3684)) ([551e641](https://github.com/stackriot/material-components-web/commit/551e64161d5247f1a31ae5d69da42787b406d15e))
* **floating-label:** Import RTL in mixin since it is being used ([#2743](https://github.com/stackriot/material-components-web/issues/2743)) ([f75df26](https://github.com/stackriot/material-components-web/commit/f75df26e44a5ffe9da9aa475ac469f32cb3a803e))
* **floating-label:** Update transition durations ([#2590](https://github.com/stackriot/material-components-web/issues/2590)) ([099738c](https://github.com/stackriot/material-components-web/commit/099738cfa0b780c24122159c088b67e50856e94c))
* **floating-label:** Use superclass properties without trailing underscores ([5cea261](https://github.com/stackriot/material-components-web/commit/5cea2610f2f46bbe193683668044116d78b7e2d6))
* **floatinglabel:** Estimate hidden scroll width ([#5448](https://github.com/stackriot/material-components-web/issues/5448)) ([981ec9b](https://github.com/stackriot/material-components-web/commit/981ec9b6fd538caadb44f7469745de8f8954c89b))
* **form-field:** Fix radio RTL alignment bug. ([#5064](https://github.com/stackriot/material-components-web/issues/5064)) ([ef99808](https://github.com/stackriot/material-components-web/commit/ef99808cba809294cb2d90903d12cdf930071f4d))
* **form-field:** Use superclass properties without trailing underscores ([7fd792b](https://github.com/stackriot/material-components-web/commit/7fd792bb9841501ecbc35b4024a00e07216fb95b))
* **grid-list:** Gracefully degrade tile width. ([#1136](https://github.com/stackriot/material-components-web/issues/1136)) ([97575c3](https://github.com/stackriot/material-components-web/commit/97575c3869c1964ec7af4803fd4cdb03abd366b3))
* **icon-button:** prevent icon shift on press in IE11 ([8fc2927](https://github.com/stackriot/material-components-web/commit/8fc29273c49f5bf5006f4df715bee85fbace9cb8))
* **icon-button:** remove unused ARIA_LABEL string from constants ([#3591](https://github.com/stackriot/material-components-web/issues/3591)) ([bce1724](https://github.com/stackriot/material-components-web/commit/bce17242635b8845aa38fb4f86bdcacd32c06838))
* **icon-button:** Remove unused styles, update docs, code cleanup ([#2957](https://github.com/stackriot/material-components-web/issues/2957)) ([32b5b9d](https://github.com/stackriot/material-components-web/commit/32b5b9d641dabd6f1e2529334f3cdc8a87001444))
* **icon-button:** Use superclass properties without trailing underscores ([740860e](https://github.com/stackriot/material-components-web/commit/740860e789992163537cc7138d6c21672adb79d0))
* **icon-toggle:** Don't nuke tabindex if initializing disabled to false ([#1667](https://github.com/stackriot/material-components-web/issues/1667)) ([9ec35b7](https://github.com/stackriot/material-components-web/commit/9ec35b74ec5109a3fc7d4398c91aa82028819b3b))
* **infrastructure:** Ensure grid pattern renders correctly in IE ([#2729](https://github.com/stackriot/material-components-web/issues/2729)) ([34f73e8](https://github.com/stackriot/material-components-web/commit/34f73e832f8f12cccbf981af8153f34e4e2436b9))
* **infrastructure:** Fix failing screenshot tests ([#4800](https://github.com/stackriot/material-components-web/issues/4800)) ([0fb049e](https://github.com/stackriot/material-components-web/commit/0fb049e34f1779fb7b7d1ece0754ec5836558b61))
* **infrastructure:** Fix failing screenshot tests ([#4800](https://github.com/stackriot/material-components-web/issues/4800)) ([a9a41cb](https://github.com/stackriot/material-components-web/commit/a9a41cbb9ea9997566d89fb885867d6fe5fa4a42))
* **infrastructure:** Remove deprecated JWT addon in .travis.yml ([#2521](https://github.com/stackriot/material-components-web/issues/2521)) ([4876cf2](https://github.com/stackriot/material-components-web/commit/4876cf2e37cfc2b15b7860453d3d24b23197f10f)), closes [#2151](https://github.com/stackriot/material-components-web/issues/2151)
* **infrastructure:** Rework goog.module positioning ([#3098](https://github.com/stackriot/material-components-web/issues/3098)) ([fbbf58a](https://github.com/stackriot/material-components-web/commit/fbbf58aefbf3214cd71863817cab8d1120372e3c))
* **infrastructure:** support ssr by removing the reference from window ([#4864](https://github.com/stackriot/material-components-web/issues/4864)) ([e5c5ea5](https://github.com/stackriot/material-components-web/commit/e5c5ea51d6052454fff54419416a5afe653b2965))
* **infrastructure:** Unexpose private tab  ([#2499](https://github.com/stackriot/material-components-web/issues/2499)) ([306fd7f](https://github.com/stackriot/material-components-web/commit/306fd7f71bc44080c992939ba43d6a8c3de2159a)), closes [#2498](https://github.com/stackriot/material-components-web/issues/2498)
* **infrastructure:** update check-pkg-for-release.js ([#4857](https://github.com/stackriot/material-components-web/issues/4857)) ([0cd775c](https://github.com/stackriot/material-components-web/commit/0cd775c7905df563cfd83c8726d82dc224b59bcb))
* **infrastructure:** Update ff screenshot tests ([#3540](https://github.com/stackriot/material-components-web/issues/3540)) ([16007f1](https://github.com/stackriot/material-components-web/commit/16007f173be985947a0417b7fef574603fe3d6fb))
* **infrastructure:** update saucelabs windows 8 to windows 10 IE11 browser ([#3234](https://github.com/stackriot/material-components-web/issues/3234)) ([547a980](https://github.com/stackriot/material-components-web/commit/547a980c93cfb0d93ccd42bedb0090217345ffc9))
* **layout-grid:** Enable setting max width of the layout grid ([#1086](https://github.com/stackriot/material-components-web/issues/1086)) ([98ba98c](https://github.com/stackriot/material-components-web/commit/98ba98c25a4894218d45765d834912c911bc9858)), closes [#1085](https://github.com/stackriot/material-components-web/issues/1085)
* **layout-grid:** Import the variables in the mixin ([#1232](https://github.com/stackriot/material-components-web/issues/1232)) ([924144b](https://github.com/stackriot/material-components-web/commit/924144bc64180bdc8dbe6629afef86aa19072bf2))
* **line-ripple:** Fix CSP inline style rule ([#2491](https://github.com/stackriot/material-components-web/issues/2491)) ([4f1cdc1](https://github.com/stackriot/material-components-web/commit/4f1cdc1160f295b51ad9657df4ae0028878b9510))
* **line-ripple:** Use superclass properties without trailing underscores ([a4aae3d](https://github.com/stackriot/material-components-web/commit/a4aae3d3710ba5eb86f27dee230064dfccf2e73f))
* **linear-progress:** allow parent visibility prop to propagate to bar ([e543628](https://github.com/stackriot/material-components-web/commit/e543628c3924a47ba63f5b7d58a2a931a260d1d3))
* **linear-progress:** default size ([#1694](https://github.com/stackriot/material-components-web/issues/1694)) ([35d362c](https://github.com/stackriot/material-components-web/commit/35d362c6e91e3a50cda30595b3feb908ffc3c5ea)), closes [#1528](https://github.com/stackriot/material-components-web/issues/1528)
* **linear-progress:** disable animations when closed ([a831d47](https://github.com/stackriot/material-components-web/commit/a831d4799b281729a932f0690b62b6bce1874799))
* **linear-progress:** Fix indeterminate animation bug ([#5180](https://github.com/stackriot/material-components-web/issues/5180)) ([062ade5](https://github.com/stackriot/material-components-web/commit/062ade5c052cf00cefeee6e8e0acf7d16c4ce338))
* **linear-progress:** fix RTL rendering ([c7c5da2](https://github.com/stackriot/material-components-web/commit/c7c5da28f2cd2c1b54dd201d3797e112288fa86c))
* **linear-progress:** performance for indeterminate animations in modern browsers ([fc0eb50](https://github.com/stackriot/material-components-web/commit/fc0eb5013603a4d5cb4dbc0a999e94df64cc5005))
* **linear-progress:** Prefix animation keyframes to prevent clashing ([#5155](https://github.com/stackriot/material-components-web/issues/5155)) ([fc0e474](https://github.com/stackriot/material-components-web/commit/fc0e4743be6d6187c31b745c935d18f5b7d2267b))
* **linear-progress:** Restore buffer after determinate is toggl… ([#5156](https://github.com/stackriot/material-components-web/issues/5156)) ([09b1598](https://github.com/stackriot/material-components-web/commit/09b1598116b26905f2f58eab84b977e035174c26))
* **linear-progress:** restores progress when determinate set to true ([#1698](https://github.com/stackriot/material-components-web/issues/1698)) ([1d9cd68](https://github.com/stackriot/material-components-web/commit/1d9cd68ee62ab835435396cd5b29e7a1dab3d3fe)), closes [#1694](https://github.com/stackriot/material-components-web/issues/1694) [#1531](https://github.com/stackriot/material-components-web/issues/1531)
* **linear-progress:** stop animation when closed ([#5006](https://github.com/stackriot/material-components-web/issues/5006)) ([4c4342d](https://github.com/stackriot/material-components-web/commit/4c4342d28c251f963498c117322532b7180d6196))
* **linear-progress:** Support high contrast mode ([#5190](https://github.com/stackriot/material-components-web/issues/5190)) ([d4141c9](https://github.com/stackriot/material-components-web/commit/d4141c954311888017a61c7e7fdcd0fd5c99bf1f))
* **linear-progress:** Temporary rollback of [#5656](https://github.com/stackriot/material-components-web/issues/5656) while updating downstream dependencies ([9cf5e98](https://github.com/stackriot/material-components-web/commit/9cf5e9842475e50046462aa1c6d18e326abaee17))
* **linear-progress:** Use superclass properties without trailing underscores ([8e17857](https://github.com/stackriot/material-components-web/commit/8e17857d0a8d301f54fac64cc83804928ec1ff83))
* **list:** Accept array of index for selectedIndex API ([#4124](https://github.com/stackriot/material-components-web/issues/4124)) ([be070a4](https://github.com/stackriot/material-components-web/commit/be070a41dad9e50b045dccdb1d2094b15624e554))
* **list:** Add #adapter.listItemAtIndexHasClass to prevent user state change to disabled items ([#4922](https://github.com/stackriot/material-components-web/issues/4922)) ([b6d213c](https://github.com/stackriot/material-components-web/commit/b6d213c4c28090f631d2ce7a1dcdde30462c3003))
* **list:** Add 8px bottom padding ([cd03a0e](https://github.com/stackriot/material-components-web/commit/cd03a0e64ef665b37ef5c70b4e2ddaf7160a6307)), closes [#1488](https://github.com/stackriot/material-components-web/issues/1488)
* **list:** Add core-styles mixin. ([fc7c4e5](https://github.com/stackriot/material-components-web/commit/fc7c4e5ce2451ecd76f7ea3860b18a16e5f31bac))
* **list:** Add cursor: pointer for interactive list items ([#4563](https://github.com/stackriot/material-components-web/issues/4563)) ([d2f0ccb](https://github.com/stackriot/material-components-web/commit/d2f0ccbbb2dc096f2c8be5d7ef924d8ee680ba59)), closes [#4557](https://github.com/stackriot/material-components-web/issues/4557)
* **list:** add list to webpack js bundler ([#3244](https://github.com/stackriot/material-components-web/issues/3244)) ([b95d4e7](https://github.com/stackriot/material-components-web/commit/b95d4e7d2bb1c153159741f3990e0d569d944e2a))
* **list:** Add missing import ([#2150](https://github.com/stackriot/material-components-web/issues/2150)) ([5dcc918](https://github.com/stackriot/material-components-web/commit/5dcc918739d02c0e19d65e667ccc02d9bbc0aadb))
* **list:** Add support for activated ([#3388](https://github.com/stackriot/material-components-web/issues/3388)) ([5590412](https://github.com/stackriot/material-components-web/commit/5590412d2c80225e7523440ba2b2bfad086986f4))
* **list:** add support for density scaling. ([419e035](https://github.com/stackriot/material-components-web/commit/419e035729c1ca1ee2b572ae4b1937e2d8cf04bc))
* **list:** add support for non-interactive list roles. ([fc8b045](https://github.com/stackriot/material-components-web/commit/fc8b045f1127709c5929a3cd1c9c7d622db8ed42))
* **list:** added ellipsis to text and secondary text if text overflows ([#2049](https://github.com/stackriot/material-components-web/issues/2049)) ([526521c](https://github.com/stackriot/material-components-web/commit/526521c9045f8845b1c3bb1d6218de30c852a6a7))
* **list:** Always call followHref regardless of single-selection mode ([#3595](https://github.com/stackriot/material-components-web/issues/3595)) ([b556724](https://github.com/stackriot/material-components-web/commit/b556724a368c23619db28562dfcf57b0ef2849b3))
* **list:** Change private getter method to public ([#3473](https://github.com/stackriot/material-components-web/issues/3473)) ([f57c731](https://github.com/stackriot/material-components-web/commit/f57c7318bd1cb9fd56206b7657a139ac225bb274))
* **list:** Correct list end detail padding ([#909](https://github.com/stackriot/material-components-web/issues/909)) ([d7aa726](https://github.com/stackriot/material-components-web/commit/d7aa72693c0fb7d1792064ae04006f4cc321ecb5)), closes [#904](https://github.com/stackriot/material-components-web/issues/904)
* **list:** Correcting the selector mapping for CHILD_ELEMENTS_TO_TOGGLE_TABINDEX and FOCUSABLE_CHILD_ELEMENTS. ([8943b99](https://github.com/stackriot/material-components-web/commit/8943b991fd04caab88ae543bad16ba9b47bc7634)), closes [#6829](https://github.com/stackriot/material-components-web/issues/6829) [#6829](https://github.com/stackriot/material-components-web/issues/6829)
* **list:** density configuration mixins do not account for leading avatars ([3674c62](https://github.com/stackriot/material-components-web/commit/3674c6282db170dcf8331f93d779055c3852076b))
* **list:** do not activate typeahead on certain modifier keys ([f1b1fd5](https://github.com/stackriot/material-components-web/commit/f1b1fd5d3fa72c0a5dab305e3d7e782ff1421d7e))
* **list:** Don't allow graphic to shrink when text overflows ([#1943](https://github.com/stackriot/material-components-web/issues/1943)) ([da007f5](https://github.com/stackriot/material-components-web/commit/da007f5b6d7b3ac49f81034a35b045b6b95b6bd0)), closes [#1941](https://github.com/stackriot/material-components-web/issues/1941)
* **list:** Ensure disabled colors apply to primary and secondary text ([#5322](https://github.com/stackriot/material-components-web/issues/5322)) ([878a08b](https://github.com/stackriot/material-components-web/commit/878a08b7cf673ba45f124b400032928b2c273749))
* **list:** ensure divider appears in IE high contrast mode. ([eff7b46](https://github.com/stackriot/material-components-web/commit/eff7b46ac916d2eb130f7d826eee047c5f19e6f2))
* **list:** ensure sass mixin works if leading is provided in px ([265ecba](https://github.com/stackriot/material-components-web/commit/265ecbad56c001c0fed391b6be66f0d5ec483838))
* **list:** Ensure trailing-only variants have leading padding in RTL contexts. ([81e2d4f](https://github.com/stackriot/material-components-web/commit/81e2d4ff36518c586972aad4512b43d2bb0cd2d2))
* **list:** Fix font size and placement for avatar graphic ([#4021](https://github.com/stackriot/material-components-web/issues/4021)) ([5abe685](https://github.com/stackriot/material-components-web/commit/5abe685a52224b15aabf52e24281e25471f02544))
* **list:** Fix the height of the dense avatar list ([#1905](https://github.com/stackriot/material-components-web/issues/1905)) ([3e5f6e0](https://github.com/stackriot/material-components-web/commit/3e5f6e0a6ac046bf3348c08b61dc943b77dd582b))
* **list:** Fixed the selected + focused state of list item in HCM ([8ba3e29](https://github.com/stackriot/material-components-web/commit/8ba3e298ca18cf8e7e11f07559e27287e74efeb8))
* **list:** Follow hrefs on keypresses on links ([#3407](https://github.com/stackriot/material-components-web/issues/3407)) ([e6d6deb](https://github.com/stackriot/material-components-web/commit/e6d6deb5c2f804b356e014208d835a28557bf05a))
* **list:** Include disabled list items in keyboard navigation and allow focus ([#4568](https://github.com/stackriot/material-components-web/issues/4568)) ([6e24280](https://github.com/stackriot/material-components-web/commit/6e242800d1fd327a9d856d291eda9e1db3f59d82))
* **list:** Make bottom padding match top for dense lists ([#1622](https://github.com/stackriot/material-components-web/issues/1622)) ([67354d0](https://github.com/stackriot/material-components-web/commit/67354d098660d2edcd4a451dfac0e471b04ea6ce))
* **list:** Move divider color style so it takes precedence ([#1856](https://github.com/stackriot/material-components-web/issues/1856)) ([e3cb47c](https://github.com/stackriot/material-components-web/commit/e3cb47cb01e7ab194fc2a70eb45706aedce17245))
* **list:** No longer emits action event when disabled item selected ([f352d03](https://github.com/stackriot/material-components-web/commit/f352d03f4ed48c5019a0a3e10ef12689a5ab5619)), closes [#5571](https://github.com/stackriot/material-components-web/issues/5571)
* **list:** Peace out whitespace ([#3997](https://github.com/stackriot/material-components-web/issues/3997)) ([19b5152](https://github.com/stackriot/material-components-web/commit/19b515259c58a93fbc7f3aaaf6472b1e0efebbc7))
* **list:** Preserve aspect ratio of the original image when using it as the icon or avatar for a list. ([be4a19f](https://github.com/stackriot/material-components-web/commit/be4a19f9f0668e4fc303d2e60e81473ac11d68be))
* **list:** Remove obsolete non-interactive class & :not selectors ([2553e86](https://github.com/stackriot/material-components-web/commit/2553e86fee2753ec59f1fbc91764bf110ad9d3aa))
* **list:** removed unused adapter.removeAttributeForElementIndex ([#4473](https://github.com/stackriot/material-components-web/issues/4473)) ([6b3a419](https://github.com/stackriot/material-components-web/commit/6b3a419650b20d4f50cff7c30b6de1951d532169))
* **list:** Reset selectedIndex to UNSET_INDEX if #setSingleSelection(true) is called and there are no selected list items. ([4eecdea](https://github.com/stackriot/material-components-web/commit/4eecdeaf09ed0429aa685ee35ea2ce7970af89cc))
* **list:** Respect BEM when outputting the base stylesheet. ([#1799](https://github.com/stackriot/material-components-web/issues/1799)) ([ee1c0db](https://github.com/stackriot/material-components-web/commit/ee1c0db07b04125d0504f0fdc936f937435d54f6)), closes [#1748](https://github.com/stackriot/material-components-web/issues/1748)
* **list:** Selection lists without a selection focus first item. ([03f525f](https://github.com/stackriot/material-components-web/commit/03f525f9ff880f27a43f2e50851a5dc6cd6b022c))
* **list:** Update ARIA attributes for radio/checkbox based list ([#4055](https://github.com/stackriot/material-components-web/issues/4055)) ([76b404e](https://github.com/stackriot/material-components-web/commit/76b404e176431ab42d27fd3bb8aa71bf09276a40))
* **list:** Update clickable elements selector ([#3312](https://github.com/stackriot/material-components-web/issues/3312)) ([c8ded0a](https://github.com/stackriot/material-components-web/commit/c8ded0a3103efd0880157df6aef88a3a25b6f823))
* **list:** Update default notifyAction impl to emit object ([#4356](https://github.com/stackriot/material-components-web/issues/4356)) ([ed1aeb2](https://github.com/stackriot/material-components-web/commit/ed1aeb2cf34430b04bd17a0e59ce07a15a699f1d)), closes [#4355](https://github.com/stackriot/material-components-web/issues/4355)
* **list:** Update meta class to use caption typogrpahy style ([#4623](https://github.com/stackriot/material-components-web/issues/4623)) ([0826a78](https://github.com/stackriot/material-components-web/commit/0826a78d10a30139ededf18d88deca2f7fba0ab8))
* **list:** Update single line list to ellipsis ([#3460](https://github.com/stackriot/material-components-web/issues/3460)) ([60cf6c5](https://github.com/stackriot/material-components-web/commit/60cf6c528d1938879c0fd048fd8bf31101620757))
* **list:** updated demo to show checkbox examples ([fa0f58c](https://github.com/stackriot/material-components-web/commit/fa0f58c0fc9e10fa171cbe0dc954fbecc2151fee))
* **list:** updated demo to show checkbox examples ([#2064](https://github.com/stackriot/material-components-web/issues/2064)) ([ec3d489](https://github.com/stackriot/material-components-web/commit/ec3d489bd2d8eb060c11194005a72759551e0d11))
* **list:** Use more descriptive foundation method comments ([08d791f](https://github.com/stackriot/material-components-web/commit/08d791f37a159f24686e97df983637947e2a1e87))
* **list:** Use superclass properties without trailing underscores ([4847dd7](https://github.com/stackriot/material-components-web/commit/4847dd7645adf463ea947fc2afb346df648a1ffc))
* **list item:** Add overflow hidden ([#1290](https://github.com/stackriot/material-components-web/issues/1290)) ([05b1201](https://github.com/stackriot/material-components-web/commit/05b120170ec1fca0572dff15a674f5e382eaa861)), closes [#1261](https://github.com/stackriot/material-components-web/issues/1261)
* **mdc-dialog:** second dialog `data-mdc-dialog-initial-focus` doesn't work ([a0ec7e2](https://github.com/stackriot/material-components-web/commit/a0ec7e25d0ba26c2e85d5576e6af5e5d65b301a3))
* **mdc-list:** invalid syntax in generated .d.ts bundle ([ce82846](https://github.com/stackriot/material-components-web/commit/ce828464cdab59cac79add950fcac4f0310ce624))
* **mdc-slider:** avoid server side rendering error ([95c7355](https://github.com/stackriot/material-components-web/commit/95c73550e886c2832aa42cd065552551b6690a61))
* **menu:** Add pointer-events: none to avoid blocking click events ([#1421](https://github.com/stackriot/material-components-web/issues/1421)) ([b77895b](https://github.com/stackriot/material-components-web/commit/b77895b82850872ba2acdac94f8807c09adc50f3))
* **menu:** Allow anchor links as menu list items ([#3680](https://github.com/stackriot/material-components-web/issues/3680)) ([d312271](https://github.com/stackriot/material-components-web/commit/d3122716b8c9e21f9ac5c0f40e346fe8a280b68d))
* **menu:** Close menu when a list-item was clicked. ([#1756](https://github.com/stackriot/material-components-web/issues/1756)) ([c052cfe](https://github.com/stackriot/material-components-web/commit/c052cfe41792a143f547d3c703cdf6065983dadd)), closes [#1747](https://github.com/stackriot/material-components-web/issues/1747)
* **menu:** correct menu opening delay ([a618380](https://github.com/stackriot/material-components-web/commit/a6183801a07f109eff3ee209f42631340fbbe4b3)), closes [#5682](https://github.com/stackriot/material-components-web/issues/5682) [#4411](https://github.com/stackriot/material-components-web/issues/4411)
* **menu:** Do not set selectedIndex for menu items that have a negative recomputedIndex. ([ef3a095](https://github.com/stackriot/material-components-web/commit/ef3a095336a205fa9473a8c6e4940c3f9cccf5ea))
* **menu:** Fix bug where TAB does not respect the default browser tab order. ([#4789](https://github.com/stackriot/material-components-web/issues/4789)) ([fac4c43](https://github.com/stackriot/material-components-web/commit/fac4c4328645676db88f8d2396dfa5ac15462d09))
* **menu:** Fix bug where TAB does not respect the default browser tab order. ([#4789](https://github.com/stackriot/material-components-web/issues/4789)) ([22237cd](https://github.com/stackriot/material-components-web/commit/22237cd468fa859091197bad231d02aef412533f))
* **menu:** Fix selection group list item spacing ([#4517](https://github.com/stackriot/material-components-web/issues/4517)) ([5183e01](https://github.com/stackriot/material-components-web/commit/5183e012d9130cb44405cc86d66ed297c23ca8b9))
* **menu:** In Windows high contrast mode, decrease opacity of disabled menu items. ([#4777](https://github.com/stackriot/material-components-web/issues/4777)) ([898e53e](https://github.com/stackriot/material-components-web/commit/898e53ed34ba9eda1581265f24f12ee937ef6de7))
* **menu:** In Windows high contrast mode, decrease opacity of disabled menu items. ([#4777](https://github.com/stackriot/material-components-web/issues/4777)) ([08e4dc1](https://github.com/stackriot/material-components-web/commit/08e4dc1e9fcb90de7d3fcb0144ef5e4f2712c131))
* **menu:** Increase specificity of selection group class ([#4172](https://github.com/stackriot/material-components-web/issues/4172)) ([1d919ef](https://github.com/stackriot/material-components-web/commit/1d919efdf9356ab857a6d289f61ed87ae8228b4e))
* **menu:** Menu opening animation shows scrollbar ([#1513](https://github.com/stackriot/material-components-web/issues/1513)) ([94b712a](https://github.com/stackriot/material-components-web/commit/94b712ae6eeba83b022b6a9acbad96a3f8cec3af)), closes [#1387](https://github.com/stackriot/material-components-web/issues/1387)
* **menu:** Only show scrollbar when menu item is too big  ([fe7d4c8](https://github.com/stackriot/material-components-web/commit/fe7d4c80bc03772e1b0486dd890c4494340c7dcc)), closes [#1247](https://github.com/stackriot/material-components-web/issues/1247)
* **menu:** Prevent endless loop from unexpected markup ([#3489](https://github.com/stackriot/material-components-web/issues/3489)) ([5dea634](https://github.com/stackriot/material-components-web/commit/5dea63476cc4d08e700a2ad6e52cb05f3cc49a48))
* **menu:** Read index property from list item event detail ([#4368](https://github.com/stackriot/material-components-web/issues/4368)) ([5eb5a01](https://github.com/stackriot/material-components-web/commit/5eb5a0185ac5a7f0f4a1be844e7e9cff23b146e7)), closes [#4356](https://github.com/stackriot/material-components-web/issues/4356)
* **menu:** recompute index before marking selection ([#5047](https://github.com/stackriot/material-components-web/issues/5047)) ([90f6247](https://github.com/stackriot/material-components-web/commit/90f6247547bfbe754bd93b54d1965259daa746c9))
* **menu:** Remove anchorSize height from calculations when anchored to bottom ([1631198](https://github.com/stackriot/material-components-web/commit/16311983787cf46ccd22eaa4d6a076254cb32eea))
* **menu:** Remove code to focus on first/last element on TAB/SHIFT+TAB. ([#4786](https://github.com/stackriot/material-components-web/issues/4786)) ([99af567](https://github.com/stackriot/material-components-web/commit/99af567357dd5c8b74c58a160b704f204ac51054))
* **menu:** Remove code to focus on first/last element on TAB/SHIFT+TAB. ([#4786](https://github.com/stackriot/material-components-web/issues/4786)) ([d3f8cb3](https://github.com/stackriot/material-components-web/commit/d3f8cb3845b0c8d725023be1d3c69535b9b1fc5c))
* **menu:** Remove max-width ([#3583](https://github.com/stackriot/material-components-web/issues/3583)) ([c44ca61](https://github.com/stackriot/material-components-web/commit/c44ca615721358ac22adfcf92a8f6893fe8e345f))
* **menu:** Rename test files ([#2168](https://github.com/stackriot/material-components-web/issues/2168)) ([5ea5c2f](https://github.com/stackriot/material-components-web/commit/5ea5c2f87f95bb7e325364c2de504a40a2a8ef34))
* **menu:** Switch from aria-selected to aria-checked for selected menu item. ([#4779](https://github.com/stackriot/material-components-web/issues/4779)) ([f4b0bf5](https://github.com/stackriot/material-components-web/commit/f4b0bf546756a67c1c6408a1e819e92bf9ce547a))
* **menu:** Switch from aria-selected to aria-checked for selected menu item. ([#4779](https://github.com/stackriot/material-components-web/issues/4779)) ([ef198ea](https://github.com/stackriot/material-components-web/commit/ef198eac2698f77a4823fe6aa22f1cc350fa8b1c))
* **menu:** Update adapter to check for focus before calling ([#2880](https://github.com/stackriot/material-components-web/issues/2880)) ([1548230](https://github.com/stackriot/material-components-web/commit/1548230677925fc689d388c16e4fb77e117c9a89))
* **menu:** Update styles to match guidance ([#3455](https://github.com/stackriot/material-components-web/issues/3455)) ([5c01746](https://github.com/stackriot/material-components-web/commit/5c0174671d6cd4c50148115b030ba1f1773da703))
* **menu:** Updated menu to use list's custom event ([#4151](https://github.com/stackriot/material-components-web/issues/4151)) ([a4e08f1](https://github.com/stackriot/material-components-web/commit/a4e08f1c5be7ca6379514794cbdd7f535093ed45))
* **menu:** Use mdc-theme-prop to support css variables on background ([#2253](https://github.com/stackriot/material-components-web/issues/2253)) ([1cc5dd5](https://github.com/stackriot/material-components-web/commit/1cc5dd5d3387286980d0510b1333953061b5af01))
* **menu:** Use on-surface color for graphic/meta content ([#4520](https://github.com/stackriot/material-components-web/issues/4520)) ([74b8d67](https://github.com/stackriot/material-components-web/commit/74b8d67e0117881e598f037e8550240835b361e7))
* **menu:** Use superclass properties without trailing underscores ([0008c8a](https://github.com/stackriot/material-components-web/commit/0008c8a91a4da2c0c95fe092395cc575cbf23769))
* **menu:** Vertically center the group icon ([#4862](https://github.com/stackriot/material-components-web/issues/4862)) ([d551dfd](https://github.com/stackriot/material-components-web/commit/d551dfde9dd377e7ca593565519ca49abd559d29))
* **menu:** Vertically center the group icon ([#4862](https://github.com/stackriot/material-components-web/issues/4862)) ([c5738ed](https://github.com/stackriot/material-components-web/commit/c5738ed64e97cba5177377814bd838c6cfa03e3c))
* **menu-surface:** Correct open animation issue ([#4371](https://github.com/stackriot/material-components-web/issues/4371)) ([ed4c945](https://github.com/stackriot/material-components-web/commit/ed4c94597bbfaa724c9f3abab692837f8645d63a))
* **menu-surface:** Fix absolute positioning for scrollX ([#3609](https://github.com/stackriot/material-components-web/issues/3609)) ([4074535](https://github.com/stackriot/material-components-web/commit/4074535983321b41a10c2f5b57c887f6b139e388))
* **menu-surface:** Fix anchorElement initialization ([#4462](https://github.com/stackriot/material-components-web/issues/4462)) ([2025c8b](https://github.com/stackriot/material-components-web/commit/2025c8b5eb9891ec3f159e2fde03f45d23f6bbed))
* **menu-surface:** Fix interpolation in calc ([#3445](https://github.com/stackriot/material-components-web/issues/3445)) ([7f14c72](https://github.com/stackriot/material-components-web/commit/7f14c72dab1e8ad99449a653f497397d37ef0aff))
* **menu-surface:** Raise z-index over MDC Dialog ([#4185](https://github.com/stackriot/material-components-web/issues/4185)) ([fa6f219](https://github.com/stackriot/material-components-web/commit/fa6f219f429303fc435094d5ba31b1b510f6d566))
* **menu-surface:** remove duplicate export from menu-surface ([#5200](https://github.com/stackriot/material-components-web/issues/5200)) ([0b120ae](https://github.com/stackriot/material-components-web/commit/0b120ae75f23ca0c30cec680f8e4145995e81dae))
* **menu-surface:** Remove overflow hidden during menu-surface animation. ([#3358](https://github.com/stackriot/material-components-web/issues/3358)) ([951a3ae](https://github.com/stackriot/material-components-web/commit/951a3ae4d1284cf717345207426d48e210e2909a))
* **menu-surface:** slightly delay focus restoration to prevent lost focus on mobile devices ([9f68a93](https://github.com/stackriot/material-components-web/commit/9f68a932e9d4168da10d8b9c3bb9191afcc3c68f))
* **menu-surface:** Use margin_to_edge as a viewport margin in calculations for autopositioning. ([4b04cdb](https://github.com/stackriot/material-components-web/commit/4b04cdb0fc4da4831340b01292c118b120c1fcb1))
* **menu-surface:** Use superclass properties without trailing underscores ([62abbc8](https://github.com/stackriot/material-components-web/commit/62abbc8d762c6c903d4a13817a0b71555764e0df))
* **menusurface:** Fixing bug where body click listener is not being properly deregistered. ([5511c52](https://github.com/stackriot/material-components-web/commit/5511c5254476c817b51bb2ae884f56d328348bd0)), closes [#6557](https://github.com/stackriot/material-components-web/issues/6557)
* **menusurface:** open and closed events not fired when already opened or closed ([9cff431](https://github.com/stackriot/material-components-web/commit/9cff4318f0fe8a79f8787afd148907328a5223d5))
* **menusurface:** synchronous quick menu does not close on button click ([45a6615](https://github.com/stackriot/material-components-web/commit/45a6615e33eb8a7e6fc37e9ef43a3be3682b6b0e))
* **notched-outline:** Add alignment ([#3349](https://github.com/stackriot/material-components-web/issues/3349)) ([ee93c61](https://github.com/stackriot/material-components-web/commit/ee93c61176f080bdf1f2d55838e47e593f0e2528))
* **notched-outline:** Add noflip annotation ([#3994](https://github.com/stackriot/material-components-web/issues/3994)) ([c60d42b](https://github.com/stackriot/material-components-web/commit/c60d42ba8218ebff8a23b7723b2c2b3d3cea28d0))
* **notched-outline:** Auto position the notch and floating label based on corner size ([#3929](https://github.com/stackriot/material-components-web/issues/3929)) ([06daf52](https://github.com/stackriot/material-components-web/commit/06daf527163af74efebf8c0da88f75cef5c9ab2e))
* **notched-outline:** Fix label overflow ([#4171](https://github.com/stackriot/material-components-web/issues/4171)) ([145db1f](https://github.com/stackriot/material-components-web/commit/145db1fbf26a6463a22a9ac008cb10217f2a3a65))
* **notched-outline:** fix missing shape functions import ([#4224](https://github.com/stackriot/material-components-web/issues/4224)) ([96f663e](https://github.com/stackriot/material-components-web/commit/96f663e53e30522798f9a7959213d4887e9f3f05))
* **notched-outline:** fix notched outline no-label style ([99cfb6b](https://github.com/stackriot/material-components-web/commit/99cfb6bd53f72240fe76852d0fdaa0b82e7dca39))
* **notched-outline:** Remove unused dependency from scss ([#3044](https://github.com/stackriot/material-components-web/issues/3044)) ([85ecf11](https://github.com/stackriot/material-components-web/commit/85ecf118677b15a34e2f632f13be387c8cc4c859))
* **notched-outline:** Restore component test ([#5449](https://github.com/stackriot/material-components-web/issues/5449)) ([4269133](https://github.com/stackriot/material-components-web/commit/4269133421f7058385255b0676be94c9c1170b2d))
* **notched-outline:** Use superclass properties without trailing underscores ([49bf31d](https://github.com/stackriot/material-components-web/commit/49bf31d5c9c3ee34e9a51ce3b254a9101c578045))
* **package:** Add source-map files to npm releases ([#4206](https://github.com/stackriot/material-components-web/issues/4206)) ([9d6375b](https://github.com/stackriot/material-components-web/commit/9d6375b2402d28e2d9a19d5ac0935d8ade58c673))
* **package:** Fix module declaration names in dist d.ts files ([#4476](https://github.com/stackriot/material-components-web/issues/4476)) ([872b39f](https://github.com/stackriot/material-components-web/commit/872b39f3602588604d9e51c250fcbcd28d651f72))
* **package:** Update fibers to the latest version 🚀 ([#4658](https://github.com/stackriot/material-components-web/issues/4658)) ([0590ebb](https://github.com/stackriot/material-components-web/commit/0590ebb1aea2f038d4f5bdf3d3103eb6607818be))
* **progress-indicators:** hide from screenreaders on close ([d3a6862](https://github.com/stackriot/material-components-web/commit/d3a6862af3ff4f0e157ebe95bd5f54a47fc14c48))
* **radio:** Add missing `[@import](https://github.com/import)` for theme mixins; add screenshot tests ([#3285](https://github.com/stackriot/material-components-web/issues/3285)) ([0d73d06](https://github.com/stackriot/material-components-web/commit/0d73d06bc9a7cbc293b7456209af7394965cb0c1))
* **radio:** disabled state in IE high contrast mode ([774dcfc](https://github.com/stackriot/material-components-web/commit/774dcfc8eb31e766afd0194c54edfe71a7ff7c3e))
* **radio:** Fix touch target margins: 0px => 4px. ([#5096](https://github.com/stackriot/material-components-web/issues/5096)) ([a48d06e](https://github.com/stackriot/material-components-web/commit/a48d06eae1f634a65fd24226d4a47f0cd253ba21))
* **radio:** Ignore CSS variables in Edge for __background::before ([a7e2db4](https://github.com/stackriot/material-components-web/commit/a7e2db4a44b678ca30fa6c067441bb84ae17e380))
* **radio:** remove getNativeControl from adapter ([#3785](https://github.com/stackriot/material-components-web/issues/3785)) ([476130e](https://github.com/stackriot/material-components-web/commit/476130efd32434e0491c97ef4de1a2643ce255bc))
* **radio:** Update colors to latest guidance ([#2623](https://github.com/stackriot/material-components-web/issues/2623)) ([e164a24](https://github.com/stackriot/material-components-web/commit/e164a2424d139e414d76101737294e7342e79135))
* **radio:** update disabled color values ([#5210](https://github.com/stackriot/material-components-web/issues/5210)) ([491fddc](https://github.com/stackriot/material-components-web/commit/491fddc31c16f99206b1fa7dce37d43b742e86f5))
* **radio:** Use superclass properties without trailing underscores ([541638f](https://github.com/stackriot/material-components-web/commit/541638fa2ba3410ca1055c5ae563face06fd20be))
* **ripple:** Add overflow: hidden; to the bounded ripple mixin ([#5173](https://github.com/stackriot/material-components-web/issues/5173)) ([996b091](https://github.com/stackriot/material-components-web/commit/996b0910c2ceec75f99c0679714ebe474a63bca5))
* **ripple:** Always set even num when initial ripple size is ca… ([#5141](https://github.com/stackriot/material-components-web/issues/5141)) ([b26ad23](https://github.com/stackriot/material-components-web/commit/b26ad23e45ed66040cb1bb03e7a7f7f5d8321b53))
* **ripple:** Apply will-change to surface rather than pseudo-elements ([#1872](https://github.com/stackriot/material-components-web/issues/1872)) ([2a69fef](https://github.com/stackriot/material-components-web/commit/2a69fefc9abb2744996b51b51e5e6edf055f99eb))
* **ripple:** Avoid duplicating common styles ([#1463](https://github.com/stackriot/material-components-web/issues/1463)) ([756d8a6](https://github.com/stackriot/material-components-web/commit/756d8a670d7ece8342b3b78efa34e3ce8373fb6d))
* **ripple:** Avoid errors in feature-detect within hidden iframes in Firefox ([#1216](https://github.com/stackriot/material-components-web/issues/1216)) ([adbcce2](https://github.com/stackriot/material-components-web/commit/adbcce2275d7c1b9fadacd58a49b1d1693547ec3))
* **ripple:** Change default color from black to on-surface ([#3554](https://github.com/stackriot/material-components-web/issues/3554)) ([e203aa4](https://github.com/stackriot/material-components-web/commit/e203aa45973c74d251c685a4a081880c2e65c1df))
* **ripple:** Clean activation timer and css when interrupted ([#2490](https://github.com/stackriot/material-components-web/issues/2490)) ([18cba98](https://github.com/stackriot/material-components-web/commit/18cba9881718bfd38fa9909daf242e37ca92d063))
* **ripple:** Clean deactivation timer and CSS when interrupted ([#3529](https://github.com/stackriot/material-components-web/issues/3529)) ([2eda390](https://github.com/stackriot/material-components-web/commit/2eda390084f0cab8a64af430a7cbc501f354b156))
* **ripple:** Correct unbounded ripple diameter ([#1098](https://github.com/stackriot/material-components-web/issues/1098)) ([0f1ca35](https://github.com/stackriot/material-components-web/commit/0f1ca3598248c6df7fe456e198ce6519397b0247)), closes [#1067](https://github.com/stackriot/material-components-web/issues/1067)
* **ripple:** Deactivate on contextmenu event ([#3759](https://github.com/stackriot/material-components-web/issues/3759)) ([4d76e3f](https://github.com/stackriot/material-components-web/commit/4d76e3f4584545d9997d0edef6e1bf83dc2c9944))
* **ripple:** Don't create dynamic stylesheet for Edge feature-detect ([#1206](https://github.com/stackriot/material-components-web/issues/1206)) ([81523a1](https://github.com/stackriot/material-components-web/commit/81523a10a27bd49403ddc52e49b8f0f04cd64853))
* **ripple:** ensure custom properties are always emitted ([caa73ae](https://github.com/stackriot/material-components-web/commit/caa73aeeea780ff65d4434fe1f38cec9396209c4))
* **ripple:** Ensure hover/focus states have proper z-index ([#2204](https://github.com/stackriot/material-components-web/issues/2204)) ([751dabd](https://github.com/stackriot/material-components-web/commit/751dabd4020444fc5102a7879d2519db74a9bdde))
* **ripple:** Expose focus/blur handlers  ([#2905](https://github.com/stackriot/material-components-web/issues/2905)) ([31d81ad](https://github.com/stackriot/material-components-web/commit/31d81ad48aa5efdb4d12a9cc57cb3fed878181fa))
* **ripple:** Feature-detect buggy Edge behavior for custom properties ([#1041](https://github.com/stackriot/material-components-web/issues/1041)) ([5cc2115](https://github.com/stackriot/material-components-web/commit/5cc2115b3c1d3a1b54285531813b2e530e48962b))
* **ripple:** Fix missing dependency ([#2795](https://github.com/stackriot/material-components-web/issues/2795)) ([16a6890](https://github.com/stackriot/material-components-web/commit/16a68904d4584323c505fbe98191dedd715d2dd9))
* **ripple:** Fix nested ripple handling to work with touch events ([#2178](https://github.com/stackriot/material-components-web/issues/2178)) ([a633cf5](https://github.com/stackriot/material-components-web/commit/a633cf51323ffdfe8cd43583d511ddc9bac26219))
* **ripple:** Fix selected opacity levels ([#2294](https://github.com/stackriot/material-components-web/issues/2294)) ([06e39b1](https://github.com/stackriot/material-components-web/commit/06e39b18e1ecc56785ea0cf82ba093c17fde516f))
* **ripple:** Fix unbounded ripple sizes ([#2092](https://github.com/stackriot/material-components-web/issues/2092)) ([41e3e89](https://github.com/stackriot/material-components-web/commit/41e3e89e5bd59d9cb066bb8fca25f78394b8c28a))
* **ripple:** Fixes issue where Chrome v74 shows black artifact on ripple surface on hover ([#4695](https://github.com/stackriot/material-components-web/issues/4695)) ([7a5e7ed](https://github.com/stackriot/material-components-web/commit/7a5e7ed3046b7506b1bf52388e659b53f16ab3c5))
* **ripple:** Listen for up events at document level ([#1800](https://github.com/stackriot/material-components-web/issues/1800)) ([e9f02ed](https://github.com/stackriot/material-components-web/commit/e9f02eda9f4343913b99e11b5292ae9532c0c40c))
* **ripple:** Move feature detect CSS to mixins ([#1302](https://github.com/stackriot/material-components-web/issues/1302)) ([628b8c4](https://github.com/stackriot/material-components-web/commit/628b8c41c1bbada9e1ff49cef2d588867ec9ce07))
* **ripple:** Only deduplicate events on parents whose children activated ([#2160](https://github.com/stackriot/material-components-web/issues/2160)) ([d83d5bd](https://github.com/stackriot/material-components-web/commit/d83d5bd9f76e39335993ed6474708caa01daadef))
* **ripple:** Prevent ancestors of nested ripple surfaces from activating ([#2123](https://github.com/stackriot/material-components-web/issues/2123)) ([0a83568](https://github.com/stackriot/material-components-web/commit/0a8356861d6083e68da652f42a3929f240f8ab35))
* **ripple:** Prevent ripple from getting cut out. ([#3521](https://github.com/stackriot/material-components-web/issues/3521)) ([a8008f4](https://github.com/stackriot/material-components-web/commit/a8008f4ad97b4e530b8b5e51f6782d37ecc54724))
* **ripple:** Re-flow logic to avoid crashing Edge ([#2542](https://github.com/stackriot/material-components-web/issues/2542)) ([4ca8925](https://github.com/stackriot/material-components-web/commit/4ca892572997b81e77efae0312d1526991f97727))
* **ripple:** Register focus/blur handlers in IE ([#3294](https://github.com/stackriot/material-components-web/issues/3294)) ([1186f9b](https://github.com/stackriot/material-components-web/commit/1186f9b3af61e5b8d3a9cca9ef8a691f6d3b2992))
* **ripple:** Relax deduplication conditions for touch devices ([#1990](https://github.com/stackriot/material-components-web/issues/1990)) ([450a699](https://github.com/stackriot/material-components-web/commit/450a699ec11dfea5013c3cb2b158981494a27522))
* **ripple:** Remove unnecessary overflow: hidden. ([#5191](https://github.com/stackriot/material-components-web/issues/5191)) ([5916d18](https://github.com/stackriot/material-components-web/commit/5916d18cfd2b3277665da6b61f44cc27095fff53))
* **ripple:** Removed will-change CSS property ([a0c7b81](https://github.com/stackriot/material-components-web/commit/a0c7b81f3391491bdb5c0b1dfe26eaa9a63e2cd1))
* **ripple:** Revert [#1098](https://github.com/stackriot/material-components-web/issues/1098) to fix bounded ripples ([#1183](https://github.com/stackriot/material-components-web/issues/1183)) ([5769a7b](https://github.com/stackriot/material-components-web/commit/5769a7b99fbc5bcfb0a875ae4d7c81a4f60733e9))
* **ripple:** Suppress before/after when color is transparent ([#4112](https://github.com/stackriot/material-components-web/issues/4112)) ([2e2b227](https://github.com/stackriot/material-components-web/commit/2e2b2274216760e2a43485bce38ebef75dcdb507))
* **ripple:** Transition background-color to avoid flashes ([#3693](https://github.com/stackriot/material-components-web/issues/3693)) ([cbc1f95](https://github.com/stackriot/material-components-web/commit/cbc1f959d8f2608e5e67af316a70f76751f8fede))
* **ripple:** Update states-selector() to use `:active:active` to match active specificity styles. ([faa7d32](https://github.com/stackriot/material-components-web/commit/faa7d3226edbb15bdfca69e5ae98b2d7afdd861a))
* **ripple:** use default computeBoundingRect for all components with ripple ([#2216](https://github.com/stackriot/material-components-web/issues/2216)) ([229e590](https://github.com/stackriot/material-components-web/commit/229e5907eabb564dab82bbd04a753461b05c82b2))
* **ripple:** Use mdc-dom.matches everywhere ([#4372](https://github.com/stackriot/material-components-web/issues/4372)) ([a2aa3c8](https://github.com/stackriot/material-components-web/commit/a2aa3c842e5d6f7ef35432222f5b6748c7eb8ccb)), closes [#4340](https://github.com/stackriot/material-components-web/issues/4340)
* **ripple:** Use standard element removal method ([#4638](https://github.com/stackriot/material-components-web/issues/4638)) ([ef07477](https://github.com/stackriot/material-components-web/commit/ef074775d2ce7c88ab3f8758277be15685c5e0ac))
* **ripple:** Use superclass properties without trailing underscores ([6167cd0](https://github.com/stackriot/material-components-web/commit/6167cd0756a623502f7f84750dcda25226a59794))
* **rtl:** Adding noflip annotations to fix downstream rtl issues ([#2344](https://github.com/stackriot/material-components-web/issues/2344)) ([dc3d69f](https://github.com/stackriot/material-components-web/commit/dc3d69f73b5f7974f09a70a812912a6e0ddf933c))
* **rtl:** do not emit if a left/right value or replacement is null ([ec4ac52](https://github.com/stackriot/material-components-web/commit/ec4ac5234c31df882a85a90af4d53b6797c8eb49))
* **rtl:** Fix typo in error message and make it more readable ([#1956](https://github.com/stackriot/material-components-web/issues/1956)) ([6e4432c](https://github.com/stackriot/material-components-web/commit/6e4432c2a56916fe6b1ef1418f6c05bd02754c5a))
* **rtl:** mixins work with pseudo elements ([f5b6110](https://github.com/stackriot/material-components-web/commit/f5b6110d6a3c5ef1253165f5575ed3980748e19c))
* **rtl:** Removed mdc-rtl-include check from mdc-rtl-reflexive mixin ([#5001](https://github.com/stackriot/material-components-web/issues/5001)) ([6e7b191](https://github.com/stackriot/material-components-web/commit/6e7b1919f3690ef57f94f648ab49329aa875cef7))
* **segmented-button:** Fixed unit test in IE11 ([#6271](https://github.com/stackriot/material-components-web/issues/6271)) ([b96fbfc](https://github.com/stackriot/material-components-web/commit/b96fbfc7a9b75d7d58ecc53919c26b1cdd05d9ed))
* **segmented-button:** Move include statements to avoid nested classes ([#6380](https://github.com/stackriot/material-components-web/issues/6380)) ([bcc5829](https://github.com/stackriot/material-components-web/commit/bcc58290a7ac7bbbe191d00be003785017f94d29))
* **segmented-button:** Use empty clientRect in default adapter ([#6343](https://github.com/stackriot/material-components-web/issues/6343)) ([9f9aac8](https://github.com/stackriot/material-components-web/commit/9f9aac82595ec6eb117e101dc5e0ee0a22e81eee))
* **select:** add adapter ([#3233](https://github.com/stackriot/material-components-web/issues/3233)) ([43b3ac1](https://github.com/stackriot/material-components-web/commit/43b3ac142435e2d31f9935887372b41bbe958c45))
* **select:** Add missing exports ([#4129](https://github.com/stackriot/material-components-web/issues/4129)) ([dbc429a](https://github.com/stackriot/material-components-web/commit/dbc429a1d02fd0e70343480b9a0b9573d26078a5))
* **select:** Add missing mixin ([#3435](https://github.com/stackriot/material-components-web/issues/3435)) ([e654526](https://github.com/stackriot/material-components-web/commit/e654526794156e57a9751257fb511f0a5cec91e1))
* **select:** add tests for select label package ([#2289](https://github.com/stackriot/material-components-web/issues/2289)) ([b8ae66c](https://github.com/stackriot/material-components-web/commit/b8ae66c870c5bbd7d8bb7bcf39afaeeb21c0f56c))
* **select:** Also set font size for icon ([c113fc9](https://github.com/stackriot/material-components-web/commit/c113fc942a88e2c53b2c36229b2ddff84e6d0eb5))
* **select:** clean up helper text interactions ([654934d](https://github.com/stackriot/material-components-web/commit/654934dfaff71dae2b56bd2d4bb04303f5439c3e))
* **select:** Close menu on anchor click when menu is open ([8fa22aa](https://github.com/stackriot/material-components-web/commit/8fa22aaccafa3b1ae09164b228d8e1b203337221))
* **select:** debounce click on anchor ([b39094d](https://github.com/stackriot/material-components-web/commit/b39094d145f9b96c1c75e2b5fcce7b76c9b31bf1))
* **select:** Deduplicate change events ([4ad1274](https://github.com/stackriot/material-components-web/commit/4ad12741e41c5b8e175f2bc8d5053daec6cedf18)), closes [#5570](https://github.com/stackriot/material-components-web/issues/5570)
* **select:** Disable ripple/state pseudos for native multiselect ([#1781](https://github.com/stackriot/material-components-web/issues/1781)) ([e96fe2f](https://github.com/stackriot/material-components-web/commit/e96fe2fcc63f52285157105675c662319c7b5be9))
* **select:** Disabled color and opacity ([#3513](https://github.com/stackriot/material-components-web/issues/3513)) ([74bf144](https://github.com/stackriot/material-components-web/commit/74bf14435972bc70fec89410dcde540d753b221b))
* **select:** do not conduct anchor typeahead when modifier keys pressed ([6f678a9](https://github.com/stackriot/material-components-web/commit/6f678a91a400ac3408e06523d18a134cf3513f6b))
* **select:** do not emit change event when same value selected twice ([e07a708](https://github.com/stackriot/material-components-web/commit/e07a7084134b6bbfb1d31a00e410b9d133f28863))
* **select:** Do not fire change event on programmatic change ([#5255](https://github.com/stackriot/material-components-web/issues/5255)) ([ec72968](https://github.com/stackriot/material-components-web/commit/ec729683b46fb986a880f26870973337ec6788e5))
* **select:** Don't scroll page when select's menu is open ([#1500](https://github.com/stackriot/material-components-web/issues/1500)) ([bddd747](https://github.com/stackriot/material-components-web/commit/bddd747a1ab3ba4950fbdb8fe66d52018ae2d00f)), closes [#879](https://github.com/stackriot/material-components-web/issues/879)
* **select:** Enhanced select doesn't wrap focus ([#4083](https://github.com/stackriot/material-components-web/issues/4083)) ([c640d50](https://github.com/stackriot/material-components-web/commit/c640d50758f109bc2a19cbc8203b10d4a11ac426))
* **select:** ensure enough space for label when outlined menu opening above ([66b8ed7](https://github.com/stackriot/material-components-web/commit/66b8ed7e62881b1b22b3b5a32730eac43d563cb7))
* **select:** Fix background-color that changed during first mixin PR ([#2070](https://github.com/stackriot/material-components-web/issues/2070)) ([fe6186a](https://github.com/stackriot/material-components-web/commit/fe6186a448d5b0cc92ee806bc98de3e74593f0d9))
* **select:** Fix dropdown arrow mixin setting an invalid color ([#2637](https://github.com/stackriot/material-components-web/issues/2637)) ([6450613](https://github.com/stackriot/material-components-web/commit/6450613b980d06d67fe1e562cc7aeb5f7d7b2ab2))
* **select:** Fix dropdown color/opacity and options background ([#3553](https://github.com/stackriot/material-components-web/issues/3553)) ([3e26342](https://github.com/stackriot/material-components-web/commit/3e263427621cfc22e96713c478b2f73c57e89279))
* **select:** Fix enhanced select issue where it does not stay open on long press [#4173](https://github.com/stackriot/material-components-web/issues/4173) ([#4590](https://github.com/stackriot/material-components-web/issues/4590)) ([8286aa7](https://github.com/stackriot/material-components-web/commit/8286aa7321dc9fbd531ca4648e08fb141dc81d33))
* **select:** Fix floating label for pre-selected option ([#2306](https://github.com/stackriot/material-components-web/issues/2306)) ([d8dae34](https://github.com/stackriot/material-components-web/commit/d8dae34a9bdde1948b6861c0d0f52056b1317b3d))
* **select:** Fix notch outline width when floating ([#5319](https://github.com/stackriot/material-components-web/issues/5319)) ([1c494e5](https://github.com/stackriot/material-components-web/commit/1c494e5672c142f3f3451aa2270431844d35c88e))
* **select:** Fix outlined select not changing color without label ([#3433](https://github.com/stackriot/material-components-web/issues/3433)) ([a1c0930](https://github.com/stackriot/material-components-web/commit/a1c0930db786e544e673056c5d73c216ba589308))
* **select:** Fix redundant calculations & allow resyncing foundation to options ([ff4bc63](https://github.com/stackriot/material-components-web/commit/ff4bc632aeeefb8eca16d774db01f8f176479659)), closes [#5646](https://github.com/stackriot/material-components-web/issues/5646) [#5646](https://github.com/stackriot/material-components-web/issues/5646) [#5686](https://github.com/stackriot/material-components-web/issues/5686) [#5783](https://github.com/stackriot/material-components-web/issues/5783)
* **select:** Fix SassC compilation error ([#2678](https://github.com/stackriot/material-components-web/issues/2678)) ([b0b3337](https://github.com/stackriot/material-components-web/commit/b0b3337f5bb056409f54e610d3a332691c11dc5e))
* **select:** fix screenreader click interactions ([8904f3c](https://github.com/stackriot/material-components-web/commit/8904f3cbe922c5b64f5b7297f23c49861ee13f07))
* **select:** Fixes arrow direction on select focused state ([#4726](https://github.com/stackriot/material-components-web/issues/4726)) ([358546a](https://github.com/stackriot/material-components-web/commit/358546a375583bd0a90855e352767c54f926e3bb))
* **select:** Float label on focus/blur ([#2560](https://github.com/stackriot/material-components-web/issues/2560)) ([68c08f7](https://github.com/stackriot/material-components-web/commit/68c08f7c309bdfa275ea43b8cb9dad46a2b2231c))
* **select:** float label on hidden-input initial value ([744bfe5](https://github.com/stackriot/material-components-web/commit/744bfe5d8438b49d995ac5e2760d776a1df9838a))
* **select:** fully separate density mixins for filled variants ([d66d22b](https://github.com/stackriot/material-components-web/commit/d66d22bf9b9f221ff8b2d713b1e2fc9288f490df))
* **select:** Make compatible with rich list-items ([0a7895f](https://github.com/stackriot/material-components-web/commit/0a7895f4d4c22296ad23b2d8a7e1a4dbe231b941))
* **select:** Make CSS-only background transparent ([#1499](https://github.com/stackriot/material-components-web/issues/1499)) ([964a419](https://github.com/stackriot/material-components-web/commit/964a4192cc624a8e01f7594f3ee1bd994905c247))
* **select:** menu positioning logic incorrect when select appears near viewport edge [#671](https://github.com/stackriot/material-components-web/issues/671) ([#680](https://github.com/stackriot/material-components-web/issues/680)) ([874f043](https://github.com/stackriot/material-components-web/commit/874f043afd4617c72dcdde23a09bf6591b7af355))
* **select:** move label before selected text for screenreader a11y ([e139d62](https://github.com/stackriot/material-components-web/commit/e139d626eefc941415b876597787753520a45ab1))
* **select:** Only add line ripple listeners when line ripple is present ([#3470](https://github.com/stackriot/material-components-web/issues/3470)) ([453b5c5](https://github.com/stackriot/material-components-web/commit/453b5c5a6ae8c793c4c65b43f35088113d46f93d))
* **select:** Override floating label properties in select box ([#2574](https://github.com/stackriot/material-components-web/issues/2574)) ([f71d905](https://github.com/stackriot/material-components-web/commit/f71d905567f7d0831cc6f9718abf1edebaf892ab))
* **select:** pre-selected option correctly floats label ([#2125](https://github.com/stackriot/material-components-web/issues/2125)) ([fac0d03](https://github.com/stackriot/material-components-web/commit/fac0d038879f75174bb6bdf10f79c47e8679fa22))
* **select:** prevent dropdown icon focus on IE ([b9dff0a](https://github.com/stackriot/material-components-web/commit/b9dff0a19ee53e492ef9b06538dfe863214b5fc2)), closes [#6323](https://github.com/stackriot/material-components-web/issues/6323)
* **select:** prevent helper text from announcing when hidden ([e056052](https://github.com/stackriot/material-components-web/commit/e0560522fc2e390ee25a1968fdde3fde0cab6041))
* **select:** reduce adapter apis not used in MDCReact and update events to new pattern ([#3204](https://github.com/stackriot/material-components-web/issues/3204)) ([e29742a](https://github.com/stackriot/material-components-web/commit/e29742abe2556b6b9a9b57a145d57c0d8ffd666d))
* **select:** Remove animation causing the bottom line to flash ([#2612](https://github.com/stackriot/material-components-web/issues/2612)) ([639387e](https://github.com/stackriot/material-components-web/commit/639387e6b4763cac017609b0be456d06f325748c))
* **select:** Remove blue background in IE on focus ([#3497](https://github.com/stackriot/material-components-web/issues/3497)) ([1eb86cc](https://github.com/stackriot/material-components-web/commit/1eb86ccb1d5d27955670c433ba50d14fe972aaf4)), closes [#3496](https://github.com/stackriot/material-components-web/issues/3496)
* **select:** remove gap when outlined opened above with no label ([2fe7012](https://github.com/stackriot/material-components-web/commit/2fe70126ae51043d1e733e6d4ec11452e7ed9bc4))
* **select:** Remove list CSS, and use mdc-list styles directly ([#2065](https://github.com/stackriot/material-components-web/issues/2065)) ([e588392](https://github.com/stackriot/material-components-web/commit/e58839292f2daa2ed709e5a81781748d8be65c4c))
* **select:** remove min-width & dynamic width resizing ([d4cd83a](https://github.com/stackriot/material-components-web/commit/d4cd83a857fdf072f547dc597db1f8b30d33a102))
* **select:** Remove pointer events where unnecessary ([0e052b2](https://github.com/stackriot/material-components-web/commit/0e052b24f415b81fbffb45182030dd8b9d68ee98))
* **select:** Remove style customization for native select > option ([#4089](https://github.com/stackriot/material-components-web/issues/4089)) ([379c522](https://github.com/stackriot/material-components-web/commit/379c522f412c497cc288a1dd87a76b2757fe5ce3))
* **select:** remove unnecessary bottom line focus selector ([32fb314](https://github.com/stackriot/material-components-web/commit/32fb314cd0cc74f37f0d567a739c115daa96be95))
* **select:** Remove unused JS logic for bottom-line scaleX transform ([#1910](https://github.com/stackriot/material-components-web/issues/1910)) ([82a9fa3](https://github.com/stackriot/material-components-web/commit/82a9fa3eebc5e4b3ddc48b653de96dff0cefb7ac))
* **select:** revert 2fed2c1 that delegates to list for single selection logic ([38197b4](https://github.com/stackriot/material-components-web/commit/38197b4434959cc8b47124233003c14d9c4a0fbf))
* **select:** set aria-expanded false earlier when menu closes ([df00c2b](https://github.com/stackriot/material-components-web/commit/df00c2b30342877eba7d1e21e8a57141739155a5))
* **select:** Set aria-selected="false" properly ([730920f](https://github.com/stackriot/material-components-web/commit/730920fbba046b0a7c3821f52877504a78373f1f))
* **select:** set hidden input value before firing change event ([2d6ba2c](https://github.com/stackriot/material-components-web/commit/2d6ba2c239dfc7d4c2516507b11a32537c163852)), closes [#6904](https://github.com/stackriot/material-components-web/issues/6904)
* **select:** Set transform origin for line ripple ([#3432](https://github.com/stackriot/material-components-web/issues/3432)) ([0ff23e1](https://github.com/stackriot/material-components-web/commit/0ff23e11fb8b5dfcc0e2a9f3b649959672bb4bd7))
* **select:** Update colors to match latest guidance. ([#2617](https://github.com/stackriot/material-components-web/issues/2617)) ([5aa7ec7](https://github.com/stackriot/material-components-web/commit/5aa7ec7f20fe636ee7cb0488690555d73ed80639))
* **select:** Update disabled state ([f83e008](https://github.com/stackriot/material-components-web/commit/f83e00898fb57e49e38ef59b3458df4525332302))
* **select:** Update dropdown arrow icon transitions ([15d6544](https://github.com/stackriot/material-components-web/commit/15d65448e5dd8a29477b34754264644ad88f8421))
* **select:** Update markup in tests and README ([e3eacef](https://github.com/stackriot/material-components-web/commit/e3eacefcc0ca3ca89af34b3e4d3dc13c5a27570b))
* **select:** Update screenshots for FF/Windows update. ([#4790](https://github.com/stackriot/material-components-web/issues/4790)) ([04aa6ff](https://github.com/stackriot/material-components-web/commit/04aa6ff6d2763ec66137a2f63d5a1ed915868695))
* **select:** Update screenshots for FF/Windows update. ([#4790](https://github.com/stackriot/material-components-web/issues/4790)) ([6ea503c](https://github.com/stackriot/material-components-web/commit/6ea503c3c0b84e0402dcffcd010e25b676d58c5e))
* **select:** Update theme select demo ([#2496](https://github.com/stackriot/material-components-web/issues/2496)) ([db424bf](https://github.com/stackriot/material-components-web/commit/db424bf3e7d0a182c0bf8b3554e26265d1826f7d))
* **select:** Update typography to match latest guidance ([#2615](https://github.com/stackriot/material-components-web/issues/2615)) ([0f18f39](https://github.com/stackriot/material-components-web/commit/0f18f39ce066acffe5360ff65d4c7d6baba558d8))
* **select:** Use correct shape category consistently with text-field ([#4553](https://github.com/stackriot/material-components-web/issues/4553)) ([bec2ef2](https://github.com/stackriot/material-components-web/commit/bec2ef2c0bcaf2e48a44ef146599c84a08145496))
* **select:** Use key constants from DOM package ([388b042](https://github.com/stackriot/material-components-web/commit/388b042c7193f78874a8854664742fc7285f1386))
* **select:** Use superclass properties without trailing underscores ([c472bbb](https://github.com/stackriot/material-components-web/commit/c472bbbd1aa5e362c227a1c5204601362444d22f))
* **select:** Work around glitch with new list styles in Chrome ([#1757](https://github.com/stackriot/material-components-web/issues/1757)) ([4c68267](https://github.com/stackriot/material-components-web/commit/4c682672e0ab09e48efb47edb1a60e7a7f692a33))
* **shape:** Add noflip comments, fix RTL for categories ([#4116](https://github.com/stackriot/material-components-web/issues/4116)) ([62054f8](https://github.com/stackriot/material-components-web/commit/62054f88fd355ceeef685844c783cafaa1cd4f6c))
* **shape:** Allow percentage based global overrides ([#4548](https://github.com/stackriot/material-components-web/issues/4548)) ([4bf7a86](https://github.com/stackriot/material-components-web/commit/4bf7a86ab48ee01136069d326a4d6ded7a7f883e))
* **shape:** duplication bug with nested custom properties ([f77a4dd](https://github.com/stackriot/material-components-web/commit/f77a4dd1a3eb4f6af2b5a7695081408de41211b7))
* **shape:** Fix errors related to multi-value shape categories ([#4547](https://github.com/stackriot/material-components-web/issues/4547)) ([9f79d17](https://github.com/stackriot/material-components-web/commit/9f79d17c2e03fc38f2e7fe070dab0189e9e8d668))
* **shape:** remove deprecated functions ([e2ea4a9](https://github.com/stackriot/material-components-web/commit/e2ea4a99e1930ac4981f22a2b919bdbd31e75a95))
* **shape:** Rename stroke to outline ([#2634](https://github.com/stackriot/material-components-web/issues/2634)) ([ec9d7a5](https://github.com/stackriot/material-components-web/commit/ec9d7a5fd6ee8f2252022e144075710dac4be196))
* **shape:** Rename surface term with component. ([#3761](https://github.com/stackriot/material-components-web/issues/3761)) ([81bb919](https://github.com/stackriot/material-components-web/commit/81bb919e16b55251f989597ae20d48a6d71869e3))
* **slider:** Add aria-hidden to value indicator container, to avoid duplicate value announcements for screenreader users. ([9687353](https://github.com/stackriot/material-components-web/commit/96873535640a2e9141ff8e17e64fcb5e28d90f53))
* **slider:** Add MDCSliderFoundation export ([#1959](https://github.com/stackriot/material-components-web/issues/1959)) ([3a1786f](https://github.com/stackriot/material-components-web/commit/3a1786f614aff35bf047743bb0cf2e1d84814330))
* **slider:** Add two test cases to cover give default value to step for discrete slider ([#1262](https://github.com/stackriot/material-components-web/issues/1262)) ([38c40f7](https://github.com/stackriot/material-components-web/commit/38c40f7d05ec8dd068e1a4e449c770c28436aa74))
* **slider:** Adjust hidden input dimensions to take slider dimensions, such that screenreader focus indicators show a highlight around the entire slider. ([fd22355](https://github.com/stackriot/material-components-web/commit/fd22355f72ab304aec043f53ced92fa9adfef457))
* **slider:** Deregister correct handlers on destroy ([#1431](https://github.com/stackriot/material-components-web/issues/1431)) ([928d6b4](https://github.com/stackriot/material-components-web/commit/928d6b4d4484557f84ec7f46fead9065cc9af886))
* **slider:** Don't hide focus ring on discrete sliders ([#1545](https://github.com/stackriot/material-components-web/issues/1545)) ([5a777af](https://github.com/stackriot/material-components-web/commit/5a777afcaaf62f3ce3e39a3c6c06cc4bffa935ca)), closes [#1427](https://github.com/stackriot/material-components-web/issues/1427)
* **slider:** Don't throw error when markup min is greater than default max ([#3315](https://github.com/stackriot/material-components-web/issues/3315)) ([5fe0c62](https://github.com/stackriot/material-components-web/commit/5fe0c6265f8401891d39267685fcfefa7cb3e84c)), closes [#2269](https://github.com/stackriot/material-components-web/issues/2269)
* **slider:** Fire custom `input` event on input change (i.e. value change via keyboard), mirroring the native `input` event behavior for range inputs. ([ec8f846](https://github.com/stackriot/material-components-web/commit/ec8f8465f40bd13f61e2ad26c52314fc27fd5420))
* **slider:** Fire custom change event on input change. ([07deaec](https://github.com/stackriot/material-components-web/commit/07deaec27a6f92b9a00c7698c49d3e1a93e504ea))
* **slider:** Fix #quantize to use min value as the baseline. ([0f358dd](https://github.com/stackriot/material-components-web/commit/0f358ddae37a8703b8b6f0b8e4de846a196d443a))
* **slider:** Fix bug where value indicator container took space and could be hovered over / clicked when hidden. ([832668d](https://github.com/stackriot/material-components-web/commit/832668d33389a0b6194d3d8ef53aa8c252aa8f5d))
* **slider:** Fix bugs with setting slider position before component initialization: ([9110147](https://github.com/stackriot/material-components-web/commit/9110147118180dc1de5c7d727fb3ecbe2507882f))
* **slider:** Fix JS floating point rounding errors by rounding values to a set number of decimal places based on the step size. ([6072ed6](https://github.com/stackriot/material-components-web/commit/6072ed6040e1f65e099b876a4065fbb07378c186))
* **slider:** Fix mobile Chrome by handling all "up" event types ([#1484](https://github.com/stackriot/material-components-web/issues/1484)) ([bcc5ec5](https://github.com/stackriot/material-components-web/commit/bcc5ec5cc6f5ea9f1ca58baf03f2741d06768658))
* **slider:** Fix track height. ([67eb0df](https://github.com/stackriot/material-components-web/commit/67eb0df80920a53e04fc151b3ab065959e3e84dc))
* **slider:** Improve HCM borders, add missing [@noflip](https://github.com/noflip) annotations. ([e7202cb](https://github.com/stackriot/material-components-web/commit/e7202cb576ff762664a3636ec01cebfa5a61be49))
* **slider:** Mark ripple event handler as passive. Fixes [#6746](https://github.com/stackriot/material-components-web/issues/6746) ([abdd100](https://github.com/stackriot/material-components-web/commit/abdd10065367738148866c165b339a3e3b9b1fc3))
* **slider:** mobile sliding regression ([e844443](https://github.com/stackriot/material-components-web/commit/e844443878b9711a306e72b951c7ea931b17d837)), closes [#5894](https://github.com/stackriot/material-components-web/issues/5894)
* **slider:** Modify behavior such that for range sliders, presses in the middle of the range change the value (of the closest thumb). This provides a single-pointer alternative option to an otherwise gesture-based interaction. ([0b8cff7](https://github.com/stackriot/material-components-web/commit/0b8cff73421489a5322dd39b8504c16ba0f26120))
* **slider:** Move inactive track before active track, so active track consistently overlaps inactive track. ([0b7ac96](https://github.com/stackriot/material-components-web/commit/0b7ac9609470218d4ed6229c7a624ed5f3984aa8))
* **slider:** Properly handle arrow key events in IE ([#1613](https://github.com/stackriot/material-components-web/issues/1613)) ([476c81f](https://github.com/stackriot/material-components-web/commit/476c81fc6c510a4db3086a39fc8a312918fb1221))
* **slider:** Remove `width: 100%` to account for margin around slider track. ([16c563e](https://github.com/stackriot/material-components-web/commit/16c563ef71555da9f02707b9f00abb4c5fc3df79))
* **slider:** Remove big step options. Now that we're using a native range input, big step is not customizable - we follow browser defaults for big step. ([ae27b44](https://github.com/stackriot/material-components-web/commit/ae27b44b078ebdad3669b03abc9f28ed184db803))
* **slider:** Set default step value directly when initialize ([#1173](https://github.com/stackriot/material-components-web/issues/1173)) ([#1245](https://github.com/stackriot/material-components-web/issues/1245)) ([148f510](https://github.com/stackriot/material-components-web/commit/148f510a93266b5a298cdad52a72089fd8a1d4f4))
* **slider:** Set mdc-slider__thumb-container #user-select property to none ([#968](https://github.com/stackriot/material-components-web/issues/968)) ([b26b98c](https://github.com/stackriot/material-components-web/commit/b26b98c2c54527169d2f468641669c42cf2ed9d4))
* **slider:** slider track not visible ([#5512](https://github.com/stackriot/material-components-web/issues/5512)) ([f2426d2](https://github.com/stackriot/material-components-web/commit/f2426d26e683591cee87b4107f990492b47ec837))
* **slider:** Throttle slider UI updates. ([7d6a4bb](https://github.com/stackriot/material-components-web/commit/7d6a4bb72f210c94161568f964e33cd8b06a8315))
* **slider:** Throw error for invalid initial values based on the step. ([3955d8d](https://github.com/stackriot/material-components-web/commit/3955d8d3d2ba2766b59338f0ed7ae640388ce926))
* **slider:** two change events fired on each up ([d10412c](https://github.com/stackriot/material-components-web/commit/d10412cb24150639acc617caef1c7fac4fb6e4bd))
* **slider:** Update both thumbs' value indicator UI's if layout is invoked with undefined `thumb`. ([489d4c2](https://github.com/stackriot/material-components-web/commit/489d4c219d1747a8e5de3f210f00898c18201b24))
* **slider:** Use `pointer-events: none` instead of `visibility: hidden` to hide the value indicator container. Adding `visibility: hidden` removes the exit animation since the value indicator is immediately hidden. ([a94bd8d](https://github.com/stackriot/material-components-web/commit/a94bd8deb879b0321e8227d26f338789ef3ffb90))
* **slider:** Use mouse/touch events on iOS, to work around pointer events bug. ([671d72d](https://github.com/stackriot/material-components-web/commit/671d72d9544d3d1630966ec4e78b5705700defe7)), closes [#6715](https://github.com/stackriot/material-components-web/issues/6715)
* **slider:** use secondary custom property color for slider container ([#5132](https://github.com/stackriot/material-components-web/issues/5132)) ([aa8e43e](https://github.com/stackriot/material-components-web/commit/aa8e43e9afaa1e00080f149bbe497746b57a285a))
* **slider:** Visual bug when slider value is displayed as "-0" ([3fc3ab5](https://github.com/stackriot/material-components-web/commit/3fc3ab520ab5399c3b87b094e047a1751f7aa9af))
* **snackbar:** add explicit width for label to wrap in ie11 ([#5497](https://github.com/stackriot/material-components-web/issues/5497)) ([cd49033](https://github.com/stackriot/material-components-web/commit/cd4903304412d79be8da96499091259b5e954c80))
* **snackbar:** Add padding between text and button ([#1572](https://github.com/stackriot/material-components-web/issues/1572)) ([93f2d5c](https://github.com/stackriot/material-components-web/commit/93f2d5cf5470a00422561e0ea15de37ba2199063))
* **snackbar:** adjust mixins to meet spec ([#5477](https://github.com/stackriot/material-components-web/issues/5477)) ([f16f15b](https://github.com/stackriot/material-components-web/commit/f16f15b8fda0d8c283bed5551b78620bf2fd3b82))
* **snackbar:** Allow variables to be customized ([#3335](https://github.com/stackriot/material-components-web/issues/3335)) ([215d0c6](https://github.com/stackriot/material-components-web/commit/215d0c6854b61347c77cb216a31fcc333ce52a07))
* **snackbar:** Doesn't close while other element is focused ([#2183](https://github.com/stackriot/material-components-web/issues/2183)) ([e161cc0](https://github.com/stackriot/material-components-web/commit/e161cc00614d841f3c5dc86178036ddf99cf416a))
* **snackbar:** Drop mdc-button from snackbar's dependency ([#1292](https://github.com/stackriot/material-components-web/issues/1292)) ([be502c8](https://github.com/stackriot/material-components-web/commit/be502c8d29911d3d5b12dc1dd0115f6078a18258))
* **snackbar:** Explicitly use border-box ([#1453](https://github.com/stackriot/material-components-web/issues/1453)) ([7455978](https://github.com/stackriot/material-components-web/commit/745597838c4a3f67dcbe0f894c2e1923b0d15052))
* **snackbar:** Fix lint error ([#1303](https://github.com/stackriot/material-components-web/issues/1303)) ([648f985](https://github.com/stackriot/material-components-web/commit/648f985a8404f608c808d02bedd0dced2ec71aa1))
* **snackbar:** remove use of [@at-root](https://github.com/at-root) ([98d0296](https://github.com/stackriot/material-components-web/commit/98d02962b5f1edd9f541f19198dc3d1992720ea3))
* **snackbar:** Rename action/dismiss classes and revise docs/tests ([#4203](https://github.com/stackriot/material-components-web/issues/4203)) ([673dba2](https://github.com/stackriot/material-components-web/commit/673dba2b25246cb702a49b0e51bb8193d02ecc80))
* **snackbar:** Stop queued data from modifying current data ([#1084](https://github.com/stackriot/material-components-web/issues/1084)) ([eb35255](https://github.com/stackriot/material-components-web/commit/eb352553d28db3120682431f50d7c49cd494758d)), closes [#1083](https://github.com/stackriot/material-components-web/issues/1083)
* **snackbar:** Update a11y structure to announce label and actions ([40d8e47](https://github.com/stackriot/material-components-web/commit/40d8e472600544fcfe8b8b9d91c62cc014995296))
* **snackbar:** Update a11y structure to announce snackbar correctly ([a3176c8](https://github.com/stackriot/material-components-web/commit/a3176c8eaada1b6c61f0d678a193a26a25a773c5))
* **snackbar:** Use superclass properties without trailing underscores ([39b0b8e](https://github.com/stackriot/material-components-web/commit/39b0b8e06ef68d5b59515454907b5472ce75b842))
* **snackbar:** Use superclass properties without trailing underscores ([5ea0f3f](https://github.com/stackriot/material-components-web/commit/5ea0f3fc47e8bd18fcc8fd3af84fcecc17b3f800))
* **switch:** add transform transition to switch control to avoid overflow-x issues ([8c11ea2](https://github.com/stackriot/material-components-web/commit/8c11ea2a3bd7962c6d895c5bd6b849f95b52d10c))
* **switch:** Adjust track width to 36px, align thumb and track. ([d716225](https://github.com/stackriot/material-components-web/commit/d71622574c25840013a517749df357f7f93bc4d6))
* **switch:** always set track to transparent border ([9a169f4](https://github.com/stackriot/material-components-web/commit/9a169f4b158a3148126ba38bcdfa9d163434d9bb))
* **switch:** change all border-radius values to 50% instead of hardcoded pixel values ([#2255](https://github.com/stackriot/material-components-web/issues/2255)) ([1b2219b](https://github.com/stackriot/material-components-web/commit/1b2219bd6e8c8f5d80913e514ff9556e3f69eb99))
* **switch:** export temporary deprecated version ([bd68539](https://github.com/stackriot/material-components-web/commit/bd685395b652f448e889c123cda97efd77c85fcd))
* **switch:** fix strict generic checks ([7f5e0c2](https://github.com/stackriot/material-components-web/commit/7f5e0c23ffb2f547d9bfca6b68927b5861a3112b))
* **switch:** Fix switch RTL ([#2645](https://github.com/stackriot/material-components-web/issues/2645)) ([e5ad26a](https://github.com/stackriot/material-components-web/commit/e5ad26a44c6c0c767ebda4058e0317e6c0ccd913))
* **switch:** handle aria-checked correctly. ([#5202](https://github.com/stackriot/material-components-web/issues/5202)) ([#5357](https://github.com/stackriot/material-components-web/issues/5357)) ([d245a1a](https://github.com/stackriot/material-components-web/commit/d245a1a544c643b59f77cd2e01b7eb2c1182f6b9))
* **switch:** move ripple behind handle ([3e4c6dc](https://github.com/stackriot/material-components-web/commit/3e4c6dca1921caa57e1097c03135a7ddf614f003))
* **switch:** overlay colors not showing and support -5 density ([33579e0](https://github.com/stackriot/material-components-web/commit/33579e00bea179170016031fc3f24b70f57d74d2))
* **switch:** Refactor switch styles to show up in HC windows mode. ([#2853](https://github.com/stackriot/material-components-web/issues/2853)) ([ef159c8](https://github.com/stackriot/material-components-web/commit/ef159c84bb3d1e0cb0a387bdf2c8357fce1f461b))
* **switch:** set track border to be transparent ([#5323](https://github.com/stackriot/material-components-web/issues/5323)) ([397905b](https://github.com/stackriot/material-components-web/commit/397905b4e34ff9769d3ae18464bc397a0b13050f))
* **switch:** track colors can have opacity and not bleed through ([d923db7](https://github.com/stackriot/material-components-web/commit/d923db73aa8db14c0d573208877d8cb6f4a57002))
* **switch:** use CSS custom properties for theming ([d6315ef](https://github.com/stackriot/material-components-web/commit/d6315efe26e7baf45fd88244efbb24c612a95cb4))
* **tab:** Explicitly set margin to 0 on tabs for Safari ([#4654](https://github.com/stackriot/material-components-web/issues/4654)) ([28aa623](https://github.com/stackriot/material-components-web/commit/28aa6231682a1f169820c50127f8eed0a23fea1c))
* **tab:** Fix tab color variables to use color literals ([#4688](https://github.com/stackriot/material-components-web/issues/4688)) ([88734fe](https://github.com/stackriot/material-components-web/commit/88734fe77796f16bb03a6b0d17ab9b1f8ad523c7))
* **tab:** Fix tab icon color mixin to support SVG icons. ([#4540](https://github.com/stackriot/material-components-web/issues/4540)) ([5ad6570](https://github.com/stackriot/material-components-web/commit/5ad6570c0962c2114ae9fa2da2a16311d3dc01f7))
* **tab:** Update horizontal padding mixin ([#4678](https://github.com/stackriot/material-components-web/issues/4678)) ([d3ce9c9](https://github.com/stackriot/material-components-web/commit/d3ce9c9dfee4b6d2712eb4f06a04f48bf8f1fd0e))
* **tab:** Update moz-focusring to moz-focus-inner to match button ([#4567](https://github.com/stackriot/material-components-web/issues/4567)) ([968a054](https://github.com/stackriot/material-components-web/commit/968a054c8670aaab93c10af6ddb01e1069a9c030))
* **tab:** Update ripple adapter to reflect sass ripple-target. ([97c4d40](https://github.com/stackriot/material-components-web/commit/97c4d40356fcc89d9eb854ecf322ec7474aa597c))
* **tab:** Use superclass properties without trailing underscores ([a4b2e61](https://github.com/stackriot/material-components-web/commit/a4b2e61d47b515a0ebbdee788e8462d800bea7f3))
* **tab-bar:** Early exit ([#3386](https://github.com/stackriot/material-components-web/issues/3386)) ([f0ebfea](https://github.com/stackriot/material-components-web/commit/f0ebfea85844b915ac07554df31f11eea90fd29e))
* **tab-bar:** Move activateTab to adapter ([#3394](https://github.com/stackriot/material-components-web/issues/3394)) ([5007604](https://github.com/stackriot/material-components-web/commit/50076040bf7adfe2b7d8a4f727035ea18cd32f8b))
* **tab-bar:** Remove trailing comma from function. ([#3574](https://github.com/stackriot/material-components-web/issues/3574)) ([e201d24](https://github.com/stackriot/material-components-web/commit/e201d2474ada1e4f45a5171bf633c4ef34f697a2))
* **tab-bar:** Use superclass properties without trailing underscores ([f2de07c](https://github.com/stackriot/material-components-web/commit/f2de07c606c8d57942d5f0022e90eecb41b3ad61))
* **tab-indicator:** Center content ([#4837](https://github.com/stackriot/material-components-web/issues/4837)) ([102d778](https://github.com/stackriot/material-components-web/commit/102d77820ec8ed58818840040e02d63027328780))
* **tab-indicator:** Remove child selector ([#4676](https://github.com/stackriot/material-components-web/issues/4676)) ([edbe0ba](https://github.com/stackriot/material-components-web/commit/edbe0ba28ca85579e010dbb0aa00ab467bdc3d5a))
* **tab-indicator:** Show border for high contrast ([#4666](https://github.com/stackriot/material-components-web/issues/4666)) ([5a52847](https://github.com/stackriot/material-components-web/commit/5a52847d7261b2374a58eb180fa8bbd6e12a7859))
* **tab-indicator:** Use superclass properties without trailing underscores ([d30a214](https://github.com/stackriot/material-components-web/commit/d30a214ace1c0ae41fd5d7f8ba4915035fd9235a))
* **tab-scroller:** Use superclass properties without trailing underscores ([96dba1d](https://github.com/stackriot/material-components-web/commit/96dba1d3127c9364cff5786a01be8c17f69ab0ee))
* **tabs:** centered and adjusted vertical placement of css-only tab indicator ([#2141](https://github.com/stackriot/material-components-web/issues/2141)) ([e01bb84](https://github.com/stackriot/material-components-web/commit/e01bb84449f5623baf60d858a7a1a693b982292a))
* **tabs:** Disable firefox focus ring ([#4560](https://github.com/stackriot/material-components-web/issues/4560)) ([a99b7d4](https://github.com/stackriot/material-components-web/commit/a99b7d491894e4d6baeca1d1bac5e579416091d1))
* **tabs:** Expose min width mixin and set to 90px per spec. ([c4ab987](https://github.com/stackriot/material-components-web/commit/c4ab987221d5a3b9ab588321bb0347f5d665505a))
* **tabs:** Fix tab img icon styling. ([#5041](https://github.com/stackriot/material-components-web/issues/5041)) ([d0e6cd1](https://github.com/stackriot/material-components-web/commit/d0e6cd1903d3e72bab588629ba4c126e0519785e))
* **tabs:** Remove deprecated package mdc-tabs ([#4784](https://github.com/stackriot/material-components-web/issues/4784)) ([4f366a5](https://github.com/stackriot/material-components-web/commit/4f366a5d074366c63a21cad90ba1feda8b496eec))
* **tabs:** removed ::after for css-only .mdc-tab__indicator ([#1983](https://github.com/stackriot/material-components-web/issues/1983)) ([5787846](https://github.com/stackriot/material-components-web/commit/5787846935956c9b2a817813ce9e37e86050c14b))
* **tabscroller:** remove trailing underscore ([105b15b](https://github.com/stackriot/material-components-web/commit/105b15b965e41bfaafedfb43e278cd5cb9d22195))
* **testing:** Revert change from [#5299](https://github.com/stackriot/material-components-web/issues/5299). ([#5324](https://github.com/stackriot/material-components-web/issues/5324)) ([5fb62be](https://github.com/stackriot/material-components-web/commit/5fb62bead477f7db9a76d9c0adbfee4e9c110d37))
* **text-field:** add classes constant ([#4608](https://github.com/stackriot/material-components-web/issues/4608)) ([22fa259](https://github.com/stackriot/material-components-web/commit/22fa259225a9f87e2c2ff4340cb6fd03c345f45b))
* **text-field:** Add error state to trailing icon ([#2620](https://github.com/stackriot/material-components-web/issues/2620)) ([fc6cdd3](https://github.com/stackriot/material-components-web/commit/fc6cdd38d79bb75c660825ba02443d66846a9e75))
* **text-field:** Add missing import to _mixins file ([#2740](https://github.com/stackriot/material-components-web/issues/2740)) ([581e8f4](https://github.com/stackriot/material-components-web/commit/581e8f41d35c24c9941688427641743e77b48a5d))
* **text-field:** Add outline to foundation map ([#1914](https://github.com/stackriot/material-components-web/issues/1914)) ([8a8d53e](https://github.com/stackriot/material-components-web/commit/8a8d53eb07340224bed2cdc2cc61594cffeacf2c))
* move applyPassive to dom package for use in text-field ([#4747](https://github.com/stackriot/material-components-web/issues/4747)) ([ce0b1c5](https://github.com/stackriot/material-components-web/commit/ce0b1c5a3b18dff457ffe82aadca7954fcaecf1d))
* **text-field:** Add role="button" to icon ([#2584](https://github.com/stackriot/material-components-web/issues/2584)) ([4c52589](https://github.com/stackriot/material-components-web/commit/4c52589cc1edf4c1c8fc3d24f48394893bc4d111))
* **text-field:** Adjust the baseline of text field's helper text to match spec ([#3069](https://github.com/stackriot/material-components-web/issues/3069)) ([36acc28](https://github.com/stackriot/material-components-web/commit/36acc280a0ce248c2533c93cd39722b768464a46))
* **text-field:** allow commit message text-field with dash ([#1850](https://github.com/stackriot/material-components-web/issues/1850)) ([2f9dd6f](https://github.com/stackriot/material-components-web/commit/2f9dd6f24904f485c2a044088a0c8c21e0503cfd))
* **text-field:** Apply error color on bottom line of fullwidth field ([#2197](https://github.com/stackriot/material-components-web/issues/2197)) ([a6500bd](https://github.com/stackriot/material-components-web/commit/a6500bd1af4c035d707055c9d1dd4e966355c976))
* **text-field:** Change text-field/label/variables file from css to scss. ([#2103](https://github.com/stackriot/material-components-web/issues/2103)) ([2998a42](https://github.com/stackriot/material-components-web/commit/2998a42fa264e0b716153ae91ef52777dc7ef653))
* **text-field:** Changes to text area label positioning to cover text content ([#2816](https://github.com/stackriot/material-components-web/issues/2816)) ([d6f4dc1](https://github.com/stackriot/material-components-web/commit/d6f4dc1bbb1316927f5bf6897cc2a60cd419bfdf))
* **text-field:** Clicking label should focus textfield ([#2353](https://github.com/stackriot/material-components-web/issues/2353)) ([f17e0d3](https://github.com/stackriot/material-components-web/commit/f17e0d3d8e7d65f50726b38abcf984fe7d2eb9a7))
* **text-field:** disable validation check in setRequired ([#2201](https://github.com/stackriot/material-components-web/issues/2201)) ([0ba7d10](https://github.com/stackriot/material-components-web/commit/0ba7d10a3886baad8780bc12fc9d712aff13db73))
* **text-field:** Do not trigger shake animation when text field is empty ([#5097](https://github.com/stackriot/material-components-web/issues/5097)) ([4913db9](https://github.com/stackriot/material-components-web/commit/4913db9711bd9a2b69fd15ec650b98ca7027b257))
* **text-field:** Don't move caret when value has not changed ([#4160](https://github.com/stackriot/material-components-web/issues/4160)) ([d55ca11](https://github.com/stackriot/material-components-web/commit/d55ca11c7dfc22c8318aabb67ecd015502d97e98))
* **text-field:** Fix asterisk color of text field when input is invalid and disabled ([#4806](https://github.com/stackriot/material-components-web/issues/4806)) ([24054ed](https://github.com/stackriot/material-components-web/commit/24054edfaa6fd56351334aff4b116d4992790151))
* **text-field:** Fix floating label for Outlined Text Fields with a leading icon. ([#2078](https://github.com/stackriot/material-components-web/issues/2078)) ([ffca02d](https://github.com/stackriot/material-components-web/commit/ffca02dac5dccd6424b47ed6ead98e3d330518a3)), closes [#1908](https://github.com/stackriot/material-components-web/issues/1908)
* **text-field:** Fix focused hover state on outlined text field ([4df8319](https://github.com/stackriot/material-components-web/commit/4df8319235666e1e306c03a8ec123c2dfe229ea3))
* **text-field:** Fix for input alignment in textfield with trailing icon ([#4478](https://github.com/stackriot/material-components-web/issues/4478)) ([b9c5fc6](https://github.com/stackriot/material-components-web/commit/b9c5fc6c684d82f63d007761214edf3ca21f99d4))
* **text-field:** Fix label shake animation ([#1882](https://github.com/stackriot/material-components-web/issues/1882)) ([f7b5da4](https://github.com/stackriot/material-components-web/commit/f7b5da4795aae3f42ef9e2d30959c54bc68794b5))
* **text-field:** Fix label shake bug. Update invalid screenshots to show required star. ([#3338](https://github.com/stackriot/material-components-web/issues/3338)) ([1245573](https://github.com/stackriot/material-components-web/commit/1245573ea4350682b6548af89a43171302624e63))
* **text-field:** Fix outlined disabled text color to match filled variant ([#3544](https://github.com/stackriot/material-components-web/issues/3544)) ([0da74d9](https://github.com/stackriot/material-components-web/commit/0da74d97ec2f5a0990aa9d439268aa4a42f4debc))
* **text-field:** Fix placeholder styles for text field fullwidth variant. ([#4385](https://github.com/stackriot/material-components-web/issues/4385)) ([3bd3636](https://github.com/stackriot/material-components-web/commit/3bd3636ccdd70cb9d3a22735d02c95e7affeb1ac))
* **text-field:** Fix textarea height ([#2638](https://github.com/stackriot/material-components-web/issues/2638)) ([75fe98d](https://github.com/stackriot/material-components-web/commit/75fe98d97f8fead8ac1cabbb08a0b5a09f9f651f))
* **text-field:** Fix textarea-shape-radius mixin behavior for input ([#3982](https://github.com/stackriot/material-components-web/issues/3982)) ([1167289](https://github.com/stackriot/material-components-web/commit/1167289b9cb84f042e1437c0aa1a8daecade0f00))
* **text-field:** Fix textfield placeholder & outline stroke animation ([#4310](https://github.com/stackriot/material-components-web/issues/4310)) ([58c3b4d](https://github.com/stackriot/material-components-web/commit/58c3b4d2fbf4e245f7494f28f71b8d1105af963f))
* **text-field:** Fixed asterisk color where it stays in error color even after input is resolved ([#4576](https://github.com/stackriot/material-components-web/issues/4576)) ([ca502d4](https://github.com/stackriot/material-components-web/commit/ca502d4fdd24a7f5813de80e08488795b1fc060b))
* **text-field:** Fixes input text alignment on IE11 for densed text field ([#5136](https://github.com/stackriot/material-components-web/issues/5136)) ([892dd4e](https://github.com/stackriot/material-components-web/commit/892dd4ed42271be81cee3da21912c248f0df8533))
* **text-field:** Fixes input text alignment on IE11 for densed… ([#5147](https://github.com/stackriot/material-components-web/issues/5147)) ([c8f7693](https://github.com/stackriot/material-components-web/commit/c8f76938c8ec82d005196f425860585b0bfb8278))
* **text-field:** Fixes overlapping input with leading icon in absence of label ([#4637](https://github.com/stackriot/material-components-web/issues/4637)) ([64e459e](https://github.com/stackriot/material-components-web/commit/64e459e8d871c41cc03863d4160f1bd59837ee3e))
* **text-field:** Hide extraneous border in FF in HC mode. ([#2931](https://github.com/stackriot/material-components-web/issues/2931)) ([418868a](https://github.com/stackriot/material-components-web/commit/418868af360cda223d6e7664e30a7426b1410cf3))
* **text-field:** Indent Outlined Helper Text ([#2140](https://github.com/stackriot/material-components-web/issues/2140)) ([220168a](https://github.com/stackriot/material-components-web/commit/220168afd8e40a3ffc0a4bcf900b047b2178f0b5)), closes [#2139](https://github.com/stackriot/material-components-web/issues/2139)
* **text-field:** Input position and textarea size ([#3321](https://github.com/stackriot/material-components-web/issues/3321)) ([5160241](https://github.com/stackriot/material-components-web/commit/51602411be29166dd10aec9d6aea6bac17756119)), closes [#2826](https://github.com/stackriot/material-components-web/issues/2826)
* **text-field:** Made handleValidationAttributeMutation method public. ([#2779](https://github.com/stackriot/material-components-web/issues/2779)) ([1949989](https://github.com/stackriot/material-components-web/commit/194998908f8473750309ce5d3c949b2368c2b8c3))
* **text-field:** Made handleValidationAttributeMutation to accept attribute list ([#2794](https://github.com/stackriot/material-components-web/issues/2794)) ([14ee518](https://github.com/stackriot/material-components-web/commit/14ee5181282d42fa889c2e06f3342ebcd5a1ce98))
* **text-field:** Make outline visibility directly linked to floating labels ([#2073](https://github.com/stackriot/material-components-web/issues/2073)) ([6129f45](https://github.com/stackriot/material-components-web/commit/6129f4503ad7d816951bd4cb12113cb6f9dcf9e4))
* **text-field:** move script tags below mdc.js tag ([#2179](https://github.com/stackriot/material-components-web/issues/2179)) ([f5e506f](https://github.com/stackriot/material-components-web/commit/f5e506f7cbbad6e2167677aa2a304aba993f08db))
* **text-field:** Moved VALIDATION_ATTR_WHITELIST to constants. ([#2808](https://github.com/stackriot/material-components-web/issues/2808)) ([2180f95](https://github.com/stackriot/material-components-web/commit/2180f958db09232935c597da5515376b2901437c))
* **text-field:** remove disabled white patch in high contrast mode for Firefox 89+ ([17553e9](https://github.com/stackriot/material-components-web/commit/17553e9f806551fba7d7b4d5c3b6de5df96db1af))
* **text-field:** Remove extra adapter method ([#1913](https://github.com/stackriot/material-components-web/issues/1913)) ([656dc7c](https://github.com/stackriot/material-components-web/commit/656dc7c7a5838b4b0419e8f527cdc8fe46965bea)), closes [#1911](https://github.com/stackriot/material-components-web/issues/1911)
* **text-field:** Remove press ripple effect ([#2419](https://github.com/stackriot/material-components-web/issues/2419)) ([e207f0f](https://github.com/stackriot/material-components-web/commit/e207f0fa25c69e96de78a38516f2d0be1e68b657))
* **text-field:** Remove unnecessary styling on label in disabled state ([#2058](https://github.com/stackriot/material-components-web/issues/2058)) ([23e6b26](https://github.com/stackriot/material-components-web/commit/23e6b266a57d82f28325e027a94a98aece9701e0))
* **text-field:** removed --float-above from --shake selectors ([#2007](https://github.com/stackriot/material-components-web/issues/2007)) ([9d63b2e](https://github.com/stackriot/material-components-web/commit/9d63b2eb11eefa9bfd5e7c3f55200a2bfa7f6600))
* **text-field:** Reset z-index property of chrome autofill box ([#4232](https://github.com/stackriot/material-components-web/issues/4232)) ([e718cb2](https://github.com/stackriot/material-components-web/commit/e718cb2ba8c33fa9b8af5b5d73097db9c02b1a07))
* **text-field:** Restore icon tabindex according to its initial value ([#2600](https://github.com/stackriot/material-components-web/issues/2600)) ([02a3def](https://github.com/stackriot/material-components-web/commit/02a3def9ff5cc1d600fb404460ebf45e8cccc73a))
* **text-field:** Restrict resize to vertical for full width text area ([#4167](https://github.com/stackriot/material-components-web/issues/4167)) ([77a2bd4](https://github.com/stackriot/material-components-web/commit/77a2bd4cd9815023e2e97b91fbff422e58022b68))
* **text-field:** Send client position to line ripple for touch events ([#4084](https://github.com/stackriot/material-components-web/issues/4084)) ([95c0a98](https://github.com/stackriot/material-components-web/commit/95c0a98bad2ac6f4efa02c0e3b10fae75c32249e))
* **text-field:** Set char counter text not to wrap ([#4423](https://github.com/stackriot/material-components-web/issues/4423)) ([9b7dce7](https://github.com/stackriot/material-components-web/commit/9b7dce75b66091be807038475b097a6e70869a1c))
* **text-field:** Set character counter in setValue ([#4572](https://github.com/stackriot/material-components-web/issues/4572)) ([bce2e63](https://github.com/stackriot/material-components-web/commit/bce2e639317aa3f84f5e8c211ea99338cf210437))
* **text-field:** Set the margin for text-area helper text ([#3290](https://github.com/stackriot/material-components-web/issues/3290)) ([64cc846](https://github.com/stackriot/material-components-web/commit/64cc8462c167e47c6292e08cbcb076b75048f9f8))
* **text-field:** Stop emitting unused CSS in Text Field & Select ([#3293](https://github.com/stackriot/material-components-web/issues/3293)) ([fe0b7bc](https://github.com/stackriot/material-components-web/commit/fe0b7bc257a2ba3f704fd6b9c8c54a16e1c169ed))
* **text-field:** Update caret color to match spec ([#2894](https://github.com/stackriot/material-components-web/issues/2894)) ([88fd0bf](https://github.com/stackriot/material-components-web/commit/88fd0bfa765b76663e08fa6626212b7c38b525d9))
* **text-field:** Update character counter to update when value is set. ([#4663](https://github.com/stackriot/material-components-web/issues/4663)) ([acfbe2d](https://github.com/stackriot/material-components-web/commit/acfbe2d590f18c306cc0a258071388c944d90f86))
* **text-field:** Update closure type for rippleFactory ([#4324](https://github.com/stackriot/material-components-web/issues/4324)) ([7a4a707](https://github.com/stackriot/material-components-web/commit/7a4a707d0576758f554938fcfa00e427cdd9e88e))
* **text-field:** Update colors to match guidance ([#2597](https://github.com/stackriot/material-components-web/issues/2597)) ([444f14f](https://github.com/stackriot/material-components-web/commit/444f14fc8aa70ebdd0e4a4d5b6d6d1779fe31ad3))
* **text-field:** Update error color ([#2690](https://github.com/stackriot/material-components-web/issues/2690)) ([d16a42e](https://github.com/stackriot/material-components-web/commit/d16a42eb85b452d4f58953842027358db33e7f05))
* **text-field:** Update floating-label to work properly for number fields ([#2781](https://github.com/stackriot/material-components-web/issues/2781)) ([d0bff1f](https://github.com/stackriot/material-components-web/commit/d0bff1f1694f57d5f694bd152a46fdc1c048a8a3))
* **text-field:** Update helper text to use correct typography ([#2618](https://github.com/stackriot/material-components-web/issues/2618)) ([2703580](https://github.com/stackriot/material-components-web/commit/27035809743b7fb580a612ea5efc0333e22531ca))
* **text-field:** Update label position and shake animation ([#2594](https://github.com/stackriot/material-components-web/issues/2594)) ([bd84694](https://github.com/stackriot/material-components-web/commit/bd84694da13730ad963a9403036e4f704cf558d5))
* **text-field:** Update outline and label styles according to spec ([#1855](https://github.com/stackriot/material-components-web/issues/1855)) ([6ada786](https://github.com/stackriot/material-components-web/commit/6ada786180b8e31e30b610016ea222eee1850e9e))
* **text-field:** Update outline idle border color to match design guidance ([#4768](https://github.com/stackriot/material-components-web/issues/4768)) ([7fedeaf](https://github.com/stackriot/material-components-web/commit/7fedeaff4001ac7caf2946b9e4b14620a5588145))
* **text-field:** Update to match spec ([#3397](https://github.com/stackriot/material-components-web/issues/3397)) ([e34b251](https://github.com/stackriot/material-components-web/commit/e34b251da8caf9a83c34d7c2cce54ddaca176616))
* **text-field:** Update typography to subtitle1. Updated height and padding. ([#2606](https://github.com/stackriot/material-components-web/issues/2606)) ([127375e](https://github.com/stackriot/material-components-web/commit/127375ef9df78e3c13116060d41bf7a42d935888))
* **text-field:** updated dependency check test and added special case for text-field ([#1860](https://github.com/stackriot/material-components-web/issues/1860)) ([3061a61](https://github.com/stackriot/material-components-web/commit/3061a612a0bd8ec8ff59fa823f6d69fa691c7945))
* **text-field:** Updated shape mixins to set density scale ([#5207](https://github.com/stackriot/material-components-web/issues/5207)) ([719b57e](https://github.com/stackriot/material-components-web/commit/719b57e1c755c2886539032f728809cd47fab2a4))
* **text-field:** Use superclass properties without trailing underscores ([e6165eb](https://github.com/stackriot/material-components-web/commit/e6165eb156d60f8f650c68931854136a1a44fc6e))
* **textfield:** Add font styles to input, remove from mdc wrapper ([#908](https://github.com/stackriot/material-components-web/issues/908)) ([a498a28](https://github.com/stackriot/material-components-web/commit/a498a2865193b9a8d08368cd937db8c8efc275af))
* **textfield:** Add isFocused to adapter in case autofocus attr is present ([#1815](https://github.com/stackriot/material-components-web/issues/1815)) ([737f712](https://github.com/stackriot/material-components-web/commit/737f712fb596ac3518c446ca5296f42d2cf16944))
* **textfield:** add placeholder mixins and fix disabled colors ([#5360](https://github.com/stackriot/material-components-web/issues/5360)) ([0a40ced](https://github.com/stackriot/material-components-web/commit/0a40ced406f96b5c84cf39457ffe880d00999714))
* **textfield:** add primary color to textfield label on focus ([#1820](https://github.com/stackriot/material-components-web/issues/1820)) ([31aa288](https://github.com/stackriot/material-components-web/commit/31aa2888b28cd95add6a8fd92ce20aed7c9c17c2)), closes [#1435](https://github.com/stackriot/material-components-web/issues/1435)
* **textfield:** add separate classes for leading/trailing icons ([#5367](https://github.com/stackriot/material-components-web/issues/5367)) ([70c708d](https://github.com/stackriot/material-components-web/commit/70c708deece4c2c0afe38a31a4989abf2b1c1743))
* **textfield:** affix outlined alignment Safari bug ([ad4df58](https://github.com/stackriot/material-components-web/commit/ad4df58c1e9ba7a893780dc5fe7886179a0361f9))
* **textfield:** announce error message again if user blurs already invalid field ([75900a5](https://github.com/stackriot/material-components-web/commit/75900a5a916249aa307626f7f6b441086146e1c0))
* **textfield:** autofill filled label not floating correctly ([abcdbcf](https://github.com/stackriot/material-components-web/commit/abcdbcfebdcb8a8abe386abb00cd33230e8ef7a1))
* **textfield:** change root element to <label> ([#5439](https://github.com/stackriot/material-components-web/issues/5439)) ([d8d9502](https://github.com/stackriot/material-components-web/commit/d8d95020ff94249f8755ca49aaa06a6e9f0813b0))
* **textfield:** clean up input padding ([8639c26](https://github.com/stackriot/material-components-web/commit/8639c269010b77b17f1a5052d57abcb5f7d2892a))
* **textfield:** core-styles now applies sub-element core-styles ([bcdad99](https://github.com/stackriot/material-components-web/commit/bcdad99bbf9ac4d2bbc09cf6378c0c040521e514)), closes [#5927](https://github.com/stackriot/material-components-web/issues/5927)
* **textfield:** error when notching outline with no label ([b0ed593](https://github.com/stackriot/material-components-web/commit/b0ed593ccbffe7dfec51c94527cbc17000385407)), closes [#6452](https://github.com/stackriot/material-components-web/issues/6452)
* **textfield:** Fix mixin calls for keyframes ([#1735](https://github.com/stackriot/material-components-web/issues/1735)) ([cef10e8](https://github.com/stackriot/material-components-web/commit/cef10e8fe32349d4940a27654d0975fd616033a4))
* **textfield:** Fix placeholder colors ([#1813](https://github.com/stackriot/material-components-web/issues/1813)) ([0e9fbe1](https://github.com/stackriot/material-components-web/commit/0e9fbe1a405e311a74fddefeeeb14b31ddbf7b6c))
* **textfield:** Fix textarea label from overlapping border. ([#1715](https://github.com/stackriot/material-components-web/issues/1715)) ([673a84d](https://github.com/stackriot/material-components-web/commit/673a84d53554a5fc6fa28a635364d712ccb4bbcf))
* **textfield:** Fix textfield input sizes  ([#1016](https://github.com/stackriot/material-components-web/issues/1016)) ([e59ee21](https://github.com/stackriot/material-components-web/commit/e59ee21cd5c86893d807a97fe613605f3b1dd175)), closes [#1002](https://github.com/stackriot/material-components-web/issues/1002)
* **textfield:** helper text a11y interactions ([8a39352](https://github.com/stackriot/material-components-web/commit/8a39352c8a787663eecb42b46939b069729fc82c))
* **textfield:** hide filled-variant floating label at <52px ([#5553](https://github.com/stackriot/material-components-web/issues/5553)) ([5ff3380](https://github.com/stackriot/material-components-web/commit/5ff33802c22acf7d94fd94c9ccdcfcf901397d56))
* **textfield:** IE11 label overlapping placeholder ([781434a](https://github.com/stackriot/material-components-web/commit/781434a92f4dddc9b2d39853e1f5792e89e7b45b))
* **textfield:** incorrect mixin forward path ([#5554](https://github.com/stackriot/material-components-web/issues/5554)) ([3e782d8](https://github.com/stackriot/material-components-web/commit/3e782d8f84c0096f6a6de3e022017fbb05175fa2))
* **textfield:** move notched outline/label before input ([9e2f6c4](https://github.com/stackriot/material-components-web/commit/9e2f6c45016b1ccc665a271dc59134d32916123d))
* **textfield:** move ripple to separate element ([c541ebe](https://github.com/stackriot/material-components-web/commit/c541ebe157a66e8d2e881fad16cc4dbe30b2c16b))
* **textfield:** outlined trailing icon's position ([#5496](https://github.com/stackriot/material-components-web/issues/5496)) ([93e2288](https://github.com/stackriot/material-components-web/commit/93e2288b6ef73c13402a1f5122e2f9a4523ed4a4))
* **textfield:** prevent placeholder styles from collapsing with minifiers ([d07c78d](https://github.com/stackriot/material-components-web/commit/d07c78daa83389ef428618d334b037da67740b99))
* **textfield:** remove absolute positioning from icons ([1e13d1d](https://github.com/stackriot/material-components-web/commit/1e13d1d5a68632f1b0b5a9134f657d59104969f4))
* **textfield:** remove Chrome icons for date types ([4951e76](https://github.com/stackriot/material-components-web/commit/4951e7651ffbd99b382948e48306a23d2fd74fb1))
* **textfield:** remove deprecated dense variant in favor of density ([776291e](https://github.com/stackriot/material-components-web/commit/776291ef03205e4063b4040eb66f9648e16b4af6)), closes [#4142](https://github.com/stackriot/material-components-web/issues/4142)
* **textfield:** remove fullwidth variant ([69a35e8](https://github.com/stackriot/material-components-web/commit/69a35e80ceadb5ef9ffae87345eefbd80b383f51))
* **textfield:** replace notched outline and ripple `<div>`s with `<span>` ([765caef](https://github.com/stackriot/material-components-web/commit/765caef189844153ac7e47f0102139dc938edbfb))
* **textfield:** safari input has rounded corners ([#1793](https://github.com/stackriot/material-components-web/issues/1793)) ([2519b09](https://github.com/stackriot/material-components-web/commit/2519b099f5f94ef97eba19ba7399c62fd1a79fa8))
* **textfield:** Should not be in both disabled and invalid state ([#1568](https://github.com/stackriot/material-components-web/issues/1568)) ([874a17e](https://github.com/stackriot/material-components-web/commit/874a17e596066732bff25000f099ba7fa931d0c8))
* **textfield:** textarea density label position is now correct ([2f8a227](https://github.com/stackriot/material-components-web/commit/2f8a227a289a56702fec6592a87cf8bab422326a))
* **textfield:** textarea min-width not set correctly for Chrome ([0a371b4](https://github.com/stackriot/material-components-web/commit/0a371b4fe4ca4452618a867aac1731c6d3136b91))
* **textfield:** update outlined textarea specs ([524b7b8](https://github.com/stackriot/material-components-web/commit/524b7b8127e74bc3d551bd3b81e951fc51682665))
* **textfield:** use correct disabled colors for IE11 high contrast ([5353985](https://github.com/stackriot/material-components-web/commit/535398572daea2ec389c341f4e0c53cb33582b26))
* **textfield:** Use theme mixin for asterisk color ([#3952](https://github.com/stackriot/material-components-web/issues/3952)) ([981b37e](https://github.com/stackriot/material-components-web/commit/981b37e8c6557213b162412502547a13eef769ce))
* **theme:** add validation to host-aware to ensure proper usage ([defa599](https://github.com/stackriot/material-components-web/commit/defa599a8bc17557602bbf35a8a5c760fbb053f1))
* **theme:** Allow CSS variables to be passed to mdc-theme-prop ([#3086](https://github.com/stackriot/material-components-web/issues/3086)) ([b47fe7d](https://github.com/stackriot/material-components-web/commit/b47fe7d6724a63e50bc1b8097f00deed5b227b1f))
* **theme:** Declare error variables as !default ([#3531](https://github.com/stackriot/material-components-web/issues/3531)) ([eebdcdc](https://github.com/stackriot/material-components-web/commit/eebdcdc9186747dd22f936639600f254dfbf2254))
* **theme:** do not emit when theme.property() replacements are null ([aa0aaf0](https://github.com/stackriot/material-components-web/commit/aa0aaf026aae13532b3e3790992e9cc06397aa91))
* **theme:** do not throw error when setting custom props and null ([85a5272](https://github.com/stackriot/material-components-web/commit/85a5272dfeb7ad100598d480dec76b60679485f5))
* **theme:** ensure either() works with false values ([8e66dbf](https://github.com/stackriot/material-components-web/commit/8e66dbfeebe3d5fec438c69093d7f9941c0fbf10))
* **theme:** fix select underline ([#2236](https://github.com/stackriot/material-components-web/issues/2236)) ([4514e03](https://github.com/stackriot/material-components-web/commit/4514e0302a5a50708709c60941c74be86a8ee054))
* **theme:** Make $mdc-theme-on-error dark if $mdc-theme-error is light ([#3678](https://github.com/stackriot/material-components-web/issues/3678)) ([5b1348c](https://github.com/stackriot/material-components-web/commit/5b1348cee8302f12d552e8612d911a202be49ad5))
* **theme:** Move [@alternate](https://github.com/alternate) annotations for Closure Stylesheets ([#2355](https://github.com/stackriot/material-components-web/issues/2355)) ([dc52201](https://github.com/stackriot/material-components-web/commit/dc522011bc8cfac2d779d9552b1817cb05b0e594))
* **theme:** parsing error when [@import-ing](https://github.com/import-ing) mdc-theme ([b62b126](https://github.com/stackriot/material-components-web/commit/b62b1266d66734fcd9d60c7893ea048f83883f8f))
* **theme:** property() mixin not working with theme key strings ([c1fec42](https://github.com/stackriot/material-components-web/commit/c1fec424677fcb77dfc966ff1805d601a103fa30)), closes [#6158](https://github.com/stackriot/material-components-web/issues/6158)
* **theme:** Remove duplicate [@forward](https://github.com/forward) in theme index module ([b2e80a5](https://github.com/stackriot/material-components-web/commit/b2e80a5d91fc8552f22614e95f7670225f6b4248))
* **theme:** replace inline comments in property-values map with multiline comments ([#1746](https://github.com/stackriot/material-components-web/issues/1746)) ([f71025f](https://github.com/stackriot/material-components-web/commit/f71025f7a091b203e63a44c808c459a947c59245))
* **theme:** replace works for multiple replacements ([95322b1](https://github.com/stackriot/material-components-web/commit/95322b11e3b0c938d9b4de56a1ba80d1ff42596b))
* **theme:** variable overrides not working with @use/with ([2d72f36](https://github.com/stackriot/material-components-web/commit/2d72f365991f17e21b34be523aef3fa32b2b2fdb))
* **toolbar:** Add `pointer` for `icon` element ([#974](https://github.com/stackriot/material-components-web/issues/974)) ([830259c](https://github.com/stackriot/material-components-web/commit/830259ce10d3ce5a441a1141e6e37f5b14b7d42a))
* **toolbar:** Fix colors for svg icons. Update custom-toolbar demo ([#2331](https://github.com/stackriot/material-components-web/issues/2331)) ([35a5cfc](https://github.com/stackriot/material-components-web/commit/35a5cfc32ae57e8365f5e2fba19adb0dde3b0877))
* **toolbar:** Fix icon padding for ripples, and vertical alignment in FF/IE/Edge ([#2138](https://github.com/stackriot/material-components-web/issues/2138)) ([d2c9726](https://github.com/stackriot/material-components-web/commit/d2c97265388cc646709efb219747aeb89ed5ad2a))
* **toolbar:** Fix toolbar padding on desktop and mobile ([#1327](https://github.com/stackriot/material-components-web/issues/1327)) ([9b79871](https://github.com/stackriot/material-components-web/commit/9b79871dd5d8492618644516a51d8509b6355f6b))
* **toolbar:** Fix toolbar/top-app-bar button icons ([#2454](https://github.com/stackriot/material-components-web/issues/2454)) ([3a149b3](https://github.com/stackriot/material-components-web/commit/3a149b3137f6a850ae501fd5e31a9796ad5ca5df))
* **toolbar:** margin for fixed toolbar ([28b97a5](https://github.com/stackriot/material-components-web/commit/28b97a5d4e5508767a8ac26fd392a10c7b68129a))
* **toolbar:** Use transparent bg for menu icon to avoid IE 11 bug ([#1909](https://github.com/stackriot/material-components-web/issues/1909)) ([2da3dc8](https://github.com/stackriot/material-components-web/commit/2da3dc87eef11f65a13e66b60ce9b1fe3e030a4c)), closes [#881](https://github.com/stackriot/material-components-web/issues/881)
* **toolbar:** Wrong placement of last icon when there is a menu ([#1068](https://github.com/stackriot/material-components-web/issues/1068)) ([11a8ff3](https://github.com/stackriot/material-components-web/commit/11a8ff364a90cd41fe4464c95945fe3789b40116)), closes [#1026](https://github.com/stackriot/material-components-web/issues/1026)
* **tooltip:** Adding missing `return` statement into `MDCTooltipComponent#isShown` method. ([4d95812](https://github.com/stackriot/material-components-web/commit/4d95812f95ea60665fdab32a1ef8ff4d4e36a8b0))
* **tooltip:** Adds "will-change" into CSS to prevent the tooltip from "jittering" when animating in. ([7a003ac](https://github.com/stackriot/material-components-web/commit/7a003acf09345920d917cb4ab7c298a66e4fe184))
* **tooltip:** Change foundation to check for "dialog" on the anchor element's aria-haspopup attribute instead of checking for "true". ([b8a1a58](https://github.com/stackriot/material-components-web/commit/b8a1a58e4ebb49a73725d2e7ae8aef09c07db09d))
* **tooltip:** Clear hideTimeout in handleAnchorMouseEnter so that the tooltip will not be hidden if the user rapidly moves the mouse in and out of the anchor element. ([365c693](https://github.com/stackriot/material-components-web/commit/365c69360230540a67dd141f6bec999b2541a7e8))
* **tooltip:** Fix rich tooltip tests to not use aria-describedby to associate rich tooltips with their anchor elements. This is because interactive rich tooltips should not be used with aria-describedby per a11y guidance. ([251ac04](https://github.com/stackriot/material-components-web/commit/251ac04c0a976d48a6be33cc7fcd76f6e2700aac))
* **tooltip:** Fixing component definition of MDCTooltipAdatper#deregisterAnchorEventHandler. ([d928692](https://github.com/stackriot/material-components-web/commit/d928692b52157c91c46c9addf66f93ebdff09145))
* **tooltip:** flip precedence of data-tooltip-id and aria-describedby when finding TT id ([b2d22df](https://github.com/stackriot/material-components-web/commit/b2d22df5b62003247fa5ca60a23b2ce8b6a17b33))
* **top-app-bar:** "always collapsed" variant semantics in Short TopAppBar Foundation ([#5009](https://github.com/stackriot/material-components-web/issues/5009)) ([805d098](https://github.com/stackriot/material-components-web/commit/805d098aa73810659ecf9fb4d2d701181955eb54))
* **top-app-bar:** Add z-index. Cleanup redundant properties. ([#2828](https://github.com/stackriot/material-components-web/issues/2828)) ([3f6bbc1](https://github.com/stackriot/material-components-web/commit/3f6bbc110571b6023a1276be89c32c86e8eb77cd))
* **top-app-bar:** Adjust title padding-left styles ([#2390](https://github.com/stackriot/material-components-web/issues/2390)) ([e24480c](https://github.com/stackriot/material-components-web/commit/e24480c4d7387dc60ae60748508f738134804f2b))
* remove icontoggle ([#4783](https://github.com/stackriot/material-components-web/issues/4783)) ([a13089d](https://github.com/stackriot/material-components-web/commit/a13089d7d422e29fded52a65ca07bcdf9e60037f))
* **top-app-bar:** Change margin-top to padding-top to prevent margin collapsing ([#2643](https://github.com/stackriot/material-components-web/issues/2643)) ([8bba12d](https://github.com/stackriot/material-components-web/commit/8bba12da4f95dc80051837153ed5febdada2d191))
* **top-app-bar:** Fix border-radius mixin to use parameter instead of variable ([#2396](https://github.com/stackriot/material-components-web/issues/2396)) ([671aa4c](https://github.com/stackriot/material-components-web/commit/671aa4cf03b6c2fe288b464d8cc2b4924f4f828f))
* **top-app-bar:** Fix JS error when navigation icon is not present. ([#2751](https://github.com/stackriot/material-components-web/issues/2751)) ([7643f3b](https://github.com/stackriot/material-components-web/commit/7643f3bf18eb71710bb234e141dcbad7858df657))
* **top-app-bar:** Fix testdouble warning about using both stub & verify. ([#2793](https://github.com/stackriot/material-components-web/issues/2793)) ([d79af08](https://github.com/stackriot/material-components-web/commit/d79af083b11533d053e2257792731131c47f0199))
* **top-app-bar:** Move comment line to appropriate section ([#4610](https://github.com/stackriot/material-components-web/issues/4610)) ([3e36555](https://github.com/stackriot/material-components-web/commit/3e3655539ad15e325e8c3b5bb894d2e5799ba9a4))
* **top-app-bar:** Move scroll target initialization; improve test ([#4106](https://github.com/stackriot/material-components-web/issues/4106)) ([f799659](https://github.com/stackriot/material-components-web/commit/f799659ceefb2496461648bcec4d97431f6bb9a6))
* **top-app-bar:** Remove applyPassive function from toolbar/top app bar ([#2487](https://github.com/stackriot/material-components-web/issues/2487)) ([c252aba](https://github.com/stackriot/material-components-web/commit/c252abaf6174c15cb89867c5775e2cde7d6bbf45))
* **top-app-bar:** Replace margin-top in media query with padding-top ([#2704](https://github.com/stackriot/material-components-web/issues/2704)) ([88c78b3](https://github.com/stackriot/material-components-web/commit/88c78b3b791c982984bbeeae59f48de574ed5524))
* **top-app-bar:** Update short collapsed border-radius to match baseline ([#2407](https://github.com/stackriot/material-components-web/issues/2407)) ([cea9de6](https://github.com/stackriot/material-components-web/commit/cea9de68c1e7896b9236da480e2e6abe8ec35f94))
* **top-app-bar:** Use superclass properties without trailing underscores ([863ac1b](https://github.com/stackriot/material-components-web/commit/863ac1b0f1723883565ca813d56bba0a1c8a832f))
* **touch-target:** Add class to touch target wrapper. ([#5174](https://github.com/stackriot/material-components-web/issues/5174)) ([e7799b8](https://github.com/stackriot/material-components-web/commit/e7799b81a670590307e9014ecfbda0b637c96c98))
* **touch-target:** Add missing dependency - touch target to com… ([#5098](https://github.com/stackriot/material-components-web/issues/5098)) ([9306bd0](https://github.com/stackriot/material-components-web/commit/9306bd0834b91af311c3bac1cb430bc0b0c9d20e))
* **touch-target:** incorrect position in rtl when width is set ([bd1b4e9](https://github.com/stackriot/material-components-web/commit/bd1b4e9d857f0b8fb7b5b9de9b8d5d78823f386d))
* **typography:** Add alternate tag for line-height ([#3992](https://github.com/stackriot/material-components-web/issues/3992)) ([f6acae8](https://github.com/stackriot/material-components-web/commit/f6acae84aa3c018dd2bdb006aeed33268f64d201))
* **typography:** change $styles font-size to a Number ([6d1ea97](https://github.com/stackriot/material-components-web/commit/6d1ea9761de927c1653c621444e00172f74d76c7))
* **typography:** change display2 font size to correct value ([#1652](https://github.com/stackriot/material-components-web/issues/1652)) ([a943ad6](https://github.com/stackriot/material-components-web/commit/a943ad6c84d551bc90460eb14cc81f3ac8969d0b)), closes [#1638](https://github.com/stackriot/material-components-web/issues/1638)
* **typography:** do not emit styles when setting null from global variable ([f5f1b61](https://github.com/stackriot/material-components-web/commit/f5f1b613ce5c0dda39f617adbcfd2bb3f1862a74))
* **typography:** ensure global variables can override styles with module system ([7ec9697](https://github.com/stackriot/material-components-web/commit/7ec96974ef0c0c743b1eaaec40524ddc9c7e99e5))
* **typography:** Separate @material/feature-targeting, was causing Sass test to fail ([772a03e](https://github.com/stackriot/material-components-web/commit/772a03ef057047f506bb858dead1d59db0fce50e))
* **typography:** Updated demo to use div tag instead of line tag. ([#3298](https://github.com/stackriot/material-components-web/issues/3298)) ([3c250b6](https://github.com/stackriot/material-components-web/commit/3c250b6fbad4421f767ceb9a20cafaa11dda3b39))
* hot-patching closure annotations. ([#3024](https://github.com/stackriot/material-components-web/issues/3024)) ([d5b95ab](https://github.com/stackriot/material-components-web/commit/d5b95ab951afcc88368204fb07abb5107a3cde84))
* **typography:** Use unquote for setting font-family. ([#4665](https://github.com/stackriot/material-components-web/issues/4665)) ([8d8f3fc](https://github.com/stackriot/material-components-web/commit/8d8f3fcb3f2940b071f761497490c1b0123e106b))
* add missing SASS dependencies ([#5337](https://github.com/stackriot/material-components-web/issues/5337)) ([d2ae6e1](https://github.com/stackriot/material-components-web/commit/d2ae6e17d19e7139bce45a0f44ce4ba172bbb3e6))
* added back missing import scss packages ([#2104](https://github.com/stackriot/material-components-web/issues/2104)) ([ceb3d51](https://github.com/stackriot/material-components-web/commit/ceb3d51d0c9af14c9c83c0c61267b633de79b9bc))
* Adding tests. ([240c5f7](https://github.com/stackriot/material-components-web/commit/240c5f74f381967ede9eb1fa13754d2f0282da9e))
* adjust meta baseline and update color mixins. ([07f3e01](https://github.com/stackriot/material-components-web/commit/07f3e01b75306a7481c7077cd3ed12a87399958e))
* Compile demo CSS/JS during `npm run build` ([#2437](https://github.com/stackriot/material-components-web/issues/2437)) ([21150c7](https://github.com/stackriot/material-components-web/commit/21150c7a1c78a3c1be8f340acaaba44e11f4c5cf)), closes [#2325](https://github.com/stackriot/material-components-web/issues/2325) [#2433](https://github.com/stackriot/material-components-web/issues/2433)
* Document stylelint exceptions ([f89d8b8](https://github.com/stackriot/material-components-web/commit/f89d8b8f295c80c7b7e691ec712a30de8a0b26d5))
* Don't import * from focus-trap to avoid default export confusion ([#4485](https://github.com/stackriot/material-components-web/issues/4485)) ([6082dc3](https://github.com/stackriot/material-components-web/commit/6082dc363714d382859661102cd986a2b235b125))
* fix show/hide clauses in import-only files ([148e448](https://github.com/stackriot/material-components-web/commit/148e448de1290e3628fac6eae19609c8e1bffda3))
* Future-proof Sass usage ([#3921](https://github.com/stackriot/material-components-web/issues/3921)) ([6fa2269](https://github.com/stackriot/material-components-web/commit/6fa2269fdb5bc24ec7a1c41e5eac6786010b0047))
* Make CSS custom properties compatible with sass-spec 3.5 ([#1076](https://github.com/stackriot/material-components-web/issues/1076)) ([264c154](https://github.com/stackriot/material-components-web/commit/264c1545f53ac697e8206c51afff3c66344b046d)), closes [#1075](https://github.com/stackriot/material-components-web/issues/1075)
* mark all packages as side-effect-free ([be7cb05](https://github.com/stackriot/material-components-web/commit/be7cb05996a7281d1e0c12c0f4677e4d091a2329))
* prepare for [#7183](https://github.com/stackriot/material-components-web/issues/7183) ([#7188](https://github.com/stackriot/material-components-web/issues/7188)) ([77b94e8](https://github.com/stackriot/material-components-web/commit/77b94e826c6c8c932bc5974855c645f7316f73af))
* Remove edge detection for CSS custom properties ([#5264](https://github.com/stackriot/material-components-web/issues/5264)) ([fe444ac](https://github.com/stackriot/material-components-web/commit/fe444ac29da5447419cf4c25edbdf934c6e388e4))
* remove icontoggle ([#4783](https://github.com/stackriot/material-components-web/issues/4783)) ([5079213](https://github.com/stackriot/material-components-web/commit/507921382f9444a0465f748a404e878e247e736f))
* Remove lint check from test actions ([#7185](https://github.com/stackriot/material-components-web/issues/7185)) ([1ee1fbf](https://github.com/stackriot/material-components-web/commit/1ee1fbf01550f9ea19a72671e6fe360722d66385))
* server-side rendering errors in linear progress and slider ([7d0b983](https://github.com/stackriot/material-components-web/commit/7d0b983a902deee6941d61906aa5a880628db4e9))
* update circular-progress import paths ([10e8c19](https://github.com/stackriot/material-components-web/commit/10e8c191a0c4c9eb1703f25b66668c640f5344a6))
* update README to correct links. ([71e615b](https://github.com/stackriot/material-components-web/commit/71e615bc8fa757d22190641db0c2940e24bdf59b))
* update types and deprecate old ponyfill ([af332d5](https://github.com/stackriot/material-components-web/commit/af332d5bef3f826fa7a6078492d54f0444a3fee4))
* update TypeScript version to 3.5.x and fix typing errors ([#4853](https://github.com/stackriot/material-components-web/issues/4853)) ([0657504](https://github.com/stackriot/material-components-web/commit/0657504ee1b59a6a686db91b5a3363287f784b30))
* Use `var` instead of `const` in demos/ready.js ([#2343](https://github.com/stackriot/material-components-web/issues/2343)) ([78408bb](https://github.com/stackriot/material-components-web/commit/78408bb05fe09d7882017753d813dfb11b48262d))
* Use `var` instead of `const` in menu demo ([#2345](https://github.com/stackriot/material-components-web/issues/2345)) ([ab85736](https://github.com/stackriot/material-components-web/commit/ab85736bcb43b5ad13c9fb10c903e1fdba3dd5c6))
* Use head instead of body to detect edge pseudo var bug ([#4982](https://github.com/stackriot/material-components-web/issues/4982)) ([9e87478](https://github.com/stackriot/material-components-web/commit/9e8747840594dd435e04220dc9f4aa31eb153a88))


### Build System

* set AMD module module names within UMD bundles ([#7233](https://github.com/stackriot/material-components-web/issues/7233)) ([9808de0](https://github.com/stackriot/material-components-web/commit/9808de09310368c6352a0d40db84a802069d743d))


### chore

* **animation:** Removing mixins and CSS classes ([#1242](https://github.com/stackriot/material-components-web/issues/1242)) ([3f8c49b](https://github.com/stackriot/material-components-web/commit/3f8c49b85b92874cb625abcfdc3bdce5df1e5c50))
* **animation:** Rename `exit` to `exit-permanent` to match spec ([#946](https://github.com/stackriot/material-components-web/issues/946)) ([f5fa656](https://github.com/stackriot/material-components-web/commit/f5fa6569f8adb6c0a641f78bac5bc31904b4015b))
* **animation:** Rename SCSS variables & mixins to match spec ([#936](https://github.com/stackriot/material-components-web/issues/936)) ([df4ccf9](https://github.com/stackriot/material-components-web/commit/df4ccf94f0d22c6f76dce58024f447b5baea3503))
* **checkbox:** Rename checkmark path for BEM ([#2096](https://github.com/stackriot/material-components-web/issues/2096)) ([015c66b](https://github.com/stackriot/material-components-web/commit/015c66bb5ec98c24b82142ad2a7e30c857e692bd))
* **demos:** Use CSS files directly instead of Webpack's .css.js ([#1916](https://github.com/stackriot/material-components-web/issues/1916)) ([d1ec729](https://github.com/stackriot/material-components-web/commit/d1ec72976f6e57d4ddb21308e797dc316eb11415))
* **fab:** Remove the mdc-fab--plain modifier ([#1249](https://github.com/stackriot/material-components-web/issues/1249)) ([f561560](https://github.com/stackriot/material-components-web/commit/f5615608164db2a2b16a1b04c5e69c2cfab0cc1b)), closes [#1143](https://github.com/stackriot/material-components-web/issues/1143)
* **floating-label:** separate label module from text-field ([#2237](https://github.com/stackriot/material-components-web/issues/2237)) ([4b24b51](https://github.com/stackriot/material-components-web/commit/4b24b5156a4e0bcdec0c8fc498622bfd31b14fd8))
* **list:** Remove all references to Element from MDCListAdapter ([#3398](https://github.com/stackriot/material-components-web/issues/3398)) ([53f42b9](https://github.com/stackriot/material-components-web/commit/53f42b9e73c5523e95128f580e0b745bd4ce2bc9))
* **list:** remove dark theme ([#2082](https://github.com/stackriot/material-components-web/issues/2082)) ([a2c1bd0](https://github.com/stackriot/material-components-web/commit/a2c1bd01cc99e6f1755368af94dd7ae226f0aa65))
* **list:** Rename CSS class to follow BEM naming ([#1660](https://github.com/stackriot/material-components-web/issues/1660)) ([7a23183](https://github.com/stackriot/material-components-web/commit/7a23183d95bd88534db2939c04a5fc3faf46a3ad))
* **menu:** Rename SimpleMenu to Menu ([#2061](https://github.com/stackriot/material-components-web/issues/2061)) ([26c9aec](https://github.com/stackriot/material-components-web/commit/26c9aecdc9f816ef1ff07579fcc71d809702e275))
* **notched-outline:** separate outline from text-field ([#2326](https://github.com/stackriot/material-components-web/issues/2326)) ([e215ca8](https://github.com/stackriot/material-components-web/commit/e215ca8ba51529f28e6aa543327c9145428f1864))
* **ripple:** move common ripple styles out of mixins and into @material/ripple/common ([#1736](https://github.com/stackriot/material-components-web/issues/1736)) ([acb47d7](https://github.com/stackriot/material-components-web/commit/acb47d70bdc3c49c3c2b9462e1b5aa5c558034f8))
* **select:** Remove multi-select from mdc-select. ([#1917](https://github.com/stackriot/material-components-web/issues/1917)) ([145217c](https://github.com/stackriot/material-components-web/commit/145217c8c52eb29e862348b322ee0218ffe4b9aa))
* **slider:** remove dark theme ([#2099](https://github.com/stackriot/material-components-web/issues/2099)) ([e1ea223](https://github.com/stackriot/material-components-web/commit/e1ea22345c00d0b93a6311c70375dabb73f40bf4))
* **tab:** Move computeIndicatorClientRect logic out of the foundation ([#3367](https://github.com/stackriot/material-components-web/issues/3367)) ([9cac7c0](https://github.com/stackriot/material-components-web/commit/9cac7c0e9671cbe93b861cb22b34045250f6959e)), closes [#3341](https://github.com/stackriot/material-components-web/issues/3341)
* **tabs:** move indicator sass into custom mixins ([#1965](https://github.com/stackriot/material-components-web/issues/1965)) ([fc3a9d5](https://github.com/stackriot/material-components-web/commit/fc3a9d5edce204eeb9c5a74a914d39e147ed300f))
* **tabs:** removed .mdc-toolbar specific selectors ([#1979](https://github.com/stackriot/material-components-web/issues/1979)) ([b32d013](https://github.com/stackriot/material-components-web/commit/b32d0136c20e1e9d9ee4358dd48c5c8a182ef1e5))
* **text-field:** Move idle outline style method ([#1911](https://github.com/stackriot/material-components-web/issues/1911)) ([5d3b350](https://github.com/stackriot/material-components-web/commit/5d3b350d0351e42dd7f21f4619cbc2740dd74be5))
* **text-field:** Pass subelement foundations through MDCTextField super constructor ([#1684](https://github.com/stackriot/material-components-web/issues/1684)) ([80223f2](https://github.com/stackriot/material-components-web/commit/80223f222e297dd5c7507d9139b7e0099a383307))
* **text-field:** Split out helper text as a subelement ([#1611](https://github.com/stackriot/material-components-web/issues/1611)) ([8107b08](https://github.com/stackriot/material-components-web/commit/8107b0817e73b542bc3b6bc2f4640fab4d39a19c))
* **text-field:** Split out icon into subelement ([#1697](https://github.com/stackriot/material-components-web/issues/1697)) ([4e7fa3e](https://github.com/stackriot/material-components-web/commit/4e7fa3e664593d6cd8b003900efc19e43385fe10))
* **text-field:** Split out label into subelement ([#1693](https://github.com/stackriot/material-components-web/issues/1693)) ([e483aae](https://github.com/stackriot/material-components-web/commit/e483aae54ddea177c50cf23634ff62304e159b6c))
* **text-field:** Splitting out bottom line as a sub element ([#1585](https://github.com/stackriot/material-components-web/issues/1585)) ([b12c576](https://github.com/stackriot/material-components-web/commit/b12c5769f1bd1cd44c59644009a004b74a075b70))
* **theme:** Remove constrast tone vars ([#1721](https://github.com/stackriot/material-components-web/issues/1721)) ([f9527db](https://github.com/stackriot/material-components-web/commit/f9527db47ae8cb9f13eef45ad39d197a74d43d94))
* **theme:** remove dark theme ([#2169](https://github.com/stackriot/material-components-web/issues/2169)) ([13b5605](https://github.com/stackriot/material-components-web/commit/13b560550788b3f991bb876d25ed05342cbddff7))
* **theme:** Remove tonal variants, since they dont match MD guidelines ([#2473](https://github.com/stackriot/material-components-web/issues/2473)) ([a99ce40](https://github.com/stackriot/material-components-web/commit/a99ce40ba5c58d063a1acf4968f6da665c8ad328))
* **typography:** Remove the adjust margin feature ([#2464](https://github.com/stackriot/material-components-web/issues/2464)) ([3f23821](https://github.com/stackriot/material-components-web/commit/3f238212915cb781a1ca4cb4cad9da392a52bf22))


### Code Refactoring

* **animation:** Remove `transformStyleProperties` export ([#4453](https://github.com/stackriot/material-components-web/issues/4453)) ([aa44991](https://github.com/stackriot/material-components-web/commit/aa4499148b39d1e7a77d68822047df536946fdb6)), closes [/github.com/material-components/material-components-web/pull/4407#discussion_r258668567](https://github.com//github.com/material-components/material-components-web/pull/4407/issues/discussion_r258668567)
* **button:** Add ripple target as an inner element. ([#4890](https://github.com/stackriot/material-components-web/issues/4890)) ([dffefe6](https://github.com/stackriot/material-components-web/commit/dffefe6b20da243c1e8b85506949bc37c10b01a9))
* **button:** Remove compact variant ([#2361](https://github.com/stackriot/material-components-web/issues/2361)) ([77b15f4](https://github.com/stackriot/material-components-web/commit/77b15f4c08139f8155651f948547b4fae935dc1e))
* **button:** Remove primary and accent modifier ([#1270](https://github.com/stackriot/material-components-web/issues/1270)) ([3e3c869](https://github.com/stackriot/material-components-web/commit/3e3c869ff46e914b78b02b7be4a18658c74c9940))
* **checkbox:** Deprecated old checkbox theme mixin ([22d29cb](https://github.com/stackriot/material-components-web/commit/22d29cbb4e7847ae56bf923d70508d1b164c1af6))
* **chips:** Manage chip foundations instead of chips in the chip set foundation ([#2397](https://github.com/stackriot/material-components-web/issues/2397)) ([10a75f6](https://github.com/stackriot/material-components-web/commit/10a75f68d9e5e5174575fe43b6903a220f9451f3))
* **chips:** Register handlers in component instead of foundation ([#3146](https://github.com/stackriot/material-components-web/issues/3146)) ([36e2755](https://github.com/stackriot/material-components-web/commit/36e27557bb3ed444c2eba1e1d7fd1095e33c5887))
* **chips:** Stop handling DOM manipulation in input chips ([#2791](https://github.com/stackriot/material-components-web/issues/2791)) ([5a8ada5](https://github.com/stackriot/material-components-web/commit/5a8ada5ad566bc61fee6cb326acad018a1a03ad5))
* **circular-progress:** move all sizing params from CSS to markup ([58ce529](https://github.com/stackriot/material-components-web/commit/58ce529ccc29d3b172c1e774c70424eb54aac5dc))
* **dialog:** Split dialog Foundation#handleInteraction into #handleClick/#handleKeydown. ([#4655](https://github.com/stackriot/material-components-web/issues/4655)) ([d650390](https://github.com/stackriot/material-components-web/commit/d6503909d93c2a8c686dbb1215e578f7c8c5cc81))
* **dialog:** Split dialog Foundation#handleInteraction into #handleClick/#handleKeydown. ([#4655](https://github.com/stackriot/material-components-web/issues/4655)) ([36d516a](https://github.com/stackriot/material-components-web/commit/36d516a9a25a676a9aeb7fc052fce2c3709b31ba))
* **grid-list:** Deprecate component ([#5499](https://github.com/stackriot/material-components-web/issues/5499)) ([cf33f11](https://github.com/stackriot/material-components-web/commit/cf33f113dd89bbfb2873c9ce3fa1525076bfd4ec))
* **iconbutton:** Move ripple target to inner element ([33c9a73](https://github.com/stackriot/material-components-web/commit/33c9a737af75f30f434565e98ada51b335495f0a))
* **linear-progress:** Restructure buffer DOM to allow translucent buffer ([98b8434](https://github.com/stackriot/material-components-web/commit/98b843417ef6c0a10460532a37df389b0c7e936f))
* **linear-progress:** Restructure buffer DOM to allow translucent buffer ([9372e49](https://github.com/stackriot/material-components-web/commit/9372e493954585c939f341486d0361efb87da806))
* **mdc-fab:** Move Ripple to inner Element. ([#4997](https://github.com/stackriot/material-components-web/issues/4997)) ([85b33b5](https://github.com/stackriot/material-components-web/commit/85b33b50eb1757656697bc04a44dfd0eb635358d))
* **notched-outline:** Refactor notched outline to use 3 divs ([#4035](https://github.com/stackriot/material-components-web/issues/4035)) ([9741233](https://github.com/stackriot/material-components-web/commit/974123325e427cb5878ab337111d9fa84abd455d))
* **notched-outline:** remove text-field notched outline styles and coupling ([#2401](https://github.com/stackriot/material-components-web/issues/2401)) ([4f83757](https://github.com/stackriot/material-components-web/commit/4f83757953856c201b142fe11afe271734b52bf7))
* **radio:** forward only theme mixins from MDC radio index module ([72258f8](https://github.com/stackriot/material-components-web/commit/72258f89870242ba62c0ce25db680fdecb9640bc))
* **select:** consolidate state theming to single mixins ([e8bf5b2](https://github.com/stackriot/material-components-web/commit/e8bf5b2ac6c89778fa38791979e4be941e28db1c))
* **select:** Fix alignment issues, upgrade anchor to interactive element ([28d10a9](https://github.com/stackriot/material-components-web/commit/28d10a96e1d5e5762d5a056ac805070e9fb6a4e1)), closes [#5428](https://github.com/stackriot/material-components-web/issues/5428)
* **select:** Refactor select ([#5113](https://github.com/stackriot/material-components-web/issues/5113)) ([db7560e](https://github.com/stackriot/material-components-web/commit/db7560ee678ef4738690152d8b23c491030fc4a6))
* **slider:** Functional slider tick visuals with css background ([#4756](https://github.com/stackriot/material-components-web/issues/4756)) ([8f851d9](https://github.com/stackriot/material-components-web/commit/8f851d9ed2f75dc8b8956d15b3bb2619e59fa8a9))
* **snackbar:** Update a11y structure ([c60449b](https://github.com/stackriot/material-components-web/commit/c60449bc8a967e14436bec9471df99678a78515a))
* **text-field:** Change text-field--box to be the new default ([#2859](https://github.com/stackriot/material-components-web/issues/2859)) ([01b6be7](https://github.com/stackriot/material-components-web/commit/01b6be7c610bc16f4cdb7445a110997c7d4fd29c))
* **theme:** move CSS declarations to utility mixin ([96a6405](https://github.com/stackriot/material-components-web/commit/96a6405345ea1e1a7083bd08f8610384231d6607))
* **tooltip:** Moved the anchor element blur event listener from the component to within the foundation. ([0b4a4b2](https://github.com/stackriot/material-components-web/commit/0b4a4b2ebe245f2382cb08bbbc34e7ffb4f43763))
* migrate to the Sass module system ([#5453](https://github.com/stackriot/material-components-web/issues/5453)) ([faa9af3](https://github.com/stackriot/material-components-web/commit/faa9af310d1a18ec2c183830c84eb14d0492feab))
* Remove MDC theme's deep-get, used sass:map's get API instead. ([37fbae1](https://github.com/stackriot/material-components-web/commit/37fbae10d6fb993c0ea866959fb5564c052002cc))
* **top-app-bar:** Remove [de]registerEventHandler methods from adapters ([#4701](https://github.com/stackriot/material-components-web/issues/4701)) ([d8fe135](https://github.com/stackriot/material-components-web/commit/d8fe135160502c5755ccdf573d57a4a3b50e7d47))
* **top-app-bar:** Remove [de]registerEventHandler methods from adapters ([#4701](https://github.com/stackriot/material-components-web/issues/4701)) ([34bba89](https://github.com/stackriot/material-components-web/commit/34bba89a2d355fea8c01cf5c671a5fedfdad7b53))
* **touchtarget:** Rename mdc-touch-target-component => mdc… ([#5245](https://github.com/stackriot/material-components-web/issues/5245)) ([afe0dd1](https://github.com/stackriot/material-components-web/commit/afe0dd1bc240a7a88d76b0a3bf1a36044527babd))
* **typography:** Rename typography Sass function from pxToRem() to px-to-rem() ([8f0a11e](https://github.com/stackriot/material-components-web/commit/8f0a11e32895f998c326ab4a10601a2e4d5e18db))
* Swap MDCTopAppBar Sass Variable Word Order ([#4498](https://github.com/stackriot/material-components-web/issues/4498)) ([e851bae](https://github.com/stackriot/material-components-web/commit/e851bae0f69e17f4f7a627e82550cfdad33b930b))


### Documentation

* **icon-toggle:** Add deprecation notice to README ([#2766](https://github.com/stackriot/material-components-web/issues/2766)) ([119645e](https://github.com/stackriot/material-components-web/commit/119645e2c39d32fc7816505c2cebd57cd1ba845e))
* **select:** update markup to include new selectedText container ([47b500a](https://github.com/stackriot/material-components-web/commit/47b500a6cf888458b371734698b366fe2b4c3230))


### feature

* **select:** replace menu with native html select ([#2462](https://github.com/stackriot/material-components-web/issues/2462)) ([fcc7341](https://github.com/stackriot/material-components-web/commit/fcc7341b94fb8adeae57c84d41440bfc0f3cf2c3))


### Features

* **animation:** Add a linear animation method ([c250ec5](https://github.com/stackriot/material-components-web/commit/c250ec52ad1ce21943f4c7f521087bf2e647da00))
* **animation:** Create animation frame helper class ([e34e411](https://github.com/stackriot/material-components-web/commit/e34e411b1835efa3f275921ca8c9d33d6df92bec))
* **auto-init:** Fire event on mdcAutoInit complete ([#1012](https://github.com/stackriot/material-components-web/issues/1012)) ([08b5a32](https://github.com/stackriot/material-components-web/commit/08b5a32ecad0e27e8e4c49b132d72251b0584e31)), closes [#954](https://github.com/stackriot/material-components-web/issues/954)
* **auto-init:** initialize components once with multiple mdc.autoInit() calls ([#4691](https://github.com/stackriot/material-components-web/issues/4691)) ([218d2e5](https://github.com/stackriot/material-components-web/commit/218d2e552e019b29b0587442dc8bafa5107b680e))
* **auto-init:** return initialized components ([#1333](https://github.com/stackriot/material-components-web/issues/1333)) ([19955bf](https://github.com/stackriot/material-components-web/commit/19955bfaa8b9e31b9f519246dcf501a647d49c57))
* **banner:** Add banner component into MDC catalog ([aa3a3e5](https://github.com/stackriot/material-components-web/commit/aa3a3e5a43b1e012e948c5f8f8b7c133d5ba6b0d))
* **banner:** Add fixed banner variant ([fd8af3d](https://github.com/stackriot/material-components-web/commit/fd8af3d435e12d28cfc393762c325cc2d1b03f13))
* **banner:** Add fixed-width mixin. ([c61db90](https://github.com/stackriot/material-components-web/commit/c61db90a5d3abb032cfa5940b0710770ba19c4a1))
* **banner:** Add mobile-stacked variant support to banner. ([a0b2db2](https://github.com/stackriot/material-components-web/commit/a0b2db26b550162d2e409489c5ded3381b7c7dc2))
* **banner:** Defining a z-index mixin. ([ccc64ee](https://github.com/stackriot/material-components-web/commit/ccc64eea393339f38e54054bbd8865f9f78618bf))
* **banner:** Expose layout method. ([4794b25](https://github.com/stackriot/material-components-web/commit/4794b25da9af4bfa7d48f5a6fc172efc45cfd999))
* **banner:** Update banner to be mobile friendly. ([dbc449b](https://github.com/stackriot/material-components-web/commit/dbc449b0972362ba3c7fc04e26900d0c3e3d8b66))
* **banner:** Update close() to use CloseReason and provide programmatic way of closing ([ff88df6](https://github.com/stackriot/material-components-web/commit/ff88df637a944de239b8860b5f0c38454cc6cc1b))
* **banner:** Update content to be leading as default and add support for optional centered. ([8d5b84f](https://github.com/stackriot/material-components-web/commit/8d5b84fb260506c69fa93246aee538db89db8fc3))
* **base:** Add mdc-emit-once utility mixin; deduplicate styles ([#2578](https://github.com/stackriot/material-components-web/issues/2578)) ([64a00b2](https://github.com/stackriot/material-components-web/commit/64a00b29167e09719a339c1b295cd5755742c321))
* **base:** add MDCObserverFoundation class ([33e6f50](https://github.com/stackriot/material-components-web/commit/33e6f50e915d5f2b70076fd0eb0e0d6654acba0c))
* **base:** add non-statics foundation constructor type ([e3ec22f](https://github.com/stackriot/material-components-web/commit/e3ec22f4579292c962ab81d7fee1d31b38b7d036))
* **base:** add observer mixin ([4ceb422](https://github.com/stackriot/material-components-web/commit/4ceb42220043f0ca90c57d77efec89ed29ae4508))
* **button:** Add ability to color icons separately from the text ([#2362](https://github.com/stackriot/material-components-web/issues/2362)) ([6e5139c](https://github.com/stackriot/material-components-web/commit/6e5139cd3b975fb349f044564ea10769ebf40f5f))
* **button:** Add button ripple-states mixin, for simpler customization of button ripple color. ([ed7f324](https://github.com/stackriot/material-components-web/commit/ed7f324636287e95e8d966866a7c72af94377cf6))
* **button:** Add disabled state color mixins ([#5232](https://github.com/stackriot/material-components-web/issues/5232)) ([b5eb51e](https://github.com/stackriot/material-components-web/commit/b5eb51e942b8f233bc1a9a5cf4b4d0c94fb8ea57))
* **button:** Add focus indicator to link buttons in HCM. ([cad4896](https://github.com/stackriot/material-components-web/commit/cad4896899cc89b1354ba5df95c3870efbb99af5))
* **button:** Add in HCM support to the mdc button as an opt-in mixin. ([121e1f3](https://github.com/stackriot/material-components-web/commit/121e1f303f10e55c9cc5e6508bcd559c6ea7dc7b))
* **button:** Add mdc-button-filled-accessible mixin ([#1256](https://github.com/stackriot/material-components-web/issues/1256)) ([d37132f](https://github.com/stackriot/material-components-web/commit/d37132f1f0b8b9c64f8e2442d863eee9ed735123))
* **button:** Add overflow ellipsis mixin ([#5352](https://github.com/stackriot/material-components-web/issues/5352)) ([47949b0](https://github.com/stackriot/material-components-web/commit/47949b08e0a2ec82178c638d8074c34c745409b4))
* **button:** Add padding mixin, adjust icon margin ([#2420](https://github.com/stackriot/material-components-web/issues/2420)) ([819d139](https://github.com/stackriot/material-components-web/commit/819d139c016d4e4184278be87cc0fe4ebefd7cf2))
* **button:** Add support for increased touch target to button. ([#4948](https://github.com/stackriot/material-components-web/issues/4948)) ([1d7a2e6](https://github.com/stackriot/material-components-web/commit/1d7a2e623236b47046d719270ea1508ba9a3e224))
* **button:** Add support for SVG icons ([#2352](https://github.com/stackriot/material-components-web/issues/2352)) ([499ad15](https://github.com/stackriot/material-components-web/commit/499ad1549de4e5c498e31cf0656f949dacf8e68f))
* **button:** Add trailing icon support via label element ([#4159](https://github.com/stackriot/material-components-web/issues/4159)) ([fa41579](https://github.com/stackriot/material-components-web/commit/fa415797bed1126073fe7fb6aa421b179b51a4a4))
* **button:** add typography & state layer keys to theming API ([068fd50](https://github.com/stackriot/material-components-web/commit/068fd5028031778ada1f9f8469ac62ed60c9e7ef))
* **button:** consolidate states into button mixins ([637d15d](https://github.com/stackriot/material-components-web/commit/637d15da60919641e5571f280562c4fb3491c8f0))
* **button:** create theme mixin for button ([#1244](https://github.com/stackriot/material-components-web/issues/1244)) ([5266776](https://github.com/stackriot/material-components-web/commit/5266776f5ef512e69f43cf0bf039ca4f411184f5))
* **button:** employ elevation token resolvers in theming API ([ebb5c73](https://github.com/stackriot/material-components-web/commit/ebb5c73bb87f1098d7e300372a811968a2d6c9f0))
* **button:** Expand outlined touch target to include side borders ([ce6cb70](https://github.com/stackriot/material-components-web/commit/ce6cb7024d1da3b0e4fb5e2c67ba269dbb3098ec))
* **button:** Implement stroked button ([#1194](https://github.com/stackriot/material-components-web/issues/1194)) ([56bf37d](https://github.com/stackriot/material-components-web/commit/56bf37d843f51cec3cc8aafde35b8a4039b5af27)), closes [#987](https://github.com/stackriot/material-components-web/issues/987)
* **button:** implement unelevated button ([#1157](https://github.com/stackriot/material-components-web/issues/1157)) ([3cca7ef](https://github.com/stackriot/material-components-web/commit/3cca7ef59b46a0fd79e9f72f7f12a9a825932deb))
* **button:** Move disabled style into private base mixin  ([#1255](https://github.com/stackriot/material-components-web/issues/1255)) ([2336128](https://github.com/stackriot/material-components-web/commit/23361285247d24fc4d7f0fdd79b7543d038f35c0))
* **button:** move icon-size to theming API ([85e9a6a](https://github.com/stackriot/material-components-web/commit/85e9a6ac3ca1c9395d0d955326c3c1a7c3fe1a04))
* **button:** removed dark theme from buttons ([#2038](https://github.com/stackriot/material-components-web/issues/2038)) ([dee5055](https://github.com/stackriot/material-components-web/commit/dee5055198f2622eeaa6ad089f0d052157b3d470))
* **button:** removed unused imports from css ([#2093](https://github.com/stackriot/material-components-web/issues/2093)) ([339e15b](https://github.com/stackriot/material-components-web/commit/339e15b36bd78201e54c9d95abad5c38aacbd707))
* **button:** Setup elevation overlay ([#5256](https://github.com/stackriot/material-components-web/issues/5256)) ([3cbee6d](https://github.com/stackriot/material-components-web/commit/3cbee6dac7cafbe8986bad0a8593d870b00f5f32))
* **button:** Support icon in button ([#1281](https://github.com/stackriot/material-components-web/issues/1281)) ([b727c14](https://github.com/stackriot/material-components-web/commit/b727c149ec24df096d86c469a1710e5a333d62bd))
* **button:** thread state keys through theme config ([05f2496](https://github.com/stackriot/material-components-web/commit/05f249666dff2bae35a1a6c1e7a5ed89eb193213))
* **button:** Update text and raise button baseline styles ([#1074](https://github.com/stackriot/material-components-web/issues/1074)) ([09a763a](https://github.com/stackriot/material-components-web/commit/09a763ae8ef2da717b83c31ef6126a6350a3234e))
* **button:** Use mdc-states mixin for button styles ([#1668](https://github.com/stackriot/material-components-web/issues/1668)) ([55fbba9](https://github.com/stackriot/material-components-web/commit/55fbba9ac2edfd36bb05bb734f56d0de1209e28f))
* **button:** Use new ripple mixins, and remove unnecessary mixin ([#1471](https://github.com/stackriot/material-components-web/issues/1471)) ([510f356](https://github.com/stackriot/material-components-web/commit/510f3567a33c23166b98aab89bf5375d4a7fd978))
* **card:** Add `--stroked` variant and `mdc-card-stroke` mixin ([#2035](https://github.com/stackriot/material-components-web/issues/2035)) ([76e56cf](https://github.com/stackriot/material-components-web/commit/76e56cfd0f6d89872a8c9b4623efdcf8936729d5)), closes [#1708](https://github.com/stackriot/material-components-web/issues/1708)
* **card:** Add elevation overlay structure ([#5282](https://github.com/stackriot/material-components-web/issues/5282)) ([aa0eba4](https://github.com/stackriot/material-components-web/commit/aa0eba489a33cb523ae1b5ac5b0ab24995731456))
* **card:** add feature targeting for styles ([#4301](https://github.com/stackriot/material-components-web/issues/4301)) ([92db33b](https://github.com/stackriot/material-components-web/commit/92db33b7702e6e25889e5232528ca2847a54e503))
* **card:** Add primary action element with hover, focused, and pressed states ([#2039](https://github.com/stackriot/material-components-web/issues/2039)) ([3949dbe](https://github.com/stackriot/material-components-web/commit/3949dbebe633a5f65c96183bf9d090d6936a10f0)), closes [#1709](https://github.com/stackriot/material-components-web/issues/1709)
* **card:** Add theme mixins; remove content layouts ([#2025](https://github.com/stackriot/material-components-web/issues/2025)) ([5f338e6](https://github.com/stackriot/material-components-web/commit/5f338e62ddf790f1f33cdaae1565538d9ad2c2a7)), closes [#1126](https://github.com/stackriot/material-components-web/issues/1126)
* **card:** Add transparent outline to elevated card, so card boundary is shown on high-contrast mode. ([c71ebfa](https://github.com/stackriot/material-components-web/commit/c71ebfa02b7f3203317255e377b5cb165a0cfeac))
* **card:** Moving ripple into a `mdc-card__ripple` element rather than the `mdc-card__primary-action`. ([8ace3b8](https://github.com/stackriot/material-components-web/commit/8ace3b8106499cc9c126abde77258bcae7d5929d))
* **checkbox:** Add color theme mixins and update default color to secondary ([#1365](https://github.com/stackriot/material-components-web/issues/1365)) ([cc7538f](https://github.com/stackriot/material-components-web/commit/cc7538f49f7df31dd334a3437fdd952175a38747)), closes [#1146](https://github.com/stackriot/material-components-web/issues/1146)
* **checkbox:** Add CSS custom properties to MDC checkbox for density theming ([9244508](https://github.com/stackriot/material-components-web/commit/9244508bd82ab65635169cfacd74f1a25ebaab7e))
* **checkbox:** Add CSS custom properties to MDC checkbox theme mixins ([66669e3](https://github.com/stackriot/material-components-web/commit/66669e3b668d0579ac71d6896240fd14d6a4322a))
* **checkbox:** Add disabled state color mixins ([#5167](https://github.com/stackriot/material-components-web/issues/5167)) ([01628ef](https://github.com/stackriot/material-components-web/commit/01628efaa65dce47571fe4d6b1fcc30ba547f259))
* **checkbox:** add feature targeting to remaining public mixins ([#4315](https://github.com/stackriot/material-components-web/issues/4315)) ([4bc18d1](https://github.com/stackriot/material-components-web/commit/4bc18d1e5d8681593c52d6c0f0f7e85132edfd29))
* **checkbox:** Add support for 48px touch target ([#5025](https://github.com/stackriot/material-components-web/issues/5025)) ([b5685a8](https://github.com/stackriot/material-components-web/commit/b5685a81736372701f38ae69f9d7480b5d52a01b))
* **checkbox:** Add support for checkbox CSS-only `indeterminate` checkbox ([b273afa](https://github.com/stackriot/material-components-web/commit/b273afa93441e6d0375f7df33d5b69d8a7e1cfa8))
* **checkbox:** Add validation to MDC Checkbox theme mixin ([2d5f32d](https://github.com/stackriot/material-components-web/commit/2d5f32d41cda48ca8e3c1d2244d6fb3bb4c6aa7d))
* **checkbox:** Added mixin to customize checkbox touch dimension. ([#4697](https://github.com/stackriot/material-components-web/issues/4697)) ([42e41d8](https://github.com/stackriot/material-components-web/commit/42e41d872a6ee48e1ab9a4907b6f277aafe0f2a2))
* **checkbox:** Added mixin to customize checkbox touch dimension. ([#4697](https://github.com/stackriot/material-components-web/issues/4697)) ([ff2873e](https://github.com/stackriot/material-components-web/commit/ff2873ed9b0f1afdedd5c9ced8e2a02fbb0a3a87))
* **checkbox:** Added new theme mixin in checkbox to match token keys ([8e60818](https://github.com/stackriot/material-components-web/commit/8e608183652b1cd051981a4266cae66b5591a148))
* **checkbox:** Added new theme mixin in checkbox to match token keys ([33a9548](https://github.com/stackriot/material-components-web/commit/33a9548526d90fe41aae1e89c925720505fa5f85))
* **checkbox:** Added theme configuration support to checkbox ([fbf73c2](https://github.com/stackriot/material-components-web/commit/fbf73c2a6633298d6d65cdfcb8f76151e0e9c600))
* **checkbox:** Added theme configuration support to checkbox ([58eaa9f](https://github.com/stackriot/material-components-web/commit/58eaa9f027bb7ced126d3fe97cab5a0f627eb098))
* **checkbox:** Declare all Sass variables as `!default` ([de6c833](https://github.com/stackriot/material-components-web/commit/de6c8332caa042caf277c83907d0078475028450)), closes [#3708](https://github.com/stackriot/material-components-web/issues/3708)
* **checkbox:** Move ripple to child node ([#4981](https://github.com/stackriot/material-components-web/issues/4981)) ([9712b24](https://github.com/stackriot/material-components-web/commit/9712b24b2e7d16b988b793df5b3802052071c87c))
* **checkbox:** Separate static styles from checkbox styles ([150f427](https://github.com/stackriot/material-components-web/commit/150f427a01a7b20783d287cebe40bb4d93a24ce3))
* **checkbox:** Separate static styles from checkbox styles ([4f55400](https://github.com/stackriot/material-components-web/commit/4f55400bbde3d85cacf379b7f7a80dd439952b3f))
* **checkbox:** Separate static styles from checkbox styles ([ff87000](https://github.com/stackriot/material-components-web/commit/ff870005acef3cb26a6b4f378c012ffdb1061194))
* **checkbox:** Support customizing the color of the stroke in the marked state ([#3412](https://github.com/stackriot/material-components-web/issues/3412)) ([7f47386](https://github.com/stackriot/material-components-web/commit/7f4738692fe686adcd559cd3bc9db8f618502e34))
* **checkbox:** Toggle selected class with state ([#4612](https://github.com/stackriot/material-components-web/issues/4612)) ([5f06dce](https://github.com/stackriot/material-components-web/commit/5f06dcec30371a192c837225e953513159461bfd))
* **checkbox:** Updated cssClasses constant of checkbox ([#4674](https://github.com/stackriot/material-components-web/issues/4674)) ([bb25680](https://github.com/stackriot/material-components-web/commit/bb25680971f749957908cffd967a88e5e949c4cb))
* **checkbox:** Use new mdc-states mixin for checkbox styles ([#1672](https://github.com/stackriot/material-components-web/issues/1672)) ([dab612c](https://github.com/stackriot/material-components-web/commit/dab612c10ef42b623b8b0a1709008ac91f7ee83f))
* **checkbox:** Use new ripple mixins, and remove unnecessary mixin ([#1472](https://github.com/stackriot/material-components-web/issues/1472)) ([92b22eb](https://github.com/stackriot/material-components-web/commit/92b22eb165bb08d0c79d276bc96f43866bb6b7c9))
* **chip:** Add density mixin to chip. ([#5109](https://github.com/stackriot/material-components-web/issues/5109)) ([bdf3430](https://github.com/stackriot/material-components-web/commit/bdf3430781bc9b8efcff47695f613c253739b78c))
* **chips:** Add `mdc-chip-set--choice` variant ([#2215](https://github.com/stackriot/material-components-web/issues/2215)) ([f89cd10](https://github.com/stackriot/material-components-web/commit/f89cd10569cc6351e5c7b25b4a20c886db35b4cd))
* **chips:** Add a mixin to handle chip elevation transitions ([#3579](https://github.com/stackriot/material-components-web/issues/3579)) ([eadde7a](https://github.com/stackriot/material-components-web/commit/eadde7a9bba7281b9c3f712898dcf98df37d5bb7))
* **chips:** Add animation for entry chips ([#2543](https://github.com/stackriot/material-components-web/issues/2543)) ([68006fb](https://github.com/stackriot/material-components-web/commit/68006fb75fbf66f0ace18be6dde6a53707892765))
* **chips:** Add chips styling ([1db5c9f](https://github.com/stackriot/material-components-web/commit/1db5c9fc842292715f8b4603ce0b979066f1c639))
* **chips:** Add configurable primary action focus ([deb212d](https://github.com/stackriot/material-components-web/commit/deb212de41e1073f7ff00af92e5f37bad0d8c4b0))
* **chips:** Add elevation overlay structure ([#5279](https://github.com/stackriot/material-components-web/issues/5279)) ([3e560b3](https://github.com/stackriot/material-components-web/commit/3e560b33a8fbf820a404596d76ae5f743e57b6a2))
* **chips:** Add entry chips ([#2414](https://github.com/stackriot/material-components-web/issues/2414)) ([afe5367](https://github.com/stackriot/material-components-web/commit/afe5367e1b0c5b2f2a053d66dc2c36eaf13febd4))
* **chips:** Add feature targeting for styles ([#4693](https://github.com/stackriot/material-components-web/issues/4693)) ([0fdb889](https://github.com/stackriot/material-components-web/commit/0fdb8896c7fdf851054a8cf5079cfa30aaec7be3))
* **chips:** Add focus{in|out} handlers ([10af6cf](https://github.com/stackriot/material-components-web/commit/10af6cf39cb2ae0a7deb9a951960f115f6ecdace))
* **chips:** Add keyboard navigation ([#4844](https://github.com/stackriot/material-components-web/issues/4844)) ([42065fe](https://github.com/stackriot/material-components-web/commit/42065fe416bcd1b082d0d55ad985084f3d018ded)), closes [#2259](https://github.com/stackriot/material-components-web/issues/2259)
* **chips:** Add keyCode support ([82fa986](https://github.com/stackriot/material-components-web/commit/82fa986b95be4c16271df50effda1046d015d35c))
* **chips:** Add mixins to customize horizontal padding and icon margins ([#3530](https://github.com/stackriot/material-components-web/issues/3530)) ([43aeea4](https://github.com/stackriot/material-components-web/commit/43aeea4fcffb63997bcd919346623f37efbba05d))
* **chips:** Add Sass mixins for customization ([#2177](https://github.com/stackriot/material-components-web/issues/2177)) ([667513c](https://github.com/stackriot/material-components-web/commit/667513cd6a5a715a3f4df174af5427acbf76993e))
* **chips:** Add setAttr adapter method ([#4736](https://github.com/stackriot/material-components-web/issues/4736)) ([b6a606d](https://github.com/stackriot/material-components-web/commit/b6a606d3a5fb405c233327836161116b4d48daf6))
* **chips:** Add setAttr adapter method ([#4736](https://github.com/stackriot/material-components-web/issues/4736)) ([1e21acf](https://github.com/stackriot/material-components-web/commit/1e21acf6e985d9b13de533392a70e0e68b71cecd))
* **chips:** Add setSelectedFromChipset method ([#4872](https://github.com/stackriot/material-components-web/issues/4872)) ([283bd55](https://github.com/stackriot/material-components-web/commit/283bd55c829dd132013acf41f7239579b7e6dea0))
* **chips:** Add support for increased touch target to chips. ([#4970](https://github.com/stackriot/material-components-web/issues/4970)) ([6aa109d](https://github.com/stackriot/material-components-web/commit/6aa109d5b0b5010f979fde78a31a18c3888e489c))
* **chips:** Add trailing action feature targeting test ([bec0659](https://github.com/stackriot/material-components-web/commit/bec0659206aee793e6970d59c73f7969ab540b69))
* **chips:** Allow close icon and exit animation ([#2571](https://github.com/stackriot/material-components-web/issues/2571)) ([3d8a27b](https://github.com/stackriot/material-components-web/commit/3d8a27b02743f1a9e9616c0ff585e39f198e58dc))
* **chips:** Announce when chips are removed ([b3f70eb](https://github.com/stackriot/material-components-web/commit/b3f70ebded85240e75c6d1553cc9d0382b22c31d))
* **chips:** Baseline chip and chip set ([#2083](https://github.com/stackriot/material-components-web/issues/2083)) ([17c6c51](https://github.com/stackriot/material-components-web/commit/17c6c518b95dd171df8f6076f621d038080e1c52))
* **chips:** Change chip color when selected ([#2329](https://github.com/stackriot/material-components-web/issues/2329)) ([ecf4060](https://github.com/stackriot/material-components-web/commit/ecf406005ec2b6a9e86c0a2e92bbb08a1454d42c))
* **chips:** Consolidate interaction event handlers ([#5251](https://github.com/stackriot/material-components-web/issues/5251)) ([5729943](https://github.com/stackriot/material-components-web/commit/5729943baf1726e931e26907c78774f2caec404e))
* **chips:** Create mixin to customize chip margins ([#2277](https://github.com/stackriot/material-components-web/issues/2277)) ([b996b7f](https://github.com/stackriot/material-components-web/commit/b996b7f5d9aa91ca42e3ec7203829080de03ee5f))
* **chips:** Create trailing action business logic ([9ebee4c](https://github.com/stackriot/material-components-web/commit/9ebee4ceb998e5fa651d4f147e5e39d43600db6e))
* **chips:** Customize icon size and color ([#2613](https://github.com/stackriot/material-components-web/issues/2613)) ([0f5af21](https://github.com/stackriot/material-components-web/commit/0f5af21fc4cb7dbc38944d8cc5cda092a022c02e))
* **chips:** Expose "action" component ([03d34bb](https://github.com/stackriot/material-components-web/commit/03d34bbad14df501f5faf9d03e62c0727ef6f7da))
* **chips:** Expose "chip" component ([cbc57c6](https://github.com/stackriot/material-components-web/commit/cbc57c600f972ec88098d7ad9c4763f57dce0eb4))
* **chips:** Expose "chipset" component ([d6c5bcf](https://github.com/stackriot/material-components-web/commit/d6c5bcf3743048e44d5462a2266804a7a75678a7))
* **chips:** Expose method to begin chip exit animation ([#2845](https://github.com/stackriot/material-components-web/issues/2845)) ([eb00fd3](https://github.com/stackriot/material-components-web/commit/eb00fd33376b94fff3e7adbf0985ae93f8283018))
* **chips:** Expose top-level resources ([fefc668](https://github.com/stackriot/material-components-web/commit/fefc668d77004762598e0cd88f3248a03a6aab1b))
* **chips:** Expose trailing action chip files ([6b48781](https://github.com/stackriot/material-components-web/commit/6b48781bf97d3b08b8f35b9eacde2b87748ae2e1))
* **chips:** Handle leading/trailing icon styles ([#2191](https://github.com/stackriot/material-components-web/issues/2191)) ([be71f9f](https://github.com/stackriot/material-components-web/commit/be71f9fd17c2729e00d363b6468144db3ee8340c))
* **chips:** Handle multi-select for filter chips ([#2297](https://github.com/stackriot/material-components-web/issues/2297)) ([807b6ce](https://github.com/stackriot/material-components-web/commit/807b6ce17320f12cfd55559bfdcac3ef534c19c7))
* **chips:** Make chip exit on trailing icon click optional ([#2893](https://github.com/stackriot/material-components-web/issues/2893)) ([9178d46](https://github.com/stackriot/material-components-web/commit/9178d460924284521cfbac1458f904e6ea31d912))
* **chips:** make deselect and toggleSelect private. Update handleChipInteraction/Removal API ([#3617](https://github.com/stackriot/material-components-web/issues/3617)) ([73ab5a0](https://github.com/stackriot/material-components-web/commit/73ab5a0d0c38ad5fd2068a4a20a90915fc5c7fc8))
* **chips:** Move logic for calculating chip bounding rect into a foundation method ([#4243](https://github.com/stackriot/material-components-web/issues/4243)) ([b30f5e2](https://github.com/stackriot/material-components-web/commit/b30f5e2e5b6e0012be45f23791133e34fceae74b))
* **chips:** Pass chip ids instead of foundations in events  ([#3265](https://github.com/stackriot/material-components-web/issues/3265)) ([7ce0fba](https://github.com/stackriot/material-components-web/commit/7ce0fba6fd782ca25cc389ca07ec34bb0f09a54c))
* **chips:** Remove touch target wrapper selector from chip set spacing ([367d88b](https://github.com/stackriot/material-components-web/commit/367d88bdb32a24c73f935154d616d1d7abfd9dd8))
* **chips:** Replace leading icon with checkmark in selected filter chips ([#2320](https://github.com/stackriot/material-components-web/issues/2320)) ([0b73002](https://github.com/stackriot/material-components-web/commit/0b7300213518cfd9c135da5b49819d5cb644b4c6))
* **chips:** Reposition trailing action touch target width mixin ([3846ce3](https://github.com/stackriot/material-components-web/commit/3846ce311f65156f24dbd229100e660f1285bf5f))
* **chips:** Restructure trailing action mixins ([05f5e15](https://github.com/stackriot/material-components-web/commit/05f5e1583b81bc00dbcd2ae21ee0acc43b3e13b4))
* **chips:** Start deprecation of chip ([e683bdf](https://github.com/stackriot/material-components-web/commit/e683bdf4a0f6642b87f099b51425898dd4a1b644))
* **chips:** Start deprecation of chip root directory ([73a2271](https://github.com/stackriot/material-components-web/commit/73a227194d7c0caf305329f1a8b22eb801a6114b))
* **chips:** Start deprecation of chip set ([148e8cf](https://github.com/stackriot/material-components-web/commit/148e8cfccac563305b9fa6fd4a6e8602620d6426))
* **chips:** Start deprecation of chip trailing action ([9eeb35c](https://github.com/stackriot/material-components-web/commit/9eeb35c384c78a65215bf8885d5ebb5fb1592cd9))
* **chips:** Support presentational actions ([8c68530](https://github.com/stackriot/material-components-web/commit/8c685301d66ac6c8bc59b6b12930efd23804cce3))
* **chips:** Truncate long chip labels by default ([f5c6db8](https://github.com/stackriot/material-components-web/commit/f5c6db8fc71c654c47c68a4c717f8d8995f43e30))
* **chips:** Use index for all chip operations ([#4869](https://github.com/stackriot/material-components-web/issues/4869)) ([07078bb](https://github.com/stackriot/material-components-web/commit/07078bbb62d9f598461c7ff3c6b51c67d7b339de))
* **chips:** Use semantic button elements ([#4627](https://github.com/stackriot/material-components-web/issues/4627)) ([741124d](https://github.com/stackriot/material-components-web/commit/741124d40cbf10bfc60a7f54a758fca2b6379ffd))
* **chips:** Use semantic button elements ([#4627](https://github.com/stackriot/material-components-web/issues/4627)) ([848a5eb](https://github.com/stackriot/material-components-web/commit/848a5eb4449c7098c3d9e366e49feb7bcde0744b))
* **chips:** Use trailing action component in chip ([058cfd2](https://github.com/stackriot/material-components-web/commit/058cfd23caa5c00f29c90f3d2fc9b813581ba974))
* **circular-progress:** Add foundation methods to get isDeterminate and progress value ([7d8f9c8](https://github.com/stackriot/material-components-web/commit/7d8f9c8d73f16c01ed4a941ab9510377a0aae219))
* **circular-progress:** Add Sass styles and tests ([bd33cb5](https://github.com/stackriot/material-components-web/commit/bd33cb56bdab7139052aeedbeec363f17b4dfc40))
* **circular-progress:** Add TS for foundation, adapter, component with tests ([548b1d4](https://github.com/stackriot/material-components-web/commit/548b1d4057f21e066a4c494a57a0c068c23e18cd))
* **circular-progress:** do not require HTML without whitespaces ([8648b82](https://github.com/stackriot/material-components-web/commit/8648b8258f7f87edcc1d58a2bc7db3d78425508f))
* **circular-progress:** support track color ([e27c580](https://github.com/stackriot/material-components-web/commit/e27c5802fed20af29976f1f84bc39f9b59999ab5))
* **color:** Add on-surface and surface to theme.  ([#2556](https://github.com/stackriot/material-components-web/issues/2556)) ([9639689](https://github.com/stackriot/material-components-web/commit/9639689592bc531f16b5cb3b66e9e0a108b309b0))
* **data-table:** Add base styles to support pagination. ([927fa90](https://github.com/stackriot/material-components-web/commit/927fa902c3297a5a7cc9436e82cb81f3aabe1b4b))
* **data-table:** Add foundation methods to support loading state. ([e75deb8](https://github.com/stackriot/material-components-web/commit/e75deb8540fa70236087d335c9cd6280bd643285))
* **data-table:** Add progress indicator / loading feature to data table ([4497ace](https://github.com/stackriot/material-components-web/commit/4497acef8fd636b6ceef3cf055f664c92465e965))
* **data-table:** Add support for applying row checkbox density ([291b355](https://github.com/stackriot/material-components-web/commit/291b3553d20c5dda9c5a80e0dda0705b524f41a3))
* **data-table:** Added data table component ([#4889](https://github.com/stackriot/material-components-web/issues/4889)) ([7d3380a](https://github.com/stackriot/material-components-web/commit/7d3380a8b55a8a2fdcdf1193d8309f2a561b922b))
* **data-table:** Added sort status label to sortable column header ([9833dc2](https://github.com/stackriot/material-components-web/commit/9833dc28775a02fa4c7c490ae5df1ed198bbb398))
* **data-table:** Added styles for table in loading state ([35a32aa](https://github.com/stackriot/material-components-web/commit/35a32aaeac17e290e2e9f9a1310c5a44a08f624a))
* **data-table:** Added styles to support column sorting. ([17b9699](https://github.com/stackriot/material-components-web/commit/17b9699c4454a107043e5a1f9874a091089dd112))
* **data-table:** Added styles to support rows per page select menu in pagination ([3ee488f](https://github.com/stackriot/material-components-web/commit/3ee488f1c0f65972459f2dbc74b6c3365786df4b))
* **data-table:** Added support for column sorting feature in data table ([06ef147](https://github.com/stackriot/material-components-web/commit/06ef147b593d134fcd03f48fc3581d8fd6068865))
* **data-table:** Added support for row header cell and other a11y improvements. ([27533c1](https://github.com/stackriot/material-components-web/commit/27533c19e9c72c5a27a33aaa764c1b6a05175cf5))
* **data-table:** Added support for sticky header row in data table ([599b8c3](https://github.com/stackriot/material-components-web/commit/599b8c3191a888e3debd94ad4934f741c5fb6e23))
* **data-table:** Foundation changes to support column sorting ([6ee0355](https://github.com/stackriot/material-components-web/commit/6ee03557260d0a23296e36cba5aaa76fe0cf96a6))
* **data-table:** Make rows per page wrap in new line when overflows ([09abc92](https://github.com/stackriot/material-components-web/commit/09abc92198d1628c57eee5e75c58da52b223c322))
* **data-table:** Set progress indicator styles based on table body height ([c026422](https://github.com/stackriot/material-components-web/commit/c0264227393df8eb9259a2b24c23b31fe0ca84f3))
* **demos:** Add global `demoReady()` function ([#1919](https://github.com/stackriot/material-components-web/issues/1919)) ([da34cc9](https://github.com/stackriot/material-components-web/commit/da34cc9a27ca72ebf8157f676fe645c8ff21ff09)), closes [#1920](https://github.com/stackriot/material-components-web/issues/1920)
* **demos:** Add theme switcher to theme demo page ([#1975](https://github.com/stackriot/material-components-web/issues/1975)) ([4f89819](https://github.com/stackriot/material-components-web/commit/4f8981901f123ab405899633e358cc4188bb2d97)), closes [#1916](https://github.com/stackriot/material-components-web/issues/1916)
* **density:** Add density subsystem to components ([#5059](https://github.com/stackriot/material-components-web/issues/5059)) ([73a5e4c](https://github.com/stackriot/material-components-web/commit/73a5e4cfb01f73922501241f9f24ac9c2d059547))
* **dialog:** Add Adapter#getInitialFocusEl. ([#4719](https://github.com/stackriot/material-components-web/issues/4719)) ([bea1e76](https://github.com/stackriot/material-components-web/commit/bea1e76fc681b5b357fcddc232e7a06b53698c10))
* **dialog:** Add Adapter#getInitialFocusEl. ([#4719](https://github.com/stackriot/material-components-web/issues/4719)) ([1108307](https://github.com/stackriot/material-components-web/commit/1108307499b3d4e7684ef4f54d9c069ec44d029c))
* **dialog:** add custom property for z-index ([776c186](https://github.com/stackriot/material-components-web/commit/776c1868154e5b99a332f60927b78b32b82fe19f))
* **dialog:** Add dialog mixin for dialogs with increased touch target buttons. ([#5024](https://github.com/stackriot/material-components-web/issues/5024)) ([2ef1ddd](https://github.com/stackriot/material-components-web/commit/2ef1ddd66b11709c7e22c674587e95c888a4842e))
* **dialog:** Add elevation overlay structure ([#5283](https://github.com/stackriot/material-components-web/issues/5283)) ([b8bc4a2](https://github.com/stackriot/material-components-web/commit/b8bc4a26ea70356cc96de8fd3266890048f0a3ab))
* **dialog:** Add feature targeting for styles ([#4524](https://github.com/stackriot/material-components-web/issues/4524)) ([3556a93](https://github.com/stackriot/material-components-web/commit/3556a93e9217d7f9e84dfc480e8c1a8b7d4760b0))
* **dialog:** Add padding mixin ([ad0c0c1](https://github.com/stackriot/material-components-web/commit/ad0c0c1034d0b9257a62d3dd9f5d27aada99f1f7))
* **dialog:** Adding `resize` and `orientationchange` event handlers into `MDCDialogFoundation`. ([1e06534](https://github.com/stackriot/material-components-web/commit/1e06534774df290b9a29210ee3bcf57515da6e43))
* **dialog:** Adding styling for scroll bar dividers, and adding logic to show said dividers only when content is scrolled "behind" the header or footer of the dialog. ([e383944](https://github.com/stackriot/material-components-web/commit/e383944e9792ea1971c7814e0e63e2e00f99a468))
* **dialog:** Adds and defines styling for the "header bar" on a full-screen dialog. ([089de51](https://github.com/stackriot/material-components-web/commit/089de519c1c2f0378b9852dafd3ca5a304268a44))
* **dialog:** Adds support for "surface-scrim" over full-screen dialogs. This prevents a "double scrim" from appearing when showing a secondary dialog over a full-screen dialog on larger screens. ([cddb035](https://github.com/stackriot/material-components-web/commit/cddb0355362acb031da308f98283f9d4ad9a2c84))
* **dialog:** Initial prototype ([#3413](https://github.com/stackriot/material-components-web/issues/3413)) ([9d133b2](https://github.com/stackriot/material-components-web/commit/9d133b2f3963bd8e4d8620025cd22df59976be06))
* **dialog:** Integrate with MDC List; add keyboard action handling ([#3594](https://github.com/stackriot/material-components-web/issues/3594)) ([7b6d86b](https://github.com/stackriot/material-components-web/commit/7b6d86bf77eeecd41e19e1181bd62e93e8c98538))
* **dialog:** remove dark theme ([#2079](https://github.com/stackriot/material-components-web/issues/2079)) ([3af1221](https://github.com/stackriot/material-components-web/commit/3af1221c43ac3186ad38b214b1a37539686ebe77))
* **dialog:** removing call to `#close` within `#destroy`. ([5631828](https://github.com/stackriot/material-components-web/commit/5631828e1541df22feb879a5310e57494ee722a3))
* **dialog:** Reverse buttons when stacked; allow toggling auto-stack ([#3573](https://github.com/stackriot/material-components-web/issues/3573)) ([2e7805b](https://github.com/stackriot/material-components-web/commit/2e7805bd7e876f7d85e6c909919d4961368bc0bf))
* **dialog:** Support default action button ([#3600](https://github.com/stackriot/material-components-web/issues/3600)) ([3aa18e2](https://github.com/stackriot/material-components-web/commit/3aa18e2619fe53f71f0453fd6ffb806587036df5))
* **dialog:** Support reporting action in ancestor element ([#3572](https://github.com/stackriot/material-components-web/issues/3572)) ([fcbef20](https://github.com/stackriot/material-components-web/commit/fcbef207866adfcdd8b5e45680573a43ec0f74ad))
* **dom:** Add closest ponyfill ([#3559](https://github.com/stackriot/material-components-web/issues/3559)) ([eddf66c](https://github.com/stackriot/material-components-web/commit/eddf66c9c03ac46d1a55236fb936f6b3eee9d7a9))
* **dom:** Add focus trap utility. ([#5505](https://github.com/stackriot/material-components-web/issues/5505)) ([63f357d](https://github.com/stackriot/material-components-web/commit/63f357dbf5c7e84c3961aafc09e0fb4f4a9c3cda))
* **dom:** add forced-colors-mode mixin ([8416fb9](https://github.com/stackriot/material-components-web/commit/8416fb9195afcba61494bae1206dd1503dffb140))
* **dom:** Add keyboard support ([5f24faa](https://github.com/stackriot/material-components-web/commit/5f24faacb1ef8996ae81f3a1c1e43910ba67b024))
* **dom:** add option to skip restoring focus on release focus ([5c0ab74](https://github.com/stackriot/material-components-web/commit/5c0ab74019c6a1925ee8ef7946d8df6d9494bf88))
* **dom:** add tab key keyboard.ts ([dc9c840](https://github.com/stackriot/material-components-web/commit/dc9c8402374f46402c73f97e60206517e3186389))
* **dom:** Create `mdc-dom` package with `Element.matches()` ponyfill ([#3515](https://github.com/stackriot/material-components-web/issues/3515)) ([91d8fe8](https://github.com/stackriot/material-components-web/commit/91d8fe8a5da3e8b62fc6712037367d6f9ce575e2)), closes [#3413](https://github.com/stackriot/material-components-web/issues/3413) [#1104](https://github.com/stackriot/material-components-web/issues/1104)
* **dom:** Create announcer utility ([32c1df1](https://github.com/stackriot/material-components-web/commit/32c1df133f07679b44ce34ed9d11e22035f8d3d9))
* **drawer:** add feature targeting for styles ([#4877](https://github.com/stackriot/material-components-web/issues/4877)) ([4d65d29](https://github.com/stackriot/material-components-web/commit/4d65d29704dc627c39675ff2086eb4717149302a))
* **drawer:** allow custom properties in width() ([39e6f71](https://github.com/stackriot/material-components-web/commit/39e6f71e2e03b75512242d7520678c32c5af2b70))
* **drawer:** Allow customizing drawer width ([#3459](https://github.com/stackriot/material-components-web/issues/3459)) ([247f75f](https://github.com/stackriot/material-components-web/commit/247f75f3724ef1806efba0a1d5e94634743a3fa8))
* **drawer:** custom sass mixins for color, background, scrim ([#1730](https://github.com/stackriot/material-components-web/issues/1730)) ([921a41f](https://github.com/stackriot/material-components-web/commit/921a41f1e0d0980d1f6f4a046e5b88c4ad100bbe))
* **drawer:** expose --mdc-theme-surface custom prop ([319bf66](https://github.com/stackriot/material-components-web/commit/319bf66dead88f67dba64f9d50a6f3f0d82aad72)), closes [#6466](https://github.com/stackriot/material-components-web/issues/6466)
* **drawer:** Improved navigation drawer  ([#3417](https://github.com/stackriot/material-components-web/issues/3417)) ([3aa211d](https://github.com/stackriot/material-components-web/commit/3aa211d53f7cec023225dcabcb818e87b7c19a79))
* **drawer:** Make list instance publicly accessible ([#4516](https://github.com/stackriot/material-components-web/issues/4516)) ([f46941c](https://github.com/stackriot/material-components-web/commit/f46941ca78095ae4e13ad996112186cf8eea8722))
* **drawer:** New sass mixin to set z-index ([#3453](https://github.com/stackriot/material-components-web/issues/3453)) ([cf3084f](https://github.com/stackriot/material-components-web/commit/cf3084f11e86bae82b1611a5376a5e93910d6f72))
* **drawer:** Remove obsolete pre-states styles; update demo pages ([#1738](https://github.com/stackriot/material-components-web/issues/1738)) ([7c68674](https://github.com/stackriot/material-components-web/commit/7c6867472a8a76c2da8bcf2423c2a2dfda04bdc0))
* **elevation:** add custom props for overlay ([4c354a3](https://github.com/stackriot/material-components-web/commit/4c354a36d012e5d241f27380db1d0d9e70769c27))
* **elevation:** Add elevation overlay mixins ([#5249](https://github.com/stackriot/material-components-web/issues/5249)) ([b4cfdc4](https://github.com/stackriot/material-components-web/commit/b4cfdc40b7c4a3d3fc48df2b68b7091552c27610))
* **elevation:** Create elevation resolver mixin ([5dfec7a](https://github.com/stackriot/material-components-web/commit/5dfec7a1445efb45a7fb4d96ce037cafab205f30))
* **elevation:** Create resolver function ([c18b592](https://github.com/stackriot/material-components-web/commit/c18b5925be3041e774b19f5f6f53f7d3a45d2240))
* **elevation:** Remove transition mixin; use transition-value function ([#1871](https://github.com/stackriot/material-components-web/issues/1871)) ([1ebad2c](https://github.com/stackriot/material-components-web/commit/1ebad2cbc2b335786ee54f7e49967ab07c676aca))
* **elevation:** Simplify box-shadow custom property support ([de48eff](https://github.com/stackriot/material-components-web/commit/de48eff0d803b4e6c93834904e486cfea47bb03a))
* **elevation:** Support custom properties in resolver ([07a7375](https://github.com/stackriot/material-components-web/commit/07a73750c0ebc1d05e19681c6f072cd5cceddfb6))
* **elevation:** Update elevation mixins ([#5304](https://github.com/stackriot/material-components-web/issues/5304)) ([ba879b6](https://github.com/stackriot/material-components-web/commit/ba879b68bde09d713faa5cd77aea9d2bd2759e33))
* **elevation:** Update mixin to accept custom theme color ([#1449](https://github.com/stackriot/material-components-web/issues/1449)) ([e02b4c9](https://github.com/stackriot/material-components-web/commit/e02b4c9fa2bd026c695f3a71efce58d01f460269)), closes [#1534](https://github.com/stackriot/material-components-web/issues/1534)
* **fab:** Add elevation overlay structure ([#5278](https://github.com/stackriot/material-components-web/issues/5278)) ([e89750d](https://github.com/stackriot/material-components-web/commit/e89750dc78ea521561a03e020f4414479de5a5b9))
* **fab:** Add Extended FAB ([14cb0bf](https://github.com/stackriot/material-components-web/commit/14cb0bf562790c0f29b6ad8120be5ad3e6576d4c))
* **fab:** Add feature targeting for styles ([#4526](https://github.com/stackriot/material-components-web/issues/4526)) ([1ba7bdd](https://github.com/stackriot/material-components-web/commit/1ba7bddd091b5de497651dade7b07d3805648908))
* **fab:** Add focus outline mixins to MDC Fab ([0f60323](https://github.com/stackriot/material-components-web/commit/0f60323a8365901c4ff6fd956161b99d8f413927))
* **fab:** Add focus outline mixins to MDC Fab ([7a9afaf](https://github.com/stackriot/material-components-web/commit/7a9afaf4b503bc0d1d135b8d88edd4a7ed02e52e))
* **fab:** Add mdc-fab-accessible mixin ([#1238](https://github.com/stackriot/material-components-web/issues/1238)) ([4ed8b5e](https://github.com/stackriot/material-components-web/commit/4ed8b5eb61dafa9dcb1cf5a4ccfa4354a6db1351))
* **fab:** Add outline in high-contrast mode ([deda86d](https://github.com/stackriot/material-components-web/commit/deda86d8cc4665b334c4d21c541a4a30244fee72))
* **fab:** Add support for increased touch target to mini FAB. ([#5231](https://github.com/stackriot/material-components-web/issues/5231)) ([0c4d8f3](https://github.com/stackriot/material-components-web/commit/0c4d8f3923f9a089132ed8dca4062b72d3576aca))
* **fab:** Add support for svg icons ([#2504](https://github.com/stackriot/material-components-web/issues/2504)) ([3895376](https://github.com/stackriot/material-components-web/commit/3895376427555308caf08d313304dc88c015e81f))
* **fab:** Add theming API to Extended FABs ([f19c86d](https://github.com/stackriot/material-components-web/commit/f19c86d13447d984b13b0e1d7e9651e498d8de04))
* **fab:** Added `$focus-outline-width` param to extended-padding() FAB mixin ([8ecd7c9](https://github.com/stackriot/material-components-web/commit/8ecd7c9a93c5b885fad9a1e6fd8d17da77c05360))
* **fab:** Added focus outline theme keys to FAB theme mixin ([d6d8d04](https://github.com/stackriot/material-components-web/commit/d6d8d04768f9904488a6814ec47a251a03313627))
* **fab:** Added mixin that auto-generates custom properties for Fab ([8530d35](https://github.com/stackriot/material-components-web/commit/8530d351494fc9a88e8e0dfd5e5d58de81a983d9))
* **fab:** Added mixin to auto-generate custom properties for Fab ([14767a8](https://github.com/stackriot/material-components-web/commit/14767a8db432f8834d74a31e1577c3557a38c6d9))
* **fab:** Added theme mixin to primary FAB variant. ([f19bbc4](https://github.com/stackriot/material-components-web/commit/f19bbc4af6493f642dc4b5b45a2dc0083fa293f0))
* **fab:** border custom prop support & add CPs for padding ([a6b3101](https://github.com/stackriot/material-components-web/commit/a6b3101fb7641daab20db735b70421311534083b))
* **fab:** Enable padding customization ([#2959](https://github.com/stackriot/material-components-web/issues/2959)) ([1f5fd1f](https://github.com/stackriot/material-components-web/commit/1f5fd1f76117ae884113c6e5f8b7a094f5f50c45))
* **fab:** Implement enter/exit transitions ([#1241](https://github.com/stackriot/material-components-web/issues/1241)) ([6d6ba4a](https://github.com/stackriot/material-components-web/commit/6d6ba4a8b0bd09fe46da1919d1761b0416db8701))
* **fab:** Remove disabled styles ([#1198](https://github.com/stackriot/material-components-web/issues/1198)) ([959d332](https://github.com/stackriot/material-components-web/commit/959d3327b1499a0cb816f02c0e33e1018ccdc300))
* **fab:** support css custom props for extended-padding ([01db890](https://github.com/stackriot/material-components-web/commit/01db890532f796ea3e66a9c7d76893bef8689d6f))
* **fab:** Use elevation resolvers ([6e9fc4a](https://github.com/stackriot/material-components-web/commit/6e9fc4a423a4657cc5d718aaf13d360c3bd27709))
* **fab:** Use elevation resolvers in custom property themes ([3f691ec](https://github.com/stackriot/material-components-web/commit/3f691eccf61489d40e49bdf9f149b1591168c828))
* **fab:** Use new mdc-states mixin for fab styles ([#1669](https://github.com/stackriot/material-components-web/issues/1669)) ([9ab48b7](https://github.com/stackriot/material-components-web/commit/9ab48b7a05441b75b504162b3271c70bd2bd9ba7))
* **fab:** Use new ripple mixins; remove unnecessary mixin/variable ([#1473](https://github.com/stackriot/material-components-web/issues/1473)) ([fb798db](https://github.com/stackriot/material-components-web/commit/fb798db6e79ae5b2664cd55ab2e987e077a10cc7))
* **feature-targeting:** Elevation, ripple, theme, typography ([#4383](https://github.com/stackriot/material-components-web/issues/4383)) ([4c2a63c](https://github.com/stackriot/material-components-web/commit/4c2a63cec467e8e72e5704f3e77578873b9f8d00))
* **feature-targeting:** Rename main mixins to end with `-core-styles` ([#4404](https://github.com/stackriot/material-components-web/issues/4404)) ([3102351](https://github.com/stackriot/material-components-web/commit/3102351dc569ad86cb03d9875b9b528aade305f0))
* **fix:** Ensure that secondary controls do not ripple. ([1f636b2](https://github.com/stackriot/material-components-web/commit/1f636b205b9609d19a96bef707ab87a0f8ca4f1a))
* **fix:** Fix divider layout in right-to-left locales. ([f524626](https://github.com/stackriot/material-components-web/commit/f5246264d139124f6abf2cf5e9f8ca98762eb0f7))
* **fix:** Remove old MDC list class names, preparing to release evolution. ([5f0fc44](https://github.com/stackriot/material-components-web/commit/5f0fc444a706626a106c2b36116a56e9dc5b8c79))
* **fix:** Remove the "evolution" prefix from list evolution's class names. ([0cde52f](https://github.com/stackriot/material-components-web/commit/0cde52f5a007f4b7da16afd45f7445d615d5a2f6))
* **fix:** Simplify divider styles to reflect new design guidance. ([f77c508](https://github.com/stackriot/material-components-web/commit/f77c508600d4b0f4ce4a66c63d1064b545149570))
* **floating-label:** add feature targeting for styles ([#5287](https://github.com/stackriot/material-components-web/issues/5287)) ([b240bcc](https://github.com/stackriot/material-components-web/commit/b240bcc1bbb3cfd1f753918ec1553dbe1bb6d007))
* **floating-label:** Add max-width mixin ([#2956](https://github.com/stackriot/material-components-web/issues/2956)) ([66f8bf7](https://github.com/stackriot/material-components-web/commit/66f8bf76cdb17902e7b21dddf83860fdf8d30c1c))
* **floating-label:** add required modifier class ([047e6b3](https://github.com/stackriot/material-components-web/commit/047e6b337899a57290283cb0387f33738853cbc2))
* **form-field:** add feature targeting for styles ([#4521](https://github.com/stackriot/material-components-web/issues/4521)) ([cd04f82](https://github.com/stackriot/material-components-web/commit/cd04f826c2dcad24499b46194b9ad565493a5795))
* **form-field:** Add support for space-between ([e84b9c8](https://github.com/stackriot/material-components-web/commit/e84b9c816d32da6dec058d92fc21dc5ac8fec787)), closes [#5747](https://github.com/stackriot/material-components-web/issues/5747)
* **formfield:** add nowrap class/prop to MDC/MWC ([c4b4bba](https://github.com/stackriot/material-components-web/commit/c4b4bba9659bf15207e79b1f63fcc9946404d9c7))
* **formfield:** Remove trailing underscores from private properties ([2f052d8](https://github.com/stackriot/material-components-web/commit/2f052d82433a852d65785b1054ce4665ad1f6265))
* **grid-list:** Add feature targeting for styles ([#4534](https://github.com/stackriot/material-components-web/issues/4534)) ([a8a6660](https://github.com/stackriot/material-components-web/commit/a8a666093a014f1142f81bd7010e65664ef9921d))
* **icon-button:** Add density mixin to icon button ([#5122](https://github.com/stackriot/material-components-web/issues/5122)) ([37d6458](https://github.com/stackriot/material-components-web/commit/37d64581dbaf73b53c1368ebeaba16727f6c9d86))
* **icon-button:** Add disabled state color mixins ([#5246](https://github.com/stackriot/material-components-web/issues/5246)) ([7161170](https://github.com/stackriot/material-components-web/commit/7161170f2e39b73b69b97dec11ebf94e1d3a10c4))
* **icon-button:** Add feature targeting for styles ([#4536](https://github.com/stackriot/material-components-web/issues/4536)) ([a58f2d2](https://github.com/stackriot/material-components-web/commit/a58f2d2410264b20242bf613875bac669827d407))
* **icon-button:** Add new package ([#2748](https://github.com/stackriot/material-components-web/issues/2748)) ([39a4815](https://github.com/stackriot/material-components-web/commit/39a481597f87e872caf92ef31249279bce665c07))
* **icon-button:** Add SVG support ([#3310](https://github.com/stackriot/material-components-web/issues/3310)) ([25fa51e](https://github.com/stackriot/material-components-web/commit/25fa51ee9041a6e83ac658451c9e826354b4c348))
* **icon-button:** update event handling to new standard ([#3165](https://github.com/stackriot/material-components-web/issues/3165)) ([531867e](https://github.com/stackriot/material-components-web/commit/531867e20da667add271ef19ea9e8ef5efcbfafe))
* **icon-toggle:** Add color theme mixin; remove --primary/--accent modifiers ([#1717](https://github.com/stackriot/material-components-web/issues/1717)) ([efd9d5d](https://github.com/stackriot/material-components-web/commit/efd9d5d4fa18863c3a58a0bb1c83a6eb3d7e2d5f)), closes [#1147](https://github.com/stackriot/material-components-web/issues/1147)
* **icon-toggle:** Add public API for MDCRipple in icon-toggle ([#1396](https://github.com/stackriot/material-components-web/issues/1396)) ([f496581](https://github.com/stackriot/material-components-web/commit/f496581722370d5403458baf5ba43f7099d14426))
* **icon-toggle:** Use new mdc-states mixin for icon-toggle styles ([#1685](https://github.com/stackriot/material-components-web/issues/1685)) ([75eb1bc](https://github.com/stackriot/material-components-web/commit/75eb1bcb7ef488ed0fc137672e46c5b095440e40))
* **icon-toggle:** Use new ripple mixins ([#1474](https://github.com/stackriot/material-components-web/issues/1474)) ([cbc3e1c](https://github.com/stackriot/material-components-web/commit/cbc3e1c014a5097b307290ad5b5d6e6261eb373a))
* **iconbutton:** Add icon button variant which supports toggling aria label. ([f838c6e](https://github.com/stackriot/material-components-web/commit/f838c6e55672268de4e6e3b31b154d4f9050242f))
* **iconbutton:** Add in HCM support to the mdc iconbutton as an opt-in mixin. ([fd61b04](https://github.com/stackriot/material-components-web/commit/fd61b04760d96fcc1c96e43ca8e0663d16f5a995))
* **iconbutton:** Add support for increased touch target to icon button. ([f43af56](https://github.com/stackriot/material-components-web/commit/f43af5633f08e8080daed2e976771448d3effadb))
* **iconbutton:** Remove trailing underscores from private properties ([119e214](https://github.com/stackriot/material-components-web/commit/119e21426d73305fe348798cb7ce88077995fdd0))
* **image-list:** Add base styles and mixins for Standard Image List ([#2367](https://github.com/stackriot/material-components-web/issues/2367)) ([71ea82a](https://github.com/stackriot/material-components-web/commit/71ea82a611e0bfdaf311158c5a696ab61b39fa20))
* **image-list:** Add corner radius mixin ([#2385](https://github.com/stackriot/material-components-web/issues/2385)) ([567deec](https://github.com/stackriot/material-components-web/commit/567deec82a4de40d433d7f2d43bba94239c19b13))
* **image-list:** Add feature targeting for styles ([#4535](https://github.com/stackriot/material-components-web/issues/4535)) ([0bfeabb](https://github.com/stackriot/material-components-web/commit/0bfeabb4cc4c5161be02e3879dc7f551f56c5ce2))
* **image-list:** Add Masonry Image List ([#2381](https://github.com/stackriot/material-components-web/issues/2381)) ([d368fa7](https://github.com/stackriot/material-components-web/commit/d368fa7f6b158bc52336f57a6bbdbc7096393644))
* **infrastructure:** Accept URLs and local file paths in `--mdc-diff-base` CLI arg ([#2747](https://github.com/stackriot/material-components-web/issues/2747)) ([6a1792a](https://github.com/stackriot/material-components-web/commit/6a1792a3d50f221e05dd6234e08ed60e9d04b335))
* **infrastructure:** Add `golden.json` and `npm run screenshot:update-goldens` ([#2664](https://github.com/stackriot/material-components-web/issues/2664)) ([06bdbea](https://github.com/stackriot/material-components-web/commit/06bdbeafe6fe20e91558857239d54b73e4e259d9))
* **infrastructure:** Add build command for static demo assets ([#1589](https://github.com/stackriot/material-components-web/issues/1589)) ([54465d9](https://github.com/stackriot/material-components-web/commit/54465d942393e8e4dc8c0700325e486459bdaeaa))
* **infrastructure:** Add CLI args to filter HTML files and browsers ([#2720](https://github.com/stackriot/material-components-web/issues/2720)) ([bdff18c](https://github.com/stackriot/material-components-web/commit/bdff18cade8d72ffc3dc0cec481a8485878c86eb))
* **infrastructure:** Add env var to emit CSS files directly instead of wrapping them in JS ([#1133](https://github.com/stackriot/material-components-web/issues/1133)) ([5f6f829](https://github.com/stackriot/material-components-web/commit/5f6f829cd2ab2c54a253ee0fa78d542dd25978f5))
* **infrastructure:** Add golden/snapshot links to report page ([#2726](https://github.com/stackriot/material-components-web/issues/2726)) ([d2b2ae7](https://github.com/stackriot/material-components-web/commit/d2b2ae76def3232dc64273248bf8daa7f79741f0))
* **infrastructure:** Add newline at end of js files as part of the transform. ([#2557](https://github.com/stackriot/material-components-web/issues/2557)) ([4fe967d](https://github.com/stackriot/material-components-web/commit/4fe967d8d8873d63145c1f4bc07314a87904a166))
* **infrastructure:** Add screenshot tests for FAB; more robust cropping ([#2722](https://github.com/stackriot/material-components-web/issues/2722)) ([ad8127d](https://github.com/stackriot/material-components-web/commit/ad8127ddfaf9b66604494a9a06dab862ff0e3290)), closes [#abc123](https://github.com/stackriot/material-components-web/issues/abc123)
* **infrastructure:** Auto-crop screenshots & add checkerboard pattern ([#2669](https://github.com/stackriot/material-components-web/issues/2669)) ([e450da9](https://github.com/stackriot/material-components-web/commit/e450da925ad45ac8afe4df8dca0ca7deda582123))
* **infrastructure:** Capture screenshots with CrossBrowserTesting.com ([#2621](https://github.com/stackriot/material-components-web/issues/2621)) ([dee0b60](https://github.com/stackriot/material-components-web/commit/dee0b6088b7e19c7fbbb2a8de74d9546a51fdc28))
* **infrastructure:** Create separate script for rewriting Closure imports. ([#2640](https://github.com/stackriot/material-components-web/issues/2640)) ([de4bb76](https://github.com/stackriot/material-components-web/commit/de4bb76fb7092d2438507e4cb0cce407e95ad901))
* **infrastructure:** Diff screenshot images against `golden.json` ([#2687](https://github.com/stackriot/material-components-web/issues/2687)) ([824263f](https://github.com/stackriot/material-components-web/commit/824263f8469f3af95680c6cc06d72798b8a2b6c6))
* **infrastructure:** different namespacing for default exports ([#2553](https://github.com/stackriot/material-components-web/issues/2553)) ([4ff505e](https://github.com/stackriot/material-components-web/commit/4ff505ec043c352e42126aaa002815038696a0a0))
* **infrastructure:** Display webpack-dev-server build progress ([#1132](https://github.com/stackriot/material-components-web/issues/1132)) ([0754628](https://github.com/stackriot/material-components-web/commit/075462882a89ebd4adc79f393adade0c6edff96b))
* **infrastructure:** Generate diff report and upload it to GCS ([#2723](https://github.com/stackriot/material-components-web/issues/2723)) ([fad7ed3](https://github.com/stackriot/material-components-web/commit/fad7ed3ee0b0a8e93a1210f81a7e5c3a1257a499))
* **infrastructure:** Limit # of parallel screenshot requests to 5 ([#2646](https://github.com/stackriot/material-components-web/issues/2646)) ([36039dd](https://github.com/stackriot/material-components-web/commit/36039ddb1910cd5d073187de8ed85a618d3878c5))
* **infrastructure:** More reliable auto-cropping of screenshot images ([#2719](https://github.com/stackriot/material-components-web/issues/2719)) ([134dbe5](https://github.com/stackriot/material-components-web/commit/134dbe542bf7abeaa4ea38711c84823ab44a2a58)), closes [#333333](https://github.com/stackriot/material-components-web/issues/333333) [#333333](https://github.com/stackriot/material-components-web/issues/333333)
* **infrastructure:** Upload compiled screenshot test assets to GCS ([#2500](https://github.com/stackriot/material-components-web/issues/2500)) ([5ada5b4](https://github.com/stackriot/material-components-web/commit/5ada5b4027f733cde6132a29c28eea008cf16727))
* **infrastructure:** Upload screenshot images to GCS ([#2642](https://github.com/stackriot/material-components-web/issues/2642)) ([0f308d7](https://github.com/stackriot/material-components-web/commit/0f308d7f5fbdfb2880daf65add95a3fadeb85599))
* **line-ripple:** add active/inactive states to line-ripple ([b6c7f62](https://github.com/stackriot/material-components-web/commit/b6c7f624bc7d88e2e371efcb125c7a6bac55eab7))
* **line-ripple:** add feature targeting for styles ([#5292](https://github.com/stackriot/material-components-web/issues/5292)) ([391674a](https://github.com/stackriot/material-components-web/commit/391674a2649800f07e3ac1993a5fce157391fbd9))
* **linear-progress:** Add color theme mixins and remove `--accent` ([#1541](https://github.com/stackriot/material-components-web/issues/1541)) ([31d9d7b](https://github.com/stackriot/material-components-web/commit/31d9d7b06f9d74474f8fdad7cbf4110c72cec601)), closes [#1148](https://github.com/stackriot/material-components-web/issues/1148)
* **linear-progress:** add feature targeting for styles ([#4898](https://github.com/stackriot/material-components-web/issues/4898)) ([7ec18c6](https://github.com/stackriot/material-components-web/commit/7ec18c6c057254abd3bc11923cf82a702a9ee2b9))
* **linear-progress:** Add foundation methods to fetch progress and determinate state. ([4dc45af](https://github.com/stackriot/material-components-web/commit/4dc45af6c4bc81f5734a24c160046d283c1e9a6d))
* **linear-progress:** add getBuffer ([9c85d50](https://github.com/stackriot/material-components-web/commit/9c85d505bddf9c63ef52508c385ec59f1f947b8e))
* **linear-progress:** remove aria-valuemin/max attrs for indeterminate ([4321323](https://github.com/stackriot/material-components-web/commit/4321323e4bea2da8192b81ebdf8c6a9ee1e76aa0))
* **linearprogress:** Remove trailing underscores from private properties ([893eb18](https://github.com/stackriot/material-components-web/commit/893eb1876220e5313f9db37365049b8c2282109c))
* **list:** Add "deprecated" aliases for old list mixins / variables. ([f9cac96](https://github.com/stackriot/material-components-web/commit/f9cac96cc2ad0422d73140a65dcffc5e4e8ec519))
* **list:** Add arrow key a11y support.  ([#2871](https://github.com/stackriot/material-components-web/issues/2871)) ([7c06e9f](https://github.com/stackriot/material-components-web/commit/7c06e9f527f8b9efe38e55d2ce9eb78d9595b6f7))
* **list:** Add color theme mixins & --selected/--activated modifiers ([#1663](https://github.com/stackriot/material-components-web/issues/1663)) ([6ea948f](https://github.com/stackriot/material-components-web/commit/6ea948f266b340f6733e3b005c0e25e93028955c)), closes [#1662](https://github.com/stackriot/material-components-web/issues/1662)
* **list:** Add density mixin to list ([#5069](https://github.com/stackriot/material-components-web/issues/5069)) ([5132f89](https://github.com/stackriot/material-components-web/commit/5132f8997e5766f1cda216093f867f4ba253def0))
* **list:** Add disabled class name to constants ([#4558](https://github.com/stackriot/material-components-web/issues/4558)) ([f2db177](https://github.com/stackriot/material-components-web/commit/f2db1770d3a9a96968b565e13bab6ad376f0324b))
* **list:** add feature targeting for styles ([#4303](https://github.com/stackriot/material-components-web/issues/4303)) ([c994156](https://github.com/stackriot/material-components-web/commit/c9941566b466a0310636527f453812ac067549bc))
* **list:** add focus indicator in hi-contrast mode ([8602f1b](https://github.com/stackriot/material-components-web/commit/8602f1b4da404816513733a21973ec9cbc9acfa3))
* **list:** Add missing "deprecated" aliases for old list mixin. ([302c7a9](https://github.com/stackriot/material-components-web/commit/302c7a960f3b2787f253908d963eaaaa0b8adfd4))
* **list:** Add mixin for disabled text opacity ([#4861](https://github.com/stackriot/material-components-web/issues/4861)) ([d68f8a7](https://github.com/stackriot/material-components-web/commit/d68f8a7a641062ee29d68ae20119e994f4f9e2e8))
* **list:** Add mixin for selected item's text color ([bd8ca96](https://github.com/stackriot/material-components-web/commit/bd8ca96788c9cb793288b6aa5c406b220be0bd9c))
* **list:** Add notifyAction adapter for action on list item. ([#4144](https://github.com/stackriot/material-components-web/issues/4144)) ([6ed35b1](https://github.com/stackriot/material-components-web/commit/6ed35b1203fc07895a9861f9461198653970482e))
* **list:** Add public #getFocusedItemIndex to foundation. Also add a `forceUpdate` option to #setSelectedIndex that forces a UI update of the selected item. ([5d06051](https://github.com/stackriot/material-components-web/commit/5d060518804437aa1ae3152562f1bb78b1af4aa6))
* **list:** Add setEnabled to foundation ([#5049](https://github.com/stackriot/material-components-web/issues/5049)) ([c2b4407](https://github.com/stackriot/material-components-web/commit/c2b4407376a74f7377aab4ffa99ed7267681ae77))
* **list:** Add single selection ([#2970](https://github.com/stackriot/material-components-web/issues/2970)) ([cd1f972](https://github.com/stackriot/material-components-web/commit/cd1f9724f930e452bf29628192b8b6ef475abfd4))
* **list:** Add transparent-border for aria-activedescendant usage ([8388a9b](https://github.com/stackriot/material-components-web/commit/8388a9bf6f4db77656adcdd604125eb205694b10))
* **list:** Automatically use appropriate aria attribute for single selection list. ([#4479](https://github.com/stackriot/material-components-web/issues/4479)) ([077c809](https://github.com/stackriot/material-components-web/commit/077c80970b0cd2919f2f50bca83b44ae21074f70))
* **list:** Basic support for three-line lists. ([4bb5eea](https://github.com/stackriot/material-components-web/commit/4bb5eea2b81268d4dc2f838beccb44dd4ff2857d))
* **list:** Finalize list mixin/variable rename. ([c97d7d8](https://github.com/stackriot/material-components-web/commit/c97d7d88102f96c4c61a1b7c3329f3efac3727f4))
* **list:** Rename deprecated MDC list class names. ([a678806](https://github.com/stackriot/material-components-web/commit/a678806f5618f21a6bd28e3b881f92130b723f6e))
* **list:** Rename deprecated MDC list class names. ([941ca3b](https://github.com/stackriot/material-components-web/commit/941ca3b3c4c53ea296149a983b0159c5567e1b2c))
* **list:** Rename elements to match spec; don't set size of meta ([#1716](https://github.com/stackriot/material-components-web/issues/1716)) ([5dabcdf](https://github.com/stackriot/material-components-web/commit/5dabcdf72606e182d44bdaddd386e47ae2da0d77))
* **list:** support ctrl + a keyboard shortcut ([eefef49](https://github.com/stackriot/material-components-web/commit/eefef49d86c69b1985aa4e5fa5b8809ba1f0a1f4)), closes [#6366](https://github.com/stackriot/material-components-web/issues/6366)
* **list:** Toggle radio checkbox ([#3546](https://github.com/stackriot/material-components-web/issues/3546)) ([f59b6e6](https://github.com/stackriot/material-components-web/commit/f59b6e67abbb0a7b5ec192995764d90d6d98aecd))
* **list:** Update deprecated list class names so evolution can become default. ([606e767](https://github.com/stackriot/material-components-web/commit/606e767ef6d1d98461d8910ece874b65d0143981))
* **list:** Update list to toggle tabindex of radio/checkbox ([#3542](https://github.com/stackriot/material-components-web/issues/3542)) ([13abb24](https://github.com/stackriot/material-components-web/commit/13abb24232b18a54d85c7fde4f0b30a633977e05))
* **list:** Update styles to reference "deprecated" mixins/variables. ([3201cae](https://github.com/stackriot/material-components-web/commit/3201cae479a0dbf97c40dda1b9d32a5818d6ab62))
* **list:** Update styles to remove "evolution" prefix from mixins/variables. ([f9c9e39](https://github.com/stackriot/material-components-web/commit/f9c9e39d6c0cddf796de7e821ec59e199aeab851))
* **list:** Update the MDC component for List Evolution. ([766981c](https://github.com/stackriot/material-components-web/commit/766981c15a200b374a14c2ab80bf746824bf7434))
* **list:** Updated two-line list to use typography baseline to match spec. ([#3085](https://github.com/stackriot/material-components-web/issues/3085)) ([4d11b37](https://github.com/stackriot/material-components-web/commit/4d11b373f31a310f030d423523083427cadc144b))
* **list:** Use new ripple mixins ([#1475](https://github.com/stackriot/material-components-web/issues/1475)) ([0647576](https://github.com/stackriot/material-components-web/commit/0647576dd37d41ff90eb6cb86356b52ac2427bf0))
* **list:** Use states mixins; change padding behavior to support them ([#1737](https://github.com/stackriot/material-components-web/issues/1737)) ([c8772ea](https://github.com/stackriot/material-components-web/commit/c8772ea5f32ef971f4ae049379dc114fa2f0ec84))
* **menu:** Add --selected class to menu items ([#2084](https://github.com/stackriot/material-components-web/issues/2084)) ([04a6ee6](https://github.com/stackriot/material-components-web/commit/04a6ee60b5b4e40db841a08361254276d8c9bfe4))
* **menu:** Add elevation overlay structure ([#5280](https://github.com/stackriot/material-components-web/issues/5280)) ([7fd17ce](https://github.com/stackriot/material-components-web/commit/7fd17ce5ed73c86b987c8a8e4cd08ea444fff8b7))
* **menu:** add feature targeting for styles ([#4278](https://github.com/stackriot/material-components-web/issues/4278)) ([97a8585](https://github.com/stackriot/material-components-web/commit/97a8585331695a63f0df358df281cfc73c5e96f7))
* **menu:** add feature targeting to remaining public mixins ([#4317](https://github.com/stackriot/material-components-web/issues/4317)) ([5928c00](https://github.com/stackriot/material-components-web/commit/5928c00f43b6ce0093174bf53eeed53357844d62))
* **menu:** add maxHeight setter ([bf670da](https://github.com/stackriot/material-components-web/commit/bf670dad7247d7ac1db9bf00905921b5c09a5b4d))
* **menu:** Add mixin to flatten menu top when opened-below anchor ([1e17c49](https://github.com/stackriot/material-components-web/commit/1e17c49b360fd0e01c9a74b92978031534003b5b))
* **menu:** Add new anchor positioning functionality ([#1691](https://github.com/stackriot/material-components-web/issues/1691)) ([da56619](https://github.com/stackriot/material-components-web/commit/da566191fa1329c0e729f67c51d63e86abfb8536)), closes [#1688](https://github.com/stackriot/material-components-web/issues/1688)
* **menu:** Add public #getSelectedIndex to foundation. ([f705e80](https://github.com/stackriot/material-components-web/commit/f705e8048ae60aceead575dfc35c8bb6233e9d23))
* **menu:** Add quickOpen option.  ([#2127](https://github.com/stackriot/material-components-web/issues/2127)) ([e571a53](https://github.com/stackriot/material-components-web/commit/e571a53121c9d4e62e80f0e6f746c22adf415325))
* **menu:** add setEnabled to allow dynamic enabling or disabling menu item ([#5054](https://github.com/stackriot/material-components-web/issues/5054)) ([4751d64](https://github.com/stackriot/material-components-web/commit/4751d64f122b5de91b59847e29f614c5566a9785))
* **menu:** add setSelectedIndex to set selected item in menu selection group ([#4620](https://github.com/stackriot/material-components-web/issues/4620)) ([3a280c6](https://github.com/stackriot/material-components-web/commit/3a280c60d3c4c1984b50e8d447d35af39831162f))
* **menu:** add setSelectedIndex to set selected item in menu selection group ([#4620](https://github.com/stackriot/material-components-web/issues/4620)) ([b1e0888](https://github.com/stackriot/material-components-web/commit/b1e08887c6f2fb1cef0d173d4868634ddcbce66a))
* **menu:** Added new API to manually set focus when menu is opened ([#4468](https://github.com/stackriot/material-components-web/issues/4468)) ([42ae5c3](https://github.com/stackriot/material-components-web/commit/42ae5c3295220c4b94d64ddfe92a2db27254b650))
* **menu:** Adds new menu, menu-surface. ([#3311](https://github.com/stackriot/material-components-web/issues/3311)) ([6439c5b](https://github.com/stackriot/material-components-web/commit/6439c5bfc2222e079677f8719576db3fde4e9b97))
* **menu:** Expose handleSelection API to public ([#3950](https://github.com/stackriot/material-components-web/issues/3950)) ([7f02a64](https://github.com/stackriot/material-components-web/commit/7f02a64fe23cd31aae76f58b373aa31ba8caca63))
* **menu:** Fix menu to only fire one event per interaction ([02fe795](https://github.com/stackriot/material-components-web/commit/02fe795139ed2fb3077008feaa52aaa928d014f5))
* **menu:** Focus management features & accessibility improvements ([#4587](https://github.com/stackriot/material-components-web/issues/4587)) ([8d91b93](https://github.com/stackriot/material-components-web/commit/8d91b93b6622c279fd085f1a2dd53cf75542c03e))
* **menu:** Remove obsolete pre-states styles; fix dark-mode selector ([#1739](https://github.com/stackriot/material-components-web/issues/1739)) ([f82998a](https://github.com/stackriot/material-components-web/commit/f82998a337dfa7d24a46fc13e478c403bbf7eaec))
* **menu-surface:** add feature targeting for styles ([#4279](https://github.com/stackriot/material-components-web/issues/4279)) ([56b8467](https://github.com/stackriot/material-components-web/commit/56b846787c5afa8ac9e1ddda6e54eb2a8479665e))
* **menu-surface:** add option to always horizontally center on viewport ([23ea2d8](https://github.com/stackriot/material-components-web/commit/23ea2d85e760325371c2529af7c99316d876c044))
* **menu-surface:** Add support for flipping menu corner horizontally. ([7b44824](https://github.com/stackriot/material-components-web/commit/7b448240263b45c6b474c2f758cd1c02f3c708ad))
* **menu-surface:** Add transition to height for menu resizing animation. ([1e7cb61](https://github.com/stackriot/material-components-web/commit/1e7cb61989c95f9b86de3b1f6edb1773c12dfc97))
* **menu-surface:** Update setPosition adapter API to use numeric values ([#4351](https://github.com/stackriot/material-components-web/issues/4351)) ([701ed5c](https://github.com/stackriot/material-components-web/commit/701ed5cf40e2df22ec321c6e94c4e72f6d2e033d)), closes [#4273](https://github.com/stackriot/material-components-web/issues/4273)
* **menu,select:** enable fixed menu position in mwc-select ([b9adb7a](https://github.com/stackriot/material-components-web/commit/b9adb7a0f6d2871bcd87664ab857fb62392c27d4)), closes [#2062](https://github.com/stackriot/material-components-web/issues/2062)
* **notched-outline:** add feature targeting for styles ([#5289](https://github.com/stackriot/material-components-web/issues/5289)) ([c483774](https://github.com/stackriot/material-components-web/commit/c4837746ccebf375daa4c5dd891fea533bb134f7))
* **progress-indicator:** Add common interface for progress indicators ([#5564](https://github.com/stackriot/material-components-web/issues/5564)) ([ea863cb](https://github.com/stackriot/material-components-web/commit/ea863cb918b9c096e36a7bc653d6661757e71b64))
* **radio:** Add density mixin to radio ([#5118](https://github.com/stackriot/material-components-web/issues/5118)) ([199534d](https://github.com/stackriot/material-components-web/commit/199534d61bcce7064d2762d0f2d837a8c1e3639b))
* **radio:** Add disabled state color mixins ([#5168](https://github.com/stackriot/material-components-web/issues/5168)) ([b5c6d66](https://github.com/stackriot/material-components-web/commit/b5c6d66b40765c4eacf079e91230506339c1346b))
* **radio:** add feature targeting for styles ([#4270](https://github.com/stackriot/material-components-web/issues/4270)) ([eb8b8f6](https://github.com/stackriot/material-components-web/commit/eb8b8f6aeb8e846f0af27c4ea56641966e61b99d))
* **radio:** add feature targeting to remaining public mixins ([#4318](https://github.com/stackriot/material-components-web/issues/4318)) ([9f8ee9e](https://github.com/stackriot/material-components-web/commit/9f8ee9e90d13f753752b417774cc8e68c82a9d92))
* **radio:** Add support for 48px touch target ([#5032](https://github.com/stackriot/material-components-web/issues/5032)) ([87b0a4c](https://github.com/stackriot/material-components-web/commit/87b0a4c35e6162857f89026027c18f0c1b2697bf))
* **radio:** Add theme color mixins and update default color to secondary ([#1410](https://github.com/stackriot/material-components-web/issues/1410)) ([da9d48f](https://github.com/stackriot/material-components-web/commit/da9d48fafb88bdd95e433db884bcbdb41bd3a342)), closes [#1149](https://github.com/stackriot/material-components-web/issues/1149)
* **radio:** Added theme mixin that declares custom properties in MDC radio ([b87ebf7](https://github.com/stackriot/material-components-web/commit/b87ebf74d4ca7de26552a9e55d79280a83ca05a9))
* **radio:** Added theme styles mixin to MDC radio ([464a002](https://github.com/stackriot/material-components-web/commit/464a00286cbccfa256beb879631690277776486f))
* **radio:** Added theme styles mixin to Radio ([5823407](https://github.com/stackriot/material-components-web/commit/5823407a71dc51fdf9919f3a85f62fcf125ec27b))
* **radio:** Move ripple to child element ([#4983](https://github.com/stackriot/material-components-web/issues/4983)) ([100ab37](https://github.com/stackriot/material-components-web/commit/100ab37d8619b7d976658c6085e653f7e1932bb4))
* **radio:** Use new mdc-states mixin for radio styles ([#1673](https://github.com/stackriot/material-components-web/issues/1673)) ([5065576](https://github.com/stackriot/material-components-web/commit/50655762a99bd2bd5c74895768d195525206a4fd))
* **radio:** Use new ripple mixins, and remove unnecessary mixin ([#1476](https://github.com/stackriot/material-components-web/issues/1476)) ([94a826d](https://github.com/stackriot/material-components-web/commit/94a826db49a53908bd8a05ff33484f14729c8c60))
* **ripple:** add active() mixin for styling active styles. ([9f2e85f](https://github.com/stackriot/material-components-web/commit/9f2e85fb8453cab94f54eeb9e2d9e18600ed7fa0))
* **ripple:** Add new simpler mixins and remove unused CSS vars ([#1452](https://github.com/stackriot/material-components-web/issues/1452)) ([a983c01](https://github.com/stackriot/material-components-web/commit/a983c01676e7b2a9b4aa743f722588ecb2019e4f))
* **ripple:** Add new states mixins ([#1624](https://github.com/stackriot/material-components-web/issues/1624)) ([9356449](https://github.com/stackriot/material-components-web/commit/935644939d09fafe051ceb48581b959c46c53829))
* **ripple:** Add optional event parameters to activate/deactivate methods ([891e962](https://github.com/stackriot/material-components-web/commit/891e9625205d66c0973d3d7af18c219301a2ef71))
* **ripple:** Add setUnbounded to foundation ([#1826](https://github.com/stackriot/material-components-web/issues/1826)) ([a9e4868](https://github.com/stackriot/material-components-web/commit/a9e48682bf28f7ccfde9fdf79a97a2ecef8affbc))
* **ripple:** Add support for activated and selected states ([#1696](https://github.com/stackriot/material-components-web/issues/1696)) ([6f7008c](https://github.com/stackriot/material-components-web/commit/6f7008cf2b4c6dd7cf0460ac0a810b2793babb7e))
* **ripple:** Add support for ripple target to mixins. ([#4880](https://github.com/stackriot/material-components-web/issues/4880)) ([08dbe69](https://github.com/stackriot/material-components-web/commit/08dbe69656604b4fa3afacc677a17d1fa9c4d743))
* **ripple:** Add will-change opt-out param ([e590b37](https://github.com/stackriot/material-components-web/commit/e590b376bf20bde50e6f6b62339c0bac2703ccf0))
* **ripple:** Added theme styles and theme mixin to Ripple ([a2b0f4c](https://github.com/stackriot/material-components-web/commit/a2b0f4cee3278c71d3ee2905f60dd37af6ee507c))
* **ripple:** Call layout on each activation ([#2567](https://github.com/stackriot/material-components-web/issues/2567)) ([c6076e1](https://github.com/stackriot/material-components-web/commit/c6076e1d7b16e11a06fbdb14663a0a07b5565fe9))
* **ripple:** Expose mdc-states-opacity; fix press fallback ([#2402](https://github.com/stackriot/material-components-web/issues/2402)) ([2dfaec6](https://github.com/stackriot/material-components-web/commit/2dfaec6eb5cf474156eed6866823d84f40fa9052))
* **ripple:** Reduce press opacity by 25% ([#4350](https://github.com/stackriot/material-components-web/issues/4350)) ([f5d2170](https://github.com/stackriot/material-components-web/commit/f5d217055a8dbcb2899daeb60fa29593b97178ec))
* **ripple:** Remove old complex mixins ([#1496](https://github.com/stackriot/material-components-web/issues/1496)) ([47c6859](https://github.com/stackriot/material-components-web/commit/47c6859ab444d6b01b2b9f721e99648f6467cc0f))
* **ripple:** Remove old mixin and obsolete JS logic ([#1784](https://github.com/stackriot/material-components-web/issues/1784)) ([617c61d](https://github.com/stackriot/material-components-web/commit/617c61d5dfcd59a7811b3dddfdb5ba5af525857e))
* **ripple:** Reorganize ripple opacities ([008c4d3](https://github.com/stackriot/material-components-web/commit/008c4d3191f9c2a76732688504d2299420734cdd))
* **ripple:** Split radius mixin into bounded/unbounded versions ([#2112](https://github.com/stackriot/material-components-web/issues/2112)) ([1f3871c](https://github.com/stackriot/material-components-web/commit/1f3871cd3435d9a2605dd30184393316476d5dbb))
* **rtl:** Added a flag to turn-off mdc-rtl CSS ([#4996](https://github.com/stackriot/material-components-web/issues/4996)) ([eb87f06](https://github.com/stackriot/material-components-web/commit/eb87f0667523d650dbee72a1f84b19eed03c0f5a))
* **rtl:** allow values to be theme keys and custom props ([afb1c11](https://github.com/stackriot/material-components-web/commit/afb1c11a9e9048ba7c2ed30e32e892ae483dfccc))
* **rtl:** Make mdc-rtl-reflexive sass mixin public ([#2823](https://github.com/stackriot/material-components-web/issues/2823)) ([ca018a7](https://github.com/stackriot/material-components-web/commit/ca018a797eae2ca6b4eb5a70a95c97c10e71e83b))
* **segmented-button:** add adapters and foundations ([#6165](https://github.com/stackriot/material-components-web/issues/6165)) ([6ed717d](https://github.com/stackriot/material-components-web/commit/6ed717dddf5f62dd5bfc621388ae07471775612f))
* **segmented-button:** Add component outlines ([#6222](https://github.com/stackriot/material-components-web/issues/6222)) ([a0f1202](https://github.com/stackriot/material-components-web/commit/a0f1202dc5cd67207877167558742d0b18bf0e32))
* **segmented-button:** Add initial Sass styles ([#6141](https://github.com/stackriot/material-components-web/issues/6141)) ([7555383](https://github.com/stackriot/material-components-web/commit/75553837cce5cb9d52d5561f5729d110e71af401))
* **segmented-button:** Add MDC segmented button into material-components-web ([596e984](https://github.com/stackriot/material-components-web/commit/596e984242fdef685dae49e2c84305e55c9ea724))
* **segmented-button:** Add new package for segmented button ([#6073](https://github.com/stackriot/material-components-web/issues/6073)) ([d561860](https://github.com/stackriot/material-components-web/commit/d5618602a8ef45a1fdf753c3598afc5e1cadc95b))
* **segmented-button:** Add ripple and touch-target support ([#6277](https://github.com/stackriot/material-components-web/issues/6277)) ([e3b7462](https://github.com/stackriot/material-components-web/commit/e3b746208db04f3922fabba77986f9f02f422d75))
* **segmented-button:** Add select validations for singleSelect ([#6381](https://github.com/stackriot/material-components-web/issues/6381)) ([2e8c3dd](https://github.com/stackriot/material-components-web/commit/2e8c3dd2e0622957a373286f14720de36afb5ba4))
* **segmented-button:** Added foundation business logic ([#6198](https://github.com/stackriot/material-components-web/issues/6198)) ([e6e2301](https://github.com/stackriot/material-components-web/commit/e6e23019d567802c13d0bd6559a35291c48abc91))
* **segmented-button:** Implement components ([#6223](https://github.com/stackriot/material-components-web/issues/6223)) ([ac405ea](https://github.com/stackriot/material-components-web/commit/ac405eae1b80f719a80dc4fec663b763e73cdf5d))
* **select:** Add #getUseDefaultValidation method to foundation. ([adeac05](https://github.com/stackriot/material-components-web/commit/adeac0549eb04c5d4cd050d2e52378f7edbfa37e))
* **select:** Add enhanced select variant ([#3949](https://github.com/stackriot/material-components-web/issues/3949)) ([35697a5](https://github.com/stackriot/material-components-web/commit/35697a579f51a9a76f6638b2faf414be311c1d88))
* **select:** Add menu invalid class ([4ba3c9a](https://github.com/stackriot/material-components-web/commit/4ba3c9a319dad4101f4d24607a79c01390330acd))
* **select:** Add mixin for min-width ([09f5919](https://github.com/stackriot/material-components-web/commit/09f591967a42e4dc27c0f7022d9ae71e94c07c3d))
* **select:** add mixin for variable width ([30c11bf](https://github.com/stackriot/material-components-web/commit/30c11bfc24e426c0647645758e4f9d98f589e85c))
* **select:** Add new UX styles and behavior to select ([99878c1](https://github.com/stackriot/material-components-web/commit/99878c1196498c64001dfe9f460bd1d7586906aa))
* **select:** Add non box version  ([#2149](https://github.com/stackriot/material-components-web/issues/2149)) ([d2e53e8](https://github.com/stackriot/material-components-web/commit/d2e53e81f6795f1955b236d2d75c4f49073e3ec6))
* **select:** Add openMenu foundation method ([9b0b5f2](https://github.com/stackriot/material-components-web/commit/9b0b5f2e034a7f8ab0e68e3afbd7c246447f53e7))
* **select:** Add outlined variant ([#2674](https://github.com/stackriot/material-components-web/issues/2674)) ([4863125](https://github.com/stackriot/material-components-web/commit/48631259955b282e43a9e7d3e42e3ab18018eb77))
* **select:** Add styles for high-contrast mode in IE ([05cc5c2](https://github.com/stackriot/material-components-web/commit/05cc5c20651eed3e40960074db919f0d030c46fb))
* **select:** allow programmatic change without firing event ([79ce087](https://github.com/stackriot/material-components-web/commit/79ce0878b3233592c3188548711b311e5706d3dd)), closes [#6166](https://github.com/stackriot/material-components-web/issues/6166)
* **select:** Auto-align width of menu to select by default ([1b3dd84](https://github.com/stackriot/material-components-web/commit/1b3dd846db4da7dcb1baaf2003e35e462cb799b7))
* **select:** Change root to inline-block & add fullwidth flag ([2673adb](https://github.com/stackriot/material-components-web/commit/2673adb74397d55c9dcd8e5fd86b3efc87a13a28))
* **select:** changing density also also changes menu's list density ([68a2af1](https://github.com/stackriot/material-components-web/commit/68a2af131b82e9b50e70754a2d653d6305dac4b9))
* **select:** Create additional state mixins ([744d751](https://github.com/stackriot/material-components-web/commit/744d751a0c0f154d5d0d05def88203b68c3a26a5))
* **select:** extend typeahead to work when menu closed but select focused ([a0dc2b5](https://github.com/stackriot/material-components-web/commit/a0dc2b5c4afbf3fd8274c752d43aeeeb11231e5f))
* **select:** flatten menu top when opened below ([912d902](https://github.com/stackriot/material-components-web/commit/912d9021dab7712e0ab711fcaffb3933a960c171))
* **select:** gracefully display long labels ([21c4e4e](https://github.com/stackriot/material-components-web/commit/21c4e4ed866944c090ae3d6dffe9f5e4725b7ffc))
* **select:** Implement density ([610c68d](https://github.com/stackriot/material-components-web/commit/610c68d97646f523eaff0bb26c08baa5903e9211))
* **select:** introduce custom validity ([fd8f8f2](https://github.com/stackriot/material-components-web/commit/fd8f8f2b77b0a17e25f78b5a510b7afe4bbd230b))
* **select:** lower dropdown icon size and list leading padding when dense ([32aa236](https://github.com/stackriot/material-components-web/commit/32aa23641258671e0eac803c0f41ae78ecce32fd))
* **select:** make selected text more flexible ([2b420c5](https://github.com/stackriot/material-components-web/commit/2b420c5b318b7ada726dec774d9e09624bca9822))
* **select:** Move colors for default select to mixins ([#1934](https://github.com/stackriot/material-components-web/issues/1934)) ([d6c68ce](https://github.com/stackriot/material-components-web/commit/d6c68ce18737c6753adda7b008e0f8ca78bd3499)), closes [#1150](https://github.com/stackriot/material-components-web/issues/1150)
* **select:** Move focus handling to surface element for focus shade ([#1803](https://github.com/stackriot/material-components-web/issues/1803)) ([255b63e](https://github.com/stackriot/material-components-web/commit/255b63e8b436171820e2e3f62ba9e0a96c287e4b))
* **select:** move selectedText into its own text node ([0bc41a9](https://github.com/stackriot/material-components-web/commit/0bc41a9c75392352e8a31eb9d46f1a1457ffe732))
* **select:** Remove css version ([#2116](https://github.com/stackriot/material-components-web/issues/2116)) ([f44721c](https://github.com/stackriot/material-components-web/commit/f44721c58681c4eb2878a0417fccfee5841585b7))
* **select:** removed dark theme ([#2098](https://github.com/stackriot/material-components-web/issues/2098)) ([c928bce](https://github.com/stackriot/material-components-web/commit/c928bceba5d0117c1a04f313f12a0d15675f4910))
* **select:** Replace hardcoded leading margins for options with dummy graphic ([7461aad](https://github.com/stackriot/material-components-web/commit/7461aad68924d0f3bb790987b01f802078ebc7df))
* **select:** support hidden input ([fda053e](https://github.com/stackriot/material-components-web/commit/fda053eb848395ebfa9266e4535013e1a3be8486)), closes [#5428](https://github.com/stackriot/material-components-web/issues/5428)
* **select:** Support typeahead ([b0fdca4](https://github.com/stackriot/material-components-web/commit/b0fdca4921afd58de567bd53b29c9b6e44dac5c1)), closes [#5705](https://github.com/stackriot/material-components-web/issues/5705)
* **select:** truncate with ellipses by default ([83d83f1](https://github.com/stackriot/material-components-web/commit/83d83f131118073943a6a45923b37b3a961bd894))
* **select:** Update behavior on upArrow/downArrow ([d92d8c9](https://github.com/stackriot/material-components-web/commit/d92d8c93ee6d9c030e6d373ac2b8670ac56417ad))
* **select:** Update helper-text interactions ([142b154](https://github.com/stackriot/material-components-web/commit/142b1549ee0cf40b1f1531e79e53fe5e826f254d)), closes [#5463](https://github.com/stackriot/material-components-web/issues/5463)
* **select:** use floating label's required class ([d86ad3b](https://github.com/stackriot/material-components-web/commit/d86ad3b6081234359ff19547649f9d391ea8aa9e))
* **select:** Use new mdc-states mixin for select styles ([#1704](https://github.com/stackriot/material-components-web/issues/1704)) ([3043a54](https://github.com/stackriot/material-components-web/commit/3043a546d5161c006024f8bebaf9ab5398484c26))
* **shape:** add feature targeting to public mixins ([#4384](https://github.com/stackriot/material-components-web/issues/4384)) ([e0860dd](https://github.com/stackriot/material-components-web/commit/e0860dd15223cc3282ffad542553edfefdc367b2))
* **shape:** Add MDC Shape with support for unelevated angled corners ([#2506](https://github.com/stackriot/material-components-web/issues/2506)) ([dc87f18](https://github.com/stackriot/material-components-web/commit/dc87f1802b50fadc39b02fe2b39b4e3052e78098))
* **shape:** add shape custom properties ([0743288](https://github.com/stackriot/material-components-web/commit/0743288fb04dc8578f0b850d31fad6c00c97ea1c))
* **shape:** add shape map theme value support ([ec31ae1](https://github.com/stackriot/material-components-web/commit/ec31ae1ed1e6483d972f0eddece0fbf30ac721c2))
* **shape:** Added Shape subsystem and integrated with all components ([#3626](https://github.com/stackriot/material-components-web/issues/3626)) ([d5f0897](https://github.com/stackriot/material-components-web/commit/d5f08976738aaeffe577a508ae652d3b1a302ee3))
* **slider:** Add color theme mixins; default to secondary; remove `--off` ([#1544](https://github.com/stackriot/material-components-web/issues/1544)) ([28024e9](https://github.com/stackriot/material-components-web/commit/28024e9eb7b233fb0a3a1142afb567141fecfe7d)), closes [#1151](https://github.com/stackriot/material-components-web/issues/1151)
* **slider:** add feature targeting for styles ([#4871](https://github.com/stackriot/material-components-web/issues/4871)) ([3ee2675](https://github.com/stackriot/material-components-web/commit/3ee2675e4214d65f9072e4f14bf0413ce771be7d))
* **slider:** Add hidden input to slider, to support forms submission. This is also prep for moving to use an \<input type="range"\> behind the scenes, in order to support touch-based AT's. ([b98d15d](https://github.com/stackriot/material-components-web/commit/b98d15d90b19e69066c0b417ee0d8b11ab733e20))
* **slider:** Add hooks into dragStart/dragEnd events to slider foundation. ([85a1fa9](https://github.com/stackriot/material-components-web/commit/85a1fa9eab3010f2c41f5f65ca80a7f34bc46b2c))
* **slider:** Add M2 version of slider. ([8158544](https://github.com/stackriot/material-components-web/commit/8158544774c50ba21b114f6fe24786816ba4c4fd))
* **slider:** Add mixin to customize thumb color in the activated (hover, focus, pressed) state. ([94f50b2](https://github.com/stackriot/material-components-web/commit/94f50b260dd6cbf6cca5fbedd2a8681746e2cc1d))
* **slider:** Add support for customizing tick marks opacity, and document tick mark DOM structure for rendering tick marks before component initialization. ([238216f](https://github.com/stackriot/material-components-web/commit/238216fc466a1b0dd5f4f05f10a083949e1b99d9))
* **slider:** Add support for setting `aria-valuetext` on slider thumbs. ([fd608ff](https://github.com/stackriot/material-components-web/commit/fd608ff66bbb2f765fa1c092427fba9e61a074f3))
* **slider:** Add support for styling initial thumb/track before component JS initialization. ([08ca4d0](https://github.com/stackriot/material-components-web/commit/08ca4d0ec5f359bc3a20bd2a302fa6b733b5e135))
* **slider:** Add support for theming disabled colors. ([d52b165](https://github.com/stackriot/material-components-web/commit/d52b165b5869309705068ab58803cef426f1e590))
* **slider:** Modify continuous slider to use step value by default, and give clients the option to customize step value for continuous sliders. ([7ad038e](https://github.com/stackriot/material-components-web/commit/7ad038e1d37171dc1fc931112b17f085533f7048))
* **slider:** Use input with type="range" to back slider component. This ensures that sliders can be adjusted with touch-based assistive technologies, as the current ARIA spec for sliders is not compatible with e.g. TalkBack/Android. ([9083b7d](https://github.com/stackriot/material-components-web/commit/9083b7d61b1dda2c5acefda6e8939870a358e98f))
* **snackbar:** Add 1px transparent border for high contrast support ([15a4d40](https://github.com/stackriot/material-components-web/commit/15a4d40dd708775c6120165422c9ebadee4c8f6f))
* **snackbar:** add feature targeting for styles ([#4876](https://github.com/stackriot/material-components-web/issues/4876)) ([1b7aea1](https://github.com/stackriot/material-components-web/commit/1b7aea152dd9a8ae1d814052b8faf61290415136))
* **snackbar:** Add option for indefinite timeout ([#4998](https://github.com/stackriot/material-components-web/issues/4998)) ([4f11851](https://github.com/stackriot/material-components-web/commit/4f11851a3375a0eafd6b3d4a4f43db2edcb89951))
* **snackbar:** Emit show or hide event. fixes [#1603](https://github.com/stackriot/material-components-web/issues/1603) ([#1755](https://github.com/stackriot/material-components-web/issues/1755)) ([3e53614](https://github.com/stackriot/material-components-web/commit/3e53614ad806e8c0860a707ac4548c35d51a74e9))
* **snackbar:** Update stacked layout to add an additional 8px on the label's right padding ([521afaf](https://github.com/stackriot/material-components-web/commit/521afaf6e3086285b040c06fc3dbc92f20dc9b06))
* **snackbar:** Update to match latest design guidelines ([#4166](https://github.com/stackriot/material-components-web/issues/4166)) ([33d30e6](https://github.com/stackriot/material-components-web/commit/33d30e67dab414feb56e27d5c409d25d8e790682)), closes [#4005](https://github.com/stackriot/material-components-web/issues/4005) [#3981](https://github.com/stackriot/material-components-web/issues/3981) [#2916](https://github.com/stackriot/material-components-web/issues/2916) [#2628](https://github.com/stackriot/material-components-web/issues/2628) [#1466](https://github.com/stackriot/material-components-web/issues/1466) [#1398](https://github.com/stackriot/material-components-web/issues/1398) [#1258](https://github.com/stackriot/material-components-web/issues/1258) [#11](https://github.com/stackriot/material-components-web/issues/11) [#2813](https://github.com/stackriot/material-components-web/issues/2813)
* **switch:** Add color theme mixins and update default color to secondary ([#1411](https://github.com/stackriot/material-components-web/issues/1411)) ([e4b4fa7](https://github.com/stackriot/material-components-web/commit/e4b4fa76f868930a7409d46a1267b39016d70982)), closes [#1144](https://github.com/stackriot/material-components-web/issues/1144)
* **switch:** add custom property theming support ([f147a22](https://github.com/stackriot/material-components-web/commit/f147a2271bba2b4f1ae4df403baf86bac974b120))
* **switch:** add density custom property support ([598fccc](https://github.com/stackriot/material-components-web/commit/598fcccc8d8945c0527a0553a6a937ddfdd80a8f))
* **switch:** Add density support for switch component. ([#5124](https://github.com/stackriot/material-components-web/issues/5124)) ([2c793b4](https://github.com/stackriot/material-components-web/commit/2c793b43158cd583d490213e62d6f495fce1aa8f)), closes [#5104](https://github.com/stackriot/material-components-web/issues/5104)
* **switch:** Add elevation overlay structure ([#5281](https://github.com/stackriot/material-components-web/issues/5281)) ([50f110a](https://github.com/stackriot/material-components-web/commit/50f110a6cf8100e594bdbd6c02ee278c39924008))
* **switch:** add feature targeting for styles ([#4275](https://github.com/stackriot/material-components-web/issues/4275)) ([4836293](https://github.com/stackriot/material-components-web/commit/483629326eb7b8e27a58b47bf7df50cecf481de8))
* **switch:** add high-contrast mode focus shim mixin ([c91e8d1](https://github.com/stackriot/material-components-web/commit/c91e8d141bc8b519ae1d8c7d1771c0d5110e84ad))
* **switch:** add new component and foundation ([ef43e6d](https://github.com/stackriot/material-components-web/commit/ef43e6d9607c7e8d6495b4a82e2178059dbe37fa))
* **switch:** add ripple opacity customization mixins ([#5126](https://github.com/stackriot/material-components-web/issues/5126)) ([8c0273f](https://github.com/stackriot/material-components-web/commit/8c0273fea6a8d64a5965f963fed288b0919e3142))
* **switch:** add updated density styles ([cb162da](https://github.com/stackriot/material-components-web/commit/cb162da374f5e5d613e6a4554f0e1efcdc443c04))
* **switch:** add updated RTL styles ([573dc7f](https://github.com/stackriot/material-components-web/commit/573dc7ffd479527a885e95f4c8ece270363a31cc))
* **switch:** Merge updated switch into master ([#3214](https://github.com/stackriot/material-components-web/issues/3214)) ([19724f1](https://github.com/stackriot/material-components-web/commit/19724f158bc33064384537ed77c766ce60b5627c)), closes [#2825](https://github.com/stackriot/material-components-web/issues/2825)
* **switch:** Move component specific logic out of foundation ([#3342](https://github.com/stackriot/material-components-web/issues/3342)) ([e1e4465](https://github.com/stackriot/material-components-web/commit/e1e44650b5e45dfbfb4fb7740964b1fee678d8a9))
* **switch:** Restructure DOM ([#5312](https://github.com/stackriot/material-components-web/issues/5312)) ([0ec1fab](https://github.com/stackriot/material-components-web/commit/0ec1fabc39222cac4446c8e2b85d74d2a5d21e1a))
* **switch:** update switch to new design spec ([0ce2fdb](https://github.com/stackriot/material-components-web/commit/0ce2fdb02a62bb31f945144aac58957989ecfba6))
* **switch:** update theme keys ([00b5899](https://github.com/stackriot/material-components-web/commit/00b5899dcf803dcdf3795e70a970abafa247e1b3))
* **switch:** Use elevation token resolvers ([e1703be](https://github.com/stackriot/material-components-web/commit/e1703bed9ba624d450cddbc5f07b08eb822f46ef))
* **tab:** Add MDCTab component ([#2421](https://github.com/stackriot/material-components-web/issues/2421)) ([a8b3193](https://github.com/stackriot/material-components-web/commit/a8b3193ae24b5a391fa8a5fcc825234f6579b11b))
* **tab:** Add Tab Sass mixins targeting active state colors ([#4522](https://github.com/stackriot/material-components-web/issues/4522)) ([31376f7](https://github.com/stackriot/material-components-web/commit/31376f735dcdb92113b6d5cdc030f2d78eb9b73b))
* **tab:** Add text transform mixin ([#5144](https://github.com/stackriot/material-components-web/issues/5144)) ([22d7ad2](https://github.com/stackriot/material-components-web/commit/22d7ad2fb1796fbd71a3a5ee9c7ab2e77c60e34e))
* **tab:** Get tabs by their ID ([#4149](https://github.com/stackriot/material-components-web/issues/4149)) ([2d35220](https://github.com/stackriot/material-components-web/commit/2d352208ab8e5deb4a6116330c348d0447f008d9))
* **tab:** Implement a base states color mixin for Tab ([#4421](https://github.com/stackriot/material-components-web/issues/4421)) ([35c3721](https://github.com/stackriot/material-components-web/commit/35c37218bdd4f1bcadec59de1d0c02ccb50bd0de))
* **tab:** Improved mixins ([#4675](https://github.com/stackriot/material-components-web/issues/4675)) ([252009f](https://github.com/stackriot/material-components-web/commit/252009fcd5a10f2c816ab487103d52d0280f2dd7))
* **tab:** Move event registration to component ([#3331](https://github.com/stackriot/material-components-web/issues/3331)) ([f2ac793](https://github.com/stackriot/material-components-web/commit/f2ac7936a23c847c78175ed043eca4350d18aa59))
* **tab:** sass color mixins ([#1851](https://github.com/stackriot/material-components-web/issues/1851)) ([9bb3be5](https://github.com/stackriot/material-components-web/commit/9bb3be544b5b2390e7a7ab31cf40047028494e20))
* **tab-bar:** Add a mixin to set scroller animation ([#5172](https://github.com/stackriot/material-components-web/issues/5172)) ([d7c938a](https://github.com/stackriot/material-components-web/commit/d7c938a29a925e1be0d7af69d13d8c4b5d54f3cb))
* **tab-bar:** Add density mixin to tab-bar ([#5070](https://github.com/stackriot/material-components-web/issues/5070)) ([45dc002](https://github.com/stackriot/material-components-web/commit/45dc002e60a25a8a49c74a5f40b35faad04404f2))
* **tab-bar:** Add focusOnActivate flag ([#3748](https://github.com/stackriot/material-components-web/issues/3748)) ([313618a](https://github.com/stackriot/material-components-web/commit/313618a52e930ecaeb5d3081735d719f30ca4e2b))
* **tab-bar:** Allow activation of tab without previous active tab ([#4615](https://github.com/stackriot/material-components-web/issues/4615)) ([7d4124d](https://github.com/stackriot/material-components-web/commit/7d4124de70ba347c9e0db1c70ef279fa95f1a046))
* **tab-bar:** Launch tab, tab indicator, tab scroller, tab bar ([#3252](https://github.com/stackriot/material-components-web/issues/3252)) ([78bf4bc](https://github.com/stackriot/material-components-web/commit/78bf4bc30396890164f80f4e086feb1a473828bf))
* **tab-bar:** Support manual and automatic activation behavior ([#3303](https://github.com/stackriot/material-components-web/issues/3303)) ([7182fa1](https://github.com/stackriot/material-components-web/commit/7182fa18c5137c1416602fa122e4fa2920984cf1))
* **tab-indicator:** Remove transitionend event handling ([#3337](https://github.com/stackriot/material-components-web/issues/3337)) ([c8af69b](https://github.com/stackriot/material-components-web/commit/c8af69b1da53726f4856fafc64d88644fe29bfa0))
* **tab-scroller:** Add incrementScrollImmediate to bypass animation ([#5184](https://github.com/stackriot/material-components-web/issues/5184)) ([2b878b3](https://github.com/stackriot/material-components-web/commit/2b878b3e7c4493e5a5a8b2b9d5558265486b6657)), closes [#5123](https://github.com/stackriot/material-components-web/issues/5123)
* **tab-scroller:** Mixin for scroll transition ([#5154](https://github.com/stackriot/material-components-web/issues/5154)) ([efda83d](https://github.com/stackriot/material-components-web/commit/efda83dbed6299225a32a5add8c9ca12217c25d0))
* **tabs:** Add active tab states mixin ([#4603](https://github.com/stackriot/material-components-web/issues/4603)) ([0e9f3f5](https://github.com/stackriot/material-components-web/commit/0e9f3f55251a811139e62d309c8c69572711dcfa))
* **tabs:** Add theming API to tabs ([bd25779](https://github.com/stackriot/material-components-web/commit/bd25779b2bc6d10a00fbc19573f94a716f165cdf))
* **tabs:** Added theme-styles() mixin to tabs ([e38d744](https://github.com/stackriot/material-components-web/commit/e38d7440f43c3ffe31407f1a76a35c482c42f7c5))
* **tabs:** Publicize MDCTabBarScrollerFoundation#scrollToTabAtIndex ([#1267](https://github.com/stackriot/material-components-web/issues/1267)) ([a8f7216](https://github.com/stackriot/material-components-web/commit/a8f72169fecd860ddaa20d5ff4adb3f0575365f4))
* **tabs:** Use new mdc-states mixin for tab styles ([#1674](https://github.com/stackriot/material-components-web/issues/1674)) ([f7f1eb0](https://github.com/stackriot/material-components-web/commit/f7f1eb07942db56759da15fcd422a9efc057b243))
* **tabs:** Use new ripple mixins ([#1492](https://github.com/stackriot/material-components-web/issues/1492)) ([253fba0](https://github.com/stackriot/material-components-web/commit/253fba02cd82edfebc94a1199895b5c91624e290))
* **test:** Add overline support to two- and three-line lists. ([38d1846](https://github.com/stackriot/material-components-web/commit/38d1846cca4f9abbcf2c073add3191bde0e03ffb))
* **test:** Add shape radius mixins to list. ([d5f1f7c](https://github.com/stackriot/material-components-web/commit/d5f1f7c722ada3b62265e12e47a6f714d5bd7351))
* **text-field:** Add CSS-only version of outlined text field ([#1824](https://github.com/stackriot/material-components-web/issues/1824)) ([dd5ea7b](https://github.com/stackriot/material-components-web/commit/dd5ea7b5776fb82c3276f8ba875c34adad11ef4e))
* **text-field:** Add dense mode to outlined text field ([#1846](https://github.com/stackriot/material-components-web/issues/1846)) ([5a19695](https://github.com/stackriot/material-components-web/commit/5a19695523cf96e068a844cc762df9400d97554a))
* **text-field:** Add density mixin to text field variants ([#5066](https://github.com/stackriot/material-components-web/issues/5066)) ([a12101d](https://github.com/stackriot/material-components-web/commit/a12101d6d7d44a5add3d7e3301fc721dfa98ffc9))
* **text-field:** Add disabled state color mixins ([#5208](https://github.com/stackriot/material-components-web/issues/5208)) ([66299b6](https://github.com/stackriot/material-components-web/commit/66299b64613e8399af263d7021f93f9cdaf74ae3))
* **text-field:** add feature targeting for styles ([#5378](https://github.com/stackriot/material-components-web/issues/5378)) ([e8a9936](https://github.com/stackriot/material-components-web/commit/e8a993677858893965608a55931d7e54c84e8c5d))
* **text-field:** Add focus API to component ([#4020](https://github.com/stackriot/material-components-web/issues/4020)) ([edcb939](https://github.com/stackriot/material-components-web/commit/edcb9393fd1e5578ff29d0a5d60d8649f7001326))
* **text-field:** Add methods to set text field icon aria-label and content ([#2771](https://github.com/stackriot/material-components-web/issues/2771)) ([02d7dca](https://github.com/stackriot/material-components-web/commit/02d7dca4bd7871250e38ba95b8834554334e4d0c))
* **text-field:** Add outline subelement and demo for outlined text field ([#1749](https://github.com/stackriot/material-components-web/issues/1749)) ([4ce3582](https://github.com/stackriot/material-components-web/commit/4ce3582b05fc0102213d20de369e4e546a1507fa))
* **text-field:** Add properties for value, disable, value, and required ([#1873](https://github.com/stackriot/material-components-web/issues/1873)) ([d7b9345](https://github.com/stackriot/material-components-web/commit/d7b93450161fa530564d20eb577d51a28ffb8f04))
* **text-field:** Add ripple to outlined text field ([#1807](https://github.com/stackriot/material-components-web/issues/1807)) ([49fc1c4](https://github.com/stackriot/material-components-web/commit/49fc1c476e1f077fd8e202ab00acf19a24b4a270))
* **text-field:** Add support for leading/trailing icons at the same time ([#3451](https://github.com/stackriot/material-components-web/issues/3451)) ([6b3cfe5](https://github.com/stackriot/material-components-web/commit/6b3cfe5f3ee1158593f63ff77b7537b36e87dcfb))
* **text-field:** Added support for character counter. ([#4244](https://github.com/stackriot/material-components-web/issues/4244)) ([0bcc0e7](https://github.com/stackriot/material-components-web/commit/0bcc0e77fdb588a9a736f03cc64bd7670d3b794e))
* **text-field:** Added support for text field without label ([#4285](https://github.com/stackriot/material-components-web/issues/4285)) ([bf956fa](https://github.com/stackriot/material-components-web/commit/bf956fa4edd6ed2e9c96a9bf1fe38f2ce7a85635))
* **text-field:** Center align inner elements for dynamic height ([#4990](https://github.com/stackriot/material-components-web/issues/4990)) ([4d94b22](https://github.com/stackriot/material-components-web/commit/4d94b2202bbb754622725a87c3126ac7d88e7230))
* **text-field:** define icon's cssClasses ([#4614](https://github.com/stackriot/material-components-web/issues/4614)) ([816139c](https://github.com/stackriot/material-components-web/commit/816139c1a10647938f345ab7d40b94b3e2ce91ed))
* **text-field:** Expand the helper text foundation ([#1955](https://github.com/stackriot/material-components-web/issues/1955)) ([468942b](https://github.com/stackriot/material-components-web/commit/468942bdf964493ecfa4438545c7334fb2bd74b1))
* **text-field:** Handle leading/trailing icons in outlined text field ([#1858](https://github.com/stackriot/material-components-web/issues/1858)) ([ca0af1b](https://github.com/stackriot/material-components-web/commit/ca0af1b5e2bf66356f42be3d9353fd7b440d3e8b))
* **text-field:** Move bottom-line to separate package ([#2037](https://github.com/stackriot/material-components-web/issues/2037)) ([1dc0e85](https://github.com/stackriot/material-components-web/commit/1dc0e857b7f117968c99cd46f41f4ae436557fed))
* **text-field:** Move color for default text-field to mixins. ([#1899](https://github.com/stackriot/material-components-web/issues/1899)) ([ec4d18e](https://github.com/stackriot/material-components-web/commit/ec4d18eab615528a2ace6a7c1e471db1b05934e9))
* **text-field:** Move final JS colors to mixins. Update demos ([#2006](https://github.com/stackriot/material-components-web/issues/2006)) ([989c516](https://github.com/stackriot/material-components-web/commit/989c51611f96da222f904375431fac3526449675))
* **text-field:** Move text-field outline colors to mixins ([#1963](https://github.com/stackriot/material-components-web/issues/1963)) ([1dae53c](https://github.com/stackriot/material-components-web/commit/1dae53c0e733ccf48ea4d1b13222a12da1f1dd72))
* **text-field:** New API to enable/disable native input validation for custom validity ([#3084](https://github.com/stackriot/material-components-web/issues/3084)) ([bd49920](https://github.com/stackriot/material-components-web/commit/bd49920469e7f72404f6ec995fd6329147cd2534))
* **text-field:** Remove css only options. Update docs. Update demo ([#2012](https://github.com/stackriot/material-components-web/issues/2012)) ([9d87adf](https://github.com/stackriot/material-components-web/commit/9d87adf83cc0746d186bfd677dae8b47976e0791))
* **text-field:** rename helptext to helper text ([#1576](https://github.com/stackriot/material-components-web/issues/1576)) ([1a5acee](https://github.com/stackriot/material-components-web/commit/1a5acee2b012120db6ae26cf2cb20ec56b73a7e9))
* **text-field:** rename textfield to text-field ([#1485](https://github.com/stackriot/material-components-web/issues/1485)) ([8093ad1](https://github.com/stackriot/material-components-web/commit/8093ad1d61608fb7f5e54e40af28d9dec19923ed))
* **text-field:** Support for types- color, date, datetime-local, etc ([#2854](https://github.com/stackriot/material-components-web/issues/2854)) ([0d02f1f](https://github.com/stackriot/material-components-web/commit/0d02f1f7c023a1912a35a2dac84e34708c113493))
* **text-field:** Truncate floating label width w/ icons ([c141801](https://github.com/stackriot/material-components-web/commit/c141801d50516a18fe53d4bc78591cefb4f57623))
* **textfield:** add autovalidation customization ([2ab716c](https://github.com/stackriot/material-components-web/commit/2ab716cbda14aca5a8b62cdae3c71c2d629b16f7))
* **textfield:** add end-alignment ([#5356](https://github.com/stackriot/material-components-web/issues/5356)) ([847dd1a](https://github.com/stackriot/material-components-web/commit/847dd1ada08bb0fd905adac7b7836540a0dd7e9c))
* **textfield:** add filled class variant ([b70bc60](https://github.com/stackriot/material-components-web/commit/b70bc601ef570dab4598ae6f3ca51bbf884fac96))
* **textfield:** add filled textarea variant ([4497b86](https://github.com/stackriot/material-components-web/commit/4497b86ed8b3e0ee0781dd6f795aa1ff332d2a3b))
* **textfield:** add forced LTR input ([490fbdc](https://github.com/stackriot/material-components-web/commit/490fbdc092c5c59d63f83407b83b37fb524ed0e5))
* **textfield:** Add left and right margin to helptext ([3a24bca](https://github.com/stackriot/material-components-web/commit/3a24bcaf2c92220a61a4c20de6228e8636cdafda))
* **textfield:** Add mixin allowing customization of border radii ([#1446](https://github.com/stackriot/material-components-web/issues/1446)) ([483e3d5](https://github.com/stackriot/material-components-web/commit/483e3d5e2d87e3b404f4b6ba04d067d2e48f7c7f))
* **textfield:** Add modified textfield css and tests ([#1170](https://github.com/stackriot/material-components-web/issues/1170)) ([8642b03](https://github.com/stackriot/material-components-web/commit/8642b0330f30c29ee324df08bb3c79b032fb113e))
* **textfield:** add prefix and suffix ([6601d24](https://github.com/stackriot/material-components-web/commit/6601d24afdc3a3d0bd2a9b3fcca68c35c9415ec1)), closes [#1892](https://github.com/stackriot/material-components-web/issues/1892)
* **textfield:** add specific label-floating class ([a88c8e4](https://github.com/stackriot/material-components-web/commit/a88c8e4dc873ae74a3afbae0dc8635dfaa03e67b))
* **textfield:** Add textfield to the Closure whitelist. ([#1394](https://github.com/stackriot/material-components-web/issues/1394)) ([8b05e88](https://github.com/stackriot/material-components-web/commit/8b05e881d7fe500c0393b265135c353b3c95a879))
* **textfield:** Add valid setter, so clients can set custom validity ([cb17052](https://github.com/stackriot/material-components-web/commit/cb1705277584868e62892b980cbfb2ecef9049d7)), closes [#1018](https://github.com/stackriot/material-components-web/issues/1018)
* **textfield:** allow character counter to be moved outside of the textarea. ([84e7ed5](https://github.com/stackriot/material-components-web/commit/84e7ed5825d3109c229d0f1f6c3edf97a3548226))
* **textfield:** allow disabled textareas to scroll and resize ([b9776b1](https://github.com/stackriot/material-components-web/commit/b9776b1d09b9ccfac38b3dc471dee2fd9fc8558a))
* **textfield:** Annotate textfield for Closure Compiler. ([#1386](https://github.com/stackriot/material-components-web/issues/1386)) ([1152b8d](https://github.com/stackriot/material-components-web/commit/1152b8de475942c346cca4bd490cb6c7675753c1))
* **textfield:** Convert some foundation methods from private to public ([#1543](https://github.com/stackriot/material-components-web/issues/1543)) ([a8dcc59](https://github.com/stackriot/material-components-web/commit/a8dcc590a052167cfc68d65ed8cd77e7898dcc86)), closes [#1550](https://github.com/stackriot/material-components-web/issues/1550)
* **textfield:** Create float transition mixin ([ca61b65](https://github.com/stackriot/material-components-web/commit/ca61b656fababdf25adaa307963d4f37e6d413ec))
* **textfield:** helperTextContent setter ([#1569](https://github.com/stackriot/material-components-web/issues/1569)) ([875e393](https://github.com/stackriot/material-components-web/commit/875e39372a64a23b346c5def1fbe1092a4292c46))
* **textfield:** Implement updated UX states for text fields ([#998](https://github.com/stackriot/material-components-web/issues/998)) ([45c6cf6](https://github.com/stackriot/material-components-web/commit/45c6cf68aad9a0985b1ca0b4ad81ed466298809f))
* **textfield:** Limit notched outline max-width ([0ab62a6](https://github.com/stackriot/material-components-web/commit/0ab62a65b17192a94102231ca63f54adc39675ae))
* **textfield:** move resize handle for textareas to bottom corner ([ed52af7](https://github.com/stackriot/material-components-web/commit/ed52af7677ad37138b6660ca11fbdb209be05b46))
* **textfield:** required outlined modifier for textarea ([b10d0d7](https://github.com/stackriot/material-components-web/commit/b10d0d7f1911b381a47d39b5d0bc4543089efb3e))
* **textfield:** support svg icons for textfield ([d91794c](https://github.com/stackriot/material-components-web/commit/d91794c7ecafbaef7150d2c88226b96d7e4c4ea6))
* **textfield:** Use mdc-states mixin and add support for focus shade ([#1677](https://github.com/stackriot/material-components-web/issues/1677)) ([2918031](https://github.com/stackriot/material-components-web/commit/2918031c4da5ffd7b5a41cc26e0b23d36b2fda09))
* **textfield:** Use new ripple mixins and remove hover ripple styles ([#1477](https://github.com/stackriot/material-components-web/issues/1477)) ([2a71ef7](https://github.com/stackriot/material-components-web/commit/2a71ef7ed9d6d34f75d9a4a22c1cb7b52e975d83))
* **textfield:** Using touch-target-mixins to increase the touch target size on trailing icons on text fields. ([174c0be](https://github.com/stackriot/material-components-web/commit/174c0becfc802e4366e4814758f28cb1ecf2c75a))
* **theme:** `mdc-theme-prop` accepts literal color values ([#1129](https://github.com/stackriot/material-components-web/issues/1129)) ([e47f3e6](https://github.com/stackriot/material-components-web/commit/e47f3e6cd31e10cac85badf620af19169646a5d4))
* **theme:** Add accessible-ink-color function ([#1719](https://github.com/stackriot/material-components-web/issues/1719)) ([49cd750](https://github.com/stackriot/material-components-web/commit/49cd750ed5dbd13312e19ad235c4c571252ddd36))
* **theme:** add calc() string replacement to property mixin ([79414bf](https://github.com/stackriot/material-components-web/commit/79414bf9f93aae12bc394fd518b6cb401e5ddb26))
* **theme:** add configuration support for custom-properties ([1f318ff](https://github.com/stackriot/material-components-web/commit/1f318ff0f033f9f51c8bf7f76ef997161ff62fd4))
* **theme:** add create-varname() for custom properties ([b522724](https://github.com/stackriot/material-components-web/commit/b5227247d730171c02bd71e9b44106cd179aaf2a))
* **theme:** add deep-get utility ([fb5a4cd](https://github.com/stackriot/material-components-web/commit/fb5a4cdeb79de0412a9e0573db1dacb28e8186f3))
* **theme:** Add Edge opt-out option to mdc-theme-prop ([262e17b](https://github.com/stackriot/material-components-web/commit/262e17b87e60d5ba2adb15135ed37386ff849fec))
* **theme:** add either() utility function ([5268222](https://github.com/stackriot/material-components-web/commit/5268222c432bb886add05cbb1779909117cf1620))
* **theme:** Add error and on-error support ([#3469](https://github.com/stackriot/material-components-web/issues/3469)) ([b10095f](https://github.com/stackriot/material-components-web/commit/b10095fb9d890bf8ae4e6a4fe88642c74aba9177))
* **theme:** add key store ([07ff0c4](https://github.com/stackriot/material-components-web/commit/07ff0c452c896f9f8131532538742bed0ad207c9))
* **theme:** Add light/dark vars for primary/secondary color; rename `accent` to `secondary` ([#1116](https://github.com/stackriot/material-components-web/issues/1116)) ([2314ad5](https://github.com/stackriot/material-components-web/commit/2314ad5dccd90c04b57f4c4727c94490154d787e))
* **theme:** add map-ext.split() helper function ([ec22e1d](https://github.com/stackriot/material-components-web/commit/ec22e1da9746b38de654a18b0161c40c74e4e74f))
* **theme:** Add new mdc-theme-on-primary global variable ([#2483](https://github.com/stackriot/material-components-web/issues/2483)) ([777a0fd](https://github.com/stackriot/material-components-web/commit/777a0fdedb9688942151e6f04c19fd5fae7a01af))
* **theme:** add new property mixin and custom property support ([51512a4](https://github.com/stackriot/material-components-web/commit/51512a4ac375a6175b4a533ff004ea90a4318c9e))
* **theme:** Add new tone mixins and deprecate old one ([#1546](https://github.com/stackriot/material-components-web/issues/1546)) ([57581ed](https://github.com/stackriot/material-components-web/commit/57581edc4f643e39c0bcfffa95bab4ffde68b865))
* **theme:** Add SCSS variables for Material Design color palette ([#1117](https://github.com/stackriot/material-components-web/issues/1117)) ([6c26958](https://github.com/stackriot/material-components-web/commit/6c269580e1673f5c15f68c07d0e7a41d83401c36))
* **theme:** add shadow-dom host-aware helpers ([0a2e7fc](https://github.com/stackriot/material-components-web/commit/0a2e7fc8976e6481c9225609d7ff5354362472fa)), closes [#6295](https://github.com/stackriot/material-components-web/issues/6295)
* **theme:** add state helper functions ([0809012](https://github.com/stackriot/material-components-web/commit/08090126b4eff43f82188ee1dae5c8deda33d2ef))
* **theme:** add state selector mixins ([d20dc6d](https://github.com/stackriot/material-components-web/commit/d20dc6dba8e8824645404d0eaafa763d8b026ef0))
* **theme:** Add support for arbitrary CSS vars with fallback ([#4470](https://github.com/stackriot/material-components-web/issues/4470)) ([0bfb393](https://github.com/stackriot/material-components-web/commit/0bfb393407727b9ad5e8de1e8dda6ea6a0ee21fd))
* **theme:** Add typography styles to shrine demo ([#2605](https://github.com/stackriot/material-components-web/issues/2605)) ([976affd](https://github.com/stackriot/material-components-web/commit/976affd0d1112df6b3fcf1142317e8eb9e0fcac7))
* **theme:** add validation option to disallow custom properties ([fec7b42](https://github.com/stackriot/material-components-web/commit/fec7b42ca54baf37487cadaf96ac8cf559d6ccd0))
* **theme:** Added new function for text emphasis opacities ([f841afe](https://github.com/stackriot/material-components-web/commit/f841afe2c0c9430b1cf8a2f845cbedd83824c24c))
* **theme:** Added validation mixin to validate provided theme configuration keys ([1c156d6](https://github.com/stackriot/material-components-web/commit/1c156d69d76efcfa39c706f7f6ae74e96c2bd541))
* **theme:** allow lists in replace maps ([d2959b1](https://github.com/stackriot/material-components-web/commit/d2959b16ca9a2e4574984b8e459993c9c9a2075a))
* **theme:** Allow overriding of text themes ([#1481](https://github.com/stackriot/material-components-web/issues/1481)) ([f579e0a](https://github.com/stackriot/material-components-web/commit/f579e0a67a4e49fa4948cd491f36c05c4423f62e))
* **theme:** custom property fallback values are now optional ([01de070](https://github.com/stackriot/material-components-web/commit/01de07011d8b4b121a061da66fafe610f5484a51))
* **theme:** emit CSS var() declarations when provided a standalone custom prop ([1a3a396](https://github.com/stackriot/material-components-web/commit/1a3a396293df35d9621155e9168df35d39d83fee))
* **theme:** gss.annotate supports named arguments ([c50d20b](https://github.com/stackriot/material-components-web/commit/c50d20bab49d5c00dd0a74e8616d02d8d87fba89))
* **theme:** Luminance-aware light/dark tonal variants ([#1131](https://github.com/stackriot/material-components-web/issues/1131)) ([90e7556](https://github.com/stackriot/material-components-web/commit/90e75566cdf5c72613eb5f8733487d280320e036))
* **theme:** rename all color_palette instances ([#1479](https://github.com/stackriot/material-components-web/issues/1479)) ([375661d](https://github.com/stackriot/material-components-web/commit/375661d43309245bd02d49728ffd9fef060d7753))
* **theme:** Support currentColor in mdc-theme-prop* ([#1657](https://github.com/stackriot/material-components-web/issues/1657)) ([7e1255e](https://github.com/stackriot/material-components-web/commit/7e1255e4692992ba514c6337122b9bf2b133a990))
* **theme:** Switch to new theme demo page ([#1886](https://github.com/stackriot/material-components-web/issues/1886)) ([daefeba](https://github.com/stackriot/material-components-web/commit/daefeba86dbe2fe1cd82a400d108fdfc73241025))
* **theme:** theme.property() supports custom prop declarations ([474836a](https://github.com/stackriot/material-components-web/commit/474836ad0f4f92d03ce7dd0c9f923b6ff9abac7c))
* **theme:** Update baseline theme colors ([#1884](https://github.com/stackriot/material-components-web/issues/1884)) ([f19bfbe](https://github.com/stackriot/material-components-web/commit/f19bfbed33654172b299a4ccfb6041796b7a2a98))
* **toolbar:** Add theme color mixins ([#1720](https://github.com/stackriot/material-components-web/issues/1720)) ([328df77](https://github.com/stackriot/material-components-web/commit/328df776c31dc82209902d931e74594724ffba4e)), closes [#1154](https://github.com/stackriot/material-components-web/issues/1154)
* **tooltip:** Add 500ms delay before showing tooltip. ([a1c6559](https://github.com/stackriot/material-components-web/commit/a1c65593d3c1f594a35561569357bb657dd50408))
* **tooltip:** add position options for y-axis ([91ab1c6](https://github.com/stackriot/material-components-web/commit/91ab1c62a4e00ae844d444882582d2052aaf228a))
* **tooltip:** Add positioning adjustment and position specification for rich tooltips. Rich tooltips default to the END position and does not support CENTER positioning. ([384a8ee](https://github.com/stackriot/material-components-web/commit/384a8eeb163798df6655c8a49c36428ede852e15))
* **tooltip:** Add tooltip component into MDC catalog. ([b9394dc](https://github.com/stackriot/material-components-web/commit/b9394dc5da7db3b60497cf81aa5f26a5758d9b37))
* **tooltip:** Added persistent variant for rich tooltips that shows/hides based on mouse clicks on the anchor element. Clicks on elements other than the anchor will also hide the persistent variant. ([9775856](https://github.com/stackriot/material-components-web/commit/9775856508a7256cb7dc93d0c3e47f6d87c08c93))
* **tooltip:** Adding foundation methods to allow users to configure the tooltip show and hide delay time. ([08db3d7](https://github.com/stackriot/material-components-web/commit/08db3d737fa49893d1c3d1d3f7dd07367dd9eaeb))
* **tooltip:** Adding logic to position the caret relative to the tooltip. ([76da787](https://github.com/stackriot/material-components-web/commit/76da7876cd1452cdabed5169bdbdfd06b4629cda))
* **tooltip:** Adding option to render tooltips as hidden from a screenreader. This should only be utilized in situations where the tooltip label hold information duplicated from an accessible name on the anchor element (e.g. tooltip label is the same as the aria-label on an icon button) ([546277d](https://github.com/stackriot/material-components-web/commit/546277d323c484ddf181afffed153f4f17c9f4a7))
* **tooltip:** Adding touchstart/touchend event listeners to tooltip. This allows tooltips attached to non-focusable elements to be surfaced on mobile. ([7cd26af](https://github.com/stackriot/material-components-web/commit/7cd26af4dd2033dacce75d2df2d179f81286fe71))
* **tooltip:** Adding transparent border around tooltip so it is distinguished from the background in high contrast mode. ([02e372c](https://github.com/stackriot/material-components-web/commit/02e372c5f02afaf66e06e733a08c6c704c16843c))
* **tooltip:** Adds `transform-origin` on tooltip surface so tooltip entrance animation has a direction based on its alignment with the anchor element. ([623af86](https://github.com/stackriot/material-components-web/commit/623af861e1852603fd4778fb0abbef58b427333c))
* **tooltip:** Adds logic for generating a new tooltip position when all "standard" positions for tooltip w/ caret are invalid. ([9bc0eff](https://github.com/stackriot/material-components-web/commit/9bc0effaf60a530bed8247f2bb9190dcbbbdec54))
* **tooltip:** Adds logic to determine valid position options for tooltip w/caret, and select which should be used. ([2ebfc53](https://github.com/stackriot/material-components-web/commit/2ebfc537439508ea08bcd99991eed4fe838f3550))
* **tooltip:** Adjust  tooltip position on `scroll` and `resize` events. This ensures that the tooltip remains pinned to the anchor element despite page movement. ([a415276](https://github.com/stackriot/material-components-web/commit/a41527604048d218879240aaaf04aff7389053d1))
* **tooltip:** Adjusting `transform-origin` for tooltips with caret so that the entrance animation originates from the caret. ([1a8d064](https://github.com/stackriot/material-components-web/commit/1a8d064838299e07e97e5f30470c76c03074ac42))
* **tooltip:** Adjusting logic and styles so the caret better matches spec. ([55ad2d7](https://github.com/stackriot/material-components-web/commit/55ad2d7d8f9bcc979f5334352620815d6ea9add6))
* **tooltip:** Adjusting tooltip positioning logic so that the tooltip remains within the viewport even if the anchor element is partially off-screen. ([482ff90](https://github.com/stackriot/material-components-web/commit/482ff909132b2e8f81791d7128cb0a3d2ff371a8))
* **tooltip:** Adjusting tooltip z-index so tooltip appears above other content on the page. ([c285200](https://github.com/stackriot/material-components-web/commit/c2852000d97ed49c5f8ab82b5911deb1c87a9025))
* **tooltip:** Adjustments to tooltip structure. ([19bea2a](https://github.com/stackriot/material-components-web/commit/19bea2ad3d6c6aa36e0d033af7adebd010dcd4fa))
* **tooltip:** Center align tooltip label text. ([5dac1f6](https://github.com/stackriot/material-components-web/commit/5dac1f624606fc92682a4266ffd68bea21e57069))
* **tooltip:** Change rich tooltip to use position absolute instead of fixed and rely on a position relative parent element so that if the parent has a transform, perspective, or filter property set to something other than none, the positioning would still work. ([0c95c9f](https://github.com/stackriot/material-components-web/commit/0c95c9f7bf1e0d465e99fd7dd3f1497d37d871ff))
* **tooltip:** Creating an `mdc-tooltip__surface-animation` class that holds all the style properties responsible for animating the tooltip in and out of the page. The existing `mdc-tooltip__surface` class will hold all the style properties that impact the visual appearance of the tooltip. ([56fc269](https://github.com/stackriot/material-components-web/commit/56fc26962126e24a7c56124de7f36078409254a7))
* **tooltip:** Creating method to clear any in-progress animations before starting new ones. ([61f1a8d](https://github.com/stackriot/material-components-web/commit/61f1a8d8599f6dfaa7fc6c64d661010df47839b7))
* **tooltip:** Define styling to set the full-screen dialog size depending on the viewport size. ([fe13dd1](https://github.com/stackriot/material-components-web/commit/fe13dd1308dc695898b2c7d3dfbddccc7d38b420))
* **tooltip:** Defining a z-index mixin. ([f4848eb](https://github.com/stackriot/material-components-web/commit/f4848eb3b57d81fd4fed1396cdc22a83344ccd72))
* **tooltip:** Expose `hide` and `isShown` methods in the MDCTooltip component. This allows MDC clients to create their own class to enforce only one tooltip being shown at a time. ([c5e18b0](https://github.com/stackriot/material-components-web/commit/c5e18b0203a3c474384bc5902a15855636ce849b))
* **tooltip:** Expose method that allows users to register additional scroll handlers on elements in the DOM. This should be used in situations where the tooltip anchor is a child of a scrollable element, and will ensure that the tooltip remains attached to the anchor when this element is scrolled. ([24609b8](https://github.com/stackriot/material-components-web/commit/24609b82225f763c1dc9da16b1ee9e0dd3c52197))
* **tooltip:** Fixes ordering of values provided to `tranform-origin`. ([25751d2](https://github.com/stackriot/material-components-web/commit/25751d2ed4061129f206bdbc6682052b0c76709e))
* **tooltip:** Foundation will now send a notification when the tooltip has been hidden. Methods added into the adapter to allow for this functionality. ([9274f85](https://github.com/stackriot/material-components-web/commit/9274f8504a905e04f24fba8f6a0e246d7ae3a638))
* **tooltip:** Hide rich tooltip if mouse leaves rich tooltip. Rich tooltip persists if mouse leaves rich tooltip and enters anchor. ([6d8574f](https://github.com/stackriot/material-components-web/commit/6d8574fe1db3a60dfb5a45ce8c6c6718700c2dfd))
* **tooltip:** Make persistent rich tooltips persist when click target is within the rich tooltip. ([fb194dd](https://github.com/stackriot/material-components-web/commit/fb194dd354d2c912f997c500347557edcba1440d))
* **tooltip:** Plain tooltips remain visible if the user hovers over them. ([ccce99c](https://github.com/stackriot/material-components-web/commit/ccce99cd630b5a49ed40ba95b0e3d3d6fea74801))
* **tooltip:** Reducing minimum threshold distance between tooltip and viewport from 32px to 8px. ([23491cf](https://github.com/stackriot/material-components-web/commit/23491cf85b8831896f95879e8aea258d5ca7f653))
* **tooltip:** Restore focus to the anchor element when the ESC button is pressed while the focus is in the tooltip for rich tooltips. Default rich tooltips should have focus restored to anchor and not have rich tooltips show. ([eabf9d5](https://github.com/stackriot/material-components-web/commit/eabf9d5c2d9b56e316db98f2d8e16bf12f1ef501))
* **tooltip:** Set up base sass for rich tooltip. Rich tooltips are currently in development and is not yet ready for use. ([4ae94ff](https://github.com/stackriot/material-components-web/commit/4ae94ff7816d87fde3285a0c2fd48b94ff0bbdab))
* **tooltip:** Set up rich tooltip to persist if mouse leaves anchor and enters rich tooltip. ([c927a5d](https://github.com/stackriot/material-components-web/commit/c927a5d05761d0a80f886b2b7627e600df38c467))
* **tooltip:** The aria-expanded attribute of the anchor element will only be changed for anchor elements with interactive rich tooltips. Non-interactive rich tooltip anchor elements do not have the aria-haspopup and aria-expanded attributes. ([c5dda80](https://github.com/stackriot/material-components-web/commit/c5dda809d5e4c110f3b4bb37c9646e572026d58d))
* **tooltip:** When the anchor element blurs, the rich tooltip will only be hidden if the focus is changed to a non-rich tooltip element. ([6871336](https://github.com/stackriot/material-components-web/commit/6871336f11f3cc7d94c6314dc049092e0427106c))
* **tooltip:** When the rich tooltip element focuses out, hide the rich tooltip if the new focused element is not the anchor element or an element within the rich tooltip. ([1085c3b](https://github.com/stackriot/material-components-web/commit/1085c3b2df7d3c1b528e1b9ba5557975fa959401))
* **top app bar:** Add short top app bar always collapsed feature ([#2327](https://github.com/stackriot/material-components-web/issues/2327)) ([bc17291](https://github.com/stackriot/material-components-web/commit/bc17291d21c47ed3d938661bd5f66236d225666d))
* **top-app-bar:** Add --fixed variant to top app bar ([#2474](https://github.com/stackriot/material-components-web/issues/2474)) ([1d40fa9](https://github.com/stackriot/material-components-web/commit/1d40fa903d7dde872ef6325db19741e50be22e51))
* **top-app-bar:** add default scroll behavior ([#2417](https://github.com/stackriot/material-components-web/issues/2417)) ([18be342](https://github.com/stackriot/material-components-web/commit/18be342e59f6ed60f9489e164c1746de7baa21d8))
* **top-app-bar:** Add dense style ([#2475](https://github.com/stackriot/material-components-web/issues/2475)) ([3feec58](https://github.com/stackriot/material-components-web/commit/3feec58c9df19ead71a99a2c7e037f2dccd25a84))
* **top-app-bar:** Add prominent style ([#2349](https://github.com/stackriot/material-components-web/issues/2349)) ([f59b109](https://github.com/stackriot/material-components-web/commit/f59b109579bcad724e156b71fa9afe9ba3010d6a))
* **top-app-bar:** Baseline top app bar component ([#2225](https://github.com/stackriot/material-components-web/issues/2225)) ([0ad69c4](https://github.com/stackriot/material-components-web/commit/0ad69c4fb7f647d890dfa4f87ddb3af4701f3ebb))
* **top-app-bar:** Implement short top app bar ([#2290](https://github.com/stackriot/material-components-web/issues/2290)) ([fd8d8d9](https://github.com/stackriot/material-components-web/commit/fd8d8d9a061e0ff93e864d7721086aed51312d18))
* **top-app-bar:** Switch to use variant specific foundations ([#2412](https://github.com/stackriot/material-components-web/issues/2412)) ([2950b3e](https://github.com/stackriot/material-components-web/commit/2950b3e59f78484262d0fe324a6b03e4bbc58aa1))
* **top-app-bar:** use mdc-icon-button styles instead of top app bar ([#4745](https://github.com/stackriot/material-components-web/issues/4745)) ([605f77e](https://github.com/stackriot/material-components-web/commit/605f77e50fe35ea9c7cc9e245a38af634655fa83))
* **top-app-bar:** use mdc-icon-button styles instead of top app bar ([#4745](https://github.com/stackriot/material-components-web/issues/4745)) ([f8c561c](https://github.com/stackriot/material-components-web/commit/f8c561c08172c6c43ea40f772af4c7577c271af9))
* **touch-target:** Add touch target mixins. ([#4940](https://github.com/stackriot/material-components-web/issues/4940)) ([b2e0fea](https://github.com/stackriot/material-components-web/commit/b2e0feac33cbdcb726e8b88ce5f1fb8fb3eef95c))
* **typography:**  Update variable reference to work for newer versions of ruby-sass ([#3047](https://github.com/stackriot/material-components-web/issues/3047)) ([0dfad9a](https://github.com/stackriot/material-components-web/commit/0dfad9adc3a66169c9c765628a813f4ce065a45a))
* **typography:** Add button style to typography ([#1064](https://github.com/stackriot/material-components-web/issues/1064)) ([21c7a54](https://github.com/stackriot/material-components-web/commit/21c7a54d0f9ac05ec06861e811e5743ed6870e07))
* add custom property support for select, textfield, and notched outline ([ec23858](https://github.com/stackriot/material-components-web/commit/ec2385881f93b75641db661038aae439b4c217d1))
* add feature targeting for styles to tab-related packages ([#4838](https://github.com/stackriot/material-components-web/issues/4838)) ([c7efc10](https://github.com/stackriot/material-components-web/commit/c7efc10afea37f724c7c258e80dfd95a455f31d8))
* Add feature targeting support and apply to mdc-button ([#4228](https://github.com/stackriot/material-components-web/issues/4228)) ([531dffb](https://github.com/stackriot/material-components-web/commit/531dffb268fed231b05cccbd25e7c313aaa66e52))
* Add index stylesheets to each MDC Web package ([#5539](https://github.com/stackriot/material-components-web/issues/5539)) ([1814866](https://github.com/stackriot/material-components-web/commit/181486643532e2166dced95daff9da786af3bdd1))
* Add index stylesheets to mdc-image-list and mdc-layout-gr… ([#5546](https://github.com/stackriot/material-components-web/issues/5546)) ([3a85313](https://github.com/stackriot/material-components-web/commit/3a85313ac121703e8aeac583502adf9863d96a8e))
* Add support for "mdc-deprecated-list-*" class names. ([9e52f55](https://github.com/stackriot/material-components-web/commit/9e52f554437fa438c9b4c266f8e87ff370ec5dea))
* Added global variable to conditionally emit CSS selector fallback declarations ([7b0e2b3](https://github.com/stackriot/material-components-web/commit/7b0e2b3775d006126161bd688851d490d19e9558))
* Convert packages to TypeScript ([#4451](https://github.com/stackriot/material-components-web/issues/4451)) ([ad5743a](https://github.com/stackriot/material-components-web/commit/ad5743ae665d138c38a23ba36a3d2f63b5c388d5)), closes [#4225](https://github.com/stackriot/material-components-web/issues/4225)
* Create token package with resolvers ([9405502](https://github.com/stackriot/material-components-web/commit/940550232c7925150e597c4f56433b7e5df59099))
* update default npm export to ES5 js files ([#3245](https://github.com/stackriot/material-components-web/issues/3245)) ([514f9f8](https://github.com/stackriot/material-components-web/commit/514f9f894a73999ef9740888944433acc7370669))
* update to MIT license ([#3376](https://github.com/stackriot/material-components-web/issues/3376)) ([2cf8487](https://github.com/stackriot/material-components-web/commit/2cf84876fec45a0c8d31eff2ec47d48b11c8fdac))
* Use [@use](https://github.com/use) syntax in material-components-web Sass file and… ([#5573](https://github.com/stackriot/material-components-web/issues/5573)) ([b4727e4](https://github.com/stackriot/material-components-web/commit/b4727e43aa17afe03b240402ded590c0516267d5))
* **typography:** add container baseline mixins for flexbox ([69edc6e](https://github.com/stackriot/material-components-web/commit/69edc6e2899636cfccb117376bb64dc0a267c588))
* **typography:** add CSS custom properties ([6a56f38](https://github.com/stackriot/material-components-web/commit/6a56f387c498e80cbac1cac5de6b4963325ffda6))
* **typography:** add feature targeting for styles ([#4305](https://github.com/stackriot/material-components-web/issues/4305)) ([8691cf8](https://github.com/stackriot/material-components-web/commit/8691cf85abc44be0b878c325fc09e55d86e281a1))
* **typography:** New mixin to set exact baseline height of text elements. ([#3083](https://github.com/stackriot/material-components-web/issues/3083)) ([dd3817a](https://github.com/stackriot/material-components-web/commit/dd3817a84dd4d21f6addf51ad60056a1b2038e0f))
* **typography:** Reverted baseline mixin to use display inline-block because of IE issues ([#3297](https://github.com/stackriot/material-components-web/issues/3297)) ([ded07d0](https://github.com/stackriot/material-components-web/commit/ded07d07173a86e0a48982412bd5401d90ace463))
* **typography:** Support custom properties in mdc-typography mixin ([#1664](https://github.com/stackriot/material-components-web/issues/1664)) ([c50363d](https://github.com/stackriot/material-components-web/commit/c50363d8e836507872cdc52a65a4dfd031f4740b))
* **typography:** Update styles to match guidance ([#2527](https://github.com/stackriot/material-components-web/issues/2527)) ([f750ec7](https://github.com/stackriot/material-components-web/commit/f750ec7fe8fa85466272ea36b09a71334c67f243))


### Performance Improvements

* **button:** Remove extra CSS, now that ripple handles tap highlight color ([#1520](https://github.com/stackriot/material-components-web/issues/1520)) ([0a5fec5](https://github.com/stackriot/material-components-web/commit/0a5fec5eb59d09420a980d00a6ff86135cc514e2))
* **infrastructure:** Cut build time in half with opt-in env var ([#1128](https://github.com/stackriot/material-components-web/issues/1128)) ([e36639f](https://github.com/stackriot/material-components-web/commit/e36639f90494d6e82968c99a83ccc2a835e45515))


### Reverts

* fix(chips): Do not throw error if chip set becomes empty ([#5300](https://github.com/stackriot/material-components-web/issues/5300)) ([d10e8cd](https://github.com/stackriot/material-components-web/commit/d10e8cdf3cda4a735b1ae43bb17592f9383c8886))
* Revert "feat(textfield): Add modified textfield css and tests (#1170)" (#1221) ([49f5717](https://github.com/stackriot/material-components-web/commit/49f5717ccde27187084ca9991d099568d21ca458)), closes [#1170](https://github.com/stackriot/material-components-web/issues/1170) [#1221](https://github.com/stackriot/material-components-web/issues/1221)
* Revert "refactor(menu-surface): Allow any type during migration (#5201)" (#5212) ([62d3a09](https://github.com/stackriot/material-components-web/commit/62d3a09b2d31c8c44b5c5ff1ff91fb26ad460b63)), closes [#5201](https://github.com/stackriot/material-components-web/issues/5201) [#5212](https://github.com/stackriot/material-components-web/issues/5212)
* Revert "feat(switch): Add elevation overlay structure (#5281)" (#5329) ([1fbf5bd](https://github.com/stackriot/material-components-web/commit/1fbf5bd1d84b7b02eb7f0a7aff2b9c3eed0b4d3d)), closes [#5281](https://github.com/stackriot/material-components-web/issues/5281) [#5329](https://github.com/stackriot/material-components-web/issues/5329)
* **checkbox:** Added new theme mixin in checkbox to match token keys ([b4c3f51](https://github.com/stackriot/material-components-web/commit/b4c3f513eb1b42fa3844a265ccabb1e8644ea123))
* "fix(checkbox): change checkbox event type from change to click and add some logic for IE browser" ([ba30399](https://github.com/stackriot/material-components-web/commit/ba30399adc901ca090c90bb1cad9410c81ae5fd1))
* "Include tooltip directory for future copybara syncs." ([#6185](https://github.com/stackriot/material-components-web/issues/6185)) ([b0c456d](https://github.com/stackriot/material-components-web/commit/b0c456d330f31bc890c54d114de1d56ac23fee9f))
* chore(text-field): reduce scss specificity ([#2163](https://github.com/stackriot/material-components-web/issues/2163)) ([#2184](https://github.com/stackriot/material-components-web/issues/2184)) ([6517750](https://github.com/stackriot/material-components-web/commit/65177505e6611e30ae9ae4b283663d70a967fb0b))
* feat(checkbox): Added theme configuration support to checkbox ([cf80012](https://github.com/stackriot/material-components-web/commit/cf800124fdaeea04b3fd45f8718a2980dd01a0df))
* feat(chips): Consolidate interaction event handlers ([#5251](https://github.com/stackriot/material-components-web/issues/5251)) ([#5301](https://github.com/stackriot/material-components-web/issues/5301)) ([5e45d77](https://github.com/stackriot/material-components-web/commit/5e45d77f3e387eff356f5ce93336d4b872c725c4))
* fix(select): Do not fire change event on programmatic change ([#5255](https://github.com/stackriot/material-components-web/issues/5255)) ([#5302](https://github.com/stackriot/material-components-web/issues/5302)) ([ad9dfe7](https://github.com/stackriot/material-components-web/commit/ad9dfe706de46d5dc131ad6615aa18f0e3b01133))


### BREAKING CHANGES

* Breaking change for the UMD-case where the exports are bound to a global variable. Previously the entry-point would appear in camel-case, but now it's matching the actual package name in dash-case. This is unfortunately not avoidable with the current Webpack tooling. i.e. previous UMD users relying on the globals (which are rather rare anyway), would need to switch from `window.mdc.circularProgress` to `window.mdc['circular-progress]`.
* **animation:** Sass variables and mixins for animation were using the Android
naming convention, which made it hard to match them up with the canonical names
used in the spec.

E.g.: "fast-out-slow-in" renamed to "standard-curve".

Spec: https://material.io/guidelines/motion/duration-easing.html
* **iconbutton:** Icon button now requires an inner ripple element with
class `mdc-icon-button__ripple`. See README for details.

PiperOrigin-RevId: 372153409
* **typography:** Renamed typography Sass function from pxToRem() to px-to-rem()

PiperOrigin-RevId: 368489085
* **fix:** the old list implementation has been deprecated and now requires that class names use an "mdc-deprecated-list-*" prefix. The new implementation (list evolution), no longer uses a prefix ("mdc-evolution-list-*" is now just "mdc-list-*").

PiperOrigin-RevId: 364441086
* **snackbar:** Dom structure change, see README.md

PiperOrigin-RevId: 363926666
* **tooltip:**   Added adapter method:
  - registerAnchorEventHandler<K extends EventType>(
      evtType: K, handler: SpecificEventListener<K>): void;
  - deregisterAnchorEventHandler<K extends EventType>(
      evtType: K, handler: SpecificEventListener<K>): void;

PiperOrigin-RevId: 358401984
* **theme:** custom-properties.apply() has been renamed to declaration() to better align with css.declaration()

PiperOrigin-RevId: 355659381
* **tooltip:**   Added adapter methods:
  - getComputedStyleProperty(propertyName: string): string;
  - getParentBoundingRect(): ClientRect|null;

PiperOrigin-RevId: 352659136
* **tooltip:**   Added adapter method:
  - tooltipContainsElement(element: HTMLElement): boolean;
Rich tooltips are currently in development and is not yet ready for use.

PiperOrigin-RevId: 346325244
* Removed `deep-get()` API from mdc-theme, use `sass:map`'s get() API instead.

PiperOrigin-RevId: 345257138
* **tooltip:**   Added adapter method:
  - anchorContainsElement(element: HTMLElement): boolean;
Rich tooltips are currently in development and is not yet ready for use.

PiperOrigin-RevId: 345221617
* **slider:** Slider is now backed by an input of type="range". Additionally, adapter methods (focusInput, isInputFocused, registerInputEventHandler, deregisterInputEventHandler) were added.

PiperOrigin-RevId: 344116908
* **tooltip:**   Added adapter methods:
  - setAnchorAttribute(attr: string, value: string): void;
  - registerEventHandler<K extends EventType>(
        evtType: K, handler: SpecificEventListener<K>): void;
  - deregisterEventHandler<K extends EventType>(
        evtType: K, handler: SpecificEventListener<K>): void;
Rich tooltips are currently in development and is not yet ready for use.

PiperOrigin-RevId: 343894231
* **slider:** Adds slider adapter methods (get/setInputValue, get/setInputAttribute, removeInputAttribute). Slider DOM structure now contains a hidden input.

PiperOrigin-RevId: 343157208
* **banner:** Added wrapper div to text/graphic for mobile friendly view, see README.md for more info.

PiperOrigin-RevId: 339496476
* **textfield:** adapter method `getAttr` added on helper text subcomponent; adapter method `setInputAttr` and `removeInputAttr` added on main component

PiperOrigin-RevId: 336694998
* **banner:** Dom structure change, see README.md

PiperOrigin-RevId: 332891202
* **select:** selected text node now needs to be wrapped in an outer `mdc-select__selected-text-container` span; see README for updated markup

PiperOrigin-RevId: 331237284
* **datatable:** Header checkboxes will now be unchecked if layout is called when there are no rows.

PiperOrigin-RevId: 329616597
* **banner:** Updated adapter to use CloseReason types

PiperOrigin-RevId: 327517664
* **checkbox:** Renamed mixin `ripple()` => `ripple-styles()` in MDC checkbox

PiperOrigin-RevId: 327036276
* **checkbox:** Renamed mixin `ripple()` => `ripple-styles()` in MDC checkbox

PiperOrigin-RevId: 326643138
* **checkbox:** Renamed mixin `ripple()` => `ripple-styles()` in MDC checkbox

PiperOrigin-RevId: 326565296
* **theme:** $ie-fallback variable has been moved and renamed to $enable-fallback-declarations in `@material/theme/css`

PiperOrigin-RevId: 325324881
* **select:** select theming mixins which were previously "stateful" (e.g. `hover-label-color()`) are combined into the non-stateful mixin (e.g. `label-color()`). The default state of the mixin can be set as normal, or a Map of states can be provided to optionally set one or more states of the mixin (e.g. `label-color((hover: blue))`). See the `@material/theme/state` package for more details.

PiperOrigin-RevId: 325314602
* **radio:** MDC radio _index Sass module will only export theme mixins

PiperOrigin-RevId: 324724042
* **textfield:** the notched outline and label should now appear before the input in the text field's DOM structure for a11y navigation

PiperOrigin-RevId: 323667270
* **slider:** This upgrades the old slider to a new version of slider that adheres to the M2 design spec. Changes include:
- M2 design (primary instead of secondary color used, larger active track and thumb, improved tick marks UI)
- Range (two-thumb slider) slider
- Pointer events support (for browsers that support pointer events)
- High contrast mode support
- Improved accessibility (follows WAI-ARIA spec for slider)
- Bug fixes

PiperOrigin-RevId: 322199406
* **circular-progress:** DOM Changed. See README for updated markup. `$default-size`, `$stroke-width`, and `$container-side-length` variables removed.

PiperOrigin-RevId: 321231651
* **snackbar:** The right padding of the label for the `mdc-snackbar--stacked` variant will now have an additional 8px

PiperOrigin-RevId: 319021332
* **data-table:** New adapter method replacing `getTableBodyHeight()` => `getTableHeaderHeight()` and changed return types of this method.

PiperOrigin-RevId: 318845959
* **button:** Removes button theme-baseline() mixin, moves mixin contents to base button Sass.

PiperOrigin-RevId: 317867315
* **select:** Added adapter methods `isTypeaheadInProgress`, `typeaheadMatchItem`

PiperOrigin-RevId: 314800139
* **select:** Added adapter method `addMenuClass`, `removeMenuClass`

PiperOrigin-RevId: 314429861
* **theme:** `color-hash()` (and checkbox container-colors mixins) no longer works with `var()` values and now only works with custom property Maps created by `custom-properties.create()`

PiperOrigin-RevId: 313825202
* **select:** added adapter method `removeSelectAnchorAttr`

PiperOrigin-RevId: 313797376
* **select:** `density` mixin split into `filled-density`, `filled-with-leading-icon-density`; `height` mixin split into `filled-height`, `filled-with-leading-icon-height`

PiperOrigin-RevId: 313641646
* **select:** dropdown icon SVG markup now has `mdc-select__dropdown-icon-graphic` class.

PiperOrigin-RevId: 313465286
* **select:** non-outlined selects now require a `mdc-select--filled` class on its root

PiperOrigin-RevId: 313235538
* **data-table:** Added a wrapper element to data table's table element to fix horizontal scrolling issue when pagination controls are added.

PiperOrigin-RevId: 312342190
* **select:** empty space around `mdc-list-item__text` spans removed in select markup

PiperOrigin-RevId: 312306749
* **textfield:** mdc-text-field-SUB_ELEMENT imports have been removed

PiperOrigin-RevId: 312205289
* **select:** adapter method removeAttributeAtIndex removed.

PiperOrigin-RevId: 312133369
* **chips:** The chip adapter and foundation interfaces have changed. Chips now use the trailing action subcomponent.

PiperOrigin-RevId: 310991928
* **textfield:** textareas must now add a `mdc-text-field__resizer` span around the textarea (and internal counter if present) if they are resizable

PiperOrigin-RevId: 310979350
* **floating-label:** all labels that are part of a required field should now add the mdc-floating-label--required class for required fields to avoid a FOUC

PiperOrigin-RevId: 310594927
* **select:** variable `$outline-disabled-border` renamed to `$disabled-outline-color`; icon variable `$icon-opacity` removed, use alpha channel of `$icon-color` instead.

PiperOrigin-RevId: 310378848
* **textfield:** textareas with internal character counters must specify the `mdc-text-field--with-internal-counter` class. Character counters should move after the textarea element.

PiperOrigin-RevId: 309652879
* **select:** helper text now persistent by default, `mdc-select-helper-text--persistent` removed

PiperOrigin-RevId: 309485352
* **select:** DOM structure for dropdown icon changed; `$dropdown-color` renamed to `$dropdown-icon-color`, `$dropdown-opacity` removed, `$disabled-dropdown-opacity` removed.

PiperOrigin-RevId: 309450834
* **button:** Correct misspelling of overflow for button's label-overflow-ellipsis mixin

PiperOrigin-RevId: 308612698
* **button:** Correct misspelling of overflow for button's label-overflow-ellipsis mixin

PiperOrigin-RevId: 308602086
* **select:** `mdc-menu--fullwidth` class replaces custom width class for the menu markup in select

PiperOrigin-RevId: 308358555
* **textfield:** mdc-text-field--textarea must now include mdc-text-field--outlined modifier class

PiperOrigin-RevId: 308161624
* **select:** root of mdc-select is now an inline-block element, use custom width class (i.e. `demo-width-class`) on the root instead of the anchor for width adjustments; alternately, use the new `mdc-select--fullwidth` on the root to expand width to that of its parent container

PiperOrigin-RevId: 308144318
* **select:** HTML Markup significantly changed, see README; REMOVED adapter methods `isSelectedTextFocused`, `getSelectedTextAttr`, `setSelectedTextAttr`; ADDED adapter methods `isSelectAnchorFocused`, `getSelectAnchorAttr`, `setSelectAnchorAttr`; removed variables `outlined-dense-label-position-y`, `icon-padding`; added variables `minimum-height-for-filled-label`, `filled-baseline-top`, `selected-text-height`, `anchor-padding-left`, `anchor-padding-left-with-leading-icon`, `anchor-padding-right`.

PiperOrigin-RevId: 307906127
* **textfield:** Default textfields must now specify mdc-text-field--filled. Disabled outlined textfields no longer have a shaded background. Height mixin no longer specifies a baseline override, use typography's baseline-top mixin.

PiperOrigin-RevId: 307134283
* **textfield:** mdc-text-field--dense and associated mixins/variables have been removed. Use the density() mixin instead.

PiperOrigin-RevId: 301426122
* **textfield:** removed the following variables: `$input-padding`, `$input-padding-top`, `$input-padding-bottom`, `$outlined-input-padding-top`, `$outlined-input-padding-bottom`, `$input-border-bottom`

PiperOrigin-RevId: 300259065
* **linear-progress:** DOM for linear progress buffer changed. MDCLinearProgressAdapter method `getBuffer`, `getPrimaryBar`, `setStyle` removed. MDCLinearProgressAdapter method `setBufferBarStyle`, `setPrimaryBarStyle` added.

PiperOrigin-RevId: 299133963
* **linear-progress:** DOM for linear progress buffer changed. MDCLinearProgressAdapter method `getBuffer`, `getPrimaryBar`, `setStyle` removed. MDCLinearProgressAdapter method `setBufferBarStyle`, `setPrimaryBarStyle` added.

PiperOrigin-RevId: 298645833
* **typography:** `typography.baseline-top()` and `typography.baseline-bottom()` are now private. Use `typography.baseline()` for containers and `typography.text-baseline()` for text with $top and $bottom params.

PiperOrigin-RevId: 297926710
* **chips:** The touch target and text now appear inside the primary action element. Please see the readme for markup changes.

PiperOrigin-RevId: 294259413
* **textfield:** filled text fields must include a `<div class="mdc-text-field__ripple"></div>`

PiperOrigin-RevId: 292641405

Co-authored-by: Material Web Copybara Robot <59487319+material-web-copybara@users.noreply.github.com>
* **textfield:** Filled textfields will no longer show a floating label at certain densities. This can be overridden by setting `$mdc-text-field-minimum-height-for-filled-label: 40px`
* **chips:** Both `MDCChipAdapter` and `MDCChipSetAdapter` have new methods. `MDCChipSetFoundation` event handlers now accept the corresponding chip event detail interface as the sole argument. The `root` property has been removed from the `MDCChipRemovalEventDetail` interface.
* **line-ripple:** `mdc-line-ripple-color()` mixin has been renamed to `mdc-line-ripple-active-color()`
* **grid-list:** Per the deprecation notice for grid-list, this component has been
removed from MDC-Web. Some of its functionalities are available in the MDC Image List package instead. It is recommended that you migrate to the mdc-image-list package to continue to receive new features and updates.
* Four variables and a mixin in mdc-textfield were renamed to use a mdc-text-field- prefix when depended on via @import (formerly mdc-required-text-field-label-asterisk_, now required-label-asterisk_).
* **textfield:** icons must use `.mdc-text-field__icon--leading` or `.mdc-text-field__icon--trailing` classes. `mdc-text-field-icon-color()` mixin has been split into `mdc-text-field-leading-icon-color()` and `mdc-text-field-trailing-icon-color()`.

* chore(textfield): use --leading/trailing modifiers for icons

* chore(textfield): docs typo

* chore(textfield): revert hover fix

* chore(textfield): fix unclosed css block

* chore(textfield): separate position mixins for leading/trailing icons

* chore(textfield): restore two-icons position mixin

* chore(textfield): update component test with icon classes

* chore(textfield): update foundation test for preventDefault error
* **switch:** Added setNativeControlAttr method in mdc-switch adapter.
* **checkbox:** remove event listener for 'change' and add event listener for 'click'.

- Add handleClick() method in foundation to handle click event.
- Add setCheck() method into component to change check status.
* **switch:** Switch DOM structure has changed. See switch README for details
* **button:** Variable `$mdc-button-disabled-container-fill-color`
renamed to `$mdc-button-disabled-container-color`.
* Removed `$edgeOptOut` option from `mdc-theme-prop()` Sass mixin.
* **chips:** the handleInteraction and handleTrailingIconInteraction handlers have been removed from the MDCChipFoundation. The handleClick handler has been added to the MDCChipFoundation
* Adds new adapter methods to MDCLinearProgressAdapter.
* **elevation:** Functions moved into the _functions.scss file
* **touchtarget:** Renames mixin from mdc-touch-target-component => mdc-touch-target-margin
* **text-field:** Redundant mixins `mdc-text-field-textarea-fill-color`, `mdc-text-field-textarea-stroke-color`, `mdc-text-field-fullwidth-bottom-line-color` removed. Instead, use `mdc-text-field-fill-color`, `mdc-text-field-outline-color`, and `mdc-text-field-bottom-line-color` respectively to achieve the same effect.
* **checkbox:** `mdc-checkbox-ink-color` mixin now only applies to enabled checkboxes
* **linear-progress:** MDCLinearProgressAdapter adapter has new `forceLayout` method
* **select:** In MDCMenu and MDCMenuSurface, `hoistMenuToBody` adapter method removed.  In MDCSelect, HTML structure changed: the select anchor is now wrapped in a parent element, and the anchor's sibling is the select menu. Support for native select removed. Support added for select with no label. MDCSelectAdapter methods removed: `getValue`, `setValue`, `isMenuOpen`, `setSelectedIndex`, `checkValidity`, `setValid`, `toggleClassAtIndex`. MDCSelectAdapter methods added: `hasLabel`, `getSelectedMenuItem`, `setSelectedText`, `isSelectedTextFocused`, `get/setSelectedTextAttr`, `getAnchorElement`, `setMenuAnchorElement`, `setMenuAnchorCorner`, `setMenuWrapFocus`, `set/removeAttributeAtIndex`, `focusMenuItemAtIndex`, `getMenuItemValues`, `getMenuItemCount`, `getMenuItemCount`, `getMenuItemAttr`, `getMenuItemTextAtIndex`, `add/removeClassAtIndex`. MDCSelectFoundation `setValue` method removed; `getDisabled`, `handleMenuItemAction`, `getSelectedIndex`, `get/setRequired`, `init` added.
* **radio:** In Checkbox, Renamed sass variables `$mdc-radio-touch-area` => `$mdc-radio-ripple-size` & `$mdc-radio-ui-size` => `$mdc-radio-icon-size` to be consistent with checkbox. Also, removed `$mdc-radio-ui-pct` sass variable.
* **switch:** Renames switch variables $mdc-switch-tap-target-size => $mdc-switch-ripple-size, removes $mdc-switch-tap-target-initial-position and $mdc-switch-native-control-width.
* **list:** New adapter method listItemAtIndexHasClass
* **list:** Renamed mixin `mdc-list-item-shape-radius()` => `mdc-list-single-line-shape-radius()`
* **density:** Renamed sass mixins & variables in MDC Data Table - `mdc-data-table-header-row-height` => `mdc-data-table-header-cell-height` & `mdc-data-table-row-height` => `mdc-data-table-cell-height`. Also removed `mdc-button--dense` variant, use button's density mixin instead.
* **text-field:** Removed sass variable in notched outline - `$mdc-notched-outline-transition-duration`.
* **mdc-fab:** This changes the structure of the FAB element by moving the ripple from the outer element to an inner mdc-fab__ripple element.

OLD

```html
<button class="mdc-fab" aria-label="Favorite">
  <span class="mdc-fab__icon material-icons">favorite</span>
</button>
```

NEW

```html
<button class="mdc-fab" aria-label="Favorite">
  <div class="mdc-fab__ripple"></div>
  <span class="mdc-fab__icon material-icons">favorite</span>
</button>
```
* **radio:** Ripple has been moved to a child element. See readme for updates.
* **slider:** remove adapter methods `appendTrackMarkers`, `removeTrackMarkers `, `setLastTrackMarkersStyleProperty `, and add adapter method `setTrackMarkers`.
* **button:** This changes the structure of the button element by moving the ripple from the outer <button> element to an inner `mdc-button__ripple` element.

OLD
```
<button class="mdc-button">
  <span class="mdc-button__label">Hello World</span>
</button>
```

NEW
```
<button class="mdc-button">
  <div class="mdc-button__ripple"></div>
  <span class="mdc-button__label">Hello World</span>
</button>
```
* **chips:** MDCChipSetAdapter#removeChip has been replaced with MDCChipSetAdapter#removeChipAtIndex. MDCChipSetAdapter#setSelected has been replaced with MDCChipSetAdapter#selectChipAtIndex
* **chips:** Chips markup, adapters, foundations, and events have changed.
* **tabs:** removed deprecated mdc-tabs package.
* **menu:** The following adapter methods were removed: isFirstElementFocused, isLastElementFocused, focusFirstElement, focusLastElement. The following functionality to handle TAB on menusurface has been removed: "If TAB and last element is focused => Focus on first element", "If SHIFT + TAB and first element is focused => Focus on last element"
* **chips:** Add the setAttr method to the chip adapter.
* **top-app-bar:** Replaced adapter methods getParentElement, getSelectedElementIndex with getSelectedSiblingOfItemAtIndex, isSelectableItemAtIndex.
* **dialog:** Dialog Adapter#getInitialFocusEl has been added and Adapter#trapFocus first argument is now the initialFocusEl.
* **checkbox:** Removed `$mdc-checkbox-ui-pct` sass variable from `MDCCheckbox`
* **menu:** Replaced adapter methods getParentElement, getSelectedElementIndex with getSelectedSiblingOfItemAtIndex, isSelectableItemAtIndex.
* **dialog:** Dialog `Foundation#handleInteraction` has been split into two methods: `#handleClick` and `#handleKeydown`.
* **chips:** Update mdc-chip-leading-icon-margin and mdc-chip-trailing-icon-margin mixins signatures to take only left and right margin values.
* **menu:** The following adapter methods were removed: isFirstElementFocused, isLastElementFocused, focusFirstElement, focusLastElement. The following functionality to handle TAB on menusurface has been removed: "If TAB and last element is focused => Focus on first element", "If SHIFT + TAB and first element is focused => Focus on last element"
* **chips:** Add the setAttr method to the chip adapter.
* **top-app-bar:** Replaced adapter methods getParentElement, getSelectedElementIndex with getSelectedSiblingOfItemAtIndex, isSelectableItemAtIndex.
* **dialog:** Dialog Adapter#getInitialFocusEl has been added and Adapter#trapFocus first argument is now the initialFocusEl.
* **checkbox:** Removed `$mdc-checkbox-ui-pct` sass variable from `MDCCheckbox`
* **menu:** Replaced adapter methods getParentElement, getSelectedElementIndex with getSelectedSiblingOfItemAtIndex, isSelectableItemAtIndex.
* **dialog:** Dialog `Foundation#handleInteraction` has been split into two methods: `#handleClick` and `#handleKeydown`.
* **chips:** Update mdc-chip-leading-icon-margin and mdc-chip-trailing-icon-margin mixins signatures to take only left and right margin values.
* **menu:** New adapter methods to MDC List: `isRootFocused`. MDC Menu: Replaced adapter methods `isRootFocused`, `focusRoot` with `focusListRoot`. When using MDC List inside MDC Menu `tabindex` should be set on list root element where `role="menu"` is assigned.
* **list:** MDCList's `listElements` component API now includes disabled list items which previously returned only enabled list items.
* **menu:** Focus is no more set to first menu item when menu is opened. Introduced new API (`setDefaultFocusItemIndex()`) to set focus on specific menu item every time the menu is opened. Also introduced new foundation & adapter methods to incorporate this change. Please use `setDefaultFocusItemIndex(0)` method before menu open to retain previous behaviour.
* `$mdc-top-app-bar-prominent-dense-title-bottom-padding` is renamed to `$mdc-top-app-bar-dense-prominent-title-bottom-padding`
* **list:** removed #adapter.removeAttributeForElementIndex
* The previously deprecated mdc-icon-toggle package has been removed; use mdc-icon-button instead.
* **animation:** The `transformStyleProperties` array export has been removed from `mdc-animation`. Please use `getCorrectPropertyName(window, 'transform')` instead.
* **ripple:** `getMatchesProperty()` has been removed from `@material/ripple/util` and `@material/tab-scroller/util`. Use `matches()` from `@material/dom/ponyfill` instead.
* **feature-targeting:** The main mixins recently introduced to some packages in in v0.44.0 have been renamed from `mdc-foo` to `mdc-foo-core-styles`. (Importing baseline styles via `mdc-foo.scss` remains unaffected.)
* **list:** The default `MDCListAdapter.notifyAction()` implementation now emits an object of type `{index: number}` rather than a primitive `number` directly.
* **menu-surface:** `MDCMenuSurfaceAdapter.setPosition()` now expects an object with properties of type `number` rather than `string`. E.g., `setPosition({top: '5px', left: '10px'})` is now `setPosition({top: 5, left: 10})`.
* **menu:** Replaced menu's foundation methods `handleClick` and `handleSelection` with `handleItemAction` to handle list item action (i.e., list's custom event `MDCList:action`)
* **list:** Introduced new adapter method `getAttributeForElementIndex` to determine if target list item has `href` attribute and removed `followHref` adapter API.
* **chips:** Adds 3 new chips adapter methods: hasLeadingIcon, getRootBoundingClientRect, and getCheckmarkBoundingClientRect. Also adds a new foundation method: getDimensions.
* **list:** Introduced new adapter `isFocusInsideList` for MDC List for improved accessibility.
* **snackbar:** Snackbar's DOM and APIs have changed to match the latest design guidelines. See the Snackbar documentation for more information.
* **button:** We recommend placing each button's text label within a mdc-button__label element. This does not immediately break existing MDC Button usage, but updating is recommended to future-proof against potential upcoming changes.
* **tab:** MDCTabBar#getIndexOfTab(tab: MDCTab): boolean is now MDCTabBar#getIndexOfTabByID(id: string): boolean
* **notched-outline:** The notched outline has been changed from using an SVG for the outline to using 3 div elements. This approach resolves initial rendering issues as well as inconsistencies between the different types of outlines. Please refer to the Readme or the screenshot test pages for details and examples.
* **checkbox:** The component is now responsible for calling MDCCheckboxFoundation#handleChange when the checked and indeterminate properties change.
* **list:** Replaced toggleCheckbox adapter method with setCheckedCheckboxOrRadioAtIndex and added 3 more new adapter methods for improved accessibility.
* **fab:** Fab now has 2 separate mixins - `mdc-fab-shape-radius` for regular / mini Fab variants & `mdc-fab-extended-shape-radius` for Extended FAB variant.
* **select:** Several adapter APIs were added to support the enhanced variant. The drop-down arrow is now its own element. The change event is now MDCSelect:change for all variants. See the README for full details.
* **radio:** Removed getNativeControl from adapter, and subsequent foundation methods that called getNativeControl. Foundation methods removed: isChecked, setChecked, isDisabled, getValue, setValue.
* **checkbox:** Renamed old checkbox theme mixin for deprecation

PiperOrigin-RevId: 384568221
* **chips:** deselect and toggleSelect are private methods. handleChipInteraction and handleChipRemoval now accept chipId instead of an event.
* Anyone intending to build MDC Web's ES2015+ sources must directly import @material/foo/index. @material/foo will now resolve to UMD modules.
* **shape:** The previous contents of the mdc-shape package have been removed and replaced with mixins implementing the Shape system. This system implements only rounded corners to provide a straightforward CSS-only solution. Replaced all *-corner-radius component mixins with *-shape-radius mixins to integrate with Shape system.
* **dialog:** MDCDialog has been reimplemented to support more use cases, so APIs and the DOM structure have changed. See the mdc-dialog README for more information.
* **text-field:** Component API's for interacting with icons has changed. Please refer to the documentation. 
* **checkbox:** Remove foundation methods for set/get indeterminate, value, disabled. Add adapter methods: isIndeterminate, isChecked, hasNativeControl, setNativeControlDisabled. 
* **drawer:** Drawer variants have new DOM structure, mixins, and JS. MDCPersistentDrawer and MDCTemporaryDrawer components are replaced with a single MDCDrawer component which supports both.
* **list:** Please update calls to MDCListFoundation.handleKeydown to pass in isRootListItem and listItemIndex, and update both MDCListFoundation.handleFocusIn, MDCListFoundation.handleFocusOut to pass in listItemIndex
* **text-field:** This PR removes the margin-top from the mdc-text-field container. This can cause a UI to shift/change. 
* **checkbox:** Event registration adapter APIs have been removed and are now the responsibility of the component.
* **list:** Adds a followHref adapter API.
* **text-field:** Removes the default version of the text field and changes the new default variant to be the `--box` variant. Changes the box-sizing to border-box. 
* **tab-bar:** `getActiveTabIndex` adapter method renamed and `setActiveTab` adapter method added.
* **tab:** We've removed the `computeIndicatorClientRect` method from `MDCTabFoundation`
* **switch:** We've removed the `isChecked` and `isDisabled` methods from `MDCSwitchFoundation`. Please update any call to `MDCSwitchFoundation.handleChange` so it passes in the change event. And note that `isNativeControlChecked` and `isNativeControlDisabled` are no longer required methods in `MDCSwitchAdapter` 
* **tab-indicator:** Removes handleTransitionEnd foundation API. Removes [de]registerEventHandler adapter APIs.
* **menu:** Menu positioning logic has been split into its own package (mdc-menu-surface). mdc-menu is rebuilt to use mdc-menu-surface and mdc-list styles and JavaScript.
* **text-field:** The `mdc-text-field--upgraded` class has been removed. `mdc-text-field__input` position has changed by 2px to match spec. `mdc-text-field--textarea` width in IE and Edge now matches other browsers.

### What it does
* **tab:** Removes handleTransitionEnd foundation API. Removes [de]registerEventHandler adapter APIs. Event registration is now the component's responsibility.
* **icon-button:** Removes the previous data attributes and no longer dynamically changes the label. Allows developers to add both elements to the button, with one indicated as the on state by using a data-toggle-on attribute. State is now changed by adding/removing the mdc-icon-button--on class to the mdc-icon-button element. All icon elements should have the mdc-icon-button__icon class.
* **tab-bar:** Adds focusTabAtIndex and getFocusedTabIndex MDCTabBarAdapter APIs; adds focus MDCTab component API used by MDCTabBar.
* **typography:** Helper text and MDC List two-line text that uses new typography baseline mixin should strip the white-space.
* **chips:** `MDCChip` takes an `id`, no longer exposes its `foundation`, and has `selected` as a property. Custom event details require a `chipId` instead of `chipFoundation`. New methods added to `MDCChipSetAdapter` and `MDCChipSetFoundation`.
* **text-field:** Removed bottom margin from both text field and helper text.
* **snackbar:** Adds a new adapter method that is required `isFocused`. 
* **text-field:** Setting the validity state using `setValid` no longer ignores native input validation. New API `useNativeValidation` is introduced to enable / disable native validation for custom validity.
* **tab-bar:** mdc-tabs is deprecated and no longer bundled in the material-components-web package. You are encouraged to use the new mdc-tab-bar and related packages instead.
* **switch:** MDC Switch DOM structure and Sass APIs have changed, and JavaScript APIs have been added. See the documentation for more information.
* **icon-button:** Removed some adapter APIs (registerInteractionHandler, deregisterInteractionHandler) and shifted responsibility of event handling out of the foundation and into the component.
* **select:** Removed some adapter APIs (setDisabled, setSelectedIndex, getSelectedIndex, setValue, registerInteractionHandler, deregisterInteractionHandler) and shifted responsibility of event handling and programmatic select element updates out of the foundation and into the component.
* **chips:** `MDCChip`/`MDCChipSet` registerEventHandler adapter methods were removed, and corresponding handlers were made public in `MDCChipFoundation`/`MDCChipSetFoundation`.
* **chips:** MDCChipSet/MDCChip no longer manipulates DOM directly. Removed MDCChipSetAdapter.appendChip, MDCChipSetFoundation.addChip, and MDCChip.remove. Modified signature of MDCChipSet.addChip
* **text-field:** Adds setContent adapter API to text field icon
* **icon-toggle:** The icon-toggle package has been deprecated. The functionality was moved to the icon-button package. Please refer to the icon-button readme for changes and how to update.
* **text-field:** registerValidationAttributeChangeHandler adapter API now expects the handler to accept an array of strings, not mutation objects
* **chips:** Renames variant, classes and mixins containing the word stroke to use the word outline.
* **shape:** Renames variant, classes and mixins containing the word stroke to use the word outline.
* **card:** Renames variant, classes and mixins containing the word stroke to use the word outline.
* **button:** Renames variant, classes and mixins containing stroke to use outline.
* **chips:** Entry chips renamed to input chips.
* **chips:** Add Sass mixins to customize color and size of leading/trailing icons.
* **chips:** Get rid of mdc-chip__icon--remove API.
* **text-field:** Adds getAttr adapter API to text field icon
* **chips:** Add API for remove icon including mdc-chip__icon--remove, remove() method and adapter methods to MDCChip. Modify appendChip() and add removeChip() adapter method to MDCChipSet.
* **floating-label:** Removes the (undocumented) mdc-floating-label-transition function
* **text-field:** Adds removeAttr(attr) adapter API
* **theme:** Removes the --mdc-theme-text-<TEXT_STYLE>-on-<THEME_COLOR> CSS custom properties, and the mdc-theme--text-<TEXT_STYLE>-on-<THEME_COLOR> CSS classes
* **chips:** layout() method added to MDCChipAdapter.
* **typography:** Previous typography styles are removed. The new styles are listed in the readme. 
* **top-app-bar:** New adapter methods for setting the top app bar position and adding resize event handlers that must be implemented. 
* **chips:** Added a new chip variant (entry chips). Added new methods to MDCChipSet, MDCChipSetFoundation, and MDCChipSetAdapter.
* **chips:** isSelected method added to MDCChip, and related methods added to MDCChipFoundation and MDCChipSetFoundation.
* **chips:** Expose a foundation getter in MDCChips 
* **select:** The template and adapter APIs have changed to take advantage of the native select element; see the MDC Select README for more information.
* **typography:** Removes the `mdc-typography--adjust-margin` CSS class and the `mdc-typography-adjust-margin` Sass mixin
* **theme:** Removes styles for `mdc-theme--primary/secondary-light/dark` CSS classes and the `mdc-theme-light/dark-variant` Sass functions
* **notched-outline:** Renamed `mdc-text-field-outlined-corner-radius` to `mdc-text-field-outline-corner-radius`. Made `updateSvgPath_()` private in notched-outline foundation and replaced it
with `notch()`. Renamed `updateOutline()` in text-field foundation to `notchOutline()`.
* **notched-outline:** removed mdc-text-field__outline element for mdc-notched-outline.
Renamed mdc-text-field-outlined-corner-radius to mdc-text-field-outline-corner-radius.
* **chips:** renamed (de)registerInteractionHandler to (de)registerEventHandler and added multiple new methods to MDCChipAdapter. Also changed HTML structure of filter chips to include checkmark.
* **checkbox:** Adds setNativeControlAttr and removeNativeControlAttr adapter APIs.
* **button:** The compact variant of MDC Button is removed.
* **text-field:** removed setRequired and isRequired from foundation.
* **chips:** The `mdc-chip--activated` class, `mdc-chip-activated-ink-color` Sass mixin, and the `toggleActive` methods on `MDCChip`/`MDCChipSet` have been renamed to `mdc-chip--selected`, `mdc-chip-selected-ink-color`, and `toggleSelected`, respectively.
* **floating-label:** must use `.mdc-floating-label` selector instead of `.mdc-text-field__label`
* **chips:** Added `mdc-chip-set--filter` as a variant to be set in the HTML.
* **chips:** New MDCChipAdapter methods for handling trailing icons must be implemented.
* **chips:** MDC Chips has new Sass mixins.
* **theme:** deleted `mdc-theme-light-or-dark` and `mdc-theme-dark`
* **menu:** Removes the `eventTargetHasClass` from the adapter.

Previously clicks on a list-item in the page would leave the menu open.
Now we check if a item in this menu was clicked and leave the menu open.
* **ripple:** Adds `containsEventTarget(target)` API to the ripple adapter.
* **chips:** A new package `mdc-chip` has been added.
* **text-field:** Moves the text-field bottom-line element to a new package (mdc-line-ripple), so we can reuse it in other components. The HTML class name for the bottom-line element has changed from mdc-text-field__bottom-line to mdc-line-ripple. Removes the animation end events from the bottom-line. Renames the bottom-line to line-ripple. 
* **select:** Removes the CSS version of the mdc-select element. 
* **list:** renamed divider sass vars

`$mdc-list-divider-color-light` to `$mdc-list-divider-color-on-light-bg`,
`$mdc-list-divider-color-dark` to `$mdc-list-divider-color-on-dark-bg`
* **slider:** removed `$mdc-slider-dark-theme-assumed-bg-color` from
slider variables.
* **ripple:** mdc-ripple-radius is replaced by mdc-ripple-radius-bounded and mdc-ripple-radius-unbounded; use one or the other as appropriate for the surface. The default 100% value of the unbounded mixin now results in a smaller, more appropriate radius.
* **card:** All CSS classes for content layouts have been removed. Clients should decide what kind of layout is best for their specific use case. Dark theme CSS classes have been removed; use the Sass mixin or custom CSS instead.
* **checkbox:** all checkboxes need to update the SVG path's class from
`mdc-checkbox__checkmark__path` to `mdc-checkbox__checkmark-path`.
* **menu:** Renames MDCSimpleMenu to MDCMenu. Renames all mdc-simple-menu classes to mdc-menu. JS and SASS file paths for the menu have changed. 
* **tabs:** removal of .mdc-toolbar selector forces clients to
customize tab-bars within toolbars that require a different ink color.
* **tabs:** removal of .mdc-toolbar selector forces clients to
customize tab-bars within toolbars that require a different ink color.
* **text-field:** Removes the css only version of the text-field component. 
* **tabs:** all css-only mdc-tab elements must have a .mdc-tab__indicator
child element
* **select:** Move colors for default select element to mixins. Refer to the documentation for guidance. 
* **text-field:** Moves color customization of the outline text-field to SASS mixins.
* **select:** Removes mdc-multi-select from the mdc-select package. Use lists to create components that allow multiple items to be selected.
* **demos:** Sass source maps and hot reloading no longer work on demo pages. We can address those issues in future PRs if they become a problem. In addition, the `MDC_WRAP_CSS_IN_JS` env var now defaults to `false`.

This change:

1. Makes it possible to dynamically switch themes at runtime (follow-up PR)
2. Fixes the FOUC on all demo pages
3. Fixes sporadic rendering errors on all demo pages that call `getComputedStyle()` on page load (e.g., ripple)
4. Allows us to remove CSS polling from our demo JS (follow-up PR)
5. Reduces Chrome devtools memory leaks after hot reloading
* **text-field:** Text field outline adapter now must implement the `getIdleOutlineStyleValue` method previously implemented in the text field adapter. The functionality is exactly the same and requires only small changes to accessing the outline node.
* **menu:** Removes 5 adapter methods and adds a new setMaxHeight adapter method; adds anchor positioning API to menu foundation; see README for details. 
* **text-field:** - The return type for `MDCTextFieldAdapter.getNativeInput()` has changed. See the 'NativeInputType` typedef in the adapter.
- MDCTextFieldLabelFoundation has removed:
  - `floatAbove`
  - `deactivateFocus`
  - `setValidity`
- They are replaced with methods for updating the label float and label shake styles:
  - `styleFloat`
  - `styleShake`
* **ripple:** `registerDocumentInteractionHandler ` and `deregisterDocumentInteractionHandler` APIs have been added to the ripple adapter.
* **elevation:** The `mdc-elevation-transition` mixin has been removed, and the `mdc-elevation-transition-rule` function has been renamed to `mdc-elevation-transition-value`, which should be used instead.
* **text-field:** Please implement `hasClass` method on MDCTextFieldAdapter, and change `getFloatingWidth` method to `getWidth` on MDCTextFieldLabelFoundation.
* **drawer:** Renamed `mdc-permanent-drawer` CSS class to `mdc-drawer--permanent`, renamed `mdc-temporary-drawer` CSS class to `mdc-drawer--temporary`, and renamed `mdc-persistent-drawer` to `mdc-drawer--persistent`. Also renamed all subelement classes by removing the variant from the selectors. Example:

```
mdc-persistent-drawer__drawer --> mdc-drawer__drawer
mdc-persistent-drawer__toolbar-spacer --> mdc-drawer__toolbar-spacer
mdc-temporary-drawer__header --> mdc-drawer__header
mdc-temporary-drawer__header-content --> mdc-drawer__header-content
mdc-permanent-drawer__content --> mdc-drawer__content
```
* **textfield:** Added isFocused() to Text Field adapter
* **select:** JS-enhanced Select should now apply tabindex to the surface element instead of the root element. The adapter APIs related to focus, interaction handling, and tabbability now operate on the surface element instead of the root element.
* **ripple:** The mdc-ripple-color mixin is removed; use the mdc-states-* mixins instead.
* **text-field:** Public method `layout()` and adapter methods `getIdleOutlineStyleValue()` and `isRtl()` were added to MDCTextField. Added a new subcomponent MDCTextFieldOutline, and adapter method `getWidth()` to MDCTextFieldLabel. 
* **text-field:** Remove `setIconAttr`, `eventTargetHasClass` and `notifyIconAction` from `MDCTextFieldAdapter` implementations.
* **drawer:** the "mdc-...-drawer--selected" classes are replaced by "mdc-list-item--activated", as it pertains to a specific list item and not the entire drawer.
* **menu:** the "mdc-simple-menu--selected" class is replaced by "mdc-list-item--selected", as it pertains to a specific list item and not the entire menu.
* **list:** List padding is now per-item rather than across the entire list. Separators now span the entire list width by default, with the addition of a mdc-list-divider--padded modifier class to achieve the old default behavior.
* **theme:** `$mdc-theme-primary-tone` and friends have been removed. We now use a private function instead.
* **ripple:** Please update all components which use MDC Ripple to import the new /common file
* **list:** `__start-detail` has been renamed to `__graphic`, and `__end-detail` has been renamed to `__meta`. In addition, meta data tiles no longer have a default width/height (fixes #1644).

Also:
- Format mdc-list README
- Capitalize headings in mdc-list README and demo
* **icon-toggle:** The `--primary` and `--accent` CSS modifier classes have been removed in favor of the new mixin.
* **text-field:** Remove `addClassToLabel` and `removeClassFromLabel` from `MDCTextFieldAdapter` implementations.
* **select:** Adds several adapter methods to facilitate the new UX styles. Changes DOM requirements. Refer to https://github.com/material-components/material-components-web/blob/master/packages/mdc-select/README.md for new implementation requirements.
* **text-field:** Please update implementations of MDCTextField to pass in a map of subfoundations to the MDCTextFieldFoundation constructor. Methods getBottomLineFoundation() and getHelperTextFoundation() are no longer in MDCTextFieldAdapter. See the README for mdc-textfield/input for more information.
* **button:** The $mdc-*-button-ripple-opacity variables have been removed, as these values are now available via the state opacity maps in mdc-ripple.
* **drawer:** Adds eventTargetHasClass method to the temporary drawer adapter API.
* **list:** The `mdc-list-item__text__secondary` class was renamed to `mdc-list-item__text-secondary` to follow BEM conventions. See the [BEM FAQ](http://getbem.com/faq/#css-nested-elements) for more details.
* **menu:** Adds an adapter method eventTargetHasClass to check if a given event target has a given class
* **text-field:** Please update implementations of MDCTextFieldAdapter to implement the method getHelperTextFoundation. MDCTextFieldAdapter no longer implements addClassToHelperText, removeClassFromHelperText, helperTextHasClass,  setHelperTextAttr, removeHelperTextAttr, and setHelperTextContent. See the README for mdc-textfield/helper-text for more information.
* **textfield:** Adds adapter method to set helper text content.
* **text-field:** Please update implementations of MDCTextFieldAdapter to implement the methods registerBottomLineEventHandler, deregisterBottomLineEventHandler, and getBottomLineFoundation. See the README for mdc-textfield/bottom-line for more information.
* **text-field:** Instances of "helptext" in mdc-textfield/adapter.js has changed to "helperText", and users should update their implementations of the adapter.
* **linear-progress:** The `mdc-linear-progres--accent` modifier class has been removed. Use Sass color mixins instead.
* **slider:** The `mdc-slider--off` modifier class has been removed as it is being removed from the spec.
* **text-field:** CSS class name "mdc-textfield" is changed to "mdc-text-field", JS objects name "MDCTextfield" is changed to "MDCTextField", .scss file names "mdc-textfield.scss" is changed to "mdc-text-field.scss", global namespace "mdc.textfield" is changed to "mdc.textField". Note that the package name is unchanged.
* **ripple:** The existing MDC Ripple Sass mixins mdc-ripple-base, mdc-ripple-fg, and mdc-ripple-bg have been removed, replaced by the new easier-to-use mixins mdc-ripple-surface, mdc-ripple-color, and mdc-ripple-radius.
* **radio:** The mdc-radio-ripple mixin has been removed; use mdc-ripple-color directly.
* **fab:** The mdc-fab-ripple mixin and $mdc-fab-light-ripple-config variable have been removed; use MDC Ripple's mdc-ripple-color mixin and opacity variables directly.
* **checkbox:** The mdc-checkbox-ripple mixin has been removed; use mdc-ripple-color directly.
* **button:** The mdc-button-ripple mixin has been removed; use mdc-ripple-color directly.
* **theme:** _color_palette.scss has been renamed to _color-palette.scss in mdc-theme
* Please update `mdc-toolbar__icon--menu` to `mdc-toolbar__menu-icon`
* **textfield:** DOM change to add a bottom line element. Adapter API changes to consolidate event handlers. Renamed multi-line text field to textarea.
* **snackbar:** Removed the dependency of mdc-button from DOM structure of snackbar.
* **button:** Remove support of `mdc-button--primary` and `mdc-button--accent` modifier classes. For custom and theme button implementation, use button mixins instead. See `demos.scss` for details.
* **fab:** Removes mdc-fab--plain, please update your code to use mdc-fab-accessible mixin instead.
* **animation:** Removes mdc-animation mixins and CSS classes, please reference mdc-animation Sass variables directly.
* **fab:** Removes styles for disabled FABs, as FABs were not designed to be disabled.
* **dialog:** Adds a new adapter method, layoutFooterRipples, to allow the foundation to
communicate with ripples when the dialog's opening transition ends.
* **animation:** We previously didn't distinguish between "temporary" and "permanent" exits in mdc-animation. However, the timing function we were using was actually that of "permanent", so we should rename the function to reflect that. This will also allow us to add "temporary" exit in the future.

https://material.io/guidelines/motion/movement.html#movement-movement-in-out-of-screen-bounds
* **shape:** Renamed shape global variables from `$mdc-shape-*-surface-radius` to `$mdc-shape-*-component-radius`





# [11.0.0](https://github.com/material-components/material-components-web/compare/v10.0.0...v11.0.0) (2021-04-15)


### Bug Fixes

* **banner:** Use role alertdialog. ([a07b6d4](https://github.com/material-components/material-components-web/commit/a07b6d486a7852a2089c9c13d5cf80d4ab65a425))
* **button:** add missing feature-targeting import ([71fe9a0](https://github.com/material-components/material-components-web/commit/71fe9a067878c810fe6a7d01b8e839764d7a802c))
* **button:** Fixed button's icon size scaling on browser zoom ([bc104ba](https://github.com/material-components/material-components-web/commit/bc104bae7c4e1bbcbedb085e6079432f06865cbf))
* **chips:** Expose deprecated resources in top-level TypeScript file ([67d780c](https://github.com/material-components/material-components-web/commit/67d780c795e2a61772f5d1639c202ced3fbc4dc4))
* **chips:** Fix incorrect references between deprecated and non-deprecated resources ([f8579b7](https://github.com/material-components/material-components-web/commit/f8579b7eaa22bf9da04ea5e4ec27418e001a0813))
* **chips:** Make chips wrap by default ([24255c4](https://github.com/material-components/material-components-web/commit/24255c408518dff48ed59c2529ee3d0496d6b40c))
* **chips:** Remove obsolete chips resources now in chips/deprecated/* ([87ac2fd](https://github.com/material-components/material-components-web/commit/87ac2fd5ca4ec7814216d16a0b0ef6a4474d7e92))
* **chips:** Remove obsolete resources ([40dd242](https://github.com/material-components/material-components-web/commit/40dd242d5ce4586002a8e5cb59ce2711572f1cf3))
* **chips:** rename deprecated trailing action classes ([48f4b67](https://github.com/material-components/material-components-web/commit/48f4b67fbd0d43377670673e56cb5868b3a11e1d))
* **chips:** Un-remove obsolete chips resources now in chips/deprecated/* ([7cf6782](https://github.com/material-components/material-components-web/commit/7cf67823ec45a93f5b458060b2ec632479d813c9))
* **chips:** Use deprecated chips in autoinit ([d2a39d3](https://github.com/material-components/material-components-web/commit/d2a39d300e3b9dee6c0d58d34522075f62b261c3))
* **circular-progress:** add annotation ([06dead2](https://github.com/material-components/material-components-web/commit/06dead2d69d09dfde582d0d9fb1473a61358a5f6))
* **dialog:** Add transparent border to dialog surface for HCM support. ([b2fa996](https://github.com/material-components/material-components-web/commit/b2fa996a1faa513fae691920cb339091d65b6c9b))
* **dialog:** Remove the unnecessary border on the dialog title when not needed, this adds an extra line in the UI on high contrast mode. With margins it is possible to keep the previous spacing and only add the border when needed. ([3344d12](https://github.com/material-components/material-components-web/commit/3344d12ad2eb74cfc4ef270290bcc0322ebe8566))
* **dom:** do not cache focusable elements in focus-trap ([7899e0f](https://github.com/material-components/material-components-web/commit/7899e0fe0a87cb255a5216333054207ef2687933))
* **fab:** add alternate decorator only when necessary ([0fd56a8](https://github.com/material-components/material-components-web/commit/0fd56a86b30846de63d7d1520dcecc4d5ece2347))
* **fab:** Apply extended shape radius in Extended FAB's theme mixin ([81911b7](https://github.com/material-components/material-components-web/commit/81911b7077801590c0f47bf17743f3b2b320b863))
* **list:** Correcting the selector mapping for CHILD_ELEMENTS_TO_TOGGLE_TABINDEX and FOCUSABLE_CHILD_ELEMENTS. ([8943b99](https://github.com/material-components/material-components-web/commit/8943b991fd04caab88ae543bad16ba9b47bc7634)), closes [#6829](https://github.com/material-components/material-components-web/issues/6829) [#6829](https://github.com/material-components/material-components-web/issues/6829)
* **list:** do not activate typeahead on certain modifier keys ([f1b1fd5](https://github.com/material-components/material-components-web/commit/f1b1fd5d3fa72c0a5dab305e3d7e782ff1421d7e))
* **progress-indicators:** hide from screenreaders on close ([d3a6862](https://github.com/material-components/material-components-web/commit/d3a6862af3ff4f0e157ebe95bd5f54a47fc14c48))
* **ripple:** Update states-selector() to use `:active:active` to match active specificity styles. ([faa7d32](https://github.com/material-components/material-components-web/commit/faa7d3226edbb15bdfca69e5ae98b2d7afdd861a))
* **select:** do not conduct anchor typeahead when modifier keys pressed ([6f678a9](https://github.com/material-components/material-components-web/commit/6f678a91a400ac3408e06523d18a134cf3513f6b))
* **select:** set hidden input value before firing change event ([2d6ba2c](https://github.com/material-components/material-components-web/commit/2d6ba2c239dfc7d4c2516507b11a32537c163852)), closes [#6904](https://github.com/material-components/material-components-web/issues/6904)
* **shape:** duplication bug with nested custom properties ([f77a4dd](https://github.com/material-components/material-components-web/commit/f77a4dd1a3eb4f6af2b5a7695081408de41211b7))
* **slider:** Fire custom `input` event on input change (i.e. value change via keyboard), mirroring the native `input` event behavior for range inputs. ([ec8f846](https://github.com/material-components/material-components-web/commit/ec8f8465f40bd13f61e2ad26c52314fc27fd5420))
* **slider:** Fix #quantize to use min value as the baseline. ([0f358dd](https://github.com/material-components/material-components-web/commit/0f358ddae37a8703b8b6f0b8e4de846a196d443a))
* **slider:** Fix JS floating point rounding errors by rounding values to a set number of decimal places based on the step size. ([6072ed6](https://github.com/material-components/material-components-web/commit/6072ed6040e1f65e099b876a4065fbb07378c186))
* **slider:** Fix track height. ([67eb0df](https://github.com/material-components/material-components-web/commit/67eb0df80920a53e04fc151b3ab065959e3e84dc))
* **slider:** Improve HCM borders, add missing [@noflip](https://github.com/noflip) annotations. ([e7202cb](https://github.com/material-components/material-components-web/commit/e7202cb576ff762664a3636ec01cebfa5a61be49))
* **slider:** Modify behavior such that for range sliders, presses in the middle of the range change the value (of the closest thumb). This provides a single-pointer alternative option to an otherwise gesture-based interaction. ([0b8cff7](https://github.com/material-components/material-components-web/commit/0b8cff73421489a5322dd39b8504c16ba0f26120))
* **slider:** Throttle slider UI updates. ([7d6a4bb](https://github.com/material-components/material-components-web/commit/7d6a4bb72f210c94161568f964e33cd8b06a8315))
* **slider:** Throw error for invalid initial values based on the step. ([3955d8d](https://github.com/material-components/material-components-web/commit/3955d8d3d2ba2766b59338f0ed7ae640388ce926))
* **tab:** Update ripple adapter to reflect sass ripple-target. ([97c4d40](https://github.com/material-components/material-components-web/commit/97c4d40356fcc89d9eb854ecf322ec7474aa597c))
* **theme:** do not emit when theme.property() replacements are null ([aa0aaf0](https://github.com/material-components/material-components-web/commit/aa0aaf026aae13532b3e3790992e9cc06397aa91))
* **theme:** parsing error when [@import-ing](https://github.com/import-ing) mdc-theme ([b62b126](https://github.com/material-components/material-components-web/commit/b62b1266d66734fcd9d60c7893ea048f83883f8f))
* **theme:** replace works for multiple replacements ([95322b1](https://github.com/material-components/material-components-web/commit/95322b11e3b0c938d9b4de56a1ba80d1ff42596b))
* update README to correct links. ([71e615b](https://github.com/material-components/material-components-web/commit/71e615bc8fa757d22190641db0c2940e24bdf59b))
* **tooltip:** flip precedence of data-tooltip-id and aria-describedby when finding TT id ([b2d22df](https://github.com/material-components/material-components-web/commit/b2d22df5b62003247fa5ca60a23b2ce8b6a17b33))
* **typography:** do not emit styles when setting null from global variable ([f5f1b61](https://github.com/material-components/material-components-web/commit/f5f1b613ce5c0dda39f617adbcfd2bb3f1862a74))


### Code Refactoring

* **snackbar:** Update a11y structure ([c60449b](https://github.com/material-components/material-components-web/commit/c60449bc8a967e14436bec9471df99678a78515a))
* **tooltip:** Moved the anchor element blur event listener from the component to within the foundation. ([0b4a4b2](https://github.com/material-components/material-components-web/commit/0b4a4b2ebe245f2382cb08bbbc34e7ffb4f43763))
* **typography:** Rename typography Sass function from pxToRem() to px-to-rem() ([8f0a11e](https://github.com/material-components/material-components-web/commit/8f0a11e32895f998c326ab4a10601a2e4d5e18db))


### Features

* **base:** add non-statics foundation constructor type ([e3ec22f](https://github.com/material-components/material-components-web/commit/e3ec22f4579292c962ab81d7fee1d31b38b7d036))
* **base:** add observer mixin ([4ceb422](https://github.com/material-components/material-components-web/commit/4ceb42220043f0ca90c57d77efec89ed29ae4508))
* **chips:** Expose "action" component ([03d34bb](https://github.com/material-components/material-components-web/commit/03d34bbad14df501f5faf9d03e62c0727ef6f7da))
* **chips:** Expose "chip" component ([cbc57c6](https://github.com/material-components/material-components-web/commit/cbc57c600f972ec88098d7ad9c4763f57dce0eb4))
* **chips:** Expose "chipset" component ([d6c5bcf](https://github.com/material-components/material-components-web/commit/d6c5bcf3743048e44d5462a2266804a7a75678a7))
* **chips:** Expose top-level resources ([fefc668](https://github.com/material-components/material-components-web/commit/fefc668d77004762598e0cd88f3248a03a6aab1b))
* **chips:** Remove touch target wrapper selector from chip set spacing ([367d88b](https://github.com/material-components/material-components-web/commit/367d88bdb32a24c73f935154d616d1d7abfd9dd8))
* **chips:** Start deprecation of chip ([e683bdf](https://github.com/material-components/material-components-web/commit/e683bdf4a0f6642b87f099b51425898dd4a1b644))
* **chips:** Start deprecation of chip root directory ([73a2271](https://github.com/material-components/material-components-web/commit/73a227194d7c0caf305329f1a8b22eb801a6114b))
* **chips:** Start deprecation of chip set ([148e8cf](https://github.com/material-components/material-components-web/commit/148e8cfccac563305b9fa6fd4a6e8602620d6426))
* **chips:** Start deprecation of chip trailing action ([9eeb35c](https://github.com/material-components/material-components-web/commit/9eeb35c384c78a65215bf8885d5ebb5fb1592cd9))
* **chips:** Truncate long chip labels by default ([f5c6db8](https://github.com/material-components/material-components-web/commit/f5c6db8fc71c654c47c68a4c717f8d8995f43e30))
* **dialog:** Adding `resize` and `orientationchange` event handlers into `MDCDialogFoundation`. ([1e06534](https://github.com/material-components/material-components-web/commit/1e06534774df290b9a29210ee3bcf57515da6e43))
* **dialog:** Adds support for "surface-scrim" over full-screen dialogs. This prevents a "double scrim" from appearing when showing a secondary dialog over a full-screen dialog on larger screens. ([cddb035](https://github.com/material-components/material-components-web/commit/cddb0355362acb031da308f98283f9d4ad9a2c84))
* **dom:** add option to skip restoring focus on release focus ([5c0ab74](https://github.com/material-components/material-components-web/commit/5c0ab74019c6a1925ee8ef7946d8df6d9494bf88))
* **dom:** add tab key keyboard.ts ([dc9c840](https://github.com/material-components/material-components-web/commit/dc9c8402374f46402c73f97e60206517e3186389))
* **fab:** Add theming API to Extended FABs ([f19c86d](https://github.com/material-components/material-components-web/commit/f19c86d13447d984b13b0e1d7e9651e498d8de04))
* **fab:** Added `$focus-outline-width` param to extended-padding() FAB mixin ([8ecd7c9](https://github.com/material-components/material-components-web/commit/8ecd7c9a93c5b885fad9a1e6fd8d17da77c05360))
* **fab:** Added focus outline theme keys to FAB theme mixin ([d6d8d04](https://github.com/material-components/material-components-web/commit/d6d8d04768f9904488a6814ec47a251a03313627))
* **fab:** Added theme mixin to primary FAB variant. ([f19bbc4](https://github.com/material-components/material-components-web/commit/f19bbc4af6493f642dc4b5b45a2dc0083fa293f0))
* **fab:** border custom prop support & add CPs for padding ([a6b3101](https://github.com/material-components/material-components-web/commit/a6b3101fb7641daab20db735b70421311534083b))
* **fix:** Ensure that secondary controls do not ripple. ([1f636b2](https://github.com/material-components/material-components-web/commit/1f636b205b9609d19a96bef707ab87a0f8ca4f1a))
* **fix:** Fix divider layout in right-to-left locales. ([f524626](https://github.com/material-components/material-components-web/commit/f5246264d139124f6abf2cf5e9f8ca98762eb0f7))
* **fix:** Remove old MDC list class names, preparing to release evolution. ([5f0fc44](https://github.com/material-components/material-components-web/commit/5f0fc444a706626a106c2b36116a56e9dc5b8c79))
* **fix:** Remove the "evolution" prefix from list evolution's class names. ([0cde52f](https://github.com/material-components/material-components-web/commit/0cde52f5a007f4b7da16afd45f7445d615d5a2f6))
* **fix:** Simplify divider styles to reflect new design guidance. ([f77c508](https://github.com/material-components/material-components-web/commit/f77c508600d4b0f4ce4a66c63d1064b545149570))
* **linear-progress:** add getBuffer ([9c85d50](https://github.com/material-components/material-components-web/commit/9c85d505bddf9c63ef52508c385ec59f1f947b8e))
* **list:** Add "deprecated" aliases for old list mixins / variables. ([f9cac96](https://github.com/material-components/material-components-web/commit/f9cac96cc2ad0422d73140a65dcffc5e4e8ec519))
* **list:** Add missing "deprecated" aliases for old list mixin. ([302c7a9](https://github.com/material-components/material-components-web/commit/302c7a960f3b2787f253908d963eaaaa0b8adfd4))
* **list:** Finalize list mixin/variable rename. ([c97d7d8](https://github.com/material-components/material-components-web/commit/c97d7d88102f96c4c61a1b7c3329f3efac3727f4))
* **list:** Rename deprecated MDC list class names. ([a678806](https://github.com/material-components/material-components-web/commit/a678806f5618f21a6bd28e3b881f92130b723f6e))
* **list:** Rename deprecated MDC list class names. ([941ca3b](https://github.com/material-components/material-components-web/commit/941ca3b3c4c53ea296149a983b0159c5567e1b2c))
* **list:** Update deprecated list class names so evolution can become default. ([606e767](https://github.com/material-components/material-components-web/commit/606e767ef6d1d98461d8910ece874b65d0143981))
* **list:** Update styles to reference "deprecated" mixins/variables. ([3201cae](https://github.com/material-components/material-components-web/commit/3201cae479a0dbf97c40dda1b9d32a5818d6ab62))
* **list:** Update styles to remove "evolution" prefix from mixins/variables. ([f9c9e39](https://github.com/material-components/material-components-web/commit/f9c9e39d6c0cddf796de7e821ec59e199aeab851))
* **menu:** add maxHeight setter ([bf670da](https://github.com/material-components/material-components-web/commit/bf670dad7247d7ac1db9bf00905921b5c09a5b4d))
* **menu-surface:** add option to always horizontally center on viewport ([23ea2d8](https://github.com/material-components/material-components-web/commit/23ea2d85e760325371c2529af7c99316d876c044))
* **ripple:** add active() mixin for styling active styles. ([9f2e85f](https://github.com/material-components/material-components-web/commit/9f2e85fb8453cab94f54eeb9e2d9e18600ed7fa0))
* **select:** allow programmatic change without firing event ([79ce087](https://github.com/material-components/material-components-web/commit/79ce0878b3233592c3188548711b311e5706d3dd)), closes [#6166](https://github.com/material-components/material-components-web/issues/6166)
* **slider:** Add mixin to customize thumb color in the activated (hover, focus, pressed) state. ([94f50b2](https://github.com/material-components/material-components-web/commit/94f50b260dd6cbf6cca5fbedd2a8681746e2cc1d))
* Add support for "mdc-deprecated-list-*" class names. ([9e52f55](https://github.com/material-components/material-components-web/commit/9e52f554437fa438c9b4c266f8e87ff370ec5dea))
* **switch:** add high-contrast mode focus shim mixin ([c91e8d1](https://github.com/material-components/material-components-web/commit/c91e8d141bc8b519ae1d8c7d1771c0d5110e84ad))
* **theme:** add configuration support for custom-properties ([1f318ff](https://github.com/material-components/material-components-web/commit/1f318ff0f033f9f51c8bf7f76ef997161ff62fd4))
* **theme:** add create-varname() for custom properties ([b522724](https://github.com/material-components/material-components-web/commit/b5227247d730171c02bd71e9b44106cd179aaf2a))
* **theme:** add key store ([07ff0c4](https://github.com/material-components/material-components-web/commit/07ff0c452c896f9f8131532538742bed0ad207c9))
* **tooltip:** Adding logic to position the caret relative to the tooltip. ([76da787](https://github.com/material-components/material-components-web/commit/76da7876cd1452cdabed5169bdbdfd06b4629cda))
* **tooltip:** Adding touchstart/touchend event listeners to tooltip. This allows tooltips attached to non-focusable elements to be surfaced on mobile. ([7cd26af](https://github.com/material-components/material-components-web/commit/7cd26af4dd2033dacce75d2df2d179f81286fe71))
* **tooltip:** Creating an `mdc-tooltip__surface-animation` class that holds all the style properties responsible for animating the tooltip in and out of the page. The existing `mdc-tooltip__surface` class will hold all the style properties that impact the visual appearance of the tooltip. ([56fc269](https://github.com/material-components/material-components-web/commit/56fc26962126e24a7c56124de7f36078409254a7))
* **tooltip:** Expose method that allows users to register additional scroll handlers on elements in the DOM. This should be used in situations where the tooltip anchor is a child of a scrollable element, and will ensure that the tooltip remains attached to the anchor when this element is scrolled. ([24609b8](https://github.com/material-components/material-components-web/commit/24609b82225f763c1dc9da16b1ee9e0dd3c52197))


### BREAKING CHANGES

* **typography:** Renamed typography Sass function from pxToRem() to px-to-rem()

PiperOrigin-RevId: 368489085
* **fix:** the old list implementation has been deprecated and now requires that class names use an "mdc-deprecated-list-*" prefix. The new implementation (list evolution), no longer uses a prefix ("mdc-evolution-list-*" is now just "mdc-list-*").

PiperOrigin-RevId: 364441086
* **snackbar:** Dom structure change, see README.md

PiperOrigin-RevId: 363926666
* **tooltip:**   Added adapter method:
  - registerAnchorEventHandler<K extends EventType>(
      evtType: K, handler: SpecificEventListener<K>): void;
  - deregisterAnchorEventHandler<K extends EventType>(
      evtType: K, handler: SpecificEventListener<K>): void;

PiperOrigin-RevId: 358401984





# [10.0.0](https://github.com/material-components/material-components-web/compare/v9.0.0...v10.0.0) (2021-02-05)


### Bug Fixes

* **data-table:** fix style ordering wrt select & use new variable-width mixin ([afb6889](https://github.com/material-components/material-components-web/commit/afb68894e63c9ed4bb3b3d523cbb4072480117a6)), closes [#6599](https://github.com/material-components/material-components-web/issues/6599)
* **dialog:** add property to customize suppressDefaultPressSelector ([772cc10](https://github.com/material-components/material-components-web/commit/772cc10686cc8994033a556ab70f4be106e902ee))
* **linear-progress:** fix RTL rendering ([c7c5da2](https://github.com/material-components/material-components-web/commit/c7c5da28f2cd2c1b54dd201d3797e112288fa86c))
* **list:** add support for density scaling. ([419e035](https://github.com/material-components/material-components-web/commit/419e035729c1ca1ee2b572ae4b1937e2d8cf04bc))
* **list:** add support for non-interactive list roles. ([fc8b045](https://github.com/material-components/material-components-web/commit/fc8b045f1127709c5929a3cd1c9c7d622db8ed42))
* **list:** ensure divider appears in IE high contrast mode. ([eff7b46](https://github.com/material-components/material-components-web/commit/eff7b46ac916d2eb130f7d826eee047c5f19e6f2))
* **menu:** Remove anchorSize height from calculations when anchored to bottom ([1631198](https://github.com/material-components/material-components-web/commit/16311983787cf46ccd22eaa4d6a076254cb32eea))
* **notched-outline:** fix notched outline no-label style ([99cfb6b](https://github.com/material-components/material-components-web/commit/99cfb6bd53f72240fe76852d0fdaa0b82e7dca39))
* **select:** debounce click on anchor ([b39094d](https://github.com/material-components/material-components-web/commit/b39094d145f9b96c1c75e2b5fcce7b76c9b31bf1))
* **select:** set aria-expanded false earlier when menu closes ([df00c2b](https://github.com/material-components/material-components-web/commit/df00c2b30342877eba7d1e21e8a57141739155a5))
* **slider:** Add aria-hidden to value indicator container, to avoid duplicate value announcements for screenreader users. ([9687353](https://github.com/material-components/material-components-web/commit/96873535640a2e9141ff8e17e64fcb5e28d90f53))
* **slider:** Adjust hidden input dimensions to take slider dimensions, such that screenreader focus indicators show a highlight around the entire slider. ([fd22355](https://github.com/material-components/material-components-web/commit/fd22355f72ab304aec043f53ced92fa9adfef457))
* **slider:** Fire custom change event on input change. ([07deaec](https://github.com/material-components/material-components-web/commit/07deaec27a6f92b9a00c7698c49d3e1a93e504ea))
* **slider:** Fix bug where value indicator container took space and could be hovered over / clicked when hidden. ([832668d](https://github.com/material-components/material-components-web/commit/832668d33389a0b6194d3d8ef53aa8c252aa8f5d))
* **slider:** Mark ripple event handler as passive. Fixes [#6746](https://github.com/material-components/material-components-web/issues/6746) ([abdd100](https://github.com/material-components/material-components-web/commit/abdd10065367738148866c165b339a3e3b9b1fc3))
* **slider:** Remove big step options. Now that we're using a native range input, big step is not customizable - we follow browser defaults for big step. ([ae27b44](https://github.com/material-components/material-components-web/commit/ae27b44b078ebdad3669b03abc9f28ed184db803))
* **slider:** Update both thumbs' value indicator UI's if layout is invoked with undefined `thumb`. ([489d4c2](https://github.com/material-components/material-components-web/commit/489d4c219d1747a8e5de3f210f00898c18201b24))
* **slider:** Use `pointer-events: none` instead of `visibility: hidden` to hide the value indicator container. Adding `visibility: hidden` removes the exit animation since the value indicator is immediately hidden. ([a94bd8d](https://github.com/material-components/material-components-web/commit/a94bd8deb879b0321e8227d26f338789ef3ffb90))
* **slider:** Use mouse/touch events on iOS, to work around pointer events bug. ([671d72d](https://github.com/material-components/material-components-web/commit/671d72d9544d3d1630966ec4e78b5705700defe7)), closes [#6715](https://github.com/material-components/material-components-web/issues/6715)
* **tabs:** Expose min width mixin and set to 90px per spec. ([c4ab987](https://github.com/material-components/material-components-web/commit/c4ab987221d5a3b9ab588321bb0347f5d665505a))
* **theme:** ensure either() works with false values ([8e66dbf](https://github.com/material-components/material-components-web/commit/8e66dbfeebe3d5fec438c69093d7f9941c0fbf10))
* **tooltip:** Adds "will-change" into CSS to prevent the tooltip from "jittering" when animating in. ([7a003ac](https://github.com/material-components/material-components-web/commit/7a003acf09345920d917cb4ab7c298a66e4fe184))
* **tooltip:** Change foundation to check for "dialog" on the anchor element's aria-haspopup attribute instead of checking for "true". ([b8a1a58](https://github.com/material-components/material-components-web/commit/b8a1a58e4ebb49a73725d2e7ae8aef09c07db09d))
* **tooltip:** Clear hideTimeout in handleAnchorMouseEnter so that the tooltip will not be hidden if the user rapidly moves the mouse in and out of the anchor element. ([365c693](https://github.com/material-components/material-components-web/commit/365c69360230540a67dd141f6bec999b2541a7e8))
* **tooltip:** Fix rich tooltip tests to not use aria-describedby to associate rich tooltips with their anchor elements. This is because interactive rich tooltips should not be used with aria-describedby per a11y guidance. ([251ac04](https://github.com/material-components/material-components-web/commit/251ac04c0a976d48a6be33cc7fcd76f6e2700aac))
* adjust meta baseline and update color mixins. ([07f3e01](https://github.com/material-components/material-components-web/commit/07f3e01b75306a7481c7077cd3ed12a87399958e))


### Code Refactoring

* Remove MDC theme's deep-get, used sass:map's get API instead. ([37fbae1](https://github.com/material-components/material-components-web/commit/37fbae10d6fb993c0ea866959fb5564c052002cc))


### Features

* **banner:** Add mobile-stacked variant support to banner. ([a0b2db2](https://github.com/material-components/material-components-web/commit/a0b2db26b550162d2e409489c5ded3381b7c7dc2))
* **button:** Add in HCM support to the mdc button as an opt-in mixin. ([121e1f3](https://github.com/material-components/material-components-web/commit/121e1f303f10e55c9cc5e6508bcd559c6ea7dc7b))
* **button:** consolidate states into button mixins ([637d15d](https://github.com/material-components/material-components-web/commit/637d15da60919641e5571f280562c4fb3491c8f0))
* **button:** thread state keys through theme config ([05f2496](https://github.com/material-components/material-components-web/commit/05f249666dff2bae35a1a6c1e7a5ed89eb193213))
* **checkbox:** Add CSS custom properties to MDC checkbox for density theming ([9244508](https://github.com/material-components/material-components-web/commit/9244508bd82ab65635169cfacd74f1a25ebaab7e))
* **checkbox:** Add validation to MDC Checkbox theme mixin ([2d5f32d](https://github.com/material-components/material-components-web/commit/2d5f32d41cda48ca8e3c1d2244d6fb3bb4c6aa7d))
* **circular-progress:** do not require HTML without whitespaces ([8648b82](https://github.com/material-components/material-components-web/commit/8648b8258f7f87edcc1d58a2bc7db3d78425508f))
* **dialog:** add custom property for z-index ([776c186](https://github.com/material-components/material-components-web/commit/776c1868154e5b99a332f60927b78b32b82fe19f))
* **dialog:** Adding styling for scroll bar dividers, and adding logic to show said dividers only when content is scrolled "behind" the header or footer of the dialog. ([e383944](https://github.com/material-components/material-components-web/commit/e383944e9792ea1971c7814e0e63e2e00f99a468))
* **dialog:** Adds and defines styling for the "header bar" on a full-screen dialog. ([089de51](https://github.com/material-components/material-components-web/commit/089de519c1c2f0378b9852dafd3ca5a304268a44))
* **iconbutton:** Add in HCM support to the mdc iconbutton as an opt-in mixin. ([fd61b04](https://github.com/material-components/material-components-web/commit/fd61b04760d96fcc1c96e43ca8e0663d16f5a995))
* **linear-progress:** remove aria-valuemin/max attrs for indeterminate ([4321323](https://github.com/material-components/material-components-web/commit/4321323e4bea2da8192b81ebdf8c6a9ee1e76aa0))
* **list:** support ctrl + a keyboard shortcut ([eefef49](https://github.com/material-components/material-components-web/commit/eefef49d86c69b1985aa4e5fa5b8809ba1f0a1f4)), closes [#6366](https://github.com/material-components/material-components-web/issues/6366)
* **list:** Update the MDC component for List Evolution. ([766981c](https://github.com/material-components/material-components-web/commit/766981c15a200b374a14c2ab80bf746824bf7434))
* **menu,select:** enable fixed menu position in mwc-select ([b9adb7a](https://github.com/material-components/material-components-web/commit/b9adb7a0f6d2871bcd87664ab857fb62392c27d4)), closes [#2062](https://github.com/material-components/material-components-web/issues/2062)
* **select:** add mixin for variable width ([30c11bf](https://github.com/material-components/material-components-web/commit/30c11bfc24e426c0647645758e4f9d98f589e85c))
* **slider:** Add hidden input to slider, to support forms submission. This is also prep for moving to use an \<input type="range"\> behind the scenes, in order to support touch-based AT's. ([b98d15d](https://github.com/material-components/material-components-web/commit/b98d15d90b19e69066c0b417ee0d8b11ab733e20))
* **slider:** Modify continuous slider to use step value by default, and give clients the option to customize step value for continuous sliders. ([7ad038e](https://github.com/material-components/material-components-web/commit/7ad038e1d37171dc1fc931112b17f085533f7048))
* **slider:** Use input with type="range" to back slider component. This ensures that sliders can be adjusted with touch-based assistive technologies, as the current ARIA spec for sliders is not compatible with e.g. TalkBack/Android. ([9083b7d](https://github.com/material-components/material-components-web/commit/9083b7d61b1dda2c5acefda6e8939870a358e98f))
* **snackbar:** Add 1px transparent border for high contrast support ([15a4d40](https://github.com/material-components/material-components-web/commit/15a4d40dd708775c6120165422c9ebadee4c8f6f))
* **theme:** add either() utility function ([5268222](https://github.com/material-components/material-components-web/commit/5268222c432bb886add05cbb1779909117cf1620))
* **theme:** add validation option to disallow custom properties ([fec7b42](https://github.com/material-components/material-components-web/commit/fec7b42ca54baf37487cadaf96ac8cf559d6ccd0))
* **theme:** Added validation mixin to validate provided theme configuration keys ([1c156d6](https://github.com/material-components/material-components-web/commit/1c156d69d76efcfa39c706f7f6ae74e96c2bd541))
* **theme:** allow lists in replace maps ([d2959b1](https://github.com/material-components/material-components-web/commit/d2959b16ca9a2e4574984b8e459993c9c9a2075a))
* **theme:** emit CSS var() declarations when provided a standalone custom prop ([1a3a396](https://github.com/material-components/material-components-web/commit/1a3a396293df35d9621155e9168df35d39d83fee))
* **tooltip:** Add positioning adjustment and position specification for rich tooltips. Rich tooltips default to the END position and does not support CENTER positioning. ([384a8ee](https://github.com/material-components/material-components-web/commit/384a8eeb163798df6655c8a49c36428ede852e15))
* **tooltip:** Added persistent variant for rich tooltips that shows/hides based on mouse clicks on the anchor element. Clicks on elements other than the anchor will also hide the persistent variant. ([9775856](https://github.com/material-components/material-components-web/commit/9775856508a7256cb7dc93d0c3e47f6d87c08c93))
* **tooltip:** Adds `transform-origin` on tooltip surface so tooltip entrance animation has a direction based on its alignment with the anchor element. ([623af86](https://github.com/material-components/material-components-web/commit/623af861e1852603fd4778fb0abbef58b427333c))
* **tooltip:** Adjust  tooltip position on `scroll` and `resize` events. This ensures that the tooltip remains pinned to the anchor element despite page movement. ([a415276](https://github.com/material-components/material-components-web/commit/a41527604048d218879240aaaf04aff7389053d1))
* **tooltip:** Adjusting tooltip positioning logic so that the tooltip remains within the viewport even if the anchor element is partially off-screen. ([482ff90](https://github.com/material-components/material-components-web/commit/482ff909132b2e8f81791d7128cb0a3d2ff371a8))
* **tooltip:** Change rich tooltip to use position absolute instead of fixed and rely on a position relative parent element so that if the parent has a transform, perspective, or filter property set to something other than none, the positioning would still work. ([0c95c9f](https://github.com/material-components/material-components-web/commit/0c95c9f7bf1e0d465e99fd7dd3f1497d37d871ff))
* **tooltip:** Define styling to set the full-screen dialog size depending on the viewport size. ([fe13dd1](https://github.com/material-components/material-components-web/commit/fe13dd1308dc695898b2c7d3dfbddccc7d38b420))
* **tooltip:** Expose `hide` and `isShown` methods in the MDCTooltip component. This allows MDC clients to create their own class to enforce only one tooltip being shown at a time. ([c5e18b0](https://github.com/material-components/material-components-web/commit/c5e18b0203a3c474384bc5902a15855636ce849b))
* **tooltip:** Hide rich tooltip if mouse leaves rich tooltip. Rich tooltip persists if mouse leaves rich tooltip and enters anchor. ([6d8574f](https://github.com/material-components/material-components-web/commit/6d8574fe1db3a60dfb5a45ce8c6c6718700c2dfd))
* **tooltip:** Reducing minimum threshold distance between tooltip and viewport from 32px to 8px. ([23491cf](https://github.com/material-components/material-components-web/commit/23491cf85b8831896f95879e8aea258d5ca7f653))
* **tooltip:** Restore focus to the anchor element when the ESC button is pressed while the focus is in the tooltip for rich tooltips. Default rich tooltips should have focus restored to anchor and not have rich tooltips show. ([eabf9d5](https://github.com/material-components/material-components-web/commit/eabf9d5c2d9b56e316db98f2d8e16bf12f1ef501))
* **tooltip:** Set up base sass for rich tooltip. Rich tooltips are currently in development and is not yet ready for use. ([4ae94ff](https://github.com/material-components/material-components-web/commit/4ae94ff7816d87fde3285a0c2fd48b94ff0bbdab))
* **tooltip:** Set up rich tooltip to persist if mouse leaves anchor and enters rich tooltip. ([c927a5d](https://github.com/material-components/material-components-web/commit/c927a5d05761d0a80f886b2b7627e600df38c467))
* **tooltip:** The aria-expanded attribute of the anchor element will only be changed for anchor elements with interactive rich tooltips. Non-interactive rich tooltip anchor elements do not have the aria-haspopup and aria-expanded attributes. ([c5dda80](https://github.com/material-components/material-components-web/commit/c5dda809d5e4c110f3b4bb37c9646e572026d58d))
* **tooltip:** When the anchor element blurs, the rich tooltip will only be hidden if the focus is changed to a non-rich tooltip element. ([6871336](https://github.com/material-components/material-components-web/commit/6871336f11f3cc7d94c6314dc049092e0427106c))
* Added global variable to conditionally emit CSS selector fallback declarations ([7b0e2b3](https://github.com/material-components/material-components-web/commit/7b0e2b3775d006126161bd688851d490d19e9558))
* **tooltip:** When the rich tooltip element focuses out, hide the rich tooltip if the new focused element is not the anchor element or an element within the rich tooltip. ([1085c3b](https://github.com/material-components/material-components-web/commit/1085c3b2df7d3c1b528e1b9ba5557975fa959401))


### BREAKING CHANGES

* **theme:** custom-properties.apply() has been renamed to declaration() to better align with css.declaration()
* **tooltip:**   Added adapter methods:
  - getComputedStyleProperty(propertyName: string): string;
  - getParentBoundingRect(): ClientRect|null;
* **tooltip:**   Added adapter method:
  - tooltipContainsElement(element: HTMLElement): boolean;
* Removed `deep-get()` API from mdc-theme, use `sass:map`'s get() API instead.
* **tooltip:**   Added adapter method:
  - anchorContainsElement(element: HTMLElement): boolean;
* **slider:** Slider is now backed by an input of type="range". Additionally, adapter methods (focusInput, isInputFocused, registerInputEventHandler, deregisterInputEventHandler) were added.
* **tooltip:**   Added adapter methods:
  - setAnchorAttribute(attr: string, value: string): void;
  - registerEventHandler<K extends EventType>(
        evtType: K, handler: SpecificEventListener<K>): void;
  - deregisterEventHandler<K extends EventType>(
        evtType: K, handler: SpecificEventListener<K>): void;
* **slider:** Adds slider adapter methods (get/setInputValue, get/setInputAttribute, removeInputAttribute). Slider DOM structure now contains a hidden input.
  

# [9.0.0](https://github.com/material-components/material-components-web/compare/v8.0.0...v9.0.0) (2020-12-29)


### Bug Fixes

* **data-table:** fix style ordering wrt select & use new variable-width mixin ([afb6889](https://github.com/material-components/material-components-web/commit/afb68894e63c9ed4bb3b3d523cbb4072480117a6)), closes [#6599](https://github.com/material-components/material-components-web/issues/6599)
* **list:** add support for density scaling. ([419e035](https://github.com/material-components/material-components-web/commit/419e035729c1ca1ee2b572ae4b1937e2d8cf04bc))
* **list:** add support for non-interactive list roles. ([fc8b045](https://github.com/material-components/material-components-web/commit/fc8b045f1127709c5929a3cd1c9c7d622db8ed42))
* **list:** ensure divider appears in IE high contrast mode. ([eff7b46](https://github.com/material-components/material-components-web/commit/eff7b46ac916d2eb130f7d826eee047c5f19e6f2))
* Adding tests. ([240c5f7](https://github.com/material-components/material-components-web/commit/240c5f74f381967ede9eb1fa13754d2f0282da9e))
* adjust meta baseline and update color mixins. ([07f3e01](https://github.com/material-components/material-components-web/commit/07f3e01b75306a7481c7077cd3ed12a87399958e))
* Document stylelint exceptions ([f89d8b8](https://github.com/material-components/material-components-web/commit/f89d8b8f295c80c7b7e691ec712a30de8a0b26d5))
* **notched-outline:** fix notched outline no-label style ([99cfb6b](https://github.com/material-components/material-components-web/commit/99cfb6bd53f72240fe76852d0fdaa0b82e7dca39))
* **select:** debounce click on anchor ([b39094d](https://github.com/material-components/material-components-web/commit/b39094d145f9b96c1c75e2b5fcce7b76c9b31bf1))
* **slider:** Adjust hidden input dimensions to take slider dimensions, such that screenreader focus indicators show a highlight around the entire slider. ([fd22355](https://github.com/material-components/material-components-web/commit/fd22355f72ab304aec043f53ced92fa9adfef457))
* **slider:** Fix bug where value indicator container took space and could be hovered over / clicked when hidden. ([832668d](https://github.com/material-components/material-components-web/commit/832668d33389a0b6194d3d8ef53aa8c252aa8f5d))
* **slider:** Remove big step options. Now that we're using a native range input, big step is not customizable - we follow browser defaults for big step. ([ae27b44](https://github.com/material-components/material-components-web/commit/ae27b44b078ebdad3669b03abc9f28ed184db803))
* **slider:** Update both thumbs' value indicator UI's if layout is invoked with undefined `thumb`. ([489d4c2](https://github.com/material-components/material-components-web/commit/489d4c219d1747a8e5de3f210f00898c18201b24))
* **tabs:** Expose min width mixin and set to 90px per spec. ([c4ab987](https://github.com/material-components/material-components-web/commit/c4ab987221d5a3b9ab588321bb0347f5d665505a))


### Code Refactoring

* Remove MDC theme's deep-get, used sass:map's get API instead. ([37fbae1](https://github.com/material-components/material-components-web/commit/37fbae10d6fb993c0ea866959fb5564c052002cc))


### Features

* **banner:** Add mobile-stacked variant support to banner. ([a0b2db2](https://github.com/material-components/material-components-web/commit/a0b2db26b550162d2e409489c5ded3381b7c7dc2))
* **checkbox:** Add CSS custom properties to MDC checkbox for density theming ([9244508](https://github.com/material-components/material-components-web/commit/9244508bd82ab65635169cfacd74f1a25ebaab7e))
* **checkbox:** Add validation to MDC Checkbox theme mixin ([2d5f32d](https://github.com/material-components/material-components-web/commit/2d5f32d41cda48ca8e3c1d2244d6fb3bb4c6aa7d))
* **circular-progress:** do not require HTML without whitespaces ([8648b82](https://github.com/material-components/material-components-web/commit/8648b8258f7f87edcc1d58a2bc7db3d78425508f))
* **linear-progress:** remove aria-valuemin/max attrs for indeterminate ([4321323](https://github.com/material-components/material-components-web/commit/4321323e4bea2da8192b81ebdf8c6a9ee1e76aa0))
* **list:** support ctrl + a keyboard shortcut ([eefef49](https://github.com/material-components/material-components-web/commit/eefef49d86c69b1985aa4e5fa5b8809ba1f0a1f4)), closes [#6366](https://github.com/material-components/material-components-web/issues/6366)
* **select:** add mixin for variable width ([30c11bf](https://github.com/material-components/material-components-web/commit/30c11bfc24e426c0647645758e4f9d98f589e85c))
* **slider:** Add hidden input to slider, to support forms submission. This is also prep for moving to use an \<input type="range"\> behind the scenes, in order to support touch-based AT's. ([b98d15d](https://github.com/material-components/material-components-web/commit/b98d15d90b19e69066c0b417ee0d8b11ab733e20))
* **slider:** Modify continuous slider to use step value by default, and give clients the option to customize step value for continuous sliders. ([7ad038e](https://github.com/material-components/material-components-web/commit/7ad038e1d37171dc1fc931112b17f085533f7048))
* **slider:** Use input with type="range" to back slider component. This ensures that sliders can be adjusted with touch-based assistive technologies, as the current ARIA spec for sliders is not compatible with e.g. TalkBack/Android. ([9083b7d](https://github.com/material-components/material-components-web/commit/9083b7d61b1dda2c5acefda6e8939870a358e98f))
* **theme:** Added validation mixin to validate provided theme configuration keys ([1c156d6](https://github.com/material-components/material-components-web/commit/1c156d69d76efcfa39c706f7f6ae74e96c2bd541))
* **tooltip:** Add positioning adjustment and position specification for rich tooltips. Rich tooltips default to the END position and does not support CENTER positioning. ([384a8ee](https://github.com/material-components/material-components-web/commit/384a8eeb163798df6655c8a49c36428ede852e15))
* **tooltip:** Added persistent variant for rich tooltips that shows/hides based on mouse clicks on the anchor element. Clicks on elements other than the anchor will also hide the persistent variant. ([9775856](https://github.com/material-components/material-components-web/commit/9775856508a7256cb7dc93d0c3e47f6d87c08c93))
* **tooltip:** Adjust  tooltip position on `scroll` and `resize` events. This ensures that the tooltip remains pinned to the anchor element despite page movement. ([a415276](https://github.com/material-components/material-components-web/commit/a41527604048d218879240aaaf04aff7389053d1))
* **tooltip:** Adjusting tooltip positioning logic so that the tooltip remains within the viewport even if the anchor element is partially off-screen. ([482ff90](https://github.com/material-components/material-components-web/commit/482ff909132b2e8f81791d7128cb0a3d2ff371a8))
* **tooltip:** Hide rich tooltip if mouse leaves rich tooltip. Rich tooltip persists if mouse leaves rich tooltip and enters anchor. ([6d8574f](https://github.com/material-components/material-components-web/commit/6d8574fe1db3a60dfb5a45ce8c6c6718700c2dfd))
* **tooltip:** Make persistent rich tooltips persist when click target is within the rich tooltip. ([fb194dd](https://github.com/material-components/material-components-web/commit/fb194dd354d2c912f997c500347557edcba1440d))
* **tooltip:** Reducing minimum threshold distance between tooltip and viewport from 32px to 8px. ([23491cf](https://github.com/material-components/material-components-web/commit/23491cf85b8831896f95879e8aea258d5ca7f653))
* **tooltip:** Restore focus to the anchor element when the ESC button is pressed while the focus is in the tooltip for rich tooltips. Default rich tooltips should have focus restored to anchor and not have rich tooltips show. ([eabf9d5](https://github.com/material-components/material-components-web/commit/eabf9d5c2d9b56e316db98f2d8e16bf12f1ef501))
* **tooltip:** Set up base sass for rich tooltip. Rich tooltips are currently in development and is not yet ready for use. ([4ae94ff](https://github.com/material-components/material-components-web/commit/4ae94ff7816d87fde3285a0c2fd48b94ff0bbdab))
* **tooltip:** Set up rich tooltip to persist if mouse leaves anchor and enters rich tooltip. ([c927a5d](https://github.com/material-components/material-components-web/commit/c927a5d05761d0a80f886b2b7627e600df38c467))
* **tooltip:** The aria-expanded attribute of the anchor element will only be changed for anchor elements with interactive rich tooltips. Non-interactive rich tooltip anchor elements do not have the aria-haspopup and aria-expanded attributes. ([c5dda80](https://github.com/material-components/material-components-web/commit/c5dda809d5e4c110f3b4bb37c9646e572026d58d))
* **tooltip:** When the anchor element blurs, the rich tooltip will only be hidden if the focus is changed to a non-rich tooltip element. ([6871336](https://github.com/material-components/material-components-web/commit/6871336f11f3cc7d94c6314dc049092e0427106c))
* **tooltip:** When the rich tooltip element focuses out, hide the rich tooltip if the new focused element is not the anchor element or an element within the rich tooltip. ([1085c3b](https://github.com/material-components/material-components-web/commit/1085c3b2df7d3c1b528e1b9ba5557975fa959401))
* Added global variable to conditionally emit CSS selector fallback declarations ([7b0e2b3](https://github.com/material-components/material-components-web/commit/7b0e2b3775d006126161bd688851d490d19e9558))


### BREAKING CHANGES

* **tooltip:**   Added adapter method:
  - tooltipContainsElement(element: HTMLElement): boolean;
Rich tooltips are currently in development and is not yet ready for use.

PiperOrigin-RevId: 346325244
* Removed `deep-get()` API from mdc-theme, use `sass:map`'s get() API instead.

PiperOrigin-RevId: 345257138
* **tooltip:**   Added adapter method:
  - anchorContainsElement(element: HTMLElement): boolean;
Rich tooltips are currently in development and is not yet ready for use.

PiperOrigin-RevId: 345221617
* **slider:** Slider is now backed by an input of type="range". Additionally, adapter methods (focusInput, isInputFocused, registerInputEventHandler, deregisterInputEventHandler) were added.

PiperOrigin-RevId: 344116908
* **tooltip:**   Added adapter methods:
  - setAnchorAttribute(attr: string, value: string): void;
  - registerEventHandler<K extends EventType>(
        evtType: K, handler: SpecificEventListener<K>): void;
  - deregisterEventHandler<K extends EventType>(
        evtType: K, handler: SpecificEventListener<K>): void;
Rich tooltips are currently in development and is not yet ready for use.

PiperOrigin-RevId: 343894231
* **slider:** Adds slider adapter methods (get/setInputValue, get/setInputAttribute, removeInputAttribute). Slider DOM structure now contains a hidden input.

PiperOrigin-RevId: 343157208





# [8.0.0](https://github.com/material-components/material-components-web/compare/v7.0.0...v8.0.0) (2020-11-02)


### Bug Fixes

* **banner:** Update image to graphic and support material icons ([346069c](https://github.com/material-components/material-components-web/commit/346069ccb2a831b37df62bf71135acad92fd69c3))
* **card:** ensure border-adjacent content renders correctly. ([790ca85](https://github.com/material-components/material-components-web/commit/790ca85fd643229e95f2d1c08811c8e0e5513805))
* **checkbox:** Use secondary and on-secondary as default colors ([b95172e](https://github.com/material-components/material-components-web/commit/b95172e69613c0defe82191b86ed1c1999b74400)), closes [#5730](https://github.com/material-components/material-components-web/issues/5730)
* **chip-set:** crash when only item is removed ([a653b68](https://github.com/material-components/material-components-web/commit/a653b68118e823ae30b1f47f87a4a8e5e69d9186))
* **chips:** Handle IE/Edge specific key names in keyboard navigation logic ([3657f88](https://github.com/material-components/material-components-web/commit/3657f886327182c26f1d1555b2ac67c2128140b5))
* **circular-progress:** Add .npmignore file to ignore typescript files when publishing ([#5801](https://github.com/material-components/material-components-web/issues/5801)) ([f172b0f](https://github.com/material-components/material-components-web/commit/f172b0f90a91d8d3d700763d1496bb7b9c1a8d51)), closes [#5800](https://github.com/material-components/material-components-web/issues/5800)
* **circular-progress:** Default all variables ([430fd02](https://github.com/material-components/material-components-web/commit/430fd025b07b3e15dd699620fbbfca75f74632a3))
* **circular-progress:** display properly inside button ([2bd09a7](https://github.com/material-components/material-components-web/commit/2bd09a706efb991fd71e171db8994f0282a1f02e))
* **circular-progress:** display properly inside button ([000d648](https://github.com/material-components/material-components-web/commit/000d6481570c361cf4c66b55c287eea434b6d11e)), closes [#6388](https://github.com/material-components/material-components-web/issues/6388)
* **circular-progress:** fix determinate transition typo & 4 color keyframes ([a301636](https://github.com/material-components/material-components-web/commit/a3016368df53b1c7967d7d146a9ea53a24442fa9))
* **circular-progress:** Fix naming in package.json and add to jsBundleFactory ([86f7cad](https://github.com/material-components/material-components-web/commit/86f7cad8330dbd600e478610eefd8dd92eb3d8c7))
* **circular-progress:** Force LTR layout ([6a40ef2](https://github.com/material-components/material-components-web/commit/6a40ef217f597138ee2920d2160364649dbf5620))
* **circular-progress:** Switch mixins import to `[@use](https://github.com/use)` ([098ae32](https://github.com/material-components/material-components-web/commit/098ae3285223af2532659dec233537a55c1183f5))
* **circular-progress:** use theme.property() for color mixins ([7bd5075](https://github.com/material-components/material-components-web/commit/7bd5075de978f8499f4cdc3b8359005184fa5192))
* **data-table:** Add noflip annotation to header cell text align ([843f636](https://github.com/material-components/material-components-web/commit/843f636c047b5371cd31b9ae4af76a7ec494b446))
* **data-table:** Check if data table has checkboxes on destroy ([164c073](https://github.com/material-components/material-components-web/commit/164c07365ef405a14e4375db71fbc55931aa9262))
* **data-table:** Fix icon misalignment in sort icon button when sorted down ([610c26c](https://github.com/material-components/material-components-web/commit/610c26c4a1c7928fec0e8d63be3bd76cb7ff76a0))
* **data-table:** Fix JS error in IE11 when setting multiple styles ([d548d7a](https://github.com/material-components/material-components-web/commit/d548d7a923393f4be11a7919542fa07f5a224d29))
* **data-table:** Fix pagination box height ([eb28b6e](https://github.com/material-components/material-components-web/commit/eb28b6ecc65a9979ef0959eac5dbfde5b4d3b2dc))
* **data-table:** Fix row checkbox cell's leading padding to match spec ([38ef450](https://github.com/material-components/material-components-web/commit/38ef4501f630351b32efd31ea2b870e0ed1b1b1d))
* **data-table:** Fixed default feature targeting query params of sort mixins ([e33c49e](https://github.com/material-components/material-components-web/commit/e33c49eaf9c0dbc601f3610af6358cbf2833229c))
* **data-table:** Hover styles for sortable header cell ([d580805](https://github.com/material-components/material-components-web/commit/d5808057fcdf00364731e0896ef7031ac605cf55))
* **data-table:** partial rollback of [#6390](https://github.com/material-components/material-components-web/issues/6390) ([da72839](https://github.com/material-components/material-components-web/commit/da72839f40a432c529bb24e5bc4514842627d3bf))
* **data-table:** Reverse the arrow direction icon for column sorting ([a7c827f](https://github.com/material-components/material-components-web/commit/a7c827f17ce9be631484676ccb6b5f18604803ae))
* **data-table:** Set progress indicator height to table body offset height ([c678a9d](https://github.com/material-components/material-components-web/commit/c678a9d34a3f694511f292c7a62e68749721b63c))
* **data-table:** unable to redefine colors in class-based themi… ([#5751](https://github.com/material-components/material-components-web/issues/5751)) ([4d48051](https://github.com/material-components/material-components-web/commit/4d48051c1099f48e867cf08f070138a7abc719fc))
* **data-table:** unable to redefine colors in class-based theming ([4b45b66](https://github.com/material-components/material-components-web/commit/4b45b662057edd8819f1a515db88e1c12254cc30))
* **datatable:** Fix updating the header checkbox when there are no rows in a datatable ([2ccf996](https://github.com/material-components/material-components-web/commit/2ccf996cc417b888d7ac4ceebdfa4160464a0bb1))
* **dom:** Make dom selectors in dom/announce tests scoped ([fc65fd0](https://github.com/material-components/material-components-web/commit/fc65fd00b91d388d0ad15e50a13567a8e1d425c0))
* **elevation:** Use relative path when importing theme Sass file. ([405a29a](https://github.com/material-components/material-components-web/commit/405a29a2016565f8cb269915c5f6c0d4df133c6d))
* **linear-progress:** disable animations when closed ([a831d47](https://github.com/material-components/material-components-web/commit/a831d4799b281729a932f0690b62b6bce1874799))
* **linear-progress:** performance for indeterminate animations in modern browsers ([fc0eb50](https://github.com/material-components/material-components-web/commit/fc0eb5013603a4d5cb4dbc0a999e94df64cc5005))
* **linear-progress:** Temporary rollback of [#5656](https://github.com/material-components/material-components-web/issues/5656) while updating downstream dependencies ([9cf5e98](https://github.com/material-components/material-components-web/commit/9cf5e9842475e50046462aa1c6d18e326abaee17))
* **list:** No longer emits action event when disabled item selected ([f352d03](https://github.com/material-components/material-components-web/commit/f352d03f4ed48c5019a0a3e10ef12689a5ab5619)), closes [#5571](https://github.com/material-components/material-components-web/issues/5571)
* **mdc-dialog:** second dialog `data-mdc-dialog-initial-focus` doesn't work ([a0ec7e2](https://github.com/material-components/material-components-web/commit/a0ec7e25d0ba26c2e85d5576e6af5e5d65b301a3))
* **menu-surface:** Use margin_to_edge as a viewport margin in calculations for autopositioning. ([4b04cdb](https://github.com/material-components/material-components-web/commit/4b04cdb0fc4da4831340b01292c118b120c1fcb1))
* **menusurface:** Fixing bug where body click listener is not being properly deregistered. ([5511c52](https://github.com/material-components/material-components-web/commit/5511c5254476c817b51bb2ae884f56d328348bd0)), closes [#6557](https://github.com/material-components/material-components-web/issues/6557)
* **menusurface:** synchronous quick menu does not close on button click ([45a6615](https://github.com/material-components/material-components-web/commit/45a6615e33eb8a7e6fc37e9ef43a3be3682b6b0e))
* **radio:** disabled state in IE high contrast mode ([774dcfc](https://github.com/material-components/material-components-web/commit/774dcfc8eb31e766afd0194c54edfe71a7ff7c3e))
* **segmented-button:** Fixed unit test in IE11 ([#6271](https://github.com/material-components/material-components-web/issues/6271)) ([b96fbfc](https://github.com/material-components/material-components-web/commit/b96fbfc7a9b75d7d58ecc53919c26b1cdd05d9ed))
* **segmented-button:** Move include statements to avoid nested classes ([#6380](https://github.com/material-components/material-components-web/issues/6380)) ([bcc5829](https://github.com/material-components/material-components-web/commit/bcc58290a7ac7bbbe191d00be003785017f94d29))
* **segmented-button:** Use empty clientRect in default adapter ([#6343](https://github.com/material-components/material-components-web/issues/6343)) ([9f9aac8](https://github.com/material-components/material-components-web/commit/9f9aac82595ec6eb117e101dc5e0ee0a22e81eee))
* **select:** Deduplicate change events ([4ad1274](https://github.com/material-components/material-components-web/commit/4ad12741e41c5b8e175f2bc8d5053daec6cedf18)), closes [#5570](https://github.com/material-components/material-components-web/issues/5570)
* **select:** do not emit change event when same value selected twice ([e07a708](https://github.com/material-components/material-components-web/commit/e07a7084134b6bbfb1d31a00e410b9d133f28863))
* **select:** ensure enough space for label when outlined menu opening above ([66b8ed7](https://github.com/material-components/material-components-web/commit/66b8ed7e62881b1b22b3b5a32730eac43d563cb7))
* **select:** float label on hidden-input initial value ([744bfe5](https://github.com/material-components/material-components-web/commit/744bfe5d8438b49d995ac5e2760d776a1df9838a))
* **select:** move label before selected text for screenreader a11y ([e139d62](https://github.com/material-components/material-components-web/commit/e139d626eefc941415b876597787753520a45ab1))
* **select:** prevent dropdown icon focus on IE ([b9dff0a](https://github.com/material-components/material-components-web/commit/b9dff0a19ee53e492ef9b06538dfe863214b5fc2)), closes [#6323](https://github.com/material-components/material-components-web/issues/6323)
* **select:** prevent helper text from announcing when hidden ([e056052](https://github.com/material-components/material-components-web/commit/e0560522fc2e390ee25a1968fdde3fde0cab6041))
* **select:** remove gap when outlined opened above with no label ([2fe7012](https://github.com/material-components/material-components-web/commit/2fe70126ae51043d1e733e6d4ec11452e7ed9bc4))
* **select:** remove min-width & dynamic width resizing ([d4cd83a](https://github.com/material-components/material-components-web/commit/d4cd83a857fdf072f547dc597db1f8b30d33a102))
* **select:** remove unnecessary bottom line focus selector ([32fb314](https://github.com/material-components/material-components-web/commit/32fb314cd0cc74f37f0d567a739c115daa96be95))
* **select:** revert 2fed2c1 that delegates to list for single selection logic ([38197b4](https://github.com/material-components/material-components-web/commit/38197b4434959cc8b47124233003c14d9c4a0fbf))
* **shape:** remove deprecated functions ([e2ea4a9](https://github.com/material-components/material-components-web/commit/e2ea4a99e1930ac4981f22a2b919bdbd31e75a95))
* **slider:** Fix bugs with setting slider position before component initialization: ([9110147](https://github.com/material-components/material-components-web/commit/9110147118180dc1de5c7d727fb3ecbe2507882f))
* **slider:** Move inactive track before active track, so active track consistently overlaps inactive track. ([0b7ac96](https://github.com/material-components/material-components-web/commit/0b7ac9609470218d4ed6229c7a624ed5f3984aa8))
* **slider:** Remove `width: 100%` to account for margin around slider track. ([16c563e](https://github.com/material-components/material-components-web/commit/16c563ef71555da9f02707b9f00abb4c5fc3df79))
* **snackbar:** remove use of [@at-root](https://github.com/at-root) ([98d0296](https://github.com/material-components/material-components-web/commit/98d02962b5f1edd9f541f19198dc3d1992720ea3))
* **snackbar:** Update a11y structure to announce label and actions ([40d8e47](https://github.com/material-components/material-components-web/commit/40d8e472600544fcfe8b8b9d91c62cc014995296))
* **snackbar:** Update a11y structure to announce snackbar correctly ([a3176c8](https://github.com/material-components/material-components-web/commit/a3176c8eaada1b6c61f0d678a193a26a25a773c5))
* **switch:** Adjust track width to 36px, align thumb and track. ([d716225](https://github.com/material-components/material-components-web/commit/d71622574c25840013a517749df357f7f93bc4d6))
* **switch:** always set track to transparent border ([9a169f4](https://github.com/material-components/material-components-web/commit/9a169f4b158a3148126ba38bcdfa9d163434d9bb))
* **switch:** use CSS custom properties for theming ([d6315ef](https://github.com/material-components/material-components-web/commit/d6315efe26e7baf45fd88244efbb24c612a95cb4))
* **textfield:** affix outlined alignment Safari bug ([ad4df58](https://github.com/material-components/material-components-web/commit/ad4df58c1e9ba7a893780dc5fe7886179a0361f9))
* **textfield:** autofill filled label not floating correctly ([abcdbcf](https://github.com/material-components/material-components-web/commit/abcdbcfebdcb8a8abe386abb00cd33230e8ef7a1))
* **textfield:** clean up input padding ([8639c26](https://github.com/material-components/material-components-web/commit/8639c269010b77b17f1a5052d57abcb5f7d2892a))
* **textfield:** error when notching outline with no label ([b0ed593](https://github.com/material-components/material-components-web/commit/b0ed593ccbffe7dfec51c94527cbc17000385407)), closes [#6452](https://github.com/material-components/material-components-web/issues/6452)
* **textfield:** helper text a11y interactions ([8a39352](https://github.com/material-components/material-components-web/commit/8a39352c8a787663eecb42b46939b069729fc82c))
* **textfield:** IE11 label overlapping placeholder ([781434a](https://github.com/material-components/material-components-web/commit/781434a92f4dddc9b2d39853e1f5792e89e7b45b))
* **textfield:** move notched outline/label before input ([9e2f6c4](https://github.com/material-components/material-components-web/commit/9e2f6c45016b1ccc665a271dc59134d32916123d))
* **textfield:** remove absolute positioning from icons ([1e13d1d](https://github.com/material-components/material-components-web/commit/1e13d1d5a68632f1b0b5a9134f657d59104969f4))
* **textfield:** remove Chrome icons for date types ([4951e76](https://github.com/material-components/material-components-web/commit/4951e7651ffbd99b382948e48306a23d2fd74fb1))
* **textfield:** remove deprecated dense variant in favor of density ([776291e](https://github.com/material-components/material-components-web/commit/776291ef03205e4063b4040eb66f9648e16b4af6)), closes [#4142](https://github.com/material-components/material-components-web/issues/4142)
* **textfield:** remove fullwidth variant ([69a35e8](https://github.com/material-components/material-components-web/commit/69a35e80ceadb5ef9ffae87345eefbd80b383f51))
* **theme:** add validation to host-aware to ensure proper usage ([defa599](https://github.com/material-components/material-components-web/commit/defa599a8bc17557602bbf35a8a5c760fbb053f1))
* **theme:** do not throw error when setting custom props and null ([85a5272](https://github.com/material-components/material-components-web/commit/85a5272dfeb7ad100598d480dec76b60679485f5))
* **theme:** property() mixin not working with theme key strings ([c1fec42](https://github.com/material-components/material-components-web/commit/c1fec424677fcb77dfc966ff1805d601a103fa30)), closes [#6158](https://github.com/material-components/material-components-web/issues/6158)
* server-side rendering errors in linear progress and slider ([7d0b983](https://github.com/material-components/material-components-web/commit/7d0b983a902deee6941d61906aa5a880628db4e9))
* update circular-progress import paths ([10e8c19](https://github.com/material-components/material-components-web/commit/10e8c191a0c4c9eb1703f25b66668c640f5344a6))
* **theme:** Remove duplicate [@forward](https://github.com/forward) in theme index module ([b2e80a5](https://github.com/material-components/material-components-web/commit/b2e80a5d91fc8552f22614e95f7670225f6b4248))
* **theme:** variable overrides not working with @use/with ([2d72f36](https://github.com/material-components/material-components-web/commit/2d72f365991f17e21b34be523aef3fa32b2b2fdb))
* **typography:** change $styles font-size to a Number ([6d1ea97](https://github.com/material-components/material-components-web/commit/6d1ea9761de927c1653c621444e00172f74d76c7))
* update types and deprecate old ponyfill ([af332d5](https://github.com/material-components/material-components-web/commit/af332d5bef3f826fa7a6078492d54f0444a3fee4))


### Code Refactoring

* **circular-progress:** move all sizing params from CSS to markup ([58ce529](https://github.com/material-components/material-components-web/commit/58ce529ccc29d3b172c1e774c70424eb54aac5dc))
* **linear-progress:** Restructure buffer DOM to allow translucent buffer ([98b8434](https://github.com/material-components/material-components-web/commit/98b843417ef6c0a10460532a37df389b0c7e936f))
* **linear-progress:** Restructure buffer DOM to allow translucent buffer ([9372e49](https://github.com/material-components/material-components-web/commit/9372e493954585c939f341486d0361efb87da806))
* **radio:** forward only theme mixins from MDC radio index module ([72258f8](https://github.com/material-components/material-components-web/commit/72258f89870242ba62c0ce25db680fdecb9640bc))
* **select:** consolidate state theming to single mixins ([e8bf5b2](https://github.com/material-components/material-components-web/commit/e8bf5b2ac6c89778fa38791979e4be941e28db1c))
* **theme:** move CSS declarations to utility mixin ([96a6405](https://github.com/material-components/material-components-web/commit/96a6405345ea1e1a7083bd08f8610384231d6607))


### Documentation

* **select:** update markup to include new selectedText container ([47b500a](https://github.com/material-components/material-components-web/commit/47b500a6cf888458b371734698b366fe2b4c3230))


### Features

* **animation:** Add a linear animation method ([c250ec5](https://github.com/material-components/material-components-web/commit/c250ec52ad1ce21943f4c7f521087bf2e647da00))
* **animation:** Create animation frame helper class ([e34e411](https://github.com/material-components/material-components-web/commit/e34e411b1835efa3f275921ca8c9d33d6df92bec))
* **banner:** Add banner component into MDC catalog ([aa3a3e5](https://github.com/material-components/material-components-web/commit/aa3a3e5a43b1e012e948c5f8f8b7c133d5ba6b0d))
* **banner:** Add fixed banner variant ([fd8af3d](https://github.com/material-components/material-components-web/commit/fd8af3d435e12d28cfc393762c325cc2d1b03f13))
* **banner:** Add fixed-width mixin. ([c61db90](https://github.com/material-components/material-components-web/commit/c61db90a5d3abb032cfa5940b0710770ba19c4a1))
* **banner:** Defining a z-index mixin. ([ccc64ee](https://github.com/material-components/material-components-web/commit/ccc64eea393339f38e54054bbd8865f9f78618bf))
* **banner:** Expose layout method. ([4794b25](https://github.com/material-components/material-components-web/commit/4794b25da9af4bfa7d48f5a6fc172efc45cfd999))
* **banner:** Update banner to be mobile friendly. ([dbc449b](https://github.com/material-components/material-components-web/commit/dbc449b0972362ba3c7fc04e26900d0c3e3d8b66))
* **banner:** Update close() to use CloseReason and provide programmatic way of closing ([ff88df6](https://github.com/material-components/material-components-web/commit/ff88df637a944de239b8860b5f0c38454cc6cc1b))
* **banner:** Update content to be leading as default and add support for optional centered. ([8d5b84f](https://github.com/material-components/material-components-web/commit/8d5b84fb260506c69fa93246aee538db89db8fc3))
* **button:** Expand outlined touch target to include side borders ([ce6cb70](https://github.com/material-components/material-components-web/commit/ce6cb7024d1da3b0e4fb5e2c67ba269dbb3098ec))
* **card:** Add transparent outline to elevated card, so card boundary is shown on high-contrast mode. ([c71ebfa](https://github.com/material-components/material-components-web/commit/c71ebfa02b7f3203317255e377b5cb165a0cfeac))
* **checkbox:** Add CSS custom properties to MDC checkbox theme mixins ([66669e3](https://github.com/material-components/material-components-web/commit/66669e3b668d0579ac71d6896240fd14d6a4322a))
* **checkbox:** Add support for checkbox CSS-only `indeterminate` checkbox ([b273afa](https://github.com/material-components/material-components-web/commit/b273afa93441e6d0375f7df33d5b69d8a7e1cfa8))
* **checkbox:** Added theme configuration support to checkbox ([58eaa9f](https://github.com/material-components/material-components-web/commit/58eaa9f027bb7ced126d3fe97cab5a0f627eb098))
* **checkbox:** Added theme configuration support to checkbox ([fbf73c2](https://github.com/material-components/material-components-web/commit/fbf73c2a6633298d6d65cdfcb8f76151e0e9c600))
* **checkbox:** Separate static styles from checkbox styles ([150f427](https://github.com/material-components/material-components-web/commit/150f427a01a7b20783d287cebe40bb4d93a24ce3))
* **checkbox:** Separate static styles from checkbox styles ([ff87000](https://github.com/material-components/material-components-web/commit/ff870005acef3cb26a6b4f378c012ffdb1061194))
* **checkbox:** Separate static styles from checkbox styles ([4f55400](https://github.com/material-components/material-components-web/commit/4f55400bbde3d85cacf379b7f7a80dd439952b3f))
* **chips:** Add chips styling ([1db5c9f](https://github.com/material-components/material-components-web/commit/1db5c9fc842292715f8b4603ce0b979066f1c639))
* **chips:** Add focus{in|out} handlers ([10af6cf](https://github.com/material-components/material-components-web/commit/10af6cf39cb2ae0a7deb9a951960f115f6ecdace))
* **chips:** Add keyCode support ([82fa986](https://github.com/material-components/material-components-web/commit/82fa986b95be4c16271df50effda1046d015d35c))
* **chips:** Add trailing action feature targeting test ([bec0659](https://github.com/material-components/material-components-web/commit/bec0659206aee793e6970d59c73f7969ab540b69))
* **chips:** Create trailing action business logic ([9ebee4c](https://github.com/material-components/material-components-web/commit/9ebee4ceb998e5fa651d4f147e5e39d43600db6e))
* **chips:** Expose trailing action chip files ([6b48781](https://github.com/material-components/material-components-web/commit/6b48781bf97d3b08b8f35b9eacde2b87748ae2e1))
* **chips:** Restructure trailing action mixins ([05f5e15](https://github.com/material-components/material-components-web/commit/05f5e1583b81bc00dbcd2ae21ee0acc43b3e13b4))
* **circular-progress:** Add foundation methods to get isDeterminate and progress value ([7d8f9c8](https://github.com/material-components/material-components-web/commit/7d8f9c8d73f16c01ed4a941ab9510377a0aae219))
* **circular-progress:** Add Sass styles and tests ([bd33cb5](https://github.com/material-components/material-components-web/commit/bd33cb56bdab7139052aeedbeec363f17b4dfc40))
* **circular-progress:** Add TS for foundation, adapter, component with tests ([548b1d4](https://github.com/material-components/material-components-web/commit/548b1d4057f21e066a4c494a57a0c068c23e18cd))
* **circular-progress:** support track color ([e27c580](https://github.com/material-components/material-components-web/commit/e27c5802fed20af29976f1f84bc39f9b59999ab5))
* **data-table:** Add base styles to support pagination. ([927fa90](https://github.com/material-components/material-components-web/commit/927fa902c3297a5a7cc9436e82cb81f3aabe1b4b))
* **data-table:** Add foundation methods to support loading state. ([e75deb8](https://github.com/material-components/material-components-web/commit/e75deb8540fa70236087d335c9cd6280bd643285))
* **data-table:** Add progress indicator / loading feature to data table ([4497ace](https://github.com/material-components/material-components-web/commit/4497acef8fd636b6ceef3cf055f664c92465e965))
* **data-table:** Add support for applying row checkbox density ([291b355](https://github.com/material-components/material-components-web/commit/291b3553d20c5dda9c5a80e0dda0705b524f41a3))
* **data-table:** Added styles for table in loading state ([35a32aa](https://github.com/material-components/material-components-web/commit/35a32aaeac17e290e2e9f9a1310c5a44a08f624a))
* **data-table:** Added styles to support column sorting. ([17b9699](https://github.com/material-components/material-components-web/commit/17b9699c4454a107043e5a1f9874a091089dd112))
* **data-table:** Added support for sticky header row in data table ([599b8c3](https://github.com/material-components/material-components-web/commit/599b8c3191a888e3debd94ad4934f741c5fb6e23))
* **data-table:** Foundation changes to support column sorting ([6ee0355](https://github.com/material-components/material-components-web/commit/6ee03557260d0a23296e36cba5aaa76fe0cf96a6))
* **data-table:** Set progress indicator styles based on table body height ([c026422](https://github.com/material-components/material-components-web/commit/c0264227393df8eb9259a2b24c23b31fe0ca84f3))
* **dom:** Add keyboard support ([5f24faa](https://github.com/material-components/material-components-web/commit/5f24faacb1ef8996ae81f3a1c1e43910ba67b024))
* **drawer:** expose --mdc-theme-surface custom prop ([319bf66](https://github.com/material-components/material-components-web/commit/319bf66dead88f67dba64f9d50a6f3f0d82aad72)), closes [#6466](https://github.com/material-components/material-components-web/issues/6466)
* **elevation:** add custom props for overlay ([4c354a3](https://github.com/material-components/material-components-web/commit/4c354a36d012e5d241f27380db1d0d9e70769c27))
* **fab:** Add focus outline mixins to MDC Fab ([0f60323](https://github.com/material-components/material-components-web/commit/0f60323a8365901c4ff6fd956161b99d8f413927))
* **fab:** Add focus outline mixins to MDC Fab ([7a9afaf](https://github.com/material-components/material-components-web/commit/7a9afaf4b503bc0d1d135b8d88edd4a7ed02e52e))
* **fab:** support css custom props for extended-padding ([01db890](https://github.com/material-components/material-components-web/commit/01db890532f796ea3e66a9c7d76893bef8689d6f))
* **form-field:** Add support for space-between ([e84b9c8](https://github.com/material-components/material-components-web/commit/e84b9c816d32da6dec058d92fc21dc5ac8fec787)), closes [#5747](https://github.com/material-components/material-components-web/issues/5747)
* **formfield:** add nowrap class/prop to MDC/MWC ([c4b4bba](https://github.com/material-components/material-components-web/commit/c4b4bba9659bf15207e79b1f63fcc9946404d9c7))
* **iconbutton:** Add icon button variant which supports toggling aria label. ([f838c6e](https://github.com/material-components/material-components-web/commit/f838c6e55672268de4e6e3b31b154d4f9050242f))
* **linear-progress:** Add foundation methods to fetch progress and determinate state. ([4dc45af](https://github.com/material-components/material-components-web/commit/4dc45af6c4bc81f5734a24c160046d283c1e9a6d))
* **list:** Add transparent-border for aria-activedescendant usage ([8388a9b](https://github.com/material-components/material-components-web/commit/8388a9bf6f4db77656adcdd604125eb205694b10))
* **menu:** Add mixin to flatten menu top when opened-below anchor ([1e17c49](https://github.com/material-components/material-components-web/commit/1e17c49b360fd0e01c9a74b92978031534003b5b))
* **menu-surface:** Add transition to height for menu resizing animation. ([1e7cb61](https://github.com/material-components/material-components-web/commit/1e7cb61989c95f9b86de3b1f6edb1773c12dfc97))
* **ripple:** Add will-change opt-out param ([e590b37](https://github.com/material-components/material-components-web/commit/e590b376bf20bde50e6f6b62339c0bac2703ccf0))
* **ripple:** Reorganize ripple opacities ([008c4d3](https://github.com/material-components/material-components-web/commit/008c4d3191f9c2a76732688504d2299420734cdd))
* **segmented-button:** add adapters and foundations ([#6165](https://github.com/material-components/material-components-web/issues/6165)) ([6ed717d](https://github.com/material-components/material-components-web/commit/6ed717dddf5f62dd5bfc621388ae07471775612f))
* **segmented-button:** Add component outlines ([#6222](https://github.com/material-components/material-components-web/issues/6222)) ([a0f1202](https://github.com/material-components/material-components-web/commit/a0f1202dc5cd67207877167558742d0b18bf0e32))
* **segmented-button:** Add initial Sass styles ([#6141](https://github.com/material-components/material-components-web/issues/6141)) ([7555383](https://github.com/material-components/material-components-web/commit/75553837cce5cb9d52d5561f5729d110e71af401))
* **segmented-button:** Add MDC segmented button into material-components-web ([596e984](https://github.com/material-components/material-components-web/commit/596e984242fdef685dae49e2c84305e55c9ea724))
* **segmented-button:** Add new package for segmented button ([#6073](https://github.com/material-components/material-components-web/issues/6073)) ([d561860](https://github.com/material-components/material-components-web/commit/d5618602a8ef45a1fdf753c3598afc5e1cadc95b))
* **segmented-button:** Add ripple and touch-target support ([#6277](https://github.com/material-components/material-components-web/issues/6277)) ([e3b7462](https://github.com/material-components/material-components-web/commit/e3b746208db04f3922fabba77986f9f02f422d75))
* **segmented-button:** Add select validations for singleSelect ([#6381](https://github.com/material-components/material-components-web/issues/6381)) ([2e8c3dd](https://github.com/material-components/material-components-web/commit/2e8c3dd2e0622957a373286f14720de36afb5ba4))
* **segmented-button:** Added foundation business logic ([#6198](https://github.com/material-components/material-components-web/issues/6198)) ([e6e2301](https://github.com/material-components/material-components-web/commit/e6e23019d567802c13d0bd6559a35291c48abc91))
* **segmented-button:** Implement components ([#6223](https://github.com/material-components/material-components-web/issues/6223)) ([ac405ea](https://github.com/material-components/material-components-web/commit/ac405eae1b80f719a80dc4fec663b763e73cdf5d))
* **select:** move selectedText into its own text node ([0bc41a9](https://github.com/material-components/material-components-web/commit/0bc41a9c75392352e8a31eb9d46f1a1457ffe732))
* **select:** support hidden input ([fda053e](https://github.com/material-components/material-components-web/commit/fda053eb848395ebfa9266e4535013e1a3be8486)), closes [#5428](https://github.com/material-components/material-components-web/issues/5428)
* **select:** truncate with ellipses by default ([83d83f1](https://github.com/material-components/material-components-web/commit/83d83f131118073943a6a45923b37b3a961bd894))
* **slider:** Add hooks into dragStart/dragEnd events to slider foundation. ([85a1fa9](https://github.com/material-components/material-components-web/commit/85a1fa9eab3010f2c41f5f65ca80a7f34bc46b2c))
* **slider:** Add M2 version of slider. ([8158544](https://github.com/material-components/material-components-web/commit/8158544774c50ba21b114f6fe24786816ba4c4fd))
* **slider:** Add support for customizing tick marks opacity, and document tick mark DOM structure for rendering tick marks before component initialization. ([238216f](https://github.com/material-components/material-components-web/commit/238216fc466a1b0dd5f4f05f10a083949e1b99d9))
* **slider:** Add support for setting `aria-valuetext` on slider thumbs. ([fd608ff](https://github.com/material-components/material-components-web/commit/fd608ff66bbb2f765fa1c092427fba9e61a074f3))
* **slider:** Add support for styling initial thumb/track before component JS initialization. ([08ca4d0](https://github.com/material-components/material-components-web/commit/08ca4d0ec5f359bc3a20bd2a302fa6b733b5e135))
* **slider:** Add support for theming disabled colors. ([d52b165](https://github.com/material-components/material-components-web/commit/d52b165b5869309705068ab58803cef426f1e590))
* **snackbar:** Update stacked layout to add an additional 8px on the label's right padding ([521afaf](https://github.com/material-components/material-components-web/commit/521afaf6e3086285b040c06fc3dbc92f20dc9b06))
* **textfield:** add autovalidation customization ([2ab716c](https://github.com/material-components/material-components-web/commit/2ab716cbda14aca5a8b62cdae3c71c2d629b16f7))
* **textfield:** add filled class variant ([b70bc60](https://github.com/material-components/material-components-web/commit/b70bc601ef570dab4598ae6f3ca51bbf884fac96))
* **textfield:** add forced LTR input ([490fbdc](https://github.com/material-components/material-components-web/commit/490fbdc092c5c59d63f83407b83b37fb524ed0e5))
* **textfield:** add prefix and suffix ([6601d24](https://github.com/material-components/material-components-web/commit/6601d24afdc3a3d0bd2a9b3fcca68c35c9415ec1)), closes [#1892](https://github.com/material-components/material-components-web/issues/1892)
* **textfield:** add specific label-floating class ([a88c8e4](https://github.com/material-components/material-components-web/commit/a88c8e4dc873ae74a3afbae0dc8635dfaa03e67b))
* **textfield:** Create float transition mixin ([ca61b65](https://github.com/material-components/material-components-web/commit/ca61b656fababdf25adaa307963d4f37e6d413ec))
* **textfield:** Limit notched outline max-width ([0ab62a6](https://github.com/material-components/material-components-web/commit/0ab62a65b17192a94102231ca63f54adc39675ae))
* **textfield:** Using touch-target-mixins to increase the touch target size on trailing icons on text fields. ([174c0be](https://github.com/material-components/material-components-web/commit/174c0becfc802e4366e4814758f28cb1ecf2c75a))
* **theme:** add calc() string replacement to property mixin ([79414bf](https://github.com/material-components/material-components-web/commit/79414bf9f93aae12bc394fd518b6cb401e5ddb26))
* **theme:** add deep-get utility ([fb5a4cd](https://github.com/material-components/material-components-web/commit/fb5a4cdeb79de0412a9e0573db1dacb28e8186f3))
* **theme:** add shadow-dom host-aware helpers ([0a2e7fc](https://github.com/material-components/material-components-web/commit/0a2e7fc8976e6481c9225609d7ff5354362472fa)), closes [#6295](https://github.com/material-components/material-components-web/issues/6295)
* **theme:** add state helper functions ([0809012](https://github.com/material-components/material-components-web/commit/08090126b4eff43f82188ee1dae5c8deda33d2ef))
* **tooltip:** Add 500ms delay before showing tooltip. ([a1c6559](https://github.com/material-components/material-components-web/commit/a1c65593d3c1f594a35561569357bb657dd50408))
* **tooltip:** add position options for y-axis ([91ab1c6](https://github.com/material-components/material-components-web/commit/91ab1c62a4e00ae844d444882582d2052aaf228a))
* **tooltip:** Add tooltip component into MDC catalog. ([b9394dc](https://github.com/material-components/material-components-web/commit/b9394dc5da7db3b60497cf81aa5f26a5758d9b37))
* **tooltip:** Adding option to render tooltips as hidden from a screenreader. This should only be utilized in situations where the tooltip label hold information duplicated from an accessible name on the anchor element (e.g. tooltip label is the same as the aria-label on an icon button) ([546277d](https://github.com/material-components/material-components-web/commit/546277d323c484ddf181afffed153f4f17c9f4a7))
* **tooltip:** Adding transparent border around tooltip so it is distinguished from the background in high contrast mode. ([02e372c](https://github.com/material-components/material-components-web/commit/02e372c5f02afaf66e06e733a08c6c704c16843c))
* **tooltip:** Adjusting tooltip z-index so tooltip appears above other content on the page. ([c285200](https://github.com/material-components/material-components-web/commit/c2852000d97ed49c5f8ab82b5911deb1c87a9025))
* **tooltip:** Adjustments to tooltip structure. ([19bea2a](https://github.com/material-components/material-components-web/commit/19bea2ad3d6c6aa36e0d033af7adebd010dcd4fa))
* **tooltip:** Center align tooltip label text. ([5dac1f6](https://github.com/material-components/material-components-web/commit/5dac1f624606fc92682a4266ffd68bea21e57069))
* **tooltip:** Creating method to clear any in-progress animations before starting new ones. ([61f1a8d](https://github.com/material-components/material-components-web/commit/61f1a8d8599f6dfaa7fc6c64d661010df47839b7))
* **tooltip:** Defining a z-index mixin. ([f4848eb](https://github.com/material-components/material-components-web/commit/f4848eb3b57d81fd4fed1396cdc22a83344ccd72))
* **tooltip:** Foundation will now send a notification when the tooltip has been hidden. Methods added into the adapter to allow for this functionality. ([9274f85](https://github.com/material-components/material-components-web/commit/9274f8504a905e04f24fba8f6a0e246d7ae3a638))
* **typography:** add container baseline mixins for flexbox ([69edc6e](https://github.com/material-components/material-components-web/commit/69edc6e2899636cfccb117376bb64dc0a267c588))
* add custom property support for select, textfield, and notched outline ([ec23858](https://github.com/material-components/material-components-web/commit/ec2385881f93b75641db661038aae439b4c217d1))


### Reverts

* "Include tooltip directory for future copybara syncs." ([#6185](https://github.com/material-components/material-components-web/issues/6185)) ([b0c456d](https://github.com/material-components/material-components-web/commit/b0c456d330f31bc890c54d114de1d56ac23fee9f))
* feat(checkbox): Added theme configuration support to checkbox ([cf80012](https://github.com/material-components/material-components-web/commit/cf800124fdaeea04b3fd45f8718a2980dd01a0df))


### BREAKING CHANGES

* **banner:** Added wrapper div to text/graphic for mobile friendly view, see README.md for more info.
* **typography:** `typography.baseline-top()` and `typography.baseline-bottom()` are now private. Use `typography.baseline()` for containers and `typography.text-baseline()` for text with $top and $bottom params.
* **banner:** Dom structure change, see README.md
* **select:** selected text node now needs to be wrapped in an outer `mdc-select__selected-text-container` span; see README for updated markup
* **datatable:** Header checkboxes will now be unchecked if layout is called when there are no rows.
* **banner:** Updated adapter to use CloseReason types
* **checkbox:** Renamed mixin `ripple()` => `ripple-styles()` in MDC checkbox
* **checkbox:** Renamed mixin `ripple()` => `ripple-styles()` in MDC checkbox
* **checkbox:** Renamed mixin `ripple()` => `ripple-styles()` in MDC checkbox
* **theme:** $ie-fallback variable has been moved and renamed to $enable-fallback-declarations in `@material/theme/css`
* **select:** select theming mixins which were previously "stateful" (e.g. `hover-label-color()`) are combined into the non-stateful mixin (e.g. `label-color()`). The default state of the mixin can be set as normal, or a Map of states can be provided to optionally set one or more states of the mixin (e.g. `label-color((hover: blue))`). See the `@material/theme/state` package for more details.
* **textfield:** adapter method `getAttr` added on helper text subcomponent; adapter method `setInputAttr` and `removeInputAttr` added on main component
* **textfield:** the notched outline and label should now appear before the input in the text field's DOM structure for a11y navigation
* **slider:** This upgrades the old slider to a new version of slider that adheres to the M2 design spec. Changes include:
- M2 design (primary instead of secondary color used, larger active track and thumb, improved tick marks UI)
- Range (two-thumb slider) slider
- Pointer events support (for browsers that support pointer events)
- High contrast mode support
- Improved accessibility (follows WAI-ARIA spec for slider)
* **circular-progress:** DOM Changed. See README for updated markup. `$default-size`, `$stroke-width`, and `$container-side-length` variables removed.
* **snackbar:** The right padding of the label for the `mdc-snackbar--stacked` variant will now have an additional 8px
* **data-table:** New adapter method replacing `getTableBodyHeight()` => `getTableHeaderHeight()` and changed return types of this method.
* **textfield:** Default textfields must now specify mdc-text-field--filled. Disabled outlined textfields no longer have a shaded background. Height mixin no longer specifies a baseline override, use typography's baseline-top mixin.
* **textfield:** mdc-text-field--dense and associated mixins/variables have been removed. Use the density() mixin instead.
* **textfield:** removed the following variables: `$input-padding`, `$input-padding-top`, `$input-padding-bottom`, `$outlined-input-padding-top`, `$outlined-input-padding-bottom`, `$input-border-bottom`
* **linear-progress:** DOM for linear progress buffer changed. MDCLinearProgressAdapter method `getBuffer`, `getPrimaryBar`, `setStyle` removed. MDCLinearProgressAdapter method `setBufferBarStyle`, `setPrimaryBarStyle` added.
* **linear-progress:** DOM for linear progress buffer changed. MDCLinearProgressAdapter method `getBuffer`, `getPrimaryBar`, `setStyle` removed. MDCLinearProgressAdapter method `setBufferBarStyle`, `setPrimaryBarStyle` added.
* **radio:** MDC radio _index Sass module will only export theme mixins


# [7.0.0](https://github.com/material-components/material-components-web/compare/v6.0.0...v7.0.0) (2020-06-23)


### Bug Fixes

* **base:** Add EDITING and EDITABLE states to the chip. ([cf3b664](https://github.com/material-components/material-components-web/commit/cf3b664ab1f12b17ea827ad1e2870977b9836e5b))
* **base:** Causes internal text in a chip to not overflow and instead be truncated by ellipsis. ([b83d720](https://github.com/material-components/material-components-web/commit/b83d720ee41acb13e3e6ca69431f718c7887c1de))
* **base:** Make the root property public ([51d4535](https://github.com/material-components/material-components-web/commit/51d4535fe39a2448fbba1ec995bb9980357545fa))
* **base:** Remove "foundation_" from MDCComponent ([8c6d7e0](https://github.com/material-components/material-components-web/commit/8c6d7e0766d8958a8d4ffea35acee9d6841dafd4))
* **base:** Remove trailing underscore "adapter_" ([5b5f62f](https://github.com/material-components/material-components-web/commit/5b5f62f9397100a9dd97c257b930e686837c4ceb))
* **base:** Remove trailing underscore from superclass properties ([62b5f37](https://github.com/material-components/material-components-web/commit/62b5f37db092df4441abdf5e4ee0b32dceee8c7c))
* **button:** Correct misspelling of overflow ([29debfe](https://github.com/material-components/material-components-web/commit/29debfea704941e80f1d337880b4a18142c11561))
* **button:** Correct misspelling of overflow ([99d2fc9](https://github.com/material-components/material-components-web/commit/99d2fc961be8cd7e8316b40dcf9754a536d29991))
* **button:** Correct misspelling of overflow ([28d32f8](https://github.com/material-components/material-components-web/commit/28d32f8e0d923099221fe7d3853177243e0fd243))
* **button:** Move theme-baseline() into base Sass. ([080965f](https://github.com/material-components/material-components-web/commit/080965f3952b32105419558c0167873554234dd0))
* **button:** Remove misspelled label-overlow-ellipsis ([e59906a](https://github.com/material-components/material-components-web/commit/e59906a57e91604f918c8ccd350f93a9a802e412))
* **checkbox:** Use secondary and on-secondary as default colors ([b95172e](https://github.com/material-components/material-components-web/commit/b95172e69613c0defe82191b86ed1c1999b74400)), closes [#5730](https://github.com/material-components/material-components-web/issues/5730)
* **checkbox:** Use superclass properties without trailing underscores ([2e218db](https://github.com/material-components/material-components-web/commit/2e218dbf8810548de27b683ed6e25d5fb1cbbc23))
* **chips:** Handle IE/Edge specific key names in keyboard navigation logic ([3657f88](https://github.com/material-components/material-components-web/commit/3657f886327182c26f1d1555b2ac67c2128140b5))
* **chips:** Use superclass properties without trailing underscores ([cf7747e](https://github.com/material-components/material-components-web/commit/cf7747ef72efb4affe2dd920a6641f730f3bcfcd))
* **circular-progress:** Add .npmignore file to ignore typescript files when publishing ([#5801](https://github.com/material-components/material-components-web/issues/5801)) ([f172b0f](https://github.com/material-components/material-components-web/commit/f172b0f90a91d8d3d700763d1496bb7b9c1a8d51)), closes [#5800](https://github.com/material-components/material-components-web/issues/5800)
* **circular-progress:** fix determinate transition typo & 4 color keyframes ([a301636](https://github.com/material-components/material-components-web/commit/a3016368df53b1c7967d7d146a9ea53a24442fa9))
* **circular-progress:** Fix naming in package.json and add to jsBundleFactory ([86f7cad](https://github.com/material-components/material-components-web/commit/86f7cad8330dbd600e478610eefd8dd92eb3d8c7))
* **circular-progress:** Force LTR layout ([6a40ef2](https://github.com/material-components/material-components-web/commit/6a40ef217f597138ee2920d2160364649dbf5620))
* **circular-progress:** Switch mixins import to `[@use](https://github.com/use)` ([098ae32](https://github.com/material-components/material-components-web/commit/098ae3285223af2532659dec233537a55c1183f5))
* **circularprogress:** Use superclass properties without trailing underscores ([da05f66](https://github.com/material-components/material-components-web/commit/da05f66e10f8efe5c425cec7f140ed399b11bd3f))
* **data-table:** Fix pagination box height ([eb28b6e](https://github.com/material-components/material-components-web/commit/eb28b6ecc65a9979ef0959eac5dbfde5b4d3b2dc))
* **data-table:** Fixed alignment of numeric header cell with sort button. ([2139200](https://github.com/material-components/material-components-web/commit/2139200b3ed2b57d74a02701bfef23a983d19cdf))
* **data-table:** Fixed default feature targeting query params of sort mixins ([e33c49e](https://github.com/material-components/material-components-web/commit/e33c49eaf9c0dbc601f3610af6358cbf2833229c))
* **data-table:** Fixed horizontal scrolling issue with pagination controls ([b065a4d](https://github.com/material-components/material-components-web/commit/b065a4d2bd351b86277f5a2f4d512fb6c243c7ce))
* **data-table:** Hover styles for sortable header cell ([d580805](https://github.com/material-components/material-components-web/commit/d5808057fcdf00364731e0896ef7031ac605cf55))
* **data-table:** Make row checkbox table cell fixed even when table is wide ([a6ac8f6](https://github.com/material-components/material-components-web/commit/a6ac8f629b45e46d598b4b531fed8300fb5a8eef))
* **data-table:** not inverting text alignment in rtl ([bd8d1aa](https://github.com/material-components/material-components-web/commit/bd8d1aafab5c6da614135702f5814447de5ea448))
* **data-table:** Removed overflow-x from root element ([4ebce8d](https://github.com/material-components/material-components-web/commit/4ebce8d787db92afb4c1f9d2a10268a62d188d43))
* **data-table:** Reverse the arrow direction icon for column sorting ([a7c827f](https://github.com/material-components/material-components-web/commit/a7c827f17ce9be631484676ccb6b5f18604803ae))
* **data-table:** unable to redefine colors in class-based themi… ([#5751](https://github.com/material-components/material-components-web/issues/5751)) ([4d48051](https://github.com/material-components/material-components-web/commit/4d48051c1099f48e867cf08f070138a7abc719fc))
* **data-table:** unable to redefine colors in class-based theming ([4b45b66](https://github.com/material-components/material-components-web/commit/4b45b662057edd8819f1a515db88e1c12254cc30))
* **datatable:** Use superclass properties without trailing underscores ([862d0d7](https://github.com/material-components/material-components-web/commit/862d0d7bce4fc30a1947d1ff7cb7286c106dd9e5))
* **dialog:** Change scale(1) to `transform:none` ([9ea5207](https://github.com/material-components/material-components-web/commit/9ea52070f4f9693266a20311cce15700e84696c3))
* **dialog:** Only equalize paddings for scrollable dialogs with titles, since there is no added divider between title/content in this case. ([8135cc0](https://github.com/material-components/material-components-web/commit/8135cc085a5cd548cf8c8fba4bb43a21bcd3fd46))
* **dialog:** Use superclass properties without trailing underscores ([b4e2fe9](https://github.com/material-components/material-components-web/commit/b4e2fe9f4bf690968d0ac47da0ca4a64ee8d7a88))
* **dom:** Clear out announcer regions on document click ([c67667e](https://github.com/material-components/material-components-web/commit/c67667e8e213ed4686889cb3962685444bd885c6))
* **drawer:** Use superclass properties without trailing underscores ([a66493c](https://github.com/material-components/material-components-web/commit/a66493cd8e9717ce32218fb877ca2258ea6ee880))
* **floating-label:** Use superclass properties without trailing underscores ([5cea261](https://github.com/material-components/material-components-web/commit/5cea2610f2f46bbe193683668044116d78b7e2d6))
* **form-field:** Use superclass properties without trailing underscores ([7fd792b](https://github.com/material-components/material-components-web/commit/7fd792bb9841501ecbc35b4024a00e07216fb95b))
* **icon-button:** Use superclass properties without trailing underscores ([740860e](https://github.com/material-components/material-components-web/commit/740860e789992163537cc7138d6c21672adb79d0))
* **line-ripple:** Use superclass properties without trailing underscores ([a4aae3d](https://github.com/material-components/material-components-web/commit/a4aae3d3710ba5eb86f27dee230064dfccf2e73f))
* **linear-progress:** Temporary rollback of [#5656](https://github.com/material-components/material-components-web/issues/5656) while updating downstream dependencies ([9cf5e98](https://github.com/material-components/material-components-web/commit/9cf5e9842475e50046462aa1c6d18e326abaee17))
* **linear-progress:** Use superclass properties without trailing underscores ([8e17857](https://github.com/material-components/material-components-web/commit/8e17857d0a8d301f54fac64cc83804928ec1ff83))
* **list:** No longer emits action event when disabled item selected ([f352d03](https://github.com/material-components/material-components-web/commit/f352d03f4ed48c5019a0a3e10ef12689a5ab5619)), closes [#5571](https://github.com/material-components/material-components-web/issues/5571)
* **list:** Preserve aspect ratio of the original image when using it as the icon or avatar for a list. ([be4a19f](https://github.com/material-components/material-components-web/commit/be4a19f9f0668e4fc303d2e60e81473ac11d68be))
* **list:** Remove obsolete non-interactive class & :not selectors ([2553e86](https://github.com/material-components/material-components-web/commit/2553e86fee2753ec59f1fbc91764bf110ad9d3aa))
* **list:** Use superclass properties without trailing underscores ([4847dd7](https://github.com/material-components/material-components-web/commit/4847dd7645adf463ea947fc2afb346df648a1ffc))
* **menu:** Do not set selectedIndex for menu items that have a negative recomputedIndex. ([ef3a095](https://github.com/material-components/material-components-web/commit/ef3a095336a205fa9473a8c6e4940c3f9cccf5ea))
* **menu:** Use superclass properties without trailing underscores ([0008c8a](https://github.com/material-components/material-components-web/commit/0008c8a91a4da2c0c95fe092395cc575cbf23769))
* **menu-surface:** Use margin_to_edge as a viewport margin in calculations for autopositioning. ([4b04cdb](https://github.com/material-components/material-components-web/commit/4b04cdb0fc4da4831340b01292c118b120c1fcb1))
* **menu-surface:** Use superclass properties without trailing underscores ([62abbc8](https://github.com/material-components/material-components-web/commit/62abbc8d762c6c903d4a13817a0b71555764e0df))
* **menusurface:** open and closed events not fired when already opened or closed ([9cff431](https://github.com/material-components/material-components-web/commit/9cff4318f0fe8a79f8787afd148907328a5223d5))
* **menusurface:** synchronous quick menu does not close on button click ([45a6615](https://github.com/material-components/material-components-web/commit/45a6615e33eb8a7e6fc37e9ef43a3be3682b6b0e))
* **notched-outline:** Use superclass properties without trailing underscores ([49bf31d](https://github.com/material-components/material-components-web/commit/49bf31d5c9c3ee34e9a51ce3b254a9101c578045))
* **radio:** Use superclass properties without trailing underscores ([541638f](https://github.com/material-components/material-components-web/commit/541638fa2ba3410ca1055c5ae563face06fd20be))
* **ripple:** Use superclass properties without trailing underscores ([6167cd0](https://github.com/material-components/material-components-web/commit/6167cd0756a623502f7f84750dcda25226a59794))
* **select:** Also set font size for icon ([c113fc9](https://github.com/material-components/material-components-web/commit/c113fc942a88e2c53b2c36229b2ddff84e6d0eb5))
* **select:** clean up helper text interactions ([654934d](https://github.com/material-components/material-components-web/commit/654934dfaff71dae2b56bd2d4bb04303f5439c3e))
* **select:** Close menu on anchor click when menu is open ([8fa22aa](https://github.com/material-components/material-components-web/commit/8fa22aaccafa3b1ae09164b228d8e1b203337221))
* **select:** Deduplicate change events ([4ad1274](https://github.com/material-components/material-components-web/commit/4ad12741e41c5b8e175f2bc8d5053daec6cedf18)), closes [#5570](https://github.com/material-components/material-components-web/issues/5570)
* **select:** Fix redundant calculations & allow resyncing foundation to options ([ff4bc63](https://github.com/material-components/material-components-web/commit/ff4bc632aeeefb8eca16d774db01f8f176479659)), closes [#5646](https://github.com/material-components/material-components-web/issues/5646) [#5646](https://github.com/material-components/material-components-web/issues/5646) [#5686](https://github.com/material-components/material-components-web/issues/5686) [#5783](https://github.com/material-components/material-components-web/issues/5783)
* **select:** fix screenreader click interactions ([8904f3c](https://github.com/material-components/material-components-web/commit/8904f3cbe922c5b64f5b7297f23c49861ee13f07))
* **select:** fully separate density mixins for filled variants ([d66d22b](https://github.com/material-components/material-components-web/commit/d66d22bf9b9f221ff8b2d713b1e2fc9288f490df))
* **select:** Make compatible with rich list-items ([0a7895f](https://github.com/material-components/material-components-web/commit/0a7895f4d4c22296ad23b2d8a7e1a4dbe231b941))
* **select:** Remove pointer events where unnecessary ([0e052b2](https://github.com/material-components/material-components-web/commit/0e052b24f415b81fbffb45182030dd8b9d68ee98))
* **select:** Set aria-selected="false" properly ([730920f](https://github.com/material-components/material-components-web/commit/730920fbba046b0a7c3821f52877504a78373f1f))
* **select:** Update disabled state ([f83e008](https://github.com/material-components/material-components-web/commit/f83e00898fb57e49e38ef59b3458df4525332302))
* **select:** Update dropdown arrow icon transitions ([15d6544](https://github.com/material-components/material-components-web/commit/15d65448e5dd8a29477b34754264644ad88f8421))
* **select:** Update markup in tests and README ([e3eacef](https://github.com/material-components/material-components-web/commit/e3eacefcc0ca3ca89af34b3e4d3dc13c5a27570b))
* **select:** Use key constants from DOM package ([388b042](https://github.com/material-components/material-components-web/commit/388b042c7193f78874a8854664742fc7285f1386))
* **select:** Use superclass properties without trailing underscores ([c472bbb](https://github.com/material-components/material-components-web/commit/c472bbbd1aa5e362c227a1c5204601362444d22f))
* **slider:** avoid server side rendering error ([95c7355](https://github.com/material-components/material-components-web/commit/95c73550e886c2832aa42cd065552551b6690a61))
* **slider:** mobile sliding regression ([e844443](https://github.com/material-components/material-components-web/commit/e844443878b9711a306e72b951c7ea931b17d837)), closes [#5894](https://github.com/material-components/material-components-web/issues/5894)
* **slider:** two change events fired on each up ([d10412c](https://github.com/material-components/material-components-web/commit/d10412cb24150639acc617caef1c7fac4fb6e4bd))
* **snackbar:** Use superclass properties without trailing underscores ([39b0b8e](https://github.com/material-components/material-components-web/commit/39b0b8e06ef68d5b59515454907b5472ce75b842))
* **snackbar:** Use superclass properties without trailing underscores ([5ea0f3f](https://github.com/material-components/material-components-web/commit/5ea0f3fc47e8bd18fcc8fd3af84fcecc17b3f800))
* **switch:** always set track to transparent border ([9a169f4](https://github.com/material-components/material-components-web/commit/9a169f4b158a3148126ba38bcdfa9d163434d9bb))
* **switch:** use CSS custom properties for theming ([d6315ef](https://github.com/material-components/material-components-web/commit/d6315efe26e7baf45fd88244efbb24c612a95cb4))
* **tab:** Use superclass properties without trailing underscores ([a4b2e61](https://github.com/material-components/material-components-web/commit/a4b2e61d47b515a0ebbdee788e8462d800bea7f3))
* **tab-bar:** Use superclass properties without trailing underscores ([f2de07c](https://github.com/material-components/material-components-web/commit/f2de07c606c8d57942d5f0022e90eecb41b3ad61))
* **tab-indicator:** Use superclass properties without trailing underscores ([d30a214](https://github.com/material-components/material-components-web/commit/d30a214ace1c0ae41fd5d7f8ba4915035fd9235a))
* **tab-scroller:** Use superclass properties without trailing underscores ([96dba1d](https://github.com/material-components/material-components-web/commit/96dba1d3127c9364cff5786a01be8c17f69ab0ee))
* **text-field:** Use superclass properties without trailing underscores ([e6165eb](https://github.com/material-components/material-components-web/commit/e6165eb156d60f8f650c68931854136a1a44fc6e))
* **textfield:** clean up input padding ([8639c26](https://github.com/material-components/material-components-web/commit/8639c269010b77b17f1a5052d57abcb5f7d2892a))
* **textfield:** core-styles now applies sub-element core-styles ([bcdad99](https://github.com/material-components/material-components-web/commit/bcdad99bbf9ac4d2bbc09cf6378c0c040521e514)), closes [#5927](https://github.com/material-components/material-components-web/issues/5927)
* **textfield:** IE11 label overlapping placeholder ([781434a](https://github.com/material-components/material-components-web/commit/781434a92f4dddc9b2d39853e1f5792e89e7b45b))
* fix show/hide clauses in import-only files ([148e448](https://github.com/material-components/material-components-web/commit/148e448de1290e3628fac6eae19609c8e1bffda3))
* **textfield:** remove absolute positioning from icons ([1e13d1d](https://github.com/material-components/material-components-web/commit/1e13d1d5a68632f1b0b5a9134f657d59104969f4))
* mark all packages as side-effect-free ([be7cb05](https://github.com/material-components/material-components-web/commit/be7cb05996a7281d1e0c12c0f4677e4d091a2329))
* server-side rendering errors in linear progress and slider ([7d0b983](https://github.com/material-components/material-components-web/commit/7d0b983a902deee6941d61906aa5a880628db4e9))
* **textfield:** remove deprecated dense variant in favor of density ([776291e](https://github.com/material-components/material-components-web/commit/776291ef03205e4063b4040eb66f9648e16b4af6)), closes [#4142](https://github.com/material-components/material-components-web/issues/4142)
* **textfield:** textarea density label position is now correct ([2f8a227](https://github.com/material-components/material-components-web/commit/2f8a227a289a56702fec6592a87cf8bab422326a))
* **textfield:** textarea min-width not set correctly for Chrome ([0a371b4](https://github.com/material-components/material-components-web/commit/0a371b4fe4ca4452618a867aac1731c6d3136b91))
* **textfield:** update outlined textarea specs ([524b7b8](https://github.com/material-components/material-components-web/commit/524b7b8127e74bc3d551bd3b81e951fc51682665))
* **top-app-bar:** Use superclass properties without trailing underscores ([863ac1b](https://github.com/material-components/material-components-web/commit/863ac1b0f1723883565ca813d56bba0a1c8a832f))


### Code Refactoring

* **linear-progress:** Restructure buffer DOM to allow translucent buffer ([98b8434](https://github.com/material-components/material-components-web/commit/98b843417ef6c0a10460532a37df389b0c7e936f))
* **linear-progress:** Restructure buffer DOM to allow translucent buffer ([9372e49](https://github.com/material-components/material-components-web/commit/9372e493954585c939f341486d0361efb87da806))
* **select:** Fix alignment issues, upgrade anchor to interactive element ([28d10a9](https://github.com/material-components/material-components-web/commit/28d10a96e1d5e5762d5a056ac805070e9fb6a4e1)), closes [#5428](https://github.com/material-components/material-components-web/issues/5428)


### Features

* **button:** Add button ripple-states mixin, for simpler customization of button ripple color. ([ed7f324](https://github.com/material-components/material-components-web/commit/ed7f324636287e95e8d966866a7c72af94377cf6))
* **button:** Expand outlined touch target to include side borders ([ce6cb70](https://github.com/material-components/material-components-web/commit/ce6cb7024d1da3b0e4fb5e2c67ba269dbb3098ec))
* **checkbox:** Add support for checkbox CSS-only `indeterminate` checkbox ([b273afa](https://github.com/material-components/material-components-web/commit/b273afa93441e6d0375f7df33d5b69d8a7e1cfa8))
* **chips:** Add chips styling ([1db5c9f](https://github.com/material-components/material-components-web/commit/1db5c9fc842292715f8b4603ce0b979066f1c639))
* **chips:** Add configurable primary action focus ([deb212d](https://github.com/material-components/material-components-web/commit/deb212de41e1073f7ff00af92e5f37bad0d8c4b0))
* **chips:** Add focus{in|out} handlers ([10af6cf](https://github.com/material-components/material-components-web/commit/10af6cf39cb2ae0a7deb9a951960f115f6ecdace))
* **chips:** Add keyCode support ([82fa986](https://github.com/material-components/material-components-web/commit/82fa986b95be4c16271df50effda1046d015d35c))
* **chips:** Add trailing action feature targeting test ([bec0659](https://github.com/material-components/material-components-web/commit/bec0659206aee793e6970d59c73f7969ab540b69))
* **chips:** Create trailing action business logic ([9ebee4c](https://github.com/material-components/material-components-web/commit/9ebee4ceb998e5fa651d4f147e5e39d43600db6e))
* **chips:** Expose trailing action chip files ([6b48781](https://github.com/material-components/material-components-web/commit/6b48781bf97d3b08b8f35b9eacde2b87748ae2e1))
* **chips:** Reposition trailing action touch target width mixin ([3846ce3](https://github.com/material-components/material-components-web/commit/3846ce311f65156f24dbd229100e660f1285bf5f))
* **chips:** Restructure trailing action mixins ([05f5e15](https://github.com/material-components/material-components-web/commit/05f5e1583b81bc00dbcd2ae21ee0acc43b3e13b4))
* **chips:** Use trailing action component in chip ([058cfd2](https://github.com/material-components/material-components-web/commit/058cfd23caa5c00f29c90f3d2fc9b813581ba974))
* **circular-progress:** Add foundation methods to get isDeterminate and progress value ([7d8f9c8](https://github.com/material-components/material-components-web/commit/7d8f9c8d73f16c01ed4a941ab9510377a0aae219))
* **circular-progress:** Add Sass styles and tests ([bd33cb5](https://github.com/material-components/material-components-web/commit/bd33cb56bdab7139052aeedbeec363f17b4dfc40))
* **circular-progress:** Add TS for foundation, adapter, component with tests ([548b1d4](https://github.com/material-components/material-components-web/commit/548b1d4057f21e066a4c494a57a0c068c23e18cd))
* **data-table:** Add base styles to support pagination. ([927fa90](https://github.com/material-components/material-components-web/commit/927fa902c3297a5a7cc9436e82cb81f3aabe1b4b))
* **data-table:** Add foundation methods to support loading state. ([e75deb8](https://github.com/material-components/material-components-web/commit/e75deb8540fa70236087d335c9cd6280bd643285))
* **data-table:** Added sort status label to sortable column header ([9833dc2](https://github.com/material-components/material-components-web/commit/9833dc28775a02fa4c7c490ae5df1ed198bbb398))
* **data-table:** Added styles for table in loading state ([35a32aa](https://github.com/material-components/material-components-web/commit/35a32aaeac17e290e2e9f9a1310c5a44a08f624a))
* **data-table:** Added styles to support column sorting. ([17b9699](https://github.com/material-components/material-components-web/commit/17b9699c4454a107043e5a1f9874a091089dd112))
* **data-table:** Added styles to support rows per page select menu in pagination ([3ee488f](https://github.com/material-components/material-components-web/commit/3ee488f1c0f65972459f2dbc74b6c3365786df4b))
* **data-table:** Added support for column sorting feature in data table ([06ef147](https://github.com/material-components/material-components-web/commit/06ef147b593d134fcd03f48fc3581d8fd6068865))
* **data-table:** Added support for row header cell and other a11y improvements. ([27533c1](https://github.com/material-components/material-components-web/commit/27533c19e9c72c5a27a33aaa764c1b6a05175cf5))
* **data-table:** Foundation changes to support column sorting ([6ee0355](https://github.com/material-components/material-components-web/commit/6ee03557260d0a23296e36cba5aaa76fe0cf96a6))
* **data-table:** Make rows per page wrap in new line when overflows ([09abc92](https://github.com/material-components/material-components-web/commit/09abc92198d1628c57eee5e75c58da52b223c322))
* **data-table:** Set progress indicator styles based on table body height ([c026422](https://github.com/material-components/material-components-web/commit/c0264227393df8eb9259a2b24c23b31fe0ca84f3))
* **dialog:** Add padding mixin ([ad0c0c1](https://github.com/material-components/material-components-web/commit/ad0c0c1034d0b9257a62d3dd9f5d27aada99f1f7))
* **dom:** Add keyboard support ([5f24faa](https://github.com/material-components/material-components-web/commit/5f24faacb1ef8996ae81f3a1c1e43910ba67b024))
* **drawer:** allow custom properties in width() ([39e6f71](https://github.com/material-components/material-components-web/commit/39e6f71e2e03b75512242d7520678c32c5af2b70))
* **fab:** Add outline in high-contrast mode ([deda86d](https://github.com/material-components/material-components-web/commit/deda86d8cc4665b334c4d21c541a4a30244fee72))
* **floating-label:** add required modifier class ([047e6b3](https://github.com/material-components/material-components-web/commit/047e6b337899a57290283cb0387f33738853cbc2))
* **form-field:** Add support for space-between ([e84b9c8](https://github.com/material-components/material-components-web/commit/e84b9c816d32da6dec058d92fc21dc5ac8fec787)), closes [#5747](https://github.com/material-components/material-components-web/issues/5747)
* **formfield:** add nowrap class/prop to MDC/MWC ([c4b4bba](https://github.com/material-components/material-components-web/commit/c4b4bba9659bf15207e79b1f63fcc9946404d9c7))
* **formfield:** Remove trailing underscores from private properties ([2f052d8](https://github.com/material-components/material-components-web/commit/2f052d82433a852d65785b1054ce4665ad1f6265))
* **iconbutton:** Add icon button variant which supports toggling aria label. ([f838c6e](https://github.com/material-components/material-components-web/commit/f838c6e55672268de4e6e3b31b154d4f9050242f))
* **iconbutton:** Remove trailing underscores from private properties ([119e214](https://github.com/material-components/material-components-web/commit/119e21426d73305fe348798cb7ce88077995fdd0))
* **linear-progress:** Add foundation methods to fetch progress and determinate state. ([4dc45af](https://github.com/material-components/material-components-web/commit/4dc45af6c4bc81f5734a24c160046d283c1e9a6d))
* **linearprogress:** Remove trailing underscores from private properties ([893eb18](https://github.com/material-components/material-components-web/commit/893eb1876220e5313f9db37365049b8c2282109c))
* **list:** add focus indicator in hi-contrast mode ([8602f1b](https://github.com/material-components/material-components-web/commit/8602f1b4da404816513733a21973ec9cbc9acfa3))
* **list:** Add mixin for selected item's text color ([bd8ca96](https://github.com/material-components/material-components-web/commit/bd8ca96788c9cb793288b6aa5c406b220be0bd9c))
* **menu:** Add mixin to flatten menu top when opened-below anchor ([1e17c49](https://github.com/material-components/material-components-web/commit/1e17c49b360fd0e01c9a74b92978031534003b5b))
* **menu-surface:** Add support for flipping menu corner horizontally. ([7b44824](https://github.com/material-components/material-components-web/commit/7b448240263b45c6b474c2f758cd1c02f3c708ad))
* **ripple:** Reorganize ripple opacities ([008c4d3](https://github.com/material-components/material-components-web/commit/008c4d3191f9c2a76732688504d2299420734cdd))
* **rtl:** allow values to be theme keys and custom props ([afb1c11](https://github.com/material-components/material-components-web/commit/afb1c11a9e9048ba7c2ed30e32e892ae483dfccc))
* **select:** Add menu invalid class ([4ba3c9a](https://github.com/material-components/material-components-web/commit/4ba3c9a319dad4101f4d24607a79c01390330acd))
* **select:** Add mixin for min-width ([09f5919](https://github.com/material-components/material-components-web/commit/09f591967a42e4dc27c0f7022d9ae71e94c07c3d))
* **select:** Add openMenu foundation method ([9b0b5f2](https://github.com/material-components/material-components-web/commit/9b0b5f2e034a7f8ab0e68e3afbd7c246447f53e7))
* **select:** Add styles for high-contrast mode in IE ([05cc5c2](https://github.com/material-components/material-components-web/commit/05cc5c20651eed3e40960074db919f0d030c46fb))
* **select:** Auto-align width of menu to select by default ([1b3dd84](https://github.com/material-components/material-components-web/commit/1b3dd846db4da7dcb1baaf2003e35e462cb799b7))
* **select:** Change root to inline-block & add fullwidth flag ([2673adb](https://github.com/material-components/material-components-web/commit/2673adb74397d55c9dcd8e5fd86b3efc87a13a28))
* **select:** changing density also also changes menu's list density ([68a2af1](https://github.com/material-components/material-components-web/commit/68a2af131b82e9b50e70754a2d653d6305dac4b9))
* **select:** Create additional state mixins ([744d751](https://github.com/material-components/material-components-web/commit/744d751a0c0f154d5d0d05def88203b68c3a26a5))
* **select:** extend typeahead to work when menu closed but select focused ([a0dc2b5](https://github.com/material-components/material-components-web/commit/a0dc2b5c4afbf3fd8274c752d43aeeeb11231e5f))
* **select:** flatten menu top when opened below ([912d902](https://github.com/material-components/material-components-web/commit/912d9021dab7712e0ab711fcaffb3933a960c171))
* **select:** gracefully display long labels ([21c4e4e](https://github.com/material-components/material-components-web/commit/21c4e4ed866944c090ae3d6dffe9f5e4725b7ffc))
* **select:** Implement density ([610c68d](https://github.com/material-components/material-components-web/commit/610c68d97646f523eaff0bb26c08baa5903e9211))
* **select:** introduce custom validity ([fd8f8f2](https://github.com/material-components/material-components-web/commit/fd8f8f2b77b0a17e25f78b5a510b7afe4bbd230b))
* **select:** lower dropdown icon size and list leading padding when dense ([32aa236](https://github.com/material-components/material-components-web/commit/32aa23641258671e0eac803c0f41ae78ecce32fd))
* **select:** make selected text more flexible ([2b420c5](https://github.com/material-components/material-components-web/commit/2b420c5b318b7ada726dec774d9e09624bca9822))
* **select:** Replace hardcoded leading margins for options with dummy graphic ([7461aad](https://github.com/material-components/material-components-web/commit/7461aad68924d0f3bb790987b01f802078ebc7df))
* **select:** Support typeahead ([b0fdca4](https://github.com/material-components/material-components-web/commit/b0fdca4921afd58de567bd53b29c9b6e44dac5c1)), closes [#5705](https://github.com/material-components/material-components-web/issues/5705)
* **select:** Update behavior on upArrow/downArrow ([d92d8c9](https://github.com/material-components/material-components-web/commit/d92d8c93ee6d9c030e6d373ac2b8670ac56417ad))
* **select:** Update helper-text interactions ([142b154](https://github.com/material-components/material-components-web/commit/142b1549ee0cf40b1f1531e79e53fe5e826f254d)), closes [#5463](https://github.com/material-components/material-components-web/issues/5463)
* **select:** use floating label's required class ([d86ad3b](https://github.com/material-components/material-components-web/commit/d86ad3b6081234359ff19547649f9d391ea8aa9e))
* **shape:** add shape custom properties ([0743288](https://github.com/material-components/material-components-web/commit/0743288fb04dc8578f0b850d31fad6c00c97ea1c))
* **text-field:** Truncate floating label width w/ icons ([c141801](https://github.com/material-components/material-components-web/commit/c141801d50516a18fe53d4bc78591cefb4f57623))
* **textfield:** add filled class variant ([b70bc60](https://github.com/material-components/material-components-web/commit/b70bc601ef570dab4598ae6f3ca51bbf884fac96))
* **textfield:** add filled textarea variant ([4497b86](https://github.com/material-components/material-components-web/commit/4497b86ed8b3e0ee0781dd6f795aa1ff332d2a3b))
* **textfield:** add forced LTR input ([490fbdc](https://github.com/material-components/material-components-web/commit/490fbdc092c5c59d63f83407b83b37fb524ed0e5))
* **textfield:** add prefix and suffix ([6601d24](https://github.com/material-components/material-components-web/commit/6601d24afdc3a3d0bd2a9b3fcca68c35c9415ec1)), closes [#1892](https://github.com/material-components/material-components-web/issues/1892)
* **textfield:** add specific label-floating class ([a88c8e4](https://github.com/material-components/material-components-web/commit/a88c8e4dc873ae74a3afbae0dc8635dfaa03e67b))
* **textfield:** allow character counter to be moved outside of the textarea. ([84e7ed5](https://github.com/material-components/material-components-web/commit/84e7ed5825d3109c229d0f1f6c3edf97a3548226))
* **textfield:** allow disabled textareas to scroll and resize ([b9776b1](https://github.com/material-components/material-components-web/commit/b9776b1d09b9ccfac38b3dc471dee2fd9fc8558a))
* **textfield:** Create float transition mixin ([ca61b65](https://github.com/material-components/material-components-web/commit/ca61b656fababdf25adaa307963d4f37e6d413ec))
* **textfield:** Limit notched outline max-width ([0ab62a6](https://github.com/material-components/material-components-web/commit/0ab62a65b17192a94102231ca63f54adc39675ae))
* **textfield:** move resize handle for textareas to bottom corner ([ed52af7](https://github.com/material-components/material-components-web/commit/ed52af7677ad37138b6660ca11fbdb209be05b46))
* **textfield:** required outlined modifier for textarea ([b10d0d7](https://github.com/material-components/material-components-web/commit/b10d0d7f1911b381a47d39b5d0bc4543089efb3e))
* **textfield:** support svg icons for textfield ([d91794c](https://github.com/material-components/material-components-web/commit/d91794c7ecafbaef7150d2c88226b96d7e4c4ea6))
* **theme:** add new property mixin and custom property support ([51512a4](https://github.com/material-components/material-components-web/commit/51512a4ac375a6175b4a533ff004ea90a4318c9e))
* **theme:** custom property fallback values are now optional ([01de070](https://github.com/material-components/material-components-web/commit/01de07011d8b4b121a061da66fafe610f5484a51))
* **typography:** add container baseline mixins for flexbox ([69edc6e](https://github.com/material-components/material-components-web/commit/69edc6e2899636cfccb117376bb64dc0a267c588))


### BREAKING CHANGES

* **button:** Correct misspelling of overflow for button's label-overflow-ellipsis mixin
* **button:** Correct misspelling of overflow for button's label-overflow-ellipsis mixin
* **button:** Removes button theme-baseline() mixin, moves mixin contents to base button Sass.
* **chips:** The chip adapter and foundation interfaces have changed. Chips now use the trailing action subcomponent.
* **data-table:** Added a wrapper element to data table's table element to fix horizontal scrolling issue when pagination controls are added.
* **floating-label:** all labels that are part of a required field should now add the mdc-floating-label--required class for required fields to avoid a FOUC
* **linear-progress:** DOM for linear progress buffer changed. MDCLinearProgressAdapter method `getBuffer`, `getPrimaryBar`, `setStyle` removed. MDCLinearProgressAdapter method `setBufferBarStyle`, `setPrimaryBarStyle` added.
* **linear-progress:** DOM for linear progress buffer changed. MDCLinearProgressAdapter method `getBuffer`, `getPrimaryBar`, `setStyle` removed. MDCLinearProgressAdapter method `setBufferBarStyle`, `setPrimaryBarStyle` added.
* **select:** Added adapter method `addMenuClass`, `removeMenuClass`
* **select:** Added adapter methods `isTypeaheadInProgress`, `typeaheadMatchItem`
* **select:** DOM structure for dropdown icon changed; `$dropdown-color` renamed to `$dropdown-icon-color`, `$dropdown-opacity` removed, `$disabled-dropdown-opacity` removed.
* **select:** HTML Markup significantly changed, see README; REMOVED adapter methods `isSelectedTextFocused`, `getSelectedTextAttr`, `setSelectedTextAttr`; ADDED adapter methods `isSelectAnchorFocused`, `getSelectAnchorAttr`, `setSelectAnchorAttr`; removed variables `outlined-dense-label-position-y`, `icon-padding`; added variables `minimum-height-for-filled-label`, `filled-baseline-top`, `selected-text-height`, `anchor-padding-left`, `anchor-padding-left-with-leading-icon`, `anchor-padding-right`.
* **select:** `density` mixin split into `filled-density`, `filled-with-leading-icon-density`; `height` mixin split into `filled-height`, `filled-with-leading-icon-height`
* **select:** `mdc-menu--fullwidth` class replaces custom width class for the menu markup in select
* **select:** adapter method removeAttributeAtIndex removed.
* **select:** added adapter method `removeSelectAnchorAttr`
* **select:** dropdown icon SVG markup now has `mdc-select__dropdown-icon-graphic` class.
* **select:** empty space around `mdc-list-item__text` spans removed in select markup
* **select:** helper text now persistent by default, `mdc-select-helper-text--persistent` removed
* **select:** non-outlined selects now require a `mdc-select--filled` class on its root
* **select:** root of mdc-select is now an inline-block element, use custom width class (i.e. `demo-width-class`) on the root instead of the anchor for width adjustments; alternately, use the new `mdc-select--fullwidth` on the root to expand width to that of its parent container
* **select:** variable `$outline-disabled-border` renamed to `$disabled-outline-color`; icon variable `$icon-opacity` removed, use alpha channel of `$icon-color` instead.
* **textfield:** Default textfields must now specify mdc-text-field--filled. Disabled outlined textfields no longer have a shaded background. Height mixin no longer specifies a baseline override, use typography's baseline-top mixin.
* **textfield:** mdc-text-field--dense and associated mixins/variables have been removed. Use the density() mixin instead.
* **textfield:** mdc-text-field--textarea must now include mdc-text-field--outlined modifier class
* **textfield:** mdc-text-field-SUB_ELEMENT imports have been removed
* **textfield:** removed the following variables: `$input-padding`, `$input-padding-top`, `$input-padding-bottom`, `$outlined-input-padding-top`, `$outlined-input-padding-bottom`, `$input-border-bottom`
* **textfield:** textareas must now add a `mdc-text-field__resizer` span around the textarea (and internal counter if present) if they are resizable
* **textfield:** textareas with internal character counters must specify the `mdc-text-field--with-internal-counter` class. Character counters should move after the textarea element.
* **theme:** `color-hash()` (and checkbox container-colors mixins) no longer works with `var()` values and now only works with custom property Maps created by `custom-properties.create()`
* **typography:** `typography.baseline-top()` and `typography.baseline-bottom()` are now private. Use `typography.baseline()` for containers and `typography.text-baseline()` for text with $top and $bottom params.


# [6.0.0](https://github.com/material-components/material-components-web/compare/v5.1.0...v6.0.0) (2020-04-22)

### Bug Fixes

* **auto-init:** Fixed issue with multiple default exports ([#5464](https://github.com/material-components/material-components-web/issues/5464)) ([8ddd5c6](https://github.com/material-components/material-components-web/commit/8ddd5c6dcbfa6d81a063b37aee4021ebf34d18f0))
* **button:** Fix outline & ink color according to spec guidance ([#5268](https://github.com/material-components/material-components-web/issues/5268)) ([ee1a68c](https://github.com/material-components/material-components-web/commit/ee1a68c54fa9240a334b0462513b855d5dab4807))
* **button:** Fixed  parameter default value in height mixin ([#5244](https://github.com/material-components/material-components-web/issues/5244)) ([b0cecf1](https://github.com/material-components/material-components-web/commit/b0cecf1451c13fd8c159c1b0ca90b2a1e9b907a0))
* **checkbox:** change checkbox event type from change to click and add some logic for IE browser ([#5316](https://github.com/material-components/material-components-web/issues/5316)) ([2e491de](https://github.com/material-components/material-components-web/commit/2e491de555d54f8d41474ccda156e5f9d0666bc4)), closes [#4893](https://github.com/material-components/material-components-web/issues/4893)
* **checkbox:** Disabled state colors in IE11 high contrast mode ([#5263](https://github.com/material-components/material-components-web/issues/5263)) ([d6a1d4b](https://github.com/material-components/material-components-web/commit/d6a1d4bf81b828f214e8bbf941090ef7d8e91c58))
* **checkbox:** Replace unique-id with custom color hash functio… ([#5404](https://github.com/material-components/material-components-web/issues/5404)) ([7be9e4a](https://github.com/material-components/material-components-web/commit/7be9e4a04387b9ca5f8afae6e4edcb3b37e6a86b))
* **checkbox:** update disabled color values ([#5209](https://github.com/material-components/material-components-web/issues/5209)) ([821871e](https://github.com/material-components/material-components-web/commit/821871e04737c5b0c0afded9e8e885680ca25a1f))
* **checkbox:** Use secondary and on-secondary as default colors ([b95172e](https://github.com/material-components/material-components-web/commit/b95172e69613c0defe82191b86ed1c1999b74400)), closes [#5730](https://github.com/material-components/material-components-web/issues/5730)
* **chips:** .d.ts file generated with syntax error ([d154836](https://github.com/material-components/material-components-web/commit/d1548369f2311e164b0920ed651ba211d05543fa))
* **chips:** .d.ts file generated with syntax error ([#5577](https://github.com/material-components/material-components-web/issues/5577)) ([98f7faa](https://github.com/material-components/material-components-web/commit/98f7faa05fa7c88e0231a00942f4ff9dedf4e8c0))
* **chips:** Do not throw error if chip set becomes empty ([#5290](https://github.com/material-components/material-components-web/issues/5290)) ([f978109](https://github.com/material-components/material-components-web/commit/f978109c33d9e67aebe5af3e460174686eea7b4a))
* **chips:** Fix browser back nav in FF when removing chip with… ([#5537](https://github.com/material-components/material-components-web/issues/5537)) ([a1a0deb](https://github.com/material-components/material-components-web/commit/a1a0deb3ea47d5d89efdcab062e438218148b975))
* **chips:** Handle IE/Edge specific key names in keyboard navigation logic ([3657f88](https://github.com/material-components/material-components-web/commit/3657f886327182c26f1d1555b2ac67c2128140b5))
* **chips:** Move touch target inside primary action ([ad3bbf7](https://github.com/material-components/material-components-web/commit/ad3bbf7822d1fe26694b798299c48e8896971e25))
* **circular-progress:** Add .npmignore file to ignore typescript files when publishing ([#5801](https://github.com/material-components/material-components-web/issues/5801)) ([f172b0f](https://github.com/material-components/material-components-web/commit/f172b0f90a91d8d3d700763d1496bb7b9c1a8d51)), closes [#5800](https://github.com/material-components/material-components-web/issues/5800)
* **circular-progress:** fix determinate transition typo & 4 color keyframes ([a301636](https://github.com/material-components/material-components-web/commit/a3016368df53b1c7967d7d146a9ea53a24442fa9))
* **circular-progress:** Fix naming in package.json and add to jsBundleFactory ([86f7cad](https://github.com/material-components/material-components-web/commit/86f7cad8330dbd600e478610eefd8dd92eb3d8c7))
* **circular-progress:** Force LTR layout ([6a40ef2](https://github.com/material-components/material-components-web/commit/6a40ef217f597138ee2920d2160364649dbf5620))
* **circular-progress:** Switch mixins import to `[@use](https://github.com/use)` ([098ae32](https://github.com/material-components/material-components-web/commit/098ae3285223af2532659dec233537a55c1183f5))
* **core:** Fix canary release by excluding test files from default tsconfig ([#5317](https://github.com/material-components/material-components-web/issues/5317)) ([c916008](https://github.com/material-components/material-components-web/commit/c9160084f1f64800e74e0e69673c6b2beca22ee4))
* **data-table:** change svg attribute name viewbox to viewBox ([#5483](https://github.com/material-components/material-components-web/issues/5483)) ([#5493](https://github.com/material-components/material-components-web/issues/5493)) ([f3adce8](https://github.com/material-components/material-components-web/commit/f3adce86f43c15d3e2311363bf317ff68a3bb99d))
* **data-table:** Fix pagination box height ([eb28b6e](https://github.com/material-components/material-components-web/commit/eb28b6ecc65a9979ef0959eac5dbfde5b4d3b2dc))
* **data-table:** Fixed default feature targeting query params of sort mixins ([e33c49e](https://github.com/material-components/material-components-web/commit/e33c49eaf9c0dbc601f3610af6358cbf2833229c))
* **data-table:** Hover styles for sortable header cell ([d580805](https://github.com/material-components/material-components-web/commit/d5808057fcdf00364731e0896ef7031ac605cf55))
* **data-table:** Reverse the arrow direction icon for column sorting ([a7c827f](https://github.com/material-components/material-components-web/commit/a7c827f17ce9be631484676ccb6b5f18604803ae))
* **data-table:** unable to redefine colors in class-based themi… ([#5751](https://github.com/material-components/material-components-web/issues/5751)) ([4d48051](https://github.com/material-components/material-components-web/commit/4d48051c1099f48e867cf08f070138a7abc719fc))
* **data-table:** unable to redefine colors in class-based theming ([4b45b66](https://github.com/material-components/material-components-web/commit/4b45b662057edd8819f1a515db88e1c12254cc30))
* **dialog:** Move aria roles from dialog root to dialog surface… ([#5239](https://github.com/material-components/material-components-web/issues/5239)) ([c704b71](https://github.com/material-components/material-components-web/commit/c704b71d931dd0db191a30ff88a5d0c44f099300))
* **elevation:** Update overlay color mixin ([#5331](https://github.com/material-components/material-components-web/issues/5331)) ([b723dfa](https://github.com/material-components/material-components-web/commit/b723dfa7848c4b96bc24bb148cc5f55f316625ee))
* **fab:** Add missing dep to fab package.json. ([#5236](https://github.com/material-components/material-components-web/issues/5236)) ([e0f6fd9](https://github.com/material-components/material-components-web/commit/e0f6fd931f677874dcad4d91c3d74a2125674e96))
* **fab:** Add overflow: visible to make touch target visible in… ([#5241](https://github.com/material-components/material-components-web/issues/5241)) ([5850080](https://github.com/material-components/material-components-web/commit/58500806e27a0931404631d76bc09646bc64caaf))
* **fab:** Adjust fab line-height ([#5254](https://github.com/material-components/material-components-web/issues/5254)) ([525989b](https://github.com/material-components/material-components-web/commit/525989b5d8dfe86bcb6f65e0f0f0fd138e4b4b76))
* **fab:** Adjust fab line-height to center text ([#5258](https://github.com/material-components/material-components-web/issues/5258)) ([591a6ad](https://github.com/material-components/material-components-web/commit/591a6ad449f98efa7bc00c8afdd2716a6fbe75d9))
* **floatinglabel:** Estimate hidden scroll width ([#5448](https://github.com/material-components/material-components-web/issues/5448)) ([981ec9b](https://github.com/material-components/material-components-web/commit/981ec9b6fd538caadb44f7469745de8f8954c89b))
* **linear-progress:** Temporary rollback of [#5656](https://github.com/material-components/material-components-web/issues/5656) while updating downstream dependencies ([9cf5e98](https://github.com/material-components/material-components-web/commit/9cf5e9842475e50046462aa1c6d18e326abaee17))
* **linear-progress:** support aria attributes (#5248) ([7084b40](https://github.com/material-components/material-components-web/commit/7084b403a4ab6be0856c670eebb39078a4fcbcfe)), closes [#5248](https://github.com/material-components/material-components-web/issues/5248)
* **list:** Ensure disabled colors apply to primary and secondary text ([#5322](https://github.com/material-components/material-components-web/issues/5322)) ([878a08b](https://github.com/material-components/material-components-web/commit/878a08b7cf673ba45f124b400032928b2c273749))
* **list:** No longer emits action event when disabled item selected ([f352d03](https://github.com/material-components/material-components-web/commit/f352d03f4ed48c5019a0a3e10ef12689a5ab5619)), closes [#5571](https://github.com/material-components/material-components-web/issues/5571)
* **menu-surface:** Use margin_to_edge as a viewport margin in calculations for autopositioning. ([4b04cdb](https://github.com/material-components/material-components-web/commit/4b04cdb0fc4da4831340b01292c118b120c1fcb1))
* **menusurface:** open and closed events not fired when already opened or closed ([9cff431](https://github.com/material-components/material-components-web/commit/9cff4318f0fe8a79f8787afd148907328a5223d5))
* **menusurface:** synchronous quick menu does not close on button click ([45a6615](https://github.com/material-components/material-components-web/commit/45a6615e33eb8a7e6fc37e9ef43a3be3682b6b0e))
* **notched-outline:** Restore component test ([#5449](https://github.com/material-components/material-components-web/issues/5449)) ([4269133](https://github.com/material-components/material-components-web/commit/4269133421f7058385255b0676be94c9c1170b2d))
* **radio:** update disabled color values ([#5210](https://github.com/material-components/material-components-web/issues/5210)) ([491fddc](https://github.com/material-components/material-components-web/commit/491fddc31c16f99206b1fa7dce37d43b742e86f5))
* **select:** Deduplicate change events ([4ad1274](https://github.com/material-components/material-components-web/commit/4ad12741e41c5b8e175f2bc8d5053daec6cedf18)), closes [#5570](https://github.com/material-components/material-components-web/issues/5570)
* **select:** Do not fire change event on programmatic change ([#5255](https://github.com/material-components/material-components-web/issues/5255)) ([ec72968](https://github.com/material-components/material-components-web/commit/ec729683b46fb986a880f26870973337ec6788e5))
* **select:** Fix notch outline width when floating ([#5319](https://github.com/material-components/material-components-web/issues/5319)) ([1c494e5](https://github.com/material-components/material-components-web/commit/1c494e5672c142f3f3451aa2270431844d35c88e))
* **slider:** slider track not visible ([#5512](https://github.com/material-components/material-components-web/issues/5512)) ([f2426d2](https://github.com/material-components/material-components-web/commit/f2426d26e683591cee87b4107f990492b47ec837))
* **slider:** two change events fired on each up ([d10412c](https://github.com/material-components/material-components-web/commit/d10412cb24150639acc617caef1c7fac4fb6e4bd))
* **slider:** use secondary custom property color for slider container ([#5132](https://github.com/material-components/material-components-web/issues/5132)) ([aa8e43e](https://github.com/material-components/material-components-web/commit/aa8e43e9afaa1e00080f149bbe497746b57a285a))
* **slider:** Visual bug when slider value is displayed as "-0" ([3fc3ab5](https://github.com/material-components/material-components-web/commit/3fc3ab520ab5399c3b87b094e047a1751f7aa9af))
* **snackbar:** add explicit width for label to wrap in ie11 ([#5497](https://github.com/material-components/material-components-web/issues/5497)) ([cd49033](https://github.com/material-components/material-components-web/commit/cd4903304412d79be8da96499091259b5e954c80))
* **snackbar:** adjust mixins to meet spec ([#5477](https://github.com/material-components/material-components-web/issues/5477)) ([f16f15b](https://github.com/material-components/material-components-web/commit/f16f15b8fda0d8c283bed5551b78620bf2fd3b82))
* **switch:** add transform transition to switch control to avoid overflow-x issues ([8c11ea2](https://github.com/material-components/material-components-web/commit/8c11ea2a3bd7962c6d895c5bd6b849f95b52d10c))
* **switch:** always set track to transparent border ([9a169f4](https://github.com/material-components/material-components-web/commit/9a169f4b158a3148126ba38bcdfa9d163434d9bb))
* **switch:** fix strict generic checks ([7f5e0c2](https://github.com/material-components/material-components-web/commit/7f5e0c23ffb2f547d9bfca6b68927b5861a3112b))
* **switch:** handle aria-checked correctly. ([#5202](https://github.com/material-components/material-components-web/issues/5202)) ([#5357](https://github.com/material-components/material-components-web/issues/5357)) ([d245a1a](https://github.com/material-components/material-components-web/commit/d245a1a544c643b59f77cd2e01b7eb2c1182f6b9))
* **switch:** set track border to be transparent ([#5323](https://github.com/material-components/material-components-web/issues/5323)) ([397905b](https://github.com/material-components/material-components-web/commit/397905b4e34ff9769d3ae18464bc397a0b13050f))
* **switch:** use CSS custom properties for theming ([d6315ef](https://github.com/material-components/material-components-web/commit/d6315efe26e7baf45fd88244efbb24c612a95cb4))
* **testing:** Revert change from [#5299](https://github.com/material-components/material-components-web/issues/5299). ([#5324](https://github.com/material-components/material-components-web/issues/5324)) ([5fb62be](https://github.com/material-components/material-components-web/commit/5fb62bead477f7db9a76d9c0adbfee4e9c110d37))
* **textfield:** add placeholder mixins and fix disabled colors ([#5360](https://github.com/material-components/material-components-web/issues/5360)) ([0a40ced](https://github.com/material-components/material-components-web/commit/0a40ced406f96b5c84cf39457ffe880d00999714))
* **textfield:** add separate classes for leading/trailing icons ([#5367](https://github.com/material-components/material-components-web/issues/5367)) ([70c708d](https://github.com/material-components/material-components-web/commit/70c708deece4c2c0afe38a31a4989abf2b1c1743))
* **textfield:** change root element to <label> ([#5439](https://github.com/material-components/material-components-web/issues/5439)) ([d8d9502](https://github.com/material-components/material-components-web/commit/d8d95020ff94249f8755ca49aaa06a6e9f0813b0))
* **textfield:** clean up input padding ([8639c26](https://github.com/material-components/material-components-web/commit/8639c269010b77b17f1a5052d57abcb5f7d2892a))
* **textfield:** hide filled-variant floating label at <52px ([#5553](https://github.com/material-components/material-components-web/issues/5553)) ([5ff3380](https://github.com/material-components/material-components-web/commit/5ff33802c22acf7d94fd94c9ccdcfcf901397d56))
* **textfield:** IE11 label overlapping placeholder ([781434a](https://github.com/material-components/material-components-web/commit/781434a92f4dddc9b2d39853e1f5792e89e7b45b))
* **textfield:** incorrect mixin forward path ([#5554](https://github.com/material-components/material-components-web/issues/5554)) ([3e782d8](https://github.com/material-components/material-components-web/commit/3e782d8f84c0096f6a6de3e022017fbb05175fa2))
* **textfield:** move ripple to separate element ([c541ebe](https://github.com/material-components/material-components-web/commit/c541ebe157a66e8d2e881fad16cc4dbe30b2c16b))
* **textfield:** outlined trailing icon's position ([#5496](https://github.com/material-components/material-components-web/issues/5496)) ([93e2288](https://github.com/material-components/material-components-web/commit/93e2288b6ef73c13402a1f5122e2f9a4523ed4a4))
* **textfield:** prevent placeholder styles from collapsing with minifiers ([d07c78d](https://github.com/material-components/material-components-web/commit/d07c78daa83389ef428618d334b037da67740b99))
* add missing SASS dependencies ([#5337](https://github.com/material-components/material-components-web/issues/5337)) ([d2ae6e1](https://github.com/material-components/material-components-web/commit/d2ae6e17d19e7139bce45a0f44ce4ba172bbb3e6))
* **textfield:** remove absolute positioning from icons ([1e13d1d](https://github.com/material-components/material-components-web/commit/1e13d1d5a68632f1b0b5a9134f657d59104969f4))
* **textfield:** remove deprecated dense variant in favor of density ([776291e](https://github.com/material-components/material-components-web/commit/776291ef03205e4063b4040eb66f9648e16b4af6)), closes [#4142](https://github.com/material-components/material-components-web/issues/4142)
* **textfield:** use correct disabled colors for IE11 high contrast ([5353985](https://github.com/material-components/material-components-web/commit/535398572daea2ec389c341f4e0c53cb33582b26))
* Remove edge detection for CSS custom properties ([#5264](https://github.com/material-components/material-components-web/issues/5264)) ([fe444ac](https://github.com/material-components/material-components-web/commit/fe444ac29da5447419cf4c25edbdf934c6e388e4))
* server-side rendering errors in linear progress and slider ([7d0b983](https://github.com/material-components/material-components-web/commit/7d0b983a902deee6941d61906aa5a880628db4e9))


### Code Refactoring

* migrate to the Sass module system ([#5453](https://github.com/material-components/material-components-web/issues/5453)) ([faa9af3](https://github.com/material-components/material-components-web/commit/faa9af310d1a18ec2c183830c84eb14d0492feab))
* **grid-list:** Deprecate component ([#5499](https://github.com/material-components/material-components-web/issues/5499)) ([cf33f11](https://github.com/material-components/material-components-web/commit/cf33f113dd89bbfb2873c9ce3fa1525076bfd4ec))
* **linear-progress:** Restructure buffer DOM to allow translucent buffer ([98b8434](https://github.com/material-components/material-components-web/commit/98b843417ef6c0a10460532a37df389b0c7e936f))
* **linear-progress:** Restructure buffer DOM to allow translucent buffer ([9372e49](https://github.com/material-components/material-components-web/commit/9372e493954585c939f341486d0361efb87da806))
* **select:** Fix alignment issues, upgrade anchor to interactive element ([28d10a9](https://github.com/material-components/material-components-web/commit/28d10a96e1d5e5762d5a056ac805070e9fb6a4e1)), closes [#5428](https://github.com/material-components/material-components-web/issues/5428)
* **touchtarget:** Rename mdc-touch-target-component => mdc… ([#5245](https://github.com/material-components/material-components-web/issues/5245)) ([afe0dd1](https://github.com/material-components/material-components-web/commit/afe0dd1bc240a7a88d76b0a3bf1a36044527babd))


### Features

* **button:** Add disabled state color mixins ([#5232](https://github.com/material-components/material-components-web/issues/5232)) ([b5eb51e](https://github.com/material-components/material-components-web/commit/b5eb51e942b8f233bc1a9a5cf4b4d0c94fb8ea57))
* **button:** Add overflow ellipsis mixin ([#5352](https://github.com/material-components/material-components-web/issues/5352)) ([47949b0](https://github.com/material-components/material-components-web/commit/47949b08e0a2ec82178c638d8074c34c745409b4))
* **button:** Expand outlined touch target to include side borders ([ce6cb70](https://github.com/material-components/material-components-web/commit/ce6cb7024d1da3b0e4fb5e2c67ba269dbb3098ec))
* **button:** Setup elevation overlay ([#5256](https://github.com/material-components/material-components-web/issues/5256)) ([3cbee6d](https://github.com/material-components/material-components-web/commit/3cbee6dac7cafbe8986bad0a8593d870b00f5f32))
* **card:** Add elevation overlay structure ([#5282](https://github.com/material-components/material-components-web/issues/5282)) ([aa0eba4](https://github.com/material-components/material-components-web/commit/aa0eba489a33cb523ae1b5ac5b0ab24995731456))
* **checkbox:** Add support for checkbox CSS-only `indeterminate` checkbox ([b273afa](https://github.com/material-components/material-components-web/commit/b273afa93441e6d0375f7df33d5b69d8a7e1cfa8))
* **chips:** Add chips styling ([1db5c9f](https://github.com/material-components/material-components-web/commit/1db5c9fc842292715f8b4603ce0b979066f1c639))
* **chips:** Add elevation overlay structure ([#5279](https://github.com/material-components/material-components-web/issues/5279)) ([3e560b3](https://github.com/material-components/material-components-web/commit/3e560b33a8fbf820a404596d76ae5f743e57b6a2))
* **chips:** Add focus{in|out} handlers ([10af6cf](https://github.com/material-components/material-components-web/commit/10af6cf39cb2ae0a7deb9a951960f115f6ecdace))
* **chips:** Add keyCode support ([82fa986](https://github.com/material-components/material-components-web/commit/82fa986b95be4c16271df50effda1046d015d35c))
* **chips:** Add trailing action feature targeting test ([bec0659](https://github.com/material-components/material-components-web/commit/bec0659206aee793e6970d59c73f7969ab540b69))
* **chips:** Announce when chips are removed ([b3f70eb](https://github.com/material-components/material-components-web/commit/b3f70ebded85240e75c6d1553cc9d0382b22c31d))
* **chips:** Consolidate interaction event handlers ([#5251](https://github.com/material-components/material-components-web/issues/5251)) ([5729943](https://github.com/material-components/material-components-web/commit/5729943baf1726e931e26907c78774f2caec404e))
* **chips:** Create trailing action business logic ([9ebee4c](https://github.com/material-components/material-components-web/commit/9ebee4ceb998e5fa651d4f147e5e39d43600db6e))
* **chips:** Expose trailing action chip files ([6b48781](https://github.com/material-components/material-components-web/commit/6b48781bf97d3b08b8f35b9eacde2b87748ae2e1))
* **chips:** Restructure trailing action mixins ([05f5e15](https://github.com/material-components/material-components-web/commit/05f5e1583b81bc00dbcd2ae21ee0acc43b3e13b4))
* **circular-progress:** Add foundation methods to get isDeterminate and progress value ([7d8f9c8](https://github.com/material-components/material-components-web/commit/7d8f9c8d73f16c01ed4a941ab9510377a0aae219))
* **circular-progress:** Add Sass styles and tests ([bd33cb5](https://github.com/material-components/material-components-web/commit/bd33cb56bdab7139052aeedbeec363f17b4dfc40))
* **circular-progress:** Add TS for foundation, adapter, component with tests ([548b1d4](https://github.com/material-components/material-components-web/commit/548b1d4057f21e066a4c494a57a0c068c23e18cd))
* **data-table:** Add base styles to support pagination. ([927fa90](https://github.com/material-components/material-components-web/commit/927fa902c3297a5a7cc9436e82cb81f3aabe1b4b))
* **data-table:** Add foundation methods to support loading state. ([e75deb8](https://github.com/material-components/material-components-web/commit/e75deb8540fa70236087d335c9cd6280bd643285))
* **data-table:** Added styles for table in loading state ([35a32aa](https://github.com/material-components/material-components-web/commit/35a32aaeac17e290e2e9f9a1310c5a44a08f624a))
* **data-table:** Added styles to support column sorting. ([17b9699](https://github.com/material-components/material-components-web/commit/17b9699c4454a107043e5a1f9874a091089dd112))
* **data-table:** Foundation changes to support column sorting ([6ee0355](https://github.com/material-components/material-components-web/commit/6ee03557260d0a23296e36cba5aaa76fe0cf96a6))
* **data-table:** Set progress indicator styles based on table body height ([c026422](https://github.com/material-components/material-components-web/commit/c0264227393df8eb9259a2b24c23b31fe0ca84f3))
* **dialog:** Add elevation overlay structure ([#5283](https://github.com/material-components/material-components-web/issues/5283)) ([b8bc4a2](https://github.com/material-components/material-components-web/commit/b8bc4a26ea70356cc96de8fd3266890048f0a3ab))
* **dom:** Add focus trap utility. ([#5505](https://github.com/material-components/material-components-web/issues/5505)) ([63f357d](https://github.com/material-components/material-components-web/commit/63f357dbf5c7e84c3961aafc09e0fb4f4a9c3cda))
* **dom:** Add keyboard support ([5f24faa](https://github.com/material-components/material-components-web/commit/5f24faacb1ef8996ae81f3a1c1e43910ba67b024))
* **dom:** Create announcer utility ([32c1df1](https://github.com/material-components/material-components-web/commit/32c1df133f07679b44ce34ed9d11e22035f8d3d9))
* **elevation:** Add elevation overlay mixins ([#5249](https://github.com/material-components/material-components-web/issues/5249)) ([b4cfdc4](https://github.com/material-components/material-components-web/commit/b4cfdc40b7c4a3d3fc48df2b68b7091552c27610))
* **elevation:** Update elevation mixins ([#5304](https://github.com/material-components/material-components-web/issues/5304)) ([ba879b6](https://github.com/material-components/material-components-web/commit/ba879b68bde09d713faa5cd77aea9d2bd2759e33))
* **fab:** Add elevation overlay structure ([#5278](https://github.com/material-components/material-components-web/issues/5278)) ([e89750d](https://github.com/material-components/material-components-web/commit/e89750dc78ea521561a03e020f4414479de5a5b9))
* **fab:** Add outline in high-contrast mode ([deda86d](https://github.com/material-components/material-components-web/commit/deda86d8cc4665b334c4d21c541a4a30244fee72))
* **fab:** Add support for increased touch target to mini FAB. ([#5231](https://github.com/material-components/material-components-web/issues/5231)) ([0c4d8f3](https://github.com/material-components/material-components-web/commit/0c4d8f3923f9a089132ed8dca4062b72d3576aca))
* **floating-label:** add feature targeting for styles ([#5287](https://github.com/material-components/material-components-web/issues/5287)) ([b240bcc](https://github.com/material-components/material-components-web/commit/b240bcc1bbb3cfd1f753918ec1553dbe1bb6d007))
* **form-field:** Add support for space-between ([e84b9c8](https://github.com/material-components/material-components-web/commit/e84b9c816d32da6dec058d92fc21dc5ac8fec787)), closes [#5747](https://github.com/material-components/material-components-web/issues/5747)
* **formfield:** add nowrap class/prop to MDC/MWC ([c4b4bba](https://github.com/material-components/material-components-web/commit/c4b4bba9659bf15207e79b1f63fcc9946404d9c7))
* **icon-button:** Add disabled state color mixins ([#5246](https://github.com/material-components/material-components-web/issues/5246)) ([7161170](https://github.com/material-components/material-components-web/commit/7161170f2e39b73b69b97dec11ebf94e1d3a10c4))
* **iconbutton:** Add icon button variant which supports toggling aria label. ([f838c6e](https://github.com/material-components/material-components-web/commit/f838c6e55672268de4e6e3b31b154d4f9050242f))
* **line-ripple:** add active/inactive states to line-ripple ([b6c7f62](https://github.com/material-components/material-components-web/commit/b6c7f624bc7d88e2e371efcb125c7a6bac55eab7))
* **line-ripple:** add feature targeting for styles ([#5292](https://github.com/material-components/material-components-web/issues/5292)) ([391674a](https://github.com/material-components/material-components-web/commit/391674a2649800f07e3ac1993a5fce157391fbd9))
* **linear-progress:** Add foundation methods to fetch progress and determinate state. ([4dc45af](https://github.com/material-components/material-components-web/commit/4dc45af6c4bc81f5734a24c160046d283c1e9a6d))
* **menu:** Add elevation overlay structure ([#5280](https://github.com/material-components/material-components-web/issues/5280)) ([7fd17ce](https://github.com/material-components/material-components-web/commit/7fd17ce5ed73c86b987c8a8e4cd08ea444fff8b7))
* **menu:** Add mixin to flatten menu top when opened-below anchor ([1e17c49](https://github.com/material-components/material-components-web/commit/1e17c49b360fd0e01c9a74b92978031534003b5b))
* **menu-surface:** Add support for flipping menu corner horizontally. ([7b44824](https://github.com/material-components/material-components-web/commit/7b448240263b45c6b474c2f758cd1c02f3c708ad))
* **notched-outline:** add feature targeting for styles ([#5289](https://github.com/material-components/material-components-web/issues/5289)) ([c483774](https://github.com/material-components/material-components-web/commit/c4837746ccebf375daa4c5dd891fea533bb134f7))
* **progress-indicator:** Add common interface for progress indicators ([#5564](https://github.com/material-components/material-components-web/issues/5564)) ([ea863cb](https://github.com/material-components/material-components-web/commit/ea863cb918b9c096e36a7bc653d6661757e71b64))
* **ripple:** Reorganize ripple opacities ([008c4d3](https://github.com/material-components/material-components-web/commit/008c4d3191f9c2a76732688504d2299420734cdd))
* **switch:** Add elevation overlay structure ([#5281](https://github.com/material-components/material-components-web/issues/5281)) ([50f110a](https://github.com/material-components/material-components-web/commit/50f110a6cf8100e594bdbd6c02ee278c39924008))
* **switch:** Restructure DOM ([#5312](https://github.com/material-components/material-components-web/issues/5312)) ([0ec1fab](https://github.com/material-components/material-components-web/commit/0ec1fabc39222cac4446c8e2b85d74d2a5d21e1a))
* **text-field:** Add disabled state color mixins ([#5208](https://github.com/material-components/material-components-web/issues/5208)) ([66299b6](https://github.com/material-components/material-components-web/commit/66299b64613e8399af263d7021f93f9cdaf74ae3))
* **text-field:** add feature targeting for styles ([#5378](https://github.com/material-components/material-components-web/issues/5378)) ([e8a9936](https://github.com/material-components/material-components-web/commit/e8a993677858893965608a55931d7e54c84e8c5d))
* **text-field:** Truncate floating label width w/ icons ([c141801](https://github.com/material-components/material-components-web/commit/c141801d50516a18fe53d4bc78591cefb4f57623))
* **textfield:** add end-alignment ([#5356](https://github.com/material-components/material-components-web/issues/5356)) ([847dd1a](https://github.com/material-components/material-components-web/commit/847dd1ada08bb0fd905adac7b7836540a0dd7e9c))
* **textfield:** add filled class variant ([b70bc60](https://github.com/material-components/material-components-web/commit/b70bc601ef570dab4598ae6f3ca51bbf884fac96))
* **textfield:** add forced LTR input ([490fbdc](https://github.com/material-components/material-components-web/commit/490fbdc092c5c59d63f83407b83b37fb524ed0e5))
* **textfield:** add prefix and suffix ([6601d24](https://github.com/material-components/material-components-web/commit/6601d24afdc3a3d0bd2a9b3fcca68c35c9415ec1)), closes [#1892](https://github.com/material-components/material-components-web/issues/1892)
* Add index stylesheets to each MDC Web package ([#5539](https://github.com/material-components/material-components-web/issues/5539)) ([1814866](https://github.com/material-components/material-components-web/commit/181486643532e2166dced95daff9da786af3bdd1))
* Add index stylesheets to mdc-image-list and mdc-layout-gr… ([#5546](https://github.com/material-components/material-components-web/issues/5546)) ([3a85313](https://github.com/material-components/material-components-web/commit/3a85313ac121703e8aeac583502adf9863d96a8e))
* Use [@use](https://github.com/use) syntax in material-components-web Sass file and… ([#5573](https://github.com/material-components/material-components-web/issues/5573)) ([b4727e4](https://github.com/material-components/material-components-web/commit/b4727e43aa17afe03b240402ded590c0516267d5))
* **textfield:** add specific label-floating class ([a88c8e4](https://github.com/material-components/material-components-web/commit/a88c8e4dc873ae74a3afbae0dc8635dfaa03e67b))
* **textfield:** allow character counter to be moved outside of the textarea. ([84e7ed5](https://github.com/material-components/material-components-web/commit/84e7ed5825d3109c229d0f1f6c3edf97a3548226))
* **textfield:** Create float transition mixin ([ca61b65](https://github.com/material-components/material-components-web/commit/ca61b656fababdf25adaa307963d4f37e6d413ec))
* **textfield:** Limit notched outline max-width ([0ab62a6](https://github.com/material-components/material-components-web/commit/0ab62a65b17192a94102231ca63f54adc39675ae))
* **typography:** add container baseline mixins for flexbox ([69edc6e](https://github.com/material-components/material-components-web/commit/69edc6e2899636cfccb117376bb64dc0a267c588))


### Reverts

* Revert "feat(switch): Add elevation overlay structure (#5281)" (#5329) ([1fbf5bd](https://github.com/material-components/material-components-web/commit/1fbf5bd1d84b7b02eb7f0a7aff2b9c3eed0b4d3d)), closes [#5281](https://github.com/material-components/material-components-web/issues/5281) [#5329](https://github.com/material-components/material-components-web/issues/5329)
* "fix(checkbox): change checkbox event type from change to click and add some logic for IE browser" ([ba30399](https://github.com/material-components/material-components-web/commit/ba30399adc901ca090c90bb1cad9410c81ae5fd1))
* feat(chips): Consolidate interaction event handlers ([#5251](https://github.com/material-components/material-components-web/issues/5251)) ([#5301](https://github.com/material-components/material-components-web/issues/5301)) ([5e45d77](https://github.com/material-components/material-components-web/commit/5e45d77f3e387eff356f5ce93336d4b872c725c4))
* fix(chips): Do not throw error if chip set becomes empty ([#5300](https://github.com/material-components/material-components-web/issues/5300)) ([d10e8cd](https://github.com/material-components/material-components-web/commit/d10e8cdf3cda4a735b1ae43bb17592f9383c8886))
* fix(select): Do not fire change event on programmatic change ([#5255](https://github.com/material-components/material-components-web/issues/5255)) ([#5302](https://github.com/material-components/material-components-web/issues/5302)) ([ad9dfe7](https://github.com/material-components/material-components-web/commit/ad9dfe706de46d5dc131ad6615aa18f0e3b01133))


### BREAKING CHANGES

* **select:** HTML Markup significantly changed, see README; REMOVED adapter methods `isSelectedTextFocused`, `getSelectedTextAttr`, `setSelectedTextAttr`; ADDED adapter methods `isSelectAnchorFocused`, `getSelectAnchorAttr`, `setSelectAnchorAttr`; removed variables `outlined-dense-label-position-y`, `icon-padding`; added variables `minimum-height-for-filled-label`, `filled-baseline-top`, `selected-text-height`, `anchor-padding-left`, `anchor-padding-left-with-leading-icon`, `anchor-padding-right`.
* **text-field:** Redundant mixins `mdc-text-field-textarea-fill-color`, `mdc-text-field-textarea-stroke-color`, `mdc-text-field-fullwidth-bottom-line-color` removed. Instead, use `mdc-text-field-fill-color`, `mdc-text-field-outline-color`, and `mdc-text-field-bottom-line-color` respectively to achieve the same effect.
* **textfield:** mdc-text-field--dense and associated mixins/variables have been removed. Use the density() mixin instead.
* **textfield:** removed the following variables: `$input-padding`, `$input-padding-top`, `$input-padding-bottom`, `$outlined-input-padding-top`, `$outlined-input-padding-bottom`, `$input-border-bottom`
* **linear-progress:** DOM for linear progress buffer changed. MDCLinearProgressAdapter method `getBuffer`, `getPrimaryBar`, `setStyle` removed. MDCLinearProgressAdapter method `setBufferBarStyle`, `setPrimaryBarStyle` added.
* **linear-progress:** DOM for linear progress buffer changed. MDCLinearProgressAdapter method `getBuffer`, `getPrimaryBar`, `setStyle` removed. MDCLinearProgressAdapter method `setBufferBarStyle`, `setPrimaryBarStyle` added.
* **typography:** `typography.baseline-top()` and `typography.baseline-bottom()` are now private. Use `typography.baseline()` for containers and `typography.text-baseline()` for text with $top and $bottom params.
* **chips:** The touch target and text now appear inside the primary action element. Please see the readme for markup changes.
* **textfield:** filled text fields must include a `<div class="mdc-text-field__ripple"></div>`
* **textfield:** Filled textfields will no longer show a floating label at certain densities. This can be overridden by setting `$mdc-text-field-minimum-height-for-filled-label: 40px`
* **chips:** Both `MDCChipAdapter` and `MDCChipSetAdapter` have new methods. `MDCChipSetFoundation` event handlers now accept the corresponding chip event detail interface as the sole argument. The `root` property has been removed from the `MDCChipRemovalEventDetail` interface.
* **line-ripple:** `mdc-line-ripple-color()` mixin has been renamed to `mdc-line-ripple-active-color()`
* **textfield:** Default textfields must now specify mdc-text-field--filled. Disabled outlined textfields no longer have a shaded background. Height mixin no longer specifies a baseline override, use typography's baseline-top mixin.

* Four variables and a mixin in mdc-textfield were renamed to use a mdc-text-field- prefix when depended on via @import (formerly mdc-required-text-field-label-asterisk_, now required-label-asterisk_).
* **textfield:** icons must use `.mdc-text-field__icon--leading` or `.mdc-text-field__icon--trailing` classes. `mdc-text-field-icon-color()` mixin has been split into `mdc-text-field-leading-icon-color()` and `mdc-text-field-trailing-icon-color()`.
* **switch:** Added setNativeControlAttr method in mdc-switch adapter.
* **checkbox:** remove event listener for 'change' and add event listener for 'click'.
- Add handleClick() method in foundation to handle click event.
- Add setCheck() method into component to change check status.
* **switch:** Switch DOM structure has changed. See switch README for details
* **button:** Variable `$mdc-button-disabled-container-fill-color`
renamed to `$mdc-button-disabled-container-color`.
* Removed `$edgeOptOut` option from `mdc-theme-prop()` Sass mixin.
* **chips:** the handleInteraction and handleTrailingIconInteraction handlers have been removed from the MDCChipFoundation. The handleClick handler has been added to the MDCChipFoundation
* Adds new adapter methods to MDCLinearProgressAdapter.
* **elevation:** Functions moved into the _functions.scss file
* **touchtarget:** Renames mixin from mdc-touch-target-component => mdc-touch-target-margin
* **grid-list:** Per the deprecation notice for grid-list, this component has been
removed from MDC-Web. Some of its functionalities are available in the MDC Image List package instead. It is recommended that you migrate to the mdc-image-list package to continue to receive new features and updates.


# 4.0.0 (2019-11-02)

# [4.0.0](https://github.com/material-components/material-components-web/compare/v3.2.0...v4.0.0) (2019-11-02)

### Bug Fixes

* **button:** Add `overflow: visible` to button. ([#4973](https://github.com/material-components/material-components-web/issues/4973)) ([905e84e](https://github.com/material-components/material-components-web/commit/905e84e))
* **button:** Adjust touch target size when density is applied ([#5112](https://github.com/material-components/material-components-web/issues/5112)) ([e2506f4](https://github.com/material-components/material-components-web/commit/e2506f4))
* **checkbox:** Change minimum ripple size of checkbox & switch 24px => 28px ([#5140](https://github.com/material-components/material-components-web/issues/5140)) ([3eae309](https://github.com/material-components/material-components-web/commit/3eae309))
* **checkbox:** Fix checkbox terminology in sass mixins ([#5014](https://github.com/material-components/material-components-web/issues/5014)) ([2161c02](https://github.com/material-components/material-components-web/commit/2161c02))
* **checkbox:** Remove RTL styles from checkbox ripple ([#5134](https://github.com/material-components/material-components-web/issues/5134)) ([a646516](https://github.com/material-components/material-components-web/commit/a646516))
* **chips:** Ignore selection events in chip set ([#4878](https://github.com/material-components/material-components-web/issues/4878)) ([94c6a00](https://github.com/material-components/material-components-web/commit/94c6a00))
* **chips:** Remove keyCode check ([#4966](https://github.com/material-components/material-components-web/issues/4966)) ([e6304c4](https://github.com/material-components/material-components-web/commit/e6304c4))
* **chips:** Reset touch target when chip density mixin is applied. ([#5116](https://github.com/material-components/material-components-web/issues/5116)) ([d3b515e](https://github.com/material-components/material-components-web/commit/d3b515e))
* **chips:** Stack trailing/leading icons above touch target el ([#5040](https://github.com/material-components/material-components-web/issues/5040)) ([048d4b7](https://github.com/material-components/material-components-web/commit/048d4b7))
* **chips:** Stop emitting events in handlers ([#4969](https://github.com/material-components/material-components-web/issues/4969)) ([cfd81dc](https://github.com/material-components/material-components-web/commit/cfd81dc))
* **data-table:** Minor fixes for data table layout ([#5037](https://github.com/material-components/material-components-web/issues/5037)) ([37b1f93](https://github.com/material-components/material-components-web/commit/37b1f93))
* **fab:** Add overflow: hidden; to ripple target to fix bounded ripple. ([#5214](https://github.com/material-components/material-components-web/issues/5214)) ([97cbbdc](https://github.com/material-components/material-components-web/commit/97cbbdc))
* **fab:** Use FAB ripple target selector ([#5146](https://github.com/material-components/material-components-web/issues/5146)) ([9d91acc](https://github.com/material-components/material-components-web/commit/9d91acc))
* **form-field:** Fix radio RTL alignment bug. ([#5064](https://github.com/material-components/material-components-web/issues/5064)) ([ef99808](https://github.com/material-components/material-components-web/commit/ef99808))
* **linear-progress:** Fix indeterminate animation bug ([#5180](https://github.com/material-components/material-components-web/issues/5180)) ([062ade5](https://github.com/material-components/material-components-web/commit/062ade5))
* **linear-progress:** Prefix animation keyframes to prevent clashing ([#5155](https://github.com/material-components/material-components-web/issues/5155)) ([fc0e474](https://github.com/material-components/material-components-web/commit/fc0e474))
* **linear-progress:** Restore buffer after determinate is toggl… ([#5156](https://github.com/material-components/material-components-web/issues/5156)) ([09b1598](https://github.com/material-components/material-components-web/commit/09b1598))
* **linear-progress:** Support high contrast mode ([#5190](https://github.com/material-components/material-components-web/issues/5190)) ([d4141c9](https://github.com/material-components/material-components-web/commit/d4141c9))
* **list:** Add #adapter.listItemAtIndexHasClass to prevent user state change to disabled items ([#4922](https://github.com/material-components/material-components-web/issues/4922)) ([b6d213c](https://github.com/material-components/material-components-web/commit/b6d213c))
* **menu:** Vertically center the group icon ([#4862](https://github.com/material-components/material-components-web/issues/4862)) ([c5738ed](https://github.com/material-components/material-components-web/commit/c5738ed))
* **menu-surface:** remove duplicate export from menu-surface ([#5200](https://github.com/material-components/material-components-web/issues/5200)) ([0b120ae](https://github.com/material-components/material-components-web/commit/0b120ae))
* **radio:** Fix touch target margins: 0px => 4px. ([#5096](https://github.com/material-components/material-components-web/issues/5096)) ([a48d06e](https://github.com/material-components/material-components-web/commit/a48d06e))
* **ripple:** Add overflow: hidden; to the bounded ripple mixin ([#5173](https://github.com/material-components/material-components-web/issues/5173)) ([996b091](https://github.com/material-components/material-components-web/commit/996b091))
* **ripple:** Always set even num when initial ripple size is ca… ([#5141](https://github.com/material-components/material-components-web/issues/5141)) ([b26ad23](https://github.com/material-components/material-components-web/commit/b26ad23))
* **ripple:** Remove unnecessary overflow: hidden. ([#5191](https://github.com/material-components/material-components-web/issues/5191)) ([5916d18](https://github.com/material-components/material-components-web/commit/5916d18))
* **tabs:** Fix tab img icon styling. ([#5041](https://github.com/material-components/material-components-web/issues/5041)) ([d0e6cd1](https://github.com/material-components/material-components-web/commit/d0e6cd1))
* **text-field:** Do not trigger shake animation when text field is empty ([#5097](https://github.com/material-components/material-components-web/issues/5097)) ([4913db9](https://github.com/material-components/material-components-web/commit/4913db9))
* **text-field:** Fixes input text alignment on IE11 for densed text field ([#5136](https://github.com/material-components/material-components-web/issues/5136)) ([892dd4e](https://github.com/material-components/material-components-web/commit/892dd4e))
* **text-field:** Fixes input text alignment on IE11 for densed… ([#5147](https://github.com/material-components/material-components-web/issues/5147)) ([c8f7693](https://github.com/material-components/material-components-web/commit/c8f7693))
* **text-field:** Updated shape mixins to set density scale ([#5207](https://github.com/material-components/material-components-web/issues/5207)) ([719b57e](https://github.com/material-components/material-components-web/commit/719b57e))
* **touch-target:** Add class to touch target wrapper. ([#5174](https://github.com/material-components/material-components-web/issues/5174)) ([e7799b8](https://github.com/material-components/material-components-web/commit/e7799b8))
* **touch-target:** Add missing dependency - touch target to com… ([#5098](https://github.com/material-components/material-components-web/issues/5098)) ([9306bd0](https://github.com/material-components/material-components-web/commit/9306bd0))


### Code Refactoring

* **button:** Add ripple target as an inner element. ([#4890](https://github.com/material-components/material-components-web/issues/4890)) ([dffefe6](https://github.com/material-components/material-components-web/commit/dffefe6))
* **mdc-fab:** Move Ripple to inner Element. ([#4997](https://github.com/material-components/material-components-web/issues/4997)) ([85b33b5](https://github.com/material-components/material-components-web/commit/85b33b5))
* **select:** Refactor select ([#5113](https://github.com/material-components/material-components-web/issues/5113)) ([db7560e](https://github.com/material-components/material-components-web/commit/db7560e))
* **slider:** Functional slider tick visuals with css background ([#4756](https://github.com/material-components/material-components-web/issues/4756)) ([8f851d9](https://github.com/material-components/material-components-web/commit/8f851d9))


### Features

* **button:** Add support for increased touch target to button. ([#4948](https://github.com/material-components/material-components-web/issues/4948)) ([1d7a2e6](https://github.com/material-components/material-components-web/commit/1d7a2e6))
* **checkbox:** Add disabled state color mixins ([#5167](https://github.com/material-components/material-components-web/issues/5167)) ([01628ef](https://github.com/material-components/material-components-web/commit/01628ef))
* **checkbox:** Add support for 48px touch target ([#5025](https://github.com/material-components/material-components-web/issues/5025)) ([b5685a8](https://github.com/material-components/material-components-web/commit/b5685a8))
* **checkbox:** Move ripple to child node ([#4981](https://github.com/material-components/material-components-web/issues/4981)) ([9712b24](https://github.com/material-components/material-components-web/commit/9712b24))
* **chip:** Add density mixin to chip. ([#5109](https://github.com/material-components/material-components-web/issues/5109)) ([bdf3430](https://github.com/material-components/material-components-web/commit/bdf3430))
* **chips:** Add keyboard navigation ([#4844](https://github.com/material-components/material-components-web/issues/4844)) ([42065fe](https://github.com/material-components/material-components-web/commit/42065fe)), closes [#2259](https://github.com/material-components/material-components-web/issues/2259)
* **chips:** Add setSelectedFromChipset method ([#4872](https://github.com/material-components/material-components-web/issues/4872)) ([283bd55](https://github.com/material-components/material-components-web/commit/283bd55))
* **chips:** Add support for increased touch target to chips. ([#4970](https://github.com/material-components/material-components-web/issues/4970)) ([6aa109d](https://github.com/material-components/material-components-web/commit/6aa109d))
* **chips:** Use index for all chip operations ([#4869](https://github.com/material-components/material-components-web/issues/4869)) ([07078bb](https://github.com/material-components/material-components-web/commit/07078bb))
* **density:** Add density subsystem to components ([#5059](https://github.com/material-components/material-components-web/issues/5059)) ([73a5e4c](https://github.com/material-components/material-components-web/commit/73a5e4c))
* **dialog:** Add dialog mixin for dialogs with increased touch target buttons. ([#5024](https://github.com/material-components/material-components-web/issues/5024)) ([2ef1ddd](https://github.com/material-components/material-components-web/commit/2ef1ddd))
* **icon-button:** Add density mixin to icon button ([#5122](https://github.com/material-components/material-components-web/issues/5122)) ([37d6458](https://github.com/material-components/material-components-web/commit/37d6458))
* **list:** Add density mixin to list ([#5069](https://github.com/material-components/material-components-web/issues/5069)) ([5132f89](https://github.com/material-components/material-components-web/commit/5132f89))
* **list:** Add mixin for disabled text opacity ([#4861](https://github.com/material-components/material-components-web/issues/4861)) ([d68f8a7](https://github.com/material-components/material-components-web/commit/d68f8a7))
* **radio:** Add density mixin to radio ([#5118](https://github.com/material-components/material-components-web/issues/5118)) ([199534d](https://github.com/material-components/material-components-web/commit/199534d))
* **radio:** Add disabled state color mixins ([#5168](https://github.com/material-components/material-components-web/issues/5168)) ([b5c6d66](https://github.com/material-components/material-components-web/commit/b5c6d66))
* **radio:** Add support for 48px touch target ([#5032](https://github.com/material-components/material-components-web/issues/5032)) ([87b0a4c](https://github.com/material-components/material-components-web/commit/87b0a4c))
* **radio:** Move ripple to child element ([#4983](https://github.com/material-components/material-components-web/issues/4983)) ([100ab37](https://github.com/material-components/material-components-web/commit/100ab37))
* **ripple:** Add support for ripple target to mixins. ([#4880](https://github.com/material-components/material-components-web/issues/4880)) ([08dbe69](https://github.com/material-components/material-components-web/commit/08dbe69))
* **snackbar:** Add option for indefinite timeout ([#4998](https://github.com/material-components/material-components-web/issues/4998)) ([4f11851](https://github.com/material-components/material-components-web/commit/4f11851))
* **switch:** Add density support for switch component. ([#5124](https://github.com/material-components/material-components-web/issues/5124)) ([2c793b4](https://github.com/material-components/material-components-web/commit/2c793b4)), closes [#5104](https://github.com/material-components/material-components-web/issues/5104)
* **switch:** add ripple opacity customization mixins ([#5126](https://github.com/material-components/material-components-web/issues/5126)) ([8c0273f](https://github.com/material-components/material-components-web/commit/8c0273f))
* **tab:** Add text transform mixin ([#5144](https://github.com/material-components/material-components-web/issues/5144)) ([22d7ad2](https://github.com/material-components/material-components-web/commit/22d7ad2))
* **tab-bar:** Add a mixin to set scroller animation ([#5172](https://github.com/material-components/material-components-web/issues/5172)) ([d7c938a](https://github.com/material-components/material-components-web/commit/d7c938a))
* **tab-bar:** Add density mixin to tab-bar ([#5070](https://github.com/material-components/material-components-web/issues/5070)) ([45dc002](https://github.com/material-components/material-components-web/commit/45dc002))
* **tab-scroller:** Add incrementScrollImmediate to bypass animation ([#5184](https://github.com/material-components/material-components-web/issues/5184)) ([2b878b3](https://github.com/material-components/material-components-web/commit/2b878b3)), closes [#5123](https://github.com/material-components/material-components-web/issues/5123)
* **tab-scroller:** Mixin for scroll transition ([#5154](https://github.com/material-components/material-components-web/issues/5154)) ([efda83d](https://github.com/material-components/material-components-web/commit/efda83d))
* **text-field:** Add density mixin to text field variants ([#5066](https://github.com/material-components/material-components-web/issues/5066)) ([a12101d](https://github.com/material-components/material-components-web/commit/a12101d))
* **text-field:** Center align inner elements for dynamic height ([#4990](https://github.com/material-components/material-components-web/issues/4990)) ([4d94b22](https://github.com/material-components/material-components-web/commit/4d94b22))
* **touch-target:** Add touch target mixins. ([#4940](https://github.com/material-components/material-components-web/issues/4940)) ([b2e0fea](https://github.com/material-components/material-components-web/commit/b2e0fea))


### BREAKING CHANGES

* **checkbox:** `mdc-checkbox-ink-color` mixin now only applies to enabled checkboxes
* **chips:** Chips markup, adapters, foundations, and events have changed.
* **select:** In MDCMenu and MDCMenuSurface, `hoistMenuToBody` adapter method removed.  In MDCSelect, HTML structure changed: the select anchor is now wrapped in a parent element, and the anchor's sibling is the select menu. Support for native select removed. Support added for select with no label. MDCSelectAdapter methods removed: `getValue`, `setValue`, `isMenuOpen`, `setSelectedIndex`, `checkValidity`, `setValid`, `toggleClassAtIndex`. MDCSelectAdapter methods added: `hasLabel`, `getSelectedMenuItem`, `setSelectedText`, `isSelectedTextFocused`, `get/setSelectedTextAttr`, `getAnchorElement`, `setMenuAnchorElement`, `setMenuAnchorCorner`, `setMenuWrapFocus`, `set/removeAttributeAtIndex`, `focusMenuItemAtIndex`, `getMenuItemValues`, `getMenuItemCount`, `getMenuItemCount`, `getMenuItemAttr`, `getMenuItemTextAtIndex`, `add/removeClassAtIndex`. MDCSelectFoundation `setValue` method removed; `getDisabled`, `handleMenuItemAction`, `getSelectedIndex`, `get/setRequired`, `init` added.
* **radio:** In Checkbox, Renamed sass variables `$mdc-radio-touch-area` => `$mdc-radio-ripple-size` & `$mdc-radio-ui-size` => `$mdc-radio-icon-size` to be consistent with checkbox. Also, removed `$mdc-radio-ui-pct` sass variable.
* **switch:** Renames switch variables $mdc-switch-tap-target-size => $mdc-switch-ripple-size, removes $mdc-switch-tap-target-initial-position and $mdc-switch-native-control-width.
* **list:** New adapter method listItemAtIndexHasClass
* **list:** Renamed mixin `mdc-list-item-shape-radius()` => `mdc-list-single-line-shape-radius()`
* **linear-progress:** MDCLinearProgressAdapter adapter has new `forceLayout` method
* **text-field:** Removed sass variable in notched outline - `$mdc-notched-outline-transition-duration`.
* **mdc-fab:** This changes the structure of the FAB element by moving the ripple from the outer element to an inner mdc-fab__ripple element.

  OLD

  ```html
  <button class="mdc-fab" aria-label="Favorite">
    <span class="mdc-fab__icon material-icons">favorite</span>
  </button>
  ```

  NEW

  ```html
  <button class="mdc-fab" aria-label="Favorite">
    <div class="mdc-fab__ripple"></div>
    <span class="mdc-fab__icon material-icons">favorite</span>
  </button>
  ```

* **radio:** Ripple has been moved to a child element. See readme for updates.
* **slider:** remove adapter methods `appendTrackMarkers`, `removeTrackMarkers `, `setLastTrackMarkersStyleProperty `, and add adapter method `setTrackMarkers`.
* **button:** This changes the structure of the button element by moving the ripple from the outer <button> element to an inner `mdc-button__ripple` element.

  OLD

  ```html
  <button class="mdc-button">
    <span class="mdc-button__label">Hello World</span>
  </button>
  ```

  NEW

  ```html
  <button class="mdc-button">
    <div class="mdc-button__ripple"></div>
    <span class="mdc-button__label">Hello World</span>
  </button>
  ```
* **chips:** MDCChipSetAdapter#removeChip has been replaced with MDCChipSetAdapter#removeChipAtIndex. MDCChipSetAdapter#setSelected has been replaced with MDCChipSetAdapter#selectChipAtIndex
* **density:** Renamed sass mixins & variables in MDC Data Table - `mdc-data-table-header-row-height` => `mdc-data-table-header-cell-height` & `mdc-data-table-row-height` => `mdc-data-table-cell-height`. Also removed `mdc-button--dense` variant, use button's density mixin instead.

**Note: For older changes, see the [changelog archive](CHANGELOG_ARCHIVE.md).**
