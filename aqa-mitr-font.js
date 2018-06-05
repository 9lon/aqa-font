/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `
<style>
@font-face {
    font-family: MitrBold;
    src: url('/node_modules/@nylon/aqa-font/fonts/mitr/Mitr-Bold.ttf');
}
@font-face {
    font-family: MitrExtraLight;
    src: url('/node_modules/@nylon/aqa-font/fonts/mitr/Mitr-ExtraLight.ttf');
}
@font-face {
    font-family: MitrLight;
    src: url('/node_modules/@nylon/aqa-font/fonts/mitr/Mitr-Light.ttf');
}

@font-face {
    font-family: MitrMedium;
    src: url('/node_modules/@nylon/aqa-font/fonts/mitr/Mitr-Medium.ttf');
}

@font-face {
    font-family: MitrRegular;
    src: url('/node_modules/@nylon/aqa-font/fonts/mitr/Mitr-Regular.ttf');
}
@font-face {
    font-family: MitrSemiBold;
    src: url('/node_modules/@nylon/aqa-font/fonts/mitr/Mitr-SemiBold.ttf');
}
</style>`;

document.head.appendChild($_documentContainer.content);
