import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `
    <style>
    @font-face {
        font-family: TrirongLight;
        src: url('../fonts/trirong/Trirong-Light.ttf');
        /* src: url('../fonts/CSChatThaiUI.eot');
        src: url('../fonts/CSChatThaiUI.eot?#iefix') format('eot'),
            url('../fonts/CSChatThaiUI.woff') format('woff'),
            url('../fonts/CSChatThaiUI.ttf') format('truetype'),
            url('../fonts/CSChatThaiUI.svg') format('svg'); */
    }

    @font-face {
        font-family: TrirongRegular;
        src: url('../fonts/trirong/Trirong-Regular.ttf');
    }

    @font-face {
        font-family: TrirongMedium;
        src: url('../fonts/trirong/Trirong-Medium.ttf');
    }
    </style>`;

document.head.appendChild($_documentContainer.content);
