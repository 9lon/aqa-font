import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `
    <style>
    @font-face {
        font-family: TrirongLight;
        src: url('/node_modules/@9lon/aqa-font/fonts/trirong/Trirong-Light.ttf');
        /* src: url('/node_modules/@9lon/aqa-font/fonts/CSChatThaiUI.eot');
        src: url('/node_modules/@9lon/aqa-font/fonts/CSChatThaiUI.eot?#iefix') format('eot'),
            url('/node_modules/@9lon/aqa-font/fonts/CSChatThaiUI.woff') format('woff'),
            url('/node_modules/@9lon/aqa-font/fonts/CSChatThaiUI.ttf') format('truetype'),
            url('/node_modules/@9lon/aqa-font/fonts/CSChatThaiUI.svg') format('svg'); */
    }

    @font-face {
        font-family: TrirongRegular;
        src: url('/node_modules/@9lon/aqa-font/fonts/trirong/Trirong-Regular.ttf');
    }

    @font-face {
        font-family: TrirongMedium;
        src: url('/node_modules/@9lon/aqa-font/fonts/trirong/Trirong-Medium.ttf');
    }
    </style>`;

document.head.appendChild($_documentContainer.content);
